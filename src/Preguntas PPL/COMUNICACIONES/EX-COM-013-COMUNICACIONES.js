const preguntas = [
  {
    titulo: "1 - Que frase debemos usar si queremos decir “SI”",
    opciones: [
      {
        textoRespuesta: "Si.",
        isCorrect: false
      },
      {
        textoRespuesta: "Afirmo.",
        isCorrect: true
      },
      {
        textoRespuesta: "Afirmativo.",
        isCorrect: false
      },
      {
        textoRespuesta: "Roger.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - El orden de prioridad de los siguientes mensajes en el servicio móvil aeronáutico es",
    opciones: [
      {
        textoRespuesta: "Mensaje meteorológico, mensaje de localización de dirección, mensaje de regularidad en vuelo.",
        isCorrect: false
      },
      {
        textoRespuesta: "Mensaje de socorro, Mensaje de seguridad en vuelo, Mensaje de urgencia.",
        isCorrect: false
      },
      {
        textoRespuesta: "Mensaje de localización de dirección, Mensaje de socorro, Mensaje de urgencia.",
        isCorrect: false
      },
      {
        textoRespuesta: "Mensaje de socorro, Mensaje de urgencia, Mensaje de localización de dirección.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "3 - Que significa el termino \"Transmitiendo a ciegas\"?",
    opciones: [
      {
        textoRespuesta: "Una transmisión de una estación a otra en circunstancias en las que una comunicación en ambos sentidos no se puede establecer, pero se cree que la estación a la que se llama es capaz de recibir la transmisión",
        isCorrect: true
      },
      {
        textoRespuesta: "Una transmisión de información relativa a la navegación aérea que no esta dirigida a una estación o estaciones especificas",
        isCorrect: false
      },
      {
        textoRespuesta: "Una transmisión de mensajes relativos a información meteorológica en ruta que puede afectar a la seguridad de la operación de aeronaves y no esta dirigido a ninguna estación o estaciones especificas",
        isCorrect: false
      },
      {
        textoRespuesta: "Una transmisión donde no se requiere una respuesta de la estación receptora",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Una aeronave en estado de emergencia deberá responder en el transponder",
    opciones: [
      {
        textoRespuesta: "6700",
        isCorrect: false
      },
      {
        textoRespuesta: "7700",
        isCorrect: true
      },
      {
        textoRespuesta: "7600",
        isCorrect: false
      },
      {
        textoRespuesta: "7500",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - Una autorización en ruta de ATC siempre debe ser colacionada",
    opciones: [
      {
        textoRespuesta: "Si, a no ser que sea autorizado de otra manera por la dependencia ATS local",
        isCorrect: true
      },
      {
        textoRespuesta: "No, si la autorización ATC de ruta es trasmitida de una forma publica (SID; STAR)",
        isCorrect: false
      },
      {
        textoRespuesta: "No, si el canal de radio esta saturado",
        isCorrect: false
      },
      {
        textoRespuesta: "No, si el contenido de la autorización ATC es claro y no da lugar a confusión alguna",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - En la escala de legibilidad, \"legible 3\" significa",
    opciones: [
      {
        textoRespuesta: "Sin problemas para entenderlo",
        isCorrect: false
      },
      {
        textoRespuesta: "Alto y claro",
        isCorrect: false
      },
      {
        textoRespuesta: "Ilegible",
        isCorrect: false
      },
      {
        textoRespuesta: "Legible, pero con dificultad",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "7 - Un avión con SSR 7600. Esto indica",
    opciones: [
      {
        textoRespuesta: "Solicita (ruegel cambio de nivel inmediato",
        isCorrect: false
      },
      {
        textoRespuesta: "Está a punto de hacer un aterrizaje forzado",
        isCorrect: false
      },
      {
        textoRespuesta: "Es incapaz de establecer la comunicación debido al fallo del equipo de radio",
        isCorrect: true
      },
      {
        textoRespuesta: "Se desvía al aeródromo alterno",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - Un mensaje será más efectivo y más fácil de comprender si",
    opciones: [
      {
        textoRespuesta: "Se enfatiza al final",
        isCorrect: false
      },
      {
        textoRespuesta: "Se usa un nivel acústico constante al hablar",
        isCorrect: true
      },
      {
        textoRespuesta: "Se enfatiza cada inicio de palabra",
        isCorrect: false
      },
      {
        textoRespuesta: "Se usa el método de dos veces cada palabra",
        isCorrect: false
      }
    ]
  }
];

export default preguntas;