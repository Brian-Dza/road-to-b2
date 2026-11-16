import { type ChoiceId, ChoiceIdSchema } from "@/schemas/curriculum.schema.ts";

export type GrammarSentenceToken =
  | { readonly type: "text"; readonly value: string; readonly startOffset: number }
  | {
      readonly type: "segment";
      readonly choiceId: ChoiceId;
      readonly value: string;
      readonly startOffset: number;
    };

export function parseGrammarMarkedSegments(sentence: string): GrammarSentenceToken[] {
  const tokens: GrammarSentenceToken[] = [];
  const pattern = /\[([ABCD])\]\{([^}]+)\}/g;
  let lastIndex = 0;

  for (const match of sentence.matchAll(pattern)) {
    const matchIndex = match.index ?? 0;
    if (matchIndex > lastIndex) {
      tokens.push({
        type: "text",
        value: sentence.slice(lastIndex, matchIndex),
        startOffset: lastIndex,
      });
    }

    const rawId = match[1];
    const segmentText = match[2];
    const parsedChoice = ChoiceIdSchema.safeParse(rawId);
    if (parsedChoice.success && segmentText !== undefined) {
      tokens.push({
        type: "segment",
        choiceId: parsedChoice.data,
        value: segmentText,
        startOffset: matchIndex,
      });
    } else {
      tokens.push({
        type: "text",
        value: match[0],
        startOffset: matchIndex,
      });
    }

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < sentence.length) {
    tokens.push({
      type: "text",
      value: sentence.slice(lastIndex),
      startOffset: lastIndex,
    });
  }

  return tokens;
}

export type ReadingParagraphToken =
  | { readonly type: "text"; readonly value: string; readonly startOffset: number }
  | { readonly type: "marker"; readonly choiceId: ChoiceId; readonly startOffset: number };

export function parseReadingInsertionTokens(paragraph: string): ReadingParagraphToken[] {
  const tokens: ReadingParagraphToken[] = [];
  const pattern = /\[([ABCD])\]/g;
  let lastIndex = 0;

  for (const match of paragraph.matchAll(pattern)) {
    const matchIndex = match.index ?? 0;
    if (matchIndex > lastIndex) {
      tokens.push({
        type: "text",
        value: paragraph.slice(lastIndex, matchIndex),
        startOffset: lastIndex,
      });
    }

    const parsedChoice = ChoiceIdSchema.safeParse(match[1]);
    if (parsedChoice.success) {
      tokens.push({
        type: "marker",
        choiceId: parsedChoice.data,
        startOffset: matchIndex,
      });
    } else {
      tokens.push({
        type: "text",
        value: match[0],
        startOffset: matchIndex,
      });
    }

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < paragraph.length) {
    tokens.push({
      type: "text",
      value: paragraph.slice(lastIndex),
      startOffset: lastIndex,
    });
  }

  return tokens;
}

export function formatSecondsMmSs(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(clamped / 60);
  const seconds = clamped % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
