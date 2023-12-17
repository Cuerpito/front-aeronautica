const preguntas = [
  {
    titulo: '1 - La resistencia aerodinámica de un cuerpo colocado en una determinada corriente de aire depende entre otros de:',
    opciones: [
      {
        textoRespuesta: 'La masa específica del cuerpo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La ubicación del C.G. del cuerpo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El peso del cuerpo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad de la corriente de aire',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '2 - Un avión efectúa un descenso constante con una IAS de 160 Kts y régimen de descenso de 1.000 pies/minuto. En estas condiciones:',
    opciones: [
      {
        textoRespuesta: 'La sustentación es menor que la resistencia aerodinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia aerodinámica es menor que las fuerzas combinadas que hacen avanzar el avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La sustentación es igual al peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'El peso es mayor que la sustentación',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3 - En relación con la ecuación de los gases perfectos, señale lo correcto:',
    opciones: [
      {
        textoRespuesta: 'A igual temperatura, con un aumento de presión, el volumen que ocupa el gas aumenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A igual presión, con un aumento de la temperatura, el volumen que ocupa el gas aumenta.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A igual volumen, un aumento de temperatura implica una disminución en la presión del gas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4 - Sea un perfil aerodinámico asimétrico. La línea que une el borde de ataque y el de salida es:',
    opciones: [
      {
        textoRespuesta: 'La línea de curvatura media.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La línea de espesor medio.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La cuerda aerodinámica.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5 - Señale lo correcto respecto al ángulo de ataque:',
    opciones: [
      {
        textoRespuesta: 'Viene dado por el ángulo formado entre el morro del avión y la corriente de viento relativo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viene dado por el ángulo formado entre la cuerda aerodinámica y la corriente de viento relativo real.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Viene dado por el ángulo formado entre la cuerda aerodinámica y la corriente de aire libre (viento relativo).',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6 - La pérdida se produce:',
    opciones: [
      {
        textoRespuesta: 'A un determinado ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A una determinada velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A un determinado peso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con una determinada turbulencia.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - Estamos virando en vuelo, manteniendo altitud. Conforme aumentemos el ángulo de alabeo, la sustentación:',
    opciones: [
      {
        textoRespuesta: 'Debe disminuir para igualarse al peso. El factor de carga aumenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debe aumentar para igualarse al peso. El factor de carga disminuye.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debe aumentar para igualarse al peso. El factor de carga aumenta.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Debe disminuir para igualarse al peso. El factor de carga disminuye.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8 - La velocidad del sonido depende, hasta una altura de 11.000 metros de la temperatura...',
    opciones: [
      {
        textoRespuesta: 'Y de la presión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Y de la dirección del viento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Exclusivamente.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Y de la orografía.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - El nº de Reynolds:',
    opciones: [
      {
        textoRespuesta: 'No depende de la viscosidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la mitad de la viscosidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de la distancia al borde de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depende inversamente de la densidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - ¿Cómo es el coeficiente de resistencia inducida CDi?',
    opciones: [
      {
        textoRespuesta: 'Proporcional a la velocidad de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Directamente proporcional a la resistencia al avance,',
        isCorrect: false
      },
      {
        textoRespuesta: 'Función del ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas son ciertas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - Consideremos dos alas que tiene el mismo perfil pero diferente alargamiento.',
    opciones: [
      {
        textoRespuesta: 'La pendiente de la curva de sustentación es la misma.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La de mayor alargamiento tiene una curva de sustentación de mayor pendiente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La de menor alargamiento tiene mayor pendiente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El de mayor o menor alargamiento afecta sólo a la resistencia inducida.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12 - La rotación sobre el eje lateral se denomina:',
    opciones: [
      {
        textoRespuesta: 'Alabeo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Guiñada.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Resbalamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cabeceo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '13 - La sustentación y la resistencia aerodinámica sobre un perfil aerodinámico se consideran respectivamente vertical y paralela a',
    opciones: [
      {
        textoRespuesta: 'El eje longitudinal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El horizonte.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La cuerda del perfil.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento/flujo relativo al aire.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '14 - La proporción es del ….. % de nitrógeno, …..% de oxígeno y ….. % de otros gases, como los gases nobles:',
    opciones: [
      {
        textoRespuesta: '80,19,1',
        isCorrect: false
      },
      {
        textoRespuesta: '75, 23, 2',
        isCorrect: false
      },
      {
        textoRespuesta: '78,21, 1',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es .',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '15 - En el anemómetro leemos la velocidad:',
    opciones: [
      {
        textoRespuesta: 'TAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'CAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'BAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'IAS',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '16 - El centro de presiones:',
    opciones: [
      {
        textoRespuesta: 'Es el punto donde se encuentra al centro de gravedad de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el punto donde consideramos aplicada la sustentación.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es el punto neutro.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el punto alto.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
