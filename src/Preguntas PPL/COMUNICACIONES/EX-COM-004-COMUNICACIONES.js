const preguntas = [
  {
    titulo: '1 - ¿Qué significa una buena técnica al micrófono?',
    opciones: [
      {
        textoRespuesta: 'Usar un tono normal, hablando con claridad y buena pronunciación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Usar una alta cadencia de palabras por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hablar lo más despacio posible para una mejor comprensión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hablar con el micrófono cerca de la boca',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - Qué significa roger',
    opciones: [
      {
        textoRespuesta: 'Respuesta directa en afirmativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Respuesta directa en negativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorización para despegar',
        isCorrect: false
      },
      {
        textoRespuesta: 'He recibido entera su última transmisión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - La prioridad de la orden ruede hasta la pista 05, es',
    opciones: [
      {
        textoRespuesta: 'Menor que autorizado a aterrizar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor que precaución obras a la izquierda de calle de rodadura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Igual que alinear y mantener en pista 07',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor que transmita para QDM',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - En caso de fallo de comunicaciones, ¿Cuál de las siguientes opciones le parece más correcta?',
    opciones: [
      {
        textoRespuesta: 'Continuar con el vuelo hasta encontrar un lugar seguro para efectuar un aterrizaje de emergencia',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Continuar el vuelo en VMC, aterrizar en el aeródromo más cercano y notificar nuestra llegada lo antes posible al control de tránsito aéreo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aterrizar siempre en un aeródromo no controlado para no interferir sin radio en el tráfico de uno controlado',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Continuar el vuelo en VMC, siempre hasta el destino de nuestro plan de vuelo, así no hará falta notificar nuestra llegada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Las llamadas de peligro y emergencia se harán en la frecuencia que se estaba utilizando, o en la frecuencia',
    opciones: [
      {
        textoRespuesta: '121.5 Mhz',
        isCorrect: true
      },
      {
        textoRespuesta: '125.1 Mhz',
        isCorrect: false
      },
      {
        textoRespuesta: '121.5 Khz',
        isCorrect: false
      },
      {
        textoRespuesta: '125.1 Khz',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6 - La definición “Es el conjunto de fases por el que pasa una onda desde su origen hasta que vuelve a su valor inicial”, corresponde a',
    opciones: [
      {
        textoRespuesta: 'Frecuencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Amplitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hercio.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ciclo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7 - De los siguientes grupos de bandas de frecuencias diga cual de ellos es el más utilizado en radiotelefonía',
    opciones: [
      {
        textoRespuesta: 'VLF, LF, MF',
        isCorrect: false
      },
      {
        textoRespuesta: 'HF, VLF, EHF',
        isCorrect: false
      },
      {
        textoRespuesta: 'HF, VHF, UHF',
        isCorrect: true
      },
      {
        textoRespuesta: 'EHF, SHF',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - El servicio de aproximación se encarga de',
    opciones: [
      {
        textoRespuesta: 'Dar las autorizaciones para el despegue y aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener separaciones de seguridad entre aeronaves que se dirigen a la aproximación o salen del aeropuerto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Solamente de dar las autorizaciones de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solamente de dar las autorizaciones de despegue',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
