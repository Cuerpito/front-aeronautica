const preguntas = [
  {
    titulo: '1 - Las horas comprendidas entre el fin del crepúsculo civil vespertino y el comienzo del matutino, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Día',
        isCorrect: false
      },
      {
        textoRespuesta: 'Noche',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tarde',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hora UTC',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - La operación de aeronave distinta de la de transporte aéreo comercial o de los trabajos aéreos es:',
    opciones: [
      {
        textoRespuesta: 'Operación de la aviación de aeroclub',
        isCorrect: false
      },
      {
        textoRespuesta: 'Operación de la aviación particular',
        isCorrect: false
      },
      {
        textoRespuesta: 'Operación de la aviación general',
        isCorrect: true
      },
      {
        textoRespuesta: 'Operación de la aviación privada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - El piloto al mando será responsable de comprobar antes de despegar que:',
    opciones: [
      {
        textoRespuesta: 'El centro de gravedad está entre los límites',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión tiene en vigor el certificado de aeronavegabilidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los instrumentos necesarios para el vuelo funcionan mente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas son s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4 - Cuales son las reservas de combustible y aceite mínimas que se especifican en el anexo 6 Parte II',
    opciones: [
      {
        textoRespuesta:
          'Cuando no se requiere aeródromo de alternativa: volar hasta el aeródromo donde se proyecta el vuelo y después 45 minutos más',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando se requiera aeródromo de alternativa: volar al aeródromo donde se proyecta el vuelo y desde allí al de alternativa y después 45 minutos más',
        isCorrect: false
      },
      {
        textoRespuesta: 'b y a son s',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas las falsas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Antes de arrancar el motor:',
    opciones: [
      {
        textoRespuesta: 'Miraremos que la presión de aceite es la',
        isCorrect: true
      },
      {
        textoRespuesta: 'Gritaremos "Libre" a la vez que verificamos que no hay nadie cerca de la hélice',
        isCorrect: true
      },
      {
        textoRespuesta: 'Pediremos permiso de rodaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'La A y la B son s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6 - Con una componente en cara lateral derecha de 5 Kt tras un avión en despegue:',
    opciones: [
      {
        textoRespuesta: 'La turbulencia de estela derecha permanece aproximadamente sobre la pista',
        isCorrect: true
      },
      {
        textoRespuesta: 'No habrá turbulencias peligrosas sobre la pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'La turbulencia de estela izquierda permanece aproximadamente sobre la pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'La turbulencia de estela derecha e izquierda permanecen aproximadamente sobre la pista',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7 - ¿Cuál de los siguientes juegos de condiciones es el que tiene más probabilidades de atraer las aves hacia un aeropuerto?',
    opciones: [
      {
        textoRespuesta: 'Segado y mantenimiento de la hierba alta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un vertedero de basura en las proximidades',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un colector moderno de aguas residuales en las proximidades',
        isCorrect: false
      },
      {
        textoRespuesta: 'La extracción de minerales tales como arena y grava',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Dentro del código de señales visuales tierra/aire utilizable por los supervivientes, un símbolo V significa:',
    opciones: [
      {
        textoRespuesta: 'Necesitamos alimentos',
        isCorrect: false
      },
      {
        textoRespuesta: 'No o negativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si o positivo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Necesitamos ayuda',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '9 - Tras el aterrizaje, mientras rueda hacía la plataforma su aeronave introduce una de las ruedas del tren de aterrizaje en un agujero. No hay heridos, pero la aeronave sufre daños importantes que obligan a cancelar el vuelo posterior',
    opciones: [
      {
        textoRespuesta: 'Como no hay personas heridas y el vuelo ha concluido se debe rellenar un informe para la compañía de seguros',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es una irregularidad en la operación la tripulación debe informar al Operador del Aeródromo y realizar un informe',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es un accidente y la tripulación debe seguir el procedimiento indicado para este caso',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Es un incidente y el Piloto al Mando debe notificarlo a la autoridad del aeropuerto en las siguientes 48 horas',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '10 - Todos los miembros de la tripulación mantendrán abrochados sus cinturones de seguridad mientras estén en sus puestos',
    opciones: [
      {
        textoRespuesta: 'Si',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sólo al despegue y al aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es opcional',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo en espacio turbulento',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11 - Todos los aviones en todos sus vuelos irán equipados con:\n1)\tUn botiquín adecuado de primeros auxilios.\n2)\tExtintores portátiles.\n3)\tCartas actualizadas para la ruta de vuelo.\n4)\tBrújula homologada de repuesto',
    opciones: [
      {
        textoRespuesta: '2 3 4',
        isCorrect: false
      },
      {
        textoRespuesta: '1 2 3',
        isCorrect: true
      },
      {
        textoRespuesta: '1 2 3 4',
        isCorrect: false
      },
      {
        textoRespuesta: '1 2 4',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - En espacio aéreo clase P que debemos hacer?',
    opciones: [
      {
        textoRespuesta: 'Podremos entrar pero con precaución',
        isCorrect: false
      },
      {
        textoRespuesta: 'Podremos entrar pero cumpliendo la restricción',
        isCorrect: false
      },
      {
        textoRespuesta: 'No entrar en dicho espacio aéreo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Podremos entrar pero bajo nuestra responsabilidad',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
