const preguntas = [
  {
    titulo: "1 - Se considera que una aeronave alcanza a otra cuando:",
    opciones: [
      {
        textoRespuesta: "Se acerca con un ángulo menor de 90º con respecto al eje de simetría",
        isCorrect: false
      },
      {
        textoRespuesta: "Se acerca con un ángulo menor de 70º con respecto al eje de simetría",
        isCorrect: true
      },
      {
        textoRespuesta: "Se acerca con un ángulo menor de 90º con respecto al eje de longitudinal",
        isCorrect: false
      },
      {
        textoRespuesta: "Se acerca con un ángulo menor de 70º con respecto al eje de longitudinal",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "2 - El plan de vuelo para un vuelo VFR controlado deberá presentarse al menos:",
    opciones: [
      {
        textoRespuesta: "15 minutos antes del vuelo",
        isCorrect: false
      },
      {
        textoRespuesta: "60 minutos antes del vuelo",
        isCorrect: false
      },
      {
        textoRespuesta: "30 minutos antes del vuelo",
        isCorrect: true
      },
      {
        textoRespuesta: "75 minutos antes del vuelo",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3 - Cuando el transponder no este disponible, la identificación de una aeronave se llevara a cabo de una de las siguientes formas",
    opciones: [
      {
        textoRespuesta: "Dando instrucciones al piloto de realizar uno o más virajes de 10º",
        isCorrect: false
      },
      {
        textoRespuesta: "Dando instrucciones al piloto de realizar uno o más virajes de 45º",
        isCorrect: false
      },
      {
        textoRespuesta: "Dando instrucciones al piloto de realizar uno o más virajes de 30º o más",
        isCorrect: true
      },
      {
        textoRespuesta: "Dando instrucciones al piloto de realizar uno o más virajes de 20º o más",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4 - Una bengala roja lanzada hacia un avión significa:",
    opciones: [
      {
        textoRespuesta: "Vuelva y aterrice.",
        isCorrect: false
      },
      {
        textoRespuesta: "No aterrice.",
        isCorrect: false
      },
      {
        textoRespuesta: "A pesar de las órdenes previas, no aterrice de momento.",
        isCorrect: true
      },
      {
        textoRespuesta: "Deje paso a otro tráfico y manténgase volando en circuito de espera.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "5 - Cuáles son las condiciones VMC en un espacio aéreo de clase B por encima de FL100.",
    opciones: [
      {
        textoRespuesta: "Despejado y 8 kilómetros.",
        isCorrect: true
      },
      {
        textoRespuesta: "Despejado y 5 kilómetros.",
        isCorrect: false
      },
      {
        textoRespuesta: "5 kilómetros y 300 ft de separación vertical a las nubes y 1.500 metros en horizontal.",
        isCorrect: false
      },
      {
        textoRespuesta: "Igual que la anterior pero con 3 kilómetros.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6 - ¿Que deberá hacer el piloto de un avión en el circuito de trafico de un aeropuerto para alertar de sus problemas de comunicación por radio si se ve obligado a aterrizar sin requerir ayuda inmediata?:",
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
    titulo: "7 - En caso de demora de un vuelo no controlado con plan de vuelo presentado, éste deberá corregirse por uno nuevo cuando:",
    opciones: [
      {
        textoRespuesta: "La demora sea superior a 30 min. respecto a la hora prevista de salida.",
        isCorrect: false
      },
      {
        textoRespuesta: "La demora sea superior a 60 min. respecto a la hora prevista de fuera calzos.",
        isCorrect: true
      },
      {
        textoRespuesta: "La demora sea superior a 30 min. respecto a la hora prevista para la retirada de calzos.",
        isCorrect: false
      },
      {
        textoRespuesta: "La demora sea superior a 60 min. respecto a la hora prevista para la salida.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "8 - Los centros de control de área emiten autorizaciones para:",
    opciones: [
      {
        textoRespuesta: "Conseguir la debida separación entre vuelos controlados",
        isCorrect: true
      },
      {
        textoRespuesta: "Conseguir la debida separación de vuelos IFR",
        isCorrect: false
      },
      {
        textoRespuesta: "Proporcionar servicio de información de vuelos",
        isCorrect: false
      },
      {
        textoRespuesta: "Proporcionar servicio de asesoramiento",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "9 - Todo avión que sea interceptado por otro, si esta equipado con transpondedor SSR, deberá –salvo que el centro ATS correspondiente ordene lo contrario- seleccionar uno de los siguientes codigos en modo “A”?",
    opciones: [
      {
        textoRespuesta: "7500",
        isCorrect: true
      },
      {
        textoRespuesta: "7600",
        isCorrect: false
      },
      {
        textoRespuesta: "7700",
        isCorrect: false
      },
      {
        textoRespuesta: "7000",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "10 - ¿Cuándo se actualizan las emisiones del ATIS?:",
    opciones: [
      {
        textoRespuesta: "Tras recibir cualquier informe meteorológico oficial, con independencia de las variaciones en el contenido o en los valores recogidos.",
        isCorrect: true
      },
      {
        textoRespuesta: "Solamente cuando se produzcan cambios significativos que afecten al techo y/o a la visibilidad.",
        isCorrect: false
      },
      {
        textoRespuesta: "Solamente cuando las condiciones meteorológicas cambien lo suficiente como para hacer necesario un cambio de la pista en servicio o de la aproximación por instrumentos que se este utilizando.",
        isCorrect: false
      },
      {
        textoRespuesta: "Cada 30 minutos cuando las condiciones meteorológicas se encuentren por debajo de las correspondientes a los vuelos VFR; en caso contrario, cada 60 minutos.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "11 - La duración del periodo de validez de un certificado medico empezara a contar a partir de:",
    opciones: [
      {
        textoRespuesta: "La fecha de emisión o de renovación de la licencia.",
        isCorrect: false
      },
      {
        textoRespuesta: "La fecha de entrega de la licencia al piloto.",
        isCorrect: false
      },
      {
        textoRespuesta: "La fecha de emisión o de validación de la licencia.",
        isCorrect: false
      },
      {
        textoRespuesta: "La fecha de expedición del certificado.",
        isCorrect: true
      }
    ]
  },
  {
    titulo: "12 - El señalero pedirá al piloto que active los frenos de estacionamiento mediante las siguientes señales:",
    opciones: [
      {
        textoRespuesta: "Cruzando los brazos extendidos sobre su cabeza.",
        isCorrect: false
      },
      {
        textoRespuesta: "Levantando los brazos y las manos con los dedos extendidos horizontalmente hacia delante y cerrando los puños a continuación.",
        isCorrect: true
      },
      {
        textoRespuesta: "Moviendo horizontalmente sus manos con los dedos extendidos y las palmas hacia abajo.",
        isCorrect: false
      },
      {
        textoRespuesta: "Brazos abajo, palmas hacía adentro, moviendo los brazos hacia adentro desde la posición de extendido.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "13 - ¿Quién es responsable de acuerdo al Anexo 13 de la convención de Chicago de iniciar la investigación de un accidente?:",
    opciones: [
      {
        textoRespuesta: "Las autoridades del estado en que el avión esta registrado.",
        isCorrect: false
      },
      {
        textoRespuesta: "El gobierno del estado en que tiene lugar el accidente.",
        isCorrect: true
      },
      {
        textoRespuesta: "Operadores del mismo tipo de avión.",
        isCorrect: false
      },
      {
        textoRespuesta: "El fabricante del avión.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14 - ¿Qué significa el termino de ATC “Contacto Radar”?",
    opciones: [
      {
        textoRespuesta: "Su avión ha sido identificado en la pantalla de radar, y recibirá instrucciones radar en vuelo hasta que la identificación radar concluya.",
        isCorrect: true
      },
      {
        textoRespuesta: "Recibirá avisos sobre tráficos hasta que se le informe de la conclusión del servicio o de la perdida del contacto radar.",
        isCorrect: false
      },
      {
        textoRespuesta: "El ATC recibe la señal de su transpondedor y se le facilitaran vectores y avisos sobre tráficos hasta que se le notifique la perdida del contacto radar.",
        isCorrect: false
      },
      {
        textoRespuesta: "Su avión ha sido identificado y será separado de los demás tráficos mientras permanezca en contacto con este centro de control radar.",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "15 - Donde empieza la CTA",
    opciones: [
      {
        textoRespuesta: "a cualquier nivel pero siempre que coincida con un nivel de vuelo VFR",
        isCorrect: false
      },
      {
        textoRespuesta: "a 700' agl",
        isCorrect: true
      },
      {
        textoRespuesta: "a 1000' agl",
        isCorrect: false
      },
      {
        textoRespuesta: "a 1000' agl o a 3000´msl la que resulte mayor",
        isCorrect: false
      }
    ]
  },
  {
    titulo: "16 - ¿Qué anexo de la OACI incluye la investigación de incidentes y accidentes de aviación?",
    opciones: [
      {
        textoRespuesta: "Anexo 13",
        isCorrect: true
      },
      {
        textoRespuesta: "Anexo 4",
        isCorrect: false
      },
      {
        textoRespuesta: "Anexo 7",
        isCorrect: false
      },
      {
        textoRespuesta: "Anexo 10",
        isCorrect: false
      }
    ]
  }
];


export default preguntas;