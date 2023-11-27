const preguntas = [
  {
    titulo: "1 - Alabeo es la rotación del avión sobre:",
    opciones: [
      {
        textoRespuesta: "El eje lateral",
        isCorrect: false
      },
      {
        textoRespuesta: "El eje longitudinal",
        isCorrect: true
      },
      {
        textoRespuesta: "El eje vertical",
        isCorrect: false
      },
      {
        textoRespuesta: "El eje de los planos",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - ¿Cuál de los siguientes dispositivos se emplean como avisadores de entrada en pérdida?",
    opciones: [
      {
        textoRespuesta: "Vibrador de la palanca de mando e indicador de ángulo de ataque",
        isCorrect: false
      },
      {
        textoRespuesta: "Sensor de ángulo de ataque y avisador de pérdida",
        isCorrect: false
      },
      {
        textoRespuesta: "Indicador de ángulo de ataque e indicador de velocidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Vibrador de palanca de mando y avisador de pérdida",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - Señale lo correcto respecto a la isobara de 1013,2 mb (29,92” Hg):",
    opciones: [
      {
        textoRespuesta: "Se la considera la presión estándar.",
        isCorrect: true
      },
      {
        textoRespuesta: "Su posición es invariable.",
        isCorrect: false
      },
      {
        textoRespuesta: "Nos indica la tendencia de la atmósfera.",
        isCorrect: false
      },
      {
        textoRespuesta: "Ninguna es .",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "4 - ¿Qué es lo que se mide en el tubo pitot de un avión?",
    opciones: [
      {
        textoRespuesta: "La presión Dinámica.",
        isCorrect: false
      },
      {
        textoRespuesta: "La presión Total.",
        isCorrect: true
      },
      {
        textoRespuesta: "La presión estática.",
        isCorrect: false
      },
      {
        textoRespuesta: "La presión que mide el pitot no está reflejada en estas respuestas.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - Respecto del ángulo de ataque:",
    opciones: [
      {
        textoRespuesta: "α0 se produce con respecto de la diferencia del viento real y la cuerda.",
        isCorrect: true
      },
      {
        textoRespuesta: "αi se produce entre la cuerda y el viento relativo real (una vez sufrida la deflexión).",
        isCorrect: false
      },
      {
        textoRespuesta: "No existe α0",
        isCorrect: false
      },
      {
        textoRespuesta: "No existe αi",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - ¿Qué superficies aerodinámicas mueven al avión en torno al eje longitudinal?",
    opciones: [
      {
        textoRespuesta: "El estabilizador horizontal.",
        isCorrect: false
      },
      {
        textoRespuesta: "El timón de dirección.",
        isCorrect: false
      },
      {
        textoRespuesta: "Los alerones.",
        isCorrect: true
      },
      {
        textoRespuesta: "Los flaps.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - El aviso de pérdida se produce a una velocidad determinada antes de la pérdida real. La diferencia entre ambas es del:",
    opciones: [
      {
        textoRespuesta: "5%",
        isCorrect: false
      },
      {
        textoRespuesta: "7%",
        isCorrect: true
      },
      {
        textoRespuesta: "9%",
        isCorrect: false
      },
      {
        textoRespuesta: "11%",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - Los flaps de borde de salida producen:",
    opciones: [
      {
        textoRespuesta: "Aumento d la línea de curvatura media del perfil.",
        isCorrect: true
      },
      {
        textoRespuesta: "Disminución de la curvatura media del perfil.",
        isCorrect: false
      },
      {
        textoRespuesta: "Aumento de la pendiente de la curva que nos relaciona el coeficiente de sustentación con el ángulo de ataque.",
        isCorrect: false
      },
      {
        textoRespuesta: "Disminución de la pendiente de la curva que nos relaciona el coeficiente de sustentación con el ángulo de ataque.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - ¿Qué significado tiene el cociente de dividir la TAS por la velocidad del sonido en el aire?",
    opciones: [
      {
        textoRespuesta: "Es el Nº de Reynolds.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es el Nº de Richardson.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es la EAS.",
        isCorrect: false
      },
      {
        textoRespuesta: "Es el Nº de MACH.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "10 - ¿Qué se produce en un avión próximo a la pérdida?",
    opciones: [
      {
        textoRespuesta: "Una disminución brusca de CL y aumento simultáneo de CD.",
        isCorrect: false
      },
      {
        textoRespuesta: "Una disminución brusca del CL únicamente.",
        isCorrect: false
      },
      {
        textoRespuesta: "Un aumento simultáneo de CL y CD.",
        isCorrect: true
      },
      {
        textoRespuesta: "Disminuye CL y aumenta CD simultáneamente.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - ¿Cómo es la envergadura de un ala finita?",
    opciones: [
      {
        textoRespuesta: "Directamente proporcional al alargamiento.",
        isCorrect: true
      },
      {
        textoRespuesta: "Inversamente proporcional al alargamiento.",
        isCorrect: false
      },
      {
        textoRespuesta: "Inversamente proporcional a la superficie alar.",
        isCorrect: false
      },
      {
        textoRespuesta: "Igual a la unidad.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - Un avión efectúa un descenso constante con una IAS de 160 kts y régimen de descenso de 1.000 pies/minuto. En estas condiciones:",
    opciones: [
      {
        textoRespuesta: "La resistencia aerodinámica es menor que las fuerzas combinadas que hacen avanzar el avión.",
        isCorrect: false
      },
      {
        textoRespuesta: "El peso es mayor que la sustentación.",
        isCorrect: true
      },
      {
        textoRespuesta: "La sustentación es igual al peso.",
        isCorrect: false
      },
      {
        textoRespuesta: "La sustentación es menor que la resistencia aerodinámica.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - ¿Qué tipo de flap se muestra en la ilustración? (Correspondiente al anexo 81-6269 A)",
    opciones: [
      {
        textoRespuesta: "Flap de intradós.",
        isCorrect: false
      },
      {
        textoRespuesta: "Flap Fowler.",
        isCorrect: true
      },
      {
        textoRespuesta: "Flap de doble ranura.",
        isCorrect: false
      },
      {
        textoRespuesta: "Flap simple.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14 - Siendo 1013,2 mb la presión a nivel del mar en la atmósfera ISA, a 5000 ft será de:",
    opciones: [
      {
        textoRespuesta: "846,6 mb",
        isCorrect: true
      },
      {
        textoRespuesta: "900,2 mb",
        isCorrect: false
      },
      {
        textoRespuesta: "703,4 mb",
        isCorrect: false
      },
      {
        textoRespuesta: "1000 mb",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "15 - Imagine un despegue en invierno y otro en verano, a igualdad de peso, la IAS a la que rotaremos al avión será:",
    opciones: [
      {
        textoRespuesta: "Igual en verano e invierno",
        isCorrect: false
      },
      {
        textoRespuesta: "Menor en invierno",
        isCorrect: false
      },
      {
        textoRespuesta: "Mayor en invierno",
        isCorrect: true
      },
      {
        textoRespuesta: "Ninguna es",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "16 - La línea que une el borde de ataque con el borde de salida de un perfil alar se llama:",
    opciones: [
      {
        textoRespuesta: "Línea de curvatura media.",
        isCorrect: false
      },
      {
        textoRespuesta: "Línea de espesor medio.",
        isCorrect: false
      },
      {
        textoRespuesta: "Cuerda.",
        isCorrect: true
      },
      {
        textoRespuesta: "Ninguna es .",
        isCorrect: true
      }
    ]
  }
];

export default preguntas;