import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { CloudSyncState } from "@/context/auth-context.tsx";
import { computeNextSrsRecord } from "@/lib/srs.ts";
import {
  buildScopedProgressStorageKey,
  clearLegacyAnonymousProgress,
  loadLegacyAnonymousProgress,
  loadScopedUserProgressCache,
  type ProgressSelectorsSummary,
  sanitizeProgressForPersistence,
  saveScopedUserProgressCache,
  summarizeProgressState,
} from "@/lib/storage.ts";
import { supabase } from "@/lib/supabase.ts";
import type { FoundationModuleId, ItepSkill, StudyStatus } from "@/schemas/curriculum.schema.ts";
import {
  createInitialUserProgress,
  type DiagnosticAttempt,
  type MockAttempt,
  type SpeakingSelfScore,
  type UserProgress,
  UserProgressSchema,
  type WritingDraft,
} from "@/schemas/progress.schema.ts";
import {
  type CustomVocabularyItem,
  CustomVocabularyItemSchema,
  type SrsRating,
  type VocabularySrsRecord,
} from "@/schemas/vocabulary.schema.ts";

const ALL_SKILLS: readonly ItepSkill[] = ["grammar", "listening", "reading", "writing", "speaking"];
const MAX_BACKUP_JSON_BYTES = 2 * 1024 * 1024;

export type BackupImportResult =
  | { readonly ok: true; readonly messageEs: string }
  | { readonly ok: false; readonly errorEs: string };

export interface ProgressProviderProps {
  readonly userId: string;
  readonly initialProgress: UserProgress;
  readonly hasUnsyncedLocalChangesOnBoot: boolean;
  readonly recoveredFromCorruption: boolean;
  readonly decryptedGeminiApiKey: string | null;
  readonly onCloudSyncStateChange: (state: CloudSyncState) => void;
  readonly children: ReactNode;
}

interface ProgressContextValue {
  readonly progress: UserProgress;
  readonly summary: ProgressSelectorsSummary;
  readonly recoveredFromCorruption: boolean;
  readonly hasLegacyBrowserProgress: boolean;
  readonly getDayStatus: (dayNumber: number) => StudyStatus;
  readonly setDayStatus: (dayNumber: number, status: StudyStatus) => void;
  readonly getSectionStatus: (dayNumber: number, skill: ItepSkill) => StudyStatus;
  readonly setSectionStatus: (dayNumber: number, skill: ItepSkill, status: StudyStatus) => void;
  readonly getFoundationStatus: (moduleId: FoundationModuleId) => StudyStatus;
  readonly setFoundationStatus: (moduleId: FoundationModuleId, status: StudyStatus) => void;
  readonly saveDiagnosticAttempt: (attempt: DiagnosticAttempt) => void;
  readonly isAudioPlayed: (trackId: string) => boolean;
  readonly markAudioPlayed: (trackId: string) => void;
  readonly saveWritingDraft: (draft: WritingDraft) => void;
  readonly saveSpeakingSelfScore: (score: SpeakingSelfScore) => void;
  readonly recordMockAttempt: (attempt: MockAttempt) => void;
  readonly getVocabularySrsRecord: (itemId: string) => VocabularySrsRecord | undefined;
  readonly recordVocabularySrsReview: (itemId: string, rating: SrsRating, nowMs?: number) => void;
  readonly addCustomVocabularyItem: (item: CustomVocabularyItem) => void;
  readonly updateCustomVocabularyItem: (item: CustomVocabularyItem) => void;
  readonly deleteCustomVocabularyItem: (itemId: string) => void;
  readonly exportBackupJson: () => void;
  readonly importBackupJsonText: (rawJson: string) => BackupImportResult;
  readonly importLegacyBrowserProgress: () => BackupImportResult;
  readonly resetAllProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function buildSectionKey(dayNumber: number, skill: ItepSkill): string {
  return `${dayNumber}:${skill}`;
}

export function ProgressProvider({
  userId,
  initialProgress,
  hasUnsyncedLocalChangesOnBoot,
  recoveredFromCorruption,
  decryptedGeminiApiKey,
  onCloudSyncStateChange,
  children,
}: ProgressProviderProps) {
  const [baseProgress, setBaseProgress] = useState<UserProgress>(() =>
    sanitizeProgressForPersistence(initialProgress),
  );
  const [hasLegacyBrowserProgress, setHasLegacyBrowserProgress] = useState<boolean>(
    () => loadLegacyAnonymousProgress() !== null,
  );

  const lastSyncedAtRef = useRef<number>(hasUnsyncedLocalChangesOnBoot ? 0 : Date.now());
  const pendingCloudSyncRef = useRef<{
    readonly payload: UserProgress;
    readonly updatedAtMs: number;
  } | null>(null);
  const syncInFlightRef = useRef<boolean>(false);
  const isMountedRef = useRef<boolean>(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const flushCloudQueue = useCallback(async () => {
    if (syncInFlightRef.current) {
      return;
    }
    syncInFlightRef.current = true;
    if (isMountedRef.current) {
      onCloudSyncStateChange("syncing");
    }

    try {
      while (pendingCloudSyncRef.current !== null) {
        const currentBatch = pendingCloudSyncRef.current;
        pendingCloudSyncRef.current = null;

        const { error } = await supabase.from("user_study_progress").upsert(
          {
            user_id: userId,
            schema_version: 1,
            progress_payload: currentBatch.payload,
          },
          { onConflict: "user_id" },
        );

        if (error) {
          if (isMountedRef.current) {
            onCloudSyncStateChange("offline");
          }
          break;
        }

        lastSyncedAtRef.current = currentBatch.updatedAtMs;
        if (pendingCloudSyncRef.current === null) {
          saveScopedUserProgressCache(userId, currentBatch.payload, {
            updatedAtMs: currentBatch.updatedAtMs,
            syncedAtMs: currentBatch.updatedAtMs,
          });
          if (isMountedRef.current) {
            onCloudSyncStateChange("synced");
          }
        }
      }
    } finally {
      syncInFlightRef.current = false;
    }
  }, [onCloudSyncStateChange, userId]);

  const enqueueCloudPersistence = useCallback(
    (sanitizedNext: UserProgress, updatedAtMs: number) => {
      saveScopedUserProgressCache(userId, sanitizedNext, {
        updatedAtMs,
        syncedAtMs: lastSyncedAtRef.current,
      });
      pendingCloudSyncRef.current = { payload: sanitizedNext, updatedAtMs };
      void flushCloudQueue();
    },
    [flushCloudQueue, userId],
  );

  useEffect(() => {
    if (hasUnsyncedLocalChangesOnBoot) {
      enqueueCloudPersistence(sanitizeProgressForPersistence(initialProgress), Date.now());
    }
  }, [enqueueCloudPersistence, hasUnsyncedLocalChangesOnBoot, initialProgress]);

  const commitUpdate = useCallback(
    (updater: (prev: UserProgress) => UserProgress) => {
      setBaseProgress((prev) => {
        const sanitizedNext = sanitizeProgressForPersistence(updater(prev));
        const nowMs = Date.now();
        enqueueCloudPersistence(sanitizedNext, nowMs);
        return sanitizedNext;
      });
    },
    [enqueueCloudPersistence],
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const scopedKey = buildScopedProgressStorageKey(userId);
    const handleStorage = (event: StorageEvent) => {
      if (event.key === scopedKey) {
        const reloaded = loadScopedUserProgressCache(userId);
        setBaseProgress(reloaded.progress);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [userId]);

  const progress: UserProgress = useMemo(
    () => ({
      ...baseProgress,
      settings:
        decryptedGeminiApiKey && decryptedGeminiApiKey.trim().length > 0
          ? { geminiApiKey: decryptedGeminiApiKey.trim() }
          : {},
    }),
    [baseProgress, decryptedGeminiApiKey],
  );

  const summary = useMemo(() => summarizeProgressState(progress), [progress]);

  const getDayStatus = useCallback(
    (dayNumber: number): StudyStatus => baseProgress.dayStatuses[String(dayNumber)] ?? "pending",
    [baseProgress.dayStatuses],
  );

  const setDayStatus = useCallback(
    (dayNumber: number, status: StudyStatus) => {
      commitUpdate((prev) => ({
        ...prev,
        dayStatuses: {
          ...prev.dayStatuses,
          [String(dayNumber)]: status,
        },
      }));
    },
    [commitUpdate],
  );

  const getSectionStatus = useCallback(
    (dayNumber: number, skill: ItepSkill): StudyStatus =>
      baseProgress.sectionStatuses[buildSectionKey(dayNumber, skill)] ?? "pending",
    [baseProgress.sectionStatuses],
  );

  const setSectionStatus = useCallback(
    (dayNumber: number, skill: ItepSkill, status: StudyStatus) => {
      commitUpdate((prev) => {
        const nextSections = {
          ...prev.sectionStatuses,
          [buildSectionKey(dayNumber, skill)]: status,
        };
        const allFiveMastered = ALL_SKILLS.every(
          (sk) => nextSections[buildSectionKey(dayNumber, sk)] === "mastered",
        );
        const anyStarted = ALL_SKILLS.some((sk) => {
          const st = nextSections[buildSectionKey(dayNumber, sk)];
          return st === "in_review" || st === "mastered";
        });

        const currentDayStatus = prev.dayStatuses[String(dayNumber)] ?? "pending";
        let nextDayStatus: StudyStatus = currentDayStatus;
        if (allFiveMastered) {
          nextDayStatus = "mastered";
        } else if (anyStarted && currentDayStatus === "pending") {
          nextDayStatus = "in_review";
        }

        return {
          ...prev,
          sectionStatuses: nextSections,
          dayStatuses: {
            ...prev.dayStatuses,
            [String(dayNumber)]: nextDayStatus,
          },
        };
      });
    },
    [commitUpdate],
  );

  const getFoundationStatus = useCallback(
    (moduleId: FoundationModuleId): StudyStatus =>
      baseProgress.foundationStatuses[moduleId] ?? "pending",
    [baseProgress.foundationStatuses],
  );

  const setFoundationStatus = useCallback(
    (moduleId: FoundationModuleId, status: StudyStatus) => {
      commitUpdate((prev) => ({
        ...prev,
        foundationStatuses: {
          ...prev.foundationStatuses,
          [moduleId]: status,
        },
      }));
    },
    [commitUpdate],
  );

  const saveDiagnosticAttempt = useCallback(
    (attempt: DiagnosticAttempt) => {
      commitUpdate((prev) => ({
        ...prev,
        diagnosticAttempt: attempt,
      }));
    },
    [commitUpdate],
  );

  const playedAudioSet = useMemo(
    () => new Set(baseProgress.playedAudioIds),
    [baseProgress.playedAudioIds],
  );

  const isAudioPlayed = useCallback(
    (trackId: string): boolean => playedAudioSet.has(trackId),
    [playedAudioSet],
  );

  const markAudioPlayed = useCallback(
    (trackId: string) => {
      const trimmed = trackId.trim();
      if (!trimmed) {
        return;
      }
      commitUpdate((prev) => {
        if (prev.playedAudioIds.includes(trimmed)) {
          return prev;
        }
        return {
          ...prev,
          playedAudioIds: [...prev.playedAudioIds, trimmed],
        };
      });
    },
    [commitUpdate],
  );

  const saveWritingDraft = useCallback(
    (draft: WritingDraft) => {
      commitUpdate((prev) => ({
        ...prev,
        writingDrafts: {
          ...prev.writingDrafts,
          [draft.taskId]: draft,
        },
      }));
    },
    [commitUpdate],
  );

  const saveSpeakingSelfScore = useCallback(
    (score: SpeakingSelfScore) => {
      commitUpdate((prev) => ({
        ...prev,
        speakingSelfScores: {
          ...prev.speakingSelfScores,
          [score.taskId]: score,
        },
      }));
    },
    [commitUpdate],
  );

  const recordMockAttempt = useCallback(
    (attempt: MockAttempt) => {
      commitUpdate((prev) => ({
        ...prev,
        mockAttempts: [...prev.mockAttempts, attempt],
      }));
    },
    [commitUpdate],
  );

  const getVocabularySrsRecord = useCallback(
    (itemId: string): VocabularySrsRecord | undefined => baseProgress.vocabulary.srsRecords[itemId],
    [baseProgress.vocabulary.srsRecords],
  );

  const recordVocabularySrsReview = useCallback(
    (itemId: string, rating: SrsRating, nowMs?: number) => {
      commitUpdate((prev) => {
        const currentRec = prev.vocabulary.srsRecords[itemId];
        const nextRec = computeNextSrsRecord(currentRec, itemId, rating, nowMs);
        return {
          ...prev,
          vocabulary: {
            ...prev.vocabulary,
            srsRecords: {
              ...prev.vocabulary.srsRecords,
              [itemId]: nextRec,
            },
          },
        };
      });
    },
    [commitUpdate],
  );

  const addCustomVocabularyItem = useCallback(
    (item: CustomVocabularyItem) => {
      const validatedItem = CustomVocabularyItemSchema.parse(item);
      commitUpdate((prev) => ({
        ...prev,
        vocabulary: {
          ...prev.vocabulary,
          customItems: [validatedItem, ...prev.vocabulary.customItems],
        },
      }));
    },
    [commitUpdate],
  );

  const updateCustomVocabularyItem = useCallback(
    (item: CustomVocabularyItem) => {
      const validatedItem = CustomVocabularyItemSchema.parse(item);
      commitUpdate((prev) => ({
        ...prev,
        vocabulary: {
          ...prev.vocabulary,
          customItems: prev.vocabulary.customItems.map((existing) =>
            existing.id === validatedItem.id ? validatedItem : existing,
          ),
        },
      }));
    },
    [commitUpdate],
  );

  const deleteCustomVocabularyItem = useCallback(
    (itemId: string) => {
      commitUpdate((prev) => {
        const nextRecords = { ...prev.vocabulary.srsRecords };
        delete nextRecords[itemId];
        return {
          ...prev,
          vocabulary: {
            customItems: prev.vocabulary.customItems.filter((item) => item.id !== itemId),
            srsRecords: nextRecords,
          },
        };
      });
    },
    [commitUpdate],
  );

  const exportBackupJson = useCallback(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const sanitizedForExport: UserProgress = sanitizeProgressForPersistence(baseProgress);
    const serialized = `${JSON.stringify(sanitizedForExport, null, 2)}\n`;
    const blob = new Blob([serialized], { type: "application/json;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = "road-to-b2-backup.json";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 1000);
  }, [baseProgress]);

  const importBackupJsonText = useCallback(
    (rawJson: string): BackupImportResult => {
      if (rawJson.length > MAX_BACKUP_JSON_BYTES) {
        return {
          ok: false,
          errorEs:
            "El archivo supera el límite máximo permitido de 2 MB para respaldos JSON de Road to B2.",
        };
      }

      let parsed: unknown;
      try {
        parsed = JSON.parse(rawJson);
      } catch {
        return {
          ok: false,
          errorEs:
            "El archivo seleccionado no contiene JSON válido. Asegúrate de subir un respaldo exportado desde Road to B2.",
        };
      }

      const validated = UserProgressSchema.safeParse(parsed);
      if (!validated.success) {
        const firstIssue = validated.error.issues[0];
        const pathHint =
          firstIssue && firstIssue.path.length > 0 ? ` (${firstIssue.path.join(".")})` : "";
        return {
          ok: false,
          errorEs: `El archivo JSON no coincide con el esquema oficial de progreso Road to B2 v1${pathHint}.`,
        };
      }

      const sanitized = sanitizeProgressForPersistence(validated.data);
      setBaseProgress(sanitized);
      enqueueCloudPersistence(sanitized, Date.now());
      return {
        ok: true,
        messageEs: "Respaldo restaurado correctamente. Todo tu progreso ha sido sincronizado.",
      };
    },
    [enqueueCloudPersistence],
  );

  const importLegacyBrowserProgress = useCallback((): BackupImportResult => {
    const legacy = loadLegacyAnonymousProgress();
    if (!legacy) {
      setHasLegacyBrowserProgress(false);
      return {
        ok: false,
        errorEs: "No se encontró progreso previo sin cuenta en este navegador.",
      };
    }

    setBaseProgress(legacy);
    enqueueCloudPersistence(legacy, Date.now());
    clearLegacyAnonymousProgress();
    setHasLegacyBrowserProgress(false);

    return {
      ok: true,
      messageEs: "Tu progreso local anterior fue vinculado a tu cuenta y sincronizado en la nube.",
    };
  }, [enqueueCloudPersistence]);

  const resetAllProgress = useCallback(() => {
    const fresh = createInitialUserProgress();
    setBaseProgress(fresh);
    enqueueCloudPersistence(fresh, Date.now());
  }, [enqueueCloudPersistence]);

  const contextValue: ProgressContextValue = useMemo(
    () => ({
      progress,
      summary,
      recoveredFromCorruption,
      hasLegacyBrowserProgress,
      getDayStatus,
      setDayStatus,
      getSectionStatus,
      setSectionStatus,
      getFoundationStatus,
      setFoundationStatus,
      saveDiagnosticAttempt,
      isAudioPlayed,
      markAudioPlayed,
      saveWritingDraft,
      saveSpeakingSelfScore,
      recordMockAttempt,
      getVocabularySrsRecord,
      recordVocabularySrsReview,
      addCustomVocabularyItem,
      updateCustomVocabularyItem,
      deleteCustomVocabularyItem,
      exportBackupJson,
      importBackupJsonText,
      importLegacyBrowserProgress,
      resetAllProgress,
    }),
    [
      addCustomVocabularyItem,
      deleteCustomVocabularyItem,
      exportBackupJson,
      getDayStatus,
      getFoundationStatus,
      getSectionStatus,
      getVocabularySrsRecord,
      hasLegacyBrowserProgress,
      importBackupJsonText,
      importLegacyBrowserProgress,
      isAudioPlayed,
      markAudioPlayed,
      progress,
      recordMockAttempt,
      recordVocabularySrsReview,
      recoveredFromCorruption,
      resetAllProgress,
      saveDiagnosticAttempt,
      saveSpeakingSelfScore,
      saveWritingDraft,
      setDayStatus,
      setFoundationStatus,
      setSectionStatus,
      summary,
      updateCustomVocabularyItem,
    ],
  );

  return <ProgressContext.Provider value={contextValue}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be called inside <ProgressProvider>");
  }
  return ctx;
}
