const preguntas = [
  {
    titulo:
      '1 - Al aumentar la altitud sin ajustar la relación de la mezcla, las prestaciones del motor de émbolo se ven afectadas por',
    opciones: [
      {
        textoRespuesta: 'Una disminución de la densidad del aire para una menor cantidad de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'La disminución de la densidad del aire para una cantidad de combustible constante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una densidad de aire constante para una mayor cantidad de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aumento en la densidad del aire para una menor cantidad de combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - Color de la gasolina AVGAS 100LL',
    opciones: [
      {
        textoRespuesta: 'Azul',
        isCorrect: true
      },
      {
        textoRespuesta: 'Verde',
        isCorrect: false
      },
      {
        textoRespuesta: 'Amarillo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rojo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - La viscosidad del aceite depende de',
    opciones: [
      {
        textoRespuesta: 'La presión del aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'La cantidad de aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura del aceite',
        isCorrect: true
      },
      {
        textoRespuesta: 'La presión externa',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Los sistemas de encendido de motores de émbolo que se utilizan para las aeronaves pequeñas de aviación general',
    opciones: [
      {
        textoRespuesta: 'Dependen del generador de CC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dependen del generador CA',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dependen de la batería',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son independientes del sistema eléctrico de la aeronave',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5 - ¿Qué velocidades delimitan el arco blanco del anemómetro?',
    opciones: [
      {
        textoRespuesta: 'Vso – Vle',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vso – Vfe',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vne – Vle',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vs  - Vfe',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - ¿Un avión con hélice de paso variable como debe utilizarse al aumentar la potencia?',
    opciones: [
      {
        textoRespuesta: 'Primero se ajusta el paso y después la presión de admisión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Primero se ajusta la admisión y después el paso',
        isCorrect: false
      },
      {
        textoRespuesta: 'El orden es indiferente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un avión de paso variable no tiene indicador de presión de admisión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - ¿Cuál puede ser la causa de detonación?',
    opciones: [
      {
        textoRespuesta: 'alta presión de admisión y bajo numero de revoluciones',
        isCorrect: true
      },
      {
        textoRespuesta: 'alta presión de admisión y alto numero de revoluciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'baja presión de admisión y bajo numero de revoluciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'baja presión de admisión y alto numero de revoluciones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - El ángulo de ataque con RPM constantes en un motor con hélice de paso fijo. \nAl incrementar la velocidad verdadera',
    opciones: [
      {
        textoRespuesta: 'Aumenta al aumentar la velocidad verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye al aumentar la velocidad verdadera',
        isCorrect: true
      },
      {
        textoRespuesta: 'No depende de la velocidad verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solo varía con las RPM del motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - El uso de la calefacción del carburador tiende a',
    opciones: [
      {
        textoRespuesta: 'Aumenta la potencia y disminuye la temperatura de funcionamiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la potencia y aumenta la temperatura de funcionamiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye la potencia y aumenta la temperatura de funcionamiento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuye la potencia y disminuye la  temperatura de funcionamiento',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '10 - Cual de las siguientes afirmaciones cualitativas sobre hélices de paso fijo optimizadas para vuelo en crucero, es cierta en cuanto al despegue? El ángulo de ataque',
    opciones: [
      {
        textoRespuesta: 'de las palas de la hélice se reduce a cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'de las palas de la hélice es relativamente alto',
        isCorrect: true
      },
      {
        textoRespuesta: 'de las palas de la hélice es relativamente bajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'de la sección del perfil de la hélice es negativo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - El “efecto de estela” de una hélice es más evidente en',
    opciones: [
      {
        textoRespuesta: 'Velocidades aerodinámicas bajas con un ajuste alto de potencia',
        isCorrect: true
      },
      {
        textoRespuesta: 'Velocidades aerodinámicas altas con un ajuste bajo de potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidades aerodinámicas bajas con un ajuste bajo de potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidades aerodinámicas altas con un ajuste alto de potencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Un termómetro termopar esta hecho de',
    opciones: [
      {
        textoRespuesta: 'Una bobina de tres hilos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una bobina simple',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dos metales conductores de diferente tipo y conectados a un punto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dos metales conductores del mismo tipo conectado a dos puntos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - El sector amarillo en un instrumento de temperatura corresponde a',
    opciones: [
      {
        textoRespuesta: 'un rango de operación frecuente',
        isCorrect: false
      },
      {
        textoRespuesta: 'un rango de operación prohibida',
        isCorrect: false
      },
      {
        textoRespuesta: 'un rango de operación excepcional',
        isCorrect: true
      },
      {
        textoRespuesta: 'rango de operación normal',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - Las hélices de paso fijo están diseñadas normalmente para una mayor eficacia a',
    opciones: [
      {
        textoRespuesta: 'Velocidad de crucero',
        isCorrect: true
      },
      {
        textoRespuesta: 'Gases cortados',
        isCorrect: false
      },
      {
        textoRespuesta: 'Gases a tope',
        isCorrect: false
      },
      {
        textoRespuesta: 'Despegue',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15 - ¿Que velocidad es la que marca el límite inferior del arco blanco de un ASI?',
    opciones: [
      {
        textoRespuesta: 'Vne',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vge',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vs',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - Cuál de los siguientes factores podría aumentar la posibilidad de detonación en un motor de pistón?',
    opciones: [
      {
        textoRespuesta: 'Seleccionar mezcla de combustible / aire muy pobre',
        isCorrect: true
      },
      {
        textoRespuesta: 'Usar combustible con un índice de octano alto en vez de un combustible con un índice deoctano menor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Usar un motor con una relación de compresión baja',
        isCorrect: false
      },
      {
        textoRespuesta: 'Retardar ligeramente el momento de la ignición',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17 - El arco amarillo en un anemómetro, indica',
    opciones: [
      {
        textoRespuesta: 'Margen normal de velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Margen de precaución de velocidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Velocidades de máximo alcance',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidades de máxima autonomía',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18 - El sector amarillo de un indicador de temperatura indica',
    opciones: [
      {
        textoRespuesta: 'Funcionamiento normal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Funcionamiento peligroso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Funcionamiento temporal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Parar el motor inmediatamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19 - En los carburadores modernos las variaciones en la relación de mezcla se obtienen ajustando',
    opciones: [
      {
        textoRespuesta: 'El flujo de combustible',
        isCorrect: true
      },
      {
        textoRespuesta: 'El flujo de aire, el flujo de combustible y temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'El flujo de aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los flujos de combustible y aire',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20 - En un motor de explosión, la chispa que produce la ignición se producirá antes o después de punto muerto superior.',
    opciones: [
      {
        textoRespuesta: 'Antes, en cada vuelta continua de cigüeñal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Después, en cada vuelta alternativa de cigüeñal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Después, en cada vuelta continua de cigüeñal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antes, en cada vuelta alternativa de cigüeñal',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '21 - La principal ventaja de una hélice de paso variable frente a la de uno fijo',
    opciones: [
      {
        textoRespuesta: 'Una reducción del consumo de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor eficacia en todas las fases del vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor sencillez de construcción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminución de peso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22 - Los propósitos del nitrógeno y del aceite en un amortiguador oleo-neumático son',
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
    titulo: '23 - Que velocidades delimitan el arco blanco del anemómetro?',
    opciones: [
      {
        textoRespuesta: 'Vso- Vle',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vso- Vfe',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vne- Vle',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vs- Vfe',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24 - En tierra, girando a la derecha, el indicador de viraje señalará',
    opciones: [
      {
        textoRespuesta: 'Aguja al medio, bola a la derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aguja a la derecha, bola a la izquierda',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aguja al medio, bola a la izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aguja a la derecha, bola a la derecha',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
