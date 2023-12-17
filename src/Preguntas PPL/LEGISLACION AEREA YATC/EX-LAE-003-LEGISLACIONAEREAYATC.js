const preguntas = [
  {
    titulo: '1 - Las luces del extremo de pista han de ser:',
    opciones: [
      {
        textoRespuesta: 'Luces fijas rojas unidireccionales en la dirección de la pista',
        isCorrect: true
      },
      {
        textoRespuesta: 'Luces con destellos rojas en la dirección de la pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'Luces fijas rojas bidireccionales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Luces verdes con destellos rojos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - Uno de los principales objetivos de OACI es:',
    opciones: [
      {
        textoRespuesta: 'Aprobar nuevas compañías aéreas internacionales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aprobar nuevas compañías aéreas operadoras de reactores comerciales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aprobar las tarifas fijadas por las compañías aéreas internacionales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desarrollar las técnicas y principios aeronáuticos rectores a nivel internacional',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - Para indicar al piloto que active los frenos, el encargado de señales:',
    opciones: [
      {
        textoRespuesta: 'Dedos extendidos, mano hacia abajo, palma hacia atrás, cerrar los dedos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dedos extendidos, mano frente al torso, palma hacia dentro, cerrar los dedos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dedos extendidos, mano en alto, palma hacia atrás, cerrar los dedos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dedos extendidos, mano frente a la cara, palma hacia dentro, cerrar los dedos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Se entiende por Centro de Servicios de Tráfico Aéreo:',
    opciones: [
      {
        textoRespuesta: 'Los centros de información de vuelo y las oficinas de notificación de los servicios de tránsito aéreo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los centros de control de tráfico aéreo y los centros de información de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los centros de control de tráfico aéreo y las oficinas de notificación de los servicios de tránsito aéreo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los centros de control de tráfico aéreo, los centros de información de vuelo o las oficinas de notificación de los servicios de tránsito aéreo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5 - Para acusar recibo de las instrucciones de ajuste de modo y código el piloto deberá:',
    opciones: [
      {
        textoRespuesta: 'Emplear solo la palabra "recibido” ROGER',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizar solo la palabra "comprendido” WILCO',
        isCorrect: false
      },
      {
        textoRespuesta: 'Confirmar solo el código que se debe ajustar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Confirmar el modo y el código que se debe ajustar',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6 - ¿Cuántas luces tiene el VASIS en cada barra de ala?',
    opciones: [
      {
        textoRespuesta: '3',
        isCorrect: true
      },
      {
        textoRespuesta: '4',
        isCorrect: false
      },
      {
        textoRespuesta: '5',
        isCorrect: false
      },
      {
        textoRespuesta: '2',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - La distancia de despegue TODA es:',
    opciones: [
      {
        textoRespuesta:
          'La longitud de carrera de despegue disponible más la longitud despejada de obstáculos disponible cuando proceda.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La longitud de carrera de despegue disponible más la longitud de la zona de parada.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La longitud de la pista disponible más la longitud despejada de obstáculos disponible cuando proceda.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La longitud de la carrera de despegue disponible más las longitudes de las zonas de parada y de área despejada de obstáculos cuando proceda.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '8 - El “Código de Referencia Aeroportuaria” es un código compuesto por dos elementos relacionados con las dimensiones y con las características de las prestaciones del avión. Estos elementos son combinaciones de letra y numero como se refleja en el siguiente:',
    opciones: [
      {
        textoRespuesta: '2B',
        isCorrect: true
      },
      {
        textoRespuesta: '6D',
        isCorrect: false
      },
      {
        textoRespuesta: '4G',
        isCorrect: false
      },
      {
        textoRespuesta: '5E',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - Como hace el control para identificar una aeronave (radar)',
    opciones: [
      {
        textoRespuesta: 'pasando de ON a STBY y vuelta a ON',
        isCorrect: true
      },
      {
        textoRespuesta: 'pasando de STBY a ON',
        isCorrect: false
      },
      {
        textoRespuesta: 'poniendo en off',
        isCorrect: false
      },
      {
        textoRespuesta: 'poniendo en test',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - En que sección del AIP acudiremos para encontrar información relativa a Sigmet',
    opciones: [
      {
        textoRespuesta: 'AD',
        isCorrect: false
      },
      {
        textoRespuesta: 'ENR',
        isCorrect: false
      },
      {
        textoRespuesta: 'MET',
        isCorrect: false
      },
      {
        textoRespuesta: 'GEN',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11 - Una bengala roja lanzada hacia un avión en vuelo significa:',
    opciones: [
      {
        textoRespuesta: 'Vuelva y aterrice.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No aterrice.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A pesar de las órdenes previas, no aterrice de momento.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Deje paso a otro tráfico y manténgase volando en el circuito de espera.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Los centros que proporcionan servicios de trafico aéreo son:',
    opciones: [
      {
        textoRespuesta:
          'Centro de Control de Área – Centro de Asesoramiento – Centro de Información de Vuelo – Unidad de Control de Aproximaciones y Torre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro de Control de Área – Región de Información de Vuelo – Unidad de Control de Aproximaciones y Torre.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Centro de Control de Área – Centro de Información de Vuelo – Unidad de Control de Aproximaciones – Torre de Control del Aeródromo y oficina de notificación de los Servicios de Transito Aéreo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Centro de Control de Área – Unidad de Control de Aproximaciones y Torre de Control del Aeródromo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - Las siglas PAPI se corresponden con:',
    opciones: [
      {
        textoRespuesta: 'Indicador de Senda de Aproximación de Precisión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Índice de Senda de Aproximación de Precisión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Índice de Potencia de Aproximación de Precisión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicador de Potencia de Aproximación de Precisión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - Una llamada por radio comunicando “Socorro” no es lo mismo que si comunica “Urgencia”, ya que en el primer caso:',
    opciones: [
      {
        textoRespuesta: 'La seguridad del avión y/o de sus pasajeros requiere aterrizar de inmediato.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Existe un peligro serio e inminente que precisa ayuda inmediata.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El avión ha sufrido daños que afectan a su capacidad de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión no podrá alcanzar un aeropuerto adecuado.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '15 - Una noticia conteniendo información de normas del Aire, Servicio de Trafico Aéreo y Procedimientos de Navegación Aérea se distribuye antes de la fecha efectiva de entrada en vigor en:',
    opciones: [
      {
        textoRespuesta: 'NOTAN ATS.',
        isCorrect: false
      },
      {
        textoRespuesta: 'ADVISORY NOTAN.',
        isCorrect: false
      },
      {
        textoRespuesta: 'AIRAC.',
        isCorrect: true
      },
      {
        textoRespuesta: 'NOTAN RAC.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - La fase de alerta se define como:',
    opciones: [
      {
        textoRespuesta: 'Aquella situación de emergencia en la que se considere amenazada la seguridad del avión y de sus ocupantes.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aquella situación relativa a un avión que informe haber agotado el combustible.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aquella situación en la que se ponga en cuestión la seguridad del avión y de sus ocupantes.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aquella situación que suponga un estado de emergencia para el avión y/o sus ocupantes.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
