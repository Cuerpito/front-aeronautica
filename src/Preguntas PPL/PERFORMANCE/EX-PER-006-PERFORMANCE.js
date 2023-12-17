const preguntas = [
  {
    titulo: '1 - ¿Cuál de las siguientes combinaciones provoca efectos adversos sobre el despegue y las performances de ascenso?:',
    opciones: [
      {
        textoRespuesta: 'Alta temperatura y humedad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Alta temperatura y poca humedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Baja temperatura alta humedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Baja temperatura y poca humedad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - ¿Existe el peso máximo estructural de aterrizaje?',
    opciones: [
      {
        textoRespuesta: 'No.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si, pero siempre coincide con el peso máximo estructural de despegue.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sólo en algunos prototipos de avión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Al considerar los efectos del aumento en el peso de un avión, ¿cuál de los siguientes enunciados es cierto?:',
    opciones: [
      {
        textoRespuesta: 'Las velocidades de entrada en pérdida serán mayores',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las velocidades de entrada en pérdida serán menores',
        isCorrect: false
      },
      {
        textoRespuesta: 'El gradiente de ascenso para un ajuste de potencia dado será mayor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentará la autonomía de vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Definimos la velocidad de mejor ángulo de ascenso como:',
    opciones: [
      {
        textoRespuesta: 'Es la velocidad a la que tenemos la mejor relación distancia recorrida sobre el suelo y altura ganada.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es aquella velocidad a la que ganamos la mayor altura sobre el terreno por distancia recorrida y es mayor que la velocidad de mejor régimen',
        isCorrect: false
      },
      {
        textoRespuesta: 'Igual que la anterior pero es menor que la de mejor régimen',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas son falsas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - El desplazamiento de la masa causado por la extensión del tren:',
    opciones: [
      {
        textoRespuesta: 'No crea momento longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Crea un momento de cabeceo longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Crea un momento longitudinal en la dirección de cabeceo o encabritado determinado por el tipo de tren',
        isCorrect: true
      },
      {
        textoRespuesta: 'Crea un momento longitudinal de encabritado',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6 - En relación con la operación de una aeronave excediendo los limites de peso máximo autorizado, indique cuál de las siguientes frases NO es cierta:',
    opciones: [
      {
        textoRespuesta: 'Se obtiene un menor ángulo de ascenso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad de entrada en pérdida es menor.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se tiene menor defensa ante el engelamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se requiere mayor velocidad de aterrizaje.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7 - Hallar la posición del centro de gravedad en % de la MAC si la distancia desde el Datum a la LEMAC es de 13 metros, la distancia al TEMAC es de 19 metros y la distancia desde el datum al centro de gravedad es de 15 metros.',
    opciones: [
      {
        textoRespuesta: '33%',
        isCorrect: true
      },
      {
        textoRespuesta: '43%',
        isCorrect: false
      },
      {
        textoRespuesta: '50%',
        isCorrect: false
      },
      {
        textoRespuesta: '25%',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - La velocidad de entrada en perdida de un avión será máxima cuando se le cargue con',
    opciones: [
      {
        textoRespuesta: 'Un peso total elevado y con centro de gravedad adelantado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un peso total bajo y con centro de gravedad retrasado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un peso total elevado y con centro de gravedad retrasado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un peso total bajo y con centro de gravedad adelantado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - Para que el avión sea estable longitudinalmente, el centro de gravedad debe estar:',
    opciones: [
      {
        textoRespuesta: 'Por delante del centro aerodinámico.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En el mismo punto que el centro aerodinámico.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por detrás del centro aerodinámico.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cerca del panel cortafuegos del avión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - Señale la respuesta correcta con respecto a la velocidad de mejor ángulo.',
    opciones: [
      {
        textoRespuesta: 'Es con la que alcanzamos la mayor altura en el menor tiempo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es con la que recorremos menos distancia oblicua y ganamos mayor altura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es con la que ganamos más altura recorriendo menor distancia horizontal.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Esta velocidad de ascenso es la que se utiliza normalmente en ascenso en crucero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - Si un día tenemos en el aeropuerto de salida una PA baja, ¿cuál será la correcta?:',
    opciones: [
      {
        textoRespuesta: 'Afectara a la temperatura exterior',
        isCorrect: false
      },
      {
        textoRespuesta: 'La carrera será más larga',
        isCorrect: true
      },
      {
        textoRespuesta: 'La carrera será más corta',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de ataque de subida será mayor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Un viento de frente',
    opciones: [
      {
        textoRespuesta: 'Aumenta el ángulo de ascenso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta la velocidad de ascenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alarga la duración del ascenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta el régimen de ascenso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - ¿Cuál es el aspecto más importante de  la zona trasera de las curvas de potencia?',
    opciones: [
      {
        textoRespuesta: 'Debe actuarse sobre el timón de profundidad para picar el avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión no entra en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidades inestables',
        isCorrect: true
      },
      {
        textoRespuesta: 'Altitud no puede mantenerse',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - En ascenso no acelerado',
    opciones: [
      {
        textoRespuesta:
          'El empuje es igual a la resistencia aerodinámica más la componente ascendente del peso bruto en la dirección de la trayectoria de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El empuje es igual a la resistencia aerodinámica más la componente descendente del peso bruto en la dirección de la trayectoria del vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sustentación es igual al peso mas la componente vertical de la resistencia aerodinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación es igual al peso más la componente horizontal de la resistencia aerodinámica',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '15 - Una pista está contaminada por una capa de 0.5cm de nieve mojada. Sin embargo el despegue esta autorizado por el manual de vuelo de la aeronave. La distancia de despegue en relación a una pista seca se verá:',
    opciones: [
      {
        textoRespuesta: 'Incrementada',
        isCorrect: true
      },
      {
        textoRespuesta: 'Invariable',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Significativamente disminuida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - ¿Cuál de los siguientes factores nos proporciona una distancia mayor en un planeo?:',
    opciones: [
      {
        textoRespuesta: 'Incremento de la masa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminución de la masa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento en cara',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento en cola',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
