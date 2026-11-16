import { requestGeminiJsonPayload } from "@/lib/gemini-client.ts";
import { parseGeminiEvaluationPayload } from "@/lib/storage.ts";
import type { WritingTaskItem } from "@/schemas/curriculum.schema.ts";
import type { GeminiEvaluation } from "@/schemas/progress.schema.ts";

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (trimmed.length === 0) {
    return 0;
  }
  const matches = trimmed.match(/\S+/g);
  return matches ? matches.length : 0;
}

export function buildWritingAiPrompt(
  task: WritingTaskItem,
  userText: string,
  wordCount: number,
): string {
  const partLabel =
    task.part === "part1_note"
      ? "Part 1 — Nota Académica / Institucional Breve (5 minutos oficiales)"
      : "Part 2 — Ensayo Argumentativo Académico (20 minutos oficiales)";
  const minutesLimit = Math.round(task.timeLimitSeconds / 60);
  const cleanResponse =
    userText.trim().length > 0 ? userText.trim() : "[Respuesta aún vacía — pendiente de redacción]";

  return [
    "Actúa como examinador senior certificado de iTEP Academic-Plus especializado en transición de nivel MCER B1 a B2.",
    "",
    "=== ESPECIFICACIONES OFICIALES DE LA TAREA ===",
    `- Sección: iTEP Academic-Plus Writing (${partLabel})`,
    `- Título: ${task.title}`,
    `- Tiempo límite oficial: ${minutesLimit} minutos (sin corrector ortográfico ni autocompletado)`,
    `- Rango oficial de palabras: ${task.minWords}–${task.maxWords} palabras`,
    `- Conteo real del estudiante: ${wordCount} palabras`,
    "",
    "=== ENUNCIADO EXACTO DEL EXAMEN (PROMPT) ===",
    task.prompt,
    "",
    "=== RESPUESTA DEL ESTUDIANTE (RAW EXAM TEXT) ===",
    cleanResponse,
    "",
    "=== RÚBRICA OFICIAL iTEP ACADEMIC-PLUS (ESCALA 0.0 – 6.0 | META B2 >= 3.5, ZONA SEGURA 3.8–4.4) ===",
    "Evalúa estrictamente bajo estos 5 criterios oficiales:",
    "1. Cumplimiento de la tarea y pertinencia argumentativa (desarrollo directo de todos los puntos del prompt).",
    "2. Organización, cohesión interoracional y progresión lógica entre párrafos.",
    "3. Control gramatical y variedad sintáctica B2 (cláusulas subordinadas, relativas con preposición, participiales, condicionales o inversión sin fragmentos ni concordancias rotas).",
    "4. Precisión léxica universitaria/profesional (evitando vocabulario vago de nivel A2/B1 bajo).",
    "5. Ortografía, puntuación y registro formal escritos sin corrector automático.",
    "",
    "=== FORMATO DE RETROALIMENTACIÓN REQUERIDO (EN ESPAÑOL PEDAGÓGICO) ===",
    "1. Puntaje iTEP estimado (0.0 a 6.0 con un decimal) y nivel MCER equivalente, indicando si supera el umbral B2 (>= 3.5).",
    "2. Fortalezas concretas detectadas en el texto.",
    "3. Auditoría quirúrgica de errores gramaticales, ortográficos y de registro (fragmento original -> corrección exacta -> explicación breve en español).",
    "4. 4 mejoras léxicas y sintácticas de nivel B2 aplicables directamente a las ideas del estudiante.",
    "5. Versión reescrita calibrada a nivel B2 sólido (puntaje 4.0–4.5) respetando el límite de palabras.",
  ].join("\n");
}

function buildGeminiJsonInstruction(task: WritingTaskItem, userText: string): string {
  const wordCount = countWords(userText);
  const partLabel =
    task.part === "part1_note"
      ? "iTEP Writing Part 1 (Short Formal Note, 5 min)"
      : "iTEP Writing Part 2 (Academic Persuasive Essay, 20 min)";

  return [
    "You are an official iTEP Academic-Plus Writing rater.",
    `Evaluate the student's response for ${partLabel}.`,
    `Target word range: ${task.minWords}-${task.maxWords} words. Student word count: ${wordCount} words.`,
    `Exam prompt: """${task.prompt}"""`,
    `Student raw response (written with spellcheck disabled): """${userText.trim()}"""`,
    "",
    "Score strictly on the official iTEP 0.0 to 6.0 scale (where B1 = 2.5-3.4, B2 threshold = 3.5, solid B2 = 3.8-4.4, C1 = 4.5-5.4).",
    "Return ONLY a JSON object matching this exact structure (all explanations and feedback strings MUST be in clear pedagogical Spanish, while English examples remain in English):",
    "{",
    '  "estimatedItepScore": number (0.0 to 6.0, one decimal place),',
    '  "cefrEstimate": string (e.g. "B1 (3.1)" or "B2 sólido (4.0)"),',
    '  "strengthsEs": string[] (2 to 4 concrete strengths in Spanish),',
    '  "grammarCorrections": [',
    '    { "original": string, "corrected": string, "explanationEs": string }',
    "  ],",
    '  "vocabularyUpgradesB2": string[] (3 to 5 B2 lexical/syntactic upgrades in Spanish + English phrasing),',
    '  "overallFeedbackEs": string (concise actionable diagnostic summary in Spanish)',
    "}",
  ].join("\n");
}

export async function evaluateWritingWithGemini(
  apiKey: string,
  task: WritingTaskItem,
  userText: string,
): Promise<GeminiEvaluation> {
  if (countWords(userText) < 10) {
    throw new Error(
      "Escribe al menos 10 palabras en inglés antes de solicitar evaluación diagnóstica con Gemini.",
    );
  }

  const parsedCandidateJson = await requestGeminiJsonPayload({
    apiKey,
    prompt: buildGeminiJsonInstruction(task, userText),
    quotaHintActionEs: "Copiar para evaluar con IA",
  });

  const validatedEvaluation = parseGeminiEvaluationPayload(parsedCandidateJson);
  if (!validatedEvaluation) {
    throw new Error(
      "La evaluación recibida de Gemini no superó la validación estricta del esquema iTEP B2.",
    );
  }

  return validatedEvaluation;
}
