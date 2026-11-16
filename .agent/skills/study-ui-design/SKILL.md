---
name: study-ui-design
description: >-
  Directrices de diseño UI/UX de baja carga cognitiva, diseño responsive/mobile-first,
  temas light/dark nativos (color-scheme), accesibilidad WCAG AA, temporizadores tipo
  examen real y estados de dominio diario para Road to B2. Activa esta skill antes de
  crear o modificar estilos, layouts o componentes React.
---

# Diseño de Interfaz de Estudio Enfocada (Low Cognitive Load UX)

La interfaz debe eliminar toda distracción visual para maximizar la retención cognitiva durante sesiones de **Bootcamp (>2 horas diarias)** y replicar la sobriedad del entorno real de evaluación **iTEP Academic-Plus**.

## 1. Arquitectura Cromática y Modo Claro/Oscuro Moderno (`modern-web-guidance`)
- **Declaración obligatoria en `index.html`:** Incluye `<meta name="color-scheme" content="light dark">` en `<head>` seguido de un micro-script síncrono anti-FOUC que sincronice una preferencia explícita guardada en `localStorage` (`"light"` o `"dark"`, o `"light dark"` por defecto para respetar el sistema operativo).
- **CSS raíz en `:root`:**
  ```css
  :root {
    color-scheme: light dark;
    &:has(> head > meta[name="color-scheme"][content="dark"]) {
      color-scheme: dark;
    }
    &:has(> head > meta[name="color-scheme"][content="light"]) {
      color-scheme: light;
    }
  }
  ```
- **No depender solo del color (WCAG 1.4.1):** Todo estado de progreso, alerta de tiempo o validación de respuesta debe combinar **color + icono semántico (`lucide-react`) + etiqueta textual explícita**:
  - `pending` -> Icono `Circle` + etiqueta **`Pendiente`**
  - `in_review` -> Icono `RotateCcw` / `Clock` + etiqueta **`En repaso`**
  - `mastered` -> Icono `CheckCircle2` + etiqueta **`Dominado`**
- **Contraste:** Mantén ratio mínimo `4.5:1` en texto normal y `3:1` en bordes de inputs, indicadores de foco (`:focus-visible` con `outline` y `outline-offset`) e iconos interactivos.

## 2. Tipografía Académica y Legibilidad
- **Idioma semántico por bloque (WCAG 3.1.1 / 3.1.2):** El documento raíz usa `<html lang="es">`, pero **todo contenedor de pasajes de Reading, preguntas, prompts y respuestas modelo en inglés DEBE declarar `lang="en"`** para pronunciación y accesibilidad correctas.
- **Títulos dinámicos por ruta (WCAG 2.4.2):** Actualiza `document.title` al cambiar de vista (ej. `Día 3: Voz Pasiva y Cohesión | Road to B2 iTEP`).
- **Ancho óptimo de lectura:** Los pasajes de Reading (`part1_intermediate` y `part2_academic`) usan medida controlada (`max-w-[65ch]`), interlineado generoso (`leading-relaxed`) y párrafos numerados claros para facilitar escaneo rápido.
- **Números tabulares (`tabular-nums`):** Obligatorio aplicar `font-variant-numeric: tabular-nums` en todos los cronómetros regresivos, contadores de palabras y métricas de progreso para evitar saltos horizontales de layout cada segundo.

## 3. Componentes Críticos de Examen iTEP

### Temporizadores Tipo Examen Real
- Formato `MM:SS` con `tabular-nums`, controles claros de Inicio / Pausa (en modo estudio) o ejecución continua ininterrumpida (en modo Simulacro Oficial de 80 min).
- Cambios de estado discretos (sin parpadeos agresivos): neutro (>20% restante), ámbar preventivo (≤20% restante) y coral/rojo sereno + anuncio accesible puntual cuando resta 1 minuto.

### Reproductor Listening de 1 Sola Toma
- En Modo Examen, oculta la barra de *scrubbing*/adelanto y bloquea el botón tras completar **1 reproducción** (`1/1 reproducción utilizada — condición real iTEP`), guardando el consumo en `localStorage`.
- Vincula la transcripción completa (`aria-details`) en un bloque desplegable que permanece bloqueado durante la resolución y se desbloquea automáticamente al enviar las respuestas para estudio analítico.

### Editor Writing Sin Autocorrector + IA
- `<textarea>` con `lang="en"`, `spellCheck={false}`, `autoCorrect="off"`, `autoCapitalize="off"`, `autoComplete="off"` y `data-gramm="false"`.
- Barra inferior fija con contador de palabras en vivo e indicador de zona óptima (`50–75 palabras` en Part 1; `175–225 palabras` en Part 2).
- Botón **"Copiar para evaluar con IA"** con confirmación visual inmediata y botón opcional **"Evaluar con Gemini B2"** si hay API Key configurada en Ajustes.

### Estudio Speaking (`MediaRecorder`)
- Flujo guiado en tarjeta única enfocada: `1. Leer/Escuchar Prompt` -> `2. Preparación (30s / 45s) con área de notas breves` -> `3. Grabación automática (45s / 60s)` -> `4. Reproducción local + Rúbrica B2 + Transcripción Modelo`.

## 4. Responsive / Mobile-First y Modales Nativos
- Diseño *mobile-first*: navegación adaptable (barra superior limpia en escritorio, navegación compacta táctil con áreas mínimas de `44x44px` en móvil; Reading pasa de 1 columna apilada en móvil a 2 columnas fijas en `lg:`).
- Para modales (Ajustes, Respaldo JSON, Configuración Gemini API Key), utiliza `<dialog>` semántico abierto con `.showModal()` (que gestiona `inert` y `Esc` de forma nativa) o primitivas accesibles equivalentes verificadas.
