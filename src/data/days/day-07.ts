import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day07: RoadmapDay = {
  dayNumber: 7,
  sprintNumber: 2,
  cefrLevel: "B2",
  title: "Academic Collocations, Prepositions & Precision Quantifiers",
  subtitleEs:
    "Cuantificadores de precisión ('few/a few', 'little/a little', 'neither/each of') y colocaciones preposicionales académicas",
  b2FocusSummaryEs:
    "En la víspera del Simulacro Intermedio (Día 8), sellamos los errores léxico-gramaticales más sutiles del examen iTEP: la polaridad argumentativa entre 'few' (escasez negativa) y 'a few' (suficiencia positiva) o 'little' y 'a little', la concordancia singular estricta tras distributivos ('neither of', 'each of') y el régimen exacto de verbos y adjetivos académicos ('contingent upon', 'comprise' activo frente a 'consist of' intransitivo, 'comply with', 'attribute X to Y'). Combinamos este dominio con ritmo real de 20 minutos en Reading y control milimétrico de extensión en Writing.",
  estimatedMinutes: 145,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Polarity Quantifiers, Distributive Agreement & Prepositional Collocations",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Evalúa dos variables antes de marcar un cuantificador: contabilidad del sustantivo núcleo (contable plural vs. incontable) y polaridad pragmática de la oración (insuficiencia negativa sin 'a' vs. disponibilidad positiva con 'a'). En colocaciones académicas, memoriza el bloque verbal inseparable ('comply with', 'attribute to', 'contingent upon') y recuerda que ni 'comprise' ni 'consist of' se pasivizan en registro formal.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d07-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Polarity Quantifiers with Uncountable Nouns (little vs. a little)",
          sentenceWithBlank:
            "Because regional customs authorities provided _____ advance guidance regarding the revised tariff schedule, cross-border manufacturers could not recalibrate their quarterly procurement budgets.",
          options: [
            {
              id: "A",
              text: "few",
              explanationEs:
                "Incorrecto: aunque expresa escasez negativa, 'few' solo puede modificar sustantivos contables en plural, mientras que 'guidance' es un sustantivo abstracto incontable.",
            },
            {
              id: "B",
              text: "a little",
              explanationEs:
                "Incorrecto: 'a little' tiene polaridad positiva ('algo de / suficiente orientación'), lo cual contradice la consecuencia negativa de la cláusula principal ('could not recalibrate').",
            },
            {
              id: "C",
              text: "little",
              explanationEs:
                "Correcto: 'little' sin artículo modifica al sustantivo incontable 'guidance' y aporta el matiz restrictivo negativo ('casi ninguna orientación previa') que explica la imposibilidad de ajustar presupuestos.",
            },
            {
              id: "D",
              text: "a few",
              explanationEs:
                "Incorrecto: falla tanto en contabilidad (exige plural contable) como en polaridad pragmática (expresa suficiencia positiva).",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Si la cláusula causal con 'because/since' desemboca en un bloqueo o fracaso ('could not...'), necesitas polaridad negativa ('little' + incontable / 'few' + plural contable), nunca 'a little' ni 'a few'.",
        },
        {
          part: "part1_fill_blank",
          id: "d07-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Academic Adjective + Preposition Collocations (contingent upon)",
          sentenceWithBlank:
            "Disbursement of the second tranche of sovereign stabilization credit remains strictly _____ the central bank's adherence to quarterly reserve benchmarks.",
          options: [
            {
              id: "A",
              text: "contingent upon",
              explanationEs:
                "Correcto: colocación académica formal ('contingent upon/on' = supeditado o condicionado a) que vincula el desembolso financiero con el cumplimiento de metas de reservas.",
            },
            {
              id: "B",
              text: "contingent with",
              explanationEs:
                "Incorrecto: 'contingent' jamás rige la preposición 'with'; suele confundirse con 'consistent with', cuyo significado ('coherente con') no expresa condicionalidad.",
            },
            {
              id: "C",
              text: "comprised of",
              explanationEs:
                "Incorrecto: además de ser una construcción rechazada en gramática normativa formal, 'estar compuesto de' carece de sentido entre 'disbursement' y 'adherence'.",
            },
            {
              id: "D",
              text: "attributed for",
              explanationEs:
                "Incorrecto: 'attribute' exige la preposición 'to' ('attributed to') e indica atribución causal, no condición previa de desembolso.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Diferencia con precisión tres adjetivos frecuentes en iTEP B2: 'contingent upon' (condicionado a), 'consistent with' (coherente con) y 'tantamount to' (equivalente en la práctica a).",
        },
        {
          part: "part1_fill_blank",
          id: "d07-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Distributive Quantifiers & Dual Reference (Neither of)",
          sentenceWithBlank:
            "_____ the two econometric forecasts submitted to the treasury committee accounts adequately for semiconductor lead-time volatility.",
          options: [
            {
              id: "A",
              text: "Both of",
              explanationEs:
                "Incorrecto: aunque se refiere a dos elementos, 'Both of' exige obligatoriamente verbo en plural ('account'), incompatible con el singular 'accounts'.",
            },
            {
              id: "B",
              text: "Neither of",
              explanationEs:
                "Correcto: 'Neither of' se aplica específicamente a un conjunto de dos elementos ('the two econometric forecasts') y concuerda en singular con el verbo formal 'accounts'.",
            },
            {
              id: "C",
              text: "Few of",
              explanationEs:
                "Incorrecto: 'Few of' se emplea para conjuntos mayores de dos y exige concordancia verbal en plural ('account').",
            },
            {
              id: "D",
              text: "None",
              explanationEs:
                "Incorrecto: ante un determinante definido ('the two...'), 'None' no puede colocarse directamente sin la preposición partitiva 'of' y además 'neither' es la forma precisa para dos referentes.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Ante el numeral explícito 'the two...' seguido de verbo en tercera persona singular ('-s'), los únicos candidatos distributivos válidos son 'Neither of' o 'Either of', nunca 'Both of'.",
        },
        {
          part: "part1_fill_blank",
          id: "d07-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Positive Sufficiency Quantifiers with Plural Countable Nouns (a few)",
          sentenceWithBlank:
            "While most regional wholesalers suspended overseas orders during the currency shock, _____ well-capitalized importers managed to preserve buffer inventories through forward currency hedging.",
          options: [
            {
              id: "A",
              text: "few",
              explanationEs:
                "Incorrecto: usar 'few' negativo anularía el contraste adversativo introducido por 'While most ... suspended', donde la cláusula matriz destaca el grupo minoritario que SÍ logró mantener inventarios.",
            },
            {
              id: "B",
              text: "a little",
              explanationEs:
                "Incorrecto: aunque tiene polaridad positiva, 'a little' no puede modificar al sustantivo contable plural 'importers'.",
            },
            {
              id: "C",
              text: "a few",
              explanationEs:
                "Correcto: 'a few' combina concordancia contable plural ('importers') con polaridad afirmativa ('unos cuantos / algunos importadores bien capitalizados sí lograron...'), completando el contraste con 'While most...'.",
            },
            {
              id: "D",
              text: "little",
              explanationEs:
                "Incorrecto: incompatible gramaticalmente con el sustantivo contable plural 'importers' y semánticamente contrario al logro expresado por 'managed to preserve'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "En estructuras concesivas 'While/Although most [fracasaron], _____ [tuvieron éxito]', la cláusula principal resalta una excepción positiva: elige 'a few' (contable plural) o 'a little' (incontable).",
        },
        {
          part: "part1_fill_blank",
          id: "d07-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Causal Attribution Collocations (attribute X to Y)",
          sentenceWithBlank:
            "In their post-crisis assessment, central bank researchers attributed nearly forty percent of durable-goods inflation _____ prolonged maritime container bottlenecks rather than domestic wage growth.",
          options: [
            {
              id: "A",
              text: "with",
              explanationEs:
                "Incorrecto: confunde 'attribute X to Y' con 'credit X with Y' o 'associate X with Y'; el verbo 'attribute' nunca selecciona 'with'.",
            },
            {
              id: "B",
              text: "from",
              explanationEs:
                "Incorrecto: 'from' acompaña verbos de origen intransitivo como 'stem from' o 'result from', no al transitivo 'attribute'.",
            },
            {
              id: "C",
              text: "on",
              explanationEs:
                "Incorrecto: interferencia con 'blame X on Y'; en inglés formal la estructura fija es 'attribute [efecto] to [causa]'.",
            },
            {
              id: "D",
              text: "to",
              explanationEs:
                "Correcto: respeta la colocación preposicional invariable 'attribute [efecto: inflation] to [causa: container bottlenecks]'.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "No mezcles verbos causales cercanos: se dice 'attribute effect TO cause', 'blame effect ON cause', 'credit agent WITH achievement' y 'stem FROM cause'.",
        },
        {
          part: "part2_error_identification",
          id: "d07-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Formal Usage of 'comprise' vs. 'be composed of'",
          sentenceWithMarkedSegments:
            "The Eurozone's harmonized consumer price index [A]{is comprised of} twelve weighted expenditure categories [B]{that national statistical agencies} [C]{rebalance annually} to capture shifting [D]{household consumption patterns}.",
          correctedSegment: "comprises",
          options: [
            {
              id: "A",
              text: "is comprised of",
              explanationEs:
                "Incorrecto (contiene el error): en el inglés académico normativo evaluado por iTEP, 'comprise' ya significa por sí mismo 'constar de / abarcar' en voz activa ('the whole comprises the parts'); el cruce pasivo '*is comprised of' es agramatical y debe ser 'comprises' (o 'is composed of').",
            },
            {
              id: "B",
              text: "that national statistical agencies",
              explanationEs:
                "Correcto en la oración: cláusula relativa definitoria de objeto cuyo sujeto plural es 'national statistical agencies'.",
            },
            {
              id: "C",
              text: "rebalance annually",
              explanationEs:
                "Correcto en la oración: verbo transitivo plural en Present Simple concordando con 'agencies' y modificado por el adverbio de frecuencia 'annually'.",
            },
            {
              id: "D",
              text: "household consumption patterns",
              explanationEs:
                "Correcto en la oración: cadena nominal técnica estándar en macroeconomía ('patrones de consumo de los hogares').",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Regla de oro para 'el todo y las partes' en iTEP Part 2: 'The index comprises 12 categories' = 'The index consists of 12 categories' = 'The index is composed of 12 categories'. Tacha siempre '*is comprised of'.",
        },
        {
          part: "part2_error_identification",
          id: "d07-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Prepositional Governance of 'comply'",
          sentenceWithMarkedSegments:
            "Multinational pharmaceutical distributors [A]{operating across} customs unions must [B]{comply to} cold-chain serialization standards [C]{whenever} temperature-sensitive biologics move [D]{between regional logistics hubs}.",
          correctedSegment: "comply with",
          options: [
            {
              id: "A",
              text: "operating across",
              explanationEs:
                "Correcto en la oración: cláusula participial activa reducida ('[which are] operating across') que modifica a 'distributors'.",
            },
            {
              id: "B",
              text: "comply to",
              explanationEs:
                "Incorrecto (contiene el error): mezcla errónea entre 'comply with' y 'conform to / adhere to'; el verbo 'comply' rige única y exclusivamente la preposición 'with' ('comply with').",
            },
            {
              id: "C",
              text: "whenever",
              explanationEs:
                "Correcto en la oración: conjunción temporal-condicional ('cada vez que') que introduce una cláusula subordinada completa.",
            },
            {
              id: "D",
              text: "between regional logistics hubs",
              explanationEs:
                "Correcto en la oración: 'between' es legítimo cuando expresa tránsito bilateral recíproco o conexiones definidas entre nodos logísticos.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Contrasta el trío regulatorio sin confundir sus preposiciones: 'comply WITH regulations', 'adhere TO regulations', 'abide BY regulations'.",
        },
        {
          part: "part2_error_identification",
          id: "d07-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Singular Verb Agreement After 'Each of + Plural Noun'",
          sentenceWithMarkedSegments:
            "[A]{Each of} the twelve regional reserve banks [B]{publish} an anecdotal survey of [C]{local credit conditions} two weeks prior to [D]{every monetary policy meeting}.",
          correctedSegment: "publishes",
          options: [
            {
              id: "A",
              text: "Each of",
              explanationEs:
                "Correcto en la oración: pronombre distributivo seguido apropiadamente de 'of + determinante definido + sustantivo plural'.",
            },
            {
              id: "B",
              text: "publish",
              explanationEs:
                "Incorrecto (contiene el error): el núcleo gramatical del sujeto es el pronombre singular 'Each' (no el complemento preposicional 'banks'), por lo que exige verbo en singular: 'publishes'.",
            },
            {
              id: "C",
              text: "local credit conditions",
              explanationEs:
                "Correcto en la oración: sintagma nominal plural bien estructurado tras la preposición 'of'.",
            },
            {
              id: "D",
              text: "every monetary policy meeting",
              explanationEs:
                "Correcto en la oración: el determinante distributivo 'every' modifica correctamente al núcleo contable singular 'meeting'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Cuando una oración comienza con 'Each of the...', 'Every one of the...', 'Either of the...' o 'Neither of the...', ignora el sustantivo plural intermedio y exige verbo singular.",
        },
        {
          part: "part2_error_identification",
          id: "d07-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Quantifier-Noun Countability Mismatch (few vs. little)",
          sentenceWithMarkedSegments:
            "Conventional trade models [A]{devote} [B]{surprisingly few attention} to inland riverine depth, [C]{even though} seasonal droughts [D]{repeatedly disrupt} bulk agricultural barge traffic.",
          correctedSegment: "surprisingly little attention",
          options: [
            {
              id: "A",
              text: "devote",
              explanationEs:
                "Correcto en la oración: verbo transitivo en plural concordando con 'models' dentro de la colocación 'devote attention to'.",
            },
            {
              id: "B",
              text: "surprisingly few attention",
              explanationEs:
                "Incorrecto (contiene el error): 'attention' es un sustantivo incontable, por lo que no admite el cuantificador contable 'few'; debe emplearse 'surprisingly little attention'.",
            },
            {
              id: "C",
              text: "even though",
              explanationEs:
                "Correcto en la oración: locución conjuntiva concesiva seguida de cláusula finita completa ('seasonal droughts ... disrupt').",
            },
            {
              id: "D",
              text: "repeatedly disrupt",
              explanationEs:
                "Correcto en la oración: adverbio de frecuencia antepuesto al verbo plural 'disrupt' en concordancia con 'droughts'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Vigila en iTEP los sustantivos incontables abstractos frecuentes ('attention', 'evidence', 'research', 'equipment', 'feedback', 'progress'): jamás aceptan 'many', 'few' ni 'a few'.",
        },
        {
          part: "part2_error_identification",
          id: "d07-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Prohibition of Passive Voice with Intransitive 'consist of'",
          sentenceWithMarkedSegments:
            "Sovereign wealth portfolios [A]{managed by} commodity-exporting states typically [B]{are consisted of} foreign treasury bonds, [C]{global equities}, and infrastructure holdings [D]{denominated in reserve currencies}.",
          correctedSegment: "consist of",
          options: [
            {
              id: "A",
              text: "managed by",
              explanationEs:
                "Correcto en la oración: cláusula relativa pasiva reducida ('[which are] managed by') modificando a 'portfolios'.",
            },
            {
              id: "B",
              text: "are consisted of",
              explanationEs:
                "Incorrecto (contiene el error): 'consist of' es un verbo estativo intransitivo y jamás puede conjugarse en voz pasiva en inglés; debe escribirse en voz activa: 'consist of'.",
            },
            {
              id: "C",
              text: "global equities",
              explanationEs:
                "Correcto en la oración: término financiero plural preciso ('acciones globales') en paralelismo nominal con 'bonds' y 'holdings'.",
            },
            {
              id: "D",
              text: "denominated in reserve currencies",
              explanationEs:
                "Correcto en la oración: participio pasado con colocación preposicional exacta ('denominated in') para divisas de reserva.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si detectas 'is/are/was/were consisted of' en cualquier reactivo de iTEP, márcalo sin dudar: 'consist of' funciona como 'happen' o 'occur' y nunca admite voz pasiva.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Econometrics Dataset Update, Practicum NDA Compliance & Supply-Chain Lecture",
      estimatedMinutes: 35,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "Afina el oído para captar cuantificadores negativos ('neither of the files', 'few inventory buffers') y condiciones regulatorias ('contingent upon', 'comply with'): en una sola reproducción, perder un 'little' frente a 'a little' o un 'neither' invierte por completo el sentido de la respuesta.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d07-list-p1",
          title: "Missing Port-Congestion Series in Econometrics Lab",
          cefrLevel: "B2",
          audio: {
            trackId: "day07-listening-p1",
            audioUrl: "/audio/day07-listening-p1.mp3",
            contextSetup:
              "An undergraduate economics student speaks with a graduate teaching assistant after a quantitative methods lab.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Excuse me, Devon. I downloaded both spreadsheets for Friday's trade-elasticity assignment, but neither of the two files contains the fourth-quarter port-congestion index mentioned in the prompt.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Teaching Assistant",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Good catch. The federal maritime bureau revised its seasonal adjustment formula yesterday afternoon, so Professor Okafor pulled that column temporarily to prevent everyone from running regressions on outdated numbers.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Should we omit fourth-quarter observations from our model, then?",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Teaching Assistant",
                voice: "en-US-AndrewMultilingualNeural",
                text: "No need—I just finished merging the recalibrated series, and I'm uploading the corrected master file to the portal as soon as I walk back to my office.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d07-list-p1-q01",
              prompt: "What should the student do to complete Friday's assignment accurately?",
              options: [
                {
                  id: "A",
                  text: "Exclude fourth-quarter shipping observations from her regression analysis",
                  explanationEs:
                    "Incorrecto: el asistente descarta explícitamente esa opción ('No need') porque ya integró la serie corregida.",
                },
                {
                  id: "B",
                  text: "Download the updated master spreadsheet once the teaching assistant posts it shortly",
                  explanationEs:
                    "Correcto: el asistente explica que acaba de fusionar la serie recalibrada y subirá el archivo maestro corregido al portal en cuanto regrese a su oficina.",
                },
                {
                  id: "C",
                  text: "Calculate the seasonal adjustment formula manually from raw maritime bureau bulletins",
                  explanationEs:
                    "Incorrecto: la serie ya fue recalibrada y fusionada por el asistente; el estudiante no tiene que calcularla manualmente.",
                },
                {
                  id: "D",
                  text: "Combine the two existing spreadsheets to reconstruct the missing fourth-quarter column",
                  explanationEs:
                    "Incorrecto: la estudiante aclaró al inicio que ninguno de los dos archivos ('neither of the two files') incluye esa columna porque el profesor la retiró temporalmente.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En diálogos de laboratorio cuantitativo, presta atención a 'neither of the two...' al inicio (define qué falta exactamente) y a la acción inminente del cierre ('as soon as I walk back').",
        },
        {
          part: "part2_conversation",
          id: "d07-list-p2",
          title: "Confidentiality Compliance in a Supply-Chain Thesis Practicum",
          cefrLevel: "B2",
          audio: {
            trackId: "day07-listening-p2",
            audioUrl: "/audio/day07-listening-p2.mp3",
            contextSetup:
              "A senior economics major meets with the coordinator of the university's industry research practicum.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Hello Dr. Halvorsen. I wanted to update you on my senior thesis practicum with MedCore Diagnostics—the regional medical-device manufacturer.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-GB-SoniaNeural",
                text: "Please come in, Lucas. Have their procurement managers granted you access to the component lead-time records you needed?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Conditionally, yes. Their legal counsel said sharing thirty-six months of shipment logs is contingent upon my complying with their vendor non-disclosure protocol.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-GB-SoniaNeural",
                text: "That's fairly standard when firms share proprietary supplier pricing. Did they send over the agreement for our university counsel to review?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "They did, and one clause worries me. It stipulates that neither vendor names nor unit contract prices may appear in any publicly archived document—yet honors theses are automatically indexed in the university library repository.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-GB-SoniaNeural",
                text: "Let's unpack that carefully. Does your econometric model actually require identifying individual overseas suppliers by name, or are you measuring percentage delays and price indices across tiers?",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Actually, my regressions only use normalized price indices—setting the baseline quarter equal to one hundred—and anonymized region codes like 'East Asian Tier-Two Foundry.'",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-GB-SoniaNeural",
                text: "Then there's very little conflict in practice. Firms include broad repository restrictions when they assume students will paste raw invoice tables into an appendix. Draft a one-page data-masking protocol showing how you replace company identifiers with alphanumeric codes and convert dollar figures into base-hundred indices, and attach it for MedCore's legal team.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "That makes complete sense. Plus, if they still want extra assurance, doesn't the library allow a one-year embargo on public downloads while faculty examiners grade the thesis?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-GB-SoniaNeural",
                text: "Exactly—each of our industry-sponsored honors students has the option to request a twelve-month repository embargo, so mention both safeguards when you write back to their counsel today.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d07-list-p2-q01",
              prompt:
                "Why is Lucas concerned about the non-disclosure clause proposed by MedCore Diagnostics?",
              options: [
                {
                  id: "A",
                  text: "It prohibits him from analyzing shipment logs covering more than twelve months.",
                  explanationEs:
                    "Incorrecto: la empresa ofreció treinta y seis meses de registros ('thirty-six months of shipment logs'); el plazo de doce meses corresponde al embargo opcional de biblioteca mencionado al final.",
                },
                {
                  id: "B",
                  text: "It forbids publishing vendor names and unit prices, whereas honors theses are archived publicly by the library.",
                  explanationEs:
                    "Correcto: Lucas explica que la cláusula prohíbe incluir nombres de proveedores o precios unitarios en documentos públicos, y las tesis de honor se indexan automáticamente en el repositorio bibliotecario.",
                },
                {
                  id: "C",
                  text: "It requires Dr. Halvorsen to transfer intellectual property ownership of his econometric code to MedCore.",
                  explanationEs:
                    "Incorrecto: en ningún momento se menciona cesión de código o propiedad intelectual del modelo.",
                },
                {
                  id: "D",
                  text: "It prevents faculty examiners from reading his thesis before graduation.",
                  explanationEs:
                    "Incorrecto: incluso con un embargo de descargas públicas, los sinodales sí califican la tesis normalmente ('while faculty examiners grade the thesis').",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d07-list-p2-q02",
              prompt:
                "Why does Dr. Halvorsen conclude that there is 'very little conflict in practice'?",
              options: [
                {
                  id: "A",
                  text: "Honors theses in the economics department are exempt from library archiving.",
                  explanationEs:
                    "Incorrecto: sí se archivan en el repositorio, aunque admiten anonimización y embargo temporal de un año.",
                },
                {
                  id: "B",
                  text: "MedCore's overseas suppliers already publish their unit contract prices online.",
                  explanationEs:
                    "Incorrecto: la coordinadora califica esos precios como información confidencial de proveedores ('proprietary supplier pricing').",
                },
                {
                  id: "C",
                  text: "Lucas's statistical model relies on anonymized regional codes and base-hundred indices rather than raw names or dollar prices.",
                  explanationEs:
                    "Correcto: al confirmar Lucas que sus regresiones solo usan índices normalizados (base 100) y códigos regionales anónimos, no necesita publicar ninguno de los datos crudos restringidos.",
                },
                {
                  id: "D",
                  text: "University legal counsel can override corporate non-disclosure agreements unilaterally.",
                  explanationEs:
                    "Incorrecto: lejos de invalidar el acuerdo, proponen cumplirlo mediante un protocolo formal de enmascaramiento de datos.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d07-list-p2-q03",
              prompt:
                "According to Dr. Halvorsen, why do partner companies typically insert strict repository clauses?",
              options: [
                {
                  id: "A",
                  text: "They worry students might include unedited invoice tables in thesis appendices.",
                  explanationEs:
                    "Correcto: explica que las empresas incluyen restricciones amplias porque asumen que los estudiantes pegarán tablas de facturas sin procesar ('paste raw invoice tables into an appendix').",
                },
                {
                  id: "B",
                  text: "They want to delay competing universities from replicating their diagnostic devices.",
                  explanationEs:
                    "Incorrecto: la inquietud descrita gira en torno a precios contractuales e identidad de proveedores en facturas, no al diseño médico del dispositivo.",
                },
                {
                  id: "C",
                  text: "They are required by customs authorities to seal shipping records for five years.",
                  explanationEs:
                    "Incorrecto: no se menciona ningún mandato aduanero de cinco años.",
                },
                {
                  id: "D",
                  text: "They have had few positive experiences working with undergraduate interns in the past.",
                  explanationEs:
                    "Incorrecto: la coordinadora señala que esa cláusula es una práctica estándar corporativa, no fruto de malas experiencias previas.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d07-list-p2-q04",
              prompt: "What two measures will Lucas propose to MedCore's legal counsel?",
              options: [
                {
                  id: "A",
                  text: "Shortening the dataset to twelve months and omitting East Asian foundries",
                  explanationEs:
                    "Incorrecto: mantendrá los 36 meses y las fundiciones codificadas por región.",
                },
                {
                  id: "B",
                  text: "Submitting a written data-masking protocol and offering a twelve-month library download embargo",
                  explanationEs:
                    "Correcto: redactará el protocolo de una página explicando la codificación alfanumérica e índices base 100, y ofrecerá además el embargo de doce meses en el repositorio público.",
                },
                {
                  id: "C",
                  text: "Replacing MedCore's dataset with public customs statistics and delaying graduation",
                  explanationEs:
                    "Incorrecto: el objetivo de ambos pasos es conservar el acceso a los registros reales de MedCore sin retrasar su tesis.",
                },
                {
                  id: "D",
                  text: "Paying a licensing fee and restricting thesis access exclusively to MedCore executives",
                  explanationEs:
                    "Incorrecto: no existe tarifa alguna y los examinadores académicos evalúan la tesis antes de que expire el embargo anual.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Observa el contraste entre 'little conflict' (casi ningún conflicto real) y la condición 'contingent upon my complying with...': identificar cómo se concilian ambas partes te da las respuestas de inferencia y acción siguiente.",
        },
        {
          part: "part3_lecture",
          id: "d07-list-p3",
          title:
            "Macroeconomics: The Bullwhip Effect, Just-in-Time Fragility & Supply-Side Inflation",
          cefrLevel: "B2",
          audio: {
            trackId: "day07-listening-p3",
            audioUrl: "/audio/day07-listening-p3.mp3",
            contextSetup:
              "A macroeconomics professor delivers an upper-level lecture on supply-chain dynamics and inflation transmission.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Good morning. Over the past two weeks, our macroeconomics models have treated inflation primarily as a demand-pull phenomenon driven by household spending and monetary expansion. Today, we're shifting to the supply side—specifically, how inventory architecture inside global supply chains amplifies minor demand fluctuations into economy-wide price shocks.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Operations economists call the core mechanism the bullwhip effect. Picture cracking a long leather whip: a tiny flick of your wrist at the handle generates massive wave oscillations at the tip. Modern production networks consist of multiple sequential tiers—retailers, regional wholesalers, component assemblers, and raw-material refiners—each of which forecasts future orders using limited local information.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Suppose consumer purchases of laptop computers rise by just five percent in a single quarter. Unsure whether that uptick is temporary or permanent, retailers pad their restocking orders by ten percent to avoid empty shelves. Regional wholesalers, seeing a ten-percent jump, order twenty percent more motherboards, and upstream silicon-wafer foundries suddenly confront a forty-percent demand surge that exceeds physical plant capacity.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "For three decades prior to 2020, this amplification was compounded by 'just-in-time' inventory management. To minimize warehousing costs and maximize return on capital, manufacturers held very little buffer stock on-site, relying instead on synchronized maritime and air-freight schedules. While lean inventories performed admirably during periods of geopolitical calm, they left assembly lines contingent upon uninterrupted port operations.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Consequently, when pandemic port closures or canal blockages delayed a few specialized microchips costing less than two dollars apiece, entire automobile plants stood idle, and empirical studies attributed a substantial share of subsequent durable-goods inflation to upstream bottleneck pricing rather than excess consumer stimulus alone.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Now, many corporations are pivoting toward 'just-in-case' stockpiling and multi-country sourcing. Yet macroeconomists caution that resilience carries a permanent efficiency cost: holding larger safety inventories ties up working capital and raises baseline unit costs, meaning central banks may face slightly higher structural price pressures even after acute bottlenecks subside.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d07-list-p3-q01",
              prompt: "What is the central purpose of the lecture?",
              options: [
                {
                  id: "A",
                  text: "To prove that household monetary stimulus is the sole cause of durable-goods inflation",
                  explanationEs:
                    "Incorrecto: el profesor abre precisamente contrastando las clases previas de demanda con el análisis de oferta y atribuye buena parte de la inflación reciente a cuellos de botella aguas arriba.",
                },
                {
                  id: "B",
                  text: "To explain how multi-tier order amplification and lean inventories transmit supply-chain disruptions into macroeconomic price pressures",
                  explanationEs:
                    "Correcto: sintetiza el efecto látigo ('bullwhip effect'), la vulnerabilidad del modelo 'just-in-time', el impacto inflacionario de cuellos de botella y el costo estructural del nuevo acopio precautorio.",
                },
                {
                  id: "C",
                  text: "To demonstrate why laptop computers require fewer semiconductors than modern automobiles",
                  explanationEs:
                    "Incorrecto: portátiles y automóviles sirven como ejemplos ilustrativos de distintos momentos del argumento, nunca se comparan sus cantidades de chips.",
                },
                {
                  id: "D",
                  text: "To persuade central banks to regulate warehouse leasing fees directly",
                  explanationEs:
                    "Incorrecto: los costos de almacenaje se mencionan como incentivo empresarial privado, no como objeto de regulación por bancos centrales.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d07-list-p3-q02",
              prompt: "Why does the professor use the analogy of cracking a leather whip?",
              options: [
                {
                  id: "A",
                  text: "To illustrate how small retail demand shifts grow progressively larger at each upstream stage of a supply chain",
                  explanationEs:
                    "Correcto: un leve giro de muñeca en el mango equivale al incremento minorista del 5 %, que se amplifica al 10 %, 20 % y 40 % al avanzar hacia mayoristas, ensambladores y fundiciones.",
                },
                {
                  id: "B",
                  text: "To show how rapidly maritime freight vessels accelerate once port congestion clears",
                  explanationEs:
                    "Incorrecto: la analogía describe la distorsión creciente de pedidos entre eslabones productivos, no la velocidad física de los barcos.",
                },
                {
                  id: "C",
                  text: "To criticize retail managers for disciplining overseas suppliers with sudden contract cancellations",
                  explanationEs:
                    "Incorrecto: interpreta literalmente la imagen punitiva del látigo en vez de su sentido físico ondulatorio ('wave oscillations').",
                },
                {
                  id: "D",
                  text: "To explain how central banks tighten interest rates abruptly during inflationary spikes",
                  explanationEs:
                    "Incorrecto: las tasas de interés no son el referente de la analogía del efecto látigo.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d07-list-p3-q03",
              prompt:
                "According to the laptop example, why does a five-percent retail increase turn into a forty-percent surge at silicon-wafer foundries?",
              options: [
                {
                  id: "A",
                  text: "Approximately thirty-five percent of silicon wafers break during maritime transit.",
                  explanationEs:
                    "Incorrecto: no se menciona rotura de obleas en tránsito; la amplificación proviene de pedidos preventivos inflados.",
                },
                {
                  id: "B",
                  text: "Each tier adds precautionary padding to its orders when forecasting demand from incomplete local signals.",
                  explanationEs:
                    "Correcto: al contar con información local limitada y desconocer si el repunte es permanente, cada eslabón infla sus pedidos ('pad their restocking orders') acumulando distorsión aguas arriba.",
                },
                {
                  id: "C",
                  text: "Government tariffs require foundries to reserve forty percent of output for domestic buyers.",
                  explanationEs:
                    "Incorrecto: el ejemplo numérico explica el mecanismo de pronóstico escalonado, sin intervención arancelaria.",
                },
                {
                  id: "D",
                  text: "Consumers typically purchase four peripheral accessories alongside every new laptop.",
                  explanationEs: "Incorrecto: invención ajena al audio.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d07-list-p3-q04",
              prompt:
                "Why did manufacturers adopt 'just-in-time' inventory management prior to 2020?",
              options: [
                {
                  id: "A",
                  text: "To comply with international treaties limiting industrial warehouse size",
                  explanationEs:
                    "Incorrecto: fue una decisión financiera corporativa, no una obligación de tratados internacionales.",
                },
                {
                  id: "B",
                  text: "To lower storage expenses and improve capital efficiency during stable trade conditions",
                  explanationEs:
                    "Correcto: el profesor explica que mantenían muy poco inventario de reserva ('very little buffer stock') para minimizar costos de almacenaje y maximizar el rendimiento del capital.",
                },
                {
                  id: "C",
                  text: "To insulate automobile plants from canal blockages and port strikes",
                  explanationEs:
                    "Incorrecto: al contrario, el sistema 'just-in-time' los dejó totalmente expuestos ('contingent upon uninterrupted port operations') ante cierres portuarios y bloqueos.",
                },
                {
                  id: "D",
                  text: "To prevent inexpensive microchips from becoming technologically obsolete in storage",
                  explanationEs:
                    "Incorrecto: la obsolescencia de chips de dos dólares no se menciona como motivo.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d07-list-p3-q05",
              prompt:
                "What point does the professor illustrate by mentioning two-dollar microchips in automobile manufacturing?",
              options: [
                {
                  id: "A",
                  text: "How a shortage of a few low-cost components can halt complex production and fuel downstream inflation",
                  explanationEs:
                    "Correcto: demuestra cómo, sin inventarios de respaldo, el retraso de unos pocos microchips baratos paralizó plantas automotrices enteras e impulsó precios de bienes duraderos.",
                },
                {
                  id: "B",
                  text: "Why automakers no longer use semiconductors in entry-level vehicles",
                  explanationEs:
                    "Incorrecto: las plantas quedaron detenidas ('stood idle') precisamente porque no podían fabricar vehículos sin esos chips.",
                },
                {
                  id: "C",
                  text: "That raw materials represent a larger share of car prices than assembly labor",
                  explanationEs:
                    "Incorrecto: el ejemplo subraya la asimetría entre el bajo precio del insumo (< $2) y la magnitud de la paralización.",
                },
                {
                  id: "D",
                  text: "That air freight is cheaper than maritime shipping for heavy automotive parts",
                  explanationEs: "Incorrecto: no se compara el flete aéreo de piezas pesadas.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d07-list-p3-q06",
              prompt:
                "What macroeconomic trade-off does the professor associate with shifting toward 'just-in-case' inventory strategies?",
              options: [
                {
                  id: "A",
                  text: "It eliminates the bullwhip effect completely without affecting corporate unit costs.",
                  explanationEs:
                    "Incorrecto: el profesor advierte explícitamente que la resiliencia conlleva un costo permanente de eficiencia y eleva costos unitarios base.",
                },
                {
                  id: "B",
                  text: "It enhances supply resilience at the expense of tied-up capital and persistently higher baseline costs.",
                  explanationEs:
                    "Correcto: mantener mayores inventarios de seguridad y diversificar países inmoviliza capital de trabajo y eleva costos unitarios estructurales, generando presiones de precios algo mayores para los bancos centrales.",
                },
                {
                  id: "C",
                  text: "It forces wholesalers to abandon multi-country sourcing and rely on a single domestic port.",
                  explanationEs:
                    "Incorrecto: 'just-in-case' va acompañado precisamente de abastecimiento multipaís ('multi-country sourcing').",
                },
                {
                  id: "D",
                  text: "It guarantees rapid deflation across durable-goods sectors within a single quarter.",
                  explanationEs:
                    "Incorrecto: señala lo contrario: presiones estructurales de precios ligeramente más altas ('slightly higher structural price pressures').",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En clases de Macroeconomía, sigue siempre la cadena de compensaciones ('trade-offs'): eficiencia de capital con fragilidad ('just-in-time') frente a resiliencia operativa con costos base más altos ('just-in-case').",
        },
      ],
    },

    // =========================================================================
    // 3. READING (35 min study / STRICT 20-min official pace = 1200s)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Agricultural Cold-Chain Logistics & Rare-Earth Refining Policy",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Entrena hoy el ritmo oficial estricto de 20 minutos (1200 segundos): dedica máximo 7 minutos al Pasaje 1 (lectura ágil + 4 reactivos) y 13 minutos al Pasaje 2 (lectura estructural + 6 reactivos). Presta atención especial a 'little' vs. 'a few' y a las relaciones causales 'contingent upon' y 'attributed to'.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d07-read-p1",
          title: "Cold-Chain Bottlenecks and Post-Harvest Loss in Emerging Markets",
          cefrLevel: "B2",
          topicDomain: "Development Economics & Logistics Infrastructure",
          paragraphs: [
            "Development economists have long attributed rural food insecurity in tropical regions primarily to low crop yields, insufficient fertilizer access, and erratic rainfall. Yet recent empirical audits of horticultural supply chains suggest that production volume tells only part of the story: in several emerging economies, nearly one-third of harvested fruits, vegetables, and dairy spoils before reaching urban consumers. Because smallholder districts possess very little refrigerated pre-cooling capacity near farm gates, perishable produce begins deteriorating within hours of harvest, eroding farm incomes and inflating retail food prices simultaneously.",
            "Expanding rural cold chains, however, is contingent upon more than simply importing refrigerated trucks. Continuous thermal preservation comprises an interdependent sequence of solar-powered pre-cooling sheds, insulated aggregation depots, reliable rural grid connections, and standardized plastic crates that allow chilled air to circulate evenly. When even one link in this sequence fails—such as customs delays at provincial checkpoints or intermittent voltage drops—microbial spoilage accelerates irreversibly, leaving wholesalers unable to comply with export phytosanitary thresholds.",
            "Encouragingly, a few decentralized financing models have begun overcoming the steep upfront capital barrier that previously deterred private cold-storage investment. Rather than requiring smallholders to purchase costly cooling machinery outright, 'cooling-as-a-service' cooperatives lease insulated crate space by the kilogram per day and bundle digital inventory tracking with mobile wholesale matchmaking. By aligning refrigeration fees directly with realized market sales, these cooperatives demonstrate that curbing post-harvest loss can raise rural revenues faster and with far lower environmental strain than clearing additional forest land for cultivation.",
          ],
          questions: [
            {
              id: "d07-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the main argument of the passage?",
              options: [
                {
                  id: "A",
                  text: "Increasing synthetic fertilizer subsidies remains the fastest way to lower urban food prices in tropical economies.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 señala que la visión tradicional centrada solo en rendimientos y fertilizantes es incompleta frente a la pérdida poscosecha.",
                },
                {
                  id: "B",
                  text: "Addressing post-harvest spoilage through integrated infrastructure and pay-per-use cooling models offers a high-impact path to higher farm incomes and food supply.",
                  explanationEs:
                    "Correcto: integra el diagnóstico de pérdida poscosecha (P1), el carácter sistémico de la cadena de frío (P2) y la viabilidad económica de las cooperativas de pago por uso (P3).",
                },
                {
                  id: "C",
                  text: "Export phytosanitary regulations should be relaxed so smallholders can sell unrefrigerated produce abroad.",
                  explanationEs:
                    "Incorrecto: los estándares fitosanitarios se mencionan como requisito que se incumple cuando falla la cadena térmica, no como norma que deba eliminarse.",
                },
                {
                  id: "D",
                  text: "Importing fleets of diesel refrigerated trucks suffices to eliminate rural horticultural spoilage.",
                  explanationEs:
                    "Incorrecto: contradice frontalmente la primera oración del párrafo 2 ('contingent upon more than simply importing refrigerated trucks').",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d07-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'intermittent' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "sporadic and irregular",
                  explanationEs:
                    "Correcto: 'intermittent voltage drops' se refiere a caídas eléctricas irregulares o intermitentes que interrumpen la preservación térmica continua.",
                },
                {
                  id: "B",
                  text: "permanently subsidized",
                  explanationEs:
                    "Incorrecto: las caídas de voltaje son fallos técnicos de la red rural, no subsidios tarifarios.",
                },
                {
                  id: "C",
                  text: "deliberately scheduled",
                  explanationEs:
                    "Incorrecto: su carácter impredecible como fallo de eslabón contradice una programación deliberada.",
                },
                {
                  id: "D",
                  text: "negligible and harmless",
                  explanationEs:
                    "Incorrecto: el texto afirma que cuando falla un solo eslabón como este, el deterioro microbiano se acelera de forma irreversible.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d07-read-p1-q03",
              questionType: "detail",
              prompt:
                "According to paragraph 3, how do 'cooling-as-a-service' cooperatives make refrigeration accessible to smallholder farmers?",
              options: [
                {
                  id: "A",
                  text: "By offering zero-interest ten-year mortgages so individual farmers can buy private pre-cooling sheds",
                  explanationEs:
                    "Incorrecto: el texto contrasta este modelo precisamente con exigir que los agricultores compren maquinaria propia ('Rather than requiring smallholders to purchase...').",
                },
                {
                  id: "B",
                  text: "By charging daily per-kilogram storage fees tied to market transactions rather than upfront equipment purchases",
                  explanationEs:
                    "Correcto: arriendan espacio en cajas aisladas por kilogramo al día, integran seguimiento digital de inventario y vinculan las tarifas con ventas reales.",
                },
                {
                  id: "C",
                  text: "By clearing adjacent forest land to build centralized state-owned grain elevators",
                  explanationEs:
                    "Incorrecto: el cierre destaca exactamente que reducir mermas evita tener que talar más tierras forestales para cultivo.",
                },
                {
                  id: "D",
                  text: "By replacing plastic crates with airtight metal containers that require no airflow",
                  explanationEs:
                    "Incorrecto: el párrafo 2 especifica que se emplean cajas plásticas estandarizadas que permiten la circulación uniforme del aire frío.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d07-read-p1-q04",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 2 about thermal spoilage in perishable produce?",
              options: [
                {
                  id: "A",
                  text: "Re-chilling produce at an urban warehouse cannot undo microbial damage caused by an earlier break in cooling.",
                  explanationEs:
                    "Correcto: dado que la cadena es interdependiente y cuando falla un solo eslabón el deterioro microbiano se acelera irreversiblemente ('accelerates irreversibly'), enfriar después no revierte el daño sufrido.",
                },
                {
                  id: "B",
                  text: "Dairy products tolerate provincial checkpoint delays far better than tropical fruits do.",
                  explanationEs:
                    "Incorrecto: frutas, verduras y lácteos se agrupan conjuntamente como perecederos vulnerables sin establecer esa jerarquía.",
                },
                {
                  id: "C",
                  text: "Solar-powered pre-cooling sheds eliminate the need for insulated aggregation depots.",
                  explanationEs:
                    "Incorrecto: el párrafo 2 define ambos elementos como partes indispensables de una secuencia interdependiente.",
                },
                {
                  id: "D",
                  text: "Most post-harvest spoilage occurs inside urban supermarkets rather than near rural farms.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 indica que casi un tercio se pierde antes de llegar al consumidor urbano porque el deterioro comienza horas después de la cosecha cerca de las fincas.",
                },
              ],
              correctOptionId: "A",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d07-read-p2",
          title: "Midstream Refining Bottlenecks and Industrial Policy in Rare-Earth Supply Chains",
          cefrLevel: "B2",
          topicDomain: "International Macroeconomics & Resource Economics",
          paragraphs: [
            "Public debates surrounding clean-energy supply chains frequently portray rare-earth elements—seventeen chemically similar metallic elements essential for electric-vehicle traction motors, precision robotics, and offshore wind turbines—as geologically scarce commodities. In strictly mineralogical terms, however, light and heavy lanthanides such as neodymium, praseodymium, dysprosium, and cerium occur across multiple continents in crustal concentrations exceeding those of silver, lead, or mercury. Resource economists therefore attribute global supply vulnerability not to an absolute absence of underground ore deposits, but to extreme geographic concentration in midstream hydrometallurgical processing, where a single industrial jurisdiction currently refines more than eighty percent of global magnet-grade rare-earth oxides.",
            "Understanding why midstream refining became so heavily concentrated requires examining the chemical complexity and regulatory structure of lanthanide separation. Because trivalent rare-earth ions possess nearly identical atomic radii and chemical properties, isolating individual high-purity oxides from crushed mineral concentrate entails hundreds of sequential solvent-extraction mixer-settlers consuming vast quantities of hydrochloric or nitric acid, water, and organic reagents. Moreover, hard-rock rare-earth ores such as bastnaesite and monazite routinely co-occur with naturally radioactive thorium and uranium, meaning commercial refineries must comply with stringent hazardous tailings-containment statutes. In high-income jurisdictions, securing environmental permits and constructing zero-discharge waste facilities often spans eight to twelve years, leaving private equity investors with remarkably little appetite for unhedged greenfield refineries.",
            "Seeking to insulate decarbonization targets from geopolitical leverage, several importing governments have recently enacted industrial subsidy packages contingent upon domestic processing milestones. [A] Yet trade economists caution that uncoordinated national subsidies rarely achieve durable diversification on their own. [B] When multiple importing nations simultaneously finance capital-intensive separation plants without pooling procurement demand or training specialized hydrometallurgical engineers, construction costs escalate while newly commissioned facilities operate well below efficient scale. [C] Furthermore, steep tariff walls erected to shield infant domestic refineries frequently provoke retaliatory export quotas on upstream mineral concentrates before new mines reach commercial output. [D]",
            "Consequently, contemporary policy research increasingly favors multilateral 'supply-chain consortia' over isolated domestic autarky. Under this cooperative framework, allied partner economies coordinate joint strategic stockpiles, co-finance a few regional refining hubs situated near certified mining districts, sign long-term price-floor off-take agreements, and harmonize environmental auditing standards so compliant producers are not undercut by unpriced pollution externalities abroad. Simultaneously, materials scientists are scaling closed-loop magnet recycling from end-of-life wind turbines, medical scanners, and industrial robotics—a secondary supply stream that bypasses radioactive mining waste altogether and substantially reduces the degree to which clean-energy manufacturing remains hostage to primary refining chokepoints.",
          ],
          questions: [
            {
              id: "d07-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, why is the term 'rare-earth elements' potentially misleading in public policy discussions?",
              options: [
                {
                  id: "A",
                  text: "Only three of the seventeen elements are actually used in modern wind turbines or electric motors.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 menciona neodimio, praseodimio y cerio como ejemplos ('such as'), no afirma que solo tres tengan uso industrial.",
                },
                {
                  id: "B",
                  text: "The elements are relatively abundant in the Earth's crust, and bottlenecks stem from concentrated midstream refining rather than geological scarcity.",
                  explanationEs:
                    "Correcto: explica que superan en concentración cortical a la plata o el mercurio y que la vulnerabilidad radica en la concentración superior al 80 % del refinado hidrometalúrgico intermedio.",
                },
                {
                  id: "C",
                  text: "Global reserves of silver and mercury are refined in the exact same hydrometallurgical facilities.",
                  explanationEs:
                    "Incorrecto: la plata y el mercurio solo sirven como referencia comparativa de abundancia mineralógica en la corteza terrestre.",
                },
                {
                  id: "D",
                  text: "Most magnet-grade oxides are synthesized artificially in laboratories without mining underground ore.",
                  explanationEs:
                    "Incorrecto: el párrafo 2 describe explícitamente el procesamiento a partir de concentrado mineral triturado ('crushed mineral concentrate').",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d07-read-p2-q02",
              questionType: "detail",
              prompt:
                "Based on paragraph 2, what two factors discourage private investors from financing new rare-earth refineries in high-income economies?",
              options: [
                {
                  id: "A",
                  text: "Complex multi-stage chemical separation and lengthy environmental permitting tied to radioactive waste containment",
                  explanationEs:
                    "Correcto: recoge los cientos de etapas de extracción con solventes ácidos por radios atómicos casi idénticos y los plazos de 8 a 12 años para permisos y contención de residuos radiactivos de torio y uranio.",
                },
                {
                  id: "B",
                  text: "Declining global demand for permanent magnets and an oversupply of hydrometallurgical engineers",
                  explanationEs:
                    "Incorrecto: la demanda energética limpia está en auge y el párrafo 3 señala más bien escasez de ingenieros hidrometalúrgicos especializados.",
                },
                {
                  id: "C",
                  text: "International treaties prohibiting the industrial use of organic reagents in solvent extraction",
                  explanationEs:
                    "Incorrecto: no existe prohibición internacional sobre esos reactivos, sino estrictas leyes nacionales de contención de relaves.",
                },
                {
                  id: "D",
                  text: "The inability of modern chemistry to separate neodymium from silver ore",
                  explanationEs:
                    "Incorrecto: la dificultad técnica consiste en separar lantánidos entre sí por sus radios iónicos similares, no separarlos de la plata.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d07-read-p2-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'autarky' in paragraph 4 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "complete national economic self-sufficiency",
                  explanationEs:
                    "Correcto: en contraste directo con 'multilateral supply-chain consortia' y 'partner economies coordinate', 'isolated domestic autarky' significa autosuficiencia económica nacional aislada.",
                },
                {
                  id: "B",
                  text: "automated robotic mineral extraction",
                  explanationEs:
                    "Incorrecto: distractor fonético con 'automation'; la robótica aparece más adelante únicamente como fuente de imanes reciclados.",
                },
                {
                  id: "C",
                  text: "transparent environmental auditing",
                  explanationEs:
                    "Incorrecto: la auditoría ambiental armonizada forma parte del modelo cooperativo multilateral opuesto a la autarquía.",
                },
                {
                  id: "D",
                  text: "deregulated spot-market speculation",
                  explanationEs:
                    "Incorrecto: 'isolated domestic autarky' alude a políticas estatales de sustitución cerrada, no a especulación bursátil desregulada.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d07-read-p2-q04",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "Under such fragmented conditions, publicly backed plants risk requiring indefinite fiscal support merely to remain solvent whenever global oxide prices dip.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se ha descrito ninguna fragmentación ni sobrecostos operativos que justifiquen 'Under such fragmented conditions'.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: la oración previa a `[B]` apenas enuncia la advertencia general de los economistas comerciales sin detallar el mecanismo de plantas subutilizadas.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Correcto: 'Under such fragmented conditions' retoma directamente la multiplicidad descoordinada de países financiando plantas que operan por debajo de escala eficiente ('below efficient scale'), explicando su consecuencia financiera antes de que 'Furthermore' introduzca el riesgo comercial de cuotas de represalia.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Incorrecto: antes de `[D]` la discusión ya giró hacia aranceles y represalias sobre concentrados minerales ('before new mines reach commercial output'), alejándose de la solvencia por escala de refinación.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d07-read-p2-q05",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 3 about countries that build domestic rare-earth refineries faster than they develop domestic mines?",
              options: [
                {
                  id: "A",
                  text: "Their new refineries could still face feedstock shortages if exporting nations restrict shipments of raw mineral concentrates.",
                  explanationEs:
                    "Correcto: dado que los aranceles proteccionistas suelen provocar cuotas de exportación en represalia sobre concentrados minerales aguas arriba antes de que las minas nacionales entren en operación comercial, esas refinerías quedarían sin materia prima.",
                },
                {
                  id: "B",
                  text: "They can easily substitute silver or mercury for lanthanides inside electric-vehicle motors.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 define las tierras raras como esenciales ('essential') para esos motores; plata y mercurio solo comparaban abundancia geológica.",
                },
                {
                  id: "C",
                  text: "They are exempt from complying with thorium tailings-containment regulations.",
                  explanationEs:
                    "Incorrecto: refinar concentrados minerales importados genera igualmente residuos que deben cumplir las normas ambientales del párrafo 2.",
                },
                {
                  id: "D",
                  text: "Their refineries automatically achieve lower unit costs than established foreign competitors.",
                  explanationEs:
                    "Incorrecto: el párrafo 3 afirma exactamente lo opuesto: costos constructivos inflados y operación por debajo de la escala eficiente.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d07-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Why does the author discuss 'closed-loop magnet recycling' at the end of paragraph 4?",
              options: [
                {
                  id: "A",
                  text: "To argue that multilateral refining consortia are unnecessary because recycled magnets already satisfy total global demand",
                  explanationEs:
                    "Incorrecto: se presenta como flujo secundario complementario ('Simultaneously... a secondary supply stream') que reduce —no elimina hoy al 100 %— la dependencia del refinado primario.",
                },
                {
                  id: "B",
                  text: "To highlight a complementary technological pathway that mitigates both radioactive waste and primary refining vulnerability",
                  explanationEs:
                    "Correcto: cierra la síntesis mostrando cómo la innovación tecnológica complementa los consorcios multilaterales al evitar desechos mineros radiactivos y disminuir la exposición a cuellos de botella primarios.",
                },
                {
                  id: "C",
                  text: "To explain why offshore wind turbines wear out faster than industrial robotics",
                  explanationEs:
                    "Incorrecto: ambas industrias se citan únicamente como fuentes de imanes al final de su vida útil ('end-of-life').",
                },
                {
                  id: "D",
                  text: "To criticize materials scientists for ignoring hydrometallurgical solvent extraction",
                  explanationEs:
                    "Incorrecto: el tono del autor hacia el reciclaje de ciclo cerrado es claramente constructivo y favorable.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (35 min study / 25 min official timer — Strict Length Control)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Symposium Logistics Coordination & Strategic Subsidy Policy Essay",
      estimatedMinutes: 35,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Disciplina de longitud para el Simulacro de mañana: en Part 1 apunta exactamente a 58–68 palabras (ni menos de 50 por omisión ni más de 75 por rodeos corteses innecesarios); en Part 2 apunta a 195–215 palabras para dejar 3 minutos libres de auditoría ortográfica y preposicional ('contingent upon', 'comply with', 'attribute to', 'comprise').",
      tasks: [
        {
          part: "part1_note",
          id: "d07-writ-p1",
          cefrLevel: "B2",
          title: "Arranging Remote Participation for an Economics Career Panelist",
          prompt:
            "You are assisting Ms. Alvarez, Coordinator of the Economics Department Career Symposium, with next Wednesday's panel on global supply chains. One of the three invited industry speakers just informed you that an urgent customs audit prevents her from traveling to campus. Write a formal note to Ms. Alvarez in which you: (1) explain why the speaker cannot attend in person, (2) confirm that she can participate live via video link, and (3) ask what audiovisual testing requirements she must comply with before Monday.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Controla cada palabra: 3 oraciones limpias bastan para cubrir los 3 puntos entre 55 y 70 palabras. Integra 'contingent upon' o 'comply with' de forma orgánica y evita saludos redundantes ('I hope this message finds you very well today') que inflan el conteo sin aportar nivel B2.",
          recommendedConnectors: [
            "regarding next Wednesday's",
            "prevented her from",
            "contingent upon",
            "comply with",
          ],
          b2RubricChecklistEs: [
            "Responde con exactitud los 3 puntos operativos (auditoría aduanera imprevista, disponibilidad por videollamada en vivo y requisitos de prueba audiovisual).",
            "Se mantiene estrictamente entre 50 y 75 palabras (meta óptima: 58–68 palabras) sin relleno epistolar.",
            "Incorpora al menos dos colocaciones académicas precisas del Día 7 ('comply with', 'contingent upon', 'prevent X from -ing').",
            "Ortografía, mayúsculas y puntuación limpias sin corrector automático.",
          ],
          modelAnswerB2:
            "Dear Ms. Alvarez, I am writing regarding next Wednesday's supply-chain panel. Ms. Chen just informed me that an unexpected customs audit prevents her from traveling to campus, though she can join our session live via video link. Because seamless participation is contingent upon auditorium connectivity, could you confirm what audiovisual testing steps she must comply with before Monday? Sincerely, Sofia Navarro",
        },
        {
          part: "part2_essay",
          id: "d07-writ-p2",
          cefrLevel: "B2",
          title: "Domestic Manufacturing Subsidies vs. Open Global Supply Chains",
          prompt:
            "Following recent global trade disruptions, some policymakers argue that national governments should heavily subsidize domestic manufacturing of critical goods—such as semiconductors, pharmaceuticals, and clean-energy components—to guarantee national resilience. Critics contend that domestic subsidies waste public revenue, raise consumer prices, and trigger retaliatory trade barriers. Which position do you find more convincing? Support your argument with specific reasons and examples.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Ejecuta un control estricto de extensión (meta: 195–215 palabras): P1 Tesis matizada (~40 palabras); P2 Concesión al riesgo de subsidios indiscriminados + argumento de bienes críticos (~65 palabras); P3 Condicionalidad y cooperación aliada (~60 palabras); P4 Conclusión sintética (~35 palabras). Reserva los últimos 3 minutos para verificar cuantificadores ('few/little') y preposiciones.",
          recommendedConnectors: [
            "While critics rightly warn that",
            "contingent upon",
            "comprises",
            "attribute ... to",
            "comply with",
          ],
          b2RubricChecklistEs: [
            "Cumple estrictamente el rango oficial de 175 a 225 palabras (cero desborde por encima de 225 ni déficit bajo 175).",
            "Sostiene una tesis clara y matizada sobre subsidios estratégicos frente a eficiencia comercial.",
            "Integra con exactitud gramatical al menos tres colocaciones o cuantificadores del Día 7 ('contingent upon', 'comprise', 'comply with', 'little/a few', 'attribute to').",
            "Desarrolla ejemplos concretos (semiconductores, principios activos farmacéuticos, consorcios regionales) en vez de abstracciones vagas.",
            "Cero errores de '*is comprised of', '*comply to' o '*few attention' en la revisión final de 3 minutos.",
          ],
          modelAnswerB2:
            "Recent maritime bottlenecks and pandemic shortages exposed the fragility of hyper-lean global trade, prompting fierce debate over industrial policy. While blanket protectionism across routine consumer goods would undoubtedly squander public funds, targeted public support for strategic sectors—provided it remains coordinated with reliable trading partners—offers an essential safeguard against systemic disruption.\n\nCritics rightly warn that uncoordinated domestic subsidies can inflate construction costs, distort market prices, and provoke retaliatory tariffs. Nevertheless, pure cost minimization leaves national healthcare systems and electrical grids with dangerously little buffer capacity when external crises strike. Economists attributed severe hospital medication shortages and automotive factory shutdowns in recent years to the concentration of active pharmaceutical ingredients and foundational microchips within a single geographic corridor.\n\nTo prevent public funding from rewarding corporate complacency, industrial incentives should be strictly contingent upon private co-investment, measurable productivity milestones, and transparent environmental standards that recipients must comply with. Moreover, resilient security rarely requires isolated national autarky; a durable supply network comprises a few geographically dispersed allied hubs rather than redundant plants in every country.\n\nUltimately, disciplined strategic investment functions like public insurance: modest fiscal outlays today protect modern economies against catastrophic supply paralysis tomorrow.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Resource-Constraint Trade-Offs & Sustainable University Procurement",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "En tus respuestas grabadas de hoy, cuida la precisión léxica al hablar bajo presión de reloj: usa 'very little time/budget', 'a few targeted adjustments', 'comply with' y 'contingent upon' para sonar analítico y estructurado de cara al Simulacro del Día 8.",
      tasks: [
        {
          part: "part1_personal",
          id: "d07-speak-p1",
          cefrLevel: "B2",
          title: "Adapting a Project Under Budget or Resource Constraints",
          prompt:
            "Describe an academic, volunteer, or professional project in which limited budget, equipment, or time forced you to adjust your original plan. Explain how you prioritized resources and what outcome you achieved.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–10s (Situation & Constraint): State the project and emphasize the exact scarcity ('very little budget / few lab slots').",
            "10–30s (Prioritization Decision): Explain the concrete trade-off you made to protect core quality.",
            "30–45s (Outcome & Takeaway): Summarize the final result clearly before the 45s mark.",
          ],
          keyPhrasesB2: [
            "Because our student team had very little discretionary funding...",
            "Success was contingent upon prioritizing...",
            "A few targeted partnerships allowed us to...",
            "Ultimately, operating under tight constraints taught us...",
          ],
          selfRubricChecklistEs: [
            "Establecí el contexto y la restricción específica en los primeros 8 segundos.",
            "Usé cuantificadores precisos ('very little funding', 'a few key suppliers') sin confundir contables e incontables.",
            "Expliqué una decisión lógica de priorización y su resultado medible.",
            "Terminé con una frase completa antes de agotarse los 45 segundos.",
          ],
          modelTranscriptB2:
            "Last semester, our engineering student society organized a regional water-filtration competition, but a sponsor withdrawal left us with very little funding two weeks before the event. Because safety compliance was non-negotiable, our team realized success was contingent upon cutting non-essential expenses rather than reducing laboratory testing hours. Instead of renting commercial display booths and printing glossy programs, we partnered with a few campus departments to borrow modular tables and switched entirely to digital QR schedules. Every participating team complied with our water-quality testing protocol on schedule, and that constraint taught me how to protect core project objectives when resources tighten.",
        },
        {
          part: "part2_opinion",
          id: "d07-speak-p2",
          cefrLevel: "B2",
          title: "Lowest-Cost Global Vendors vs. Certified Sustainable Regional Suppliers",
          prompt:
            "Universities purchase millions of dollars in laboratory equipment, campus food, and computing hardware each year. Some administrators argue that public and private universities have a financial duty to select the lowest-cost global vendors so tuition and student fees remain as low as possible. Others maintain that universities should require procurement contracts to prioritize certified regional and environmentally sustainable suppliers, even if institutional operating expenses rise modestly. Which procurement policy should universities adopt, and why?",
          audioPrompt: {
            trackId: "day07-speaking-p2",
            audioUrl: "/audio/day07-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-US-JennyNeural",
                text: "Universities purchase millions of dollars in laboratory equipment, campus food, and computing hardware each year. Some administrators argue that public and private universities have a financial duty to select the lowest-cost global vendors so tuition and student fees remain as low as possible. Others maintain that universities should require procurement contracts to prioritize certified regional and environmentally sustainable suppliers, even if institutional operating expenses rise modestly. Which procurement policy should universities adopt, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Clear Position): State clearly which procurement framework universities should adopt.",
            "12–30s (Concession + Lifecycle Cost Rebuttal): Acknowledge tuition sensitivity, then argue that ultra-cheap contracts carry hidden supply-chain and replacement costs.",
            "30–50s (Institutional Mission + Concrete Example): Show how campus food/hardware contracts contingent upon sustainability standards reinforce academic credibility and regional resilience.",
            "50–60s (Firm Conclusion): Close cleanly before the 60-second timer ends.",
          ],
          keyPhrasesB2: [
            "I am convinced that universities should make major procurement contracts contingent upon...",
            "While administrators understandably seek to shield students from tuition increases...",
            "Relying solely on the cheapest distant vendors leaves campuses with little resilience when...",
            "Requiring suppliers to comply with durability and environmental standards ultimately...",
          ],
          selfRubricChecklistEs: [
            "Adopté una postura inequívoca desde la primera oración con tono universitario firme.",
            "Refuté la postura opuesta distinguiendo precio inicial bajo frente a resiliencia y vida útil total.",
            "Empleé con corrección colocaciones del Día 7 ('contingent upon', 'comply with', 'little resilience').",
            "Completé mi conclusión entre los segundos 52 y 60 sin cortes abruptos ni silencios prolongados.",
          ],
          modelTranscriptB2:
            "I am convinced that universities should prioritize certified sustainable and regional suppliers in their procurement contracts, even when upfront purchase prices are slightly higher. While administrators understandably want to contain operating budgets and protect students from tuition hikes, focusing exclusively on the lowest initial bid often proves penny-wise and pound-foolish. Ultra-cheap laboratory equipment and computing hardware frequently suffer from shorter lifespans and distant supply-chain delays, leaving departments with very little operational resilience during peak semesters. By contrast, making university contracts contingent upon strict durability, repairability, and environmental standards lowers long-term replacement waste and circulates institutional spending within the surrounding regional economy. Ultimately, universities that teach environmental economics and civic responsibility in lecture halls should comply with those same principles in their own purchasing decisions.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Completé los 10 reactivos de Grammar dominando 'few/a few', 'little/a little', 'neither/each of' y colocaciones ('contingent upon', 'comply with', 'comprise').",
    "Resolví las 3 partes de Listening (incluyendo la clase magistral sobre el efecto látigo e inflación de oferta) en una sola reproducción.",
    "Completé Reading Part 1 y Part 2 dentro del límite oficial estricto de 20 minutos acertando la inserción en `[C]`.",
    "Redacté Writing Part 1 (50–75 palabras) y Part 2 (175–225 palabras) con control exacto de longitud y cero errores en 'comprise/consist of'.",
    "Grabé Speaking Part 1 y Part 2 incorporando 'contingent upon', 'comply with' y cuantificadores precisos de cara al Simulacro del Día 8.",
  ],
};
