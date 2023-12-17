const preguntas = [
  {
    titulo: '1 - ¿Cómo afectará el rendimiento de una aeronave un descenso en la altitud de presión de un aeródromo?',
    opciones: [
      {
        textoRespuesta: 'Aumenta el ángulo de ascenso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la velocidad de ascenso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Acortará la duración de ascenso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta el ángulo de trayectoria de ascenso.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '2 - ¿Cuál será la influencia en las performances de un avión si la altitud de presión de un aeródromo aumenta?:',
    opciones: [
      {
        textoRespuesta: 'Aumenta la distancia de aceleración- parada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la distancia de despegue',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuye la distancia de despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la distancia de despegue disponible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - A mayor peso para la misma altitud, decrece el gradiente y el régimen de ascenso mientras que:',
    opciones: [
      {
        textoRespuesta: 'VY y VX disminuyen',
        isCorrect: false
      },
      {
        textoRespuesta: 'VX aumenta y VY disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'VY y VX aumentan',
        isCorrect: true
      },
      {
        textoRespuesta: 'VX y VY no se ven afectadas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Comparando una posición adelantada del CG respecto a una posición retrasada, la posición adelantada del CG causará:',
    opciones: [
      {
        textoRespuesta: 'Disminución en el alcance',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminución en la velocidad de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminución en la velocidad de pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tendencia a guiñar a la derecha en el despegue',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - De las siguientes, ¿cuál afirmación no es verdadera?:',
    opciones: [
      {
        textoRespuesta: 'Si aumenta la temperatura disminuye la densidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor temperatura mayor velocidad TAS asociada a una IAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debemos ajustar nuestras velocidades de despegue y aterrizaje en función de la DA',
        isCorrect: true
      },
      {
        textoRespuesta: 'Si T mayor que la standard DA mayor que PA',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6 - El centro de gravedad está situado al 25 % de la MAC. Significa que el centro de gravedad de la aeronave está situado al 25 % de la longitud de:',
    opciones: [
      {
        textoRespuesta: 'El avión en relación al límite delantero',
        isCorrect: false
      },
      {
        textoRespuesta: 'LA MAC en relación al borde de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'La MAC en relación al borde de fuga',
        isCorrect: false
      },
      {
        textoRespuesta: 'La MAC en relación con el datum',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7 - El piloto de un monomotor ha establecido las performances de ascenso. La carga de un pasajero adicional afectara a las performances de ascenso:',
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
    titulo: '8 - En la carrera de despegue que resulta más decisivo:',
    opciones: [
      {
        textoRespuesta: 'Altitud de densidad, temperatura, humedad y presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura, pendiente de pista y presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento, pendiente de pista y superficie de la misma',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento, presión y temperatura',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9 - En un viraje la sustentación equivale a:',
    opciones: [
      {
        textoRespuesta: 'Peso X coseno ángulo inclinación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fuerza centrífuga / coseno del ángulo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Peso / coseno del ángulo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Inclinación angular X grados de inclinación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - En vuelo de crucero, un centro de gravedad atrasado:',
    opciones: [
      {
        textoRespuesta: 'Disminuirá la estabilidad estática longitudinal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentara la estabilidad estática longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'No tiene influencia en la estabilidad estática longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'No cambia la curva estática de estabilidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - La posición del centro de gravedad de un avión normalmente se calcula del eje:',
    opciones: [
      {
        textoRespuesta: 'Eje vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'Eje lateral',
        isCorrect: false
      },
      {
        textoRespuesta: 'Eje longitudinal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Eje horizontal',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - ¿Cuál de estos parámetros disminuye la carrera de despegue?\n-  1 disminuyendo de la masa al despegue\n-  2 aumentando de la masa al despegue\n-  3 aumentando de la densidad\n-  4 disminuyendo de la densidad\n-  5 aumentando el calaje de flap\n-  6 disminuyendo el calaje de flap\n-  7 aumentando la presión de altitud\n-  8 disminuyendo la presión de altitud',
    opciones: [
      {
        textoRespuesta: '1, 3, 5 Y 8',
        isCorrect: true
      },
      {
        textoRespuesta: '1, 4, 6 y 8',
        isCorrect: false
      },
      {
        textoRespuesta: '2, 4, 5 y 7',
        isCorrect: false
      },
      {
        textoRespuesta: '2, 3, 6 y 7',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - Se procede a cargar un avión con su centro de gravedad desplazándose hacia su límite trasero, lo que ocasionará:',
    opciones: [
      {
        textoRespuesta: 'un aumento en la estabilidad longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'un aumento en el riesgo de entrada en pérdida debido a la disminución del momento del plano de cola',
        isCorrect: true
      },
      {
        textoRespuesta: 'una reducción en el consumo de combustible debida a una menor resistencia aerodinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'una reducción de la potencia requerida para una velocidad dada',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '14 - Si la rueda de morro se mueve hacia atrás durante la retracción del tren, ¿cómo afectará este movimiento a la localización del centro de gravedad del avión?:',
    opciones: [
      {
        textoRespuesta: 'Esto provocará un movimiento del centro de gravedad hacia delante',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cg cambiará pero no sabemos la dirección con la información que nos han dado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desplazará el cg hacia atrás',
        isCorrect: true
      },
      {
        textoRespuesta: 'No afectará al cg',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15 - Un avión se le carga con el centro de gravedad en límite trasero, esto resultará:',
    opciones: [
      {
        textoRespuesta: 'Un consumo reducido de combustible como resultado de una disminución de la resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un incremento de la estabilidad longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una reducción en la potencia requerida para una velocidad dada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un riesgo incrementado para la pérdida ya que decrece el momento del estabilizador de cola',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '16 - La máxima velocidad relativa indicada de un avión con motor alternativo en vuelo nivelado se alcanza',
    opciones: [
      {
        textoRespuesta: 'A la menor cota posible',
        isCorrect: true
      },
      {
        textoRespuesta: 'En el techo práctico',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el techo operativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la altitud de crucero óptima',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
