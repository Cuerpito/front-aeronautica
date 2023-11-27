const preguntas = [
  {
    titulo: "1 - Todos los miembros de la tripulación mantendrán abrochados sus cinturones de seguridad mientras estén en sus puestos",
    opciones: [
      {
        textoRespuesta: "Si",
        isCorrect: true
      },
      {
        textoRespuesta: "Sólo al despegue y al aterrizaje",
        isCorrect: false
      },
      {
        textoRespuesta: "Es opcional",
        isCorrect: false
      },
      {
        textoRespuesta: "Sólo en espacio turbulento",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - Cuando una aeronave vea a otra que está en una situación de peligro, el piloto al mando deberá:",
    opciones: [
      {
        textoRespuesta: "No perderla de vista hasta que su presencia no sea necesaria o no pueda permanecer más tiempo",
        isCorrect: false
      },
      {
        textoRespuesta: "Determinar con exactitud la posición de la aeronave en peligro",
        isCorrect: false
      },
      {
        textoRespuesta: "Informar a la dependencia ATC con la que esté en comunicación sobre los datos de la aeronave que está en peligro",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - ¿Cuándo se producirá la transferencia entre la frecuencia de Rodadura y Torre?",
    opciones: [
      {
        textoRespuesta: "Una vez recibida la información de QNH y antes de rodar",
        isCorrect: false
      },
      {
        textoRespuesta: "Cuando estemos en cabecera de pista, pero antes de despegar",
        isCorrect: false
      },
      {
        textoRespuesta: "En cualquier momento del rodaje y siempre antes de que la aeronave entre en pista para despegar",
        isCorrect: true
      },
      {
        textoRespuesta: "Nada más despegar, recibiremos la instrucción de pasar a frecuencia de Torre",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Antes de arrancar el motor:",
    opciones: [
      {
        textoRespuesta: "Miraremos que la presión de aceite es la",
        isCorrect: true
      },
      {
        textoRespuesta: "Gritaremos \"Libre\" a la vez que verificamos que no hay nadie cerca de la hélice",
        isCorrect: true
      },
      {
        textoRespuesta: "Pediremos permiso de rodaje",
        isCorrect: false
      },
      {
        textoRespuesta: "La A y la B son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "5 - ¿Cuál de los siguientes juegos de condiciones es el que tiene más probabilidades de atraer las aves hacia un aeropuerto?",
    opciones: [
      {
        textoRespuesta: "Segado y mantenimiento de la hierba alta",
        isCorrect: false
      },
      {
        textoRespuesta: "Un vertedero de basura en las proximidades",
        isCorrect: true
      },
      {
        textoRespuesta: "Un colector moderno de aguas residuales en las proximidades",
        isCorrect: false
      },
      {
        textoRespuesta: "La extracción de minerales tales como arena y grava",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - Todas las aeronaves ostentarán luces de navegación situadas en los planos que serán:",
    opciones: [
      {
        textoRespuesta: "Verde en el plano izquierdo y roja en el derecho",
        isCorrect: false
      },
      {
        textoRespuesta: "Blanca en el plano derecho y blanca en el izquierdo",
        isCorrect: false
      },
      {
        textoRespuesta: "Verde en el plano derecho y roja en el izquierdo",
        isCorrect: true
      },
      {
        textoRespuesta: "Luces de destellos en ambos planos",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - Las luces de navegación son:",
    opciones: [
      {
        textoRespuesta: "Verdes en el plano izquierdo",
        isCorrect: false
      },
      {
        textoRespuesta: "Rojas en los dos planos",
        isCorrect: false
      },
      {
        textoRespuesta: "Roja en el plano izquierdo",
        isCorrect: true
      },
      {
        textoRespuesta: "Verde en la parte posterior",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - La estela turbulenta se debe tener en cuenta cuando:",
    opciones: [
      {
        textoRespuesta: "Justo antes de aterrizar, una aeronave mas ligera ha aterrizado con un fuerte viento cruzado en una pista larga",
        isCorrect: false
      },
      {
        textoRespuesta: "Durante el vuelo de crucero la separación vertical se reduce a 1000 ft",
        isCorrect: false
      },
      {
        textoRespuesta: "La aeronave precedente ha ejecutado una maniobra brusca sobre la pista",
        isCorrect: false
      },
      {
        textoRespuesta: "Una aeronave mas pesada ha aterrizado previamente en la pista, con viento cruzado ligero y utilizo dispositivos hipersustentadores",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "9 - La autoridad final relativa a la integridad de la aeronave la tiene:",
    opciones: [
      {
        textoRespuesta: "El Piloto al mando",
        isCorrect: true
      },
      {
        textoRespuesta: "El controlador ATC si la aeronave esta volando en espacio aéreo controlado",
        isCorrect: false
      },
      {
        textoRespuesta: "El propietario de la aeronave",
        isCorrect: false
      },
      {
        textoRespuesta: "El Operador",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - Para determinar las condiciones mínimas de operación de un aeródromo se tiene que tener en cuenta:\n1. Equipo para navegación disponible\n2. dimensiones y características de las pistas\n3. composición de la tripulación de vuelo\n4. obstáculos en las proximidades de las áreas de aproximación y frustrada\n5. medios para determinar y comunicar las condiciones meteorológicas\nLa combinación correcta es",
    opciones: [
      {
        textoRespuesta: "2 4 5",
        isCorrect: false
      },
      {
        textoRespuesta: "2 3 5",
        isCorrect: false
      },
      {
        textoRespuesta: "1 2 3 4 5",
        isCorrect: true
      },
      {
        textoRespuesta: "1 2 4 5",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Todos los vuelos que realicen vuelos VFR llevarán:\n1)\tUna brújula magnética.\n2)\tUn reloj de precisión que indique las horas, minutos y segundos.\n3)\tUn indicador de velocidad.\n4)\tUn baroaltímetro de precisión",
    opciones: [
      {
        textoRespuesta: "1 2 3 4",
        isCorrect: true
      },
      {
        textoRespuesta: "1 2 3",
        isCorrect: false
      },
      {
        textoRespuesta: "2 3 4",
        isCorrect: false
      },
      {
        textoRespuesta: "1 3 4",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - El radiotransmisor de activación automática que da la posición del avión en caso de impacto es:",
    opciones: [
      {
        textoRespuesta: "El GPS",
        isCorrect: false
      },
      {
        textoRespuesta: "Cualquier equipo de comunicaciones",
        isCorrect: false
      },
      {
        textoRespuesta: "Un equipo de navegación",
        isCorrect: false
      },
      {
        textoRespuesta: "Se denomina ELBA o ELT",
        isCorrect: true
      }
    ]
  }
];

export default preguntas;