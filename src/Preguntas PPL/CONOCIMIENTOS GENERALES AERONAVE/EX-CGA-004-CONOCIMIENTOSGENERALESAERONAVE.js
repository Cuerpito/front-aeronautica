const preguntas = [
  {
    titulo: '1 - Las condiciones que pueden causar detonaciones son',
    opciones: [
      {
        textoRespuesta: 'Baja presión de admisión y alto número de revoluciones por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alta presión de admisión y alto número de revoluciones por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alta presión de admisión y bajo número de revoluciones por minuto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Baja presión de admisión y alto flujo de combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - El sector amarillo del indicador de temperatura se corresponde con',
    opciones: [
      {
        textoRespuesta: 'Un margen de funcionamiento frecuente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un margen de funcionamiento normal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un margen de funcionamiento prohibido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un margen de funcionamiento excepcional',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - El octanaje del combustible y la compresión de un motor alternativo mantienen una de las siguientes relaciones',
    opciones: [
      {
        textoRespuesta: 'A mayor octanaje, menor compresión potencial',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación de compresión no depende del porcentaje de octanaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'A menor octanaje, mayor compresión potencial',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor porcentaje de octanaje, mayor porcentaje de compresión posible',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '4 - Al cambiar de potencia en motores equipados con hélices de velocidad constante, la sobrecarga del motor se evita mediante',
    opciones: [
      {
        textoRespuesta: 'Aumentando de R.P.M antes de aumentar la presión de admisión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Reduciendo las R.P.M antes de reducir la presión de admisión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ajustando el flujo de combustible antes de ajustar la presión de admisión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentando la presión de admisión antes de aumentar las R.P.M.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '5 - Al aumentar la TAS, el ángulo de paso de una hélice de velocidad constante (no se mueven las palancas de RPM ni de MAP)',
    opciones: [
      {
        textoRespuesta: 'Permanece constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se reduce',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al principio se reduce, pero poco después aumenta hasta retornar a su valor original',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - Las indicaciones de un giroscopio direccional, o brújula giroscópica, están sujetas a errores que no son debidos a',
    opciones: [
      {
        textoRespuesta: 'La rotación de la Tierra',
        isCorrect: true
      },
      {
        textoRespuesta: 'El movimiento del aeroplano en tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los ángulos de inclinación lateral y transversal del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cambio del Norte',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - ¿Qué le ocurre al ángulo de ataque en un monomotor con hélice de paso fijo y rpm constantes al incrementar la TAS?',
    opciones: [
      {
        textoRespuesta: 'Disminuye',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es independiente de la TAS',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Que condición es la que más afecta al rendimiento del motor alternativo?',
    opciones: [
      {
        textoRespuesta: 'Densidad del aire',
        isCorrect: true
      },
      {
        textoRespuesta: 'Humedad del aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura ambiente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura del motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - Al aumentar la altitud sin ajustar la relación de mezcla, las prestaciones del motor de émbolo se ven afectadas por',
    opciones: [
      {
        textoRespuesta: 'Un aumento en la densidad del aire para una menor cantidad de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'La disminución de la densidad de aire para una cantidad de combustible constante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una disminución de la densidad del aire para una menor cantidad de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una densidad de aire constante para una mayor cantidad de combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '10 - La potencia desarrollada por un motor de pistón disminuye durante el ascenso con ajuste del mando de gases constante, debido a la disminución de',
    opciones: [
      {
        textoRespuesta: 'La temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'La densidad del aire',
        isCorrect: true
      },
      {
        textoRespuesta: 'La temperatura del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'La humedad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - La mezcla de un motor alternativo se efectúa en el cilindro y se mide',
    opciones: [
      {
        textoRespuesta: 'la masa del aire y el volumen del combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'la masa del aire y la masa del combustible',
        isCorrect: true
      },
      {
        textoRespuesta: 'el volumen de aire y el volumen de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'el volumen de aire y la masa del combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Para ajustar la relación de mezcla en un motor alternativo, al aumentar la altitud, habrá que',
    opciones: [
      {
        textoRespuesta: 'Reducir el flujo de combustible para compensar la disminución de la densidad del aire',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentar el flujo de aire para compensar la disminución de la densidad del aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducir el flujo de aire para mantener la mezcla estequiométrica constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar el flujo de combustible para mantener la mezcla estequiométrica constante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - Los propósitos del nitrógeno y del aceite en un amortiguador oleo-neumatico son',
    opciones: [
      {
        textoRespuesta: 'El aceite proporciona la función de resorte y el nitrógeno proporciona la función de amortiguado',
        isCorrect: false
      },
      {
        textoRespuesta: 'El aceite proporciona la función de sellado y lubricado El nitrógeno proporciona la función de amortiguado',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El aceite proporciona la función de amortiguado y el nitrógeno proporciona la función de disipación del calor',
        isCorrect: false
      },
      {
        textoRespuesta: 'El aceite proporciona la función de amortiguado y el nitrógeno proporcional la función de resorte',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '14 - ¿Qué sistema de encendido suelen utilizar los motores alternativos de aviación?',
    opciones: [
      {
        textoRespuesta: 'Por magnetos independientes del sistema eléctrico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por baterías',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por encendido electrónico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '15 - Cuál de las siguientes relaciones guarda el índice de octano y la compresión máxima de un motor de pistón',
    opciones: [
      {
        textoRespuesta: 'A menor índice de octano, mayor es la relación de compresión máxima',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor índice de octano, menor es la relación de compresión máxima',
        isCorrect: false
      },
      {
        textoRespuesta: 'El índice de compresión es independiente del índice de octano',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor índice de octano, mayor es la relación de compresión máxima',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '16 - Durante un vuelo con una velocidad normal de crucero, si uno de los magnetos falla por completo, cual será la primera consecuencia',
    opciones: [
      {
        textoRespuesta: 'Carga adicional del otro magneto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vibración excesiva',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pérdida de 100 RPM aproximadamente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sobrecalentamiento del motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17 - En los carburadores modernos las variaciones en la relación de mezcla se consigue actuando sobre',
    opciones: [
      {
        textoRespuesta: 'Flujo de aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Flujo de combustible',
        isCorrect: true
      },
      {
        textoRespuesta: 'Flujo de aire y combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Flujo de aire, combustible y la temperatura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18 - En un motor de 4 tiempos ¿Cuál es la única fase en la que se produce trabajo?',
    opciones: [
      {
        textoRespuesta: 'Fase de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'fase de compresión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fase de expansión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Fase de escape',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19 - La presión recogida delante el tubo pitot es',
    opciones: [
      {
        textoRespuesta: 'Presión dinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión estática',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión residual',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión total',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '20 - Los limites del arco blanco del anemómetro indican',
    opciones: [
      {
        textoRespuesta: 'VS1 inferior y VFE superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VSO inferior y VLE superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VSI el inferior y VFE el superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VSO inferior y VFE el superior',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '21 - Que velocidades delimitan el arco amarillo?',
    opciones: [
      {
        textoRespuesta: 'Vne-Vfe',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vne-Vle',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vne-Vno',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vne-Vlo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22 - Si un avión derrapa, ¿Qué tenemos que hacer para corregir el derrape?',
    opciones: [
      {
        textoRespuesta: 'Inclinar más',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inclinar menos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pisar la bola',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y c son s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '23 - ¿Cómo logramos el mejor rendimiento en un motor de explosión?',
    opciones: [
      {
        textoRespuesta: 'Aire frío y seco a alta presión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aire cálido y húmedo a baja presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aire frío y húmedo a alta presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aire cálido y seco a alta presión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24 - Al aplicar calor al carburador:',
    opciones: [
      {
        textoRespuesta: 'La relación de mezcla no experimenta ninguna variación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se empobrece la mezcla',
        isCorrect: false
      },
      {
        textoRespuesta: 'Como consecuencia de la mezcla pobre se reducen las RPM',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se enriquece la mezcla',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
