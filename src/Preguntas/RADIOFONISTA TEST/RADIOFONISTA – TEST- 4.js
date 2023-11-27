const preguntas = [
    {
        titulo: "1. Al establecer contacto con nuestro transmisor/receptor de comunicaciones en una frecuencia determinada, notamos que tenemos ruidos parásitos. ¿Qué dispositivo usaremos para eliminarlos?",
        opciones: [
            {
                textoRespuesta: "Squawk",
                isCorrect: false
            },
            {
                textoRespuesta: "Sintonizador",
                isCorrect: false
            },
            {
                textoRespuesta: "Squelch",
                isCorrect: true
            },
            {
                textoRespuesta: "El botón de ajuste de frecuencias",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. Según el alfabeto de las telecomunicaciones aeronáuticas, ¿cómo se deletrea la palabra MAYDAY?",
        opciones: [
            {
                textoRespuesta: "Mike, Alfa, Yankee, Delta, Alfa, Yankee",
                isCorrect: true
            },
            {
                textoRespuesta: "Mike, Alba, Yankee, Delta, Alba, Yankee",
                isCorrect: false
            },
            {
                textoRespuesta: "Miles, Alfa, Yankee, Delta, Alfa, Yankee",
                isCorrect: false
            },
            {
                textoRespuesta: "Maik, Alfa, Yanki, Delta, Alfa, Yanki",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. ¿Cuál de estas palabras no forma parte del alfabeto internacional de radiocomunicaciones?",
        opciones: [
            {
                textoRespuesta: "Whiskey",
                isCorrect: false
            },
            {
                textoRespuesta: "Kilo",
                isCorrect: false
            },
            {
                textoRespuesta: "Papa",
                isCorrect: false
            },
            {
                textoRespuesta: "Fox",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "4. Siempre que no exista posibilidad de confusión, la hora se transmitirá:",
        opciones: [
            {
                textoRespuesta: "Solo con los minutos",
                isCorrect: true
            },
            {
                textoRespuesta: "Como hora local",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre se dirá la hora y después los minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Indique cuál de los siguientes es un servicio de radiodifusión aeronáutica:",
        opciones: [
            {
                textoRespuesta: "METAR",
                isCorrect: false
            },
            {
                textoRespuesta: "ATIS",
                isCorrect: false
            },
            {
                textoRespuesta: "VOLMET",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "6. ¿Cuál de los siguientes tipos de mensajes tendría prioridad en el Servicio Móvil Aeronáutico?",
        opciones: [
            {
                textoRespuesta: "Mensaje meteorológico",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje relacionado con la seguridad de los vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje relativo a la regularidad de los vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje de radiogoniometría o de “direction finding”",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "7. Si ha habido un error en la transmisión de un mensaje y hay que decirlo de nuevo, ¿qué palabra se usará antes?",
        opciones: [
            {
                textoRespuesta: "Error",
                isCorrect: false
            },
            {
                textoRespuesta: "Cancele",
                isCorrect: false
            },
            {
                textoRespuesta: "Repita",
                isCorrect: false
            },
            {
                textoRespuesta: "Corrección",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "8. Indique cuál de los siguientes fenómenos meteorológicos atmosféricos pueden afectar a las ondas de radio:",
        opciones: [
            {
                textoRespuesta: "Las precipitaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "La inversión de temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "9. Indique cómo se deletrea la palabra NOTAM según el alfabeto internacional para radiocomunicaciones:",
        opciones: [
            {
                textoRespuesta: "November, October, Tango, Alfa, Mike",
                isCorrect: false
            },
            {
                textoRespuesta: "November, Oscar, Tango, Alfa, Mike",
                isCorrect: true
            },
            {
                textoRespuesta: "November, Oscar, Tierra, Alfa, Mike",
                isCorrect: false
            },
            {
                textoRespuesta: "November, Oscar, Tango, Alba, Mike",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. La palabra clave para designar una fase de peligro es:",
        opciones: [
            {
                textoRespuesta: "Destrefa",
                isCorrect: true
            },
            {
                textoRespuesta: "Incerfa",
                isCorrect: false
            },
            {
                textoRespuesta: "Alerfa",
                isCorrect: false
            },
            {
                textoRespuesta: "Peligro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. En vuelo, recibimos una señal luminosa de destellos verdes. ¿Podemos aterrizar?",
        opciones: [
            {
                textoRespuesta: "Sí. La luz verde indica autorización para aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "No. Esa señal indica “regrese para aterrizar” pero tenemos que esperar otra para llevarlo a cabo",
                isCorrect: true
            },
            {
                textoRespuesta: "No existe una señal luminosa en forma de destellos verdes",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. Una señal luminosa en serie de destellos rojos mientras nuestra aeronave está en tierra quiere decir:",
        opciones: [
            {
                textoRespuesta: "aAeródromo peligroso, no aterrice",
                isCorrect: false
            },
            {
                textoRespuesta: "Apártese del área de aterrizaje en uso",
                isCorrect: true
            },
            {
                textoRespuesta: "A pesar de las instrucciones previas, no aterrice por ahora",
                isCorrect: false
            },
            {
                textoRespuesta: "Ceda el paso a las otras aeronaves y siga el circuito",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. En el AIP podemos consultar las frecuencias utilizadas por los servicios de tránsito aéreo. ¿En qué sección?",
        opciones: [
            {
                textoRespuesta: "GEN",
                isCorrect: false
            },
            {
                textoRespuesta: "ENR",
                isCorrect: false
            },
            {
                textoRespuesta: "AD",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. En vuelo quiero conocer el METAR de un aeropuerto concreto. ¿Qué emisión tengo que escuchar?",
        opciones: [
            {
                textoRespuesta: "EL TAFOR",
                isCorrect: false
            },
            {
                textoRespuesta: "El GAFOR",
                isCorrect: false
            },
            {
                textoRespuesta: "El SIGMET",
                isCorrect: false
            },
            {
                textoRespuesta: "El VOLMET",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "15. Indique la correcta. El VOR es:",
        opciones: [
            {
                textoRespuesta: "Un servicio de radionavegación",
                isCorrect: true
            },
            {
                textoRespuesta: "Un servicio fijo aeronáutico",
                isCorrect: false
            },
            {
                textoRespuesta: "Un servicio de radiodifusión",
                isCorrect: false
            },
            {
                textoRespuesta: "Un servicio móvil aeronáutico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. La banda de frecuencias 118.000 – 136.975 MHz está asignada al:",
        opciones: [
            {
                textoRespuesta: "Servicio Móvil Aeronáutico",
                isCorrect: true
            },
            {
                textoRespuesta: "Servicio Fijo Aeronáutico",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de Radionavegación",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de Radiodifusión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. De los siguientes datos recibidos por radio, indique cuál no es necesario colacionar:",
        opciones: [
            {
                textoRespuesta: "Viento",
                isCorrect: true
            },
            {
                textoRespuesta: "Rumbo",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. ¿Qué significan las siglas ATIS?",
        opciones: [
            {
                textoRespuesta: "Servicio Automático de Información Terminal",
                isCorrect: true
            },
            {
                textoRespuesta: "Servicio de Información en Vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Actuación Terminal de Información y Servicios",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Si mientras volamos recibimos una señal luminosa en serie de destellos verdes nos están queriendo decir:",
        opciones: [
            {
                textoRespuesta: "Regrese para aterrizar",
                isCorrect: true
            },
            {
                textoRespuesta: "Autorizado para aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrice en este aeródromo y diríjase a la plataforma",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. Indique cuál es la afirmación correcta:",
        opciones: [
            {
                textoRespuesta: "Un mensaje de urgencia tiene prioridad a un mensaje de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mensaje meteorológico tiene prioridad a un mensaje relacionado con la seguridad de los vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mensaje meteorológico tiene prioridad a uno relativo a la regularidad de los vuelos",
                isCorrect: true
            },
            {
                textoRespuesta: "Un mensaje de emergencia tiene prioridad a uno de socorro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. Estamos volando en un terreno llano a FL050 a aproximadamente 100 millas náuticas de una emisora de VHF. ¿Recibiremos la señal?",
        opciones: [
            {
                textoRespuesta: "Sí, a ese nivel de vuelo la señal llega a más de 100 millas náuticas",
                isCorrect: false
            },
            {
                textoRespuesta: "No, a FL050 la señal no llega a 100 millas náuticas",
                isCorrect: true
            },
            {
                textoRespuesta: "Sólo podremos saberlo si intentamos comunicarnos con la torre",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. ¿Cuál de las siguientes sería la forma correcta de transmitir el rumbo 045º?",
        opciones: [
            {
                textoRespuesta: "Rumbo cuarenta y cinco grados",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo cuarenta y cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo cero cuatro cinco",
                isCorrect: true
            },
            {
                textoRespuesta: "Rumbo cuatro cinco",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. Estamos en tierra y nos envían una señal con luz verde fija. ¿Qué mensaje nos están transmitiendo?",
        opciones: [
            {
                textoRespuesta: "Autorizado para rodaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a despegar",
                isCorrect: true
            },
            {
                textoRespuesta: "Regrese al punto de partida en el aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Apártese del área de aterrizaje en uso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. ¿Con cuál de los siguientes términos se miden las frecuencias de VHF?",
        opciones: [
            {
                textoRespuesta: "Kilohertzio (KHz)",
                isCorrect: false
            },
            {
                textoRespuesta: "Megahertzio (MHz)",
                isCorrect: true
            },
            {
                textoRespuesta: "Gigahertzio (GHz)",
                isCorrect: false
            },
            {
                textoRespuesta: "Terahertzio (THz)",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. Por norma general, el mensaje transmitido en el ATIS no excederá:",
        opciones: [
            {
                textoRespuesta: "De 30 segundos",
                isCorrect: true
            },
            {
                textoRespuesta: "De un minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "De dos minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "De 45 segundos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. La frecuencia VHF internacional de emergencia es:",
        opciones: [
            {
                textoRespuesta: "121,5 GHz.",
                isCorrect: false
            },
            {
                textoRespuesta: "121,5 KHz.",
                isCorrect: false
            },
            {
                textoRespuesta: "125,1 MHz.",
                isCorrect: false
            },
            {
                textoRespuesta: "121,5 MHz.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. En el circuito de vuelo, ya sólo nos queda girar 90º una vez para entrar en el tramo final antes del aterrizaje. ¿Dónde tenemos que comunicar que estamos?",
        opciones: [
            {
                textoRespuesta: "Tramo viento cruzado",
                isCorrect: false
            },
            {
                textoRespuesta: "Tramo viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Tramo base",
                isCorrect: true
            },
            {
                textoRespuesta: "Tramo final",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. ¿Cuál de las siguientes palabras significa “repita la totalidad o una parte del mensaje”?",
        opciones: [
            {
                textoRespuesta: "Confirme",
                isCorrect: false
            },
            {
                textoRespuesta: "Colacione",
                isCorrect: true
            },
            {
                textoRespuesta: "Llame",
                isCorrect: false
            },
            {
                textoRespuesta: "Acuse recibo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. Si solicitamos la altitud de un aeródromo y ésta es 1026, ¿cómo nos la transmitirán?",
        opciones: [
            {
                textoRespuesta: "QNH uno mil cero dos seis",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud uno cero dos seis",
                isCorrect: false
            },
            {
                textoRespuesta: "Altímetro uno cero dos seis",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH uno cero dos seis",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "30. La regla general de la transmisión de la hora, siempre que no haya posibilidad de confusión, es la de la utilización exclusiva de los minutos.",
        opciones: [
            {
                textoRespuesta: "Falso",
                isCorrect: false
            },
            {
                textoRespuesta: "Verdadero",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. ¿Qué significan las siglas ETA?",
        opciones: [
            {
                textoRespuesta: "Hora de partida del aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el aeródromo opera de orto a ocaso",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el aeródromo opera de ocaso a orto",
                isCorrect: false
            },
            {
                textoRespuesta: "Hora prevista de llegada",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. ¿Qué palabra quiere decir “haga caso omiso de esta transmisión”?",
        opciones: [
            {
                textoRespuesta: "Anule",
                isCorrect: true
            },
            {
                textoRespuesta: "Cancele",
                isCorrect: false
            },
            {
                textoRespuesta: "Negativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Terminado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. ¿Qué tipo de información recibe un piloto que escucha el VOLMET?",
        opciones: [
            {
                textoRespuesta: "Relacionada con el aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Meteorológica",
                isCorrect: true
            },
            {
                textoRespuesta: "Relacionada con el tráfico aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las respuestas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. El Servicio de Telecomunicaciones Aeronáutica está compuesto por:",
        opciones: [
            {
                textoRespuesta: "Servicio Fijo Aeronáutico y Servicio Móvil Aeronáutico",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de Radionavegación Aeronáutico y Servicio de Radiodifusión Aeronáutico",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de VHF y Servicio de UHF",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio Fijo, Servicio Móvil, Servicio de Radiodifusión y Servicio de Radionavegación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. El alcance de las ondas VHF:",
        opciones: [
            {
                textoRespuesta: "Disminuye al aumentar la altura de la torre emisora y aumenta al aumentar la altitud de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta al disminuir la altura de la torre emisora y aumenta al disminuir la altitud de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye al aumentar la altura de la torre emisora y aumenta al disminuir la altitud de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "36. Indique cuál de las siguientes matrículas corresponde a un ULM de construcción amateur:",
        opciones: [
            {
                textoRespuesta: "EC-LM0",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-XD3",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-MN9",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-YTP",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "37. Para declarar que tenemos una urgencia debemos utilizar la palabra:",
        opciones: [
            {
                textoRespuesta: "MAYDAY, repetida tres veces",
                isCorrect: false
            },
            {
                textoRespuesta: "PAN PAN, repetida tres veces",
                isCorrect: true
            },
            {
                textoRespuesta: "DETRESFA",
                isCorrect: false
            },
            {
                textoRespuesta: "ALERFA",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Una transmisión grabada que se emite constantemente con información meteorológica es:",
        opciones: [
            {
                textoRespuesta: "El AFIS",
                isCorrect: false
            },
            {
                textoRespuesta: "El VOLMET",
                isCorrect: false
            },
            {
                textoRespuesta: "El VOR",
                isCorrect: false
            },
            {
                textoRespuesta: "El ATIS",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "39. ¿Cuál de los siguientes datos es obligatorio colacionar?",
        opciones: [
            {
                textoRespuesta: "Pista en uso",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambios de frecuencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Ajustes de altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "40. Sin obstáculos, una aeronave volando a 1.000 pies, recibirá señal de radio de una torre situada como máximo a:",
        opciones: [
            {
                textoRespuesta: "Aproximadamente 38 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproximadamente 38 mn.",
                isCorrect: true
            },
            {
                textoRespuesta: "Aproximadamente 1.000 m.",
                isCorrect: false
            },
            {
                textoRespuesta: "No podemos saberlo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. ¿Qué es una transmisión a ciegas?",
        opciones: [
            {
                textoRespuesta: "Una transmisión por radio cuando notamos que las condiciones están por debajo de VMC",
                isCorrect: false
            },
            {
                textoRespuesta: "La transmisión de una estación a otra cuando no pueda establecerse en ambos sentidos",
                isCorrect: true
            },
            {
                textoRespuesta: "El procedimiento de comunicación que debemos seguir cuando nos hemos perdido",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando realizamos una emisión en una frecuencia aleatoria",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. ¿En qué apartado del AIP consultaremos la información acerca de zonas temporalmente segregadas (TSA)?:",
        opciones: [
            {
                textoRespuesta: "En cualquiera de ellas",
                isCorrect: false
            },
            {
                textoRespuesta: "En ENR",
                isCorrect: true
            },
            {
                textoRespuesta: "En AD",
                isCorrect: false
            },
            {
                textoRespuesta: "En GEN",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. Según el alfabeto internacional para radiocomunicaciones, ¿cómo se deletrea la palabra RUMBO?",
        opciones: [
            {
                textoRespuesta: "Romeo, United, Mike, Bravo, Oscar",
                isCorrect: false
            },
            {
                textoRespuesta: "Romeo, Uniform, Mike, Beta, Oscar",
                isCorrect: false
            },
            {
                textoRespuesta: "Romeo, Uniform, Mike, Bravo, Oscar",
                isCorrect: true
            },
            {
                textoRespuesta: "Romeo, Uniform, Miles, Bravo, Oscar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. ¿Cuál de las siguientes formas de transmitir la frecuencia 118,050 MHz sería la correcta?",
        opciones: [
            {
                textoRespuesta: "Ciento dieciocho como cero cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno uno ocho coma cero cinco cero",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno uno ocho coma cero cinco",
                isCorrect: true
            },
            {
                textoRespuesta: "Ciento dieciocho coma cero cinco cero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. Si tenemos que colacionar un mensaje lo concluiremos con:",
        opciones: [
            {
                textoRespuesta: "El indicativo de la estación receptora",
                isCorrect: false
            },
            {
                textoRespuesta: "El indicativo de la aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "La palabra “corto”",
                isCorrect: false
            },
            {
                textoRespuesta: "La palabra “terminado”",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. ¿Cómo definiría la amplitud de onda?",
        opciones: [
            {
                textoRespuesta: "La distancia que mide una onda completa",
                isCorrect: false
            },
            {
                textoRespuesta: "La distancia entre la cresta de la onda y su punto medio",
                isCorrect: true
            },
            {
                textoRespuesta: "La cantidad de veces que se repite una onda por segundo",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de propagación de la onda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. En vuelo hemos recibido una señal luminosa del control del aeropuerto. ¿Cómo indicaremos el acuse de recibo de dicha señal?",
        opciones: [
            {
                textoRespuesta: "Balanceando las alas si es de día",
                isCorrect: false
            },
            {
                textoRespuesta: "Haciendo dos destellos con las luces de aterrizaje si es de noche",
                isCorrect: false
            },
            {
                textoRespuesta: "Haciendo dos destellos con las luces de navegación si no tenemos luces de aterrizaje y es de noche",
                isCorrect: false
            },
            {
                textoRespuesta: "Las tres anteriores son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "48. Tenemos fallo de radio y hemos hecho todas las comprobaciones. ¿Qué tenemos que decir antes de emitir un mensaje?",
        opciones: [
            {
                textoRespuesta: "Fallo de radio",
                isCorrect: false
            },
            {
                textoRespuesta: "Fallo de comunicaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Transmitiendo a ciegas",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Antes de declarar que tenemos un fallo de comunicaciones debemos comprobar que:",
        opciones: [
            {
                textoRespuesta: "Hemos seleccionado la frecuencia correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "El micrófono funciona correctamente",
                isCorrect: false
            },
            {
                textoRespuesta: "El volumen del receptor está correctamente ajustado",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. Las comunicaciones establecidas por radio siempre deben ser:",
        opciones: [
            {
                textoRespuesta: "Concisas e inequívocas, usando la fraseología normalizada",
                isCorrect: true
            },
            {
                textoRespuesta: "Repetidas el mayor número de veces posibles para que no haya confusión",
                isCorrect: false
            },
            {
                textoRespuesta: "Lo más cortas posible, llegando a superar las 100 palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Una aeronave vuela a 15.000ft. ¿Cuál es la forma correcta de comunicarlo?",
        opciones: [
            {
                textoRespuesta: "Quince mil pies",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno cinco cero cero cero pies",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno cinco mil pies",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas las formas anteriores son válidas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Una luz roja fija emitida como señal a nuestra aeronave en tierra quiere decir:",
        opciones: [
            {
                textoRespuesta: "Apártese del área de aterrizaje en uso",
                isCorrect: false
            },
            {
                textoRespuesta: "A pesar de las instrucciones previas, no despegue todavía",
                isCorrect: false
            },
            {
                textoRespuesta: "Alto",
                isCorrect: true
            },
            {
                textoRespuesta: "Regrese al punto de partida en el aeródromo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. La velocidad de propagación de las ondas de radio es:",
        opciones: [
            {
                textoRespuesta: "La velocidad de la luz",
                isCorrect: true
            },
            {
                textoRespuesta: "343 m/s.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad del sonido",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. ¿Cómo llamamos a la zona en la que no recibimos las ondas VHF debido a que hay un obstáculo entre la torre y la aeronave?",
        opciones: [
            {
                textoRespuesta: "Zona de sombra",
                isCorrect: true
            },
            {
                textoRespuesta: "Horizonte de radio",
                isCorrect: false
            },
            {
                textoRespuesta: "Cono de silencio",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. El piloto deberá efectuar llamadas a estaciones en tierra fuera del horizonte de radio:",
        opciones: [
            {
                textoRespuesta: "Siempre que quiera",
                isCorrect: false
            },
            {
                textoRespuesta: "No debería hacerlo, ya que podría causar interferencias con otras estaciones que operen en la misma frecuencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre que esa estación fuera del horizonte de radio se lo pida",
                isCorrect: false
            },
            {
                textoRespuesta: "No puede hacerlo ya que está prohibido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. Indique la correcta. En un aeródromo no controlado:",
        opciones: [
            {
                textoRespuesta: "Sigue siendo obligatorio el uso de comunicaciones por radio",
                isCorrect: false
            },
            {
                textoRespuesta: "No son obligatorias las comunicaciones por radio",
                isCorrect: true
            },
            {
                textoRespuesta: "No podremos comunicar por radio",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. Las siglas “HJ” de un aeródromo quieren decir que éste:",
        opciones: [
            {
                textoRespuesta: "Opera de ocaso a orto",
                isCorrect: false
            },
            {
                textoRespuesta: "No tiene un horario determinado para operar",
                isCorrect: false
            },
            {
                textoRespuesta: "Opera de orto a ocaso",
                isCorrect: true
            },
            {
                textoRespuesta: "Está abierto durante la hora operativa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Indique la forma correcta de transmitir por radio el Nivel de Vuelo FL070:",
        opciones: [
            {
                textoRespuesta: "Foxtrot Lima cero siete cero",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel de Vuelo cero siete cero",
                isCorrect: true
            },
            {
                textoRespuesta: "Nivel de vuelo siete mil pies",
                isCorrect: false
            },
            {
                textoRespuesta: "Foxtrot Lima siete mil pies",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. En la escala de legibilidad de la radio, el número 2 se corresponde con:",
        opciones: [
            {
                textoRespuesta: "Legible de vez en cuando",
                isCorrect: true
            },
            {
                textoRespuesta: "Legible",
                isCorrect: false
            },
            {
                textoRespuesta: "Legible con dificultad",
                isCorrect: false
            },
            {
                textoRespuesta: "Ilegible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. El Plan de Vuelo debe realizarse siempre que:",
        opciones: [
            {
                textoRespuesta: "La totalidad del vuelo sea controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Vayamos a volar, independientemente de que el vuelo sea controlado o no",
                isCorrect: false
            },
            {
                textoRespuesta: "Una parte del vuelo sea controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. La banda de frecuencias de VHF se utilizan:",
        opciones: [
            {
                textoRespuesta: "Para radionavegación y radiotelefonía de larga distancia, entre otras",
                isCorrect: false
            },
            {
                textoRespuesta: "Para radionavegación y comunicaciones de media distancia, entre otras",
                isCorrect: false
            },
            {
                textoRespuesta: "Para radionavegación y radiotelefonía de corta distancia, entre otras",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. ¿Qué palabra significa “repítame todo o la siguiente parte de su mensaje”?",
        opciones: [
            {
                textoRespuesta: "Colacione",
                isCorrect: false
            },
            {
                textoRespuesta: "Repita",
                isCorrect: true
            },
            {
                textoRespuesta: "Notifique",
                isCorrect: false
            },
            {
                textoRespuesta: "Verifique",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Cuando haya una rápida alteración de las condiciones meteorológicas:",
        opciones: [
            {
                textoRespuesta: "La información meteorológica se le facilitará a la aeronave cuando se ponga en contacto con la dependencia ATS",
                isCorrect: false
            },
            {
                textoRespuesta: "Es posible que no sea aconsejable incluir un informe meteorológico en el ATIS",
                isCorrect: false
            },
            {
                textoRespuesta: "En cualquier caso la información meteorológica se emitirá en el ATIS",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "64. En caso de perder todo contacto con una aeronave se activa una emergencia con las fases:",
        opciones: [
            {
                textoRespuesta: "Peligro, Urgencia, Emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "INCERFA, ALERFA, DETRESFA",
                isCorrect: true
            },
            {
                textoRespuesta: "Urgencia, Socorro, Emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Incertidumbre, Peligro, Emergencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. ¿Qué quiere decir “Adelante” en la fraseología normalizada?",
        opciones: [
            {
                textoRespuesta: "Continúe con lo que estaba haciendo",
                isCorrect: false
            },
            {
                textoRespuesta: "Prosiga con su mensaje",
                isCorrect: true
            },
            {
                textoRespuesta: "Autorizado",
                isCorrect: false
            },
            {
                textoRespuesta: "Repita su mensaje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. En el momento en que detectamos un posible fallo de comunicaciones debemos tratarlo como una situación de emergencia:",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "67. El código que significa rumbo magnético hacia la emisora, sin viento, es:",
        opciones: [
            {
                textoRespuesta: "QDR",
                isCorrect: false
            },
            {
                textoRespuesta: "QDM",
                isCorrect: true
            },
            {
                textoRespuesta: "QUJ",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. Indique cuál es la escala de legibilidad de transmisión de la aeronave correcta:",
        opciones: [
            {
                textoRespuesta: "1- Perfectamente legible. 2- Legible. 3- Legible con dificultad. 4- Legible de vez en cuando. 5- Ilegible",
                isCorrect: false
            },
            {
                textoRespuesta: "1- Perfectamente legible. 2- Legible. 3- Legible de vez en cuando. 4- Legible con dificultad. 5- Ilegible",
                isCorrect: false
            },
            {
                textoRespuesta: "1- Ilegible. 2- Legible de vez en cuando. 3- Legible con dificultad. 4- Legible. 5- Perfectamente legible",
                isCorrect: true
            },
            {
                textoRespuesta: "1- Ilegible. 2- Casi ilegible. 3- Legible de vez en cuando. 4- Legible. 5- Perfectamente legible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. ¿Cuál es el código que indica el rumbo geográfico hacia la emisora?",
        opciones: [
            {
                textoRespuesta: "QUJ",
                isCorrect: true
            },
            {
                textoRespuesta: "QDR",
                isCorrect: false
            },
            {
                textoRespuesta: "QDM",
                isCorrect: false
            },
            {
                textoRespuesta: "QTE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. ¿Qué quiere decir “hacer una rotación”?",
        opciones: [
            {
                textoRespuesta: "Hacer un viraje en el que cambiemos de rumbo 180º",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Guiñar",
                isCorrect: false
            },
            {
                textoRespuesta: "Despegar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. ¿Cuál de los siguientes es un servicio de radiodifusión aeronáutica?",
        opciones: [
            {
                textoRespuesta: "VOR",
                isCorrect: false
            },
            {
                textoRespuesta: "ATIS",
                isCorrect: true
            },
            {
                textoRespuesta: "NDB",
                isCorrect: false
            },
            {
                textoRespuesta: "DME",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. ¿Cuál de las siguientes transmisiones es la que indica que ésta es totalmente legible?",
        opciones: [
            {
                textoRespuesta: "EC-DF3 Sevilla torre legibilidad tres",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-DF3 Sevilla torre legibilidad cinco",
                isCorrect: true
            },
            {
                textoRespuesta: "EC-DF3 Sevilla torre legibilidad uno",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-DF3 Sevilla torre legibilidad cuatro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. En vuelo detectamos que tenemos problemas para establecer comunicación. Indique cuál de las siguientes acciones debemos llevar a cabo antes:",
        opciones: [
            {
                textoRespuesta: "Comprobar que el micrófono funciona correctamente",
                isCorrect: true
            },
            {
                textoRespuesta: "Emitir un mensaje precedido de la frase “transmitiendo a ciegas”",
                isCorrect: false
            },
            {
                textoRespuesta: "Seleccionar el código 7600 en el transpondedor",
                isCorrect: false
            },
            {
                textoRespuesta: "Declarar una situación de urgencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. Si vamos en vuelo VFR por un espacio aéreo clase A, ¿qué será lo primero que tendremos que consultar?",
        opciones: [
            {
                textoRespuesta: "El VOLMET para saber si las condiciones meteorológicas nos van a permitir seguir volando en VFR",
                isCorrect: false
            },
            {
                textoRespuesta: "El NOTAM",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos haber consultado previamente el AIP para saber si hay activada alguna zona R, P o D",
                isCorrect: false
            },
            {
                textoRespuesta: "No podemos volar en un área clase A en vuelo VFR",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "75. ¿Cómo comunicaremos que estamos en la trayectoria de vuelo en la dirección del aterrizaje a lo largo de la prolongación del eje de pista?",
        opciones: [
            {
                textoRespuesta: "Tramo base",
                isCorrect: false
            },
            {
                textoRespuesta: "Tramo de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Tramo final",
                isCorrect: true
            },
            {
                textoRespuesta: "Tramo viento cruzado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Estamos en Sevilla y somos la aeronave EC-LK4. ¿Cómo pediremos que nos verifiquen la legibilidad de nuestra radio?",
        opciones: [
            {
                textoRespuesta: "EC-LK4, Sevilla, verifique nuestra legibilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Sevilla, verifique nuestra legibilidad, EC-LK4",
                isCorrect: false
            },
            {
                textoRespuesta: "Sevilla, EC-LK4 para control de radio",
                isCorrect: true
            },
            {
                textoRespuesta: "EC-LK4 para control de radio, Sevilla",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. ¿En cuál de los siguientes casos el alcance de la señal de VHF será mejor?",
        opciones: [
            {
                textoRespuesta: "Volando dentro de la línea visual de la torre, a baja altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Volando fuera de la línea visual de la torre, a alta altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Volando dentro de la línea visual de la torre, a alta altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas, porque las ondas de VHF apenas tienen limitaciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. Un vuelo VFR efectuado en un espacio aéreo controlado:",
        opciones: [
            {
                textoRespuesta: "Sólo debe mantener la escucha de los Servicios de Tránsito Aéreo cuando necesite dichos servicios",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe mantener una escucha continua de los Servicios de Tránsito Aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe informar de su posición a los Servicios de Tránsito Aéreo cuando sea necesario",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "79. ¿Qué debemos hacer si nos transmiten “Squawk 4321”?",
        opciones: [
            {
                textoRespuesta: "Comprobar la legibilidad de nuestra transmisión",
                isCorrect: false
            },
            {
                textoRespuesta: "Seleccionar el código 4321 en el transpondedor",
                isCorrect: true
            },
            {
                textoRespuesta: "Seleccionar el código de emergencia en el transpondedor",
                isCorrect: false
            },
            {
                textoRespuesta: "Seleccionar el código de fallo de comunicaciones en el transpondedor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Son las 17:45 UTC. No hay confusión con la hora. ¿Cómo lo comunicaremos?",
        opciones: [
            {
                textoRespuesta: "Diecisiete cuarenta y cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno siete cuatro cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Cinco cuatro cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuatro cinco",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "81. ¿Cuál es el significado de la abreviatura “HN”?",
        opciones: [
            {
                textoRespuesta: "Que el aeródromo está abierto desde el ocaso hasta el orto",
                isCorrect: true
            },
            {
                textoRespuesta: "Que el aeródromo opera desde el orto hasta el ocaso",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el aeródromo no tiene hora determinada para operar",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el aeródromo está abierto durante la hora operativa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Una aeronave envía un mensaje de socorro a una estación aeronáutica. Estamos en vuelo y lo recibimos. ¿Podemos acusarle recibo?",
        opciones: [
            {
                textoRespuesta: "No, en ningún caso o de lo contrario podríamos entorpecer la comunicación",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, debemos hacerlo inmediatamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, siempre que esperemos un tiempo prudencial y veamos que la estación no responde",
                isCorrect: true
            },
            {
                textoRespuesta: "Una aeronave en vuelo nunca podría recibir un mensaje de socorro de otra",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Nuestra hora prevista de llegada es a las 18:37 UTC. ¿Cómo la comunicaremos si puede haber confusión con la hora actual?",
        opciones: [
            {
                textoRespuesta: "Dieciocho treinta y siete",
                isCorrect: false
            },
            {
                textoRespuesta: "Tres siete",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno ocho tres siete",
                isCorrect: true
            },
            {
                textoRespuesta: "Seis tres siete",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. En la escala de legibilidad de la radio, el número 4 se corresponde con:",
        opciones: [
            {
                textoRespuesta: "Legible con dificultad",
                isCorrect: false
            },
            {
                textoRespuesta: "Perfectamente legible",
                isCorrect: false
            },
            {
                textoRespuesta: "Legible de vez en cuando",
                isCorrect: false
            },
            {
                textoRespuesta: "Legible",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "85. El rumbo 100º deberá ser transmitido como “Rumbo cien”:",
        opciones: [
            {
                textoRespuesta: "Verdadero, ya que las centenas redondas se transmiten así",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. La forma correcta sería “Rumbo uno ciento”",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. La forma correcta sería “Rumbo uno ciento grados”",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "86. ¿Cuál es el prefijo de matrículas aeronáuticas de España?",
        opciones: [
            {
                textoRespuesta: "Echo Charlie (EC)",
                isCorrect: true
            },
            {
                textoRespuesta: "Lima Echo (LE)",
                isCorrect: false
            },
            {
                textoRespuesta: "Echo Sierra (ES)",
                isCorrect: false
            },
            {
                textoRespuesta: "Sierra Papa (SP)",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. Si decimos que estamos manteniendo contacto con TWR, ¿a qué nos referimos?",
        opciones: [
            {
                textoRespuesta: "Al Servicio de Tránsito Aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "Al Servicio de Información de Vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Al Área de Control Terminal",
                isCorrect: false
            },
            {
                textoRespuesta: "A la Torre de Control",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "88. Estamos en un aeródromo que tiene las pistas 12/30. Nos comunican que la pista en uso es la tres cero y tenemos exactamente viento en cara. El viento viene de:",
        opciones: [
            {
                textoRespuesta: "030º",
                isCorrect: false
            },
            {
                textoRespuesta: "120º",
                isCorrect: false
            },
            {
                textoRespuesta: "300º",
                isCorrect: true
            },
            {
                textoRespuesta: "012º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. El Servicio Móvil Aeronáutico está definido por OACI como:",
        opciones: [
            {
                textoRespuesta: "Servicio móvil entre estaciones aeronáuticas",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio móvil entre estaciones de aeronaves",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio móvil entre estaciones aeronáuticas y de aeronaves o entre estaciones de aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "Servicio fijo entre estaciones aeronáuticas y de aeronaves o entre estaciones de aeronave",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. Cuando nos piden que colacionemos nos están pidiendo que:",
        opciones: [
            {
                textoRespuesta: "Repitamos el mensaje para que acabamos de recibir",
                isCorrect: true
            },
            {
                textoRespuesta: "Comuniquemos nuestra posición",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos identifiquemos",
                isCorrect: false
            },
            {
                textoRespuesta: "Descendamos a la altitud que nos han indicado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. Si durante el vuelo tenemos una emergencia mientras estamos manteniendo contacto con tierra en una frecuencia determinada, ¿cómo procederemos?",
        opciones: [
            {
                textoRespuesta: "Comunicaremos la emergencia en esa frecuencia",
                isCorrect: true
            },
            {
                textoRespuesta: "bCambiaremos inmediatamente a la frecuencia de emergencia 121,5 MHz.",
                isCorrect: false
            },
            {
                textoRespuesta: "Pondremos el código 7700 en el transpondedor, por lo que no será necesario comunicar la emergencia en ninguna frecuencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Cortaríamos la comunicación para seguir volando la aeronave",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. En una emisión VOLMET obtendremos la dirección del viento ______, mientras que en el ATIS la obtendremos ______.",
        opciones: [
            {
                textoRespuesta: "Ambas magnéticas",
                isCorrect: false
            },
            {
                textoRespuesta: "Ambas verdaderas",
                isCorrect: false
            },
            {
                textoRespuesta: "Verdadera / magnética",
                isCorrect: true
            },
            {
                textoRespuesta: "Magnética / verdadera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. La palabra MAYDAY, repetida tres veces, la utilizaremos cuando queramos enviar un mensaje de:",
        opciones: [
            {
                textoRespuesta: "Emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Urgencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Socorro",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "94. Con nuestra aeronave en tierra recibimos una serie de destellos verdes desde el control del aeródromo. ¿Qué significa?",
        opciones: [
            {
                textoRespuesta: "Regrese para aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Apártese del área de aterrizaje en uso",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado para rodaje",
                isCorrect: true
            },
            {
                textoRespuesta: "Autorizado para despegar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. Si nuestra altitud es de 16.000ft, ¿cómo comunicaremos ese número?",
        opciones: [
            {
                textoRespuesta: "Dieciséis mil",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno seis cero cero cero",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno seis punto cero cero cero",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno seis mil",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "96. ¿Qué es un vuelo controlado?",
        opciones: [
            {
                textoRespuesta: "Cualquier vuelo que se realice es controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Aquel que se realiza bajo la supervisión de un instructor de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "El que está supeditado a una autorización de control de tránsito aéreo",
                isCorrect: true
            },
            {
                textoRespuesta: "El que se realiza siguiendo una ruta previamente establecida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. ¿Cuál es la definición de “frecuencia” de una onda electromagnética?",
        opciones: [
            {
                textoRespuesta: "La distancia entre la cresta de la onda y su punto medio",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto de máxima amplitud de onda",
                isCorrect: false
            },
            {
                textoRespuesta: "Número de oscilaciones que realiza la onda por segundo",
                isCorrect: true
            },
            {
                textoRespuesta: "Número de oscilaciones que realiza la onda por minuto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. ¿De qué forma podemos evitar hacer llamadas innecesarias y saturar las frecuencias de los Servicios de Tránsito Aéreo (ATS) durante el vuelo?",
        opciones: [
            {
                textoRespuesta: "Escuchando el VOLMET",
                isCorrect: false
            },
            {
                textoRespuesta: "Escuchando el ATIS",
                isCorrect: true
            },
            {
                textoRespuesta: "Consultando el METAR",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. Cuando despegamos, ese primer tramo del circuito en el que volamos lo llamamos:",
        opciones: [
            {
                textoRespuesta: "Base",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento en cara",
                isCorrect: true
            },
            {
                textoRespuesta: "Viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Final",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. ¿Cuál de las siguientes es una palabra clave para designar una fase de alerta?",
        opciones: [
            {
                textoRespuesta: "Incerfa",
                isCorrect: false
            },
            {
                textoRespuesta: "Alerfa",
                isCorrect: true
            },
            {
                textoRespuesta: "Peligro",
                isCorrect: false
            },
            {
                textoRespuesta: "Socorro",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;