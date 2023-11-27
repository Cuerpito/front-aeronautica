const preguntas = [
  {
    titulo: "1 - Supuestos: Rumbo magnético 311º, ángulo de deriva 10º a la izquierda, marcación relativa de NDB 270º. ¿Cuál es la marcación magnética del NDB medida desde el avión?.",
    opciones: [
      {
        textoRespuesta: "211º",
        isCorrect: false
      },
      {
        textoRespuesta: "208º",
        isCorrect: false
      },
      {
        textoRespuesta: "221º",
        isCorrect: true
      },
      {
        textoRespuesta: "180º",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - Suponiendo: TAS = 220 kt, rumbo magnético = 212º, W/V 160º(M)/50 kt. Calcular la GS.",
    opciones: [
      {
        textoRespuesta: "250 kt.",
        isCorrect: false
      },
      {
        textoRespuesta: "246 kt.",
        isCorrect: false
      },
      {
        textoRespuesta: "290 kt.",
        isCorrect: false
      },
      {
        textoRespuesta: "186 kt.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - Derrota verdadera 348º, deriva 17º izquierda, declinación 32 W, desvío 4ºE ¿qué rumbo está marcando la brújula?",
    opciones: [
      {
        textoRespuesta: "033º.",
        isCorrect: true
      },
      {
        textoRespuesta: "337º",
        isCorrect: false
      },
      {
        textoRespuesta: "007º",
        isCorrect: false
      },
      {
        textoRespuesta: "359º",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Cuanto tarda un avión en recorrer 5 nm si vuela con una GS de 269 kts.",
    opciones: [
      {
        textoRespuesta: "0 minutos y 34 segundos.",
        isCorrect: false
      },
      {
        textoRespuesta: "1 minuto y 55 segundos.",
        isCorrect: false
      },
      {
        textoRespuesta: "2 minutos y 30 segundos.",
        isCorrect: false
      },
      {
        textoRespuesta: "1 minuto y 7 segundos.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "5 - Pista 23 (227 magnético) ATIS 180/30 Kt declinación 13º E. Hallar la componente de viento cruzado:",
    opciones: [
      {
        textoRespuesta: "30 Kt",
        isCorrect: false
      },
      {
        textoRespuesta: "10 Kt",
        isCorrect: false
      },
      {
        textoRespuesta: "22 Kt",
        isCorrect: true
      },
      {
        textoRespuesta: "35 Kt",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - En relación con las cartas, indique cuál de las siguientes frases NO  es cierta:",
    opciones: [
      {
        textoRespuesta: "Las cartas equivalentes son conformes.",
        isCorrect: true
      },
      {
        textoRespuesta: "La escala corresponde a la razón entre cualquier unidad de la longitud la superficie de la tierra y la distancia que esta longitud representa en la carta.",
        isCorrect: false
      },
      {
        textoRespuesta: "La escala de distancia en una carta OACI  1/500.000 puede considerarse como prácticamente constante.",
        isCorrect: false
      },
      {
        textoRespuesta: "Las líneas Loxodrómicas en una carta OACI 1/500.000 son líneas curvas.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - ¿Qué es un línea isogona?",
    opciones: [
      {
        textoRespuesta: "La línea que une puntos de iguales coordenadas geograficas magnética.",
        isCorrect: false
      },
      {
        textoRespuesta: "La línea que une puntos de igual inclinación magnética.",
        isCorrect: false
      },
      {
        textoRespuesta: "La línea que une puntos de igual declinación magnética.",
        isCorrect: true
      },
      {
        textoRespuesta: "La línea que une puntos de igual desvío.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - En un ADF, ¿A qué se le llama P?",
    opciones: [
      {
        textoRespuesta: "Al rumbo magnético que debemos seguir para ir a la estación NDB.",
        isCorrect: false
      },
      {
        textoRespuesta: "Al ángulo formado por el morro del avión y la punta de la aguja del ADF medido en el sentido de las agujas del reloj.",
        isCorrect: true
      },
      {
        textoRespuesta: "Al rumbo magnético que debemos seguir para alejarnos del NDB.",
        isCorrect: false
      },
      {
        textoRespuesta: "A la diferencia entre la marcación de la aguja del ADF y el norte magnético.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - Volamos con rumbo 075º y el ADF nos empieza a marcar lentamente 075º, 080º, 085º, 090º. ¿Qué conclusión podemos sacar?",
    opciones: [
      {
        textoRespuesta: "El viento viene de la izquierda.",
        isCorrect: false
      },
      {
        textoRespuesta: "Estamos encima de la estación.",
        isCorrect: false
      },
      {
        textoRespuesta: "Nos alejamos de la estación.",
        isCorrect: false
      },
      {
        textoRespuesta: "El viento viene de la derecha.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "10 - En la carta OACI:",
    opciones: [
      {
        textoRespuesta: "Podemos medir rumbos directamente.",
        isCorrect: false
      },
      {
        textoRespuesta: "Podemos medir distancias directamente.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es conforme.",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas son s.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "11 - La velocidad respecto al suelo es de 105 Kt, la distancia entre A y B son 103 NM, Calcular el tiempo entre A y B:",
    opciones: [
      {
        textoRespuesta: "59 minutos.",
        isCorrect: true
      },
      {
        textoRespuesta: "58 minutos.",
        isCorrect: false
      },
      {
        textoRespuesta: "1 hora y un minuto.",
        isCorrect: false
      },
      {
        textoRespuesta: "57 minutos.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - El valor de variación magnética",
    opciones: [
      {
        textoRespuesta: "Debe ser de 0 en el ecuador magnético",
        isCorrect: false
      },
      {
        textoRespuesta: "No puede exceder de 90º",
        isCorrect: false
      },
      {
        textoRespuesta: "Varían entre un máximo de 45º este y 45º oeste",
        isCorrect: false
      },
      {
        textoRespuesta: "Tiene un máximo de 180º",
        isCorrect: true
      }
    ]
  }
];

export default preguntas;