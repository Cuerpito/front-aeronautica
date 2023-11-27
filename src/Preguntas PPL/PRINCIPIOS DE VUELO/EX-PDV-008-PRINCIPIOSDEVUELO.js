const preguntas = [
  {
    titulo: "1 - La rotación sobre el eje lateral se denomina:",
    opciones: [
      {
        textoRespuesta: "Guiñada",
        isCorrect: false
      },
      {
        textoRespuesta: "Alabeo",
        isCorrect: false
      },
      {
        textoRespuesta: "Resbalamiento",
        isCorrect: false
      },
      {
        textoRespuesta: "Cabeceo",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "2 - En la atmósfera estándar (ISA):",
    opciones: [
      {
        textoRespuesta: "La isobara de 1013,2 mb se encuentra a nivel del mar.",
        isCorrect: false
      },
      {
        textoRespuesta: "La isobara de 29,92” Hg se encuentra a nivel del mar.",
        isCorrect: false
      },
      {
        textoRespuesta: "La isobara de la presión estándar siempre se encuentra a la misma altura.",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas las respuestas anteriores son s.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - ¿Es necesario corregir de alguna forma la altitud de presión (PA) para calcular las actuaciones?",
    opciones: [
      {
        textoRespuesta: "No, la PA es un dato definitivo, no necesitamos corregirla.",
        isCorrect: false
      },
      {
        textoRespuesta: "Sólo cuando la PA arroja un resultado superior a 10,000 ft.",
        isCorrect: false
      },
      {
        textoRespuesta: "Sólo en presencia de una atmósfera estándar (IS.",
        isCorrect: false
      },
      {
        textoRespuesta: "Siempre, corrigiendo en tablas la PA con la temperatura actual.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "4 - La velocidad que leemos en el anemómetro es la:",
    opciones: [
      {
        textoRespuesta: "TAS",
        isCorrect: false
      },
      {
        textoRespuesta: "EAS",
        isCorrect: false
      },
      {
        textoRespuesta: "IAS",
        isCorrect: true
      },
      {
        textoRespuesta: "GS",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - ¿Existe una correspondencia entre el ángulo de ataque y la sustentación?",
    opciones: [
      {
        textoRespuesta: "No, no existe ninguna relación.",
        isCorrect: false
      },
      {
        textoRespuesta: "Si, porque al aumentar el ángulo de ataque aumenta la velocidad.",
        isCorrect: false
      },
      {
        textoRespuesta: "Siempre, porque al aumentar el ángulo de ataque aumenta CL",
        isCorrect: true
      },
      {
        textoRespuesta: "Nunca.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - ¿Cómo actúan los mandos de vuelo?",
    opciones: [
      {
        textoRespuesta: "Variando el ángulo de ataque de las superficies aerodinámicas.",
        isCorrect: false
      },
      {
        textoRespuesta: "Variando la superficie total de las superficies aerodinámicas.",
        isCorrect: false
      },
      {
        textoRespuesta: "Las dos anteriores.",
        isCorrect: true
      },
      {
        textoRespuesta: "Ninguna es",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "7 - Respecto a la barrena podemos decir que:",
    opciones: [
      {
        textoRespuesta: "Es irrecuperable.",
        isCorrect: false
      },
      {
        textoRespuesta: "Se puede recuperar.",
        isCorrect: false
      },
      {
        textoRespuesta: "Se puede recuperar y tiene lugar por la entrada en pérdida de un plano y del otro no.",
        isCorrect: true
      },
      {
        textoRespuesta: "Ninguna es .",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "8 - ¿En qué punto del avión está aplicada la  resultante aerodinámica? En el centro...",
    opciones: [
      {
        textoRespuesta: "De presión.",
        isCorrect: true
      },
      {
        textoRespuesta: "Aerodinámico.",
        isCorrect: false
      },
      {
        textoRespuesta: "De gravedad.",
        isCorrect: false
      },
      {
        textoRespuesta: "Geométrico.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - ¿A qué llamamos ángulo de ataque crítico?",
    opciones: [
      {
        textoRespuesta: "Aquel para el que el CL es mínimo.",
        isCorrect: false
      },
      {
        textoRespuesta: "Aquel para el que el CL es máximo.",
        isCorrect: true
      },
      {
        textoRespuesta: "Aquel para el que el Cdi es mínimo.",
        isCorrect: false
      },
      {
        textoRespuesta: "Aquel para el que tanto CL como CD son mínimos.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - Usted vuela en una isobara y entra en una zona de la “atmósfera caliente”. ¿Qué altura marcará el altímetro?",
    opciones: [
      {
        textoRespuesta: "Igual que la altura real a la que estamos.",
        isCorrect: false
      },
      {
        textoRespuesta: "Menor que la altura real a la que estamos.",
        isCorrect: false
      },
      {
        textoRespuesta: "Mayor que la altura real a la que estamos.",
        isCorrect: true
      },
      {
        textoRespuesta: "Es independiente de la “atmósfera caliente”.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Uno de los métodos para compensar una guiñada adversa es",
    opciones: [
      {
        textoRespuesta: "La aleta de descompensación.",
        isCorrect: false
      },
      {
        textoRespuesta: "El alerón diferencial.",
        isCorrect: true
      },
      {
        textoRespuesta: "La aleta de compensación.",
        isCorrect: false
      },
      {
        textoRespuesta: "El panel de compensación.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - Las unidades de densidad (I) del aire y (II) de la fuerza son:",
    opciones: [
      {
        textoRespuesta: "(I) N/m3, (II) N.",
        isCorrect: false
      },
      {
        textoRespuesta: "(I) kg/m3, (II) kg.",
        isCorrect: false
      },
      {
        textoRespuesta: "(I) kg/m3, (II)N.",
        isCorrect: true
      },
      {
        textoRespuesta: "(I) N/kg, (II) kg.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - En el día de hoy, la presión en el campo de vuelo cuya elevación son 2040 ft es de 950 mb. Diga cuales son los valores de QNH y QNE:",
    opciones: [
      {
        textoRespuesta: "QNH 1018 mb, QNE 150 ft.",
        isCorrect: false
      },
      {
        textoRespuesta: "QNH 1025 mb, QNE 400 ft.",
        isCorrect: false
      },
      {
        textoRespuesta: "QNH 1000 mb, QNE 300 ft.",
        isCorrect: false
      },
      {
        textoRespuesta: "Ninguna es .",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "14 - La velocidad de pérdida es muy importante, puesto que:",
    opciones: [
      {
        textoRespuesta: "Delimita el momento en el que el avión deja de volar.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es variable y depende del peso.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es fija.",
        isCorrect: false
      },
      {
        textoRespuesta: "A y B son s.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "15 - El aumento de la densidad del aire tendrá el siguiente efecto sobre la resistencia aerodinámica de un avión (con el ángulo de ataque, OAT y TAS constantes):",
    opciones: [
      {
        textoRespuesta: "La resistencia aerodinámica aumenta",
        isCorrect: true
      },
      {
        textoRespuesta: "La resistencia aerodinámica solo es afectada por la velocidad respecto al suelo",
        isCorrect: false
      },
      {
        textoRespuesta: "La resistencia aerodinámica disminuye",
        isCorrect: false
      },
      {
        textoRespuesta: "No se produce efecto alguno",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "16 - ¿Qué tipo de flap es el de la Figura?",
    opciones: [
      {
        textoRespuesta: "Simple",
        isCorrect: false
      },
      {
        textoRespuesta: "Fowler",
        isCorrect: true
      },
      {
        textoRespuesta: "De intrados",
        isCorrect: false
      },
      {
        textoRespuesta: "De doble ranura",
        isCorrect: false
      }
    ]
  }
];

export default preguntas;