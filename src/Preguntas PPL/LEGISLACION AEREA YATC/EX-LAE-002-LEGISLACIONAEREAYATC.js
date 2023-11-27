const preguntas = [
  {
    titulo: "1 - Un avión en rodaje por el área de maniobras del aeródromo debe ceder el paso a:",
    opciones: [
      {
        textoRespuesta: "Otros tráficos convergentes",
        isCorrect: false
      },
      {
        textoRespuesta: "Aviones despegando o disponiéndose a despegar",
        isCorrect: true
      },
      {
        textoRespuesta: "Todos los vehículos circulan por la plataforma a excepción de los \"follow me”",
        isCorrect: false
      },
      {
        textoRespuesta: "Otros vehículos y peatones",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - El servicio de información de vuelo deberá prestarse a todos los vuelos a los que presumiblemente afecte dicha información, y que:",
    opciones: [
      {
        textoRespuesta: "Sean conocidos por los correspondientes servicios de tráfico aéreo",
        isCorrect: false
      },
      {
        textoRespuesta: "Se les presten servicios de control de trafico aéreo y sean de alguna manera conocidos por los centros que prestan servicios de trafico aéreo",
        isCorrect: true
      },
      {
        textoRespuesta: "Sean conocidos por los correspondientes servicios de tráfico aéreo, por medio del plan de vuelo cumplimentado",
        isCorrect: false
      },
      {
        textoRespuesta: "Solamente se le presten, servicios de control de tráfico aéreo",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - Una zona de control se extenderá lateralmente:",
    opciones: [
      {
        textoRespuesta: "8 nm",
        isCorrect: false
      },
      {
        textoRespuesta: "10 km",
        isCorrect: false
      },
      {
        textoRespuesta: "5 nm",
        isCorrect: true
      },
      {
        textoRespuesta: "Ninguna es",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "4 - ¿En qué sección del AIP se contiene información relativa a áreas y /o rutas para los que se facilitan servicios meteorológicos?",
    opciones: [
      {
        textoRespuesta: "AD",
        isCorrect: false
      },
      {
        textoRespuesta: "ENR",
        isCorrect: false
      },
      {
        textoRespuesta: "MET",
        isCorrect: false
      },
      {
        textoRespuesta: "GEN",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "5 - La distancia vertical entre un nivel, punto u objeto considerado como punto y una referencia especificada corresponde a:",
    opciones: [
      {
        textoRespuesta: "Presión de altitud.",
        isCorrect: false
      },
      {
        textoRespuesta: "Altitud.",
        isCorrect: false
      },
      {
        textoRespuesta: "Altura.",
        isCorrect: true
      },
      {
        textoRespuesta: "Elevación.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - Cuando no se disponga de un radar de vigilancia secundario SSR la identificación radar puede lograrse mediante uno de los siguientes procedimientos",
    opciones: [
      {
        textoRespuesta: "Ordenando al piloto que ejecute uno o más cambios de 45 grados",
        isCorrect: false
      },
      {
        textoRespuesta: "Ordenando al piloto que ejecute uno o más cambios de 10 grados",
        isCorrect: false
      },
      {
        textoRespuesta: "Ordenando al piloto que ejecute uno o más cambios de 20 grados o más",
        isCorrect: false
      },
      {
        textoRespuesta: "Ordenando al piloto que ejecute uno o más cambios de 30 grados o más",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "7 - Qué significado tiene la fase de alerta.",
    opciones: [
      {
        textoRespuesta: "Se abriga temor por la seguridad de una aeronave y sus ocupantes.",
        isCorrect: true
      },
      {
        textoRespuesta: "Empieza cuando la aeronave ha declarado emergencia.",
        isCorrect: false
      },
      {
        textoRespuesta: "Hay incertidumbre sobre la posición de la aeronave.",
        isCorrect: false
      },
      {
        textoRespuesta: "En ese caso la torre nos dará prioridad sobre las otras aeronaves.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - La distancia de despegue TODA es:",
    opciones: [
      {
        textoRespuesta: "La longitud de carrera de despegue disponible más la longitud despejada de obstáculos disponible cuando proceda.",
        isCorrect: true
      },
      {
        textoRespuesta: "La longitud de carrera de despegue disponible más la longitud de la zona de parada.",
        isCorrect: false
      },
      {
        textoRespuesta: "La longitud de la pista disponible más la longitud despejada de obstáculos disponible cuando proceda.",
        isCorrect: false
      },
      {
        textoRespuesta: "La longitud de la carrera de despegue disponible más las longitudes de las zonas de parada y de área despejada de obstáculos cuando proceda.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - Si se produce un accidente quien iniciará la investigación del mismo?",
    opciones: [
      {
        textoRespuesta: "El gobierno del país donde se ha producido el accidente",
        isCorrect: true
      },
      {
        textoRespuesta: "El organismo judicial del registro del avión",
        isCorrect: false
      },
      {
        textoRespuesta: "El país de matricula de la aeronave",
        isCorrect: false
      },
      {
        textoRespuesta: "Los países de origen de los pasajeros",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - Donde empieza la CTA",
    opciones: [
      {
        textoRespuesta: "a cualquier nivel pero siempre que coincida con un nivel de vuelo VFR",
        isCorrect: false
      },
      {
        textoRespuesta: "a 700' agl",
        isCorrect: true
      },
      {
        textoRespuesta: "a 1000' agl",
        isCorrect: false
      },
      {
        textoRespuesta: "a 1000' agl o a 3000´msl la que resulte mayor",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Las VMC para espacio aéreo clase B por encima de 10,000 pies",
    opciones: [
      {
        textoRespuesta: "1500 metros separación horizontal con nubes y 8 Km visibilidad",
        isCorrect: true
      },
      {
        textoRespuesta: "1500 metros separación horizontal con nubes y 5 Km visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Cielo despejado y 5 Km de visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Cielo despejado y 8 Km de visibilidad",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - Durante una “Aproximación Visual” en un espacio controlado (Clase C), cual es correcta:",
    opciones: [
      {
        textoRespuesta: "El ATC es responsable de cuidar nuestra separación solo con otros tráficos IFR.",
        isCorrect: false
      },
      {
        textoRespuesta: "El ATC es responsable de cuidar nuestra separación con otros tráficos en llegada.",
        isCorrect: false
      },
      {
        textoRespuesta: "El piloto será responsable de la separación con otros tráficos.",
        isCorrect: true
      },
      {
        textoRespuesta: "El ATC es responsable de cuidar nuestra separación con otros tráficos.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - Se denomina región de información de vuelo (FIR) a un espacio aéreo entre cuyos limites se prestan los siguientes servicios:",
    opciones: [
      {
        textoRespuesta: "Servicio de información de vuelo y servicio de asesoramiento.",
        isCorrect: false
      },
      {
        textoRespuesta: "Servicio de información de vuelo y servicio de alerta.",
        isCorrect: true
      },
      {
        textoRespuesta: "Servicio de información de vuelo, servicio de alerta y servicio de asesoramiento.",
        isCorrect: false
      },
      {
        textoRespuesta: "Exclusivamente servicio de información de vuelo.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14 - Siempre que los mínimos de separación no se apliquen, cuales de los vuelos siguientes se considera trafico esencial respecto a otro.",
    opciones: [
      {
        textoRespuesta: "Todos los vuelos IFR.",
        isCorrect: false
      },
      {
        textoRespuesta: "Todos los vuelos IFR en espacios aéreos controlados y los vuelos VFR controlados.",
        isCorrect: true
      },
      {
        textoRespuesta: "Los vuelos VFR y VFR controlados.",
        isCorrect: false
      },
      {
        textoRespuesta: "Solo los vuelos IFR controlados.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "15 - El servicio de alerta lo proporciona:",
    opciones: [
      {
        textoRespuesta: "Solamente las unidades ATC.",
        isCorrect: false
      },
      {
        textoRespuesta: "La unidad ATC responsable del avión en ese momento, si puede transmitir en 121,5 MHz.",
        isCorrect: false
      },
      {
        textoRespuesta: "La unidad ATS responsable del avión en ese momento.",
        isCorrect: true
      },
      {
        textoRespuesta: "Los centros de control de área",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "16 - La VMC mínima para un espacio clasificado “G” por encima de 10000 pies MSL son:",
    opciones: [
      {
        textoRespuesta: "1 milla náutica horizontal y 1000 pies vertical desde nubes; 5 Km. de visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "1 milla náutica horizontal y 1000 pies vertical desde nubes; 8 Km. de visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "1500 metros horizontal y 1000 pies vertical desde nubes; 8 Km. de visibilidad",
        isCorrect: true
      },
      {
        textoRespuesta: "1500 metros horizontal y 1000 pies vertical desde nubes; 5 Km. de visibilidad",
        isCorrect: false
      }
    ]
  }
];


export default preguntas;