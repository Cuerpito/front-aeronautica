const preguntas = [
  {
    titulo: '1 - El diámetro terrestre es aproximadamente de:',
    opciones: [
      {
        textoRespuesta: '12.700 km.',
        isCorrect: true
      },
      {
        textoRespuesta: '18.500 km.',
        isCorrect: false
      },
      {
        textoRespuesta: '6.350 km.',
        isCorrect: false
      },
      {
        textoRespuesta: '40.000 km.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '2 - Una aeronave lleva una velocidad respecto al suelo de 105 kts, la distancia entre A y B es de 103 NM. ¿Cuánto tardará en llegar de A a B?',
    opciones: [
      {
        textoRespuesta: '58 minutos.',
        isCorrect: true
      },
      {
        textoRespuesta: '59 minutos.',
        isCorrect: false
      },
      {
        textoRespuesta: '1 hora y un minuto.',
        isCorrect: false
      },
      {
        textoRespuesta: '57 minutos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '3 - Complete la siguiente afirmación respecto a la declinación magnética: los valores en la carta y referencias a la declinación magnética normalmente varían anualmente debido:',
    opciones: [
      {
        textoRespuesta: 'Al desplazamiento de los polos magnéticos que originan un aumento de los valores numéricos en todas partes.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A un fuerte aumento del campo magnético que originan un aumento de los valores numéricos en todas partes.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Al desplazamiento de los polos magnéticos que originan un aumento o disminución de los valores numéricos en todas partes.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'A una fuerte disminución del campo magnético que originan una disminución de los valores numéricos en todas partes.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - RM=060º, declinación 8ºW, ángulo de deriva 4º derecha ¿Cuál es la derrota verdadera?',
    opciones: [
      {
        textoRespuesta: '48',
        isCorrect: false
      },
      {
        textoRespuesta: '72',
        isCorrect: false
      },
      {
        textoRespuesta: '64',
        isCorrect: false
      },
      {
        textoRespuesta: '56',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5 - Las líneas de contorno que aparecen en mapas y cartas aeronáuticas:',
    opciones: [
      {
        textoRespuesta: 'Unen puntos de la misma altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unen puntos de la misma longitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unen puntos con la misma elevación del terreno sobre el nivel del mar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Unen puntos con la misma declinación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6 - Se observa una isla 15º a la izquierda.Nuestro rumbo magnético es de 120º, la declinación es de 17º W. Hallar el rumbo verdadero para ir a la isla:',
    opciones: [
      {
        textoRespuesta: '88',
        isCorrect: true
      },
      {
        textoRespuesta: '105',
        isCorrect: false
      },
      {
        textoRespuesta: '135',
        isCorrect: false
      },
      {
        textoRespuesta: '112',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - Cualquier plano que no pase por el centro de la Tierra forma en la intersección con la superficie de esta:',
    opciones: [
      {
        textoRespuesta: 'Líneas ortodrómicas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Líneas loxodrómicas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Círculos menores.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Líneas de rumbo verdadero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - ¿Cuál es la diferencia de latitud entre el punto 60º norte y el 20º sur?',
    opciones: [
      {
        textoRespuesta: '40º.',
        isCorrect: false
      },
      {
        textoRespuesta: '60º.',
        isCorrect: false
      },
      {
        textoRespuesta: '80º.',
        isCorrect: true
      },
      {
        textoRespuesta: '100º.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - ¿En qué consiste el efecto tormenta del ADF?',
    opciones: [
      {
        textoRespuesta:
          'En que los equipos NDB de tierra se desconectan automáticamente cuando hay tormenta, dejando de oírse el código morse.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando el avión se introduce en una zona de precipitación fuerte de lluvia, el ADF produce un error de +/-10º.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aguja del ADF apuntará hacia el foco productor de rayos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10 - A nivel de vuelo 100, ¿Qué distancia puede alcanzar un equipo de comunicaciones?',
    opciones: [
      {
        textoRespuesta: '150 NM.',
        isCorrect: false
      },
      {
        textoRespuesta: '120 NM.',
        isCorrect: true
      },
      {
        textoRespuesta: '180 NM.',
        isCorrect: false
      },
      {
        textoRespuesta: '50 NM.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11 - Un avión vuela siguiendo una derrota verdadera de 048º a una TAS constante de 210 Kt. La velocidad del viento es 350º/30 Kt. La GS y el ángulo  de deriva son:',
    opciones: [
      {
        textoRespuesta: '200 Kt, 3,5º a la derecha.',
        isCorrect: false
      },
      {
        textoRespuesta: '192 Kt, 7º a la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta: '192 Kt, 7º a la derecha.',
        isCorrect: true
      },
      {
        textoRespuesta: '225 Kt, 7º a la izquierda.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - Suponiendo rumbo verdadero 074, TAS 230, derrota 066, velocidad respecto al suelo 242Kts, calcular la dirección y velocidad del viento:',
    opciones: [
      {
        textoRespuesta: '180/35.',
        isCorrect: true
      },
      {
        textoRespuesta: '180/40.',
        isCorrect: false
      },
      {
        textoRespuesta: '180/30.',
        isCorrect: false
      },
      {
        textoRespuesta: '185/35',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
