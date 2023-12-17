const preguntas = [
  {
    titulo: '1 - ¿Cómo dirá un piloto "He comprendido su mensaje procederé"?',
    opciones: [
      {
        textoRespuesta: 'Roger',
        isCorrect: false
      },
      {
        textoRespuesta: 'Wilco',
        isCorrect: true
      },
      {
        textoRespuesta: 'Recibido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Recibido, procederé',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - ¿Qué significa AFIS?',
    opciones: [
      {
        textoRespuesta: 'Servicio automático de información.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Servicio de información de vuelo de aeródromo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Área fija de información.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son falsas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Si el fallo es de recepción, puede que el problema venga de los altavoces ¿Cómo descubriremos esto?',
    opciones: [
      {
        textoRespuesta:
          'Si no recibimos ningún tipo de comunicación incluyendo los indicativos morse de las radioayudas, podemos sospechar fallo del altavoz',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizando los auriculares',
        isCorrect: false
      },
      {
        textoRespuesta: 'La a) y b) son s',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4 - ¿Qué significa una luz verde fija para un avión en tierra?',
    opciones: [
      {
        textoRespuesta: 'Autorizado a rodar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorizado a aparcar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorizado a despegar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Apártese del área de aterrizaje en uso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Diga ¿qué afirmación es correcta respecto a las ondas HF?',
    opciones: [
      {
        textoRespuesta: 'Tienen propagación estable aunque sujeta a variaciones de la ionosfera.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Empeora su recepción durante el día.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las ondas HF se reflejan en la ionosfera.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son s.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6 - La abreviatura “AIREP” significa',
    opciones: [
      {
        textoRespuesta: 'Red de comunicaciones aeronáuticas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Servicio de comunicaciones aeronáuticas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ruta de servicio de asesoramiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeronotificación (en forma oral).',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7 - ¿Cómo se llama el mando mediante el cual ajustamos la máxima recepción sin que aparezcan ruidos parásitos?',
    opciones: [
      {
        textoRespuesta: 'Squelch',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sintonizador',
        isCorrect: false
      },
      {
        textoRespuesta: 'IDrtf',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inhibidor de frecuencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Una aeronave en emergencia transmite en transponder a',
    opciones: [
      {
        textoRespuesta: '7500',
        isCorrect: false
      },
      {
        textoRespuesta: '6700',
        isCorrect: false
      },
      {
        textoRespuesta: '7600',
        isCorrect: false
      },
      {
        textoRespuesta: '7700',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
