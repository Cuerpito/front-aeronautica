const preguntas = [
  {
    titulo: "1 - El ángulo de paso de la hélice de velocidad constante",
    opciones: [
      {
        textoRespuesta: "Sólo varía con las RPM del motor",
        isCorrect: false
      },
      {
        textoRespuesta: "No depende de la velocidad verdadera",
        isCorrect: false
      },
      {
        textoRespuesta: "Disminuye al aumentar la velocidad verdadera",
        isCorrect: false
      },
      {
        textoRespuesta: "Aumenta al aumentar la velocidad verdadera",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "2 - ¿Qué marca el indicador de presión de colector o manifold a motor parado en tierra?",
    opciones: [
      {
        textoRespuesta: "Presión atmosférica",
        isCorrect: true
      },
      {
        textoRespuesta: "Máximo a la derecha",
        isCorrect: false
      },
      {
        textoRespuesta: "Mínimo a la izquierda",
        isCorrect: false
      },
      {
        textoRespuesta: "La mitad",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - En tierra, girando a la derecha, el indicador de viraje señalará",
    opciones: [
      {
        textoRespuesta: "Aguja al medio, bola a la derecha",
        isCorrect: false
      },
      {
        textoRespuesta: "Aguja a la derecha, bola a la izquierda",
        isCorrect: true
      },
      {
        textoRespuesta: "Aguja al medio, bola a la izquierda",
        isCorrect: false
      },
      {
        textoRespuesta: "Aguja a la derecha, bola a la derecha",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Durante el ascenso, con ajuste constante de mando de gases y mando de RPM (con mezcla constante)",
    opciones: [
      {
        textoRespuesta: "Las RPM disminuyen",
        isCorrect: false
      },
      {
        textoRespuesta: "La Presión de Admisión del Aire (MAP) disminuye",
        isCorrect: true
      },
      {
        textoRespuesta: "La Presión de Admisión del Aire (MAP) aumenta",
        isCorrect: false
      },
      {
        textoRespuesta: "Las RPM aumentan",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - En un cilindro donde el punto muerto superior es el TDC, la chispa salta",
    opciones: [
      {
        textoRespuesta: "Antes del TDC y en virajes alternativos del cigüeñal",
        isCorrect: true
      },
      {
        textoRespuesta: "Después del TDC y en virajes alternativos del cigüeñal",
        isCorrect: false
      },
      {
        textoRespuesta: "Antes del TDC y en cada giro",
        isCorrect: false
      },
      {
        textoRespuesta: "Después del TDC y en cada giro",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - En un ascenso con RPM constante y gases en una posición constante",
    opciones: [
      {
        textoRespuesta: "Va disminuyendo la presión de admisión",
        isCorrect: true
      },
      {
        textoRespuesta: "Va disminuyendo las Rpm´s",
        isCorrect: false
      },
      {
        textoRespuesta: "Permanecen constantes las Rpm y la presión de admisión",
        isCorrect: false
      },
      {
        textoRespuesta: "Va aumentando la presión de admisión",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - ¿Que sistema de encendido suelen utilizar los motores alternativos de aviación?",
    opciones: [
      {
        textoRespuesta: "por magnetos",
        isCorrect: true
      },
      {
        textoRespuesta: "por batería",
        isCorrect: false
      },
      {
        textoRespuesta: "por encendido electrónico",
        isCorrect: false
      },
      {
        textoRespuesta: "todas son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "8 - ¿Cómo mide un termómetro termopar?",
    opciones: [
      {
        textoRespuesta: "Un solo filamento de metal",
        isCorrect: false
      },
      {
        textoRespuesta: "Dos metales conductores de diferente tipo conectados a un punto",
        isCorrect: true
      },
      {
        textoRespuesta: "Dos metales conductores del mismo tipo conectado a dos puntos",
        isCorrect: false
      },
      {
        textoRespuesta: "Un Puente de Wheatstone conectado a un indicador de voltaje",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - Al aumentar la altitud sin ajustar la relación de mezcla, las prestaciones del motor de émbolo se ven afectadas por",
    opciones: [
      {
        textoRespuesta: "Un aumento en la densidad del aire para una menor cantidad de combustible",
        isCorrect: false
      },
      {
        textoRespuesta: "La disminución de la densidad de aire para una cantidad de combustible constante",
        isCorrect: true
      },
      {
        textoRespuesta: "Una disminución de la densidad del aire para una menor cantidad de combustible",
        isCorrect: false
      },
      {
        textoRespuesta: "Una densidad de aire constante para una mayor cantidad de combustible",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - Para motores de pistón la relación de mezcla es la proporción entre",
    opciones: [
      {
        textoRespuesta: "El volumen de combustible y el volumen de aire que entra en el cilindro",
        isCorrect: false
      },
      {
        textoRespuesta: "La masa de combustible y el volumen de aire que entra en el carburador",
        isCorrect: false
      },
      {
        textoRespuesta: "La masa del combustible y la masa del aire que entra en el cilindro",
        isCorrect: true
      },
      {
        textoRespuesta: "El volumen de combustible y el volumen de aire que entra en el carburador",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Los sistemas de encendido en motores de pistón son",
    opciones: [
      {
        textoRespuesta: "Dependientes del generador de DC",
        isCorrect: false
      },
      {
        textoRespuesta: "Dependientes del generador de AC",
        isCorrect: false
      },
      {
        textoRespuesta: "Independientes del sistema eléctrico del avión",
        isCorrect: true
      },
      {
        textoRespuesta: "Dependiente de la batería",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - Al aumentar la altitud sin ajustar la relación de mezcla, las prestaciones del motor de embolo se ven afectadas por",
    opciones: [
      {
        textoRespuesta: "Un aumento de la densidad del aire para una menor cantidad de combustible",
        isCorrect: false
      },
      {
        textoRespuesta: "Una disminución de la densidad del aire para una cantidad de combustible constante",
        isCorrect: true
      },
      {
        textoRespuesta: "Una disminución de la densidad del aire para una menor cantidad de combustible",
        isCorrect: false
      },
      {
        textoRespuesta: "Una densidad de aire constante p una mayor cantidad de combustible",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - Al aplicar calefacción al carburador",
    opciones: [
      {
        textoRespuesta: "Se enriquece la mezcla y suben las RPM's",
        isCorrect: false
      },
      {
        textoRespuesta: "Se empobrece la mezcla y suben las RPM's",
        isCorrect: false
      },
      {
        textoRespuesta: "Se enriquece la mezcla y bajan las RPM's",
        isCorrect: true
      },
      {
        textoRespuesta: "Se empobrece la mezcla y bajan las RPM's",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14 - ¿Cual puede ser la causa de detonación?",
    opciones: [
      {
        textoRespuesta: "alta presión de admisión y bajo número de revoluciones",
        isCorrect: true
      },
      {
        textoRespuesta: "alta presión de admisión y alto número de revoluciones",
        isCorrect: false
      },
      {
        textoRespuesta: "baja presión de admisión y bajo número de revoluciones",
        isCorrect: false
      },
      {
        textoRespuesta: "baja presión de admisión y alto número de revoluciones",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "15 - A nivel del suelo, ¿A qué equivale un hectopascal?",
    opciones: [
      {
        textoRespuesta: "28 pies",
        isCorrect: true
      },
      {
        textoRespuesta: "32 pies",
        isCorrect: false
      },
      {
        textoRespuesta: "45 pies",
        isCorrect: false
      },
      {
        textoRespuesta: "56 pies",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "16 - Cuando actuamos sobre la palanca de mezcla hacia atrás el piloto",
    opciones: [
      {
        textoRespuesta: "Aumenta el paso de aire hacia el carburador",
        isCorrect: false
      },
      {
        textoRespuesta: "Disminuye el paso de aire hacia el carburador",
        isCorrect: false
      },
      {
        textoRespuesta: "Aumenta el paso de combustible hacia los depósitos",
        isCorrect: false
      },
      {
        textoRespuesta: "Disminuye el paso de combustible hacia el carburador",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "17 - El volumen de combustible y el volumen de aire que entra en el carburador. Al aumentar la altitud sin ajustar la relación de mezcla, las prestaciones del motor de embolo se ven afectadas por",
    opciones: [
      {
        textoRespuesta: "Un aumento de la densidad del aire para una menor cantidad de combustible",
        isCorrect: false
      },
      {
        textoRespuesta: "Una disminución de la densidad del aire para una cantidad de combustible constante",
        isCorrect: true
      },
      {
        textoRespuesta: "Una disminución de la densidad del aire para una menor cantidad de combustible",
        isCorrect: false
      },
      {
        textoRespuesta: "Una densidad de aire constante para una mayor cantidad de combustible",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "18 - En referencia a los magnetos son",
    opciones: [
      {
        textoRespuesta: "Acumuladores de energía eléctrica",
        isCorrect: false
      },
      {
        textoRespuesta: "Generadores de energía eléctrica dependientes del circuito eléctrico del avión",
        isCorrect: false
      },
      {
        textoRespuesta: "Generadores independientes del circuito eléctrico",
        isCorrect: true
      },
      {
        textoRespuesta: "Todas son falsas",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "19 - En vuelo la bola y el bastón se encuentran a la izquierda",
    opciones: [
      {
        textoRespuesta: "El avión esta virando a la izquierda con poco régimen de viraje",
        isCorrect: true
      },
      {
        textoRespuesta: "El avión esta virando a la derecha con mucho régimen de viraje",
        isCorrect: false
      },
      {
        textoRespuesta: "El avión esta virando a la izquierda con mucho régimen de viraje",
        isCorrect: false
      },
      {
        textoRespuesta: "El avión esta virando a la derecha con poco régimen de viraje",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "20 - La principal ventaja de una hélice de velocidad constante comparada con una de paso fijo es",
    opciones: [
      {
        textoRespuesta: "Una mayor eficiencia en un amplio rango de velocidades de la aeronave",
        isCorrect: true
      },
      {
        textoRespuesta: "Eficiencia constante en todos los márgenes de velocidad de la aeronave",
        isCorrect: false
      },
      {
        textoRespuesta: "Menor esfuerzo en las palas de la hélice",
        isCorrect: false
      },
      {
        textoRespuesta: "Una mayor eficiencia durante el crucero",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "21 - Para ajustar la relación de la mezcla en un motor alternativo al aumentar la altitud, habrá que",
    opciones: [
      {
        textoRespuesta: "Aumentar la cantidad de combustible presente en la mezcla para compensar la reducción de presión y de densidad del aire",
        isCorrect: false
      },
      {
        textoRespuesta: "Reducir la cantidad de combustible presente en la mezcla para compensar el aumento de la densidad del aire",
        isCorrect: false
      },
      {
        textoRespuesta: "Reducir el flujo de combustible para compensar la disminución de la densidad del aire",
        isCorrect: true
      },
      {
        textoRespuesta: "Aumentar la relación de mezcla",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "22 - Si una de las 12 celdas de una batería de plomo-ácido queda inutilizada, la batería",
    opciones: [
      {
        textoRespuesta: "tiene 1/12 menos de voltaje, pero todavía esta en uso",
        isCorrect: false
      },
      {
        textoRespuesta: "Tiene 1/12 menos de capacidad pero todavía esta en uso",
        isCorrect: false
      },
      {
        textoRespuesta: "Queda inoperativa",
        isCorrect: true
      },
      {
        textoRespuesta: "Tiene 1/12 menos de voltaje y menos capacidad, pero todavía esta en uso",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "23 - Un indicador de virajes dispone de un giróscopo con",
    opciones: [
      {
        textoRespuesta: "1 grado de libertad",
        isCorrect: false
      },
      {
        textoRespuesta: "3 grados de libertad",
        isCorrect: false
      },
      {
        textoRespuesta: "2 grados de libertad",
        isCorrect: true
      },
      {
        textoRespuesta: "0 grados de libertad",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "24 - En el hemisferio Sur durante la deceleración posterior a un aterrizaje en dirección Este la brújula",
    opciones: [
      {
        textoRespuesta: "Indicará un viraje aparente hacia el Norte",
        isCorrect: true
      },
      {
        textoRespuesta: "Una fluctuación de rumbo en torno a 090º",
        isCorrect: false
      },
      {
        textoRespuesta: "Un viraje aparente hacia el Sur",
        isCorrect: false
      },
      {
        textoRespuesta: "Ningún viraje aparente",
        isCorrect: false
      }
    ]
  }
];

export default preguntas;