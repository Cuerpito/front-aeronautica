const preguntas = [
    {
        titulo: "1. A una aeronave que solicita el código QDM a una estación, ¿qué tipo de información le proporcionarán?",
        opciones: [
            {
                textoRespuesta: "La marcación verdadera de la aeronave con respecto a la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo magnético que ha de seguir para aproximarse a la estación, con las correcciones de viento incluidas.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo verdadero que ha de seguir para aproximarse a la estación, con las correcciones de viento incluidas.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo magnético que ha de seguir para aproximarse a la estación, al que el piloto tendrá que aplicarle las correspondientes correcciones debido al viento.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "2. La palabra clave utilizada para designar una fase de peligro es:",
        opciones: [
            {
                textoRespuesta: "INCERFA.",
                isCorrect: false
            },
            {
                textoRespuesta: "DETRESFA.",
                isCorrect: true
            },
            {
                textoRespuesta: "PAN PAN.",
                isCorrect: false
            },
            {
                textoRespuesta: "ALERFA.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. Si todos los intentos de establecer comunicación con estaciones aeronáuticas u otras aeronaves fracasan, ¿qué se debe hacer?",
        opciones: [
            {
                textoRespuesta: "Transmitir el mensaje dos veces en la frecuencia apropiada, comenzando con la frase “Transmitiendo a ciegas”.",
                isCorrect: true
            },
            {
                textoRespuesta: "Transmitir el mensaje dos veces en la frecuencia apropiada y terminar la emisión con la frase “Transmitiendo a ciegas”.",
                isCorrect: false
            },
            {
                textoRespuesta: "Repetir dos veces la frase “Transmitiendo a ciegas” en la frecuencia apropiada y esperar a recibir respuesta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Transmitir el mensaje tres veces en la frecuencia apropiada y terminar la emisión con la frase “Transmitiendo a ciegas”.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. ¿Qué es el código SSR?",
        opciones: [
            {
                textoRespuesta: "La frecuencia (VHF) asignada a una determinada señal de respuesta de impulsos múltiples transmitida por un transpondedor.",
                isCorrect: false
            },
            {
                textoRespuesta: "El número asignado a una determinada señal de respuesta de impulsos múltiples transmitida por la radio.",
                isCorrect: false
            },
            {
                textoRespuesta: "El número asignado a una determinada señal de respuesta de impulsos múltiples transmitida por un transpondedor.",
                isCorrect: true
            },
            {
                textoRespuesta: "El número asignado a la señal de emergencia transmitida por un transpondedor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Las siglas ATIS tienen el siguiente significado:",
        opciones: [
            {
                textoRespuesta: "Servicio Automático de Información en Vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio Aeronáutico de Información en Vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio Automático de Información Terminal.",
                isCorrect: true
            },
            {
                textoRespuesta: "Servicio de Información de Vuelo de Aeródromo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. El mensaje “EC-SV3 Málaga torre legibilidad cinco”, quiere decir que la comunicación es:",
        opciones: [
            {
                textoRespuesta: "Legible.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ilegible.",
                isCorrect: false
            },
            {
                textoRespuesta: "Legible con dificultad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Perfectamente legible.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "7. ¿Qué es el ATIS?",
        opciones: [
            {
                textoRespuesta: "Una transmisión en directo que se emite constantemente con información meteorológica y de otro tipo que pueda ser de interés para el piloto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una transmisión grabada que se emite constantemente con información meteorológica y de otro tipo que pueda ser de interés para el piloto.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una transmisión grabada que se emite constantemente y que contiene información meteorológica en exclusiva.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una transmisión en directo que se emite constantemente con información meteorológica en exclusiva.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Para conseguir la máxima inteligibilidad posible en las comunicaciones por radio, es importante que quien esté transmitiendo:",
        opciones: [
            {
                textoRespuesta: "Mantenga un volumen creciente de voz y una velocidad de enunciación que no exceda las 60 palabras por minuto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantenga el volumen de voz a un nivel constante de conversación y una velocidad de enunciación que no exceda de 100 palabras por minuto.",
                isCorrect: true
            },
            {
                textoRespuesta: "Mantenga el volumen de voz a un nivel constante de conversación y una velocidad de enunciación que exceda de 100 palabras por minuto.",
                isCorrect: false
            },
            {
                textoRespuesta: "No mantenga el volumen de voz a un nivel constante de conversación y sí una velocidad de enunciación que no exceda de 100 palabras por minuto.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. El procedimiento por el que la estación receptora repite un mensaje recibido o una parte apropiada del mismo a la estación transmisora, con el fin de obtener confirmación de que la recepción ha sido correcta es:",
        opciones: [
            {
                textoRespuesta: "La repetición.",
                isCorrect: false
            },
            {
                textoRespuesta: "La colación.",
                isCorrect: true
            },
            {
                textoRespuesta: "La corrección.",
                isCorrect: false
            },
            {
                textoRespuesta: "La comunicación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. En la fraseología normalizada, ¿cuál es la diferencia entre “Anule” y “Cancele”?",
        opciones: [
            {
                textoRespuesta: "“Anule” quiere decir haga caso omiso de esta transmisión y “Cancele”, anular la autorización transmitida anteriormente.",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna, se usan ambas indistintamente para anular la autorización transmitida anteriormente.",
                isCorrect: false
            },
            {
                textoRespuesta: "“Cancele” quiere decir haga caso omiso de esta transmisión y “Anule”, anular la autorización transmitida anteriormente.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna, se usan ambas indistintamente para que se haga caso omiso de la transmisión completa.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Para que la propagación de las señales de VHF sea captada por el receptor, requiere:",
        opciones: [
            {
                textoRespuesta: "Una baja altitud de vuelo por parte de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una trayectoria en la que haya obstáculos y que las antenas sean visibles la una para la otra.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una trayectoria en la que no haya obstáculos y que las antenas sean visibles la una para la otra.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una trayectoria en la que no haya obstáculos y que las dos antenas se encuentren fuera del horizonte de radio de la otra.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. En la fraseología normalizada, la expresión “Adelante” o “Go ahead” significa:",
        opciones: [
            {
                textoRespuesta: "Autorizado para seguir en las condiciones determinadas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorización concedida para la medida propuesta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Prosiga con su mensaje.",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. Una aeronotificación se define como:",
        opciones: [
            {
                textoRespuesta: "Un aviso que contiene información relativa al establecimiento, condición o modificación de cualquier instalación aeronáutica, servicio, procedimiento o peligro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un informe que prepara el comandante de la aeronave durante el vuelo, relativo a datos de posición, operación o meteorológicos.",
                isCorrect: true
            },
            {
                textoRespuesta: "La información referente al vuelo previsto o a parte del mismo que debe presentarse en una oficina de notificación de los servicios de tránsito aéreo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una notificación que se realiza a los centros coordinadores de salvamento cuando se considera que una aeronave está en estado de emergencia.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. Un “aviso distribuido por medio de telecomunicaciones que contiene información relativa al establecimiento, condición o modificación de cualesquiera instalaciones, servicios, procedimientos o peligros aeronáuticos que es indispensable conozca oportunamente el personal que realiza operaciones de vuelo” es:",
        opciones: [
            {
                textoRespuesta: "El AIP.",
                isCorrect: false
            },
            {
                textoRespuesta: "El VOLMET.",
                isCorrect: false
            },
            {
                textoRespuesta: "El ATIS.",
                isCorrect: false
            },
            {
                textoRespuesta: "El NOTAM.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "15. La Publicación de Información Aeronáutica o AIP de España se divide entre las siguientes secciones:",
        opciones: [
            {
                textoRespuesta: "Generalidades o GEN, En Ruta o ENR y Aeródromos o AER.",
                isCorrect: false
            },
            {
                textoRespuesta: "Generalidades o GNR, En Ruta o ENR y Aeródromos o AD.",
                isCorrect: true
            },
            {
                textoRespuesta: "En Ruta o ENR y Aeródromo o AER.",
                isCorrect: false
            },
            {
                textoRespuesta: "Generalidades o GNR y Aeródromos o AD.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. Si nos encontramos con nuestra aeronave en tierra y como señal de luces recibimos una serie de destellos verdes quiere decir que:",
        opciones: [
            {
                textoRespuesta: "Estamos autorizados para el despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos que regresar al punto de partida en el aeródromo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Estamos autorizados para el rodaje.",
                isCorrect: true
            },
            {
                textoRespuesta: "Tenemos que apartarnos del área de aterrizaje en uso.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. ¿Con qué palabra clave se designa una fase de alerta y qué significa?",
        opciones: [
            {
                textoRespuesta: "ALERFA. Situación en la cual se abriga temor por la seguridad de una aeronave y de sus ocupantes.",
                isCorrect: true
            },
            {
                textoRespuesta: "ALERFA. Expresión genérica que significa, según el caso, fase de incertidumbre, fase de emergencia o fase de peligro.",
                isCorrect: false
            },
            {
                textoRespuesta: "DETRESFA. Situación en la cual se abriga temor por la seguridad de una aeronave y de sus ocupantes.",
                isCorrect: false
            },
            {
                textoRespuesta: "ALERFA. Situación en la cual existen motivos justificados para creer que una aeronave y sus ocupantes están amenazados por un peligro grave e inminente y necesitan auxilio inmediato.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Tanto una estación aeronáutica como una aeronave que quieran transmitir mensajes a otra que esté en situación de peligro, deberán:",
        opciones: [
            {
                textoRespuesta: "Dar toda la información posible para que el piloto al mando pueda tener controlada la situación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ser lo más escuetos posible en la información transmitida para no distraer al piloto al mando.",
                isCorrect: true
            },
            {
                textoRespuesta: "Comunicar únicamente en caso de que el piloto al mando de la aeronave en peligro lo solicite.",
                isCorrect: false
            },
            {
                textoRespuesta: "Limitarse a escuchar lo que el piloto al mando de la aeronave les esté comunicando y enviar la ayuda necesaria.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. ¿Con qué señal en tierra se comunica la prohibición de aterrizar en un aeródromo?",
        opciones: [
            {
                textoRespuesta: "Con un panel cuadrado, rojo y horizontal, con diagonales amarillas.",
                isCorrect: true
            },
            {
                textoRespuesta: "Con un panel cuadrado, rojo y horizontal, con una diagonal amarilla.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con cruces de un solo color llamativo, preferiblemente blanco, colocadas horizontalmente.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con una doble cruz blanca colocada horizontalmente.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. Estando en el circuito de fallo de radio nos han indicado que regresemos para aterrizar y posteriormente nos envían una señal con luz pirotécnica roja. ¿Qué debemos hacer?",
        opciones: [
            {
                textoRespuesta: "Aterrizar en el aeródromo, pues nos han dado prioridad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Abandonar inmediatamente el circuito de tráfico e intentar el aterrizaje en otro aeródromo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ignorar las indicaciones anteriores y aterrizar inmediatamente en el aeródromo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ignorar las indicaciones anteriores y no aterrizar en el aeródromo por el momento.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "21. ¿Cuáles son las señales visuales que se utilizan para advertir a una aeronave no autorizada que se encuentra volando en una zona restringida, prohibida o peligrosa?",
        opciones: [
            {
                textoRespuesta: "Una serie de luces rojas y verdes que parpadean con un intervalo de 10 segundos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una serie de proyectiles, lanzados con un intervalo de 10 segundos que al explotar produzcan luces o estrellas rojas y verdes.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una serie de proyectiles, lanzados con un intervalo de 30 segundos que al explotar produzcan luces o estrellas rojas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una serie de luces de destello rojas que parpadean con un intervalo de 20 segundos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. En vuelo, ¿dónde es posible obtener información meteorológica que pueda afectar a las condiciones adecuadas para los vuelos VFR?",
        opciones: [
            {
                textoRespuesta: "En las frecuencias METAR.",
                isCorrect: false
            },
            {
                textoRespuesta: "En las frecuencias VOLMET.",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre será necesario hacer una llamada al servicio de información en vuelo para obtener datos de este tipo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Consultando el AIP.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. Entre las fases de emergencia está la fase de peligro. ¿Cuál es la palabra clave que se utiliza en su caso y qué significa?",
        opciones: [
            {
                textoRespuesta: "ALERFA. Situación en la cual existen motivos justificados para creer que una aeronave y sus ocupantes están amenazados por un peligro grave e inminente y necesitan auxilio inmediato.",
                isCorrect: false
            },
            {
                textoRespuesta: "INCERFA. Situación en la cual existen motivos justificados para creer que una aeronave y sus ocupantes están amenazados por un peligro grave e inminente y necesitan auxilio inmediato.",
                isCorrect: false
            },
            {
                textoRespuesta: "DETRESFA. Situación en la cual existe duda acerca de la seguridad de una aeronave y de sus ocupantes.",
                isCorrect: false
            },
            {
                textoRespuesta: "DETRESFA. Situación en la cual existen motivos justificados para creer que una aeronave y sus ocupantes están amenazados por un peligro grave e inminente y necesitan auxilio inmediato.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "24. El código SSR de fallo de comunicaciones del transpondedor es:",
        opciones: [
            {
                textoRespuesta: "7700.",
                isCorrect: false
            },
            {
                textoRespuesta: "7600.",
                isCorrect: true
            },
            {
                textoRespuesta: "7500.",
                isCorrect: false
            },
            {
                textoRespuesta: "7400.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. La palabra clave utilizada para designar una fase de alerta es:",
        opciones: [
            {
                textoRespuesta: "MAYDAY.",
                isCorrect: false
            },
            {
                textoRespuesta: "ALERFA.",
                isCorrect: true
            },
            {
                textoRespuesta: "INCERFA.",
                isCorrect: false
            },
            {
                textoRespuesta: "DETRESFA.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. ¿Qué ocurre con la capacidad de comunicación a través de la banda VHF?",
        opciones: [
            {
                textoRespuesta: "Aumenta con la altura y no se ve afectada por obstáculos ni por fenómenos meteorológicos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye con la altura pero no se ve afectada por obstáculos ni por fenómenos meteorológicos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta con la altura, se corta si existen obstáculos entre la estación emisora y la receptora y se puede ver afectada por algunos fenómenos meteorológicos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta con la altura, se corta si existen obstáculos entre la estación emisora y la receptora pero no se ve afectada por ningún fenómeno meteorológico.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Si durante el vuelo recibo una señal de luces en forma de una luz roja fija, ¿qué instrucciones me están dando?",
        opciones: [
            {
                textoRespuesta: "Que el aeródromo es peligroso y por lo tanto no puedo aterrizar.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que abandone inmediatamente la zona de tránsito del aeródromo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que a pesar de las instrucciones previas, no aterrice por ahora.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que ceda el paso a otras aeronaves y siga el circuito.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "28. La causa de emisión de un mensaje de socorro:",
        opciones: [
            {
                textoRespuesta: "Debe ser porque exista una condición que afecte a la seguridad de la aeronave u otro vehículo, de una persona a bordo o a la vista, pero que no exige ayuda inmediata.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe ser por la condición de estar amenazado por un riesgo serio o inminente aunque no tenga por qué requerirse ayuda inmediata.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe ser por la condición de estar amenazado por un riesgo serio o inminente y de requerir ayuda inmediata.",
                isCorrect: true
            },
            {
                textoRespuesta: "Debe ser porque exista una condición que afecte a la seguridad de la aeronave u otro vehículo, de una persona a bordo o a la vista y que exige ayuda inmediata.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. Hay una serie de fases en las que no se debe comunicar nada a una aeronave por motivos de seguridad, entre las que se encuentran:",
        opciones: [
            {
                textoRespuesta: "La carrera de despegue, el recorrido de aterrizaje, la última parte de la aproximación final o al inicio de un procedimiento de frustrada.",
                isCorrect: true
            },
            {
                textoRespuesta: "La carrera de despegue, el ascenso antes de superar el nivel de transición, la última parte de la aproximación final o al inicio de un procedimiento de frustrada.",
                isCorrect: false
            },
            {
                textoRespuesta: "Justo después del despegue, la última parte de la aproximación final, la última parte de una aproximación final o si la aeronave ha declarado una situación de emergencia o urgencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "La carrera de despegue, el recorrido de aterrizaje, la última parte de aproximación final o si la aeronave ha declarado una situación de emergencia o urgencia.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Si un controlador recibe una colación y se da cuenta de que existen incorrecciones, ¿qué transmitirá?",
        opciones: [
            {
                textoRespuesta: "“Anule repito”, seguido de la versión correcta que deberá ser colacionada de nuevo.",
                isCorrect: false
            },
            {
                textoRespuesta: "“Negativo repito”, seguido de la versión correcta que no deberá ser colacionada de nuevo.",
                isCorrect: false
            },
            {
                textoRespuesta: "“Negativo repito”, seguido de la versión correcta que deberá ser colacionada de nuevo.",
                isCorrect: true
            },
            {
                textoRespuesta: "“Anule repito”, seguido de la versión correcta que no deberá ser colacionada de nuevo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. La forma de avisar a una aeronave no autorizada de que se encuentra en una zona restringida, prohibida o peligrosa, o que está a punto de entrar en ella, es:",
        opciones: [
            {
                textoRespuesta: "Con una serie de proyectiles que lanzados con un intervalo de 10 segundos si es de noche, o con una serie luces de destellos rojos  si es de día.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con una serie de luces de destellos rojos si es de noche o con una serie de intervalos lanzados con un intervalo de 10 segundos cada uno su es de día.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con una serie de luces de destellos rojos que parpadean con un intervalo de 10 segundos tanto de día como de noche.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con una serie de proyectiles que lanzados con un intervalo de 10 segundos tanto de día como de noche.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. Cuando una aeronave envía un mensaje de socorro a una estación y ésta no acusa recibo, otras estaciones o aeronaves que estén escuchando deberán:",
        opciones: [
            {
                textoRespuesta: "Prestar la ayuda necesaria  a la aeronave que está efectuando la llamada de socorro.",
                isCorrect: true
            },
            {
                textoRespuesta: "Salirse de esa frecuencia de trabajo para facilitar la comunicación entre la aeronave y la estación receptora.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener la escucha sin intentar ayudar a la aeronave, pues podría entorpecer la ayuda prestada por parte de la estación receptora.",
                isCorrect: false
            },
            {
                textoRespuesta: "Acusar recibo con las palabras “MAYDAY RELAY” y prestar la ayuda necesaria.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. El aviso que contiene información relativa al establecimiento, condición o modificación de cualquier instalación aeronáutica, servicio, procedimiento o peligro, cuyo conocimiento oportuno es esencial para el personal encargado de las operaciones de vuelo es:",
        opciones: [
            {
                textoRespuesta: "El AIP.",
                isCorrect: false
            },
            {
                textoRespuesta: "El ATIS.",
                isCorrect: false
            },
            {
                textoRespuesta: "El VOLMET.",
                isCorrect: false
            },
            {
                textoRespuesta: "El NOTAM.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. A la hora de transmitir la hora, debemos tener en cuenta que:",
        opciones: [
            {
                textoRespuesta: "En todo caso se deberá comunicar tanto las horas como los minutos, para evitar confusiones.",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre que haya posibilidad de confusión, se usarán exclusivamente los minutos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre que no haya posibilidad de confusión, se usarán exclusivamente los minutos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre que no haya posibilidad de confusión, se usarán tanto las horas como los minutos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. La emisión VOLMET es:",
        opciones: [
            {
                textoRespuesta: "La radiodifusión ordinaria de información meteorológica para aeronaves en vuelo.",
                isCorrect: true
            },
            {
                textoRespuesta: "La radiodifusión ordinaria de información meteorológica para pilotos en aeródromos.",
                isCorrect: false
            },
            {
                textoRespuesta: "La radiodifusión ordinaria de información de seguridad para aeronaves en vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "La radiodifusión ordinaria de información de incidencias para aeronaves en vuelo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Si solicitamos el QUJ a una estación aeronáutica, ¿qué información le estamos pidiendo?",
        opciones: [
            {
                textoRespuesta: "La marcación magnética de la aeronave desde la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo magnético que debe seguir la aeronave para llegar a la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "La marcación verdadera de la aeronave desde la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo verdadero que debe seguir la aeronave para llegar a la estación.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "37. Si hemos recibido una serie de mensajes, de los cuales no tenemos que colacionar ninguno, ¿qué podemos responder?",
        opciones: [
            {
                textoRespuesta: "Terminado, que significa que el intercambio de transmisiones ha terminado y no se espera respuesta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Recibido o Roger, que significa que hemos recibido toda la información anterior.",
                isCorrect: true
            },
            {
                textoRespuesta: "Recibido o Roger, que significa que he comprendido su mensaje y procederé de acuerdo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Correcto, que significa que hemos recibido correctamente toda la información anterior.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Se recomienda que después de haber efectuado una llamada a una estación aeronáutica, para volver a llamar:",
        opciones: [
            {
                textoRespuesta: "Transcurran, al menos, 10 segundos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Esperemos la solicitud de llamada de la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Transcurra, al menos, un minuto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Transcurran, al menos, 10 minutos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Cuando se emite un mensaje de urgencia debe ser:",
        opciones: [
            {
                textoRespuesta: "Porque exista una condición que afecte a la seguridad de la aeronave u otro vehículo, de una persona a bordo o a la vista y que exija ayuda inmediata.",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque exista una condición que afecte a la seguridad de la aeronave u otro vehículo, de una persona a bordo o a la vista, pero que no exige ayuda inmediata.",
                isCorrect: true
            },
            {
                textoRespuesta: "Por la condición de estar amenazado por un riesgo serio o inminente y de requerir ayuda inmediata.",
                isCorrect: false
            },
            {
                textoRespuesta: "Por la condición de estar amenazado por un riesgo serio o inminente pero que no exige ayuda inmediata.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Si nos comunican que tenemos que llamar a Torre en la frecuencia 119,75 y nuestro indicativo de llamada es EC-LK2, ¿cómo realizaríamos la colación de este mensaje?",
        opciones: [
            {
                textoRespuesta: "Frecuencia ciento diecinueve coma setenta y cinco, Echo Charlie Lima Kilo dos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ciento diecinueve como siete cinco, Echo Charlie Lima Kilo dos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno uno nueve decimal siete cinco, Echo Charlie Lima Kilo dos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Uno uno nueve coma siete cinco, Echo Charlie Lima Kilo dos.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "41. La definición de una estación aeronáutica es:",
        opciones: [
            {
                textoRespuesta: "Una estación de radio del servicio móvil aeronáutico ubicada en una aeronave que permite la comunicación bilateral aire/tierra y entre aeronaves.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una estación de radio del servicio fijo aeronáutico ubicada en tierra que permite la comunicación bilateral aire/tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una estación de radio del servicio móvil aeronáutico ubicada en tierra que permite la comunicación bilateral aire/tierra.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una estación de radio del servicio fijo aeronáutico ubicada en una aeronave que permite la comunicación bilateral aire/tierra y entre aeronaves.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. ¿Cuál es la palabra clave para designar una fase de incertidumbre y qué significa ésta?",
        opciones: [
            {
                textoRespuesta: "ALERFA. Situación en la cual existe duda acerca de la seguridad de una aeronave y de sus ocupantes.",
                isCorrect: false
            },
            {
                textoRespuesta: "INCERFA. Situación en la cual se abriga temor por la seguridad de una aeronave y de sus ocupantes.",
                isCorrect: false
            },
            {
                textoRespuesta: "INCERFA. Situación en la cual existe duda acerca de la seguridad de una aeronave y de sus ocupantes.",
                isCorrect: true
            },
            {
                textoRespuesta: "INCERFA. Situación en la cual existen motivos justificados para creer que una aeronave y sus ocupantes están amenazados por un peligro grave e inminente y necesitan auxilio inmediato.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. De la siguiente información, ¿cuál recogería un SIGMET?",
        opciones: [
            {
                textoRespuesta: "Cantidad y tipo de nubes, dirección e intensidad del viento, temperatura y punto de rocío.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cantidad y tipo de nubes, dirección e intensidad del viento, temperaturas máxima y mínima para un periodo de 24 horas y presión atmosférica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tormenta activa, línea de turbonada, cantidad y tipo de nubes, turbulencia fuerte o dirección e intensidad del viento.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tormenta activa, línea de turbonada, granizo intenso, turbulencia fuerte o fuerte engelamiento.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. La forma de realizar una transmisión a ciegas es la siguiente:",
        opciones: [
            {
                textoRespuesta: "Emitiendo nuestro mensaje una vez, precedido por las palabras “fallo de comunicaciones”, cuando no puede establecerse comunicación en ambas direcciones pero creemos que la estación puede recibirnos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Emitiendo nuestro mensaje una vez, precedido por las palabras “transmitiendo a ciegas”, cuando no puede establecerse comunicación en ambas direcciones pero creemos que la estación puede recibirnos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Repitiendo nuestro mensaje dos veces, precedido por las palabras “transmitiendo a ciegas”, cuando no puede establecerse comunicación en ambas direcciones pero creemos que la estación puede recibirnos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Repitiendo nuestro mensaje dos veces, precedido por las palabras “fallo de comunicaciones”, cuando no puede establecerse comunicación en ambas direcciones pero creemos que la estación puede recibirnos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. El AIP (Información de Publicación Aeronáutica) contiene:",
        opciones: [
            {
                textoRespuesta: "Información de carácter permanente dividida en tres secciones.",
                isCorrect: false
            },
            {
                textoRespuesta: "Información de carácter permanente y de los cambios temporales de larga duración, dividida en tres secciones.",
                isCorrect: true
            },
            {
                textoRespuesta: "Información de carácter permanente dividida en tres secciones e información meteorológica que incluye el pronóstico TAFOR.",
                isCorrect: false
            },
            {
                textoRespuesta: "Información de carácter permanente y de los cambios temporales de larga duración, dividida en dos secciones.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. Cuando varias estaciones de aeronave llamen de manera simultánea a una estación aeronáutica:",
        opciones: [
            {
                textoRespuesta: "Será la estación aeronáutica la que decida en qué orden comunicará cada aeronave.",
                isCorrect: true
            },
            {
                textoRespuesta: "Comunicará en primer lugar la aeronave que esté más próxima a la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Comunicará en primer lugar aquella aeronave cuyo mensaje tenga prioridad sobre los demás.",
                isCorrect: false
            },
            {
                textoRespuesta: "Serán las aeronaves las que se pondrán de acuerdo para decidir en qué orden comunicará cada una de ellas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. De los siguientes datos, ¿cuáles tendríamos que colacionar si los recibimos durante una comunicación?",
        opciones: [
            {
                textoRespuesta: "La pista en uso, el altímetro, el código SSR, el rumbo y el nivel de transición.",
                isCorrect: true
            },
            {
                textoRespuesta: "La pista en uso, la información meteorológica, el altímetro, el código SSR, el rumbo y el nivel de transición.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista en uso, el altímetro, el tipo de aeronave, el código SSR y el nivel de transición.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista en uso, la dirección e intensidad del viento, el código SSR, el rumbo y el nivel de transición.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. Para la adecuada recepción de una señal VHF o muy alta frecuencia:",
        opciones: [
            {
                textoRespuesta: "Debe existir una distancia inferior a las 1.000 millas náuticas entre las antenas de las estaciones emisora y receptora.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe existir una línea de visión entre las antenas de las estaciones emisora y receptora.",
                isCorrect: true
            },
            {
                textoRespuesta: "Debe existir una distancia inferior a las 300 millas náuticas entre las antenas de las estaciones emisora y receptora.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es necesaria una altura suficiente de la antena de la estación receptora pero no tiene por qué existir una línea de visión entre ésta y la estación emisora.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. La forma de transmitir por radio el altímetro “QNH 1.017” es:",
        opciones: [
            {
                textoRespuesta: "QNH mil diecisiete.",
                isCorrect: false
            },
            {
                textoRespuesta: "Quebec November Hotel uno cero uno siete.",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH uno cero uno siete.",
                isCorrect: true
            },
            {
                textoRespuesta: "Quebec November Hotel mil diecisiete.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. En una comunicación aeronáutica, ¿cómo se transmite el número de la frecuencia que es la 132,75?",
        opciones: [
            {
                textoRespuesta: "Frecuencia ciento treinta y dos como setenta y cinco.",
                isCorrect: false
            },
            {
                textoRespuesta: "Frecuencia uno tres dos coma siete cinco.",
                isCorrect: true
            },
            {
                textoRespuesta: "Frecuencia uno tres dos decimal siete cinco.",
                isCorrect: false
            },
            {
                textoRespuesta: "Frecuencia uno tres dos como setenta y cinco.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Durante el día, con luz suficiente, una aeronave en tierra con fallo de comunicaciones acusará recibo de la siguiente forma:",
        opciones: [
            {
                textoRespuesta: "Moviendo los alerones o el timón de dirección.",
                isCorrect: true
            },
            {
                textoRespuesta: "Balanceando las alas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Moviendo los flaps.",
                isCorrect: false
            },
            {
                textoRespuesta: "Moviendo el timón de profundidad o los alerones.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Indique cuál sería la forma correcta de que una aeronave con el indicativo EC-EF2 acuse recibo de un mensaje recibido previamente:",
        opciones: [
            {
                textoRespuesta: "Acuse de recibo EC-EF2.",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-EF2 recibido.",
                isCorrect: false
            },
            {
                textoRespuesta: "Recibido E-F2.",
                isCorrect: false
            },
            {
                textoRespuesta: "Recibido EC-EF2.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "53. Para una correcta e inteligible comunicación por radio, es importante estar familiarizado con las técnicas de manejo del micrófono, como por ejemplo:",
        opciones: [
            {
                textoRespuesta: "Utilizar siempre un modulador con nivel constante, o será muy difícil mantener el nivel de voz y que la comunicación sea efectiva.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener una distancia constante del mismo y no utilizar un volumen de voz constante de conversación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener una distancia constante del mismo y utilizar un volumen de voz constante de conversación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Evitar el uso de un modulador con nivel constante, que puede generar interferencias en la comunicación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. El servicio de información en vuelo proporcionado por las dependencias responsables de un espacio aéreo se puede dividir en:",
        opciones: [
            {
                textoRespuesta: "Servicio de información en ruta, de tránsito, de aproximación y de aeródromo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de información de aproximación y de aeródromo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de información en ruta, de aproximación y de aeródromo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Servicio de información para vuelos IFR y para vuelos VFR.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. ¿En qué idioma es recomendable que se realicen las comunicaciones aeroterrestres en radiotelefonía?",
        opciones: [
            {
                textoRespuesta: "Preferiblemente en inglés.",
                isCorrect: false
            },
            {
                textoRespuesta: "Preferiblemente en el idioma oficial del Estado en el que se efectúan estas comunicaciones.",
                isCorrect: false
            },
            {
                textoRespuesta: "Preferiblemente en el idioma que la estación terrestre use habitualmente, que no tiene por qué ser la del Estado en el que se efectúan estas comunicaciones.",
                isCorrect: true
            },
            {
                textoRespuesta: "En el idioma que esté establecido por ley en ese lugar, que habrá que consultar previamente a la realización del vuelo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. La forma de acusar recibo de una aeronave en vuelo que no puede comunicar por radio debido a un fallo de comunicaciones es la siguiente:",
        opciones: [
            {
                textoRespuesta: "Balanceando las alas durante las horas de luz y emitiendo destellos con los faros de aterrizaje o, si no los tuviera, con la luz de navegación, por la noche.",
                isCorrect: true
            },
            {
                textoRespuesta: "Balanceando las alas excepto en los tramos base y en aproximación final.",
                isCorrect: false
            },
            {
                textoRespuesta: "Balanceando las alas por la noche y emitiendo destellos con los faros de aterrizaje o, si no los tuviera, con la luz de navegación, durante las horas de luz.",
                isCorrect: false
            },
            {
                textoRespuesta: "Balanceando las alas a la vez que se emiten destellos dos veces con los faros de aterrizaje o, si no los tuviera, con la luz de navegación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. Los mensajes importantes del control de tránsito aéreo que reciba una aeronave:",
        opciones: [
            {
                textoRespuesta: "Deberá colacionarlos, leyéndolos de nuevo y terminando la repetición con su distintivo de llamada.",
                isCorrect: true
            },
            {
                textoRespuesta: "Deberá colacionarlos, leyéndolos de nuevo y comenzando la repetición con su distintivo de llamada.",
                isCorrect: false
            },
            {
                textoRespuesta: "Deberán llevar un acuse de recibo por parte de la aeronave, que terminará la comunicación con su distintivo de llamada.",
                isCorrect: false
            },
            {
                textoRespuesta: "Deberán llevar un acuse de recibo por parte de la aeronave, que comenzará la comunicación con su distintivo de llamada.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Estamos en viento en cola del circuito de tránsito de un aeródromo en el que vamos a aterrizar en la pista orientada hacia 270º. Nuestra matrícula es EC-FM3. ¿Cuál es la forma más correcta de comunicarlo?",
        opciones: [
            {
                textoRespuesta: "Pista siete cero, viento en cola, Echo Charlie Foxtrot Mike tres.",
                isCorrect: false
            },
            {
                textoRespuesta: "Echo Charlie Foxtrot Mike tres, viento en cola, pista dos siete.",
                isCorrect: true
            },
            {
                textoRespuesta: "Echo Charlie Foxtrot Mike tres, viento en cola, pista siete cero.",
                isCorrect: false
            },
            {
                textoRespuesta: "Echo Charlie Foxtrot Mike tres, viento en cola, pista veintisiete.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. En cuanto a los mensajes enviados a través del Servicio Móvil Aeronáutico, indique cuál de las siguientes afirmaciones es correcta:",
        opciones: [
            {
                textoRespuesta: "Los mensajes de emergencia tienen prioridad sobre todos los demás, excepto sobre los de urgencia o socorro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los mensajes relativos a la regularidad de los vuelos tienen preferencia sobre todos los demás, excepto sobre los de urgencia y emergencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los mensajes relativos a la seguridad de los vuelos tienen preferencia sobre todos los demás, excepto sobre los de urgencia y emergencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los mensajes de urgencia tienen prioridad sobre todos los demás, excepto sobre los de emergencia o socorro.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "60. El Servicio Móvil Aeronáutico tiene asignada la banda de frecuencias:",
        opciones: [
            {
                textoRespuesta: "118.000 – 136.975 MHz.",
                isCorrect: true
            },
            {
                textoRespuesta: "128.000 – 136.975 MHz.",
                isCorrect: false
            },
            {
                textoRespuesta: "118.000 – 136.975 GHz.",
                isCorrect: false
            },
            {
                textoRespuesta: "128.000 – 136.975 GHz.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. Una estación aeronáutica que tenga que acusar recibo en este caso de la aeronave con indicativo EC-TS1, ¿cómo lo hará?",
        opciones: [
            {
                textoRespuesta: "Recibido EC-TS1.",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-TS1 recibido.",
                isCorrect: true
            },
            {
                textoRespuesta: "Acuse de recibo EC-TS1.",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-TS1 acuse de recibo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Durante la noche, una aeronave en tierra con fallo de comunicaciones, ¿de qué forma debe acusar recibo?",
        opciones: [
            {
                textoRespuesta: "Moviendo los alerones o el timón de profundidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Balanceando las alas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizando dos veces destellos con las luces de aterrizaje o, si no las tuviera, con la luz de navegación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Moviendo los alerones o el timón de profundidad a la vez que realiza dos veces destellos con las luces de aterrizaje o, si no las tuviera, con el timón de profundidad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Un vuelo VFR, ¿debe mantener escucha continua de los servicios de tránsito aéreo que suministre el servicio de información de vuelo?",
        opciones: [
            {
                textoRespuesta: "Sí, todos los vuelos deben mantener la escucha continua independientemente de si se trata de uno IFR o VFR.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, cuando se vuele en una parte del espacio aéreo controlado en la que se exige la presentación de un plan de vuelo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Solo en el caso de que así se le comunique al piloto cuando presente el plan de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "No, la escucha continua en este caso es opcional al tratarse de un vuelo que no sigue las reglas de vuelo instrumental.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. En el circuito de fallo de radio, ¿qué señal de luces debemos esperar de la torre que nos indique estamos autorizados para aterrizar?",
        opciones: [
            {
                textoRespuesta: "Una serie de destellos verdes.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una luz verde fija.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una serie de destellos blancos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una luz blanca fija.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. En cuanto a la radiogoniometría, el piloto puede solicitar a la estación correspondiente una marcación o un rumbo. ¿Qué información aportará la estación si el piloto solicita el QDM?",
        opciones: [
            {
                textoRespuesta: "El rumbo magnético que debería seguir la aeronave, con la corrección de viento ya aplicada, para llegar a la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo magnético que debería seguir la aeronave, sin tener en cuenta el viento, para llegar a la estación.",
                isCorrect: true
            },
            {
                textoRespuesta: "El rumbo verdadero que debería seguir la aeronave, sin tener en cuenta el viento, para llegar a la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo verdadero que debería seguir la aeronave, con la corrección de viento ya aplicada, para llegar a la estación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. El código QTE usado en radiogoniometría es:",
        opciones: [
            {
                textoRespuesta: "La marcación verdadera o geográfica de la aeronave desde la estación.",
                isCorrect: true
            },
            {
                textoRespuesta: "El rumbo magnético que debería seguir la aeronave para llegar a la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "La marcación magnética de la aeronave desde la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo verdadero que debería seguir la aeronave para llegar a la estación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. En el área de señales de un aeródromo vemos una doble cruz blanca. ¿Qué indica?",
        opciones: [
            {
                textoRespuesta: "Que las aeronaves deben aterrizar, despegar y rodar únicamente en las pistas y en las calles de rodaje.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el área de maniobras del aeródromo es inservible en ese momento.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el aeródromo es utilizado por planeadores y que se están realizando vuelos de esa naturaleza.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que por alguna razón existe la necesidad de precauciones especiales durante la aproximación y el aterrizaje.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. La banda de frecuencias que va de 118.000 a 136.975 MHz está asignada a:",
        opciones: [
            {
                textoRespuesta: "El Servicio Fijo Aeronáutico.",
                isCorrect: false
            },
            {
                textoRespuesta: "El Servicio Móvil Aeronáutico.",
                isCorrect: true
            },
            {
                textoRespuesta: "Las emisiones de radiodifusión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las situaciones de emergencia y las de urgencia.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. ¿Con qué palabra de la fraseología aeronáutica diremos “he comprendido su mensaje y procederé de acuerdo?",
        opciones: [
            {
                textoRespuesta: "Recibido o Roger.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambio u Over.",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprendido o Wilco.",
                isCorrect: true
            },
            {
                textoRespuesta: "Terminado u Out.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. Por la noche, un avión en vuelo tiene un fallo de comunicaciones y tiene que acusar recibo de alguna señal recibida. ¿Cómo lo llevará a cabo?",
        opciones: [
            {
                textoRespuesta: "Balanceando las alas o emitiendo destellos dos veces con los faros de aterrizaje o la luz de navegación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Balanceando las alas a la vez que se emiten destellos dos veces con los faros de aterrizaje o la luz de navegación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Balanceando las alas, excepto cuando se está en tramo base o final de aproximación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Emitiendo destellos dos veces con los faros de aterrizaje o, en caso de que no se disponga de ellos, con la luz de navegación.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. Los informes de posición que los servicios de tránsito aéreo solicitan a las aeronaves suelen contener la siguiente información:",
        opciones: [
            {
                textoRespuesta: "Identificación de la aeronave, posición, hora, nivel de vuelo o altitud y la posición siguiente y la hora a la que se sobrevolará.",
                isCorrect: true
            },
            {
                textoRespuesta: "Identificación de la aeronave, posición, viento, nivel de vuelo y posición siguiente y la hora a la que se sobrevolará.",
                isCorrect: false
            },
            {
                textoRespuesta: "Posición, hora, nivel de vuelo e identificación de la estación a la que se llama.",
                isCorrect: false
            },
            {
                textoRespuesta: "Identificación de la aeronave, hora, nivel de vuelo o altitud, la posición siguiente y la hora a la que se sobrevolará e identificación de la estación a la que se llama.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. En radiogoniometría, el código QDR corresponde a:",
        opciones: [
            {
                textoRespuesta: "El rumbo verdadero que debería seguir la aeronave para llegar a la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "La marcación verdadera de la aeronave desde la estación.",
                isCorrect: false
            },
            {
                textoRespuesta: "La marcación magnética de la aeronave desde la estación.",
                isCorrect: true
            },
            {
                textoRespuesta: "El rumbo magnético que debería seguir la aeronave para llegar a la estación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. El Servicio Móvil Aeronáutico tiene un orden de prioridad de mensajes. Sin embargo, cuando se recibe más de uno con la misma prioridad, ¿cómo se transmiten?",
        opciones: [
            {
                textoRespuesta: "Lo recomendado es que se transmita en primer lugar el que la persona encargada de las comunicaciones decida cuál es más importante.",
                isCorrect: false
            },
            {
                textoRespuesta: "Lo recomendado es que estos mensajes se transmitan en el mismo orden en el que se han recibido.",
                isCorrect: true
            },
            {
                textoRespuesta: "No existe ninguna recomendación al respecto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Lo recomendado es que estos mensajes se transmitan en el orden contrario en el que se han recibido.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. ¿Qué es una transmisión a ciegas?",
        opciones: [
            {
                textoRespuesta: "Una transmisión desde una estación a otra en circunstancias en que no puede establecerse comunicación en ambos sentidos, pero cuando se cree que la estación llamada no puede recibir la transmisión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una transmisión desde una estación a otra en circunstancias en que no puede establecerse comunicación en ambos sentidos, pero cuando se cree que la estación llamada puede recibir la transmisión.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una transmisión desde una estación a otra en circunstancias en que puede establecerse comunicación en ambos sentidos, pero cuando se cree que la estación llamada no puede recibir la transmisión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una transmisión desde una estación en circunstancias en que no puede establecerse comunicación con otra concreta.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. ¿Con cuál de las siguientes abreviaturas se indica el horario de un aeródromo que está operativo desde el ocaso hasta el orto?",
        opciones: [
            {
                textoRespuesta: "HJ.",
                isCorrect: false
            },
            {
                textoRespuesta: "HX.",
                isCorrect: false
            },
            {
                textoRespuesta: "HO.",
                isCorrect: false
            },
            {
                textoRespuesta: "HN.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "76. ¿Cuál o cuáles de las siguientes señales indican la dirección que ha de seguir una aeronave para aterrizar o despegar?",
        opciones: [
            {
                textoRespuesta: "Una T de color blanco o anaranjado y un tetraedro anaranjado o negro por la cara izquierda y blanco o aluminio por la derecha.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una flecha de color llamativo en el área de señales u horizontalmente en el extremo de una pista o en el de una franja de uso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una T horizontal de color blanco o anaranjado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una T horizontal de color blanco o anaranjado o una flecha de color llamativo en el área de señales u horizontalmente en el extremo de una pista o en el de una franja de uso.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. Si transmitiendo un mensaje se comete un error en el mensaje completo, ¿cómo se corrige?",
        opciones: [
            {
                textoRespuesta: "Utilizando las palabras “Corrección repito” antes de repetir todo el mensaje de nuevo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Utilizando la palabra “Corrección” antes de repetir todo el mensaje de nuevo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Utilizando las palabras “Repito de nuevo” antes de repetir todo el mensaje.",
                isCorrect: false
            },
            {
                textoRespuesta: "Utilizando la frase “Corrijo y repito” antes de repetir todo el mensaje de nuevo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. En cuanto al orden de prioridad de los mensajes que se emiten a través del Servicio Móvil Aeronáutico, indique cuál de las afirmaciones no es correcta:",
        opciones: [
            {
                textoRespuesta: "Las llamadas y mensajes de emergencia tienen prioridad sobre los de urgencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las comunicaciones relativas a la radiogoniometría tienen prioridad sobre los relativos a la seguridad de los vuelos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los mensajes relativos a la seguridad de los vuelos tienen prioridad sobre los relativos a la regularidad de éstos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los mensajes relativos a la regularidad de los vuelos tienen prioridad sobre los mensajes meteorológicos.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "79. Según el alfabeto internacional para radiocomunicaciones, ¿cómo se deletrea la palabra SIGMET?",
        opciones: [
            {
                textoRespuesta: "Sierra India Golf Mike Echo Tambor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sierra India Golf Mike Echo Tango.",
                isCorrect: true
            },
            {
                textoRespuesta: "Sierra Isla Golf Mike Echo Tango.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sierra India Golf Might Echo Tango.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. El squelch de un equipo receptor/transmisor de VHF es:",
        opciones: [
            {
                textoRespuesta: "Un dispositivo silenciador utilizado para eliminar el ruido causado por las posibles interferencias de la señal.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un dispositivo silenciador utilizado para eliminar el ruido de fondo del equipo de radio.",
                isCorrect: true
            },
            {
                textoRespuesta: "Un dispositivo que mejora la calidad de la señal recibida en el equipo de radio, fundamental para las comunicaciones aeronáuticas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un dispositivo potenciador utilizado para emitir una señal con mayor alcance.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. La respuesta por parte de una estación aeronáutica a la que hemos llamado para hacer una prueba de radio debe ir en el siguiente orden:",
        opciones: [
            {
                textoRespuesta: "Identificación de la estación aeronáutica, identificación de la aeronave y la indicación de la legibilidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicación de la legibilidad, identificación de la estación aeronáutica e identificación de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Identificación de la aeronave, identificación de la estación aeronáutica y la indicación de la legibilidad de la transmisión.",
                isCorrect: true
            },
            {
                textoRespuesta: "Identificación de la aeronave, indicación de la legibilidad e identificación de la estación aeronáutica.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. La palabra utilizada en las comunicaciones aeronáuticas cuando el mensaje todavía no  ha terminado pero se quiere realizar una pausa en el mismo es:",
        opciones: [
            {
                textoRespuesta: "Pausa o Pause.",
                isCorrect: false
            },
            {
                textoRespuesta: "Espere o Standby.",
                isCorrect: false
            },
            {
                textoRespuesta: "Separación o Break.",
                isCorrect: true
            },
            {
                textoRespuesta: "Cambio u Over.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. La distancia máxima de recepción de una señal VHF volando sobre un terreno sin obstáculos a FL060 será aproximadamente de:",
        opciones: [
            {
                textoRespuesta: "85 millas náuticas.",
                isCorrect: false
            },
            {
                textoRespuesta: "100 millas náuticas.",
                isCorrect: false
            },
            {
                textoRespuesta: "60 millas náuticas.",
                isCorrect: false
            },
            {
                textoRespuesta: "95 millas náuticas.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "84. Para indicar que un aeródromo está disponible desde el orto hasta el ocaso se utilizan las siguientes siglas:",
        opciones: [
            {
                textoRespuesta: "HJ.",
                isCorrect: true
            },
            {
                textoRespuesta: "HN.",
                isCorrect: false
            },
            {
                textoRespuesta: "HX.",
                isCorrect: false
            },
            {
                textoRespuesta: "HO.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. Cuando en la transmisión de una frase o palabra se comete un error, éste se corrige de la siguiente forma:",
        opciones: [
            {
                textoRespuesta: "Usando las palabras “Corrección repito” y repitiendo todo el mensaje de nuevo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando la palabra “Corrección”, seguida de la última palabra o frase transmitida correctamente, y posteriormente añadiendo la versión correcta.",
                isCorrect: true
            },
            {
                textoRespuesta: "Usando la palabra “Corrección” y repitiendo todo el mensaje de nuevo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando las palabras “Corrección repito”, seguidas de la última palabra o frase transmitida correctamente, y posteriormente añadiendo la versión correcta.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. Si desde una torre de control nos dicen que nuestra legibilidad es uno, quiere decir que:",
        opciones: [
            {
                textoRespuesta: "La comunicación es legible con dificultad.",
                isCorrect: false
            },
            {
                textoRespuesta: "La comunicación es ilegible.",
                isCorrect: true
            },
            {
                textoRespuesta: "La comunicación es perfectamente legible.",
                isCorrect: false
            },
            {
                textoRespuesta: "La comunicación es legible de vez en cuando.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. Una estación aeronáutica que ofrezca servicio permanente, ¿con qué letras se indica?",
        opciones: [
            {
                textoRespuesta: "HJ.",
                isCorrect: false
            },
            {
                textoRespuesta: "HN.",
                isCorrect: false
            },
            {
                textoRespuesta: "H24.",
                isCorrect: true
            },
            {
                textoRespuesta: "HR.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. Un mensaje de socorro debe contener, al menos, la siguiente información y en el siguiente orden:",
        opciones: [
            {
                textoRespuesta: "Señal PAN-PAN, identificativo de la aeronave, naturaleza del peligro, intenciones del piloto al mando y situación actual.",
                isCorrect: false
            },
            {
                textoRespuesta: "Señal MAYDAY, identificativo de la aeronave, situación actual y naturaleza del peligro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Señal MAYDAY, identificativo de la aeronave, naturaleza del peligro, intenciones del piloto al mando y situación actual.",
                isCorrect: true
            },
            {
                textoRespuesta: "Señal MAYDAY, identificativo de la aeronave, naturaleza del peligro, intenciones del piloto al mando, información relativa a la meteorología y situación actual.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. La principal ventaja de las señales de VOR es:",
        opciones: [
            {
                textoRespuesta: "Que pueden rodear obstáculos o seguir los accidentes del terreno.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la emisión no tiene dificultades para recibirse cuando el avión se encuentra sobre la emisora.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que su alcance no queda limitado a la línea visual.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que están libres de interferencias estáticas.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "90. El VOR (Very High Frecuency Omni-Directional Range) es:",
        opciones: [
            {
                textoRespuesta: "El equipo a bordo del avión que es capaz de descifrar y dar sentido a la señal recibida de tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "El sistema de navegación radio-eléctrica más preciso y utilizado en todo el mundo, como red primaria.",
                isCorrect: true
            },
            {
                textoRespuesta: "El sistema de navegación radio-eléctrica más preciso y utilizado en todo el mundo, como red secundaria.",
                isCorrect: false
            },
            {
                textoRespuesta: "El equipo que forma la red secundaria de navegación y que es capaz de proporcionar dirección y sentido a la estación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. Si durante las comunicaciones oímos la abreviatura AIREP se refiere a:",
        opciones: [
            {
                textoRespuesta: "Plan de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Publicación de Información del Aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeronotificación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Publicación de Información Aeronáutica.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. La velocidad de propagación de las ondas electromagnéticas es de:",
        opciones: [
            {
                textoRespuesta: "300.000 km/s.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad del sonido.",
                isCorrect: false
            },
            {
                textoRespuesta: "343 m/s.",
                isCorrect: false
            },
            {
                textoRespuesta: "300.000 m/s.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. Cuando tenemos una emergencia, ¿cuál es la forma de transmitir un mensaje de socorro?",
        opciones: [
            {
                textoRespuesta: "Hay que pronunciar la expresión PAN-PAN tres veces al principio de la comunicación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre hay que cambiar a la frecuencia de emergencia y pronunciar la palabra MAYDAY tres veces al principio de la comunicación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay que pronunciar la palabra MAYDAY tres veces al principio de la comunicación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre hay que cambiar a la frecuencia de emergencia y pronunciar la expresión PAN-PAN tres veces al principio de la comunicación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. ¿Qué significan las siglas AFIS?",
        opciones: [
            {
                textoRespuesta: "Servicio de Información de Vuelo de Aeródromo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Servicio Internacional de Vuelo de Aeródromo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio Automático de Información en Vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio Automático de Información Terminal.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. En cuanto a las ondas electromagnéticas, la distancia entre la cresta de la onda y su punto medio es:",
        opciones: [
            {
                textoRespuesta: "La frecuencia de la onda.",
                isCorrect: false
            },
            {
                textoRespuesta: "La longitud de onda.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un ciclo de onda.",
                isCorrect: false
            },
            {
                textoRespuesta: "La amplitud de onda.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "96. Una aeronave que no consigue establecer contacto con la estación aeronáutica en la frecuencia designada, ¿debe cambiar de frecuencia?",
        opciones: [
            {
                textoRespuesta: "Sí, la aeronave tratará de establecer comunicación con otros aviones en otras frecuencias apropiadas en la ruta.",
                isCorrect: false
            },
            {
                textoRespuesta: "No, la aeronave tratará de establecer la comunicación con otros aviones en la misma frecuencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, deberá dejar de intentar comunicarse con esa estación, cambiar la frecuencia e intentar la comunicación con una estación diferente.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, la aeronave tratará de establecer la comunicación en otras frecuencias apropiadas en la ruta.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "97. La señal visual que se envía a una aeronave no autorizada para advertirle de que está en una zona restringida, prohibida o peligrosa es:",
        opciones: [
            {
                textoRespuesta: "Una serie de proyectiles que se lanzan con un intervalo de 10 segundos desde tierra o desde otra aeronave.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una serie de proyectiles que solo se pueden lanzar desde tierra con un intervalo de 10 segundos entre cada uno.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una serie de proyectiles que solo se pueden lanzar desde otra aeronave con un intervalo de 10 segundos entre cada uno.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una serie de proyectiles que solo se pueden lanzar desde tierra con un intervalo de un minuto entre cada uno.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. En el circuito de tránsito de aeródromo nos encontramos en el tramo viento en cara de la pista orientada hacia 080º y nuestra matrícula es EC-LZ2. ¿Cómo lo comunicaremos?",
        opciones: [
            {
                textoRespuesta: "Echo Charlie Lima Zulú dos, viento en cara, pista cero ocho.",
                isCorrect: true
            },
            {
                textoRespuesta: "Pista cero ocho, viento en cara, Echo Charlie Lima Zulú dos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Echo Charlie Lima Zulú dos, viento en cara, pista ocho.",
                isCorrect: false
            },
            {
                textoRespuesta: "Echo Charlie Lima Zulú dos, viento en cara, pista ochenta.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. El acuse de recibo de una aeronave en vuelo con fallo de comunicaciones durante las horas del día en las que hay suficiente luz se realiza:",
        opciones: [
            {
                textoRespuesta: "Emitiendo destellos dos veces con los faros de aterrizaje o, en caso de que no se disponga de ellos, con la luz de navegación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Balanceando las alas o emitiendo destellos dos veces con los faros de aterrizaje o la luz de navegación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Balanceando las alas, excepto cuando se está en tramo base o final de aproximación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Balanceando las alas a la vez que se emiten destellos dos veces con los faros de aterrizaje o la luz de navegación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. ¿Qué tipo de información se transmite en un SIGMET?",
        opciones: [
            {
                textoRespuesta: "Se emiten los METAR de uno o varios aeropuertos de forma automática y constantemente.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se emite información sobre fenómenos meteorológicos en ruta que puedan afectar a la seguridad de las aeronaves.",
                isCorrect: true
            },
            {
                textoRespuesta: "Se emite información sobre fenómenos meteorológicos alrededor de un aeródromo que puedan afectar a la seguridad de las aeronaves.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se emite información meteorológica cada vez que hay cambios significativos en los alrededores de un aeródromo.",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;