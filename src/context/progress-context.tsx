import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { computeNextSrsRecord } from "@/lib/srs.ts";
import {
  loadUserProgress,
  type ProgressSelectorsSummary,
  type StorageLoadResult,
  saveUserProgress,
  summarizeProgressState,
} from "@/lib/storage.ts";
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

interface ProgressContextValue {
  readonly progress: UserProgress;
  readonly summary: ProgressSelectorsSummary;
  readonly recoveredFromCorruption: boolean;
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
  readonly setGeminiApiKey: (apiKey: string) => void;
  readonly exportBackupJson: () => void;
  readonly importBackupJsonText: (rawJson: string) => BackupImportResult;
  readonly resetAllProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function buildSectionKey(dayNumber: number, skill: ItepSkill): string {
  return `${dayNumber}:${skill}`;
}

export function ProgressProvider({ children }: { readonly children: ReactNode }) {
  const initialLoad: StorageLoadResult = useMemo(() => loadUserProgress(), []);
  const [progress, setProgress] = useState<UserProgress>(initialLoad.progress);
  const [recoveredFromCorruption] = useState<boolean>(initialLoad.recoveredFromCorruption);

  const commitUpdate = useCallback((updater: (prev: UserProgress) => UserProgress) => {
    setProgress((prev) => {
      const next = UserProgressSchema.parse(updater(prev));
      saveUserProgress(next);
      return next;
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "road-to-b2:user-progress:v1") {
        const reloaded = loadUserProgress();
        setProgress(reloaded.progress);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const summary = useMemo(() => summarizeProgressState(progress), [progress]);

  const getDayStatus = useCallback(
    (dayNumber: number): StudyStatus => progress.dayStatuses[String(dayNumber)] ?? "pending",
    [progress.dayStatuses],
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
      progress.sectionStatuses[buildSectionKey(dayNumber, skill)] ?? "pending",
    [progress.sectionStatuses],
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
      progress.foundationStatuses[moduleId] ?? "pending",
    [progress.foundationStatuses],
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

  const playedAudioSet = useMemo(() => new Set(progress.playedAudioIds), [progress.playedAudioIds]);

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
    (itemId: string): VocabularySrsRecord | undefined => progress.vocabulary.srsRecords[itemId],
    [progress.vocabulary.srsRecords],
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

  const setGeminiApiKey = useCallback(
    (apiKey: string) => {
      const trimmed = apiKey.trim();
      commitUpdate((prev) => ({
        ...prev,
        settings: trimmed.length > 0 ? { geminiApiKey: trimmed } : {},
      }));
    },
    [commitUpdate],
  );

  const exportBackupJson = useCallback(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    // Strip credentials from portable backups to avoid leaking personal Gemini API keys in JSON files
    const sanitizedForExport: UserProgress = UserProgressSchema.parse({
      ...progress,
      settings: {},
    });
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
  }, [progress]);

  const importBackupJsonText = useCallback((rawJson: string): BackupImportResult => {
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

    saveUserProgress(validated.data);
    setProgress(validated.data);
    return {
      ok: true,
      messageEs: "Respaldo restaurado correctamente. Todo tu progreso ha sido sincronizado.",
    };
  }, []);

  const resetAllProgress = useCallback(() => {
    const fresh = createInitialUserProgress();
    saveUserProgress(fresh);
    setProgress(fresh);
  }, []);

  const contextValue: ProgressContextValue = useMemo(
    () => ({
      progress,
      summary,
      recoveredFromCorruption,
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
      setGeminiApiKey,
      exportBackupJson,
      importBackupJsonText,
      resetAllProgress,
    }),
    [
      progress,
      summary,
      recoveredFromCorruption,
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
      setGeminiApiKey,
      exportBackupJson,
      importBackupJsonText,
      resetAllProgress,
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
