---
trigger: always_on
---

# Contexto Global y Reglas Innegociables — Road to B2 (iTEP 15-Day Bootcamp)

Este proyecto es una aplicación web de estudio intensivo diseñada para llevar a un estudiante con nivel actual **B1** hasta el nivel **B2 (puntaje iTEP ≥ 3.5, meta segura 3.8–4.4 sobre escala 0.0–6.0)** en el examen **iTEP Academic-Plus** en un horizonte estricto de **15 días**.

## 1. Horizonte y Enfoque Pedagógico Estricto
- **Horizonte cerrado de 15 días:** El roadmap principal consta exactamente de **15 días** en formato **Bootcamp Intensivo (120 a 160 minutos diarios)**. No agregues días extra ni planes abiertos de varios meses.
- **Foco 100% iTEP Academic-Plus (80 minutos oficiales):** Todo ejercicio, cronómetro y estrategia debe replicar fielmente las 5 secciones evaluadas en iTEP Academic-Plus:
  1. **Grammar** (10 min / 25 preguntas: Part 1 completar estructura + Part 2 identificar el segmento subrayado erróneo).
  2. **Listening** (20 min / **1 sola reproducción estricta**: Part 1 diálogos cortos, Part 2 conversación intermedia, Part 3 clase magistral académica).
  3. **Reading** (20 min: Part 1 pasaje intermedio ~250 palabras + Part 2 pasaje académico superior ~450 palabras con inserción de oración `[A][B][C][D]`, vocabulario en contexto, inferencia y síntesis).
  4. **Writing** (25 min / **sin corrector ortográfico ni autocompletado**: Part 1 nota de 50–75 palabras en 5 min + Part 2 ensayo argumentativo de 175–225 palabras en 20 min).
  5. **Speaking** (5 min: Part 1 lectura/escucha breve con 30s preparación y 45s grabación + Part 2 postura ante tema académico de dos caras con 45s preparación y 60s grabación).
- **Separación modular obligatoria:**
  - **Módulo Principal — Roadmap B2 (15 Días):** Acelerador estratégico enfocado exclusivamente en estructuras, vocabulario académico, resistencia auditiva/lectora y producción cronometrada de nivel `B2`.
  - **Módulo Secundario — Cimientos (`A1` a `B1`):** Apartado independiente de nivelación rápida con Test Diagnóstico calibrado y cápsulas de remediación puntual para detectar y sellar lagunas base sin contaminar el flujo diario B2.
  - **Módulo Complementario — Vocabulario Inteligente · Byme Lenguage (`A1` a `C2` + SRS):** Hub híbrido (`#/vocabulary` + 6.ª pestaña opcional diaria sin afectar el conteo oficial de 75 habilidades iTEP) con banco académico pre-cargado de 60 tarjetas con IPA y audio neural `.mp3` de escucha repetible ilimitada (independiente del candado `1/1` de Listening), creación de palabras propias (manual o autocompletada con Gemini API) y Repetición Espaciada activa (SM-2).

## 2. Política de Idioma Híbrido y Prohibición de Relleno
- **Cero contenido genérico o de relleno:** Queda estrictamente prohibido generar `lorem ipsum`, textos placeholder (`TODO`, `Ejemplo 1`), frases infantiles fuera de contexto universitario/profesional o consejos vagos ("practica mucho", "escucha música en inglés").
- **Idioma híbrido estratégico:**
  - **100% Inglés real nivel iTEP:** Enunciados de examen, pasajes de Reading, guiones de Listening, prompts y respuestas modelo B2 de Writing y Speaking.
  - **Español pedagógico preciso:** Explicaciones diagnósticas (por qué la respuesta correcta funciona gramatical/pragmáticamente y por qué cada distractor es incorrecto), resúmenes de estrategia y rúbricas de autoevaluación.

## 3. Arquitectura Técnica y Multimedia Local
- **Listening sin Web Speech API:** Todos los audios de Listening (y prompts auditivos de Speaking) son archivos `.mp3` reales pre-generados localmente con Python `edge-tts` + `ffmpeg` usando múltiples voces neuronales diferenciadas (`public/audio/*.mp3`) y validados contra manifiesto.
- **Speaking local:** Grabación real en navegador vía `MediaRecorder` con temporizadores encadenados oficiales y auto-escucha inmediata.
- **Writing realista + IA híbrida:** Editor con `spellCheck={false}` y autocorrección desactivada, contador de palabras en vivo, botón **"Copiar para evaluar con IA"** (prompt + respuesta + rúbrica oficial iTEP B2) y soporte opcional cliente para **Gemini API Key** almacenada en `localStorage`.
- **Calidad de código innegociable:** TypeScript estricto (prohibido `any`), validación en tiempo de ejecución con **Zod**, formato/linting con **Biome**, cero archivos o exports muertos verificados con **Knip**, y pruebas E2E reales con **Playwright**.

## 4. Entorno de Ejecución Local (NVM)
En shells no interactivas de este entorno Linux, antepón siempre el binario de Node v24.21/pnpm instalado en NVM antes de ejecutar comandos Node/pnpm:
```bash
export PATH="/home/brian/.nvm/versions/node/v24.21.0/bin:$PATH"
```
