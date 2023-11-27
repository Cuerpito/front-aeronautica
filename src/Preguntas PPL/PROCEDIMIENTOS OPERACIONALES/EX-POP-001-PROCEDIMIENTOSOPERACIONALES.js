const preguntas = [
  {
    titulo: "1 - Las horas comprendidas entre el fin del crepúsculo civil vespertino y el comienzo del matutino, se denomina:",
    opciones: [
      {
        textoRespuesta: "Día",
        isCorrect: false
      },
      {
        textoRespuesta: "Noche",
        isCorrect: true
      },
      {
        textoRespuesta: "Tarde",
        isCorrect: false
      },
      {
        textoRespuesta: "Hora UTC",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - Fase de emergencia es la expresión genérica que significa según el caso:",
    opciones: [
      {
        textoRespuesta: "Fase de incertidumbre",
        isCorrect: false
      },
      {
        textoRespuesta: "Fase de alerta",
        isCorrect: false
      },
      {
        textoRespuesta: "Fase de peligro",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - Cuando el piloto al mando de una aeronave observe que otra aeronave se halla en situación de peligro:",
    opciones: [
      {
        textoRespuesta: "Abandonará la zona para no interferir al SAR",
        isCorrect: false
      },
      {
        textoRespuesta: "No hará uso de la radio para no interferir",
        isCorrect: false
      },
      {
        textoRespuesta: "No perderá de vista la aeronave hasta que su presencia no sea necesaria",
        isCorrect: true
      },
      {
        textoRespuesta: "Las respuestas A y B son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "4 - ¿Cuál de las siguientes fases se considera emergencia?",
    opciones: [
      {
        textoRespuesta: "INCERFA",
        isCorrect: false
      },
      {
        textoRespuesta: "ALERFA",
        isCorrect: false
      },
      {
        textoRespuesta: "DETRESFA",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "5 - De los siguientes instrumentos cual no es necesario para un vuelo VFR",
    opciones: [
      {
        textoRespuesta: "Altímetro o baroaltímetro de precisión",
        isCorrect: false
      },
      {
        textoRespuesta: "Anemómetro",
        isCorrect: false
      },
      {
        textoRespuesta: "Variómetro",
        isCorrect: true
      },
      {
        textoRespuesta: "a y c son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "6 - ¿Cuál es la frecuencia de emergencia en VHF banda aérea?",
    opciones: [
      {
        textoRespuesta: "1215 Mhz",
        isCorrect: true
      },
      {
        textoRespuesta: "12015 Mhz",
        isCorrect: false
      },
      {
        textoRespuesta: "1220 Mhz",
        isCorrect: false
      },
      {
        textoRespuesta: "12345 Mhz",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - Un suceso en el que la aeronave sufre daños o roturas estructurales que afectan adversamente a su resistencia estructural, su performance os sus características de vuelo, se denomina:",
    opciones: [
      {
        textoRespuesta: "Accidente",
        isCorrect: true
      },
      {
        textoRespuesta: "Emergencia tipo 1",
        isCorrect: false
      },
      {
        textoRespuesta: "Incidente",
        isCorrect: false
      },
      {
        textoRespuesta: "Según el anexo 13 de OACI, \"urgencia de aeronave”",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - La turbulencia de estela es mayor cuando el avión:",
    opciones: [
      {
        textoRespuesta: "Pesa mucho y vuela a alta velocidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Pesa poco y vuela a alta velocidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Pesa mucho y vuela a baja velocidad",
        isCorrect: true
      },
      {
        textoRespuesta: "Pesa poco y vuela a baja velocidad",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - Cual es la separación en pistas paralelas?",
    opciones: [
      {
        textoRespuesta: "La separación será la que permitan las dimensiones donde se encuentre el aeropuerto",
        isCorrect: false
      },
      {
        textoRespuesta: "La separación será de al menos 760 metros",
        isCorrect: true
      },
      {
        textoRespuesta: "La separación será al menos 900 metros entre los ejes de las pistas",
        isCorrect: false
      },
      {
        textoRespuesta: "La separación será la que consideren oportuna las autoridades del país",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - Prevención de colisiones La prioridad para aterrizar más alta la tiene:",
    opciones: [
      {
        textoRespuesta: "Una aeronave militar",
        isCorrect: false
      },
      {
        textoRespuesta: "Una aeronave que tiene la necesidad de aterrizar (aterrizaje de emergencia)",
        isCorrect: true
      },
      {
        textoRespuesta: "Una aeronave en vuelo diplomático",
        isCorrect: false
      },
      {
        textoRespuesta: "Una ambulancia aérea transportando",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - El riesgo de estela turbulenta es el más alto:",
    opciones: [
      {
        textoRespuesta: "Siguiendo a un avión precedente a alta velocidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Cuando un avión precedente ha aplicado brevemente empuje de despegue justo antes del despegue",
        isCorrect: false
      },
      {
        textoRespuesta: "Cuando un avión pesado acaba de realizar un despegue en una pista paralela cercana con un ligero viento cruzado",
        isCorrect: true
      },
      {
        textoRespuesta: "Si, simplemente antes de aterrizar un avión mucho más ligero ha aterrizado en la misma pista de aterrizaje con fuerte viento cruzado",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - Una noticia conteniendo información concerniente a la seguridad en vuelo, navegación aérea, técnica, administrativa o legislativa y originada en el AIS del Estado, se llama",
    opciones: [
      {
        textoRespuesta: "Publicación de Información Aeronáutica (AIP)",
        isCorrect: false
      },
      {
        textoRespuesta: "Circular de Información Aeronáutica (AI",
        isCorrect: true
      },
      {
        textoRespuesta: "NOTAM",
        isCorrect: false
      },
      {
        textoRespuesta: "AIRAC",
        isCorrect: false
      }
    ]
  }
];

export default preguntas;