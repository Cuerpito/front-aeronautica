const preguntas = [
    {
        titulo: "1. ¿Qué frase deberá emplear un piloto que precisa que le sea repetido un mensaje en su totalidad?",
        opciones: [
            {
                textoRespuesta: "Repita",
                isCorrect: true
            },
            {
                textoRespuesta: "Repita su mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Repita su última transmisión",
                isCorrect: false
            },
            {
                textoRespuesta: "¿Cuál era su mensaje?",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. La abreviatura 'MSA' significa:",
        opciones: [
            {
                textoRespuesta: "Aproximación frustrada",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud media estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "Hora media de Greenwich",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "3. ¿Qué significa la orden \"Motor y al aire\"?:",
        opciones: [
            {
                textoRespuesta: "Adelante al tráfico precedente",
                isCorrect: false
            },
            {
                textoRespuesta: "Vire 360º",
                isCorrect: false
            },
            {
                textoRespuesta: "Efectúe aproximación frustrada",
                isCorrect: true
            },
            {
                textoRespuesta: "Haga toma y despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. ¿Qué frase deberá emplear un piloto que quisiera decir: 'Me gustaría saber...' o 'Me gustaría obtener...'?",
        opciones: [
            {
                textoRespuesta: "Confirme",
                isCorrect: false
            },
            {
                textoRespuesta: "Solicito",
                isCorrect: true
            },
            {
                textoRespuesta: "Acuse Recibo",
                isCorrect: false
            },
            {
                textoRespuesta: "Notifique",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Volamos con una indicación de rumbo en la brújula de 200. ¿Cuál es la forma correcta de decir por la radio el rumbo que llevamos?",
        opciones: [
            {
                textoRespuesta: "Veinte",
                isCorrect: false
            },
            {
                textoRespuesta: "Doscientos",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos cero",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos cero cero",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "6. ¿Cual es la forma correcta de deletrear HB­JCY en un mensaje radiotelefónico?",
        opciones: [
            {
                textoRespuesta: "Hotel Bravo India Yankee Charlie",
                isCorrect: false
            },
            {
                textoRespuesta: "Hotel Bravo India Víctor Charlie",
                isCorrect: false
            },
            {
                textoRespuesta: "Hotel Bravo Juliet Charlie Yankee",
                isCorrect: true
            },
            {
                textoRespuesta: "Hotel Bravo Juliet India Kilo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. En un aeropuerto con las comunicaciones muy congestionadas ¿Qué medida tomaría para no entorpecer las mismas a la hora de recibir una autorización?",
        opciones: [
            {
                textoRespuesta: "Memorizar la autorización para colacionarla correctamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Anotar la autorización para luego no tener dudas a la hora de colacionarla",
                isCorrect: true
            },
            {
                textoRespuesta: "No colacionar ninguna autorización",
                isCorrect: false
            },
            {
                textoRespuesta: "Evitar pedir autorización para rodar. Rodaremos directamente y nos pararemos en el punto de espera de la pista en servicio. Preguntas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Durante la transmisión de números que contengan decimales:",
        opciones: [
            {
                textoRespuesta: "El termino COMA siempre se debe transmitir",
                isCorrect: true
            },
            {
                textoRespuesta: "El termino COMA puede ser omitido solo con entidades ATS conocidas",
                isCorrect: false
            },
            {
                textoRespuesta: "El termino COMA se puede omitir si no hay posibilidad de error",
                isCorrect: false
            },
            {
                textoRespuesta: "El termino COMA se debe decir solo si está seguido por tres dígitos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Al avión se le ordena mantener su posición antes de entrar a pista en servicio. ¿Qué frase es correcta?",
        opciones: [
            {
                textoRespuesta: "Roger (enterado)",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos pararemos antes",
                isCorrect: false
            },
            {
                textoRespuesta: "Manteniendo posición sin acceder",
                isCorrect: true
            },
            {
                textoRespuesta: "Wilco (comprendido)",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Cuando en un mensaje ha habido un error en la transmisión, el piloto comunica la versión correcta diciendo:",
        opciones: [
            {
                textoRespuesta: "QNH.....corrección....",
                isCorrect: true
            },
            {
                textoRespuesta: "QNH.....negativo....",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH.....negativo repito de nuevo....",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH.....negativo....",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Como debe llamar el avión EC­-ABC a la torre de Córdoba por primera vez",
        opciones: [
            {
                textoRespuesta: "Torre de Córdoba E-BC",
                isCorrect: false
            },
            {
                textoRespuesta: "Torre EC-ABC",
                isCorrect: false
            },
            {
                textoRespuesta: "Córdoba EC-ABC",
                isCorrect: false
            },
            {
                textoRespuesta: "Torre de Córdoba EC-ABC",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "12. ¿Cuál es la forma correcta de expresar la visibilidad?",
        opciones: [
            {
                textoRespuesta: "Visibilidad 1.200 metros",
                isCorrect: true
            },
            {
                textoRespuesta: "Visibilidad 1.200 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "Visibilidad 1,2 millas náuticas",
                isCorrect: false
            },
            {
                textoRespuesta: "Visibilidad 1,2 kilometres",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. ¿Cómo debe informar un piloto que se encuentra “Listo para el despegue”?",
        opciones: [
            {
                textoRespuesta: "Listo para rodar a pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Listo para alinear",
                isCorrect: false
            },
            {
                textoRespuesta: "En cabecera",
                isCorrect: false
            },
            {
                textoRespuesta: "Listo para salida o listo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. Después de hacer una llamada a la estación aeronáutica y antes de hacer una segunda llamada, deberá transcurrir un periodo de por lo menos:",
        opciones: [
            {
                textoRespuesta: "30 segundos",
                isCorrect: false
            },
            {
                textoRespuesta: "5 segundos",
                isCorrect: false
            },
            {
                textoRespuesta: "20 segundos",
                isCorrect: false
            },
            {
                textoRespuesta: "10 segundos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "15. El procedimiento de llamada de una aeronave que trata de establecer comunicación con una estación aeronáutica, será:",
        opciones: [
            {
                textoRespuesta: "EC-CUE llamando a la Torre de Valencia, cambio",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-CUE para Valencia Torre, cambio",
                isCorrect: false
            },
            {
                textoRespuesta: "Valencia Torre EC-CUE",
                isCorrect: true
            },
            {
                textoRespuesta: "Torre de Valencia aquí EC-CUE, cambio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. ¿Cuál de las siguientes frases describe mejor el término 'Mantenga escucha (standby)?",
        opciones: [
            {
                textoRespuesta: "Espere y le llamaré",
                isCorrect: true
            },
            {
                textoRespuesta: "Continúe en el rumbo actual y escuche",
                isCorrect: false
            },
            {
                textoRespuesta: "Seleccione STANDBY en el transpondedor",
                isCorrect: false
            },
            {
                textoRespuesta: "Permiso concedido para la acción propuesta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. La frecuencia del control de rodadura:",
        opciones: [
            {
                textoRespuesta: "Puede ser distinta a la de la torre",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre es la misma que la de la torre",
                isCorrect: false
            },
            {
                textoRespuesta: "Coincide con la de aproximación",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Después que se haya establecido la comunicación por medio del distintivo de llamada EC­-ABC, ¿Qué distintivo de llamada abreviada usaríamos?",
        opciones: [
            {
                textoRespuesta: "EBC",
                isCorrect: true
            },
            {
                textoRespuesta: "BC",
                isCorrect: false
            },
            {
                textoRespuesta: "No existe distintivo de llamada abreviado para EC-ABC",
                isCorrect: false
            },
            {
                textoRespuesta: "ABC",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. ¿Cómo puede una aeronave en vuelo obtener informes meteorológicos de rutina (METAR) de aeródromos específicos?",
        opciones: [
            {
                textoRespuesta: "VOLMET",
                isCorrect: true
            },
            {
                textoRespuesta: "ATIS",
                isCorrect: false
            },
            {
                textoRespuesta: "AFIS",
                isCorrect: false
            },
            {
                textoRespuesta: "SIGMET",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. ¿Cuál de estas frases significa 'Squawk 1234'?",
        opciones: [
            {
                textoRespuesta: "Realice prueba de radio en 123,4 MHz",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantenga escucha en 123,4 MHz",
                isCorrect: false
            },
            {
                textoRespuesta: "Selecte código 1234 en el SSR (transponder)",
                isCorrect: true
            },
            {
                textoRespuesta: "Realice una llamada corta para radiogoniometría (DF)",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. ¿Cómo debe terminar un piloto la colación de una autorización ATC?",
        opciones: [
            {
                textoRespuesta: "Con la palabra WILCO",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el indicativo de llamada de la estación de tierra ATC",
                isCorrect: false
            },
            {
                textoRespuesta: "Con su indicativo de llamada",
                isCorrect: true
            },
            {
                textoRespuesta: "Con la palabra ROGER",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. Una aeronave en emergencia transmite en transponder a:",
        opciones: [
            {
                textoRespuesta: "7500",
                isCorrect: false
            },
            {
                textoRespuesta: "6700",
                isCorrect: false
            },
            {
                textoRespuesta: "7600",
                isCorrect: false
            },
            {
                textoRespuesta: "7700",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "23. La prioridad de la instrucción 'ruede a pista OS' es:",
        opciones: [
            {
                textoRespuesta: "Menor que 'autorizado a aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "La misma que 'alinee pista 07 y espere'",
                isCorrect: true
            },
            {
                textoRespuesta: "Mayor que 'transmita para QDM'",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor que 'precaución, trabajos de construcción a la izquierda de la calle de rodadura'",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Las aeronaves se nombrarán por su matrícula o bien:",
        opciones: [
            {
                textoRespuesta: "a) Por el apellido del piloto al mando",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Por el color dominante de la aeronave. Ejemplo: Santander, rojo en base derecha para 29",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Por los designadores concertados, compuestos por un nombre y un número. Ejemplo: Viva114",
                isCorrect: true
            },
            {
                textoRespuesta: "d) La \"b\" y \"c\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. Cuando en un mensaje ha habido un error en la transmisión, el piloto comunica la versión correcta diciendo:",
        opciones: [
            {
                textoRespuesta: "Negativo, repito de nuevo",
                isCorrect: false
            },
            {
                textoRespuesta: "Error, repito de nuevo",
                isCorrect: false
            },
            {
                textoRespuesta: "Corrección",
                isCorrect: true
            },
            {
                textoRespuesta: "Negativo, repito de nuevo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. ¿Qué código Q se usa para reportar la altitud?",
        opciones: [
            {
                textoRespuesta: "QNH",
                isCorrect: true
            },
            {
                textoRespuesta: "QDM",
                isCorrect: false
            },
            {
                textoRespuesta: "QSI",
                isCorrect: false
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. El servicio de aproximación se encarga de:",
        opciones: [
            {
                textoRespuesta: "Dar las autorizaciones para el despegue y aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener separaciones de seguridad entre aeronaves que se dirigen a la aproximación o salen del aeropuerto",
                isCorrect: true
            },
            {
                textoRespuesta: "Solamente de dar las autorizaciones de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Solamente de dar las autorizaciones de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. ¿Qué palabra se usa para comunicar una situación de socorro?",
        opciones: [
            {
                textoRespuesta: "PAN",
                isCorrect: false
            },
            {
                textoRespuesta: "MAYDAY",
                isCorrect: true
            },
            {
                textoRespuesta: "VIRGEN SANTA",
                isCorrect: false
            },
            {
                textoRespuesta: "ROGER",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. Si nos piden por radio 'colacione', nos están pidiendo:",
        opciones: [
            {
                textoRespuesta: "Apuntar en papel el mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Encender y apagar la luz de aterrizaje para que la torre sepa que hemos comprendido el mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Repetir el mensaje según se ha recibido",
                isCorrect: true
            },
            {
                textoRespuesta: "Ejecutar inmediatamente la orden recibida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Un mensaje será más efectivo y más fácil de comprender si:",
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
                textoRespuesta: "Se enfatiza cada inicio de palabra.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se usa el método de dos veces cada palabra",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. ¿Qué frase deberá emplear un piloto que precisa que le sea repetido un mensaje en su totalidad?",
        opciones: [
            {
                textoRespuesta: "Repita su mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Repita su última transmisión",
                isCorrect: false
            },
            {
                textoRespuesta: "¿Cuál era su mensaje?",
                isCorrect: false
            },
            {
                textoRespuesta: "Repita",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. ¿Cual debería ser la rapidez con que se habla en las radiodifusiones telefónicas?",
        opciones: [
            {
                textoRespuesta: "No excederá de 60 palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "No excederé de 80 palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "No excederé de 100 palabras por minuto",
                isCorrect: true
            },
            {
                textoRespuesta: "No excederé de 120 palabras por minuto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. ¿Cuál de los siguientes datos no es necesario dar en un informe de posición en ruta?",
        opciones: [
            {
                textoRespuesta: "Hora estimada a posición siguiente",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeropuerto más cercano",
                isCorrect: true
            },
            {
                textoRespuesta: "Nivel de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Posición siguiente por la que se pasará",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. Ancho de banda entre 118­-136 Mhz",
        opciones: [
            {
                textoRespuesta: "VHF",
                isCorrect: true
            },
            {
                textoRespuesta: "UHF",
                isCorrect: false
            },
            {
                textoRespuesta: "HF",
                isCorrect: false
            },
            {
                textoRespuesta: "LF",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. La velocidad de propagación de las ondas electromagnéticas es:",
        opciones: [
            {
                textoRespuesta: "100.000 m/segundo",
                isCorrect: false
            },
            {
                textoRespuesta: "300.000 Km/segundo",
                isCorrect: true
            },
            {
                textoRespuesta: "500.000 Km/hora",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad del sonido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. ¿Cuál es el significado de la abreviatura 'HX'?",
        opciones: [
            {
                textoRespuesta: "Sin horario específico de trabajo",
                isCorrect: true
            },
            {
                textoRespuesta: "De orto a ocaso",
                isCorrect: false
            },
            {
                textoRespuesta: "De ocaso a orto",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio continuo día y noche",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. ¿Al hacer pruebas de radio, debiera usarse la escala de legibilidad,¿ cuál es esta escala?",
        opciones: [
            {
                textoRespuesta: "1 legible de vez en cuando, 2 perfectamente legible, 3 legible, 4 legible con dificultad, 5 ilegible",
                isCorrect: false
            },
            {
                textoRespuesta: "1 perfectamente legible, 2 legible, 3 legible de vez. en cuando, 4 legible con dificultad, 5 ilegible",
                isCorrect: false
            },
            {
                textoRespuesta: "1 ilegible, 2 legible de vez en cuando, 3 legible con dificultad, 4 legible, 5 perfectamente legible",
                isCorrect: true
            },
            {
                textoRespuesta: "1 ilegible, 2 legible con dificultad, 3 legible de vez en cuando, 4 legible, 5 perfectamente legible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. La llamada de Socorro transmitida por el avión EC-­CUE en peligro consistiría en radiotelefonía.",
        opciones: [
            {
                textoRespuesta: "Mayday, mayday, mayday, EC-CUE parada de motor sobre Almenara, intentaré un aterrizaje de emergencia en La Llosa.",
                isCorrect: true
            },
            {
                textoRespuesta: "Pan, pan, pan, EC-CUE parada de motor sobre Almenara, intentaré un aterrizaje de emergencia en La Llosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayday aquí EC-CUE parada de motor sobre Almenara, intentaré un aterrizaje de emergencia en La Llosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Pan aquí EC-CUE parada do motor sobre Almenara, intentaré hacer un aterrizaje de emergencia en La Llosa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Como se dice el rumbo 160 por la radio",
        opciones: [
            {
                textoRespuesta: "Uno seis cero",
                isCorrect: true
            },
            {
                textoRespuesta: "Ciento sesenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno sesenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Dieciséis cero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. ¿Cuál es la banda de frecuencias asignadas al servicio móvil aeronáutico?",
        opciones: [
            {
                textoRespuesta: "118.000 - 136.975 MHz",
                isCorrect: true
            },
            {
                textoRespuesta: "108.000 - 117.975 MHz",
                isCorrect: false
            },
            {
                textoRespuesta: "1810 - 2850 KHz",
                isCorrect: false
            },
            {
                textoRespuesta: "11650 - 13200 KHz",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. Un mensaje de urgencia comienza con la señal radiotelefónica de urgencia repetida 3 veces, esta frase es:",
        opciones: [
            {
                textoRespuesta: "URG",
                isCorrect: false
            },
            {
                textoRespuesta: "MAY DAY",
                isCorrect: false
            },
            {
                textoRespuesta: "PIN",
                isCorrect: false
            },
            {
                textoRespuesta: "PAN",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "42. ¿Qué significa para los aviones en vuelo una luz pirotécnica roja?",
        opciones: [
            {
                textoRespuesta: "Abandone el aeródromo inmediatamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Ceda el paso a otras aeronaves y siga en circuito",
                isCorrect: false
            },
            {
                textoRespuesta: "A pesar de las instrucciones anteriores no aterrice por ahora",
                isCorrect: true
            },
            {
                textoRespuesta: "Regrese para aterrizar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. ¿Qué significa QDM?",
        opciones: [
            {
                textoRespuesta: "Marcación verdadera desde la emisora",
                isCorrect: false
            },
            {
                textoRespuesta: "Marcación magnética desde la emisora",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo verdadero hacia la emisora (sin viento)",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo magnético hacia la emisora (sin viento)",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. Según el alfabeto fonético, la letra 'U' se dice:",
        opciones: [
            {
                textoRespuesta: "a) Unión",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Uniford",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Uniform",
                isCorrect: true
            },
            {
                textoRespuesta: "d) La \"a\" y la \"c\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. Si es requerido para reportar su altura, a que clave del código Q tendrá que referirse",
        opciones: [
            {
                textoRespuesta: "QSI",
                isCorrect: false
            },
            {
                textoRespuesta: "QFE",
                isCorrect: true
            },
            {
                textoRespuesta: "QNH",
                isCorrect: false
            },
            {
                textoRespuesta: "QDM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. La llamada de Socorro transmitida por el avión EC-­CUE en peligro consistiría en radiotelefonía.",
        opciones: [
            {
                textoRespuesta: "Mayday, mayday, mayday, EC-CUE parada de motor sobre Almenara, intentaré un aterrizaje de emergencia en La Llosa",
                isCorrect: true
            },
            {
                textoRespuesta: "Pan, pan, pan, EC-CUE parada de motor sobre Almenara, intentaré un aterrizaje de emergencia en La Llosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayday aquí EC-CUE parada de motor sobre Almenara, intentaré un aterrizaje de emergencia en La Llosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Pan aquí EC-CUE parada do motor sobre Almenara, intentaré hacer un aterrizaje de emergencia en La Llosa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. Todos los números en radiotelefonía, se transmitirán pronunciando cada dígito separadamente:",
        opciones: [
            {
                textoRespuesta: "Cierto",
                isCorrect: false
            },
            {
                textoRespuesta: "Cierto, excepto los millares redondos",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso",
                isCorrect: false
            },
            {
                textoRespuesta: "Cierto, excepto los que se utilicen en la transmisión de información sobre altitud, altura de las nubes, visibilidad y alcance visual en la pista, constituidos únicamente por centenas redondas o millares redondos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "48. ¿“Qué significa la orden motor y al aire”?",
        opciones: [
            {
                textoRespuesta: "Adelante al tráfico procedente",
                isCorrect: false
            },
            {
                textoRespuesta: "Vire 360°",
                isCorrect: false
            },
            {
                textoRespuesta: "Efectúe aproximación frustrada",
                isCorrect: true
            },
            {
                textoRespuesta: "Haga toma y despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Un avión con SSR 7600. Esto indica:",
        opciones: [
            {
                textoRespuesta: "Solicita (ruega) el cambio de nivel inmediato",
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
        titulo: "50. Qué significa roger:",
        opciones: [
            {
                textoRespuesta: "Respuesta directa en afirmativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Respuesta directa en negativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorización para despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "He recibido entera su última transmisión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "51. Indíquese qué código se debe seleccionar en el transponder para indicar un fallo en las comunicaciones:",
        opciones: [
            {
                textoRespuesta: "7600",
                isCorrect: true
            },
            {
                textoRespuesta: "7700",
                isCorrect: false
            },
            {
                textoRespuesta: "6700",
                isCorrect: false
            },
            {
                textoRespuesta: "7500",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. El Servicio internacional de telecomunicaciones aeronáuticas se dividirá en:",
        opciones: [
            {
                textoRespuesta: "Cuatro partes: Servicio Fijo Aeronáutico; Servicio Móvil Aeronáutico; Servicio de Radionavegación Aeronáutica; Servicio de Radiodifusión Aeronáutica",
                isCorrect: true
            },
            {
                textoRespuesta: "Tres partes: Servicio de Información de Vuelo; Servicio de Control del Tránsito Aéreo; Servicio de Control de Aproximación",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuatro partes: Servicio de Tránsito Aéreo; Servicio de Información Aeronáutica Servicio Meteorológico; Servicio de Telecomunicaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos partes: Servicio de Tránsito Aéreo y Servicio de Telecomunicaciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. Una aeronave en estado de emergencia deberá responder en el transponder",
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
        titulo: "54. Si detectamos un fallo de transmisión en nuestra radio ¿Qué es lo primero que debe hacer?",
        opciones: [
            {
                textoRespuesta: "Realizar el circuito de fallo de radio del aeródromo al que vamos a aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobar que la clavija del micrófono se halla bien conectada",
                isCorrect: true
            },
            {
                textoRespuesta: "Transmitir dos veces la frase \"Transmitiendo a ciegas\" seguido del nombre del destinatario de dicho mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Desconectar y conectar el máster",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. Si con fallo de radio vamos a entrar en un aeródromo no controlado, ¿qué acciones tomaría?",
        opciones: [
            {
                textoRespuesta: "Extremaremos las precauciones vigilando la posición de los demás tráficos antes de entrar en circuito y durante el mismo",
                isCorrect: true
            },
            {
                textoRespuesta: "No podemos entrar en un aeródromo no controlado sin radio",
                isCorrect: false
            },
            {
                textoRespuesta: "Podemos entrar en el aeródromo pero llegando en larga final, no podemos hacer los demás tramos del circuito",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. ¿Podemos realizar comentarios personales con nuestra radio instalada en la aeronave en banda aérea con otros compañeros?",
        opciones: [
            {
                textoRespuesta: "Sí, si no molestamos a nadie",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca, es solo para comunicaciones estrictamente de tráfico aeronáutico",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, si cambiamos a correlativa",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo si es algo importante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. Si desde la torre nos transmiten \"Continúe para el final número dos después de Cessna\", significa:",
        opciones: [
            {
                textoRespuesta: "Aterrizamos en la pista 02 después de la Cessna",
                isCorrect: false
            },
            {
                textoRespuesta: "Al finalizar el vuelo nos dirigiremos al aparcamiento número dos",
                isCorrect: false
            },
            {
                textoRespuesta: "La Cessna aterrizara antes que nosotros",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. La frecuencia 121.500 Mhz esta designada para:",
        opciones: [
            {
                textoRespuesta: "Frecuencia de operaciones de líneas aéreas",
                isCorrect: false
            },
            {
                textoRespuesta: "Una frecuencia de emergencia internacional",
                isCorrect: true
            },
            {
                textoRespuesta: "Una frecuencia para comunicaciones aire-aire",
                isCorrect: false
            },
            {
                textoRespuesta: "Una frecuencia UHF regional",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. Si la torre nos dice 'ELK, Córdoba, rodar a posición pista 03, temperatura 21, punto de rocío 15, QNH 1001, avise listo', contestaremos:",
        opciones: [
            {
                textoRespuesta: "Temperatura 21, QNH 1001 ELK",
                isCorrect: false
            },
            {
                textoRespuesta: "Rodar a posición pista 03, temperatura 21, avisaré listo ELK",
                isCorrect: false
            },
            {
                textoRespuesta: "Rodar a posición pista 03, QNH 1001, avisaré listo ELK",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas las contestaciones anteriores pueden ser válidas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. Si en vuelo, la torre nos emite una luz roja intermitente, significa:",
        opciones: [
            {
                textoRespuesta: "Aeródromo peligroso, no aterrice",
                isCorrect: true
            },
            {
                textoRespuesta: "Ceda el paso a las otras aeronaves y siga en circuito",
                isCorrect: false
            },
            {
                textoRespuesta: "Apartarse del área de aterrizaje en uso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrice cuanto antes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. Cuando en una transmisión refiriéndose a la visibilidad y techo de nubes se dice CAVOK, ¿qué quiere decir?",
        opciones: [
            {
                textoRespuesta: "10 Km. de visibilidad y 1500 ft. de techo de nubes",
                isCorrect: false
            },
            {
                textoRespuesta: "10 km. de visibilidad y 5000 ft. de techo de nubes",
                isCorrect: true
            },
            {
                textoRespuesta: "5000m. de visibilidad y 1500 m. de techo de nubes",
                isCorrect: false
            },
            {
                textoRespuesta: "8 km. de visibilidad y 500 ft. de techo de nubes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Si quieres obtener información meteorológica de varios aeródromos",
        opciones: [
            {
                textoRespuesta: "Sigmet",
                isCorrect: false
            },
            {
                textoRespuesta: "VOLMET",
                isCorrect: true
            },
            {
                textoRespuesta: "ATIS",
                isCorrect: false
            },
            {
                textoRespuesta: "METAR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Cuando un piloto quiere decir 'esperaré y llamaré', dirá:",
        opciones: [
            {
                textoRespuesta: "Wilco",
                isCorrect: false
            },
            {
                textoRespuesta: "En espera",
                isCorrect: true
            },
            {
                textoRespuesta: "Adelante",
                isCorrect: false
            },
            {
                textoRespuesta: "Recibido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Que frase debemos usar si queremos decir 'SI':",
        opciones: [
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "Afirmo",
                isCorrect: true
            },
            {
                textoRespuesta: "Afirmativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Roger",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. Un FIR es:",
        opciones: [
            {
                textoRespuesta: "Un espacio aéreo asesorado",
                isCorrect: false
            },
            {
                textoRespuesta: "Una región de información de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Un espacio aéreo controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Una zona de control",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Todas las estaciones del servicio de telecomunicaciones aeronáuticas usarán la hora:",
        opciones: [
            {
                textoRespuesta: "LMT",
                isCorrect: false
            },
            {
                textoRespuesta: "UTC",
                isCorrect: true
            },
            {
                textoRespuesta: "ZULU",
                isCorrect: false
            },
            {
                textoRespuesta: "GMT",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. ¿Cómo deletrearemos en radiotelefonía la palabra \"fuselaje\"?:",
        opciones: [
            {
                textoRespuesta: "Foxtrot, Uniform, Sierra, Echo, Lima, Alfa, Juliet, Echo",
                isCorrect: true
            },
            {
                textoRespuesta: "Foxtrot, Unión, Sierra, Eco, Lima, Alfa, julio, Eco",
                isCorrect: false
            },
            {
                textoRespuesta: "Fox, Unión, Sierra, Eco, Lima, Alfa, Juliet, Eco",
                isCorrect: false
            },
            {
                textoRespuesta: "Fox, Unión, Sierra, Eco, Lima, Alfa, Julio, Eco.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. ¿A qué banda de frecuencias pertenecen las frecuencias 118,000 — 136,975 Mhz. de Servicio Móvil Aeronáutico?",
        opciones: [
            {
                textoRespuesta: "Baja frecuencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Alta Frecuencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Muy alta frecuencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Muy baja frecuencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. La Señal radiotelefónica de Socorro estará precedida por la palabra ............, repetida tres veces.",
        opciones: [
            {
                textoRespuesta: "SOS",
                isCorrect: false
            },
            {
                textoRespuesta: "PAN",
                isCorrect: false
            },
            {
                textoRespuesta: "SECURITE",
                isCorrect: false
            },
            {
                textoRespuesta: "MAYDAY",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "70. ¿Cuál de las siguientes palabras o frases de procedimiento significa: \"Mi transmisión ha terminado y espero su respuesta\"?",
        opciones: [
            {
                textoRespuesta: "Cambio",
                isCorrect: true
            },
            {
                textoRespuesta: "Terminado",
                isCorrect: false
            },
            {
                textoRespuesta: "Fin de transmisión",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambio y adelante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. ¿Qué significa AFIS?",
        opciones: [
            {
                textoRespuesta: "Servicio automático de información.",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de información de vuelo de aeródromo",
                isCorrect: true
            },
            {
                textoRespuesta: "Área fija de información",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. ¿Cómo se llama el mando mediante el cual ajustamos la máxima recepción sin que aparezcan ruidos parásitos?",
        opciones: [
            {
                textoRespuesta: "Sintonizador",
                isCorrect: false
            },
            {
                textoRespuesta: "Volumen",
                isCorrect: false
            },
            {
                textoRespuesta: "Squelch",
                isCorrect: true
            },
            {
                textoRespuesta: "ID rtf",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. ¿Que significa motor y al aire?",
        opciones: [
            {
                textoRespuesta: "Que estamos autorizados para el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Que debemos realizar la maniobra de aproximación frustrada",
                isCorrect: true
            },
            {
                textoRespuesta: "No existe esta transmisión",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. Cual de estas tres formas de establecer contacto radio es la correcta",
        opciones: [
            {
                textoRespuesta: "EC-FI6 llamando a Sevilla Aproximación",
                isCorrect: false
            },
            {
                textoRespuesta: "Sevilla Aproximación EC-FI6",
                isCorrect: true
            },
            {
                textoRespuesta: "EC-FI6 para Sevilla Aproximación",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. ¿Si quieres obtener información cuál es la palabra clave?",
        opciones: [
            {
                textoRespuesta: "Necesito",
                isCorrect: false
            },
            {
                textoRespuesta: "Solicito",
                isCorrect: true
            },
            {
                textoRespuesta: "Requiero",
                isCorrect: false
            },
            {
                textoRespuesta: "Ayuda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Que frase debemos usar si queremos decir Si:",
        opciones: [
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "Roger",
                isCorrect: false
            },
            {
                textoRespuesta: "Afirmativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Afirma",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "77. Cuando el término 'CAVOK' se usa en un informe meteorológico de rutina (METAR), los valores de la visibilidad y nubes son:",
        opciones: [
            {
                textoRespuesta: "Visibilidad 10 km o mas, sin nubes por debajo de 5000 pies hasta el suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Visibilidad 10 km o mas, sin nubes por debajo de 1500 pies hasta el suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Visibilidad más de 8 km, sin nubes por debajo de 3000 pies hasta el suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Visibilidad más de 5000 m, sin nubes por debajo de 1500 m y el suelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. Diga ¿qué afirmación es correcta respecto a las ondas HF?",
        opciones: [
            {
                textoRespuesta: "Tienen propagación estable aunque sujeta a variaciones de la ionosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "Empeora su recepción durante el día",
                isCorrect: false
            },
            {
                textoRespuesta: "Las ondas HF se reflejan en la ionosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "79. ¿Cuándo podrá la torre abreviar el distintivo de llamada?",
        opciones: [
            {
                textoRespuesta: "a) Cuando no exista confusión",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Cuando haya contactado satisfactoriamente previamente",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Siempre",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"a\" y \"b\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "80. ¿Qué mensajes no pueden transmitirse?",
        opciones: [
            {
                textoRespuesta: "Mensajes de teletipo de radio",
                isCorrect: true
            },
            {
                textoRespuesta: "Meteorología",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensajes safety",
                isCorrect: false
            },
            {
                textoRespuesta: "Urgentes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. Todos los números en radiotelefonía se transmitirán pronunciando cada dígito separadamente:",
        opciones: [
            {
                textoRespuesta: "VERDADERO",
                isCorrect: false
            },
            {
                textoRespuesta: "FALSO",
                isCorrect: false
            },
            {
                textoRespuesta: "VERDADERO, excepto las centenas y los millares redondos",
                isCorrect: true
            },
            {
                textoRespuesta: "VERDADERO, excepto los millares redondos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. ¿Que información puede obtener una aeronave en vuelo de un VOLMET?",
        opciones: [
            {
                textoRespuesta: "SIGMET",
                isCorrect: false
            },
            {
                textoRespuesta: "Informes de pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Informes meteorológicos aeronáuticos de rutina (METAR) de aeropuertos determinados",
                isCorrect: true
            },
            {
                textoRespuesta: "SPECI y TAF",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. En qué circunstancias puede esperarse una buena recepción de la frecuencia de la torre",
        opciones: [
            {
                textoRespuesta: "Bajo nivel, y cerca de la estación",
                isCorrect: false
            },
            {
                textoRespuesta: "Baja altitud y lejos de la estación",
                isCorrect: false
            },
            {
                textoRespuesta: "Gran altitud en las proximidades de la estación",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. Estando en el aire con fallo de radio, vemos destellos blancos desde la torre. ¿Qué significa?",
        opciones: [
            {
                textoRespuesta: "Aterrice en este aeródromo y diríjase a la plataforma",
                isCorrect: true
            },
            {
                textoRespuesta: "Aeródromo peligroso, no aterrice",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a dar la pasada por la torre para recibir la autorización",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. Mi mensaje será más efectivo y comprensible si:",
        opciones: [
            {
                textoRespuesta: "Utilizo el método de palabras duplicadas",
                isCorrect: false
            },
            {
                textoRespuesta: "Enfatizo el final del mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Enfatizo el comienzo del mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantengo un volumen de habla constante",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "86. En caso de fallo de radio, en qué momento la torre nos enviará las señales de luces.",
        opciones: [
            {
                textoRespuesta: "En viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "En final",
                isCorrect: false
            },
            {
                textoRespuesta: "En el circuito de fallo de radio, cuando demos la pasada por la torre",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando demos la pasada por encima de la pista en uso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. Las comunicaciones de socorro y urgencia, deben hacerse",
        opciones: [
            {
                textoRespuesta: "A 100 palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "A 200 palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "A 80 palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "Lentamente, separando las palabras y pronunciando cada una de ellas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "88. Después de hacer una llamada a la estación aeronáutica y antes de hacer una segunda llamada, deberá transcurrir un periodo de por lo menos:",
        opciones: [
            {
                textoRespuesta: "5 segundos",
                isCorrect: false
            },
            {
                textoRespuesta: "20 segundos",
                isCorrect: false
            },
            {
                textoRespuesta: "30 segundos",
                isCorrect: false
            },
            {
                textoRespuesta: "10 segundos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "89. ¿Qué código Q se utiliza para comunicar la altitud?",
        opciones: [
            {
                textoRespuesta: "QFF",
                isCorrect: false
            },
            {
                textoRespuesta: "QMJ",
                isCorrect: false
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "90. ¿Cuál de los siguientes informes de posición es correcto?",
        opciones: [
            {
                textoRespuesta: "EC-EUY, Santander, base izquierda 29",
                isCorrect: false
            },
            {
                textoRespuesta: "Santander, EC-EUY, en punto de espera de la 29, listos para alinear",
                isCorrect: true
            },
            {
                textoRespuesta: "Final de la 11, EC-EUY, Santander",
                isCorrect: false
            },
            {
                textoRespuesta: "Santander, viento en cola izquierda 11, EC-EUY",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. ¿Cuál es la frecuencia de emergencia?",
        opciones: [
            {
                textoRespuesta: "123.45",
                isCorrect: false
            },
            {
                textoRespuesta: "123.5",
                isCorrect: false
            },
            {
                textoRespuesta: "121.5",
                isCorrect: true
            },
            {
                textoRespuesta: "122.6",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. Un mensaje relativo a un avión bajo amenaza de un peligro grave e inminente, que requiera ayuda inmediata, se denomina:",
        opciones: [
            {
                textoRespuesta: "Mensaje de socorro",
                isCorrect: true
            },
            {
                textoRespuesta: "Mensaje de seguridad (\"safety\") de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje de la clase B",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje urgente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. Al transmitir números que contengan coma de decimales, ésta se indicara con la palabra:",
        opciones: [
            {
                textoRespuesta: "Decimal",
                isCorrect: false
            },
            {
                textoRespuesta: "Punto",
                isCorrect: false
            },
            {
                textoRespuesta: "Coma",
                isCorrect: true
            },
            {
                textoRespuesta: "No se indica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. El alcance de recepción en VHF",
        opciones: [
            {
                textoRespuesta: "Aumenta al disminuir la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta al disminuir la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta al aumentar la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta al aumentar la altura",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "95. El controlador dice \"EC-LY3 al norte del aeropuerto hay ejercicios de paracaidismo\" La contestación \"Recibido, EC-LY3\" ¿Es correcta?",
        opciones: [
            {
                textoRespuesta: "No. Hay que repetir todo",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si es un aeropuerto controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí",
                isCorrect: true
            },
            {
                textoRespuesta: "No. No hay que contestar nada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. Si el fallo es de recepción, puede que el problema venga de los altavoces. ¿Cómo descubriremos esto?",
        opciones: [
            {
                textoRespuesta: "a) Si no recibimos ningún tipo de comunicación incluyendo los indicativos morse de las radioayudas, podemos sospechar fallo del altavoz",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Utilizando los auriculares",
                isCorrect: false
            },
            {
                textoRespuesta: "c) La \"a\" y \"b\" son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "d) Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. El alcance de recepción en VHF:",
        opciones: [
            {
                textoRespuesta: "Aumenta al disminuir la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta al aumentar la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta al aumentar la altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta al disminuir la velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. La función del 'squelch' en una radio es:",
        opciones: [
            {
                textoRespuesta: "Modificar la frecuencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Actuar como filtro para el ruido parasitario",
                isCorrect: true
            },
            {
                textoRespuesta: "Las dos anteriores son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. Un mensaje de un avión que ha sufrido un accidente y requiera ayuda inmediata es un mensaje de:",
        opciones: [
            {
                textoRespuesta: "De seguridad en vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "De socorro",
                isCorrect: true
            },
            {
                textoRespuesta: "Urgente",
                isCorrect: false
            },
            {
                textoRespuesta: "De control",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Con fallo de radio y una vez agotadas todas las posibilidades de restablecer comunicaciones, ¿qué considera más correcto?",
        opciones: [
            {
                textoRespuesta: "Apagaremos la radio para reducir consumo eléctrico de la batería",
                isCorrect: false
            },
            {
                textoRespuesta: "No intentaremos aterrizar en un aeropuerto controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Desconectaremos el transpondedor y el DME para evitar interferencias con la radio",
                isCorrect: false
            },
            {
                textoRespuesta: "Transmitiremos dos veces las frase: 'Transmitiendo a ciegas' seguido del nombre del destinatario de dicho mensaje",
                isCorrect: true
            }
        ]
    }
];

export default preguntas;