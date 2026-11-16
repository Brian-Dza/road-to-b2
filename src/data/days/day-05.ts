import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day05: RoadmapDay = {
  dayNumber: 5,
  sprintNumber: 1,
  cefrLevel: "B2",
  title: "Past Modal Deduction, Mandative Subjunctive & Agreement Traps",
  subtitleEs:
    "Deducción modal en pasado, subjuntivo mandativo formal y trampas de concordancia sujeto-verbo",
  b2FocusSummaryEs:
    "El Día 5 cierra el bloque gramatical del primer sprint atacando tres núcleos de altísima recurrencia en iTEP Academic-Plus: los modales perfectos para deducir causas o evaluar hipótesis pasadas ('must/could/might/cannot/should have + participio'), el subjuntivo mandativo estadounidense tras verbos y adjetivos de exigencia ('insist/recommend/imperative that + sujeto + verbo base/be') y las trampas de concordancia verbal con cadenas preposicionales largas o expresiones cuantitativas ('the number of' singular frente a 'a number of' plural). Dominar este trío blinda tu precisión en Grammar Part 1 y Part 2 y aporta autoridad académica inmediata a tus inferencias en Reading, Listening, Writing y Speaking.",
  estimatedMinutes: 150,
  isMockExamDay: false,
  sections: {
    // =========================================================================
    // 1. GRAMMAR (25 min study / 8 min official pace for 10 items)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Epistemic Past Modals, Mandative Subjunctive & Long-Distance Agreement",
      estimatedMinutes: 25,
      timeLimitSeconds: 480,
      focusSummaryEs:
        "Distingue deducción lógica basada en evidencia ('must have + V3' / 'could not have + V3') de reproche o expectativa incumplida ('should have + V3'); verifica el verbo invariable sin '-s' ni tiempo pasado en cláusulas mandativas ('recommend that X submit / not be'); y aísla siempre el núcleo real del sujeto antes de la primera preposición.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d05-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Mandative Subjunctive After Verbs of Requirement",
          sentenceWithBlank:
            "The university bioethics committee insisted that every field anthropologist _____ written community consent prior to recording oral histories.",
          options: [
            {
              id: "A",
              text: "obtains",
              explanationEs:
                "Incorrecto: en inglés académico norteamericano, el verbo 'insist that' con sentido de mandato exige subjuntivo mandativo (forma base sin '-s'), incluso con sujeto singular ('every field anthropologist').",
            },
            {
              id: "B",
              text: "obtained",
              explanationEs:
                "Incorrecto: trampa de concordancia temporal ('sequence of tenses'); aunque 'insisted' está en pasado, el subjuntivo mandativo es invariable y rechaza la flexión '-ed'.",
            },
            {
              id: "C",
              text: "obtain",
              explanationEs:
                "Correcto: tras verbos directivos ('insist', 'recommend', 'stipulate', 'propose') seguidos de 'that', el verbo subordinado va en infinitivo puro sin 'to' ('obtain').",
            },
            {
              id: "D",
              text: "to obtain",
              explanationEs:
                "Incorrecto: 'insist' nunca admite la estructura '*insist that + sujeto + to-infinitive'; el marcador 'that' exige cláusula finita o subjuntiva.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Cuando veas 'demand / insist / recommend / suggest / require + that + sujeto', ignora si el sujeto es 'he/she/every student' o si el verbo principal está en pasado: elige siempre la forma base pura.",
        },
        {
          part: "part1_fill_blank",
          id: "d05-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Negative Passive Mandative Subjunctive ('not be + V3')",
          sentenceWithBlank:
            "To prevent modern DNA contamination, museum conservation protocols state that it is imperative that excavated skeletal fragments _____ without sterile nitrile gloves.",
          options: [
            {
              id: "A",
              text: "are not handled",
              explanationEs:
                "Incorrecto: tras adjetivos de urgencia formal como 'imperative', 'essential' o 'vital' + 'that', el indicativo 'are not' resulta impropio en registro estándar de examen.",
            },
            {
              id: "B",
              text: "not be handled",
              explanationEs:
                "Correcto: el subjuntivo mandativo negativo se forma anteponiendo 'not' directamente al auxiliar invariable 'be' sin 'do' ('not be handled'), en voz pasiva porque los fragmentos reciben la acción.",
            },
            {
              id: "C",
              text: "do not be handled",
              explanationEs:
                "Incorrecto: el subjuntivo mandativo jamás emplea el auxiliar 'do/does/did' para negar.",
            },
            {
              id: "D",
              text: "not handle",
              explanationEs:
                "Incorrecto: aunque usa subjuntivo negativo, la voz activa ('not handle') implicaría absurdamente que los fragmentos óseos manipulan algo por sí mismos.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Recuerda la fórmula del subjuntivo negativo y pasivo en iTEP: 'that + sujeto + not + be + participio pasado' (nunca '*do not be' ni '*is not').",
        },
        {
          part: "part1_fill_blank",
          id: "d05-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Affirmative Past Modal Deduction ('must have + V3')",
          sentenceWithBlank:
            "Because Baltic amber beads were unearthed inside Bronze Age tombs in southern Greece, overland exchange networks _____ across central Europe far earlier than nineteenth-century historians assumed.",
          options: [
            {
              id: "A",
              text: "should have operated",
              explanationEs:
                "Incorrecto: 'should have + V3' expresa una obligación incumplida o crítica retrospectiva ('deberían haber operado, pero no lo hicieron'), contradiciendo la evidencia arqueológica hallada.",
            },
            {
              id: "B",
              text: "must have operated",
              explanationEs:
                "Correcto: 'must have + participio pasado' expresa una deducción lógica de alta certeza sobre el pasado respaldada por pruebas empíricas presentes ('Because Baltic amber beads were unearthed...').",
            },
            {
              id: "C",
              text: "must operate",
              explanationEs:
                "Incorrecto: el modal simple 'must operate' sitúa la deducción en el presente, chocando con el marco histórico de la Edad del Bronce.",
            },
            {
              id: "D",
              text: "could operate",
              explanationEs:
                "Incorrecto: carece del aspecto perfecto ('have operated') necesario para anclar una inferencia sobre redes prehistóricas anteriores a lo asumido.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si la oración aporta evidencia física ('Because X was found / Given the data') para inferir qué ocurrió necesariamente en el pasado, elige 'must have + V3', nunca 'should have + V3'.",
        },
        {
          part: "part1_fill_blank",
          id: "d05-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Negative Past Modal Deduction ('could not have been + V3')",
          sentenceWithBlank:
            "Dendrochronology proves that the cedar roof beams were felled eighty years before the palace burned, meaning the timber _____ harvested for post-fire reconstruction.",
          options: [
            {
              id: "A",
              text: "could not have been",
              explanationEs:
                "Correcto: expresa imposibilidad lógica absoluta en el pasado ('no pudo haber sido talada') en voz pasiva, deducida directamente de la datación por anillos de crecimiento.",
            },
            {
              id: "B",
              text: "should not have been",
              explanationEs:
                "Incorrecto: 'should not have been' indica reproche sobre algo que sí ocurrió ('no debió talarse, aunque se taló'), lo cual contradice la prueba cronológica.",
            },
            {
              id: "C",
              text: "might not be",
              explanationEs:
                "Incorrecto: además de expresar duda débil frente al verbo concluyente 'proves', carece de estructura perfecta ('have been') para referirse al evento antiguo.",
            },
            {
              id: "D",
              text: "must not be",
              explanationEs:
                "Incorrecto: expresa prohibición deóntica en presente ('no debe ser'), completamente incompatible con una deducción arqueológica sobre el pasado.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Para deducción negativa categórica en pasado ('es imposible que haya ocurrido'), el inglés usa 'cannot / could not have + V3' (no 'should not have').",
        },
        {
          part: "part1_fill_blank",
          id: "d05-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Quantifier Subject-Verb Agreement ('a number of' vs. 'the number of')",
          sentenceWithBlank:
            "Although a growing number of paleogenetics laboratories now _____ automated DNA extraction robots, the total number of sequenced archaic genomes remains relatively modest.",
          options: [
            {
              id: "A",
              text: "utilizes",
              explanationEs:
                "Incorrecto: 'a [growing] number of + sustantivo plural' funciona como cuantificador equivalente a 'many', por lo que exige verbo plural sin '-s'.",
            },
            {
              id: "B",
              text: "utilize",
              explanationEs:
                "Correcto: 'a growing number of laboratories' toma verbo plural ('utilize'), en contraste exacto con 'the total number ... remains' (singular) en la cláusula principal.",
            },
            {
              id: "C",
              text: "is utilizing",
              explanationEs:
                "Incorrecto: el auxiliar singular 'is' viola la concordancia plural exigida por 'a growing number of laboratories'.",
            },
            {
              id: "D",
              text: "utilizing",
              explanationEs:
                "Incorrecto: un participio sin verbo auxiliar deja la cláusula concesiva introducida por 'Although' sin verbo conjugado.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Regla infalible para iTEP: 'A number of + plural' = verbo PLURAL ('varios'); 'THE number of + plural' = verbo SINGULAR ('la cifra exacta').",
        },
        {
          part: "part2_error_identification",
          id: "d05-gram-p2-q06",
          cefrLevel: "B2",
          grammarTopic: "Subject-Verb Agreement with 'The number of'",
          sentenceWithMarkedSegments:
            "[A]{The number of} indigenous languages [B]{spoken across} highland river basins [C]{have declined} sharply [D]{over the past} four decades.",
          correctedSegment: "has declined",
          options: [
            {
              id: "A",
              text: "The number of",
              explanationEs:
                "Correcto en la oración: sintagma nominal definido cuyo núcleo sintáctico singular es 'number'.",
            },
            {
              id: "B",
              text: "spoken across",
              explanationEs:
                "Correcto en la oración: cláusula relativa pasiva reducida ('[which are] spoken across') que modifica apropiadamente a 'indigenous languages'.",
            },
            {
              id: "C",
              text: "have declined",
              explanationEs:
                "Incorrecto (contiene el error): el sujeto es 'The number' (singular), no 'languages' ni 'basins'; por tanto, el auxiliar de Present Perfect debe ir en singular: 'has declined'.",
            },
            {
              id: "D",
              text: "over the past",
              explanationEs:
                "Correcto en la oración: marcador temporal de duración hasta el presente que justifica plenamente el uso de Present Perfect.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "No te dejes hipnotizar por dos sustantivos plurales consecutivos ('languages', 'basins') antes del verbo: retrocede hasta el inicio de la oración y verifica si empieza con 'The number of' (singular).",
        },
        {
          part: "part2_error_identification",
          id: "d05-gram-p2-q07",
          cefrLevel: "B2",
          grammarTopic: "Passive Mandative Subjunctive After 'stipulate that'",
          sentenceWithMarkedSegments:
            "The loan agreement [A]{stipulates that} the fragile birch-bark manuscript [B]{is kept} inside a humidity-controlled display case [C]{throughout} the three-month [D]{traveling exhibition}.",
          correctedSegment: "be kept",
          options: [
            {
              id: "A",
              text: "stipulates that",
              explanationEs:
                "Correcto en la oración: verbo jurídico-académico de exigencia ('estipula que') conjugado correctamente en presente singular con 'The loan agreement'.",
            },
            {
              id: "B",
              text: "is kept",
              explanationEs:
                "Incorrecto (contiene el error): el verbo mandativo 'stipulates that' exige subjuntivo invariable en la cláusula subordinada; en voz pasiva debe emplearse 'be kept' en lugar del indicativo 'is kept'.",
            },
            {
              id: "C",
              text: "throughout",
              explanationEs:
                "Correcto en la oración: preposición precisa para indicar permanencia continua durante todo el período ('a lo largo de').",
            },
            {
              id: "D",
              text: "traveling exhibition",
              explanationEs:
                "Correcto en la oración: colocación académica estándar ('exposición itinerante') precedida del compuesto adjetival sin plural 'three-month'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "En Grammar Part 2, si detectas 'stipulate / require / recommend / insist / essential + that', inspecciona de inmediato el verbo subordinado: cualquier 'is/are/was' o verbo con '-s' es el error.",
        },
        {
          part: "part2_error_identification",
          id: "d05-gram-p2-q08",
          cefrLevel: "B2",
          grammarTopic: "Irregular Past Participle After Past Modal ('might have + V3')",
          sentenceWithMarkedSegments:
            "Stratigraphic cores indicate that the ancient lagoon [A]{might have underwent} [B]{abrupt salinization} [C]{shortly before} residents [D]{abandoned} the coastal settlement.",
          correctedSegment: "might have undergone",
          options: [
            {
              id: "A",
              text: "might have underwent",
              explanationEs:
                "Incorrecto (contiene el error): todo modal perfecto ('might/must/could/should have') exige participio pasado (V3), nunca Past Simple (V2). El participio de 'undergo' es 'undergone' ('might have undergone'), no 'underwent'.",
            },
            {
              id: "B",
              text: "abrupt salinization",
              explanationEs:
                "Correcto en la oración: sintagma nominal técnico incontable que actúa como objeto directo legítimo de 'undergone'.",
            },
            {
              id: "C",
              text: "shortly before",
              explanationEs:
                "Correcto en la oración: conjunción temporal modificada por el adverbio 'shortly' para precisar anterioridad inmediata.",
            },
            {
              id: "D",
              text: "abandoned",
              explanationEs:
                "Correcto en la oración: verbo finito en Past Simple dentro de la cláusula temporal pasada.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Vigila los verbos irregulares derivados detrás de 'have' en Part 2: 'undergo -> underwent -> undergone', 'arise -> arose -> arisen', 'sink -> sank -> sunk', 'begin -> began -> begun'.",
        },
        {
          part: "part2_error_identification",
          id: "d05-gram-p2-q09",
          cefrLevel: "B2",
          grammarTopic: "Parenthetical Accompaniment Phrases ('along with / as well as')",
          sentenceWithMarkedSegments:
            "The chief osteologist, [A]{along with} four graduate assistants [B]{trained in} forensic radiography, [C]{are scheduled} to catalog the burial chamber [D]{next Tuesday}.",
          correctedSegment: "is scheduled",
          options: [
            {
              id: "A",
              text: "along with",
              explanationEs:
                "Correcto en la oración: locución preposicional parentética válida ('junto con') delimitada entre comas.",
            },
            {
              id: "B",
              text: "trained in",
              explanationEs:
                "Correcto en la oración: participio pasado reducido que modifica limpiamente a 'four graduate assistants'.",
            },
            {
              id: "C",
              text: "are scheduled",
              explanationEs:
                "Incorrecto (contiene el error): expresiones como 'along with', 'together with', 'as well as' o 'accompanied by' no suman sujetos como 'and'; el único sujeto gramatical es singular ('The chief osteologist'), por lo que requiere 'is scheduled'.",
            },
            {
              id: "D",
              text: "next Tuesday",
              explanationEs:
                "Correcto en la oración: complemento temporal futuro compatible con la estructura programática 'is scheduled to catalog'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Solo la conjunción 'and' convierte dos sustantivos singulares en sujeto plural; 'along with', 'as well as', 'in addition to' e 'including' son meros adornos preposicionales que jamás cambian el número del verbo.",
        },
        {
          part: "part2_error_identification",
          id: "d05-gram-p2-q10",
          cefrLevel: "B2",
          grammarTopic: "Distributive Subject-Verb Agreement ('Each of the + Plural Noun')",
          sentenceWithMarkedSegments:
            "[A]{Each of the} obsidian blades [B]{recovered from} the highland quarry [C]{display} microscopic fracture lines [D]{characteristic of} pressure flaking.",
          correctedSegment: "displays",
          options: [
            {
              id: "A",
              text: "Each of the",
              explanationEs:
                "Correcto en la oración: pronombre distributivo singular ('Cada una de las...') seguido legítimamente de grupo nominal definido plural.",
            },
            {
              id: "B",
              text: "recovered from",
              explanationEs:
                "Correcto en la oración: cláusula participial pasiva reducida que especifica la procedencia de las hojas de obsidiana.",
            },
            {
              id: "C",
              text: "display",
              explanationEs:
                "Incorrecto (contiene el error): cuando 'Each of' o 'Every one of' encabeza el sujeto, el núcleo gramatical es invariablemente singular aunque vaya seguido de un sustantivo plural ('obsidian blades'); el verbo debe ser 'displays'.",
            },
            {
              id: "D",
              text: "characteristic of",
              explanationEs:
                "Correcto en la oración: frase adjetiva pospuesta idiomática ('característica de') que modifica a 'microscopic fracture lines'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Cuando una oración arranca con 'Each of', 'Every one of', 'Neither of' o 'One of' + sustantivo plural, el verbo principal en inglés formal de examen siempre va en SINGULAR.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (40 min study / strict single-play simulation)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title: "Osteology Lab Deduction, Digital Repatriation Ethics & Amazonian LiDAR Seminar",
      estimatedMinutes: 40,
      timeLimitSeconds: 900,
      focusSummaryEs:
        "Afina el oído para distinguir hipótesis pasadas en arqueología y antropología: cuando un hablante usa 'could not have sustained' frente a 'must have coordinated', está separando un paradigma descartado de la nueva conclusión respaldada por evidencia.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d05-list-p1",
          title: "Missing Dental-Calculus Slides in the Osteology Lab",
          cefrLevel: "B2",
          audio: {
            trackId: "day05-listening-p1",
            audioUrl: "/audio/day05-listening-p1.mp3",
            contextSetup:
              "An undergraduate student speaks with a graduate lab supervisor in the anthropology department's osteology laboratory.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Excuse me, Marcus—I came in to photograph the Trench Four dental-calculus slides under the polarized microscope, but Cabinet B is completely empty.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Supervisor",
                voice: "en-GB-RyanNeural",
                text: "Hmm, the visiting paleobotanist examined starch grains on those exact slides yesterday afternoon. She couldn't have taken them off campus because security requires a signed loan slip for all biological specimens.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AvaMultilingualNeural",
                text: "Wait—didn't Dr. Okafor insist that all slides exposed to immersion oil be air-dried for twenty-four hours before going back into sealed cabinets?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Supervisor",
                voice: "en-GB-RyanNeural",
                text: "Good catch! She must have placed the tray inside the vented desiccation hood in the prep room next door—let's unlock it and check.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d05-list-p1-q01",
              prompt: "What do the speakers conclude happened to the microscope slides?",
              options: [
                {
                  id: "A",
                  text: "The visiting paleobotanist borrowed them overnight using a signed specimen loan slip.",
                  explanationEs:
                    "Incorrecto: el supervisor descarta precisamente esa posibilidad ('couldn't have taken them off campus') porque no existe papeleta de préstamo firmada.",
                },
                {
                  id: "B",
                  text: "They were left to dry in an adjacent preparation room in accordance with lab protocol.",
                  explanationEs:
                    "Correcto: al recordar la norma obligatoria de secado tras usar aceite de inmersión, el supervisor deduce ('She must have placed the tray...') que están en la campana de desecación del cuarto contiguo.",
                },
                {
                  id: "C",
                  text: "Dr. Okafor discarded them after modern starch contaminated Trench Four.",
                  explanationEs:
                    "Incorrecto: los granos de almidón antiguo eran el objeto legítimo de estudio de la paleobotánica, no una contaminación accidental.",
                },
                {
                  id: "D",
                  text: "They were misfiled inside Cabinet A by an undergraduate assistant.",
                  explanationEs:
                    "Incorrecto: ninguno de los hablantes menciona el Gabinete A ni un error de archivo por parte de asistentes.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Observa cómo funcionan juntos 'couldn't have taken' (descarta el distractor A) y 'must have placed' (señala la respuesta correcta B) en menos de treinta segundos de diálogo.",
        },
        {
          part: "part2_conversation",
          id: "d05-list-p2",
          title: "3D Photogrammetry & Indigenous Heritage Protocols",
          cefrLevel: "B2",
          audio: {
            trackId: "day05-listening-p2",
            audioUrl: "/audio/day05-listening-p2.mp3",
            contextSetup:
              "A senior anthropology major meets with the curator of the university ethnographic museum regarding a digital cataloging grant.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Hi Dr. Alvarez. I've finished rendering the three-dimensional photogrammetry models of the twenty ancestral Puebloan ceramic vessels in the museum's southwest collection.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Curator",
                voice: "en-US-JennyNeural",
                text: "Fantastic progress, Lucas. I inspected three of the meshes on our internal server this morning—the surface resolution is sharp enough to see coil-joining marks and mineral glaze striations.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "That's why I stopped by. Since the undergraduate digital-humanities showcase is next month, I wanted permission to upload the downloadable high-resolution files to the university's public repository this week.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Curator",
                voice: "en-US-JennyNeural",
                text: "Hold on before you make anything downloadable. While fourteen of those vessels are everyday domestic storage jars, six of them carry ceremonial clan motifs.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Oh—I assumed that because photographs of all twenty vessels already appear in an old nineteen-seventies exhibition catalog, publishing 3D files online wouldn't raise any new issues.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Curator",
                voice: "en-US-JennyNeural",
                text: "That catalog was printed long before modern collaborative stewardship agreements existed. A downloadable 3D mesh allows anyone with a commercial printer to mass-produce physical replicas of sacred designs without community oversight.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "I hadn't thought about commercial 3D printing at all. So does our stewardship charter prohibit displaying any of my work at next month's showcase?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Curator",
                voice: "en-US-JennyNeural",
                text: "Not at all. Our agreement stipulates that tribal cultural officers review ceremonial items before any printable geometry is released, which takes about six weeks. Meanwhile, for the fourteen domestic storage jars, you may publish interactive view-only models in a web browser right away—as long as raw file downloads remain disabled.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "That works perfectly. I'll separate the fourteen domestic jars into a view-only web gallery for the showcase and prepare the consultation packet on the six ceremonial vessels for the tribal liaison office this afternoon.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d05-list-p2-q01",
              prompt: "Why did Lucas visit Dr. Alvarez's office?",
              options: [
                {
                  id: "A",
                  text: "To ask for additional laboratory time to finish scanning six damaged ceramic jars",
                  explanationEs:
                    "Incorrecto: en el primer turno confirma que ya terminó de procesar los modelos tridimensionales de las veinte vasijas.",
                },
                {
                  id: "B",
                  text: "To seek approval to post downloadable 3D vessel models on a public university repository",
                  explanationEs:
                    "Correcto: explica explícitamente su motivo ('That's why I stopped by... I wanted permission to upload the downloadable high-resolution files...').",
                },
                {
                  id: "C",
                  text: "To report that a nineteen-seventies museum catalog misidentified Puebloan glazes",
                  explanationEs:
                    "Incorrecto: menciona el catálogo de los años setenta solo para justificar por qué asumió que las imágenes ya eran de dominio público.",
                },
                {
                  id: "D",
                  text: "To request funds to purchase a commercial 3D printer for the anthropology department",
                  explanationEs:
                    "Incorrecto: la impresión 3D comercial la menciona la curadora como riesgo ético de uso externo no autorizado.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d05-list-p2-q02",
              prompt:
                "Why does Dr. Alvarez distinguish three-dimensional mesh files from photographs in the 1970s catalog?",
              options: [
                {
                  id: "A",
                  text: "Three-dimensional files occupy too much server bandwidth for the university's web portal.",
                  explanationEs:
                    "Incorrecto: la objeción es ética y patrimonial sobre la reproducción física de símbolos ceremoniales, no informática.",
                },
                {
                  id: "B",
                  text: "Old black-and-white photographs failed to capture coil-joining marks on domestic jars.",
                  explanationEs:
                    "Incorrecto: aunque los modelos 3D muestran gran detalle técnico, esa no es la razón por la que bloquea la descarga pública.",
                },
                {
                  id: "C",
                  text: "Downloadable meshes enable unauthorized third parties to fabricate physical copies of sacred motifs.",
                  explanationEs:
                    "Correcto: señala tanto que el catálogo de los setenta precedió a los acuerdos éticos actuales como que una malla descargable permite fabricar réplicas físicas comerciales sin supervisión comunitaria.",
                },
                {
                  id: "D",
                  text: "Copyright on the nineteen-seventies photographs belongs to an external publishing house.",
                  explanationEs:
                    "Incorrecto: no se menciona ningún litigio editorial de derechos de autor.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d05-list-p2-q03",
              prompt:
                "What does the museum's stewardship agreement require regarding the six ceremonial vessels?",
              options: [
                {
                  id: "A",
                  text: "That tribal cultural officers review the digital files before any printable data is shared",
                  explanationEs:
                    "Correcto: la curadora cita el subjuntivo mandativo del convenio ('stipulates that tribal cultural officers review ceremonial items before any printable geometry is released').",
                },
                {
                  id: "B",
                  text: "That all digital scans of ceremonial pottery be permanently deleted from internal servers",
                  explanationEs:
                    "Incorrecto: no exige borrar los escaneos internos, sino someterlos a un proceso de revisión comunitaria de unas seis semanas.",
                },
                {
                  id: "C",
                  text: "That students display physical vessels rather than digital models at campus showcases",
                  explanationEs:
                    "Incorrecto: nunca sugiere trasladar las vasijas físicas originales a la muestra estudiantil.",
                },
                {
                  id: "D",
                  text: "That domestic storage jars undergo the same six-week review before browser viewing",
                  explanationEs:
                    "Incorrecto: las catorce jarras domésticas pueden mostrarse de inmediato en visor web sin descarga.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d05-list-p2-q04",
              prompt: "How will Lucas present his work at next month's undergraduate showcase?",
              options: [
                {
                  id: "A",
                  text: "He will postpone his presentation until next semester when all twenty files are cleared.",
                  explanationEs:
                    "Incorrecto: participará el próximo mes usando las catorce vasijas utilitarias autorizadas.",
                },
                {
                  id: "B",
                  text: "He will showcase the fourteen domestic jars in a non-downloadable browser viewer while submitting the six ceremonial models for tribal review.",
                  explanationEs:
                    "Correcto: resume fielmente los dos pasos que Lucas confirma en el último turno de la conversación.",
                },
                {
                  id: "C",
                  text: "He will distribute 3D-printed miniature replicas of the domestic jars to showcase visitors.",
                  explanationEs:
                    "Incorrecto: precisamente mantendrá desactivada la descarga de archivos crudos para impedir impresiones físicas.",
                },
                {
                  id: "D",
                  text: "He will display only scanned pages from the nineteen-seventies exhibition catalog.",
                  explanationEs:
                    "Incorrecto: mostrará su propia galería web interactiva 3D de las catorce jarras domésticas.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "Presta atención cuando un asesor divide un conjunto de datos en dos subgrupos ('fourteen domestic jars' vs. 'six ceremonial vessels'): las preguntas de detalle y acción futura suelen evaluar la regla distinta que aplica a cada subgrupo.",
        },
        {
          part: "part3_lecture",
          id: "d05-list-p3",
          title: "Archaeology Seminar: Airborne LiDAR and Pre-Columbian Amazonian Urbanism",
          cefrLevel: "B2",
          audio: {
            trackId: "day05-listening-p3",
            audioUrl: "/audio/day05-listening-p3.mp3",
            contextSetup:
              "An anthropology professor delivers a seminar lecture on remote sensing and settlement archaeology in tropical lowlands.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "For much of the twentieth century, environmental anthropologists held a firm consensus regarding the pre-Columbian Amazon basin: namely, that heavily weathered, acidic tropical soils could not have supported large, permanent urban populations.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Under that 'counterfeit paradise' model, scholars assumed indigenous communities must have lived in small, shifting villages, clearing forest patches briefly before nutrients failed. Unlike stone pyramids in arid valleys, Amazonian monuments were built of compacted earth, which dense canopy hid from aerial cameras and foot surveys.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Over the past decade, airborne LiDAR—Light Detection and Ranging—has fundamentally overturned that paradigm. By firing hundreds of thousands of laser pulses per second from low-flying aircraft and filtering out reflections from leaves and branches, archaeologists can generate bare-earth elevation maps accurate to within a few centimeters.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "In Bolivia's Llanos de Mojos and Ecuador's Upano Valley, LiDAR surveys have revealed sprawling networks of monumental platform mounds, defensive ditches, artificial aquaculture reservoirs, and ruler-straight raised causeways radiating for kilometers between settlements. Rather than packing tens of thousands of people behind a single defensive wall, these societies practiced what urban historians call low-density agrarian urbanism—integrating civic plazas directly with terraced orchards, drainage canals, and raised agricultural fields.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Soil chemistry confirms how they overcame tropical nutrient limits. Across thousands of sites, excavations uncover deep layers of anthropogenic dark earth—known locally as terra preta—enriched with charcoal, bone, and composted aquatic plants. Because charcoal binds minerals and resists leaching during torrential rains, residents must have engineered soil fertility intentionally over generations rather than passively depleting the land.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-GB-SoniaNeural",
                text: "Of course, contemporary archaeologists caution that remote sensing never replaces ground excavation; it is essential that field teams date stratigraphic layers directly so we don't assume every causeway on a LiDAR map was occupied in the exact same century. Even so, the broader lesson is unmistakable: tropical forests we once mistook for untouched wilderness are, in large measure, enduring cultural landscapes.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d05-list-p3-q01",
              prompt: "What is the main topic of the seminar lecture?",
              options: [
                {
                  id: "A",
                  text: "How LiDAR mapping and soil science have refuted earlier assumptions that pre-Columbian Amazonia lacked complex urbanism",
                  explanationEs:
                    "Correcto: integra el eje central completo: el antiguo consenso de suelos pobres, la revolución cartográfica del LiDAR revelando urbanismo agrario de baja densidad y la evidencia edafológica de 'terra preta'.",
                },
                {
                  id: "B",
                  text: "Why pre-Columbian builders abandoned stone pyramids in favor of subterranean dwellings",
                  explanationEs:
                    "Incorrecto: nunca construyeron viviendas subterráneas ni abandonaron pirámides de piedra locales; edificaban montículos de tierra compactada.",
                },
                {
                  id: "C",
                  text: "How modern deforestation allows conventional aerial photography to replace archaeological excavation",
                  explanationEs:
                    "Incorrecto: el LiDAR penetra el dosel forestal sin deforestar, y al final la profesora subraya que jamás sustituye la excavación estratigráfica.",
                },
                {
                  id: "D",
                  text: "Why torrential tropical rainfall destroyed all traces of ancient charcoal fertilizers",
                  explanationEs:
                    "Incorrecto: contradice el quinto bloque, donde se explica que el carbón vegetal retiene minerales y resiste la lixiviación pluvial durante siglos.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d05-list-p3-q02",
              prompt:
                "Why did twentieth-century anthropologists believe the Amazon basin 'could not have supported' large permanent populations?",
              options: [
                {
                  id: "A",
                  text: "Historical chronicles reported severe multi-decade droughts across the Upano Valley.",
                  explanationEs:
                    "Incorrecto: no se mencionan crónicas de sequías prolongadas como base de aquel modelo.",
                },
                {
                  id: "B",
                  text: "They judged weathered, acidic rainforest soils incapable of sustaining continuous intensive farming.",
                  explanationEs:
                    "Correcto: bajo el modelo del 'paraíso engañoso' ('counterfeit paradise'), asumían que los suelos ácidos y meteorizados se agotaban rápido y solo permitían aldeas pequeñas e itinerantes.",
                },
                {
                  id: "C",
                  text: "Early LiDAR scans conducted in the nineteen-fifties showed empty river floodplains.",
                  explanationEs:
                    "Incorrecto: anacronismo; la profesora señala que el LiDAR aéreo ha transformado el campo apenas en la última década.",
                },
                {
                  id: "D",
                  text: "Indigenous oral histories claimed that monumental plazas were strictly seasonal camps.",
                  explanationEs:
                    "Incorrecto: no se atribuye esa conclusión a historias orales indígenas, sino al determinismo edáfico del siglo XX.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d05-list-p3-q03",
              prompt:
                "How does 'low-density agrarian urbanism' differ from traditional walled cities?",
              options: [
                {
                  id: "A",
                  text: "It relies exclusively on imported food transported from highland stone cities.",
                  explanationEs:
                    "Incorrecto: producían alimentos localmente mediante campos elevados, huertos en terrazas y reservorios acuícolas integrados.",
                },
                {
                  id: "B",
                  text: "It weaves monumental civic architecture together with orchards, reservoirs, and raised farmland across wide connected landscapes.",
                  explanationEs:
                    "Correcto: en vez de hacinar población tras una sola muralla, entrelaza plazas cívicas y calzadas rectas con infraestructura agrícola e hidráulica.",
                },
                {
                  id: "C",
                  text: "It prohibits permanent ceremonial mounds so settlements can relocate every five years.",
                  explanationEs:
                    "Incorrecto: precisamente presentaba montículos monumentales permanentes, fosos y calzadas kilométricas.",
                },
                {
                  id: "D",
                  text: "It houses the entire regional population on floating wooden platforms over lakes.",
                  explanationEs:
                    "Incorrecto: construían montículos y campos elevados de tierra compactada ('compacted earth'), no plataformas flotantes de madera.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d05-list-p3-q04",
              prompt: "What role does 'terra preta' play in the professor's argument?",
              options: [
                {
                  id: "A",
                  text: "It explains how laser pulses reflect more brightly off dark volcanic rock.",
                  explanationEs:
                    "Incorrecto: 'terra preta' no es roca volcánica ni un reflector láser, sino suelo antropogénico enriquecido orgánicamente.",
                },
                {
                  id: "B",
                  text: "It demonstrates that ancient inhabitants actively engineered durable soil fertility using charcoal and organic amendments.",
                  explanationEs:
                    "Correcto: aporta la prueba química de cómo superaron la acidez tropical ('residents must have engineered soil fertility intentionally over generations').",
                },
                {
                  id: "C",
                  text: "It proves that catastrophic wildfires wiped out Llanos de Mojos settlements before European contact.",
                  explanationEs:
                    "Incorrecto: el carbón vegetal ('charcoal') formaba parte de una enmienda agrícola deliberada junto con hueso y compost acuático, no de incendios destructivos.",
                },
                {
                  id: "D",
                  text: "It shows that river silt naturally fertilized lowland forests without human intervention.",
                  explanationEs:
                    "Incorrecto: el término 'anthropogenic dark earth' significa precisamente suelo creado por acción humana intencional.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d05-list-p3-q05",
              prompt:
                "Why does the professor emphasize that 'it is essential that field teams date stratigraphic layers directly'?",
              options: [
                {
                  id: "A",
                  text: "Because LiDAR elevation maps alone cannot prove that all visible earthworks were inhabited simultaneously",
                  explanationEs:
                    "Correcto: advierte metodológicamente que ver calzadas conectadas en un mapa de relieve no garantiza que todas hayan estado ocupadas en el mismo siglo sin datación estratigráfica en campo.",
                },
                {
                  id: "B",
                  text: "Because laser pulses frequently damage fragile ceramic artifacts near the ground surface",
                  explanationEs:
                    "Incorrecto: el LiDAR aéreo es una técnica de teledetección óptica completamente no invasiva.",
                },
                {
                  id: "C",
                  text: "Because tree branches block one hundred percent of airborne laser signals in Ecuador",
                  explanationEs:
                    "Incorrecto: precisamente explicó que el LiDAR filtra los rebotes de hojas y ramas para mapear el suelo en el valle del Upano en Ecuador.",
                },
                {
                  id: "D",
                  text: "Because 'terra preta' soils dissolve rapidly once exposed to air during excavation",
                  explanationEs:
                    "Incorrecto: al contrario, su estabilidad mineral perdura durante generaciones pese a lluvias intensas.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d05-list-p3-q06",
              prompt:
                "What does the professor imply in her concluding remark about tropical forests?",
              options: [
                {
                  id: "A",
                  text: "Modern conservationists should clear rainforest canopy to expose ancient causeways for tourism.",
                  explanationEs:
                    "Incorrecto: jamás sugiere talar el bosque; el valor del LiDAR radica precisamente en estudiar el relieve sin destruir la cubierta vegetal.",
                },
                {
                  id: "B",
                  text: "Many ecosystems long regarded as pristine nature actually bear the lasting ecological imprint of indigenous management.",
                  explanationEs:
                    "Correcto: reformula con exactitud la conclusión final ('tropical forests we once mistook for untouched wilderness are, in large measure, enduring cultural landscapes').",
                },
                {
                  id: "C",
                  text: "Agrarian urbanism degraded biodiversity irreversibly across the entire South American continent.",
                  explanationEs:
                    "Incorrecto: contradice el sentido del cierre, donde el bosque actual coexiste sobre esos paisajes culturales enriquecidos.",
                },
                {
                  id: "D",
                  text: "Future archaeological discoveries in the Amazon will depend on satellite cameras rather than aircraft.",
                  explanationEs:
                    "Incorrecto: no plantea ninguna comparación futura con cámaras satelitales en el cierre.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En seminarios de arqueología o historia (Part 3), estructura tus notas como 'Paradigma Antiguo (could not have...) -> Nueva Tecnología -> Evidencia Material (must have...) -> Salvedad Metodológica (essential that...)'.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (35 min study / 20 min official pace for Part 1 + Part 2)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title: "Bioarchaeological Isotope Mobility & Virtual Unwrapping of Carbonized Papyri",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Rastrea cómo los textos científicos combinan deducción en pasado ('must have migrated') con recomendaciones metodológicas en subjuntivo ('insist that transcriptions undergo...'), y utiliza los contrastes de resolución del problema para ubicar inserciones textuales `[A][B][C][D]`.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d05-read-p1",
          title: "Strontium Isotope Signatures and Prehistoric Human Mobility",
          cefrLevel: "B2",
          topicDomain: "Bioarchaeology & Anthropological Chemistry",
          paragraphs: [
            "Until the late twentieth century, archaeologists reconstructing prehistoric migration relied primarily on stylistic shifts in pottery, burial architecture, and metallurgy. Because material artifacts can spread across regions through gift exchange or imitation without any large-scale movement of people, scholars hotly debated whether sudden cultural transitions reflected actual demographic migration or merely expanding trade networks. Bioarchaeologists resolved much of this interpretive ambiguity by analyzing strontium isotope ratios preserved directly inside ancient human skeletons.",
            "Strontium weathers naturally from continental bedrock into groundwater and edible plants at isotopic ratios that vary predictably according to local geological age, passing unchanged into the tissues of humans who consume local harvests. Crucially, human tooth enamel mineralizes during early childhood and never remodels afterward, locking in the geochemical signature of an individual's birthplace. Adult cortical bone, by contrast, continuously regenerates over roughly a decade prior to death. Whenever a skeleton's childhood enamel ratio differs sharply from both the surrounding burial-soil baseline and its own adult femur values, researchers conclude that the individual must have migrated from another geological zone after childhood.",
            "Applied to Neolithic cemeteries across central Europe, strontium profiling has overturned the traditional image of isolated, sedentary farming villages. While adult males predominantly match local valley bedrock, a substantial number of adult female burials exhibit upland isotopic signatures foreign to the lowland loess settlements where they were interred. These patterns indicate structured exogamous marriage alliances that linked distant agricultural communities, circulated specialized craft knowledge, and buffered early farming households against localized crop failures.",
          ],
          questions: [
            {
              id: "d05-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the primary purpose of the passage?",
              options: [
                {
                  id: "A",
                  text: "To explain how geochemical comparisons between tooth enamel and bone enable archaeologists to trace ancient human movement and social networks",
                  explanationEs:
                    "Correcto: abarca la limitación previa de los artefactos (P1), el mecanismo biológico-geológico de los isótopos de estroncio (P2) y sus hallazgos sobre movilidad y alianzas matrimoniales neolíticas (P3).",
                },
                {
                  id: "B",
                  text: "To prove that Neolithic pottery styles spread across central Europe solely through military conquest",
                  explanationEs:
                    "Incorrecto: no se menciona conquista militar; el párrafo 3 describe redes matrimoniales exógamas e intercambio pacífico de saberes artesanales.",
                },
                {
                  id: "C",
                  text: "To argue that groundwater contamination renders ancient cortical bone unsuitable for chemical analysis",
                  explanationEs:
                    "Incorrecto: el hueso cortical adulto sí se analiza como indicador válido de la última década de vida del individuo.",
                },
                {
                  id: "D",
                  text: "To compare agricultural yields between upland bedrock zones and lowland loess valleys",
                  explanationEs:
                    "Incorrecto: las tierras altas y los valles de loess se contrastan por sus firmas isotópicas de origen, no en un estudio agronómico de cosechas.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d05-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'sedentary' in paragraph 3 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "physically exhausted",
                  explanationEs:
                    "Incorrecto: aunque en medicina moderna 'sedentary lifestyle' alude a inactividad física, en antropología de asentamientos no significa agotamiento.",
                },
                {
                  id: "B",
                  text: "permanently settled in one location",
                  explanationEs:
                    "Correcto: en 'isolated, sedentary farming villages' contrapuesto a movilidad regional, 'sedentary' designa comunidades asentadas de forma fija sin desplazamiento entre regiones.",
                },
                {
                  id: "C",
                  text: "technologically primitive",
                  explanationEs:
                    "Incorrecto: el pasaje destaca incluso que circulaban conocimientos artesanales especializados ('specialized craft knowledge').",
                },
                {
                  id: "D",
                  text: "hierarchically governed",
                  explanationEs:
                    "Incorrecto: el término alude a permanencia residencial, no a jerarquía política.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d05-read-p1-q03",
              questionType: "inference",
              prompt:
                "Based on paragraph 2, what would bioarchaeologists most likely infer if an adult skeleton's tooth enamel AND cortical femur bone both differed from the local burial soil?",
              options: [
                {
                  id: "A",
                  text: "The individual was born locally, moved away during adolescence, and returned home ten years before dying.",
                  explanationEs:
                    "Incorrecto: si hubiera nacido localmente, el esmalte dental coincidiría con el suelo local; y si hubiera regresado diez años antes de morir, el fémur ya se habría remodelado con la firma local.",
                },
                {
                  id: "B",
                  text: "The individual grew up elsewhere and relocated to the burial settlement relatively shortly before death, before bone remodeling completed.",
                  explanationEs:
                    "Correcto: dado que el esmalte refleja la infancia y el hueso cortical tarda cerca de una década en regenerarse con los valores locales, que ambos difieran del suelo del entierro implica una llegada reciente antes de morir.",
                },
                {
                  id: "C",
                  text: "The individual consumed exclusively imported metalware rather than local agricultural crops.",
                  explanationEs:
                    "Incorrecto: el estroncio ingresa al organismo por agua y plantas comestibles ('groundwater and edible plants'), no por utensilios metálicos.",
                },
                {
                  id: "D",
                  text: "The individual's tooth enamel continued absorbing new strontium from burial soil after interment.",
                  explanationEs:
                    "Incorrecto: contradice frontalmente la premisa clave del párrafo 2 ('never remodels afterward, locking in the geochemical signature').",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d05-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "How do the Neolithic cemetery findings in paragraph 3 resolve the scholarly debate introduced in paragraph 1?",
              options: [
                {
                  id: "A",
                  text: "They confirm that cultural artifacts never traveled between valleys unless entire villages relocated together.",
                  explanationEs:
                    "Incorrecto: los varones adultos permanecían mayoritariamente en el valle natal ('predominantly match local valley bedrock'), por lo que no se trasladaban aldeas enteras.",
                },
                {
                  id: "B",
                  text: "They provide direct biological proof that specific individuals moved across geological regions, linking craft transmission to kinship ties rather than trade alone.",
                  explanationEs:
                    "Correcto: conecta el dilema del párrafo 1 (¿migración humana o simple comercio?) con la evidencia isotópica del párrafo 3, demostrando movilidad real femenina por alianzas matrimoniales que a la vez difundían saberes artesanales.",
                },
                {
                  id: "C",
                  text: "They show that metallurgy replaced agriculture as the primary economic base of lowland loess settlements.",
                  explanationEs:
                    "Incorrecto: las comunidades seguían siendo hogares agrícolas ('early farming households') que mitigaban malas cosechas locales.",
                },
                {
                  id: "D",
                  text: "They demonstrate that upland communities prohibited marriage with residents of lowland river valleys.",
                  explanationEs:
                    "Incorrecto: la presencia frecuente de mujeres originarias de tierras altas enterradas en valles bajos prueba exactamente la existencia de matrimonios exógamos entre ambas zonas.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d05-read-p2",
          title: "Virtual Unwrapping and the Decipherment of Carbonized Herculaneum Papyri",
          cefrLevel: "B2",
          topicDomain: "Classical Archaeology & Computational Conservation",
          paragraphs: [
            "When Mount Vesuvius erupted in 79 CE, pyroclastic surges exceeding three hundred degrees Celsius buried an aristocratic seaside villa in Herculaneum containing the only intact philosophical library known to survive from Greco-Roman antiquity. Likely assembled by the Roman statesman Lucius Calpurnius Piso Caesoninus to house works by the Epicurean thinker Philodemus of Gadara, the collection encompassed more than one thousand papyrus scrolls. Paradoxically, the oxygen-starved volcanic ash that charred these manuscripts into brittle cylinders of carbon also shielded them from the moisture and microbial decay that obliterated organic texts elsewhere around the Mediterranean, turning physical conservation into an agonizing dilemma after eighteenth-century tunnelers rediscovered the villa.",
            "Early attempts to read the scrolls caused irreparable losses. Eighteenth- and nineteenth-century conservators sliced tightly wound rolls lengthwise with blades, while Father Antonio Piaggio's slow traction frame glued silk threads to fragile outer sheets to peel layers apart millimeter by millimeter—a process that took years per scroll and still pulverized outer columns into soot. Even where intact fragments emerged, conventional infrared photography struggled to distinguish ancient soot-based ink from the blackened papyrus fibers beneath it, because both shared virtually identical carbon chemistry. Consequently, international heritage boards eventually stipulated that the remaining unopened scrolls not be subjected to invasive mechanical unrolling.",
            "Over the past decade, a convergence of particle-accelerator physics and machine learning—known as virtual unwrapping—has bypassed physical contact altogether. [A] Researchers first scan an intact scroll using high-resolution X-ray phase-contrast tomography, generating thousands of microscopic cross-sectional images that map every crumpled internal papyrus layer in three dimensions. [B] Specialized segmentation algorithms then trace these convoluted spirals and flatten them computationally into virtual sheets, a delicate geometric step given that volcanic compression fused adjacent windings together. [C] Trained on subtle micrometer-scale variations in surface relief rather than chemical contrast, neural networks identify tiny ink-bearing regions invisible to the human eye and assemble legible columns of ancient Greek prose. [D]",
            "Despite sensational breakthroughs that recently recovered long-lost philosophical chapters on aesthetics, sensation, and music, classical philologists insist that algorithmic transcriptions undergo rigorous paleographic verification before scholarly publication. Because classification models trained on fragmentary letterforms might inadvertently extrapolate plausible Greek characters across damaged lacunae, human papyrologists cross-check every predicted letter against underlying tomographic slices to prevent machine hallucinations from entering historical editions. By releasing open-source tomographic datasets alongside strict verification standards, virtual unwrapping not only rescues Herculaneum's fragile archive, but also establishes a collaborative, non-destructive blueprint for reading damaged manuscripts worldwide—from flood-fused medieval parchment to corroded metallic amulets.",
          ],
          questions: [
            {
              id: "d05-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, why did the Herculaneum papyri survive for nearly two millennia whereas most other Mediterranean papyri perished?",
              options: [
                {
                  id: "A",
                  text: "Roman librarians sealed the scrolls inside airtight lead canisters prior to the eruption.",
                  explanationEs:
                    "Incorrecto: no se mencionan recipientes de plomo; los rollos quedaron sepultados directamente por oleadas piroclásticas y ceniza.",
                },
                {
                  id: "B",
                  text: "Oxygen-poor volcanic ash carbonized the scrolls while isolating them from dampness and microorganisms.",
                  explanationEs:
                    "Correcto: explica la paradoja de conservación del párrafo 1: la ceniza volcánica sin oxígeno los carbonizó, pero a la vez los protegió de la humedad y la descomposición microbiana.",
                },
                {
                  id: "C",
                  text: "Philodemus of Gadara inscribed his treatises on fireproof mineral parchment rather than plant fibers.",
                  explanationEs:
                    "Incorrecto: los manuscritos eran rollos orgánicos de fibras de papiro ('papyrus fibers'), no pergamino mineral incombustible.",
                },
                {
                  id: "D",
                  text: "Subterranean groundwater cooled the seaside villa before temperatures reached one hundred degrees.",
                  explanationEs:
                    "Incorrecto: el texto afirma explícitamente que las oleadas piroclásticas superaron los trescientos grados Celsius.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d05-read-p2-q02",
              questionType: "detail",
              prompt:
                "According to paragraph 2, why did conventional infrared photography often fail to reveal text on Herculaneum fragments?",
              options: [
                {
                  id: "A",
                  text: "Silk threads from Piaggio's traction machine covered the Greek letters on both sides of the papyrus.",
                  explanationEs:
                    "Incorrecto: los hilos se adherían al exterior para desenrollar capas, pero el fallo del infrarrojo ocurría incluso en fragmentos expuestos debido a la química del carbono.",
                },
                {
                  id: "B",
                  text: "Infrared light rapidly bleached the remaining soot particles whenever fragments left dark storage.",
                  explanationEs:
                    "Incorrecto: el texto no menciona decoloración por luz infrarroja en ningún momento.",
                },
                {
                  id: "C",
                  text: "Both the soot-derived ink and the charred papyrus backing consisted almost entirely of carbon.",
                  explanationEs:
                    "Correcto: el párrafo 2 detalla que la tinta a base de hollín y las fibras de papiro ennegrecidas compartían una composición química de carbono prácticamente idéntica, anulando el contraste óptico.",
                },
                {
                  id: "D",
                  text: "Roman scribes diluted their ink with volcanic clay that absorbed X-ray and infrared wavelengths.",
                  explanationEs:
                    "Incorrecto: la tinta era a base de hollín ('soot-based ink'), sin mención a arcilla volcánica.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d05-read-p2-q03",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "Flattening the digital geometry of a scroll, however, solves only half the puzzle if the carbon ink itself still blends into the dark substrate.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se ha explicado el escaneo tomográfico ni mucho menos el aplanamiento geométrico digital ('Flattening the digital geometry').",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: la oración previa a `[B]` solo genera cortes transversales en 3D; el paso de aplanar computacionalmente las espirales ('flatten them computationally') recién se introduce después de `[B]`.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Correcto: 'Flattening the digital geometry' retoma directamente 'flatten them computationally into virtual sheets ... delicate geometric step' antes de `[C]`, mientras que el problema de la tinta de carbono mimetizada introduce la solución de redes neuronales basadas en microrrelieve superficial después de `[C]`.",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Incorrecto: antes de `[D]` las redes neuronales ya identificaron la tinta y ensamblaron columnas legibles de prosa griega, por lo que plantear el obstáculo allí sería regresivo.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d05-read-p2-q04",
              questionType: "vocabulary_in_context",
              prompt: "The word 'extrapolate' in paragraph 4 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "erase permanently",
                  explanationEs:
                    "Incorrecto: el riesgo descrito no es que el modelo borre letras, sino que invente o proyecte caracteres plausibles donde hay lagunas dañadas.",
                },
                {
                  id: "B",
                  text: "project or infer beyond directly observed evidence",
                  explanationEs:
                    "Correcto: en 'inadvertently extrapolate plausible Greek characters across damaged lacunae', significa inferir o rellenar conjeturalmente caracteres más allá de los trazos físicos realmente presentes en el escaneo.",
                },
                {
                  id: "C",
                  text: "translate into modern languages",
                  explanationEs:
                    "Incorrecto: el proceso descrito es transcripción paleográfica de caracteres griegos ('algorithmic transcriptions'), previo a cualquier traducción.",
                },
                {
                  id: "D",
                  text: "compress for digital storage",
                  explanationEs:
                    "Incorrecto: no guarda relación con compresión de archivos informáticos.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d05-read-p2-q05",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraphs 2 and 3 about how neural networks detect ink inside unopened Herculaneum scrolls?",
              options: [
                {
                  id: "A",
                  text: "They identify tiny physical thickness or surface-relief differences left by dried ink rather than relying on color or chemical differences.",
                  explanationEs:
                    "Correcto: dado que la tinta de hollín carece de contraste químico frente al papiro carbonizado (P2), el párrafo 3 explica que las redes se entrenan en variaciones micrométricas del relieve superficial ('micrometer-scale variations in surface relief rather than chemical contrast').",
                },
                {
                  id: "B",
                  text: "They heat the scroll slightly during tomography so ink particles emit infrared radiation.",
                  explanationEs:
                    "Incorrecto: el desenrollado virtual omite todo contacto o alteración térmica sobre el rollo intacto.",
                },
                {
                  id: "C",
                  text: "They detect trace amounts of metallic iron and lead mixed into all Epicurean inks.",
                  explanationEs:
                    "Incorrecto: el texto recalca que era tinta a base de carbono/hollín sin contraste químico frente al soporte.",
                },
                {
                  id: "D",
                  text: "They require conservators to slice each scroll into four quadrants before X-ray scanning.",
                  explanationEs:
                    "Incorrecto: contradice 'scan an intact scroll' y 'bypassed physical contact altogether'.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d05-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Which statement best synthesizes the relationship between computational technology and traditional philology presented in the passage?",
              options: [
                {
                  id: "A",
                  text: "Machine learning has rendered human papyrologists obsolete by eliminating subjective transcription errors.",
                  explanationEs:
                    "Incorrecto: el párrafo 4 sostiene exactamente lo opuesto: los papirologistas humanos son indispensables para evitar alucinaciones algorítmicas en lagunas dañadas.",
                },
                {
                  id: "B",
                  text: "Tomographic imaging and neural networks overcome physical barriers that defeated mechanical conservation, yet scholarly validity still depends on rigorous paleographic verification.",
                  explanationEs:
                    "Correcto: articula la síntesis global del pasaje: la física de rayos X y la IA logran leer sin destruir donde la conservación mecánica fracasó (P2–P3), pero exigen control filológico humano estricto para garantizar rigor histórico (P4).",
                },
                {
                  id: "C",
                  text: "Classical philologists oppose open-source tomographic datasets because computer scientists misread Epicurean philosophy.",
                  explanationEs:
                    "Incorrecto: el cierre elogia la publicación abierta de datos tomográficos combinada con estándares de verificación como modelo colaborativo global.",
                },
                {
                  id: "D",
                  text: "Virtual unwrapping works effectively on metallic amulets and parchment, but remains too imprecise for carbonized papyrus.",
                  explanationEs:
                    "Incorrecto: ya recuperó capítulos filosóficos enteros en los papiros de Herculano y desde allí se proyecta hacia pergaminos y amuletos.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (35 min study / 25 min official timer without spellcheck)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title: "Archival Consultation Request Note & Cultural Repatriation Policy Essay",
      estimatedMinutes: 35,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Activa en tu escritura los tres pilares del Día 5: emplea una estructura mandativa formal ('requires that every researcher wear...', 'essential that provenance records be...') para proyectar registro institucional, un modal perfecto ('could not have been exported') para razonamiento histórico y concordancia impecable en cuantificadores.",
      tasks: [
        {
          part: "part1_note",
          id: "d05-writ-p1",
          cefrLevel: "B2",
          title: "Requesting Supervised Access to Ethnographic Field Journals",
          prompt:
            "You are writing your senior anthropology thesis and need to examine fragile 1930s ethnographic field journals held in the university museum's restricted archive. Write a formal note to Dr. Vance, Head Archivist, in which you: (1) state your specific thesis topic, (2) explain why the online catalog summaries are insufficient for your analysis, and (3) confirm that you will follow all conservation handling rules.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Redacta 3–4 oraciones densas entre 55 y 72 palabras. Usa un modal de posibilidad ('might contain') para justificar qué dato falta en el resumen digital y cierra con un subjuntivo mandativo ('museum policy requires that every researcher wear...') para acreditar dominio gramatical B2.",
          recommendedConnectors: [
            "While the online catalog...",
            "might contain",
            "requires that ... wear",
            "exclusively",
          ],
          b2RubricChecklistEs: [
            "Cubre íntegramente los 3 puntos solicitados (tema concreto de tesis, insuficiencia del catálogo en línea y acatamiento de normas de conservación).",
            "Se mantiene estrictamente entre 50 y 75 palabras con saludo y despedida académicos formales.",
            "Integra correctamente un subjuntivo mandativo ('requires that every researcher wear...') sin añadir '-s' al verbo.",
            "Ortografía limpia de vocabulario académico ('archive', 'insufficient', 'conservation', 'fragile').",
          ],
          modelAnswerB2:
            "Dear Dr. Vance, I am writing to request supervised access to Margaret Sterling's 1938 Andean field journals for my senior anthropology thesis on highland irrigation rituals. While the online catalog summarizes vessel inventories, her unpublished margin sketches might contain kinship diagrams absent from the digital database. I understand that museum policy requires that every researcher wear nitrile gloves and consult fragile notebooks in the conservation room. Sincerely, Mateo Silva",
        },
        {
          part: "part2_essay",
          id: "d05-writ-p2",
          cefrLevel: "B2",
          title: "Cultural Heritage Repatriation vs. Universal Encyclopedic Museums",
          prompt:
            "Major museums in North America and Europe hold thousands of ancient sculptures, ceremonial objects, and manuscripts originating from Asia, Africa, and Latin America. Curators of 'universal museums' argue that displaying diverse world cultures under one roof promotes global appreciation and guarantees advanced conservation. Critics contend that institutions should repatriate contested artifacts to their countries and communities of origin. Which position do you support? Provide specific reasons and examples to justify your view.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Organiza 4 párrafos nítidos (190–220 palabras): P1 Postura clara apoyando la repatriación de piezas adquiridas sin consentimiento libre; P2 Concesión breve sobre conservación y alcance global + refutación de que hoy existen museos modernos en los países de origen; P3 Razonamiento histórico con modal perfecto ('could not have been exported fairly') y subjuntivo mandativo ('imperative that provenance records be audited'); P4 Solución colaborativa con préstamos y réplicas 3D.",
          recommendedConnectors: [
            "Admittedly,",
            "Nevertheless,",
            "could not have been",
            "it is imperative that",
            "While a growing number of",
          ],
          b2RubricChecklistEs: [
            "Defiende una tesis inequívoca desde el párrafo inicial frente al dilema entre museos universales y repatriación.",
            "Cumple el rango oficial de 175 a 225 palabras con cohesión fluida entre concesión, refutación y propuesta final.",
            "Emplea con exactitud al menos un modal perfecto de deducción ('must have been removed' / 'could not have been acquired') y un subjuntivo mandativo ('imperative that ... be').",
            "Controla la concordancia sujeto-verbo en estructuras con 'a growing number of' (plural) frente a 'the number of' (singular) o cadenas preposicionales largas.",
            "Registro léxico formal y preciso ('repatriate', 'provenance', 'stewardship', 'ceremonial', 'equitable').",
          ],
          modelAnswerB2:
            "Metropolitan museums in Europe and North America have long defended keeping foreign antiquities in the name of cosmopolitan education, yet institutions should repatriate contested cultural artifacts whenever archival evidence shows they were removed without community consent.\n\nAdmittedly, encyclopedic collections allow visitors to compare artistic traditions across continents and once offered climate-controlled conservation unavailable elsewhere. Nevertheless, that technical justification no longer holds weight today. Over the past two decades, a growing number of newly constructed national and university museums across Africa, Latin America, and Asia have installed state-of-the-art conservation laboratories fully capable of safeguarding delicate bronzes, ceremonial textiles, and ancient codices.\n\nMore importantly, ethical stewardship cannot ignore historical power imbalances. Ceremonial reliefs and royal regalia seized during nineteenth-century military expeditions or colonial occupation could not have been exported through fair, voluntary negotiation. International heritage charters therefore insist that every museum audit its provenance archives transparently and that looted sacred objects be returned to the descendant communities whose living cultural identity they embody.\n\nRepatriation need not empty global galleries. Through rotating long-term loans and high-resolution three-dimensional replicas, the number of collaborative cross-cultural exhibitions worldwide continues to grow. Returning original masterpieces restores historical justice while fostering equitable scholarly partnership.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (15 min study / chained prep + recording official timers)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Revising an Academic Assumption & Fragile Heritage Site Access Debate",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "En Speaking Part 1 usa modales perfectos ('I initially assumed it must have been...', 'I realized I should have checked...') para narrar evolución intelectual; en Part 2 usa una cláusula mandativa ('It is essential that authorities cap daily visitors...') para proponer políticas concretas.",
      tasks: [
        {
          part: "part1_personal",
          id: "d05-speak-p1",
          cefrLevel: "B2",
          title: "Overcoming an Initial Misconception Through Evidence",
          prompt:
            "Describe an initial assumption or misconception you once held about an academic subject, historical period, or professional field that changed after you examined primary evidence or gained hands-on experience. Explain what changed your perspective.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–12s (Initial Misconception): State what you used to assume using a past modal ('I used to think X must have been...').",
            "12–32s (Turning Point & Evidence): Describe the specific seminar, archival source, or lab project that disproved that assumption.",
            "32–45s (Intellectual Lesson): Explain how that shift improved the way you evaluate evidence today.",
          ],
          keyPhrasesB2: [
            "Before taking an introductory anthropology seminar, I assumed that...",
            "Looking back, I should have questioned...",
            "Examining primary archaeological maps proved that ancient communities must have...",
            "That experience taught me never to equate simplicity of materials with...",
          ],
          selfRubricChecklistEs: [
            "Presenté desde el inicio una suposición académica o profesional concreta en lugar de hablar en abstracto.",
            "Expliqué con un ejemplo específico qué evidencia primaria o experiencia práctica transformó mi postura.",
            "Incorporé con naturalidad al menos un modal perfecto ('must have...', 'should have...') bien articulado.",
            "Completé la reflexión dentro de los 45 segundos sin cortes abruptos ni silencios largos.",
          ],
          modelTranscriptB2:
            "Before taking an environmental history seminar in my sophomore year, I assumed that pre-industrial farming communities in tropical regions must have lived in tiny, isolated villages with minimal engineering skill. Looking back, I should have questioned that stereotype sooner. When our professor assigned recent LiDAR elevation studies from the Amazon basin, the bare-earth maps revealed kilometers of raised agricultural fields, straight causeways, and engineered reservoirs built entirely from earth and charcoal-enriched soil. Seeing that data firsthand taught me that technological sophistication doesn't require steel or stone monuments; it often lies in adapting sustainably to local ecology.",
        },
        {
          part: "part2_opinion",
          id: "d05-speak-p2",
          cefrLevel: "B2",
          title: "Restricting Physical Tourism at Fragile Archaeological Monuments",
          prompt:
            "Many ancient cave paintings, temples, and archaeological sites suffer rapid deterioration caused by humidity, carbon dioxide, and foot traffic from mass tourism. Conservation scientists argue that governments should close fragile interiors to the general public and offer high-definition virtual-reality replicas at nearby visitor centers instead. Tourism officials counter that in-person access to authentic monuments is essential to fund conservation and sustain local economies. Which approach do you support, and why?",
          audioPrompt: {
            trackId: "day05-speaking-p2",
            audioUrl: "/audio/day05-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-US-GuyNeural",
                text: "Many ancient cave paintings, temples, and archaeological sites suffer rapid deterioration caused by humidity, carbon dioxide, and foot traffic from mass tourism. Conservation scientists argue that governments should close fragile interiors to the general public and offer high-definition virtual-reality replicas at nearby visitor centers instead. Tourism officials counter that in-person access to authentic monuments is essential to fund conservation and sustain local economies. Which approach do you support, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Clear Position): Support restricting physical entry to irreplaceable fragile interiors while deploying immersive replicas nearby.",
            "12–30s (Concession + Economic Rebuttal): Acknowledge local tourism jobs, then show why destroying the monument kills long-term revenue anyway.",
            "30–50s (Concrete Model + Subjunctive): Cite cave/tomb replicas (like Lascaux) and insist that ticket revenue fund local guides.",
            "50–60s (Decisive Conclusion): Reaffirm preservation over short-term foot traffic.",
          ],
          keyPhrasesB2: [
            "When irreplaceable heritage is at stake, it is imperative that governments restrict physical entry...",
            "While local officials understandably worry about ticket revenue...",
            "Once moisture and microbial growth erase ancient pigments, neither conservation grants nor tourism can restore them.",
            "Full-scale physical and virtual replicas nearby sustain local employment while keeping the original site intact.",
          ],
          selfRubricChecklistEs: [
            "Adopté una postura firme desde los primeros segundos frente al dilema entre conservación y turismo presencial.",
            "Abordé explícitamente el argumento económico de las autoridades turísticas y lo refuté con visión de largo plazo.",
            "Incluí al menos una cláusula mandativa ('it is imperative that...') o concordancia precisa en estructuras complejas.",
            "Cerré la intervención antes de cumplirse los 60 segundos con prosodia clara y ritmo fluido.",
          ],
          modelTranscriptB2:
            "When irreplaceable archaeological interiors are threatened by irreversible decay, I strongly believe that governments should close fragile chambers to mass foot traffic and invest in high-definition replicas at adjacent visitor centers. While tourism officials understandably worry about local jobs and ticket revenue, allowing thousands of daily visitors to exhale moisture onto ancient pigments destroys the very asset that attracts travelers in the first place. Prehistoric caves in France and painted tombs in Egypt have already proven that visitors willingly pay to explore full-scale physical and virtual reconstructions next to the site, especially when guided by local historians. Therefore, it is imperative that heritage ministries protect original monuments for scientific study while channeling visitor-center fees directly into surrounding communities.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Resolví los 10 reactivos de Grammar en menos de 8 minutos diferenciando 'must/could not/should have + V3', subjuntivo mandativo y 'the number of' vs. 'a number of'.",
    "Escuché las 3 partes de Listening en una sola reproducción estricta identificando el protocolo 3D en Part 2 y la tesis del LiDAR amazónico en Part 3.",
    "Completé ambos pasajes de Reading en menos de 20 minutos acertando la inserción en `[C]` y las dos preguntas de síntesis.",
    "Redacté la nota archivística (50–75 palabras) y el ensayo sobre repatriación (175–225 palabras) sin corrector ortográfico usando subjuntivo y modales perfectos.",
    "Grabé mis respuestas de Speaking Part 1 (45s) y Part 2 (60s) verificando fluidez, gramática B2 y cierre dentro del límite oficial.",
  ],
};
