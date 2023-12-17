const preguntas = [
  {
    titulo: '1 - Al aplicar calor al carburador:',
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
  },
  {
    titulo: '2 - En vuelo, la aguja y la bola de un indicador de aguja y bola se encuentran a la izquierda; el avión está',
    opciones: [
      {
        textoRespuesta: 'Virando a la derecha sin la suficiente inclinación lateral',
        isCorrect: false
      },
      {
        textoRespuesta: 'Virando a la derecha con demasiada inclinación lateral',
        isCorrect: false
      },
      {
        textoRespuesta: 'Virando a la izquierda sin suficiente inclinación lateral',
        isCorrect: false
      },
      {
        textoRespuesta: 'Virando a la izquierda con demasiada inclinación lateral',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - Si falla una de las doce celdas de una batería de plomo, ésta',
    opciones: [
      {
        textoRespuesta: 'Dispone de 1/12 menos de tensión, pero aun puede utilizarse',
        isCorrect: false
      },
      {
        textoRespuesta: 'Queda inutilizada',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dispone de 1/12 menos de capacidad, pero aun puede utilizarse',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dispone de 1/12 menos de tensión y de capacidad, pero aun puede utilizarse',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Los límites de la escala blanca en un indicador de velocidad aerodinámica son',
    opciones: [
      {
        textoRespuesta: 'VSO como límite inferior y VFE como límite superior',
        isCorrect: true
      },
      {
        textoRespuesta: 'VSO como límite inferior y VLE como límite superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VSI como límite inferior y VLE como límite superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VSI como límite inferior y VFE como límite superior',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '5 - La combinación correcta de paso de hélice (1), y posición de la palanca de la hélice (2) en el momento de soltar frenos para el despegue es',
    opciones: [
      {
        textoRespuesta: '(1) bajo (2) atrás',
        isCorrect: false
      },
      {
        textoRespuesta: '(1) alto (2) adelante',
        isCorrect: false
      },
      {
        textoRespuesta: '(1) alto (2) atrás',
        isCorrect: false
      },
      {
        textoRespuesta: '(1) bajo (2) adelante',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6 - Definición de mezcla',
    opciones: [
      {
        textoRespuesta: 'Masa de aire con respecto a la de combustible que entra en el cilindro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Masa de aire con respecto a la de combustible que entra en el carburador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Volumen de aire con respecto a la de combustible que entra en el cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Volumen de aire con respecto a la de combustible que entra en el carburador',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - En un ascenso con un motor alternativo la potencia',
    opciones: [
      {
        textoRespuesta: 'Aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se mantiene',
        isCorrect: false
      },
      {
        textoRespuesta: 'No le afecta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - El sistema de encendido de motores de émbolo que se utilizan para las aeronaves pequeñas de aviación general',
    opciones: [
      {
        textoRespuesta: 'dependen del generador de DC',
        isCorrect: false
      },
      {
        textoRespuesta: 'dependen del generador de AC',
        isCorrect: false
      },
      {
        textoRespuesta: 'dependen de la batería',
        isCorrect: false
      },
      {
        textoRespuesta: 'son independientes del sistema eléctrico de la aeronave',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9 - La ventaja principal de una hélice de velocidad constante en comparación con una hélice de paso fijo radica en',
    opciones: [
      {
        textoRespuesta: 'Su eficiencia constante en cualquier condición de funcionamiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su mayor eficiencia en vuelo de crucero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su mayor eficiencia en cualquier condición de funcionamiento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Su menor tensión en las palas de la hélice',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - ¿Qué velocidades delimitan el arco amarillo?',
    opciones: [
      {
        textoRespuesta: 'Vne – Vfe',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vne – Vle',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vne – Vno',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vne – Vlo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - Para un dado tipo de aceite, la viscosidad del aceite depende de',
    opciones: [
      {
        textoRespuesta: 'La temperatura del aceite',
        isCorrect: true
      },
      {
        textoRespuesta: 'La presión exterior',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión de aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'La cantidad de aceite',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - Cual de las siguiente afirmaciones cualitativas sobre las hélices de paso fijo optimizadas para el vuelo en crucero es cierta en cuanto al despegue? El ángulo de ataque',
    opciones: [
      {
        textoRespuesta: 'De las palas de la hélice se reduce a cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'De las palas de la hélice es relativamente alto',
        isCorrect: true
      },
      {
        textoRespuesta: 'De las palas de la hélice es relativamente bajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'De la sección del perfil de la hélice es negativo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - ¿Cuándo se considera hipotéticamente que la temp. de los gases de escape será máxima?',
    opciones: [
      {
        textoRespuesta: 'Motor a bajo par de giro (ralentí)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Motor a alto par de giro (máxima potencia)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alta P de admisión, altas revoluciones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Baja P de admisión, bajas revoluciones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - Como logramos el mejor rendimiento en un motor de explosión?',
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
    titulo: '15 - Diferencia entre neumáticos de coche y de aviación',
    opciones: [
      {
        textoRespuesta: 'Refuerzo, Carcasa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Capacidad de deformación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Banda de rodadura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Precio',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - El indicador de Temperatura de Gases de Escape (EGT) se utiliza en un motor alternativo para',
    opciones: [
      {
        textoRespuesta: 'Controlar la Temp de cabeza de cilindros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Controlar el flujo de aire en el carburador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Asistir al piloto en la selección de la mezcla',
        isCorrect: true
      },
      {
        textoRespuesta: 'Controlar la temperatura del combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17 - En un avión de hélice de paso fijo, al aumentar la velocidad del mismo',
    opciones: [
      {
        textoRespuesta: 'la hélice mantiene las mismas revoluciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'la hélice disminuye sus revoluciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'la hélice aumentara sus revoluciones',
        isCorrect: true
      },
      {
        textoRespuesta: 'la hélice mantendrá la misma velocidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18 - La fórmula correcta para calcular el desplazamiento de un motor multicilíndrico es',
    opciones: [
      {
        textoRespuesta: 'Longitud del cilindro * diámetro del cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Área del embolo * carrera del émbolo * número de cilindros',
        isCorrect: true
      },
      {
        textoRespuesta: 'Área del émbolo * carrera del émbolo',
        isCorrect: false
      },
      {
        textoRespuesta: 'cilindrada * número de cilindros',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '19 - Los errores en las lecturas del altímetro originadas por la variación de la presión estática cerca de la sonda de estática se conocen como',
    opciones: [
      {
        textoRespuesta: 'Error instrumental',
        isCorrect: false
      },
      {
        textoRespuesta: 'Error barométrico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Error de posición',
        isCorrect: true
      },
      {
        textoRespuesta: 'Efecto de histéresis',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '20 - Que afecta al funcionamiento de los giróscopos:\n1.-Rotación terrestre.\n2.-Fallos mecánicos.\n3.-Giros sobre el eje longitudinal del avión.\n4.-Maniobras en tierra del avión.\n5.-La orientación al Norte.',
    opciones: [
      {
        textoRespuesta: '1,2,3,4 y 5',
        isCorrect: false
      },
      {
        textoRespuesta: '1,2,4 y 5',
        isCorrect: false
      },
      {
        textoRespuesta: '1,2 y 3',
        isCorrect: true
      },
      {
        textoRespuesta: '2 y 5',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21 - Si la toma estática de un altímetro se bloquea durante un ascenso, el instrumento',
    opciones: [
      {
        textoRespuesta: 'Gradualmente indicara cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicara de menos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicara una altitud equivalente a la subescala de milibares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continuara mostrando la lectura en la cual ocurrió el blocaje',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '22 - Un termómetro de tipo Termopar consiste en',
    opciones: [
      {
        textoRespuesta: 'Un solo filamento de metal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dos metales conductores de diferente tipo y conectados en un punto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dos metales conductores de diferente tipo y conectados en dos puntos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un puente de Wheatstone conectado a un indicador de voltaje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23 - Si la fuente estática de un altímetro se bloquea durante el descenso, el instrumento',
    opciones: [
      {
        textoRespuesta: 'Gradualmente indicará cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continuará indicando la lectura correspondiente al momento en el que se produjo el bloqueo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Indicará una altitud equivalente al ajuste de la escala secundaria en milibares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicará una lectura inferior a la real',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24 - Girando a la derecha en tierra, ¿qué posición tienen la aguja y la bola?',
    opciones: [
      {
        textoRespuesta: 'La aguja en el centro y la bola a la izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aguja en el centro y la bola a la derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aguja a la derecha y la bola a la izquierda',
        isCorrect: true
      },
      {
        textoRespuesta: 'La aguja a la izquierda y la bola a la derecha',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
