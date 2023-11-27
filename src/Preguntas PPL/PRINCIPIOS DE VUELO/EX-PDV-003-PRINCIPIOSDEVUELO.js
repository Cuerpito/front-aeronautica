const preguntas = [
  {
    titulo: "1 - ¿Qué objetivo tiene un sistema de aletas hipersustentadoras (“slats”) automáticas?",
    opciones: [
      {
        textoRespuesta: "Su extensión automática cuando se supera un determinado ángulo de ataque.",
        isCorrect: true
      },
      {
        textoRespuesta: "Asegurar que los slats se extiendan siempre cuando los sistemas de vuelo/tierra se encuentran en la posición “tierra”",
        isCorrect: false
      },
      {
        textoRespuesta: "Ayudar a los alerones durante las maniobras de alabeo",
        isCorrect: false
      },
      {
        textoRespuesta: "El seleccionado automático de SLATS IN tras el despegue",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - En el diagrama polar de todo avión puede leerse:",
    opciones: [
      {
        textoRespuesta: "La máxima relación CL/CD y el máximo coeficiente de sustentación",
        isCorrect: true
      },
      {
        textoRespuesta: "La mínima relación CL/CD y la mínima resistencia aerodinámica",
        isCorrect: false
      },
      {
        textoRespuesta: "El coeficiente de mínima resistencia aerodinámica y la máxima sustentación",
        isCorrect: false
      },
      {
        textoRespuesta: "La mínima resistencia aerodinámica y la máxima sustentación",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - En atmósfera ISA (estándar), la temperatura y la densidad del aire al nivel del mar son:",
    opciones: [
      {
        textoRespuesta: "0ºC (273ºK) y 1,225Kg/m3",
        isCorrect: false
      },
      {
        textoRespuesta: "15ºC (288ºK) y 1,225Kg/m3",
        isCorrect: true
      },
      {
        textoRespuesta: "21ºC (294ºK) y 1,225Kg/m3",
        isCorrect: false
      },
      {
        textoRespuesta: "15ºC (273ºK) y 1,225Kg/m3",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Respecto a la terminología alar, señalar lo correcto:",
    opciones: [
      {
        textoRespuesta: "El extradós del plano es su parte superior, el intradós la inferior.",
        isCorrect: true
      },
      {
        textoRespuesta: "El extradós del plano es su parte inferior, el intradós la superior.",
        isCorrect: false
      },
      {
        textoRespuesta: "El extradós no se encuentra en el plano.",
        isCorrect: false
      },
      {
        textoRespuesta: "El intradós no se encuentra en el plano.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - Supongamos un avión acelerando a su velocidad de crucero manteniendo la altitud. Podemos afirmar que:",
    opciones: [
      {
        textoRespuesta: "P = D",
        isCorrect: false
      },
      {
        textoRespuesta: "P > D",
        isCorrect: true
      },
      {
        textoRespuesta: "P < D",
        isCorrect: false
      },
      {
        textoRespuesta: "Ninguna es .",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "6 - Podemos decir de la pérdida que:",
    opciones: [
      {
        textoRespuesta: "Es el momento en el que el avión, por falta de velocidad, deja de volar.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es el momento en el que se desprende la capa límite.",
        isCorrect: true
      },
      {
        textoRespuesta: "Es el momento en el que tenemos que aplicar potencia.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es el momento en el que tenemos que subir el morro.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - En referencia al factor de carga, señale lo correcto.",
    opciones: [
      {
        textoRespuesta: "Es la fuerza normal a la sustentación, que evita que las alas se rompan.",
        isCorrect: false
      },
      {
        textoRespuesta: "Se mide en términos de múltiplos de fuerza de la gravedad (G).",
        isCorrect: false
      },
      {
        textoRespuesta: "Existen limitaciones estructurales con respecto a él.",
        isCorrect: false
      },
      {
        textoRespuesta: "Todo lo anterior es correcto.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "8 - Aerodinámicamente un perfil es ideal si al menos:",
    opciones: [
      {
        textoRespuesta: "El coeficiente de sustentación del mismo es máximo.",
        isCorrect: false
      },
      {
        textoRespuesta: "El coeficiente de sustentación del mismo es mínimo.",
        isCorrect: false
      },
      {
        textoRespuesta: "Si la fineza es cero.",
        isCorrect: false
      },
      {
        textoRespuesta: "La envergadura es infinita.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "9 - La sustentación y la resistencia aerodinámica son proporcionales a la:",
    opciones: [
      {
        textoRespuesta: "Presión.",
        isCorrect: false
      },
      {
        textoRespuesta: "Temperatura.",
        isCorrect: false
      },
      {
        textoRespuesta: "Densidad.",
        isCorrect: true
      },
      {
        textoRespuesta: "Viscosidad.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - Ecuación de la sustentación del ala:",
    opciones: [
      {
        textoRespuesta: "L=q * S * b * CL",
        isCorrect: false
      },
      {
        textoRespuesta: "L=CL * q * S",
        isCorrect: true
      },
      {
        textoRespuesta: "L=q * b * CL",
        isCorrect: false
      },
      {
        textoRespuesta: "L=q * S * b",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - ¿A qué llamamos resistencia total en un avión convencional?",
    opciones: [
      {
        textoRespuesta: "Resistencia de fricción más resistencia de forma.",
        isCorrect: false
      },
      {
        textoRespuesta: "Suma de las resistencias parásitas y de fricción.",
        isCorrect: false
      },
      {
        textoRespuesta: "Resistencias parásitas más inducidas.",
        isCorrect: true
      },
      {
        textoRespuesta: "Suma de las resistencias parásitas, de fricción y de forma.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - Un avión normal estable, el centro de gravedad se encuentra:",
    opciones: [
      {
        textoRespuesta: "Entre el límite posterior y el punto neutro del avión.",
        isCorrect: false
      },
      {
        textoRespuesta: "En el punto neutro del avión.",
        isCorrect: false
      },
      {
        textoRespuesta: "Lo suficientemente adelantado con respecto al punto neutro del avión.",
        isCorrect: true
      },
      {
        textoRespuesta: "Por detrás del punto neutro del avión.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - Considerando un perfil aerodinámico con una determinada comba y con un ángulo de ataque positivo. ¿En qué lugar se darán las más altas velocidades del flujo?",
    opciones: [
      {
        textoRespuesta: "En el intradós.",
        isCorrect: false
      },
      {
        textoRespuesta: "En el extradós.",
        isCorrect: true
      },
      {
        textoRespuesta: "Frente al punto de remanso.",
        isCorrect: false
      },
      {
        textoRespuesta: "En el punto de remanso.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14 - La atmósfera está compuesta por una serie de gases, que:",
    opciones: [
      {
        textoRespuesta: "Aumentan su proporción  según aumenta la altura.",
        isCorrect: false
      },
      {
        textoRespuesta: "Disminuyen su proporción según aumenta la altura.",
        isCorrect: false
      },
      {
        textoRespuesta: "La proporción de los gases que componen la atmósfera se va afectada por la altura dependiendo del estado de la atmósfera.",
        isCorrect: false
      },
      {
        textoRespuesta: "La proporción de los gases no se va afectada por la altura.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "15 - La pérdida es el momento en el cual:",
    opciones: [
      {
        textoRespuesta: "Dejamos de tener sustentación.",
        isCorrect: false
      },
      {
        textoRespuesta: "Se desprende la capa límite.",
        isCorrect: false
      },
      {
        textoRespuesta: "Hemos alcanzado la velocidad crítica.",
        isCorrect: false
      },
      {
        textoRespuesta: "A y B son s.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "16 - Los spoilers:",
    opciones: [
      {
        textoRespuesta: "Son dispositivos hipersustentadores.",
        isCorrect: false
      },
      {
        textoRespuesta: "Son dispositivos rompedores de la capa límite.",
        isCorrect: false
      },
      {
        textoRespuesta: "Son mandos de vuelo secundarios.",
        isCorrect: false
      },
      {
        textoRespuesta: "B y C son s.",
        isCorrect: true
      }
    ]
  }
];

export default preguntas;