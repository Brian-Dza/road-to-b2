import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day12: RoadmapDay = {
  dayNumber: 12,
  sprintNumber: 3,
  cefrLevel: "B2",
  title: "High-Velocity Section Pacing Gauntlet (24s/Item Grammar & Single-Take Endurance)",
  subtitleEs:
    "Guantelete de velocidad oficial iTEP: reconocimiento estructural en 24s por reactivo en Grammar y resistencia continua en una sola toma",
  b2FocusSummaryEs:
    "Muchos candidatos con conocimiento gramatical B2 caen por debajo de 3.5 en el día real del examen debido a la fatiga ejecutiva cuando los cronómetros se encadenan sin pausa. Este Día 12 entrena el ritmo exacto de 24 segundos por pregunta en Grammar (12 reactivos mixtos en 290 segundos), resistencia auditiva ininterrumpida de tres bloques con cierre en Lingüística Histórica, lectura dual en 1200 segundos y transición directa entre nota y ensayo en 1500 segundos.",
  estimatedMinutes: 140,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (20 min study / 290s strict 24s-per-item gauntlet for 12 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "High-Velocity Mixed B2 Structure Gauntlet (12 Items in 290 Seconds)",
      estimatedMinutes: 20,
      timeLimitSeconds: 290,
      focusSummaryEs:
        "A 24 segundos por reactivo no puedes traducir mentalmente toda la oración: escanea primero el disparador estructural junto al espacio o a los segmentos marcados (adverbio negativo inicial, verbo mandativo, coma + cuantificador, correlativo 'not only', preposición 'despite') y decide en menos de 20 segundos.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d12-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Negative Adverbial Inversion in Present Simple",
          sentenceWithBlank:
            "Seldom _____ paleoclimatologists recover an undisturbed marine sediment core spanning four consecutive glacial-interglacial transitions.",
          options: [
            {
              id: "A",
              text: "do",
              explanationEs:
                "Correcto: el adverbio restrictivo 'Seldom' en posición inicial obliga a invertir el auxiliar de presente simple plural ('do') antes del sujeto 'paleoclimatologists', seguido del infinitivo sin 'to' ('recover').",
            },
            {
              id: "B",
              text: "have",
              explanationEs:
                "Incorrecto: trampa de velocidad; el auxiliar perfecto 'have' exigiría el participio pasado 'recovered', pero el verbo impreso tras el sujeto está en forma base ('recover').",
            },
            {
              id: "C",
              text: "they do",
              explanationEs:
                "Incorrecto: omite la inversión obligatoria y además duplica ilegalmente el sujeto ('they' + 'paleoclimatologists').",
            },
            {
              id: "D",
              text: "are",
              explanationEs:
                "Incorrecto: 'are' seguido de la forma base activa 'recover' es morfológicamente inválido en inglés.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Al ver 'Seldom / Rarely / Never' en la palabra 1, mira de inmediato la forma exacta del verbo principal detrás del sujeto ('recover' base -> 'do/does/did'; 'recovered' participio -> 'have/had').",
        },
        {
          part: "part1_fill_blank",
          id: "d12-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Passive Mandative Subjunctive After 'stipulate'",
          sentenceWithBlank:
            "The institutional review board stipulated that every longitudinal study participant _____ notified in writing prior to secondary genomic sharing.",
          options: [
            {
              id: "A",
              text: "is",
              explanationEs:
                "Incorrecto: el verbo mandativo 'stipulated that' exige subjuntivo en forma base invariable ('be'), no presente indicativo ('is').",
            },
            {
              id: "B",
              text: "was",
              explanationEs:
                "Incorrecto: trampa clásica de concordancia temporal ('sequence of tenses'); tras verbos de mandato en pasado ('stipulated'), el subjuntivo sigue siendo la raíz pura 'be', nunca 'was'.",
            },
            {
              id: "C",
              text: "be",
              explanationEs:
                "Correcto: forma pasiva del subjuntivo mandativo ('be notified') regida por 'stipulated that', invariable con independencia del tiempo del verbo principal.",
            },
            {
              id: "D",
              text: "being",
              explanationEs:
                "Incorrecto: una cláusula introducida por la conjunción 'that' requiere estructura verbal finita o subjuntiva, jamás un participio '-ing' aislado sin auxiliar.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Disparador instantáneo (<10s): 'stipulate / mandate / require / insist + that + sujeto' -> busca directamente la forma pura ('be' en pasiva o verbo sin '-s/-ed' en activa).",
        },
        {
          part: "part1_fill_blank",
          id: "d12-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Inverted Mixed Conditional (Past Condition, Present Result)",
          sentenceWithBlank:
            "_____ the port authority reinforced the outer breakwater before the October storm surge, container freight operations would not remain suspended today.",
          options: [
            {
              id: "A",
              text: "Were",
              explanationEs:
                "Incorrecto: 'Were + sujeto' requiere infinitivo con 'to' ('Were the port authority to reinforce') para hipótesis presentes/futuras, incompatible con 'reinforced' y con el evento pasado de octubre.",
            },
            {
              id: "B",
              text: "Should",
              explanationEs:
                "Incorrecto: 'Should' invertido rige forma base ('reinforce') para condiciones futuras abiertas, no el participio pasado 'reinforced'.",
            },
            {
              id: "C",
              text: "If had",
              explanationEs:
                "Incorrecto: al invertir el auxiliar 'Had' se suprime obligatoriamente 'If'; combinar ambos seguidos es agramatical.",
            },
            {
              id: "D",
              text: "Had",
              explanationEs:
                "Correcto: inversión condicional contrafactual en pasado ('Had the port authority reinforced... [= If it had reinforced...]') combinada con resultado presente ('would not remain... today').",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Si el espacio abre la oración, hay un participio pasado tras el sujeto ('reinforced') y un modal condicional en la cláusula principal ('would'), marca 'Had' sin dudar.",
        },
        {
          part: "part1_fill_blank",
          id: "d12-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Quantifier + Relative Pronoun in Non-Defining Clauses",
          sentenceWithBlank:
            "The central bank evaluated six independent macroeconomic models, none _____ predicted the abrupt contraction in capital-goods exports.",
          options: [
            {
              id: "A",
              text: "of them",
              explanationEs:
                "Incorrecto: tras una simple coma sin conjunción coordinante, 'none of them predicted' une dos cláusulas independientes produciendo un 'comma splice' sancionado en iTEP.",
            },
            {
              id: "B",
              text: "of which",
              explanationEs:
                "Correcto: estructura relativa partitiva ('none of which') que subordina limpiamente el verbo finito 'predicted' al antecedente inanimado 'macroeconomic models'.",
            },
            {
              id: "C",
              text: "of whom",
              explanationEs:
                "Incorrecto: 'whom' exige antecedente humano, mientras que aquí remite a 'models'.",
            },
            {
              id: "D",
              text: "which",
              explanationEs:
                "Incorrecto: el cuantificador 'none' necesita la preposición partitiva 'of' para vincularse con el pronombre relativo ('none of which').",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Regla de puntuación rápida: 'coma + cuantificador (none/most/both) + verbo' exige 'of which / of whom'; solo si hubiera punto y coma (';') cabría 'of them'.",
        },
        {
          part: "part1_fill_blank",
          id: "d12-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Past Passive Modal of Unfulfilled Obligation / Criticism",
          sentenceWithBlank:
            "Given the severe pier corrosion documented in last spring's ultrasound inspection, the highway viaduct _____ closed to heavy freight trucks months ago.",
          options: [
            {
              id: "A",
              text: "should have been",
              explanationEs:
                "Correcto: modal perfecto pasivo ('should have been closed') que expresa una medida necesaria en el pasado ('months ago') que lamentablemente no se ejecutó a tiempo.",
            },
            {
              id: "B",
              text: "must have",
              explanationEs:
                "Incorrecto: omite el auxiliar pasivo 'been', por lo que significaría activamente que el viaducto cerró algo por sí mismo.",
            },
            {
              id: "C",
              text: "should be",
              explanationEs:
                "Incorrecto: el modal simple 'should be' alude al presente o futuro y choca frontalmente con el marcador de pasado 'months ago'.",
            },
            {
              id: "D",
              text: "ought have been",
              explanationEs:
                "Incorrecto: el semimodal 'ought' exige obligatoriamente la partícula 'to' ('ought to have been').",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Verifica dos variables rápidas: (1) marcador pasado ('months ago' -> 'modal + have'), y (2) voz pasiva sobre sujeto inanimado ('viaduct' -> '+ been + participio').",
        },
        {
          part: "part1_fill_blank",
          id: "d12-gram-p1-q06",
          cefrLevel: "B2",
          grammarTopic: "Proportional Correlative Comparatives (The + comp..., the + comp...)",
          sentenceWithBlank:
            "The higher the concentration of dissolved organic matter in boreal reservoirs, _____ conventional ozone disinfection becomes.",
          options: [
            {
              id: "A",
              text: "less effective",
              explanationEs:
                "Incorrecto: rompe la simetría obligatoria del correlativo proporcional, cuya segunda mitad también debe iniciar con el artículo definido 'the' + comparativo.",
            },
            {
              id: "B",
              text: "the least effective",
              explanationEs:
                "Incorrecto: emplea grado superlativo ('the least') en lugar del grado comparativo requerido por 'The higher...'.",
            },
            {
              id: "C",
              text: "the less effective",
              explanationEs:
                "Correcto: completa el correlativo proporcional 'The + comparativo ..., the + comparativo ...' ('The higher..., the less effective...') como predicativo de 'becomes'.",
            },
            {
              id: "D",
              text: "the more ineffectively",
              explanationEs:
                "Incorrecto: el verbo copulativo 'becomes' exige un complemento adjetival ('effective'), no un adverbio en '-ly' ('ineffectively').",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Ante 'The + comparativo' al abrir oración, exige dos condiciones en la segunda mitad: que empiece con 'the + comparativo' y que respete adjetivo vs. adverbio según el verbo ('becomes' -> adjetivo).",
        },
        {
          part: "part2_error_identification",
          id: "d12-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Correlative Parallelism (not only ... but also)",
          sentenceWithMarkedSegments:
            "Subsurface drip irrigation [A]{not only} [B]{conserves} scarce groundwater reserves [C]{but also} [D]{suppressing} weed germination between orchard rows.",
          correctedSegment: "suppresses",
          options: [
            {
              id: "A",
              text: "not only",
              explanationEs:
                "Correcto en la oración: primer miembro del par correlativo colocado justo antes del primer verbo finito.",
            },
            {
              id: "B",
              text: "conserves",
              explanationEs:
                "Correcto en la oración: verbo finito en presente simple singular concordando con 'Subsurface drip irrigation'.",
            },
            {
              id: "C",
              text: "but also",
              explanationEs:
                "Correcto en la oración: nexo correlativo complementario de 'not only'.",
            },
            {
              id: "D",
              text: "suppressing",
              explanationEs:
                "Incorrecto (contiene el error): rompe el paralelismo sintáctico con '[B]{conserves}'; dado que 'not only' precede a un verbo en tercera persona singular, 'but also' debe ir seguido de otro verbo conjugado idéntico ('suppresses'), no de un gerundio.",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "En cuanto veas 'not only', compara gramaticalmente la palabra inmediatamente posterior a 'not only' con la inmediatamente posterior a 'but also': deben pertenecer a la misma categoría exacta.",
        },
        {
          part: "part2_error_identification",
          id: "d12-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Mandative Subjunctive Triggered by 'imperative that'",
          sentenceWithMarkedSegments:
            "It is [A]{imperative that} the forensic toxicology lab [B]{calibrates} each mass spectrometer [C]{prior to} testing [D]{contested} environmental samples.",
          correctedSegment: "calibrate",
          options: [
            {
              id: "A",
              text: "imperative that",
              explanationEs:
                "Correcto en la oración: adjetivo de urgencia/obligatoriedad seguido de conjunción 'that' en construcción impersonal académica.",
            },
            {
              id: "B",
              text: "calibrates",
              explanationEs:
                "Incorrecto (contiene el error): tras 'It is imperative / essential / vital that', el verbo subordinado debe ir en subjuntivo presente sin '-s' de tercera persona ('calibrate').",
            },
            {
              id: "C",
              text: "prior to",
              explanationEs:
                "Correcto en la oración: locución preposicional formal equivalente a 'before', seguida correctamente del gerundio 'testing'.",
            },
            {
              id: "D",
              text: "contested",
              explanationEs:
                "Correcto en la oración: participio pasado en función adjetiva ('muestras en disputa / impugnadas').",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si aparece 'It is imperative/essential/crucial that', revisa de inmediato que el verbo subordinado NO lleve '-s' ni '-ed'.",
        },
        {
          part: "part2_error_identification",
          id: "d12-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Misaligned Active vs. Passive Participial Opener",
          sentenceWithMarkedSegments:
            "[A]{Synthesizing} from three independent satellite altimeters, the new bathymetric chart [B]{exposed} abyssal fracture zones [C]{that had eluded} shipborne sonar [D]{for decades}.",
          correctedSegment: "Synthesized",
          options: [
            {
              id: "A",
              text: "Synthesizing",
              explanationEs:
                "Incorrecto (contiene el error): el sujeto tras la coma es 'the new bathymetric chart' (una carta náutica inanimada que es sintetizada a partir de datos satelitales, no quien sintetiza); requiere el participio pasado pasivo 'Synthesized'.",
            },
            {
              id: "B",
              text: "exposed",
              explanationEs:
                "Correcto en la oración: verbo principal transitivo ('dejó al descubierto / reveló') perfectamente compatible con 'the new bathymetric chart'.",
            },
            {
              id: "C",
              text: "that had eluded",
              explanationEs:
                "Correcto en la oración: cláusula relativa en Past Perfect marcando anterioridad respecto a 'exposed'.",
            },
            {
              id: "D",
              text: "for decades",
              explanationEs:
                "Correcto en la oración: complemento de duración coherente con el aspecto perfecto 'had eluded'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Chequeo relámpago de participio inicial: pregunta si el sustantivo tras la coma ('chart') hace la acción ('-ing') o la recibe ('-ed').",
        },
        {
          part: "part2_error_identification",
          id: "d12-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Uncountable Academic Nouns & Quantifier Precision",
          sentenceWithMarkedSegments:
            "Although [A]{preliminary} excavations yielded [B]{compelling} metallurgical [C]{evidences} of long-distance tin trade, [D]{fewer than} eight intact ingots survived.",
          correctedSegment: "evidence",
          options: [
            {
              id: "A",
              text: "preliminary",
              explanationEs:
                "Correcto en la oración: adjetivo atributivo bien empleado delante del sustantivo contable plural 'excavations'.",
            },
            {
              id: "B",
              text: "compelling",
              explanationEs:
                "Correcto en la oración: colocación académica estándar ('compelling evidence' = evidencia contundente).",
            },
            {
              id: "C",
              text: "evidences",
              explanationEs:
                "Incorrecto (contiene el error): en inglés académico estándar, sustantivos como 'evidence', 'research', 'equipment' e 'information' son estrictamente incontables y jamás admiten plural en '-s'. Debe ser 'evidence'.",
            },
            {
              id: "D",
              text: "fewer than",
              explanationEs:
                "Correcto en la oración: 'fewer than' es el cuantificador comparativo exacto para sustantivos contables plurales ('ingots').",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Memoriza la lista negra de falsos contables para hispanohablantes en iTEP Part 2: '*evidences', '*researches', '*equipments', '*informations' y '*feedbacks' son siempre error directo.",
        },
        {
          part: "part2_error_identification",
          id: "d12-gram-p2-q11",
          cefrLevel: "B2",
          grammarTopic: "Preposition ('Despite') vs. Subordinating Conjunction ('Although')",
          sentenceWithMarkedSegments:
            "[A]{Despite} global semiconductor supply chains [B]{have stabilized} noticeably since last autumn, medical-device manufacturers [C]{continue to hold} larger buffer inventories [D]{than} they maintained pre-pandemic.",
          correctedSegment: "Although",
          options: [
            {
              id: "A",
              text: "Despite",
              explanationEs:
                "Incorrecto (contiene el error): 'Despite' es una preposición que solo admite un sintagma nominal o gerundio; como le sigue una cláusula completa con sujeto y verbo conjugado ('supply chains have stabilized'), se requiere una conjunción concesiva como 'Although' (o 'Despite the fact that').",
            },
            {
              id: "B",
              text: "have stabilized",
              explanationEs:
                "Correcto en la oración: Present Perfect exigido por 'since last autumn' y modificado adecuadamente por el adverbio 'noticeably'.",
            },
            {
              id: "C",
              text: "continue to hold",
              explanationEs:
                "Correcto en la oración: perífrasis verbal legítima en presente simple plural para describir una política operativa vigente.",
            },
            {
              id: "D",
              text: "than",
              explanationEs:
                "Correcto en la oración: conjunción comparativa correlativa del adjetivo en grado comparativo 'larger'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Siempre que 'Despite' o 'In spite of' esté subrayado, busca antes de la coma si hay verbo conjugado ('have stabilized'): si lo hay, 'Despite' es el error.",
        },
        {
          part: "part2_error_identification",
          id: "d12-gram-p2-q12",
          cefrLevel: "B2",
          grammarTopic: "Subject-Verb Agreement Across Accompaniment Phrases ('together with')",
          sentenceWithMarkedSegments:
            "The chief epigrapher, [A]{together with} three computational linguists [B]{specializing in} Anatolian scripts, [C]{have reconstructed} the phonetic values [D]{of} forty-six cuneiform logograms.",
          correctedSegment: "has reconstructed",
          options: [
            {
              id: "A",
              text: "together with",
              explanationEs:
                "Correcto en la oración: locución preposicional parentética válida entre comas.",
            },
            {
              id: "B",
              text: "specializing in",
              explanationEs:
                "Correcto en la oración: participio activo reducido que modifica a 'computational linguists' con su preposición exacta 'in'.",
            },
            {
              id: "C",
              text: "have reconstructed",
              explanationEs:
                "Incorrecto (contiene el error): frases como 'together with', 'along with' o 'as well as' entre comas NO suman sujetos gramaticales; el núcleo sigue siendo singular ('The chief epigrapher'), por lo que exige 'has reconstructed'.",
            },
            {
              id: "D",
              text: "of",
              explanationEs:
                "Correcto en la oración: preposición de pertenencia nominal ('the phonetic values of...').",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Ignora todo lo que vaya introducido por 'together with / along with / accompanied by / as well as': solo 'and' convierte un sujeto singular en plural.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (35 min study / 20 min full single-take endurance simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Single-Take Endurance: Corpus Licensing, Acoustic Fieldwork & Historical Linguistics",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Simula la resistencia real de los 20 minutos de Listening avanzando sin pausas entre los 3 audios: toma notas telegráficas de contrastes ('regular sound change vs. analogical leveling', 'high-frequency vs. low-frequency verbs') y nunca te quedes rumiando una pregunta pasada cuando arranque la pista siguiente.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d12-list-p1",
          title: "Phonetics Lab Workstation Reservation",
          cefrLevel: "B2",
          audio: {
            trackId: "day12-listening-p1",
            audioUrl: "/audio/day12-listening-p1.mp3",
            contextSetup:
              "Two linguistics students talk outside the department's acoustic phonetics laboratory.",
            turns: [
              {
                speakerLabel: "Student 1",
                voice: "en-GB-SoniaNeural",
                text: "Heading into the phonetics lab to run formant alignments? I just tried logging into Workstation Four, and the server said our departmental license for the forced-aligner plugin expired at midnight.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student 2",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Seriously? My seminar poster goes to the campus print shop at five o'clock, and I still have twelve bilingual interviews left to segment.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student 1",
                voice: "en-GB-SoniaNeural",
                text: "Don't panic—the IT technician told me Workstation One runs an open-source command-line aligner locally that doesn't rely on the expired network license, and I just finished my batch on it.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student 2",
                voice: "en-US-AndrewMultilingualNeural",
                text: "You're a lifesaver. Let me grab my external drive from my backpack before someone else claims that terminal.",
                pauseAfterMs: 450,
              },
            ],
          },
          questions: [
            {
              id: "d12-list-p1-q01",
              prompt: "What will the man most likely do next?",
              options: [
                {
                  id: "A",
                  text: "Ask the campus print shop to postpone his five o'clock poster deadline",
                  explanationEs:
                    "Incorrecto: gracias a la alternativa local disponible ahora mismo, planea procesar sus entrevistas de inmediato en lugar de posponer la impresión.",
                },
                {
                  id: "B",
                  text: "Process his remaining interview recordings on Workstation One using the local open-source tool",
                  explanationEs:
                    "Correcto: al enterarse de que la Estación Uno cuenta con un alineador de código abierto local recién desocupado, busca su disco externo para usar esa terminal de inmediato.",
                },
                {
                  id: "C",
                  text: "Pay to renew the department's network plugin license on Workstation Four",
                  explanationEs:
                    "Incorrecto: no menciona gestionar ni pagar la renovación de la licencia departamental vencida.",
                },
                {
                  id: "D",
                  text: "Conduct twelve additional bilingual interviews before five o'clock",
                  explanationEs:
                    "Incorrecto: las doce entrevistas ya están grabadas en su disco externo; solo le falta segmentarlas acústicamente ('left to segment').",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En diálogos veloces de Part 1 con problema técnico + solución inmediata, fija en memoria qué estación o recurso falla ('Workstation Four') frente al que sí funciona ('Workstation One').",
        },
        {
          part: "part2_conversation",
          id: "d12-list-p2",
          title: "Controlling Interviewer Accommodation in Sociolinguistic Fieldwork",
          cefrLevel: "B2",
          audio: {
            trackId: "day12-listening-p2",
            audioUrl: "/audio/day12-listening-p2.mp3",
            contextSetup:
              "A senior linguistics major meets with his thesis advisor to discuss anomalous vowel measurements in his honors thesis pilot recordings.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Professor Morales, do you have a few minutes to look at the vowel plots from my pilot recordings? Something strange is happening with my second-generation speakers.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AvaMultilingualNeural",
                text: "Sure, Marcus. Sit down. You're tracking the fronting of back vowels among heritage bilinguals in the riverfront district, right? What's showing up in the spectrograms?",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Well, based on community studies from five years ago, I expected younger speakers to produce markedly fronted vowels in casual speech. Yet in my six pilot interviews, their vowel values look almost identical to conservative academic English.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AvaMultilingualNeural",
                text: "Interesting. Walk me through your recording setup—where did the sessions take place, and how did you frame the conversation?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "I booked a quiet seminar room here in the humanities building, placed a tabletop condenser microphone between us, and read from a standardized questionnaire about neighborhood history.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AvaMultilingualNeural",
                text: "Aha—there's your culprit. You've walked straight into what sociolinguists call the observer's paradox. Bring participants onto a university campus with a visible studio mic and a formal script, and they unconsciously shift toward prestige pronunciation—accommodating to your academic register rather than using their vernacular.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "That makes total sense. Even I noticed how stiff everyone sounded during the first twenty minutes. Does that mean I have to scrap my research question?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AvaMultilingualNeural",
                text: "Not at all—your hypothesis is solid; it's the elicitation protocol that needs redesigning. Try recording pairs of close friends conversing with each other in a familiar neighborhood cafe using discreet clip-on lavalier mics, while you step back after introducing open-ended topics.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-GuyNeural",
                text: "Peer-dyad recordings! That way they're responding to someone from their own social network instead of to an outside researcher. I'll check out two lavalier kits from media services today and keep the six campus files as a formal-style baseline for comparison.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d12-list-p2-q01",
              prompt: "Why is Marcus concerned about his pilot interview data?",
              options: [
                {
                  id: "A",
                  text: "Background noise in the humanities building ruined his spectrograms.",
                  explanationEs:
                    "Incorrecto: la sala de seminarios era silenciosa ('a quiet seminar room'); el problema radica en el estilo de pronunciación registrado, no en ruido acústico.",
                },
                {
                  id: "B",
                  text: "His participants did not exhibit the vernacular vowel shift predicted by earlier community studies.",
                  explanationEs:
                    "Correcto: esperaba vocales adelantadas en el habla espontánea de hablantes jóvenes, pero sus valores acústicos resultaron casi idénticos al inglés académico conservador.",
                },
                {
                  id: "C",
                  text: "He was unable to recruit enough second-generation bilingual speakers.",
                  explanationEs:
                    "Incorrecto: ya grabó seis entrevistas piloto con hablantes de segunda generación.",
                },
                {
                  id: "D",
                  text: "The tabletop condenser microphone failed to capture high-frequency consonants.",
                  explanationEs:
                    "Incorrecto: el micrófono funcionó técnicamente bien, pero su presencia visible en un entorno universitario inhibió el habla vernácula.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d12-list-p2-q02",
              prompt:
                "According to Professor Morales, what caused the participants to use conservative pronunciation?",
              options: [
                {
                  id: "A",
                  text: "The riverfront dialect has completely disappeared over the past five years.",
                  explanationEs:
                    "Incorrecto: la profesora afirma que la hipótesis sigue siendo sólida y atribuye los datos al protocolo de recolección, no a la extinción del rasgo dialectal.",
                },
                {
                  id: "B",
                  text: "The formal campus setting and scripted format prompted speakers to accommodate to academic speech.",
                  explanationEs:
                    "Correcto: explica la 'paradoja del observador': citar a los participantes en el campus con micrófono de estudio visible y cuestionario leído los induce inconscientemente a adoptar pronunciación de prestigio.",
                },
                {
                  id: "C",
                  text: "Participants intentionally imitated recordings played to them before the session.",
                  explanationEs:
                    "Incorrecto: el ajuste es inconsciente ('unconsciously shift') ante el contexto formal, no una imitación deliberada de audios previos.",
                },
                {
                  id: "D",
                  text: "Questions about neighborhood history require technical academic vocabulary.",
                  explanationEs:
                    "Incorrecto: el problema no era el tema barrial en sí, sino leer preguntas estandarizadas dentro de un edificio universitario.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d12-list-p2-q03",
              prompt: "How does Professor Morales suggest modifying the data-collection protocol?",
              options: [
                {
                  id: "A",
                  text: "Having pairs of friends converse in a local setting using small clip-on microphones",
                  explanationEs:
                    "Correcto: recomienda grabar parejas de amigos cercanos ('pairs of close friends') conversando entre sí en una cafetería habitual del barrio con micrófonos de solapa discretos.",
                },
                {
                  id: "B",
                  text: "Conducting shorter five-minute interviews inside the phonetics booth",
                  explanationEs:
                    "Incorrecto: una cabina fonética en el campus agravaría aún más la formalidad artificial del entorno.",
                },
                {
                  id: "C",
                  text: "Replacing spoken interviews with an anonymous online spelling survey",
                  explanationEs:
                    "Incorrecto: una encuesta escrita no permitiría medir formantes vocálicos en espectrogramas.",
                },
                {
                  id: "D",
                  text: "Hiding microphones without informing participants that they are being recorded",
                  explanationEs:
                    "Incorrecto: propone micrófonos de solapa discretos tras presentar temas abiertos (lo cual viola cero normas éticas), nunca grabaciones clandestinas sin consentimiento.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d12-list-p2-q04",
              prompt: "What does Marcus decide to do with his six original campus recordings?",
              options: [
                {
                  id: "A",
                  text: "Delete them immediately so they do not skew his statistical averages",
                  explanationEs:
                    "Incorrecto: en lugar de borrarlos, encuentra una utilidad metodológica directa para conservarlos.",
                },
                {
                  id: "B",
                  text: "Retain them as a formal-register benchmark to compare against the new peer conversations",
                  explanationEs:
                    "Correcto: al final señala que conservará los seis archivos grabados en el campus como línea base de estilo formal ('as a formal-style baseline for comparison').",
                },
                {
                  id: "C",
                  text: "Submit them unchanged as the entirety of his honors thesis dataset",
                  explanationEs:
                    "Incorrecto: va a retirar dos kits de micrófonos de solapa hoy mismo para realizar las nuevas grabaciones en pareja.",
                },
                {
                  id: "D",
                  text: "Donate them to the history department's oral archive",
                  explanationEs:
                    "Incorrecto: no menciona transferir las grabaciones al departamento de historia.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En asesorías de tesis (Part 2), presta especial atención al giro final del estudiante: a menudo decide reutilizar los datos iniciales como grupo de control o línea base ('baseline for comparison') en vez de descartarlos.",
        },
        {
          part: "part3_lecture",
          id: "d12-list-p3",
          title: "Historical Linguistics: Regular Sound Change and Analogical Leveling",
          cefrLevel: "B2",
          audio: {
            trackId: "day12-listening-p3",
            audioUrl: "/audio/day12-listening-p3.mp3",
            contextSetup:
              "A linguistics professor delivers an upper-division lecture on historical and comparative linguistics.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Welcome back. Today in Historical Linguistics, we're examining the twin engines that reshape spoken languages across centuries—and why their tension lets us reconstruct prehistoric ancestor languages for which no written inscription survives.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "In the late nineteenth century, German scholars known as the Neogrammarians formulated a bold principle: phonetic sound change is mechanically regular. When an articulatory shift occurs in a speech community—say, voiceless stops like 'p' softening into fricatives like 'f'—it affects every word containing that sound in the same phonetic environment, regardless of meaning.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "That regularity explains why Latin 'pater' and 'piscis' correspond systematically to English 'father' and 'fish' under Grimm's Law. Yet paradoxically, blind phonetic regularity disrupts grammatical tidiness. When a sound shift applies only before front vowels, a verb stem may acquire one consonant in the present tense and another in the past participle—creating irregular paradigms speakers must memorize.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Enter the second engine: analogical leveling. Unlike phonetic drift, which is physiological and automatic, analogy is cognitive. Speakers subconsciously favor transparent one-to-one patterns between meaning and form. Over generations, communities eliminate irregular stem alternations by remodeling rarer forms to match dominant ones—just as Old English 'holp' became 'helped' on the model of regular '-ed' verbs.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "Crucially, cognitive frequency governs which verbs resist leveling. Everyday verbs like 'to be', 'go', or 'eat' are produced so many thousands of times in childhood that their irregular forms stay deeply entrenched in memory. Low-frequency verbs like 'thrive' or 'strive', by contrast, lack constant reinforcement, so speakers steadily regularize 'throve' into 'thrived'.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-RyanNeural",
                text: "For comparative linguists, this asymmetry is invaluable. Irregularities preserved inside core high-frequency vocabulary act as linguistic fossils: rather than dismissing them as random anomalies, we prize them as surviving relics of ancient sound laws that analogical leveling erased elsewhere in the lexicon.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d12-list-p3-q01",
              prompt: "What is the lecture mainly about?",
              options: [
                {
                  id: "A",
                  text: "How ancient Roman scribes standardized spelling across Germanic dialects",
                  explanationEs:
                    "Incorrecto: las palabras latinas se comparan con el inglés como lenguas emparentadas bajo la Ley de Grimm, no como imposición ortográfica de escribas romanos.",
                },
                {
                  id: "B",
                  text: "How regular phonetic change and cognitive analogical leveling interact over time and aid linguistic reconstruction",
                  explanationEs:
                    "Correcto: abarca los dos mecanismos centrales anunciados al inicio ('twin engines'), su interacción opuesta sobre los paradigmas gramaticales, el papel de la frecuencia léxica y su valor para reconstruir protolenguas.",
                },
                {
                  id: "C",
                  text: "Why nineteenth-century Neogrammarians rejected the existence of consonant shifts",
                  explanationEs:
                    "Incorrecto: los neogramáticos formularon precisamente la regularidad mecánica de los cambios fonéticos como la Ley de Grimm.",
                },
                {
                  id: "D",
                  text: "Why modern English is losing regular '-ed' past-tense endings in everyday speech",
                  explanationEs:
                    "Incorrecto: el profesor muestra la tendencia exactamente inversa: el sufijo regular '-ed' absorbe progresivamente verbos de baja frecuencia ('helped', 'thrived').",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d12-list-p3-q02",
              prompt:
                "According to the Neogrammarian principle described in the lecture, how does phonetic sound change operate?",
              options: [
                {
                  id: "A",
                  text: "It alters high-frequency verbs first and spreads slowly to rare nouns.",
                  explanationEs:
                    "Incorrecto: confunde el efecto de frecuencia de la nivelación analógica con el cambio fonético, el cual aplica a toda palabra con el mismo entorno fonético sin excepción léxica.",
                },
                {
                  id: "B",
                  text: "It applies uniformly across all words sharing the same phonetic environment, regardless of meaning.",
                  explanationEs:
                    "Correcto: el profesor define la regularidad neogramática explicando que un cambio articulatorio afecta a cada palabra que contenga ese sonido en el mismo contexto fonético, sin importar su significado.",
                },
                {
                  id: "C",
                  text: "It occurs only after a language develops a standardized writing system.",
                  explanationEs:
                    "Incorrecto: ocurre de modo fisiológico en lenguas habladas y permite incluso reconstruir lenguas prehistóricas sin escritura.",
                },
                {
                  id: "D",
                  text: "It intentionally simplifies irregular verb paradigms so children learn faster.",
                  explanationEs:
                    "Incorrecto: el cambio fonético ciego suele CREAR irregularidades paradigmáticas ('disrupts grammatical tidiness'); lo que simplifica paradigmas es la analogía.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d12-list-p3-q03",
              prompt:
                "How does analogical leveling counteract the effects of regular sound change?",
              options: [
                {
                  id: "A",
                  text: "By restoring Latin consonant pronunciations to modern Germanic words",
                  explanationEs:
                    "Incorrecto: la analogía no revierte la Ley de Grimm hacia el latín, sino que uniforma raíces o desinencias dentro del propio sistema gramatical.",
                },
                {
                  id: "B",
                  text: "By remodeling irregular stem alternations to match productive, uniform morphological patterns",
                  explanationEs:
                    "Correcto: impulsada por la preferencia cognitiva de correspondencia transparente forma-significado, elimina alternancias irregulares rehaciendo formas como 'holp' hacia el patrón regular 'helped'.",
                },
                {
                  id: "C",
                  text: "By preventing voiceless stops from softening into fricatives before front vowels",
                  explanationEs:
                    "Incorrecto: la analogía actúa generaciones después sobre la morfología resultante, no bloqueando la articulación fisiológica inicial.",
                },
                {
                  id: "D",
                  text: "By converting common verbs like 'eat' and 'go' into regular '-ed' verbs first",
                  explanationEs:
                    "Incorrecto: los verbos cotidianos de alta frecuencia como 'eat' y 'go' son justamente los que más resisten la nivelación analógica.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d12-list-p3-q04",
              prompt:
                "Why do verbs such as 'be', 'go', and 'eat' retain irregular past forms whereas 'thrive' tends to become 'thrived'?",
              options: [
                {
                  id: "A",
                  text: "High-frequency everyday usage entrenches irregular forms in memory, whereas rare verbs lack sufficient repetition to resist regularization.",
                  explanationEs:
                    "Correcto: explica que oírlos y producirlos miles de veces desde la infancia fija sus formas irregulares en la memoria, mientras que los verbos poco frecuentes carecen de ese refuerzo constante.",
                },
                {
                  id: "B",
                  text: "Short one-syllable verbs are immune to physiological sound shifts.",
                  explanationEs:
                    "Incorrecto: ningún grupo léxico es inmune al cambio fonético regular; la diferencia descrita en retención morfológica obedece a la frecuencia cognitiva de uso.",
                },
                {
                  id: "C",
                  text: "Academic style guides forbid writers from using the regular form 'thrived'.",
                  explanationEs:
                    "Incorrecto: no se mencionan manuales de estilo prescriptivos; describe un proceso natural e inconsciente en la comunidad hablante.",
                },
                {
                  id: "D",
                  text: "Verbs borrowed from Latin never undergo analogical leveling in English.",
                  explanationEs:
                    "Incorrecto: ni 'thrive' proviene del latín ni se establece tal regla en la conferencia.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d12-list-p3-q05",
              prompt:
                "Why does the professor refer to surviving irregularities in core vocabulary as 'linguistic fossils'?",
              options: [
                {
                  id: "A",
                  text: "Because they are obsolete words that modern speakers no longer understand",
                  explanationEs:
                    "Incorrecto: pertenecen al vocabulario básico más frecuente ('to be', 'go', 'eat'), plenamente vigente y comprensible.",
                },
                {
                  id: "B",
                  text: "Because they preserve evidence of ancient regular sound shifts that analogy wiped out in less frequent words",
                  explanationEs:
                    "Correcto: al resistir la nivelación analógica gracias a su alta frecuencia, conservan huellas intactas ('surviving relics') de antiguas leyes fonéticas regulares borradas en el resto del léxico.",
                },
                {
                  id: "C",
                  text: "Because they prove that prehistoric ancestor languages had no grammar rules",
                  explanationEs:
                    "Incorrecto: demuestran exactamente lo opuesto: que procedían de leyes fonéticas sistemáticas antiguas.",
                },
                {
                  id: "D",
                  text: "Because archaeologists found them carved on Paleolithic stone tools",
                  explanationEs:
                    "Incorrecto: 'fossils' es una metáfora metodológica explícita; al inicio subraya que de las protolenguas no sobrevive ni una sola inscripción escrita.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d12-list-p3-q06",
              prompt: "How does the professor organize the main body of the lecture?",
              options: [
                {
                  id: "A",
                  text: "By contrasting physiological sound change with cognitive analogy, explaining frequency effects, and showing their value for reconstruction",
                  explanationEs:
                    "Correcto: refleja con exactitud los pasos expositivos: principio neogramático de cambio fonético (turnos 2–3), nivelación analógica cognitiva (turno 4), asimetría por frecuencia de uso (turno 5) y utilidad reconstructiva (turno 6).",
                },
                {
                  id: "B",
                  text: "By listing six unrelated European language families in chronological order",
                  explanationEs:
                    "Incorrecto: solo ejemplifica con latín e inglés (antiguo y moderno) dentro del tronco indoeuropeo.",
                },
                {
                  id: "C",
                  text: "By debating two rival hypotheses of child language acquisition without reaching a conclusion",
                  explanationEs:
                    "Incorrecto: no presenta dos hipótesis indecisas sobre adquisición infantil, sino dos fuerzas históricas complementarias bien establecidas.",
                },
                {
                  id: "D",
                  text: "By explaining how acoustic spectrograms are calibrated in laboratory fieldwork",
                  explanationEs:
                    "Incorrecto: eso pertenecía al diálogo previo de Part 2, no a la conferencia magistral de Part 3.",
                },
              ],
              correctOptionId: "A",
            },
          ],
          keyTakeawayEs:
            "En conferencias con dos procesos contrapuestos ('twin engines': fonético/automático vs. analógico/cognitivo), traza dos columnas mínimas en tu hoja borrador: 80 % de las preguntas evaluarán no cruzar sus propiedades.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (35 min study / 1200s strict official pace for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title:
        "Full-Pace 20-Minute Reading Endurance: Urban Micro-Logistics & Circadian Photobiology",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Administra los 1200 segundos con disciplina quirúrgica: dedica máximo 7 minutos a Part 1 (lectura ágil + 4 preguntas) para reservar 13 minutos completos a Part 2 (450 palabras + 6 preguntas incluyendo inserción `[A]..[D]` y síntesis).",
      passages: [
        {
          part: "part1_intermediate",
          id: "d12-read-p1",
          title: "Urban Micro-Consolidation Hubs and Last-Mile Freight Efficiency",
          cefrLevel: "B2",
          topicDomain: "Transportation Planning & Urban Economics",
          paragraphs: [
            "Although last-mile parcel delivery accounts for less than ten percent of total supply-chain mileage, transportation economists estimate that it generates nearly forty percent of urban freight costs and a disproportionate share of street-level nitrogen oxide and fine particulate emissions. As e-commerce orders fragment retail shipments into millions of individual residential stops, competing logistics carriers routinely dispatch partially filled diesel vans along identical neighborhood streets, compounding curbside double-parking, cyclist hazards, and midday traffic congestion.",
            "To curb these inefficiencies without restricting consumer commerce, several European and East Asian municipalities have partnered with private freight operators to establish shared urban micro-consolidation hubs. Located inside underutilized municipal parking garages on the perimeter of dense commercial districts, these transfer depots receive bulk shipments from long-haul trucks overnight. Parcels from multiple carriers are then sorted by postal block and transferred onto low-speed electric cargo tricycles for quiet daytime final delivery, cutting diesel van entries into historic city centers by more than sixty percent.",
            "Despite promising environmental metrics, financial self-sufficiency remains elusive for many pilot hubs. Transloading parcels from regional trucks onto smaller vehicles introduces an extra handling stage whose labor costs private couriers are reluctant to absorb voluntarily unless curbside access rules change. Consequently, urban transport planners conclude that micro-consolidation succeeds at metropolitan scale only when paired with regulatory incentives—such as dynamic loading-zone fees or zero-emission delivery windows—that align private carrier economics with public air-quality goals.",
          ],
          questions: [
            {
              id: "d12-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the primary purpose of the passage?",
              options: [
                {
                  id: "A",
                  text: "To explain how shared micro-consolidation hubs reduce last-mile freight externalities and why supportive municipal regulations are needed for their viability",
                  explanationEs:
                    "Correcto: articula la estructura completa de los tres párrafos: el costo desproporcionado de la última milla (P1), el funcionamiento operativo de los centros compartidos (P2) y la necesidad de incentivos regulatorios para compensar el costo de transbordo (P3).",
                },
                {
                  id: "B",
                  text: "To argue that e-commerce parcel deliveries should be restricted to overnight hours in residential neighborhoods",
                  explanationEs:
                    "Incorrecto: los camiones regionales llegan de noche al centro de transferencia, pero el reparto final en triciclos eléctricos ocurre durante el día ('for daytime final delivery').",
                },
                {
                  id: "C",
                  text: "To demonstrate why electric cargo tricycles have higher maintenance costs than diesel delivery vans",
                  explanationEs:
                    "Incorrecto: el obstáculo financiero mencionado en el párrafo 3 es la mano de obra de la etapa extra de descarga y clasificación ('extra handling stage'), no el mantenimiento de los triciclos.",
                },
                {
                  id: "D",
                  text: "To criticize municipalities for converting profitable public parking garages into private warehouses",
                  explanationEs:
                    "Incorrecto: el párrafo 2 especifica que se aprovechan estacionamientos municipales subutilizados ('underutilized municipal parking garages') como una solución constructiva.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d12-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'elusive' in paragraph 3 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "difficult to achieve",
                  explanationEs:
                    "Correcto: 'financial self-sufficiency remains elusive' significa que la autosuficiencia financiera sigue siendo difícil de alcanzar debido a los costos laborales adicionales del transbordo.",
                },
                {
                  id: "B",
                  text: "legally prohibited",
                  explanationEs:
                    "Incorrecto: no existe prohibición legal alguna contra la rentabilidad de los centros piloto.",
                },
                {
                  id: "C",
                  text: "confidentially audited",
                  explanationEs:
                    "Incorrecto: sin respaldo contextual; el párrafo discute costos operativos frente a incentivos tarifarios.",
                },
                {
                  id: "D",
                  text: "universally guaranteed",
                  explanationEs:
                    "Incorrecto: antónimo directo del contraste introducido por 'Despite promising environmental metrics...'.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d12-read-p1-q03",
              questionType: "inference",
              prompt: "What can be inferred from paragraph 3 about private courier companies?",
              options: [
                {
                  id: "A",
                  text: "They refuse to operate in European or East Asian historic city centers.",
                  explanationEs:
                    "Incorrecto: el párrafo 2 indica precisamente que diversas ciudades europeas y de Asia oriental ya operan estos centros en alianza con transportistas.",
                },
                {
                  id: "B",
                  text: "In the absence of curbside fees or access restrictions, they often find direct diesel-van delivery cheaper than using consolidation depots.",
                  explanationEs:
                    "Correcto: dado que el transbordo añade una etapa laboral extra cuyos costos las empresas son reacias a asumir voluntariamente a menos que cambien las reglas de acceso ('unless curbside access rules change'), se infiere que sin regulación el reparto directo les resulta menos costoso a corto plazo.",
                },
                {
                  id: "C",
                  text: "They earn forty percent of their profits from municipal parking fees.",
                  explanationEs:
                    "Incorrecto: el 40 % mencionado en el párrafo 1 corresponde a la proporción de costos logísticos que consume la última milla, no a ganancias por estacionamiento.",
                },
                {
                  id: "D",
                  text: "They prefer hiring their own transport planners rather than using postal block sorting.",
                  explanationEs: "Incorrecto: inferencia inventada sin base en el texto.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d12-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "How do dynamic loading-zone fees and zero-emission delivery windows contribute to the success of micro-consolidation hubs?",
              options: [
                {
                  id: "A",
                  text: "They eliminate the need to sort parcels by postal block inside transfer depots.",
                  explanationEs:
                    "Incorrecto: la clasificación por manzana postal sigue siendo la base operativa del centro de transferencia.",
                },
                {
                  id: "B",
                  text: "They make inefficient direct van entry costlier or restricted, offsetting the couriers' reluctance to pay for hub transloading.",
                  explanationEs:
                    "Correcto: sintetiza la relación causa-solución del párrafo 3: al gravar o restringir el acceso directo de furgonetas contaminantes, estas políticas alinean el cálculo económico privado de las mensajerías con el uso del centro compartido.",
                },
                {
                  id: "C",
                  text: "They allow long-haul freight trucks to drive directly onto residential streets during midday.",
                  explanationEs:
                    "Incorrecto: contradice por completo el modelo, donde los camiones pesados descargan de noche en la periferia.",
                },
                {
                  id: "D",
                  text: "They subsidize residential e-commerce shoppers who place bulk orders.",
                  explanationEs:
                    "Incorrecto: los incentivos regulatorios recaen sobre la operación logística en acera y zonas de bajas emisiones, no en subsidios al comprador doméstico.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d12-read-p2",
          title:
            "Circadian Photoreception and the Spectral Trade-Offs of Solid-State Street Lighting",
          cefrLevel: "B2",
          topicDomain: "Chronobiology & Urban Public Health",
          paragraphs: [
            "For over a century, vision scientists assumed that the human retina contained only two photoreceptor classes: rods governing dim-light monochrome perception and cones mediating daytime color acuity. At the turn of the twenty-first century, however, chronobiologists identified a third class—intrinsically photosensitive retinal ganglion cells, or ipRGCs—containing the photopigment melanopsin. Rather than projecting to visual-image centers in the cerebral cortex, ipRGCs wire directly into the hypothalamus's suprachiasmatic nucleus, the master circadian pacemaker that synchronizes hormone secretion, core body temperature, and sleep-wake timing with solar dawn and dusk. Crucially, melanopsin exhibits peak spectral sensitivity near 480 nanometers, meaning that short-wavelength blue-enriched light signals biological daytime to the brain even when total ambient illumination feels relatively dim to conscious vision.",
            "This neurobiological discovery has collided unexpectedly with one of modern urban policy's most celebrated climate initiatives: the rapid municipal conversion from amber high-pressure sodium streetlamps to white light-emitting diodes, or LEDs. Municipal utilities embraced early phosphor-converted white LEDs because they slash electricity consumption by roughly fifty percent, last up to four times longer than sodium bulbs, and render streetscape colors crisply for drivers, pedestrians, and security cameras. Yet first-generation municipal LED fixtures achieved that crisp white appearance by pairing a high-intensity blue diode emitting around 460 nanometers with a thin yellow phosphor coating—inadvertently flooding residential bedrooms and nighttime sidewalks with wavelengths directly overlapping melanopsin's sensitive zone.",
            "Controlled laboratory trials and epidemiological studies have documented significant physiological and ecological consequences arising from this spectral shift. [A] Exposure to blue-rich evening streetlamp light filtering through uncurtained windows suppresses pineal melatonin secretion up to five times more potently than sodium lighting of equal visual brightness. [B] Chronic melatonin suppression delays circadian phase onset, reduces restorative slow-wave sleep stages, and correlates in satellite-linked health surveys with elevated metabolic and cardiovascular risk among urban residents. [C] Beyond human health, broadband white streetlamps disorient nocturnal moth pollinators, decelerate fledgling seabird navigation, and disrupt predator-prey timing across urban park corridors and riparian habitats. [D]",
            "Fortunately, solid-state lighting physics offers municipalities a practical path to reconcile decarbonization with chronobiological health without reverting to energy-intensive sodium lamps. Unlike incandescent filaments whose spectrum is fixed by thermal heating, semiconductor LED arrays allow engineers to tune spectral power distributions precisely. Cities from Flagstaff to Toulouse are now installing fully shielded, warm-spectrum amber LEDs rated below 2,700 kelvins alongside motion-adaptive dimming controllers that lower output by seventy percent during late-night low-traffic hours. Such spectrally conscious retrofits preserve nearly all the electricity savings of first-generation LEDs while restoring nocturnal darkness cues for both human circadian systems and urban wildlife.",
          ],
          questions: [
            {
              id: "d12-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, how do intrinsically photosensitive retinal ganglion cells (ipRGCs) differ from rods and cones?",
              options: [
                {
                  id: "A",
                  text: "They transmit non-image light signals directly to the brain's master circadian clock rather than forming conscious visual images.",
                  explanationEs:
                    "Correcto: el párrafo 1 explica que, en vez de proyectarse a los centros corticales de imagen visual, las células ipRGCs con melanopsina se conectan directamente al núcleo supraquiasmático del hipotálamo para sincronizar ritmos circadianos.",
                },
                {
                  id: "B",
                  text: "They respond exclusively to long-wavelength amber light emitted at sunset.",
                  explanationEs:
                    "Incorrecto: la melanopsina muestra sensibilidad máxima cerca de los 480 nanómetros, correspondiente a longitudes de onda cortas azules ('short-wavelength blue-enriched light').",
                },
                {
                  id: "C",
                  text: "They sharpen daytime color acuity when ambient illumination is extremely bright.",
                  explanationEs:
                    "Incorrecto: la agudeza cromática diurna es función de los conos ('cones mediating daytime color acuity'), no de las ipRGCs.",
                },
                {
                  id: "D",
                  text: "They remain inactive unless total room brightness exceeds outdoor daylight levels.",
                  explanationEs:
                    "Incorrecto: el final del párrafo 1 subraya que la luz enriquecida en azul señala día biológico incluso cuando la iluminación total parece relativamente tenue.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d12-read-p2-q02",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author list electricity savings, bulb lifespan, and color rendering in paragraph 2?",
              options: [
                {
                  id: "A",
                  text: "To prove that municipal utilities ignored engineering budgets when selecting streetlamps",
                  explanationEs:
                    "Incorrecto: un ahorro eléctrico del 50 % y cuadruplicar la vida útil demuestran precisamente fuertes razones presupuestarias y climáticas.",
                },
                {
                  id: "B",
                  text: "To explain the compelling practical benefits that motivated cities to adopt white LEDs before their circadian drawbacks were widely appreciated",
                  explanationEs:
                    "Correcto: contextualiza por qué la transición a LED blancos fue una iniciativa climática y operativa tan atractiva ('most celebrated climate initiatives'), preparando el contraste ('Yet first-generation...') con su pico espectral azul inadvertido.",
                },
                {
                  id: "C",
                  text: "To show that high-pressure sodium bulbs outperformed LEDs in security-camera clarity",
                  explanationEs:
                    "Incorrecto: eran los nuevos LED blancos los que reproducían con nitidez los colores para conductores y cámaras de seguridad.",
                },
                {
                  id: "D",
                  text: "To argue that street lighting accounts for fifty percent of total national electricity use",
                  explanationEs:
                    "Incorrecto: el 50 % representa la reducción en el consumo eléctrico del alumbrado mismo al pasar de sodio a LED, no la mitad del consumo nacional.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d12-read-p2-q03",
              questionType: "vocabulary_in_context",
              prompt: "The word 'potently' in paragraph 3 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "powerfully",
                  explanationEs:
                    "Correcto: 'suppresses pineal melatonin secretion up to five times more potently' significa que inhibe la secreción de melatonina con una intensidad o eficacia biológica hasta cinco veces mayor.",
                },
                {
                  id: "B",
                  text: "gradually",
                  explanationEs:
                    "Incorrecto: no describe lentitud progresiva, sino magnitud del efecto fisiológico frente al sodio a igual brillo visual.",
                },
                {
                  id: "C",
                  text: "hypothetically",
                  explanationEs:
                    "Incorrecto: falso amigo parcial con 'potentially'; 'potently' proviene de 'potent' (potente/intenso), respaldado por mediciones controladas de laboratorio.",
                },
                {
                  id: "D",
                  text: "infrequently",
                  explanationEs:
                    "Incorrecto: contradice el carácter crónico ('Chronic melatonin suppression') documentado en la oración siguiente.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d12-read-p2-q04",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraphs 1 and 3 about judging nighttime light pollution solely by how bright a streetlamp looks to the human eye?",
              options: [
                {
                  id: "A",
                  text: "Visual brightness alone is an inadequate metric because two lamps of equal perceived brightness can differ sharply in circadian disruption depending on their blue-wavelength content.",
                  explanationEs:
                    "Correcto: integra el párrafo 1 (las ipRGCs responden a 480 nm independientemente de la visión consciente de imagen) y el párrafo 3 (el LED rico en azul suprime la melatonina hasta cinco veces más que una lámpara de sodio 'of equal visual brightness').",
                },
                {
                  id: "B",
                  text: "If a streetlamp appears dim to human rods and cones, it cannot affect nocturnal moth pollinators.",
                  explanationEs:
                    "Incorrecto: ni el párrafo 1 ni el 3 sostienen que el impacto ecológico desaparezca simplemente por parecer tenue al ojo humano si mantiene espectro blanco amplio.",
                },
                {
                  id: "C",
                  text: "Sodium streetlamps emit higher levels of 460-nanometer blue radiation than phosphor-coated LEDs.",
                  explanationEs:
                    "Incorrecto: las lámparas de sodio son ámbar y suprimen cinco veces menos la melatonina que los LED blancos de primera generación con diodo azul de 460 nm.",
                },
                {
                  id: "D",
                  text: "Human eyes cannot perceive any light below 2,700 kelvins at night.",
                  explanationEs:
                    "Incorrecto: el párrafo 4 presenta los LED ámbar por debajo de 2700 kelvins como alumbrado vial funcional adoptado por ciudades enteras.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d12-read-p2-q05",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "Therefore, urban light domes now act as biological disruptors across entire ecosystems rather than merely obscuring astronomical starlight.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: en `[A]` aún no se ha presentado ninguna evidencia fisiológica humana ni ecológica que justifique el conector conclusivo 'Therefore' ni 'across entire ecosystems'.",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: antes de `[B]` solo se ha descrito la supresión hormonal de melatonina pineal en humanos, sin haberse introducido todavía a polinizadores, aves marinas ni redes tróficas.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Incorrecto: antes de `[C]` el análisis sigue circunscrito exclusivamente a salud humana urbana; recién la oración posterior a `[C]` ('Beyond human health...') amplía el alcance a ecosistemas y fauna silvestre.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Correcto: tras sumar los efectos fisiológicos humanos y la desorientación de polillas, aves marinas y relaciones depredador-presa en la oración previa a `[D]`, 'Therefore... across entire ecosystems' sintetiza el impacto global del párrafo y prepara la solución técnica del párrafo 4.",
                },
              ],
              correctOptionId: "D",
            },
            {
              id: "d12-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which statement best summarizes the passage's overall argument regarding municipal LED street lighting?",
              options: [
                {
                  id: "A",
                  text: "Cities must reinstall high-pressure sodium bulbs immediately because all solid-state LEDs inevitably suppress human melatonin.",
                  explanationEs:
                    "Incorrecto: contradice frontalmente el párrafo 4, el cual explica que la física de estado sólido permite ajustar el espectro sin volver a las lámparas de sodio intensivas en energía.",
                },
                {
                  id: "B",
                  text: "Although first-generation blue-rich white LEDs disrupt human circadian rhythms and nocturnal wildlife, shielded warm-spectrum LEDs with adaptive dimming preserve energy savings while mitigating biological harm.",
                  explanationEs:
                    "Correcto: integra con precisión los cuatro párrafos: el mecanismo de melanopsina (P1), el pico azul involuntario de los primeros LED blancos (P2), sus impactos sanitarios y ecológicos (P3) y la ingeniería espectral ámbar con atenuación adaptativa (P4).",
                },
                {
                  id: "C",
                  text: "Motion-adaptive dimming controllers save seventy percent more electricity than amber LEDs but worsen predator-prey disruption in parks.",
                  explanationEs:
                    "Incorrecto: combina y distorsiona datos del párrafo 4, donde los controladores adaptativos complementan a los LED ámbar apantallados para restaurar señales de oscuridad nocturna.",
                },
                {
                  id: "D",
                  text: "Chronobiologists discovered melanopsin while studying fledgling seabird navigation in Flagstaff and Toulouse.",
                  explanationEs:
                    "Incorrecto: mezcla fragmentos inconexos de los párrafos 1, 3 y 4 sin relación causal real.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (35 min study / 1500s continuous Part 1 + Part 2 combo)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title:
        "Continuous 25-Minute Writing Combo: Fieldwork Logistics Note & Car-Free Boulevard Essay",
      estimatedMinutes: 35,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Ejecuta hoy Part 1 (300s) y Part 2 (1200s) de corrido sin levantarte del escritorio: cierra la nota en exactamente 4m30s dejando 30s de revisión ortográfica, respira 5 segundos y traza de inmediato el esqueleto de 4 párrafos del ensayo para no regalar puntos por cierre inconcluso.",
      tasks: [
        {
          part: "part1_note",
          id: "d12-writ-p1",
          cefrLevel: "B2",
          title: "Notifying the Fieldwork Safety Office of a Geological Site Change",
          prompt:
            "You are the student leader for Friday's undergraduate structural geology field trip. This morning, county officials closed the access road to Canyon Ridge due to rockfall maintenance. Write a formal note to Director Patel in the University Fieldwork Safety Office in which you: (1) report the road closure, (2) propose diverting the group to the pre-approved East Quarry outcrop ten miles south, and (3) ask whether your team's signed liability waivers cover the alternate location.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Pauta de velocidad (5 min): Oración 1 = motivo y cierre vial de esta mañana; Oración 2 = propuesta concreta de desvío a East Quarry con participio reducido o subordinada causal; Oración 3 = consulta indirecta con 'whether' sobre las exenciones de responsabilidad firmadas.",
          recommendedConnectors: [
            "Due to",
            "instead",
            "located ten miles south",
            "whether our existing",
          ],
          b2RubricChecklistEs: [
            "Aborda con claridad los 3 requerimientos (cierre vial en Canyon Ridge, desvío al afloramiento preaprobado de East Quarry y validez de las exenciones firmadas).",
            "Se mantiene estrictamente entre 50 y 75 palabras en registro administrativo formal ('Dear Director Patel,' / 'Regards,').",
            "Utiliza sintaxis compacta B2 (participio reducido 'located ten miles south' y cláusula nominal con 'whether').",
            "Revisión final completada sin errores de tipeo, artículos ni concordancia.",
          ],
          modelAnswerB2:
            "Dear Director Patel, I am writing regarding Friday's undergraduate structural geology excursion. Because county crews closed the Canyon Ridge access road this morning for rockfall maintenance, we propose diverting our cohort to the pre-approved East Quarry outcrop, located ten miles south. Could you confirm by Thursday afternoon whether our existing signed liability waivers cover this alternate site or require an addendum? Regards, Samuel Park",
        },
        {
          part: "part2_essay",
          id: "d12-writ-p2",
          cefrLevel: "B2",
          title: "Permanent Pedestrian-and-Transit Commercial Boulevards",
          prompt:
            "Many metropolitan governments are debating whether to convert central commercial boulevards into permanent pedestrian-and-public-transit zones, prohibiting private automobiles entirely. Supporters argue that car-free districts revitalize local retail and reduce urban air pollution, whereas opponents warn that banning private cars inconveniences commuters and disrupts storefront deliveries. Which policy do you support? Provide specific reasons and examples to defend your position.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Pauta continua de 20 minutos (0–3m esquema; 3–17m redacción; 17–20m caza de errores): defiende la conversión peatonal bien diseñada (o tu postura elegida) resolviendo explícitamente las dos objeciones rivales (reparto comercial mediante ventanas matutinas / micrologística y acceso mediante transporte público frecuente) usando inversión, subjuntivo o correlativos B2.",
          recommendedConnectors: [
            "While critics contend that",
            "Not only does ... but it also",
            "Provided that municipalities",
            "Consequently,",
          ],
          b2RubricChecklistEs: [
            "Tesis directa en el primer párrafo tomando partido claro sobre la peatonalización con transporte público.",
            "Extensión controlada entre 175 y 225 palabras distribuida en 4 párrafos cohesivos.",
            "Refuta directamente las inquietudes sobre entregas comerciales y movilidad en vez de ignorarlas.",
            "Incorpora al menos dos estructuras de alto impacto del curso (correlativo con inversión 'Not only does...', condicional restrictivo 'Provided that...', cláusula participial o relativa formal).",
            "Cero 'comma splices', plurales incontables erróneos ni fallos ortográficos sin corrector.",
          ],
          modelAnswerB2:
            "Converting central commercial boulevards into permanent pedestrian-and-transit corridors is one of the soundest urban investments a modern metropolis can make. Far from harming economic vitality, well-designed car-free zones strengthen neighborhood retail while substantially improving public health.\n\nWhile critics contend that removing private automobiles deters suburban shoppers and blocks storefront deliveries, empirical evidence from redesigned districts consistently shows the opposite. Private cars occupy vast street space yet transport remarkably few customers compared with dedicated streetcars and rapid buses. Once noisy through-traffic disappears, foot traffic rises markedly, encouraging daily commuters to linger at outdoor cafes, bookstores, and independent shops.\n\nFurthermore, commercial supply concerns are readily solved through smart operational scheduling rather than unlimited daytime automobile access. Provided that municipalities designate early-morning loading windows and perimeter micro-consolidation hubs for quiet electric cargo vehicles, merchants receive inventory reliably without clogging midday sidewalks. Not only does restricting private vehicles accelerate public transit speeds for thousands of commuters, but it also cuts street-level nitrogen dioxide and chronic noise exposure for families living above commercial avenues.\n\nConsequently, municipal leaders should prioritize high-capacity transit and walkable boulevards over inefficient curbside car storage. Designing downtown streets around people rather than private traffic yields cleaner, safer, and more prosperous cities.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / single-take chained prep + recording)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "High-Pressure Time Prioritization & Mandatory Undergraduate Internships",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "En condiciones de resistencia real, el peligro en Speaking es acelerar demasiado el habla por adrenalina o quedarse sin cierre en el segundo 58: mantén cadencia pausada (~130–145 palabras por minuto) y vigila el reloj en el segundo 48 para iniciar tu oración final.",
      tasks: [
        {
          part: "part1_personal",
          id: "d12-speak-p1",
          cefrLevel: "B2",
          title: "Prioritizing Under a Demanding Academic or Professional Deadline",
          prompt:
            "Describe a demanding examination, academic competition, or workplace deadline where strict time management determined your success. Explain how you prioritized your tasks and avoided getting stuck on minor details.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–10s (High-Stakes Scenario): Identify the exact timed event and why time pressure was intense.",
            "10–30s (Triage Strategy): Explain the concrete rule you used to allocate time and bypass minor bottlenecks.",
            "30–45s (Outcome): State the final result and how you apply that pacing habit today.",
          ],
          keyPhrasesB2: [
            "During last year's regional case competition, our team had only...",
            "Rather than perfecting minor formatting details early on, I...",
            "Not only did that strict cutoff keep us on schedule, but it also...",
            "That experience taught me that disciplined triage beats perfectionism.",
          ],
          selfRubricChecklistEs: [
            "Arranqué en el primer segundo con un escenario concreto de presión temporal sin titubeos.",
            "Expliqué una técnica explícita de priorización y cómo evité atascarme en detalles secundarios.",
            "Integré al menos un conector de contraste o correlativo B2 ('Rather than...', 'Not only...').",
            "Concluí la última frase completa entre los segundos 40 y 45 sin cortes abruptos.",
          ],
          modelTranscriptB2:
            "During last autumn's intercollegiate data-analytics competition, my three-person team had exactly four hours to clean a messy hospital admissions dataset and present policy recommendations to faculty judges. Rather than spending two hours perfecting chart colors or chasing a few missing zip-code entries, I divided our workflow into strict forty-five-minute sprints. Once our core regression model stabilized, we flagged minor anomalies transparently in a footnote and devoted the final hour entirely to rehearsing executive takeaways. Not only did that disciplined triage prevent last-minute panic, but it also helped us win second place because our synthesis was crystal clear.",
        },
        {
          part: "part2_opinion",
          id: "d12-speak-p2",
          cefrLevel: "B2",
          title: "Mandatory Off-Campus Internships as a Graduation Requirement",
          prompt:
            "Some universities require all undergraduate students to complete an off-campus internship in order to graduate, arguing that direct workplace immersion bridges academic theory and career readiness. Critics counter that mandatory internships place unfair financial and scheduling burdens on working or commuting students unless universities guarantee paid placements. Should universities require an off-campus internship for graduation? Defend your position with specific reasons.",
          audioPrompt: {
            trackId: "day12-speaking-p2",
            audioUrl: "/audio/day12-speaking-p2.mp3",
            contextSetup:
              "Official iTEP Speaking Part 2 dual-perspective higher-education policy prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-US-JennyNeural",
                text: "Some universities require all undergraduate students to complete an off-campus internship in order to graduate, arguing that direct workplace immersion bridges academic theory and career readiness. Critics counter that mandatory internships place unfair financial and scheduling burdens on working or commuting students unless universities guarantee paid placements. Should universities require an off-campus internship for graduation? Defend your position with specific reasons.",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Nuanced Thesis): State clearly whether off-campus internships should be mandatory (e.g., opposing rigid unpaid mandates in favor of flexible/funded experiential options).",
            "12–32s (Equity & Financial Argument): Explain the real-world impact on self-supporting students working part-time jobs.",
            "32–50s (Constructive Alternative): Show how funded fellowships or on-campus applied client clinics achieve career readiness equitably.",
            "50–60s (Crisp Conclusion): Summarize your stance decisively before 60s expires.",
          ],
          keyPhrasesB2: [
            "While workplace immersion is undeniably valuable, universities should not mandate off-campus internships unless...",
            "Requiring unpaid off-campus hours forces self-supporting students to...",
            "Provided that departments offer credit-bearing campus clinics or stipends...",
            "Ultimately, experiential learning should expand opportunity rather than penalize working students.",
          ],
          selfRubricChecklistEs: [
            "Formulé una postura nítida desde la primera oración abordando directamente el requisito de graduación.",
            "Articulé tanto el valor formativo práctico como la restricción socioeconómica para estudiantes que trabajan.",
            "Utilicé vocabulario universitario preciso ('experiential learning', 'stipends', 'self-supporting students') y subordinación B2.",
            "Mantuve velocidad estable sin atropellar sílabas ni dejar silencios largos.",
            "Cerré con una conclusión redonda antes del límite de 60 segundos.",
          ],
          modelTranscriptB2:
            "While practical workplace immersion is undeniably valuable, I believe universities should not make off-campus internships a rigid graduation requirement unless every placement is paid or backed by a university stipend. Many undergraduates already work twenty hours a week in retail or campus jobs to cover tuition and rent. Forcing those self-supporting students to give up paid shifts for an unpaid corporate internship—plus extra transit costs—delays graduation and deepens financial inequality. Instead, universities can bridge theory and practice equitably by offering flexible experiential pathways. Provided that students may fulfill the requirement either through paid external internships or through credit-bearing on-campus clinics solving real problems for local non-profits and businesses, everyone gains professional readiness. Ultimately, career preparation policies must expand upward mobility rather than penalizing working students.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Superé el guantelete de 12 preguntas de Grammar en 290 segundos (~24s/reactivo) aplicando detección inmediata de disparadores.",
    "Completé Listening P1, P2 y la clase magistral de Lingüística Histórica (P3) de corrido y en una sola reproducción.",
    "Resolví Reading P1 y P2 dentro del tope oficial de 1200 segundos acertando la inserción en `[D]` y las preguntas de síntesis.",
    "Ejecuté el combo continuo de Writing (nota + ensayo en 1500s) respetando los rangos de palabras sin corrector ortográfico.",
    "Grabé Speaking Part 1 y Part 2 en una sola toma controlando la velocidad y cerrando antes del corte del cronómetro.",
  ],
};
