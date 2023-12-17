const preguntas = [
  {
    titulo:
      '1 - Supuestos: Rumbo magnético 060º, declinación magnética 8ºW, ángulo de deriva 4º a la derecha.¿Cuál es la derrota verdadera?.',
    opciones: [
      {
        textoRespuesta: '072º.',
        isCorrect: false
      },
      {
        textoRespuesta: '064º.',
        isCorrect: false
      },
      {
        textoRespuesta: '056º.',
        isCorrect: true
      },
      {
        textoRespuesta: '048º.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '2 - Suponiendo: TAS = 470 kt, rumbo verdadero = 317º, W/V 045º(T)/45 kt. Calcular el ángulo de deriva y la velocidad respecto al suelo.',
    opciones: [
      {
        textoRespuesta: '5º L - 470 kt.',
        isCorrect: true
      },
      {
        textoRespuesta: '5º L - 475 kt.',
        isCorrect: false
      },
      {
        textoRespuesta: '5º R - 475 kt.',
        isCorrect: false
      },
      {
        textoRespuesta: '3º R - 470 kt.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Al virar a la derecha desde 330º (C) a 040º (C) en el hemisferio norte, la lectura directa de la brújula magnética:',
    opciones: [
      {
        textoRespuesta: 'Sobre indica el viraje y la turbulencia líquida disminuye el efecto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sobre indica el viraje y la turbulencia líquida aumenta el efecto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Infra indica el viraje y la turbulencia líquida aumenta el efecto.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Infra indica el viraje y la turbulencia liquida disminuye el efecto.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - TC=090, TAS=180 kt, GS=180 kt, desviación 5º derecha, indicar cuál es el W/V',
    opciones: [
      {
        textoRespuesta: '010/15',
        isCorrect: false
      },
      {
        textoRespuesta: '360/15',
        isCorrect: true
      },
      {
        textoRespuesta: '190/15',
        isCorrect: false
      },
      {
        textoRespuesta: '180/15',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - ¿Cuál es el valor máximo de la declinación?',
    opciones: [
      {
        textoRespuesta: '90º',
        isCorrect: false
      },
      {
        textoRespuesta: 'Varía entre un máximo de 45º Este  y 45º Oeste',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debe ser 0 en el ecuador magnético',
        isCorrect: false
      },
      {
        textoRespuesta: '180º.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '6 - Volando a baja cota, un avión cruza dos carreteras paralelas con 90º respecto a ellas. El tiempo que tarda en cruzar las carreteras nos servirá para determinar:',
    opciones: [
      {
        textoRespuesta: 'La velocidad sobre el suelo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'la ruta que esta siguiendo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad TAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7 - El comportamiento errático de la brújula magnética en los polos o en sus cercanías se debe a:',
    opciones: [
      {
        textoRespuesta: 'La máxima intensidad que alcanza la componente vertical del campo magnético de la tierra.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La débil intensidad que alcanza la componente vertical del campo magnético de la tierra.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La máxima intensidad que alcanza la componente horizontal del campo magnético de la tierra.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La débil intensidad que alcanza la componente horizontal del campo magnético de la tierra.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - ¿Qué es una línea agónica?',
    opciones: [
      {
        textoRespuesta: 'La línea que une puntos de declinación cero.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La línea que une puntos de igual inclinación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La línea que une puntos de igual desvío.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9 - Dentro del código Q, ¿Cómo se escribe la marcación magnética para ir a la estación?',
    opciones: [
      {
        textoRespuesta: 'QNH.',
        isCorrect: false
      },
      {
        textoRespuesta: 'QDD.',
        isCorrect: false
      },
      {
        textoRespuesta: 'QDM.',
        isCorrect: true
      },
      {
        textoRespuesta: 'QRM.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - ¿Qué tipo de proyección es la que tiene el punto de vista a una distancia finita de la superficie de la tierra?',
    opciones: [
      {
        textoRespuesta: 'Gnomónica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ortográfica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Escenográfica.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Esterográfica.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - Se entiende por la desviación de la brújula en ángulo que forman:',
    opciones: [
      {
        textoRespuesta: 'El Norte Verdadero y el Norte de la Brújula.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El Norte Magnético y el Norte de la Brújula.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El Norte Verdadero y el Norte Magnético.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La componente horizontal de la intensidad y la intensidad total del campo magnético terrestre.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Al decelerar el rumbo W en el hemisferio Norte la tarjeta de una brújula magnética de lectura directa girará:',
    opciones: [
      {
        textoRespuesta: 'Aparentemente hacia el norte y en sentido antihorario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aparentemente hacia el norte y en sentido horario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aparentemente hacia el sur y en sentido antihorario',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aparentemente hacia el sur y en sentido horario.',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
