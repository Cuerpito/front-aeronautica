const preguntas = [
  {
    titulo: "1 - El equipo que difunde señales distintas en frecuencias designadas y que puede ser de activación manual o automática al impacto es",
    opciones: [
      {
        textoRespuesta: "Sistema Global de Posicionamiento (GPS)",
        isCorrect: false
      },
      {
        textoRespuesta: "Transmisor de Localización de Emergencia (ELT)",
        isCorrect: true
      },
      {
        textoRespuesta: "Transmisor de muy alta frecuencia (VHF)",
        isCorrect: false
      },
      {
        textoRespuesta: "Transmisor de ultra alta frecuencia (UHF)",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - Se define como noche:",
    opciones: [
      {
        textoRespuesta: "Las horas comprendidas entre el fin del crepúsculo civil vespertino y el comienzo del crepúsculo civil matutino",
        isCorrect: false
      },
      {
        textoRespuesta: "A cualquier otro periodo entre la puesta o salida del sol que prescriba la autoridad competente",
        isCorrect: false
      },
      {
        textoRespuesta: "La a y b son s",
        isCorrect: true
      },
      {
        textoRespuesta: "Las horas comprendidas entre el fin del crepúsculo astronómico vespertino y el comienzo del crepúsculo astronómico matutino o cualquier otro periodo entre la puesta o salida del sol que prescriba la autoridad competente",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - Cuales son las reservas de combustible y aceite mínimas que se especifican en el anexo 6 Parte II",
    opciones: [
      {
        textoRespuesta: "Cuando no se requiere aeródromo de alternativa: volar hasta el aeródromo donde se proyecta el vuelo y después 45 minutos más",
        isCorrect: false
      },
      {
        textoRespuesta: "Cuando se requiera aeródromo de alternativa: volar al aeródromo donde se proyecta el vuelo y desde allí al de alternativa y después 45 minutos más",
        isCorrect: false
      },
      {
        textoRespuesta: "b y a son s",
        isCorrect: true
      },
      {
        textoRespuesta: "Todas las falsas",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - La palabra clave para significar la fase de peligro es:",
    opciones: [
      {
        textoRespuesta: "Alerfa",
        isCorrect: false
      },
      {
        textoRespuesta: "Detresfa",
        isCorrect: true
      },
      {
        textoRespuesta: "Incerfa",
        isCorrect: false
      },
      {
        textoRespuesta: "Ventresca",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - Cuando se despega inmediatamente después de una aeronave de fuselaje ancho que acaba de aterrizar, se deberá despegar:",
    opciones: [
      {
        textoRespuesta: "Mas allá del punto en el que las ruedas del avión entrante hayan hecho contacto con las pista",
        isCorrect: true
      },
      {
        textoRespuesta: "En el punto en el que las ruedas del avión entrante hayan hecho contacto con la pista, y del lado del viento en pista",
        isCorrect: false
      },
      {
        textoRespuesta: "En el punto en el que las ruedas del avión entrante hayan hecho contacto con la pista, y del lado contrario del viento en pista",
        isCorrect: false
      },
      {
        textoRespuesta: "Delante del punto en el que las ruedas del avión entrante hayan hecho contacto con la pista",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - De acuerdo con el DOC4444 (ICAO) se aplicará una mínima de separación, no radar, por estela turbulenta de 3 minutos",
    opciones: [
      {
        textoRespuesta: "A aeronaves Medias en salidas tras una aeronave pesada, cuando operen  en una pista con un umbral de aterrizaje desplazado",
        isCorrect: false
      },
      {
        textoRespuesta: "A una aeronave Ligera en llegada tras una aeronave media cuando operen en una pista con un umbral de aterrizaje desplazado, si se espera que la trayectoria de vuelo previstas se crucen",
        isCorrect: false
      },
      {
        textoRespuesta: "A aeronaves Ligeras despegando tras una aeronave media desde una parte intermedia de una pista paralela separada menos de 760 metros",
        isCorrect: true
      },
      {
        textoRespuesta: "Entre una aeronave Ligera y una aeronave Media que realiza una aproximación frustrada y la aeronave ligera utiliza una pista en sentido opuesto para el despegue",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - En cual de los siguientes encontraríamos los procedimientos y organización del SAR",
    opciones: [
      {
        textoRespuesta: "NOTAM",
        isCorrect: false
      },
      {
        textoRespuesta: "SIGMET",
        isCorrect: false
      },
      {
        textoRespuesta: "AIP (Publicación de Información Aeronáutica)",
        isCorrect: true
      },
      {
        textoRespuesta: "Emisiones ATCC",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - La mayor estela turbulenta tiene lugar cuando el avión que la genera es:",
    opciones: [
      {
        textoRespuesta: "Grande, pesado, a baja velocidad y en configuración limpia",
        isCorrect: true
      },
      {
        textoRespuesta: "Grande, pesado, a alta velocidad en configuración full flap",
        isCorrect: false
      },
      {
        textoRespuesta: "Pequeño, ligero, a baja velocidad y en configuración limpia",
        isCorrect: false
      },
      {
        textoRespuesta: "Pequeño, ligero, a alta velocidad en configuración full flap",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - La luz blanca de navegación se localiza en la cola de la aeronave, con un ángulo de cobertura de:",
    opciones: [
      {
        textoRespuesta: "70º",
        isCorrect: false
      },
      {
        textoRespuesta: "220º",
        isCorrect: false
      },
      {
        textoRespuesta: "110º",
        isCorrect: false
      },
      {
        textoRespuesta: "140º",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "10 - La autoridad final relativa a la integridad de la aeronave la tiene:",
    opciones: [
      {
        textoRespuesta: "El Piloto al mando",
        isCorrect: true
      },
      {
        textoRespuesta: "El controlador ATC si la aeronave esta volando en espacio aéreo controlado",
        isCorrect: false
      },
      {
        textoRespuesta: "El propietario de la aeronave",
        isCorrect: false
      },
      {
        textoRespuesta: "El Operador",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Con temperatura ambiental alta (+30°) y con humedad relativa baja del 40% en aire libre de nubes, niebla o precipitación, el engelamiento fuerte en el carburador:",
    opciones: [
      {
        textoRespuesta: "Es posible a cualquier posición de gases",
        isCorrect: false
      },
      {
        textoRespuesta: "No puede ocurrir",
        isCorrect: true
      },
      {
        textoRespuesta: "Puede ocurrir pero solo con bajas potencias",
        isCorrect: false
      },
      {
        textoRespuesta: "Puede ocurrir pero solo a máxima potencia o a potencia de crucero",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - La validez máxima de un SNOWTAM es:",
    opciones: [
      {
        textoRespuesta: "3 horas",
        isCorrect: false
      },
      {
        textoRespuesta: "24 horas",
        isCorrect: true
      },
      {
        textoRespuesta: "12 horas",
        isCorrect: false
      },
      {
        textoRespuesta: "6 horas",
        isCorrect: false
      }
    ]
  }
];

export default preguntas;