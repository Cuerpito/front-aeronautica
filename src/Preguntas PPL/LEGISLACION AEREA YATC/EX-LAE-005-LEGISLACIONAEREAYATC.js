const preguntas = [
  {
    titulo:
      '1 - La zona de parada (“STOP WAY”) es un área de terreno definida y rectangular dispuesta al final de la carrera de despegue disponible y preparada para que:',
    opciones: [
      {
        textoRespuesta: 'Un avión pueda detenerse –exclusivamente- tras aterrizar en situación de emergencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un avión  pueda detenerse tras sobrepasar -en el aterrizaje- el extremo de pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un avión -en maniobra de despegue o aterrizaje- pueda detenerse',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un avión pueda detenerse tras abortar el despegue',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '2 - Si durante la intercepción se establece contacto por radio pero no es posible utilizar un lenguaje común, ¿Qué deberá pronunciar el avión interceptado para comunicar que no puede cumplir las instrucciones recibidas?:',
    opciones: [
      {
        textoRespuesta: 'NO PUEDO CUMPLIRLO',
        isCorrect: false
      },
      {
        textoRespuesta: 'NO ES POSIBLE',
        isCorrect: false
      },
      {
        textoRespuesta: 'INCAPAZ DE CUMPLIRLO',
        isCorrect: false
      },
      {
        textoRespuesta: 'NO PUEDO',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '3 - ¿Qué debería hacer un piloto de avión para alertar de sus problemas de comunicación por radio si se ve obligado a aterrizar sin requerir ayuda inmediata?',
    opciones: [
      {
        textoRespuesta: 'Responder clase A/7500',
        isCorrect: false
      },
      {
        textoRespuesta: 'Responder clase A/7700',
        isCorrect: false
      },
      {
        textoRespuesta: 'Encender y apagar repetidamente las luces de aterrizaje',
        isCorrect: true
      },
      {
        textoRespuesta: 'Volar sin la luz anticolisión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Las unidades responsables de fomentar una organización eficaz de los servicios de búsqueda y salvamento son:',
    opciones: [
      {
        textoRespuesta: 'El centro de coordinación de rescate y los subcentros de salvamento',
        isCorrect: true
      },
      {
        textoRespuesta: 'El centro de alerta y el centro de coordinación de salvamento',
        isCorrect: false
      },
      {
        textoRespuesta: 'El centro de información de vuelos y el centro de coordinación de salvamento',
        isCorrect: false
      },
      {
        textoRespuesta: 'El centro de control de área, el centro de información de vuelos y el centro de coordinación de salvamento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Se denomina área de control (CTA) a:',
    opciones: [
      {
        textoRespuesta: 'Un espacio aéreo controlado que se extiende hacia arriba desde un límite especificado sobre la tierra.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un espacio aéreo controlado que se extiende hacia arriba desde la superficie de la tierra hasta un límite especificado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un espacio aéreo controlado que se extiende hacia arriba desde una altura de 1000 pies sobre la tierra.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un espacio aéreo controlado que se extiende hacia arriba desde una altura de 900 pies sobre la tierra.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6 - Rodando por la plataforma, el avión mete la rueda en la hierba causando serios daños estructurales al avión, ¿qué debe hacer el piloto?',
    opciones: [
      {
        textoRespuesta: 'Nada, porque es un incidente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al ser un accidente, el piloto al mando deberá seguir los pasos previstos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Deberá aplicar potencia a fondo para sacar el avión de esta situación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Esperar a que le remolquen al hangar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - ¿Qué significado tiene una bengala roja en vuelo?',
    opciones: [
      {
        textoRespuesta: 'A pesar de las instrucciones anteriores no aterrice por ahora.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Autorizado a aterrizar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorizado a despegar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Regrese a este aeródromo y diríjase a la plataforma.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - El límite inferior del área de control deberá fijarse a una altura sobre el nivel del suelo no inferior a:',
    opciones: [
      {
        textoRespuesta: '500 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '150 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '200 m.',
        isCorrect: true
      },
      {
        textoRespuesta: '300 m.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - La zona despejada de obstáculos en un área definida y rectangular, tiene por objeto:',
    opciones: [
      {
        textoRespuesta: 'Permitir que un avión realice parte de su ascenso inicial hasta una altura determinada',
        isCorrect: true
      },
      {
        textoRespuesta: 'Permitir que un avión pueda detenerse tras haber abortado el despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducir el riesgo de daños a los aviones que salen de la pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proteger a los aviones en las maniobras de despegue o aterrizaje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - Un avión en rodaje por el área de maniobras del aeródromo debe ceder el paso a:',
    opciones: [
      {
        textoRespuesta: 'A todos los vehículos que  circulan por la plataforma a excepción de los "follow me"',
        isCorrect: false
      },
      {
        textoRespuesta: 'Otros vehículos y peatones.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aviones despegando o disponiéndose a despegar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Otros tráficos convergentes',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11 - Una desviación de la TAS, con respecto a la consignada en el plan de vuelo, deberá ser notificada cuando sea superior al:',
    opciones: [
      {
        textoRespuesta: '3%.',
        isCorrect: false
      },
      {
        textoRespuesta: '5%.',
        isCorrect: true
      },
      {
        textoRespuesta: '7%.',
        isCorrect: false
      },
      {
        textoRespuesta: '10%.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Las luces de alta intensidad indicadoras de obstáculos han de ser:',
    opciones: [
      {
        textoRespuesta: 'Anaranjadas fijas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rojas intermitentes.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rojas fijas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Blancas intermitentes.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '13 - ¿Que deberá hacer el piloto de un avión en el circuito de tráfico de un aeropuerto para alertar de sus problemas de comunicación por radio si se ve obligado a aterrizar sin requerir ayuda inmediata?:',
    opciones: [
      {
        textoRespuesta: 'Encender y apagar repetidamente las luces de aterrizaje.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Encender y apagar –tres veces- las luces de aterrizaje.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Encender y apagar –cuatro veces- las luces de aterrizaje.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Encender y apagar –cuatro veces- las luces de navegación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - Las luces de borde de pista, excepto en el caso de un desplazamiento del umbral, deben ser:',
    opciones: [
      {
        textoRespuesta: 'Luces blancas fijas de intensidad variable',
        isCorrect: true
      },
      {
        textoRespuesta: 'Luces fijas de color blanco o amarillo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Luces fijas blancas o amarillas de intensidad variable',
        isCorrect: false
      },
      {
        textoRespuesta: 'Luces blancas intermitentes',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15 - Los mínimos de VMC para vuelos VFR en espacio aéreo B, sobre 3050 m (10.000 ft) AMSL son:',
    opciones: [
      {
        textoRespuesta: '5 km de visibilidad, distancia hasta las nubes de 1500 m en horizontal, 1000 ft en vertical',
        isCorrect: false
      },
      {
        textoRespuesta: '8 km de visibilidad, distancia hasta las nubes de 1500 m en horizontal, 1000 ft en vertical',
        isCorrect: true
      },
      {
        textoRespuesta: '8 km de visibilidad y libre de nubes',
        isCorrect: false
      },
      {
        textoRespuesta: 'No existen mínimos, los vuelos VFR no se permiten',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '16 - Referente a un plan de vuelo ATC, en caso de retraso de un vuelo controlado, el plan de vuelo transmitido debe ser enmendado o cancelado y emitido un nuevo plan de vuelo se debe transmitir cuando el retraso es superior a:',
    opciones: [
      {
        textoRespuesta: '30 min. del tiempo estimado de fuera calzas (EOBT)',
        isCorrect: true
      },
      {
        textoRespuesta: '30 min. del tiempo estimado de partida',
        isCorrect: false
      },
      {
        textoRespuesta: '60 min. del tiempo estimado de fuera calzos (EOBT)',
        isCorrect: false
      },
      {
        textoRespuesta: '60 min. del tiempo de partida',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
