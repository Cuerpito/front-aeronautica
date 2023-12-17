const preguntas = [
  {
    titulo: '1 - Qué necesitamos para calcular el QFE a partir del QNH',
    opciones: [
      {
        textoRespuesta: 'El QNE',
        isCorrect: false
      },
      {
        textoRespuesta: 'La elevación del terreno',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un mapa de tiempo significativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debemos conocer si tenemos cerca una borrasca o un anticiclón',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - ¿Por qué el aire no se desplaza de las altas presiones a las bajas presiones directamente?',
    opciones: [
      {
        textoRespuesta: 'Por el efecto del vapor de agua sobre el viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por la fuerza de Coriolis',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por que se desplaza de las bajas a las altas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - Las nubes de bajo nivel se llaman también:',
    opciones: [
      {
        textoRespuesta: 'Cs',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cc',
        isCorrect: false
      },
      {
        textoRespuesta: 'St',
        isCorrect: true
      },
      {
        textoRespuesta: 'As',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '4 - Según el siguiente mensaje METAR: LETO 171300Z 18002KT 4500 HZ NSC 06/M02 1025 NOSIG ¿Qué hora de emisión tiene el mensaje?',
    opciones: [
      {
        textoRespuesta: '17:13',
        isCorrect: false
      },
      {
        textoRespuesta: '18:00',
        isCorrect: false
      },
      {
        textoRespuesta: '13:00',
        isCorrect: true
      },
      {
        textoRespuesta: '10:25',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '5 - Un avión aterriza en un aeropuerto (elevación 540 FT, QNH 993 hPcon el altímetro ajustado a 1013 hPa ¿Qué indicará el citado altímetro?',
    opciones: [
      {
        textoRespuesta: '380 FT',
        isCorrect: false
      },
      {
        textoRespuesta: '1080 FT',
        isCorrect: true
      },
      {
        textoRespuesta: '0 FT',
        isCorrect: false
      },
      {
        textoRespuesta: '700 FT',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - ¿Qué significa la abreviatura “nosig”?',
    opciones: [
      {
        textoRespuesta: 'Ningún informe recibido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sin problemas meteorológicos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sin cambios significativos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sin firmar por el meteorólogo',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7 - Si un avión aterriza en un aeródromo con una elevación de 500 ft y un QNH de 993 Hpa, ¿qué altitud marcaría el altímetro si este altímetro si este está colocado con un QNH de 1013 Hpa?',
    opciones: [
      {
        textoRespuesta: '380 ft',
        isCorrect: false
      },
      {
        textoRespuesta: '700 ft',
        isCorrect: false
      },
      {
        textoRespuesta: '1080 ft',
        isCorrect: true
      },
      {
        textoRespuesta: '0 ft',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - El movimiento advectivo es:',
    opciones: [
      {
        textoRespuesta: 'Lo mismo que la subdiciencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'movimiento vertical quel aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'lo mismo que la conveccion',
        isCorrect: false
      },
      {
        textoRespuesta: 'movimiento horizontal del aire',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
