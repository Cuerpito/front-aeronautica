const preguntas = [
  {
    titulo:
      '1 - Todos los vuelos que realicen vuelos VFR llevarán:\n1)\tUna brújula magnética.\n2)\tUn reloj de precisión que indique las horas, minutos y segundos.\n3)\tUn indicador de velocidad.\n4)\tUn baroaltímetro de precisión',
    opciones: [
      {
        textoRespuesta: '1 2 3 4',
        isCorrect: true
      },
      {
        textoRespuesta: '1 2 3',
        isCorrect: false
      },
      {
        textoRespuesta: '2 3 4',
        isCorrect: false
      },
      {
        textoRespuesta: '1 3 4',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '2 - Todos los aviones que operen de noche deberán llevar:\n1)\tUn faro de aterrizaje.\n2)\tIluminación para los instrumentos de vuelo.\n3)\tUna linterna eléctrica para cada miembro de la tripulación.\n4)\tBengalas de color rojo.',
    opciones: [
      {
        textoRespuesta: '1 2 4 ',
        isCorrect: false
      },
      {
        textoRespuesta: '2 3 4 ',
        isCorrect: false
      },
      {
        textoRespuesta: '1 2 3 ',
        isCorrect: true
      },
      {
        textoRespuesta: '1 3 4 ',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Cuál es el equipo necesario para un vuelo nocturno',
    opciones: [
      {
        textoRespuesta: 'Una linterna para cada miembro de la tripulación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Iluminación de los instrumentos de vuelo que sean esenciales para la utilización segura del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un faro de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4 - El radiotransmisor de activación automática que da la posición del avión en caso de impacto es:',
    opciones: [
      {
        textoRespuesta: 'El GPS',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cualquier equipo de comunicaciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un equipo de navegación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se denomina ELBA o ELT',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '5 - A la hora de determinar las condiciones mínimas operativas de un aeropuerto deberá tenerse en consideración:\n1. Los equipos de navegación disponibles\n2. Las dimensiones y características de las pistas\n3. La composición de las tripulaciones de vuelo\n4. Los obstáculos en las áreas de aproximación y de aproximación frustrada\n5. Medios para determinar y comunicar las condiciones meteorológicas.\nLa combinación que reagrupa los enunciados correctos es:',
    opciones: [
      {
        textoRespuesta: '2 4 5',
        isCorrect: false
      },
      {
        textoRespuesta: '1 2 4 5',
        isCorrect: false
      },
      {
        textoRespuesta: '2 3 5',
        isCorrect: false
      },
      {
        textoRespuesta: '1 2 3 4 5',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '6 - El ángulo de cobertura de las luces blancas obligatorias de posición, que brillan continuamente en vuelo y que se encuentran en la parte trasera del avión, es:',
    opciones: [
      {
        textoRespuesta: '220º',
        isCorrect: false
      },
      {
        textoRespuesta: '140º',
        isCorrect: true
      },
      {
        textoRespuesta: '70º',
        isCorrect: false
      },
      {
        textoRespuesta: '110º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - En un aeródromo sin control quien es el responsable de la separación?',
    opciones: [
      {
        textoRespuesta: 'El piloto al mando',
        isCorrect: true
      },
      {
        textoRespuesta: 'El dueño del aeródromo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El que vaya delante en el circuito',
        isCorrect: false
      },
      {
        textoRespuesta: 'No existen aeródromos sin control',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Cual es la separación en pistas paralelas?',
    opciones: [
      {
        textoRespuesta: 'La separación será la que permitan las dimensiones donde se encuentre el aeropuerto',
        isCorrect: false
      },
      {
        textoRespuesta: 'La separación será de al menos 760 metros',
        isCorrect: true
      },
      {
        textoRespuesta: 'La separación será al menos 900 metros entre los ejes de las pistas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La separación será la que consideren oportuna las autoridades del país',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - Las horas comprendidas entre el fin del crepúsculo civil vespertino y el comienzo del matutino, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Noche',
        isCorrect: true
      },
      {
        textoRespuesta: 'Día',
        isCorrect: false
      },
      {
        textoRespuesta: 'Orto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ocaso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - La mayor estela turbulenta tiene lugar cuando el avión que la genera es:',
    opciones: [
      {
        textoRespuesta: 'Grande, pesado, a baja velocidad y en configuración limpia',
        isCorrect: true
      },
      {
        textoRespuesta: 'Grande, pesado, a alta velocidad en configuración full flap',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pequeño, ligero, a baja velocidad y en configuración limpia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pequeño, ligero, a alta velocidad en configuración full flap',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11 - De acuerdo al Documento 4444 de OACI, la separación mínima sin radar por estela turbulenta de 2 minutos se debe aplicar a:',
    opciones: [
      {
        textoRespuesta: 'Aeronave ligera aterrizando detrás de una aeronave media',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeronave media aterrizando detrás de una aeronave pesada',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Aeronave media despegando detrás de una aeronave pesada desde una parte intermedia de una pista paralela separada por menos de 760m',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeronave ligera despegando detrás de una aeronave media desde una parte Intermedia de la misma pista',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - Con temperatura ambiental alta (+30°) y con humedad relativa baja del 40% en aire libre de nubes, niebla o precipitación, el engelamiento fuerte en el carburador:',
    opciones: [
      {
        textoRespuesta: 'Es posible a cualquier posición de gases',
        isCorrect: false
      },
      {
        textoRespuesta: 'No puede ocurrir',
        isCorrect: true
      },
      {
        textoRespuesta: 'Puede ocurrir pero solo con bajas potencias',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede ocurrir pero solo a máxima potencia o a potencia de crucero',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
