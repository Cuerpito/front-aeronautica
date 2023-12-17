const preguntas = [
  {
    titulo: '1 - Cómo transmitir 1001 como QNH',
    opciones: [
      {
        textoRespuesta: 'QNH uno cero cero uno',
        isCorrect: true
      },
      {
        textoRespuesta: 'QNH uno doble cero uno',
        isCorrect: false
      },
      {
        textoRespuesta: 'QNH mil uno',
        isCorrect: false
      },
      {
        textoRespuesta: 'QNH diez cero uno',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - Cuando un piloto quiere decir "esperaré y llamaré", dirá',
    opciones: [
      {
        textoRespuesta: 'Wilco',
        isCorrect: false
      },
      {
        textoRespuesta: 'En espera',
        isCorrect: true
      },
      {
        textoRespuesta: 'Adelante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Recibido',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '3 - Un avión no consigue establecer contacto por radio con una estación determinada de frecuencia designada, ¿Qué deberá hacer el piloto como último recurso?',
    opciones: [
      {
        textoRespuesta: 'Volver al aeropuerto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aterrizar en el aeropuerto más próximo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proseguir el vuelo sin comunicación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tratar de establecer contacto con la estación en una frecuencia alternativa',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4 - Algunos casos de fallo de radio son debidos a pérdida de potencia ¿Cómo solucionaría este problema?',
    opciones: [
      {
        textoRespuesta: 'Chequeando los fusibles correspondientes al equipo de radio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desconectando del master el interruptor de ALT durante unos minutos y volver a conectarlo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desconectando del master el interruptor de BAT durante unos minutos y volver a conectarlo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La solución a) y c) son las s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5 - ¿Qué significa para los aviones en vuelo una luz pirotécnica roja?',
    opciones: [
      {
        textoRespuesta: 'Abandone el aeródromo inmediatamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ceda el paso a otras aeronaves y siga en circuito',
        isCorrect: false
      },
      {
        textoRespuesta: 'A pesar de las instrucciones anteriores no aterrice por ahora',
        isCorrect: true
      },
      {
        textoRespuesta: 'Regrese para aterrizar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - Diga ¿cuál de las siguientes bandas tiene la frecuencia más baja?',
    opciones: [
      {
        textoRespuesta: 'VLF.',
        isCorrect: true
      },
      {
        textoRespuesta: 'VHF.',
        isCorrect: false
      },
      {
        textoRespuesta: 'EHF.',
        isCorrect: false
      },
      {
        textoRespuesta: 'HF.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - El grupo de palabras "Break Break" se utiliza',
    opciones: [
      {
        textoRespuesta: 'Antes de dar nuestra identificación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para separar mensajes a distintas aeronaves con comunicaciones saturadas.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Para interrumpir una comunicación tierra-aire.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para finalizar nuestro mensaje.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Las aeronaves se nombrarán por su matrícula o bien',
    opciones: [
      {
        textoRespuesta: 'Por el apellido del piloto al mando',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por el color dominante de la aeronave Ejemplo Santander, rojo en base derecha para 29',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por los designadores concertados, compuestos por un nombre y un número Ejemplo Viva114',
        isCorrect: true
      },
      {
        textoRespuesta: 'La b y c son s',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
