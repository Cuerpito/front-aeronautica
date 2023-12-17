const preguntas = [
  {
    titulo: '1 - ¿Cuándo debe activarse el modo IDENT del transpondedor?',
    opciones: [
      {
        textoRespuesta: 'Cuando no se consigue una identificación clara en radar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando lo ordena el ATC',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando el piloto lo considera conveniente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando proceda según lo recogido en JAR-OPS 1123',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - La categoría de aeródromo referente a su capacidad para el rescate y la lucha contra incendios se basa en:',
    opciones: [
      {
        textoRespuesta:
          'La longitud total del avión más largo que suela utilizar el aeropuerto, así como la máxima anchura de su fuselaje',
        isCorrect: true
      },
      {
        textoRespuesta: 'Exclusivamente en base a la máxima anchura del avión más largo',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La longitud total del avión más largo que suela utilizar el aeropuerto, así como el máximo peso de su fuselaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'La longitud total del avión más largo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - En el sistema “VASIS”, cuántos focos luminosos hay en cada barra lateral?',
    opciones: [
      {
        textoRespuesta: '2 (dos)',
        isCorrect: false
      },
      {
        textoRespuesta: '3 (tres)',
        isCorrect: true
      },
      {
        textoRespuesta: '5 (cinco)',
        isCorrect: false
      },
      {
        textoRespuesta: '4 (cuatro)',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - El servicio de control de tránsito aéreo se presta con el fin de:',
    opciones: [
      {
        textoRespuesta: 'Evitar las colisiones entre todos los aviones despachando ordenadamente el flujo del tráfico aéreo',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aplicar los criterios de separación entre aviones despachando y manteniendo el flujo ordenado del tráfico aéreo',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Prevenir colisiones entre aviones, así como entre aviones y obstáculos en el área de maniobras despachando y manteniendo un flujo ordenado de tráfico aéreo',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Prevenir las colisiones entre tráficos aéreos controlados, despachando y manteniendo un flujo ordenado del tráfico aéreo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - En qué parte del AIP podemos encontrar información referente a meteorología:',
    opciones: [
      {
        textoRespuesta: 'GEN',
        isCorrect: true
      },
      {
        textoRespuesta: 'MET',
        isCorrect: false
      },
      {
        textoRespuesta: 'RAC',
        isCorrect: false
      },
      {
        textoRespuesta: 'ENR',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6 - En las reglas de vuelo visual, salvo que se obtenga autorización por parte de un centro ATC, un vuelo VFR no despegará o aterrizará en un aeródromo dentro de la CTR, o entrada en circuito de tráfico o zona del aeródromo cuando:',
    opciones: [
      {
        textoRespuesta: 'El techo es menor de 1000 pies o visibilidad inferior a 5 km.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El techo es menor de 1500 pies o visibilidad inferior a 5 km.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El techo es menor de 2000 pies o visibilidad inferior a 5 km.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El techo es menor de 1000 pies o visibilidad inferior a 8 km.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7 - ¿Qué quiere decir la orden del control de salidas “vuelva a navegación propia” una vez vectorizado hacia una aerovía?',
    opciones: [
      {
        textoRespuesta: 'El servicio radar ha concluido.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ATC no emitirá más avisos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continúa en contacto radar y deberá informar de su posición.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deberá mantenerse en las mismas utilizando el equipo de navegación de a bordo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '8 - Una llamada por radio de socorro no es lo mismo que al comunicar urgencia, ya que en el primer caso:',
    opciones: [
      {
        textoRespuesta: 'La seguridad del avión y/o sus pasajeros requieren aterrizar de inmediato',
        isCorrect: false
      },
      {
        textoRespuesta: 'Existe un  peligro serio e inminente que precisa ayuda inmediata',
        isCorrect: true
      },
      {
        textoRespuesta: 'El avión ha sufrido daños que afectan a su capacidad de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión no podrá alcanzar un aeropuerto adecuado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - La zona STOPWAY sirve para:',
    opciones: [
      {
        textoRespuesta: 'El avión despegando o aterrizando pueda detenerse',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el avión pueda detenerse tras abortar el despegue',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que el avión se detenga al aterrizar si sobrepasa el extremo de pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el avión se detenga al aterrizar exclusivamente en caso de emergencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - Las luces de eje de calle de rodaje son:',
    opciones: [
      {
        textoRespuesta: 'luces de color rojo',
        isCorrect: false
      },
      {
        textoRespuesta: 'luces de color verde',
        isCorrect: true
      },
      {
        textoRespuesta: 'luces de color azul',
        isCorrect: false
      },
      {
        textoRespuesta: 'luces de color amarillo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - ¿Cuál de los siguientes vuelos tiene una prioridad mayor para aterrizar?',
    opciones: [
      {
        textoRespuesta: 'Trafico en situación de emergencia.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Trafico VIP (Jefe de Estado a bordo).',
        isCorrect: false
      },
      {
        textoRespuesta: 'Avión hospital transportando enfermo(s) grave(s) que precise(n) asistencia medica inmediata.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trafico militar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - Todo aviso conteniendo información relativa a seguridad en vuelo, navegación aérea, o a cualquier asunto de naturaleza técnica, administrativa o legal, y que tenga por origen el AIS de cualquier estado se denomina:',
    opciones: [
      {
        textoRespuesta: 'AIRAC.',
        isCorrect: false
      },
      {
        textoRespuesta: 'NOTAM.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Circular Informativa Aeronáutica (AI.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Publicación sobre Información Aeronáutica (AIP).',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - Salvo que se trate de una calle de salida, las luces centrales de una calle de rodadura deberán ser:',
    opciones: [
      {
        textoRespuesta: 'Azules fijas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Verdes fijas.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Amarillas fijas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Blancas fijas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - International Civil Aviation Organization (ICAO) quedo establecida en la convención de:',
    opciones: [
      {
        textoRespuesta: 'Montreal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Chicago',
        isCorrect: true
      },
      {
        textoRespuesta: 'La Haya',
        isCorrect: false
      },
      {
        textoRespuesta: 'Varsovia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15 - Los mínimos de VMC para vuelos VFR en espacios aéreos de clase B por encima de 3.050 m (10.000 ft) AMSL, son:',
    opciones: [
      {
        textoRespuesta: '8 Km. De visibilidad, a una distancia de las nubes de 1.500 m en horizontal y 1.000 ft en vertical.',
        isCorrect: true
      },
      {
        textoRespuesta: '8 Km. De visibilidad y cielo despejado.',
        isCorrect: false
      },
      {
        textoRespuesta: '5 Km. De visibilidad, a una distancia de las nubes de 1.500 m en horizontal y 1.000 ft en vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'No hay mínimos los vuelos VFR no están permitidos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - Al rellenar un plan de vuelo ATC el tiempo transcurrido (punto 16) de 1 hora y 55 minutos debe introducirse como:',
    opciones: [
      {
        textoRespuesta: '1H55',
        isCorrect: false
      },
      {
        textoRespuesta: '115M',
        isCorrect: false
      },
      {
        textoRespuesta: '115',
        isCorrect: false
      },
      {
        textoRespuesta: '0155',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
