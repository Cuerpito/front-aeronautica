const preguntas = [
  {
    titulo: '1 - Cuando se consigue la identificación radar de un avión la unidad ATC deberá:',
    opciones: [
      {
        textoRespuesta: 'Informar al avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Informar al avión antes de ordenar o aconsejar información alguna en base a la información radar',
        isCorrect: true
      },
      {
        textoRespuesta:
          'No es necesario informar al avión puesto que la identificación radar se supone a no se ser que se informe de lo contrario',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '2 - Como son las luces de borde de calle de rodaje?',
    opciones: [
      {
        textoRespuesta: 'color rojo',
        isCorrect: false
      },
      {
        textoRespuesta: 'color azul',
        isCorrect: true
      },
      {
        textoRespuesta: 'color amarillo',
        isCorrect: false
      },
      {
        textoRespuesta: 'color verde',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - La edad mínima para obtener una PPL es:',
    opciones: [
      {
        textoRespuesta: '21 años.',
        isCorrect: false
      },
      {
        textoRespuesta: '16 años.',
        isCorrect: false
      },
      {
        textoRespuesta: '17 años.',
        isCorrect: true
      },
      {
        textoRespuesta: '18 años.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - ¿Qué avión tienen prioridad para aterrizar?',
    opciones: [
      {
        textoRespuesta: 'Un avión VIP que traslada a un jefe de estado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un tráfico de emergencia declarada.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un avión hospital que traslade enfermos que necesitan ayuda inmediata.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión más rápido siempre tiene prioridad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - Una llamada por radio comunicando socorro no es lo mismo que si comunica urgencia, ya que en el primer caso:',
    opciones: [
      {
        textoRespuesta: 'La seguridad del avión y la de sus pasajeros requiere aterrizaje inmediato.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Existe un peligro inminente que precisa ayuda inmediata.',
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
    titulo: '6 - Se denomina tráfico aeroportuario a:',
    opciones: [
      {
        textoRespuesta: 'Los tráficos presentes en la zona de maniobra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los tráficos presentes en la zona de maniobra y en vuelo en las proximidades del aeropuerto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los tráficos que se encuentran volando el circuito de aeropuerto',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los tráficos que se encuentran en la zona de movimientos y aquellos en vuelo en las proximidades del aeropuerto.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - Que comprende la ASDA?',
    opciones: [
      {
        textoRespuesta: 'La longitud de la pista mas la zona libre de obstáculos, si existe',
        isCorrect: false
      },
      {
        textoRespuesta: 'La longitud de la pista mas la zona de parada, si existe',
        isCorrect: true
      },
      {
        textoRespuesta: 'Solo la zona de la pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'La pista y las calles de rodaje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - Quien es el máximo responsable a bordo de la aeronave',
    opciones: [
      {
        textoRespuesta: 'El comandante',
        isCorrect: true
      },
      {
        textoRespuesta: 'El sobrecargo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El jefe de escala mientras el avión está en tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'El copiloto cuando el comandante no vuela el avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - Para indicar al piloto que active los frenos, el encargado de señales:',
    opciones: [
      {
        textoRespuesta: 'Dedos extendidos, mano hacia abajo, palma hacia atrás, cerrar los dedos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dedos extendidos, mano frente al torso, palma hacia dentro, cerrar los dedos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dedos extendidos, mano en alto, palma hacia atrás, cerrar los dedos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dedos extendidos, mano frente a la cara, palma hacia dentro, cerrar los dedos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - Si una autorización ATC no es adecuada para el piloto al mando, este deberá:',
    opciones: [
      {
        textoRespuesta: 'Solicitar una nueva autorización al ATC, que deberá atender la solicitud del piloto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deberá proponer al correspondiente ATC el contenido de una nueva autorización.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solicitar, y si es posible, obtener del ATC una modificación de la autorización en cuestión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Deberá aceptar la autorización del ATC pues esta se basa en el plan de vuelo presentado al  ATC.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11 - El avión A, con autorización ATC, vuela en condiciones VMC dentro de los límites de un área controlada. El avión B, sin autorización ATC, se aproxima a la misma altitud y en rumbo de colisión. ¿Quién tiene preferencia?',
    opciones: [
      {
        textoRespuesta: 'El avión "A” si el avión "B” esta a su derecha.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión "A” con independencia de la dirección por la que se aproxime el avión "B".',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión "B” si el avión "A” esta a su izquierda.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El avión "B” con independencia de la dirección por la que se aproxime el avión "A".',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12 - La información concerniente a las tasas de aeropuertos y servicios de navegación aérea en que sección del AIP se encuentran:',
    opciones: [
      {
        textoRespuesta: 'FAL',
        isCorrect: false
      },
      {
        textoRespuesta: 'RAC',
        isCorrect: false
      },
      {
        textoRespuesta: 'AD',
        isCorrect: false
      },
      {
        textoRespuesta: 'GEN',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '13 - Una luz roja intermitente emitida desde la torre de control durante la aproximación para el aterrizaje de un avión significa que:',
    opciones: [
      {
        textoRespuesta: 'El aeropuerto esta cerrado provisionalmente, vuele en círculo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El aeropuerto no es seguro, no aterrice',
        isCorrect: true
      },
      {
        textoRespuesta: 'Continué volando en círculos y espere instrucciones posteriores',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ceda paso a otro trafico en situación de emergencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14 - Referencia de aeródromo por categoría',
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
    titulo: '15 - Qué elementos de instrucciones o informaciones se deben siempre colacionar?',
    opciones: [
      {
        textoRespuesta: 'Hora, pista en uso, ajuste de altímetro, instrucciones de nivel y códigos transponder',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Pista en uso, ajuste de altímetro, códigos transponder, instrucciones de nivel, instrucciones de rumbo y velocidad.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Pista en uso, visibilidad, viento en superficie, instrucciones de rumbo, ajuste de altímetro, viento en superficie, visibilidad y temperatura a nivel de aeródromo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pista en uso, ajuste de altímetro, instrucciones de rumbo y velocidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16 - Las luces de eje de una calle de rodaje que no sea de salida serán:',
    opciones: [
      {
        textoRespuesta: 'Luces fijas de color azul',
        isCorrect: false
      },
      {
        textoRespuesta: 'Luces fijas de color blanco',
        isCorrect: false
      },
      {
        textoRespuesta: 'Luces fijas de color amarillo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Luces fijas de color verde',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
