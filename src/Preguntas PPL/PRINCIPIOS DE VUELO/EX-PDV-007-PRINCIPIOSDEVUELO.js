const preguntas = [
  {
    titulo: "1 - En un avión normal estable, el centro de gravedad se encuentra:",
    opciones: [
      {
        textoRespuesta: "Lo suficientemente adelantado con respecto al punto neutro del avión",
        isCorrect: true
      },
      {
        textoRespuesta: "Entre el límite posterior y el punto neutro del avión",
        isCorrect: false
      },
      {
        textoRespuesta: "En el punto neutro del avión",
        isCorrect: false
      },
      {
        textoRespuesta: "Por detrás del punto neutro del avión",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - En lo referente al peso porcentual de los gases que componen la atmósfera, es correcto que:",
    opciones: [
      {
        textoRespuesta: "El nitrógeno pesa un 78%",
        isCorrect: false
      },
      {
        textoRespuesta: "El Oxígeno pesa un 21%",
        isCorrect: false
      },
      {
        textoRespuesta: "El 1% restante está formado por gases nobles, como el Argón, el Neón, el Xenón, etc.",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas las anteriores son s.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - La Altitud de Presión (PA):",
    opciones: [
      {
        textoRespuesta: "Nos mide la distancia desde nuestro altímetro a la isobara de 29,92”Hg",
        isCorrect: false
      },
      {
        textoRespuesta: "Es invariable.",
        isCorrect: false
      },
      {
        textoRespuesta: "Se la considera una altitud de referencia necesaria para el cálculo de las actuaciones del avión.",
        isCorrect: false
      },
      {
        textoRespuesta: "Las respuestas a y c son s.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "4 - De las siguientes velocidades, señale la más próxima a la velocidad del avión con respecto al suelo:",
    opciones: [
      {
        textoRespuesta: "IAS",
        isCorrect: false
      },
      {
        textoRespuesta: "TAS",
        isCorrect: true
      },
      {
        textoRespuesta: "CAS",
        isCorrect: false
      },
      {
        textoRespuesta: "EAS",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - Sabemos que el viento relativo (corriente de aire libre) y el viento relativo real no siguen la misma dirección:",
    opciones: [
      {
        textoRespuesta: "Porque siempre existe una deflexión hacia abajo del viento que impacta contra el perfil aerodinámico.",
        isCorrect: true
      },
      {
        textoRespuesta: "Porque en determinadas ocasiones existe una deflexión hacia abajo del viento al impactar contra el perfil aerodinámico.",
        isCorrect: false
      },
      {
        textoRespuesta: "No es correcto. El viento relativo real y la corriente de aire libre siguen siempre la misma dirección.",
        isCorrect: false
      },
      {
        textoRespuesta: "Ninguna de las respuestas anteriores es .",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "6 - ¿Cuál de los siguientes mandos de vuelo no está incluido en los mandos de vuelo secundarios?",
    opciones: [
      {
        textoRespuesta: "Flaps.",
        isCorrect: false
      },
      {
        textoRespuesta: "Compensador de alabeo.",
        isCorrect: false
      },
      {
        textoRespuesta: "Timón de dirección.",
        isCorrect: true
      },
      {
        textoRespuesta: "Amortiguador de guiñada.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - Si, aun teniendo indicación del avisador de pérdida, continuamos aumentando el ángulo de ataque, se producirá el bataneo. Estas vibraciones de la columna de mandos y del avión están producidas por:",
    opciones: [
      {
        textoRespuesta: "Ser el flujo de aire que impacta sobre las superficies de control turbulento.",
        isCorrect: false
      },
      {
        textoRespuesta: "Lo anterior, señalando especialmente el flujo de aire que impacta sobre el estabilizador de cola, que es muy turbulento y que procede de la capa límite casi desprendida de los planos.",
        isCorrect: true
      },
      {
        textoRespuesta: "Porque al aproximarse a la pérdida los mandos tienden a moverse indiscriminadamente.",
        isCorrect: false
      },
      {
        textoRespuesta: "Ninguna de las anteriores es .",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "8 - ¿Cuál es la fuerza igual y contraria a la sustentación en un vuelo de crucero no acelerado?",
    opciones: [
      {
        textoRespuesta: "La tracción.",
        isCorrect: false
      },
      {
        textoRespuesta: "Resistencia parásita.",
        isCorrect: false
      },
      {
        textoRespuesta: "Resistencia inducida.",
        isCorrect: false
      },
      {
        textoRespuesta: "El peso.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "9 - El aire se va moviendo alejándose del borde de ataque del ala, ¿cómo varía el espesor de la capa límite?",
    opciones: [
      {
        textoRespuesta: "Permanece constante hasta un cierto nº de Reynolds.",
        isCorrect: false
      },
      {
        textoRespuesta: "Aumenta siempre.",
        isCorrect: true
      },
      {
        textoRespuesta: "Disminuye si la capa es laminar.",
        isCorrect: false
      },
      {
        textoRespuesta: "Se hace cero en la capa de transición.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - ¿Por qué se produce la pérdida?",
    opciones: [
      {
        textoRespuesta: "Por una pérdida de potencia.",
        isCorrect: false
      },
      {
        textoRespuesta: "Por un excesivo ángulo de ataque.",
        isCorrect: true
      },
      {
        textoRespuesta: "Por exceso de peso.",
        isCorrect: false
      },
      {
        textoRespuesta: "Por ángulo de ataque negativo.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Supongamos dos alas con el mismo perfil, ¿Cuál tiene mayor sustentación?",
    opciones: [
      {
        textoRespuesta: "Las dos iguales.",
        isCorrect: false
      },
      {
        textoRespuesta: "La de menor alargamiento.",
        isCorrect: false
      },
      {
        textoRespuesta: "La de mayor alargamiento.",
        isCorrect: true
      },
      {
        textoRespuesta: "Ninguna es .",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "12 - El efecto de suelo influye de la siguiente forma sobre la distancia de aterrizaje:",
    opciones: [
      {
        textoRespuesta: "Aumenta.",
        isCorrect: true
      },
      {
        textoRespuesta: "No varía.",
        isCorrect: false
      },
      {
        textoRespuesta: "Disminuye.",
        isCorrect: false
      },
      {
        textoRespuesta: "Aumenta sólo con los flaps de aterrizaje completamente extendidos.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - La presión estática actúa:",
    opciones: [
      {
        textoRespuesta: "Solamente en la dirección del flujo.",
        isCorrect: false
      },
      {
        textoRespuesta: "Solamente perpendicular a la dirección del flujo.",
        isCorrect: false
      },
      {
        textoRespuesta: "En todas las direcciones.",
        isCorrect: true
      },
      {
        textoRespuesta: "Solamente en la dirección de la presión total.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14 - Indique la respuesta correcta:",
    opciones: [
      {
        textoRespuesta: "La densidad se ve afectada por la temperatura y por la presión.",
        isCorrect: false
      },
      {
        textoRespuesta: "La presión afecta a la densidad en mayor medida que la temperatura, razón por la cual, al ascender, la densidad disminuye.",
        isCorrect: false
      },
      {
        textoRespuesta: "La temperatura afecta a la densidad en proporción directa, es decir, al aumentar la temperatura aumenta la densidad.",
        isCorrect: false
      },
      {
        textoRespuesta: "Las respuestas A y B son s.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "15 - Una capa límite laminar, frente a una turbulenta:",
    opciones: [
      {
        textoRespuesta: "Aporta menor resistencia pero menor energía.",
        isCorrect: true
      },
      {
        textoRespuesta: "Aporta mayor resistencia pero mayor energía.",
        isCorrect: false
      },
      {
        textoRespuesta: "La capa límite no puede ser laminar.",
        isCorrect: false
      },
      {
        textoRespuesta: "La capa límite no puede ser turbulenta.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "16 - Los flaps:",
    opciones: [
      {
        textoRespuesta: "Son mandos de vuelo primarios.",
        isCorrect: false
      },
      {
        textoRespuesta: "Son mandos de vuelo secundarios.",
        isCorrect: true
      },
      {
        textoRespuesta: "Son mandos de vuelo terciarios.",
        isCorrect: false
      },
      {
        textoRespuesta: "No están incluidos en ningún grupo.",
        isCorrect: false
      }
    ]
  }
];

export default preguntas;