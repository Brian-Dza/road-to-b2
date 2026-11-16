---
name: strict-code-audit
description: >-
  Estándares técnicos obligatorios de TypeScript estricto (cero any), validación de
  esquemas en tiempo de ejecución con Zod, persistencia segura y auditoría estática con
  Biome y Knip. Activa esta skill al configurar el proyecto, definir tipos/esquemas,
  manejar estado/API o antes de dar por completada cualquier fase.
---

# Auditoría Estricta de Código, Zod, Biome y Knip

Ninguna tarea o fase puede cerrarse sin cumplir el 100% de estas garantías técnicas.

## 1. TypeScript Estricto (Prohibido `any`)
- Configuración obligatoria en `tsconfig`:
  - `"strict": true`
  - `"noUncheckedIndexedAccess": true`
  - `"noImplicitOverride": true`
  - `"noUnusedLocals": true`
  - `"noUnusedParameters": true`
  - `"noFallthroughCasesInSwitch": true`
- Queda **estrictamente prohibido** usar `any`, `@ts-ignore` o `@ts-expect-error` para silenciar errores de tipos. Usa `unknown` seguido de validación con Zod o *type guards* explícitos.
- Al acceder a arreglos con `noUncheckedIndexedAccess`, maneja siempre el caso `undefined` de forma explícita y segura en la UI.

## 2. Validación en Tiempo de Ejecución con Zod (Single Source of Truth)
- Los tipos de dominio (`RoadmapDay`, `DiagnosticTest`, `FoundationModule`, `UserProgress`, `AudioManifest`, `GeminiEvaluationResponse`) **se infieren directamente desde Zod** (`z.infer<typeof Schema>`). No dupliques interfaces manuales desacopladas de Zod.
- Usa `z.strictObject(...)` en los esquemas del temario para rechazar propiedades mal escritas o huérfanas.
- **Fronteras validadas obligatoriamente en runtime:**
  1. **Carga del currículo y manifiesto de audio:** Validados tanto en build (`pnpm validate:content`) como al inicializar el registro de datos.
  2. **Persistencia (`localStorage`):** Al leer `localStorage`, parsea `JSON.parse` dentro de `try/catch` y valida con `UserProgressSchema.safeParse(...)`. Si los datos están corruptos o corresponden a una versión incompatible, restaura el estado inicial limpio sin romper la aplicación (`ErrorBoundary` + notificación clara).
  3. **Importación de respaldo `.json`:** Valida el archivo subido por el usuario con `UserProgressSchema.safeParse(...)` y muestra mensajes de error legibles en español si el archivo no es válido.
  4. **Evaluación opcional con Gemini API:** Parsea la respuesta JSON del modelo con `GeminiEvaluationSchema.safeParse(...)` y maneja explícitamente estados `idle | loading | success | error` (red caída, API key inválida, cuota agotada).

## 3. Manejo Resiliente de Estados Hardware y Multimedia
- **`MediaRecorder` (Speaking):** Maneja explícitamente los estados `permission_prompt`, `recording`, `denied` (micrófono bloqueado o ausente, ofreciendo modo práctica con cronómetro sin colapsar la vista) y libera siempre los tracks del micrófono (`stream.getTracks().forEach(t => t.stop())`) al desmontar el componente o terminar la grabación.
- **`HTMLAudioElement` (Listening):** Maneja estados de carga (`canplay`, `playing`, `ended`, `error`) y registra de inmediato la reproducción consumida en el store persistente para garantizar el límite `1/1` en modo examen.

## 4. Compuerta de Cierre Obligatoria (Biome + Knip + Typecheck)
Antes de reportar una tarea como terminada, ejecuta en orden:
```bash
export PATH="/home/brian/.nvm/versions/node/v24.21.0/bin:$PATH"
pnpm lint:fix
pnpm typecheck
pnpm lint
pnpm knip
pnpm validate:content
```
- Si **`knip`** reporta cualquier archivo huérfano, componente UI no utilizado, dependencia sobrante o exportación muerta: **elimínalo** (no desactives reglas de Knip salvo entradas legítimas de configuración).
- Si **`biome`** reporta cualquier advertencia o error: **corrígelo en el código fuente**.
