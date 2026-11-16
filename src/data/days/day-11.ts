import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day11: RoadmapDay = {
  dayNumber: 11,
  sprintNumber: 3,
  cefrLevel: "B2",
  title: "Cleft Sentences, Focusing Structures & Academic Ellipsis",
  subtitleEs:
    "Oraciones hendidas ('It-clefts' y 'What-clefts'), estructuras de focalización, elipsis verbal ('do so', 'so/neither') y aposición explicativa",
  b2FocusSummaryEs:
    "En el Sprint 3 refinamos la precisión estilística y el control cohesivo que distinguen un puntaje B2 sólido (3.8–4.4) de un B1 funcional. Dominar las oraciones hendidas ('It was not until X that...', 'What the longitudinal data reveal is...'), la sustitución verbal ('do so', 'neither do') y la aposición explicativa te permite desarmar trampas sutiles en Grammar, seguir giros enfáticos en conferencias densas de Listening, separar detalles secundarios de la tesis global en Reading y elevar de inmediato la madurez sintáctica en Writing y Speaking.",
  estimatedMinutes: 135,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Cleft Constructions, Verbal Substitution ('do so') & Explanatory Apposition",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Verifica siempre el par estructural completo en construcciones de énfasis y elipsis: 'It was not until X that Y' exige 'that' (nunca 'than' ni 'when'), las hendidas con 'What... is that' concuerdan en singular ante cláusulas nominales, 'do so' sustituye predicados dinámicos completos y 'so/neither + auxiliar + sujeto' debe replicar el tiempo o auxiliar exacto de la cláusula antecedente.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d11-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Emphatic Temporal It-Clefts (It was not until ... that)",
          sentenceWithBlank:
            "It was not until high-resolution mass spectrometry became commercially viable _____ paleobotanists could isolate intact lipid biomarkers from Devonian shale.",
          options: [
            {
              id: "A",
              text: "when",
              explanationEs:
                "Incorrecto: trampa frecuente por interferencia del español ('fue recién cuando'); en una oración hendida con 'It was not until X...', el nexo enfático obligatorio en registro académico es 'that', no el adverbio relativo 'when'.",
            },
            {
              id: "B",
              text: "than",
              explanationEs:
                "Incorrecto: confunde la estructura hendida 'It was not until ... that' con la correlativa comparativa 'No sooner ... than'.",
            },
            {
              id: "C",
              text: "that",
              explanationEs:
                "Correcto: cierra canónicamente la estructura hendida 'It + be + not until [cláusula temporal] + that [cláusula principal]' sin requerir inversión adicional tras 'that'.",
            },
            {
              id: "D",
              text: "did",
              explanationEs:
                "Incorrecto: la inversión auxiliar ('did paleobotanists isolate') ocurre cuando 'Not until...' encabeza directamente la oración, jamás dentro de una hendida iniciada por 'It was not until...' que además ya contiene el modal 'could'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Distingue las dos variantes: 'Not until X + auxiliar + sujeto + verbo' (inversión directa) frente a 'It was not until X + that + sujeto + verbo' (hendida sin inversión).",
        },
        {
          part: "part1_fill_blank",
          id: "d11-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Pseudo-Cleft Focusing Clauses (What ... is that)",
          sentenceWithBlank:
            "What the twenty-year longitudinal trials demonstrate _____ early micronutrient supplementation permanently alters metabolic gene expression.",
          options: [
            {
              id: "A",
              text: "are that",
              explanationEs:
                "Incorrecto: aunque 'trials' es plural y 'demonstrate' va en plural dentro del sujeto nominal, toda cláusula pseudo-hendida con 'What' seguida de una cláusula declarativa con 'that' exige verbo copulativo en singular ('is that').",
            },
            {
              id: "B",
              text: "is that",
              explanationEs:
                "Correcto: 'What the twenty-year longitudinal trials demonstrate' funciona como sujeto oracional singular ('aquello que demuestran') y enlaza mediante 'is that' con la proposición focalizada.",
            },
            {
              id: "C",
              text: "is what",
              explanationEs:
                "Incorrecto: la cláusula siguiente ('early micronutrient supplementation permanently alters metabolic gene expression') está sintácticamente completa, por lo que no admite otro 'what' argumental.",
            },
            {
              id: "D",
              text: "that",
              explanationEs:
                "Incorrecto: omitir el verbo copulativo 'is' deja a toda la oración principal sin verbo finito matriz entre la cláusula de 'What' y el complemento.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Encierra entre corchetes '[What + sujeto + verbo]' al inicio de la oración: ese bloque entero equivale a 'The main finding' y exige un verbo principal singular ('is that...').",
        },
        {
          part: "part1_fill_blank",
          id: "d11-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Predicate Substitution with 'do so' in Academic Prose",
          sentenceWithBlank:
            "Regional water utilities were instructed to replace aging lead service lines before December, yet fewer than a third possessed the capital reserves required to _____.",
          options: [
            {
              id: "A",
              text: "do so",
              explanationEs:
                "Correcto: tras el marcador de infinitivo 'to', la proforma 'do so' sustituye con precisión y registro formal todo el predicado dinámico previo ('replace aging lead service lines before December').",
            },
            {
              id: "B",
              text: "make so",
              explanationEs:
                "Incorrecto: calco léxico de lenguas romances ('hacerlo'); en inglés el auxiliar sustitutivo de frases verbales es exclusivamente 'do' ('do so'), nunca 'make'.",
            },
            {
              id: "C",
              text: "do it so",
              explanationEs:
                "Incorrecto: 'so' en 'do so' ya reemplaza tanto al verbo como a sus complementos internos, de modo que añadir el pronombre objeto 'it' genera redundancia agramatical.",
            },
            {
              id: "D",
              text: "doing so",
              explanationEs:
                "Incorrecto: 'required to' introduce aquí un infinitivo de finalidad ('to + forma base'), no una preposición seguida de gerundio.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Usa 'do so / does so / did so / done so' para evitar repetir un verbo de acción completo con sus objetos y modificadores en la segunda cláusula.",
        },
        {
          part: "part1_fill_blank",
          id: "d11-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Negative Elliptical Agreement (neither / nor + auxiliary + subject)",
          sentenceWithBlank:
            "Conventional silicon solar cells do not capture infrared wavelengths efficiently, and _____ the perovskite thin-film prototypes tested last quarter.",
          options: [
            {
              id: "A",
              text: "neither are",
              explanationEs:
                "Incorrecto: la primera cláusula emplea un verbo léxico en presente simple con el auxiliar 'do not capture', por lo que la elipsis no puede cambiar arbitrariamente al verbo 'be' ('are').",
            },
            {
              id: "B",
              text: "so do not",
              explanationEs:
                "Incorrecto: 'so + auxiliar + sujeto' solo expresa acuerdo con enunciados afirmativos; jamás se combina con 'not' para concordancia negativa.",
            },
            {
              id: "C",
              text: "neither do",
              explanationEs:
                "Correcto: tras 'and', 'neither' exige inversión del auxiliar correspondiente al presente simple plural ('do') antes del nuevo sujeto plural ('the perovskite thin-film prototypes').",
            },
            {
              id: "D",
              text: "nor they do",
              explanationEs:
                "Incorrecto: 'nor' al igual que 'neither' obliga a invertir el auxiliar antes del sujeto ('nor do they'), nunca en orden declarativo.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "En acuerdos elípticos negativos tras 'and', identifica primero el auxiliar exacto de la oración previa ('do/did/have/can/are') e inviértelo detrás de 'neither': 'neither + auxiliar + sujeto'.",
        },
        {
          part: "part1_fill_blank",
          id: "d11-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Explanatory Noun-Phrase Apposition vs. Comma Splice",
          sentenceWithBlank:
            "The national library recently digitized its oldest botanical manuscript, _____ illustrated on calfskin vellum in 1542, for open scholarly consultation.",
          options: [
            {
              id: "A",
              text: "it is an herbal compendium",
              explanationEs:
                "Incorrecto: insertar un sujeto y verbo finito ('it is') entre comas sin conjunción ni pronombre relativo rompe la oración matriz ('digitized') creando un 'comma splice'.",
            },
            {
              id: "B",
              text: "an herbal compendium",
              explanationEs:
                "Correcto: frase nominal en aposición explicativa pura que renombra y especifica a 'botanical manuscript' entre comas, seguida limpiamente por el participio reducido 'illustrated'.",
            },
            {
              id: "C",
              text: "which an herbal compendium",
              explanationEs:
                "Incorrecto: el pronombre relativo 'which' deja incompleta la cláusula subordinada al carecer de verbo conjugado ('which is an herbal compendium').",
            },
            {
              id: "D",
              text: "that is an herbal compendium",
              explanationEs:
                "Incorrecto: las cláusulas relativas explicativas entre comas prohíben el relativo 'that' en inglés formal.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Cuando un inciso entre comas define al sustantivo precedente y la oración principal continúa después de la segunda coma, prefiere una aposición nominal limpia ('a/an/the + sustantivo') sin verbo finito intruso.",
        },
        {
          part: "part2_error_identification",
          id: "d11-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Connector Confusion in Emphatic It-Clefts",
          sentenceWithMarkedSegments:
            "[A]{It was not until} satellite radar interferometry [B]{achieved} millimeter-scale precision [C]{than} volcanologists [D]{could detect} deep magma inflation months before an eruption.",
          correctedSegment: "that",
          options: [
            {
              id: "A",
              text: "It was not until",
              explanationEs:
                "Correcto en la oración: apertura legítima de una oración hendida temporal de énfasis negativo.",
            },
            {
              id: "B",
              text: "achieved",
              explanationEs:
                "Correcto en la oración: verbo en Past Simple coherente con el hito tecnológico pasado dentro de la cláusula de 'until'.",
            },
            {
              id: "C",
              text: "than",
              explanationEs:
                "Incorrecto (contiene el error): cruza erróneamente 'No sooner ... than' con 'It was not until ... that'. Toda oración hendida iniciada con 'It was...' debe cerrar su foco con 'that'.",
            },
            {
              id: "D",
              text: "could detect",
              explanationEs:
                "Correcto en la oración: modal en pasado que expresa capacidad científica adquirida a partir de dicho avance.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "En iTEP Part 2, cada vez que leas 'It was only after / It was not until' al principio, salta con la vista al conector central y confirma que sea 'that' y no 'than' ni 'when'.",
        },
        {
          part: "part2_error_identification",
          id: "d11-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Auxiliary Tense Alignment in Affirmative Ellipsis ('so + aux')",
          sentenceWithMarkedSegments:
            "Semi-arid river basins across the Mediterranean [A]{have experienced} acute winter runoff deficits [B]{over the past decade}, and [C]{so did} snowpack-dependent watersheds [D]{throughout} the central Andes.",
          correctedSegment: "so have",
          options: [
            {
              id: "A",
              text: "have experienced",
              explanationEs:
                "Correcto en la oración: Present Perfect plenamente exigido por el marcador de duración conectada al presente 'over the past decade'.",
            },
            {
              id: "B",
              text: "over the past decade",
              explanationEs:
                "Correcto en la oración: expresión temporal estándar que abarca desde hace diez años hasta la actualidad.",
            },
            {
              id: "C",
              text: "so did",
              explanationEs:
                "Incorrecto (contiene el error): la estructura elíptica 'so + auxiliar + sujeto' debe retomar el auxiliar 'have' del Present Perfect ('have experienced'), no sustituirlo por el auxiliar de Past Simple 'did'. Debe ser 'so have'.",
            },
            {
              id: "D",
              text: "throughout",
              explanationEs:
                "Correcto en la oración: preposición precisa para indicar distribución espacial a lo largo de toda la cordillera.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Subraya siempre el tiempo verbal de la primera cláusula antes de validar 'so do / so did / so have / so are': el auxiliar elíptico debe ser un espejo exacto en aspecto y concordancia.",
        },
        {
          part: "part2_error_identification",
          id: "d11-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Singular Copula Requirement in What-Clefts Preceding 'that'-Clauses",
          sentenceWithMarkedSegments:
            "[A]{What} nineteenth-century parish registries [B]{reveal} about seasonal harvest migration [C]{are that} dual-income rural households [D]{weathered} grain price shocks more resiliently.",
          correctedSegment: "is that",
          options: [
            {
              id: "A",
              text: "What",
              explanationEs:
                "Correcto en la oración: pronombre relativo fusionado ('lo que') que actúa como objeto directo interno de 'reveal' y encabeza la cláusula nominal sujeto.",
            },
            {
              id: "B",
              text: "reveal",
              explanationEs:
                "Correcto en la oración: concuerda debidamente en plural con su propio sujeto interno 'parish registries'.",
            },
            {
              id: "C",
              text: "are that",
              explanationEs:
                "Incorrecto (contiene el error): cuando el complemento focalizado de una hendida con 'What' es una cláusula encabezada por 'that', el verbo copulativo matriz debe ir obligatoriamente en singular ('is that'), sin dejarse arrastrar por el plural 'registries'.",
            },
            {
              id: "D",
              text: "weathered",
              explanationEs:
                "Correcto en la oración: uso académico verbal de 'weather' ('sortear / resistir con éxito' crisis de precios) en Past Simple.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "No confundas el verbo interno de la cláusula de 'What' ('registries reveal') con el verbo copulativo principal: ante una cláusula 'that...', la cópula siempre es singular ('is that').",
        },
        {
          part: "part2_error_identification",
          id: "d11-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Mandatory Auxiliary Inversion After Coordinating 'neither'",
          sentenceWithMarkedSegments:
            "First-generation desalination membranes [A]{could not} tolerate elevated boron levels [B]{in} brackish aquifers, and [C]{neither second-generation polymer filters could} [D]{without} alkaline pretreatment.",
          correctedSegment: "neither could second-generation polymer filters",
          options: [
            {
              id: "A",
              text: "could not",
              explanationEs:
                "Correcto en la oración: modal negativo en pasado apropiado para describir la limitación técnica de las membranas iniciales.",
            },
            {
              id: "B",
              text: "in",
              explanationEs:
                "Correcto en la oración: preposición locativa adecuada ante 'brackish aquifers'.",
            },
            {
              id: "C",
              text: "neither second-generation polymer filters could",
              explanationEs:
                "Incorrecto (contiene el error): cuando 'neither' enlaza una segunda cláusula elíptica tras 'and', exige inversión obligatoria del auxiliar modal antes del sujeto ('neither could second-generation polymer filters').",
            },
            {
              id: "D",
              text: "without",
              explanationEs:
                "Correcto en la oración: preposición condicional negativa bien integrada ante el sintagma nominal 'alkaline pretreatment'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Tras 'and neither' o 'nor', aplica sin excepción el orden invertido 'auxiliar + sujeto completo' aunque el sujeto sea un grupo nominal técnico largo.",
        },
        {
          part: "part2_error_identification",
          id: "d11-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Intrusive Finite Pronoun-Verb in Non-Restrictive Appositives",
          sentenceWithMarkedSegments:
            "Phytoremediation, [A]{it is a low-cost} restoration strategy [B]{in which} hyperaccumulator plants [C]{extract} heavy metals from contaminated tailings, [D]{requires} multi-year agronomic monitoring.",
          correctedSegment: "a low-cost",
          options: [
            {
              id: "A",
              text: "it is a low-cost",
              explanationEs:
                "Incorrecto (contiene el error): 'Phytoremediation' ya es el sujeto del verbo principal 'requires'; intercalar el sujeto y verbo finito 'it is' entre comas rompe la estructura apositiva y genera una oración yuxtapuesta agramatical. Debe ser 'a low-cost'.",
            },
            {
              id: "B",
              text: "in which",
              explanationEs:
                "Correcto en la oración: cláusula relativa formal con preposición adelantada que modifica legítimamente a 'restoration strategy'.",
            },
            {
              id: "C",
              text: "extract",
              explanationEs:
                "Correcto en la oración: verbo en presente simple plural concordando con 'hyperaccumulator plants' dentro de la cláusula relativa.",
            },
            {
              id: "D",
              text: "requires",
              explanationEs:
                "Correcto en la oración: verbo matriz singular concordando a distancia con el sujeto incontable 'Phytoremediation' tras el cierre de la aposición.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Verifica el esqueleto alrededor de las dos comas: si antes está el sujeto ('Phytoremediation') y después el verbo principal ('requires'), lo encerrado entre comas debe ser una frase nominal apositiva ('a low-cost strategy...'), nunca 'it is a...'.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Focusing Cues in Lab Peer Review, Grant Auditing & AI Copyright Law",
      estimatedMinutes: 35,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "Afina el oído para captar estructuras hendidas habladas ('What actually triggered the hold was...', 'It wasn't until... that...') y sustituciones con 'do so': en iTEP Listening los hablantes usan estas fórmulas precisamente para introducir la causa real o descartar una suposición inicial.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d11-list-p1",
          title: "Spectroscopy Dataset Repository Hold",
          cefrLevel: "B2",
          audio: {
            trackId: "day11-listening-p1",
            audioUrl: "/audio/day11-listening-p1.mp3",
            contextSetup:
              "Two graduate chemistry researchers discuss feedback from a journal's data editor.",
            turns: [
              {
                speakerLabel: "Researcher 1",
                voice: "en-US-GuyNeural",
                text: "Did the journal's data editor reject our catalytic manuscript because our calibration curves were incomplete?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Researcher 2",
                voice: "en-US-JennyNeural",
                text: "Actually, the reviewers praised the calibration runs. What held up final acceptance was that we uploaded summary tables instead of the raw spectroscopy files to the public repository.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Researcher 1",
                voice: "en-US-GuyNeural",
                text: "Oh, Dr. Sato exported those raw files onto the lab server last Tuesday, though neither of us had administrative credentials to publish the folder externally.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Researcher 2",
                voice: "en-US-JennyNeural",
                text: "Right, and she authorized my account twenty minutes ago, so I'm generating the public link right after lunch.",
                pauseAfterMs: 450,
              },
            ],
          },
          questions: [
            {
              id: "d11-list-p1-q01",
              prompt: "What can be inferred about the researchers' manuscript?",
              options: [
                {
                  id: "A",
                  text: "It must undergo a second round of laboratory experiments to fix calibration errors.",
                  explanationEs:
                    "Incorrecto: la investigadora aclara de inmediato que los revisores elogiaron las curvas de calibración ('praised the calibration runs').",
                },
                {
                  id: "B",
                  text: "It will likely be cleared for publication once the raw spectroscopy files are made publicly accessible.",
                  explanationEs:
                    "Correcto: mediante la hendida 'What held up final acceptance was...', explica que el único freno era subir los archivos crudos al repositorio público, para lo cual ya obtuvo permisos y generará el enlace tras el almuerzo.",
                },
                {
                  id: "C",
                  text: "Dr. Sato refused to share the raw spectroscopy data outside the chemistry department.",
                  explanationEs:
                    "Incorrecto: la Dra. Sato exportó los archivos la semana pasada y acaba de autorizar la cuenta de la investigadora para publicarlos.",
                },
                {
                  id: "D",
                  text: "Neither researcher knows where the raw spectroscopy measurements are stored.",
                  explanationEs:
                    "Incorrecto: ambos saben que están exportados en el servidor del laboratorio desde el martes anterior; lo que les faltaba eran credenciales administrativas.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Cuando el segundo hablante responde con 'Actually... What held up X was...', descarta de inmediato el motivo sugerido en la pregunta inicial: la respuesta correcta siempre reside detrás de la oración hendida.",
        },
        {
          part: "part2_conversation",
          id: "d11-list-p2",
          title: "Campus Green-Innovation Grant Disbursement Review",
          cefrLevel: "B2",
          audio: {
            trackId: "day11-listening-p2",
            audioUrl: "/audio/day11-listening-p2.mp3",
            contextSetup:
              "An architecture senior meets with the Campus Sustainability Coordinator regarding a delayed materials reimbursement for a student-built solar study pavilion.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Good afternoon, Mr. Hollis. I'm following up on the second installment of our Green-Innovation Grant for the courtyard solar pavilion. Our design studio purchased the recycled timber decking two weeks ago, yet our team account still shows the reimbursement pending.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-GB-RyanNeural",
                text: "Come in, Elena. Let me pull up your docket. Your interim structural drawings were approved without issue, and so were all your supplier invoices.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "That's what puzzled us. Our faculty advisor signed the purchase voucher on time, so we assumed accounting simply had a backlog.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-GB-RyanNeural",
                text: "Not quite. What actually froze the disbursement was an updated campus risk policy. It wasn't until last semester's windstorm damaged a temporary sculpture near the library that Physical Plant began requiring wind-load certification for any freestanding outdoor structure over two meters tall.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Oh! Our canopy peaks at two point six meters, so it definitely falls under that rule. Were student teams notified about the policy change?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-GB-RyanNeural",
                text: "Physical Plant emailed department chairs in October, though several studio groups missed the memo because their grants had already been awarded in September.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Does that mean we have to hire an external structural engineering firm to certify the pavilion? Our remaining grant budget couldn't possibly cover commercial consulting fees.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-GB-RyanNeural",
                text: "Fortunately, you don't need to do so. Any licensed civil engineer on the university faculty can review your anchor calculations and countersign Physical Plant's one-page stability form at no charge.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "That's hugely reassuring. Professor Nair in Civil Engineering actually co-taught our timber-joints workshop last month, so I'll bring our anchor specs to his office hours tomorrow morning and upload the signed form right afterward.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d11-list-p2-q01",
              prompt: "Why does Elena visit the Campus Sustainability Coordinator?",
              options: [
                {
                  id: "A",
                  text: "To request additional grant money to cover rising timber prices",
                  explanationEs:
                    "Incorrecto: su equipo ya compró la madera reciclada hace dos semanas; acude para averiguar por qué sigue pendiente el reembolso del segundo tramo.",
                },
                {
                  id: "B",
                  text: "To find out why her team's approved materials reimbursement has not been released",
                  explanationEs:
                    "Correcto: explica al inicio que compraron la cubierta de madera reciclada hace dos semanas pero la cuenta del equipo aún muestra el segundo desembolso en espera.",
                },
                {
                  id: "C",
                  text: "To report wind damage to a temporary sculpture near the university library",
                  explanationEs:
                    "Incorrecto: la escultura dañada por el viento el semestre pasado la menciona el coordinador como antecedente histórico de la nueva norma.",
                },
                {
                  id: "D",
                  text: "To ask permission to raise the height of the solar pavilion canopy",
                  explanationEs:
                    "Incorrecto: el diseño ya alcanza 2,6 metros en sus planos aprobados; no solicita modificar la altura.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d11-list-p2-q02",
              prompt: "What caused the hold on the team's grant disbursement?",
              options: [
                {
                  id: "A",
                  text: "Missing supplier invoices and an unsigned faculty purchase voucher",
                  explanationEs:
                    "Incorrecto: el coordinador confirma con 'and so were all your supplier invoices' que tanto planos como facturas estaban aprobados, y el asesor sí firmó el comprobante.",
                },
                {
                  id: "B",
                  text: "An accounting backlog affecting all September grant recipients",
                  explanationEs:
                    "Incorrecto: esa era la suposición inicial de Elena ('assumed accounting simply had a backlog'), descartada por el coordinador con 'Not quite'.",
                },
                {
                  id: "C",
                  text: "A new campus safety rule requiring wind-load verification for tall outdoor installations",
                  explanationEs:
                    "Correcto: el coordinador puntualiza ('What actually froze the disbursement was...') que Planta Física exige ahora certificación de carga de viento para estructuras exteriores independientes que superen dos metros.",
                },
                {
                  id: "D",
                  text: "A prohibition against using recycled timber in freestanding courtyard structures",
                  explanationEs:
                    "Incorrecto: la madera reciclada no presenta ningún inconveniente; el requisito concierne a la estabilidad estructural frente al viento.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d11-list-p2-q03",
              prompt:
                "What does the coordinator mean when he tells Elena, 'Fortunately, you don't need to do so'?",
              options: [
                {
                  id: "A",
                  text: "Her team does not need to lower the pavilion below two meters.",
                  explanationEs:
                    "Incorrecto: en el turno previo Elena no propuso reducir la altura, sino que preguntó si debían contratar una firma externa de ingeniería.",
                },
                {
                  id: "B",
                  text: "Her team does not have to pay an outside engineering firm to obtain certification.",
                  explanationEs:
                    "Correcto: 'do so' sustituye directamente la acción recién formulada por Elena ('hire an external structural engineering firm to certify the pavilion'), explicando que un profesor colegiado de ingeniería civil puede firmar sin costo.",
                },
                {
                  id: "C",
                  text: "Her team is exempt from submitting Physical Plant's stability form.",
                  explanationEs:
                    "Incorrecto: sí deben presentar el formulario de estabilidad de una página, pero refrendado gratuitamente por un docente interno acreditado.",
                },
                {
                  id: "D",
                  text: "Her faculty advisor does not need to countersign future purchase vouchers.",
                  explanationEs:
                    "Incorrecto: los comprobantes de compra ya fueron procesados y no guardan relación con el referente de 'do so'.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d11-list-p2-q04",
              prompt: "What will Elena most likely do tomorrow morning?",
              options: [
                {
                  id: "A",
                  text: "Meet with Professor Nair to have her team's anchor calculations reviewed and signed",
                  explanationEs:
                    "Correcto: anuncia que llevará las especificaciones de anclaje al horario de consulta matutino del profesor Nair en Ingeniería Civil para que firme el formulario.",
                },
                {
                  id: "B",
                  text: "Attend a timber-joints workshop hosted by the Civil Engineering department",
                  explanationEs:
                    "Incorrecto: ese taller ya se realizó el mes pasado ('co-taught our timber-joints workshop last month').",
                },
                {
                  id: "C",
                  text: "Petition Physical Plant to waive the October risk policy for September grantees",
                  explanationEs:
                    "Incorrecto: acepta cumplir la norma mediante la firma del profesor Nair en vez de solicitar una exención.",
                },
                {
                  id: "D",
                  text: "Return the recycled decking to the supplier until the grant account clears",
                  explanationEs: "Incorrecto: jamás menciona devolver los materiales comprados.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "Rastrea siempre el antecedente inmediato de 'do so' en diálogos largos: iTEP suele preguntar qué acción exacta queda descartada o confirmada mediante esa sustitución.",
        },
        {
          part: "part3_lecture",
          id: "d11-list-p3",
          title: "AI Ethics & Intellectual Property: Training Corpora and Fair Use",
          cefrLevel: "B2",
          audio: {
            trackId: "day11-listening-p3",
            audioUrl: "/audio/day11-listening-p3.mp3",
            contextSetup:
              "A law and technology professor lectures on generative artificial intelligence and intellectual property doctrine.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Good morning. Today in our technology ethics seminar, we examine how generative artificial intelligence challenges foundational principles of intellectual property law.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Historically, copyright statutes distinguished reading a work from reproducing it. A human novelist may study hundreds of mysteries to internalize genre conventions, and doing so infringes no copyright unless passages are copied verbatim. It was not until foundation models began ingesting billions of copyrighted articles, photographs, and musical scores to calibrate neural parameters that courts faced a category neither statute nor precedent had anticipated.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Technology developers invoke transformative fair use—a defense permitting unlicensed copying when a secondary use serves a distinct purpose, such as indexing books for a search engine. What developers argue is that neural networks do not store an archive of pasted texts; instead, they extract abstract statistical relationships among tokens and pixels.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Yet legal scholars and creative guilds point to a decisive economic flaw in that analogy. Search engines direct readers back to the original publisher's website, whereas generative systems frequently synthesize substitutes that compete directly against the journalists, illustrators, and coders whose unpaid labor trained the model. Under classic fair-use jurisprudence, commercial market substitution weighs heavily against an infringement defense.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "To bridge this impasse, several jurisdictions have proposed voluntary opt-out registries, allowing copyright holders to flag files excluded from web scraping. On paper, that sounds balanced. In practice, placing the monitoring burden on creators flips property law upside down: independent illustrators cannot police thousands of training datasets every month, and neither can regional newsrooms.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Consequently, ethicists advocate mandatory dataset transparency paired with collective licensing pools modeled on broadcast music royalties. Only when developers disclose training provenance and compensate contributors proportionally can innovation advance without eroding the creative ecosystems on which these models depend.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d11-list-p3-q01",
              prompt: "What is the central focus of the professor's lecture?",
              options: [
                {
                  id: "A",
                  text: "How patent courts determine whether an algorithm can be listed as a corporate inventor",
                  explanationEs:
                    "Incorrecto: la conferencia analiza derechos de autor ('copyright'), corpus de entrenamiento y uso legítimo ('fair use'), no patentes de invención corporativa.",
                },
                {
                  id: "B",
                  text: "Why generative AI training strains fair-use copyright doctrine and requires transparent collective licensing",
                  explanationEs:
                    "Correcto: recoge la tesis integral de la clase: el vacío legal del entrenamiento masivo, el límite económico del 'fair use' por sustitución de mercado, la insuficiencia del 'opt-out' y la solución de transparencia más licencias colectivas.",
                },
                {
                  id: "C",
                  text: "How search engines violated publishing laws before digital indexing was banned",
                  explanationEs:
                    "Incorrecto: la indexación en buscadores se cita precisamente como un ejemplo válido y aceptado de uso transformador, no como una práctica prohibida.",
                },
                {
                  id: "D",
                  text: "Why human novelists face stricter plagiarism rules than software developers",
                  explanationEs:
                    "Incorrecto: el ejemplo del novelista humano se usa al inicio para mostrar cómo aprender convenciones sin copiar literalmente nunca infringió derechos de autor.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d11-list-p3-q02",
              prompt:
                "Why do AI developers compare model training to book-indexing search engines?",
              options: [
                {
                  id: "A",
                  text: "To claim that deriving statistical patterns constitutes a non-infringing transformative purpose",
                  explanationEs:
                    "Correcto: el profesor explica ('What developers argue is that...') que invocan el precedente de los buscadores alegando que las redes no almacenan copias textuales, sino relaciones estadísticas abstractas con un fin distinto.",
                },
                {
                  id: "B",
                  text: "To prove that generative systems drive high volumes of web traffic back to original newsrooms",
                  explanationEs:
                    "Incorrecto: justamente los críticos señalan que, a diferencia de los buscadores, los modelos generativos NO redirigen lectores a la fuente sino que producen sustitutos directos.",
                },
                {
                  id: "C",
                  text: "To demonstrate that all texts scraped from the internet belong to the public domain",
                  explanationEs:
                    "Incorrecto: el debate del 'fair use' versa sobre obras con derechos vigentes ('copyrighted articles, photographs, and musical scores'), no sobre dominio público.",
                },
                {
                  id: "D",
                  text: "To argue that broadcast music royalties already cover digital text scraping",
                  explanationEs:
                    "Incorrecto: las regalías musicales se mencionan al final como modelo institucional para los especialistas en ética, no como defensa actual de los desarrolladores.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d11-list-p3-q03",
              prompt:
                "According to legal scholars cited in the lecture, what weakens the developers' fair-use defense?",
              options: [
                {
                  id: "A",
                  text: "Neural networks store complete, unaltered PDF copies of every novel in their training sets.",
                  explanationEs:
                    "Incorrecto: la objeción académica no afirma que guarden PDFs íntegros, sino que sus salidas compiten comercialmente en el mismo mercado que los autores originales.",
                },
                {
                  id: "B",
                  text: "Generative outputs often act as commercial substitutes that undercut the original creators' market.",
                  explanationEs:
                    "Correcto: explica que generar sustitutos directos frente a periodistas, ilustradores y programadores configura 'commercial market substitution', factor que pesa en contra del uso legítimo.",
                },
                {
                  id: "C",
                  text: "Transformative fair use applies exclusively to non-profit university laboratories.",
                  explanationEs:
                    "Incorrecto: los buscadores comerciales fueron citados como uso transformador válido; el criterio decisivo aquí es la sustitución de mercado, no el ánimo de lucro por sí solo.",
                },
                {
                  id: "D",
                  text: "Software code and photographs are excluded from statutory copyright protection.",
                  explanationEs:
                    "Incorrecto: el profesor incluye expresamente fotografías, partituras, artículos y código entre las obras protegidas cuyo trabajo entrenó los modelos.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d11-list-p3-q04",
              prompt:
                "What is the professor's attitude toward voluntary opt-out registries for creators?",
              options: [
                {
                  id: "A",
                  text: "Supportive, because they offer the fastest technical fix for regional newsrooms",
                  explanationEs:
                    "Incorrecto: menciona explícitamente que ni los ilustradores independientes ni las redacciones regionales ('and neither can regional newsrooms') pueden vigilar miles de conjuntos de datos.",
                },
                {
                  id: "B",
                  text: "Critical, because they shift an unrealistic enforcement burden onto individual rights holders",
                  explanationEs:
                    "Correcto: aunque suenan equilibrados en teoría ('On paper, that sounds balanced'), critica que en la práctica invierten el derecho de propiedad al imponer una vigilancia inabarcable a creadores individuales.",
                },
                {
                  id: "C",
                  text: "Neutral, because no jurisdiction has yet proposed any opt-out mechanism",
                  explanationEs:
                    "Incorrecto: indica que varias jurisdicciones ya los han propuesto y toma una postura claramente crítica frente a su viabilidad.",
                },
                {
                  id: "D",
                  text: "Optimistic that independent illustrators will automate opt-out monitoring at zero cost",
                  explanationEs:
                    "Incorrecto: afirma exactamente lo opuesto sobre la capacidad operativa de los ilustradores independientes.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d11-list-p3-q05",
              prompt:
                "Why does the professor mention broadcast music royalties at the end of the lecture?",
              options: [
                {
                  id: "A",
                  text: "To illustrate an existing collective compensation model that could be adapted for AI training data",
                  explanationEs:
                    "Correcto: utiliza las sociedades de regalías musicales de radiodifusión como referente práctico para diseñar fondos de licenciamiento colectivo combinados con transparencia de datos.",
                },
                {
                  id: "B",
                  text: "To show that composers have been unaffected by generative audio algorithms",
                  explanationEs:
                    "Incorrecto: al inicio mencionó expresamente las partituras musicales ('musical scores') entre las obras ingeridas sin licencia.",
                },
                {
                  id: "C",
                  text: "To argue that radio stations should stop paying licensing fees to songwriters",
                  explanationEs:
                    "Incorrecto: presenta el sistema de regalías como modelo positivo de remuneración proporcional, no para abolirlo.",
                },
                {
                  id: "D",
                  text: "To suggest that copyright protection should apply only to musical recordings and not text",
                  explanationEs:
                    "Incorrecto: el marco ético propuesto abarca todos los ecosistemas creativos de los que dependen los modelos.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d11-list-p3-q06",
              prompt:
                "What does the professor imply will happen if AI developers do not compensate source creators?",
              options: [
                {
                  id: "A",
                  text: "Foundation models may undermine the human creative ecosystems that supply high-quality future training material.",
                  explanationEs:
                    "Correcto: en la oración final advierte que sin transparencia ni compensación proporcional no puede avanzar la innovación sin erosionar los ecosistemas creativos de los cuales dependen los propios modelos ('eroding the creative ecosystems on which these models depend').",
                },
                {
                  id: "B",
                  text: "Search engines will immediately lose their transformative fair-use protection.",
                  explanationEs:
                    "Incorrecto: la situación jurídica de los buscadores tradicionales no se pone en duda en la conclusión.",
                },
                {
                  id: "C",
                  text: "Universities will prohibit computer science students from studying neural networks.",
                  explanationEs:
                    "Incorrecto: no existe mención alguna a prohibir la enseñanza universitaria de redes neuronales.",
                },
                {
                  id: "D",
                  text: "Independent journalists will voluntarily donate their archives to technology companies.",
                  explanationEs:
                    "Incorrecto: contradice el reclamo económico de los gremios creativos y redacciones regionales expuesto en la clase.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "Observa el patrón 'On paper, X sounds balanced. In practice, ...': en conferencias de ética y políticas públicas de iTEP, esa transición marca siempre la crítica central del profesor.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (30 min study / 20 min official pace for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title:
        "Distinguishing Minor Details from Global Synthesis: Paleoproteomics & Parametric Insurance",
      estimatedMinutes: 30,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "En preguntas de idea principal y síntesis global, descarta de inmediato cualquier opción que repita un ejemplo puntual de un solo párrafo (aunque sea verdadero en el texto): la respuesta correcta debe integrar la tensión completa entre todos los párrafos y apoyarse en las estructuras focalizadoras ('What X demonstrates is...', 'It was not until...').",
      passages: [
        {
          part: "part1_intermediate",
          id: "d11-read-p1",
          title: "Collagen Peptide Fingerprinting in Paleolithic Zooarchaeology",
          cefrLevel: "B2",
          topicDomain: "Archaeological Science & Biochemistry",
          paragraphs: [
            "For much of the twentieth century, zooarchaeologists reconstructing Paleolithic hunting economies relied almost exclusively on visual osteology—matching excavated bones to museum reference skeletons through diagnostic joint surfaces and cranial landmarks. However, Pleistocene cave sediments routinely fracture skeletal remains through repeated freeze-thaw cycles, rockfalls, and carnivore scavenging, leaving over eighty percent of recovered fragments morphologically unidentifiable. Because researchers could classify only intact specimens, archival faunal tallies systematically overrepresented thick-walled bones from large ungulates while overlooking fragile remains of smaller prey and hominins.",
            "It was not until bioarchaeologists adapted collagen peptide mass fingerprinting—a rapid biomolecular screening technique known as ZooMS—that these unworked bone splinters yielded reliable taxonomic data. Unlike ancient DNA, which degrades rapidly in temperate caves, structural type-I collagen persists within mineralized bone matrices for hundreds of thousands of years. By digesting milligram-sized samples with trypsin enzymes and measuring resulting peptide masses via laser spectrometry, analysts can assign thousands of nondescript fragments to specific mammalian families at a tiny fraction of the cost of genomic sequencing.",
            "What recent ZooMS campaigns across Eurasian Paleolithic strata reveal is not merely richer prey diversity, but previously invisible hominin fossils hidden inside museum storage boxes. Re-examining uncataloged bone bags from Denisova Cave, specialists identified several hominin splinters that subsequently enabled targeted ancient-DNA extraction and radiocarbon dating. Rather than supplanting genomic or osteological analysis, peptide fingerprinting acts as a high-throughput triage filter, guiding geneticists toward rare specimens genuinely worth destructive sequencing.",
          ],
          questions: [
            {
              id: "d11-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the main idea of the passage?",
              options: [
                {
                  id: "A",
                  text: "Carnivore scavenging in Denisova Cave destroyed eighty percent of ancient hominin DNA.",
                  explanationEs:
                    "Incorrecto: combina de forma distorsionada dos detalles secundarios (el 80 % de fragmentos no identificables visualmente en P1 y la Cueva de Denísova en P3) e ignora el eje central sobre ZooMS.",
                },
                {
                  id: "B",
                  text: "Collagen peptide fingerprinting overcomes the limits of visual bone sorting by rapidly screening fragmented fossils and directing further analysis.",
                  explanationEs:
                    "Correcto: sintetiza la progresión global de los tres párrafos: el sesgo de la osteología visual ante huesos fracturados (P1), la durabilidad y eficiencia bioquímica de ZooMS (P2) y su función como filtro estratégico que complementa la genética (P3).",
                },
                {
                  id: "C",
                  text: "Genomic sequencing has become obsolete because type-I collagen provides complete evolutionary genomes.",
                  explanationEs:
                    "Incorrecto: contradice directamente el cierre del párrafo 3 ('Rather than supplanting genomic or osteological analysis...'), pues ZooMS orienta dónde aplicar secuenciación de ADN antiguo.",
                },
                {
                  id: "D",
                  text: "Twentieth-century zooarchaeologists intentionally discarded bones belonging to large ungulates.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 señala exactamente lo contrario: los huesos robustos de grandes ungulados quedaban sobrerrepresentados ('systematically overrepresented') frente a especies frágiles.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d11-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'nondescript' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "lacking distinctive visual features",
                  explanationEs:
                    "Correcto: remite a las astillas óseas sin rasgos anatómicos diagnósticos ('morphologically unidentifiable' / 'unworked bone splinters') que no podían clasificarse a simple vista.",
                },
                {
                  id: "B",
                  text: "chemically unreactive",
                  explanationEs:
                    "Incorrecto: los fragmentos sí reaccionan bioquímicamente ante la digestión enzimática con tripsina para liberar péptidos de colágeno.",
                },
                {
                  id: "C",
                  text: "excessively mineralized",
                  explanationEs:
                    "Incorrecto: la matriz mineralizada protege al colágeno, pero 'nondescript' califica la apariencia indiferenciada de los fragmentos, no un exceso mineral.",
                },
                {
                  id: "D",
                  text: "unauthorized for export",
                  explanationEs:
                    "Incorrecto: falso matiz administrativo ajeno al contexto taxonómico del pasaje.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d11-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 2 about ancient DNA compared with type-I collagen?",
              options: [
                {
                  id: "A",
                  text: "Ancient DNA can only be extracted from intact joint surfaces of large ungulates.",
                  explanationEs:
                    "Incorrecto: en el párrafo 3 se extrae ADN antiguo precisamente a partir de pequeños fragmentos homínidos detectados mediante ZooMS.",
                },
                {
                  id: "B",
                  text: "Ancient DNA is both less chemically durable in temperate environments and costlier to screen across thousands of fragments than collagen peptides.",
                  explanationEs:
                    "Correcto: el párrafo 2 contrasta que el ADN antiguo se degrada rápido en cuevas templadas ('Unlike ancient DNA, which degrades rapidly...') y que ZooMS clasifica miles de astillas 'at a fraction of the cost of genomic sequencing'.",
                },
                {
                  id: "C",
                  text: "Ancient DNA requires trypsin digestion before laser spectrometry can read its sequence.",
                  explanationEs:
                    "Incorrecto: la digestión con tripsina y espectrometría láser corresponden al protocolo proteómico de ZooMS sobre colágeno, no a la secuenciación genómica.",
                },
                {
                  id: "D",
                  text: "Type-I collagen degrades faster than ancient DNA whenever cave sediments freeze.",
                  explanationEs:
                    "Incorrecto: invierte la relación de preservación descrita en los párrafos 1 y 2.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d11-read-p1-q04",
              questionType: "synthesis",
              prompt: "Why does the author mention 'Denisova Cave' in paragraph 3?",
              options: [
                {
                  id: "A",
                  text: "To prove that Eurasian museums failed to label any Pleistocene fossils during the twentieth century",
                  explanationEs:
                    "Incorrecto: generalización desmedida; las bolsas contenían astillas óseas no catalogadas por carecer de rasgos visuales, no por negligencia generalizada con todos los fósiles.",
                },
                {
                  id: "B",
                  text: "To illustrate a secondary geographic detail showing that ZooMS only works in cold Siberian caves",
                  explanationEs:
                    "Incorrecto: el párrafo 2 destaca justamente que el colágeno resiste incluso en cuevas templadas donde el ADN falla.",
                },
                {
                  id: "C",
                  text: "To provide a concrete example of how peptide screening uncovers rare fossils in existing collections for subsequent DNA analysis",
                  explanationEs:
                    "Correcto: ejemplifica la afirmación focalizada inmediatamente anterior ('What recent ZooMS campaigns... reveal') y conecta con la conclusión del párrafo: usar ZooMS como triaje previo al análisis de ADN antiguo.",
                },
                {
                  id: "D",
                  text: "To argue that visual osteology remains more accurate than mass spectrometry for hominin bones",
                  explanationEs:
                    "Incorrecto: esos fragmentos homínidos habían pasado inadvertidos ante la inspección visual hasta que ZooMS los identificó.",
                },
              ],
              correctOptionId: "C",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d11-read-p2",
          title: "Parametric Climate Insurance and Basis Risk in Vulnerable Economies",
          cefrLevel: "B2",
          topicDomain: "Development Economics & Climate Risk Policy",
          paragraphs: [
            "When major cyclones or multi-season droughts strike climate-vulnerable regions, macroeconomic recovery hinges as much on the speed of post-disaster liquidity as on its total volume. Traditional indemnity insurance—the conventional model in which claims adjusters inspect physical damage on-site before authorizing compensation—frequently stalls for six to twelve months when rural transport corridors fracture and tens of thousands of smallholders file claims simultaneously. Faced with acute working-capital shortages during this verification gap, agricultural households often liquidate productive assets such as breeding livestock or draft equipment, while municipal utilities defer urgent power-grid repairs, converting a temporary weather shock into persistent economic stagnation.",
            "To eliminate that administrative bottleneck, development banks and regional sovereign risk pools have increasingly adopted parametric insurance, an index-based mechanism that decouples payouts from individual loss assessments. Under a parametric contract, insurers and policyholders agree in advance on an objective physical trigger—such as sustained wind speeds exceeding a specified threshold within a defined geographic grid or cumulative seasonal rainfall falling thirty percent below historical norms—monitored continuously by independent meteorological satellites or automated ocean buoys. Once the verified index crosses that predetermined threshold, smart-contract or sovereign disbursement protocols transfer funds within days, enabling governments to finance emergency relief and farmers to purchase seed before the next planting window closes.",
            "Despite this operational velocity, parametric instruments introduce a structural vulnerability known to actuaries as basis risk: the statistical mismatch between the measured physical index and the actual economic losses suffered on the ground. [A] Because satellite rainfall estimates and anemometer networks average atmospheric data across multi-kilometer grid cells, localized microclimates or steep coastal topography can shield one valley while devastating an adjacent farming community just outside the designated trigger boundary. [B] Conversely, temporal aggregation creates a parallel distortion: an intense downpour concentrated over a single weekend may satisfy seasonal cumulative rainfall quotas on paper while washing away topsoil and ruining harvests anyway. [C] In both scenarios, mechanical reliance on coarse environmental proxies leaves affected contributors uncompensated precisely when financial protection is most urgent, eroding public confidence in index-based coverage. [D]",
            "What recent sovereign risk evaluations demonstrate, therefore, is that parametric insurance functions effectively only as one layer within an integrated disaster-finance architecture rather than as a standalone panacea. Neither rapid index triggers nor traditional indemnity policies can remain actuarially solvent if underlying physical exposure goes unmitigated. Progressive Caribbean and Pacific sovereign pools are consequently pairing denser ground-station calibration and crop-growth remote sensing—measures that narrow basis risk—with pre-disaster public investments in coastal mangrove buffers, resilient urban drainage, and dedicated contingency reserves.",
          ],
          questions: [
            {
              id: "d11-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, why can slow indemnity insurance payouts cause long-term economic stagnation after a disaster?",
              options: [
                {
                  id: "A",
                  text: "Claims adjusters systematically reduce compensation totals whenever transport corridors are repaired.",
                  explanationEs:
                    "Incorrecto: el problema señalado es la demora de seis a doce meses provocada por rutas dañadas y miles de reclamos simultáneos, no una reducción punitiva al reparar vías.",
                },
                {
                  id: "B",
                  text: "Cash-strapped households sell off productive assets and local utilities postpone critical infrastructure repairs while awaiting funds.",
                  explanationEs:
                    "Correcto: el párrafo 1 detalla que ante la falta inmediata de liquidez las familias rurales liquidan ganado o equipos de labranza y los servicios municipales postergan reparaciones urgentes de red.",
                },
                {
                  id: "C",
                  text: "Rural smallholders are legally barred from replanting crops until physical inspections conclude.",
                  explanationEs:
                    "Incorrecto: el impedimento descrito es financiero ('working-capital shortages'), no una prohibición legal de siembra.",
                },
                {
                  id: "D",
                  text: "Development banks charge punitive interest rates during multi-season droughts.",
                  explanationEs:
                    "Incorrecto: los bancos de desarrollo aparecen en el párrafo 2 como promotores de soluciones paramétricas, no cobrando tasas punitivas en el párrafo 1.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d11-read-p2-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'decouples' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "separates",
                  explanationEs:
                    "Correcto: 'decouples payouts from individual loss assessments' significa que desvincula o separa los pagos de las inspecciones individuales de daños, activándolos mediante índices físicos objetivos.",
                },
                {
                  id: "B",
                  text: "deducts",
                  explanationEs:
                    "Incorrecto: trampa fonética; no alude a restar montos de las evaluaciones, sino a independizar el desembolso del peritaje presencial.",
                },
                {
                  id: "C",
                  text: "duplicates",
                  explanationEs:
                    "Incorrecto: antónimo conceptual de simplificar el cuello de botella de verificación.",
                },
                {
                  id: "D",
                  text: "conceals",
                  explanationEs:
                    "Incorrecto: los disparadores paramétricos se acuerdan por adelantado de forma transparente ('agree in advance on an objective physical trigger'), nada se oculta.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d11-read-p2-q03",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author describe 'an intense downpour concentrated over a single weekend' in paragraph 3?",
              options: [
                {
                  id: "A",
                  text: "To prove that automated ocean buoys are more accurate than meteorological satellites",
                  explanationEs:
                    "Incorrecto: no compara boyas oceánicas contra satélites; ilustra una limitación temporal de los índices acumulados de lluvia.",
                },
                {
                  id: "B",
                  text: "To argue that droughts cause greater agricultural damage than tropical cyclones",
                  explanationEs:
                    "Incorrecto: no establece una jerarquía de daños entre sequías y ciclones.",
                },
                {
                  id: "C",
                  text: "To illustrate a second form of basis risk in which seasonal rainfall totals mask destructive extreme weather",
                  explanationEs:
                    "Correcto: complementa el ejemplo espacial anterior ('Conversely...') mostrando cómo un índice estacional acumulado puede cumplirse 'en papel' gracias a un aguacero torrencial que en realidad erosiona el suelo y arruina la cosecha.",
                },
                {
                  id: "D",
                  text: "To show how mangrove buffers prevent topsoil erosion on inland farms",
                  explanationEs:
                    "Incorrecto: los manglares se mencionan recién al final del párrafo 4 como infraestructura preventiva costera.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d11-read-p2-q04",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 3 about policyholder trust in poorly calibrated parametric insurance schemes?",
              options: [
                {
                  id: "A",
                  text: "Farmers and municipalities may hesitate to keep paying premiums if severe local losses repeatedly fail to trigger payouts.",
                  explanationEs:
                    "Correcto: si la dependencia mecánica en indicadores gruesos deja sin indemnización a aportantes damnificados ('leaves affected contributors uncompensated precisely when financial protection is most acute'), se infiere lógicamente el riesgo para la credibilidad y continuidad de los asegurados.",
                },
                {
                  id: "B",
                  text: "Policyholders prefer waiting twelve months for satellite data rather than receiving immediate funds.",
                  explanationEs:
                    "Incorrecto: los datos satelitales se procesan en días (P2); quien tarda seis a doce meses es el seguro tradicional de indemnización (P1).",
                },
                {
                  id: "C",
                  text: "Actuaries intentionally widen grid cells to maximize basis risk in coastal valleys.",
                  explanationEs:
                    "Incorrecto: el riesgo de base se presenta como una limitación técnica de resolución espacial y temporal que los fondos soberanos buscan reducir ('narrow basis risk'), no maximizar.",
                },
                {
                  id: "D",
                  text: "Smart-contract protocols automatically refund premiums whenever a storm misses a coastal city.",
                  explanationEs:
                    "Incorrecto: no existe mención alguna a devolución automática de primas cuando no ocurre siniestro.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d11-read-p2-q05",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "For smallholders cultivating crops along that unrecorded side of the ridge, catastrophic storm damage yields zero contractual compensation.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` apenas se ha definido en abstracto 'basis risk', sin mencionarse aún ninguna cresta costera ('that unrecorded side of the ridge') ni fronteras de activación.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Correcto: 'that unrecorded side of the ridge' remite cohesivamente a la topografía costera escarpada ('steep coastal topography') y a la comunidad agrícola situada justo fuera del límite del disparador en la oración previa, antes de que 'Conversely' introduzca la distorsión temporal.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Incorrecto: la oración anterior a `[C]` describe un aguacero de fin de semana (distorsión temporal), no una barrera topográfica espacial.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Incorrecto: colocar un detalle espacial específico en `[D]` rompería el cierre sintético logrado por 'In both scenarios... eroding public confidence'.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d11-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which statement best captures the passage's overarching conclusion rather than a minor supporting detail?",
              options: [
                {
                  id: "A",
                  text: "Ocean buoys and meteorological satellites can transmit storm-surge and rainfall data within days of a cyclone.",
                  explanationEs:
                    "Incorrecto: aunque es un dato verdadero del párrafo 2, constituye un detalle operativo parcial que omite el riesgo de base (P3) y la necesidad de mitigación física integrada (P4).",
                },
                {
                  id: "B",
                  text: "Caribbean and Pacific islands should replace all meteorological satellites with coastal mangrove plantations.",
                  explanationEs:
                    "Incorrecto: distorsiona un ejemplo del párrafo 4; los fondos soberanos combinan calibración técnica y sensores remotos CON manglares y reservas, no los reemplazan.",
                },
                {
                  id: "C",
                  text: "While parametric insurance accelerates post-disaster liquidity, its effectiveness requires finer index calibration combined with physical risk-reduction investments and contingency reserves.",
                  explanationEs:
                    "Correcto: sintetiza fielmente el arco completo del artículo guiado por la oración hendida del párrafo 4 ('What recent sovereign risk evaluations demonstrate, therefore, is that...'), integrando velocidad (P1–P2), mitigación del riesgo de base (P3–P4) y resiliencia física.",
                },
                {
                  id: "D",
                  text: "Traditional indemnity insurance remains superior to parametric models because on-site inspections prevent basis risk.",
                  explanationEs:
                    "Incorrecto: contradice tanto la crítica del párrafo 1 a la parálisis de liquidez del modelo tradicional como la elipsis negativa del párrafo 4 ('Neither rapid index triggers nor traditional indemnity policies...').",
                },
              ],
              correctOptionId: "C",
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
      title: "Syntactic Variety B2+: Focusing Structures & Substitution in Timed Production",
      estimatedMinutes: 30,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Para superar la barrera del 3.8 en iTEP Writing, los evaluadores buscan madurez sintáctica deliberada sin sacrificar concisión: incorpora una hendida temporal ('It was not until...') o sustitución con 'do so' en tu nota de 5 minutos, y articula tu ensayo con una pseudo-hendida ('What preserves... is...') y una aposición explicativa limpia.",
      tasks: [
        {
          part: "part1_note",
          id: "d11-writ-p1",
          cefrLevel: "B2",
          title: "Reporting a Microfilm Scanner Malfunction Before Thesis Submission",
          prompt:
            "You are a graduate history student completing archival verification due this Friday. Today you discovered that the high-resolution microfilm scanner in the Special Collections room is malfunctioning. Write a formal note to Dr. Alvarez, Head Archivist, in which you: (1) specify when you noticed the technical failure, (2) explain how it affects Friday's thesis citations, and (3) ask to use the conservation lab's backup scanner tomorrow morning.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Resuelve los 3 puntos en 3–4 oraciones precisas: abre identificando el fallo con 'It was not until... that...', vincula el impacto directo sobre tus citas del viernes evitando repeticiones léxicas mediante 'do so', y cierra solicitando cortésmente el escáner de respaldo para mañana por la mañana.",
          recommendedConnectors: [
            "It was not until",
            "Without a legible scan,",
            "do so",
            "whether I might",
          ],
          b2RubricChecklistEs: [
            "Cubre íntegramente los 3 puntos solicitados (momento del hallazgo, impacto en la entrega del viernes y solicitud del escáner secundario mañana por la mañana).",
            "Respeta el margen estricto de 50 a 75 palabras con tono académico respetuoso ('Dear Dr. Alvarez,' / 'Sincerely,').",
            "Emplea con exactitud al menos una estructura del Día 11 ('It was not until... that...' o sustitución verbal con 'do so').",
            "Mantiene ortografía, mayúsculas y puntuación impecables sin asistencia de corrector.",
          ],
          modelAnswerB2:
            "Dear Dr. Alvarez, It was not until I loaded Reel 14 at noon today that I noticed the Special Collections microfilm scanner producing blurred, unreadable images. Because I must verify three municipal census tables before Friday's thesis deadline, I cannot finalize my citations unless I do so tomorrow. Could you confirm whether I might use the conservation lab's backup scanner Thursday at 9:00 a.m.? Sincerely, Elena Rostova",
        },
        {
          part: "part2_essay",
          id: "d11-writ-p2",
          cefrLevel: "B2",
          title: "Regulated AI Workflows vs. Total Bans in University Coursework",
          prompt:
            "As generative artificial intelligence tools become capable of drafting code, essays, and analytical summaries, some faculty members argue that universities should prohibit AI assistance entirely in graded coursework to protect independent thinking. Others maintain that institutions should integrate regulated AI workflows into curricula while redesigning assessments around verification and oral defense. Which policy should universities adopt? Support your position with specific reasons and concrete examples.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Planifica 4 párrafos equilibrados (185–215 palabras): P1 Tesis decidida apoyando una política clara; P2 Concesión al temor docente + refutación mostrando por qué las prohibiciones totales fracasan o desarman al graduado; P3 Ejemplo concreto de rediseño evaluativo (auditoría de errores, defensa oral o trazabilidad) empleando aposición explicativa y 'do so'; P4 Cierre contundente encabezado por una oración pseudo-hendida ('What ultimately safeguards... is...').",
          recommendedConnectors: [
            "Admittedly,",
            "However,",
            "do so",
            "Neither ... nor",
            "What ultimately safeguards",
          ],
          b2RubricChecklistEs: [
            "Defiende una postura inequívoca desde el primer párrafo frente al dilema entre prohibición total e integración regulada.",
            "Se mantiene dentro del rango de 175 a 225 palabras desarrollando ejemplos académicos y profesionales concretos.",
            "Integra de forma orgánica al menos dos estructuras B2+ del Día 11 (hendida con 'What... is...', aposición entre comas o rayas, elipsis con 'neither... nor' o sustitución con 'do so').",
            "Incluye concesión breve al argumento opuesto seguida de refutación lógica.",
            "Exhibe vocabulario académico preciso ('verification', 'provenance', 'pedagogical', 'scrutinize') sin errores ortográficos.",
          ],
          modelAnswerB2:
            "Blanket prohibitions on generative artificial intelligence in university coursework may appear to defend academic rigor, yet enforcing total bans is both impractical and pedagogically counterproductive. Universities should instead integrate regulated AI workflows paired with rigorous verification assessments.\n\nAdmittedly, unrestricted reliance on automated drafting allows unmotivated students to bypass foundational reasoning. However, attempting to police invisible off-campus software usage breeds adversarial mistrust without preparing graduates for contemporary research workplaces. Software engineers, policy analysts, and legal researchers are already expected to audit machine-generated drafts critically; graduates trained to do so ethically hold a decisive professional advantage over peers artificially shielded from these tools.\n\nRather than outlawing emerging technology, academic departments should redesign grading around transparent accountability—an assessment model in which students submit complete prompt logs, verify primary archival citations, and defend their methodology during brief oral examinations. Neither fabricated references nor superficial reasoning can survive live faculty questioning when a student must justify why a specific statistical model or historical source was selected.\n\nUltimately, what safeguards intellectual independence in higher education is not technological isolation, but disciplined critical scrutiny. Teaching undergraduates to interrogate algorithmic outputs ensures that human judgment remains firmly in command.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Emphatic Framing in Hypothesis Revision & Public Research Patent Policy",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "Usa estructuras focalizadoras como anclas de fluidez oral: abrir tu argumento con 'What surprised our team most was...' (Part 1) o 'What proponents of exclusivity overlook is that...' (Part 2) proyecta control gramatical B2 inmediato y le da al evaluador una señal nítida de tu estructura.",
      tasks: [
        {
          part: "part1_personal",
          id: "d11-speak-p1",
          cefrLevel: "B2",
          title: "Revising an Academic or Workplace Assumption After New Evidence",
          prompt:
            "Describe a time in an academic course or professional project when unexpected data or constructive feedback forced you to revise your initial assumption. Explain what made you change direction and how the final outcome improved.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–12s (Initial Assumption): Briefly state the project and what you originally assumed.",
            "12–30s (Pivotal Evidence via Cleft): Use 'It wasn't until... that...' or 'What the data showed was...' to explain the turning point.",
            "30–45s (Revised Action & Outcome): State how you adjusted your approach and the measurable improvement.",
          ],
          keyPhrasesB2: [
            "Initially, our team assumed that...",
            "It wasn't until we cross-checked the survey responses that...",
            "What the disaggregated data revealed was...",
            "Had we refused to do so, our final report would have missed...",
          ],
          selfRubricChecklistEs: [
            "Presenté el contexto y la suposición inicial en menos de 12 segundos sin rodeos genéricos.",
            "Utilicé al menos una oración hendida ('It wasn't until... that...' o 'What... was...') para destacar el hallazgo decisivo.",
            "Expliqué con claridad cómo mejoró el resultado final antes de agotarse los 45 segundos.",
            "Mantuve dicción nítida y énfasis prosódico natural sobre las palabras clave de contraste.",
          ],
          modelTranscriptB2:
            "During a marketing analytics seminar last semester, my team initially assumed that low student attendance at campus cultural concerts stemmed from ticket prices. However, it wasn't until we segmented three hundred survey responses by commuter status that the real barrier emerged. What the disaggregated data revealed was that seventy percent of off-campus students missed evening performances simply because university shuttle buses stopped running at nine p.m. Once we pivoted our proposal from price discounts to coordinating late-night transit shuttles on concert Fridays, the student affairs committee adopted our plan, and attendance rose by nearly forty percent the following month.",
        },
        {
          part: "part2_opinion",
          id: "d11-speak-p2",
          cefrLevel: "B2",
          title: "Immediate Open-Access Mandates vs. Temporary Patent Exclusivity",
          prompt:
            "When university laboratories develop medical or clean-energy breakthroughs using public tax funds, some policymakers argue that all resulting patents and datasets should enter the public domain immediately so society benefits without cost barriers. Others contend that universities must grant private companies temporary patent exclusivity; otherwise, firms will not invest the capital required to manufacture and test laboratory discoveries at scale. Which policy better serves the public interest, and why?",
          audioPrompt: {
            trackId: "day11-speaking-p2",
            audioUrl: "/audio/day11-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective science policy prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-GB-SoniaNeural",
                text: "When university laboratories develop medical or clean-energy breakthroughs using public tax funds, some policymakers argue that all resulting patents and datasets should enter the public domain immediately so society benefits without cost barriers. Others contend that universities must grant private companies temporary patent exclusivity; otherwise, firms will not invest the capital required to manufacture and test laboratory discoveries at scale. Which policy better serves the public interest, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Decisive Thesis): Endorse a clear model (e.g., conditional/tiered licensing or open access with public manufacturing) right away.",
            "12–30s (Concession + Focused Rebuttal): Acknowledge commercialization costs, then counter using 'What unrestricted monopolies ignore is...'.",
            "30–50s (Concrete Illustration): Give an example from pharmaceuticals or grid-scale batteries showing equitable access.",
            "50–60s (Synthesis Closure): Deliver a firm concluding sentence before the 60s timer ends.",
          ],
          keyPhrasesB2: [
            "In my view, publicly funded university breakthroughs should prioritize...",
            "While it is true that scaling clinical trials requires substantial capital...",
            "What unconditional patent monopolies create is...",
            "By requiring non-exclusive humanitarian licensing, universities can do so without...",
          ],
          selfRubricChecklistEs: [
            "Declaré una postura firme desde los primeros 10 segundos respondiendo directamente cuál política sirve mejor al interés público.",
            "Reconocí brevemente el argumento de costos de escalamiento industrial antes de refutarlo o matizarlo con condiciones.",
            "Integré al menos dos recursos de cohesión/focalización B2 ('What... is...', 'neither... nor', 'do so', aposición).",
            "Ilustré mi postura con un ejemplo concreto de salud pública o energía limpia.",
            "Cerré la idea completa con entonación descendente antes del segundo 60.",
          ],
          modelTranscriptB2:
            "In my view, publicly funded university discoveries best serve society through immediate open-data publication paired with conditional, non-exclusive licensing rather than unrestricted patent monopolies. While industrial partners understandably argue that scaling clinical trials or battery manufacturing demands substantial private capital, granting exclusive pricing power over taxpayer-funded research forces citizens to pay twice—first through public grants and again through inflated retail prices. What unconditional exclusivity often creates is artificial scarcity, particularly for essential medicines in lower-income regions. Instead, universities can license commercial manufacturing rights while retaining affordable-access clauses and open research datasets so rival laboratories can keep innovating. Several public vaccine consortia have already proved it is possible to do so without deterring qualified manufacturers. Ultimately, aligning commercialization incentives with equitable access ensures that public science fulfills its civic mission.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Resolví los 10 reactivos de Grammar dominando 'It was not until... that', 'What... is that', 'do so' y concordancia elíptica con 'so/neither'.",
    "Completé Listening P1, P2 y la conferencia de Ética de IA y Propiedad Intelectual (P3) en una sola reproducción estricta.",
    "Distinguí detalles ilustrativos menores frente a la síntesis global en Reading P1 y P2, acertando la inserción cohesiva en `[B]`.",
    "Escribí la nota (50–75 palabras) y el ensayo (175–225 palabras) aplicando variedad sintáctica B2+ sin corrector ortográfico.",
    "Grabé Speaking Part 1 y Part 2 empleando estructuras hendidas como anclas de énfasis y fluidez dentro del tiempo oficial.",
  ],
};
