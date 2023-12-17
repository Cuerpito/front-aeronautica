const preguntas = [
  {
    titulo: '1 - Para ajustar la relación de mezcla en un motor alternativo al aumentar la altitud, habrá que',
    opciones: [
      {
        textoRespuesta:
          'Aumentar la cantidad de combustible presente en la mezcla para compensar la reducción de la presión y de la densidad del aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducir el flujo de combustible para compensar la reducción de la densidad del aire',
        isCorrect: true
      },
      {
        textoRespuesta: 'Reducir la cantidad de combustible presente en la mezcla para compensar el aumento en la densidad del aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar la relación de la mezcla',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - La presión medida en el orificio delantero de un tubo Pitot es',
    opciones: [
      {
        textoRespuesta: 'La presión dinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión estática',
        isCorrect: false
      },
      {
        textoRespuesta: 'La suma de la presión estática más la presión total',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión total',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - En los carburadores modernos, las variaciones en la relación de la mezcla se obtienen ajustando',
    opciones: [
      {
        textoRespuesta: 'El flujo de combustible',
        isCorrect: true
      },
      {
        textoRespuesta: 'El flujo de aire, el flujo de combustible y la temperatura',
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
    titulo: '5 - La fórmula correcta para calcular el desplazamiento de un motor multi-cilíndrico es',
    opciones: [
      {
        textoRespuesta: 'Longitud del cilindro * diámetro del cilindro.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Área del émbolo * carrera del émbolo * número de cilindros.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Área del émbolo * carrera del émbolo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cilindrada * número de cilindros.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - La zona útil de trabajo del diagrama de OTTO de un motor alternativo se encuentra definida por',
    opciones: [
      {
        textoRespuesta: 'Dos líneas Adiabáticas y dos Isocoras',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dos líneas Isobáricas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una línea Isotérmica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una línea Isocoras y otra Isobárica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - El volumen de mezcla se mide en un motor alternativo en',
    opciones: [
      {
        textoRespuesta: 'el cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'el carburador',
        isCorrect: true
      },
      {
        textoRespuesta: 'la cámara de combustión',
        isCorrect: false
      },
      {
        textoRespuesta: 'la culata',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - La mezcla de un motor alternativo se efectúa en el cilindro y se mide',
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
    titulo: '9 - Durante el ascenso, con ajuste constante de mando de gases y mando de RPM (con mezcla constante)',
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
    titulo: '10 - Si la fuente estática de un altímetro se bloquea durante el descenso, el instrumento',
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
    titulo:
      '11 - Durante un vuelo con una velocidad normal de crucero, si uno de los magnetos falla por completo, cual será la primera consecuencia',
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
    titulo: '12 - La función de los descargadores de electricidad estática es',
    opciones: [
      {
        textoRespuesta: 'Ser capaz de volar más alto debido a la menor fricción eléctrica',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Disipar la carga estática del avión en vuelo de modo que se eviten las interferencias en la radio a causa de la electricidad estática',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disipar la carga estática del revestimiento del avión después del aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporcionar un camino a tierra para las cargas estáticas cuando se está repostando',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - ¿Qué significado tiene en un anemómetro el límite superior del arco blanco?',
    opciones: [
      {
        textoRespuesta: 'Velocidad mínima para extender los flaps',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad máxima para extender los flaps',
        isCorrect: true
      },
      {
        textoRespuesta: 'Velocidad de perdida con motor cortado y tren y flaps arriba',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad de perdida con motor cortado y tren y flaps abajo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - Como se llaman las velocidades que limitan el arco amarillo de un anemómetro.',
    opciones: [
      {
        textoRespuesta: 'VNE y operación normal',
        isCorrect: true
      },
      {
        textoRespuesta: 'VNE y Vs',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vs y Vso',
        isCorrect: false
      },
      {
        textoRespuesta: 'VNE y Vfe',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '15 - Durante el ascenso, con valor constante de Presión de Admisión de Aire (MAP) y de indicación de R.P.M del motor y con un ajuste de mezcla también constante, la potencia desarrollada por un motor alternativo',
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
        textoRespuesta: 'Solamente permanece constante si la palanca de control de velocidad se empuja hacia delante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - En el suelo, durante un viraje a la derecha, el coordinador de virajes indicara',
    opciones: [
      {
        textoRespuesta: 'Bastón a la derecha y bola a la izquierda',
        isCorrect: true
      },
      {
        textoRespuesta: 'Bastón a la derecha y bola a la derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bastón en el medio y bola a la derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bastón en el medio y bola a la izquierda',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '17 - En un diagrama del ciclo ideal de un motor con ciclo Otto, esta limitado por las siguientes líneas de cambio de estado gaseoso',
    opciones: [
      {
        textoRespuesta: '2 adiabáticas y 1 isoterma',
        isCorrect: false
      },
      {
        textoRespuesta: '2 adiabáticas y 2 isobáricas',
        isCorrect: false
      },
      {
        textoRespuesta: '2 adiabáticas y 2 isócoras',
        isCorrect: true
      },
      {
        textoRespuesta: '2 adiabáticas, 1 isócora y 1 isobárica',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '18 - La potencia de un motor de pistón disminuye durante un ascenso con una posición constante de la palanca de gases, debido a la disminución de',
    opciones: [
      {
        textoRespuesta: 'Temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Densidad del Aire',
        isCorrect: true
      },
      {
        textoRespuesta: 'Temperatura del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Humedad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19 - Los limites de la escala blanca del anemómetro indican',
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
    titulo: '20 - Que condiciones pueden causar detonación',
    opciones: [
      {
        textoRespuesta: 'Bajas RPM y baja temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alto octanaje de gasolina',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altas RPM y baja temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alta presión de admisión y bajas RPM',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '21 - Si la toma estática de un Indicador de Velocidad (ASI) se bloquea durante un ascenso el instrumento',
    opciones: [
      {
        textoRespuesta: 'Indicara cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicara de mas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicara de menos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Continuara indicando la velocidad del momento del bloqueo',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '22 - Volando por un terreno que está a 1.200 metros de altitud, ¿Cuál es el nivel de vuelo más bajo utilizable para nuestro vuelo?',
    opciones: [
      {
        textoRespuesta: '065',
        isCorrect: true
      },
      {
        textoRespuesta: '055',
        isCorrect: false
      },
      {
        textoRespuesta: '045',
        isCorrect: false
      },
      {
        textoRespuesta: '075',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23 - El ángulo de paso de la hélice de velocidad constante',
    opciones: [
      {
        textoRespuesta: 'Sólo varía con las RPM del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'No depende de la velocidad verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye al aumentar la velocidad verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta al aumentar la velocidad verdadera',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '24 - El grupo del cigüeñal esta formado por',
    opciones: [
      {
        textoRespuesta: 'Hélice, cigüeñal, pistones y bielas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cárter, cigüeñal, bielas y pistones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cigüeñal, bielas y pistones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cigüeñal, asiento de válvulas, recuperadores y empujadores',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
