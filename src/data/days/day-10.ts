import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day10: RoadmapDay = {
  dayNumber: 10,
  sprintNumber: 2,
  cefrLevel: "B2",
  title: "Word-Form Morphology, Pronoun Reference & Sequence of Tenses",
  subtitleEs:
    "Morfología derivativa engañosa, referencia demostrativa ('that of / those of') y concordancia temporal",
  b2FocusSummaryEs:
    "En la recta final del Sprint 2 atacamos las tres trampas de precisión micro-gramatical más frecuentes en iTEP Grammar Part 2 y Writing sin corrector: pares morfológicos parónimos ('economic' vs. 'economical', 'considerable' vs. 'considerate', posición predicativa/posnominal de 'alike' frente a 'like/similar' y sufijos sustantivo/adjetivo/adverbio), los pronombres demostrativos de comparación ('that of' singular/incontable frente a 'those of' plural) para evitar comparaciones ilógicas, y la concordancia temporal ('sequence of tenses') cuando un verbo principal en pasado proyecta expectativas o anterioridad.",
  estimatedMinutes: 145,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Derivational Precision, Comparative Pronouns & Temporal Alignment",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Audita tres puntos en cada oración: (1) en toda comparación ('surpass', 'exceed', 'rival'), comprueba si comparas entidades equivalentes usando 'that of' (singular) o 'those of' (plural); (2) distingue sufijos engañosos ('economical' = ahorrador vs. 'economic' = macroeconómico; 'considerable' = cuantioso vs. 'considerate' = cortés); (3) alinea los tiempos subordinados con el verbo matriz en pasado.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d10-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Demonstrative Pronoun Reference in Comparisons (those of vs. that of)",
          sentenceWithBlank:
            "High-resolution satellite altimetry indicates that seasonal glacier retreat rates in the tropical Andes now surpass _____ the European Alps.",
          options: [
            {
              id: "A",
              text: "that of",
              explanationEs:
                "Incorrecto: el pronombre demostrativo 'that' es singular, pero el núcleo nominal comparado es plural ('seasonal glacier retreat rates').",
            },
            {
              id: "B",
              text: "those of",
              explanationEs:
                "Correcto: 'those' sustituye al antecedente plural 'retreat rates' ('surpass the retreat rates of the European Alps'), evitando comparar tasas de retroceso directamente con una cordillera.",
            },
            {
              id: "C",
              text: "them in",
              explanationEs:
                "Incorrecto: el pronombre personal 'them' remite a los mismos referentes ya nombrados en vez de crear un núcleo nominal comparativo equivalente para la segunda región.",
            },
            {
              id: "D",
              text: "what in",
              explanationEs:
                "Incorrecto: 'what' exige una cláusula relativa nominal con verbo conjugado, nunca un sintagma nominal directo como 'the European Alps'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "En cualquier comparación con 'exceed', 'surpass', 'rival' o 'than', subraya el núcleo exacto del primer término: si es plural ('rates'), exige 'those of'; si es singular o incontable ('density'), exige 'that of'.",
        },
        {
          part: "part1_fill_blank",
          id: "d10-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Lexical Morphology: economical vs. economic",
          sentenceWithBlank:
            "Replacing aging steam boilers with combined-cycle heat recovery proved far more _____ for the campus utility plant, reducing annual fuel expenditure by thirty percent.",
          options: [
            {
              id: "A",
              text: "economical",
              explanationEs:
                "Correcto: tras el verbo copulativo 'proved' y el comparativo 'more', el adjetivo 'economical' significa eficiente en el uso de recursos y ahorrador de costos operativos.",
            },
            {
              id: "B",
              text: "economic",
              explanationEs:
                "Incorrecto: trampa parónima clásica; 'economic' significa relativo al sistema económico o a la macroeconomía ('economic policy', 'economic growth'), no ahorrador de combustible.",
            },
            {
              id: "C",
              text: "economically",
              explanationEs:
                "Incorrecto: el verbo copulativo 'proved' ('resultó ser') exige un adjetivo predicativo que califique al sujeto gerundial, no un adverbio en '-ly'.",
            },
            {
              id: "D",
              text: "economics",
              explanationEs:
                "Incorrecto: sustantivo que nombra la disciplina académica y no puede ocupar la ranura adjetival 'far more _____'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Asocia 'economic' con el campo de estudio o la macroeconomía ('economic indicators') y 'economical' con eficiencia práctica que evita desperdiciar dinero, tiempo o energía.",
        },
        {
          part: "part1_fill_blank",
          id: "d10-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Sequence of Tenses in Past Epistemic Contexts (Future-in-the-Past)",
          sentenceWithBlank:
            "When nineteenth-century epidemiologists first mapped cholera clusters in London, few municipal officials anticipated that sand-bed water filtration _____ urban mortality within a single generation.",
          options: [
            {
              id: "A",
              text: "will transform",
              explanationEs:
                "Incorrecto: 'will' ancla la predicción al presente actual del hablante, rompiendo la concordancia temporal con un evento del siglo XIX concluido hace más de un siglo.",
            },
            {
              id: "B",
              text: "has transformed",
              explanationEs:
                "Incorrecto: Present Perfect es incompatible con el marco histórico cerrado 'When nineteenth-century epidemiologists first mapped ... anticipated'.",
            },
            {
              id: "C",
              text: "had been transforming",
              explanationEs:
                "Incorrecto: Past Perfect Progressive indicaría que la filtración ya llevaba tiempo transformando la mortalidad antes de que los funcionarios lo anticiparan, invirtiendo la cronología.",
            },
            {
              id: "D",
              text: "would transform",
              explanationEs:
                "Correcto: 'would + infinitivo base' expresa futuro desde una perspectiva pasada ('future-in-the-past'), en concordancia exacta con el verbo matriz 'anticipated'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Cuando el verbo principal de pensamiento o expectativa está en pasado ('anticipated', 'believed', 'assumed', 'predicted') dentro de un marco histórico cerrado, proyecta los eventos posteriores con 'would + verbo base', nunca con 'will'.",
        },
        {
          part: "part1_fill_blank",
          id: "d10-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Syntactic Distribution of alike vs. like",
          sentenceWithBlank:
            "Medieval guild charters and archaeological coin hoards _____ confirm that Baltic port cities standardized silver weights across regional trade fairs.",
          options: [
            {
              id: "A",
              text: "like",
              explanationEs:
                "Incorrecto: la preposición 'like' exige un sintagma nominal término después de ella; colocarla justo delante del verbo finito 'confirm' deja la preposición colgada.",
            },
            {
              id: "B",
              text: "similar",
              explanationEs:
                "Incorrecto: 'similar' es un adjetivo calificativo que no puede colocarse tras dos sustantivos coordinados sin verbo copulativo para expresar 'ambos por igual'.",
            },
            {
              id: "C",
              text: "alike",
              explanationEs:
                "Correcto: en la construcción académica 'X and Y alike', el adverbio posnominal 'alike' significa 'tanto X como Y por igual' inmediatamente antes del verbo 'confirm'.",
            },
            {
              id: "D",
              text: "alike to",
              explanationEs:
                "Incorrecto: 'alike' jamás rige preposición posterior ('*alike to'); es siempre intransitivo en posición predicativa o posnominal.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Domina la simetría de 'like' y 'alike': 'like + sustantivo' abre una frase comparativa; 'sustantivo A and sustantivo B alike' cierra un par coordinado con el sentido de 'ambos por igual'.",
        },
        {
          part: "part1_fill_blank",
          id: "d10-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Derivational Paronyms: considerable vs. considerate",
          sentenceWithBlank:
            "Integrating offshore wind turbines into aging coastal power grids demands _____ capital investment in high-voltage substation upgrades.",
          options: [
            {
              id: "A",
              text: "considerable",
              explanationEs:
                "Correcto: adjetivo atributivo que significa 'cuantioso, sustancial o de gran magnitud', apropiado para cuantificar el sintagma nominal 'capital investment'.",
            },
            {
              id: "B",
              text: "considerate",
              explanationEs:
                "Incorrecto: 'considerate' califica a personas atentas o empáticas con las necesidades ajenas, nunca el volumen de una inversión financiera.",
            },
            {
              id: "C",
              text: "considerably",
              explanationEs:
                "Incorrecto: adverbio terminado en '-ly'; aunque puede modificar adjetivos o verbos ('invest considerably'), no puede modificar directamente al sustantivo compuesto 'capital investment'.",
            },
            {
              id: "D",
              text: "consideration",
              explanationEs:
                "Incorrecto: sustantivo abstracto ('consideración/análisis') que genera una acumulación nominal defectuosa en lugar de expresar magnitud.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Distingue la raíz 'consider-': 'considerable' = grande en cantidad o grado (cosas, datos, costos); 'considerate' = amable y respetuoso (personas o actitudes).",
        },
        {
          part: "part2_error_identification",
          id: "d10-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Predicative-Only Restriction on Adjective alike",
          sentenceWithMarkedSegments:
            "Marine bioacousticians [A]{have documented} [B]{alike} vocalization patterns [C]{among} geographically isolated pods of sperm whales [D]{across} the South Pacific.",
          correctedSegment: "similar",
          options: [
            {
              id: "A",
              text: "have documented",
              explanationEs:
                "Correcto en la oración: Present Perfect plural concordando con 'Marine bioacousticians' para hallazgos científicos acumulados.",
            },
            {
              id: "B",
              text: "alike",
              explanationEs:
                "Incorrecto (contiene el error): 'alike' es exclusivamente predicativo ('the patterns are alike') o posnominal, nunca atributivo delante de un sustantivo ('*alike vocalization patterns'). Debe sustituirse por 'similar'.",
            },
            {
              id: "C",
              text: "among",
              explanationEs:
                "Correcto en la oración: preposición distributiva exacta ante tres o más entidades plurales ('isolated pods').",
            },
            {
              id: "D",
              text: "across",
              explanationEs:
                "Correcto en la oración: preposición espacial de extensión geográfica ('across the South Pacific').",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "En iTEP Part 2, cualquier adjetivo con prefijo 'a-' histórico ('alike', 'alive', 'asleep', 'aware', 'afraid') colocado directamente delante de un sustantivo es error automático.",
        },
        {
          part: "part2_error_identification",
          id: "d10-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Singular vs. Plural Comparative Pronoun Agreement (that of vs. those of)",
          sentenceWithMarkedSegments:
            "The tensile strength of spider dragline silk, [A]{measured} per unit of mass, [B]{far exceeds} [C]{those of} high-grade alloy steel [D]{commonly used} in suspension bridges.",
          correctedSegment: "that of",
          options: [
            {
              id: "A",
              text: "measured",
              explanationEs:
                "Correcto en la oración: participio pasado en cláusula relativa reducida ('[when it is] measured per unit of mass') que modifica al núcleo del sujeto.",
            },
            {
              id: "B",
              text: "far exceeds",
              explanationEs:
                "Correcto en la oración: adverbio intensificador 'far' + verbo singular 'exceeds' concordando con el núcleo incontable 'The tensile strength'.",
            },
            {
              id: "C",
              text: "those of",
              explanationEs:
                "Incorrecto (contiene el error): el antecedente comparado es singular/incontable ('The tensile strength'), por lo que el pronombre demostrativo plural 'those of' rompe la concordancia de número; debe ser 'that of'.",
            },
            {
              id: "D",
              text: "commonly used",
              explanationEs:
                "Correcto en la oración: adverbio de frecuencia + participio pasado reducido que califica apropiadamente a 'high-grade alloy steel'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "No te conformes con ver que existe 'that of / those of': retrocede hasta el sujeto de la oración y comprueba singularidad ('strength' -> 'that of') frente a pluralidad ('properties' -> 'those of').",
        },
        {
          part: "part2_error_identification",
          id: "d10-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Word-Form Morphology: Adjective Used in Abstract Noun Slot",
          sentenceWithMarkedSegments:
            "Although early mechanical seismographs [A]{recorded} shallow tremors [B]{with} [C]{admirable} consistency, they lacked the [D]{sensitive} required to detect deep-mantle waves.",
          correctedSegment: "sensitivity",
          options: [
            {
              id: "A",
              text: "recorded",
              explanationEs:
                "Correcto en la oración: verbo transitivo en Past Simple alineado temporalmente con 'lacked' en la cláusula principal.",
            },
            {
              id: "B",
              text: "with",
              explanationEs:
                "Correcto en la oración: preposición modal que encabeza el sintagma 'with admirable consistency'.",
            },
            {
              id: "C",
              text: "admirable",
              explanationEs:
                "Correcto en la oración: adjetivo en '-able' que modifica directamente al sustantivo abstracto 'consistency'.",
            },
            {
              id: "D",
              text: "sensitive",
              explanationEs:
                "Incorrecto (contiene el error): precedido por el artículo definido 'the' como objeto directo de 'lacked' y seguido del participio posmodificador 'required', el hueco exige el sustantivo abstracto 'sensitivity', no el adjetivo 'sensitive'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Si ves 'the + palabra subrayada + participio/preposición' ('the _____ required', 'the _____ of'), verifica que la palabra termine en sufijo nominal ('-ity', '-tion', '-ness', '-ance') y no adjetival.",
        },
        {
          part: "part2_error_identification",
          id: "d10-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Sequence of Tenses Violation Within Anchored Past Clause",
          sentenceWithMarkedSegments:
            "Archival correspondence [A]{reveals} that when the observatory director [B]{submitted} her budget in 1924, she [C]{is convinced} the new spectrograph [D]{would double} cataloging speed.",
          correctedSegment: "was convinced",
          options: [
            {
              id: "A",
              text: "reveals",
              explanationEs:
                "Correcto en la oración: Present Simple válido en prosa académica cuando documentos físicos conservados hoy revelan hechos históricos.",
            },
            {
              id: "B",
              text: "submitted",
              explanationEs:
                "Correcto en la oración: Past Simple exigido por la fecha cerrada 'in 1924' dentro de la cláusula temporal con 'when'.",
            },
            {
              id: "C",
              text: "is convinced",
              explanationEs:
                "Incorrecto (contiene el error): al estar anclada por 'when ... submitted ... in 1924' y regir 'would double', la cláusula principal interna exige Past Simple 'was convinced'; el presente 'is convinced' quiebra la secuencia temporal.",
            },
            {
              id: "D",
              text: "would double",
              explanationEs:
                "Correcto en la oración: condicional pasado ('future-in-the-past') congruente con la expectativa que la directora tenía en 1924.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Aunque un verbo documental inicial esté en presente ('Archival correspondence reveals that...'), todo evento fechado en el pasado ('in 1924') dentro de la subordinada debe mantener coherencia estricta en pasado.",
        },
        {
          part: "part2_error_identification",
          id: "d10-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Singular Institutional Pronoun Reference & Adverbial Morphology",
          sentenceWithMarkedSegments:
            "When a central bank [A]{revises} [B]{their} quarterly inflation target [C]{abruptly}, institutional bondholders typically demand [D]{considerably} higher yields on long-term debt.",
          correctedSegment: "its",
          options: [
            {
              id: "A",
              text: "revises",
              explanationEs:
                "Correcto en la oración: verbo singular en Present Simple concordando con el sujeto singular 'a central bank'.",
            },
            {
              id: "B",
              text: "their",
              explanationEs:
                "Incorrecto (contiene el error): 'a central bank' es un sustantivo institucional contable singular (confirmado por el artículo 'a' y el verbo 'revises'); en inglés académico estándar de examen exige el posesivo singular 'its', no el plural 'their'.",
            },
            {
              id: "C",
              text: "abruptly",
              explanationEs:
                "Correcto en la oración: adverbio de modo en '-ly' que califica al verbo transitivo 'revises'.",
            },
            {
              id: "D",
              text: "considerably",
              explanationEs:
                "Correcto en la oración: adverbio de grado derivado de 'considerable' que modifica legítimamente al adjetivo comparativo 'higher'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "En iTEP Grammar, las instituciones singulares ('a university', 'a corporation', 'a central bank', 'the government') toman siempre 'it / its', nunca 'they / their'.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Print Resolution Diagnostics, Empirical Data Breaks & Decision-Making Psychology",
      estimatedMinutes: 35,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "Rastrea durante la escucha única las referencias pronominales comparativas ('that of', 'those of') y los contrastes entre lo que alguien asumía en pasado ('had assumed... would') frente a lo que los datos revelaron realmente.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d10-list-p1",
          title: "Symposium Poster Print Hold at Campus Media Services",
          cefrLevel: "B2",
          audio: {
            trackId: "day10-listening-p1",
            audioUrl: "/audio/day10-listening-p1.mp3",
            contextSetup:
              "A graduate student stops by the campus wide-format printing desk before an afternoon research symposium.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Hi, I'm picking up the hydrology symposium poster submitted under Lucas Meyer. I matched my layout settings to those of my lab partner's file from yesterday, so I assumed it would already be laminated.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Technician",
                voice: "en-GB-SoniaNeural",
                text: "I actually paused your queue intentionally ten minutes ago, Lucas. Your text columns looked sharp, but the embedded river-basin maps had been exported at seventy-two-DPI screen resolution, which would have printed noticeably blurred at poster scale.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Oh, thank you—that was really considerate of you to catch before wasting forty dollars on glossy paper.",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Technician",
                voice: "en-GB-SoniaNeural",
                text: "If you re-export the high-resolution PDF from that corner workstation right now, I'll push yours ahead of the afternoon batch and have it trimmed by one-thirty.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d10-list-p1-q01",
              prompt: "Why has the technician not printed Lucas's poster yet?",
              options: [
                {
                  id: "A",
                  text: "The wide-format laminator ran out of glossy paper during the morning batch.",
                  explanationEs:
                    "Incorrecto: sí hay papel disponible; la técnica ofrece imprimirlo y recortarlo antes de la 1:30 en cuanto él exporte el archivo corregido.",
                },
                {
                  id: "B",
                  text: "She halted the job to spare him from paying for a poster with blurry low-resolution maps.",
                  explanationEs:
                    "Correcto: explica que pausó la cola a propósito porque los mapas incrustados estaban a resolución de pantalla (72 DPI) y habrían salido borrosos a tamaño póster.",
                },
                {
                  id: "C",
                  text: "His text columns used non-standard margins that differed from his lab partner's template.",
                  explanationEs:
                    "Incorrecto: la técnica confirma expresamente que las columnas de texto se veían nítidas ('Your text columns looked sharp'); el defecto estaba solo en los mapas.",
                },
                {
                  id: "D",
                  text: "Students must pay a forty-dollar rush fee before files enter the afternoon print queue.",
                  explanationEs:
                    "Incorrecto: los cuarenta dólares son el costo del papel satinado que Lucas agradece no haber desperdiciado, no un recargo pendiente.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Observa el contraste entre 'I assumed it would already be...' y 'I actually paused your queue intentionally...': la inferencia correcta explica el motivo preventivo detrás de la pausa.",
        },
        {
          part: "part2_conversation",
          id: "d10-list-p2",
          title: "Resolving a Measurement Anomaly in an Economics Capstone Paper",
          cefrLevel: "B2",
          audio: {
            trackId: "day10-listening-p2",
            audioUrl: "/audio/day10-listening-p2.mp3",
            contextSetup:
              "An undergraduate economics student meets with his faculty advisor to review puzzling statistical results in his senior thesis.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Dr. Nair, thanks for reviewing my regression tables. Honestly, I'm baffled by the results. When Riverdale cut bus fares by twenty percent last year, I had assumed its commuter response would mirror that of Oakridge, where ridership jumped.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AvaMultilingualNeural",
                text: "Instead, your model estimates an eighteen-percent drop in Riverdale transit usage right after fares became more economical. Whenever an empirical coefficient contradicts basic demand theory that sharply, Marcus, check how the raw variable was recorded.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "For both cities, I downloaded monthly commuter-pass sales directly from each transit authority's open-data portal.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AvaMultilingualNeural",
                text: "Aha—did you read the July release notes on Riverdale's portal? Alongside the fare reduction, Riverdale replaced upfront monthly passes with contactless fare capping.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Wait—how does contactless fare capping affect monthly pass purchases?",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AvaMultilingualNeural",
                text: "Riders simply tap a regular smart card per trip, and once their weekly spend reaches twelve rides, every additional ride that week is free automatically. Commuters and occasional riders alike stopped buying advance monthly passes because tap-capping was considerably more flexible.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "So monthly pass sales plummeted only because riders migrated to capped tap cards, not because fewer people rode the bus!",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AvaMultilingualNeural",
                text: "Precisely. Total boarded passenger trips in Riverdale actually rose fourteen percent. Your dependent variable was measuring a payment product that was being phased out rather than actual transit demand.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "That makes complete sense. I'll re-run the regression using total boarded trips from the turnstile logs for both cities and add a methodological note explaining the payment-system transition before Monday's seminar.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d10-list-p2-q01",
              prompt: "Why was Marcus initially confused by his statistical output?",
              options: [
                {
                  id: "A",
                  text: "Oakridge raised its bus fares by twenty percent yet gained commuters.",
                  explanationEs:
                    "Incorrecto: fue Riverdale la ciudad que redujo tarifas un 20 %, y en Oakridge el aumento de pasajeros sí había seguido la lógica esperada.",
                },
                {
                  id: "B",
                  text: "His regression indicated that transit usage in Riverdale fell sharply right after fares were lowered.",
                  explanationEs:
                    "Correcto: él esperaba una respuesta similar a la de Oakridge ('mirror that of Oakridge'), pero su tabla mostraba una caída aparente del 18 % tras abaratarse el pasaje.",
                },
                {
                  id: "C",
                  text: "Riverdale's open-data portal had deleted all records prior to July.",
                  explanationEs:
                    "Incorrecto: los datos seguían en el portal junto con las notas metodológicas de julio que él no había leído.",
                },
                {
                  id: "D",
                  text: "Turnstile logs showed zero passenger trips during weekend service.",
                  explanationEs:
                    "Incorrecto: aún no había utilizado los registros de torniquetes ('turnstile logs'), que es lo que planea hacer al final.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d10-list-p2-q02",
              prompt:
                "According to Dr. Nair, why did advance monthly pass sales decline in Riverdale?",
              options: [
                {
                  id: "A",
                  text: "Commuters switched to an automatic weekly fare-capping smart card that made upfront passes unnecessary.",
                  explanationEs:
                    "Correcto: al introducir el tope automático tras doce viajes semanales con tarjeta sin contacto, tanto viajeros habituales como ocasionales dejaron de comprar abonos mensuales anticipados.",
                },
                {
                  id: "B",
                  text: "Municipal budget cuts forced Riverdale to cancel half of its peak bus routes.",
                  explanationEs:
                    "Incorrecto: no hubo recorte de rutas; de hecho, los viajes totales abordados subieron un 14 %.",
                },
                {
                  id: "C",
                  text: "Contactless smart cards charged higher weekly fees than traditional magnetic passes.",
                  explanationEs:
                    "Incorrecto: el sistema de tope resultó más flexible y económico tras la rebaja tarifaria.",
                },
                {
                  id: "D",
                  text: "Oakridge commuters were accidentally counted inside Riverdale's transit database.",
                  explanationEs:
                    "Incorrecto: cada autoridad de transporte mantiene su propio portal independiente.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d10-list-p2-q03",
              prompt: "What broader methodological lesson does Dr. Nair emphasize?",
              options: [
                {
                  id: "A",
                  text: "Undergraduate researchers should avoid comparing two cities of different population sizes.",
                  explanationEs:
                    "Incorrecto: nunca cuestiona comparar ambas ciudades, sino usar una variable mal definida.",
                },
                {
                  id: "B",
                  text: "When empirical results starkly contradict established economic logic, researchers must audit how the underlying variable was measured.",
                  explanationEs:
                    "Correcto: en su primera intervención aconseja verificar cómo se registró la variable bruta siempre que un coeficiente contradiga de raíz la teoría básica de la demanda.",
                },
                {
                  id: "C",
                  text: "Open-data government portals are too unreliable for senior economics theses.",
                  explanationEs:
                    "Incorrecto: el portal sí incluía las notas explicativas de julio y los conteos reales de pasajeros abordados.",
                },
                {
                  id: "D",
                  text: "Demand theory rarely applies to public transportation subsidies.",
                  explanationEs:
                    "Incorrecto: al medir pasajeros reales (+14 %), la teoría de la demanda sí se cumplió plenamente.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d10-list-p2-q04",
              prompt: "What will Marcus do before Monday's seminar?",
              options: [
                {
                  id: "A",
                  text: "Drop Riverdale from his thesis and analyze only Oakridge's monthly pass data",
                  explanationEs:
                    "Incorrecto: conservará ambas ciudades cambiando la variable dependiente a viajes totales abordados.",
                },
                {
                  id: "B",
                  text: "Substitute total boarded passenger trips as his dependent variable and document the payment-system change",
                  explanationEs:
                    "Correcto: afirma que recalculará la regresión usando los viajes totales de los torniquetes para ambas ciudades y añadirá una nota metodológica sobre la transición tarifaria.",
                },
                {
                  id: "C",
                  text: "Interview twelve Riverdale bus drivers about contactless smart-card malfunctions",
                  explanationEs:
                    "Incorrecto: el número doce se mencionó como el umbral semanal de viajes para el tope tarifario, no como entrevistas a conductores.",
                },
                {
                  id: "D",
                  text: "Request an extension on his thesis defense until next semester",
                  explanationEs:
                    "Incorrecto: planea tener lista la corrección antes del seminario del lunes.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En conversaciones sobre investigación cuantitativa, distingue siempre entre el indicador medido por error ('monthly pass sales') y el fenómeno real subyacente ('total boarded passenger trips').",
        },
        {
          part: "part3_lecture",
          id: "d10-list-p3",
          title: "Cognitive Psychology: Dual-Process Judgment, Anchoring & the Sunk-Cost Fallacy",
          cefrLevel: "B2",
          audio: {
            trackId: "day10-listening-p3",
            audioUrl: "/audio/day10-listening-p3.mp3",
            contextSetup:
              "A cognitive psychology professor delivers a lecture on heuristic biases in human and institutional decision-making.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Good afternoon. For much of the twentieth century, classical economic models assumed that human decision-makers evaluate probabilities with mathematical objectivity. Cognitive psychologists Daniel Kahneman and Amos Tversky overturned that assumption by demonstrating that under time pressure or uncertainty, human judgment relies on mental shortcuts—or heuristics—that are cognitively economical yet vulnerable to predictable bias.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Dual-process theory clarifies why these errors persist. System One operates rapidly and automatically through associative memory, whereas System Two conducts slow, effortful analytical verification. Crucially, System Two is metabolically conservative: rather than calculating independent estimates from scratch, it routinely endorses—or only slightly adjusts—whatever intuitive impression System One proposes first.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Consider the anchoring-and-adjustment heuristic. In controlled experiments, when participants spun a numbered wheel before estimating macroeconomic figures, their final answers clustered remarkably close to the arbitrary number they had just seen—even though subjects knew the wheel was random. More striking still, follow-up field studies revealed that the anchoring susceptibility of seasoned real-estate appraisers and corporate auditors rivaled that of undergraduate novices.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "A second institutional distortion is the sunk-cost fallacy, also termed escalation of commitment. Normative decision theory states that irrecoverable past expenditures should play zero role in future choices; only prospective costs and returns matter. Yet municipal boards and corporate executives alike frequently pour considerable additional funding into failing infrastructure projects simply because abandoning the venture would force them to acknowledge publicly that their initial investment had been wasted.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Can training alone eliminate these blind spots? Empirical audits suggest not. Simply warning professionals about cognitive biases rarely improves their real-time decisions, because System One shapes perception silently before conscious self-monitoring even activates.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "What genuinely reduces institutional error is structural choice architecture: establishing binding exit thresholds before a project launches, and assigning milestone reviews to independent 'red teams' whose members had no hand in authorizing the original budget.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d10-list-p3-q01",
              prompt: "What is the overarching theme of the lecture?",
              options: [
                {
                  id: "A",
                  text: "Why heuristic shortcuts cause systematic judgment biases in individuals and institutions, and why structural safeguards outperform awareness training",
                  explanationEs:
                    "Correcto: resume la tesis de principio a fin: superación del modelo racional clásico, arquitectura de doble sistema (anclaje y costos hundidos) y superioridad de la arquitectura de decisiones frente a simples charlas informativas.",
                },
                {
                  id: "B",
                  text: "How classical twentieth-century economists trained corporate auditors to eliminate anchoring bias",
                  explanationEs:
                    "Incorrecto: los economistas clásicos asumían objetividad racional teórica, y los auditores experimentados mostraron tanta susceptibilidad al anclaje como los novatos.",
                },
                {
                  id: "C",
                  text: "Why System Two processes associative memories faster than System One under time pressure",
                  explanationEs:
                    "Incorrecto: invierte las funciones; el Sistema 1 es rápido y asociativo, mientras que el Sistema 2 es lento y deliberativo.",
                },
                {
                  id: "D",
                  text: "How municipal boards use random numbered wheels to allocate infrastructure budgets fairly",
                  explanationEs:
                    "Incorrecto: la ruleta numerada fue un dispositivo experimental de laboratorio para probar el efecto de anclaje, no un método municipal.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d10-list-p3-q02",
              prompt:
                "According to the professor, why does System Two often fail to prevent heuristic errors?",
              options: [
                {
                  id: "A",
                  text: "It shuts down completely whenever an individual faces quantitative financial data.",
                  explanationEs:
                    "Incorrecto: no se apaga por completo, sino que realiza ajustes insuficientes para ahorrar esfuerzo cognitivo.",
                },
                {
                  id: "B",
                  text: "To conserve mental effort, it tends to ratify or minimally tweak System One's initial intuition instead of computing from zero.",
                  explanationEs:
                    "Correcto: explica que el Sistema 2 es metabólicamente conservador y suele avalar o ajustar apenas marginalmente la impresión intuitiva generada por el Sistema 1.",
                },
                {
                  id: "C",
                  text: "It prioritizes prospective returns over historical sunk costs too aggressively.",
                  explanationEs:
                    "Incorrecto: evaluar rendimientos prospectivos ignorando costos irrecuperables sería la decisión racional óptima, no un error.",
                },
                {
                  id: "D",
                  text: "It operates only in novices who lack specialized professional training.",
                  explanationEs:
                    "Incorrecto: tanto novatos como expertos experimentan las mismas inercias de ajuste insuficiente.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d10-list-p3-q03",
              prompt:
                "Why does the professor highlight follow-up studies involving real-estate appraisers and corporate auditors?",
              options: [
                {
                  id: "A",
                  text: "To show that domain expertise alone does not immunize professionals against numerical anchoring",
                  explanationEs:
                    "Correcto: subraya que su susceptibilidad al anclaje igualó la de estudiantes universitarios sin experiencia ('rivaled that of undergraduate novices'), probando que la pericia técnica no basta para neutralizar el sesgo.",
                },
                {
                  id: "B",
                  text: "To demonstrate that real-estate markets fluctuate more unpredictably than stock exchanges",
                  explanationEs:
                    "Incorrecto: el estudio evalúa sesgos cognitivos de estimación ante anclas arbitrarias, no volatilidad bursátil.",
                },
                {
                  id: "C",
                  text: "To prove that undergraduate novices make better corporate auditors than seasoned accountants",
                  explanationEs:
                    "Incorrecto: 'rivaled that of' indica un grado comparable de vulnerabilidad al anclaje, no que los novatos superen técnicamente a los contadores.",
                },
                {
                  id: "D",
                  text: "To illustrate how independent red teams audit municipal property taxes",
                  explanationEs:
                    "Incorrecto: los 'red teams' aparecen hasta el cierre de la clase como remedio contra costos hundidos, no en el experimento de tasadores.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d10-list-p3-q04",
              prompt:
                "What psychological motive drives executives to commit the sunk-cost fallacy?",
              options: [
                {
                  id: "A",
                  text: "Confidence that irrecoverable past spending guarantees higher future tax deductions",
                  explanationEs:
                    "Incorrecto: no se mencionan deducciones fiscales en ningún punto de la exposición.",
                },
                {
                  id: "B",
                  text: "Reluctance to admit publicly that the resources already invested in a failing project were wasted",
                  explanationEs:
                    "Correcto: señala que juntas municipales y ejecutivos inyectan fondos cuantiosos adicionales para evitar reconocer públicamente que la inversión inicial se desperdició.",
                },
                {
                  id: "C",
                  text: "Strict legal mandates prohibiting municipalities from canceling infrastructure contracts",
                  explanationEs:
                    "Incorrecto: de hecho, al final recomienda fijar umbrales vinculantes de cancelación ('binding exit thresholds') antes de iniciar proyectos.",
                },
                {
                  id: "D",
                  text: "Inability to calculate how much money was spent during earlier project phases",
                  explanationEs:
                    "Incorrecto: el problema es precisamente que le dan demasiado peso psicológico a lo ya gastado en vez de ignorarlo.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d10-list-p3-q05",
              prompt:
                "What is the professor's view of bias-awareness workshops as a standalone solution?",
              options: [
                {
                  id: "A",
                  text: "Unconvinced, because System One distorts judgment unconsciously before deliberate self-monitoring engages",
                  explanationEs:
                    "Correcto: responde 'Empirical audits suggest not' y explica que advertir verbalmente rara vez mejora decisiones reales porque el Sistema 1 moldea la percepción en silencio antes de que intervenga el autocontrol consciente.",
                },
                {
                  id: "B",
                  text: "Supportive, provided workshops are taught by classical economists rather than psychologists",
                  explanationEs:
                    "Incorrecto: contradice tanto su crítica a los talleres meramente informativos como el enfoque empírico de la psicología cognitiva.",
                },
                {
                  id: "C",
                  text: "Optimistic that a single lecture permanently eliminates escalation of commitment",
                  explanationEs:
                    "Incorrecto: afirma explícitamente lo opuesto ('rarely improves their real-time decisions').",
                },
                {
                  id: "D",
                  text: "Concerned that awareness training slows down System Two so severely that projects never launch",
                  explanationEs:
                    "Incorrecto: el fallo de los talleres radica en que no logran activar el freno a tiempo, no en que paralicen el lanzamiento de proyectos.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d10-list-p3-q06",
              prompt: "Why should milestone reviews be assigned to an independent 'red team'?",
              options: [
                {
                  id: "A",
                  text: "Because reviewers uninvolved in approving the initial budget have no personal stake in defending sunk costs",
                  explanationEs:
                    "Correcto: al no haber participado en autorizar el presupuesto original ('had no hand in authorizing the original budget'), pueden evaluar costos y beneficios futuros sin necesidad defensiva de justificar el gasto previo.",
                },
                {
                  id: "B",
                  text: "Because external reviewers rely exclusively on System One intuition rather than analytical rules",
                  explanationEs:
                    "Incorrecto: su valor reside precisamente en aplicar criterios objetivos e independientes sin sesgo de compromiso previo.",
                },
                {
                  id: "C",
                  text: "Because red teams are legally required to double infrastructure funding at every milestone",
                  explanationEs:
                    "Incorrecto: su propósito es frenar la escalada irracional cuando se cruzan umbrales de salida, no duplicar fondos.",
                },
                {
                  id: "D",
                  text: "Because original project authors forget the technical specifications of their own proposals",
                  explanationEs:
                    "Incorrecto: el problema de los autores originales no es falta de memoria técnica, sino apego defensivo a su inversión inicial.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "Observa cómo el profesor emplea 'economical' ('cognitively economical' = ahorrador de esfuerzo mental), 'that of' ('rivaled that of undergraduate novices') y 'alike' ('boards and executives alike') en contexto real de cátedra universitaria.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (35 min study / strict 20 min official clock for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Parametric Disaster Finance & Lidar Paleo-Urbanism Under Strict Clock",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Ejecuta esta sesión bajo reloj estricto de 20 minutos (7 min para Part 1 + 13 min para Part 2): usa los demostrativos 'that of / those of' para rastrear comparaciones sin releer párrafos enteros y comprueba las cadenas causa-efecto antes de ubicar la oración en `[A]..[D]`.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d10-read-p1",
          title: "Parametric Insurance Models in Climate Disaster Recovery",
          cefrLevel: "B2",
          topicDomain: "Development Economics & Climate Risk Management",
          paragraphs: [
            "After a severe cyclone or multi-month drought strikes an agricultural region, traditional indemnity insurance requires field adjusters to inspect damaged structures and verify individual crop losses before releasing compensation. Although thorough, this case-by-case assessment often delays emergency payouts for six to twelve months. Parametric insurance, by contrast, triggers automatic disbursements as soon as an objective meteorological index—such as sustained wind velocity or cumulative seasonal rainfall deficit—crosses a predetermined contractual threshold. Because administrative overhead is considerably lower than that of conventional loss-adjustment policies, regional governments and smallholder farming cooperatives alike can secure rapid liquidity within days to repair irrigation canals and purchase replacement seed.",
            "Despite this speed advantage, economists warn that poorly calibrated parametric contracts expose policyholders to 'basis risk'—the mismatch between readings at an official weather station and actual physical damage on a specific farm. When a localized hailstorm destroys hillside orchards five kilometers away from an unaffected valley gauge, farmers receive zero compensation even though their harvest is ruined. Conversely, a station may record threshold wind speeds while reinforced municipal buildings sustain minimal structural harm.",
            "To minimize basis risk without sacrificing rapid settlement, development banks increasingly combine dense ground-sensor grids with high-resolution satellite soil-moisture imagery. Pairing multi-source indices with small municipal contingency funds ensures that outlier villages missed by automated triggers still receive timely recovery support. Pilot programs across Caribbean island states and East African farming districts confirm that this hybrid structure lowers post-disaster borrowing costs considerably.",
          ],
          questions: [
            {
              id: "d10-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the primary focus of the passage?",
              options: [
                {
                  id: "A",
                  text: "How parametric insurance accelerates post-disaster payouts, the basis-risk limitation it entails, and technological ways to mitigate that risk",
                  explanationEs:
                    "Correcto: recoge con exactitud la arquitectura tripartita del texto: mecanismo rápido y económico (P1), riesgo de base por desajuste espacial (P2) y mitigación con sensores densos, satélites y fondos municipales (P3).",
                },
                {
                  id: "B",
                  text: "Why traditional indemnity adjusters intentionally falsify crop-loss inspections after cyclones",
                  explanationEs:
                    "Incorrecto: el párrafo 1 califica la inspección tradicional de minuciosa ('Although thorough'), criticando únicamente su lentitud administrativa, jamás fraude.",
                },
                {
                  id: "C",
                  text: "Why smallholder farming cooperatives are abandoning satellite imagery in favor of manual valley rain gauges",
                  explanationEs:
                    "Incorrecto: invierte el párrafo 3, donde se adopta precisamente imagen satelital para superar los fallos de estaciones aisladas en valles.",
                },
                {
                  id: "D",
                  text: "How reinforced municipal buildings reduce wind velocity in surrounding hillside orchards",
                  explanationEs:
                    "Incorrecto: mezcla erróneamente los dos ejemplos opuestos de riesgo de base presentados en el párrafo 2.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d10-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'disbursements' in paragraph 1 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "meteorological forecasts",
                  explanationEs:
                    "Incorrecto: los datos meteorológicos constituyen el índice activador ('meteorological index'), no lo que la póliza entrega.",
                },
                {
                  id: "B",
                  text: "financial payouts",
                  explanationEs:
                    "Correcto: en paralelo directo con 'releasing compensation' y 'emergency payouts' de las oraciones previas, 'automatic disbursements' significa desembolsos o pagos financieros.",
                },
                {
                  id: "C",
                  text: "property inspections",
                  explanationEs:
                    "Incorrecto: el seguro paramétrico prescinde justamente de las inspecciones presenciales para pagar de inmediato.",
                },
                {
                  id: "D",
                  text: "premium surcharges",
                  explanationEs:
                    "Incorrecto: el contexto describe la liquidez rápida que reciben gobiernos y cooperativas tras un desastre, no recargos cobrados al asegurado.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d10-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 2 about parametric contracts that rely on a single distant weather station?",
              options: [
                {
                  id: "A",
                  text: "They require twelve months of legal review before wind velocity data can be released.",
                  explanationEs:
                    "Incorrecto: la demora de seis a doce meses corresponde al seguro tradicional de indemnización (P1), no al paramétrico.",
                },
                {
                  id: "B",
                  text: "They perform poorly in rugged terrain where microclimates vary sharply over short distances.",
                  explanationEs:
                    "Correcto: el contraste entre una granizada localizada en huertos de ladera ('hillside orchards') y un pluviómetro intacto en el valle a solo cinco kilómetros demuestra que variaciones microclimáticas topográficas disparan el riesgo de base si hay pocos sensores.",
                },
                {
                  id: "C",
                  text: "They always bankrupt insurance providers by overpaying hillside orchard owners.",
                  explanationEs:
                    "Incorrecto: en el caso de los huertos de ladera ocurre lo contrario: los agricultores reciben cero compensación pese a perder la cosecha.",
                },
                {
                  id: "D",
                  text: "They incur higher administrative overhead than conventional loss-adjustment policies.",
                  explanationEs:
                    "Incorrecto: contradice el párrafo 1 ('administrative overhead is considerably lower than that of conventional loss-adjustment policies').",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d10-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "Why do development banks pair multi-source environmental indices with small municipal contingency funds in paragraph 3?",
              options: [
                {
                  id: "A",
                  text: "To replace automatic parametric triggers with year-long field inspections",
                  explanationEs:
                    "Incorrecto: el párrafo 3 especifica que buscan reducir el riesgo de base sin sacrificar la liquidación rápida ('without sacrificing rapid settlement').",
                },
                {
                  id: "B",
                  text: "To provide a backup safety net for localized losses that even improved sensor networks fail to trigger",
                  explanationEs:
                    "Correcto: mientras las mallas densas y satélites reducen las brechas de medición, el fondo municipal de contingencia cubre a las aldeas atípicas ('outlier villages') que aún queden fuera del disparo automático.",
                },
                {
                  id: "C",
                  text: "To finance the demolition of reinforced municipal buildings after windstorms",
                  explanationEs: "Incorrecto: carece por completo de respaldo en el pasaje.",
                },
                {
                  id: "D",
                  text: "To subsidize conventional indemnity insurers when drought thresholds are not met",
                  explanationEs:
                    "Incorrecto: el fondo apoya directamente la recuperación oportuna de las comunidades afectadas, no a aseguradoras tradicionales.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d10-read-p2",
          title: "Lidar Remote Sensing and Low-Density Agrarian Urbanism in the Maya Lowlands",
          cefrLevel: "B2",
          topicDomain: "Archaeological Science & Geomatics",
          paragraphs: [
            "For most of the twentieth century, archaeologists investigating Classic Maya settlements in the tropical lowlands of Guatemala, Belize, and southern Mexico relied on labor-intensive ground surveys cut by machete through dense rainforest undergrowth. Because thick foliage concealed subtle earthen mounds just meters off cleared trails, early cartographers mapped monumental temple pyramids in apparent isolation. Consequently, mid-century textbooks routinely portrayed Classic Maya centers as sparsely inhabited ceremonial precincts governed by priestly elites—settlements whose population density appeared far lower than that of walled urban centers in ancient Mesopotamia or central Mexico's highland valleys.",
            "Over the past decade, airborne Light Detection and Ranging (Lidar) has dismantled that minimalist model. Mounted beneath slow-flying aircraft, Lidar instruments fire hundreds of thousands of near-infrared laser pulses per second toward the forest floor. Although upper tree canopies reflect most pulses, a fraction penetrates tiny gaps between leaves to strike underlying stone and soil before bouncing back to the sensor. By filtering out vegetation returns algorithmically, researchers generate bare-earth digital elevation models accurate to within centimeters. When regional scholarly consortia surveyed over two thousand square kilometers of northern Guatemala in 2018, the resulting maps revealed upwards of sixty thousand previously unrecorded house platforms, defensive ramparts, elevated limestone causeways, and drained wetland fields linking nominal 'city-states' into sprawling regional networks. Subsequent excavations confirmed that most of these laser-detected structures functioned simultaneously during the Late Classic period between 600 and 850 CE.",
            "Rather than resembling compact European walled towns, these newly documented landscapes exemplify what urban historians term low-density agrarian urbanism. [A] Interspersed directly between elite plazas and artisan courtyards lay terraced hillside gardens, managed tree orchards, and stone-lined household reservoirs. [B] Hydrological simulations of these mapped basins indicate that interconnected canal systems captured seasonal monsoon runoff with a storage efficiency rivaling that of modern municipal retention ponds, sustaining dry-season agriculture for regional populations several times larger than mid-twentieth-century scholars had assumed possible. [C] Yet operating such finely balanced hydraulic networks across dispersed neighborhoods required continuous lime-plaster sealing and coordinated silt removal. [D] Consequently, archaeologists and paleoclimatologists alike now contend that ninth-century Classic Maya political fragmentation stemmed not from drought alone, but from cascading institutional breakdowns once multi-year aridity strained inter-district water governance.",
            "Beyond revising population estimates in Mesoamerica, airborne laser mapping has prompted a broader comparative reassessment of preindustrial tropical civilizations worldwide. Similar sub-canopy surveys around Angkor in Cambodia and across the southwestern Amazon basin confirm that integrating food production within sprawling urban infrastructure represented an ecologically sophisticated adaptation to fragile tropical soils rather than an arrested stage of civic evolution. Understanding how ancient lowland cities sustained dense populations without clear-cutting entire watersheds increasingly informs modern tropical agroforestry and decentralized stormwater design.",
          ],
          questions: [
            {
              id: "d10-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, why did mid-twentieth-century scholars underestimate the scale of Classic Maya settlements?",
              options: [
                {
                  id: "A",
                  text: "Seasonal monsoons had washed away all house platforms prior to twentieth-century excavations.",
                  explanationEs:
                    "Incorrecto: en el párrafo 2 el mapeo láser detectó más de sesenta mil plataformas habitacionales intactas bajo el dosel.",
                },
                {
                  id: "B",
                  text: "Dense rainforest vegetation hid residential and agricultural structures located outside narrow hand-cut survey paths.",
                  explanationEs:
                    "Correcto: el párrafo 1 explica que el follaje espeso ocultaba montículos sutiles a pocos metros de las brechas abiertas a machete, haciendo parecer aisladas a las pirámides monumentales.",
                },
                {
                  id: "C",
                  text: "Early researchers focused exclusively on central Mexico and Mesopotamia rather than visiting Guatemala.",
                  explanationEs:
                    "Incorrecto: sí realizaban prospecciones terrestres en Guatemala, Belice y el sur de México; Mesopotamia y el centro de México se mencionan como contraste urbano.",
                },
                {
                  id: "D",
                  text: "Classic Maya builders constructed monumental temples out of biodegradable timber.",
                  explanationEs:
                    "Incorrecto: los templos, calzadas ('limestone causeways') y reservorios revestidos de piedra sí perduraron físicamente.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d10-read-p2-q02",
              questionType: "detail",
              prompt:
                "How does airborne Lidar produce bare-earth topographic maps beneath tropical forests?",
              options: [
                {
                  id: "A",
                  text: "By using thermal cameras to burn away upper canopy leaves along narrow flight corridors",
                  explanationEs:
                    "Incorrecto: los pulsos láser infrarrojos atraviesan huecos diminutos entre las hojas sin dañar la vegetación.",
                },
                {
                  id: "B",
                  text: "By measuring laser pulses that pass through canopy gaps to hit the ground and digitally removing reflections from foliage",
                  explanationEs:
                    "Correcto: una fracción de pulsos penetra pequeños espacios entre hojas, rebota en piedra y suelo, y el filtrado algorítmico descarta los rebotes de vegetación para reconstruir el relieve desnudo.",
                },
                {
                  id: "C",
                  text: "By comparing soil moisture levels in drained wetlands with satellite photographs from 1950",
                  explanationEs:
                    "Incorrecto: Lidar mide tiempos de retorno láser desde aeronaves de vuelo lento, no fotografías satelitales de 1950.",
                },
                {
                  id: "D",
                  text: "By bouncing acoustic sonar waves off underground limestone aquifers",
                  explanationEs:
                    "Incorrecto: utiliza pulsos ópticos de infrarrojo cercano ('near-infrared laser pulses'), no sonar acústico subterráneo.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d10-read-p2-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'sprawling' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "extensively spread out",
                  explanationEs:
                    "Correcto: al describir redes regionales enlazadas por calzadas, murallas y campos drenados sobre más de dos mil kilómetros cuadrados, 'sprawling' significa extendidas ampliamente sobre un vasto territorio.",
                },
                {
                  id: "B",
                  text: "strictly ceremonial",
                  explanationEs:
                    "Incorrecto: el hallazgo de sesenta mil plataformas domésticas y campos agrícolas refuta precisamente la vieja idea de recintos meramente ceremoniales.",
                },
                {
                  id: "C",
                  text: "structurally unstable",
                  explanationEs:
                    "Incorrecto: no califica fragilidad arquitectónica de la piedra caliza, sino la extensión espacial horizontal de la red urbana.",
                },
                {
                  id: "D",
                  text: "chronologically brief",
                  explanationEs: "Incorrecto: 'sprawling' es un adjetivo espacial, no temporal.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d10-read-p2-q04",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "Even a brief lapse in communal labor during succession disputes could allow seasonal channels to clog, rapidly jeopardizing downstream harvests.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` apenas se introduce el concepto general de urbanismo agrario de baja densidad, sin haber mencionado canales ni mantenimiento.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: antes de `[B]` se enumeran jardines, huertos y reservorios domésticos, pero aún no se presenta la red de canales ni su exigencia de desazolve.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Incorrecto: la oración previa a `[C]` destaca el éxito y la alta eficiencia del almacenamiento hídrico; introducir ya un colapso por falta de mano de obra adelantaría la transición adversativa 'Yet operating such finely balanced hydraulic networks...'.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Correcto: la oración previa a `[D]` explica que operar la red exigía sellado continuo de estuco y remoción coordinada de sedimento ('coordinated silt removal'); la oración insertada muestra qué ocurría ante cualquier interrupción laboral ('allow seasonal channels to clog'), sirviendo de puente causal exacto hacia 'Consequently, ... stemmed not from drought alone, but from cascading institutional breakdowns'.",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d10-read-p2-q05",
              questionType: "inference",
              prompt: "What can be inferred from paragraph 3 about Classic Maya water management?",
              options: [
                {
                  id: "A",
                  text: "Its high dry-season capacity depended as much on ongoing civic coordination as on physical engineering.",
                  explanationEs:
                    "Correcto: aunque su eficiencia física rivalizaba con estanques municipales modernos, dependía de mantenimiento continuo entre distritos, por lo que las tensiones institucionales bajo sequía provocaron fallos en cascada.",
                },
                {
                  id: "B",
                  text: "Each household reservoir operated in complete isolation from neighboring residential districts.",
                  explanationEs:
                    "Incorrecto: el párrafo 3 enfatiza sistemas de canales interconectados ('interconnected canal systems') y gobernanza hídrica interdistrital.",
                },
                {
                  id: "C",
                  text: "Modern municipal retention ponds were modeled directly on ninth-century Guatemalan blueprints.",
                  explanationEs:
                    "Incorrecto: 'rivaling that of modern municipal retention ponds' establece una comparación de eficiencia funcional, no una influencia histórica de diseño.",
                },
                {
                  id: "D",
                  text: "Lime-plaster sealing prevented any evaporation during multi-year droughts.",
                  explanationEs:
                    "Incorrecto: el estuco sellaba filtraciones, pero la aridez plurianual sí tensó gravemente la gestión del agua.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d10-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Why does the author reference Angkor and the southwestern Amazon basin in paragraph 4?",
              options: [
                {
                  id: "A",
                  text: "To argue that Classic Maya engineers migrated to Southeast Asia after the ninth century",
                  explanationEs:
                    "Incorrecto: no sugiere contacto ni migración transoceánica, sino convergencia adaptativa en ecosistemas tropicales.",
                },
                {
                  id: "B",
                  text: "To demonstrate that low-density agrarian urbanism was a widespread, sophisticated adaptation to tropical environments rather than an anomaly",
                  explanationEs:
                    "Correcto: amplía el hallazgo mesoamericano al plano comparativo global, mostrando que integrar producción agrícola e infraestructura urbana fue una adaptación ecológica sofisticada a suelos tropicales frágiles en distintas civilizaciones.",
                },
                {
                  id: "C",
                  text: "To show that Lidar sensors penetrate Cambodian canopies more accurately than Guatemalan forests",
                  explanationEs:
                    "Incorrecto: cita prospecciones similares ('Similar sub-canopy surveys') sin establecer diferencias de precisión óptica entre regiones.",
                },
                {
                  id: "D",
                  text: "To prove that compact European walled towns failed whenever they adopted terraced orchards",
                  explanationEs:
                    "Incorrecto: las ciudades amuralladas europeas solo sirvieron en el párrafo 3 como contraste morfológico, nunca como caso de fracaso agrario.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (35 min study / 25 min official timer: 3m-plan / 15m-draft / 2m-audit)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Dataset Verification Note & The 3-15-2 Essay Protocol Without Spellcheck",
      estimatedMinutes: 35,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Instala hoy el protocolo disciplinado de examen real sin corrector ortográfico: en Part 2 (20 min), dedica exactamente 3 minutos a esquematizar tesis + ejemplos, 15 minutos a redactar sin detenerte a borrar frases enteras y los últimos 2 minutos exclusivamente a cazar errores de morfología ('economic/economical', '-ity/-ive'), pronombres ('its/their', 'that of/those of') y concordancia temporal.",
      tasks: [
        {
          part: "part1_note",
          id: "d10-writ-p1",
          cefrLevel: "B2",
          title: "Flagging a Fiscal-Year Discrepancy in Research Tables",
          prompt:
            "While proofreading statistical tables for Professor Kendrick's upcoming journal submission, you discovered that one regional employment spreadsheet uses calendar-year totals while the comparison region uses July-to-June fiscal years. Write a formal note to Professor Kendrick in which you: (1) identify the exact mismatch between the two datasets, (2) explain how leaving it unadjusted would distort the comparative table, and (3) propose a concrete correction before Friday's submission.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Aplica mini-protocolo 1m-plan / 3m-redacción / 1m-auditoría: usa 'that of' o 'those of' para comparar ambas series estadísticas, emplea 'would + verbo' para proyectar el efecto de no corregirlo y verifica en el último minuto sufijos como 'quarterly', 'comparative' y 'submission'.",
          recommendedConnectors: [
            "While verifying",
            "whereas",
            "that of",
            "would distort",
            "prior to",
          ],
          b2RubricChecklistEs: [
            "Cubre los 3 elementos exigidos (desfase año calendario vs. año fiscal, distorsión resultante y ajuste concreto antes del viernes).",
            "Respeta el rango oficial de 50 a 75 palabras en tono profesional académico.",
            "Utiliza correctamente una referencia demostrativa ('that of / those of') y concordancia condicional ('would distort').",
            "Revisión final limpia: cero errores en palabras con consonantes dobles o sufijos derivativos ('submission', 'quarterly', 'calendar').",
          ],
          modelAnswerB2:
            "Dear Professor Kendrick, While verifying Table 3 for Friday's journal submission, I noticed that the Northern Province spreadsheet reports calendar-year employment, whereas its Southern counterpart tracks July-to-June fiscal totals. Comparing those figures directly would distort seasonal hiring trends in our regression summary. Because raw quarterly records are available for both regions, I can recalculate the Southern figures to match those of the calendar dataset by Thursday afternoon. Sincerely, Elena Rostova",
        },
        {
          part: "part2_essay",
          id: "d10-writ-p2",
          cefrLevel: "B2",
          title: "Algorithmic Resume Screening vs. Human Evaluation in Hiring",
          prompt:
            "Many corporations and public institutions now use automated resume-screening and video-interview algorithms to filter job applicants before human recruiters review candidates. Supporters argue that algorithmic screening is faster, more economical, and more consistent than initial human review, whereas critics warn that automated tools penalize non-traditional career paths and replicate historical biases. Which approach should organizations prioritize, and why?",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Ejecuta rigurosamente el protocolo 3m-Plan / 15m-Redacción / 2m-Revisión: (0–3m) Anota postura híbrida/humana, 2 razones concretas y 4 piezas léxicas seguras ('economical', 'considerable', 'that of / those of', 'X and Y alike'); (3–18m) Redacta 4 párrafos cohesivos; (18–20m) Lee de abajo hacia arriba revisando sufijos sustantivo/adjetivo/adverbio, posesivos institucionales singulares ('an organization ... its') y tiempos verbales.",
          recommendedConnectors: [
            "Admittedly,",
            "economical",
            "that of / those of",
            "employers and applicants alike",
            "considerable",
          ],
          b2RubricChecklistEs: [
            "Tesis nítida desde el primer párrafo y extensión controlada entre 175 y 225 palabras.",
            "Emplea con exactitud semántica al menos dos formas morfológicas trabajadas hoy ('economical', 'considerable / considerably', 'consistency / sensitivity').",
            "Incluye una estructura comparativa con 'that of' o 'those of' y el cierre coordinado 'X and Y alike'.",
            "Mantiene concordancia pronominal singular para instituciones ('a company ... its', no 'their') y secuencia temporal coherente.",
            "Supera la auditoría de 2 minutos sin errores ortográficos ni tipográficos al escribir sin corrector.",
          ],
          modelAnswerB2:
            "As organizations receive thousands of digital job applications per opening, automated screening software has gained widespread appeal. Nevertheless, institutions should prioritize structured human evaluation over autonomous algorithmic filtering when selecting finalists, using software strictly for basic credential verification.\n\nAdmittedly, delegating initial screening to algorithms appears highly economical because software processes vast applicant pools within seconds. However, computational speed frequently masks considerable selection bias. Because predictive hiring models are trained on historical personnel records, their scoring criteria inevitably mirror those of past hiring managers. In several documented corporate audits, when companies trained algorithms on previous technical resumes, the software penalized qualified applicants who had taken family-care career breaks or graduated from non-elite colleges.\n\nFurthermore, rigid keyword filters overlook transferable analytical abilities that human evaluators readily recognize. A veteran laboratory coordinator transitioning into hospital administration, for instance, brings crisis-management judgment far exceeding that of candidates who merely repeat buzzwords from a job description.\n\nUltimately, an organization strengthens its workforce only when recruitment balances efficiency with contextual discernment. Limiting software to verifying required licenses while entrusting substantive evaluation to trained human panels protects employers and capable applicants alike from opaque automated exclusion.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Evidence-Based Revision & Public Science Funding Priorities",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "En Speaking Part 1 controla la secuencia temporal al narrar un cambio de criterio ('Initially, I had assumed that ... would ..., until new data showed...'). En Part 2 distingue con nitidez 'economic returns' (rendimientos económicos) de 'economical' y usa 'scientists and citizens alike' para cerrar con autoridad.",
      tasks: [
        {
          part: "part1_personal",
          id: "d10-speak-p1",
          cefrLevel: "B2",
          title: "Revising an Initial Assumption Based on New Evidence",
          prompt:
            "Describe an academic project, workplace decision, or research investigation in which unexpected data or a colleague's analysis convinced you to revise your original assumption. Explain what you initially believed and how changing direction improved the final outcome.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–12s (Initial Belief in Past Perfect): State the project and what you had initially assumed ('Initially, I had assumed that... would...').",
            "12–30s (Empirical Pivot): Explain the new data or colleague insight that contradicted your assumption.",
            "30–45s (Improved Result): Describe the concrete improvement achieved after adjusting course.",
          ],
          keyPhrasesB2: [
            "Initially, I had assumed that our results would mirror those of...",
            "However, closer inspection revealed a considerable gap between...",
            "Revising our methodology proved far more effective because...",
            "That experience taught me to verify raw evidence before...",
          ],
          selfRubricChecklistEs: [
            "Mantuve la secuencia temporal en pasado ('had assumed ... would', 'revealed', 'proved') sin saltos accidentales al presente.",
            "Utilicé al menos un término morfológico preciso ('considerable', 'economical', 'analytical') con pronunciación clara.",
            "Expliqué tanto la creencia original como la evidencia concreta que motivó el cambio.",
            "Completé la reflexión final dentro de los 45 segundos reglamentarios.",
          ],
          modelTranscriptB2:
            "Last semester, while organizing peer-tutoring hours for our department's introductory statistics clinic, I had initially assumed that scheduling evening sessions in the main library would attract the highest turnout. However, attendance logs from the first three weeks showed considerably lower participation than that of daytime workshops. When a colleague surveyed commuter students, we discovered that most working undergraduates left campus right after four p.m. to catch regional buses. Once we shifted half of our tutoring slots to midday breaks and offered synchronous online drop-in rooms at night, weekly attendance more than doubled.",
        },
        {
          part: "part2_opinion",
          id: "d10-speak-p2",
          cefrLevel: "B2",
          title: "Public University Grants: Applied Commercial Tech vs. Basic Science",
          prompt:
            "Some policymakers argue that public research universities should allocate government grant funding primarily to applied projects with immediate economic returns, such as commercial medical devices or industrial software. Others contend that basic theoretical research—even without foreseeable commercial applications—deserves equal public investment. Which funding approach do you support, and why?",
          audioPrompt: {
            trackId: "day10-speaking-p2",
            audioUrl: "/audio/day10-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-US-AvaMultilingualNeural",
                text: "Some policymakers argue that public research universities should allocate government grant funding primarily to applied projects with immediate economic returns, such as commercial medical devices or industrial software. Others contend that basic theoretical research—even without foreseeable commercial applications—deserves equal public investment. Which funding approach do you support, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Clear Position): Defend equal public investment in basic theoretical science alongside applied research.",
            "12–30s (Concession + Private-Sector Contrast): Acknowledge short-term economic pressure, then explain why private corporations already fund commercial products whereas only public grants sustain long-horizon discovery.",
            "30–50s (Historical Sequence Example): Cite a concrete breakthrough (e.g., mRNA, lasers, GPS atomic clocks) whose commercial value nobody had anticipated initially.",
            "50–60s (Decisive Synthesis): Conclude using 'short-term industries and future generations alike'.",
          ],
          keyPhrasesB2: [
            "Public research universities must safeguard robust funding for basic theoretical science...",
            "Whereas private corporations naturally invest in short-term commercial devices...",
            "Few policymakers at the time anticipated that curiosity-driven research would generate...",
            "Sustaining foundational inquiry benefits applied industries and future citizens alike.",
          ],
          selfRubricChecklistEs: [
            "Establecí una postura firme en los primeros segundos respondiendo directamente al dilema presupuestario.",
            "Usé 'economic' correctamente para referirme a retornos macroeconómicos/comerciales sin confundirlo con 'economical'.",
            "Mantuve la concordancia temporal ('nobody anticipated that ... would become') al presentar mi ejemplo histórico.",
            "Incluí 'that of / those of' o 'X and Y alike' con fluidez natural.",
            "Cerré el argumento completo antes del límite de 60 segundos sin quedar cortado a mitad de frase.",
          ],
          modelTranscriptB2:
            "I strongly believe that public research universities must maintain equal investment in basic theoretical science rather than restricting grants to short-term commercial projects. Admittedly, taxpayers appreciate applied innovations such as diagnostic devices that deliver visible economic returns within a few years. However, private corporations already possess considerable financial incentives to commercialize mature technologies, whereas their planning horizon is far shorter than that of public universities. History repeatedly shows that transformative breakthroughs emerge from curiosity-driven inquiry whose practical utility nobody had anticipated at the outset. When microbiologists studied obscure bacterial immune enzymes decades ago, few officials imagined that their work would enable CRISPR gene editing. Starving foundational research today would dry up the pipeline of applied inventions tomorrow, whereas balanced funding serves industry and society alike.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Completé los 10 reactivos de Grammar en menos de 8 minutos dominando 'that of / those of', 'economical/economic', 'considerable/considerate' y 'alike'.",
    "Resolví Listening P1, P2 y la clase de Psicología Cognitiva / Toma de Decisiones (P3) en una única reproducción.",
    "Completé Reading P1 y P2 bajo cronómetro estricto de 20 minutos acertando la inserción causal en `[D]`.",
    "Ejecuté el protocolo 3m-plan / 15m-redacción / 2m-revisión sin corrector en Writing P2 verificando sufijos y pronombres.",
    "Grabé Speaking P1 (45s) y P2 (60s) cuidando la secuencia temporal ('had assumed ... would') y el cierre puntual.",
  ],
};
