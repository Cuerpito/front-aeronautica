const preguntas = [
    {
        titulo: "1. Cuando un piloto por radio dice 'solicito vector radar para circunnavegar una zona de malas condiciones meteorológicas', en un mensaje de:",
        opciones: [
            {
                textoRespuesta: "De seguridad en vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "De regularidad",
                isCorrect: false
            },
            {
                textoRespuesta: "De informe de posición",
                isCorrect: false
            },
            {
                textoRespuesta: "Meteorológico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. ¿Qué elementos deben siempre colacionarse en un mensaje?",
        opciones: [
            {
                textoRespuesta: "Pista en servicio, ajustes de altímetro, códigos SSR, ordenadas de nivel, rumbo y órdenes de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Hora, pista en servicio, ajustes de altímetro, órdenes de nivel, código SSR",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento en superficie, visibilidad, temperatura en tierra, pista en servicio, ajustes de altímetro, órdenes sobre rumbo y velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Pista en servicio, visibilidad, viento en superficie, órdenes de rumbo, ajustes de altímetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. Algunos casos de fallo de radio son debidos a pérdida de potencia. ¿Cómo solucionaría este problema?",
        opciones: [
            {
                textoRespuesta: "a) Chequeando los fusibles correspondientes al equipo de radio",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Desconectando del master el interruptor de ALT durante unos minutos y volver a conectarlo",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Desconectando del master el interruptor de BAT durante unos minutos y volver a conectarlo",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La solución \"a\" y \"c\" son las correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "4. Cuando el control te solicita sobre una referencia, se la tienes que dar:",
        opciones: [
            {
                textoRespuesta: "QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH",
                isCorrect: true
            },
            {
                textoRespuesta: "QNE",
                isCorrect: false
            },
            {
                textoRespuesta: "QFF",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. ¿Qué abreviatura se utiliza para designar la 'Co­ordinate universal time' (hora universal coordinada)?",
        opciones: [
            {
                textoRespuesta: "GMT",
                isCorrect: false
            },
            {
                textoRespuesta: "CUT",
                isCorrect: false
            },
            {
                textoRespuesta: "UTC",
                isCorrect: true
            },
            {
                textoRespuesta: "COUT",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. ¿Cuál es el código Q para 'marcación verdadera desde la emisora'?",
        opciones: [
            {
                textoRespuesta: "QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "QDM",
                isCorrect: false
            },
            {
                textoRespuesta: "QTE",
                isCorrect: true
            },
            {
                textoRespuesta: "QDR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Como debe hacerse una transmisión ciega (blind transmisión)",
        opciones: [
            {
                textoRespuesta: "Dos veces en la frecuencia designada",
                isCorrect: true
            },
            {
                textoRespuesta: "Una vez en la frecuencia designada",
                isCorrect: false
            },
            {
                textoRespuesta: "En la frecuencia de emergencia solo",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo VFR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. ¿Cuál deberá ser la rapidez con que se habla en las radiodifusiones telefónicas?",
        opciones: [
            {
                textoRespuesta: "No excederá de 120 palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "No excederá de 100 palabras por minuto",
                isCorrect: true
            },
            {
                textoRespuesta: "No excederá de 80 palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "No excederá de 60 palabras por minuto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Cuando una estación del servicio móvil aeronáutico necesite hacer señales de prueba de radio, no se harán por más de:",
        opciones: [
            {
                textoRespuesta: "10 minutos y consistirán en letras del alfabeto fonético (alfa, bravo, charlie, etc.)",
                isCorrect: false
            },
            {
                textoRespuesta: "10 segundos y consistirán en letras del alfabeto fonético (alfa, bravo, charlie, etc.)",
                isCorrect: false
            },
            {
                textoRespuesta: "10 segundos y consistirán en números hablados (uno, dos, tres, etc.)",
                isCorrect: true
            },
            {
                textoRespuesta: "10 minutos y consistirán en números hablados (uno, dos, tres, etc.)",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. En caso de fallo de comunicaciones, ¿Cuál de las siguientes opciones le parece más correcta?",
        opciones: [
            {
                textoRespuesta: "Continuar con el vuelo hasta encontrar un lugar seguro para efectuar un aterrizaje de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Continuar el vuelo en VMC, aterrizar en el aeródromo más cercano y notificar nuestra llegada lo antes posible al control de tránsito aéreo",
                isCorrect: true
            },
            {
                textoRespuesta: "Aterrizar siempre en un aeródromo no controlado para no interferir sin radio en el tráfico de uno controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Continuar el vuelo en VMC, siempre hasta el destino de nuestro plan de vuelo, así no hará falta notificar nuestra llegada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Un mensaje relativo a un avión bajo amenaza de un peligro grave e inminente, que requiere ayuda inmediata, se denomina:",
        opciones: [
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
            },
            {
                textoRespuesta: "Mensaje de socorro",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "12. Una autorización en ruta de ATC siempre debe ser colacionada",
        opciones: [
            {
                textoRespuesta: "Sí, a no ser que sea autorizado de otra manera por la dependencia ATS local",
                isCorrect: true
            },
            {
                textoRespuesta: "No, si la autorización ATC de ruta es trasmitida de una forma pública (SID; STAR)",
                isCorrect: false
            },
            {
                textoRespuesta: "No, si el canal de radio está saturado",
                isCorrect: false
            },
            {
                textoRespuesta: "No, si el contenido de la autorización ATC es claro y no da lugar a confusión alguna",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. La autorización 'Autorizado para su despegue inmediato en pista 03' es:",
        opciones: [
            {
                textoRespuesta: "Mensaje de regularidad en vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje de urgencias",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje no autorizado",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje de seguridad en vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. Cuando, bien por requerimiento de control, o del servicio meteorológico, o porque así lo estime la tripulación se dedica a reportar información operacional y/o meteorológica, se hará en forma de:",
        opciones: [
            {
                textoRespuesta: "Notam",
                isCorrect: false
            },
            {
                textoRespuesta: "Informe operativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeronotam",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeronotificación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "15. Como debe informar un piloto a la torre de control que está listo para el despegue",
        opciones: [
            {
                textoRespuesta: "Listo para el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Listo para alinear",
                isCorrect: false
            },
            {
                textoRespuesta: "Listo para partir",
                isCorrect: false
            },
            {
                textoRespuesta: "Listo para salida o listo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "16. Una estación aeronáutica nos informa sobre la visibilidad de un aeropuerto. Qué unidades de medida empleará:",
        opciones: [
            {
                textoRespuesta: "Pies",
                isCorrect: false
            },
            {
                textoRespuesta: "Metros",
                isCorrect: true
            },
            {
                textoRespuesta: "Metros o pies",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Las llamadas de peligro y emergencia se harán en la frecuencia que se estaba utilizando, o en la frecuencia",
        opciones: [
            {
                textoRespuesta: "121.50 Mhz",
                isCorrect: true
            },
            {
                textoRespuesta: "123.50 Mhz",
                isCorrect: false
            },
            {
                textoRespuesta: "123.45 Mhz",
                isCorrect: false
            },
            {
                textoRespuesta: "120.00 Mhz",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Si todos los intentos para establecer contacto radio con una estación de tierra fallan, el piloto de una aeronave debería transmitir los mensajes precedidos por la siguiente frase:",
        opciones: [
            {
                textoRespuesta: "PAN PAN, PAN PAN, PAN PAN",
                isCorrect: false
            },
            {
                textoRespuesta: "Transmitiendo a ciegas",
                isCorrect: true
            },
            {
                textoRespuesta: "Le recibo uno, le recibo uno",
                isCorrect: false
            },
            {
                textoRespuesta: "¿Cómo me recibe?",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. ¿Qué significa la abreviatura 'HX'?",
        opciones: [
            {
                textoRespuesta: "Ningunas horas de trabajo específicas",
                isCorrect: true
            },
            {
                textoRespuesta: "Desde la salida del sol a puesta del sol",
                isCorrect: false
            },
            {
                textoRespuesta: "Desde la puesta del sol a salida del sol",
                isCorrect: false
            },
            {
                textoRespuesta: "Día continuado y servicio nocturno",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. ¿Qué significa “motor y al aire” (go around)?",
        opciones: [
            {
                textoRespuesta: "Vire 360º",
                isCorrect: false
            },
            {
                textoRespuesta: "Realice aproximación frustrada",
                isCorrect: true
            },
            {
                textoRespuesta: "Proceda con su mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Adelante al tráfico precedente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. Cómo debe informar un piloto a torre que se encuentra 'listo para el despegue'",
        opciones: [
            {
                textoRespuesta: "Listo para rodar",
                isCorrect: false
            },
            {
                textoRespuesta: "Listo",
                isCorrect: true
            },
            {
                textoRespuesta: "Listo para alinear",
                isCorrect: false
            },
            {
                textoRespuesta: "Listo para despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. ¿Cómo transmitimos 1001 como QNH?",
        opciones: [
            {
                textoRespuesta: "QNH diez cero uno",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH uno doble cero uno",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH mil uno",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH uno cero cero uno",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "23. ¿Qué significa una buena técnica al micrófono?",
        opciones: [
            {
                textoRespuesta: "Usar una alta cadencia de palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "Hablar con el micrófono cerca de la boca",
                isCorrect: false
            },
            {
                textoRespuesta: "Hablar lo más despacio posible para una mejor comprensión",
                isCorrect: false
            },
            {
                textoRespuesta: "Usar un tono normal, hablando con claridad y buena pronunciación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "24. La hora es 09:20 AM. ¿Cuál es la forma correcta de transmitir esta hora si no hay posibilidad de confusión con la hora?",
        opciones: [
            {
                textoRespuesta: "Dos cero",
                isCorrect: true
            },
            {
                textoRespuesta: "Veinte",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos cero hora presente",
                isCorrect: false
            },
            {
                textoRespuesta: "Nueve veinte AM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. ¿Cuando se le permitiré a una aeronave utilizar su distintivo de llamada abreviado?:",
        opciones: [
            {
                textoRespuesta: "Solo tras establecer comunicación satisfactoria",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando se suponga que eso no dará lugar a confusión",
                isCorrect: false
            },
            {
                textoRespuesta: "Tras haber sido llamada por la estación de tierra utilizando el indicativo de llamada abreviado",
                isCorrect: false
            },
            {
                textoRespuesta: "Después de haberse establecido contacto inicial y además que se cumplan todas las condiciones anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "26. La autorización 'Autorizado a despegue inmediato pista 03' es:",
        opciones: [
            {
                textoRespuesta: "Un mensaje de seguridad en vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Un mensaje de urgencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mensaje no autorizado",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mensaje de regularidad en vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. En la medida de lo posible una llamada de urgencia debe contener los siguientes elementos/detalles",
        opciones: [
            {
                textoRespuesta: "Indicativo de llamada de la aeronave, ruta de vuelo, aeropuerto de destino",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicativo de llamada de la aeronave, naturaleza de la emergencia, intenciones del piloto, posición actual, nivel y rumbo",
                isCorrect: true
            },
            {
                textoRespuesta: "Indicativo de llamada de la aeronave, aeródromo de salida, posición y nivel",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicativo de llamada de la aeronave, posición actual, asistencia que se requiere",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. ¿Cuál es la frecuencia conocida como VHF?",
        opciones: [
            {
                textoRespuesta: "De 300 a 3000 Mhz.",
                isCorrect: false
            },
            {
                textoRespuesta: "De 3000 a 30000 Mhz.",
                isCorrect: false
            },
            {
                textoRespuesta: "De 30 a 300 Mhz.",
                isCorrect: true
            },
            {
                textoRespuesta: "De 3 a 30 Mhz.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. ¿Cuál de las siguientes palabras o frases de procedimiento significa: \"Repitame todo este mensaje, o la parte especificada del mismo, exactamente como la haya recibido\"",
        opciones: [
            {
                textoRespuesta: "Repita",
                isCorrect: false
            },
            {
                textoRespuesta: "Verifique",
                isCorrect: false
            },
            {
                textoRespuesta: "Colacione",
                isCorrect: true
            },
            {
                textoRespuesta: "Repita exactamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. ¿Cuál es el código Q para 'marcación magnética desde la estación'?",
        opciones: [
            {
                textoRespuesta: "QDR",
                isCorrect: true
            },
            {
                textoRespuesta: "QTE",
                isCorrect: false
            },
            {
                textoRespuesta: "QDM",
                isCorrect: false
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. El número 175 se dirá por radio",
        opciones: [
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Ciento setenta y cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno setenta y cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno siete cinco",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. ¿Cuál es la forma correcta de transmitir el número 3500 cuando se indica una altitud o altura?",
        opciones: [
            {
                textoRespuesta: "Tres mil quinientos",
                isCorrect: true
            },
            {
                textoRespuesta: "Tres cinco cero cero",
                isCorrect: false
            },
            {
                textoRespuesta: "Tres quinientos",
                isCorrect: false
            },
            {
                textoRespuesta: "Tres cinco doble cero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Cuándo desde la torre nos indican el ajuste de altitud, ¿a qué Q se refiere?",
        opciones: [
            {
                textoRespuesta: "QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "QDM",
                isCorrect: false
            },
            {
                textoRespuesta: "QBI",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. Que frase debemos usar si queremos decir: Sí",
        opciones: [
            {
                textoRespuesta: "Roger",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí",
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
        titulo: "35. Si con fallo de radio vamos a entrar en un aeródromo no controlado, ¿qué acciones tomaría?",
        opciones: [
            {
                textoRespuesta: "a) Extremaremos las precauciones vigilando la posición de los demás tráficos antes de entrar en circuito y durante el mismo",
                isCorrect: true
            },
            {
                textoRespuesta: "b) No podemos entrar en un aeródromo no controlado sin radio",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Podemos entrar en el aeródromo pero llegando en larga final, no podemos hacer los demás tramos del circuito",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"a\" y la \"c\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Cómo transmitir 1001 como QNH:",
        opciones: [
            {
                textoRespuesta: "QNH uno cero cero uno",
                isCorrect: true
            },
            {
                textoRespuesta: "QNH uno doble cero uno",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH mil uno",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH diez cero uno",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. Durante la transmisión de números que contengan puntos decimales:",
        opciones: [
            {
                textoRespuesta: "El término decimal podrá emitirse siempre que no haya lugar a errores de interpretación",
                isCorrect: false
            },
            {
                textoRespuesta: "Deberá emplearse siempre",
                isCorrect: true
            },
            {
                textoRespuesta: "Podrá dejarse de transmitir",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe pronunciarse solo si va seguido de tres dígitos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. En caso de fallo de comunicaciones, ¿qué código pondremos en el transpondedor?",
        opciones: [
            {
                textoRespuesta: "7600",
                isCorrect: true
            },
            {
                textoRespuesta: "7500",
                isCorrect: false
            },
            {
                textoRespuesta: "7800",
                isCorrect: false
            },
            {
                textoRespuesta: "7200",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. ¿Qué acción se requiere por parte de un piloto si el/ella no puede establecer contacto radio con una estación aeronáutica?",
        opciones: [
            {
                textoRespuesta: "Intentar establecer contacto con otras aeronaves o estaciones aeronáuticas",
                isCorrect: true
            },
            {
                textoRespuesta: "Desviarse a un aeródromo alternativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Responder 7500 modo A",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizar en el aeródromo apropiado más próximo en la ruta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Un controlador le dice a un avión: EC-LJ6 viento 320 grados 16 nudos, autorizado a despegar en la pista 29. ¿Qué debe responder el piloto exactamente?",
        opciones: [
            {
                textoRespuesta: "EC-LJ6 viento 320 grados 16 nudos, autorizado a despegar en la pista 29",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-LJ6 en carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-LJ6, autorizado a despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a despegar en la pista 29, EC-LJ6",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "41. Una aeronave transmite el código 7600. Esto indica que:",
        opciones: [
            {
                textoRespuesta: "Trata de realizar un aterrizaje forzoso",
                isCorrect: false
            },
            {
                textoRespuesta: "Se desvía al aeropuerto alternativo",
                isCorrect: false
            },
            {
                textoRespuesta: "No establece contacto por radio debido a un fallo con sus equipos de comunicaciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Ha sido secuestrado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. En la medida de lo posible una llamada de emergencia debe contener los siguientes elementos/detalles",
        opciones: [
            {
                textoRespuesta: "Indicativo de llamada de la aeronave, ruta de vuelo, aeropuerto de destino",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicativo de llamada de la aeronave, posición actual, asistencia que se requiere",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicativo de llamada de la aeronave, aeródromo de salida, posición y nivel",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicativo de llamada de la aeronave, naturaleza de la emergencia, intenciones del piloto, posición actual, nivel y rumbo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "43. Si en la frecuencia de torre decimos, por ejemplo: Córdoba, EC­-FQR para control de radio ¿Qué queremos decir?",
        opciones: [
            {
                textoRespuesta: "Estamos pidiendo a control que nos verifique la legibilidad de nuestra radio",
                isCorrect: true
            },
            {
                textoRespuesta: "Es la frase usada para terminar los servicios de control",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la frase para el primer contacto con la torre",
                isCorrect: false
            },
            {
                textoRespuesta: "Así pedimos a la torre que nos controle durante todo el trayecto que estemos en su área",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. ¿Cuál es la forma correcta de deletrear HB­JCY en un mensaje radiotelefónico?",
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
        titulo: "45. Mi mensaje será más efectivo y comprensible si",
        opciones: [
            {
                textoRespuesta: "Enfatizo el comienzo del mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Enfatizo el final del mensaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantengo un volumen de habla constante",
                isCorrect: true
            },
            {
                textoRespuesta: "Utilizo el método de palabras duplicadas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. El número 175 se dirá por radio:",
        opciones: [
            {
                textoRespuesta: "Ciento setenta y cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno setenta y cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno siete cinco",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. ¿Qué significa el término QDM?",
        opciones: [
            {
                textoRespuesta: "Marcación magnética desde la estación",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo verdadero hacia la estación (sin viento)",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo magnético hacia la estación (sin viento)",
                isCorrect: true
            },
            {
                textoRespuesta: "Marcación verdadera desde la estación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. La recepción HF:",
        opciones: [
            {
                textoRespuesta: "Mejora por la noche",
                isCorrect: false
            },
            {
                textoRespuesta: "Mejora por el día",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la sub-banda",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. ¿Qué fenómeno influye por lo general en la recepción de una transmisión VHF?",
        opciones: [
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Las descargas eléctricas de las tormentas",
                isCorrect: false
            },
            {
                textoRespuesta: "Ionosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "El nivel de vuelo del avión y la elevación del terreno",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. Un mensaje de un avión que ha sufrido un accidente y requiera ayuda inmediata es un mensaje de:",
        opciones: [
            {
                textoRespuesta: "De seguridad en vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Urgente",
                isCorrect: false
            },
            {
                textoRespuesta: "De socorro",
                isCorrect: true
            },
            {
                textoRespuesta: "De control",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. ¿Qué significa tener una buena técnica al micrófono?",
        opciones: [
            {
                textoRespuesta: "Usar un tono de conversación normal, hablando con claridad y buena pronunciación",
                isCorrect: true
            },
            {
                textoRespuesta: "Hablar en un tono muy elevado",
                isCorrect: false
            },
            {
                textoRespuesta: "Utilizar a menudo muletillas al tipo 'em'",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener el micrófono bien alejado de la boca ya que así se mejora la facilidad de comprensión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Si un piloto necesita realizar una transmisión a ciegas, la misma se debe hacer:",
        opciones: [
            {
                textoRespuesta: "Sólo durante vuelos VFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos veces en la frecuencia designada",
                isCorrect: true
            },
            {
                textoRespuesta: "Solamente una vez en la frecuencia designada",
                isCorrect: false
            },
            {
                textoRespuesta: "Solamente en la frecuencia de emergencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. ¿Qué significa la frase 'Recibido' ('Roger')?",
        opciones: [
            {
                textoRespuesta: "Una respuesta directa en modo afirmativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Una respuesta directa en modo negativo",
                isCorrect: false
            },
            {
                textoRespuesta: "He recibido entera su última transmisión",
                isCorrect: true
            },
            {
                textoRespuesta: "Autorizado a despegar o autorizado a aterrizar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. Que tipo de información puede obtener un avión en vuelo mediante VOLMET",
        opciones: [
            {
                textoRespuesta: "SIGMET",
                isCorrect: false
            },
            {
                textoRespuesta: "SPECI y TAF",
                isCorrect: false
            },
            {
                textoRespuesta: "METAR sobre aeropuertos concretos",
                isCorrect: true
            },
            {
                textoRespuesta: "Pista en servicio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. La separación vertical con el terreno, es responsabilidad del",
        opciones: [
            {
                textoRespuesta: "Compartida entre el piloto y el copiloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Controlador",
                isCorrect: false
            },
            {
                textoRespuesta: "Compartida entre ambos",
                isCorrect: false
            },
            {
                textoRespuesta: "Piloto, salvo en vuelo IFR con vectores radar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "56. Todos los números en radiotelefonía se transmitirán pronunciando cada dígito separadamente:",
        opciones: [
            {
                textoRespuesta: "Cierto",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso",
                isCorrect: false
            },
            {
                textoRespuesta: "Cierto, excepto los millares redondos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cierto, excepto las centenas y los millares redondos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "57. En caso de fallo de comunicaciones, ¿en qué momento podremos estar en IMC?",
        opciones: [
            {
                textoRespuesta: "Por encima de 1.000 pies sobre la elevación del aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Por encima de 1.500 pies sobre la elevación del aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Por debajo de 1.500 pies sobre la elevación del aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos mantenernos en condiciones VMC",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "58. La abreviatura de 'muy alta frecuencia' es:",
        opciones: [
            {
                textoRespuesta: "HF",
                isCorrect: false
            },
            {
                textoRespuesta: "VHF",
                isCorrect: true
            },
            {
                textoRespuesta: "SHF",
                isCorrect: false
            },
            {
                textoRespuesta: "MF",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. Un ATIS es",
        opciones: [
            {
                textoRespuesta: "Servicio que difunde el AIP",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio Automático Información Terminal",
                isCorrect: true
            },
            {
                textoRespuesta: "Operario que proporciona pista en servicio y viento en algunos aeropuertos",
                isCorrect: false
            },
            {
                textoRespuesta: "Radiodifusión meteorológica para aviones en ruta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. Por una emergencia, necesitamos entrar en el aeropuerto de Córdoba. Sabemos que la frecuencia es 118.3. Es preferible contactar con la torre en esa frecuencia, a hacerlo en la de emergencia.",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: true
            },
            {
                textoRespuesta: "Falso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. ¿Qué procedimiento utilizará la aeronave durante el día para indicar acuse de recibo en caso de fallo de radio?",
        opciones: [
            {
                textoRespuesta: "a) Guiñando el avión continuadamente",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Balanceando las alas (alabeando)",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Encendiendo y apagando la luz de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"b\" y la \"c\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "62. ¿Cuál de las siguientes palabras o frases de procedimiento significa: \"Este intercambio de transmisiones ha terminado y no se espera respuesta\"?",
        opciones: [
            {
                textoRespuesta: "Recibido",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambio",
                isCorrect: false
            },
            {
                textoRespuesta: "Verificado",
                isCorrect: false
            },
            {
                textoRespuesta: "Terminado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "63. La responsabilidad de la separación con el terreno, es responsabilidad del piloto. Esta norma tiene una excepción. Cuando el avión está siguiendo vectores radar, la responsabilidad es del controlador",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: true
            },
            {
                textoRespuesta: "Falso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Si desde la torre nos transmiten, \"Continúe para final, número dos después de cessna\", significa:",
        opciones: [
            {
                textoRespuesta: "La cessna aterrizará antes que nosotros",
                isCorrect: true
            },
            {
                textoRespuesta: "Aterrizaremos en la pista 05 después de la cessna",
                isCorrect: false
            },
            {
                textoRespuesta: "Al finalizar el vuelo, nos dirigiremos al aparcamiento número dos",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. Una vez se abandona el TMA el control de salidas nos transferirá al:",
        opciones: [
            {
                textoRespuesta: "Siguiente control de salidas",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos aconsejará sintonizar 121.5 MHz mientras estemos en territorio español",
                isCorrect: false
            },
            {
                textoRespuesta: "Centro de control de área",
                isCorrect: true
            },
            {
                textoRespuesta: "Centro de control de influencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Las estaciones terrestres se nombrarán generalmente por el nombre del:",
        opciones: [
            {
                textoRespuesta: "Aeropuerto",
                isCorrect: false
            },
            {
                textoRespuesta: "El pueblo más cercano",
                isCorrect: false
            },
            {
                textoRespuesta: "La ciudad, pueblo o accidente geográfico notable que se halle en sus cercanías",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. La prioridad de la orden ruede hasta la pista 05, es:",
        opciones: [
            {
                textoRespuesta: "Menor que autorizado a aterrizar.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor que precaución obras a la izquierda de calle de rodadura",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual que alinear y mantener en pista 07",
                isCorrect: true
            },
            {
                textoRespuesta: "Mayor que transmita para QDM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. ¿Cómo dirá un piloto 'recibido procederé'?",
        opciones: [
            {
                textoRespuesta: "Roger",
                isCorrect: false
            },
            {
                textoRespuesta: "Wilco",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprendido",
                isCorrect: true
            },
            {
                textoRespuesta: "Recibido, procederé",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. ¿Cuál es el indicativo de llamada en radiotelefonía para la estación aeronáutica que presta el Servicio de información de vuelos?",
        opciones: [
            {
                textoRespuesta: "Información",
                isCorrect: true
            },
            {
                textoRespuesta: "Servicio de Información de Vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Control de información",
                isCorrect: false
            },
            {
                textoRespuesta: "Torre de Información",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. Qué tipo de mensaje es aquel en el que necesitamos cambiar la ruta por meteo",
        opciones: [
            {
                textoRespuesta: "Mensaje de seguridad",
                isCorrect: true
            },
            {
                textoRespuesta: "Mensaje de meteo",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje de control",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje de regulación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. Cual de los siguientes canales puede usarse para transmitir un ATIS.",
        opciones: [
            {
                textoRespuesta: "a) El de un ILS",
                isCorrect: false
            },
            {
                textoRespuesta: "b) El de un VOR",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Cualquiera de los VHF",
                isCorrect: true
            },
            {
                textoRespuesta: "d) \"b\" y \"c\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. La forma de la transmisión de prueba, debiera ser:",
        opciones: [
            {
                textoRespuesta: "Valencia torre EC-CUE comprobación radio 118.55",
                isCorrect: true
            },
            {
                textoRespuesta: "Valencia torre aquí EC-CUE comprobación radio en la Frecuencia 118,55",
                isCorrect: false
            },
            {
                textoRespuesta: "Torre de Valencia comprobación radio de EC-CUEL en 118,55",
                isCorrect: false
            },
            {
                textoRespuesta: "Torre de Valencia aquí EC-CUE haciendo comprobación de radio en 118.55 cambio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. Diga ¿cuál de las siguientes bandas tiene la frecuencia más baja?",
        opciones: [
            {
                textoRespuesta: "VLF",
                isCorrect: true
            },
            {
                textoRespuesta: "VHF",
                isCorrect: false
            },
            {
                textoRespuesta: "EHF",
                isCorrect: false
            },
            {
                textoRespuesta: "HF",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. Respecto a la escala de legibilidad en comunicaciones radio diga cuál de las siguientes es correcta:",
        opciones: [
            {
                textoRespuesta: "100% significa perfectamente legible",
                isCorrect: false
            },
            {
                textoRespuesta: "25% significa entrecortado",
                isCorrect: false
            },
            {
                textoRespuesta: "5 significa perfectamente legible",
                isCorrect: true
            },
            {
                textoRespuesta: "1 significa legible con normalidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. ¿Mensajes SAFETY qué tipo de mensajes son?",
        opciones: [
            {
                textoRespuesta: "Mensajes de seguridad a aeronaves en vuelo o a personas",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensajes de control de trafico",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensajes de socorro",
                isCorrect: true
            },
            {
                textoRespuesta: "Mensajes de urgencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Si con fallo de radio en vuelo observamos una luz verde fija desde la torre, significa:",
        opciones: [
            {
                textoRespuesta: "Regrese para aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a aterrizar",
                isCorrect: true
            },
            {
                textoRespuesta: "Ceda el paso a las otras aeronaves y siga en circuito",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a entrar en base de la pista en servicio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. Un avión no consigue establecer contacto por radio con una estación determinada de frecuencia designada. ¿Qué deberá hacer el piloto?",
        opciones: [
            {
                textoRespuesta: "Volver al aeropuerto",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizar en el aeropuerto más próximo",
                isCorrect: false
            },
            {
                textoRespuesta: "Proseguir el vuelo sin comunicaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Tratar de establecer contacto con la estación en una frecuencia alternativa",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "78. Si volamos con un rumbo de 5 grados, cual es la forma correcta de decir ese rumbo por la radio",
        opciones: [
            {
                textoRespuesta: "Cero cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "Cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Cero cero cinco",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "79. En un aeropuerto con control de rodadura, de aeródromo y de aproximación, al entrar en el TMA, contactaremos con:",
        opciones: [
            {
                textoRespuesta: "Control de aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Control de aproximación",
                isCorrect: true
            },
            {
                textoRespuesta: "Control de TMA",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el control de aproximación o con el de aeródromo indistintamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. La Señal radiotelefónica de Socorro estará constituida por la palabra:",
        opciones: [
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
            },
            {
                textoRespuesta: "SOS",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. ¿Cuál de los siguientes serian los diminutivos de llamada correctos?",
        opciones: [
            {
                textoRespuesta: "Valencia Centro de Control, Torre de Valencia, Valencia Control de Aproximación",
                isCorrect: false
            },
            {
                textoRespuesta: "Control Valencia, Torre Valencia, Aproximación Valencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Valencia Control, Valencia Torre, Valencia Aproximación",
                isCorrect: true
            },
            {
                textoRespuesta: "Valencia Control, Torre de Valencia, Aproximación Valencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Al avión E­UE se le ha ordenado contactar con la torre de Córdoba en la frecuencia 118,30; ¿Cuál es la respuesta correcta para indicar que cumplirá la orden recibida?",
        opciones: [
            {
                textoRespuesta: "118,30 EUE",
                isCorrect: true
            },
            {
                textoRespuesta: "Cambiaré a torre EUE",
                isCorrect: false
            },
            {
                textoRespuesta: "Torre de Córdoba EUE",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambiando EUE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Al hacer pruebas de radio, debiera usarse la escala de legibilidad. ¿Cual es ésta escala?:",
        opciones: [
            {
                textoRespuesta: "1-Ilegible, 2-Legible con dificultad, 3-Legible de vez en cuando, 4-Legible, 5-Perfectamente Legible",
                isCorrect: false
            },
            {
                textoRespuesta: "1-Legible de vez en cuando, 2-Perfectamente legible, 3-Legible, 4-Legible con dificultad, 5-Ilegible",
                isCorrect: false
            },
            {
                textoRespuesta: "1-Perfectamente legible, 2-Legible, 3-Legible de vez en cuando, 4-Legible con dificultad, 5-Ilegible",
                isCorrect: false
            },
            {
                textoRespuesta: "1-Ilegible, 2-Legible de vez en cuando, 3-Legible con dificultad, 4-Legible, 5-Perfectamente legible",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "84. Qué significa la instrucción 'Go Around'",
        opciones: [
            {
                textoRespuesta: "Hacer un viraje de 3600",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizar una aproximación frustrada",
                isCorrect: true
            },
            {
                textoRespuesta: "Sobrepasar la aeronave precedente",
                isCorrect: false
            },
            {
                textoRespuesta: "Proceder con la comunicación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. La abreviatura 'AIREP' significa:",
        opciones: [
            {
                textoRespuesta: "Red de comunicaciones aeronáuticas",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de comunicaciones aeronáuticas",
                isCorrect: false
            },
            {
                textoRespuesta: "Ruta de servicio de asesoramiento",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeronotificación (en forma oral)",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "86. El orden de prioridad de los siguientes mensajes en el servicio móvil aeronáutico es:",
        opciones: [
            {
                textoRespuesta: "Mensaje meteorológico, mensaje de localización de dirección, mensaje de regularidad en vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje de socorro, Mensaje de seguridad en vuelo, Mensaje de urgencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje de localización de dirección, Mensaje de socorro, Mensaje de urgencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Mensaje de socorro, Mensaje de urgencia, Mensaje de localización de dirección",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "87. El código QMS es traducido como",
        opciones: [
            {
                textoRespuesta: "Libre vertical de la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión de AD suministrada por la TWR",
                isCorrect: false
            },
            {
                textoRespuesta: "Prolongue viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Prolongación del eje de pista",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "88. En áreas terminales congestionadas y en las que resulte necesario un control sobre las aeronaves hasta que abandonen la zona de tráfico, la torre solicitará a los aviones volando VMC que contacten con:",
        opciones: [
            {
                textoRespuesta: "Control de aproximación",
                isCorrect: true
            },
            {
                textoRespuesta: "Control de rodadura",
                isCorrect: false
            },
            {
                textoRespuesta: "Control de área",
                isCorrect: false
            },
            {
                textoRespuesta: "Control Madrid",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. Una aeronave que se encuentre en peligro, solicitará ayuda",
        opciones: [
            {
                textoRespuesta: "Usando procedimientos de comunicaciones de socorro",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando cualquier medio del que disponga",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "90. Cuál es la distancia máxima a la que usted puede esperar contacto solidó en VHF sobre terreno llano, volando a FL 050",
        opciones: [
            {
                textoRespuesta: "Aprox. 8 NM",
                isCorrect: false
            },
            {
                textoRespuesta: "Aprox. 85 NM",
                isCorrect: true
            },
            {
                textoRespuesta: "Aprox. 15 NM",
                isCorrect: false
            },
            {
                textoRespuesta: "Aprox. 150 NM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. ¿Cuál de los siguientes procedimientos de radio va antes de pedir autorización para rodar?",
        opciones: [
            {
                textoRespuesta: "Pedir autorización para calar QNH",
                isCorrect: false
            },
            {
                textoRespuesta: "Verificar la radio",
                isCorrect: true
            },
            {
                textoRespuesta: "Pedir autorización para cruzar la pista en uso",
                isCorrect: false
            },
            {
                textoRespuesta: "Notificar intenciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. ¿Cómo deletrearemos en radiotelefonía la palabra “fuselaje“?",
        opciones: [
            {
                textoRespuesta: "Foxtrot, uniform, sierra, echo, lima, alfa, juliet, echo",
                isCorrect: true
            },
            {
                textoRespuesta: "Foxtrot, union, sierra, eco, lima, alfa, julio, eco",
                isCorrect: false
            },
            {
                textoRespuesta: "Fox, union, sierra, eco, lima, alfa, juliet, eco",
                isCorrect: false
            },
            {
                textoRespuesta: "Fox, union, sierra, eco, lima, alfa, julio, eco",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. Puede un avión cambiar el indicativo de llamada durante el vuelo",
        opciones: [
            {
                textoRespuesta: "Si, a criterio del ATC",
                isCorrect: true
            },
            {
                textoRespuesta: "Si, a criterio del piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "No",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. ¿Qué significa una buena técnica al micrófono?",
        opciones: [
            {
                textoRespuesta: "Usar un tono normal, hablando con claridad y buena pronunciación",
                isCorrect: true
            },
            {
                textoRespuesta: "Usar una alta cadencia de palabras por minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "Hablar lo más despacio posible para una mejor comprensión",
                isCorrect: false
            },
            {
                textoRespuesta: "Hablar con el micrófono cerca de la boca",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. La frecuencia de socorro en la banda de VHF asignada para el servicio móvil aeronáutico es:",
        opciones: [
            {
                textoRespuesta: "120,5 Mhz.",
                isCorrect: false
            },
            {
                textoRespuesta: "125,1 Mhz.",
                isCorrect: false
            },
            {
                textoRespuesta: "121,5 Mhz.",
                isCorrect: true
            },
            {
                textoRespuesta: "121,0 Mhz.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. La definición: 'Es el conjunto de fases por el que pasa una onda desde su origen hasta que vuelve a su valor inicial', corresponde a:",
        opciones: [
            {
                textoRespuesta: "Frecuencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Amplitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Hercio",
                isCorrect: false
            },
            {
                textoRespuesta: "Ciclo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "97. ¿En qué idioma por regla general deberían efectuarse las comunicaciones aeroterrestres?",
        opciones: [
            {
                textoRespuesta: "En el idioma que la. estación terrestre usa normalmente",
                isCorrect: true
            },
            {
                textoRespuesta: "En inglés",
                isCorrect: false
            },
            {
                textoRespuesta: "En inglés, francés o español",
                isCorrect: false
            },
            {
                textoRespuesta: "En inglés o francés",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Un vuelo VFR puede solicitar vectores radar:",
        opciones: [
            {
                textoRespuesta: "Sólo en espacio aéreo clase C",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Sin ningún problema",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo en emergencia",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "99. ¿Puedes poner 1234 en el transponder?",
        opciones: [
            {
                textoRespuesta: "Sí",
                isCorrect: true
            },
            {
                textoRespuesta: "No",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Si a un piloto le piden que notifique la altura:",
        opciones: [
            {
                textoRespuesta: "Responderá diciéndolo sobre QNH",
                isCorrect: false
            },
            {
                textoRespuesta: "Responderá diciéndola sobre QNE",
                isCorrect: false
            },
            {
                textoRespuesta: "Responderá diciéndola sobre QFE",
                isCorrect: true
            },
            {
                textoRespuesta: "Responderá diciéndola sobre QFF",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;