const preguntas = [
  {
    titulo: "1 - Justo antes de llegar a la plataforma, al rodar, inadvertidamente sobre la hierba, una rueda se mete en un hoyo causando serios desperfectos al avión y obligando a la tripulación a demorar la salida",
    opciones: [
      {
        textoRespuesta: "Se trata de un incidente y el piloto al mando deberá informar debidamente a la autoridad aeroportuaria antes de transcurridas 48 horas tras el mismo",
        isCorrect: false
      },
      {
        textoRespuesta: "Es un accidente y la tripulación debe seguir el procedimiento oportuno",
        isCorrect: true
      },
      {
        textoRespuesta: "No es más que una irregularidad en la operación, la tripulación debe informar al operador acerca del retraso ocasionado por la necesaria reparación a efectuar",
        isCorrect: false
      },
      {
        textoRespuesta: "Al no producirse daños personales y dado que el vuelo ya ha concluido, las medidas a adoptar corresponden a la compañía aseguradora, a los talleres de reparación, al operador de la aeronave y al personal encargado de las pistas y las calles de rodadura",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - Una cruz blanca doble dispuesta horizontalmente en el área de señales indica:",
    opciones: [
      {
        textoRespuesta: "Han de adoptarse precauciones especiales durante la aproximación para el aterrizaje",
        isCorrect: false
      },
      {
        textoRespuesta: "Una unidad de área para el movimiento de aeronaves",
        isCorrect: false
      },
      {
        textoRespuesta: "El aeródromo esta siendo usado por planeadores y se están desarrollando operaciones de vuelo a vela",
        isCorrect: true
      },
      {
        textoRespuesta: "Han de adoptarse precauciones especiales debido al mal estado de las calles de rodadura",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - ¿Qué letra de código deberá utilizarse para una calle de rodadura para aviones de ancho de vía de 15 metros?",
    opciones: [
      {
        textoRespuesta: "A",
        isCorrect: false
      },
      {
        textoRespuesta: "B",
        isCorrect: false
      },
      {
        textoRespuesta: "C",
        isCorrect: true
      },
      {
        textoRespuesta: "D",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Las luces del umbral de la pista han de ser:",
    opciones: [
      {
        textoRespuesta: "Luces fijas de color verde.",
        isCorrect: false
      },
      {
        textoRespuesta: "Luces fijas unidireccionales, verdes en la dirección de los aviones en aproximación.",
        isCorrect: true
      },
      {
        textoRespuesta: "Luces fijas en color blanco o verde.",
        isCorrect: false
      },
      {
        textoRespuesta: "Luces fijas unidireccionales, blancas en la dirección de los aviones en aproximación.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - Si una autorización ATC no es adecuada para el piloto al mando, éste deberá:",
    opciones: [
      {
        textoRespuesta: "Solicitar una nueva autorización al ATC, que deberá atender la solicitud del piloto.",
        isCorrect: false
      },
      {
        textoRespuesta: "Deberá proponer al correspondiente ATC el contenido de una nueva autorización.",
        isCorrect: false
      },
      {
        textoRespuesta: "Solicitar, si es posible, obtener el ATC una modificación de la autorización en cuestión.",
        isCorrect: true
      },
      {
        textoRespuesta: "Deberá aceptar la autorización del ATC pues ésta se basa en el plan de vuelo presentado al ATC.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - Volando en un FIR, qué servicios podemos esperar:",
    opciones: [
      {
        textoRespuesta: "Información y alerta,",
        isCorrect: true
      },
      {
        textoRespuesta: "Información, alerta y control.",
        isCorrect: false
      },
      {
        textoRespuesta: "Alerta y control",
        isCorrect: false
      },
      {
        textoRespuesta: "Información y control.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "7 - Cuando se emplea un radar secundario, un avión puede ser identificado mediante uno de los siguientes procedimientos:",
    opciones: [
      {
        textoRespuesta: "Solicitando al piloto que pase de ON a STBY.",
        isCorrect: false
      },
      {
        textoRespuesta: "Observando...cumplimiento de la orden de pasar el transponder de situación ON a STBY y vuelta a ON.",
        isCorrect: true
      },
      {
        textoRespuesta: "Solicitando al piloto que ponga el transponder en ON.",
        isCorrect: false
      },
      {
        textoRespuesta: "Solicitando al piloto que ajuste el transponder a la posición OFF.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - Cuando se pone en evidencia que un avión tiene dificultades la decisión de iniciar las fases de alerta es una responsabilidad que recae sobre:",
    opciones: [
      {
        textoRespuesta: "Los centros operativos de control de tráfico aéreo",
        isCorrect: true
      },
      {
        textoRespuesta: "Los centros de coordinación de búsqueda y salvamento",
        isCorrect: false
      },
      {
        textoRespuesta: "Los servicios de coordinación de tráfico aéreo",
        isCorrect: false
      },
      {
        textoRespuesta: "Los organismos encargados del control y de la información de vuelo",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - Un servicio de control de que se hace responsable, en lo que se refiere a separación?",
    opciones: [
      {
        textoRespuesta: "Es responsable de separarnos con el terreno y otras aeronaves",
        isCorrect: false
      },
      {
        textoRespuesta: "Es responsable de separarnos solo con el terreno",
        isCorrect: false
      },
      {
        textoRespuesta: "Es responsable de separarnos solo de otras aeronaves",
        isCorrect: true
      },
      {
        textoRespuesta: "Es responsable de separarnos solo de otras aeronaves y de los helicópteros",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - ¿Que deberá hacer el piloto de un avión en el circuito de tráfico de un aeropuerto para alertar de sus problemas de comunicación por radio si se ve obligado a aterrizar sin requerir ayuda inmediata?:",
    opciones: [
      {
        textoRespuesta: "Encender y apagar repetidamente las luces de aterrizaje.",
        isCorrect: true
      },
      {
        textoRespuesta: "Encender y apagar –tres veces- las luces de aterrizaje.",
        isCorrect: false
      },
      {
        textoRespuesta: "Encender y apagar –cuatro veces- las luces de aterrizaje.",
        isCorrect: false
      },
      {
        textoRespuesta: "Encender y apagar –cuatro veces- las luces de navegación.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - Suponiendo una pista de 2000 metros de longitud, y sin que se hayan establecido las posiciones de espera en rodaje, los aviones no deberán realizar esperas a menos de la siguiente distancia de la pista en servicio:",
    opciones: [
      {
        textoRespuesta: "30 metros.",
        isCorrect: false
      },
      {
        textoRespuesta: "45 metros.",
        isCorrect: false
      },
      {
        textoRespuesta: "60 metros.",
        isCorrect: false
      },
      {
        textoRespuesta: "50 metros.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "12 - La “Zona despejada de obstáculos” es un área definida y rectangular, que tiene por objeto:",
    opciones: [
      {
        textoRespuesta: "Permitir que un avión realice parte de su ascenso inicial hasta una altura determinada.",
        isCorrect: true
      },
      {
        textoRespuesta: "Permitir que un avión pueda detenerse tras haber abortado su maniobra de despegue.",
        isCorrect: false
      },
      {
        textoRespuesta: "Reducir el riesgo de daño a los aviones que salen de una pista.",
        isCorrect: false
      },
      {
        textoRespuesta: "Proteger a los aviones en las maniobras de despegue o aterrizaje.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - En que parte del AIP esta el servicio SIGMET?:",
    opciones: [
      {
        textoRespuesta: "ENR.",
        isCorrect: false
      },
      {
        textoRespuesta: "AGA.",
        isCorrect: false
      },
      {
        textoRespuesta: "MET.",
        isCorrect: false
      },
      {
        textoRespuesta: "GEN.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "14 - ¿Qué quiere decir la orden del control de salidas “vuelva a navegación propia” una vez vectorizado a una aerovía?",
    opciones: [
      {
        textoRespuesta: "El servicio radar ha concluido",
        isCorrect: false
      },
      {
        textoRespuesta: "El ATC no emitirá más avisos sobre tráficos",
        isCorrect: false
      },
      {
        textoRespuesta: "Continúa en contacto radar, pero deberá informar de su posición",
        isCorrect: false
      },
      {
        textoRespuesta: "Deberá mantenerse en la misma utilizando el equipo de navegación de a bordo",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "15 - ASDA (Acceleration Stop Distance Available) es:",
    opciones: [
      {
        textoRespuesta: "La longitud de la pista mas la longitud de la stopway (si disponible)",
        isCorrect: false
      },
      {
        textoRespuesta: "La longitud de la carrera de despegue disponible mas la longitud de la stopway (si disponible)",
        isCorrect: true
      },
      {
        textoRespuesta: "La longitud de la carrera de despegue disponible mas la longitud de la stopway y clearway (si disponible)",
        isCorrect: false
      },
      {
        textoRespuesta: "La longitud de la carrera de despegue disponible mas la longitud de la clearway",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "16 - Referencia de aeródromo por categoría",
    opciones: [
      {
        textoRespuesta: "2B",
        isCorrect: true
      },
      {
        textoRespuesta: "6D",
        isCorrect: false
      },
      {
        textoRespuesta: "4G",
        isCorrect: false
      },
      {
        textoRespuesta: "5E",
        isCorrect: false
      }
    ]
  }
];


export default preguntas;