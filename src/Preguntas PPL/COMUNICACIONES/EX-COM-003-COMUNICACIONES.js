const preguntas = [
  {
    titulo: '1 - ¿Cuál es la forma correcta de transmitir y verificar la transmisión de 120.375 Mhz (canal VHF separado por 25 Hz)?',
    opciones: [
      {
        textoRespuesta: 'Uno dos cero tres siete',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno veinte decimal tres siete',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno dos cero decimal tres siete cinco',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno dos cero decimal tres siete',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '2 - ¿Qué significa el término "Transmisión Ciega" (blind transmisión)?',
    opciones: [
      {
        textoRespuesta: 'No podemos ver la torre',
        isCorrect: false
      },
      {
        textoRespuesta: 'No tenemos equipo de radio',
        isCorrect: false
      },
      {
        textoRespuesta: 'No tenemos cobertura radar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todo es falso',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - Cuando en un mensaje ha habido un error en la transmisión, el piloto comunica la versión correcta diciendo',
    opciones: [
      {
        textoRespuesta: 'QNH.....corrección....',
        isCorrect: true
      },
      {
        textoRespuesta: 'QNH.....negativo....',
        isCorrect: false
      },
      {
        textoRespuesta: 'QNH.....negativo repito de nuevo....',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Una estación aeronáutica nos informa sobre la visibilidad de un aeropuerto. Qué unidades de medida empleará',
    opciones: [
      {
        textoRespuesta: 'Pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'Metros',
        isCorrect: true
      },
      {
        textoRespuesta: 'Metros o pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5 - ¿Qué procedimiento utilizará la aeronave durante el día para indicar acuse de recibo en caso de fallo de radio?',
    opciones: [
      {
        textoRespuesta: 'Guiñando el avión continuadamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Balanceando las alas (alabeando)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Encendiendo y apagando la luz de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'La b) y la c) son s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6 - La función del “squelch” en una radio es',
    opciones: [
      {
        textoRespuesta: 'Modificar la frecuencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Actuar como filtro para el ruido parasitario.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las dos anteriores son s.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7 - La recepción HF',
    opciones: [
      {
        textoRespuesta: 'Mejora por la noche.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mejora por el día.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de la sub-banda.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '8 - ¿Quién es el responsable de la separación de tráfico del aeródromo en lo que se refiere a su superficie?',
    opciones: [
      {
        textoRespuesta: 'El servicio de control de rodadura (ground control)',
        isCorrect: false
      },
      {
        textoRespuesta: 'El servicio de control de torre en el caso de que no exista control de rodadura',
        isCorrect: false
      },
      {
        textoRespuesta: 'El servicio de control de aproximación y salidas',
        isCorrect: false
      },
      {
        textoRespuesta: 'a y b son s',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
