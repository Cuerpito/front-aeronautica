const preguntas = [
  {
    titulo:
      '1 - En caso de fallo de motor en vuelo, las palas de una hélice de velocidad constante que impulsan a un monomotor que carezca de sistema de abanderamiento',
    opciones: [
      {
        textoRespuesta: 'Se desplazarán a la posición de máximo paso por efecto de la fuerza aerodinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se desplazarán a una determinada posición de paso, según las RPM del molinete',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se desplazarán a la posición de mínimo paso, por la acción de la fuerza centrífuga',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se desplazarán a la posición de paso bajo por efecto de la presión oleoneumática generada por el molinete',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2 - Al nivel de suelo, ¿A qué equivale un hectopascal?',
    opciones: [
      {
        textoRespuesta: '28 pies',
        isCorrect: true
      },
      {
        textoRespuesta: '32 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '45 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '56 pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3 - Si la fuente estática de un altímetro se bloquea durante el ascenso, el instrumento',
    opciones: [
      {
        textoRespuesta:
          'Indicará una lectura inferior en una magnitud equivalente a la lectura indicada en el momento en que el instrumento haya quedado bloqueado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Volverá gradualmente a cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continuará indicando la lectura correspondiente al momento de producirse el bloqueo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Indicará una lectura superior a la real',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4 - El “efecto de estela” de una hélice es más evidente en',
    opciones: [
      {
        textoRespuesta: 'Velocidades aerodinámicas bajas con un ajuste alto de potencia',
        isCorrect: true
      },
      {
        textoRespuesta: 'Velocidades aerodinámicas altas con un ajuste bajo de potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidades aerodinámicas bajas con un ajuste bajo de potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidades aerodinámicas altas con un ajuste alto de potencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5 - ¿Qué velocidades delimitan el arco amarillo?',
    opciones: [
      {
        textoRespuesta: 'Vne – Vfe',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vne – Vle',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vne – Vno',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vne – Vlo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6 - ¿Para que sirve la EGT?',
    opciones: [
      {
        textoRespuesta: 'Para el ajuste de la presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para el ajuste de la mezcla',
        isCorrect: true
      },
      {
        textoRespuesta: 'Para el ajuste del paso de la hélice',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solo sirve como una información más',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7 - La única fase útil de un motor de cuatro tiempos es',
    opciones: [
      {
        textoRespuesta: 'Admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Compresión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Escape',
        isCorrect: false
      },
      {
        textoRespuesta: 'Expansión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '8 - ¿Cómo mide un termómetro termopar?',
    opciones: [
      {
        textoRespuesta: 'Un solo filamento de metal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dos metales conductores de diferente tipo conectados a un punto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dos metales conductores del mismo tipo conectado a dos puntos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un Puente de Wheatstone conectado a un indicador de voltaje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9 - Al aumentar la altitud sin ajustar la relación de mezcla, las prestaciones del motor de émbolo se ven afectadas por',
    opciones: [
      {
        textoRespuesta: 'Un aumento en la densidad del aire para una menor cantidad de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'La disminución de la densidad de aire para una cantidad de combustible constante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una disminución de la densidad del aire para una menor cantidad de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una densidad de aire constante para una mayor cantidad de combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10 - En los carburadores modernos, las variaciones en la relación de la mezcla se obtienen ajustando',
    opciones: [
      {
        textoRespuesta: 'El flujo de combustible',
        isCorrect: true
      },
      {
        textoRespuesta: 'El flujo de aire, el flujo de combustible y la temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'El flujo de aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los flujos de combustible y aire',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11 - Para motores de pistón la relación de mezcla es la proporción entre',
    opciones: [
      {
        textoRespuesta: 'El volumen de combustible y el volumen de aire que entra en el cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'La masa de combustible y el volumen de aire que entra en el carburador',
        isCorrect: false
      },
      {
        textoRespuesta: 'La masa del combustible y la masa del aire que entra en el cilindro',
        isCorrect: true
      },
      {
        textoRespuesta: 'El volumen de combustible y el volumen de aire que entra en el carburador',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12 - Los sistemas de encendido en motores de pistón son',
    opciones: [
      {
        textoRespuesta: 'Dependientes del generador de DC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dependientes del generador de AC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Independientes del sistema eléctrico del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dependiente de la batería',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13 - Al aplicar calefacción al carburador',
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
    titulo: '14 - A nivel del suelo, ¿A qué equivale un hectopascal?',
    opciones: [
      {
        textoRespuesta: '28 pies',
        isCorrect: true
      },
      {
        textoRespuesta: '32 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '45 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '56 pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15 - Cuando actuamos sobre la palanca de mezcla hacia atrás el piloto',
    opciones: [
      {
        textoRespuesta: 'Aumenta el paso de aire hacia el carburador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye el paso de aire hacia el carburador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta el paso de combustible hacia los depósitos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye el paso de combustible hacia el carburador',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '16 - El volumen de combustible y el volumen de aire que entra en el carburador. Al aumentar la altitud sin ajustar la relación de mezcla, las prestaciones del motor de embolo se ven afectadas por',
    opciones: [
      {
        textoRespuesta: 'Un aumento de la densidad del aire para una menor cantidad de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una disminución de la densidad del aire para una cantidad de combustible constante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una disminución de la densidad del aire para una menor cantidad de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una densidad de aire constante para una mayor cantidad de combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17 - En referencia a los magnetos son',
    opciones: [
      {
        textoRespuesta: 'Acumuladores de energía eléctrica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Generadores de energía eléctrica dependientes del circuito eléctrico del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Generadores independientes del circuito eléctrico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas son falsas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18 - En vuelo la bola y el bastón se encuentran a la izquierda',
    opciones: [
      {
        textoRespuesta: 'El avión esta virando a la izquierda con poco régimen de viraje',
        isCorrect: true
      },
      {
        textoRespuesta: 'El avión esta virando a la derecha con mucho régimen de viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión esta virando a la izquierda con mucho régimen de viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión esta virando a la derecha con poco régimen de viraje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19 - La principal ventaja de una hélice de velocidad constante comparada con una de paso fijo es',
    opciones: [
      {
        textoRespuesta: 'Una mayor eficiencia en un amplio rango de velocidades de la aeronave',
        isCorrect: true
      },
      {
        textoRespuesta: 'Eficiencia constante en todos los márgenes de velocidad de la aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor esfuerzo en las palas de la hélice',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una mayor eficiencia durante el crucero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20 - Para ajustar la relación de la mezcla en un motor alternativo al aumentar la altitud, habrá que',
    opciones: [
      {
        textoRespuesta:
          'Aumentar la cantidad de combustible presente en la mezcla para compensar la reducción de presión y de densidad del aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducir la cantidad de combustible presente en la mezcla para compensar el aumento de la densidad del aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducir el flujo de combustible para compensar la disminución de la densidad del aire',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentar la relación de mezcla',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21 - Si a una batería de plomo de 12 voltios se le estropea una de las 12 células',
    opciones: [
      {
        textoRespuesta: 'Se queda inutilizada',
        isCorrect: true
      },
      {
        textoRespuesta: 'Pierde un doceavo de capacidad pero se puede seguir utilizando',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pierde un doceavo de tensión pero se puede seguir utilizando',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pierde un doceavo de capacidad y de tensión pero se puede seguir utilizando',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '22 - En caso de fallo de motor durante un vuelo, las palas de una hélice de velocidad constante en un monomotor que no está equipado para abanderar la hélice',
    opciones: [
      {
        textoRespuesta: 'Giran en molinete',
        isCorrect: false
      },
      {
        textoRespuesta: 'Giran en una posición de paso más alta por la fuerza aerodinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Giran en una posición de paso más bajo por la fuerza centrífuga',
        isCorrect: true
      },
      {
        textoRespuesta: 'Giran en una posición de paso más bajo por la presión de aceite creado por el movimiento de la hélice',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23 - Como se llama el error del altímetro producido en la toma de presión estática por su posición cerca de la fuente',
    opciones: [
      {
        textoRespuesta: 'Instrumental',
        isCorrect: false
      },
      {
        textoRespuesta: 'Barométrico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Posición',
        isCorrect: true
      },
      {
        textoRespuesta: 'Histéresis',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24 - El ángulo de paso de la hélice de velocidad constante',
    opciones: [
      {
        textoRespuesta: 'Sólo varía con las RPM del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'No depende de la velocidad verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye al aumentar la velocidad verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta al aumentar la velocidad verdadera',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
