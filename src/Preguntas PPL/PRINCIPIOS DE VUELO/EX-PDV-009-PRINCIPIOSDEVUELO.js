const preguntas = [
  {
    titulo:
      '1 - El ángulo de ataque (ángulo de incidencia aerodinámica) de una superficie aerodinámica es el ángulo comprendido entre:',
    opciones: [
      {
        textoRespuesta: 'La dirección de la cuerda y el flujo relativo de aire sin perturbaciones',
        isCorrect: true
      },
      {
        textoRespuesta: 'La superficie inferior y la horizontal',
        isCorrect: false
      },
      {
        textoRespuesta: 'La superficie inferior y la dirección de la cuerda',
        isCorrect: false
      },
      {
        textoRespuesta: 'La superficie inferior y el flujo de aire relativo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - La temperatura, en atmósfera estándar:',
    opciones: [
      {
        textoRespuesta: 'Disminuye linealmente desde el nivel del mar hasta los 36,000 ft., después aumenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye linealmente desde el nivel del mar hasta los 36,000 ft., después disminuye.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye linealmente desde el nivel del mar hasta los 36,000 ft., después se mantiene.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta linealmente desde el nivel del mar hasta los 36,000 ft., después disminuye.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - En un campo de elevación 2265 ft., en presencia de una atmósfera ISA+10 y QNH 1000, la PA aproximada será de:',
    opciones: [
      {
        textoRespuesta: '3,550 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: '2,510 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: '2,655 ft.',
        isCorrect: true
      },
      {
        textoRespuesta: 'No podemos saberlo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - La velocidad TAS (True Air Speed) es:',
    opciones: [
      {
        textoRespuesta: 'La velocidad IAS corregida por el error de densidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad CAS corregida por el error de compresibilidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad IAS corregida por el error de posición.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad EAS corregida por el error de densidad.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '5 - La resistencia inducida en el avión viene generada por la llamada ‘estela turbulenta’ o ‘torbellino de punta de plano’. ¿Es evitable?',
    opciones: [
      {
        textoRespuesta: 'Si. Diseñando un avión de infinita envergadura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En parte, empleando dispositivos como los ‘winglets’.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No podemos disminuirla, puesto que es inherente a la sustentación del avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Podemos considerar las dos primeras respuestas s.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6 - El flap es:',
    opciones: [
      {
        textoRespuesta: 'No es relevante para el vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es un dispositivo hipersustentador.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es un mando de vuelo secundario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las respuestas b y c son s.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7 - ¿Cuál, de los siguientes factores, influye más en la estabilidad longitudinal?',
    opciones: [
      {
        textoRespuesta: 'La diferencia de peso que hay entre los tanques de combustible de ambos planos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La posición del centro de gravedad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La inoperatividad de los amortiguadores de guiñada (yaw dampers).',
        isCorrect: false
      },
      {
        textoRespuesta: 'La inoperatividad del compensador de alta velocidad (mach trim).',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Variables fundamentales de la atmósfera:',
    opciones: [
      {
        textoRespuesta: 'Temperatura, presión y densidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Masa, densidad y volumen.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión, densidad y volumen.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura, humedad y presión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - ¿Cómo se origina la sustentación en el ala de un avión?',
    opciones: [
      {
        textoRespuesta: 'En el extradós se producen sobrepresiones y en el intradós succiones.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el extradós se producen succiones y en el intradós sobrepresiones.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La presión aumenta tanto en el intradós como en el extradós.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión disminuye en el intradós y en el extradós.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - ¿Cómo es el momento de cabeceo de un perfil?',
    opciones: [
      {
        textoRespuesta: 'Directamente proporcional a la cuerda.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Inversamente proporcional a la cuerda.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Independiente a la cuerda.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Directamente proporcional a la velocidad del avión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - El punto de remanso de un perfil',
    opciones: [
      {
        textoRespuesta: 'Posee la máxima presión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Posee la mínima presión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sitúa el centro de gravedad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desprende la capa límite.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - Para mantener un vuelo recto y nivelado a velocidad verdadera constante, mientras se retraen los flaps, el ángulo de ataque deberá:',
    opciones: [
      {
        textoRespuesta: 'Aumentar o disminuir en función del tipo de flaps.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Permanecer constante.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - Según la ecuación de los gases perfectos, a un volumen dado, si aumentamos la presión en un gas:',
    opciones: [
      {
        textoRespuesta: 'Aumenta su temperatura.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuye su temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura es una constante dentro de la ecuación de los gases perfectos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '14 - En cuanto a la resistencia inducida:',
    opciones: [
      {
        textoRespuesta: 'Sabemos que es independiente de la configuración alar del avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Varía con el ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es la resistencia que menos tenemos en cuenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '15 - Durante la retracción de flaps con un ángulo constante de ataque, el avión empieza a (permaneciendo constantes el resto de factores de importancia)',
    opciones: [
      {
        textoRespuesta: 'descender súbitamente',
        isCorrect: true
      },
      {
        textoRespuesta: 'ascender',
        isCorrect: false
      },
      {
        textoRespuesta: 'guiñar',
        isCorrect: false
      },
      {
        textoRespuesta: 'inclinarse lateralmente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - El centro aerodinámico de un ala es aquel punto en el que:',
    opciones: [
      {
        textoRespuesta: 'Las fuerzas aerodinámicas son constantes',
        isCorrect: false
      },
      {
        textoRespuesta: 'El coeficiente de momento de cabeceo no varía con el ángulo de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'El eje lateral del avión cruza por el centro de gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cambio en la sustentación por variación del ángulo de ataque es constante',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
