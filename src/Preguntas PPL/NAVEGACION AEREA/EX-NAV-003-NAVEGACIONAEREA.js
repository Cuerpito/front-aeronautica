const preguntas = [
  {
    titulo: '1 - ¿Cuánto tardara un avión en recorrer 5 NM si vuela con velocidad respecto al suelo de 269 kt?',
    opciones: [
      {
        textoRespuesta: '1 MIN. 07 SEG.',
        isCorrect: true
      },
      {
        textoRespuesta: '2 MIN. 30 SEG.',
        isCorrect: false
      },
      {
        textoRespuesta: '0 MIN. 34 SEG.',
        isCorrect: false
      },
      {
        textoRespuesta: '1 MIN. 55 SEG.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - Supuestos: Rumbo magnético = 255º, VAR = 40ºW, GS = 375 kt, W/V = 235º(T)/120 kt. Calcular el ángulo de deriva.',
    opciones: [
      {
        textoRespuesta: '9º a la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta: '16º a la derecha.',
        isCorrect: false
      },
      {
        textoRespuesta: '7º a la derecha.',
        isCorrect: false
      },
      {
        textoRespuesta: '7º a la izquierda.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - ¿Qué es la derivación de la brújula?',
    opciones: [
      {
        textoRespuesta: 'La diferencia entre el norte magnético y el norte dela brújula.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La diferencia entre el norte geográfico y el magnético.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia entre el norte geográfico y el de la brújula.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4 - TC=180, TAS=500 kts, W/V = 225º / 100 kts, indicar la GS',
    opciones: [
      {
        textoRespuesta: '600',
        isCorrect: false
      },
      {
        textoRespuesta: '450',
        isCorrect: false
      },
      {
        textoRespuesta: '435',
        isCorrect: true
      },
      {
        textoRespuesta: '535',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Derrota verdadera 348, deriva 17ª a la izquierda, declinación 32º W y desvío 4º E. Hallar el rumbo en brújula:',
    opciones: [
      {
        textoRespuesta: '033º',
        isCorrect: true
      },
      {
        textoRespuesta: '359º',
        isCorrect: false
      },
      {
        textoRespuesta: '337º',
        isCorrect: false
      },
      {
        textoRespuesta: '007º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - Supuesto MH 060º, declinación 8ºW y deriva 4º a la derecha, Hallar TC:',
    opciones: [
      {
        textoRespuesta: '056º',
        isCorrect: true
      },
      {
        textoRespuesta: '064º',
        isCorrect: false
      },
      {
        textoRespuesta: '048º',
        isCorrect: false
      },
      {
        textoRespuesta: '072º',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7 - La carta cuyo origen de proyección se encuentra a una distancia finita, fuera de la Tierra, recibe el nombre específico de:',
    opciones: [
      {
        textoRespuesta: 'Ortográfica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estereográfica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Escenográfica.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Gnomónica.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Los meridianos son:',
    opciones: [
      {
        textoRespuesta: 'Círculos máximos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paralelos a los paralelos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Semicírculos máximos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9 - ¿De qué antenas  consta el equipo ADF  de abordo?',
    opciones: [
      {
        textoRespuesta: 'De marcación y de origen.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De marcación y de rumbo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De cuadro y de sentido.',
        isCorrect: true
      },
      {
        textoRespuesta: 'De marcación y de recepción morse.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - Un avión vuela con rumbo 180º con el CDI centrado en 120º TO. Hallar en qué radial se encuentra:',
    opciones: [
      {
        textoRespuesta: '120º.',
        isCorrect: false
      },
      {
        textoRespuesta: '300º.',
        isCorrect: true
      },
      {
        textoRespuesta: '180º.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se puede saber.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - ¿Qué tipo de frecuencias utilizan los radares primarios?',
    opciones: [
      {
        textoRespuesta: 'VHF.',
        isCorrect: false
      },
      {
        textoRespuesta: 'UHF.',
        isCorrect: true
      },
      {
        textoRespuesta: 'UHF, EHF.',
        isCorrect: false
      },
      {
        textoRespuesta: 'LF, MF.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - TAS 470 Kt, Ruta verdadero 317º, viento 045º/45 Kt, Calcular el ángulo de deriva y la velocidad respecto al suelo:',
    opciones: [
      {
        textoRespuesta: '5º Izquierda y menos de 470 Kt.',
        isCorrect: true
      },
      {
        textoRespuesta: '5º Izquierda y 475 Kt.',
        isCorrect: false
      },
      {
        textoRespuesta: '5º Derecha y 475 Kt.',
        isCorrect: false
      },
      {
        textoRespuesta: '3º Derecha y 470 Kt.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
