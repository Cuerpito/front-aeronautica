const preguntas = [
  {
    titulo: '1 - ¿Mensajes SAFETY que tipo de mensajes son?',
    opciones: [
      {
        textoRespuesta: 'mensajes de socorro',
        isCorrect: false
      },
      {
        textoRespuesta: 'mensajes de control de trafico',
        isCorrect: false
      },
      {
        textoRespuesta: 'mensajes de seguridad a aeronaves en vuelo o a personas',
        isCorrect: true
      },
      {
        textoRespuesta: 'mensajes de urgencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - Qué significa el termino QDR?',
    opciones: [
      {
        textoRespuesta: 'Marcación magnética desde la estación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Rumbo verdadero hacia la estación (sin viento)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rumbo magnético hacia la estación (sin viento)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Marcación verdadera desde la estación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Cual de las siguientes frases describe mejor el termino "Mantenga escucha (standby)?',
    opciones: [
      {
        textoRespuesta: 'Espere y le llamaré',
        isCorrect: true
      },
      {
        textoRespuesta: 'Continúe en el rumbo actual y escuche',
        isCorrect: false
      },
      {
        textoRespuesta: 'Seleccione STANDBY en el transpondedor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permiso concedido para la acción propuesta',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '4 - Si todos los intentos para establecer contacto radio con una estación de tierra fallan, el piloto de una aeronave debería transmitir los mensajes precedidos por la siguiente frase',
    opciones: [
      {
        textoRespuesta: 'PAN PAN, PAN PAN, PAN PAN',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transmitiendo a ciegas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Le recibo uno, le recibo uno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Como me recibe?',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - ¿Cuál de las siguientes abreviaturas del indicativo de llamada Cherokee XY-ABC es correcto?',
    opciones: [
      {
        textoRespuesta: 'Cherokee XY-BC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cherokee X-ABC',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cherokee X-BC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cherokee X-AB',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - ¿Cual es la forma correcta de expresar la visibilidad?',
    opciones: [
      {
        textoRespuesta: 'Visibilidad 1.200 metros',
        isCorrect: true
      },
      {
        textoRespuesta: 'Visibilidad 1.200 pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'Visibilidad 1,2 millas náuticas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Visibilidad 1,2 kilometros',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - ¿Qué significa la abreviatura "HX"?',
    opciones: [
      {
        textoRespuesta: 'Ningunas horas de trabajo específicas.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Desde la salida del sol a puesta del sol.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desde la puesta del sol a salida del sol.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Día continuado y servicio nocturno.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - ¿Qué significa tener una buena técnica al micrófono?',
    opciones: [
      {
        textoRespuesta: 'Usar un tono de conversación normal, hablando con claridad y buena pronunciación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hablar en un tono muy elevado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizar a menudo muletillas del tipo "em”',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener el micrófono bien alejado de la boca ya que así se mejora la facilidad de comprensión',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
