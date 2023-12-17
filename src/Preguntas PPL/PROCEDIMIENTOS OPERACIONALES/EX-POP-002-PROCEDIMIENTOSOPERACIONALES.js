const preguntas = [
  {
    titulo: '1 - La operación de aeronave distinta de la de transporte aéreo comercial o de los trabajos aéreos es:',
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
    titulo: '2 - Cuando un piloto al mando de una aeronave capte un mensaje de socorro deberá:',
    opciones: [
      {
        textoRespuesta: 'Seguir a la escucha para posteriores mensajes',
        isCorrect: true
      },
      {
        textoRespuesta: 'Anotar la posición de la aeronave si se ha dado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Volar en círculos en presente posición a la espera de órdenes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Abandonar la zona',
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
    titulo: '4 - ¿Cuál es la frecuencia de emergencia en VHF banda aérea?',
    opciones: [
      {
        textoRespuesta: '1215 Mhz',
        isCorrect: true
      },
      {
        textoRespuesta: '12015 Mhz',
        isCorrect: false
      },
      {
        textoRespuesta: '1220 Mhz',
        isCorrect: false
      },
      {
        textoRespuesta: '12345 Mhz',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Según la servidumbre de paso:',
    opciones: [
      {
        textoRespuesta:
          'Si estamos listos para entrar en pista y despegar, deberemos ceder el paso a las aeronaves que se encuentren en el tramo de viento cruzado',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Siempre que otra aeronave no haya abandonado la pista, podremos aterrizar siempre que tengamos la certeza de poder parar nuestro avión sin llegar a colisionar con el que se encuentra en la pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las aeronaves en el tramo final, tendrán prioridad sobre las que estén listas para entrar y despegar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas las anteriores son s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6 - El riesgo de turbulencia de estela es máximo:',
    opciones: [
      {
        textoRespuesta:
          'Cuando el tráfico precedente haya aplicado por unos instantes empuje de despegue inmediatamente antes del mismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al seguir a un trafico precedente a gran velocidad',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Si justo antes de aterrizar, un avión mucho más ligero ha aterrizado en la misma pista con fuerte componente lateral',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando un avión pesado acaba de despegar desde una pista paralela muy próxima con una ligera componente lateral',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '7 - Para extinguir un incendio en la cabina, el piloto utilizará:\n1.\tExtintores de agua\n2.\tExtintores químicos o de polvo\n3.\tExtintores de halón\n4.\tExtintores de CO2\n La combinación correcta es:',
    opciones: [
      {
        textoRespuesta: '2 3 4',
        isCorrect: false
      },
      {
        textoRespuesta: '1 2',
        isCorrect: false
      },
      {
        textoRespuesta: '1 2 3 4',
        isCorrect: false
      },
      {
        textoRespuesta: '3 4',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '8 - En un aeródromo sin control quien es el responsable de la separación?',
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
    titulo:
      '9 - ¿Cuál de los siguientes juegos de condiciones es el que tiene menos probabilidades de atraer las aves hacia un aeropuerto?',
    opciones: [
      {
        textoRespuesta: 'Vertedero de basura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un área inundada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuadrilla segando la hierba',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hierba alta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - Para evitar la estela turbulenta, cuando despegamos detrás de una aeronave mas pesada, el piloto debería maniobrar:',
    opciones: [
      {
        textoRespuesta: 'Sobre y a barlovento del avión más pesado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sobre y a sotavento del avión mas pesado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bajo y a sotavento del avión mas pesado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bajo y a barlovento del avión mas pesado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - Las autoridades solicitan al comandante que presente los documentos del avión este:',
    opciones: [
      {
        textoRespuesta: 'Puede negarse a presentarlos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede hacerla solamente después de haber consultado al operador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deberá hacerla, en un periodo razonable de tiempo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Puede solicitarse un retraso de 48 horas',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - De acuerdo al Documento 4444 de OACI, la separación mínima sin radar por estela turbulenta de 2 minutos se debe aplicar a:',
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
  }
];

export default preguntas;
