# AGENTS.md — Gobernanza del Repositorio Road to B2

@[Project Context](.agent/rules/project-context.md)

## Skills Especializadas del Proyecto (Lectura Obligatoria Según Tarea)
Antes de diseñar contenido, modificar interfaz, auditar código o ejecutar pruebas, consulta la skill correspondiente en `.agent/skills/`:
- **Diseño curricular y ejercicios iTEP (`A1`–`B2`):** `.agent/skills/itep-cefr-curriculum/SKILL.md`
- **Interfaz de estudio, cronómetros y accesibilidad:** `.agent/skills/study-ui-design/SKILL.md`
- **TypeScript estricto, Zod, Biome y Knip:** `.agent/skills/strict-code-audit/SKILL.md`
- **Verificación E2E automatizada en navegador (Playwright):** `.agent/skills/e2e-browser-qa/SKILL.md`

## Comandos Estándar del Proyecto
Recuerda exportar `PATH="/home/brian/.nvm/versions/node/v24.21.0/bin:$PATH"` en cada sesión de terminal no interactiva:
- `pnpm typecheck` — Verificación estricta de TypeScript (`tsc --noEmit`).
- `pnpm lint` — Auditoría estática y de formato con `@biomejs/biome`.
- `pnpm knip` — Detección de archivos huérfanos, dependencias o exportaciones sin uso.
- `pnpm audio:generate` — Síntesis incremental de pistas `.mp3` multi-voz con `.venv/bin/python scripts/generate-audio.py`.
- `pnpm validate:content` — Validación Zod de los 15 días, Cimientos A1–B1, Vocabulario Inteligente · Byme Lenguage y existencia física de audios `.mp3`.
- `pnpm test:e2e` — Ejecución de la suite Playwright en Chromium real.
