const preguntas = [
  {
    titulo:
      '1 - Para mantener un vuelo recto y nivelado a velocidad verdadera constante, mientras se retraen los flaps, el ángulo de ataque deberá:',
    opciones: [
      {
        textoRespuesta: 'Aumentar o disminuir en función del tipo de flaps',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Permanecer constante',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '2 - ¿Cuál de la siguientes afirmaciones respecto a la relación sustentación/resistencia en vuelo recto y nivelado es correcta:',
    opciones: [
      {
        textoRespuesta: 'La relación sustentación/resistencia siempre aumenta al disminuir la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia total alcanza su valor mínimo para el mayor valor de la relación sustentación/resistencia',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando la sustentación es cero se alcanza el mayor valor de la relación sustentación/resistencia',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El mayor valor de la relación sustentación/resistencia se alcanza cuando la sustentación es igual al peso del avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Señale lo correcto en cuanto a la correspondencia de ºC y ºK',
    opciones: [
      {
        textoRespuesta: '°K = 273 + °C',
        isCorrect: true
      },
      {
        textoRespuesta: '°C = 273 + °K',
        isCorrect: false
      },
      {
        textoRespuesta: '°K = 288 + °C',
        isCorrect: false
      },
      {
        textoRespuesta: '°C = 288 + °K',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Podemos afirmar que el efecto Venturi:',
    opciones: [
      {
        textoRespuesta: 'Define un aumento de la velocidad de un fluido cuando atraviesa un estrechamiento.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Define una disminución de la velocidad de un fluido cuando atraviesa un estrechamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Define un aumento de la presión de un fluido cuando atraviesa un estrechamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Define una disminución de la presión de un fluido cuando se expande.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Supongamos un avión en ascenso constante y viraje. Se verificará que:',
    opciones: [
      {
        textoRespuesta: 'L > W',
        isCorrect: true
      },
      {
        textoRespuesta: 'L < W',
        isCorrect: false
      },
      {
        textoRespuesta: 'L = W',
        isCorrect: false
      },
      {
        textoRespuesta: 'L <> W',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6 - ¿Existe una correspondencia constante entre la velocidad mínima y el ángulo de ataque máximo a los que puede volar un avión?',
    opciones: [
      {
        textoRespuesta: 'Si.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si, porque el máximo ángulo de ataque se produce siempre a la misma velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No, porque la velocidad mínima a la que podemos volar no es función del ángulo de ataque.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7 - El uso de flap en el despegue:',
    opciones: [
      {
        textoRespuesta: 'Hace que el despegue se produzca más tarde, pero permite subir con más ángulo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hace que el despegue se produzca antes y permite subir con más ángulo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hace que el despegue se produzca antes pero penaliza el ángulo y variómetro de subida tras el despegue.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se usará en pistas largas y limpias.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Para un ala finita, la envergadura:',
    opciones: [
      {
        textoRespuesta: 'Es inversamente proporcional al alargamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es directamente proporcional al alargamiento.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es independiente del alargamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es siempre la unidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - La formación de la capa límite alrededor del perfil es debida a la:',
    opciones: [
      {
        textoRespuesta: 'Presión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Densidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viscosidad.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10 - La relación entre la sustentación y el peso bruto del avión, W, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Límite elástico.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Factor de carga.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Índice de carga.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Factor de forma.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11 - Definición del alargamiento (A) del ala, siendo S= Superficie alar; Cr= Cuerda del perfil en el encastre; Ct = cuerda del perfil en la punta; b= envergadura.',
    opciones: [
      {
        textoRespuesta: 'A= S/b',
        isCorrect: false
      },
      {
        textoRespuesta: 'A= Ct/b',
        isCorrect: false
      },
      {
        textoRespuesta: 'A= b2/S',
        isCorrect: true
      },
      {
        textoRespuesta: 'A= Ct/Cr',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Un flap simple aumenta el CLmax al',
    opciones: [
      {
        textoRespuesta: 'Aumentar la comba del perfil aerodinámico.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Desplazar el centro de sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar el ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Controlar la capa límite.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '13 - El aumento de la presión del aire tendrá el siguiente efecto sobre la resistencia aerodinámica de un avión (con el ángulo de ataque, OAT y TAS constantes):',
    opciones: [
      {
        textoRespuesta: 'La resistencia aerodinámica disminuye.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se produce efecto alguno.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia aerodinámica aumenta.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La resistencia aerodinámica solo se ve afectada por la velocidad respecto al suelo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - La sustentación se produce cuando:',
    opciones: [
      {
        textoRespuesta: 'Cierta masa de aire se retarda.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se introduce una superficie aerodinámica en una corriente de aire con cierta velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'La forma de la superficie aerodinámica está ligeramente curvada.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cierta masa de aire se acelera en dirección descendente.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '15 - A la aplicación del teorema Bernoulli, por la cual un fluido, al atravesar un estrechamiento de corriente, aumenta su velocidad y disminuye su presión, se llama:',
    opciones: [
      {
        textoRespuesta: 'Teorema de Reynolds.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Teorema de Venturi.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Teorema de Jacobs.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '16 - En la maniobra de despegue, el uso de flaps:',
    opciones: [
      {
        textoRespuesta: 'Facilita el ascenso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la velocidad de rotación, pero penaliza el ascenso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye la velocidad de rotación, pero penaliza el ascenso.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
