const preguntas = [
  {
    titulo: "1 - No se iniciará ningún vuelo hasta que el piloto al mando haya comprobado que",
    opciones: [
      {
        textoRespuesta: "EL avión reúne condiciones de aeronavegabilidad",
        isCorrect: false
      },
      {
        textoRespuesta: "Los instrumentos y los equipos son apropiados",
        isCorrect: false
      },
      {
        textoRespuesta: "La masa del avión y el emplazamiento del cdg son tales que puede realizarse el vuelo con seguridad",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas las anteriores y además no se exceda las limitaciones del manual de vuelo",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "2 - Cuando una aeronave escuche un mensaje de peligro de otra aeronave deberá:",
    opciones: [
      {
        textoRespuesta: "Localizar la posición de la aeronave en peligro si es posible",
        isCorrect: false
      },
      {
        textoRespuesta: "Mientras espera instrucciones dirigirse a la posición estimada",
        isCorrect: false
      },
      {
        textoRespuesta: "Informar a la dependencia ATC adecuada y proceder según sus instrucciones",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - En aeródromos controlados:",
    opciones: [
      {
        textoRespuesta: "Antes de empezar el rodaje, deberemos recibir la autorización oportuna",
        isCorrect: true
      },
      {
        textoRespuesta: "Antes de empezar el rodaje, deberemos solicitar pista",
        isCorrect: false
      },
      {
        textoRespuesta: "Antes de empezar el rodaje, preguntaremos a Torre si tenemos el plan de vuelo aprobado",
        isCorrect: false
      },
      {
        textoRespuesta: "Las respuestas s son la A y la C",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "4 - Según el anexo 6 Parte II el piloto al mando será responsable de:",
    opciones: [
      {
        textoRespuesta: "Que los pasajeros y miembros conozcan el uso del sistema de oxígeno, cinturones de seguridad y salidas de emergencia",
        isCorrect: false
      },
      {
        textoRespuesta: "Es el responsable de la operación y seguridad del avión durante el vuelo",
        isCorrect: false
      },
      {
        textoRespuesta: "De que los demás miembros de la tripulación tengan sus licencias en vigor y conozcan los procedimientos concretos de ese avión",
        isCorrect: false
      },
      {
        textoRespuesta: "Todas son s",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "5 - A temperatura ambiente elevada (+30ºC) y con humedad relativa tan baja como el 40%, en el cielo despejado, sin niebla ni precipitaciones, la formación de hielo en el carburador:",
    opciones: [
      {
        textoRespuesta: "No puede producirse",
        isCorrect: false
      },
      {
        textoRespuesta: "Es posible con independencia del ajuste seleccionado",
        isCorrect: false
      },
      {
        textoRespuesta: "Puede producirse pero solo con ajuste de potencia bajos",
        isCorrect: true
      },
      {
        textoRespuesta: "Puede ocurrir pero solo en ajustes de máxima potencia o de potencia de crucero",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - La luz blanca  de navegación obligatoria, ¿Qué ángulo de cobertura tiene?",
    opciones: [
      {
        textoRespuesta: "110º",
        isCorrect: false
      },
      {
        textoRespuesta: "140º",
        isCorrect: true
      },
      {
        textoRespuesta: "220º",
        isCorrect: false
      },
      {
        textoRespuesta: "70º",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - Todos los aviones que operen de noche deberán llevar:\n1 Un faro de aterrizaje\n2 Una bombilla de recambio para el faro\n3 Iluminación para los instrumentos de vuelo.\n4 Una linterna eléctrica para cada miembro de la tripulación.\nLa combinación correcta es:",
    opciones: [
      {
        textoRespuesta: "1 2 3 4",
        isCorrect: false
      },
      {
        textoRespuesta: "1 3 4",
        isCorrect: true
      },
      {
        textoRespuesta: "1 2 3",
        isCorrect: false
      },
      {
        textoRespuesta: "2 3 4",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - La mayor estela turbulenta tiene lugar cuando el avión que la genera es:",
    opciones: [
      {
        textoRespuesta: "Grande, pesado, a baja velocidad y en configuración limpia",
        isCorrect: true
      },
      {
        textoRespuesta: "Grande, pesado, a alta velocidad en configuración full flap",
        isCorrect: false
      },
      {
        textoRespuesta: "Pequeño, ligero, a baja velocidad y en configuración limpia",
        isCorrect: false
      },
      {
        textoRespuesta: "Pequeño, ligero, a alta velocidad en configuración full flap",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - Una aeronave en situación de emergencia deberá responder",
    opciones: [
      {
        textoRespuesta: "7500",
        isCorrect: false
      },
      {
        textoRespuesta: "7600",
        isCorrect: false
      },
      {
        textoRespuesta: "7700",
        isCorrect: true
      },
      {
        textoRespuesta: "7000",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - La autoridad final relativa a la integridad de la aeronave la tiene:",
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
    titulo: "11 - Cual de las siguientes condiciones atraerá aves a un aeródromo",
    opciones: [
      {
        textoRespuesta: "Un vertedero de basura en las proximidades",
        isCorrect: true
      },
      {
        textoRespuesta: "Manteniendo la hierba alta",
        isCorrect: false
      },
      {
        textoRespuesta: "Una planta de reciclaje en las proximidades",
        isCorrect: false
      },
      {
        textoRespuesta: "extracción de minerales como arena y gravilla",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "12 - Tras un aterrizaje con exceso de peso y velocidad, los neumáticos y los frenos están extremadamente calientes Los bomberos deberían aproximarse a los neumáticos del tren de aterrizaje:",
    opciones: [
      {
        textoRespuesta: "Solo desde la derecha o izquierda",
        isCorrect: false
      },
      {
        textoRespuesta: "Desde cualquier sitio",
        isCorrect: false
      },
      {
        textoRespuesta: "No deberían acercarse bajo ninguna circunstancia",
        isCorrect: false
      },
      {
        textoRespuesta: "Solo desde la parte frontal o trasera",
        isCorrect: true
      }
    ]
  }
];

export default preguntas;