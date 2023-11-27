const preguntas = [
  {
    titulo: "1 - Elija la afirmación que considere correcta en relación a las isobaras y a los patrones de flujo de vientos en las áreas de sistemas de altas y bajas presiones que aparecen en una carta meteorológica de superficie.",
    opciones: [
      {
        textoRespuesta: "cuando las isobaras se encuentran muy separadas, los picos de las ondas estacionarias pueden estar marcadas por nubes lenticulares estacionarias",
        isCorrect: false
      },
      {
        textoRespuesta: "los vientos de superficie soplan en paralelo a las isobaras",
        isCorrect: false
      },
      {
        textoRespuesta: "las isobaras unen líneas de nivel de la misma temperatura",
        isCorrect: false
      },
      {
        textoRespuesta: "cuando las isobaras están muy próximas, la fuerza del gradiente de presión es mayor a las velocidades del viento son mayores",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "2 - Se dice que una masa de aire es inestable cuando",
    opciones: [
      {
        textoRespuesta: "la temperatura y la humedad no son constantes",
        isCorrect: false
      },
      {
        textoRespuesta: "el embolsamiento de aire ascendente continúa ascendiendo hasta una considerable altitud",
        isCorrect: true
      },
      {
        textoRespuesta: "la temperatura aumenta con la altura",
        isCorrect: false
      },
      {
        textoRespuesta: "la presión varía significativamente sobre un área horizontal dada",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - En relación a la brisa terrestre, ¿ Cuál de las siguientes afirmaciones es correcta?",
    opciones: [
      {
        textoRespuesta: "Sopla del mar a tierra",
        isCorrect: false
      },
      {
        textoRespuesta: "Sopla de día",
        isCorrect: false
      },
      {
        textoRespuesta: "Sopla solo al mediodía",
        isCorrect: false
      },
      {
        textoRespuesta: "Sopla de la tierra al mar",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "4 - Al aproximarse un frente cálido ( en el hemisferio norte) la dirección del viento cambia de la superficie a la tropopausa . El efecto de este cambio supone que el viento:",
    opciones: [
      {
        textoRespuesta: "vira en sentido levogiro tanto en la capa de rozamiento como por encima de la misma",
        isCorrect: false
      },
      {
        textoRespuesta: "vira en sentido dextrogiro tanto en la capa de rozamiento como por debajo de la misma",
        isCorrect: false
      },
      {
        textoRespuesta: "vira en sentido levogiro en la capa de rozamiento y en sentido dextrogiro por encima de la misma.",
        isCorrect: true
      },
      {
        textoRespuesta: "vira en sentido dextrogiro en la capa de rozamiento y en sentido dextrogiro por encima de la misma",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - ¿Cómo puede localizarse la intensidad correcta del viento , para un determinado nivel, que se encuentra entre dos niveles de cartas de altura ? ( p. Ej. Viento FL 250 cuando se dispone de las carta 500hPa y 300hPa",
    opciones: [
      {
        textoRespuesta: "mediante interpolación de la información disponible sobre vientos en ambas cartas, al tiempo que se considera la información sobre vientos máximos de la carta sobre condiciones meteorológicas significativas",
        isCorrect: true
      },
      {
        textoRespuesta: "mediante la lectura de la dirección y velocidad del viento en la carta 300hPa",
        isCorrect: false
      },
      {
        textoRespuesta: "mediante la lectura de la dirección y velocidad del viento en las siguiente carta superior.",
        isCorrect: false
      },
      {
        textoRespuesta: "Por simple interpolación de la información sobre vientos disponible en ambas cartas.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - Remítase al siguiente extracto de TAF: ECMG 1821 2000 BKN004 PROB30 BECMG 2124 0500 FG VV001 ¿Cuál será la visibilidad prevista para la 2400UTC?",
    opciones: [
      {
        textoRespuesta: "500 metros",
        isCorrect: true
      },
      {
        textoRespuesta: "2.000 metros",
        isCorrect: false
      },
      {
        textoRespuesta: "Entre 0 y 1.000 metros",
        isCorrect: false
      },
      {
        textoRespuesta: "Entre 500 y 2.000 metros",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - LEMD 070500 071218 17020G30KT 9999 SCT070 BKN090 TEMPO 1315 5000 SHRA BECMG 1618 27010 8000 TS SCT045CB Si estimamos aterrizar en Barajas a las 17:00 que tiempo encontraremos",
    opciones: [
      {
        textoRespuesta: "17020G30 9999 SCT 070 BKN 090",
        isCorrect: false
      },
      {
        textoRespuesta: "La anterior más tormentas y 8000 de visibilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Viento de 27010 8000 TS SCT 045CB",
        isCorrect: true
      },
      {
        textoRespuesta: "La respuesta a y temporalmente 5000 SHRA",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - Con una temperatura de 14ºC y un punto de rocío de 12ºC que es necesario para que se forme niebla",
    opciones: [
      {
        textoRespuesta: "Viento fuerte y racheado",
        isCorrect: false
      },
      {
        textoRespuesta: "Viento ligero de 2 a 5 nudos",
        isCorrect: true
      },
      {
        textoRespuesta: "Viento calma",
        isCorrect: false
      },
      {
        textoRespuesta: "Un frente frío",
        isCorrect: false
      }
    ]
  }
];


export default preguntas;