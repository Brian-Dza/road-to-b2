---
name: itep-cefr-curriculum
description: >-
  Reglas pedagógicas y especificaciones oficiales para diseñar módulos, ejercicios,
  guiones de audio multi-voz, lecturas académicas y simulacros del examen iTEP Academic-Plus
  (niveles MCER A1, A2, B1 y meta B2). Activa esta skill antes de crear o editar cualquier
  archivo de temario, seed data, diagnóstico o validación curricular.
---

# Diseño Curricular iTEP Academic-Plus y Calibración MCER (A1–B2)

Todo contenido educativo del repositorio debe cumplir con precisión quirúrgica el formato oficial del examen **iTEP Academic-Plus** y la calibración del Marco Común Europeo de Referencia (**MCER**).

## 1. Metadatos Obligatorios en Todo Módulo y Bloque
Cada módulo de Cimientos, día del Roadmap y bloque de práctica DEBE incluir explícitamente y validar vía Zod:
1. **`cefrLevel`**: `'A1' | 'A2' | 'B1' | 'B2'` (prohibido mezclar ejercicios `A1/A2` dentro del Roadmap Principal `B2`).
2. **`skill`**: `'grammar' | 'listening' | 'reading' | 'writing' | 'speaking'`.
3. **`estimatedMinutes`**: Entero realista en minutos. Cada día del Roadmap Principal B2 debe sumar entre **120 y 160 minutos** (formato Bootcamp Intensivo >2h/día).

## 2. Especificaciones Exactas por Habilidad iTEP

### A. Grammar (Oficial: 10 minutos / 25 preguntas — 24 segundos por pregunta)
- **Part 1 (`part1_fill_blank`):** Oración académica o profesional con un espacio `_____` donde se evalúa estructura sintáctica, conectores, subjuntivo, inversión, cláusulas reducidas, condicionales mixtos o modales perfectos (4 opciones `A`–`D`).
- **Part 2 (`part2_error_identification`):** Oración completa con exactamente **4 segmentos marcados** (`[A]`, `[B]`, `[C]`, `[D]`) donde 3 son gramaticalmente impecables en registro formal y **1 contiene un error estructural sutil** (concordancia con frases intercaladas, paralelismo roto, pronombre ambiguo, morfología léxica, modificador colgante).
- **Regla de distractores B2:** Ningún distractor puede ser absurdo; todos deben representar trampas reales para hispanohablantes en transición `B1 -> B2`.

### B. Listening (Oficial: 20 minutos — Límite estricto de 1 sola reproducción)
Todos los ejercicios incluyen un `AudioTrackSpec` con turnos hablados (`turns`) asignados a voces neuronales distintas para `edge-tts`:
- **Voces disponibles:**
  - Estadounidenses: `en-US-AndrewMultilingualNeural`, `en-US-AvaMultilingualNeural`, `en-US-GuyNeural`, `en-US-JennyNeural`
  - Británicas (para variedad auditiva académica): `en-GB-RyanNeural`, `en-GB-SoniaNeural`
- **Formatos:**
  - `part1_short_dialogue`: Diálogo breve de 2 a 4 intervenciones en entorno universitario/laboral (20–35s) + **1 pregunta** de inferencia pragmática o intención del hablante.
  - `part2_conversation`: Conversación extendida estudiante-profesor, asesoría académica o gestión administrativa (8 a 12 intervenciones, 90–140s) + **4 preguntas** (problema central, detalle clave, implicación y acción siguiente).
  - `part3_lecture`: Clase magistral universitaria de nivel `B2/C1` (biología, psicología, economía, historia del arte, ciencias ambientales; 220–320 palabras habladas en bloques naturales con pausas pedagógicas) + **6 preguntas** (tesis, organización retórica, causa-efecto, actitud del profesor e inferencia).

### C. Reading (Oficial: 20 minutos)
- **`part1_intermediate`:** Pasaje expositivo de **220 a 280 palabras** con párrafos numerados + **4 preguntas** (idea principal, vocabulario académico en contexto, detalle implícito y síntesis).
- **`part2_academic`:** Artículo académico denso de **400 a 500 palabras** (nivel `B2` sólido) que DEBE contener los cuatro marcadores de inserción **`[A]`**, **`[B]`**, **`[C]`**, **`[D]`** integrados de forma natural en un párrafo para evaluar cohesión textual + **6 preguntas** (incluyendo obligatoriamente al menos 1 de *Sentence Insertion*, 1 de vocabulario en contexto, 1 de inferencia y 1 de síntesis/idea global).

### D. Writing (Oficial: 25 minutos — Sin corrector ortográfico)
- **`part1_note`:** Tiempo límite **5 minutos**, rango meta **50 a 75 palabras**. Nota comunicativa formal o semiformal (a un profesor, coordinador, colega o departamento universitario) respondiendo a 2–3 requerimientos concretos.
- **`part2_essay`:** Tiempo límite **20 minutos**, rango meta **175 a 225 palabras**. Ensayo persuasivo/argumentativo defendiendo una postura clara frente a un dilema académico, social o tecnológico con tesis, concesión breve (*counter-argument*) y conectores `B2`.
- Todo prompt de Writing incluye: `b2RubricChecklistEs` (4–5 criterios verificables), `recommendedConnectors` y `modelAnswerB2` (dentro o ligeramente por encima del rango óptimo de palabras, demostrando variedad sintáctica real).

### E. Speaking (Oficial: 5 minutos)
- **`part1_personal`:** **30 segundos** de preparación + **45 segundos** de grabación. Pregunta situada sobre experiencia académica, profesional o preferencia razonada.
- **`part2_opinion`:** **45 segundos** de preparación + **60 segundos** de grabación. Enunciado más extenso (con pista `.mp3` que el estudiante escucha y lee simultáneamente, tal como en iTEP) presentando **dos posturas contrapuestas** y pidiendo defender una con argumentos sólidos.
- Todo prompt de Speaking incluye: `structureTemplate` (guía segundo a segundo: Hook/Thesis -> Reason 1 + Example -> Reason 2 / Concession -> Crisp Conclusion), `keyPhrasesB2` y `modelTranscriptB2`.

## 3. Regla de Oro para Explicaciones (`explanationEs`)
En **todos** los reactivos de opción múltiple (especialmente obligatorio en el Diagnóstico y Módulos `A1`–`B1`, y extendido al Roadmap `B2`):
- Cada una de las 4 opciones (`A`, `B`, `C`, `D`) debe poseer su propio campo `explanationEs` en español claro:
  - En la **opción correcta**: explica la regla gramatical, pista léxica o evidencia textual/auditiva exacta que la valida.
  - En las **3 opciones incorrectas**: explica qué trampa representa (ej. falso amigo, tiempo verbal incompatible con el marcador temporal, contradicción con el párrafo 2, generalización excesiva) y por qué queda descartada.
- En el Test Diagnóstico `A1`–`B1`, cada pregunta debe apuntar mediante `remediationModuleId` a una de las 6 cápsulas de Cimientos para trazabilidad directa de lagunas.

## 4. Validación Obligatoria post-edición
Tras crear o modificar cualquier archivo en `src/data/`:
1. Ejecuta `pnpm audio:generate` para sintetizar los `.mp3` nuevos o modificados.
2. Ejecuta `pnpm validate:content` y corrige cualquier error de esquema Zod, conteo de palabras o archivo `.mp3` faltante antes de continuar.
