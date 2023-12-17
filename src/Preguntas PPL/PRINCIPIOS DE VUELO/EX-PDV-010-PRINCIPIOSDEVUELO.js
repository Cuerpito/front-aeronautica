const preguntas = [
  {
    titulo: '1 - Cuando se despliegan los flaps con un ángulo de ataque constante, el coeficiente de sustentación:',
    opciones: [
      {
        textoRespuesta: 'Disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permanece invariable',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Varía como cuadrado de la IAS',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - La cuantía de la disminución de la temperatura, hasta los 36,000 ft. es de:',
    opciones: [
      {
        textoRespuesta: '2ºC cada 1000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: '6,5ºC cada 1000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: '6,5ºC cada 1000 m.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las respuestas a y c son s.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '3 - Siendo el Teorema de Bernoulli (para fluidos elementales) "p+1/2pv2 = constante", podremos afirmar, para un fluido en movimiento que:',
    opciones: [
      {
        textoRespuesta: 'En presencia de una disminución de velocidad, la presión aumenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En presencia de un aumento de velocidad, la presión disminuye.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las respuestas anteriores son s.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es s.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4 - Podemos decir, en cuanto a la capa límite, que:',
    opciones: [
      {
        textoRespuesta: 'Su tamaño depende del diseño del perfil aerodinámico.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se define como la masa de aire comprendida entre las moléculas de aire con velocidad 0 y aquellas cuya velocidad es el 99% de la de la corriente de aire libre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No interviene en absoluto en la generación de la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las respuestas a y b son s.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5 - ¿Cómo podemos aumentar la sustentación en un avión?',
    opciones: [
      {
        textoRespuesta: 'Aumentando el ángulo de ataque, aumentando la velocidad o aumentando la superficie alar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentando exclusivamente el ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentando exclusivamente la superficie alar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentando exclusivamente la velocidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - ¿El flap ranurado genera más sustentación adicional que el zap?',
    opciones: [
      {
        textoRespuesta: 'No, porque al ser el zap de intrados genera más resistencia.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Si, porque el ranurado energiza la capa límite, comunicando el intrados y el extradós, generando menos resistencia, además de aumentar la superficie alar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'No porque el zap genera menos resistencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7 - La sustentación y la densidad del aire son:',
    opciones: [
      {
        textoRespuesta: 'Directamente proporcional.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Inversamente proporcional.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Iguales.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No están relacionadas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - El efecto Venturi establece una relación entre la:',
    opciones: [
      {
        textoRespuesta: 'Velocidad/densidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad/temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad/presión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Presión/densidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - ¿Cuándo coincidirán la línea de curvatura media y la cuerda?',
    opciones: [
      {
        textoRespuesta: 'En perfil de doble curvatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nunca.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En perfil de curvatura positiva.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En perfil simétrico.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10 - El coeficiente del momento de cabeceo depende de:',
    opciones: [
      {
        textoRespuesta: 'Coeficiente de sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Coeficiente del centro de presión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del signo de ambos coeficientes.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las respuestas son s.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11 - ¿Qué es lo que sucede ante el efecto suelo?',
    opciones: [
      {
        textoRespuesta: 'El ángulo de ataque inducido y la resistencia aerodinámica inducida disminuyen.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un aumento en la intensidad de los torbellinos de extremo de ala.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La deflexión hacia abajo ocasionada por las alas sobre las superficies de cola aumenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aumento significativo del empuje requerido.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - Si la ecuación de continuidad es aplicable, ¿Cómo se verá afectada la densidad del aire(rho) si el área de la sección transversal de un tubo varía? (flujo de baja velocidad, subsónico e incompresible)',
    opciones: [
      {
        textoRespuesta: 'rho1 < rho2',
        isCorrect: false
      },
      {
        textoRespuesta: 'rho1=rho2',
        isCorrect: true
      },
      {
        textoRespuesta: 'La densidad depende de la variación del área del tubo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'rho1 > rho2',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '13 - ¿Cuál de las siguientes afirmaciones – respecto a la relación sustentación/resistencia en vuelo recto y nivelado- es correcta?',
    opciones: [
      {
        textoRespuesta: 'Cuando la sustentación es cero alcanza el mayor valor de la relación sustentación/resistencia,',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación sustentación/resistencia siempre aumenta al disminuir la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia total alcanza su valor mínimo para el mayor valor de la relación sustentación/resistencia.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El mayor valor de la relación sustentación/resistencia se alcanza cuando la sustentación es igual al peso del avión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - La temperatura disminuye con la altura hasta la tropopausa, unos 11 Km de distancia. En ese punto:',
    opciones: [
      {
        textoRespuesta: 'Comienza a aumentar a razón de 3ºC cada 1000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continua disminuyendo, pero a razón de 15ºC cada 1000 m.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se mantiene constante en un valor de –56,5ºC.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta a razón de 1ºC por cada kilómetro.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15 - El torbellino de punta de plano:',
    opciones: [
      {
        textoRespuesta: 'B y C son s',
        isCorrect: true
      },
      {
        textoRespuesta: 'Implica una tremenda resistencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es evitable, en cierta medida, mediante dispositivos de punta de plano.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No hay resistencia en la punta de plano',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - ¿Por qué se sustituye la X en la siguiente gráfica ?',
    opciones: [
      {
        textoRespuesta: 'D parásita',
        isCorrect: false
      },
      {
        textoRespuesta: 'D inducida',
        isCorrect: true
      },
      {
        textoRespuesta: 'D total',
        isCorrect: false
      },
      {
        textoRespuesta: 'D interferencia',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
