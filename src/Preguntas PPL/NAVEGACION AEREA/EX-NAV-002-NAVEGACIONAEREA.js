const preguntas = [
  {
    titulo: "1 - Supuestos: Rumbo verdadero = 090º, TAS = 180 kt, GS = 180 kt, deriva 5º a la derecha.Calcular la W/V.",
    opciones: [
      {
        textoRespuesta: "180º y 15 kt.",
        isCorrect: false
      },
      {
        textoRespuesta: "010º y 15 kt.",
        isCorrect: false
      },
      {
        textoRespuesta: "360º y 15 kt.",
        isCorrect: true
      },
      {
        textoRespuesta: "190º y 15 kt.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - Supuestos: Rumbo verdadero = 090º, TAS = 200º kt, W/V = 220º / 30 kt. Calcular la GS.",
    opciones: [
      {
        textoRespuesta: "220",
        isCorrect: true
      },
      {
        textoRespuesta: "230",
        isCorrect: false
      },
      {
        textoRespuesta: "200",
        isCorrect: false
      },
      {
        textoRespuesta: "180",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - Un avión vuela en la recalada con la marcación relativa de 0º. Si el rumbo magnético disminuye ¿qué sufre el avión?",
    opciones: [
      {
        textoRespuesta: "Un viento desde el oeste.",
        isCorrect: false
      },
      {
        textoRespuesta: "Una deriva cero.",
        isCorrect: false
      },
      {
        textoRespuesta: "Una deriva de la derecha.",
        isCorrect: true
      },
      {
        textoRespuesta: "Una deriva de la izquierda.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Una línea recta trazada sobre un carta mide 4.63 cm y representa 150 NM. La escala de la carta es:",
    opciones: [
      {
        textoRespuesta: "1:6.000.000",
        isCorrect: true
      },
      {
        textoRespuesta: "1:5.000.000",
        isCorrect: false
      },
      {
        textoRespuesta: "1:1.000.000",
        isCorrect: false
      },
      {
        textoRespuesta: "1:3.000.000",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - Un avión en recalada con un QDM de 0º. Su rumbo magnético cada vez es menor. La aeronave experimenta.",
    opciones: [
      {
        textoRespuesta: "Una deriva a la izquierda.",
        isCorrect: false
      },
      {
        textoRespuesta: "Una deriva a la derecha",
        isCorrect: true
      },
      {
        textoRespuesta: "Fuerte viento de cara",
        isCorrect: false
      },
      {
        textoRespuesta: "Fuerte viento de cola",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - TC 90º, TAS 180 Kt GS180 Kt, deriva 5º a la derecha, Hallar el viento:",
    opciones: [
      {
        textoRespuesta: "180/15",
        isCorrect: false
      },
      {
        textoRespuesta: "90/15",
        isCorrect: false
      },
      {
        textoRespuesta: "270/15",
        isCorrect: false
      },
      {
        textoRespuesta: "360/15",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "7 - Conociendo TAS = 140, curso verdadero = 120º y viento = 90º/30 Kts calcular el rumbo verdadero y la velocidad sobre el suelo GS:",
    opciones: [
      {
        textoRespuesta: "128º, 166 Kts.",
        isCorrect: false
      },
      {
        textoRespuesta: "130º, 95 Kts.",
        isCorrect: false
      },
      {
        textoRespuesta: "125º, 110 Kts.",
        isCorrect: false
      },
      {
        textoRespuesta: "112º, 114 Kts.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "8 - La inclinación del eje de la tierra determina entre otras cosas las estaciones del año, la duración del día en distintas latitudes etc., pero ¿Cuál  es el valor de la inclinación en grados?",
    opciones: [
      {
        textoRespuesta: "10º 15 minutos.",
        isCorrect: false
      },
      {
        textoRespuesta: "7º.",
        isCorrect: false
      },
      {
        textoRespuesta: "47º 35 minutos.",
        isCorrect: false
      },
      {
        textoRespuesta: "23º 27 minutos.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "9 - Si navegamos manteniendo centrado el CDI del VOR con un radial de acercamiento o una ruta de alejamiento, la deriva producida por el viento es compensada.",
    opciones: [
      {
        textoRespuesta: "Verdadero.",
        isCorrect: true
      },
      {
        textoRespuesta: "Falso.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - Con rumbo 000º la aguja de ADF marca 120º a la izquierda.Hallar el giro que debemos hacer para que suba la cola:",
    opciones: [
      {
        textoRespuesta: "120º.",
        isCorrect: false
      },
      {
        textoRespuesta: "240º.",
        isCorrect: false
      },
      {
        textoRespuesta: "80º.",
        isCorrect: false
      },
      {
        textoRespuesta: "60º.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "11 - El error de la brújula es máximo:",
    opciones: [
      {
        textoRespuesta: "En el ecuador porque el campo horizontal es mínimo.",
        isCorrect: false
      },
      {
        textoRespuesta: "En los polos porque el campo vertical es mínimo.",
        isCorrect: false
      },
      {
        textoRespuesta: "En el ecuador porque el campo vertical es máximo.",
        isCorrect: false
      },
      {
        textoRespuesta: "En los polos porque el campo horizontal es mínimo.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "12 - TAS 220 Kt, Ruta magnética 212 º, viento 160/50 Kt, Calcular la GS:",
    opciones: [
      {
        textoRespuesta: "250 Kt.",
        isCorrect: false
      },
      {
        textoRespuesta: "246 Kt.",
        isCorrect: false
      },
      {
        textoRespuesta: "290 Kt.",
        isCorrect: false
      },
      {
        textoRespuesta: "186 Kt.",
        isCorrect: true
      }
    ]
  }
];

export default preguntas;