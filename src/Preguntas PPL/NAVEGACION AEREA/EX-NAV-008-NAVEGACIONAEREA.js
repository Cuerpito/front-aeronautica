const preguntas = [
  {
    titulo: '1 - Una aeronave recorre 2.4 millas terrestres en 47 segundos. ¿Cuál será su velocidad respecto al suelo?:',
    opciones: [
      {
        textoRespuesta: '131 kt.',
        isCorrect: false
      },
      {
        textoRespuesta: '209 kt.',
        isCorrect: false
      },
      {
        textoRespuesta: '183 kt.',
        isCorrect: false
      },
      {
        textoRespuesta: '160 kt.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '2 - Al decelerar en rumbo W en el hemisferio norte la tarjeta de una brújula magnética de lectura directa girará:',
    opciones: [
      {
        textoRespuesta: 'Hacia el norte en sentido antihorario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hacia el norte en sentido horario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hacia el sur en sentido antihorario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hacia el sur en sentido horario.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - El valor de la declinación magnética:',
    opciones: [
      {
        textoRespuesta: 'Varía entre 45º este y 45º oeste',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es inferior a 100º',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es inferior a 90º',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tiene un máximo de 180º',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '4 - Durante un vuelo a baja cota una aeronave cruza en ángulo recto dos carreteras paralelas. El tiempo que se tarda en cruzarlas se puede usar para calcular:',
    opciones: [
      {
        textoRespuesta: 'La velocidad respecto al suelo de la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La posición de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La deriva de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La derrota de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - ¿Cuál es la distancia  en NM sobre el terreno de 12 cm medidos sobre una carta de escala 1:2.000.000?',
    opciones: [
      {
        textoRespuesta: '329 NM',
        isCorrect: false
      },
      {
        textoRespuesta: '150 NM',
        isCorrect: false
      },
      {
        textoRespuesta: '43 NM',
        isCorrect: false
      },
      {
        textoRespuesta: '130 NM.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6 - Si estamos encima de un VOR/DME a 6.000’, ¿Qué marca el DME?',
    opciones: [
      {
        textoRespuesta: 'Dará la distancia  real.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dará una distancia errónea.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A 6000’ el DME no es operativo pues da marcación a partir de 7.000’.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nos dará la distancia real menos un 15% por el error debido a la zona de confusión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - El radiocompás funciona en la gama de frecuencias:',
    opciones: [
      {
        textoRespuesta: 'Altas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altas y muy altas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bajas y medias.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Medias.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Identificar la frase correcta en caso de estar perdidos en mitad de una ruta:',
    opciones: [
      {
        textoRespuesta: 'Trazar virajes de 360º siempre hacia el lado del viento para identificar él último punto reconocido.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trazar un sector de unos 25º a cada lado de la ruta y tratar de buscarnos  en ese sector.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Contactar con una torre de control para que nos den una marcación mediante la radio.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si conocemos la dirección del viento analizar el sector al que nos haya desplazado.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - En caso de estar perdidos, ¿Cómo podemos localizar nuestro punto exacto de posición en una carta?',
    opciones: [
      {
        textoRespuesta: 'Mediante un cruce de radiales de dos estaciones VOR.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con una estación NDB podemos situar nuestro punto de posición.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizando un VOR/DME.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La a y la c son s.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10 - El VOR emite en frecuencias:',
    opciones: [
      {
        textoRespuesta: 'UHF.',
        isCorrect: false
      },
      {
        textoRespuesta: 'HF.',
        isCorrect: false
      },
      {
        textoRespuesta: 'LF/MF.',
        isCorrect: false
      },
      {
        textoRespuesta: 'VHF.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '11 - Suponiendo viento cero. ¿Qué distancia cubrirá una aeronave que descienda 15.000 pies con una TAS de 320 Kt y manteniendo un régimen de descenso de 3.000 pies por minuto?',
    opciones: [
      {
        textoRespuesta: '26,7 NM.',
        isCorrect: true
      },
      {
        textoRespuesta: '19,2 NM.',
        isCorrect: false
      },
      {
        textoRespuesta: '16,0 NM.',
        isCorrect: false
      },
      {
        textoRespuesta: '38,4 NM.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Suponiendo: derrota verdadera 348º, deriva 17º izquierda, declinación 32ºW, desviación 4ºE. ¿Qué señala la brújula?',
    opciones: [
      {
        textoRespuesta: '033º.',
        isCorrect: true
      },
      {
        textoRespuesta: '359º.',
        isCorrect: false
      },
      {
        textoRespuesta: '337º.',
        isCorrect: false
      },
      {
        textoRespuesta: '007º.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
