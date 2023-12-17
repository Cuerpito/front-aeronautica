const preguntas = [
  {
    titulo: '1 - Los mensajes de Aeronotificación constan de:',
    opciones: [
      {
        textoRespuesta:
          'Informe de posición, información operacional e información meteorológica a petición del servicio meteorológico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Información operacional y meteorológica a petición, sin informe de posición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Informe de viento en altura, turbulencia, temperatura y hora prevista de llegada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Informe de autonomía, hora precisa de llegada e informe operacional',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '2 - En un aeropuerto con las comunicaciones muy congestionadas ¿Qué medida tomaría para no entorpecer las mismas a la hora de recibir una autorización?',
    opciones: [
      {
        textoRespuesta: 'Memorizar la autorización para colacionarla mente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Anotar la autorización para luego no tener dudas a la hora de colacionarla',
        isCorrect: true
      },
      {
        textoRespuesta: 'No colacionar ninguna autorización',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Evitar pedir autorización para rodar Rodaremos directamente y nos pararemos en el punto de espera de la pista en servicio',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Recibes una orden de llamar a TORRE en 118,7 y eres el XBC; como realizaras la colación',
    opciones: [
      {
        textoRespuesta: 'Llamaré',
        isCorrect: false
      },
      {
        textoRespuesta: '118,7 XBC',
        isCorrect: true
      },
      {
        textoRespuesta: 'contactaré',
        isCorrect: false
      },
      {
        textoRespuesta: 'gracias llamaré',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - La prioridad del siguiente mensaje "Requerimos QDM" es',
    opciones: [
      {
        textoRespuesta: 'Menor que "Requerimos ascender al nivel..."',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor que "Requerimos descender hasta el nivel..."',
        isCorrect: false
      },
      {
        textoRespuesta: 'Igual que "ultimo QNH 1018"',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor que "Vire a la izquierda"',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5 - Mi mensaje será más efectivo y comprensible si',
    opciones: [
      {
        textoRespuesta: 'Utilizo el método de palabras duplicadas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Enfatizo el final del mensaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Enfatizo el comienzo del mensaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantengo un volumen de habla constante',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '6 - ¿A que banda pertenece el entorno de frecuencias comprendido entre 118.000 - 136.975 MHz del Servicio Aeronáutico Móvil?',
    opciones: [
      {
        textoRespuesta: 'Very high frequency (VHF)',
        isCorrect: true
      },
      {
        textoRespuesta: 'Very low frequency (VLF)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Low frequency (LF)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Medium frequency (MF)',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - ¿Qué código Q se usa para reportar la altitud?',
    opciones: [
      {
        textoRespuesta: 'QNH',
        isCorrect: true
      },
      {
        textoRespuesta: 'QDM',
        isCorrect: false
      },
      {
        textoRespuesta: 'QSI',
        isCorrect: false
      },
      {
        textoRespuesta: 'QFE',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Cómo transmitir 1001 como QNH',
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
  }
];

export default preguntas;
