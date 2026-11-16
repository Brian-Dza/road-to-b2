import type { DiagnosticTest } from "../../schemas/curriculum.schema.ts";

export const diagnosticTest: DiagnosticTest = {
  id: "itep-foundations-diagnostic",
  title: "iTEP Foundations Diagnostic Assessment (A1–B1)",
  subtitleEs:
    "Evaluación diagnóstica calibrada de cimientos gramaticales y estructurales previos al nivel B2",
  instructionsEs:
    "Responde las 30 preguntas sin traductor ni apuntes externos. Cada reactivo evalúa un pilar estructural específico de los niveles A1, A2 o B1 en contexto universitario y profesional para identificar con precisión cualquier laguna base y asignarte únicamente las cápsulas de remediación que necesites.",
  estimatedMinutes: 20,
  passingThresholdPercent: 80,
  questions: [
    // =========================================================================
    // BLOCK 1: A1 — a1-core-structures (5 questions)
    // =========================================================================
    {
      id: "diag-q01",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-core-structures",
      prompt:
        "The main university library _____ open until midnight during final examination weeks, so students often study on the third floor.",
      options: [
        {
          id: "A",
          text: "stay",
          explanationEs:
            "Incorrecto: el núcleo del sujeto es singular ('library'), no el sustantivo plural 'weeks' que aparece más adelante; en Present Simple requiere '-s'.",
        },
        {
          id: "B",
          text: "are staying",
          explanationEs:
            "Incorrecto: presenta doble fallo de concordancia plural ('are' con sujeto singular 'library') y de aspecto continuo frente a un horario institucional habitual.",
        },
        {
          id: "C",
          text: "stays",
          explanationEs:
            "Correcto: el núcleo del sujeto 'The main university library' es tercera persona singular y expresa una rutina institucional programada en Present Simple ('stays').",
        },
        {
          id: "D",
          text: "is stay",
          explanationEs:
            "Incorrecto: combina el verbo 'be' ('is') con un verbo léxico en forma base ('stay'), estructura inexistente en inglés.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: "diag-q02",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-core-structures",
      prompt:
        "Where _____ international students submit their visa renewal forms at the beginning of the semester?",
      options: [
        {
          id: "A",
          text: "does",
          explanationEs:
            "Incorrecto: 'does' solo concuerda con sujetos en tercera persona singular, pero el sujeto aquí es plural ('international students').",
        },
        {
          id: "B",
          text: "do",
          explanationEs:
            "Correcto: las preguntas en Present Simple con verbo léxico en base ('submit') y sujeto plural ('international students') exigen el auxiliar 'do'.",
        },
        {
          id: "C",
          text: "are",
          explanationEs:
            "Incorrecto: el auxiliar 'are' exigiría un participio presente ('submitting') o pasivo, nunca un verbo en forma base como 'submit'.",
        },
        {
          id: "D",
          text: "is",
          explanationEs:
            "Incorrecto: falla tanto en número (sujeto plural 'students') como al combinar el verbo 'be' con la forma base 'submit'.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: "diag-q03",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-core-structures",
      prompt:
        "Most first-year engineering students _____ with the department's decision to extend laboratory hours on Fridays.",
      options: [
        {
          id: "A",
          text: "are agree",
          explanationEs:
            "Incorrecto: calco clásico del español ('están de acuerdo'); en inglés 'agree' es un verbo pleno, no un adjetivo tras 'be'.",
        },
        {
          id: "B",
          text: "agrees",
          explanationEs:
            "Incorrecto: el núcleo del sujeto es plural ('students'), por lo que añadir '-s' rompe la concordancia sujeto-verbo.",
        },
        {
          id: "C",
          text: "is agreeing",
          explanationEs:
            "Incorrecto: 'agree' es un verbo estativo que no suele emplearse en continuo para expresar opinión, además de usar 'is' con sujeto plural.",
        },
        {
          id: "D",
          text: "agree",
          explanationEs:
            "Correcto: 'agree' funciona directamente como verbo principal en Present Simple y concuerda en plural con 'Most first-year engineering students'.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: "diag-q04",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-core-structures",
      prompt:
        "The IT department is updating _____ campus network servers today, so wireless access in the lecture halls is temporarily unavailable.",
      options: [
        {
          id: "A",
          text: "its",
          explanationEs:
            "Correcto: 'its' (sin apóstrofo) es el determinante posesivo correspondiente a una entidad institucional singular ('The IT department').",
        },
        {
          id: "B",
          text: "it's",
          explanationEs:
            "Incorrecto: 'it's' es exclusivamente la contracción de 'it is' o 'it has'; insertar un segundo verbo finito tras 'is updating' es agramatical.",
        },
        {
          id: "C",
          text: "their's",
          explanationEs:
            "Incorrecto: la forma con apóstrofo 'their's' no existe en inglés estándar, y además un pronombre posesivo absoluto no puede preceder al sustantivo 'servers'.",
        },
        {
          id: "D",
          text: "it",
          explanationEs:
            "Incorrecto: 'it' es pronombre personal de sujeto u objeto, incapaz de modificar posesivamente al grupo nominal 'campus network servers'.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: "diag-q05",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-core-structures",
      prompt:
        "Professor Henderson _____ late for morning seminars; she arrives ten minutes early to set up the projector.",
      options: [
        {
          id: "A",
          text: "never is",
          explanationEs:
            "Incorrecto: traslada el orden del español ('nunca está'); en inglés neutro los adverbios de frecuencia se colocan después del verbo 'be', no antes.",
        },
        {
          id: "B",
          text: "doesn't never",
          explanationEs:
            "Incorrecto: incurre en doble negación ('doesn't' + 'never') y omite el verbo copulativo 'be' necesario ante el adjetivo 'late'.",
        },
        {
          id: "C",
          text: "is never",
          explanationEs:
            "Correcto: ante el adjetivo predicativo 'late' se requiere el verbo 'be' ('is'), y el adverbio de frecuencia 'never' se ubica inmediatamente después de 'is'.",
        },
        {
          id: "D",
          text: "not is",
          explanationEs:
            "Incorrecto: la partícula 'not' nunca antecede al verbo finito 'is'; la negación estándar sería 'is not', jamás 'not is'.",
        },
      ],
      correctOptionId: "C",
    },

    // =========================================================================
    // BLOCK 2: A1 — a1-nouns-articles-quantifiers (5 questions)
    // =========================================================================
    {
      id: "diag-q06",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-nouns-articles-quantifiers",
      prompt:
        "Before registering for courses, incoming freshmen receive _____ useful advice from their academic advisors.",
      options: [
        {
          id: "A",
          text: "many",
          explanationEs:
            "Incorrecto: 'many' solo modifica sustantivos contables en plural, mientras que 'advice' es estrictamente incontable en inglés.",
        },
        {
          id: "B",
          text: "a great deal of",
          explanationEs:
            "Correcto: 'advice' es un sustantivo incontable (a diferencia de 'consejos' en español) y 'a great deal of' cuantifica correctamente sustantivos no contables en registro académico.",
        },
        {
          id: "C",
          text: "an",
          explanationEs:
            "Incorrecto: el artículo indefinido 'a/an' no puede acompañar a 'advice' por ser incontable; para singularizarlo se requeriría 'a piece of advice'.",
        },
        {
          id: "D",
          text: "several",
          explanationEs:
            "Incorrecto: 'several' exige un sustantivo contable plural y resulta incompatible con el sustantivo no contable 'advice'.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: "diag-q07",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-nouns-articles-quantifiers",
      prompt:
        "Applicants must hold _____ university degree in biology or chemistry to qualify for the laboratory assistantship.",
      options: [
        {
          id: "A",
          text: "a",
          explanationEs:
            "Correcto: aunque 'university' se escribe con 'u', su pronunciación inicial es semiconsonántica (/juː/), por lo que rige el artículo indefinido 'a' ante el contable singular 'degree'.",
        },
        {
          id: "B",
          text: "an",
          explanationEs:
            "Incorrecto: trampa fonética frecuente; 'an' se elige por sonido vocálico inicial, no por ortografía, y 'university' comienza con el sonido /j/.",
        },
        {
          id: "C",
          text: "some",
          explanationEs:
            "Incorrecto: en requisitos académicos formales se emplea el artículo indefinido 'a' para definir una credencial contable singular, no 'some' con matiz vago.",
        },
        {
          id: "D",
          text: "any of",
          explanationEs:
            "Incorrecto: la estructura partitiva 'any of' exige un determinante definido seguido de un sustantivo plural (p. ej., 'any of the degrees'), no un singular sin artículo.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: "diag-q08",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-nouns-articles-quantifiers",
      prompt:
        "_____ new laboratory equipment in the chemistry building, including three digital microscopes for undergraduate projects.",
      options: [
        {
          id: "A",
          text: "There are many",
          explanationEs:
            "Incorrecto: 'equipment' es un sustantivo colectivo incontable en inglés (nunca lleva plural ni admite 'are many', aunque después se ejemplifiquen tres microscopios).",
        },
        {
          id: "B",
          text: "They are",
          explanationEs:
            "Incorrecto: confunde el pronombre personal plural 'They are' ('ellos son/están') con la construcción existencial 'There is/are' ('hay').",
        },
        {
          id: "C",
          text: "It has",
          explanationEs:
            "Incorrecto: calco de lenguas romances para expresar existencia impersonal sin antecedente previo para 'It'.",
        },
        {
          id: "D",
          text: "There is",
          explanationEs:
            "Correcto: la estructura existencial 'There is' concuerda rigurosamente en singular con el sustantivo incontable 'equipment'.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: "diag-q09",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-nouns-articles-quantifiers",
      prompt:
        "In this semester's introductory environmental seminar, students examine how _____ transforms modern urban infrastructure.",
      options: [
        {
          id: "A",
          text: "the renewable energy",
          explanationEs:
            "Incorrecto: al hablar de un concepto abstracto o incontable en sentido general ('la energía renovable' en español), el inglés exige artículo cero, no 'the'.",
        },
        {
          id: "B",
          text: "a renewable energy",
          explanationEs:
            "Incorrecto: 'energy' en este uso general es incontable, por lo que rechaza el artículo indefinido 'a'.",
        },
        {
          id: "C",
          text: "renewable energy",
          explanationEs:
            "Correcto: emplea artículo cero ante el sustantivo incontable 'energy' para referirse al fenómeno en general y concuerda con el verbo singular 'transforms'.",
        },
        {
          id: "D",
          text: "many renewable energy",
          explanationEs:
            "Incorrecto: 'many' es exclusivo de sustantivos contables plurales y choca con el sustantivo incontable singular 'energy'.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: "diag-q10",
      cefrLevel: "A1",
      skill: "grammar",
      remediationModuleId: "a1-nouns-articles-quantifiers",
      prompt:
        "Because the seminar room has very _____ seats available, students must reserve a spot online by Wednesday.",
      options: [
        {
          id: "A",
          text: "little",
          explanationEs:
            "Incorrecto: 'little' cuantifica sustantivos incontables (como 'time' o 'space'), pero 'seats' es un sustantivo contable en plural.",
        },
        {
          id: "B",
          text: "few",
          explanationEs:
            "Correcto: 'very few' acompaña a sustantivos contables plurales ('seats') e indica escasez, justificando la obligación de reservar en línea.",
        },
        {
          id: "C",
          text: "much",
          explanationEs:
            "Incorrecto: 'much' solo se combina con sustantivos incontables, además de contradecir el sentido de escasez de la oración.",
        },
        {
          id: "D",
          text: "less",
          explanationEs:
            "Incorrecto: el intensificador 'very' no puede modificar al comparativo 'less' ('*very less' es agramatical), y en inglés académico 'seats' exige 'few/fewer'.",
        },
      ],
      correctOptionId: "B",
    },

    // =========================================================================
    // BLOCK 3: A2 — a2-past-future-narration (5 questions)
    // =========================================================================
    {
      id: "diag-q11",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-past-future-narration",
      prompt:
        "The guest lecturer _____ arrive on time yesterday morning because heavy fog delayed all regional flights.",
      options: [
        {
          id: "A",
          text: "was not",
          explanationEs:
            "Incorrecto: 'was not' no puede preceder a un verbo en forma base ('arrive'); 'arrive' no es adjetivo ni participio.",
        },
        {
          id: "B",
          text: "did not arrived",
          explanationEs:
            "Incorrecto: error clásico de doble marca de pasado; tras el auxiliar 'did not', el verbo principal debe ir en forma base ('arrive'), pero aquí sobra '-d' incluso si no estuviera 'arrive' después.",
        },
        {
          id: "C",
          text: "not did",
          explanationEs:
            "Incorrecto: invierte ilícitamente el orden entre el auxiliar 'did' y la negación 'not'.",
        },
        {
          id: "D",
          text: "did not",
          explanationEs:
            "Correcto: ante el marcador de pasado cerrado 'yesterday morning' y el verbo en forma base 'arrive', la negación en Past Simple se forma con 'did not'.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: "diag-q12",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-past-future-narration",
      prompt:
        "While the research assistants _____ water samples from the river, a sudden storm forced them to return to campus.",
      options: [
        {
          id: "A",
          text: "were collecting",
          explanationEs:
            "Correcto: Past Continuous plural ('were collecting') expresa una acción en progreso en el pasado introducida por 'While' e interrumpida por un evento puntual ('forced').",
        },
        {
          id: "B",
          text: "was collecting",
          explanationEs:
            "Incorrecto: identifica bien el aspecto continuo, pero usa el auxiliar singular 'was' con un sujeto plural ('the research assistants').",
        },
        {
          id: "C",
          text: "are collecting",
          explanationEs:
            "Incorrecto: Present Continuous rompe la secuencia temporal narrativa marcada por el verbo principal en pasado 'forced'.",
        },
        {
          id: "D",
          text: "collect",
          explanationEs:
            "Incorrecto: Present Simple es incompatible con un episodio pasado específico interrumpido por 'forced'.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: "diag-q13",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-past-future-narration",
      prompt:
        "The registrar's office will publish the official graduation list as soon as the dean _____ all departmental grades.",
      options: [
        {
          id: "A",
          text: "will approve",
          explanationEs:
            "Incorrecto: en inglés las cláusulas subordinadas de tiempo futuro ('when', 'as soon as', 'until', 'before') prohíben el uso de 'will'.",
        },
        {
          id: "B",
          text: "approved",
          explanationEs:
            "Incorrecto: Past Simple rompe la correlación prospectiva con la cláusula principal en futuro ('will publish').",
        },
        {
          id: "C",
          text: "approves",
          explanationEs:
            "Correcto: tras 'as soon as' con referencia futura se emplea obligatoriamente Present Simple ('approves', concordando con 'the dean').",
        },
        {
          id: "D",
          text: "going to approve",
          explanationEs:
            "Incorrecto: omite el verbo auxiliar 'is' y, además, evita el Present Simple exigido en cláusulas temporales subordinadas.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: "diag-q14",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-past-future-narration",
      prompt:
        "The campus bookstore _____ occupy the ground floor of Miller Hall, but it relocated to the student center two years ago.",
      options: [
        {
          id: "A",
          text: "use to",
          explanationEs:
            "Incorrecto: en oraciones afirmativas de hábito o estado pasado extinto, la forma escrita obligatoria lleva '-d' ('used to'); 'use to' solo aparece tras 'did'.",
        },
        {
          id: "B",
          text: "used to",
          explanationEs:
            "Correcto: 'used to' + verbo base ('occupy') expresa un estado pasado prolongado que ya no continúa en el presente, contrastado con 'relocated ... two years ago'.",
        },
        {
          id: "C",
          text: "was used to",
          explanationEs:
            "Incorrecto: 'be used to' significa 'estar acostumbrado a' y exige sustantivo o gerundio ('-ing'), nunca un verbo en forma base como 'occupy', ni tiene sentido con un sujeto inanimado.",
        },
        {
          id: "D",
          text: "usually",
          explanationEs:
            "Incorrecto: 'usually' describe hábitos presentes y, con sujeto singular 'bookstore', exigiría 'occupies', lo que contradice que se mudó hace dos años.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: "diag-q15",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-past-future-narration",
      prompt:
        "Dr. Patel _____ the biochemistry symposium last November, bringing together forty scholars from across the country.",
      options: [
        {
          id: "A",
          text: "led",
          explanationEs:
            "Correcto: 'led' es el pasado simple irregular del verbo 'lead' ('dirigir/encabezar'), requerido por el marcador temporal cerrado 'last November'.",
        },
        {
          id: "B",
          text: "lead",
          explanationEs:
            "Incorrecto: trampa ortográfica frecuente (por homofonía con el metal 'lead'); como verbo en Past Simple, 'lead' es inválido y con 'Dr. Patel' ni siquiera concordaría en presente.",
        },
        {
          id: "C",
          text: "leading",
          explanationEs:
            "Incorrecto: un participio '-ing' sin verbo auxiliar finito deja a la oración principal sin verbo conjugado.",
        },
        {
          id: "D",
          text: "has lead",
          explanationEs:
            "Incorrecto: presenta doble error: 'has' (Present Perfect) es incompatible con 'last November', y el participio pasado correcto es 'led', no 'lead'.",
        },
      ],
      correctOptionId: "A",
    },

    // =========================================================================
    // BLOCK 4: A2 — a2-modals-comparisons (5 questions)
    // =========================================================================
    {
      id: "diag-q16",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-modals-comparisons",
      prompt:
        "Students _____ attend Friday's review session; participation is completely optional, though it may help clarify difficult formulas.",
      options: [
        {
          id: "A",
          text: "must not",
          explanationEs:
            "Incorrecto: 'must not' expresa prohibición estricta ('está prohibido asistir'), no ausencia de obligación, contradiciendo 'participation is completely optional'.",
        },
        {
          id: "B",
          text: "cannot",
          explanationEs:
            "Incorrecto: 'cannot' denota imposibilidad o falta de permiso, lo cual contradice que los estudiantes sí pueden asistir si lo desean.",
        },
        {
          id: "C",
          text: "do not have to",
          explanationEs:
            "Correcto: 'do not have to' expresa ausencia de obligación ('no es necesario que asistan, pero pueden hacerlo'), alineándose exactamente con 'completely optional'.",
        },
        {
          id: "D",
          text: "should not",
          explanationEs:
            "Incorrecto: 'should not' desaconseja asistir, contradiciendo la cláusula final que señala que la sesión puede ayudar a aclarar fórmulas difíciles.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: "diag-q17",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-modals-comparisons",
      prompt:
        "According to the campus transit survey, taking the express shuttle is _____ driving to the main gate during rush hour.",
      options: [
        {
          id: "A",
          text: "more fast than",
          explanationEs:
            "Incorrecto: calco del español ('más rápido que'); los adjetivos monosílabos como 'fast' forman el comparativo con '-er' ('faster'), nunca con 'more'.",
        },
        {
          id: "B",
          text: "faster that",
          explanationEs:
            "Incorrecto: traduce literalmente el 'que' comparativo del español como 'that'; en inglés todo comparativo de desigualdad exige 'than'.",
        },
        {
          id: "C",
          text: "the fastest than",
          explanationEs:
            "Incorrecto: mezcla morfología superlativa ('the fastest') con la conjunción comparativa 'than' al comparar dos alternativas.",
        },
        {
          id: "D",
          text: "much faster than",
          explanationEs:
            "Correcto: combina el intensificador comparativo válido 'much', el adjetivo monosílabo en grado comparativo 'faster' y la partícula 'than'.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: "diag-q18",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-modals-comparisons",
      prompt:
        "The online orientation module is just _____ the in-person workshop for learning how to navigate the library database.",
      options: [
        {
          id: "A",
          text: "as informative as",
          explanationEs:
            "Correcto: la comparación de igualdad en oraciones afirmativas se construye con 'as + adjetivo en grado positivo + as' ('just as informative as').",
        },
        {
          id: "B",
          text: "more informative as",
          explanationEs:
            "Incorrecto: cruza erróneamente un comparativo de superioridad ('more informative') con 'as' en lugar de 'than'.",
        },
        {
          id: "C",
          text: "as informative than",
          explanationEs:
            "Incorrecto: rompe la correlación equitativa al cerrar 'as informative' con 'than' en vez del segundo 'as'.",
        },
        {
          id: "D",
          text: "so informative that",
          explanationEs:
            "Incorrecto: la estructura consecutiva 'so ... that' exige detrás una cláusula completa con sujeto y verbo finito, pero aquí solo sigue el sintagma nominal 'the in-person workshop'.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: "diag-q19",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-modals-comparisons",
      prompt:
        "Graduate applicants _____ submit two letters of recommendation from faculty members familiar with their research.",
      options: [
        {
          id: "A",
          text: "must to",
          explanationEs:
            "Incorrecto: los verbos modales puros ('must', 'should', 'can', 'may') van seguidos directamente del infinitivo sin 'to'.",
        },
        {
          id: "B",
          text: "should",
          explanationEs:
            "Correcto: el modal puro 'should' se enlaza directamente con el verbo en forma base 'submit' sin preposición intermedia.",
        },
        {
          id: "C",
          text: "ought",
          explanationEs:
            "Incorrecto: a diferencia de 'should', el semimodal 'ought' exige obligatoriamente la partícula 'to' ('ought to submit').",
        },
        {
          id: "D",
          text: "have",
          explanationEs:
            "Incorrecto: para expresar obligación con 'have' falta la partícula 'to' ('have to submit'); 'have submit' es agramatical.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: "diag-q20",
      cefrLevel: "A2",
      skill: "grammar",
      remediationModuleId: "a2-modals-comparisons",
      prompt:
        "At over four hundred pages, the constitutional law reader is _____ textbook on this semester's required reading list.",
      options: [
        {
          id: "A",
          text: "the more comprehensive",
          explanationEs:
            "Incorrecto: usa el comparativo 'more' en lugar del superlativo 'most' al destacar un libro dentro de toda la lista semestral.",
        },
        {
          id: "B",
          text: "most comprehensive than",
          explanationEs:
            "Incorrecto: omite 'the' y combina un superlativo ('most comprehensive') con 'than' delante de un sustantivo.",
        },
        {
          id: "C",
          text: "a most comprehensive of",
          explanationEs:
            "Incorrecto: 'a most' equivale a 'very' sin valor superlativo real y 'of textbook' carece de sentido sintáctico.",
        },
        {
          id: "D",
          text: "the most comprehensive",
          explanationEs:
            "Correcto: construye el grado superlativo de un adjetivo polisílabo mediante 'the most + adjetivo' antes del sustantivo 'textbook'.",
        },
      ],
      correctOptionId: "D",
    },

    // =========================================================================
    // BLOCK 5: B1 — b1-perfect-tenses-passive (5 questions)
    // =========================================================================
    {
      id: "diag-q21",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-perfect-tenses-passive",
      prompt:
        "Dr. Alvarez _____ as director of the climate modeling laboratory since the institute opened in 2021.",
      options: [
        {
          id: "A",
          text: "serves",
          explanationEs:
            "Incorrecto: calco muy frecuente del español ('trabaja/funge desde 2021'); en inglés el Present Simple es incompatible con 'since' para acciones que empezaron en el pasado y continúan hoy.",
        },
        {
          id: "B",
          text: "has served",
          explanationEs:
            "Correcto: Present Perfect ('has served') conecta un punto de inicio pasado ('since the institute opened in 2021') con una situación vigente en el presente.",
        },
        {
          id: "C",
          text: "served",
          explanationEs:
            "Incorrecto: Past Simple indica un periodo concluido en el pasado y choca con la cláusula 'since ...' que proyecta continuidad hasta ahora.",
        },
        {
          id: "D",
          text: "is serving",
          explanationEs:
            "Incorrecto: Present Continuous no puede combinarse con marcadores de origen pasado como 'since 2021' (para enfatizar continuidad se requeriría 'has been serving').",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: "diag-q22",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-perfect-tenses-passive",
      prompt:
        "All blood samples collected during the clinical trial _____ in temperature-controlled freezers before chemical analysis.",
      options: [
        {
          id: "A",
          text: "store",
          explanationEs:
            "Incorrecto: voz activa; las muestras de sangre ('All blood samples') no almacenan nada por sí mismas, sino que reciben la acción de ser almacenadas.",
        },
        {
          id: "B",
          text: "have storing",
          explanationEs:
            "Incorrecto: combina el auxiliar 'have' con un gerundio/participio '-ing' sin 'been', estructura morfológicamente inválida.",
        },
        {
          id: "C",
          text: "are stored",
          explanationEs:
            "Correcto: voz pasiva en Present Simple plural ('are stored'), apropiada para describir protocolos científicos donde el sujeto inanimado ('samples') recibe la acción.",
        },
        {
          id: "D",
          text: "were store",
          explanationEs:
            "Incorrecto: la voz pasiva exige siempre el participio pasado ('stored'), nunca la forma base ('store') detrás del verbo 'be'.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: "diag-q23",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-perfect-tenses-passive",
      prompt:
        "By the time the external auditors arrived on Monday morning, the accounting team _____ all quarterly expense reports.",
      options: [
        {
          id: "A",
          text: "had verified",
          explanationEs:
            "Correcto: Past Perfect ('had verified') expresa una acción completada con anterioridad a otro evento pasado explícito ('By the time the external auditors arrived').",
        },
        {
          id: "B",
          text: "has verified",
          explanationEs:
            "Incorrecto: Present Perfect se ancla al momento presente, pero 'By the time ... arrived on Monday morning' sitúa el punto de referencia íntegramente en el pasado.",
        },
        {
          id: "C",
          text: "verifies",
          explanationEs:
            "Incorrecto: Present Simple rompe la cronología retrospectiva establecida por 'By the time ... arrived'.",
        },
        {
          id: "D",
          text: "was verify",
          explanationEs:
            "Incorrecto: carece de validez morfológica ('was' + forma base) y además el equipo contable ejecuta activamente la verificación.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: "diag-q24",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-perfect-tenses-passive",
      prompt:
        "Several key chapters of the medieval manuscript _____ into English yet, so historians still consult the Latin original.",
      options: [
        {
          id: "A",
          text: "did not translate",
          explanationEs:
            "Incorrecto: usa voz activa (los capítulos no traducen) y Past Simple en vez del Present Perfect exigido por el marcador 'yet' conectado con el presente.",
        },
        {
          id: "B",
          text: "have not translated",
          explanationEs:
            "Incorrecto: trampa clásica de voz; usa correctamente Present Perfect por 'yet', pero en voz activa como si 'chapters' fuera el agente traductor.",
        },
        {
          id: "C",
          text: "are not translating",
          explanationEs:
            "Incorrecto: Present Continuous activo es incompatible tanto con el sujeto paciente inanimado 'chapters' como con el marcador 'yet'.",
        },
        {
          id: "D",
          text: "have not been translated",
          explanationEs:
            "Correcto: Present Perfect Passive negativo plural ('have not been translated') integra el sujeto paciente 'chapters' con 'yet' y explica el efecto presente ('still consult').",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: "diag-q25",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-perfect-tenses-passive",
      prompt:
        "The sociology department has tracked career outcomes for its alumni _____ more than fifteen years.",
      options: [
        {
          id: "A",
          text: "since",
          explanationEs:
            "Incorrecto: 'since' introduce un punto de origen concreto (p. ej., 'since 2010'), no una cantidad acumulativa de tiempo ('more than fifteen years').",
        },
        {
          id: "B",
          text: "during",
          explanationEs:
            "Incorrecto: calco del español ('durante más de quince años'); en inglés 'during' precede a un evento nominal ('during the recession'), nunca a una duración numérica con Present Perfect.",
        },
        {
          id: "C",
          text: "for",
          explanationEs:
            "Correcto: 'for' introduce la extensión o duración temporal ('more than fifteen years') junto con Present Perfect ('has tracked').",
        },
        {
          id: "D",
          text: "ago",
          explanationEs:
            "Incorrecto: 'ago' se coloca al final del sintagma temporal (no al principio) y exige Past Simple cerrado, nunca Present Perfect.",
        },
      ],
      correctOptionId: "C",
    },

    // =========================================================================
    // BLOCK 6: B1 — b1-conditionals-relatives-connectors (5 questions)
    // =========================================================================
    {
      id: "diag-q26",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-conditionals-relatives-connectors",
      prompt:
        "If the university _____ a shuttle route to the northern suburbs, far fewer students would drive private cars to campus.",
      options: [
        {
          id: "A",
          text: "operated",
          explanationEs:
            "Correcto: en el segundo condicional hipotético, la cláusula con 'If' lleva Past Simple ('operated') para correlacionarse con 'would drive' en la cláusula principal.",
        },
        {
          id: "B",
          text: "would operate",
          explanationEs:
            "Incorrecto: en inglés estándar no se emplea 'would' dentro de la prótasis ('If'-clause) de un condicional hipotético.",
        },
        {
          id: "C",
          text: "operates",
          explanationEs:
            "Incorrecto: Present Simple correspondería a un primer condicional real (con 'will drive'), chocando con el hipotético 'would drive'.",
        },
        {
          id: "D",
          text: "will operate",
          explanationEs:
            "Incorrecto: duplica dos errores: insertar 'will' tras 'If' condicional y romper la armonía modal con 'would drive'.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: "diag-q27",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-conditionals-relatives-connectors",
      prompt:
        "_____ extensive budget constraints, the theater department produced three full-scale performances last semester.",
      options: [
        {
          id: "A",
          text: "Although",
          explanationEs:
            "Incorrecto: 'Although' es una conjunción subordinante que exige sujeto y verbo conjugado detrás, pero 'extensive budget constraints' es únicamente un sintagma nominal.",
        },
        {
          id: "B",
          text: "Even though",
          explanationEs:
            "Incorrecto: al igual que 'Although', requiere una cláusula completa con verbo finito y no puede regir un sintagma nominal sin verbo.",
        },
        {
          id: "C",
          text: "However",
          explanationEs:
            "Incorrecto: 'However' es un adverbio conjuntivo que enlaza dos oraciones independientes separado por coma, no una preposición ante un grupo nominal.",
        },
        {
          id: "D",
          text: "Despite",
          explanationEs:
            "Correcto: 'Despite' (sin 'of') es una preposición concesiva que introduce directamente el sintagma nominal 'extensive budget constraints'.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: "diag-q28",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-conditionals-relatives-connectors",
      prompt:
        "The central archive, _____ houses diplomatic letters from the nineteenth century, will close for renovation in June.",
      options: [
        {
          id: "A",
          text: "that",
          explanationEs:
            "Incorrecto: en inglés académico las cláusulas relativas explicativas (no definitorias, delimitadas entre comas) prohíben estrictamente el uso de 'that'.",
        },
        {
          id: "B",
          text: "which",
          explanationEs:
            "Correcto: 'which' introduce válidamente una cláusula relativa no definitoria entre comas y actúa como sujeto gramatical del verbo transitivo 'houses'.",
        },
        {
          id: "C",
          text: "where",
          explanationEs:
            "Incorrecto: trampa sutil; 'where' es un adverbio relativo locativo ('in which') y no puede funcionar como sujeto del verbo 'houses', que quedaría sin sujeto.",
        },
        {
          id: "D",
          text: "what",
          explanationEs:
            "Incorrecto: 'what' es un relativo nominal sin antecedente ('lo que') y nunca puede modificar a un sustantivo explícito como 'The central archive'.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: "diag-q29",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-conditionals-relatives-connectors",
      prompt:
        "Research proposals will not be reviewed by the ethics committee unless they _____ signed consent templates.",
      options: [
        {
          id: "A",
          text: "will include",
          explanationEs:
            "Incorrecto: 'unless' introduce una subordinada condicional futura y, igual que 'if', rechaza el auxiliar modal 'will'.",
        },
        {
          id: "B",
          text: "do not include",
          explanationEs:
            "Incorrecto: 'unless' ya significa 'a menos que / si no'; añadir 'do not' genera una doble negación que invierte ilógicamente el requisito.",
        },
        {
          id: "C",
          text: "include",
          explanationEs:
            "Correcto: 'unless' rige un verbo afirmativo en Present Simple ('include') para expresar una condición negativa de futuro en correlación con 'will not be reviewed'.",
        },
        {
          id: "D",
          text: "included",
          explanationEs:
            "Incorrecto: Past Simple correspondería a un marco hipotético con 'would', no al primer condicional real encabezado por 'will not be reviewed'.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: "diag-q30",
      cefrLevel: "B1",
      skill: "grammar",
      remediationModuleId: "b1-conditionals-relatives-connectors",
      prompt:
        "The journal rejected two submissions _____ methodology sections lacked sufficient statistical detail.",
      options: [
        {
          id: "A",
          text: "which",
          explanationEs:
            "Incorrecto: 'which' no expresa posesión directa ante un sustantivo sin determinante ('*which methodology sections' es agramatical).",
        },
        {
          id: "B",
          text: "whose",
          explanationEs:
            "Correcto: el relativo posesivo 'whose' modifica a 'methodology sections' y en inglés se aplica legítimamente tanto a personas como a antecedentes inanimados ('submissions').",
        },
        {
          id: "C",
          text: "who's",
          explanationEs:
            "Incorrecto: 'who's' es la contracción de 'who is' o 'who has', jamás un determinante posesivo, y además se restringe a referentes humanos.",
        },
        {
          id: "D",
          text: "of whom",
          explanationEs:
            "Incorrecto: 'whom' solo remite a antecedentes personales, no a manuscritos ('submissions'), además de requerir artículo definido ('the methodology sections of which').",
        },
      ],
      correctOptionId: "B",
    },
  ],
};
