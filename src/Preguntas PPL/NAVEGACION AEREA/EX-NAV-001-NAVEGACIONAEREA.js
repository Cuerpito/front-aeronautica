const preguntas = [
  {
    titulo: '1 - ¿Cuál es el significado del término “hora oficial”?',
    opciones: [
      {
        textoRespuesta: 'Es la hora fijada por las autoridades competentes en un país o en una zona horaria determinada de un país.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es una forma de expresar la hora media local.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es otra hora de denominar la UTC.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el sistema de usos horarios aplicable en los Estados Unidos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '2 - Supuestos: rumbo indicado en brújula 270º, desviación 2ºW, declinación 30ºE, marcación relativa 316º. Calcular el QDR.',
    opciones: [
      {
        textoRespuesta: '226º',
        isCorrect: false
      },
      {
        textoRespuesta: '044º',
        isCorrect: true
      },
      {
        textoRespuesta: '046º',
        isCorrect: false
      },
      {
        textoRespuesta: '224º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Cuanto mide la circunferencia de la tierra:',
    opciones: [
      {
        textoRespuesta: '43.200 nm',
        isCorrect: false
      },
      {
        textoRespuesta: '10.800 nm',
        isCorrect: false
      },
      {
        textoRespuesta: '21.600 nm',
        isCorrect: true
      },
      {
        textoRespuesta: '54.000 nm',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - Cuál seria la equivalencia en nm de 12 cm trazados sobre un mapa de escala 1:2.000.000.',
    opciones: [
      {
        textoRespuesta: '130',
        isCorrect: true
      },
      {
        textoRespuesta: '329',
        isCorrect: false
      },
      {
        textoRespuesta: '43',
        isCorrect: false
      },
      {
        textoRespuesta: '150',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Hallar el tiempo en recorrer 5 NM con una GS de 269 Kt:',
    opciones: [
      {
        textoRespuesta: '2 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: '1 minuto 07 segundos',
        isCorrect: true
      },
      {
        textoRespuesta: '50 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: '1 minuto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - En un aeronave que vuela a FL 85 la CAS = 100 Kts y la OAT = 0º, calcular la TAS:',
    opciones: [
      {
        textoRespuesta: '128 Kts.',
        isCorrect: false
      },
      {
        textoRespuesta: '136 Kts.',
        isCorrect: false
      },
      {
        textoRespuesta: '114 Kts.',
        isCorrect: true
      },
      {
        textoRespuesta: '125 Kts.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7 - Si nos quedan 45 minutos de autonomía, nos quedan 60 NM para llegar a destino y nuestra TAS es de 90 nudos,  suponemos viento cero, ¿Podremos llegar a destino o habrá que buscar alternativo?',
    opciones: [
      {
        textoRespuesta: 'Nos faltan 5 minutos de autonomía para llegar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nos sobras 15 minutos de autonomía para llegar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nos sobran 5 minutos de autonomía para llegar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Llegamos justo cuando se nos termina el combustible.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '8 - El VOR emite radiales que nos permiten acercarnos, alejarnos o simplemente establecer nuestra posición, estos radiales están orientados según:',
    opciones: [
      {
        textoRespuesta: 'El radial 0º coincide con el norte geográfico.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El radial 0º coincide con el sur geográfico.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El radial 0º coincide con el norte magnético.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El radial 0º coincide con el sur magnético.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - La brújula de un avión que se acerca al polo, marcará:',
    opciones: [
      {
        textoRespuesta: 'Máxima inclinación horizontal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Máxima inclinación vertical.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mínima inclinación horizontal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mínima inclinación vertical.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - ¿Cuál de los siguientes es incorrecto respecto a los GPS?',
    opciones: [
      {
        textoRespuesta: 'Las descargas en la troposfera  hacen variar el reloj de los satélites.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las refracciones en la ionosfera pueden producir error.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las reflexiones en el suelo pueden hacer que pierda precisión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuanto más separados estén los satélites más error tendrá.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11 - ¿Cuál es el valor máximo de la declinación?',
    opciones: [
      {
        textoRespuesta: '90º',
        isCorrect: false
      },
      {
        textoRespuesta: 'Varía entre un máximo de 45º Este  y 45º Oeste',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debe ser 0 en el ecuador magnético',
        isCorrect: false
      },
      {
        textoRespuesta: '180º.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12 - Cada cuanto tiempo se recomienda establecer checkpoints en la ruta de planificación de vuelo:',
    opciones: [
      {
        textoRespuesta: '1 minuto',
        isCorrect: false
      },
      {
        textoRespuesta: '5/10 minutos',
        isCorrect: true
      },
      {
        textoRespuesta: '60 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se debe establecer 10 checkpoints',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
