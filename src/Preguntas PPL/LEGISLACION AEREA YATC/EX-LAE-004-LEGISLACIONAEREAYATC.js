const preguntas = [
  {
    titulo: '1 - Referencia de aeródromo por categoría',
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
    titulo:
      '2 - ¿Cuál de las siguientes medidas deberán adoptarse en caso de que un avión en vuelo controlado se desvié de la derrota autorizada?:',
    opciones: [
      {
        textoRespuesta: 'Informar de inmediato al centro ATC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si se vuela en VMC, mantener dicho estado y permanecer a la espera de recibir ordenes del ATC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ajustar el rumbo del avión para recuperar su antigua derrota lo antes posible',
        isCorrect: true
      },
      {
        textoRespuesta: 'Notificar de inmediato la nueva derrota al ATC y cumplir sus ordenes',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '3 - Todo aviso conteniendo información relativa a la seguridad en vuelo, Navegación Aérea o cualquier otro asunto de naturaleza técnica, administrativa o legal, que tenga su origen en el AIS, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Circular Informativa Aeronáutica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Notam',
        isCorrect: false
      },
      {
        textoRespuesta: 'Enmienda AIP',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '4 - Salvo que se obtenga autorización por un centro ATC un vuelo VFR no podrá acceder (ni abandonar), una zona de control con unas condiciones inferiores a:',
    opciones: [
      {
        textoRespuesta: '10000 ft de techo y 8 Km de visibilidad',
        isCorrect: false
      },
      {
        textoRespuesta: '10000 ft de techo y 5 Km de visibilidad',
        isCorrect: false
      },
      {
        textoRespuesta: '1500 ft de techo y 5 Km de visibilidad',
        isCorrect: true
      },
      {
        textoRespuesta: '1500 ft de techo y 8 Km de visibilidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - El servicio de alerta se prestará:',
    opciones: [
      {
        textoRespuesta: 'Exclusivamente a los aviones que se preste servicios de control de tráfico aéreo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'A todos los vuelos controlados, a todo avión que se le sepa- o suponga- sujeto a interferencias ilegales, y en la medida de todo lo posible a cualquier avión que haya cumplimentado un plan de vuelo o en caso contrario que sea conocido por el ATS.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Exclusivamente a cualquier avión que se le sepa – o suponga- sujeto de interferencias legales.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En la medida de lo posible a cualquier avión que haya cumplimentado un plan de vuelo o que en caso contrario sea conocido por el ATS.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - Si queremos buscar información sobre zonas prohibidas en qué sección del AIP buscaremos:',
    opciones: [
      {
        textoRespuesta: 'ENR',
        isCorrect: true
      },
      {
        textoRespuesta: 'MAP',
        isCorrect: false
      },
      {
        textoRespuesta: 'AGA',
        isCorrect: false
      },
      {
        textoRespuesta: 'GEN',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7 - Cuando control da una instrucción a una aeronave y esta no puede cumplirla o la situación no aconseja que lo haga, la aeronave deberá:',
    opciones: [
      {
        textoRespuesta: 'Solicitar una nueva autorización más conveniente y esperar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cumplirla sin más.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No hacer caso de la autorización.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cumplirla y después formular una reclamación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Una cruz blanca doble dispuesta en el área de señales indica:',
    opciones: [
      {
        textoRespuesta: 'Planeadores en vuelo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Uso de pistas y calles de rodaje.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Prohibición de aterrizar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Área de maniobras inservible.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - El ATC que autorizaciones puede dar?',
    opciones: [
      {
        textoRespuesta: 'Proporciona separación entre vuelos controlados',
        isCorrect: true
      },
      {
        textoRespuesta: 'Proporciona separación entre vuelos IFR controlados',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporciona separación entre vuelos VFR',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporciona información a vuelos controlados y no controlados en espacio aéreo clase A',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - Que significa cuando en un aeródromo o espacio aéreo refleja las siguientes siglas HX.',
    opciones: [
      {
        textoRespuesta: 'Que no tiene horario',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el horario es de orto a ocaso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el horario es el horario de invierno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que no tiene horas determinadas de servicio',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11 - Una bengala roja hacia un avión significa:',
    opciones: [
      {
        textoRespuesta: 'Vuelva para aterrizar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeropuerto peligroso, no aterrice',
        isCorrect: false
      },
      {
        textoRespuesta: 'A pesar de las ordenes previas no aterrice de momento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Deje paso a otro tráfico y manténgase volando en circuito de espera',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - En caso de demora de un vuelo no controlado con plan de vuelo presentado, éste deberá corregirse por uno nuevo cuando:',
    opciones: [
      {
        textoRespuesta: 'La demora sea superior a 30 min. respecto a la hora prevista de salida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La demora sea superior a 60 min. respecto a la hora prevista de fuera calzos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La demora sea superior a 30 min. respecto a la hora prevista para la retirada de calzos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La demora sea superior a 60 min. respecto a la hora prevista para la salida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - El servicio de alerta lo proporciona:',
    opciones: [
      {
        textoRespuesta: 'Los centros de control de área.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La unidad ATS responsable del avión en ese momento.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Solamente las unidades ATC.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La unidad ATC responsable del avión en ese momento, si puede transmitir en 121,5 MHz.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - La persona con autoridad máxima sobre la disposición de un avión en vuelo es:',
    opciones: [
      {
        textoRespuesta: 'El operador del avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El controlador del ATC, si el avión vuela por un espacio aéreo controlado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El comandante.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El propietario del avión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '15 - De acuerdo con lo establecido en el Anexo 13 de la Convención de Chicago, ¿sobre quien recae la responsabilidad de iniciar las investigaciones posteriores a un accidente?:',
    opciones: [
      {
        textoRespuesta: 'El gobierno del país en el que se ha producido el accidente.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los operadores del mismo tipo de avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El fabricante del aparato.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La autoridad judicial del país de registro del avión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - En el código de referencia de aeródromo, el elemento código 2 identifica:',
    opciones: [
      {
        textoRespuesta: 'Solo la envergadura del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La anchura de las alas del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La longitud del fuselaje del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La envergadura del avión y la envergadura del tren principal',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
