const preguntas = [
  {
    titulo: "1 - ¿Cuál de las siguientes afirmaciones es más ventajosa a la hora de realizar un máximo planeo?:",
    opciones: [
      {
        textoRespuesta: "1 punto de flap",
        isCorrect: false
      },
      {
        textoRespuesta: "2 puntos de flap",
        isCorrect: false
      },
      {
        textoRespuesta: "Full flap",
        isCorrect: false
      },
      {
        textoRespuesta: "Avión limpio",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "2 - ¿Cuál será la influencia en las performances de un avión si la altitud de presión de un aeródromo decrece?:",
    opciones: [
      {
        textoRespuesta: "Aumenta la distancia de despegue",
        isCorrect: false
      },
      {
        textoRespuesta: "Aumenta la carrera de despegue",
        isCorrect: false
      },
      {
        textoRespuesta: "Aumenta la distancia de aceleración- parada",
        isCorrect: false
      },
      {
        textoRespuesta: "Disminuye la distancia de despegue",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - A que nivel se obtiene la mayor IAS",
    opciones: [
      {
        textoRespuesta: "Niveles bajos",
        isCorrect: true
      },
      {
        textoRespuesta: "A nivel alto",
        isCorrect: false
      },
      {
        textoRespuesta: "A la altitud optima de crucero",
        isCorrect: false
      },
      {
        textoRespuesta: "A nivel medio",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Con el centro de gravedad situado en el límite más adelantado, ¿cuál de las siguientes circunstancias se podrá esperar?:",
    opciones: [
      {
        textoRespuesta: "Tendencia a guiñar a la derecha en el despegue",
        isCorrect: false
      },
      {
        textoRespuesta: "Un descenso del régimen de ascenso",
        isCorrect: true
      },
      {
        textoRespuesta: "Un descenso de la velocidad de aterrizaje",
        isCorrect: false
      },
      {
        textoRespuesta: "Una descenso de la velocidad de pérdida",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - De los siguientes factores cual será más determinante para la carrera de despegue:",
    opciones: [
      {
        textoRespuesta: "Presión",
        isCorrect: false
      },
      {
        textoRespuesta: "Humedad",
        isCorrect: false
      },
      {
        textoRespuesta: "Temperatura",
        isCorrect: false
      },
      {
        textoRespuesta: "Viento en cola",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "6 - El datum usado para los cálculos de carga y centrado es:",
    opciones: [
      {
        textoRespuesta: "Elegido en el eje longitudinal del avión y siempre en la cuaderna cortafuegos",
        isCorrect: false
      },
      {
        textoRespuesta: "Elegido en el eje longitudinal del avión, pero no necesariamente entre el morro y la cola del avión",
        isCorrect: true
      },
      {
        textoRespuesta: "Elegido en el eje longitudinal del avión, y necesariamente situado entre el morro y la cola del avión",
        isCorrect: false
      },
      {
        textoRespuesta: "Elegido en el eje longitudinal del avión, y necesariamente situado entre el borde de ataque y el borde de fuga del ala",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - En los cálculos de carga y centrado, ¿cuál de las siguientes frases describe el datum?:",
    opciones: [
      {
        textoRespuesta: "Es la posición más retrasada del centro de gravedad",
        isCorrect: false
      },
      {
        textoRespuesta: "Es la distancia desde el centro de gravedad al punto donde la componente del peso actúa",
        isCorrect: false
      },
      {
        textoRespuesta: "Es el punto en el avión designado por el fabricante del avión desde el cual se calculan y miden todos los centros d gravedad",
        isCorrect: true
      },
      {
        textoRespuesta: "Es la posición más adelantada del centro de gravedad",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - Hallar cuanto varia la posición del centro de gravedad si añadimos 400 lbs el la estación 97,8 T.O.W = 2850 C.G =101,67.",
    opciones: [
      {
        textoRespuesta: "+0,96”",
        isCorrect: false
      },
      {
        textoRespuesta: "-0,96”",
        isCorrect: false
      },
      {
        textoRespuesta: "+0.47”",
        isCorrect: false
      },
      {
        textoRespuesta: "-0,47”",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "9 - La masa de un avión es de 1950 Kg. Si se añaden 450 Kg en la bodega a 1.75 metros del centro de gravedad (CG), el centro de gravedad cargado (CG) se desplazará:",
    opciones: [
      {
        textoRespuesta: "40 cm",
        isCorrect: false
      },
      {
        textoRespuesta: "30 cm",
        isCorrect: true
      },
      {
        textoRespuesta: "33 cm",
        isCorrect: false
      },
      {
        textoRespuesta: "34 cm",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - La sustentación en el momento del despegue:",
    opciones: [
      {
        textoRespuesta: "Es igual al peso.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es mayor que el peso.",
        isCorrect: true
      },
      {
        textoRespuesta: "Es menor que el peso.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es mayor que el peso en el hemisferio norte y mayor en el sur.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Los factores que afectan a la densidad del aire son: Temperatura, presión y altitud. Señale la afirmación correcta.",
    opciones: [
      {
        textoRespuesta: "A menor altitud, menor densidad.",
        isCorrect: false
      },
      {
        textoRespuesta: "A mayor temperatura, menor densidad.",
        isCorrect: true
      },
      {
        textoRespuesta: "A mayor presión, menor densidad.",
        isCorrect: false
      },
      {
        textoRespuesta: "La B y la C son s.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "12 - Para conseguir el máximo alcance sobre el suelo con viento de cara la velocidad con respecto al aire deberá:",
    opciones: [
      {
        textoRespuesta: "Reducir a la velocidad de turbulencia",
        isCorrect: false
      },
      {
        textoRespuesta: "Ser mayor que la velocidad de máximo alcance sin viento",
        isCorrect: true
      },
      {
        textoRespuesta: "Ser igual que la velocidad de máximo alcance sin viento",
        isCorrect: false
      },
      {
        textoRespuesta: "Menor que la velocidad de máximo alcance sin viento",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - Señalar lo incorrecto durante un despegue",
    opciones: [
      {
        textoRespuesta: "La L aumenta con el cuadrado de la velocidad",
        isCorrect: false
      },
      {
        textoRespuesta: "La D aumenta con el cuadrado de la velocidad",
        isCorrect: false
      },
      {
        textoRespuesta: "La tracción aumenta con la velocidad",
        isCorrect: true
      },
      {
        textoRespuesta: "La fuerza de rozamiento disminuye con la velocidad",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14 - Si tenemos el centro de gravedad situado a 101,2 pulgadas y el limite trasero es de 104, pulgadas, cuanto peso podremos cambiar de la estación 112.5 a la estación 123,45 T.O.W=3140 lbs.",
    opciones: [
      {
        textoRespuesta: "207 lbs",
        isCorrect: false
      },
      {
        textoRespuesta: "802 lbs",
        isCorrect: true
      },
      {
        textoRespuesta: "1002 lbs",
        isCorrect: false
      },
      {
        textoRespuesta: "542 lbs",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "15 - Un viento de cara que aumenta con la altitud, comparado con una condición sin viento (asumiendo IAS constante):",
    opciones: [
      {
        textoRespuesta: "No tiene efecto en el régimen de ascenso",
        isCorrect: true
      },
      {
        textoRespuesta: "No tiene efecto sobre el ángulo de la senda de ascenso",
        isCorrect: false
      },
      {
        textoRespuesta: "Aumenta el ángulo y régimen de ascenso",
        isCorrect: false
      },
      {
        textoRespuesta: "Decrece el ángulo y régimen de ascenso",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "16 - Se define pendiente de ascenso como la relación entre",
    opciones: [
      {
        textoRespuesta: "Aumento de altitud y distancia respecto al suelo en porcentaje",
        isCorrect: false
      },
      {
        textoRespuesta: "Aumento de altitud y distancia horizontal en relación con el aire en porcentaje",
        isCorrect: true
      },
      {
        textoRespuesta: "Velocidad verdadera y régimen de ascenso",
        isCorrect: false
      },
      {
        textoRespuesta: "Régimen de ascenso y velocidad verdadera",
        isCorrect: false
      }
    ]
  }
];

export default preguntas;