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
      '6 - El piloto de un monomotor ha establecido las performances de ascenso. La carga de un pasajero adicional afectara a las performances de ascenso:',
    opciones: [
      {
        textoRespuesta: 'Mejorándolas',
        isCorrect: false
      },
      {
        textoRespuesta: 'No las varía',
        isCorrect: false
      },
      {
        textoRespuesta: 'No las varía si se adopta un despegue en campo corto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Degradándolas',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '7 - En relación con la operación de una aeronave excediendo los limites de peso máximo autorizado, indique cuál de las siguientes frases NO es cierta:',
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
      '8 - Hallar la posición del centro de gravedad en % de la MAC si la distancia desde el Datum a la LEMAC es de 13 metros, la distancia al TEMAC es de 19 metros y la distancia desde el datum al centro de gravedad es de 15 metros.',
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
    titulo:
      '9 - La masa de un avión es de 1950 Kg. Si se añaden 450 Kg en la bodega a 1.75 metros del centro de gravedad (CG), el centro de gravedad cargado (CG) se desplazará:',
    opciones: [
      {
        textoRespuesta: '40 cm',
        isCorrect: false
      },
      {
        textoRespuesta: '30 cm',
        isCorrect: true
      },
      {
        textoRespuesta: '33 cm',
        isCorrect: false
      },
      {
        textoRespuesta: '34 cm',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - La velocidad de entrada en perdida de un avión será máxima cuando se le cargue con',
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
    titulo: '11 - Para que el avión sea estable longitudinalmente, el centro de gravedad debe estar:',
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
    titulo: '12 - Señale la respuesta correcta con respecto a la velocidad de mejor ángulo.',
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
    titulo: '13 - Si un día tenemos en el aeropuerto de salida una PA baja, ¿cuál será la correcta?:',
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
    titulo: '14 - Un viento de frente',
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
    titulo: '15 - ¿Cuál es el aspecto más importante de  la zona trasera de las curvas de potencia?',
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
    titulo: '16 - ¿Cuál de los siguientes efectos no lo produce una sobrecarga del avión?',
    opciones: [
      {
        textoRespuesta: 'Reducción de la capacidad de maniobra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminución de la velocidad de pérdida.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Reducción del ángulo de subida del avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Posibles fallos estructurales del avión en caso de volar en zona turbulenta.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
