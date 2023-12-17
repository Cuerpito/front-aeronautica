const preguntas = [
  {
    titulo: '1 - Un mensaje de un avión que ha sufrido un accidente y requiera ayuda inmediata es un mensaje de',
    opciones: [
      {
        textoRespuesta: 'De seguridad en vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'De socorro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Urgente',
        isCorrect: false
      },
      {
        textoRespuesta: 'De control',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - Durante la transmisión de números que contengan decimales',
    opciones: [
      {
        textoRespuesta: 'El termino DECIMAL siempre se debe transmitir',
        isCorrect: true
      },
      {
        textoRespuesta: 'El termino DECIMAL puede ser omitido solo con entidades ATS conocidas',
        isCorrect: false
      },
      {
        textoRespuesta: 'El termino DECIMAL se puede omitir si no hay posibilidad de error',
        isCorrect: false
      },
      {
        textoRespuesta: 'El termino DECIMAL se debe decir solo si está seguido por tres dígitos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - ¿Que significa la frase "Recibido" ("Roger")?',
    opciones: [
      {
        textoRespuesta: 'Una respuesta directa en modo afirmativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una respuesta directa en modo negativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'He recibido entera su última transmisión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Autorizado a despegar o autorizado a aterrizar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Que elementos de instrucciones o informaciones se deben siempre colacionar?',
    opciones: [
      {
        textoRespuesta:
          'Autorizaciones ATC, instrucciones de velocidad, información del estado de las pistas, QNH, código transponder',
        isCorrect: false
      },
      {
        textoRespuesta: 'QNH, Código transponder, estado de las ayudas a la aproximación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Código transponder, QNH, autorización de despegue, instrucciones de velocidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'QNH, información meteorológica, pista en uso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - ¿Cual de estas frases significa "Squawk 1234"?',
    opciones: [
      {
        textoRespuesta: 'Realice prueba de radio en 123,4 MHz',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantenga escucha en 123,4 MHz',
        isCorrect: false
      },
      {
        textoRespuesta: 'Selecte código 1234 en el SSR (transponder)',
        isCorrect: true
      },
      {
        textoRespuesta: 'Realice una llamada corta para radiogoniometría (DF)',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - Cual es la forma correcta de transmitir el numero 3500 cuando se indica una altitud o altura?',
    opciones: [
      {
        textoRespuesta: 'Tres mil quinientos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tres cinco cero cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tres quinientos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tres cinco doble cero',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7 - Una aeronave es autorizada a mantener corto de la pista en uso. ¿Cual es la fraseología correcta para indicar que se cumplirá dicha instrucción?',
    opciones: [
      {
        textoRespuesta: 'Recibido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pararemos antes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Comprendido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener corto',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '8 - ¿Cuál es el código Q para “marcación verdadera desde la emisora?',
    opciones: [
      {
        textoRespuesta: 'QFE',
        isCorrect: false
      },
      {
        textoRespuesta: 'QDM',
        isCorrect: false
      },
      {
        textoRespuesta: 'QTE',
        isCorrect: true
      },
      {
        textoRespuesta: 'QDR',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
