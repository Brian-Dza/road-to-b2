import type { RoadmapDay } from "../../schemas/curriculum.schema.ts";

export const day08: RoadmapDay = {
  dayNumber: 8,
  sprintNumber: 2,
  cefrLevel: "B2",
  title: "Official Midpoint Mock Exam #1 & Gap Diagnosis",
  subtitleEs:
    "Simulacro Intermedio Oficial #1 de 80 minutos exactos + 60 minutos de auditoría diagnóstica de brechas B2",
  b2FocusSummaryEs:
    "El Día 8 reproduce sin pausas las cinco secciones cronometradas del examen oficial iTEP Academic-Plus (80 minutos exactos de reloj: 10 min Grammar, 20 min Listening de reproducción única, 20 min Reading, 25 min Writing sin corrector y 5 min Speaking). Al concluir el bloque continuo, los 60 minutos restantes se dedican a clasificar cada fallo en tres categorías accionables —brecha morfosintáctica, trampa léxico-pragmática o fatiga de gestión de tiempo— para calibrar la segunda mitad del Bootcamp hacia un puntaje seguro de 3.8 a 4.4.",
  estimatedMinutes: 140,
  isMockExamDay: true,
  mockExamId: "mock-mid-day08",
  sections: {
    // =========================================================================
    // 1. GRAMMAR (10 min official timer / 25 questions + 15 min error audit)
    // =========================================================================
    grammar: {
      skill: "grammar",
      cefrLevel: "B2",
      title: "Official iTEP Grammar Simulation: 25 Full-Spectrum B2 Items",
      estimatedMinutes: 25,
      timeLimitSeconds: 600,
      focusSummaryEs:
        "Administra los 10 minutos oficiales a un ritmo disciplinado: dedica un máximo de 20 segundos por reactivo en Part 1 (q01–q13) para reservar 28 segundos de inspección estructural en Part 2 (q14–q25). Durante la revisión diagnóstica posterior, registra qué familias sintácticas (inversión, subjuntivo, paralelismo, cláusulas reducidas o concordancia lejana) concentraron tus dudas.",
      questions: [
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q01",
          cefrLevel: "B2",
          grammarTopic: "Negative Adverbial Inversion with 'Not until'",
          sentenceWithBlank:
            "Not until the orbital spectrometer was recalibrated in late October _____ the seasonal methane plumes above the permafrost basin.",
          options: [
            {
              id: "A",
              text: "climatologists detected",
              explanationEs:
                "Incorrecto: cuando una cláusula temporal encabezada por 'Not until' se adelanta al inicio de la oración, la cláusula principal exige inversión sujeto-auxiliar obligatoria.",
            },
            {
              id: "B",
              text: "did climatologists detect",
              explanationEs:
                "Correcto: tras el sintagma restrictivo inicial 'Not until... October', el verbo principal en pasado simple invierte su orden mediante el auxiliar 'did' seguido del sujeto y el infinitivo sin 'to' ('did climatologists detect').",
            },
            {
              id: "C",
              text: "had detected climatologists",
              explanationEs:
                "Incorrecto: coloca el participio pasado antes del sujeto en un orden agramatical y emplea Past Perfect injustificadamente para un evento posterior a la recalibración.",
            },
            {
              id: "D",
              text: "that climatologists detected",
              explanationEs:
                "Incorrecto: confunde la inversión de 'Not until...' con la estructura escindida 'It was not until ... that ...'; sin 'It was' inicial, introducir 'that' deja la oración sin cláusula matriz válida.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Distingue al instante entre 'It was not until X that S + V' (sin inversión) y 'Not until X + Aux + S + V' (con inversión obligatoria en la cláusula principal).",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q02",
          cefrLevel: "B2",
          grammarTopic: "Mandative Subjunctive Passive in Institutional Protocols",
          sentenceWithBlank:
            "Federal bioethics guidelines stipulate that every clinical trial amendment _____ approved by an independent oversight board before patient recruitment resumes.",
          options: [
            {
              id: "A",
              text: "is",
              explanationEs:
                "Incorrecto: el verbo directivo 'stipulate that' exige modo subjuntivo mandativo (forma base invariable), no presente indicativo.",
            },
            {
              id: "B",
              text: "to be",
              explanationEs:
                "Incorrecto: una cláusula subordinada introducida por la conjunción 'that' requiere un núcleo verbal finito o subjuntivo, nunca un infinitivo con 'to'.",
            },
            {
              id: "C",
              text: "be",
              explanationEs:
                "Correcto: tras verbos y adjetivos de mandato académico ('stipulate', 'mandate', 'imperative'), el subjuntivo pasivo se construye con la forma base invariable 'be' + participio pasado ('be approved').",
            },
            {
              id: "D",
              text: "has been",
              explanationEs:
                "Incorrecto: el Present Perfect indicativo contradice el valor prospectivo y obligatorio que impone el verbo 'stipulate'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Ante verbos regulatorios seguidos de 'that' ('stipulate', 'require', 'insist', 'recommend'), selecciona siempre la raíz pura del verbo ('be', 'submit', 'not exceed') sin flexión de tercera persona ni tiempo.",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q03",
          cefrLevel: "B2",
          grammarTopic: "Inverted Mixed Conditional (Past Cause, Present Result)",
          sentenceWithBlank:
            "Had the municipal water authority replaced its cast-iron mains two decades ago, downtown districts _____ chronic pressure drops today.",
          options: [
            {
              id: "A",
              text: "would not have experienced",
              explanationEs:
                "Incorrecto: 'would not have experienced' expresa una consecuencia concluida en el pasado, incompatible con el marcador de presente actual 'today'.",
            },
            {
              id: "B",
              text: "will not experience",
              explanationEs:
                "Incorrecto: combina un futuro real indicativo ('will') con una prótasis contrafactual pasada invertida ('Had the ... authority replaced').",
            },
            {
              id: "C",
              text: "did not experience",
              explanationEs:
                "Incorrecto: el pasado simple carece del matiz hipotético modal indispensable en la apódosis de un condicional contrafactual.",
            },
            {
              id: "D",
              text: "would not be experiencing",
              explanationEs:
                "Correcto: condicional mixto donde una condición irreal en el pasado ('Had ... replaced') proyecta un efecto continuo en el presente ('would not be experiencing ... today').",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Revisa siempre el adverbio temporal al final de la oración condicional: si la causa es pasada ('Had + participio') pero el cierre dice 'now' o 'today', usa 'would (not) + verbo base / be -ing'.",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q04",
          cefrLevel: "B2",
          grammarTopic: "Past Modals of Logical Deduction",
          sentenceWithBlank:
            "The recovered amphorae showed zero marine encrustation, indicating that deep anoxic sediments _____ sealed the shipwreck almost immediately after it sank.",
          options: [
            {
              id: "A",
              text: "must have",
              explanationEs:
                "Correcto: 'must have + participio' expresa una deducción lógica de alta certeza sobre un evento pasado a partir de evidencia empírica presente ('showed zero marine encrustation').",
            },
            {
              id: "B",
              text: "should have",
              explanationEs:
                "Incorrecto: 'should have + participio' denota reproche o expectativa incumplida ('deberían haber sellado, pero no lo hicieron'), lo cual contradice la evidencia arqueológica.",
            },
            {
              id: "C",
              text: "had better have",
              explanationEs:
                "Incorrecto: construcción de advertencia coloquial inadecuada para deducción científica retrospectiva.",
            },
            {
              id: "D",
              text: "would rather have",
              explanationEs:
                "Incorrecto: expresa preferencia personal contrafactual, absurda con un sujeto inanimado ('deep anoxic sediments').",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Cuando la oración presenta evidencia científica ('indicating that', 'proving that') para inferir qué ocurrió con certeza en el pasado, emplea 'must have + past participle' (afirmativo) o 'cannot/could not have + past participle' (negativo).",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q05",
          cefrLevel: "B2",
          grammarTopic: "Quantifier + Prepositional Relative Pronouns",
          sentenceWithBlank:
            "The international consortium audited forty-two desalination facilities, _____ exceeded the energy-efficiency benchmarks established in 2021.",
          options: [
            {
              id: "A",
              text: "barely six of them",
              explanationEs:
                "Incorrecto: el pronombre personal 'them' no puede enlazar dos cláusulas independientes separadas únicamente por una coma (provoca 'comma splice').",
            },
            {
              id: "B",
              text: "only six of which",
              explanationEs:
                "Correcto: 'cuantificador + of which' ('only six of which') introduce legítimamente una cláusula relativa explicativa subordinada al antecedente inanimado 'facilities'.",
            },
            {
              id: "C",
              text: "of which only six they",
              explanationEs:
                "Incorrecto: duplica el sujeto de 'exceeded' al combinar el sintagma relativo con el pronombre redundante 'they'.",
            },
            {
              id: "D",
              text: "only six of that",
              explanationEs:
                "Incorrecto: el relativo 'that' no admite preposición antepuesta ('*of that') ni encabeza cláusulas explicativas tras coma.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Tras una coma sin conjunción coordinante ('and', 'but'), elige siempre 'most/several/none of which' (cosas) o 'of whom' (personas), descartando de inmediato 'of them'.",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q06",
          cefrLevel: "B2",
          grammarTopic: "Correlative Temporal Inversion ('Scarcely ... when')",
          sentenceWithBlank:
            "Scarcely had the central bank announced its bond-purchasing taper _____ long-term mortgage yields surged across commercial lending markets.",
          options: [
            {
              id: "A",
              text: "than",
              explanationEs:
                "Incorrecto: 'than' forma pareja correlativa exclusivamente con el comparativo 'No sooner ... than', nunca con 'Scarcely' ni 'Hardly'.",
            },
            {
              id: "B",
              text: "that",
              explanationEs:
                "Incorrecto: 'Scarcely had...' exige un nexo temporal correlativo preciso ('when' o 'before'), no la conjunción nominal 'that'.",
            },
            {
              id: "C",
              text: "when",
              explanationEs:
                "Correcto: los adverbios restrictivos 'Scarcely' y 'Hardly' seguidos de Past Perfect invertido se correlacionan obligatoriamente con 'when' (o 'before').",
            },
            {
              id: "D",
              text: "after",
              explanationEs:
                "Incorrecto: rompe el significado de inmediatez sucesiva ('apenas había anunciado... cuando subieron') propio de la correlación fija 'Scarcely ... when'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Memoriza los dos pares correlativos exactos de inversión temporal en iTEP: 'No sooner ... than' (comparativo) frente a 'Hardly / Scarcely ... when'.",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q07",
          cefrLevel: "B2",
          grammarTopic: "Perfective Passive Participial Clauses",
          sentenceWithBlank:
            "_____ to three independent blind-replication trials without losing catalytic stability, the enzyme synthesis protocol was cleared for industrial scaling.",
          options: [
            {
              id: "A",
              text: "Having subjected",
              explanationEs:
                "Incorrecto: forma activa que implicaría que el protocolo sometió a otro objeto a los ensayos, cuando en realidad el protocolo recibió la acción.",
            },
            {
              id: "B",
              text: "Subjecting",
              explanationEs:
                "Incorrecto: participio presente activo que atribuye erróneamente agencia activa a 'the enzyme synthesis protocol'.",
            },
            {
              id: "C",
              text: "To have subjected",
              explanationEs:
                "Incorrecto: infinitivo perfecto activo que además sugiere finalidad inapropiada y voz incorrecta respecto al sujeto pasivo matriz.",
            },
            {
              id: "D",
              text: "Having been subjected",
              explanationEs:
                "Correcto: cláusula participial perfecta pasiva que indica una acción previa recibida por el sujeto de la oración principal ('the enzyme synthesis protocol').",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Verifica siempre quién es el sujeto tras la coma: si ese sustantivo recibió la acción antes del verbo principal, necesitas 'Having been + participio pasado' (o directamente el participio pasado).",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q08",
          cefrLevel: "B2",
          grammarTopic: "Concessive Adverbials Modifying Adjectives ('However + Adj')",
          sentenceWithBlank:
            "_____ mathematically elegant a macroeconomic forecasting model may appear, its policy value vanishes if household survey inputs are systematically skewed.",
          options: [
            {
              id: "A",
              text: "However",
              explanationEs:
                "Correcto: seguido directamente de un adjetivo o adverbio ('However mathematically elegant + S + V'), 'However' equivale a 'No matter how' e introduce una concesión formal B2.",
            },
            {
              id: "B",
              text: "Despite",
              explanationEs:
                "Incorrecto: 'Despite' es una preposición que rige exclusivamente sintagmas nominales o gerundios ('Despite its mathematical elegance'), nunca cláusulas finitas con 'may appear'.",
            },
            {
              id: "C",
              text: "Whatever",
              explanationEs:
                "Incorrecto: 'Whatever' modifica sustantivos ('Whatever elegance...') o funciona como pronombre nominal, pero no puede intensificar la frase adjetival 'mathematically elegant'.",
            },
            {
              id: "D",
              text: "Although",
              explanationEs:
                "Incorrecto: 'Although' exige orden canónico 'Although + Sujeto + Verbo + Adjetivo' ('Although a model may appear mathematically elegant'), sin adelantar el predicado adjetival.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Si justo después del espacio aparece un adjetivo o adverbio adelantado antes del sujeto ('_____ [adj/adv] + S + V'), la respuesta exacta es 'However' (o 'No matter how').",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q09",
          cefrLevel: "B2",
          grammarTopic: "Prepositional Gerund Passive Complement ('prevent ... from being')",
          sentenceWithBlank:
            "Low-oxygen argon display cases prevented the thirteenth-century parchment charters _____ degraded by fluctuating gallery humidity.",
          options: [
            {
              id: "A",
              text: "to be",
              explanationEs:
                "Incorrecto: en inglés estándar el verbo 'prevent' jamás se construye con infinitivo ('*prevent X to be'); exige régimen preposicional con 'from + -ing'.",
            },
            {
              id: "B",
              text: "from being",
              explanationEs:
                "Correcto: respeta la colocación 'prevent + objeto + from + gerundio' combinada con voz pasiva ('being degraded'), ya que los pergaminos sufren la degradación.",
            },
            {
              id: "C",
              text: "of becoming",
              explanationEs:
                "Incorrecto: emplea la preposición errónea 'of' por interferencia románica ('evitar/impedir de') en lugar de 'from'.",
            },
            {
              id: "D",
              text: "from having",
              explanationEs:
                "Incorrecto: 'having degraded' formaría un gerundio compuesto activo ('haber degradado algo'), invirtiendo el sentido pasivo requerido por 'by fluctuating gallery humidity'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Verbos de impedimento como 'prevent', 'prohibit', 'deter' y 'keep' exigen 'objeto + from + -ing' (o 'from being + participio' si el objeto recibe la acción).",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q10",
          cefrLevel: "B2",
          grammarTopic: "Pseudo-Cleft Nominal Subject Clauses ('What ... is')",
          sentenceWithBlank:
            "_____ differentiates resilient mangrove coastlines from rigid concrete seawalls is their ability to accrete sediment organically as sea levels rise.",
          options: [
            {
              id: "A",
              text: "That",
              explanationEs:
                "Incorrecto: la conjunción nominal 'That' solo encabeza cláusulas internamente completas, pero 'differentiates resilient mangrove coastlines...' carece de sujeto propio.",
            },
            {
              id: "B",
              text: "Which",
              explanationEs:
                "Incorrecto: 'Which' sin sustantivo ni antecedente previo no puede encabezar una cláusula pseudo-escindida de énfasis en inglés académico.",
            },
            {
              id: "C",
              text: "What",
              explanationEs:
                "Correcto: 'What' ('lo que') actúa simultáneamente como sujeto interno de 'differentiates' y como núcleo de toda la cláusula nominal sujeto del verbo singular 'is'.",
            },
            {
              id: "D",
              text: "It is what",
              explanationEs:
                "Incorrecto: al añadir 'It is' al inicio y mantener otro 'is' más adelante ('... seawalls is their ability'), genera una doble cópula sin nexo relativo.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Comprueba si el verbo inmediatamente posterior al espacio carece de sujeto y más adelante aparece 'is/was': esa arquitectura pseudo-escindida pide 'What'.",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q11",
          cefrLevel: "B2",
          grammarTopic: "Inverted Second Conditional ('Were + S + to-infinitive')",
          sentenceWithBlank:
            "_____ Atlantic thermohaline circulation to weaken substantially this century, winter precipitation patterns across Western Europe would shift dramatically.",
          options: [
            {
              id: "A",
              text: "Should",
              explanationEs:
                "Incorrecto: la inversión condicional con 'Should' exige verbo base sin 'to' ('Should ... circulation weaken'), por lo que choca gramaticalmente con 'to weaken'.",
            },
            {
              id: "B",
              text: "If",
              explanationEs:
                "Incorrecto: tras 'If' se requiere un verbo finito conjugado ('If ... circulation weakened / were to weaken'), nunca un sujeto seguido únicamente del infinitivo 'to weaken'.",
            },
            {
              id: "C",
              text: "Had",
              explanationEs:
                "Incorrecto: 'Had' invertido exige participio pasado ('Had ... circulation weakened') o posesión nominal, no la construcción prospectiva hipotética 'to weaken'.",
            },
            {
              id: "D",
              text: "Were",
              explanationEs:
                "Correcto: en registro formal B2/C1, 'If + S + were to + verbo' omite 'If' e invierte 'Were' al inicio ('Were Atlantic thermohaline circulation to weaken...').",
            },
          ],
          correctOptionId: "D",
          strategyTipEs:
            "Fíjate en la forma verbal que sigue al sujeto en condicionales invertidos: 'Should + S + verbo base', 'Were + S + to + verbo base', 'Had + S + participio pasado'.",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q12",
          cefrLevel: "B2",
          grammarTopic: "Direct Contrast Subordinators ('Whereas')",
          sentenceWithBlank:
            "_____ conventional lithium-ion cells rely on flammable liquid electrolytes, next-generation solid-state architectures employ non-volatile ceramic separators.",
          options: [
            {
              id: "A",
              text: "Whereas",
              explanationEs:
                "Correcto: conjunción subordinante que articula un contraste simétrico directo entre dos cláusulas completas ('conventional cells' frente a 'solid-state architectures').",
            },
            {
              id: "B",
              text: "Contrary to",
              explanationEs:
                "Incorrecto: locución preposicional que solo admite un grupo nominal ('Contrary to conventional lithium-ion cells, ...'), nunca una cláusula conjugada con 'rely'.",
            },
            {
              id: "C",
              text: "Nevertheless",
              explanationEs:
                "Incorrecto: es un adverbio conjuntivo de oración independiente, incapaz de subordinar sintácticamente la primera cláusula a la segunda mediante una sola coma.",
            },
            {
              id: "D",
              text: "Notwithstanding",
              explanationEs:
                "Incorrecto: como preposición exige sintagma nominal sin verbo finito; además expresa concesión ('a pesar de') en vez de contraste estructural paralelo.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Antes de elegir un conector de contraste, verifica si le sigue un sustantivo solo ('Unlike', 'Contrary to') o Sujeto + Verbo + coma + Sujeto + Verbo ('Whereas', 'While').",
        },
        {
          part: "part1_fill_blank",
          id: "d08-gram-p1-q13",
          cefrLevel: "B2",
          grammarTopic: "Proportional Comparative Correlatives ('The more..., the more...')",
          sentenceWithBlank:
            "The more granular neighborhood air-quality telemetry becomes, _____ municipal health agencies can target asthma-prevention resources.",
          options: [
            {
              id: "A",
              text: "more precisely than",
              explanationEs:
                "Incorrecto: omite el artículo definido obligatorio 'the' de la estructura proporcional e introduce erróneamente 'than'.",
            },
            {
              id: "B",
              text: "the more precisely",
              explanationEs:
                "Correcto: completa la correlación comparativa proporcional 'The + comparativo..., the + comparativo...' con el adverbio 'precisely' modificando al verbo 'can target'.",
            },
            {
              id: "C",
              text: "the most precise",
              explanationEs:
                "Incorrecto: emplea grado superlativo ('most') en vez de comparativo y usa un adjetivo ('precise') donde se necesita un adverbio para modificar 'can target'.",
            },
            {
              id: "D",
              text: "so much precisely",
              explanationEs:
                "Incorrecto: combinación adverbial agramatical que rompe por completo el paralelismo correlativo iniciado por 'The more granular'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Toda oración que arranca con 'The + comparativo + S + V,' exige tras la coma exactamente otro 'the + comparativo' (adjetivo si acompaña a 'be', adverbio si modifica a un verbo de acción).",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q14",
          cefrLevel: "B2",
          grammarTopic: "Correlative Parallelism with 'not only ... but also'",
          sentenceWithMarkedSegments:
            "The revised fisheries treaty mandates not only [A]{monitoring} deep-water trawlers [B]{via satellite} transponders, [C]{but also to enforce} seasonal moratoria [D]{across spawning} grounds.",
          correctedSegment: "but also enforcing",
          options: [
            {
              id: "A",
              text: "monitoring",
              explanationEs:
                "Correcto en la oración: gerundio objeto directo legítimo del verbo 'mandates' tras el primer miembro correlativo 'not only'.",
            },
            {
              id: "B",
              text: "via satellite",
              explanationEs:
                "Correcto en la oración: frase preposicional instrumental ('mediante transpondedores satelitales') idiomática en prosa técnica.",
            },
            {
              id: "C",
              text: "but also to enforce",
              explanationEs:
                "Incorrecto (contiene el error): rompe el paralelismo correlativo con 'not only monitoring' (gerundio) al cambiar abruptamente a infinitivo ('to enforce'); debe ser 'but also enforcing'.",
            },
            {
              id: "D",
              text: "across spawning",
              explanationEs:
                "Correcto en la oración: preposición espacial seguida del modificador atributivo 'spawning' ('spawning grounds' = zonas de desove).",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "En pares correlativos ('not only X but also Y', 'both X and Y', 'either X or Y'), exige identidad categorial estricta entre X e Y (gerundio con gerundio, infinitivo con infinitivo, preposición con preposición).",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q15",
          cefrLevel: "B2",
          grammarTopic: "Subject-Verb Agreement with 'A [growing] number of' vs. 'The number of'",
          sentenceWithMarkedSegments:
            "[A]{A growing number} of longitudinal neuroimaging studies [B]{conducted across} bilingual cohorts [C]{demonstrates} that executive attention networks [D]{adapt dynamically} throughout adulthood.",
          correctedSegment: "demonstrate",
          options: [
            {
              id: "A",
              text: "A growing number",
              explanationEs:
                "Correcto en la oración: cuantificador plural idiomático ('Un número creciente de...') seguido de sustantivo contable plural.",
            },
            {
              id: "B",
              text: "conducted across",
              explanationEs:
                "Correcto en la oración: cláusula relativa pasiva reducida que modifica con precisión a 'studies'.",
            },
            {
              id: "C",
              text: "demonstrates",
              explanationEs:
                "Incorrecto (contiene el error): a diferencia de 'The number of...' (singular), la expresión cuantificadora 'A [growing] number of + sustantivo plural' exige siempre verbo en plural ('demonstrate').",
            },
            {
              id: "D",
              text: "adapt dynamically",
              explanationEs:
                "Correcto en la oración: verbo plural 'adapt' concordando con 'networks' y modificado apropiadamente por el adverbio 'dynamically'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Regla clásica de iTEP Part 2: 'The number of + plural' lleva verbo SINGULAR (habla de la cifra), mientras que 'A number of + plural' equivale a 'many' y lleva verbo PLURAL.",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q16",
          cefrLevel: "B2",
          grammarTopic: "Dangling Participial Modifier Resolution",
          sentenceWithMarkedSegments:
            "[A]{Engineered to withstand} crushing hydrostatic pressure, [B]{oceanographers deployed it} [C]{along the} Kermadec Trench [D]{during the} six-month expedition.",
          correctedSegment: "the autonomous submersible operated",
          options: [
            {
              id: "A",
              text: "Engineered to withstand",
              explanationEs:
                "Correcto en la oración: cláusula participial pasiva inicial bien formada para describir las especificaciones técnicas de un vehículo submarino.",
            },
            {
              id: "B",
              text: "oceanographers deployed it",
              explanationEs:
                "Incorrecto (contiene el error): coloca 'oceanographers' como sujeto inmediato tras la coma, provocando un modificador colgante absurdo (implicaría que los oceanógrafos fueron fabricados para resistir presión hidrostática) además de un 'it' sin antecedente; debe ser p. ej. 'the autonomous submersible operated'.",
            },
            {
              id: "C",
              text: "along the",
              explanationEs:
                "Correcto en la oración: locución preposicional locativa exacta para fosas tectónicas lineales ('along the Kermadec Trench').",
            },
            {
              id: "D",
              text: "during the",
              explanationEs:
                "Correcto en la oración: preposición temporal 'during' seguida de sintagma nominal definido.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Cuando una oración comienza con participio ('Engineered to...', 'Walking through...', 'Having analyzed...'), la primera frase nominal justo después de la coma DEBE ser la entidad descrita por ese participio.",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q17",
          cefrLevel: "B2",
          grammarTopic: "Demonstrative Pronoun Requirement in Parallel Comparisons ('those of')",
          sentenceWithMarkedSegments:
            "The thermal insulation properties [A]{of cross-laminated} timber panels [B]{are measurably} superior [C]{to conventional} poured concrete [D]{in mid-rise} residential construction.",
          correctedSegment: "to those of conventional",
          options: [
            {
              id: "A",
              text: "of cross-laminated",
              explanationEs:
                "Correcto en la oración: complemento preposicional y adjetivo compuesto que especifican el material cuyas propiedades se evalúan.",
            },
            {
              id: "B",
              text: "are measurably",
              explanationEs:
                "Correcto en la oración: verbo copulativo plural concordando con 'properties' y adverbio de grado ante 'superior'.",
            },
            {
              id: "C",
              text: "to conventional",
              explanationEs:
                "Incorrecto (contiene el error): compara ilógicamente 'properties' (propiedades) directamente con 'concrete' (el hormigón en sí); exige el pronombre demostrativo plural 'to those of conventional' ('a las del hormigón convencional').",
            },
            {
              id: "D",
              text: "in mid-rise",
              explanationEs:
                "Correcto en la oración: sintagma preposicional de ámbito arquitectónico correctamente articulado.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "Tras comparativos o adjetivos latinos ('superior to', 'higher than'), verifica que compares entidades equivalentes: usa 'that of' para antecedentes singulares y 'those of' para antecedentes plurales.",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q18",
          cefrLevel: "B2",
          grammarTopic: "Uncountable Academic Nouns",
          sentenceWithMarkedSegments:
            "Much of [A]{the empirical evidences} [B]{cited in} the antitrust ruling [C]{derives from} internal pricing spreadsheets [D]{subpoenaed} by federal regulators.",
          correctedSegment: "the empirical evidence",
          options: [
            {
              id: "A",
              text: "the empirical evidences",
              explanationEs:
                "Incorrecto (contiene el error): 'evidence' (al igual que 'research', 'information', 'equipment' y 'feedback') es estrictamente incontable en inglés académico; jamás admite plural con '-s' y por eso va precedido de 'Much of'.",
            },
            {
              id: "B",
              text: "cited in",
              explanationEs:
                "Correcto en la oración: participio pasado pasivo reducido que modifica al núcleo nominal.",
            },
            {
              id: "C",
              text: "derives from",
              explanationEs:
                "Correcto en la oración: verbo singular en concordancia con el cuantificador incontable 'Much of...' y régimen preposicional exacto ('derive from').",
            },
            {
              id: "D",
              text: "subpoenaed",
              explanationEs:
                "Correcto en la oración: participio pasado jurídico ('requeridas judicialmente') que modifica legítimamente a 'spreadsheets'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Cuidado con los falsos contables para hispanohablantes en iTEP: 'evidence', 'research', 'knowledge', 'machinery', 'legislation' y 'advice' nunca llevan '-s' final ni artículo 'a/an'.",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q19",
          cefrLevel: "B2",
          grammarTopic: "Adjective vs. Adverb Morphology Modifying Action Verbs",
          sentenceWithMarkedSegments:
            "Although the ceramic membrane [A]{remained chemically stable} at ambient pressure, its filtration throughput [B]{declined considerable} [C]{when exposed} [D]{to hypersaline} brine.",
          correctedSegment: "declined considerably",
          options: [
            {
              id: "A",
              text: "remained chemically stable",
              explanationEs:
                "Correcto en la oración: tras el verbo copulativo 'remained' corresponde el adjetivo predicativo 'stable', modificado a su vez por el adverbio 'chemically'.",
            },
            {
              id: "B",
              text: "declined considerable",
              explanationEs:
                "Incorrecto (contiene el error): 'declined' es un verbo intransitivo de acción/proceso, no un verbo copulativo, por lo que requiere modificación adverbial ('declined considerably') en lugar del adjetivo 'considerable'.",
            },
            {
              id: "C",
              text: "when exposed",
              explanationEs:
                "Correcto en la oración: cláusula temporal pasiva elíptica ('when [it was] exposed') estándar en redacción científica.",
            },
            {
              id: "D",
              text: "to hypersaline",
              explanationEs:
                "Correcto en la oración: preposición exigida por 'exposed to' seguida del adjetivo técnico 'hypersaline'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Distingue verbos de estado copulativos ('remain/prove/become + adjetivo') de verbos de cambio cuantitativo ('decline/increase/fluctuate + adverbio en -ly').",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q20",
          cefrLevel: "B2",
          grammarTopic: "Mandative Subjunctive Inflection Error",
          sentenceWithMarkedSegments:
            "The external audit committee [A]{recommended that} the university endowment [B]{diversifies} its infrastructure portfolio [C]{rather than} [D]{relying exclusively} on domestic equities.",
          correctedSegment: "diversify",
          options: [
            {
              id: "A",
              text: "recommended that",
              explanationEs:
                "Correcto en la oración: verbo directivo que activa obligatoriamente el modo subjuntivo en la cláusula completiva siguiente.",
            },
            {
              id: "B",
              text: "diversifies",
              explanationEs:
                "Incorrecto (contiene el error): tras 'recommended that', el verbo subordinado debe ir en subjuntivo mandativo sin '-s' de tercera persona ('diversify'), aunque 'endowment' sea singular.",
            },
            {
              id: "C",
              text: "rather than",
              explanationEs:
                "Correcto en la oración: conector de contraste preferencial apropiadamente articulado.",
            },
            {
              id: "D",
              text: "relying exclusively",
              explanationEs:
                "Correcto en la oración: forma en '-ing' aceptada tras 'rather than' con el adverbio 'exclusively' bien posicionado antes de 'on'.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Si en Part 2 detectas 'recommended that', 'insisted that', 'proposed that' o 'essential that', verifica de inmediato el verbo siguiente: cualquier terminación '-s' o '-ed' es el error.",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q21",
          cefrLevel: "B2",
          grammarTopic: "Formal Lexical Usage ('comprise' vs. '*is comprised of')",
          sentenceWithMarkedSegments:
            "The watershed governance panel [A]{is comprised of} fourteen hydrologists [B]{whose fieldwork} [C]{spans} three transboundary river basins [D]{experiencing severe} salinization.",
          correctedSegment: "comprises",
          options: [
            {
              id: "A",
              text: "is comprised of",
              explanationEs:
                "Incorrecto (contiene el error): en gramática académica normativa evaluada en exámenes estandarizados, 'comprise' significa 'constar de / abarcar' en voz activa ('comprises fourteen hydrologists') y rechaza la construcción híbrida '*is comprised of' (debe ser 'comprises' o 'is composed of').",
            },
            {
              id: "B",
              text: "whose fieldwork",
              explanationEs:
                "Correcto en la oración: pronombre relativo posesivo 'whose' enlazando 'hydrologists' con el sustantivo incontable 'fieldwork'.",
            },
            {
              id: "C",
              text: "spans",
              explanationEs:
                "Correcto en la oración: verbo transitivo en tercera persona singular concordando con 'fieldwork'.",
            },
            {
              id: "D",
              text: "experiencing severe",
              explanationEs:
                "Correcto en la oración: cláusula participial activa reducida ('[which are] experiencing severe salinization') que modifica a 'river basins'.",
            },
          ],
          correctOptionId: "A",
          strategyTipEs:
            "Recuerda la ecuación léxica formal: 'The whole comprises the parts' = 'The whole consists of the parts' = 'The whole is composed of the parts' (nunca '*is comprised of' ni '*consists in' para partes).",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q22",
          cefrLevel: "B2",
          grammarTopic: "Past Perfect Requirement with 'By the time + Past Simple'",
          sentenceWithMarkedSegments:
            "[A]{By the time} international mediators [B]{convened} the basin-sharing summit in 1997, agricultural aquifers [C]{have already lost} nearly forty percent [D]{of their} natural recharge capacity.",
          correctedSegment: "had already lost",
          options: [
            {
              id: "A",
              text: "By the time",
              explanationEs:
                "Correcto en la oración: locución conjuntiva de límite temporal retrospectivo.",
            },
            {
              id: "B",
              text: "convened",
              explanationEs:
                "Correcto en la oración: Past Simple coherente con la fecha cerrada 'in 1997'.",
            },
            {
              id: "C",
              text: "have already lost",
              explanationEs:
                "Incorrecto (contiene el error): como el punto de referencia ('convened ... in 1997') pertenece al pasado concluido, una pérdida ocurrida con anterioridad a ese hito exige Past Perfect ('had already lost'), jamás Present Perfect.",
            },
            {
              id: "D",
              text: "of their",
              explanationEs:
                "Correcto en la oración: posesivo plural 'their' refiriéndose inequívocamente a 'agricultural aquifers'.",
            },
          ],
          correctOptionId: "C",
          strategyTipEs:
            "En cuanto leas 'By the time + S + verbo en pasado' o 'By + año pasado (e.g., By 1997)', busca Past Perfect ('had + participio') en la cláusula principal.",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q23",
          cefrLevel: "B2",
          grammarTopic: "Objective Pronoun Case in Compound Prepositional Phrases",
          sentenceWithMarkedSegments:
            "Confidential calibration logs were circulated [A]{solely between} the principal investigator and [B]{I} [C]{prior to} publishing [D]{the laboratory's} spectroscopy findings.",
          correctedSegment: "me",
          options: [
            {
              id: "A",
              text: "solely between",
              explanationEs:
                "Correcto en la oración: adverbio restrictivo 'solely' modificando a la preposición dual 'between'.",
            },
            {
              id: "B",
              text: "I",
              explanationEs:
                "Incorrecto (contiene el error): toda preposición ('between', 'among', 'except', 'for') rige caso oblicuo/objetivo en todos sus términos coordinados ('between the principal investigator and me'), nunca el pronombre sujeto 'I'.",
            },
            {
              id: "C",
              text: "prior to",
              explanationEs:
                "Correcto en la oración: locución preposicional formal equivalente a 'before', seguida correctamente del gerundio 'publishing'.",
            },
            {
              id: "D",
              text: "the laboratory's",
              explanationEs:
                "Correcto en la oración: genitivo sajón singular apropiado para una institución científica.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Cuidado con la hipercorrección 'between X and I': tras cualquier preposición, ambos elementos coordinados deben ir en caso objeto ('me', 'him', 'her', 'us', 'them').",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q24",
          cefrLevel: "B2",
          grammarTopic: "Transitive vs. Intransitive Verb Pairs ('raise' vs. 'rise')",
          sentenceWithMarkedSegments:
            "[A]{Persistent} subsurface warming [B]{has risen} ocean temperatures [C]{along the} Antarctic continental shelf, [D]{accelerating} basal ice-sheet melt.",
          correctedSegment: "has raised",
          options: [
            {
              id: "A",
              text: "Persistent",
              explanationEs:
                "Correcto en la oración: adjetivo atributivo que califica al núcleo nominal gerundial 'warming'.",
            },
            {
              id: "B",
              text: "has risen",
              explanationEs:
                "Incorrecto (contiene el error): 'rise / rose / risen' es estrictamente intransitivo y no admite objeto directo; al existir el objeto directo 'ocean temperatures', debe emplearse el verbo transitivo 'raise / raised / raised' ('has raised').",
            },
            {
              id: "C",
              text: "along the",
              explanationEs:
                "Correcto en la oración: preposición espacial precisa para la plataforma continental.",
            },
            {
              id: "D",
              text: "accelerating",
              explanationEs:
                "Correcto en la oración: cláusula participial consecutiva ('lo cual acelera...') que expresa el efecto directo de la cláusula principal.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Revisa siempre si detrás de 'rise/raise', 'lie/lay' o 'sit/set' hay un objeto directo nominal: con objeto directo necesitas obligatoriamente 'raise', 'lay' o 'set'.",
        },
        {
          part: "part2_error_identification",
          id: "d08-gram-p2-q25",
          cefrLevel: "B2",
          grammarTopic: "Missing Auxiliary Inversion After Initial 'Seldom'",
          sentenceWithMarkedSegments:
            "[A]{Seldom} [B]{archival historians encounter} diplomatic ciphers [C]{as intricately constructed} as the sixteenth-century Venetian dispatches [D]{housed in} Simancas.",
          correctedSegment: "do archival historians encounter",
          options: [
            {
              id: "A",
              text: "Seldom",
              explanationEs:
                "Correcto en la oración: adverbio de frecuencia cuasi-negativa legítimo en posición enfática inicial.",
            },
            {
              id: "B",
              text: "archival historians encounter",
              explanationEs:
                "Incorrecto (contiene el error): al situarse 'Seldom' al inicio absoluto de la oración, el inglés formal exige inversión auxiliar obligatoria ('Seldom do archival historians encounter...').",
            },
            {
              id: "C",
              text: "as intricately constructed",
              explanationEs:
                "Correcto en la oración: estructura comparativa de igualdad 'as + adverbio + participio + as' impecablemente formada.",
            },
            {
              id: "D",
              text: "housed in",
              explanationEs:
                "Correcto en la oración: participio pasado pasivo reducido ('[which are] housed in') que indica la ubicación archivística de los despachos.",
            },
          ],
          correctOptionId: "B",
          strategyTipEs:
            "Cuando una oración de Part 2 abre con 'Seldom', 'Rarely', 'Never', 'Little' o 'Only by...', comprueba de inmediato que el primer segmento verbal tenga estructura 'Auxiliar + Sujeto + Verbo'.",
        },
      ],
    },

    // =========================================================================
    // 2. LISTENING (20 min official timer / strict single playback + 15 min review)
    // =========================================================================
    listening: {
      skill: "listening",
      cefrLevel: "B2",
      title:
        "Official iTEP Listening Simulation: Campus Pragmatics, Registrar Audit & Geothermal Systems",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Simula las condiciones reales del centro evaluador: escucha cada pista una única vez sin retroceder, toma notas telegráficas con flechas causales (máximo 12–15 palabras por diálogo largo y 35 palabras en la cátedra de Geología) y presta especial atención a matices condicionales y límites operativos.",
      items: [
        {
          part: "part1_short_dialogue",
          id: "d08-list-p1a",
          title: "Nanofabrication Cleanroom Access Lockout",
          cefrLevel: "B2",
          audio: {
            trackId: "day08-listening-p1a",
            audioUrl: "/audio/day08-listening-p1a.mp3",
            contextSetup:
              "A doctoral researcher speaks with the laboratory facilities coordinator outside the cleanroom suite.",
            turns: [
              {
                speakerLabel: "Researcher",
                voice: "en-US-GuyNeural",
                text: "Excuse me, Ms. Patel—my university ID badge keeps flashing amber at the cleanroom airlock, even though I renewed my chemical-safety certification on Tuesday.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-AvaMultilingualNeural",
                text: "Campus security pushed a firmware update to the card readers overnight, and anyone whose safety renewal was processed within the past forty-eight hours didn't carry over into the morning sync.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Researcher",
                voice: "en-US-GuyNeural",
                text: "Oh no—my silicon wafers are already in the thermal furnace for a timed two-hour anneal.",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Coordinator",
                voice: "en-US-AvaMultilingualNeural",
                text: "Don't worry; hand me your lab notebook so I can log your batch number, and I'll issue you a temporary override keycard while IT runs a manual patch.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d08-list-p1a-q01",
              prompt: "Why was the researcher unable to enter the cleanroom with his ID badge?",
              options: [
                {
                  id: "A",
                  text: "His annual chemical-safety certification had expired two days earlier.",
                  explanationEs:
                    "Incorrecto: el investigador afirma que ya renovó su certificación el martes; el fallo no se debe a vencimiento.",
                },
                {
                  id: "B",
                  text: "An overnight reader update omitted safety renewals completed within the previous two days.",
                  explanationEs:
                    "Correcto: la coordinadora explica que una actualización nocturna de firmware no sincronizó las renovaciones procesadas en las últimas cuarenta y ocho horas.",
                },
                {
                  id: "C",
                  text: "The cleanroom airlock was sealed automatically because the thermal furnace overheated.",
                  explanationEs:
                    "Incorrecto: el horno térmico solo se menciona porque sus obleas de silicio tienen un proceso cronometrado adentro, no por sobrecalentamiento.",
                },
                {
                  id: "D",
                  text: "He forgot to register his silicon wafer batch number with campus security.",
                  explanationEs:
                    "Incorrecto: anotar el número de lote es únicamente el paso administrativo que pide la coordinadora en ese instante para entregarle una tarjeta temporal.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En diálogos breves técnicos (Part 1), separa la urgencia emocional del hablante ('wafers in the furnace') de la causa raíz operativa explicada en el segundo turno.",
        },
        {
          part: "part1_short_dialogue",
          id: "d08-list-p1b",
          title: "University Press Copyediting Internship Sample",
          cefrLevel: "B2",
          audio: {
            trackId: "day08-listening-p1b",
            audioUrl: "/audio/day08-listening-p1b.mp3",
            contextSetup:
              "An undergraduate student talks with the managing editor of the university press after an information session.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Thanks for the overview, Ms. Sterling. For the autumn copyediting internship application, would my published honors thesis chapter work as the writing sample?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Editor",
                voice: "en-GB-SoniaNeural",
                text: "Actually, original essays show us how you construct your own prose, whereas our editorial interns spend their hours standardizing citations and tightening other scholars' drafts without altering their voice.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Ah, so you're evaluating diagnostic markup rather than original authorship?",
                pauseAfterMs: 400,
              },
              {
                speakerLabel: "Editor",
                voice: "en-GB-SoniaNeural",
                text: "Precisely. Download the unedited history manuscript excerpt from our recruitment page and upload your tracked revisions alongside a one-page style sheet by Monday.",
                pauseAfterMs: 500,
              },
            ],
          },
          questions: [
            {
              id: "d08-list-p1b-q01",
              prompt: "What must the student submit to apply for the internship?",
              options: [
                {
                  id: "A",
                  text: "A published chapter from his undergraduate honors thesis",
                  explanationEs:
                    "Incorrecto: es la propuesta inicial del estudiante, la cual la editora descarta cortésmente con 'Actually...'.",
                },
                {
                  id: "B",
                  text: "An original historical essay demonstrating his own academic voice",
                  explanationEs:
                    "Incorrecto: la editora aclara explícitamente que buscan evaluar cómo corrige textos ajenos sin alterar la voz del autor, no su redacción propia.",
                },
                {
                  id: "C",
                  text: "Tracked edits and a style sheet prepared on a sample manuscript provided by the press",
                  explanationEs:
                    "Correcto: en el turno final le indica descargar el fragmento sin editar de la web y subir sus correcciones con control de cambios junto a una hoja de estilo de una página.",
                },
                {
                  id: "D",
                  text: "A letter from a history professor verifying his citation accuracy",
                  explanationEs:
                    "Incorrecto: aunque se menciona un manuscrito de historia y estandarización de citas, jamás se pide carta de recomendación docente.",
                },
              ],
              correctOptionId: "C",
            },
          ],
          keyTakeawayEs:
            "Cuando el segundo interlocutor arranca con 'Actually,... whereas...', descarta de inmediato el objeto mencionado en la pregunta del primer hablante.",
        },
        {
          part: "part2_conversation",
          id: "d08-list-p2",
          title: "Exchange Credit Classification & Senior Residency Audit",
          cefrLevel: "B2",
          audio: {
            trackId: "day08-listening-p2",
            audioUrl: "/audio/day08-listening-p2.mp3",
            contextSetup:
              "A senior civil engineering student meets with an associate registrar regarding an automated graduation hold.",
            turns: [
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Good afternoon, Mr. Hawthorne. I received an automated graduation-audit alert this morning saying I'm six upper-division credits short in civil engineering for May commencement, and I'm honestly baffled.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Registrar",
                voice: "en-GB-RyanNeural",
                text: "Let's pull up your degree record, Elena. Okay, I see the transcript from your autumn exchange semester at the Federal Institute in Zurich arrived last week. You completed Coastal Sediment Transport and Urban Stormwater Modeling there.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Right! Both were fourth-year engineering seminars, yet on my student portal they're listed as generic international electives instead of core departmental requirements.",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Registrar",
                voice: "en-GB-RyanNeural",
                text: "That's standard behavior for our transcript intake software. Whenever partner-university course codes don't have a pre-mapped match in our catalog table, the system parks those credits in general electives until your home department signs a Syllabus Equivalency Petition.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Oh, I thought my pre-departure study plan covered that automatically. Wait—there's a second warning flag underneath about senior residency credits. What does that mean?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Registrar",
                voice: "en-GB-RyanNeural",
                text: "University senate rules state that twenty-four of your final thirty major credits must be taken on this campus. Counting those six Zurich credits puts you at twenty-two local credits.",
                pauseAfterMs: 500,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "Does that mean I'll have to delay graduation and pay for an extra summer seminar here?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Registrar",
                voice: "en-GB-RyanNeural",
                text: "Fortunately, no. That residency rule has an automatic exception for approved university-sponsored exchanges, provided the courses are reclassified into your major first. Right now the system treats Zurich like an unapproved external transfer because the equivalency form isn't on file.",
                pauseAfterMs: 550,
              },
              {
                speakerLabel: "Student",
                voice: "en-US-JennyNeural",
                text: "What a relief! What exactly do I need to bring to the civil engineering undergraduate chair to get that petition signed?",
                pauseAfterMs: 450,
              },
              {
                speakerLabel: "Registrar",
                voice: "en-GB-RyanNeural",
                text: "Bring the official English course syllabi from Zurich showing weekly laboratory contact hours and assessment weighting, and submit the signed petition to our window before November fifteenth, when spring commencement rosters lock.",
                pauseAfterMs: 550,
              },
            ],
          },
          questions: [
            {
              id: "d08-list-p2-q01",
              prompt: "Why did Elena schedule a meeting with the associate registrar?",
              options: [
                {
                  id: "A",
                  text: "To request permission to study abroad in Zurich during her final semester",
                  explanationEs:
                    "Incorrecto: su semestre de intercambio en Zúrich ya concluyó en otoño y el expediente académico llegó la semana pasada.",
                },
                {
                  id: "B",
                  text: "To investigate an automated notice claiming she lacks upper-level credits to graduate in May",
                  explanationEs:
                    "Correcto: abre la conversación explicando que recibió una alerta de auditoría indicando que le faltan seis créditos avanzados de ingeniería civil para graduarse en mayo.",
                },
                {
                  id: "C",
                  text: "To appeal a failing grade recorded in her Urban Stormwater Modeling seminar",
                  explanationEs:
                    "Incorrecto: completó ambos seminarios satisfactoriamente; el conflicto radica en cómo fueron catalogados sus créditos, no en las calificaciones.",
                },
                {
                  id: "D",
                  text: "To register for an additional summer engineering course on campus",
                  explanationEs:
                    "Incorrecto: pregunta con preocupación si se verá obligada a tomar un curso de verano, pero el registrador le aclara que no será necesario.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d08-list-p2-q02",
              prompt:
                "Why did the university portal classify Elena's Zurich courses as generic electives?",
              options: [
                {
                  id: "A",
                  text: "The Zurich seminars lacked weekly laboratory sessions required of fourth-year students.",
                  explanationEs:
                    "Incorrecto: las horas de laboratorio deben documentarse en la petición, pero nunca se dice que los cursos carecieran de ellas.",
                },
                {
                  id: "B",
                  text: "Her pre-departure study plan was rejected by the civil engineering department.",
                  explanationEs:
                    "Incorrecto: el intercambio sí contaba con aprobación institucional; simplemente el plan previo no sustituye el mapeo final de códigos en el sistema.",
                },
                {
                  id: "C",
                  text: "Foreign course codes without a pre-existing catalog match default to electives pending departmental review.",
                  explanationEs:
                    "Correcto: el Sr. Hawthorne explica que cuando los códigos extranjeros no tienen equivalencia pre-mapeada en el catálogo, el software los ubica temporalmente en optativas generales.",
                },
                {
                  id: "D",
                  text: "The Federal Institute in Zurich sent an unofficial student copy rather than an official transcript.",
                  explanationEs:
                    "Incorrecto: el expediente oficial llegó la semana anterior y ya figura cargado en el sistema de grados.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d08-list-p2-q03",
              prompt:
                "What does Mr. Hawthorne say about the second warning flag regarding senior residency?",
              options: [
                {
                  id: "A",
                  text: "It will clear automatically once her Zurich seminars are officially reclassified into her major.",
                  explanationEs:
                    "Correcto: explica que los intercambios patrocinados por la universidad gozan de exención automática a la regla de 24 créditos locales en cuanto los cursos se reclasifican dentro de la especialidad.",
                },
                {
                  id: "B",
                  text: "It requires Elena to petition the university senate in person before May commencement.",
                  explanationEs:
                    "Incorrecto: menciona las normas del senado universitario, pero aclara que la exención ya está contemplada sin acudir ante el senado.",
                },
                {
                  id: "C",
                  text: "It prevents engineering majors from transferring more than four credits from European institutions.",
                  explanationEs:
                    "Incorrecto: el desfase era de dos créditos respecto al umbral general de veinticuatro sobre treinta, no un tope europeo de cuatro créditos.",
                },
                {
                  id: "D",
                  text: "It applies only to students who change academic majors during their senior year.",
                  explanationEs:
                    "Incorrecto: es una norma general de residencia académica para los últimos treinta créditos de la carrera, no exclusiva de cambios de especialidad.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d08-list-p2-q04",
              prompt: "What must Elena submit before November fifteenth?",
              options: [
                {
                  id: "A",
                  text: "Translated copies of her graded final exams from both Zurich seminars",
                  explanationEs:
                    "Incorrecto: no le solicitan exámenes calificados, sino los programas oficiales ('English course syllabi') con horas de laboratorio y ponderación evaluativa.",
                },
                {
                  id: "B",
                  text: "A signed equivalency petition supported by Zurich syllabi detailing lab hours and grading weights",
                  explanationEs:
                    "Correcto: debe llevar los programas en inglés (con horas de contacto en laboratorio y ponderación de evaluaciones) al director de pregrado para firmar la petición y entregarla antes del 15 de noviembre.",
                },
                {
                  id: "C",
                  text: "A tuition deposit reserving her place in the spring commencement ceremony",
                  explanationEs:
                    "Incorrecto: el 15 de noviembre se cierran las listas de graduación de primavera, sin mención alguna de depósito económico.",
                },
                {
                  id: "D",
                  text: "A formal letter from the Zurich registrar verifying that courses were taught in English",
                  explanationEs:
                    "Incorrecto: necesita los programas oficiales en inglés para el director de su departamento, no una carta del registrador suizo sobre el idioma de instrucción.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En conversaciones administrativas con dos alertas simultáneas (créditos + residencia), identifica cuál es la causa primaria: resolver la primera suele desactivar automáticamente la segunda.",
        },
        {
          part: "part3_lecture",
          id: "d08-list-p3",
          title: "Earth Systems Engineering: Enhanced Geothermal Systems & Hydroshearing",
          cefrLevel: "B2",
          audio: {
            trackId: "day08-listening-p3",
            audioUrl: "/audio/day08-listening-p3.mp3",
            contextSetup:
              "A geology professor delivers an upper-division lecture on subsurface geothermal energy extraction.",
            turns: [
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Welcome back, everyone. Up to this point in our earth-systems module, we've examined intermittent renewables like solar and wind. Today, we turn to geothermal energy—a continuous baseload resource—and specifically to why geologists distinguish conventional hydrothermal reservoirs from Enhanced Geothermal Systems, or EGS.",
                pauseAfterMs: 700,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Conventional geothermal plants operate only where three geological conditions coincide naturally: an unusually shallow thermal gradient, abundant groundwater recharge, and highly permeable fractured rock. Along active tectonic margins such as Iceland or East Africa's Rift Valley, rainwater percolates downward, contacts magma-heated rock, and rises effortlessly as pressurized steam.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Across roughly ninety percent of continental crust, however, one crucial ingredient is missing: permeability. Three to five kilometers beneath our feet lies vast crystalline basement rock—typically granite—reaching temperatures above two hundred degrees Celsius, yet lacking interconnected pores through which water could circulate.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Enhanced Geothermal Systems engineer that missing pathway artificially. After drilling a deep injection well into hot dry granite, engineers pump cold water downward under carefully regulated pressure. Rather than shattering intact stone, this process—known as hydroshearing—causes pre-existing, mineral-sealed microfractures to slip slightly and remain propped open.",
                pauseAfterMs: 800,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Once a permeable fracture network links the injection well to a parallel production well several hundred meters away, water migrates across the hot rock surfaces, absorbs conductive heat, and returns to the surface to drive binary-cycle turbines before being reinjected in a closed loop.",
                pauseAfterMs: 750,
              },
              {
                speakerLabel: "Professor",
                voice: "en-US-AndrewMultilingualNeural",
                text: "Nevertheless, deep fluid injection requires strict geophysical oversight. As an early pilot project in Basel, Switzerland demonstrated, excessive pore pressure can trigger noticeable microseismicity along dormant faults. Consequently, modern EGS operators deploy real-time seismic arrays—called traffic-light protocols—that automatically throttle pumping rates whenever subsurface vibrations cross safe thresholds.",
                pauseAfterMs: 650,
              },
            ],
          },
          questions: [
            {
              id: "d08-list-p3-q01",
              prompt: "What is the main purpose of the professor's lecture?",
              options: [
                {
                  id: "A",
                  text: "To explain how Enhanced Geothermal Systems unlock deep crustal heat where natural permeability is absent, while managing seismic risk",
                  explanationEs:
                    "Correcto: abarca la estructura íntegra de la clase: las limitaciones geológicas del modelo hidrotermal tradicional, el mecanismo de 'hydroshearing' en roca granítica seca y los protocolos sísmicos modernos.",
                },
                {
                  id: "B",
                  text: "To argue that solar and wind facilities are more economical than deep-drilling geothermal plants",
                  explanationEs:
                    "Incorrecto: menciona la energía solar y eólica solo al inicio para contrastarlas como fuentes intermitentes frente a la energía geotérmica de carga base continua.",
                },
                {
                  id: "C",
                  text: "To compare volcanic magma composition in Iceland with tectonic rift zones in East Africa",
                  explanationEs:
                    "Incorrecto: Islandia y el Valle del Rift se citan únicamente como ejemplos breves de reservorios hidrotermales convencionales.",
                },
                {
                  id: "D",
                  text: "To explain why Switzerland permanently banned all forms of renewable subsurface energy",
                  explanationEs:
                    "Incorrecto: el proyecto piloto de Basilea se menciona como lección técnica que impulsó los sistemas modernos de monitoreo 'traffic-light', no una prohibición total.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d08-list-p3-q02",
              prompt:
                "According to the professor, what prevents conventional hydrothermal power generation across most continental regions?",
              options: [
                {
                  id: "A",
                  text: "Temperatures five kilometers underground rarely exceed one hundred degrees Celsius.",
                  explanationEs:
                    "Incorrecto: contradice el audio, que señala que el granito cristalino a entre tres y cinco kilómetros supera los doscientos grados Celsius.",
                },
                {
                  id: "B",
                  text: "Deep crystalline basement rock lacks the interconnected pore networks needed for fluid circulation.",
                  explanationEs:
                    "Correcto: afirma explícitamente que en cerca del 90 % de la corteza continental falta la permeabilidad, pues el granito carece de poros interconectados ('lacking interconnected pores').",
                },
                {
                  id: "C",
                  text: "Continental rainwater evaporates before it can reach shallow sedimentary aquifers.",
                  explanationEs:
                    "Incorrecto: no atribuye el límite a la evaporación pluvial superficial, sino a la impermeabilidad de la roca cristalina profunda.",
                },
                {
                  id: "D",
                  text: "Granite formations dissolve rapidly when exposed to pressurized steam.",
                  explanationEs:
                    "Incorrecto: en EGS el agua circula repetidamente a través de las superficies de granito caliente sin que la roca se disuelva.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d08-list-p3-q03",
              prompt: "How does the 'hydroshearing' process create pathways in hot dry granite?",
              options: [
                {
                  id: "A",
                  text: "By detonating chemical charges to pulverize intact crystalline stone",
                  explanationEs:
                    "Incorrecto: el profesor aclara expresamente 'Rather than shattering intact stone' (en lugar de despedazar roca intacta).",
                },
                {
                  id: "B",
                  text: "By injecting acidic solvents that melt silicate minerals between wells",
                  explanationEs:
                    "Incorrecto: se bombea agua fría a presión regulada ('cold water downward under carefully regulated pressure'), no solventes ácidos.",
                },
                {
                  id: "C",
                  text: "By using regulated water pressure to slide and prop open existing microfractures",
                  explanationEs:
                    "Correcto: el 'hydroshearing' emplea presión hidráulica controlada para que microfracturas preexistentes selladas por minerales se deslicen levemente y queden abiertas.",
                },
                {
                  id: "D",
                  text: "By inserting perforated steel pipes horizontally between the two wells",
                  explanationEs:
                    "Incorrecto: la conexión entre el pozo inyector y el productor la forma la propia red de fracturas en la roca, no tuberías horizontales de acero.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d08-list-p3-q04",
              prompt:
                "What happens to the heated water after it drives the binary-cycle turbines at the surface?",
              options: [
                {
                  id: "A",
                  text: "It is released into nearby rivers after cooling in evaporation ponds.",
                  explanationEs:
                    "Incorrecto: el sistema opera en circuito cerrado ('in a closed loop'), sin descarga a ríos ni lagunas de evaporación.",
                },
                {
                  id: "B",
                  text: "It is pumped back underground to maintain continuous circulation through the reservoir.",
                  explanationEs:
                    "Correcto: el profesor especifica que tras accionar las turbinas de ciclo binario, el agua se reinyecta en un circuito cerrado ('before being reinjected in a closed loop').",
                },
                {
                  id: "C",
                  text: "It is diverted to municipal water-treatment plants as desalinated drinking water.",
                  explanationEs:
                    "Incorrecto: en ningún momento se vincula el circuito geotérmico cerrado con suministro de agua potable municipal.",
                },
                {
                  id: "D",
                  text: "It vents into the atmosphere as dry steam to prevent pressure buildup.",
                  explanationEs:
                    "Incorrecto: las centrales binarias de circuito cerrado reinyectan el fluido precisamente en lugar de ventilarlo a la atmósfera.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d08-list-p3-q05",
              prompt:
                "Why does the professor mention the early pilot project in Basel, Switzerland?",
              options: [
                {
                  id: "A",
                  text: "To illustrate how unregulated pore pressure can induce tremors along dormant subsurface faults",
                  explanationEs:
                    "Correcto: cita Basilea para ejemplificar el riesgo geofísico real cuando una presión de poro excesiva reactiva fallas inactivas y genera microsismicidad perceptible.",
                },
                {
                  id: "B",
                  text: "To celebrate the first commercial EGS plant to power an entire European city",
                  explanationEs:
                    "Incorrecto: lo presenta como una advertencia temprana ('early pilot project') sobre riesgos sísmicos, no como éxito comercial completo.",
                },
                {
                  id: "C",
                  text: "To prove that crystalline granite is absent beneath Alpine mountain ranges",
                  explanationEs:
                    "Incorrecto: el proyecto de Basilea sí inyectó fluido a profundidad; el problema fue la respuesta sísmica de fallas latentes, no la ausencia de granito.",
                },
                {
                  id: "D",
                  text: "To contrast hydrothermal geysers in Switzerland with Rift Valley steam fields",
                  explanationEs:
                    "Incorrecto: Basilea corresponde a inyección profunda de EGS, no a géiseres hidrotermales naturales.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d08-list-p3-q06",
              prompt:
                "What can be inferred about modern 'traffic-light' monitoring protocols in EGS operations?",
              options: [
                {
                  id: "A",
                  text: "They eliminate the need to drill a second production well into basement rock.",
                  explanationEs:
                    "Incorrecto: los arreglos sísmicos regulan el bombeo, pero el circuito sigue requiriendo tanto pozo de inyección como pozo de producción.",
                },
                {
                  id: "B",
                  text: "They allow operators to adjust fluid pressure dynamically before minor subsurface vibrations escalate into felt earthquakes.",
                  explanationEs:
                    "Correcto: al reducir automáticamente el caudal de bombeo ('automatically throttle pumping rates') en cuanto las vibraciones superan umbrales seguros, previenen sismos mayores sin abandonar la operación.",
                },
                {
                  id: "C",
                  text: "They coordinate electricity delivery with urban street-lighting schedules during peak hours.",
                  explanationEs:
                    "Incorrecto: 'traffic-light protocol' es una metáfora técnica de umbrales de alerta sísmica (verde/ámbar/rojo), sin relación con semáforos viales ni alumbrado urbano.",
                },
                {
                  id: "D",
                  text: "They shut down geothermal turbines whenever solar and wind output is high.",
                  explanationEs:
                    "Incorrecto: la geotermia se presentó al inicio como energía continua de carga base ('continuous baseload resource'), y el protocolo responde a vibraciones del subsuelo.",
                },
              ],
              correctOptionId: "B",
            },
          ],
          keyTakeawayEs:
            "En cátedras de ingeniería o ciencias de la Tierra (Part 3), distingue con nitidez entre términos metafóricos técnicos ('hydroshearing', 'traffic-light protocols') y su significado literal cotidiano: iTEP usa el sentido literal como distractor.",
        },
      ],
    },

    // =========================================================================
    // 3. READING (20 min official timer / Part 1 + Part 2 + 15 min review)
    // =========================================================================
    reading: {
      skill: "reading",
      cefrLevel: "B2",
      title:
        "Official iTEP Reading Simulation: Metropolitan Congestion Pricing & Bacterial Biofilms",
      estimatedMinutes: 35,
      timeLimitSeconds: 1200,
      focusSummaryEs:
        "Divide estrictamente tu reloj de 20 minutos: invierte 7 minutos en Part 1 (~240 palabras, 4 preguntas) y 13 minutos en Part 2 (~450 palabras, 6 preguntas). En la pregunta de inserción `[A][B][C][D]`, rastrea demostrativos ('such quiescent subpopulations') y conectores causales antes de confirmar.",
      passages: [
        {
          part: "part1_intermediate",
          id: "d08-read-p1",
          title: "Dynamic Congestion Pricing and Multimodal Transit Equity",
          cefrLevel: "B2",
          topicDomain: "Urban Economics & Transportation Policy",
          paragraphs: [
            "Over the past two decades, metropolitan transit authorities from Stockholm to Singapore have implemented dynamic congestion pricing to curb chronic gridlock in central business districts. Rather than imposing flat municipal tolls, modern electronic gantry systems adjust fees according to real-time traffic volume, charging motorists higher rates during peak commuting windows while discounting off-peak travel. Transportation economists note that even modest peak surcharges typically reduce downtown vehicle entries by fifteen to twenty percent, accelerating surface bus speeds and lowering localized nitrogen dioxide emissions within months of launch.",
            "Despite these measurable environmental and operational gains, urban sociologists warn that poorly structured pricing zones can intensify spatial inequity. In regions where soaring downtown housing costs have pushed service-sector employees into distant suburban fringes, outer-ring neighborhoods often lack frequent rail connections. When night-shift hospital staff or delivery drivers have no viable transit alternative, congestion fees function as a regressive commuter tax, absorbing a disproportionate share of lower-income household budgets while wealthier drivers effortlessly pay for uncongested lanes.",
            "Consequently, contemporary mobility planners argue that congestion pricing achieves durable public legitimacy only when paired with upfront transit reinvestment. Cities that legally earmark toll revenues to expand suburban feeder buses, cap fares for low-income commuters, and construct peripheral park-and-ride hubs consistently sustain voter approval after initial skepticism fades. Ultimately, managing scarce urban road space requires treating pricing not as an isolated municipal revenue stream, but as one instrument within an integrated multimodal network.",
          ],
          questions: [
            {
              id: "d08-read-p1-q01",
              questionType: "main_idea",
              prompt: "What is the central argument of the passage?",
              options: [
                {
                  id: "A",
                  text: "Electronic toll gantries have failed to reduce air pollution in major metropolitan centers.",
                  explanationEs:
                    "Incorrecto: contradice el párrafo 1, que documenta reducciones del 15 al 20 % en el ingreso vehicular y descensos medibles de dióxido de nitrógeno.",
                },
                {
                  id: "B",
                  text: "While dynamic congestion pricing effectively reduces traffic and emissions, its fairness and public acceptance depend on reinvesting revenues into accessible transit alternatives.",
                  explanationEs:
                    "Correcto: integra con exactitud los tres bloques del texto: eficacia ambiental/vial (P1), riesgo de inequidad regresiva en periferias (P2) y legitimidad mediante reinversión multimodal previa (P3).",
                },
                {
                  id: "C",
                  text: "Municipalities should replace commuter rail networks with discounted off-peak highway lanes.",
                  explanationEs:
                    "Incorrecto: el texto aboga por ampliar conexiones de transporte público periférico, jamás por reemplazar trenes con carriles viales.",
                },
                {
                  id: "D",
                  text: "Flat daily tolls are more equitable for hospital workers than real-time dynamic surcharges.",
                  explanationEs:
                    "Incorrecto: los peajes planos se mencionan solo para explicar cómo funcionan los pórticos dinámicos modernos, no como solución de equidad para turnos nocturnos.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d08-read-p1-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'earmark' in paragraph 3 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "designate exclusively",
                  explanationEs:
                    "Correcto: en contexto presupuestario y legal ('legally earmark toll revenues to expand suburban feeder buses'), 'earmark' significa asignar o reservar fondos exclusivamente para un fin específico.",
                },
                {
                  id: "B",
                  text: "borrow temporarily",
                  explanationEs:
                    "Incorrecto: se refiere al destino obligatorio de los ingresos recaudados por peajes ('toll revenues'), no a endeudamiento temporal.",
                },
                {
                  id: "C",
                  text: "audit retrospectively",
                  explanationEs:
                    "Incorrecto: no alude a una auditoría contable posterior, sino al blindaje legal previo del gasto hacia mejoras de transporte.",
                },
                {
                  id: "D",
                  text: "reduce gradually",
                  explanationEs:
                    "Incorrecto: reducir los ingresos impediría financiar autobuses alimentadores y estacionamientos disuasorios.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d08-read-p1-q03",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 2 about congestion pricing in cities with weak suburban transit links?",
              options: [
                {
                  id: "A",
                  text: "Wealthier downtown residents stop driving altogether as soon as peak surcharges take effect.",
                  explanationEs:
                    "Incorrecto: el final del párrafo 2 señala exactamente lo opuesto: los conductores adinerados pagan sin dificultad ('effortlessly pay') por circular en carriles despejados.",
                },
                {
                  id: "B",
                  text: "Service-sector workers living far from city centers may continue driving despite the fee because they lack practical public-transit options.",
                  explanationEs:
                    "Correcto: al carecer de conexiones ferroviarias frecuentes o alternativas viables en turnos nocturnos, deben asumir el cobro como un impuesto regresivo inevitable sobre su presupuesto familiar.",
                },
                {
                  id: "C",
                  text: "Downtown housing prices usually decline within months of launching electronic toll zones.",
                  explanationEs:
                    "Incorrecto: el texto menciona el alto costo habitacional céntrico como causa previa del desplazamiento suburbano, no que el peaje abarate la vivienda.",
                },
                {
                  id: "D",
                  text: "Surface buses move more slowly in outer suburbs after downtown tolls are introduced.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 indica que los autobuses urbanos aceleran en el centro, sin afirmar que se ralenticen en los suburbios.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d08-read-p1-q04",
              questionType: "synthesis",
              prompt:
                "According to paragraph 3, why do certain cities maintain strong voter support for congestion pricing over time?",
              options: [
                {
                  id: "A",
                  text: "They exempt all suburban motorists from paying peak-hour charges.",
                  explanationEs:
                    "Incorrecto: no eximen a todos los residentes suburbanos; en cambio, topan tarifas de transporte para bajos ingresos y amplían rutas alimentadoras.",
                },
                {
                  id: "B",
                  text: "They deposit toll collections into general municipal budgets to lower property taxes.",
                  explanationEs:
                    "Incorrecto: contradice directamente el cierre del pasaje ('not as an isolated municipal revenue stream').",
                },
                {
                  id: "C",
                  text: "They channel toll proceeds visibly into suburban transit access and fare relief.",
                  explanationEs:
                    "Correcto: vincular jurídicamente la recaudación con autobuses alimentadores suburbanos, topes tarifarios y nodos 'park-and-ride' sostiene el respaldo ciudadano tras el escepticismo inicial.",
                },
                {
                  id: "D",
                  text: "They restrict electronic toll collection to commercial delivery trucks.",
                  explanationEs:
                    "Incorrecto: el sistema grava el volumen general de automóviles particulares en horas punta, no exclusivamente camiones de reparto.",
                },
              ],
              correctOptionId: "C",
            },
          ],
        },
        {
          part: "part2_academic",
          id: "d08-read-p2",
          title: "Bacterial Biofilms, Quorum Sensing, and Anti-Virulence Therapeutics",
          cefrLevel: "B2",
          topicDomain: "Molecular Microbiology & Biomedical Pharmacology",
          paragraphs: [
            "For more than a century after Louis Pasteur and Robert Koch established modern clinical bacteriology, microbiologists investigated bacteria predominantly by culturing isolated, free-swimming cells in nutrient-rich liquid broths. While those uniform planktonic cultures enabled researchers to identify life-saving antibiotics against acute bloodstream and respiratory infections, high-resolution environmental microscopy eventually revealed that solitary free-floating bacteria represent an ecological exception rather than the norm. Across natural watersheds, industrial water conduits, and implanted medical devices alike, over eighty percent of bacterial populations anchor themselves to solid surfaces and construct structured multicellular communities known as biofilms, encasing millions of cells within a self-secreted matrix of polysaccharides, structural proteins, and extracellular DNA.",
            "Transitioning from independent motility to cooperative biofilm architecture demands synchronized genetic regulation across vast microbial populations. Bacteria accomplish this coordination through quorum sensing, a chemical communication mechanism in which individual cells continuously synthesize and release small diffusible signaling molecules termed autoinducers. So long as local cell density remains sparse, autoinducer concentrations dissipate harmlessly into the surrounding fluid without eliciting a collective response. Once sustained reproduction pushes extracellular autoinducer levels past a critical threshold, however, those molecules bind to cognate intracellular receptors and trigger a simultaneous transcriptional switch throughout the colony, initiating matrix secretion and virulence factor production only when bacterial numbers are sufficient to withstand host immune clearance.",
            "Once fully assembled, a mature biofilm protects its inhabitants from conventional antimicrobial regimens through complementary physical and physiological defenses. [A] Acting as an electrostatically charged physical barrier, the dense extracellular matrix retards the inward diffusion of bulky antibiotic molecules and neutralizes reactive immune oxidants along the colony's outer boundary. [B] Deeper within the biofilm interior, steep oxygen and nutrient gradients compel embedded bacteria to enter a metabolically dormant state known as persister cells. [C] Because classic bactericidal drugs such as beta-lactams and fluoroquinolones target active biosynthetic processes like cell-wall cross-linking or DNA replication, dormant persister cells survive lethal antibiotic concentrations without harboring heritable resistance mutations, only to awaken and reseed chronic infections once therapy concludes. [D]",
            "Recognizing that escalating antibiotic dosages frequently select for multidrug-resistant strains without eradicating entrenched biofilms, biomedical researchers are increasingly developing anti-virulence interventions collectively termed quorum quenching. Rather than attempting to kill bacteria directly, quorum-quenching enzymes and synthetic receptor antagonists degrade or block autoinducer signals, effectively preventing microbial populations from coordinating matrix assembly in the first place. In preclinical surgical-implant models, pairing signal-disrupting agents with low-dose antibiotics dispersed established biofilms and restored vulnerability to host phagocytes. Because quorum quenching disarms collective pathogenicity without imposing direct lethal selection pressure on individual cell survival, evolutionary biologists anticipate that bacteria will evolve resistance to signal blockers far more slowly than they have to traditional bactericidal compounds.",
          ],
          questions: [
            {
              id: "d08-read-p2-q01",
              questionType: "detail",
              prompt:
                "According to paragraph 1, how did traditional laboratory liquid-broth cultures shape early bacteriology?",
              options: [
                {
                  id: "A",
                  text: "They prevented scientists from discovering effective treatments for acute bloodstream infections.",
                  explanationEs:
                    "Incorrecto: el párrafo 1 afirma explícitamente que esos cultivos planctónicos sí permitieron identificar antibióticos vitales contra infecciones agudas.",
                },
                {
                  id: "B",
                  text: "They focused scientific study on free-swimming individual bacteria even though most bacteria in nature live in surface-attached biofilms.",
                  explanationEs:
                    "Correcto: durante más de un siglo se cultivaron células aisladas en caldo líquido ('planktonic cultures'), cuando en ambientes reales más del 80 % vive adherido en biopelículas.",
                },
                {
                  id: "C",
                  text: "They demonstrated that extracellular DNA only forms inside synthetic industrial pipelines.",
                  explanationEs:
                    "Incorrecto: el ADN extracelular forma parte de la matriz de biopelículas tanto en cuencas naturales como en dispositivos médicos y tuberías.",
                },
                {
                  id: "D",
                  text: "They proved that Pasteur and Koch had misidentified the organisms responsible for respiratory illness.",
                  explanationEs:
                    "Incorrecto: no se atribuye ningún error de identificación de patógenos respiratorios a Pasteur ni a Koch.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d08-read-p2-q02",
              questionType: "vocabulary_in_context",
              prompt: "The word 'sparse' in paragraph 2 is closest in meaning to:",
              options: [
                {
                  id: "A",
                  text: "low and thinly distributed",
                  explanationEs:
                    "Correcto: en 'So long as local cell density remains sparse, autoinducer concentrations dissipate harmlessly', contrasta con el aumento poblacional posterior ('Once sustained reproduction pushes...'), significando baja o dispersa.",
                },
                {
                  id: "B",
                  text: "genetically uniform",
                  explanationEs:
                    "Incorrecto: el párrafo 2 evalúa el umbral cuantitativo de concentración celular ('local cell density'), no la diversidad genética.",
                },
                {
                  id: "C",
                  text: "chemically toxic",
                  explanationEs:
                    "Incorrecto: las señales se disipan de forma inocua ('dissipate harmlessly') cuando la densidad es baja.",
                },
                {
                  id: "D",
                  text: "tightly clustered",
                  explanationEs:
                    "Incorrecto: 'tightly clustered' representa el antónimo directo de 'sparse'.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d08-read-p2-q03",
              questionType: "rhetorical_purpose",
              prompt:
                "Why does the author explain the threshold behavior of autoinducers in paragraph 2?",
              options: [
                {
                  id: "A",
                  text: "To show how bacteria avoid expending energy on virulence and matrix construction until their numbers can overcome host defenses",
                  explanationEs:
                    "Correcto: detalla cómo el umbral químico sincroniza el interruptor transcripcional para secretar matriz y factores de virulencia únicamente cuando la colonia es lo bastante numerosa para resistir al sistema inmune.",
                },
                {
                  id: "B",
                  text: "To illustrate why planktonic bacteria reproduce faster in cold waterways than on medical implants",
                  explanationEs:
                    "Incorrecto: no se comparan tasas de reproducción por temperatura entre ríos e implantes.",
                },
                {
                  id: "C",
                  text: "To argue that individual bacteria lose their intracellular receptors once a biofilm matures",
                  explanationEs:
                    "Incorrecto: los receptores intracelulares son precisamente las estructuras a las que se unen los autoinductores para activar la biopelícula.",
                },
                {
                  id: "D",
                  text: "To prove that extracellular fluids destroy signaling molecules before bacteria can divide",
                  explanationEs:
                    "Incorrecto: las moléculas simplemente se diluyen a baja densidad, pero al dividirse las células sí alcanzan el umbral crítico.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "d08-read-p2-q04",
              questionType: "inference",
              prompt:
                "What can be inferred from paragraph 3 about recurring biofilm infections after a patient finishes a standard course of beta-lactam antibiotics?",
              options: [
                {
                  id: "A",
                  text: "The surviving bacteria have invariably acquired permanent DNA mutations that inactivate beta-lactam drugs.",
                  explanationEs:
                    "Incorrecto: el párrafo 3 subraya explícitamente lo contrario: las células persistentes sobreviven 'without harboring heritable resistance mutations'.",
                },
                {
                  id: "B",
                  text: "Relapse can occur via metabolically dormant cells that tolerated treatment passively rather than through genetic drug resistance.",
                  explanationEs:
                    "Correcto: al suspender procesos biosintéticos activos, las células persistentes toleran dosis letales sin mutaciones hereditarias y reactivan la infección crónica cuando cesa el antibiótico.",
                },
                {
                  id: "C",
                  text: "Fluoroquinolone antibiotics penetrate the outer polysaccharide matrix more slowly than immune oxidants do.",
                  explanationEs:
                    "Incorrecto: el texto no establece una comparación de velocidad entre fluoroquinolonas y oxidantes inmunes.",
                },
                {
                  id: "D",
                  text: "Increasing oxygen levels inside the biofilm forces outer-perimeter bacteria into dormancy.",
                  explanationEs:
                    "Incorrecto: es la escasez de oxígeno y nutrientes en el interior profundo ('steep oxygen and nutrient gradients') lo que induce latencia metabólica.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "d08-read-p2-q05",
              questionType: "sentence_insertion",
              prompt:
                "Look at the four squares [A], [B], [C], and [D] in paragraph 3. Where would the following sentence best fit?",
              sentenceToInsert:
                "Unlike outer-layer cells that continue dividing actively, such quiescent subpopulations suspend nearly all macromolecular synthesis until surrounding conditions improve.",
              options: [
                {
                  id: "A",
                  text: "[A]",
                  explanationEs:
                    "Incorrecto: antes de `[A]` aún no se ha presentado ni la capa externa ni las subpoblaciones latentes ('such quiescent subpopulations' carece por completo de antecedente).",
                },
                {
                  id: "B",
                  text: "[B]",
                  explanationEs:
                    "Incorrecto: la oración previa a `[B]` solo describe la barrera física de la matriz en el borde exterior; todavía no se introducen las células persistentes en estado latente.",
                },
                {
                  id: "C",
                  text: "[C]",
                  explanationEs:
                    "Correcto: 'such quiescent subpopulations' retoma cohesivamente 'persister cells [in] a metabolically dormant state' de la oración previa, mientras que 'suspend nearly all macromolecular synthesis' establece la premisa exacta que explica la oración posterior ('Because classic bactericidal drugs ... target active biosynthetic processes...').",
                },
                {
                  id: "D",
                  text: "[D]",
                  explanationEs:
                    "Incorrecto: colocarla en `[D]` invertiría el orden lógico causa-efecto, pues la oración anterior a `[D]` ya dio por explicada la inactividad biosintética y narró el despertar posterior al tratamiento.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "d08-read-p2-q06",
              questionType: "synthesis",
              prompt:
                "Why do evolutionary biologists view quorum-quenching therapies as a promising complement to low-dose antibiotics?",
              options: [
                {
                  id: "A",
                  text: "Quorum-quenching enzymes kill dormant persister cells directly inside oxygen-poor biofilm cores.",
                  explanationEs:
                    "Incorrecto: el párrafo 4 aclara desde el inicio 'Rather than attempting to kill bacteria directly'.",
                },
                {
                  id: "B",
                  text: "By blocking chemical coordination without directly threatening individual cell survival, they disperse biofilms while exerting weaker evolutionary pressure for drug resistance.",
                  explanationEs:
                    "Correcto: sintetiza el mecanismo farmacológico y evolutivo del párrafo 4: bloquean la coordinación de la matriz (devolviendo vulnerabilidad a dosis bajas e inmunidad) sin imponer presión selectiva letal directa que acelere la resistencia.",
                },
                {
                  id: "C",
                  text: "They permanently alter human phagocytes so surgical implants never require antimicrobial coatings.",
                  explanationEs:
                    "Incorrecto: actúan sobre las señales bacterianas ('degrade or block autoinducer signals'), no modificando genéticamente los fagocitos humanos.",
                },
                {
                  id: "D",
                  text: "They stimulate bacteria to overproduce autoinducers until the polysaccharide matrix ruptures.",
                  explanationEs:
                    "Incorrecto: degradan o bloquean los autoinductores en vez de estimular su sobreproducción.",
                },
              ],
              correctOptionId: "B",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 4. WRITING (25 min official timer without spellcheck + 5 min audit)
    // =========================================================================
    writing: {
      skill: "writing",
      cefrLevel: "B2",
      title:
        "Official iTEP Writing Simulation: Archival Access Request & Pre-Registration Policy Essay",
      estimatedMinutes: 30,
      timeLimitSeconds: 1500,
      focusSummaryEs:
        "Ejecuta los 25 minutos oficiales de Writing de corrido sin corrector ortográfico: 5 minutos exactos para la nota institucional de Part 1 (50–75 palabras) y 20 minutos para el ensayo persuasivo de Part 2 (175–225 palabras). Reserva los últimos 2 minutos de cada tarea para auditar ortografía, concordancia de tercera persona y puntuación de conectores.",
      tasks: [
        {
          part: "part1_note",
          id: "d08-writ-p1",
          cefrLevel: "B2",
          title: "Requesting Supervised Access to Restricted Archival Maps",
          prompt:
            "You are writing a senior thesis in urban history and need to examine original nineteenth-century municipal canal maps held in the university library's Special Collections room. Write a formal note to Dr. Wallace, Head Archivist, in which you: (1) explain why the library's online digital scans are insufficient for your research, (2) mention your readiness to follow archival preservation rules, and (3) ask whether one of two specific afternoons next week is available for a supervised visit.",
          timeLimitSeconds: 300,
          minWords: 50,
          maxWords: 75,
          strategyGuideEs:
            "Resuelve los 3 requisitos en exactamente 4 oraciones concisas: Oración 1 (propósito directo + objeto de archivo), Oración 2 (limitación técnica del escaneo con cláusula 'Although...' y relativo 'by which'), Oración 3 (protocolo de conservación con participio 'Having completed...'), Oración 4 (consulta indirecta con 'whether' proponiendo dos tardes concretas).",
          recommendedConnectors: ["Although", "by which", "Having completed", "whether"],
          b2RubricChecklistEs: [
            "Aborda íntegramente los 3 puntos solicitados (limitación de copias digitales, protocolos de preservación y dos tardes específicas).",
            "Se mantiene estrictamente dentro del rango oficial de 50 a 75 palabras con saludo y cierre formales.",
            "Emplea al menos dos estructuras sintácticas B2 (concesiva con 'Although', relativa formal 'by which', participial o pregunta indirecta con 'whether').",
            "Ortografía limpia en vocabulario académico ('archival', 'protocols', 'supervised', 'annotations') sin asistencia del navegador.",
          ],
          modelAnswerB2:
            "Dear Dr. Wallace, I am writing to request supervised access to the 1895 municipal canal maps for my urban history thesis. Although digitized scans exist online, they omit the faint margin annotations by which engineers recorded seasonal flood elevations. Having completed the archival handling workshop, I will follow all preservation protocols. Could you confirm whether next Tuesday or Thursday afternoon works for a visit? Sincerely, Mateo Silva",
        },
        {
          part: "part2_essay",
          id: "d08-writ-p2",
          cefrLevel: "B2",
          title: "Mandatory Pre-Registration of Empirical Research Designs",
          prompt:
            "Several public funding agencies propose requiring university scientists to publicly pre-register their core hypotheses and statistical methods before collecting experimental data in order to curb selective reporting. Critics counter that mandatory pre-registration slows scientific discovery and penalizes researchers who uncover unexpected patterns while analyzing their data. Which policy position do you support? Give specific reasons and examples to defend your view.",
          timeLimitSeconds: 1200,
          minWords: 175,
          maxWords: 225,
          strategyGuideEs:
            "Planifica en 2m30s un esquema de 4 párrafos: P1 Tesis firme a favor (o en contra matizada) de la prerregistración; P2 Concesión ('Admittedly, critics worry...') + refutación explicando la diferencia entre predicción previa y hallazgo exploratorio transparente; P3 Segundo argumento sobre sesgo de publicación y ahorro de fondos públicos con ejemplo concreto; P4 Cierre sintético con cláusula pseudo-escindida ('What strengthens...').",
          recommendedConnectors: [
            "Far from",
            "Admittedly,",
            "Nevertheless,",
            "rather,",
            "Furthermore,",
            "upon which",
          ],
          b2RubricChecklistEs: [
            "Presenta una tesis inequívoca en la introducción que responde directamente al dilema de política científica.",
            "Cumple el rango meta de 175 a 225 palabras distribuidas en 4 párrafos equilibrados y cohesionados.",
            "Integra una concesión legítima a la postura opuesta y la neutraliza con precisión conceptual en vez de repetir la tesis.",
            "Exhibe sintaxis B2 variada: gerundios en función de sujeto ('archiving study protocols'), relativos con preposición ('upon which') y cláusulas nominales ('what strengthens...').",
            "Mantiene registro léxico universitario ('selective reporting', 'null results', 'empirical', 'publication bias') sin errores morfológicos ni 'comma splices'.",
          ],
          modelAnswerB2:
            "Public research agencies should require scientists to pre-register their core hypotheses and statistical protocols before collecting empirical data. Far from restricting intellectual freedom, mandatory pre-registration safeguards scientific credibility against selective reporting and irreproducible claims.\n\nAdmittedly, critics worry that locking researchers into predetermined analytical plans could penalize unexpected experimental discoveries. Nevertheless, modern pre-registration frameworks do not prohibit exploratory investigation; rather, they simply require authors to distinguish upfront predictions from post-hoc patterns discovered after inspecting the dataset. Without that transparent boundary, academic competition pressures laboratories to test dozens of statistical variables privately while publishing only the single correlation that appears significant—a practice that has fueled widespread replication failures across psychology and biomedicine.\n\nFurthermore, archiving study protocols publicly prevents publication bias by making null results visible to the broader scholarly community. When three university teams independently discover that a proposed pharmacological compound produces no clinical benefit, leaving those trials unpublished wastes millions in public grant funding as subsequent researchers unknowingly repeat the same dead-end experiments.\n\nUltimately, what strengthens scientific innovation is not unrestrained statistical flexibility, but verifiable evidence upon which future investigators can build confidently. Mandatory pre-registration preserves space for serendipity while ensuring that published breakthroughs reflect genuine empirical reality.",
        },
      ],
    },

    // =========================================================================
    // 5. SPEAKING (5 min official chained timers + 10 min self-evaluation)
    // =========================================================================
    speaking: {
      skill: "speaking",
      cefrLevel: "B2",
      title: "Official iTEP Speaking Simulation: Evidence-Based Revision & Campus Transit Policy",
      estimatedMinutes: 15,
      timeLimitSeconds: 300,
      focusSummaryEs:
        "Cierra el simulacro oficial de 80 minutos manteniendo energía articulatoria y control estructural bajo fatiga real. Usa los 30s/45s de preparación exclusivamente para trazar tu mapa de 3 viñetas (Tesis -> Evidencia/Ejemplo -> Cierre) y termina tu última oración con entonación descendente antes del corte del cronómetro.",
      tasks: [
        {
          part: "part1_personal",
          id: "d08-speak-p1",
          cefrLevel: "B2",
          title: "Revising a Position in Response to New Evidence",
          prompt:
            "Describe an occasion in a university course or workplace project when unexpected data or feedback persuaded you to change a strategy or opinion you had strongly defended. Explain what convinced you to adjust your approach and what happened as a result.",
          prepSeconds: 30,
          recordSeconds: 45,
          structureTemplate: [
            "0–10s (Initial Stance & Context): Identify the course/project and the initial strategy you advocated.",
            "10–28s (Turning-Point Evidence): Specify the exact empirical data or feedback that exposed the flaw in your plan.",
            "28–45s (Pivot & Outcome): State how you modified the strategy and quantify or describe the improved result.",
          ],
          keyPhrasesB2: [
            "Initially, I was convinced that..., largely because...",
            "Had we ignored those pilot survey results, we would have...",
            "Once the preliminary data revealed that..., I pivoted toward...",
            "Ultimately, revising my stance early allowed our team to...",
          ],
          selfRubricChecklistEs: [
            "Arranqué en los primeros 3 segundos situando un proyecto académico o laboral concreto sin rodeos genéricos.",
            "Expliqué con claridad la evidencia específica que motivó el cambio de postura y el resultado obtenido.",
            "Incorporé al menos una estructura de alto valor B2 (condicional pasado invertido, cláusula temporal con 'Once' o participio perfecto).",
            "Sostuve fluidez continua y articulación nítida durante los 45 segundos sin quedar cortado a mitad de frase.",
          ],
          modelTranscriptB2:
            "During a junior-year marketing analytics project, I strongly advocated launching our campus recycling campaign exclusively through short social-media videos, assuming undergraduates rarely read physical signage. However, before finalizing our budget, our team ran a three-day pilot tracking QR-code scans across five residence halls. What surprised me was that tabletop cards placed inside dining halls generated nearly four times as many student sign-ups as our digital ads, because students scanned them while waiting with friends. Had I insisted on my original digital-only plan, our participation rate would have stalled. By reallocating sixty percent of our printing budget to dining-hall displays, we exceeded our semester pledge target within two weeks and learned to let empirical pilot data override personal assumptions.",
        },
        {
          part: "part2_opinion",
          id: "d08-speak-p2",
          cefrLevel: "B2",
          title: "Replacing Campus Commuter Parking with Student Housing & Transit Passes",
          prompt:
            "Several metropolitan universities are considering converting subsidized surface parking lots on campus into undergraduate residence halls while providing all enrolled students with universal public-transit passes. Supporters argue that this policy alleviates student housing shortages and cuts commuter carbon emissions, whereas opponents contend that removing parking unfairly burdens working students and suburban commuters whose neighborhoods lack reliable transit service. Which policy approach do you support, and why?",
          audioPrompt: {
            trackId: "day08-speaking-p2",
            audioUrl: "/audio/day08-speaking-p2.mp3",
            contextSetup: "Official iTEP Speaking Part 2 dual-perspective academic policy prompt.",
            turns: [
              {
                speakerLabel: "Examiner",
                voice: "en-GB-SoniaNeural",
                text: "Several metropolitan universities are considering converting subsidized surface parking lots on campus into undergraduate residence halls while providing all enrolled students with universal public-transit passes. Supporters argue that this policy alleviates student housing shortages and cuts commuter carbon emissions, whereas opponents contend that removing parking unfairly burdens working students and suburban commuters whose neighborhoods lack reliable transit service. Which policy approach do you support, and why?",
                pauseAfterMs: 600,
              },
            ],
          },
          prepSeconds: 45,
          recordSeconds: 60,
          structureTemplate: [
            "0–12s (Definitive Thesis): Endorse a clear policy position (e.g., phased conversion paired with targeted exemptions) and state why.",
            "12–32s (Core Benefit + Urban Reality): Explain how housing density + universal transit passes benefit the majority of students.",
            "32–50s (Concession & Policy Safeguard): Acknowledge off-peak/suburban working students and propose a concrete permit safeguard.",
            "50–60s (Decisive Wrap-Up): Synthesize why smart land use and targeted equity outperform vast asphalt lots.",
          ],
          keyPhrasesB2: [
            "I strongly support converting central surface parking into campus housing, provided that...",
            "Devoting prime urban land to asphalt lots is inefficient when...",
            "Admittedly, opponents raise a valid equity concern regarding...",
            "By reserving a compact garage for documented transit-desert commuters, universities can...",
          ],
          selfRubricChecklistEs: [
            "Defendí una postura clara desde la primera oración en lugar de describir pasivamente ambos lados del debate.",
            "Reconocí la objeción sobre estudiantes trabajadores/suburbanos ('Admittedly...') e integré una salvaguarda práctica realista.",
            "Utilicé conectores B2 ('provided that', 'whereas', 'by reserving...') con entonación contrastiva natural.",
            "Mantuve ritmo constante durante todo el minuto sin pausas dubitativas largas ni repeticiones léxicas.",
            "Cerré la conclusión completa entre el segundo 53 y el 59.",
          ],
          modelTranscriptB2:
            "I strongly support converting subsidized surface parking lots into on-campus residence halls paired with universal transit passes, provided universities retain a targeted permit tier for students with documented transit hardships. In dense metropolitan areas, devoting prime university land to half-empty asphalt lots inflates nearby apartment rents and encourages single-occupancy driving. Building campus housing allows thousands of undergraduates to walk to laboratories and libraries while lowering regional emissions through funded rail and bus passes. Admittedly, opponents raise a valid concern regarding evening-shift employees and parents commuting from outer suburbs where bus frequency drops at night. However, rather than preserving sprawling surface lots for everyone, administrators can reserve one compact peripheral garage exclusively for verified caregivers, disabled motorists, and outer-zone commuters. Ultimately, pairing housing construction with needs-based parking exemptions advances sustainability without sacrificing educational access.",
        },
      ],
    },
  },
  dailyChecklistEs: [
    "Ejecuté las 5 secciones del Simulacro Intermedio #1 en una sola sesión continua respetando el reloj oficial de 80 minutos (10+20+20+25+5).",
    "Respondí los 25 reactivos de Grammar en 10 minutos o menos e identifiqué mis 2 categorías gramaticales con mayor tasa de error para repaso focalizado.",
    "Completé las 4 pistas de Listening (12 preguntas) con una sola reproducción estricta y contrasté mis apuntes contra el guion de la cátedra de Geotermia.",
    "Resolví los 10 reactivos de Reading en 20 minutos verificando los anclajes léxicos de inserción en `[C]` del pasaje sobre biopelículas bacterianas.",
    "Audité mi nota (50–75 palabras), mi ensayo (175–225 palabras) y mis dos grabaciones de Speaking usando la rúbrica oficial B2 para trazar mi plan de mejora hacia el Día 14.",
  ],
};
