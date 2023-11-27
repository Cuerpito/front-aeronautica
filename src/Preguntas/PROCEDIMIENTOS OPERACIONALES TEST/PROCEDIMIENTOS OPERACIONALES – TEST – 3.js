const preguntas = [
    {
        titulo: "1. En tierra tenemos un QNH de 1022. Si subimos 90 metros, la presión se reducirá en 10 mb. ¿Cuál será el QNH será a esa altitud?",
        opciones: [
            {
                textoRespuesta: "Necesitaríamos conocer el QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "1022 mb.",
                isCorrect: true
            },
            {
                textoRespuesta: "1012 mb.",
                isCorrect: false
            },
            {
                textoRespuesta: "1032 mb.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. ¿Qué se debe hacer para evitar el rebufo producido por otros aviones más grandes cuando se va a aterrizar?",
        opciones: [
            {
                textoRespuesta: "Efectuar la aproximación a menor altura que el avión que le precede",
                isCorrect: false
            },
            {
                textoRespuesta: "Efectuar la aproximación a mayor altura que el avión que le precede",
                isCorrect: true
            },
            {
                textoRespuesta: "Mantenerse lo más cerca posible del avión que le Precede",
                isCorrect: false
            },
            {
                textoRespuesta: "Nada de lo anterior es útil para evitar el rebufo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. Como calculamos rápidamente la TAS",
        opciones: [
            {
                textoRespuesta: "La TAS es siempre un 10% mayor que la IAS",
                isCorrect: false
            },
            {
                textoRespuesta: "Mirándolo en internet",
                isCorrect: false
            },
            {
                textoRespuesta: "Con una aplicación en el móvil",
                isCorrect: false
            },
            {
                textoRespuesta: "A la IAS que tenemos, le añadimos un 2% por cada mil pies de altitud",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "4. En caso de entrar en barrena y disponer de bastón y bola:",
        opciones: [
            {
                textoRespuesta: "a) Este instrumento no es de utilidad en este caso",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Pisaremos la bola con lo que estaremos aplicando pie contrario al giro de la barrena",
                isCorrect: false
            },
            {
                textoRespuesta: "c) En caso de no disponer de este instrumento pisaremos el pedal que esté más hacia nosotros y más duro",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"b\" y la \"c\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "5. Cuando una aeronave en vuelo recibe una señal de luz 'roja fija', significa:",
        opciones: [
            {
                textoRespuesta: "Ceda el paso a otras aeronaves y siga en circuito",
                isCorrect: true
            },
            {
                textoRespuesta: "Autorizado a aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Peligro, aeropuerto en malas condiciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambie el circuito de tráfico al lado contrario",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Podemos definir el umbral:",
        opciones: [
            {
                textoRespuesta: "El comienzo de la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "El comienzo de la pista utilizable para el aterrizaje",
                isCorrect: true
            },
            {
                textoRespuesta: "El comienzo de la pista utilizable para el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "El comienzo de la pista para aproximaciones de precisión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Que reglaje pondremos en el altímetro cuando descendamos por debajo del nivel de transición",
        opciones: [
            {
                textoRespuesta: "QNE",
                isCorrect: false
            },
            {
                textoRespuesta: "QFF",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH",
                isCorrect: true
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Espacio aéreo controlado:",
        opciones: [
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas donde se facilita asesoramiento aeronáutico para los vuelos controlados",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio de dimensiones definidas dentro del cual se facilita servicio de control de tránsito aéreo para los vuelos controlados",
                isCorrect: true
            },
            {
                textoRespuesta: "Espacio donde el controlador vigila las aeronaves en vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo donde se puede volar con un ULM si tenemos equipo de radio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Con viento cruzado, y observando el dibujo que se presenta a continuación, la posición del piloto que hubiera puesto un rumbo menor en la brújula, sería la correspondiente al avión",
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
        titulo: "10. ¿Cómo se puede controlar la velocidad del ULM Durante la aproximación para el aterrizaje?",
        opciones: [
            {
                textoRespuesta: "Utilizando la palanca para controlar el ángulo de Ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Utilizando los spoilers",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el mando de gases",
                isCorrect: false
            },
            {
                textoRespuesta: "Actuando con todo lo anterior según necesidades",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "11. Se llama pista en servicio:",
        opciones: [
            {
                textoRespuesta: "La designada en cada momento para el despegue y el aterrizaje",
                isCorrect: true
            },
            {
                textoRespuesta: "La designada para efectuar el rodaje antes del despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "La utilizada para aparcar las aeronaves",
                isCorrect: false
            },
            {
                textoRespuesta: "La designada para esperar el permiso de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. En muchos casos, una torre de control cercana puede proporcionar el rumbo necesario para dirigirse a ella:",
        opciones: [
            {
                textoRespuesta: "Cambiando el nivel",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentando la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Sintonizando la frecuencia de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Apretando el pulsador del micrófono",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "13. En nuestro anemómetro, el arco blanco acaba a 110, el amarillo empieza a 160, y tiene una raya roja a 210. ¿Cuál es la velocidad máxima a la que podemos volar con el flap bajado?",
        opciones: [
            {
                textoRespuesta: "160",
                isCorrect: false
            },
            {
                textoRespuesta: "La Va",
                isCorrect: false
            },
            {
                textoRespuesta: "210",
                isCorrect: false
            },
            {
                textoRespuesta: "110",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. En el caso de realizar un despegue inmediatamente después del despegue de un avión grande, se deberá iniciar la carrera de despegue con relación a aquel:",
        opciones: [
            {
                textoRespuesta: "En el mismo sitio",
                isCorrect: true
            },
            {
                textoRespuesta: "En sentido contrario",
                isCorrect: false
            },
            {
                textoRespuesta: "A 1/3 del recorrido",
                isCorrect: false
            },
            {
                textoRespuesta: "Desde una intersección de pistas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. A menos de que exista una buena razón para ello (por ejemplo, obstáculos) es mas conveniente ascender",
        opciones: [
            {
                textoRespuesta: "Con viento en cara",
                isCorrect: true
            },
            {
                textoRespuesta: "Con viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Con viento cruzado",
                isCorrect: false
            },
            {
                textoRespuesta: "No influye la dirección del viento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. Si efectuando un viraje el avión entra en pérdida, se debe:",
        opciones: [
            {
                textoRespuesta: "Nivelar el avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Ganar velocidad por donde lo solicite el avión",
                isCorrect: true
            },
            {
                textoRespuesta: "Ceñir más el giro con el pedal y sacar alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cortar motor y girar rápidamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Toda aeronave que alcance a otra ascendiendo, descendiendo o en vuelo horizontal:",
        opciones: [
            {
                textoRespuesta: "a) Se mantendrá fuera de la trayectoria de la que le precede",
                isCorrect: true
            },
            {
                textoRespuesta: "b) Cambiará su rumbo a la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Hará un 360 para no alcanzarla",
                isCorrect: false
            },
            {
                textoRespuesta: "d) Las respuestas \"a\" y \"c\" son ciertas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Las velocidades mínima y máxima de uso de flap están indicadas en un arco de color",
        opciones: [
            {
                textoRespuesta: "Blanco",
                isCorrect: true
            },
            {
                textoRespuesta: "Rojo",
                isCorrect: false
            },
            {
                textoRespuesta: "Azul",
                isCorrect: false
            },
            {
                textoRespuesta: "Verde",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Los vórtices en la punta de ala de un avión grande, son más peligrosos para un avión pequeño cuando ese avión",
        opciones: [
            {
                textoRespuesta: "Va ligero, está sucio y vuela rápido",
                isCorrect: false
            },
            {
                textoRespuesta: "Es pesado, configuración sucia y vuela rápido",
                isCorrect: false
            },
            {
                textoRespuesta: "Es pesado, vuela lento y configuración limpia",
                isCorrect: true
            },
            {
                textoRespuesta: "Es bimotor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. Cuando el altímetro está calado con 1013, nos da indicación de",
        opciones: [
            {
                textoRespuesta: "Altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Elevación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. La 'aproximación de alta energía' tiene como misión:",
        opciones: [
            {
                textoRespuesta: "Realizar el descenso más lentamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionar una mayor velocidad de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionar una mayor distancia de planeo mediante velocidad extra",
                isCorrect: true
            },
            {
                textoRespuesta: "Realizar el descenso a plena potencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. ¿Cuál es el mando principal de la velocidad?",
        opciones: [
            {
                textoRespuesta: "Timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "El timón de profundidad",
                isCorrect: true
            },
            {
                textoRespuesta: "El gas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. A mayor altitud de densidad de un campo, la carrera de despegue será",
        opciones: [
            {
                textoRespuesta: "No afecta",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor",
                isCorrect: true
            },
            {
                textoRespuesta: "Igual",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. La función de los pedales en un ULM de 2 ejes es",
        opciones: [
            {
                textoRespuesta: "Actuar sobre el timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Control de tendencia de cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener un ángulo de deriva que contrarreste la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Actuar sobre los spoilers",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "25. Un avión necesita más pista para aterrizar en una pista elevada, porque la velocidad real de aproximación será siempre mayor que a nivel del mar",
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
        titulo: "26. Si usted está en el aire con un ULM, deberá",
        opciones: [
            {
                textoRespuesta: "Ver si hay aviones cerca",
                isCorrect: false
            },
            {
                textoRespuesta: "Pensar siempre en un posible aterrizaje de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Estar siempre atento a obstáculos como cables eléctricos",
                isCorrect: false
            },
            {
                textoRespuesta: "Todos los arriba indicados",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. El arco verde de un anemómetro indica el margen de velocidad",
        opciones: [
            {
                textoRespuesta: "Normal de operación",
                isCorrect: true
            },
            {
                textoRespuesta: "Máxima operativa",
                isCorrect: false
            },
            {
                textoRespuesta: "De precaución",
                isCorrect: false
            },
            {
                textoRespuesta: "Normal de operación con flap extendido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. Una buena táctica para asegurarnos de llegar al campo elegido en caso de fallo de motor es quedarnos un poco altos para, con campo asegurado, realizar un resbale y perder así la altura de más",
        opciones: [
            {
                textoRespuesta: "Falso, hay que ajustar exactamente al umbral elegido",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso, pues obtendremos un menos ángulo de descenso y disminuirá la resistencia al avance",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. La maniobra más correcta es picar con gran ángulo el ULM, manteniendo velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Verdadero, pues obtendremos un gran ángulo de descenso sin incrementar la velocidad de aproximación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "29. A igualdad de peso, el ángulo de ataque será mayor",
        opciones: [
            {
                textoRespuesta: "Si la intensidad del viento es mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "A una velocidad menor",
                isCorrect: true
            },
            {
                textoRespuesta: "A una velocidad mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuanto más empuje la palanca hacia delante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Hemos calculado que nuestra velocidad de referencia en final es de 75 km/h. Como vamos a aterrizar en una pista corta, podemos volar en aproximación final a una velocidad más reducida",
        opciones: [
            {
                textoRespuesta: "Sí, podemos reducir la velocidad hasta la velocidad de pérdida más un 10%",
                isCorrect: false
            },
            {
                textoRespuesta: "No es recomendable",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, podemos reducir la velocidad hasta la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. Se nos para el avión en pleno despegue. Ya hemos bajado el morro y controlado el avión. Podemos volver a tomar en la pista de la que hemos despegado.",
        opciones: [
            {
                textoRespuesta: "Lo mas seguro es tomar por derecho,",
                isCorrect: false
            },
            {
                textoRespuesta: "No se debe",
                isCorrect: false
            },
            {
                textoRespuesta: "Suele ser una maniobra que entraña mucho riesgo",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. En relación al vuelo con ultraligero con viento:",
        opciones: [
            {
                textoRespuesta: "Debe observarse la tierra permanentemente",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe continuarse la aceleración en zonas de viento en calma y ralentizarlo en las ráfagas",
                isCorrect: true
            },
            {
                textoRespuesta: "Hay que tener en cuenta la velocidad con relación a tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "Durante el despegue y aterrizaje hay que derrapar a favor del viento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Del procedimiento de arranque del motor, cuales son los pasos que tendremos que realizar para no poner en peligro a nadie",
        opciones: [
            {
                textoRespuesta: "Comprobar que el acelerador está a ralentí",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobar que el freno de aparcamiento está puesto",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Comprobar que no hay nadie cerca de la hélice",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. ¿Si tengo que cambiar algún tornillo del ULM porque tengo que despegar forzosamente, qué tengo que tener en cuenta?",
        opciones: [
            {
                textoRespuesta: "Cualquier tornillo del mismo diámetro vale",
                isCorrect: false
            },
            {
                textoRespuesta: "Mirar el acabado del tornillo: cincado o cromado",
                isCorrect: false
            },
            {
                textoRespuesta: "Mirar el grado de dureza, el diámetro puede variar hasta un máximo de 3 milímetros en el caso de un vuelo forzoso",
                isCorrect: false
            },
            {
                textoRespuesta: "No existen los despegues forzosos, siempre son opcionales",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. Cuál es la equivalencia de 1000 pies",
        opciones: [
            {
                textoRespuesta: "400 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la presión",
                isCorrect: false
            },
            {
                textoRespuesta: "300 metros",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "36. En caso de turbulencia, el piloto ajustará la velocidad a la",
        opciones: [
            {
                textoRespuesta: "Mantendrá la misma procurando no realizar movimientos bruscos de la palanca",
                isCorrect: false
            },
            {
                textoRespuesta: "Inferior a la VNO y con margen por encima de la velocidad de pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "VNE o estructural",
                isCorrect: false
            },
            {
                textoRespuesta: "Mínima permitida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. Cuando dos aeronaves se aproximan de frente o casi de frente, y haya peligro de colisión:",
        opciones: [
            {
                textoRespuesta: "La más potente cederá el paso a la otra",
                isCorrect: false
            },
            {
                textoRespuesta: "Las dos se darán la vuelta",
                isCorrect: false
            },
            {
                textoRespuesta: "Ambas alterarán su rumbo hacia la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "38. Se debe volar tangencialmente a remolinos de polvo.",
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
        titulo: "39. Cuál de las siguientes frases forman parte de lo que llamamos \"volar el avión\"",
        opciones: [
            {
                textoRespuesta: "Respetar la velocidad máxima de turbulencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Respetar la velocidad máxima de operación del flap",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Respetar la VNE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Tenemos fuego en el compartimento del motor. Ya tenemos el avión controlado. Ahora hay que combatir la emergencia. Cuáles son los pasos",
        opciones: [
            {
                textoRespuesta: "Lanzar el paracaídas de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Acelerar el motor a fondo - Cerrar todas las llaves de combustible - Preparar la toma a motor parado que se avecina",
                isCorrect: false
            },
            {
                textoRespuesta: "Cerrar todas las llaves de combustible - acelerar el motor a fondo - preparar la toma a motor parado que se avecina",
                isCorrect: true
            },
            {
                textoRespuesta: "Preparar el extintor por si pasa el fuego al interior",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. Para minimizar la posibilidad de colisión cuando se efectúen las maniobras en torno al despegue, el piloto de ultraligeros deberá:",
        opciones: [
            {
                textoRespuesta: "Apresurar las maniobras",
                isCorrect: false
            },
            {
                textoRespuesta: "Efectuar lentamente las maniobras",
                isCorrect: false
            },
            {
                textoRespuesta: "Ceder el paso a otros ultraligeros con preferencia",
                isCorrect: true
            },
            {
                textoRespuesta: "No hacer nada por si viene otro ultraligero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. Como norma general y para evitar innecesarios olvidos, ¿En qué forma y sentido hay que realizar la inspección prevuelo?",
        opciones: [
            {
                textoRespuesta: "Empezando en la cola y en el sentido de las agujas del reloj",
                isCorrect: false
            },
            {
                textoRespuesta: "Empezando por la cola y en sentido contrario a las agujas del reloj",
                isCorrect: false
            },
            {
                textoRespuesta: "Empezando por el morro y en sentido de las agujas del reloj",
                isCorrect: true
            },
            {
                textoRespuesta: "Empezando por el morro y en sentido contrario de las agujas del reloj",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. Antes de despegar, el procedimiento más seguro para evitar un conflicto con un avión que vaya a aterrizar, es preguntar por la radio si hay alguien.",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. Lo que evita una colisión con otro avión, es mirar fuera correctamente",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. El procedimiento para recuperación de posición anormal es:",
        opciones: [
            {
                textoRespuesta: "a) Buscar rápidamente la posición del horizonte y poner horizontal el ultraligero de la manera más rápida",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Cortar el motor centrando los mandos. Con el ULM cayendo por derecho buscar el horizonte y nivelar",
                isCorrect: true
            },
            {
                textoRespuesta: "c) La respuesta B sería correcta pero el motor habrá de estar a las máximas revoluciones",
                isCorrect: false
            },
            {
                textoRespuesta: "d) En todo caso tiraremos del paracaídas de emergencia con independencia de la altura que llevemos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. No estamos seguros de que el combustible que llevamos sea suficiente para llegar a nuestro destino o a otro aeródromo. Tomar en un prado que consideremos apto puede ser una buena alternativa de contingencia",
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
        titulo: "46. Si inmediatamente después del aterrizaje se retrae el flap, disminuye la sustentación, aumenta el peso sobre las ruedas, y con ello también la eficacia de los frenos",
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
        titulo: "47. Se denomina pista en servicio a:",
        opciones: [
            {
                textoRespuesta: "La designada en cada momento para el despegue y el aterrizaje",
                isCorrect: true
            },
            {
                textoRespuesta: "La designada para el rodaje antes de despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "La utilizada para aparcar con el fin de aproar los ULM al viento",
                isCorrect: false
            },
            {
                textoRespuesta: "La designada para calentar motores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. Para compensar la guiñada adversa, debemos accionar:",
        opciones: [
            {
                textoRespuesta: "El timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "El timón de dirección",
                isCorrect: true
            },
            {
                textoRespuesta: "Los alerones",
                isCorrect: false
            },
            {
                textoRespuesta: "Los flaps",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Si nada más despegar notamos una baja velocidad, la medida más recomendable es:",
        opciones: [
            {
                textoRespuesta: "Poner máxima potencia al motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Dar mayor ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Ceder palanca hacia delante para recuperarla",
                isCorrect: true
            },
            {
                textoRespuesta: "Dar mayor ángulo de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. Empieza a salir humo por detrás del panel de instrumentos. Después de estar seguros de que tenemos el avión controlado, que paso hay que dar para combatir esta emergencia",
        opciones: [
            {
                textoRespuesta: "Desconectar todos los equipos eléctricos",
                isCorrect: false
            },
            {
                textoRespuesta: "Si sigue saliendo humo, evaluar la posibilidad de aterrizaje de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Abrir todas las aireaciones posibles",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "51. En una pista con pendiente, al margen de la acción del viento, ¿En qué sentido es más favorable realizar el despegue?",
        opciones: [
            {
                textoRespuesta: "Cuesta arriba",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuesta abajo",
                isCorrect: true
            },
            {
                textoRespuesta: "No importa el sentido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. En caso de parada de motor, se puede intentar el rearranque",
        opciones: [
            {
                textoRespuesta: "No hay que intentarlo nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay que intentarlo siempre",
                isCorrect: false
            },
            {
                textoRespuesta: "Si estamos a baja altura, puede no ser recomendable",
                isCorrect: true
            },
            {
                textoRespuesta: "Sólo se intenta en los pendulares",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. En el caso de una parada de motor en el despegue, con el desplazamiento instantáneo de la 'bola' el piloto deberá:",
        opciones: [
            {
                textoRespuesta: "No hacer nada",
                isCorrect: false
            },
            {
                textoRespuesta: "Aplicar pie contrario al desplazamiento de la bola",
                isCorrect: false
            },
            {
                textoRespuesta: "Meter motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Pisar la bola",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "54. Que significa VNE",
        opciones: [
            {
                textoRespuesta: "Velocidad que no se debe sobrepasar con el flap extendido",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la marca del anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad que no se puede exceder en ninguna circunstancia",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad óptima de aproximación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. La mejor velocidad para usar en un planeo es la que resulta en la mayor distancia de planeo para una determinada",
        opciones: [
            {
                textoRespuesta: "Aceleración",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: true
            },
            {
                textoRespuesta: "Cantidad de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Resistencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. En una zona de descendencia muy fuerte, a qué velocidad es recomendable volar.",
        opciones: [
            {
                textoRespuesta: "A la máxima en turbulencia",
                isCorrect: false
            },
            {
                textoRespuesta: "A la de maniobra",
                isCorrect: false
            },
            {
                textoRespuesta: "A la de máximo régimen de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "A la de máximo ángulo de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. De los siguientes factores, determinar cuales están relacionados positivamente con el despegue",
        opciones: [
            {
                textoRespuesta: "Baja densidad y baja temperatura del aire",
                isCorrect: false
            },
            {
                textoRespuesta: "Gran longitud de pista, temperatura alta, baja densidad del aire",
                isCorrect: false
            },
            {
                textoRespuesta: "Gran longitud de pista, aire muy denso, pendiente negativa de la pista",
                isCorrect: true
            },
            {
                textoRespuesta: "Gran longitud de pista y pendiente positiva",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Estamos en Bubión (Granada), que tiene una elevación de 2300 pies. Un avión pasa por la vertical a 1000 pies de altura. ¿A qué altitud está volando?",
        opciones: [
            {
                textoRespuesta: "1000 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "2300 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "3300 pies",
                isCorrect: true
            },
            {
                textoRespuesta: "No se puede saber sin radioaltímetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. Los circuitos de tráfico, a menos que se especifique lo contrario, deberán realizarse con virajes:",
        opciones: [
            {
                textoRespuesta: "A la izquierda",
                isCorrect: true
            },
            {
                textoRespuesta: "A la derecha",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. El manual de nuestro avión dice que en configuración de aterrizaje tiene una velocidad de pérdida de 55 km/h. Con lo cual en aproximación final, volaremos a una velocidad mínima de",
        opciones: [
            {
                textoRespuesta: "50 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "55 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "72 km/h",
                isCorrect: true
            },
            {
                textoRespuesta: "60 km/h",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. Si atravesamos una zona de fuertes turbulencias debemos:",
        opciones: [
            {
                textoRespuesta: "Lanzar el avión en picado",
                isCorrect: false
            },
            {
                textoRespuesta: "Dar potencia y ganar altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Perder altura mediante giros",
                isCorrect: false
            },
            {
                textoRespuesta: "Volar a la mínima velocidad para no entrar en pérdida",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "62. Cuando una aeronave está rodando antes del despegue, si recibe una señal de luz a 'destellos verdes', significa:",
        opciones: [
            {
                textoRespuesta: "Autorizado para despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "No entre en la pista de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a rodar hasta cabecera de pista en servicio",
                isCorrect: true
            },
            {
                textoRespuesta: "Regrese al aparcamiento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. La velocidad que proporciona mayor ganancia de altura en la menor distancia horizontal se la conoce como",
        opciones: [
            {
                textoRespuesta: "Velocidad de rotación",
                isCorrect: false
            },
            {
                textoRespuesta: "Vy - Velocidad de mejor régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Vx - Velocidad de mejor ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "VNO",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. ¿Cómo acusara recibo una aeronave en vuelo de la señal luminosa que se le hace desde tierra?",
        opciones: [
            {
                textoRespuesta: "Con cambios bruscos del régimen de motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Alabeando, es decir, balanceando las alas",
                isCorrect: true
            },
            {
                textoRespuesta: "Haciendo un viraje de 360° a la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "Haciendo un viraje de 360° a la izquierda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. En nuestro anemómetro, el arco blanco acaba a 110, el amarillo empieza a 160, y tiene una raya roja a 210. ¿Cuál es la velocidad máxima a la que podemos volar en aire calmado?",
        opciones: [
            {
                textoRespuesta: "210",
                isCorrect: true
            },
            {
                textoRespuesta: "No hay limitación",
                isCorrect: false
            },
            {
                textoRespuesta: "200",
                isCorrect: false
            },
            {
                textoRespuesta: "160",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Hemos sobrepasado la velocidad máxima del avión. Tenemos que tirar de la palanca rápidamente y con energía para reducir la velocidad del avión lo antes posible",
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
        titulo: "67. Estadísticas publicadas en USA demuestran que la mayoría de los casos en que una parada de motor acaba en accidente grave, la causa del accidente no es la parada del motor en sí. Sino que a partir de esa situación, el avión se ha metido en pérdida. ¿Cómo evita esto?",
        opciones: [
            {
                textoRespuesta: "Procurando volar sólo en condiciones ideales",
                isCorrect: false
            },
            {
                textoRespuesta: "No leyendo informes americanos",
                isCorrect: false
            },
            {
                textoRespuesta: "Haciendo un curso de vuelo sin motor",
                isCorrect: false
            },
            {
                textoRespuesta: "\"Volando\" el avión en todo momento. Es decir, manteniendo los parámetros básicos de vuelo no dejándonos sobrecoger por la situación anormal",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "68. ¿Qué acciones debe realizar un piloto para recuperar la pérdida disminuyendo su altura lo menos posible?",
        opciones: [
            {
                textoRespuesta: "a) Picar ligeramente el avión para disminuir el ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Aplicar motor",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Pisar fuertemente el pedal izquierdo para compensar el par motor y tirar de la palanca de mando",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"b\" son ciertas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "69. En qué condiciones de viento se prolonga por más tiempo el peligro de estela turbulenta en una pista",
        opciones: [
            {
                textoRespuesta: "Viento ligero de cola",
                isCorrect: true
            },
            {
                textoRespuesta: "Viento fuerte de cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento fuerte de cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento ligero de frente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. Definición de horario nocturno",
        opciones: [
            {
                textoRespuesta: "Depende del hemisferio",
                isCorrect: false
            },
            {
                textoRespuesta: "Desde una hora después del ocaso, hasta una hora antes del amanecer",
                isCorrect: false
            },
            {
                textoRespuesta: "Desde el ocaso hasta una hora antes del amanecer",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiempo entre el ocaso y el amanecer",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. Cuando hay viento fuerte o racheado, es más aconsejable que los aterrizajes se hagan con poco o ningún calado de flap.",
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
        titulo: "72. Un avión que ha sobrepasado la VNE, podrá volver a volar",
        opciones: [
            {
                textoRespuesta: "Podrá volar, siempre que no se entre en el arco amarillo",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay que mandarlo al desguace",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "No. Deberá ser revisado antes de volver a volar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "73. A que se denomina \"senda de planeo\"",
        opciones: [
            {
                textoRespuesta: "Trayectoria descrita por la punta de pala con respecto a la horizontal en su movimiento rotatorio",
                isCorrect: false
            },
            {
                textoRespuesta: "Factor específico de cada tipo de aeronave en cuanto a su máxima sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Trayectoria seguida por una aeronave en su vuelo traslacional",
                isCorrect: false
            },
            {
                textoRespuesta: "Trayectoria de una aeronave con un ángulo determinado con respecto al suelo en la aproximación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "74. ¿Cómo se recupera una pérdida?",
        opciones: [
            {
                textoRespuesta: "a) Aumentando el ángulo de ataque para incrementar la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Aumentando la velocidad a la vez que alabeamos a mas de 45° a la izquierda o a la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Aumentando la velocidad y reduciendo el ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "d) \"b\" y \"c\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. El mejor coeficiente de planeo, lo obtendré:",
        opciones: [
            {
                textoRespuesta: "Viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Con los flaps retraídos",
                isCorrect: true
            },
            {
                textoRespuesta: "Con full flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento en cara",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Se define a la barrena como:",
        opciones: [
            {
                textoRespuesta: "a) Una maniobra acrobática",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Una rotación de pequeño radio alrededor de un eje vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Una rotación alrededor de un eje horizontal",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"b\"",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "77. La maniobra que consiste en ir levantando el morro a muy poca altura sobre la pista, antes de que haga la toma de contacto, se denomina",
        opciones: [
            {
                textoRespuesta: "Recogida",
                isCorrect: true
            },
            {
                textoRespuesta: "Pisar la bola",
                isCorrect: false
            },
            {
                textoRespuesta: "Derrape",
                isCorrect: false
            },
            {
                textoRespuesta: "Resbale",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. Indicar el correcto orden de paso en tráfico de las siguientes aeronaves:",
        opciones: [
            {
                textoRespuesta: "Globo, ULM, velero",
                isCorrect: false
            },
            {
                textoRespuesta: "Velero, globo, ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "ULM, globo, velero",
                isCorrect: false
            },
            {
                textoRespuesta: "Globo, velero, ULM",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "79. Un altímetro calado con QFE da información de",
        opciones: [
            {
                textoRespuesta: "Elevación",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Nivel de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Al arrancar el motor debe tenerse en cuenta que",
        opciones: [
            {
                textoRespuesta: "El ULM esté en la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "El ULM esté fuera del hangar",
                isCorrect: false
            },
            {
                textoRespuesta: "Tengamos puesto el casco",
                isCorrect: false
            },
            {
                textoRespuesta: "La hélice esté despejada",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "81. ¿Qué se consigue realizando un correcto vuelo recto y nivelado?",
        opciones: [
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Volar con la aeronave coordinada en sus tres ejes",
                isCorrect: false
            },
            {
                textoRespuesta: "Reducir el tiempo en ruta",
                isCorrect: false
            },
            {
                textoRespuesta: "Mejorar el alcance",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. En caso de estar perdidos, debe analizarse primero el sector",
        opciones: [
            {
                textoRespuesta: "Del lado contrario al viento",
                isCorrect: true
            },
            {
                textoRespuesta: "Del mismo lado del viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. En ultraligeros, el vuelo en zonas montañosas está totalmente desaconsejado por la dificultad de encontrar un lugar donde aterrizar en caso de algún fallo que nos impida continuar el vuelo, además de otros factores como las turbulencias, escasa potencia o rápidas formaciones de nubes.",
        opciones: [
            {
                textoRespuesta: "Los helicópteros además son especialmente vulnerables al vuelo de montaña",
                isCorrect: true
            },
            {
                textoRespuesta: "Las corrientes de aire turbulento en las zonas de montaña afectan muy poco al helicóptero",
                isCorrect: false
            },
            {
                textoRespuesta: "El helicóptero puede aterrizar en cualquier sitio, por lo que no le afecta esta precaución",
                isCorrect: false
            },
            {
                textoRespuesta: "Volando con un helicóptero si que podemos operar en zonas de montaña por su mayor maniobrabilidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. Cuál de las siguientes frases no forman parte de lo que llamamos \"volar el avión\"",
        opciones: [
            {
                textoRespuesta: "Hablar por la radio",
                isCorrect: false
            },
            {
                textoRespuesta: "Mirar los mapas",
                isCorrect: false
            },
            {
                textoRespuesta: "Programar el GPS",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "85. Con turbulencia fuerte, volar muy cerca de la velocidad máxima de turbulencia, aun estando todavía en el arco verde, no es recomendable, porque las variaciones de velocidad que implica volar en turbulencia, nos pueden meter muy dentro del arco amarillo",
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
        titulo: "86. Un circuito de tránsito típico se realiza, si no se establece lo contrario, con:",
        opciones: [
            {
                textoRespuesta: "Virajes a la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "Virajes a la izquierda",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "87. El variómetro indica",
        opciones: [
            {
                textoRespuesta: "Variación de altitud absoluta",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambios en el régimen de ascenso o descenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Variación de velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Variación de nivel de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. Cuando exista viento, se deberá aparcar el ultraligero:",
        opciones: [
            {
                textoRespuesta: "Aproado al viento",
                isCorrect: true
            },
            {
                textoRespuesta: "Cerca de un árbol",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento cruzado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. Si durante el ascenso inmediatamente después del despegue notamos una velocidad más baja de lo deseado, debemos",
        opciones: [
            {
                textoRespuesta: "Subir el morro para ganar altura lo antes posible",
                isCorrect: false
            },
            {
                textoRespuesta: "Cortar gases y tirar de palanca",
                isCorrect: false
            },
            {
                textoRespuesta: "Bajar el morro para incrementarle",
                isCorrect: true
            },
            {
                textoRespuesta: "Subir RPM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. Después del despegue y hasta la altitud de transición el altímetro estará calado con el",
        opciones: [
            {
                textoRespuesta: "QNE",
                isCorrect: false
            },
            {
                textoRespuesta: "29.92",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH",
                isCorrect: true
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. Si recién despegado un ULM y antes de alcanzar la altura de seguridad el motor sufre una parada:",
        opciones: [
            {
                textoRespuesta: "Debemos bajar el morro, seguir por derecho y aterrizar",
                isCorrect: true
            },
            {
                textoRespuesta: "Debemos girar a la derecha y aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos girar a la izquierda y aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos bajar el morro y volver a la pista",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. Que acción debe completarse antes de cada vuelo",
        opciones: [
            {
                textoRespuesta: "Comprobar el logbook para verificar que todos los vuelos están apuntados",
                isCorrect: false
            },
            {
                textoRespuesta: "Los cables de conexión de radio y GPS",
                isCorrect: false
            },
            {
                textoRespuesta: "Revisar los procedimientos para evitar las estelas de los aviones precedentes",
                isCorrect: false
            },
            {
                textoRespuesta: "Familiarizarse con toda la información disponible relativa al vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "93. Dos ULM en vuelo en la misma trayectoria y sentido contrario, con peligro de colisión:",
        opciones: [
            {
                textoRespuesta: "Ambas deben maniobrar a su izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Ambas debe maniobrar a su derecha",
                isCorrect: true
            },
            {
                textoRespuesta: "Una de ellas debe ascender",
                isCorrect: false
            },
            {
                textoRespuesta: "Una de ellas debe bajar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. Controlamos el ángulo de ataque de una aeronave:",
        opciones: [
            {
                textoRespuesta: "Con el timón de profundidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Con el timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Con los alerones",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el motor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. Si nos viéramos obligados a tomar tierra en una carretera por una emergencia e imposibilidad de tomar en otro sitio, procuraríamos dentro de lo posible",
        opciones: [
            {
                textoRespuesta: "Aterrizar con los automóviles viniendo de cara para poder verlos y evitarlos",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizar en el mismo sentido de la marcha del tráfico y saliendonos rápidamente a la cuneta después de la toma de tierra",
                isCorrect: true
            },
            {
                textoRespuesta: "Esperar a que no pase nadie y entonces aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "En las carreteras está prohibido aterrizar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. Hay algún tipo de vuelo en el que se pueda prescindir de la tarea de volar el avión",
        opciones: [
            {
                textoRespuesta: "Cuando volemos con sueño",
                isCorrect: false
            },
            {
                textoRespuesta: "No, nunca",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando volemos con piloto automático",
                isCorrect: false
            },
            {
                textoRespuesta: "Volando en autogiro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. La velocidad de maniobra es suficientemente inferior a la velocidad de turbulencia, para protegernos de los fuertes incrementos de velocidad, que la turbulencia produce",
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
        titulo: "98. En condiciones de turbulencia muy fuerte se debe volar a máxima velocidad:",
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
        titulo: "99. Se nos para el motor. Tenemos el avión controlado y altura suficiente. Di que pasos debemos realizar si hay tiempo",
        opciones: [
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Desbloquear una o ambas puertas justo antes de la toma",
                isCorrect: false
            },
            {
                textoRespuesta: "Justo antes de tomar, cerrar llaves de gasolina y desconectar batería",
                isCorrect: false
            },
            {
                textoRespuesta: "Comunicar nuestra posición si es posible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. La prioridad en la aplicación de las tareas básicas de pilotaje, (volar, navegar, comunicar) es indiferente",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. Es siempre volar, navegar, comunicar",
                isCorrect: true
            }
        ]
    }
];

export default preguntas;