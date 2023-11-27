const preguntas = [
  {
    titulo: "1 - Una luz roja intermitente emitida desde la torre de control durante la aproximación para el aterrizaje de un avión significa que:",
    opciones: [
      {
        textoRespuesta: "El aeropuerto esta cerrado provisionalmente, vuele en círculo",
        isCorrect: false
      },
      {
        textoRespuesta: "El aeropuerto no es seguro, no aterrice",
        isCorrect: true
      },
      {
        textoRespuesta: "Continué volando en círculos y espere instrucciones posteriores",
        isCorrect: false
      },
      {
        textoRespuesta: "Ceda paso a otro trafico en situación de emergencia",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - Los objetivos de OACI fueron ratificados por:",
    opciones: [
      {
        textoRespuesta: "La convención de Varsovia de 1929",
        isCorrect: false
      },
      {
        textoRespuesta: "La convención de Chicago de 1944",
        isCorrect: true
      },
      {
        textoRespuesta: "La convención de Ginebra de 1948",
        isCorrect: false
      },
      {
        textoRespuesta: "La convención de Ginebra de 1936",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - La expresión “vuelva a navegación propia” quiere decir:",
    opciones: [
      {
        textoRespuesta: "Deberá atenerse en lo sucesivo a lo estipulado en el plan de vuelo",
        isCorrect: false
      },
      {
        textoRespuesta: "Deberá mantenerse en la misma por sus propios medios",
        isCorrect: true
      },
      {
        textoRespuesta: "Deberá solicitar vectores en lo sucesivo",
        isCorrect: false
      },
      {
        textoRespuesta: "a y b son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "4 - Las VMC mínimas para un espacio aéreo clasificado como “B” por encima de 10.000 ft",
    opciones: [
      {
        textoRespuesta: "Cielo despejado, 8 km de visibilidad y 1.500 metros de separación horizontal con nubes",
        isCorrect: true
      },
      {
        textoRespuesta: "1500 metros de separación horizontal con nubes y 15 km de visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Cielo despejado y 5 km de visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "1500 metros de separación horizontal con nubes y 5 km de visibilidad",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - Una zona de control se extenderá lateralmente al menos:",
    opciones: [
      {
        textoRespuesta: "5 millas náuticas desde el centro de los aeródromos afectados y en la dirección por la que se pueden efectuar las aproximaciones.",
        isCorrect: true
      },
      {
        textoRespuesta: "20 millas desde el centro de los aeródromos afectados y en la dirección por la que se pueden efectuar las aproximaciones.",
        isCorrect: false
      },
      {
        textoRespuesta: "10 millas desde el centro de los aeródromos afectados y en la dirección por la que se pueden efectuar las aproximaciones.",
        isCorrect: false
      },
      {
        textoRespuesta: "15 millas desde el centro de los aeródromos afectados y en la dirección por la que se pueden efectuar las aproximaciones.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - Los informes de posición han de contener los siguientes elementos de información y en el orden recogido:",
    opciones: [
      {
        textoRespuesta: "Identificación del avión, posición, hora, Velocidad verdadera, altitud o nivel de vuelo, próxima posición y hora estimada sobre la misma",
        isCorrect: false
      },
      {
        textoRespuesta: "Identificación del avión, posición, hora, Velocidad verdadera, altitud o nivel de vuelo, próxima posición y hora estimada sobre la misma y siguiente punto significativo",
        isCorrect: true
      },
      {
        textoRespuesta: "Identificación del avión, posición, hora, Velocidad verdadera próxima posición y hora estimada sobre la misma",
        isCorrect: false
      },
      {
        textoRespuesta: "próxima posición y hora estimada sobre la misma",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - De qué color son las luces del umbral.",
    opciones: [
      {
        textoRespuesta: "Luces verdes fijas unidireccionales.",
        isCorrect: true
      },
      {
        textoRespuesta: "Luces blancas fijas unidireccionales.",
        isCorrect: false
      },
      {
        textoRespuesta: "Luces rojas.",
        isCorrect: false
      },
      {
        textoRespuesta: "Luces verdes y blancas.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - El avión A, con autorización ATC, vuela en condiciones VMC dentro de los límites de un área controlada. El avión B, sin autorización ATC, se aproxima a la misma altitud y en rumbo de colisión. ¿Quién tiene preferencia?",
    opciones: [
      {
        textoRespuesta: "A con independencia de dónde venga B.",
        isCorrect: false
      },
      {
        textoRespuesta: "Siempre B.",
        isCorrect: false
      },
      {
        textoRespuesta: "A sólo si B viene por la derecha.",
        isCorrect: false
      },
      {
        textoRespuesta: "B sólo si A viene por la izquierda.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "9 - El nivel de transición:",
    opciones: [
      {
        textoRespuesta: "Será el más bajo nivel de vuelo disponible sobre la altitud de transición establecida.",
        isCorrect: true
      },
      {
        textoRespuesta: "Para el aeropuerto se ubica en la sección ENR del AIP.",
        isCorrect: false
      },
      {
        textoRespuesta: "Será el más alto nivel de vuelo disponible por debajo de la altitud de transición establecida.",
        isCorrect: false
      },
      {
        textoRespuesta: "Será el comandante quien lo calcule y decida.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - Cuando te dirige por vectores hasta una aerovía, que quiere decir el control radar cuando dice que asuma su propia navegación?",
    opciones: [
      {
        textoRespuesta: "que comience a navegar por sus propios medios",
        isCorrect: true
      },
      {
        textoRespuesta: "que siga los vectores radar que le ha dado hasta el nivel de crucero",
        isCorrect: false
      },
      {
        textoRespuesta: "que regrese al aeropuerto de salida",
        isCorrect: false
      },
      {
        textoRespuesta: "que espere vectores del siguiente servicio de control",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Todo aviso conteniendo información relativa a la seguridad en vuelo, navegación aérea, o cualquier otro asunto de naturaleza técnica, administrativa o legal, y que tenga por origen el AIS de cualquier estado se denomina:",
    opciones: [
      {
        textoRespuesta: "Publicación sobre Información Aeronáutica (AIP)",
        isCorrect: false
      },
      {
        textoRespuesta: "NOTAM",
        isCorrect: false
      },
      {
        textoRespuesta: "AIRAC",
        isCorrect: false
      },
      {
        textoRespuesta: "Circular Informativa Aeronáutica (AI",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "12 - La distancia de despegue disponible TODA es:",
    opciones: [
      {
        textoRespuesta: "La longitud de carrera de despegue disponible más la longitud despejada de obstáculos disponible (cuando proceda).",
        isCorrect: true
      },
      {
        textoRespuesta: "La longitud de carrera de despegue disponible más la longitud de la zona de parada.",
        isCorrect: false
      },
      {
        textoRespuesta: "La longitud de la pista disponible más la longitud despejada de obstáculos disponible (cuando proceda).",
        isCorrect: false
      },
      {
        textoRespuesta: "La longitud de la carrera de despegue disponible más las longitudes de las zonas de parada y de área despejada de obstáculos (cuando proceda).",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - Una cruz blanca doble dispuesta horizontalmente en el área de señales indica:",
    opciones: [
      {
        textoRespuesta: "Han de adoptarse precauciones especiales durante la aproximación para el aterrizaje.",
        isCorrect: false
      },
      {
        textoRespuesta: "Una unidad de área para el movimiento de aeronaves.",
        isCorrect: false
      },
      {
        textoRespuesta: "El aeródromo esta siendo usado por planeadores y se están desarrollando operaciones de vuelo a vela.",
        isCorrect: true
      },
      {
        textoRespuesta: "Han de adoptarse precauciones especiales debido al mal estado de las calles de rodadura.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14 - Las VMC mínimas para un espacio aéreo clasificado como “B” por encima de 10.000 pies MSL son:",
    opciones: [
      {
        textoRespuesta: "1 milla en horizontal y 1.000 pies en vertical desde las nubes; 5 Km. de visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Despejado; 8 Km. De visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "2.000 metros en horizontal, 1.000 pies en vertical desde las nubes; 8 Km. De visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "1 milla náutica en horizontal y 1.000 pies en vertical desde las nubes; 8 Km. De visibilidad",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "15 - Se denomina Area de Control (CTA) a:",
    opciones: [
      {
        textoRespuesta: "Un espacio aéreo controlado que se extiende hacia arriba desde una altura de 1000 pies sobre la tierra.",
        isCorrect: false
      },
      {
        textoRespuesta: "Un espacio aéreo controlado que se extiende hacia arriba desde la superficie de la tierra hasta un limite especificado.",
        isCorrect: false
      },
      {
        textoRespuesta: "Un espacio aéreo controlado que se extiende hacia arriba desde una altura de 900 pies sobre la tierra.",
        isCorrect: false
      },
      {
        textoRespuesta: "Un espacio aéreo controlado que se extiende hacia arriba desde un limite especificado sobre la tierra.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "16 - Un vuelo controlado debe informar a la Unidad ATC cuando la TAS tenga expectativas de variar con respecto a lo marcado en el plan de vuelo en más o menos:",
    opciones: [
      {
        textoRespuesta: "5%.",
        isCorrect: true
      },
      {
        textoRespuesta: "3%.",
        isCorrect: false
      },
      {
        textoRespuesta: "2%.",
        isCorrect: false
      },
      {
        textoRespuesta: "10%.",
        isCorrect: false
      }
    ]
  }
];


export default preguntas;