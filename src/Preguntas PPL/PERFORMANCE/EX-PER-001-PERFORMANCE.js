const preguntas = [
  {
    titulo: "1 - Cuando el centro de gravedad se encuentra en su posición delantera límite, el avión se tornará:",
    opciones: [
      {
        textoRespuesta: "Extremadamente inestable y requiere exceso de mando sobre el estabilizador para modificar el cabeceo",
        isCorrect: false
      },
      {
        textoRespuesta: "Extremadamente estable y requiere exceso de mando sobre el estabilizador para modificar el cabeceo",
        isCorrect: true
      },
      {
        textoRespuesta: "Extremadamente estable y requiere escaso mando sobre el estabilizador para modificar el cabeceo",
        isCorrect: false
      },
      {
        textoRespuesta: "Extremadamente inestable y requiere escaso mando sobre el estabilizador para modificar el cabeceo",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - ¿Cuál de los siguientes factores nos proporciona una distancia mayor en un planeo?:",
    opciones: [
      {
        textoRespuesta: "Incremento de la masa",
        isCorrect: false
      },
      {
        textoRespuesta: "Disminución de la masa",
        isCorrect: false
      },
      {
        textoRespuesta: "Viento en cara",
        isCorrect: false
      },
      {
        textoRespuesta: "Viento en cola",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - ¿Cuál es el aspecto más importante de la zona trasera de las curvas de potencia?:",
    opciones: [
      {
        textoRespuesta: "Debe actuarse sobre el timón de profundidad para picar el avión",
        isCorrect: false
      },
      {
        textoRespuesta: "El avión no entra en perdida",
        isCorrect: false
      },
      {
        textoRespuesta: "Velocidades inestables",
        isCorrect: true
      },
      {
        textoRespuesta: "Tendencia a guiñar",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - ¿Qué incluye el peso máximo con combustible a cero (MZFW)?",
    opciones: [
      {
        textoRespuesta: "Pasajeros.",
        isCorrect: false
      },
      {
        textoRespuesta: "El propio peso del avión.",
        isCorrect: false
      },
      {
        textoRespuesta: "El combustible para la ruta.",
        isCorrect: false
      },
      {
        textoRespuesta: "La A y la B se incluyen en el MZFW.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "5 - ¿Qué puede ocurrir si sobrepasamos el peso máximo con combustible a cero?",
    opciones: [
      {
        textoRespuesta: "Que el avión no despegue al no poder crear la suficiente sustentación.",
        isCorrect: false
      },
      {
        textoRespuesta: "Que el avión no sea capaz de frenar al aterrizar el la pista de destino debido a su inercia.",
        isCorrect: false
      },
      {
        textoRespuesta: "Que las alas sufran deformaciones permanentes e incluso roturas.",
        isCorrect: true
      },
      {
        textoRespuesta: "La A la B son s.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "6 - Calcular el centro de gravedad en % de MAC (Cuerda media aerodinámica) con los siguientes datos:\nReferencia de distancia – centro de gravedad: 12.53 m\nReferencia de distancia – borde de ataque: 9.63 m\nLongitud de la MAC: 8 m",
    opciones: [
      {
        textoRespuesta: "36.3% MAC",
        isCorrect: true
      },
      {
        textoRespuesta: "23.1% MAC",
        isCorrect: false
      },
      {
        textoRespuesta: "47.0% MAC",
        isCorrect: false
      },
      {
        textoRespuesta: "63.4% MAC",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - Calcular la distancia a la que se encuentra el centro de gravedad de una aeronave de la línea de referencia (DATUM), de acuerdo con los siguientes datos:\n-  Basic empty weight: 1.500 lb, arm: 70.\n-  Fuel weight: 350 lb, arm 60.\n-  Front seat occupants weight: 300 lb, arm 75.\n-  Baggage weight: 40 lb, arm 140.\n-  Oil weight: 20 lb, arm –5.",
    opciones: [
      {
        textoRespuesta: "142.85",
        isCorrect: false
      },
      {
        textoRespuesta: "141.00",
        isCorrect: false
      },
      {
        textoRespuesta: "70.00",
        isCorrect: false
      },
      {
        textoRespuesta: "70.35",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "8 - Cual será el efecto en las performances de un avión si la altitud de presión de un aeródromo decrece?",
    opciones: [
      {
        textoRespuesta: "aumenta la distancia de despegue",
        isCorrect: false
      },
      {
        textoRespuesta: "aumenta la carrera de despegue",
        isCorrect: false
      },
      {
        textoRespuesta: "aumenta la distancia de aceleración-parada",
        isCorrect: false
      },
      {
        textoRespuesta: "disminuye la distancia de despegue",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "9 - El centro de gravedad de un avión se encuentra en el 25% de la cuerda media aerodinámica.",
    opciones: [
      {
        textoRespuesta: "La cuerda media aerodinámica con relación al borde de salida",
        isCorrect: false
      },
      {
        textoRespuesta: "La cuerda media con relación al datum",
        isCorrect: false
      },
      {
        textoRespuesta: "La cuerda media aerodinámica con relación al borde de ataque",
        isCorrect: true
      },
      {
        textoRespuesta: "El avión con relación al borde de ataque",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - En ascenso no acelerado:",
    opciones: [
      {
        textoRespuesta: "El empuje es igual a la resistencia aerodinámica más la componente ascendente del peso bruto en la dirección de la trayectoria de vuelo",
        isCorrect: false
      },
      {
        textoRespuesta: "El empuje es igual a la resistencia aerodinámica más la componente descendente del peso bruto en la dirección de la trayectoria de vuelo",
        isCorrect: true
      },
      {
        textoRespuesta: "Sustentación es igual al peso más la componente vertical de la resistencia aerodinámica",
        isCorrect: false
      },
      {
        textoRespuesta: "Sustentación es igual al peso más la componente horizontal de la resistencia aerodinámica",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - En un vuelo nivelado y tras la extensión de los flaps, ignorando los momentos de la cola, el momento de cabeceo será:",
    opciones: [
      {
        textoRespuesta: "Morro arriba",
        isCorrect: true
      },
      {
        textoRespuesta: "Morro abajo",
        isCorrect: false
      },
      {
        textoRespuesta: "Cero",
        isCorrect: false
      },
      {
        textoRespuesta: "Depende de la localización del centro de gravedad",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - La masa máxima cero de combustible es una limitación de masas para el :",
    opciones: [
      {
        textoRespuesta: "Resistencia de la raíz alar",
        isCorrect: true
      },
      {
        textoRespuesta: "Fuerza del fuselaje",
        isCorrect: false
      },
      {
        textoRespuesta: "Carga aceptable ejercida sobre el ala que considera un margen para combustible tanking",
        isCorrect: false
      },
      {
        textoRespuesta: "Carga total del combustible impuesto sobre el ala",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - Los límites del centro de gravedad de este avión están entre 22 pulgadas y 30 pulgadas.  Comprobar si podemos realizar el vuelo con esta carga.  \nPeso del avión en vacío = 3.500 Lb. Brazo 20 pulgadas.  \nCombustible = 500 Lb. Brazo 20 pulgadas.  \nAceite cargado = 20 Lb. Brazo - 5 pulgadas.  \nPasajeros delanteros + Piloto = 400 Lb. Brazo 40 pulgadas.  \nPasajeros traseros = 200 Lb. Brazo 60 Pulgadas. \nEquipaje = 10 Lb. Brazo 100 pulgadas.",
    opciones: [
      {
        textoRespuesta: "Si podemos, el C.G. está a 23,6 pulgadas.",
        isCorrect: true
      },
      {
        textoRespuesta: "No podemos, el C.G. está a 20,5 pulgadas.",
        isCorrect: false
      },
      {
        textoRespuesta: "Si podemos, elG. está a 28,8 pulgadas.",
        isCorrect: false
      },
      {
        textoRespuesta: "No podemos, el C.G. está a 32.2 pulgadas.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14 - Se despega siempre contra el viento porque",
    opciones: [
      {
        textoRespuesta: "Se despega con una IAS menor",
        isCorrect: false
      },
      {
        textoRespuesta: "Disminuye la distancia de despegue",
        isCorrect: true
      },
      {
        textoRespuesta: "Aumenta el régimen de ascenso",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas son ciertas",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "15 - Si el peso del avión es superior al inicialmente previsto, para una velocidad aerodinámica dada, el ángulo de ataque",
    opciones: [
      {
        textoRespuesta: "Será menor, disminuye la resistencia aerodinámica y aumenta la autonomía",
        isCorrect: false
      },
      {
        textoRespuesta: "Será mayor, aumenta la resistencia aerodinámica y disminuye la autonomía",
        isCorrect: true
      },
      {
        textoRespuesta: "Será constante, aumenta la resistencia aerodinámica y aumenta la autonomía",
        isCorrect: false
      },
      {
        textoRespuesta: "Será constante, aumenta la resistencia aerodinámica y disminuye la autonomía",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "16 - Un avión se carga con el centro de gravedad en el límite trasero, esto resultara en:",
    opciones: [
      {
        textoRespuesta: "un consumo reducido de combustible como resultado de una disminución de la resistencia.",
        isCorrect: false
      },
      {
        textoRespuesta: "un incremento de la estabilidad longitudinal.",
        isCorrect: false
      },
      {
        textoRespuesta: "una reducción en la potencia requerida para una velocidad dada",
        isCorrect: false
      },
      {
        textoRespuesta: "un riesgo incrementado para la perdida, ya q decrece el momento del estabilizador de cola.",
        isCorrect: true
      }
    ]
  }
];

export default preguntas;