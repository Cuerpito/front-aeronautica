const preguntas = [
  {
    titulo: "1 - Cuando una aeronave vuela a lo largo de un radial VOR, seguira:",
    opciones: [
      {
        textoRespuesta: "Una derrota magnética constante.",
        isCorrect: false
      },
      {
        textoRespuesta: "Una derrota loxodromica",
        isCorrect: false
      },
      {
        textoRespuesta: "Una derrota ortodromica",
        isCorrect: true
      },
      {
        textoRespuesta: "Una línea de marcación constante.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - Un avión vuela siguiendo una derrota verdadera de 048º a una TAS de 210 kt. La velocidad del viento es 350º/30 kt. La GS y el ángulo de deriva son:",
    opciones: [
      {
        textoRespuesta: "200 kt. 3,5º a la derecha.",
        isCorrect: false
      },
      {
        textoRespuesta: "192 kt. 7º a la izquierda.",
        isCorrect: false
      },
      {
        textoRespuesta: "192 kt. 7º a la derecha.",
        isCorrect: true
      },
      {
        textoRespuesta: "225 kt. 7º a la izquierda.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - Al decelerar en rumbo oeste en el hemisferio norte, la brújula magnética de lectura directa girará:",
    opciones: [
      {
        textoRespuesta: "Hacia el norte y en sentido horario.",
        isCorrect: false
      },
      {
        textoRespuesta: "Hacia el norte y en sentido antihorario.",
        isCorrect: false
      },
      {
        textoRespuesta: "Hacia el sur y en sentido horario.",
        isCorrect: true
      },
      {
        textoRespuesta: "Hacia el sur y en sentido antihorario.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Para aterrizar en la pista 23 (227ºM) la referencia W/V del ATIS es 180º/30 kts. La declinación es 13ºE. Indicar cual es el componente transversal de viento.",
    opciones: [
      {
        textoRespuesta: "20",
        isCorrect: false
      },
      {
        textoRespuesta: "15",
        isCorrect: false
      },
      {
        textoRespuesta: "22",
        isCorrect: true
      },
      {
        textoRespuesta: "26",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - La distancia medida entre dos puntos de una carta de navegación es de 42 mm. La escala de la carta es de 1:1.600.000. Hallar la distancia sobre el suelo:",
    opciones: [
      {
        textoRespuesta: "270 millas.",
        isCorrect: false
      },
      {
        textoRespuesta: "3,69 millas.",
        isCorrect: false
      },
      {
        textoRespuesta: "36,30 millas.",
        isCorrect: true
      },
      {
        textoRespuesta: "67,20 millas.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - ¿Qué tipo de carta es cuando se enfoca desde el borde o superficie de la Tierra?",
    opciones: [
      {
        textoRespuesta: "Ortográfica.",
        isCorrect: false
      },
      {
        textoRespuesta: "Escenográfica.",
        isCorrect: false
      },
      {
        textoRespuesta: "Estereográfica.",
        isCorrect: true
      },
      {
        textoRespuesta: "Gnomónica.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - El sistema de navegación omnidireccional que opera en la banda de frecuencia de VHF recibe el nombre de:",
    opciones: [
      {
        textoRespuesta: "NDB.",
        isCorrect: false
      },
      {
        textoRespuesta: "Gonio de VHF.",
        isCorrect: false
      },
      {
        textoRespuesta: "VOR.",
        isCorrect: true
      },
      {
        textoRespuesta: "ADF.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - ¿Qué equipo de radar en tierra necesita un equipo transpondedor a bordo del avión para que los controladores reciban otros tipos de información del tráfico aparte de su eco?",
    opciones: [
      {
        textoRespuesta: "Radar de primera clase.",
        isCorrect: false
      },
      {
        textoRespuesta: "Radar primario.",
        isCorrect: false
      },
      {
        textoRespuesta: "Radar no autónomo.",
        isCorrect: false
      },
      {
        textoRespuesta: "Radar secundario.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "9 - Los polos magnéticos no coinciden con los geográficos:",
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
    titulo: "10 - Supuesto: Rumbo magnético 311º. Ángulo de deriva 10º a la izquierda.Marcación relativa de NDB 270 º. ¿Cuál es la marcación magnética del NDB medida desde el avión?",
    opciones: [
      {
        textoRespuesta: "180º.",
        isCorrect: false
      },
      {
        textoRespuesta: "211º.",
        isCorrect: false
      },
      {
        textoRespuesta: "221º.",
        isCorrect: true
      },
      {
        textoRespuesta: "208º.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Cuando seguimos un radial VOR",
    opciones: [
      {
        textoRespuesta: "Estamos volando una marcación magnética",
        isCorrect: false
      },
      {
        textoRespuesta: "Estamos volando una ruta ortodrómica",
        isCorrect: true
      },
      {
        textoRespuesta: "Estamos volando una ruta loxodrómica a rumbo constante",
        isCorrect: false
      },
      {
        textoRespuesta: "Estamos volando una marcación geográfica",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - Un avión vuela siguiendo una derrota verdadera de 048º a una TAS constante de 210 kt. La velocidad del viento es de 350º / 30 kt. La G.S. y el ángulo de deriva son:",
    opciones: [
      {
        textoRespuesta: "200 kt, 3.5º a la derecha.",
        isCorrect: false
      },
      {
        textoRespuesta: "192 kt, 7º a la izquierda.",
        isCorrect: false
      },
      {
        textoRespuesta: "192 kt 7º a la derecha.",
        isCorrect: true
      },
      {
        textoRespuesta: "285 kt, 7º a la izquierda.",
        isCorrect: false
      }
    ]
  }
];

export default preguntas;