const preguntas = [
  {
    titulo: '1 - Al volar desde un sector de aire cálido hasta otro de aire más frío, al altímetro',
    opciones: [
      {
        textoRespuesta: 'Proporciona una indicación in por defecto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Indica la altitud real sobre el suelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continúa indicando lecturas tan s como anteriormente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Proporciona una indicación in por exceso',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '2 - Girando a la derecha en tierra, ¿qué posición tienen la aguja y la bola?',
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
  },
  {
    titulo: '3 - Las baterías se clasifican según',
    opciones: [
      {
        textoRespuesta: 'Ohmios',
        isCorrect: false
      },
      {
        textoRespuesta: 'Amperios-hora',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vatios',
        isCorrect: false
      },
      {
        textoRespuesta: 'Voltios-Amperios',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Los límites de la escala amarilla en un indicador de velocidad aerodinámica son',
    opciones: [
      {
        textoRespuesta: 'VLE como límite inferior y VNE como límite superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VFE como límite inferior y VNE como límite superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VLO como límite inferior y VNE como límite superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VNO como límite inferior y VNE como límite superior',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5 - Los límites de la escala verde en un indicador de velocidad aerodinámica son',
    opciones: [
      {
        textoRespuesta: 'VS1 como límite inferior y VNE como límite superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VS1 como límite inferior y VLO como límite superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VS1 como límite inferior y VNO como límite superior',
        isCorrect: true
      },
      {
        textoRespuesta: 'VS0 como límite inferior y VNO como límite superior',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6 - Durante el ascenso, con valor constante de Presión de Admisión de Aire (MAP) y de indicación de RPM del motor y con un ajuste de mezcla también constante, la potencia desarrollada por un motor alternativo',
    opciones: [
      {
        textoRespuesta: 'Permanece constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo permanece constante si se empuja hacia delante el mando de gases',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - ¿Cuándo se considera hipotéticamente que la temp de los gases de escape será máxima?',
    opciones: [
      {
        textoRespuesta: 'Motor a bajo par de giro (ralentí)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Motor a alto par de giro (máxima potenci',
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
    titulo: '8 - En el despegue la posición de paso y palanca en un avión con hélice de velocidad constante',
    opciones: [
      {
        textoRespuesta: 'Paso bajo, palanca atrás',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paso bajo, palanca adelante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Paso alto, palanca atrás',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paso alto, palanca adelante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - El ciclo OTTO de un motor alternativo son',
    opciones: [
      {
        textoRespuesta: 'dos líneas adiabáticas y dos isócoras',
        isCorrect: true
      },
      {
        textoRespuesta: 'dos líneas isobáricas y dos adibáticas',
        isCorrect: false
      },
      {
        textoRespuesta: 'una isócora y una adiabática',
        isCorrect: false
      },
      {
        textoRespuesta: 'una isobárica y una adiabática',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - Al aplicar calor al carburador',
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
    titulo: '11 - Los errores de lectura de un altímetro debido a las variaciones de la P estática cerca de la fuente se denominan',
    opciones: [
      {
        textoRespuesta: 'Error de instrumento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Error de barómetro',
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
      '12 - ¿Cuál de los factores siguientes con la mayor probabilidad aumentaría la posibilidad de detonación que ocurre dentro de un motor de pistón?',
    opciones: [
      {
        textoRespuesta: 'La utilización de una mezcla demasiado pobre',
        isCorrect: true
      },
      {
        textoRespuesta: 'El empleo de un combustible con un alto índice de octanaje comparado con otro de menor octanaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'La utilización de un motor con una relación de compresión baja',
        isCorrect: false
      },
      {
        textoRespuesta: 'Retrasar ligeramente la ignición',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - ¿Qué afirmación es correcta con respecto a la relación de mezcla?',
    opciones: [
      {
        textoRespuesta: 'La proporción  para el buen rendimiento de un motor es de 15 partes de combustible por 1 de aire',
        isCorrect: true
      },
      {
        textoRespuesta: '18 partes de aire por 1 de combustible se considerar mezcla pobre',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Con una relación de mezcla ligeramente rica el motor tiende a calentarse más rápidamente que con una mezcla ligeramente pobre',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son ciertas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - ¿Qué determina el arco blanco en el anemómetro?',
    opciones: [
      {
        textoRespuesta: 'La VNE',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rango de utilización de flaps',
        isCorrect: true
      },
      {
        textoRespuesta: 'Velocidad de maniobra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las velocidades optimas de despegue',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15 - Como se llama el error del altímetro producido en la toma de presión estática por su posición cerca de la fuente',
    opciones: [
      {
        textoRespuesta: 'Instrumental',
        isCorrect: false
      },
      {
        textoRespuesta: 'Barométrico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Posición',
        isCorrect: true
      },
      {
        textoRespuesta: 'Histéresis',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - Durante el ascenso, con ajuste constante de mando de gases y mando de R.P.M. (con mezcla constante)',
    opciones: [
      {
        textoRespuesta: 'Las RPM disminuyen',
        isCorrect: false
      },
      {
        textoRespuesta: 'La Presión de Admisión del Aire (MAP) disminuye',
        isCorrect: true
      },
      {
        textoRespuesta: 'La Presión de Admisión del Aire (MAP) aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las RPM aumentan',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17 - El indicador de velocidad verdadera del avión ASI',
    opciones: [
      {
        textoRespuesta: 'nos representa la velocidad indicada',
        isCorrect: false
      },
      {
        textoRespuesta: 'todas son s',
        isCorrect: true
      },
      {
        textoRespuesta: 'nos representa la velocidad indicada corregida por temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'nos representa la velocidad TAS del avión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '18 - En el momento del despegue como se encuentran las palancas de paso y gases.',
    opciones: [
      {
        textoRespuesta: 'Todas a delante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Paso a delante solo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Gases adelante solo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son falsas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19 - En un cilindro donde el punto muerto superior es el TDC (punto muerto superior), la chispa salta',
    opciones: [
      {
        textoRespuesta: 'Antes del TDC y en virajes alternativos del cigüeñal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Después del TDC y en virajes alternativos del cigüeñal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antes del TDC y en cada giro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Después del TDC y en cada giro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20 - La formula correcta para calcular la capacidad de un motor con varios cilindros es',
    opciones: [
      {
        textoRespuesta: 'Área del pistón * recorrido del pistón',
        isCorrect: false
      },
      {
        textoRespuesta: 'Volumen del cilindro * número de cilindros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Longitud del cilindro * diámetro del cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Área del pistón * recorrido del pistón * número de cilindros',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '21 - Los limites de la escala amarilla en el anemómetro son',
    opciones: [
      {
        textoRespuesta: 'VLO el inferior y VNE el superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VLE el inferior y VNE el superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VFE el inferior y VNE el superior',
        isCorrect: false
      },
      {
        textoRespuesta: 'VNO el inferior y VNE el superior',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '22 - Que color tiene la gasolina de aviación de 100 octanos y bajo contenido en plomo (AVGAS 100 LL)',
    opciones: [
      {
        textoRespuesta: 'Verde',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rojo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Azul',
        isCorrect: true
      },
      {
        textoRespuesta: 'Transparente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23 - Si la toma estática de un altímetro se bloquea durante un descenso, el instrumento',
    opciones: [
      {
        textoRespuesta: 'Continuara mostrando la lectura en la cual ocurrió el blocaje',
        isCorrect: true
      },
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
      }
    ]
  },
  {
    titulo: '24 - Cuando el piloto de un avión con motor alternativo mueve la palanca de la mezcla a una posición de mezcla pobre',
    opciones: [
      {
        textoRespuesta: 'Se reduce la cantidad de combustible que penetra en la cámara de combustión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta el volumen de aire que penetra en el carburador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se reduce el volumen de aire que penetra en el carburador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la cantidad de combustible que penetra en la cámara de combustión',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
