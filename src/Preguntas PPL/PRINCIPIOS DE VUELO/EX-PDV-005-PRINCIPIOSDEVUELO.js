const preguntas = [
  {
    titulo: '1 - La unidad de la medida de presión es:',
    opciones: [
      {
        textoRespuesta: 'kg/dm3',
        isCorrect: false
      },
      {
        textoRespuesta: 'lb/gal',
        isCorrect: false
      },
      {
        textoRespuesta: 'psi',
        isCorrect: true
      },
      {
        textoRespuesta: 'kg/cm3',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - ¿Qué factores determinan la distancia respecto al suelo recorrida por un avión al planear?',
    opciones: [
      {
        textoRespuesta: 'El viento y el Cl max',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento y el peso junto con la carga de potencia, que es la relación entre la potencia generada y el peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento y la masa del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento y la relación sustentación/resistencia aerodinámica que cambia en función del ángulo de ataque',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - La velocidad del sonido en el aire:',
    opciones: [
      {
        textoRespuesta: 'No varía con la altura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No varía con la altura solamente en presencia de una atmósfera ISA.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Varía con la altura cerca del ecuador.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está en función única de la temperatura del aire.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '4 - En el mismo perfil aerodinámico, el ángulo que forma la línea formada por la unión de los infinitos puntos del 25% de las infinitas cuerdas aerodinámicas del plano, con el eje longitudinal del avión, en el plano horizontal, recibe el nombre de:',
    opciones: [
      {
        textoRespuesta: 'Diedro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Flecha',
        isCorrect: true
      },
      {
        textoRespuesta: 'Elongación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Envergadura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Señalar la ecuación correcta para la sustentación:',
    opciones: [
      {
        textoRespuesta: 'Formula:',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las dos anteriores son s',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna de las dos s',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '6 - Conocemos que la pérdida en una PA28, con flap arriba y un peso al despegue de 845 Kgs. se produce a 58 Kts. En el siguiente vuelo despegamos con un peso de 1100 Kg. Debemos tener en cuenta que:',
    opciones: [
      {
        textoRespuesta: 'La velocidad de pérdida aumentará.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad de pérdida disminuirá.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad de pérdida no varía con el peso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7 - El avisador de pérdida de un avión puede ser:',
    opciones: [
      {
        textoRespuesta: 'Luminoso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sonoro.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por vibración.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todo lo anterior.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '8 - La altitud densidad se determina mediante:',
    opciones: [
      {
        textoRespuesta: 'Altitud-presión y temperatura exterior.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Altitud-presión y densidad considerada a la altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Densímetro a la altitud considerada.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La altitud densidad y la temperatura exterior.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - La polar de un perfil es:',
    opciones: [
      {
        textoRespuesta: 'El lugar geométrico de los puntos que equidistan de los puntos del ala.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La línea que une el punto más avanzado del avión con el más retrasado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La curva que nos relaciona el coeficiente de sustentación con el de la resistencia.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La máxima distancia entre el intradós y el extradós.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - ¿Qué se entiende por espesor relativo?',
    opciones: [
      {
        textoRespuesta: 'Es la altura máxima del perfil.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la relación cuerda/espesor en un punto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la relación entre el radio del borde de ataque y la cuerda media.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la relación espesor máximo/cuerda.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11 - ¿A qué llamamos ángulo de máxima fineza?',
    opciones: [
      {
        textoRespuesta: 'Ángulo para el cual CL/CD es mínima.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo para el cual CL/CD es máxima',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ángulo para el cual CL/CD es igual a 1.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo para el cual CL/CD=0.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - En comparación con la configuración de flaps recogidos, el máximo ángulo de ataque en configuración de flaps extendidos es:',
    opciones: [
      {
        textoRespuesta: 'Menor.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor o menor dependiendo de la deflexión de los flaps.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El mismo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - Siendo 15ºC la temperatura a nivel del mar en la atmósfera ISA, a 10000 ft será de:',
    opciones: [
      {
        textoRespuesta: '-20ºC',
        isCorrect: false
      },
      {
        textoRespuesta: '-5ºC',
        isCorrect: true
      },
      {
        textoRespuesta: '0ºC',
        isCorrect: false
      },
      {
        textoRespuesta: '+5ºC',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - A una IAS constante, mientras ascendemos, las TAS:',
    opciones: [
      {
        textoRespuesta: 'Aumentará.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuiría.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No variará.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La TAS y la IAS no tienen relación alguna.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15 - La velocidad de máxima fineza:',
    opciones: [
      {
        textoRespuesta: 'Se consigue allá donde la resistencia es máxima.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se consigue allá donde existe el mejor compromiso entre sustentación y resistencia.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se consigue allá donde el avión pierde más altitud en menor espacio.',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son s.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '16 - El punto de remanso de un perfil',
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
  }
];

export default preguntas;
