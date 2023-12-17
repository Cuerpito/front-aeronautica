const preguntas = [
  {
    titulo: '1 - ¿A qué nivel se obtiene la mayor IAS?:',
    opciones: [
      {
        textoRespuesta: 'Niveles bajos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Niveles altos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Independientemente del nivel al que se vuele',
        isCorrect: false
      },
      {
        textoRespuesta: 'A niveles medios',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - ¿Cuál es el efecto del viento de cola para el tiempo que tardaremos en alcanzar una altura?:',
    opciones: [
      {
        textoRespuesta: 'El tiempo no cambiará',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'El efecto sobre el tiempo de ascenso depende del tipo de avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - ¿Qué se entiende como estabilidad longitudinal?',
    opciones: [
      {
        textoRespuesta:
          'Capacidad del avión para recobrar una posición de equilibrio cuando sufra alguna perturbación según el eje vertical.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Capacidad del avión para recobrar una posición de equilibrio cuando sufra alguna perturbación según el eje lateral.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Capacidad del avión para, una vez hayamos mandado en alabeo, continuar el mismo aún con el mando centrado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4 - Comparando un CG adelantado respecto uno retrasado, la posición adelantada producirá:',
    opciones: [
      {
        textoRespuesta: 'Disminución en el alcance.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminución en la velocidad de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminución en la velocidad de perdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tendencia a guiñar a la derecha en el despegue',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Cuando consideramos los efectos de un aumento de peso:',
    opciones: [
      {
        textoRespuesta: 'La autonomía del vuelo aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad de pérdida será mayor',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad de pérdida será menor',
        isCorrect: false
      },
      {
        textoRespuesta: 'El régimen de ascenso para una potencia dada será mayor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - El centro de gravedad de un cuerpo es el punto:',
    opciones: [
      {
        textoRespuesta: 'En donde la suma de los momentos de las fuerzas externas que actúan sobre el cuerpo es igual a cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el que la suma de las fuerzas externas es igual a cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el que se supone que actúa la suma de las fuerzas de todas las masas del cuerpo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que siempre se utiliza como dato para el cálculo de momentos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - En el momento que el avión despega:',
    opciones: [
      {
        textoRespuesta: 'Sustentación menor que peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación mayor que peso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dependerá de la velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación igual a peso',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '8 - La posición del centro de gravedad de un avión está 7 metros de la línea que pasa por el datum, y su peso es de 49.000 N. el momento correspondiente al datum será:',
    opciones: [
      {
        textoRespuesta: '7.000 Nm',
        isCorrect: false
      },
      {
        textoRespuesta: '1,43 Nm',
        isCorrect: false
      },
      {
        textoRespuesta: '34.300 Nm',
        isCorrect: false
      },
      {
        textoRespuesta: '343.000 Nm',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9 - Los principales problemas que pueden afectar al despegue de una aeronave corresponden a la:',
    opciones: [
      {
        textoRespuesta: 'Longitud y anchura de la pista y potencia disponible.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud de presión, temperatura y factor de carga.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud de densidad, componente del viento y temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud de presión, temperatura y humedad.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10 - Se dice que un avión es “neutralmente estable”. Por ello, es probable:',
    opciones: [
      {
        textoRespuesta: 'haga que el centro de gravedad se desplace hacia delante.',
        isCorrect: false
      },
      {
        textoRespuesta: 'que la causa sea un centro de gravedad en desplazamiento a su límite delantero.',
        isCorrect: false
      },
      {
        textoRespuesta: 'que la causa sea un centro de gravedad en desplazamiento a su límite trasero.',
        isCorrect: true
      },
      {
        textoRespuesta: 'no tenga nada que ver con la posición del centro de gravedad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11 - Si el tren de morro se desplaza hacia atrás durante la retracción, ¿cómo afectará este movimiento a la posición del centro de gravedad (cg) del avión?',
    opciones: [
      {
        textoRespuesta: 'No afectará a la posición del cg',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hará que le cg se desplace hacia atrás',
        isCorrect: true
      },
      {
        textoRespuesta: 'Variará la posición del cg pero la dirección no se puede determinar de los datos de partida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hará que le cg se desplace hacia delante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Un avión se dice que es neutralmente estable, cuando:',
    opciones: [
      {
        textoRespuesta: 'no tiene relación con la posición del Centro de Gravedad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El centro de gravedad se desplaza hacia delante.',
        isCorrect: false
      },
      {
        textoRespuesta: 'es causado por un centro de gravedad que se dirige hacia el límite trasero.',
        isCorrect: true
      },
      {
        textoRespuesta: 'es causado por un centro de gravedad que se mueve hacia el límite delantero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - Cuando el centro de gravedad se encuentra en su posición delantera límite, el avión se tornara',
    opciones: [
      {
        textoRespuesta: 'Extremadamente estable y requiere escaso mando sobre el estabilizador para modificar el cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Extremadamente inestable y requiere escaso mando sobre el estabilizador para modificar el cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Extremadamente estable y requiere exceso de mando sobre el estabilizador para modificar el cabeceo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Extremadamente inestable y requiere exceso de mando sobre el estabilizador para modificar el cabeceo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - La altitud de densidad es',
    opciones: [
      {
        textoRespuesta: 'Es la referencia de altitud respecto al plano diferencial normal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altura sobre la superficie',
        isCorrect: false
      },
      {
        textoRespuesta: 'Lectura de altitud obtenida en el altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud de presión corregida por temperatura no tipo',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '15 - La posición del centro de gravedad de un avión está a 7 metros de la línea que pasa por el datum, y su peso es de 49000 N El momento correspondiente al datum será',
    opciones: [
      {
        textoRespuesta: '34300 Nm',
        isCorrect: false
      },
      {
        textoRespuesta: '343000 Nm',
        isCorrect: true
      },
      {
        textoRespuesta: '143 Nm',
        isCorrect: false
      },
      {
        textoRespuesta: '7000 Nm',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - Que nombre recibe el punto que a través del cual actúa el peso del avion',
    opciones: [
      {
        textoRespuesta: 'Centro de gravedad aerodinámico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro de presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro de gravedad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Centro estructural',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
