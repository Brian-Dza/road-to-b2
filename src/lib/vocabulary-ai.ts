import { requestGeminiJsonPayload } from "@/lib/gemini-client.ts";
import {
  type GeminiVocabularySuggestion,
  GeminiVocabularySuggestionSchema,
} from "@/schemas/vocabulary.schema.ts";

export function buildVocabularyAiPromptForClipboard(rawTerm: string, linkedDay?: number): string {
  const cleanTerm = rawTerm.trim() || "[escribe aquí el término o expresión en inglés]";
  const dayLine = linkedDay
    ? `- Contexto de estudio: Día ${linkedDay} del Bootcamp iTEP Academic-Plus (meta B2 >= 3.5).`
    : "- Contexto de estudio: Preparación académica iTEP Academic-Plus (escala MCER A1–C2, meta B2).";

  return [
    "Actúa como lexicógrafo académico experto en iTEP Academic-Plus para hispanohablantes (Vocabulario Inteligente · Byme Lenguage).",
    dayLine,
    `- Término o expresión a analizar: "${cleanTerm}"`,
    "",
    "Genera una ficha léxica concisa y de alta retención con:",
    "1. Transcripción fonética IPA estándar.",
    "2. Nivel MCER exacto (A1, A2, B1, B2, C1 o C2) y categoría gramatical (noun, verb, adjective, adverb, connector o collocation).",
    "3. Significado preciso en español pedagógico indicando matiz de registro universitario/profesional.",
    "4. Oración académica modelo en inglés (15 a 28 palabras, contexto universitario) + su traducción natural al español.",
    "5. Puente B1 -> B2 o alerta de falso amigo frecuente para hispanohablantes.",
    "6. 3 colocaciones académicas frecuentes listas para usar en iTEP Writing o Speaking.",
  ].join("\n");
}

function buildGeminiVocabJsonInstruction(rawTerm: string, linkedDay?: number): string {
  const dayHint = linkedDay
    ? ` (studied during Day ${linkedDay} of the 15-day iTEP B2 bootcamp)`
    : "";
  return [
    "You are a senior academic lexicographer creating a high-retention flashcard for Spanish-speaking students preparing for the iTEP Academic-Plus exam.",
    `Analyze the English word, phrasal verb, connector, or collocation: """${rawTerm.trim()}"""${dayHint}.`,
    "",
    "Return ONLY a valid JSON object matching this exact schema (Spanish fields in crisp pedagogical Spanish, English examples in authentic university-level English):",
    "{",
    '  "ipa": string (standard IPA phonetic transcription surrounded by slashes, e.g. "/kəˈrɒb.ə.reɪt/"),',
    '  "partOfSpeech": "noun" | "verb" | "adjective" | "adverb" | "connector" | "collocation",',
    '  "cefrLevel": "A1" | "A2" | "B1" | "B2" | "C1" | "C2",',
    '  "meaningEs": string (precise Spanish definition + academic register note),',
    '  "exampleEn": string (one realistic university/iTEP academic sentence of 14-26 words using the term naturally),',
    '  "exampleTranslationEs": string (natural Spanish translation of exampleEn),',
    '  "b1SynonymOrTrap": string (in Spanish: which basic A2/B1 word this upgrades OR which Spanish false friend to avoid),',
    '  "collocations": string[] (2 to 4 natural English academic collocations using the term)',
    "}",
  ].join("\n");
}

export async function generateVocabularyCardWithGemini(
  apiKey: string,
  rawTerm: string,
  linkedDay?: number,
): Promise<GeminiVocabularySuggestion> {
  const cleanTerm = rawTerm.trim();
  if (cleanTerm.length < 2 || cleanTerm.length > 120) {
    throw new Error(
      "Escribe primero una palabra, conector o colocación en inglés (entre 2 y 120 caracteres).",
    );
  }

  const parsedCandidateJson = await requestGeminiJsonPayload({
    apiKey,
    prompt: buildGeminiVocabJsonInstruction(cleanTerm, linkedDay),
    quotaHintActionEs: "Copiar prompt IA",
  });

  const validated = GeminiVocabularySuggestionSchema.safeParse(parsedCandidateJson);
  if (!validated.success) {
    throw new Error(
      "La ficha sugerida por Gemini no superó la validación estricta del esquema Byme Lenguage.",
    );
  }

  return validated.data;
}
