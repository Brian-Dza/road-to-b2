import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day09: RoadmapDay = {
  dayNumber: 9,
  sprintNumber: 2,
  cefrLevel: "B2",
  title: "Comparative Correlatives, Result Clauses & Contrastive Connectors",
  subtitleEs:
    "Correlativos proporcionales, cláusulas consecutivas ('so/such...that') y conectores concesivos/adversativos",
  b2FocusSummaryEs:
    "En el Sprint 2 consolidamos las relaciones lógico-sintácticas que distinguen el discurso académico B2 en iTEP Academic-Plus: correlativos comparativos proporcionales ('The more..., the more...' sin inversión interrogativa), cláusulas de resultado ('so + adj/adv + that', 'so + many/much/few/little + noun + that' frente a 'such + (a/an) + adj + noun + that'), el contraste estricto entre preposiciones concesivas ('despite / in spite of + sintagma nominal') y conjunciones subordinantes ('although / even though / whereas / while + cláusula'), además de escalares negativos como 'much less' y 'let alone'.",
  estimatedMinutes: 135,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Proportional Correlatives, Result Clauses & Concessive Architecture",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Antes de marcar una opción, clasifica lo que sigue al espacio: si hay sustantivo sin verbo finito principal (aunque lleve una cláusula relativa subordinada), exige preposición ('despite'); si hay cláusula completa con verbo conjugado, exige conjunción ('although / whereas'). En estructuras de resultado, distingue sustantivos incontables ('such + adj + noun') de cuantificadores de grado ('so few / so much').",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d09-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Comparative Correlatives (The more..., the more...)",
          sentenceWithBlank:
            "The more extensively a metropolitan region paves over its natural wetlands, _____ vulnerable downstream neighborhoods become to flash flooding.",
          options: [
            {
              id: "A",
              text: "more",
              explanationEs:
                "Incorrecto: en una estructura correlativa proporcional iniciada por 'The more...', la segunda cláusula exige obligatoriamente el artículo definido correlativo 'the' ante el comparativo ('the more vulnerable').",
            },
            {
              id: "B",
              text: "the more",
              explanationEs:
                "Correcto: completa simétricamente la correlación proporcional 'The + comparativo + S + V, the + comparativo + S + V' manteniendo el orden declarativo en 'downstream neighborhoods become'.",
            },
            {
              id: "C",
              text: "the most",
              explanationEs:
                "Incorrecto: el grado superlativo 'the most' rompe la relación de covariación gradual que exige dos formas comparativas emparejadas.",
            },
            {
              id: "D",
              text: "so much",
              explanationEs:
                "Incorrecto: 'so much' es un intensificador consecutivo o cuantitativo que no puede correlacionarse sintácticamente con 'The more extensively' al inicio de la oración.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Cuando una oración abre con 'The + comparativo + sujeto + verbo,', busca tras la coma exactamente 'the + comparativo' seguido de orden sujeto + verbo sin inversión auxiliar.",
        },
        {
          part: "part1_fill_blank",
          id: "d09-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Result Clauses with Uncountable Nouns (such + adj + noun + that)",
          sentenceWithBlank:
            "Subtropical cave sediments typically retain _____ high ambient humidity that ancient collagen fibers degrade long before excavation.",
          options: [
            {
              id: "A",
              text: "so",
              explanationEs:
                "Incorrecto: 'so' modifica adjetivos o adverbios aislados ('so humid that'), pero no puede preceder un grupo nominal incontable con adjetivo ('*so high ambient humidity').",
            },
            {
              id: "B",
              text: "such a",
              explanationEs:
                "Incorrecto: el núcleo nominal 'humidity' es estrictamente incontable en inglés académico, por lo que rechaza el artículo indefinido 'a'.",
            },
            {
              id: "C",
              text: "such",
              explanationEs:
                "Correcto: ante el sintagma nominal incontable modificado 'high ambient humidity' seguido de cláusula consecutiva con 'that', la regla exige 'such + adjetivo + sustantivo incontable/plural + that'.",
            },
            {
              id: "D",
              text: "too",
              explanationEs:
                "Incorrecto: 'too' construye complementos de infinitivo ('too humid to preserve'), jamás cláusulas finitas de resultado introducidas por 'that' ni grupos nominales directos.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Antes de elegir entre 'so', 'such' y 'such a', localiza el sustantivo antes de 'that': si es incontable o plural con adjetivo calificativo, usa 'such' sin artículo.",
        },
        {
          part: "part1_fill_blank",
          id: "d09-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Concessive Prepositions vs. Subordinating Conjunctions",
          sentenceWithBlank:
            "_____ the substantial fare subsidies that municipal transit authorities introduced last autumn, weekday commuter rail ridership has remained below projections.",
          options: [
            {
              id: "A",
              text: "Despite",
              explanationEs:
                "Correcto: 'the substantial fare subsidies' es únicamente un sintagma nominal; el verbo 'introduced' pertenece a la cláusula relativa interna 'that ... introduced', por lo que se requiere la preposición concesiva 'Despite'.",
            },
            {
              id: "B",
              text: "Although",
              explanationEs:
                "Incorrecto: trampa clásica de iTEP; 'Although' exige una cláusula con verbo principal propio para 'subsidies', pero aquí 'subsidies' carece de predicado fuera de la subordinada relativa.",
            },
            {
              id: "C",
              text: "Whereas",
              explanationEs:
                "Incorrecto: 'Whereas' es una conjunción de contraste directo que requiere sujeto y verbo finito, nunca un sintagma nominal aislado.",
            },
            {
              id: "D",
              text: "Despite of",
              explanationEs:
                "Incorrecto: cruce agramatical entre 'despite' e 'in spite of'; 'despite' jamás admite la preposición 'of'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Encierra entre corchetes cualquier cláusula relativa ('that ... introduced'): si al quitarla solo queda un grupo nominal antes de la coma, descarta 'Although/Even though' y elige 'Despite/In spite of'.",
        },
        {
          part: "part1_fill_blank",
          id: "d09-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Negative-Polarity Scalar Coordinators (let alone / much less)",
          sentenceWithBlank:
            "Early hull-mounted sonar arrays could scarcely detect large submarine ridges, _____ map the narrow hydrothermal vents hidden along abyssal fault lines.",
          options: [
            {
              id: "A",
              text: "in addition to",
              explanationEs:
                "Incorrecto: 'in addition to' expresa suma afirmativa y como locución preposicional exigiría gerundio ('mapping'), no el infinitivo base 'map' paralelo a 'detect'.",
            },
            {
              id: "B",
              text: "even though",
              explanationEs:
                "Incorrecto: conjunción concesiva que requiere una cláusula finita con sujeto explícito, incapaz de coordinar el infinitivo sin 'to' ('map').",
            },
            {
              id: "C",
              text: "on the contrary",
              explanationEs:
                "Incorrecto: adverbio conjuntivo que exige punto y coma previo y oración completa para refutar una negación anterior, no para escalar imposibilidad.",
            },
            {
              id: "D",
              text: "let alone",
              explanationEs:
                "Correcto: activado por el adverbio de polaridad negativa 'scarcely', el conector escalar 'let alone' ('y mucho menos') coordina en paralelo los infinitivos base 'detect' y 'map' tras el modal 'could'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Tras una cláusula negativa o restrictiva ('not', 'rarely', 'scarcely', 'hardly'), 'let alone' y 'much less' introducen una acción aún más improbable respetando el paralelismo verbal exacto.",
        },
        {
          part: "part1_fill_blank",
          id: "d09-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Contrastive Subordinators vs. Conjunctive Adverbs",
          sentenceWithBlank:
            "Conventional lithium-ion batteries rely on scarce cobalt cathodes, _____ emerging sodium-ion prototypes utilize abundant mineral salts.",
          options: [
            {
              id: "A",
              text: "however",
              explanationEs:
                "Incorrecto: 'however' es un adverbio conjuntivo, no una conjunción subordinante; unir dos cláusulas independientes solo con coma + 'however' produce un 'comma splice' sancionado en iTEP.",
            },
            {
              id: "B",
              text: "in spite of",
              explanationEs:
                "Incorrecto: locución preposicional que no puede preceder directamente a la cláusula finita 'emerging sodium-ion prototypes utilize...'.",
            },
            {
              id: "C",
              text: "whereas",
              explanationEs:
                "Correcto: conjunción subordinante de contraste simétrico que enlaza legítimamente dos proposiciones contrapuestas tras una simple coma.",
            },
            {
              id: "D",
              text: "otherwise",
              explanationEs:
                "Incorrecto: adverbio conjuntivo condicional negativo ('de lo contrario'), incompatible tanto con la puntuación de coma simple como con el contraste descriptivo entre tecnologías.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Fíjate en la puntuación: entre coma simple y cláusula completa sin punto y coma, usa conjunción subordinante ('whereas', 'while', 'although'), nunca adverbios conjuntivos ('however', 'nevertheless').",
        },
        {
          part: "part2_error_identification",
          id: "d09-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Quantifiers in Result Clauses (so few/little/many/much vs. *such few)",
          sentenceWithMarkedSegments:
            "Until recently, [A]{such few} oceanographic vessels [B]{carried} deep-towed magnetometers [C]{that} geophysicists could chart only a small fraction [D]{of the southern} seafloor.",
          correctedSegment: "so few",
          options: [
            {
              id: "A",
              text: "such few",
              explanationEs:
                "Incorrecto (contiene el error): ante los cuantificadores de cantidad o número ('many', 'much', 'few', 'little') en construcciones consecutivas con 'that', el inglés exige obligatoriamente 'so' ('so few'), nunca 'such'.",
            },
            {
              id: "B",
              text: "carried",
              explanationEs:
                "Correcto en la oración: verbo transitivo en Past Simple coherente con el marco temporal pasado 'Until recently' y con 'could chart'.",
            },
            {
              id: "C",
              text: "that",
              explanationEs:
                "Correcto en la oración: conjunción que introduce la cláusula consecutiva derivada del grado escaso de embarcaciones equipadas.",
            },
            {
              id: "D",
              text: "of the southern",
              explanationEs:
                "Correcto en la oración: complemento partitivo bien formado tras 'only a small fraction' especificando la región oceánica.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Memoriza la excepción de oro de iTEP: 'such' acompaña adjetivos calificativos + sustantivo, pero con 'many, much, few, little' la única combinación válida antes de 'that' es 'so many / so much / so few / so little'.",
        },
        {
          part: "part2_error_identification",
          id: "d09-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Declarative Word Order in Comparative Correlatives",
          sentenceWithMarkedSegments:
            "The [A]{more fragmented} a woodland corridor becomes [B]{after} highway construction, the faster [C]{does genetic diversity erode} among isolated [D]{mammalian populations}.",
          correctedSegment: "genetic diversity erodes",
          options: [
            {
              id: "A",
              text: "more fragmented",
              explanationEs:
                "Correcto en la oración: predicado comparativo adelantado tras 'The' y vinculado adecuadamente al verbo copulativo 'becomes'.",
            },
            {
              id: "B",
              text: "after",
              explanationEs:
                "Correcto en la oración: preposición temporal seguida del grupo nominal 'highway construction'.",
            },
            {
              id: "C",
              text: "does genetic diversity erode",
              explanationEs:
                "Incorrecto (contiene el error): a diferencia de las inversiones negativas o con 'So + adv', los correlativos 'The..., the...' exigen orden declarativo normal ('sujeto + verbo': 'genetic diversity erodes'), sin auxiliar 'does'.",
            },
            {
              id: "D",
              text: "mammalian populations",
              explanationEs:
                "Correcto en la oración: adjetivo relacional + sustantivo plural regido por la preposición 'among' y modificado por 'isolated'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "No confundas 'So rapidly did X erode...' (que sí invierte el auxiliar) con 'The faster..., the faster X erodes' (donde insertar 'do/does/did' antes del sujeto siempre es error).",
        },
        {
          part: "part2_error_identification",
          id: "d09-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Preposition vs. Conjunction in Embedded Concessive Clauses",
          sentenceWithMarkedSegments:
            "The municipal audit [A]{concluded that}, [B]{in spite of} solar installation costs [C]{had fallen} by forty percent, commercial landlords [D]{still favored} short-term gas leases.",
          correctedSegment: "even though",
          options: [
            {
              id: "A",
              text: "concluded that",
              explanationEs:
                "Correcto en la oración: verbo declarativo en pasado seguido de la conjunción 'that' que gobierna la cláusula matriz subordinada 'commercial landlords still favored...'.",
            },
            {
              id: "B",
              text: "in spite of",
              explanationEs:
                "Incorrecto (contiene el error): le sigue una cláusula finita completa ('solar installation costs had fallen'), por lo que la locución preposicional 'in spite of' es agramatical sin 'the fact that'; debe usarse 'even though' o 'although'.",
            },
            {
              id: "C",
              text: "had fallen",
              explanationEs:
                "Correcto en la oración: Past Perfect que expresa anterioridad del descenso de costos respecto al momento pasado de la auditoría ('concluded' / 'favored').",
            },
            {
              id: "D",
              text: "still favored",
              explanationEs:
                "Correcto en la oración: adverbio de persistencia + verbo en Past Simple funcionando como predicado de 'commercial landlords'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Cuando aparezca 'despite' o 'in spite of' entre comas, verifica de inmediato si el grupo siguiente contiene un verbo conjugado ('had fallen'): si lo tiene, cámbialo por 'although / even though'.",
        },
        {
          part: "part2_error_identification",
          id: "d09-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic:
            "Article Placement in Result Clauses (such a + adj + noun vs. so + adj + a + noun)",
          sentenceWithMarkedSegments:
            "International patent law [A]{establishes} [B]{so a complex} evidentiary threshold [C]{that} independent inventors rarely litigate cross-border infringement claims [D]{without} institutional backing.",
          correctedSegment: "such a complex",
          options: [
            {
              id: "A",
              text: "establishes",
              explanationEs:
                "Correcto en la oración: verbo en Present Simple singular en concordancia con el sustantivo incontable 'International patent law'.",
            },
            {
              id: "B",
              text: "so a complex",
              explanationEs:
                "Incorrecto (contiene el error): la secuencia '*so + a/an + adjetivo + sustantivo' no existe en inglés estándar; debe escribirse 'such a complex evidentiary threshold' (o, en registro ultraformal elevado, 'so complex an evidentiary threshold').",
            },
            {
              id: "C",
              text: "that",
              explanationEs:
                "Correcto en la oración: introduce con precisión la consecuencia práctica para los inventores independientes.",
            },
            {
              id: "D",
              text: "without",
              explanationEs:
                "Correcto en la oración: preposición que introduce el sustantivo compuesto 'institutional backing'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Revisa el orden exacto del artículo indefinido en cláusulas consecutivas: 'such + a/an + adj + sustantivo contable singular' o 'so + adj + a/an + sustantivo', jamás '*so a/an + adj'.",
        },
        {
          part: "part2_error_identification",
          id: "d09-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Verbal Parallelism After Negative Scalar Connector (much less)",
          sentenceWithMarkedSegments:
            "Without calibrated spectrometers, field chemists [A]{can neither verify} trace mercury levels [B]{in} estuarine water [C]{nor} model seasonal runoff, [D]{much less predicting} long-term bioaccumulation.",
          correctedSegment: "much less predict",
          options: [
            {
              id: "A",
              text: "can neither verify",
              explanationEs:
                "Correcto en la oración: auxiliar modal 'can' + correlativo negativo 'neither' + infinitivo base 'verify', que abre el marco de polaridad negativa.",
            },
            {
              id: "B",
              text: "in",
              explanationEs:
                "Correcto en la oración: preposición espacial/locativa adecuada para 'levels in estuarine water'.",
            },
            {
              id: "C",
              text: "nor",
              explanationEs:
                "Correcto en la oración: segundo miembro del par correlativo 'neither ... nor' seguido del infinitivo paralelo 'model'.",
            },
            {
              id: "D",
              text: "much less predicting",
              explanationEs:
                "Incorrecto (contiene el error): el conector escalar 'much less' coordina acciones dependientes del mismo auxiliar 'can' ('can neither verify ... nor model, much less predict'), por lo que el gerundio 'predicting' rompe el paralelismo verbal.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Trata 'much less' y 'let alone' como coordinadores simétricos: la forma gramatical que les sigue debe calcar exactamente la forma verbal de los elementos previos ('verify ... model ... predict').",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (30 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Pragmatic Constraints, Survey Methodology & Neuroscience of Sleep",
      estimatedMinutes: 30,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "En una única escucha, entrena tu oído para detectar conectores concesivos ('although', 'despite') y escalares negativos ('much less'): la condición real casi siempre aparece inmediatamente después de la concesión, descartando lo que parecía resuelto al inicio.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d09-list-p1",
          title: "Spectrometer Stabilization After Campus Power Test",
          cefrLevel: "B2",
          audio: {
            trackId: "day09-listening-p1",
            audioUrl: "/audio/day09-listening-p1.mp3",
            contextSetup:
              "An organic chemistry student speaks with the instrumentation coordinator outside the analytical laboratory.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Hi Dr. Patel. Despite this morning's electrical grid test, Facilities announced that building power was restored at noon, so I brought my synthesis vials over for an afternoon spectrometer run.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-GuyNeural",
                text: "The wall outlets are back online, Maya, whereas our superconducting magnet still needs six uninterrupted hours of cryogenic cooling to regain field homogeneity.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-GuyNeural",
                text: "Right now we can't even run a two-minute baseline calibration, much less queue multi-sample organic scans.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Got it—I'll store my vials in the cold room overnight and sign up for tomorrow's eight a.m. priority block before lectures start.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d09-list-p1-q01",
              prompt: "What can be inferred from the conversation?",
              options: [
                {
                  id: "A",
                  text: "Campus Facilities failed to restore electricity to the chemistry building at noon.",
                  explanationEs:
                    "Incorrecto: el coordinador confirma explícitamente que los enchufes del edificio ya tienen energía ('The wall outlets are back online').",
                },
                {
                  id: "B",
                  text: "Restoring building electricity does not make the spectrometer immediately usable for sample analysis.",
                  explanationEs:
                    "Correcto: aunque volvió la luz al mediodía, el imán superconductor requiere seis horas continuas de enfriamiento criogénico antes de poder calibrarse o procesar muestras.",
                },
                {
                  id: "C",
                  text: "Maya is allowed to run a brief baseline calibration this afternoon if she skips full scans.",
                  explanationEs:
                    "Incorrecto: el uso de 'can't even run a two-minute baseline calibration, much less queue...' descarta tanto la calibración corta como el escaneo completo.",
                },
                {
                  id: "D",
                  text: "Synthesis vials lose chemical stability if kept in the cold room overnight.",
                  explanationEs:
                    "Incorrecto: la propia estudiante decide guardarlos en el cuarto frío durante la noche para analizarlos a las ocho de la mañana.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Cuando un hablante dice 'X is back online, whereas Y still needs...' seguido de 'can't even A, much less B', ambas acciones A y B están bloqueadas temporalmente.",
        },
        {
          part: "part2_conversation",
          id: "d09-list-p2",
          title: "Troubleshooting Low Response Rates in an Honors Thesis Survey",
          cefrLevel: "B2",
          audio: {
            trackId: "day09-listening-p2",
            audioUrl: "/audio/day09-listening-p2.mp3",
            contextSetup:
              "A senior sociology student consults her thesis advisor about low participation in her municipal remote-work study.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Professor Whitaker, do you have a moment? Despite distributing four hundred digital questionnaires to city-hall staff two weeks ago, my thesis response rate has stalled at nine percent.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Nine percent is well below the twenty-five-percent threshold we need for subgroup analysis, Elena. Have you checked whether the links actually reached employees' primary inboxes?",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "I called a contact in the planning office yesterday, and she discovered that the city's cybersecurity filter routes external university survey links straight into a quarantine digest that staff rarely open.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "That explains the bottleneck. And among the thirty-six employees who did open the link, did everyone finish the form?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Actually, half of them dropped out midway. My instrument has thirty-eight open-text questions, whereas Trevor's hospital-staff survey used compact rating grids and hit forty percent.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Right—the longer an open-ended questionnaire scrolls on a phone screen during a lunch break, the faster respondents abandon it. You have such rich qualitative questions there that they really belong in interviews rather than a mass survey.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Should I condense the survey into a twelve-item Likert matrix and conduct five short follow-up interviews instead?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Exactly. Also, ask the city's Human Resources director to embed the revised link inside their internal Monday bulletin so it bypasses the external spam filter. Just remember to file a minor modification form with the ethics board before Friday.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Does a minor modification require waiting another month for full committee review?",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "No, because your participant pool and privacy safeguards remain unchanged, the chair signs off on expedited amendments within forty-eight hours.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d09-list-p2-q01",
              prompt: "What two factors caused the low completion rate in Elena's study?",
              options: [
                {
                  id: "A",
                  text: "City-hall employees lacked smartphones, and the survey link expired prematurely.",
                  explanationEs:
                    "Incorrecto: al contrario, el profesor menciona que los empleados abren encuestas desde el teléfono durante el almuerzo, y nunca se habla de enlaces vencidos.",
                },
                {
                  id: "B",
                  text: "An email security filter quarantined external links, and the lengthy open-text format caused high abandonment.",
                  explanationEs:
                    "Correcto: combina los dos diagnósticos exactos de la conversación: el filtro municipal desvió los correos externos a cuarentena y la mitad de quienes sí abrieron las 38 preguntas abiertas abandonaron a mitad del formulario.",
                },
                {
                  id: "C",
                  text: "Hospital employees were accidentally surveyed instead of municipal planning staff.",
                  explanationEs:
                    "Incorrecto: la encuesta de personal hospitalario pertenece a su compañero Trevor, citada como punto de comparación metodológica ('whereas Trevor's...').",
                },
                {
                  id: "D",
                  text: "The university ethics board suspended data collection pending a privacy audit.",
                  explanationEs:
                    "Incorrecto: el estudio ya estaba aprobado y sus salvaguardas de privacidad permanecen intactas.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d09-list-p2-q02",
              prompt: "Why does Elena mention Trevor's research project?",
              options: [
                {
                  id: "A",
                  text: "To contrast her lengthy open-ended design with a concise matrix format that achieved higher participation",
                  explanationEs:
                    "Correcto: usa 'whereas' para contrastar sus 38 preguntas de texto abierto con las cuadrículas compactas de valoración de Trevor, que alcanzaron 40 % de respuesta.",
                },
                {
                  id: "B",
                  text: "To request permission to merge her municipal dataset with his hospital dataset",
                  explanationEs:
                    "Incorrecto: en ningún momento propone fusionar bases de datos de dos poblaciones laborales distintas.",
                },
                {
                  id: "C",
                  text: "To argue that twenty-five percent is an unrealistically high statistical threshold",
                  explanationEs:
                    "Incorrecto: el 40 % logrado por Trevor demuestra precisamente que superar el umbral del 25 % sí es factible con un diseño adecuado.",
                },
                {
                  id: "D",
                  text: "To show that hospital firewalls block university emails even more aggressively than city hall",
                  explanationEs:
                    "Incorrecto: no se menciona ningún bloqueo informático en el estudio de Trevor.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d09-list-p2-q03",
              prompt: "How does Professor Whitaker suggest overcoming the municipal email filter?",
              options: [
                {
                  id: "A",
                  text: "Distributing printed paper questionnaires inside the city-hall lobby",
                  explanationEs:
                    "Incorrecto: no sugiere encuestas impresas, sino redistribuir el enlace digital por un canal institucional interno.",
                },
                {
                  id: "B",
                  text: "Asking the city's Human Resources director to include the link in an internal staff bulletin",
                  explanationEs:
                    "Correcto: recomienda solicitar a la dirección de Recursos Humanos del municipio insertar el enlace revisado en su boletín interno de los lunes para evitar el filtro antispam externo.",
                },
                {
                  id: "C",
                  text: "Sending the questionnaire from Elena's personal email account rather than her university address",
                  explanationEs:
                    "Incorrecto: una cuenta personal seguiría siendo externa al dominio municipal y nunca es sugerida por el asesor.",
                },
                {
                  id: "D",
                  text: "Replacing the entire survey with thirty-six telephone interviews",
                  explanationEs:
                    "Incorrecto: mantienen la encuesta abreviada de 12 ítems complementada únicamente con cinco entrevistas breves de seguimiento.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d09-list-p2-q04",
              prompt: "Why will Elena's ethics-board amendment be processed quickly?",
              options: [
                {
                  id: "A",
                  text: "Professor Whitaker chairs the university ethics committee himself.",
                  explanationEs:
                    "Incorrecto: el profesor se refiere a 'the chair' en tercera persona, sin afirmar que él presida el comité.",
                },
                {
                  id: "B",
                  text: "Undergraduate honors theses are exempt from ethics oversight after midterms.",
                  explanationEs:
                    "Incorrecto: sí requiere presentar un formulario de modificación menor antes del viernes; no está exenta.",
                },
                {
                  id: "C",
                  text: "Her target participant group and confidentiality protections are staying the same.",
                  explanationEs:
                    "Correcto: al final explica que, como la población participante y las garantías de privacidad no cambian, la presidencia aprueba enmiendas abreviadas en 48 horas.",
                },
                {
                  id: "D",
                  text: "The Human Resources director has already signed a municipal waiver.",
                  explanationEs:
                    "Incorrecto: todavía debe contactar a Recursos Humanos, y eso no sustituye la revisión ética universitaria.",
                },
              ],
              correctOptionId: "C",
            },
          ],
          keyTakeawayEs:
            "Presta atención a las correlaciones explicativas del profesor ('the longer..., the faster...') y al último intercambio aclaratorio: iTEP suele cerrar Part 2 despejando un temor administrativo del estudiante.",
        },
        {
          part: "part3_lecture",
          id: "d09-list-p3",
          title:
            "Neuroscience of Sleep: Slow-Wave Oscillations, Glymphatic Clearance & Synaptic Homeostasis",
          cefrLevel: "B2",
          audio: {
            trackId: "day09-listening-p3",
            audioUrl: "/audio/day09-listening-p3.mp3",
            contextSetup:
              "A behavioral neuroscience professor lectures on the restorative mechanisms of deep non-REM sleep.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Today in behavioral neuroscience, we're examining a longstanding evolutionary puzzle: despite rendering animals unresponsive to predators for hours every night, sleep has been conserved across virtually every studied nervous system. Recent breakthroughs show that deep non-REM slow-wave sleep performs two indispensable maintenance tasks—molecular waste clearance and selective synaptic recalibration.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Whereas peripheral organs rely on lymphatic vessels to drain cellular debris, the brain lacks conventional lymphatic plumbing altogether. Yet waking cortical neurons are so metabolically active that toxic protein byproducts—most notably beta-amyloid and tau peptides—steadily accumulate in the narrow fluid spaces between cells.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Two-photon imaging in live mammalian brains revealed how sleep resolves this bottleneck through what researchers term the glymphatic system. As the cortex transitions into synchronized slow-wave delta oscillations, star-shaped support cells called astrocytes shrink in volume by nearly sixty percent. That contraction widens interstitial channels so dramatically that cerebrospinal fluid flushes through neural tissue at roughly twice its waking rate. Simply put, the deeper and more continuous those slow-wave oscillations become, the more efficiently neurotoxic waste is swept out.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Simultaneously, slow-wave sleep governs what neurobiologists call synaptic homeostasis. Throughout a day of active learning, encoding new experiences strengthens thousands of excitatory synapses across the cortex. Left unchecked, such relentless potentiation would saturate neural circuits and consume unsustainable cellular energy. Slow-wave oscillations downscale weaker, incidental connections proportionally while sparing strongly tagged core memories, restoring the brain's capacity to learn the next morning.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Crucially, however, behavioral unconsciousness is not synonymous with restorative slow-wave architecture. Conventional sedative hypnotics—and especially evening alcohol—accelerate sleep onset, yet electroencephalograms show that they flatten high-amplitude delta waves. Consequently, sedated individuals wake up without robust glymphatic clearance, much less optimal memory consolidation.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "This mechanism also explains why total-hours metrics on consumer wrist trackers can be deceptive: frequent acoustic or apneic micro-arousals abort slow-wave cycles before astrocytic channels fully open, leaving eight hours of fragmented sleep cognitively equivalent to severe sleep restriction.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d09-list-p3-q01",
              prompt: "What is the central focus of the lecture?",
              options: [
                {
                  id: "A",
                  text: "How deep slow-wave sleep clears metabolic waste and recalibrates neural connections, and why disrupted delta waves undermine both processes",
                  explanationEs:
                    "Correcto: abarca la tesis dual anunciada al inicio (limpieza glinfática + homeostasis sináptica) junto con las implicaciones clínicas sobre sedantes y sueño fragmentado.",
                },
                {
                  id: "B",
                  text: "Why predatory mammals evolved shorter REM dreaming cycles than herbivorous species",
                  explanationEs:
                    "Incorrecto: los depredadores solo se mencionan en la introducción para ilustrar la paradoja evolutiva del sueño, y la clase trata sobre sueño lento no-REM, no sueños REM.",
                },
                {
                  id: "C",
                  text: "How lymphatic vessels inside the cerebral cortex regenerate damaged neurons during naps",
                  explanationEs:
                    "Incorrecto: contradice el segundo bloque, donde la profesora subraya que el cerebro carece de vasos linfáticos convencionales ('lacks conventional lymphatic plumbing').",
                },
                {
                  id: "D",
                  text: "Why consumer wrist trackers outperform laboratory electroencephalograms in diagnosing sleep apnea",
                  explanationEs:
                    "Incorrecto: al final advierte precisamente que las métricas de horas totales en pulseras comerciales pueden resultar engañosas ('can be deceptive').",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d09-list-p3-q02",
              prompt:
                "According to the professor, how do astrocytes facilitate glymphatic clearance during slow-wave sleep?",
              options: [
                {
                  id: "A",
                  text: "They secrete enzymes that chemically dissolve beta-amyloid inside waking neurons.",
                  explanationEs:
                    "Incorrecto: el mecanismo descrito es hidrodinámico durante el sueño lento, no disolución enzimática en vigilia.",
                },
                {
                  id: "B",
                  text: "They contract substantially, expanding intercellular pathways so cerebrospinal fluid can flush out accumulated proteins.",
                  explanationEs:
                    "Correcto: los astrocitos reducen su volumen casi un 60 %, ensanchando los canales intersticiales para que el líquido cefalorraquídeo arrastre los péptidos neurotóxicos al doble de velocidad.",
                },
                {
                  id: "C",
                  text: "They block cerebrospinal fluid from entering the cortex so excitatory synapses remain dry.",
                  explanationEs:
                    "Incorrecto: invierte la relación causal; su contracción aumenta el flujo de líquido cefalorraquídeo a través del tejido neural.",
                },
                {
                  id: "D",
                  text: "They generate rapid high-frequency beta waves that wake the sleeper every ninety minutes.",
                  explanationEs:
                    "Incorrecto: el proceso ocurre durante oscilaciones lentas delta sincronizadas, no ondas rápidas de despertar.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d09-list-p3-q03",
              prompt: "Why is synaptic downscaling necessary after a full day of waking learning?",
              options: [
                {
                  id: "A",
                  text: "Because erasing core long-term memories prevents emotional overload in the prefrontal cortex",
                  explanationEs:
                    "Incorrecto: la profesora aclara que se atenúan conexiones incidentales débiles mientras se preservan las memorias centrales ('sparing strongly tagged core memories').",
                },
                {
                  id: "B",
                  text: "Because continuous strengthening of synapses would otherwise exhaust cellular energy and saturate neural networks",
                  explanationEs:
                    "Correcto: explica que la potenciación incesante saturaría los circuitos neuronales y consumiría energía celular insostenible, impidiendo aprender al día siguiente.",
                },
                {
                  id: "C",
                  text: "Because excitatory synapses cannot transmit electrical signals unless astrocytes expand by sixty percent",
                  explanationEs:
                    "Incorrecto: mezcla erróneamente la contracción astrocitaria con la transmisión eléctrica sin sustento en la clase.",
                },
                {
                  id: "D",
                  text: "Because tau peptides are required to build new dendritic spines each morning",
                  explanationEs:
                    "Incorrecto: los péptidos tau y beta-amiloide se describen como subproductos metabólicos tóxicos que deben barrerse.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d09-list-p3-q04",
              prompt:
                "What distinction does the professor draw regarding conventional sedatives and evening alcohol?",
              options: [
                {
                  id: "A",
                  text: "They prolong high-amplitude delta waves while delaying initial sleep onset.",
                  explanationEs:
                    "Incorrecto: ocurre exactamente al revés; aceleran el inicio de la inconsciencia ('accelerate sleep onset') pero aplanan las ondas delta de gran amplitud.",
                },
                {
                  id: "B",
                  text: "They induce unconsciousness quickly yet suppress the delta oscillations needed for waste clearance and memory consolidation.",
                  explanationEs:
                    "Correcto: subraya que la inconsciencia conductual no equivale a sueño restaurador porque estos fármacos y el alcohol aplanan las ondas delta, privando al cerebro de limpieza glinfática y consolidación.",
                },
                {
                  id: "C",
                  text: "They enhance synaptic homeostasis but interfere with peripheral lymphatic drainage.",
                  explanationEs:
                    "Incorrecto: perjudican tanto el barrido glinfático como la consolidación de memoria ('much less optimal memory consolidation').",
                },
                {
                  id: "D",
                  text: "They prevent micro-arousals so effectively that six hours of sedated sleep equals nine hours of natural rest.",
                  explanationEs:
                    "Incorrecto: contradice directamente la crítica neurofisiológica expuesta por la profesora.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d09-list-p3-q05",
              prompt:
                "What can be inferred from the professor's concluding remark about wrist sleep trackers?",
              options: [
                {
                  id: "A",
                  text: "Logging eight hours in bed does not guarantee cognitive recovery if brief awakenings repeatedly interrupt slow-wave continuity.",
                  explanationEs:
                    "Correcto: dado que los microdespertares abortan los ciclos de onda lenta antes de que se abran plenamente los canales astrocitarios, medir solo horas totales oculta un deterioro equivalente a restricción severa.",
                },
                {
                  id: "B",
                  text: "Wearable sensors emit light pulses that trigger sleep apnea in healthy adults.",
                  explanationEs:
                    "Incorrecto: no atribuye la apnea ni los microdespertares al uso del reloj, sino que señala la limitación diagnóstica de medir únicamente duración bruta.",
                },
                {
                  id: "C",
                  text: "People who sleep fewer than six continuous hours always achieve fuller glymphatic clearance than eight-hour sleepers.",
                  explanationEs:
                    "Incorrecto: no afirma que dormir poco sea superior al sueño continuo normal, sino que ocho horas fragmentadas equivalen a restricción severa.",
                },
                {
                  id: "D",
                  text: "Consumer wrist trackers measure astrocytic volume directly rather than movement.",
                  explanationEs:
                    "Incorrecto: la medición del volumen astrocitario requirió microscopía de dos fotones en cerebros vivos, no relojes comerciales.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d09-list-p3-q06",
              prompt: "How does the professor organize the lecture?",
              options: [
                {
                  id: "A",
                  text: "By framing an evolutionary paradox, detailing two physiological mechanisms of slow-wave sleep, and contrasting natural delta continuity with sedation and fragmentation",
                  explanationEs:
                    "Correcto: refleja fielmente la progresión retórica: paradoja evolutiva inicial -> sistema glinfático + homeostasis sináptica -> implicaciones sobre sedantes/alcohol y fragmentación.",
                },
                {
                  id: "B",
                  text: "By tracing the historical invention of electroencephalography from the nineteenth century to modern wearables",
                  explanationEs:
                    "Incorrecto: no es una historia cronológica de instrumentos de medición.",
                },
                {
                  id: "C",
                  text: "By debating two rival hypotheses that reject the existence of the glymphatic system",
                  explanationEs:
                    "Incorrecto: ambos mecanismos (limpieza glinfática y homeostasis sináptica) se presentan como procesos simultáneos y complementarios ('Simultaneously...'), no como teorías excluyentes.",
                },
                {
                  id: "D",
                  text: "By classifying clinical insomnia medications according to their chemical half-life",
                  explanationEs:
                    "Incorrecto: los hipnóticos sedantes solo se abordan en un bloque para contrastar inconsciencia frente a arquitectura de ondas lentas.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "En conferencias densas de neurociencia (Part 3), vincula cada proceso técnico con su relación proporcional ('the deeper the oscillations, the more efficiently...') y anota qué pasa cuando una variable externa (sedantes o microdespertares) interrumpe el ciclo.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (35 min study / 20 min official pace for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Targeted RNA Biopesticides & Photosynthetic Crop Bioengineering",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "En textos de bioingeniería agrícola, rastrea las relaciones de contraste ('whereas', 'despite', 'rather than') para no invertir qué técnica pertenece a la generación anterior y cuál a la nueva. En Sentence Insertion (`[A]..[D]`), verifica el anclaje léxico tanto hacia atrás ('this chemical signaling approach') como hacia adelante.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d09-read-p1",
          title: "RNA-Interference Foliar Sprays in Precision Pest Management",
          cefrLevel: "B2",
          topicDomain: "Agricultural Bioengineering & Pest Ecology",
          paragraphs: [
            "Conventional synthetic insecticides protect global harvests from devastating beetle and moth outbreaks, yet their broad-spectrum neurotoxicity frequently harms honeybees, predatory ladybugs, and aquatic invertebrates in adjacent watersheds. Seeking a narrower molecular target, agricultural bioengineers have developed topical foliar sprays based on ribonucleic acid interference (RNAi). Rather than altering the genome of the crop itself, these formulations coat plant leaves with microscopic double-stranded RNA molecules tailored to match a single vital gene inside a target pest species. When foraging larvae ingest treated foliage, their own cellular machinery recognizes the matching sequence and silences the essential protein, halting larval development within days.",
            "Because double-stranded RNA sequences can be designed with such high taxonomic specificity that even closely related beneficial insects remain unaffected, field ecologists view topical RNAi as a promising alternative to persistent chemical sprays. Moreover, unprotected RNA strands degrade rapidly under ultraviolet sunlight and soil microbial enzymes, preventing long-term bioaccumulation in groundwater. Paradoxically, however, that same environmental fragility initially limited commercial adoption: heavy rainfall or intense midday radiation often broke down naked RNA droplets before pests consumed an effective dose.",
            "To overcome premature degradation without sacrificing biodegradability, formulation scientists now encapsulate RNA molecules within biodegradable clay nanosheets or chitosan biopolymers derived from crustacean shells. Adhering firmly to waxy leaf cuticles despite monsoon downpours, these protective carriers release functional RNA gradually over three weeks while still decomposing harmlessly once washed into topsoil. Field trials on potato plots confirm that encapsulated sprays suppress resistant beetles without disrupting native pollinator foraging.",
          ],
          questions: [
            {
              id: "d09-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the central purpose of the passage?",
              options: [
                {
                  id: "A",
                  text: "To explain how topical RNA-interference sprays selectively control crop pests and how biodegradable carriers solved their early stability limitations",
                  explanationEs:
                    "Correcto: sintetiza los tres párrafos: mecanismo selectivo no transgénico (P1), ventaja ecológica frente al reto de degradación rápida (P2) y solución mediante encapsulación biodegradable (P3).",
                },
                {
                  id: "B",
                  text: "To argue that genetically modifying crop DNA is safer than applying chitosan biopolymers to foliage",
                  explanationEs:
                    "Incorrecto: el párrafo 1 aclara explícitamente que estos aerosoles tópicos no alteran el genoma de la planta ('Rather than altering the genome of the crop itself').",
                },
                {
                  id: "C",
                  text: "To demonstrate why ultraviolet sunlight renders all biological pest-control methods commercially unviable",
                  explanationEs:
                    "Incorrecto: la degradación solar fue una limitación inicial resuelta en el párrafo 3 mediante nanoláminas de arcilla y quitosano.",
                },
                {
                  id: "D",
                  text: "To compare the reproductive rates of predatory ladybugs and aquatic invertebrates in treated watersheds",
                  explanationEs:
                    "Incorrecto: esos organismos solo se mencionan en la primera oración como víctimas colaterales de los insecticidas sintéticos convencionales.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d09-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'fragility' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "genetic toxicity",
                  explanationEs:
                    "Incorrecto: el pasaje destaca precisamente la ausencia de toxicidad colateral y de bioacumulación.",
                },
                {
                  id: "B",
                  text: "susceptibility to rapid breakdown",
                  explanationEs:
                    "Correcto: 'that same environmental fragility' remite directamente a la oración previa ('degrade rapidly under ultraviolet sunlight and soil microbial enzymes') y se explica tras los dos puntos como descomposición prematura.",
                },
                {
                  id: "C",
                  text: "manufacturing expense",
                  explanationEs:
                    "Incorrecto: el párrafo 2 analiza la inestabilidad física ante lluvia y radiación solar, no costos industriales.",
                },
                {
                  id: "D",
                  text: "evolutionary resistance",
                  explanationEs:
                    "Incorrecto: no se menciona resistencia evolutiva de las larvas, sino degradación ambiental de las gotas de ARN desnudo.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d09-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraphs 1 and 2 about beneficial pollinators that feed near crops sprayed with targeted RNAi?",
              options: [
                {
                  id: "A",
                  text: "They must be relocated for three weeks until clay nanosheets wash off the leaves.",
                  explanationEs:
                    "Incorrecto: no necesitan reubicarse porque la secuencia genética del ARN no coincide con sus genes.",
                },
                {
                  id: "B",
                  text: "Their cellular machinery does not silence proteins unless they carry the exact genetic sequence targeted by the spray.",
                  explanationEs:
                    "Correcto: dado que el mecanismo exige coincidencia exacta con un gen específico de la plaga ('matching sequence') y se diseña con tal especificidad taxonómica que incluso insectos benéficos emparentados quedan intactos, sus proteínas no se silencian.",
                },
                {
                  id: "C",
                  text: "They digest chitosan biopolymers faster than foraging beetle larvae do.",
                  explanationEs:
                    "Incorrecto: el texto no compara velocidades digestivas de quitosano entre especies de insectos.",
                },
                {
                  id: "D",
                  text: "They absorb inactivated RNA fragments through contaminated groundwater.",
                  explanationEs:
                    "Incorrecto: el párrafo 2 indica que el ARN se degrada rápido en el suelo, impidiendo su acumulación en aguas subterráneas.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d09-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "Why does the author describe the behavior of naked RNA strands in paragraph 2 as acting 'Paradoxically'?",
              options: [
                {
                  id: "A",
                  text: "Because the very property that prevents groundwater pollution also hindered field effectiveness prior to encapsulation",
                  explanationEs:
                    "Correcto: capta la paradoja exacta: la rápida degradación bajo sol y enzimas era una virtud ecológica (cero bioacumulación) pero a la vez un obstáculo agronómico (el ARN se descomponía antes de que la plaga lo ingiriera).",
                },
                {
                  id: "B",
                  text: "Because increasing the concentration of RNA droplets unexpectedly accelerated larval growth",
                  explanationEs:
                    "Incorrecto: el ARN silencia proteínas vitales y detiene el desarrollo larvario, jamás lo acelera.",
                },
                {
                  id: "C",
                  text: "Because crustacean-derived biopolymers proved more toxic to soil microbes than synthetic insecticides",
                  explanationEs:
                    "Incorrecto: el párrafo 3 afirma que los portadores se descomponen de manera inocua ('decomposing harmlessly') al llegar al suelo.",
                },
                {
                  id: "D",
                  text: "Because monsoon downpours strengthened the bond between unprotected RNA and waxy leaves",
                  explanationEs:
                    "Incorrecto: la lluvia intensa destruía o lavaba el ARN sin protección; solo tras encapsularlo en arcilla o quitosano se adhiere pese a los aguaceros.",
                },
              ],
              correctOptionId: "A",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d09-read-p2",
          title:
            "Bioengineering Photosynthetic Efficiency and Rhizosphere Symbiosis in Cereal Crops",
          cefrLevel: "B2",
          topicDomain: "Agricultural Bioengineering & Plant Physiology",
          paragraphs: [
            "During the mid-twentieth century, selective breeding for dwarf stems enabled wheat and rice varieties to support heavier grain heads without lodging in windstorms, nearly tripling cereal yields across Asia and Latin America. Over the past two decades, however, harvest gains in these staple crops have plateaued even as rising temperatures and synthetic fertilizer runoff strain arable ecosystems. Plant physiologists attribute this stagnation to two evolutionary bottlenecks: most temperate cereals rely on ancestral C3 photosynthesis, and none can convert abundant atmospheric nitrogen gas into plant-usable ammonia on their own, leaving growers dependent on energy-intensive synthetic fertilizers whose excess nitrate leaches into waterways.",
            "In C3 crops such as rice and wheat, the carbon-fixing enzyme RuBisCO frequently mistakes oxygen molecules for carbon dioxide—a wasteful side reaction called photorespiration that intensifies the hotter and drier a growing season becomes. By contrast, tropical grasses such as maize and sugarcane evolved a two-cell C4 biochemical pump that concentrates carbon dioxide around RuBisCO, virtually eliminating photorespiration and boosting water-use efficiency by up to fifty percent. Through multiplexed CRISPR gene editing, international research consortia have recently rewired vascular bundle-sheath cells in experimental rice lines while accelerating how rapidly leaves relax photoprotective shading when clouds pass. Under open-air field warming trials, edited plants converted significantly more solar radiation into grain-filling biomass despite midday heat waves that severely depressed unmodified control plots, proving that photorespiratory losses can be curbed without compromising nutritional quality.",
            "Raising photosynthetic ceilings alone, however, yields diminishing returns unless crops also acquire sufficient mineral nitrogen without massive synthetic urea inputs. [A] Initially, geneticists sought to transplant the entire root-nodule developmental pathway from leguminous plants such as soybeans directly into cereal genomes. [B] Yet root-nodule organogenesis proved so genetically intricate and metabolically expensive that transgenic cereal seedlings suffered stunted root growth whenever soil moisture fluctuated. [C] Pivoting toward a subtler ecological strategy, bioengineers now edit regulatory promoters in rice roots to boost the secretion of specific flavone compounds—notably apigenin—that induce free-living soil diazotrophic bacteria to weave oxygen-shielding biofilms along the root epidermis. [D] Multi-season trials in low-nitrogen paddies show that these flavone-enriched lines derive nearly thirty percent of their nitrogen budget biologically without measurable grain-yield penalties.",
            "Ultimately, coupling enhanced carbon assimilation with engineered rhizosphere signaling marks a decisive shift from chemical intensification toward metabolic self-sufficiency in global agronomy. Although regulatory harmonization across export markets and equitable seed licensing for smallholder farmers remain formidable policy hurdles, these bioengineered cereal prototypes demonstrate that narrowing global yield gaps in a warming climate need not require expanding farmland into intact tropical forests, much less escalating synthetic nitrogen runoff into hypoxic coastal dead zones.",
          ],
          questions: [
            {
              id: "d09-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 2, why do C3 crops lose photosynthetic efficiency during hot, dry weather?",
              options: [
                {
                  id: "A",
                  text: "Their bundle-sheath cells trap excessive carbon dioxide and block stomatal transpiration.",
                  explanationEs:
                    "Incorrecto: concentrar dióxido de carbono en células de la vaina vascular es el mecanismo ventajoso de las plantas C4, no el defecto de las C3.",
                },
                {
                  id: "B",
                  text: "Their carbon-fixing enzyme increasingly binds oxygen instead of carbon dioxide, triggering wasteful photorespiration.",
                  explanationEs:
                    "Correcto: el párrafo 2 explica que en cultivos C3 la enzima RuBisCO confunde el oxígeno con el dióxido de carbono, reacción ineficiente ('photorespiration') que se intensifica cuanto más cálida y seca se vuelve la temporada.",
                },
                {
                  id: "C",
                  text: "Their dwarf stems collapse before leaves can relax photoprotective shading.",
                  explanationEs:
                    "Incorrecto: los tallos enanos se mencionaron en el párrafo 1 precisamente por evitar el acame ('lodging'), no por causar fotorrespiración.",
                },
                {
                  id: "D",
                  text: "They divert fifty percent of their assimilated carbon into root-nodule formation.",
                  explanationEs:
                    "Incorrecto: el 50 % citado en el párrafo 2 corresponde a la mejora en eficiencia hídrica de las gramíneas C4, y los cereales no forman nódulos radiculares de modo natural.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d09-read-p2-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'stagnation' in paragraph 1 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "lack of further growth",
                  explanationEs:
                    "Correcto: 'this stagnation' retoma cohesivamente 'harvest gains in these staple crops have plateaued' de la oración anterior, refiriéndose al estancamiento de las mejoras de rendimiento.",
                },
                {
                  id: "B",
                  text: "waterlogged soil decay",
                  explanationEs:
                    "Incorrecto: trampa de significado literal físico ('agua estancada'); aquí se emplea en sentido cuantitativo-agronómico respecto a las tasas de cosecha.",
                },
                {
                  id: "C",
                  text: "sudden crop collapse",
                  explanationEs:
                    "Incorrecto: 'plateaued' indica estabilización en una meseta sin nuevos incrementos, no un desplome abrupto.",
                },
                {
                  id: "D",
                  text: "genetic uniformity",
                  explanationEs:
                    "Incorrecto: aunque todos los cereales comparten cuellos de botella evolutivos, 'stagnation' califica la pausa en el aumento de rendimientos.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d09-read-p2-q03",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author mention early efforts to transfer legume root-nodule pathways in paragraph 3?",
              options: [
                {
                  id: "A",
                  text: "To prove that soybeans require more synthetic urea fertilizer than unmodified rice",
                  explanationEs:
                    "Incorrecto: las leguminosas como la soya poseen simbiosis fijadora propia; nunca se afirma que requieran más urea sintética.",
                },
                {
                  id: "B",
                  text: "To illustrate the complexity and metabolic cost that led researchers to favor flavone-mediated microbial recruitment instead",
                  explanationEs:
                    "Correcto: muestra por qué trasplantar toda la organogénesis nodular resultó tan complejo y costoso ('stunted root growth') que impulsó el giro ('Pivoting toward a subtler ecological strategy') hacia señales químicas con flavonas.",
                },
                {
                  id: "C",
                  text: "To argue that CRISPR editing works only on above-ground leaf tissues and never in plant roots",
                  explanationEs:
                    "Incorrecto: inmediatamente después explica cómo editan promotores reguladores en raíces de arroz con éxito.",
                },
                {
                  id: "D",
                  text: "To show that free-living diazotrophic bacteria cannot survive outside soybean fields",
                  explanationEs:
                    "Incorrecto: las bacterias diazótrofas de vida libre habitan ya en los arrozales bajos en nitrógeno y responden a la apigenina.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d09-read-p2-q04",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "Rather than forcing the host cereal to construct an entirely new anatomical organ, this chemical signaling approach recruits nitrogen-fixing microbes already present in native paddy soils.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se ha mencionado ningún órgano anatómico nuevo ('root-nodule') ni ninguna estrategia de señalización química.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: la oración previa a `[B]` apenas introduce el intento de trasplantar la vía de nódulos de leguminosas; todavía no existe 'this chemical signaling approach' al cual referirse.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Incorrecto: antes de `[C]` se describe el fracaso del crecimiento radicular en plántulas transgénicas nodulares, sin haber presentado aún la secreción de flavonas ni la apigenina.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Correcto: 'this chemical signaling approach' remite anafóricamente a 'boost the secretion of specific flavone compounds—notably apigenin' justo antes de `[D]`, contrastándolo con el órgano nodular previo y preparando los resultados de campo en arrozales ('Multi-season trials in low-nitrogen paddies...') que siguen a `[D]`.",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d09-read-p2-q05",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 3 about free-living diazotrophic bacteria in rice paddies?",
              options: [
                {
                  id: "A",
                  text: "Their nitrogen-fixing enzymes require protection from excessive oxygen to function effectively along root surfaces.",
                  explanationEs:
                    "Correcto: el texto señala que la apigenina induce a las bacterias diazótrofas a tejer biopelículas que bloquean el oxígeno ('oxygen-shielding biofilms') sobre la epidermis radicular, tras lo cual aportan casi el 30 % del nitrógeno.",
                },
                {
                  id: "B",
                  text: "They must be genetically modified in laboratories before every planting season.",
                  explanationEs:
                    "Incorrecto: lo que se edita son los promotores de la raíz del arroz; las bacterias son de vida libre ('free-living soil diazotrophic bacteria') propias del suelo.",
                },
                {
                  id: "C",
                  text: "They reduce rice grain weight by thirty percent during drought years.",
                  explanationEs:
                    "Incorrecto: el 30 % corresponde al aporte biológico de nitrógeno logrado sin penalización medible en rendimiento de grano ('without measurable grain-yield penalties').",
                },
                {
                  id: "D",
                  text: "They eliminate the need for C3 rice plants to perform photosynthesis.",
                  explanationEs:
                    "Incorrecto: la fijación de nitrógeno complementa la mejora fotosintética; jamás sustituye la fotosíntesis.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d09-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which statement best captures the author's overall conclusion in the passage?",
              options: [
                {
                  id: "A",
                  text: "Traditional selective breeding for dwarf stems remains more effective than CRISPR editing under climate warming.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 explica que las ganancias de la selección tradicional se estancaron ante los topes evolutivos de C3 y nitrógeno.",
                },
                {
                  id: "B",
                  text: "Integrating photosynthetic upgrades with root-microbe signaling offers a viable pathway to boost staple yields sustainably, provided policy and access barriers are addressed.",
                  explanationEs:
                    "Correcto: recoge la tesis integradora del párrafo 4: combinar asimilación de carbono y señalización en la rizosfera permite cerrar brechas de rendimiento sin deforestar ni agravar la escorrentía de nitrógeno, reconociendo los retos regulatorios y de distribución.",
                },
                {
                  id: "C",
                  text: "Bioengineered cereals have already resolved global seed-distribution inequities and international regulatory disputes.",
                  explanationEs:
                    "Incorrecto: contradice la concesión explícita del párrafo 4 ('Although regulatory harmonization and seed-distribution equity remain formidable policy hurdles').",
                },
                {
                  id: "D",
                  text: "Upgrading RuBisCO efficiency makes mineral nitrogen unnecessary for cereal biomass production.",
                  explanationEs:
                    "Incorrecto: contradice la primera oración del párrafo 3 ('Raising photosynthetic ceilings alone, however, yields diminishing returns unless crops also acquire sufficient mineral nitrogen').",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (30 min study / 25 min official timer without spellcheck)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Lexical Substitution (B1 -> B2) & Contrastive Policy Argumentation",
      estimatedMinutes: 30,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Hoy erradicamos el vocabulario genérico de nivel B1 ('big problem', 'make things better', 'a lot of cars', 'give access') sustituyéndolo por colocaciones universitarias precisas ('systemic bottleneck', 'mitigate congestion', 'grant temporary credentials') e integrando estructuras del Día 9 ('such ... that', 'despite', 'whereas', 'the more..., the more...').",
      tasks: [
        {
          part: "part1_note",
          id: "d09-writ-p1",
          cefrLevel: "B2",
          title: "Requesting Remote Computing Cluster Credentials",
          prompt:
            "Your environmental modeling seminar requires running high-resolution hydrological simulations this week, but the software is unavailable on standard library computers and exceeds your personal laptop's memory capacity. Write a formal note to Mr. Alvarez, Director of Campus Information Technology, in which you: (1) explain why you need access to the graduate computing cluster before Friday, (2) state the technical limitation of personal and library hardware, and (3) ask whether temporary remote credentials can be issued with your professor's authorization.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Aplica sustitución léxica B1->B2 desde el borrador mental: cambia 'my computer is too slow' por 'demands such extensive memory capacity that personal laptops freeze', y 'can you give me access' por 'whether your office can grant temporary remote credentials'. Cubre los 3 puntos en 3–4 oraciones limpias entre 55 y 70 palabras.",
          recommendedConnectors: ["Despite", "such extensive", "that", "whereas", "whether"],
          b2RubricChecklistEs: [
            "Responde con precisión a los 3 puntos solicitados (plazo del seminario antes del viernes, limitación técnica de memoria/terminales y solicitud de credenciales con aval docente).",
            "Se mantiene estrictamente entre 50 y 75 palabras con saludo y cierre formales.",
            "Sustituye verbos vagos ('get', 'need badly', 'fix') por colocaciones académicas ('require', 'exceeds capacity', 'grant credentials').",
            "Emplea correctamente al menos una estructura del Día 9 ('such ... that', 'despite' + sintagma nominal o 'whereas').",
          ],
          modelAnswerB2:
            "Dear Mr. Alvarez, I am writing to request temporary remote credentials for the graduate computing cluster prior to Friday's hydrology seminar deadline. Our watershed simulation demands such extensive memory capacity that personal laptops freeze, whereas standard library terminals lack the required spatial modeling license. Despite these hardware constraints, Dr. Lin has already signed my authorization form. Could you confirm whether my student account can be activated today? Sincerely, Mateo Silva",
        },
        {
          part: "part2_essay",
          id: "d09-writ-p2",
          cefrLevel: "B2",
          title: "Metropolitan Congestion Pricing vs. Urban Highway Expansion",
          prompt:
            "To relieve severe rush-hour traffic, some municipal leaders advocate widening urban highways and constructing additional express lanes. Others contend that cities should implement congestion pricing—charging drivers a variable fee to enter busy downtown zones during peak hours—and invest those revenues in public transit. Which policy do you support? Justify your position with specific arguments and concrete examples.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Ejecuta la auditoría de sustitución léxica B1->B2 al planificar y revisar: en vez de 'more roads bring more cars', escribe 'the more highway lanes a metropolis constructs, the more rapidly induced demand refills them'; cambia 'hurt poor workers' por 'impose a regressive financial burden on low-income commuters'; sustituye 'use the money for buses' por 'channel dedicated revenue into high-frequency transit'. Incluye 'Despite + NP', 'whereas' y 'such ... that'.",
          recommendedConnectors: [
            "The more..., the more...",
            "Despite",
            "such persistent bottlenecks that",
            "whereas",
            "much less",
          ],
          b2RubricChecklistEs: [
            "Defiende una postura clara desde la introducción y mantiene coherencia argumentativa entre 175 y 225 palabras.",
            "Integra al menos un correlativo comparativo ('The more..., the more...') con orden declarativo impecable.",
            "Contrasta directamente ambas políticas usando 'whereas' y concede una objeción real con 'Despite + sintagma nominal' o 'Although + cláusula'.",
            "Demuestra sustitución léxica B2 ('induced demand', 'dedicated revenue', 'commuters', 'airborne emissions') sin repeticiones elementales.",
            "Cero errores de puntuación ('comma splices' con 'however') u ortografía sin corrector automático.",
          ],
          modelAnswerB2:
            "Rapidly growing metropolitan areas confront severe rush-hour gridlock, yet widening urban highways repeatedly fails as a long-term remedy. Implementing peak-hour congestion pricing paired with public transit investment offers a far more sustainable solution than expanding road capacity.\n\nTransportation economists have documented for decades why highway widening backfires: the more express lanes a municipality constructs, the more rapidly induced demand refills them, as suburban commuters abandon rail lines for private vehicles. Within a few years, widened corridors develop such persistent bottlenecks that travel times return to previous levels, leaving cities with higher maintenance debt and elevated airborne emissions.\n\nCongestion pricing, by contrast, addresses traffic at its economic root. Whereas highway construction subsidizes solo driving, variable downtown tolls encourage motorists to shift non-essential trips outside peak hours or utilize commuter rail. Cities such as Stockholm and Singapore proved that modest peak fees immediately shortened bus commutes while generating dedicated revenue for subway modernization.\n\nDespite legitimate concerns that tolls might burden low-income shift workers, municipalities can easily offset regressive effects through targeted transit rebates and off-peak exemptions. Ultimately, urban mobility cannot improve by paving additional asphalt, much less sacrificing downtown air quality; pricing scarce road space fairly benefits drivers and transit riders alike.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Collaborative Adaptation & Mandatory University Attendance Debate",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "En Speaking B2, sustituye los encadenamientos planos con 'and... but... so...' por marcos sintácticos de alto impacto: abre tu concesión con 'Despite...' o 'While proponents claim...', y usa un correlativo ('The more actively..., the better...') para proyectar fluidez académica natural.",
      tasks: [
        {
          part: "part1_personal",
          id: "d09-speak-p1",
          cefrLevel: "B2",
          title: "Adapting a Team Project Despite a Major Setback",
          prompt:
            "Describe a group academic project or workplace assignment that succeeded despite an unexpected logistical or technical obstacle. Explain what caused the setback and how your team adjusted its strategy to meet the deadline.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–12s (Situation & Obstacle): Name the team project and introduce the setback using 'Despite careful planning...'",
            "12–30s (Contrastive Pivot): Contrast the failed original plan with your team's swift adjustment ('Whereas our initial plan relied on..., we shifted to...').",
            "30–45s (Outcome & Takeaway): State the concrete result using B2 vocabulary before time expires.",
          ],
          keyPhrasesB2: [
            "Despite weeks of careful preparation...",
            "created such an urgent bottleneck that...",
            "Whereas we had originally intended to..., we pivoted toward...",
            "The more systematically we divided the remaining tasks, the faster...",
          ],
          selfRubricChecklistEs: [
            "Arranqué sin vacilaciones presentando un proyecto grupal y un obstáculo técnico o logístico verosímil.",
            "Usé correctamente 'despite' seguido de grupo nominal (sin insertar 'of' ni cláusula desnuda).",
            "Reemplacé adjetivos vagos ('really bad', 'good result') por léxico preciso ('corrupted file', 'cohesive presentation').",
            "Cerré la idea principal con claridad dentro del límite estricto de 45 segundos.",
          ],
          modelTranscriptB2:
            "During my junior-year urban planning studio, our four-person team had to present a coastal drainage proposal to visiting municipal engineers. Despite weeks of careful preparation, a software update the night before corrupted our three-dimensional flood animation, creating such an urgent bottleneck that our laptops couldn't render the video in time. Whereas we had originally planned a passive video walkthrough, we pivoted immediately toward interactive layered maps printed at the architecture plotters. The more clearly each teammate explained a distinct elevation zone, the more engaged the visiting engineers became, and our group ultimately earned the highest studio evaluation of the semester.",
        },
        {
          part: "part2_opinion",
          id: "d09-speak-p2",
          cefrLevel: "B2",
          title: "Mandatory Lecture Attendance vs. Autonomous Performance Grading",
          prompt:
            "Some university faculties enforce mandatory attendance policies in undergraduate courses, automatically deducting grade points after a set number of absences to encourage active participation. Other educators argue that university students are adults whose course grades should reflect solely their exam performance and research assignments, regardless of physical attendance. Which policy do you believe universities should adopt, and why?",
          audioPrompt: {
            trackId: "day09-speaking-p2",
            audioUrl: "/audio/day09-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Some university faculties enforce mandatory attendance policies in undergraduate courses, automatically deducting grade points after a set number of absences to encourage active participation. Other educators argue that university students are adults whose course grades should reflect solely their exam performance and research assignments, regardless of physical attendance. Which policy do you believe universities should adopt, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Decisive Thesis): Endorse one policy clearly and frame your central principle.",
            "12–30s (Concession + Contrast): Acknowledge small discussion seminars ('Despite the value of live dialogue in small seminars...'), then contrast large lectures using 'whereas'.",
            "30–50s (Proportional Argument + Example): Use 'The more..., the more...' + concrete student example (working students / recorded lectures).",
            "50–60s (Summary Closure): Conclude decisively linking academic maturity to mastery-based grading.",
          ],
          keyPhrasesB2: [
            "I am convinced that undergraduate course grades should measure demonstrated mastery rather than...",
            "Despite well-intentioned efforts to boost classroom engagement...",
            "Whereas small laboratory sections require hands-on presence...",
            "The more responsibility universities grant adult learners over their schedules, the better prepared...",
          ],
          selfRubricChecklistEs: [
            "Defendí una postura nítida desde los primeros segundos evitando respuestas ambiguas.",
            "Integré al menos dos conectores de contraste/concesión del Día 9 ('despite', 'whereas', 'much less') con fluidez.",
            "Construí una oración correlativa ('The more..., the more...') o consecutiva ('such ... that') sin errores gramaticales.",
            "Aporté un ejemplo concreto del entorno universitario real (estudiantes que trabajan, clases magistrales masivas, laboratorios).",
            "Concluí con firmeza antes del corte automático de los 60 segundos.",
          ],
          modelTranscriptB2:
            "I am convinced that university course grades should evaluate demonstrated intellectual mastery rather than physical seat time in lecture halls. Despite well-intentioned efforts to boost classroom participation, punitive attendance deductions often produce such passive compliance that tired students sit on laptops in the back row without engaging intellectually, much less contributing to discussion. Moreover, many undergraduates balance part-time employment or family responsibilities alongside demanding coursework. Whereas hands-on laboratory courses and language workshops genuinely require in-person collaboration, large foundational lectures can be reviewed effectively through recorded sessions and primary readings. Ultimately, the more autonomy universities grant students to manage their own preparation, the faster undergraduates develop the self-discipline required in professional careers, where performance is judged by rigorous outcomes rather than mere attendance.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Resolví los 10 ítems de Grammar en menos de 8 minutos distinguiendo 'despite + NP' de 'although/whereas + cláusula' y 'so few' de 'such + adj + noun'.",
    "Completé Listening P1, P2 y la conferencia de Neurociencia del Sueño (P3) en una sola reproducción estricta.",
    "Respondí Reading P1 y P2 de Bioingeniería Agrícola en menos de 20 minutos acertando la inserción en `[D]`.",
    "Apliqué sustitución léxica B1->B2 e integré 'The more..., the more...' y 'such ... that' en Writing P1 y P2 sin corrector.",
    "Grabé Speaking P1 (45s) y P2 (60s) verificando entonación clara y conectores concesivos/adversativos B2.",
  ],
};
