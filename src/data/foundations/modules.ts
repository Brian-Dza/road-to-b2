import type { FoundationModule } from "../../schemas/curriculum.schema.ts";

export const foundationModules: readonly FoundationModule[] = [
  // ===========================================================================
  // 1. A1 — Core Clause Order, Be vs. Have & Present Aspect
  // ===========================================================================
  {
    id: "a1-core-structures",
    cefrLevel: "A1",
    skill: "grammar",
    title: "Core Clause Order, Be vs. Have & Present Aspect",
    subtitleEs:
      "Verbo To Be vs. Have, Present Simple vs. Continuous, orden sujeto-verbo obligatorio y pronombres en contexto universitario",
    estimatedMinutes: 25,
    coreRuleSummaryEs:
      "El inglés académico descansa sobre cuatro reglas estructurales innegociables desde la base: (1) Orden rígido Sujeto + Verbo: toda cláusula finita declarativa exige un sujeto explícito antes del verbo; nunca omitas 'it' en valoraciones impersonales ('It is essential to cite primary sources') ni confundas la existencia ('There is / There are') con pronombres personales. (2) Contraste 'be' vs. 'have' y verbos léxicos autónomos: estados como la edad, la prisa o el éxito se construyen con 'be' ('be twenty years old', 'be in a hurry', 'be successful'), jamás con 'have', mientras que verbos plenos como 'agree', 'depend' o 'consist' se conjugan directamente con 'do/does' y nunca tras 'am/is/are'. (3) Present Simple vs. Present Continuous: el Present Simple ('base / -s', negación 'do not / does not + base') expresa políticas institucionales, hechos permanentes y estados cognitivos o de pertenencia ('know', 'belong', 'contain', 'require'), los cuales rechazan '-ing'; el Present Continuous ('am/is/are + -ing') se restringe a procesos temporales en desarrollo, y los adverbios de frecuencia ('always', 'usually', 'never') se sitúan después de 'be' ('is never') pero antes del verbo léxico ('usually submits'). (4) Arquitectura pronominal: distingue determinantes posesivos ante sustantivo ('my, his, her, its, our, their' — nota 'its' sin apóstrofo), pronombres posesivos autónomos sin sustantivo detrás ('mine, hers, ours, theirs') y pronombres objeto tras verbo o preposición ('me, him, her, us, them').",
    itepBridgeTipEs:
      "En iTEP Grammar Part 2 una trampa recurrente de nivel B2 consiste en intercalar frases preposicionales largas con sustantivos plurales entre un núcleo de sujeto singular y su verbo ('The director of the international research fellowships approves...'), o infiltrar 'it's' donde corresponde el posesivo institucional 'its'. Además, omitir el sujeto expletivo 'it' antes de 'is evident that' en Writing Part 2 reduce de inmediato tu calificación de control sintáctico por debajo del umbral 3.5.",
    contrastTable: [
      {
        conceptEs: "Sujeto impersonal explícito obligatorio ('It')",
        incorrectExample: "Is mandatory to wear protective goggles inside the chemistry lab.",
        correctExample: "It is mandatory to wear protective goggles inside the chemistry lab.",
        whyItMattersEs:
          "En inglés el verbo finito no codifica persona suficiente para omitir el sujeto; dejar 'is' al inicio de una oración enunciativa crea un fragmento agramatical penalizado en Grammar y Writing.",
      },
      {
        conceptEs: "Expresiones con 'be' frente a calcos con 'have' y 'agree'",
        incorrectExample:
          "Several transfer students have twenty-one years old and are agree with the policy.",
        correctExample:
          "Several transfer students are twenty-one years old and agree with the policy.",
        whyItMattersEs:
          "Traducir literalmente 'tener años' o 'estar de acuerdo' delata interferencia directa del español; 'age/hurry' exigen 'be' y 'agree' es un verbo intransitivo pleno.",
      },
      {
        conceptEs: "Verbos estativos incompatibles con aspecto continuo ('-ing')",
        incorrectExample:
          "This introductory reader is containing twelve peer-reviewed articles on ethics.",
        correctExample:
          "This introductory reader contains twelve peer-reviewed articles on ethics.",
        whyItMattersEs:
          "Los verbos de posesión, inclusión o cognición ('contain', 'belong', 'know', 'need') describen estados no dinámicos y exigen Present Simple incluso cuando nos referimos al momento actual.",
      },
      {
        conceptEs: "Auxiliar negativo 'does not + base' y posición de adverbios de frecuencia",
        incorrectExample:
          "The lab supervisor doesn't opens Hall C on Sundays and never is late on Mondays.",
        correctExample:
          "The lab supervisor does not open Hall C on Sundays and is never late on Mondays.",
        whyItMattersEs:
          "El auxiliar 'does' ya absorbe la marca de tercera persona singular (dejando el verbo en base 'open'), y los adverbios de frecuencia siempre siguen al verbo 'be' ('is never').",
      },
      {
        conceptEs: "Contraste entre determinante posesivo ('its'), posesivo autónomo y objeto",
        incorrectExample:
          "The registrar updated it's portal and emailed they a copy instead of our's.",
        correctExample: "The registrar updated its portal and emailed them a copy instead of ours.",
        whyItMattersEs:
          "'It's' equivale siempre a 'it is/has'; los posesivos autónomos ('ours', 'theirs', 'hers') jamás llevan apóstrofo, y tras un verbo transitivo o preposición se exige caso objeto ('them').",
      },
    ],
    microCheckQuestions: [
      {
        id: "fm-a1-core-q01",
        prompt:
          "Because the fellowship application portal closes at five o'clock today, several final-year candidates _____ in a hurry to upload their academic transcripts.",
        options: [
          {
            id: "A",
            text: "have",
            explanationEs:
              "Incorrecto: calco léxico del español ('tienen prisa'); en inglés la locución idiomática fija es 'be in a hurry', nunca 'have in a hurry'.",
          },
          {
            id: "B",
            text: "are",
            explanationEs:
              "Correcto: la expresión académica y estándar para indicar premura es 'be in a hurry', conjugada en plural ('are') para concordar con 'several final-year candidates'.",
          },
          {
            id: "C",
            text: "is",
            explanationEs:
              "Incorrecto: aunque selecciona el verbo 'be' adecuado, emplea la forma singular 'is' con un núcleo de sujeto plural ('candidates').",
          },
          {
            id: "D",
            text: "do",
            explanationEs:
              "Incorrecto: el auxiliar o verbo léxico 'do' no puede enlazar un sujeto con el sintagma preposicional de estado 'in a hurry'.",
          },
        ],
        correctOptionId: "B",
      },
      {
        id: "fm-a1-core-q02",
        prompt:
          "Right now the library interns are scanning historical maps, although the rare manuscript cabinet on the fourth floor _____ exclusively to the linguistics institute.",
        options: [
          {
            id: "A",
            text: "belongs",
            explanationEs:
              "Correcto: 'belong' es un verbo estativo de posesión que rechaza el aspecto continuo incluso en contraste con 'Right now', y concuerda en singular con 'cabinet'.",
          },
          {
            id: "B",
            text: "is belonging",
            explanationEs:
              "Incorrecto: trampa inducida por el marcador inicial 'Right now'; los verbos estativos de pertenencia como 'belong' son agramaticales en Present Continuous.",
          },
          {
            id: "C",
            text: "belong",
            explanationEs:
              "Incorrecto: el núcleo del sujeto de la cláusula concesiva es singular ('the rare manuscript cabinet'), por lo que exige la desinencia '-s' en Present Simple.",
          },
          {
            id: "D",
            text: "does belongs",
            explanationEs:
              "Incorrecto: combina innecesariamente el auxiliar 'does' en una oración afirmativa neutra y además duplica la marca '-s' en el verbo principal.",
          },
        ],
        correctOptionId: "A",
      },
      {
        id: "fm-a1-core-q03",
        prompt:
          "During the first week of the spring term, _____ essential for exchange students to confirm their laboratory sections with the department secretary.",
        options: [
          {
            id: "A",
            text: "is",
            explanationEs:
              "Incorrecto: omite el sujeto gramatical obligatorio por interferencia del español ('es esencial'), dejando al verbo 'is' sin sujeto tras el complemento temporal.",
          },
          {
            id: "B",
            text: "there are",
            explanationEs:
              "Incorrecto: 'there are' introduce sustantivos plurales existentes ('hay'), pero aquí sigue el adjetivo evaluativo 'essential' seguido de infinitivo.",
          },
          {
            id: "C",
            text: "they are",
            explanationEs:
              "Incorrecto: 'they' carece de referente previo y rompe la construcción impersonal 'it is + adjetivo + for + objeto + to-infinitive'.",
          },
          {
            id: "D",
            text: "it is",
            explanationEs:
              "Correcto: aporta el sujeto anticipatorio obligatorio 'it' que anticipa la cláusula de infinitivo ('to confirm their laboratory sections') junto al verbo copulativo 'is'.",
          },
        ],
        correctOptionId: "D",
      },
      {
        id: "fm-a1-core-q04",
        prompt:
          "When Professor Morales returned the graded lab notebooks to _____ after the seminar, Clara noticed that the unsigned binder on the desk was _____.",
        options: [
          {
            id: "A",
            text: "we ... her",
            explanationEs:
              "Incorrecto: tras la preposición 'to' es obligatorio un pronombre objeto ('us', no el sujeto 'we'), y al final sin sustantivo se requiere el posesivo autónomo 'hers'.",
          },
          {
            id: "B",
            text: "our ... hers",
            explanationEs:
              "Incorrecto: 'our' es un determinante posesivo que no puede aparecer solo detrás de la preposición 'to' sin un sustantivo al que modificar.",
          },
          {
            id: "C",
            text: "us ... hers",
            explanationEs:
              "Correcto: 'us' cumple la función de complemento preposicional tras 'to', y 'hers' funciona como pronombre posesivo autónomo equivalente a 'her binder'.",
          },
          {
            id: "D",
            text: "us ... her's",
            explanationEs:
              "Incorrecto: aunque emplea bien 'us', la grafía con apóstrofo 'her's' no existe en inglés estándar; ningún pronombre posesivo lleva apóstrofo.",
          },
        ],
        correctOptionId: "C",
      },
      {
        id: "fm-a1-core-q05",
        prompt:
          "The director of the undergraduate internship programs _____ incomplete applications, so seniors verify every signature before the deadline.",
        options: [
          {
            id: "A",
            text: "does not accept",
            explanationEs:
              "Correcto: el núcleo del sujeto es singular ('The director', no el complemento plural 'programs'), por lo que exige 'does not' seguido de la forma base 'accept'.",
          },
          {
            id: "B",
            text: "do not accept",
            explanationEs:
              "Incorrecto: cae en la trampa de concordancia por proximidad con 'internship programs' en lugar de concordar con el núcleo singular 'The director'.",
          },
          {
            id: "C",
            text: "does not accepts",
            explanationEs:
              "Incorrecto: duplica ilícitamente la flexión de tercera persona singular ('-s') en el verbo léxico cuando ya está presente en el auxiliar 'does'.",
          },
          {
            id: "D",
            text: "is not accept",
            explanationEs:
              "Incorrecto: combina el verbo copulativo 'is not' con un verbo transitivo activo en forma base ('accept'), construcción inexistente en inglés.",
          },
        ],
        correctOptionId: "A",
      },
    ],
  },

  // ===========================================================================
  // 2. A1 — Academic Uncountable Nouns, Articles & Core Prepositions
  // ===========================================================================
  {
    id: "a1-nouns-articles-quantifiers",
    cefrLevel: "A1",
    skill: "grammar",
    title: "Academic Uncountable Nouns, Articles & Core Prepositions",
    subtitleEs:
      "Sustantivos incontables académicos, artículos (a/an/the vs. artículo cero) y preposiciones de tiempo y espacio (in/on/at)",
    estimatedMinutes: 25,
    coreRuleSummaryEs:
      "Tres subsistemas nominales determinan la precisión gramatical en textos universitarios: (1) Sustantivos incontables académicos: términos centrales como 'research', 'information', 'equipment', 'advice', 'evidence', 'feedback', 'knowledge' y 'software' son estrictamente no contables en inglés; nunca llevan '-s' final, nunca admiten 'a/an' ni cuantificadores plurales ('many', 'several', 'few'), y exigen siempre verbo en singular ('is', 'has', 'demonstrates'). Para cuantificarlos se emplea 'much', 'little', 'a little', 'some', 'a great deal of' o partitivos contables ('a piece of advice', 'two research studies', 'an item of equipment'). (2) Sistema de artículos: elige 'a' ante sonido consonántico inicial —incluido el sonido /juː/ en 'a university' o 'a European journal'— y 'an' ante sonido vocálico —incluida la 'h' muda en 'an hour' o 'an honors thesis'— solo con contables singulares indefinidos; usa 'the' cuando el sustantivo está especificado o es único en el contexto; y aplica artículo cero (sin 'the') ante sustantivos plurales o incontables cuando enuncian generalizaciones categóricas ('Peer-reviewed journals validate scientific research'). (3) Preposiciones 'in / on / at': gradúa de mayor amplitud a punto exacto: 'in' para meses, años, décadas, partes del día y espacios cerrados o disciplinas ('in October, in 2026, in the auditorium, in economics'); 'on' para días de la semana, fechas completas, pisos, plataformas digitales y el campus ('on Wednesday, on May 12, on the third floor, on the student portal, on campus'); 'at' para horas exactas y puntos específicos de encuentro ('at 8:30 a.m., at the main desk').",
    itepBridgeTipEs:
      "En iTEP Grammar Part 2 es sumamente frecuente subrayar plurales inexistentes como 'researches', 'equipments' o 'advices' o emparejarlos con verbos en plural a varias palabras de distancia. En Writing Part 2, eliminar el 'the' genérico calco del español ('Technology reshapes higher education', no 'The technology reshapes the higher education') eleva de inmediato la naturalidad idiomática a estándar B2.",
    contrastTable: [
      {
        conceptEs: "Incontables académicos ('research', 'information', 'equipment', 'advice')",
        incorrectExample:
          "Recent researches provide many valuable informations about solar equipments.",
        correctExample:
          "Recent research provides a great deal of valuable information about solar equipment.",
        whyItMattersEs:
          "Pluralizar sustantivos no contables o combinarlos con 'many' y verbos plurales es uno de los errores más penalizados en las secciones de Grammar y Writing de iTEP.",
      },
      {
        conceptEs: "Regla fonética (no ortográfica) para 'a' vs. 'an'",
        incorrectExample: "Each freshman schedules a hour-long session with an university advisor.",
        correctExample: "Each freshman schedules an hour-long session with a university advisor.",
        whyItMattersEs:
          "'Hour' inicia con sonido vocálico por su 'h' muda ('an hour'), mientras que 'university' inicia con la semiconsonante /j/ ('a university').",
      },
      {
        conceptEs: "Artículo cero en generalizaciones plurales vs. 'the' específico",
        incorrectExample:
          "The graduate students rely on the digital databases to verify citations.",
        correctExample: "Graduate students rely on digital databases to verify citations.",
        whyItMattersEs:
          "Ante sustantivos plurales o incontables que aluden a toda una categoría en general, anteponer 'the' restringe erróneamente el significado a un grupo previo inexistente.",
      },
      {
        conceptEs: "Cuantificadores 'few / a few' (contable) vs. 'little / a little' (incontable)",
        incorrectExample: "Technicians had few time to repair a little broken spectrometers.",
        correctExample: "Technicians had little time to repair a few broken spectrometers.",
        whyItMattersEs:
          "'Time' es incontable ('little / a little'), mientras que 'spectrometers' es contable plural ('few / a few'); cruzarlos invalida la concordancia nominal.",
      },
      {
        conceptEs: "Precisión de 'in / on / at' para fechas, horas y niveles de edificio",
        incorrectExample:
          "The orientation seminar meets in Monday on 9:00 a.m. in the second floor.",
        correctExample: "The orientation seminar meets on Monday at 9:00 a.m. on the second floor.",
        whyItMattersEs:
          "Los días y pisos/superficies exigen 'on', y las horas puntuales del reloj exigen 'at'; usar 'in' para todos traslada literalmente el 'en' polivalente del español.",
      },
    ],
    microCheckQuestions: [
      {
        id: "fm-a1-nouns-q01",
        prompt:
          "Recent _____ conducted across twelve teaching hospitals _____ that structured mentorship reduces burnout among medical interns.",
        options: [
          {
            id: "A",
            text: "researches ... indicate",
            explanationEs:
              "Incorrecto: 'research' es un sustantivo estrictamente incontable en inglés académico; carece de plural 'researches' y no rige verbo plural.",
          },
          {
            id: "B",
            text: "research ... indicates",
            explanationEs:
              "Correcto: trata 'research' como sustantivo incontable sin marca de plural y mantiene concordancia rigurosa en tercera persona singular ('indicates').",
          },
          {
            id: "C",
            text: "a research ... indicates",
            explanationEs:
              "Incorrecto: aunque acierta con el verbo singular 'indicates', antepone el artículo indefinido 'a' a un sustantivo incontable (debería ser 'a study').",
          },
          {
            id: "D",
            text: "several research ... indicate",
            explanationEs:
              "Incorrecto: 'several' solo cuantifica sustantivos contables en plural y es incompatible con el incontable 'research'.",
          },
        ],
        correctOptionId: "B",
      },
      {
        id: "fm-a1-nouns-q02",
        prompt:
          "To graduate with departmental distinction, seniors must complete _____ and present their findings at the spring colloquium.",
        options: [
          {
            id: "A",
            text: "a honors thesis",
            explanationEs:
              "Incorrecto: la 'h' inicial de 'honors' es muda (/ˈɒnərz/), por lo que el sonido vocálico inicial prohíbe la forma 'a'.",
          },
          {
            id: "B",
            text: "honors thesis",
            explanationEs:
              "Incorrecto: 'thesis' es un sustantivo contable singular, y en inglés ningún contable singular puede aparecer en función argumental sin determinante.",
          },
          {
            id: "C",
            text: "many honors thesis",
            explanationEs:
              "Incorrecto: 'many' exige un sustantivo plural ('theses'), además de contradecir que cada estudiante presenta un trabajo de titulación individual.",
          },
          {
            id: "D",
            text: "an honors thesis",
            explanationEs:
              "Correcto: 'thesis' es contable singular y 'honors' comienza con sonido vocálico por su 'h' muda, exigiendo el artículo indefinido 'an'.",
          },
        ],
        correctOptionId: "D",
      },
      {
        id: "fm-a1-nouns-q03",
        prompt:
          "Because the preliminary manual contained very _____ detailed information on safety protocols, the instructor uploaded _____ supplemental guides.",
        options: [
          {
            id: "A",
            text: "little ... several",
            explanationEs:
              "Correcto: 'very little' cuantifica la escasez del sustantivo incontable 'information', mientras que 'several' modifica adecuadamente al contable plural 'guides'.",
          },
          {
            id: "B",
            text: "few ... much",
            explanationEs:
              "Incorrecto: invierte ambas categorías nominales al usar 'few' con el incontable 'information' y 'much' con el contable plural 'guides'.",
          },
          {
            id: "C",
            text: "little ... much",
            explanationEs:
              "Incorrecto: acierta en el primer espacio con 'little', pero 'much' no puede acompañar al sustantivo contable plural 'guides'.",
          },
          {
            id: "D",
            text: "few ... a little",
            explanationEs:
              "Incorrecto: aplica 'few' al incontable 'information' y 'a little' al contable plural 'guides', rompiendo la concordancia en ambos segmentos.",
          },
        ],
        correctOptionId: "A",
      },
      {
        id: "fm-a1-nouns-q04",
        prompt:
          "Final registration for laboratory sections opens _____ August 24 _____ 8:00 a.m. _____ the university portal.",
        options: [
          {
            id: "A",
            text: "in ... at ... in",
            explanationEs:
              "Incorrecto: aunque los meses solos llevan 'in' ('in August'), al especificar el día del mes ('August 24') es obligatorio 'on', igual que con plataformas digitales.",
          },
          {
            id: "B",
            text: "on ... in ... at",
            explanationEs:
              "Incorrecto: usa 'on' correctamente para la fecha completa, pero falla al emplear 'in' en lugar de 'at' ante una hora exacta del reloj ('8:00 a.m.').",
          },
          {
            id: "C",
            text: "on ... at ... on",
            explanationEs:
              "Correcto: rige 'on' para una fecha específica con día ('August 24'), 'at' para una hora exacta ('8:00 a.m.') y 'on' para plataformas digitales ('on the university portal').",
          },
          {
            id: "D",
            text: "at ... on ... in",
            explanationEs:
              "Incorrecto: intercambia ilícitamente las preposiciones de fecha ('at August 24') y hora ('on 8:00 a.m.'), además de usar 'in' con 'portal'.",
          },
        ],
        correctOptionId: "C",
      },
      {
        id: "fm-a1-nouns-q05",
        prompt:
          "In academic publishing, _____ typically evaluate methodology blind, whereas _____ assigned to our department's journal sign open reports.",
        options: [
          {
            id: "A",
            text: "the peer reviewers ... a peer reviewer",
            explanationEs:
              "Incorrecto: añade 'the' innecesario en la generalización inicial y luego usa un singular 'a peer reviewer' que no concuerda con el verbo plural 'sign'.",
          },
          {
            id: "B",
            text: "peer reviewers ... the peer reviewers",
            explanationEs:
              "Correcto: utiliza artículo cero ('peer reviewers') para referirse al gremio en general y 'the peer reviewers' cuando está delimitado por 'assigned to our department's journal'.",
          },
          {
            id: "C",
            text: "the peer reviewers ... peer reviewers",
            explanationEs:
              "Incorrecto: invierte la lógica del sistema de artículos en inglés al poner 'the' en la afirmación universal y omitirlo ante el subconjunto específico.",
          },
          {
            id: "D",
            text: "a peer reviewer ... the peer reviewers",
            explanationEs:
              "Incorrecto: el singular 'a peer reviewer' choca gramaticalmente con el verbo en plural 'evaluate' de la primera cláusula.",
          },
        ],
        correctOptionId: "B",
      },
    ],
  },

  // ===========================================================================
  // 3. A2 — Past Narrative Framing, Irregular Verbs & Future Contrasts
  // ===========================================================================
  {
    id: "a2-past-future-narration",
    cefrLevel: "A2",
    skill: "grammar",
    title: "Past Narrative Framing, Irregular Verbs & Future Contrasts",
    subtitleEs:
      "Past Simple vs. Past Continuous (while/when), verbos irregulares en reportes y contraste de futuro (will, going to y agenda)",
    estimatedMinutes: 25,
    coreRuleSummaryEs:
      "La precisión cronológica en reportes y diálogos universitarios exige dominar tres ejes: (1) Contraste Past Simple vs. Past Continuous: el Past Simple ('-ed' o forma irregular V2; negación y pregunta mediante 'did + forma base' sin sufijo pasado en el verbo léxico) presenta acciones concluidas y eventos puntuales en tiempo cerrado ('yesterday', 'last spring', 'in 1995'). El Past Continuous ('was/were + -ing') construye la acción larga en desarrollo que sirve de marco; habitualmente 'while' encabeza la actividad continua ('While the committee was deliberating') y 'when' introduce el suceso puntual en Past Simple que irrumpe ('when the dean called'). (2) Verbos irregulares y pares engañosos en registro académico: distingue con exactitud 'lead -> led' (encabezar), 'seek -> sought' (buscar/solicitar), 'choose -> chose', el intransitivo 'rise -> rose' (aumentar por sí mismo, sin objeto directo: 'enrollment rose') frente al regular transitivo 'raise -> raised' (elevar o recaudar algo: 'raised funds'), 'fall -> fell' (descender) frente a 'feel -> felt', y 'find -> found' (hallar) frente al regular 'found -> founded' (fundar una institución). (3) Contraste tripartito de futuro y subordinadas temporales: emplea 'will + base' para decisiones tomadas en el acto del habla, ofrecimientos o predicciones analíticas; 'be going to + base' para intenciones decididas previamente o proyecciones basadas en indicios presentes observables; y Present Continuous ('am/is/are + -ing') para citas o eventos logísticos ya confirmados en agenda con fecha/lugar. En toda cláusula subordinada temporal futura tras 'when', 'before', 'after', 'until', 'once' o 'as soon as', usa Present Simple y jamás 'will'.",
    itepBridgeTipEs:
      "En iTEP Grammar Part 1 y Part 2 son clásicos los distractores que confunden 'rose' con 'raised' o 'founded' con 'found' en oraciones sobre economía e historia institucional, así como insertar 'will' tras 'until' o 'once'. Además, controlar 'did + forma base' es el cimiento directo para no fallar las inversiones negativas avanzadas de nivel B2 ('Not until 2020 did the agency publish —nunca published— the archive').",
    contrastTable: [
      {
        conceptEs: "Forma base obligatoria detrás del auxiliar 'did' en pasado",
        incorrectExample: "Why did the engineering team not tested the backup generator yesterday?",
        correctExample: "Why did the engineering team not test the backup generator yesterday?",
        whyItMattersEs:
          "El auxiliar 'did' ya porta el tiempo pasado de toda la cláusula; añadir '-ed' o usar una forma irregular V2 detrás de 'did' constituye una doble marca agramatical.",
      },
      {
        conceptEs: "Acción de fondo ('while' + Past Continuous) vs. interrupción ('Past Simple')",
        incorrectExample: "While Dr. Kim reviewed the slides, the projector bulb was burning out.",
        correctExample: "While Dr. Kim was reviewing the slides, the projector bulb burned out.",
        whyItMattersEs:
          "La revisión prolongada exige Past Continuous ('was reviewing') como marco temporal, mientras que el fallo instantáneo de la lámpara requiere Past Simple ('burned out').",
      },
      {
        conceptEs: "Pares verbales críticos: 'rise/raise' y 'find/found'",
        incorrectExample:
          "Graduate applications raised sharply at the institute that Dr. Bell found in 1962.",
        correctExample:
          "Graduate applications rose sharply at the institute that Dr. Bell founded in 1962.",
        whyItMattersEs:
          "'Rise' (pasado 'rose') es intransitivo y no lleva objeto directo; 'found' ('fundar') es un verbo regular cuyo pasado es 'founded', distinto de 'find -> found' ('encontrar').",
      },
      {
        conceptEs: "Agenda confirmada (Present Continuous) vs. decisión espontánea ('will')",
        incorrectExample:
          "I will meet the dean tomorrow at 10:00 a.m.; her assistant confirmed the slot on Monday.",
        correctExample:
          "I am meeting the dean tomorrow at 10:00 a.m.; her assistant confirmed the slot on Monday.",
        whyItMattersEs:
          "En conversaciones universitarias de Listening y Speaking, los compromisos cerrados en agenda con hora e interlocutor se expresan con Present Continuous, reservando 'will' para decisiones en el momento.",
      },
      {
        conceptEs:
          "Exclusión de 'will' en subordinadas temporales futuras ('once / until / before')",
        incorrectExample:
          "The lab coordinator will unlock the centrifuge once the trainees will sign the log.",
        correctExample:
          "The lab coordinator will unlock the centrifuge once the trainees sign the log.",
        whyItMattersEs:
          "Las conjunciones de tiempo futuro ('once', 'until', 'before', 'as soon as', 'when') exigen Present Simple en inglés estándar aunque el evento aún no haya ocurrido.",
      },
    ],
    microCheckQuestions: [
      {
        id: "fm-a2-past-q01",
        prompt:
          "Professor Lin _____ the regression model on the whiteboard when a campus-wide power outage abruptly _____ the afternoon seminar.",
        options: [
          {
            id: "A",
            text: "was explaining ... interrupted",
            explanationEs:
              "Correcto: Past Continuous singular ('was explaining') describe la actividad académica en progreso cuando irrumpió el evento puntual en Past Simple ('interrupted').",
          },
          {
            id: "B",
            text: "explained ... was interrupting",
            explanationEs:
              "Incorrecto: invierte la relación aspectual al presentar el corte repentino de energía como telón de fondo continuo y la explicación previa como evento puntual.",
          },
          {
            id: "C",
            text: "were explaining ... interrupted",
            explanationEs:
              "Incorrecto: selecciona bien los tiempos narrativos, pero emplea el auxiliar plural 'were' con el sujeto singular 'Professor Lin'.",
          },
          {
            id: "D",
            text: "is explaining ... interrupts",
            explanationEs:
              "Incorrecto: mezcla tiempos presentes con una narración episódica cerrada encabezada por 'when ... abruptly'.",
          },
        ],
        correctOptionId: "A",
      },
      {
        id: "fm-a2-past-q02",
        prompt:
          "Retention rates among first-generation students _____ by eighteen percent last year after the college _____ additional peer-tutoring grants.",
        options: [
          {
            id: "A",
            text: "raised ... seeked",
            explanationEs:
              "Incorrecto: comete doble error morfológico: 'raised' es transitivo y exige objeto directo, y el verbo irregular 'seek' jamás forma el pasado regular '*seeked'.",
          },
          {
            id: "B",
            text: "rose ... seeked",
            explanationEs:
              "Incorrecto: usa adecuadamente el pasado intransitivo 'rose', pero regulariza erróneamente el pasado de 'seek' como '*seeked' en lugar de 'sought'.",
          },
          {
            id: "C",
            text: "rose ... sought",
            explanationEs:
              "Correcto: emplea 'rose' (pasado intransitivo de 'rise', sin objeto directo) y 'sought' (pasado irregular de 'seek', 'solicitar/buscar') en el marco cerrado 'last year'.",
          },
          {
            id: "D",
            text: "risen ... sought",
            explanationEs:
              "Incorrecto: el participio pasado 'risen' no puede funcionar como verbo finito principal sin un auxiliar, y además 'last year' exige Past Simple ('rose').",
          },
        ],
        correctOptionId: "C",
      },
      {
        id: "fm-a2-past-q03",
        prompt:
          "Archivists _____ any original financial ledgers from 1908, the year in which regional educators _____ the school of forestry.",
        options: [
          {
            id: "A",
            text: "did not found ... found",
            explanationEs:
              "Incorrecto: confunde ambos verbos; 'did not found' significaría 'no fundaron' (y con el sentido de 'hallar' sería doble pasado), mientras que en el segundo hueco 'found' es el pasado de 'find', no de 'found' ('fundar').",
          },
          {
            id: "B",
            text: "did not find ... founded",
            explanationEs:
              "Correcto: tras 'did not' usa la forma base 'find' ('no hallaron') y en la cláusula relativa emplea 'founded', pasado regular del verbo 'found' ('fundar una institución').",
          },
          {
            id: "C",
            text: "were not find ... founded",
            explanationEs:
              "Incorrecto: construye una negación inválida combinando 'were not' con un verbo activo en forma base ('find').",
          },
          {
            id: "D",
            text: "did not find ... finded",
            explanationEs:
              "Incorrecto: acierta en el primer segmento, pero inventa la forma inexistente '*finded' además de confundir 'find' con 'found' ('establecer').",
          },
        ],
        correctOptionId: "B",
      },
      {
        id: "fm-a2-past-q04",
        prompt:
          "According to her confirmed departmental schedule, the provost _____ the accreditation delegates from Toronto tomorrow at 11:00 a.m. in the senate chamber.",
        options: [
          {
            id: "A",
            text: "going to welcome",
            explanationEs:
              "Incorrecto: omite el verbo auxiliar finito 'is' ('is going to welcome'), dejando a la oración sin núcleo verbal conjugado.",
          },
          {
            id: "B",
            text: "welcome",
            explanationEs:
              "Incorrecto: carece de la '-s' de tercera persona singular para concordar con 'the provost' y no expresa adecuadamente una cita individual de mañana.",
          },
          {
            id: "C",
            text: "will welcoming",
            explanationEs:
              "Incorrecto: el modal 'will' exige infinitivo simple ('will welcome') o 'be + -ing' ('will be welcoming'), nunca un participio '-ing' directo.",
          },
          {
            id: "D",
            text: "is welcoming",
            explanationEs:
              "Correcto: Present Continuous ('is welcoming') es la forma idónea para expresar un compromiso institucional ya fijado y confirmado en agenda con hora y lugar exactos.",
          },
        ],
        correctOptionId: "D",
      },
      {
        id: "fm-a2-past-q05",
        prompt:
          "Oh, the departmental copier just ran out of toner—wait a moment, I _____ the exam packets in the media center before the proctor _____ the hall.",
        options: [
          {
            id: "A",
            text: "will print ... opens",
            explanationEs:
              "Correcto: 'will print' expresa una decisión/ofrecimiento espontáneo ante un imprevisto inmediato, y la conjunción temporal 'before' exige Present Simple ('opens') con valor futuro.",
          },
          {
            id: "B",
            text: "am printing ... will open",
            explanationEs:
              "Incorrecto: Present Continuous implicaría una cita agendada de antemano (contradiciendo la reacción espontánea 'Oh... wait a moment') y 'before' prohíbe 'will open'.",
          },
          {
            id: "C",
            text: "print ... opens",
            explanationEs:
              "Incorrecto: en la cláusula principal 'I print' expresa un hábito rutinario general, no una acción inmediata decidida en el instante de hablar.",
          },
          {
            id: "D",
            text: "am going to print ... will open",
            explanationEs:
              "Incorrecto: 'be going to' sugiere intención previa al imprevisto y, sobre todo, insertar 'will open' tras la conjunción temporal 'before' es agramatical.",
          },
        ],
        correctOptionId: "A",
      },
    ],
  },

  // ===========================================================================
  // 4. A2 — Modality, Comparative Precision & Verb Complementation
  // ===========================================================================
  {
    id: "a2-modals-comparisons",
    cefrLevel: "A2",
    skill: "grammar",
    title: "Modality, Comparative Precision & Verb Complementation",
    subtitleEs:
      "Comparativos y superlativos irregulares/largos (farther/further, less, as...as), modales y patrones de infinitivo vs. -ing",
    estimatedMinutes: 25,
    coreRuleSummaryEs:
      "Este módulo consolida tres estructuras de altísima densidad en iTEP: (1) Grados comparativos y superlativos: usa '-er / the -est' en adjetivos monosílabos y bisílabos terminados en '-y', y 'more / the most' o 'less / the least' en adjetivos y adverbios largos seguidos de 'than' (jamás 'that' ni dobles marcas como 'more better'). Domina los irregulares 'good/well -> better -> the best', 'bad/badly -> worse -> the worst', y la distinción académica crucial entre 'farther' (distancia física mensurable) y 'further' (profundidad abstracta o sentido de 'adicional', como en 'further investigation' o 'further notice'). Para igualdad o inferioridad proporcional emplea '(not) as + adjetivo/adverbio en grado positivo + as'. (2) Sistema modal: los modales puros ('must', 'should', 'can', 'could', 'may', 'might') son invariables y van seguidos directamente del infinitivo sin 'to'. En afirmativo 'must' denota norma institucional directa o deducción firme y 'have to' obligación reglamentaria (supliendo a 'must' en pasado con 'had to'), pero en negativo se oponen por completo: 'must not' impone prohibición estricta, mientras que 'do/does not have to' indica que algo es opcional. Usa 'should / ought to' para recomendación analítica y 'could' para peticiones formales o posibilidad tentativa. (3) Complementación verbal ('to-infinitive' vs. '-ing'): memoriza el régimen del verbo matriz: exigen '-ing' verbos como 'suggest', 'recommend' (sin objeto personal), 'consider', 'avoid', 'postpone', 'risk', 'finish' y absolutamente todas las preposiciones —incluidas locuciones donde 'to' es preposición, como 'look forward to', 'be committed to' o 'contribute to'—; exigen 'to + infinitive' verbos prospectivos como 'decide', 'manage', 'expect', 'tend', 'refuse', 'agree' y 'fail'.",
    itepBridgeTipEs:
      "En iTEP Grammar Part 1 y Part 2 aparecen de forma sistemática tres reactivos puente hacia B2: 'suggest/consider + -ing' frente al calco '*suggest to do', expresiones con 'to' preposicional seguidas de '-ing' ('look forward to reviewing', 'object to paying') y el contraste entre adjetivo y adverbio dentro de 'as ... as' según si se califica a un sustantivo o a un verbo de acción.",
    contrastTable: [
      {
        conceptEs:
          "'Further' (adicional/abstracto) vs. 'farther' y prohibición de doble comparativo",
        incorrectExample:
          "The ethics committee requested more farther evidence before granting approval.",
        correctExample: "The ethics committee requested further evidence before granting approval.",
        whyItMattersEs:
          "En registro académico 'further' significa 'adicional / más profundo' (mientras que 'farther' se limita a distancia física), y anteponer 'more' genera un doble comparativo inválido.",
      },
      {
        conceptEs: "Oposición entre prohibición ('must not'), opcionalidad y pasado ('had to')",
        incorrectExample:
          "Yesterday all lab users musted wear coats, though visitors must not attend the optional tour.",
        correctExample:
          "Yesterday all lab users had to wear coats, though visitors do not have to attend the optional tour.",
        whyItMattersEs:
          "'Must' carece de forma pasada ('*musted' no existe; se usa 'had to'), y 'must not' prohíbe tajantemente en vez de expresar carácter opcional ('do not have to').",
      },
      {
        conceptEs: "Régimen verbal: 'suggest / avoid / consider + -ing' vs. 'expect / manage + to'",
        incorrectExample:
          "Several reviewers suggested to revise the abstract and avoided to cite outdated blogs.",
        correctExample:
          "Several reviewers suggested revising the abstract and avoided citing outdated blogs.",
        whyItMattersEs:
          "En inglés 'suggest', 'avoid', 'consider' y 'postpone' rechazan el infinitivo con 'to' y exigen gerundio ('-ing') o, en el caso de 'suggest', una cláusula con 'that'.",
      },
      {
        conceptEs: "Preposición 'to' seguida obligatoriamente de '-ing' ('look forward to')",
        incorrectExample:
          "Our faculty looks forward to collaborate with your marine biology institute.",
        correctExample:
          "Our faculty looks forward to collaborating with your marine biology institute.",
        whyItMattersEs:
          "En 'look forward to', 'be dedicated to' y 'contribute to', la palabra 'to' es una preposición (admite un sustantivo detrás), por lo que cualquier verbo siguiente debe ir en '-ing'.",
      },
      {
        conceptEs:
          "Precisión adverbial en 'as ... as' y comparativos de inferioridad ('less ... than')",
        incorrectExample:
          "The older scanner is less accurate that the new unit and does not run as quiet as expected.",
        correctExample:
          "The older scanner is less accurate than the new unit and does not run as quietly as expected.",
        whyItMattersEs:
          "Todo comparativo de desigualdad exige 'than' (nunca 'that'), y al modificar un verbo de acción como 'run' dentro de 'as ... as' se requiere el adverbio 'quietly', no el adjetivo 'quiet'.",
      },
    ],
    microCheckQuestions: [
      {
        id: "fm-a2-mod-q01",
        prompt:
          "Without _____ empirical verification, the preliminary model remains _____ convincing than the peer-reviewed framework published last year.",
        options: [
          {
            id: "A",
            text: "further ... less",
            explanationEs:
              "Correcto: 'further' expresa adecuadamente investigación o validación adicional/abstracta, y 'less' forma el comparativo de inferioridad ante 'convincing than'.",
          },
          {
            id: "B",
            text: "farther ... fewer",
            explanationEs:
              "Incorrecto: 'farther' alude a distancia espacial física y 'fewer' solo cuantifica sustantivos contables plurales, nunca califica a un adjetivo como 'convincing'.",
          },
          {
            id: "C",
            text: "more further ... less",
            explanationEs:
              "Incorrecto: 'further' ya posee valor comparativo/adicional, de modo que anteponer 'more' produce una duplicación comparativa agramatical.",
          },
          {
            id: "D",
            text: "furthest ... least",
            explanationEs:
              "Incorrecto: introduce formas superlativas ('least convincing') que chocan sintácticamente con la conjunción comparativa 'than'.",
          },
        ],
        correctOptionId: "A",
      },
      {
        id: "fm-a2-mod-q02",
        prompt:
          "Under federal biosafety rules, unauthorized personnel _____ enter Containment Room 3, and last week even visiting professors _____ sign a security log at reception.",
        options: [
          {
            id: "A",
            text: "do not have to ... must",
            explanationEs:
              "Incorrecto: 'do not have to' indicaría que entrar sin autorización es opcional (en vez de prohibido), y 'must' no puede narrar una obligación cumplida 'last week'.",
          },
          {
            id: "B",
            text: "must not ... had to",
            explanationEs:
              "Correcto: 'must not' codifica prohibición reglamentaria estricta en presente, y 'had to' expresa correctamente la obligación pasada correspondiente a 'last week'.",
          },
          {
            id: "C",
            text: "should not to ... had to",
            explanationEs:
              "Incorrecto: los modales puros como 'should' jamás admiten la partícula 'to' antes del verbo principal ('enter'), además de suavizar en exceso una norma federal.",
          },
          {
            id: "D",
            text: "must not ... musted",
            explanationEs:
              "Incorrecto: aunque acierta con la prohibición 'must not', inventa la forma inexistente '*musted' para el pasado de 'must'.",
          },
        ],
        correctOptionId: "B",
      },
      {
        id: "fm-a2-mod-q03",
        prompt:
          "To satisfy the journal's formatting standards, the authors considered _____ two redundant appendices and managed _____ the manuscript before Friday's deadline.",
        options: [
          {
            id: "A",
            text: "to remove ... shortening",
            explanationEs:
              "Incorrecto: invierte por completo los patrones de complementación: 'consider' rechaza infinitivo con 'to' y 'manage' rechaza gerundio '-ing'.",
          },
          {
            id: "B",
            text: "removing ... shortening",
            explanationEs:
              "Incorrecto: aplica correctamente '-ing' tras 'considered', pero falla en el segundo segmento porque 'manage' exige siempre 'to + infinitive' ('managed to shorten').",
          },
          {
            id: "C",
            text: "to remove ... to shorten",
            explanationEs:
              "Incorrecto: acierta en 'managed to shorten', pero 'considered' exige obligatoriamente gerundio ('removing'), nunca infinitivo con 'to'.",
          },
          {
            id: "D",
            text: "removing ... to shorten",
            explanationEs:
              "Correcto: respeta rigurosamente ambos regímenes verbales académicos: 'consider + -ing' ('considered removing') y 'manage + to-infinitive' ('managed to shorten').",
          },
        ],
        correctOptionId: "D",
      },
      {
        id: "fm-a2-mod-q04",
        prompt:
          "During heavy winter storms, the suburban shuttle does not run _____ the underground rail line, making morning commute times _____ across the district.",
        options: [
          {
            id: "A",
            text: "so punctual than ... more bad",
            explanationEs:
              "Incorrecto: mezcla 'so' con 'than', usa adjetivo en vez de adverbio tras 'run' y emplea la forma regularizada inválida '*more bad' en lugar de 'worse'.",
          },
          {
            id: "B",
            text: "as punctual as ... worst",
            explanationEs:
              "Incorrecto: el verbo de acción 'run' requiere ser modificado por el adverbio 'punctually' (no por el adjetivo 'punctual'), y el contexto comparativo pide 'worse', no 'worst'.",
          },
          {
            id: "C",
            text: "as punctually as ... worse",
            explanationEs:
              "Correcto: integra el adverbio 'punctually' dentro de 'as ... as' para calificar al verbo 'run' y emplea el comparativo irregular 'worse' para contrastar los tiempos de traslado.",
          },
          {
            id: "D",
            text: "more punctually as ... worse",
            explanationEs:
              "Incorrecto: cruza de forma agramatical un comparativo de superioridad ('more punctually') con la partícula de igualdad 'as' en vez de 'than'.",
          },
        ],
        correctOptionId: "C",
      },
      {
        id: "fm-a2-mod-q05",
        prompt:
          "_____ you share the updated budget spreadsheet with the committee members? Several department chairs are looking forward to _____ the allocation figures.",
        options: [
          {
            id: "A",
            text: "Can to ... review",
            explanationEs:
              "Incorrecto: el modal 'can' no admite 'to' intermedio y la locución preposicional 'look forward to' prohíbe usar la forma base 'review'.",
          },
          {
            id: "B",
            text: "Could ... reviewing",
            explanationEs:
              "Correcto: 'Could' formula una petición profesional cortés seguida del verbo base 'share', y 'looking forward to' exige gerundio ('reviewing') porque 'to' es preposición.",
          },
          {
            id: "C",
            text: "Could ... review",
            explanationEs:
              "Incorrecto: trampa clásica de examen; confunde la preposición 'to' de 'look forward to' con la marca de infinitivo y deja el verbo en forma base 'review'.",
          },
          {
            id: "D",
            text: "Should ... reviewed",
            explanationEs:
              "Incorrecto: detrás de la preposición 'to' no puede aparecer un participio pasado aislado ('reviewed'), sino un sustantivo o gerundio en '-ing'.",
          },
        ],
        correctOptionId: "B",
      },
    ],
  },

  // ===========================================================================
  // 5. B1 — Perfect Aspect Chronology & Academic Passive Voice
  // ===========================================================================
  {
    id: "b1-perfect-tenses-passive",
    cefrLevel: "B1",
    skill: "grammar",
    title: "Perfect Aspect Chronology & Academic Passive Voice",
    subtitleEs:
      "Present Perfect vs. Past Simple, Past Perfect (had + V3), marcadores (for/since/already/yet) y voz pasiva en presente y pasado",
    estimatedMinutes: 30,
    coreRuleSummaryEs:
      "El dominio de los tiempos perfectos y la voz pasiva marca la frontera estructural hacia el discurso académico B2: (1) Present Perfect ('have/has + V3') vs. Past Simple ('V2'): la elección depende de si el marco temporal sigue abierto hacia el presente o quedó cerrado en el pasado. Si aparece una referencia concluida ('in 2016', 'last quarter', 'two months ago', 'when the lab opened'), el inglés exige Past Simple; si la acción inició en el pasado y continúa vigente hoy ('for' + duración, 'since' + origen), ocurrió en un periodo aún abierto ('this semester', 'over the past decade', 'so far', 'to date') o destaca un resultado presente sin fechar el momento pasado, exige Present Perfect. (2) Marcadores aspectuales clave: 'for' mide extensión cuantitativa ('for eight years', nunca 'during eight years' con tiempos perfectos); 'since' fija el punto inicial ('since 2019' o 'since + cláusula en Past Simple'); 'already' subraya realización previa en afirmativas ('has already been published'); y 'yet' cierra oraciones negativas e interrogativas para indicar algo pendiente ('has not been verified yet'). (3) Past Perfect ('had + V3'): establece anterioridad estricta ('el pasado del pasado') respecto a otro evento pasado explícito, habitual con 'by the time + Past Simple', 'before' o en cláusulas causales retrospectivas ('failed because the valve had leaked'). (4) Voz pasiva ('be + V3'): indispensable en prosa científica cuando el sujeto gramatical recibe la acción ('samples are frozen', 'grants were awarded', 'hypotheses have been tested', 'data had been encrypted'). Conjuga 'be' en el tiempo requerido seguido siempre del participio pasado V3, usando 'by' para el agente ejecutor y 'with' para instrumentos o métodos.",
    itepBridgeTipEs:
      "En iTEP Academic-Plus, la combinación simultánea de tiempo perfecto + voz pasiva ('has not been peer-reviewed yet', 'had been archived before...') separa nítidamente a los candidatos B1 de los B2: en Grammar Part 2 abundan las trampas de voz activa con sujetos inanimados ('*the study has conducted') o el cruce de Present Perfect con fechas cerradas ('*has been founded in 1984'). Incorporar pasivas académicas precisas en Writing Part 2 eleva de inmediato la objetividad y el puntaje gramatical.",
    contrastTable: [
      {
        conceptEs: "Incompatibilidad absoluta de Present Perfect con fechas cerradas",
        incorrectExample: "The astronomy department has installed the radio telescope in 2017.",
        correctExample: "The astronomy department installed the radio telescope in 2017.",
        whyItMattersEs:
          "Cualquier marcador temporal concluido ('in 2017', 'last year', 'yesterday') bloquea el vínculo con el presente que exige 'have/has + V3' e impone Past Simple.",
      },
      {
        conceptEs: "Continuidad desde el pasado con 'since' + cláusula en Past Simple",
        incorrectExample:
          "Professor Vance coordinates this research cluster since he has joined the faculty.",
        correctExample:
          "Professor Vance has coordinated this research cluster since he joined the faculty.",
        whyItMattersEs:
          "A diferencia del presente con 'desde' en español, la cláusula principal requiere Present Perfect ('has coordinated') y el hito puntual tras 'since' va en Past Simple ('joined').",
      },
      {
        conceptEs: "Duración con 'for' (no 'during') y polaridad de 'yet' vs. 'already'",
        incorrectExample:
          "Reviewers have examined the manuscript during six weeks, but it has not already appeared.",
        correctExample:
          "Reviewers have examined the manuscript for six weeks, but it has not appeared yet.",
        whyItMattersEs:
          "'During' precede sustantivos de evento ('during the conference'), nunca cantidades de tiempo con Present Perfect ('for six weeks'), y las negativas de expectativa pendiente cierran con 'yet'.",
      },
      {
        conceptEs: "Anterioridad retrospectiva con Past Perfect ('had + V3')",
        incorrectExample:
          "By the time the symposium started, half of the virtual attendees already logged in.",
        correctExample:
          "By the time the symposium started, half of the virtual attendees had already logged in.",
        whyItMattersEs:
          "'By the time + Past Simple' fija un límite pasado; toda acción culminada con anterioridad a ese límite requiere obligatoriamente 'had + participio pasado'.",
      },
      {
        conceptEs: "Voz pasiva académica completa ('be + V3') con sujeto inanimado",
        incorrectExample:
          "All survey responses collected anonymously and have analyzed with statistical software.",
        correctExample:
          "All survey responses were collected anonymously and have been analyzed with statistical software.",
        whyItMattersEs:
          "Los sujetos pacientes inanimados ('responses') no ejecutan 'collect' ni 'analyze'; omitir 'were' o 'been' convierte erróneamente la estructura pasiva en activa.",
      },
    ],
    microCheckQuestions: [
      {
        id: "fm-b1-perf-q01",
        prompt:
          "Although the university _____ its interdisciplinary robotics lab in 2015, total external patent filings _____ threefold over the past decade.",
        options: [
          {
            id: "A",
            text: "has established ... grew",
            explanationEs:
              "Incorrecto: invierte la lógica temporal al combinar Present Perfect con la fecha cerrada 'in 2015' y Past Simple con el periodo acumulativo aún vigente 'over the past decade'.",
          },
          {
            id: "B",
            text: "established ... have grown",
            explanationEs:
              "Correcto: emplea Past Simple ('established') para el hito cerrado 'in 2015' y Present Perfect plural ('have grown') para la tendencia acumulada hasta hoy ('over the past decade').",
          },
          {
            id: "C",
            text: "had established ... has grown",
            explanationEs:
              "Incorrecto: usa un Past Perfect sin punto pasado de referencia posterior y además rompe la concordancia al usar singular 'has' con el sujeto plural 'filings'.",
          },
          {
            id: "D",
            text: "established ... are growing since",
            explanationEs:
              "Incorrecto: Present Continuous no se combina con marcos acumulativos como 'over the past decade', y 'since' quedaría colgando antes de 'threefold'.",
          },
        ],
        correctOptionId: "B",
      },
      {
        id: "fm-b1-perf-q02",
        prompt:
          "The biochemistry team discarded Thursday's trial batch because several reagent vials _____ before the cold-storage alarm was repaired.",
        options: [
          {
            id: "A",
            text: "had been contaminated",
            explanationEs:
              "Correcto: Past Perfect Passive ('had been contaminated') expresa tanto la anterioridad respecto a 'discarded / was repaired' como la voz pasiva del sujeto paciente 'vials'.",
          },
          {
            id: "B",
            text: "have been contaminated",
            explanationEs:
              "Incorrecto: aunque acierta con la voz pasiva, Present Perfect se ancla al presente y choca con el marco íntegramente pasado ('discarded ... before ... was repaired').",
          },
          {
            id: "C",
            text: "had contaminated",
            explanationEs:
              "Incorrecto: selecciona bien el Past Perfect para la anterioridad, pero en voz activa, como si los viales ('vials') hubieran contaminado algo en vez de sufrir la contaminación.",
          },
          {
            id: "D",
            text: "were contaminating",
            explanationEs:
              "Incorrecto: Past Continuous activo falla tanto en diátesis (sujeto paciente inanimado) como al no marcar la anterioridad previa a la reparación de la alarma.",
          },
        ],
        correctOptionId: "A",
      },
      {
        id: "fm-b1-perf-q03",
        prompt:
          "_____ the institutional open-access policy took effect last autumn, faculty members have _____ deposited over six hundred preprints in the digital archive.",
        options: [
          {
            id: "A",
            text: "For ... already",
            explanationEs:
              "Incorrecto: 'For' introduce una cantidad de tiempo nominal, nunca una cláusula finita con sujeto y verbo en Past Simple ('took effect').",
          },
          {
            id: "B",
            text: "Since ... yet",
            explanationEs:
              "Incorrecto: 'yet' como adverbio temporal solo es gramatical en cláusulas negativas o interrogativas al final, nunca intercalado en una oración afirmativa.",
          },
          {
            id: "C",
            text: "Since ... already",
            explanationEs:
              "Correcto: 'Since' introduce el punto de inicio pasado ('took effect last autumn') en correlación con Present Perfect, y 'already' destaca el logro acumulado entre auxiliar y participio.",
          },
          {
            id: "D",
            text: "During ... just",
            explanationEs:
              "Incorrecto: 'During' es una preposición que exige un sintagma nominal detrás, incapaz de encabezar una cláusula con verbo conjugado ('took effect').",
          },
        ],
        correctOptionId: "C",
      },
      {
        id: "fm-b1-perf-q04",
        prompt:
          "At yesterday's annual convocation ceremony, four research innovation medals _____ to early-career scholars by the university senate.",
        options: [
          {
            id: "A",
            text: "awarded",
            explanationEs:
              "Incorrecto: voz activa; las medallas ('medals') no otorgan nada por sí mismas, sino que son otorgadas ('by the university senate').",
          },
          {
            id: "B",
            text: "have been awarded",
            explanationEs:
              "Incorrecto: aunque usa voz pasiva plural, Present Perfect es incompatible con el marcador temporal cerrado 'At yesterday's annual convocation ceremony'.",
          },
          {
            id: "C",
            text: "was awarded",
            explanationEs:
              "Incorrecto: identifica el Past Simple pasivo por 'yesterday's', pero emplea el auxiliar singular 'was' con un sujeto plural ('four research innovation medals').",
          },
          {
            id: "D",
            text: "were awarded",
            explanationEs:
              "Correcto: Past Simple Passive plural ('were awarded') concuerda con 'medals', respeta el agente con 'by' y se ajusta al tiempo cerrado 'yesterday's'.",
          },
        ],
        correctOptionId: "D",
      },
      {
        id: "fm-b1-perf-q05",
        prompt:
          "External compliance officers have audited the grant accounts _____ two weeks, but the official clearance letter has not been issued _____.",
        options: [
          {
            id: "A",
            text: "since ... yet",
            explanationEs:
              "Incorrecto: 'two weeks' expresa una duración cuantitativa, no un punto de origen concreto, por lo que rechaza 'since'.",
          },
          {
            id: "B",
            text: "for ... yet",
            explanationEs:
              "Correcto: 'for' cuantifica la extensión temporal ('two weeks') con Present Perfect, y 'yet' cierra correctamente la cláusula pasiva negativa ('has not been issued yet').",
          },
          {
            id: "C",
            text: "during ... already",
            explanationEs:
              "Incorrecto: 'during' no introduce duraciones numéricas con Present Perfect y 'already' es incompatible con la negación 'has not been issued'.",
          },
          {
            id: "D",
            text: "for ... already",
            explanationEs:
              "Incorrecto: acierta con 'for two weeks', pero coloca 'already' al final de una oración negativa donde se expresa una acción aún pendiente ('yet').",
          },
        ],
        correctOptionId: "B",
      },
    ],
  },

  // ===========================================================================
  // 6. B1 — Conditionals, Defining Relatives, Indirect Questions & Connectors
  // ===========================================================================
  {
    id: "b1-conditionals-relatives-connectors",
    cefrLevel: "B1",
    skill: "grammar",
    title: "Conditionals, Defining Relatives, Indirect Questions & Connectors",
    subtitleEs:
      "Primer y segundo condicional, cláusulas relativas (who/which/that/where/whose), preguntas indirectas y conectores académicos",
    estimatedMinutes: 30,
    coreRuleSummaryEs:
      "Este módulo articula las cuatro herramientas de subordinación y cohesión que conectan directamente con el nivel B2: (1) Primer y Segundo Condicional: el Primer Condicional ('If / Unless + Present Simple', 'will / can / may + base') modela condiciones futuras plausibles; el Segundo Condicional ('If + Past Simple' —empleando el subjuntivo formal 'were' para todas las personas de 'be', incluido 'If the sample were larger'—, 'would / could / might + base') plantea escenarios presentes o futuros hipotéticos o contrafactuales. Jamás coloques 'will' ni 'would' dentro de la cláusula introducida por 'if' o 'unless', ni añadas negación redundante tras 'unless'. (2) Cláusulas relativas definitorias: elige el pronombre por su antecedente y por su rol sintáctico dentro de la subordinada: 'who/that' para personas; 'which/that' para cosas o conceptos cuando actúan como sujeto u objeto; 'whose + sustantivo sin artículo' para posesión (válido tanto para personas como para entidades u objetos); y 'where' (= 'in/at which') únicamente cuando funciona como adverbio de lugar y la subordinada ya cuenta con su propio sujeto ('the center where students register' frente a 'the center that processes visas'). Nunca dejes un pronombre objeto duplicado ('*the dataset that we cleaned it'). (3) Preguntas indirectas o incrustadas: al integrar una interrogativa dentro de otra cláusula ('Could you tell me...?', 'Do you know...?', 'The report explains...'), se elimina la inversión auxiliar-sujeto y desaparecen 'do/does/did': el orden obligatorio es 'conector (where/what/why/whether/if) + sujeto + verbo conjugado' ('Could you tell me where the lab is?'). (4) Sintaxis y puntuación de conectores: distingue conjunciones subordinantes ('although', 'even though', 'whereas' + sujeto y verbo), preposiciones ('despite', 'in spite of', 'due to' + sintagma nominal o '-ing', jamás 'despite of') y adverbios conjuntivos ('however', 'therefore', 'moreover', 'consequently'), los cuales enlazan oraciones independientes exigiendo punto o punto y coma antes y coma después ('; however,', '; therefore,').",
    itepBridgeTipEs:
      "Este módulo es el puente directo al Día 1 del Roadmap B2: en iTEP Grammar Part 1 y Part 2 son infaltables las preguntas incrustadas con inversión errónea ('*asked when did the seminar end'), la trampa 'where' vs. 'which/that' tras nombres de edificios o ciudades y el contraste sintáctico entre 'although', 'despite' y 'however'. Usar '; therefore,' y '; however,' sin 'comma splice', junto con 'whose' y el subjuntivo 'were', impulsa tus ensayos de Writing Part 2 directamente sobre la banda 4.0.",
    contrastTable: [
      {
        conceptEs: "Subjuntivo académico 'were' y exclusión de 'would' tras 'if'",
        incorrectExample:
          "If the fellowship stipend would be higher, more doctoral candidates applied.",
        correctExample:
          "If the fellowship stipend were higher, more doctoral candidates would apply.",
        whyItMattersEs:
          "En inglés académico la prótasis con 'if' prohíbe 'would' y emplea 'were' (no 'was') para cualquier sujeto singular en hipótesis contrafactuales del segundo condicional.",
      },
      {
        conceptEs: "Orden declarativo Sujeto + Verbo en preguntas indirectas",
        incorrectExample:
          "Could you tell me where is the bioinformatics lab and when does the session start?",
        correctExample:
          "Could you tell me where the bioinformatics lab is and when the session starts?",
        whyItMattersEs:
          "La cortesía interrogativa ya reside en 'Could you tell me...?'; mantener inversión ('is the lab') o el auxiliar 'does' en la cláusula subordinada es un error estructural clásico.",
      },
      {
        conceptEs:
          "Función locativa de 'where' vs. sujeto/objeto 'that/which' sin pronombre duplicado",
        incorrectExample:
          "Students visited the observatory where houses the telescope that NASA donated it.",
        correctExample:
          "Students visited the observatory that houses the telescope that NASA donated.",
        whyItMattersEs:
          "'Where' no puede actuar como sujeto del verbo 'houses' (exigiendo 'that/which'), y el relativo 'that' ya sustituye al objeto directo de 'donated', haciendo agramatical el 'it' final.",
      },
      {
        conceptEs: "Conjunción 'although' (+ cláusula) vs. preposición 'despite' (+ grupo nominal)",
        incorrectExample:
          "Despite of the sample size was modest, the findings reached statistical significance.",
        correctExample:
          "Although the sample size was modest, the findings reached statistical significance.",
        whyItMattersEs:
          "'Despite' jamás lleva 'of' y solo rige sustantivos o '-ing' ('Despite the modest sample size'); ante sujeto y verbo finito es obligatoria una conjunción como 'Although'.",
      },
      {
        conceptEs: "Puntuación de 'however' y 'therefore' para evitar 'comma splice'",
        incorrectExample:
          "Enrollment exceeded projections, therefore the registrar opened an evening section.",
        correctExample:
          "Enrollment exceeded projections; therefore, the registrar opened an evening section.",
        whyItMattersEs:
          "'Therefore' y 'however' son adverbios conjuntivos, no conjunciones coordinantes como 'so' o 'but'; unir dos cláusulas independientes solo con coma antes de ellos constituye falta de puntuación y sintaxis.",
      },
    ],
    microCheckQuestions: [
      {
        id: "fm-b1-cond-q01",
        prompt:
          "Excuse me, could you tell me _____ and whether visiting scholars need an escort card to enter the reading room?",
        options: [
          {
            id: "A",
            text: "where is the special collections archive",
            explanationEs:
              "Incorrecto: conserva la inversión de pregunta directa ('is the ... archive') dentro de una pregunta indirecta encabezada por 'could you tell me'.",
          },
          {
            id: "B",
            text: "where does the special collections archive locate",
            explanationEs:
              "Incorrecto: inserta indebidamente el auxiliar interrogativo 'does' y usa 'locate' como verbo activo intransitivo en lugar de una estructura de ubicación.",
          },
          {
            id: "C",
            text: "where the special collections archive is",
            explanationEs:
              "Correcto: respeta el orden declarativo estricto (conector 'where' + sujeto completo 'the special collections archive' + verbo conjugado 'is') propio de las preguntas incrustadas.",
          },
          {
            id: "D",
            text: "that where the special collections archive is",
            explanationEs:
              "Incorrecto: duplica innecesariamente dos subordinantes ('that' + 'where'), construcción inválida para introducir una interrogativa indirecta.",
          },
        ],
        correctOptionId: "C",
      },
      {
        id: "fm-b1-cond-q02",
        prompt:
          "If public commuter rail passes _____ subsidized for all full-time undergraduates, campus parking garages would not reach capacity before nine o'clock.",
        options: [
          {
            id: "A",
            text: "were",
            explanationEs:
              "Correcto: en el segundo condicional hipotético, la cláusula con 'If' exige Past Simple/subjuntivo ('were subsidized') en correlación con 'would not reach' en la cláusula principal.",
          },
          {
            id: "B",
            text: "would be",
            explanationEs:
              "Incorrecto: en inglés estándar no se introduce el auxiliar modal 'would' dentro de la prótasis ('If'-clause) de una oración condicional.",
          },
          {
            id: "C",
            text: "are",
            explanationEs:
              "Incorrecto: Present Simple ('are subsidized') correspondería a un primer condicional real con 'will not reach', chocando con el hipotético 'would not reach'.",
          },
          {
            id: "D",
            text: "will be",
            explanationEs:
              "Incorrecto: duplica errores al colocar 'will' tras 'If' condicional y romper la concordancia modal con 'would not reach'.",
          },
        ],
        correctOptionId: "A",
      },
      {
        id: "fm-b1-cond-q03",
        prompt:
          "Incoming transfer students were directed to the administrative wing _____ they must submit their official sealed transcripts before Friday.",
        options: [
          {
            id: "A",
            text: "which",
            explanationEs:
              "Incorrecto: la cláusula subordinada ya tiene sujeto ('they') y objeto directo ('their official sealed transcripts'); sin preposición ('in which'), 'which' carece de función sintáctica.",
          },
          {
            id: "B",
            text: "where",
            explanationEs:
              "Correcto: el adverbio relativo 'where' (= 'in which') modifica al antecedente locativo 'wing' y aporta el complemento de lugar dentro de una cláusula sintácticamente completa.",
          },
          {
            id: "C",
            text: "whose",
            explanationEs:
              "Incorrecto: el relativo posesivo 'whose' debe preceder directamente a un sustantivo poseído sin determinante, jamás a un pronombre personal sujeto como 'they'.",
          },
          {
            id: "D",
            text: "what",
            explanationEs:
              "Incorrecto: 'what' es un relativo sin antecedente ('lo que') y nunca puede encabezar una cláusula adjetiva tras un sustantivo explícito como 'wing'.",
          },
        ],
        correctOptionId: "B",
      },
      {
        id: "fm-b1-cond-q04",
        prompt:
          "_____ the physics department secured supplemental funding in January, delivery of the laser array was delayed; _____, two graduate experiments moved to a partner lab.",
        options: [
          {
            id: "A",
            text: "Despite ... therefore",
            explanationEs:
              "Incorrecto: 'Despite' es una preposición y no puede regir directamente una cláusula finita con sujeto y verbo ('the physics department secured...').",
          },
          {
            id: "B",
            text: "Although ... however",
            explanationEs:
              "Incorrecto: 'Although' ya introduce el contraste inicial; dado que el retraso causó el traslado de los experimentos, la segunda cláusula exige un conector consecutivo ('therefore'), no adversativo ('however').",
          },
          {
            id: "C",
            text: "However ... consequently",
            explanationEs:
              "Incorrecto: 'However' es un adverbio conjuntivo, no una conjunción subordinante capaz de enlazar dos cláusulas separadas únicamente por la coma antes de 'delivery'.",
          },
          {
            id: "D",
            text: "Although ... therefore",
            explanationEs:
              "Correcto: 'Although' subordina la cláusula concesiva con verbo finito ('secured') y 'therefore' —precedido de punto y coma y seguido de coma— introduce la consecuencia lógica.",
          },
        ],
        correctOptionId: "D",
      },
      {
        id: "fm-b1-cond-q05",
        prompt:
          "Scholarship recipients _____ cumulative grade point average drops below 3.2 will lose priority housing unless they _____ with an academic advisor this week.",
        options: [
          {
            id: "A",
            text: "who ... will meet",
            explanationEs:
              "Incorrecto: 'who' no establece relación posesiva con 'cumulative grade point average' y la conjunción condicional 'unless' prohíbe el uso de 'will'.",
          },
          {
            id: "B",
            text: "who's ... meet",
            explanationEs:
              "Incorrecto: 'who's' es exclusivamente la contracción de 'who is' o 'who has', nunca un relativo posesivo delante de un sintagma nominal.",
          },
          {
            id: "C",
            text: "whose ... meet",
            explanationEs:
              "Correcto: el relativo posesivo 'whose' vincula a 'recipients' con 'average', y 'unless' rige Present Simple afirmativo ('meet') en correlación con 'will lose' en el primer condicional.",
          },
          {
            id: "D",
            text: "whose ... do not meet",
            explanationEs:
              "Incorrecto: aunque acierta con 'whose', introduce una negación redundante ('do not meet') detrás de 'unless' ('a menos que'), invirtiendo de forma ilógica el requisito académico.",
          },
        ],
        correctOptionId: "C",
      },
    ],
  },
];
