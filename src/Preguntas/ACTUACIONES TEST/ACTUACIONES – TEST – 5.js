const preguntas = [
    {
        titulo: "1. Con viento cruzado, si antes que despeguemos lo ha hecho un avión grande:",
        opciones: [
            {
                textoRespuesta: "Ya no tendremos que tomar precauciones porque el viento desplazará las turbulencias generadas",
                isCorrect: false
            },
            {
                textoRespuesta: "Después de ir al aire tendremos que virar hacia el lado que va el viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Después de ir al aire tendremos que virar hacia el lado del que viene el viento",
                isCorrect: true
            },
            {
                textoRespuesta: "En ningún caso podremos despegar con viento cruzado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. Indique la correcta. Durante el descenso:",
        opciones: [
            {
                textoRespuesta: "Debemos recordar enriquecer la mezcla aire/combustible a la altitud recomendada",
                isCorrect: true
            },
            {
                textoRespuesta: "Debemos recordar empobrecer la mezcla aire/combustible a la altitud recomendada",
                isCorrect: false
            },
            {
                textoRespuesta: "La mezcla aire/combustible se ajustará automáticamente",
                isCorrect: false
            },
            {
                textoRespuesta: "La mezcla aire/combustible debe permanecer constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. ¿Cuál de las siguientes afirmaciones es correcta?",
        opciones: [
            {
                textoRespuesta: "Vx siempre será una velocidad mayor que Vy",
                isCorrect: false
            },
            {
                textoRespuesta: "Tras el despegue usaremos Vy y luego cambiaremos a Vx",
                isCorrect: false
            },
            {
                textoRespuesta: "Vy siempre será una velocidad mayor que Vx",
                isCorrect: true
            },
            {
                textoRespuesta: "Vy sólo podremos usarla una vez que hayamos salido del circuito de tráfico del aérodromo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. Indique cuál de las siguientes es correcta. En despegue tenemos obstáculos cerca:",
        opciones: [
            {
                textoRespuesta: "Usaremos la velocidad de mejor régimen ascensional hasta que los hayamos superado todos",
                isCorrect: false
            },
            {
                textoRespuesta: "Usaremos la velocidad de mejor ángulo de ascenso y la usaremos hasta salir del circuito de tráfico",
                isCorrect: false
            },
            {
                textoRespuesta: "Usaremos la velocidad de mejor régimen de ascenso hasta superarlos y después la de mejor ángulo",
                isCorrect: false
            },
            {
                textoRespuesta: "Usaremos la velocidad de mejor ángulo de ascenso hasta superarlos y después usaremos la velocidad de mejor régimen",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "5. ¿Cuál de las siguientes circunstancias alargará la carrera de despegue?",
        opciones: [
            {
                textoRespuesta: "Con baja altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Con viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Con un centro de gravedad muy adelantado",
                isCorrect: true
            },
            {
                textoRespuesta: "Con una alta presión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. El aeródromo A está a 1.800ft de altitud, y el B está a 3.050ft. ¿Cuál de los dos necesitará una pista más larga para despegar?",
        opciones: [
            {
                textoRespuesta: "El A",
                isCorrect: false
            },
            {
                textoRespuesta: "El B",
                isCorrect: true
            },
            {
                textoRespuesta: "Los dos necesitarán la misma longitud de pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Si encontramos una zona montañosa, ¿dónde es más peligroso volar?",
        opciones: [
            {
                textoRespuesta: "A sotavento",
                isCorrect: true
            },
            {
                textoRespuesta: "A barlovento",
                isCorrect: false
            },
            {
                textoRespuesta: "A mucha altura sobre ellas",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la altitud de densidad a la que se encuentre la zona montañosa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. ¿Cómo afectan las turbulencias en vuelo a nuestra aeronave?",
        opciones: [
            {
                textoRespuesta: "Disminuyen la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Reducen la resistencia parásita",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentan el factor de carga",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuyen el factor de carga",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Indique la correcta. La deflexión de los flaps:",
        opciones: [
            {
                textoRespuesta: "Reduce la resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la velocidad de pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye el ángulo de descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Reduce el ángulo de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. ¿En cuál de las siguientes situaciones de despegue se necesitaría una longitud de pista menor?",
        opciones: [
            {
                textoRespuesta: "Con viento en cara y pendiente positiva",
                isCorrect: false
            },
            {
                textoRespuesta: "Con viento en cola y pendiente negativa",
                isCorrect: false
            },
            {
                textoRespuesta: "Con viento en cola y pendiente nula",
                isCorrect: false
            },
            {
                textoRespuesta: "Con viento en cara y pendiente negativa",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "11. Los factores fundamentales que hay que tener en cuenta para calcular la altitud de densidad son:",
        opciones: [
            {
                textoRespuesta: "Temperatura y presión",
                isCorrect: true
            },
            {
                textoRespuesta: "Humedad relativa y humedad total",
                isCorrect: false
            },
            {
                textoRespuesta: "Temperatura y viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Humedad y presión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. En un despegue con viento cruzado en una pista de la que acaba de irse al aire un avión grande:",
        opciones: [
            {
                textoRespuesta: "Debemos despegar antes que el avión grande y virar hacia donde va el viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos despegar después que el avión grande y virar hacia donde va el viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos despegar después que el avión grande y virar hacia el lado del que viene el viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos despegar antes del avión grande y virar hacia el lado del que viene el viento",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "13. Indique la correcta. Un ultraligero de dos ejes:",
        opciones: [
            {
                textoRespuesta: "No tiene mando para hacer la guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "No tiene mando para hacer el alabeo",
                isCorrect: true
            },
            {
                textoRespuesta: "No tiene mando para hacer cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Todos los ultraligeros tienen tres ejes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. El piloto debe planificar el despegue de modo que sobrepase los obstáculos:",
        opciones: [
            {
                textoRespuesta: "A 50 metros de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "A 50’ de altura",
                isCorrect: true
            },
            {
                textoRespuesta: "A 50 mn de distancia",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. Si estamos en la zona de una montaña de la que viene el viento, estamos a sotavento:",
        opciones: [
            {
                textoRespuesta: "Falso",
                isCorrect: true
            },
            {
                textoRespuesta: "Verdadero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. Si tenemos viento de 140º y en un aeródromo con las pistas 13 / 31 utilizamos la primera:",
        opciones: [
            {
                textoRespuesta: "Disminuirá la carrera de despegue y aumentará el ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentará la carrera de despegue y el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuirá la carrera de despegue y el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentará la carrera de despegue y disminuirá el ángulo de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Si en la pista que vamos a utilizar para el despegue acaba de aterrizar un avión grande, ¿cuándo debemos despegar con nuestro ULM?",
        opciones: [
            {
                textoRespuesta: "Después del punto en el que el avión grande puso las ruedas",
                isCorrect: true
            },
            {
                textoRespuesta: "Antes del punto en el que el avión grande puso las ruedas",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendremos que esperar 20 minutos como mínimo para poder irnos al aire",
                isCorrect: false
            },
            {
                textoRespuesta: "En el punto exacto en el que el avión grande aterrizó",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. En vuelo con viento turbulento, ¿a qué velocidad debemos ir?",
        opciones: [
            {
                textoRespuesta: "En la que esté dentro del marco blanco del anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Dentro del arco verde del anemómetro",
                isCorrect: true
            },
            {
                textoRespuesta: "En el arco amarillo del anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Lo más cerca posible de Vne para que las turbulencias apenas se noten",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Calcula aproximadamente la carga alar de un ULM con un peso de 250 kg. al despegue y una superficie alar de 15 m2:",
        opciones: [
            {
                textoRespuesta: "17 kg/m2.",
                isCorrect: true
            },
            {
                textoRespuesta: "265 kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "25 kg/m2.",
                isCorrect: false
            },
            {
                textoRespuesta: "235 kg.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. Las velocidades Vx y Vy no podremos usarlas durante largos periodos de tiempo puesto que se podría calentar el motor.",
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
        titulo: "21. Una elevada altitud de densidad:",
        opciones: [
            {
                textoRespuesta: "Puede aumentar la capacidad de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede aumentar el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Podría mejorar la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Podría reducir la capacidad de ascenso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "22. “Rotación” es un sinónimo de:",
        opciones: [
            {
                textoRespuesta: "Aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "Rodadura",
                isCorrect: false
            },
            {
                textoRespuesta: "Viraje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. Si decimos que nos encontramos a sotavento de una montaña:",
        opciones: [
            {
                textoRespuesta: "Estamos en cualquiera de sus laderas cuando el viento viene de forma paralela a ésta",
                isCorrect: false
            },
            {
                textoRespuesta: "Estamos en la zona opuesta a la que viene el viento",
                isCorrect: true
            },
            {
                textoRespuesta: "Estamos sobrevolando la montaña a mucha altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Estamos en la zona de la que viene el viento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Si volamos en una zona de altas presiones, el altímetro indicará:",
        opciones: [
            {
                textoRespuesta: "Que volamos a una altura superior a la que en realidad vamos",
                isCorrect: false
            },
            {
                textoRespuesta: "Que volamos a una altura inferior a la que en realidad vamos",
                isCorrect: true
            },
            {
                textoRespuesta: "El altímetro no varía con la presión",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud real a la que vamos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. Indique la correcta. En caso de parada del motor en vuelo:",
        opciones: [
            {
                textoRespuesta: "Entraremos en pérdida inmediatamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Es aconsejable poner las hélices en posición de bandera",
                isCorrect: true
            },
            {
                textoRespuesta: "Es aconsejable poner las hélices en paso corto",
                isCorrect: false
            },
            {
                textoRespuesta: "Es aconsejable poner las hélices en paso largo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. Una vez superado el nivel de transición, ¿qué debemos calar en nuestro altímetro?",
        opciones: [
            {
                textoRespuesta: "QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "QNE",
                isCorrect: false
            },
            {
                textoRespuesta: "QMS",
                isCorrect: false
            },
            {
                textoRespuesta: "QNH",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. Indique la correcta. El efecto diedro:",
        opciones: [
            {
                textoRespuesta: "Es el que permite la inclinación en un ULM de dos ejes",
                isCorrect: true
            },
            {
                textoRespuesta: "Es el ángulo formado entre el plano horizontal de la aeronave y el plano de las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el efecto causado por la estabilidad que consigue el ángulo diedro",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. El momento en el que el tren de aterrizaje toca la pista produce un factor de carga:",
        opciones: [
            {
                textoRespuesta: "Negativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Positivo",
                isCorrect: true
            },
            {
                textoRespuesta: "Nulo",
                isCorrect: false
            },
            {
                textoRespuesta: "De 1G",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. La velocidad normal de ascenso no debe utilizarse durante mucho tiempo porque no proporciona una adecuada refrigeración al motor:",
        opciones: [
            {
                textoRespuesta: "Falso",
                isCorrect: true
            },
            {
                textoRespuesta: "Verdadero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Vamos a despegar de la pista 36, con un viento de 330º a 20 Kts. Calcula aproximadamente las componentes de viento:",
        opciones: [
            {
                textoRespuesta: "15 Kt de viento en cara y 5 Kt de viento cruzado",
                isCorrect: false
            },
            {
                textoRespuesta: "13 Kt de viento en cara y 9 Kt de viento cruzado",
                isCorrect: false
            },
            {
                textoRespuesta: "17 Kt de viento en cara y 7 Kt de viento cruzado",
                isCorrect: true
            },
            {
                textoRespuesta: "19 Kt de viento en cara y 1 Kt de viento cruzado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. Cuando mayor sea el peso de una aeronave:",
        opciones: [
            {
                textoRespuesta: "Mayor será el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor será la carrera de aterrizaje",
                isCorrect: true
            },
            {
                textoRespuesta: "Menor será la carrera de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Con viento en cola durante el vuelo:",
        opciones: [
            {
                textoRespuesta: "Aumenta la GS",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la IAS",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la velocidad indicada en el anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Indique la correcta. La punta de las alas de los aviones grandes:",
        opciones: [
            {
                textoRespuesta: "Generan remolinos en la pista durante la carrera de despegue y de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Generan remolinos en el momento en que levantan la rueda en el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Generan remolinos hasta el momento en que las ruedas tocan la pista en el aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. La velocidad de pérdida de una aeronave:",
        opciones: [
            {
                textoRespuesta: "Viene detallada en el Manual de Vuelo y es siempre la misma",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye con la deflexión de flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta cuando aumenta el factor de carga",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. Indique la correcta. En aproximación:",
        opciones: [
            {
                textoRespuesta: "No debemos hacer la trayectoria paralela a la que acaba de seguir un avión grande",
                isCorrect: false
            },
            {
                textoRespuesta: "No debemos hacer esta trayectoria por encima de la que acaba de seguir un avión grande",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos evitar cruzar la trayectoria que acaba de seguir un avión grande",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Con viento en cara el anemómetro indicará:",
        opciones: [
            {
                textoRespuesta: "Menor velocidad IAS que con viento en calma",
                isCorrect: false
            },
            {
                textoRespuesta: "La misma velocidad IAS que con viento en calma",
                isCorrect: true
            },
            {
                textoRespuesta: "La misma velocidad TAS que con viento en calma",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor velocidad TAS que con viento en calma",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. Un despegue en un día con viento en calma:",
        opciones: [
            {
                textoRespuesta: "Necesitará una carrera de despegue mayor que con viento en cara",
                isCorrect: true
            },
            {
                textoRespuesta: "Necesitará una pista mayor que con viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Necesitará la misma pista que con viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento no afecta a la carrera de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Si encontramos una zona de viento turbulento durante el vuelo, ¿a qué velocidad tendremos que ir?",
        opciones: [
            {
                textoRespuesta: "A la delimitada por Vx y Vy",
                isCorrect: false
            },
            {
                textoRespuesta: "A la delimitada por Vs0 y Vfe",
                isCorrect: false
            },
            {
                textoRespuesta: "A la delimitada por VVfe y Vne",
                isCorrect: false
            },
            {
                textoRespuesta: "A la delimitada por Vs1 y Vno",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "39. Una rotación será mejor efectuada cuando tengamos:",
        opciones: [
            {
                textoRespuesta: "Pista con pendiente negativa y viento en cara",
                isCorrect: true
            },
            {
                textoRespuesta: "Pista con pendiente positiva y viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Pista con pendiente negativa y viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Pista con pendiente positiva y viento en cara",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Indique la correcta. La altitud de densidad:",
        opciones: [
            {
                textoRespuesta: "Varía principalmente en función de la presión y la temperatura",
                isCorrect: true
            },
            {
                textoRespuesta: "Varía principalmente en función de la humedad del aire y su temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Es siempre la misma para un aeródromo determinado",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. En un aterrizaje, antes de tocar tierra sentimos que flotamos sobre la pista. ¿A qué se debe?",
        opciones: [
            {
                textoRespuesta: "A un aumento de la sustentación y reducción de la resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "A un aumento de la sustentación y de la resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "Al efecto suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "42. ¿Cómo llamamos a la velocidad de mejor ángulo de ascenso?",
        opciones: [
            {
                textoRespuesta: "Vno",
                isCorrect: false
            },
            {
                textoRespuesta: "Vx",
                isCorrect: true
            },
            {
                textoRespuesta: "Vy",
                isCorrect: false
            },
            {
                textoRespuesta: "Vfe",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. Un aeródromo situado a mayor altitud que otro necesitará una pista de despegue más corta:",
        opciones: [
            {
                textoRespuesta: "Verdadero, debido a que la presión aumenta con la altura y ésta mejora las actuaciones de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso, debido a que la presión disminuye con la altura y ésta es el factor determinante para las actuaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso, debido a que la densidad disminuye con la altura y ésta es el factor determinante para las actuaciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Verdadero, debido a que la densidad aumenta con la altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. Vamos a despegar de una pista que tiene obstáculos cerca y queremos aumentar nuestro ángulo de ascenso. ¿Cómo podemos hacerlo?",
        opciones: [
            {
                textoRespuesta: "Utilizando los flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "Despegando con viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Reduciendo el peso de nuestra aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. ¿Por qué debemos evitar volar en la parte contraria a la que viene el viento en una zona montañosa?",
        opciones: [
            {
                textoRespuesta: "Porque el aire, al no circular, está a mayor temperatura y la sustentación se verá afectada",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque en esa zona es más probable que se dé la inversión térmica, lo cual hace peligroso el vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque en esa zona puede darse turbulencia orográfica, que es muy peligrosa para el vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. En la pista 27 tenemos un viento a 18 Kt de 220º. ¿Cuáles son aproximadamente las componentes de viento que tenemos?",
        opciones: [
            {
                textoRespuesta: "12 km/h de viento en cara y 10 km/h de viento cruzado",
                isCorrect: false
            },
            {
                textoRespuesta: "15 kt de viento en cara y 3 kt de viento cruzado",
                isCorrect: false
            },
            {
                textoRespuesta: "12 nudos de viento en cara y 10 nudos de viento cruzado",
                isCorrect: true
            },
            {
                textoRespuesta: "3 kt de viento en cara y 15 kt de viento cruzado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. La altitud de densidad es la de presión corregida por el efecto de la temperatura cuando la atmósfera no es estándar:",
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
        titulo: "48. Una aeronave determinada entra en pérdida a un ángulo de 18º. Si aumentamos su peso, ¿cuándo entrará en pérdida?",
        opciones: [
            {
                textoRespuesta: "Con el mismo ángulo de ataque a una velocidad menor",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el mismo ángulo de ataque y a la misma velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Con un ángulo de ataque y una velocidad mayores",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el mismo ángulo de ataque y a una velocidad mayor",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "49. El peso máximo al despegue:",
        opciones: [
            {
                textoRespuesta: "Depende de condiciones como la altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Se mide con el avión en vacío, por lo que el peso real al despegar puede ser mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Está relacionado con la máxima sustentación que puede generar el ala",
                isCorrect: true
            },
            {
                textoRespuesta: "Variará en función de las condiciones de cada pista",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. Indique la correcta. La densidad del aire:",
        opciones: [
            {
                textoRespuesta: "Aumenta con la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "A mayor densidad menor resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "A mayor densidad mayor sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Indique la correcta. Cuanto mayor sea la altitud de densidad:",
        opciones: [
            {
                textoRespuesta: "Menor será la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor será la potencia del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor será el rendimiento de la hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "52. En vuelo de crucero, la configuración del avión suele ser:",
        opciones: [
            {
                textoRespuesta: "Baja",
                isCorrect: false
            },
            {
                textoRespuesta: "Sucia",
                isCorrect: false
            },
            {
                textoRespuesta: "Alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Limpia",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "53. Con una inclinación de pista positiva necesitaremos menos potencia para despegar.",
        opciones: [
            {
                textoRespuesta: "Falso",
                isCorrect: true
            },
            {
                textoRespuesta: "Verdadero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. Si vamos a despegar después de haber despegado o aterrizado un avión grande debemos tomar ciertas precauciones:",
        opciones: [
            {
                textoRespuesta: "Para evitar posibles colisiones con la aeronave en el circuito de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque si está cerca puede tener una emergencia y necesitar la pista inmediatamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque los aviones grandes generan turbulencias que pueden afectar a aeronaves más pequeñas",
                isCorrect: true
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. ¿Cuándo presentará mayor resistencia estructural un ultraligero?",
        opciones: [
            {
                textoRespuesta: "Cuanto mayor sean las cargas positivas que puede soportar",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando mayor sean las cargas negativas que puede soportar",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuanto menor sea la diferencia entre las cargas positivas y las negativas que puede soportar",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuanto mayor sea la diferencia entre las cargas positivas y las negativas que puede soportar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "56. Indique la correcta. Con viento turbulento:",
        opciones: [
            {
                textoRespuesta: "Aumenta el factor de carga",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. De las siguientes situaciones, ¿en cuál conseguiremos un mayor ángulo de ascenso en despegue?",
        opciones: [
            {
                textoRespuesta: "Un día de invierno con viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno con viento en cara",
                isCorrect: true
            },
            {
                textoRespuesta: "Un día de verano con viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno con viento en cola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. El peso máximo para rodaje de una aeronave puede ser mayor que su peso máximo al despegue:",
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
        titulo: "59. Indique la correcta. A mayor peso en el despegue:",
        opciones: [
            {
                textoRespuesta: "Mayor carrera",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor velocidad de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor consumo de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "60. ¿En cuál de estas situaciones necesitaremos probablemente más pista para el despegue?",
        opciones: [
            {
                textoRespuesta: "Un día de verano a nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno a 500’ de altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno a nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de verano a 500’ de altitud",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. De los siguientes fenómenos, ¿cuál hará que necesitemos una pista de despegue más larga?",
        opciones: [
            {
                textoRespuesta: "Viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Baja densidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Una pista con pendiente negativa",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Un día de verano el ángulo de ascenso en despegue será ____ respecto a un día de invierno en el mismo aeródromo:",
        opciones: [
            {
                textoRespuesta: "Mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "El mismo",
                isCorrect: true
            },
            {
                textoRespuesta: "Menor",
                isCorrect: false
            },
            {
                textoRespuesta: "Dependerá de la humedad relativa que haya",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. La torsión del ala sirve:",
        opciones: [
            {
                textoRespuesta: "Para optimizar la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Para que la pérdida se produzca progresivamente",
                isCorrect: true
            },
            {
                textoRespuesta: "Para mejorar la estabilidad longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. En un aeródromo con las pistas 27 / 09, y un viento de 260º, ¿cuál de las dos debemos usar para que nuestra carrera de despegue sea más corta?",
        opciones: [
            {
                textoRespuesta: "La carrera de despegue depende únicamente de la densidad, por lo que la pista es indiferente",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista 09",
                isCorrect: false
            },
            {
                textoRespuesta: "La elección de la pista dependerá de otros factores",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista 27",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "65. ¿Cómo se calcula la carga alar?",
        opciones: [
            {
                textoRespuesta: "Peso : envergadura",
                isCorrect: false
            },
            {
                textoRespuesta: "Superficie alar : peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Peso : superficie alar",
                isCorrect: true
            },
            {
                textoRespuesta: "Peso : alargamiento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. ¿En qué momento tendremos que cambiar nuestra velocidad de Vy a velocidad normal de ascenso?",
        opciones: [
            {
                textoRespuesta: "Cuando hayamos superado todos los obstáculos cercanos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando hayamos abandonado el circuito de tráfico del aeródromo",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando queramos ascender con mayor ángulo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. Indique la correcta. En aterrizajes el uso de flaps:",
        opciones: [
            {
                textoRespuesta: "Aumenta la velocidad de aproximación",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la carrera de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la velocidad de aproximación",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "68. La turbulencia orográfica se forma:",
        opciones: [
            {
                textoRespuesta: "A barlovento, con viento paralelo a la zona montañosa",
                isCorrect: false
            },
            {
                textoRespuesta: "A sotavento, con viento paralelo a la zona montañosa",
                isCorrect: false
            },
            {
                textoRespuesta: "A sotavento, con viento perpendicular a la zona montañosa",
                isCorrect: true
            },
            {
                textoRespuesta: "A barlovento, con viento perpendicular a la zona montañosa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. Si utilizamos flaps en aproximación:",
        opciones: [
            {
                textoRespuesta: "Nuestro ángulo de descenso será mayor",
                isCorrect: true
            },
            {
                textoRespuesta: "Nuestra carrera de aterrizaje será mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Nuestra velocidad de descenso será mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. Si durante la aproximación con viento en calma cruzamos la trayectoria que acaba de seguir un avión grande, ¿qué ocurre?",
        opciones: [
            {
                textoRespuesta: "Cruzamos un viento turbulento que aumenta nuestro factor de carga",
                isCorrect: true
            },
            {
                textoRespuesta: "Cruzamos un viento turbulento que reduce nuestra velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "No nos veríamos afectados por nada puesto que hay viento en calma",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. La estabilidad longitudinal de una aeronave depende de su eje:",
        opciones: [
            {
                textoRespuesta: "Longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Lateral",
                isCorrect: true
            },
            {
                textoRespuesta: "Vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Horizontal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. Indique la correcta. Los flaps:",
        opciones: [
            {
                textoRespuesta: "Permiten hacer una rotación a menor velocidad que sin ellos",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentan nuestra carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyen nuestro ángulo de ascenso y descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Alargan nuestra carrera de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. ¿Qué significa que una aeronave tiene un coeficiente de planeo 8:1?",
        opciones: [
            {
                textoRespuesta: "Que recorre 8 pies en horizontal por cada pie que desciende en vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Que recorre 8 mn en horizontal por cada pie que desciende en vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Que recorre 1 metro en horizontal por cada 8 metros que desciende en vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Que recorre 8 metros en horizontal por cada metro que desciende en vertical",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "74. ¿Cuándo no es aconsejable hacer la aproximación y aterrizaje con flaps?",
        opciones: [
            {
                textoRespuesta: "A una gran altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Con viento cruzado y racheado",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando haya obstáculos en la trayectoria de aproximación",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando queramos descender a poca velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. ¿Cuál de las siguientes representa la mejor resistencia estructural para un ultraligero?",
        opciones: [
            {
                textoRespuesta: "+5g / -2g",
                isCorrect: true
            },
            {
                textoRespuesta: "+5.5g / -1g",
                isCorrect: false
            },
            {
                textoRespuesta: "+3g / -3g",
                isCorrect: false
            },
            {
                textoRespuesta: "+4.5g / -1.5g",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Si aumentamos la velocidad la resistencia parásita ____ y la resistencia inducida ____:",
        opciones: [
            {
                textoRespuesta: "Aumenta / Disminuye",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta / Aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye / Disminuye",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye / Aumenta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. Un avión con configuración sucia genera más resistencia parásita que con configuración limpia.",
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
        titulo: "78. La pista de un aeródromo nunca podrá tener pendiente, pues haría imposible las actuaciones de la aeronave:",
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
        titulo: "79. Si aumentamos el peso de la aeronave:",
        opciones: [
            {
                textoRespuesta: "Entrará en pérdida a la misma velocidad IAS pero con un ángulo de ataque mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrará en pérdida con el mismo ángulo de ataque y una IAS menor",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrará en pérdida a la misma IAS y mismo ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrará en pérdida a una IAS mayor pero con el mismo ángulo de ataque",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "80. Indique la correcta. Con viento en cara:",
        opciones: [
            {
                textoRespuesta: "Aumenta la velocidad IAS",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la velocidad IAS",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la velocidad sobre el suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "81. El rendimiento aerodinámico de las superficies sustentadoras:",
        opciones: [
            {
                textoRespuesta: "Mejora con gran altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Es mejor cuanto mayor es la temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Es mejor cuanto mayor es la densidad",
                isCorrect: true
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Cuando una aeronave se está preparando para aterrizar con el uso de flaps y tren de aterrizaje fuera, su configuración es:",
        opciones: [
            {
                textoRespuesta: "Sucia",
                isCorrect: true
            },
            {
                textoRespuesta: "Completa",
                isCorrect: false
            },
            {
                textoRespuesta: "Limpia",
                isCorrect: false
            },
            {
                textoRespuesta: "De descenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. En un aeródromo con las pistas 12 / 30 y un viento de 300º, ¿por qué no debemos usar la primera pista?",
        opciones: [
            {
                textoRespuesta: "Porque tendremos viento en cara, que afecta negativamente a las actuaciones de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí debemos usar esa pista, pues tendremos viento en cara, lo cual mejora el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque tendremos viento en cola, lo que dificulta las actuaciones del avión",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí debemos usar esa pista, pues tendremos viento en cola, lo que mejora las actuaciones de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. Indique la correcta. Una pista de tierra:",
        opciones: [
            {
                textoRespuesta: "Acortará la carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Alargará la carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Hará casi imposible el despegue cuando haya llovido sobre ella",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "85. En una zona de altas presiones:",
        opciones: [
            {
                textoRespuesta: "El altímetro indicará la altitud real que llevamos",
                isCorrect: false
            },
            {
                textoRespuesta: "Volaremos a una altitud menor de lo que indica el altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Volaremos a una altitud mayor de lo que indica el altímetro",
                isCorrect: true
            },
            {
                textoRespuesta: "El altímetro indicará siempre lo mismo, independientemente de la presión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. Indique la correcta. La carga alar:",
        opciones: [
            {
                textoRespuesta: "Se calcula dividiendo el peso de la aeronave entre la envergadura",
                isCorrect: false
            },
            {
                textoRespuesta: "Se calcula multiplicando el peso de la aeronave por el alargamiento",
                isCorrect: false
            },
            {
                textoRespuesta: "Se calcula dividiendo el peso de la aeronave entre la superficie alar",
                isCorrect: true
            },
            {
                textoRespuesta: "Se calcula multiplicando el peso de la aeronave por la superficie alar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. En un despegue y tras haber superado todos los obstáculos cercanos, ¿qué velocidad usaremos?",
        opciones: [
            {
                textoRespuesta: "Vy (Velocidad de mejor régimen de ascenso)",
                isCorrect: true
            },
            {
                textoRespuesta: "Vx (Velocidad de mejor ángulo de ascenso)",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad normal de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. En vuelo, queremos ascender durante un largo periodo de tiempo. ¿Qué velocidad usaré?",
        opciones: [
            {
                textoRespuesta: "Velocidad de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de mejor régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad normal de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad de mejor ángulo de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. ¿Cuál de las siguientes situaciones es preferible para un aterrizaje?",
        opciones: [
            {
                textoRespuesta: "Viento en cara y pista con pendiente negativa",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento en cola y pista con pendiente positiva",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento en cara y pista con pendiente positiva",
                isCorrect: true
            },
            {
                textoRespuesta: "Viento en cola y pista con pendiente negativa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. La velocidad a la que recorremos mayor distancia vertical en menor distancia horizontal se llama:",
        opciones: [
            {
                textoRespuesta: "Velocidad de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de mejor régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de mejor ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad normal de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. ¿Cómo afectará el viento en cara al despegue?",
        opciones: [
            {
                textoRespuesta: "Alargará la carrera y aumentará el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Acortará la carrera y aumentará el ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Alargará la carrera y disminuirá el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Acortará la carrera y disminuirá nuestro ángulo de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. Indique la correcta. El efecto suelo:",
        opciones: [
            {
                textoRespuesta: "Es proporcional al peso de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "No se produce en altitudes de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Es proporcional a la envergadura de la aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la resistencia inducida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. La temperatura es el elemento principal que determina las actuaciones de una aeronave:",
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
        titulo: "94. Un ultraligero que sólo consta de dos ejes:",
        opciones: [
            {
                textoRespuesta: "Todos los ultraligeros constan de tres ejes",
                isCorrect: false
            },
            {
                textoRespuesta: "No tiene timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "No tiene timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "No tiene alerones",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "95. Estamos en un aeródromo con las pistas 27, con pendiente positiva y 09, con pendiente negativa. Con viento en calma, ¿qué pista utilizaremos?",
        opciones: [
            {
                textoRespuesta: "La 27 para el despegue y la 09 para el aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "La 27 para despegue y aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "La 09 para despeje y aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "La 09 para despegue y la 27 para aterrizaje",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "96. Un centro de gravedad adelantado es más peligroso que un centro de gravedad atrasado.",
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
        titulo: "97. ¿En qué momento del vuelo podría darse un factor de carga nulo?",
        opciones: [
            {
                textoRespuesta: "En ninguno, puesto que éste deberá ser al menos de 1G",
                isCorrect: false
            },
            {
                textoRespuesta: "Durante el vuelo recto y nivelado",
                isCorrect: false
            },
            {
                textoRespuesta: "Justo en el momento de entrada en pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "En virajes coordinados",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Con viento en cara la IAS:",
        opciones: [
            {
                textoRespuesta: "Disminuye",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Se mantiene igual que la TAS",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "99. Si aumentamos el peso de una aeronave en despegue, se irá al aire:",
        opciones: [
            {
                textoRespuesta: "Con la misma velocidad y mayor ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el mismo ángulo de ataque a mayor velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Con mayor ángulo de ataque y mayor velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Con las mismas condiciones de ángulo de ataque y velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. ¿Qué quiere decir que una pista tiene una pendiente del 3%?",
        opciones: [
            {
                textoRespuesta: "Que entre un extremo de la pista y otro, la altura de la pista ha variado 3 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la pista tiene un ángulo de inclinación de 3º",
                isCorrect: false
            },
            {
                textoRespuesta: "Que por cada 100 unidades de longitud, la altura de la pista ha variado 3",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta puesto que una pista no puede tener pendiente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "101. La turbulencia generada por la punta de las alas de un avión grande:",
        opciones: [
            {
                textoRespuesta: "Apenas tienen efectos en otras aeronaves",
                isCorrect: false
            },
            {
                textoRespuesta: "Es proporcional al peso del avión",
                isCorrect: true
            },
            {
                textoRespuesta: "No desaparecen hasta que el avión se para en la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "102. ¿En qué condiciones están certificadas las actuaciones de nuestra aeronave?",
        opciones: [
            {
                textoRespuesta: "Según condiciones ISA",
                isCorrect: false
            },
            {
                textoRespuesta: "Según la atmósfera estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "A nivel del mar con una presión de 1.013mb y 15ºC.",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    }
];

export default preguntas;