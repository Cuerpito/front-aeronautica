const preguntas = [
  {
    titulo: '1 - La constelación de satélites del GPS está compuesta por:',
    opciones: [
      {
        textoRespuesta: '25 satélites.',
        isCorrect: false
      },
      {
        textoRespuesta: '23 satélites.',
        isCorrect: false
      },
      {
        textoRespuesta: '20 satélites fijos y 3 de reserva.',
        isCorrect: false
      },
      {
        textoRespuesta: '24 satélites.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '2 - Suponiendo un rumbo verdadero de 074º y una TAS de 230 kt con una derrota de 066º y una GS de 242 kt. ¿Cuál es la velocidad y dirección del viento?',
    opciones: [
      {
        textoRespuesta: '180º / 35 kt',
        isCorrect: true
      },
      {
        textoRespuesta: '180º / 40 kt',
        isCorrect: false
      },
      {
        textoRespuesta: '180º / 30 kt',
        isCorrect: false
      },
      {
        textoRespuesta: '185º / 35 kt',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Las líneas de contorno en mapas y cartas aeronáuticas unen puntos:',
    opciones: [
      {
        textoRespuesta: 'Con la misma declinación magnética.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con la misma elevación sobre el nivel del mar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Con la misma longitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De igual latitud.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '4 - Se observa una isla 15º a la izquierda.El rumbo del avión s 120º (M), la declinación magnética es de 17ºW, el rumbo (T) del avión a la isla es:',
    opciones: [
      {
        textoRespuesta: '268º',
        isCorrect: false
      },
      {
        textoRespuesta: '088º',
        isCorrect: true
      },
      {
        textoRespuesta: '122º',
        isCorrect: false
      },
      {
        textoRespuesta: '302º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Una línea recta trazada sobre la carta mide 4,63 cm y representa 150 NM. Hallar la escala de la carta:',
    opciones: [
      {
        textoRespuesta: '1:3.000.000',
        isCorrect: false
      },
      {
        textoRespuesta: '1:6.000.000',
        isCorrect: true
      },
      {
        textoRespuesta: '1:5.000.000',
        isCorrect: false
      },
      {
        textoRespuesta: '1:1.000.000',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - ¿Qué es falso en la carta 1:500.000?',
    opciones: [
      {
        textoRespuesta: 'Es conforme.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los meridianos y paralelos se cortan según ángulos rectos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es válido tanto para vuelo a baja como alta velocidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los meriadianos son líneas convergentes sobre el polo más allá de los límites de la carta.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - El símbolo cartográfico OACI “ O”  indica la existencia de:',
    opciones: [
      {
        textoRespuesta: 'Un aeródromo de emergencia.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una aeródromo terrestre civil.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aeródromo terrestre militar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aeródromo controlado.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '8 - Legalmente debemos dejar una reserva de combustible para realizar esperas sobre el aeródromo de destino y alternativo, ¿De cuanto tiempo es esta reserva?',
    opciones: [
      {
        textoRespuesta: '25 minutos.',
        isCorrect: false
      },
      {
        textoRespuesta: '1 hora.',
        isCorrect: false
      },
      {
        textoRespuesta: '1 hora y 30 minutos.',
        isCorrect: false
      },
      {
        textoRespuesta: '45 minutos.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9 - ¿Cuál de los siguientes no es un error propio del ADF?:',
    opciones: [
      {
        textoRespuesta: 'Error de valle.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Error de costa.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Error de montaña.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Error nocturno.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - Rumbo indicado de brújula 270, desviación 2º W, declinación 30º E, marcación relativa 316. Calcular el QDR:',
    opciones: [
      {
        textoRespuesta: '226',
        isCorrect: false
      },
      {
        textoRespuesta: '44',
        isCorrect: true
      },
      {
        textoRespuesta: '46',
        isCorrect: false
      },
      {
        textoRespuesta: '224',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - Se entiende por la desviación de la brújula el ángulo que forman:',
    opciones: [
      {
        textoRespuesta: 'El norte verdadero y el norte de la brújula.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El norte magnético y el norte de la brújula.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El norte verdadero y el norte magnético.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La componente horizontal de la intensidad y la intensidad total del campo magnético terrestre.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - Suponiendo: velocidad respecto al suelo = 120 kt, distancia de A a B = 84 MN. ¿Cuánto tiempo se tarda en volar de A a B?',
    opciones: [
      {
        textoRespuesta: '00 horas 43 minutos.',
        isCorrect: false
      },
      {
        textoRespuesta: '00 horas 44 minutos.',
        isCorrect: false
      },
      {
        textoRespuesta: '00 horas 42 minutos.',
        isCorrect: true
      },
      {
        textoRespuesta: '00 horas 45 minutos.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
