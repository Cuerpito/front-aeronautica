const preguntas = [
    {
        titulo: "1. El avión actuará de acuerdo con:",
        opciones: [
            {
                textoRespuesta: "La elevación del aeropuerto",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud de presión",
                isCorrect: false
            },
            {
                textoRespuesta: "La isobara de 1013 MBS",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud de densidad",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "2. El timón de profundidad es la superficie aerodinámica encargada de producir los movimientos de:",
        opciones: [
            {
                textoRespuesta: "Alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Inclinación",
                isCorrect: false
            },
            {
                textoRespuesta: "Picado y encabritado",
                isCorrect: true
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. La velocidad indicada IAS:",
        opciones: [
            {
                textoRespuesta: "Es una velocidad absoluta",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una velocidad relativa",
                isCorrect: true
            },
            {
                textoRespuesta: "Es una velocidad convenida",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una velocidad corregida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. Las prestaciones de un avión, se ven disminuidas cuando:",
        opciones: [
            {
                textoRespuesta: "La densidad aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "La densidad disminuye",
                isCorrect: true
            },
            {
                textoRespuesta: "La temperatura disminuye",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Para que un altímetro indique niveles de vuelo, deberá estar ajustado con:",
        opciones: [
            {
                textoRespuesta: "1013 Mb o 29,92 pulgadas",
                isCorrect: true
            },
            {
                textoRespuesta: "QNH",
                isCorrect: false
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "800 Mb.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Un factor de carga n = 3 en un ULM de 200 kg de peso significa.",
        opciones: [
            {
                textoRespuesta: "Que la resistencia parásita es igual a 3",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la resistencia al avance del avión se multiplica por 3",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la estructura del avión está soportando una fuerza de 3 kg, por superficie alar",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la estructura del avión está soportando una carga de 600 kgs.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "7. Para mantener la misma altura en un viraje, la sustentación deberá:",
        opciones: [
            {
                textoRespuesta: "Disminuir",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentar",
                isCorrect: true
            },
            {
                textoRespuesta: "Ser igual que en vuelo recto y nivelado",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambiar su sentido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. La velocidad de ascenso con la que se sube lo más alto posible en la menor distancia horizontal, se denomina:",
        opciones: [
            {
                textoRespuesta: "Velocidad de ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad de régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad normal de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de subida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Si un ultraligero pesa 180 Kg. De peso máximo al despegue y dispone de una superficie alar de 10m2, su carga alar es:",
        opciones: [
            {
                textoRespuesta: "10 Kg./m2",
                isCorrect: false
            },
            {
                textoRespuesta: "11 Kg./m2",
                isCorrect: false
            },
            {
                textoRespuesta: "18 Kg./m2",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Si en una pista tenemos obstáculos cercanos, tras el despegue, debemos:",
        opciones: [
            {
                textoRespuesta: "Poner velocidad de régimen de ascenso Vy",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener flaps para tener más sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Poner velocidad de ángulo de ascenso Vx",
                isCorrect: true
            },
            {
                textoRespuesta: "Poner velocidad de régimen de ascenso Vx",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. La velocidad de ascenso que proporciona una refrigeración adecuada al motor se denomina:",
        opciones: [
            {
                textoRespuesta: "Velocidad de ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad normal de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. El altímetro:",
        opciones: [
            {
                textoRespuesta: "a) Basa su medición en la diferencia de la presión atmosférica exterior y la presión atmosférica estándar",
                isCorrect: true
            },
            {
                textoRespuesta: "b) Basa su medida en la diferencia de la humedad atmosférica exterior y la humedad atmosférica estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Basa su medida en la diferencia de la temperatura atmosférica exterior y la temperatura atmosférica estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"a\" y la \"b\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. La estabilidad que permite mantener fácilmente el rumbo del avión afecta al eje.",
        opciones: [
            {
                textoRespuesta: "Longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Vertical",
                isCorrect: true
            },
            {
                textoRespuesta: "Lateral",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. Durante un viraje, el ala interior del ULM:",
        opciones: [
            {
                textoRespuesta: "Presenta menos velocidad y sustentación que la exterior",
                isCorrect: true
            },
            {
                textoRespuesta: "Presenta más velocidad y sustentación que la exterior",
                isCorrect: false
            },
            {
                textoRespuesta: "Presenta más velocidad y menos sustentación que la exterior",
                isCorrect: false
            },
            {
                textoRespuesta: "Presenta menos velocidad y más sustentación que la exterior",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. Un viento de cola:",
        opciones: [
            {
                textoRespuesta: "Disminuye la velocidad relativa y aumenta la velocidad con respecto al suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la velocidad relativa y disminuye la velocidad con respecto al suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la velocidad relativa y aumenta la velocidad con respecto al suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la velocidad relativa y disminuye la velocidad con respecto al suelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. Es más importante la velocidad con relación a tierra que la velocidad relativa.",
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
        titulo: "17. La velocidad de ascenso para alcanzar mayor altura invirtiendo el menor tiempo posible se denomina:",
        opciones: [
            {
                textoRespuesta: "Velocidad de ascenso máxima",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad relativa",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de régimen de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Si la presión atmosférica, en un aeropuerto, está por debajo de la real, un avión proporcionalmente:",
        opciones: [
            {
                textoRespuesta: "Necesita mayor velocidad de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad ascensional será menor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Necesita más longitud de pista de la normal",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Si el despegue debe realizarse DESPUÉS del aterrizaje de un avión de gran tamaño:",
        opciones: [
            {
                textoRespuesta: "Iniciaremos la rotación antes del punto en que el avión tomó contacto",
                isCorrect: false
            },
            {
                textoRespuesta: "Iniciaremos la rotación después del punto en que el avión tomó contacto",
                isCorrect: true
            },
            {
                textoRespuesta: "Despegaremos normalmente, pues un avión sólo provoca turbulencias en el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Iniciaremos la rotación a una velocidad más lenta que la habitual, para evitar daños estructurales en caso de encontrar turbulencias",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. Durante un viraje, la sustentación es igual a:",
        opciones: [
            {
                textoRespuesta: "Peso / seno ángulo de alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Seno ángulo de alabeo / peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Peso / fuerza centrífuga",
                isCorrect: false
            },
            {
                textoRespuesta: "Peso / coseno ángulo de alabeo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "21. Si tenemos que aterrizar de emergencia en un campo recién labrado o abonado, ¿Qué podemos esperar?",
        opciones: [
            {
                textoRespuesta: "Una retención fuerte del ULM al tocar tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "Dificultades en la salida del mismo después de la toma",
                isCorrect: false
            },
            {
                textoRespuesta: "Posibilidades de capotar si no aterrizamos cara al viento y con el mínimo de velocidad posible",
                isCorrect: false
            },
            {
                textoRespuesta: "Todo lo anterior es cierto",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "22. Cuando el altímetro se ajusta con 1.013 MBS indica:",
        opciones: [
            {
                textoRespuesta: "Altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud de presión",
                isCorrect: true
            },
            {
                textoRespuesta: "Altitud real",
                isCorrect: false
            },
            {
                textoRespuesta: "No se puede ajustar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. Con un centro de gravedad en el límite más adelantado, qué circunstancia podríamos esperar:",
        opciones: [
            {
                textoRespuesta: "Disminución de la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminución del alcance máximo",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminución de la velocidad de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendencia a guiñar en el despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Si aumentamos la velocidad, la resistencia parásita:",
        opciones: [
            {
                textoRespuesta: "Aumenta",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye geométricamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye aritméticamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Permanece constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. La función de los pedales es:",
        opciones: [
            {
                textoRespuesta: "El control de la guiñada",
                isCorrect: true
            },
            {
                textoRespuesta: "El control de tendencia de sobre inclinación",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener un ángulo de deriva para controlar la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener el viraje del avión después de haberle dado una inclinación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. Un viento de cara:",
        opciones: [
            {
                textoRespuesta: "Disminuye el régimen de descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el ángulo de descenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta el ángulo y el régimen de descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye el ángulo de descenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Si la pista es asfaltada e inclinada hacia abajo, la carrera de despegue será:",
        opciones: [
            {
                textoRespuesta: "Mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "No depende de la pista si no solo de la potencia del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor",
                isCorrect: true
            },
            {
                textoRespuesta: "No depende de la pista si no de la velocidad frontal del viento solamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. La capa límite turbulenta:",
        opciones: [
            {
                textoRespuesta: "a) Presenta mayor espesor que las capas límites laminares",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Presenta un gradiente de velocidad menos acusado que el de la capa límite laminar",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Esta capa no existe",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"b\"",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "29. ¿Qué efecto tiene el viento en cola sobre la velocidad de máxima autonomía?",
        opciones: [
            {
                textoRespuesta: "El viento en cola sólo influye en la velocidad de espera",
                isCorrect: false
            },
            {
                textoRespuesta: "No lo afecta",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la velocidad indicada",
                isCorrect: false
            },
            {
                textoRespuesta: "Baja la velocidad indicada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. La condición más peligrosa para el vuelo será:",
        opciones: [
            {
                textoRespuesta: "Un peso grande y cg muy atrasado",
                isCorrect: true
            },
            {
                textoRespuesta: "Un peso pequeño y cg muy atrasado",
                isCorrect: false
            },
            {
                textoRespuesta: "Un peso grande y cg muy adelantado",
                isCorrect: false
            },
            {
                textoRespuesta: "Un peso pequeño y cg muy adelantado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. Cuando un altímetro esta calado con QNE ¿Qué marca?",
        opciones: [
            {
                textoRespuesta: "Altura sobre el terreno",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Altitud sobre el nivel medio del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel de transición",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. En qué condiciones atmosféricas se verán reducidas las prestaciones del avión durante el despegue y el ascenso:",
        opciones: [
            {
                textoRespuesta: "Alta temperatura, alta humedad relativa y baja altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Alta temperatura, alta humedad relativa y alta altitud de densidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Baja temperatura, baja humedad relativa, baja altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Un avión entra en pérdida a 40 millas lAS volando a nivel del mar. ¿Cuál será su velocidad de pérdida lAS a 3000'?",
        opciones: [
            {
                textoRespuesta: "30 millas",
                isCorrect: false
            },
            {
                textoRespuesta: "40 millas",
                isCorrect: true
            },
            {
                textoRespuesta: "50 millas",
                isCorrect: false
            },
            {
                textoRespuesta: "60 millas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. Al entrar en 'pérdida':",
        opciones: [
            {
                textoRespuesta: "Aumenta la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la presión del aire contra el piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Los mando se vuelven perezoso y blandos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. ¿A qué velocidad debe volar un avión para entrar en pérdida?",
        opciones: [
            {
                textoRespuesta: "La velocidad de mejor ángulo de subida",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "25 nm.",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión puede entrar en pérdida a cualquier velocidad cuando se excede el ángulo de ataque crítico",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "36. En relación con los virajes:",
        opciones: [
            {
                textoRespuesta: "No debe inclinarse el avión en el viraje",
                isCorrect: false
            },
            {
                textoRespuesta: "El viraje más cerrado requiere mayor inclinación y velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad no influye para evitar la entrada inadvertida en pérdida en un viraje",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión no debe alabear y levantar el morro al mismo tiempo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. ¿Qué causa resistencia parásita?",
        opciones: [
            {
                textoRespuesta: "Acumulación de insectos en las alas y derivas",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso combinado de avión y tripulantes",
                isCorrect: false
            },
            {
                textoRespuesta: "Partículas de aire golpeando las superficies del avión",
                isCorrect: true
            },
            {
                textoRespuesta: "La sustentación producida por las alas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Sí el centro de gravedad y el de presiones se encuentran exactamente en el mismo punto, el avión tiene:",
        opciones: [
            {
                textoRespuesta: "Un momento de encabritado",
                isCorrect: false
            },
            {
                textoRespuesta: "Un momento de picado",
                isCorrect: false
            },
            {
                textoRespuesta: "Una estabilidad longitudinal neutra",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Qué hace que un avión gire:",
        opciones: [
            {
                textoRespuesta: "La fuerza centrífuga",
                isCorrect: false
            },
            {
                textoRespuesta: "Los pies y los alerones",
                isCorrect: false
            },
            {
                textoRespuesta: "La componente horizontal de la sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Los pies, los alerones y la profundidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Un centro de gravedad trasero es mucho más peligroso que un centro de gravedad delantero.",
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
        titulo: "41. ¿Qué diferencia hay entre centro de gravedad (c.g.) y el centro aerodinámico (c.a.)?",
        opciones: [
            {
                textoRespuesta: "Ninguna, son lo mismo",
                isCorrect: false
            },
            {
                textoRespuesta: "El c.g. es móvil y el c.a. es fijo",
                isCorrect: false
            },
            {
                textoRespuesta: "El c.g. es el punto donde actúa todo el peso del avión y el c.a. es el punto donde actúa la fuerza aerodinámica",
                isCorrect: true
            },
            {
                textoRespuesta: "El c.a. es el que limita el movimiento del c.g.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. Las vibraciones en los ULM:",
        opciones: [
            {
                textoRespuesta: "No afectan a la estructura",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionan mayor sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Pueden ser amplificadas por fenómenos de resonancia",
                isCorrect: true
            },
            {
                textoRespuesta: "Sólo las producen hélices muy equilibradas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. ¿A qué se llama resistencia de compresibilidad?",
        opciones: [
            {
                textoRespuesta: "A la que se genera en sentido contrario a la tracción",
                isCorrect: false
            },
            {
                textoRespuesta: "A la que tiene como causa la densidad del aire",
                isCorrect: true
            },
            {
                textoRespuesta: "A la que origina el torbellino de la hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "La que se forma al chocar el aire con los cables, tren de aterrizaje, antenas etc.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. En relación a la Vy, la Vx es",
        opciones: [
            {
                textoRespuesta: "Mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor, cuando hay temperatura estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor",
                isCorrect: true
            },
            {
                textoRespuesta: "Iguales, cuando la presión es la estándar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. El movimiento alrededor del eje vertical se denomina:",
        opciones: [
            {
                textoRespuesta: "Alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: true
            },
            {
                textoRespuesta: "Sustentación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. Una componente constante de viento de frente:",
        opciones: [
            {
                textoRespuesta: "Aumentará el mejor régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentará ángulo de ascenso durante el ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentará la máxima autonomía",
                isCorrect: false
            },
            {
                textoRespuesta: "No afecta al régimen de ascenso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "47. En un planeo para aterrizar, un viento de cara:",
        opciones: [
            {
                textoRespuesta: "Aumenta el alcance de un avión",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye el ángulo de descenso, por lo que el avión planeará menos",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el régimen de descenso, por lo que el avión planeará menos",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye el alcance de un avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. La resistencia parásita aumenta al aumentar la velocidad.",
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
        titulo: "49. Uno de los motivos por los que un avión de motor atmosférico (la mayoría de los ulm) necesita más pista para despegar en una pista elevada, comparado con una a nivel del mar, es que el motor da menos potencia.",
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
        titulo: "50. La sensación de quedarse pegado en el asiento significa que el avión está sufriendo:",
        opciones: [
            {
                textoRespuesta: "Un factor de carga positivo",
                isCorrect: true
            },
            {
                textoRespuesta: "Un factor de carga negativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un exceso de sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Una modificación en su configuración",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Una pérdida no representa grandes problemas de recuperación si el piloto dispone de:",
        opciones: [
            {
                textoRespuesta: "Un buen motor para aumentar velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Paracaídas y cinturón",
                isCorrect: false
            },
            {
                textoRespuesta: "De una hélice de paso variable",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Cuando el centro de gravedad se encuentra en su posición delantera límite, el avión se torna:",
        opciones: [
            {
                textoRespuesta: "Extremadamente estable y requiere escaso mando sobre el estabilizador para modificar el cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Extremadamente inestable y requiere escaso mando sobre el estabilizador para modificar el cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Extremadamente estable y requiere exceso de mando sobre el estabilizador para modificar el cabeceo",
                isCorrect: true
            },
            {
                textoRespuesta: "Extremadamente inestable y requiere exceso de mando sobre el estabilizador para modificar el cabeceo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. Cuanto mayor sea la altitud de densidad de un campo de vuelo, la carrera de despegue será:",
        opciones: [
            {
                textoRespuesta: "Mayor",
                isCorrect: true
            },
            {
                textoRespuesta: "Menor",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. El despegue en pista con pendiente negativa, influye sobre la carrera de despegue:",
        opciones: [
            {
                textoRespuesta: "Acortándola",
                isCorrect: true
            },
            {
                textoRespuesta: "Alargándola",
                isCorrect: false
            },
            {
                textoRespuesta: "No influye",
                isCorrect: false
            },
            {
                textoRespuesta: "No pueden hacerse despegues en este tipo de pistas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. De los siguientes factores cual será más determinante para la carrera de despegue:",
        opciones: [
            {
                textoRespuesta: "Temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Tener viento en cola",
                isCorrect: true
            },
            {
                textoRespuesta: "Humedad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. El avión baja:",
        opciones: [
            {
                textoRespuesta: "Al pasar de una baja presión a una alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Al pasar de una alta presión a una baja",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "57. Al accionar los alerones:",
        opciones: [
            {
                textoRespuesta: "Se produce el movimiento del cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce el movimiento del alabeo",
                isCorrect: true
            },
            {
                textoRespuesta: "Se produce el movimiento de la guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce el movimiento de rotación sobre su eje vertical",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Los gradientes de viento por obstáculos varían dependiendo del tipo de obstáculos, es decir: volando cerca del suelo, detrás de una zona de arbustos o árboles, podemos esperar:",
        opciones: [
            {
                textoRespuesta: "Viento más débil",
                isCorrect: true
            },
            {
                textoRespuesta: "Viento más débil pero turbulento",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento más fuerte",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento más fuerte pero laminar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. Cuando un ultraligero entra en pérdida a baja velocidad, uno de los síntomas que se produce es:",
        opciones: [
            {
                textoRespuesta: "Posición del morro más baja de la normal",
                isCorrect: false
            },
            {
                textoRespuesta: "El ruido del viento es más fuerte",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la presión del aire contra el cuerpo",
                isCorrect: false
            },
            {
                textoRespuesta: "Respuesta lenta del ultraligero, con poca presión en los mandos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "60. En días de poca densidad de aire la carrera de despegue aumentará:",
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
        titulo: "61. Ir calculando la velocidad según referencias exteriores, viendo cómo \"pasan\" las referencias, en una aproximación para aterrizar:",
        opciones: [
            {
                textoRespuesta: "Es una actuación aconsejable para mantener correctamente la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una buena actuación, para entrenar las sensaciones, por si falla el anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Es un error muy peligroso, pues podríamos disminuir la velocidad indicada IAS inadvertidamente",
                isCorrect: true
            },
            {
                textoRespuesta: "Es un error sin importancia, ya que la velocidad verdadera se mantiene si mantenemos velocidad con respecto al suelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Si durante una aproximación de emergencia por fallo de motor, vemos que vamos un poco altos, una buena actuación para descender con más ángulo, sería:",
        opciones: [
            {
                textoRespuesta: "Levantar el morro para tener más sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Calar más flaps",
                isCorrect: true
            },
            {
                textoRespuesta: "Subir flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Si un ultraligero pesa 180kg de peso máximo al despegue y dispone de una superficie alar de 18m2, ¿Cual es su carga alar?",
        opciones: [
            {
                textoRespuesta: "10 kg/m2",
                isCorrect: true
            },
            {
                textoRespuesta: "1 kg/m2",
                isCorrect: false
            },
            {
                textoRespuesta: "18 kg/m2",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Para realizar un viraje pronunciado y no perder altura, se debe:",
        opciones: [
            {
                textoRespuesta: "a) Disminuir la velocidad del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Aumentar el ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Aumentar la velocidad del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"b\" y \"c\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "65. La capa límite laminar:",
        opciones: [
            {
                textoRespuesta: "Es la zona en la cual el movimiento del aire se realiza en forma de capas de velocidad paralelas y uniformes, con un gradiente de velocidad muy acusado",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene muy poco espesor",
                isCorrect: false
            },
            {
                textoRespuesta: "Las dos respuestas anteriores son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las respuestas es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. En el vuelo recto y nivelado, sin aceleración ni desaceleración:",
        opciones: [
            {
                textoRespuesta: "El peso o gravedad es de 0 g.",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso o gravedad es de  1 g.",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso o gravedad es de +1g.",
                isCorrect: true
            },
            {
                textoRespuesta: "Las fuerzas no se encuentran niveladas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. Los flaps deben ser usados en las fases de:",
        opciones: [
            {
                textoRespuesta: "Crucero y aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproximaciones y despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "Despegue y crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Crucero y descenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. El efecto suelo hace flotar al avión:",
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
        titulo: "69. La densidad del aire puede disminuir:",
        opciones: [
            {
                textoRespuesta: "Por aumento de la altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Por disminución de la presión atmosférica",
                isCorrect: false
            },
            {
                textoRespuesta: "Por aumento de la temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "70. En relación a los flaps:",
        opciones: [
            {
                textoRespuesta: "a) Disminuye la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Crea una tendencia a picar",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Permiten realizar una senda de aproximación más pronunciada",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"b\" y \"c\".",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. Como se suele denominar la Velocidad de máximo régimen de ascenso:",
        opciones: [
            {
                textoRespuesta: "Vx",
                isCorrect: false
            },
            {
                textoRespuesta: "Vy",
                isCorrect: true
            },
            {
                textoRespuesta: "Va",
                isCorrect: false
            },
            {
                textoRespuesta: "Vb",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. Una hélice de paso variable, permite:",
        opciones: [
            {
                textoRespuesta: "Volar más despacio",
                isCorrect: false
            },
            {
                textoRespuesta: "El rendimiento óptimo en cada fase del vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Volar a mayor altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Realmente no tiene grandes ventajas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. Si aterrizamos con viento en calma, debemos tener en cuenta que:",
        opciones: [
            {
                textoRespuesta: "a) La senda de planeo en la aproximación deberá ser más baja que con viento en cara",
                isCorrect: true
            },
            {
                textoRespuesta: "b) \"a\" y \"c\" son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "c) La carrera de aterrizaje será más corta que con viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La senda de planeo en la aproximación deberá ser más alta que con viento en cara",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. ¿Cuál de las capas límite tiene una menor velocidad del aire cerca de la superficie del plano?",
        opciones: [
            {
                textoRespuesta: "Laminar",
                isCorrect: true
            },
            {
                textoRespuesta: "Turbulenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Separadora",
                isCorrect: false
            },
            {
                textoRespuesta: "La de torbellino",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. El despegue con viento en cola:",
        opciones: [
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye el régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye el ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye la sustentación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. La resistencia inducida aumenta con la disminución del alargamiento del ala.",
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
        titulo: "77. La línea isobárica que pasa a 10.000 pies aproximadamente en un día ISA es la de:",
        opciones: [
            {
                textoRespuesta: "1.000 Mb.",
                isCorrect: false
            },
            {
                textoRespuesta: "500 Mb.",
                isCorrect: false
            },
            {
                textoRespuesta: "250 Mb.",
                isCorrect: false
            },
            {
                textoRespuesta: "700 Mb.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "78. La velocidad más baja con la que puede volar un ULM sin entrar en 'pérdida', se denomina:",
        opciones: [
            {
                textoRespuesta: "Velocidad de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad normal",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad mínima de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad de pérdida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. ¿Cuándo coinciden la línea isobárica de 1013,2 Mb y el QNH?",
        opciones: [
            {
                textoRespuesta: "En un día ISA",
                isCorrect: true
            },
            {
                textoRespuesta: "En un día de altas presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "En un día de baja presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "No pueden coincidir nunca",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Volando viento en cola, la velocidad de pérdida (IAS)",
        opciones: [
            {
                textoRespuesta: "Es la misma que viento en cara, pero la TAS es mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Es menor que viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la misma que viento en cara",
                isCorrect: true
            },
            {
                textoRespuesta: "Es mayor que viento en cara",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. La densidad del aire con la altitud:",
        opciones: [
            {
                textoRespuesta: "Aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye",
                isCorrect: true
            },
            {
                textoRespuesta: "Es constante",
                isCorrect: false
            },
            {
                textoRespuesta: "No le afecta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. El viento afecta:",
        opciones: [
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "A la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Al régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Al ángulo de ascenso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "83. En aviones ligeros, los cálculos de despegue se realizan considerando los obstáculos situados en la senda teórica de despegue, y que tengan una altura de:",
        opciones: [
            {
                textoRespuesta: "100 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "50 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "35 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "50 pies",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "84. El ángulo máximo de inclinación en aviones ligeros en el que se puede equilibrar el factor de carga añadiendo motor es de:",
        opciones: [
            {
                textoRespuesta: "15º",
                isCorrect: false
            },
            {
                textoRespuesta: "45º",
                isCorrect: false
            },
            {
                textoRespuesta: "60º",
                isCorrect: true
            },
            {
                textoRespuesta: "90º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. En un aterrizaje, la nivelación y planeo necesario para realizar una toma de contacto en las mejores condiciones se denomina:",
        opciones: [
            {
                textoRespuesta: "Toma de contacto",
                isCorrect: false
            },
            {
                textoRespuesta: "Recogida",
                isCorrect: true
            },
            {
                textoRespuesta: "Carrera de rodaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Vuelo de crucero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. El despegue viento en cola, influye sobre la carrera de despegue:",
        opciones: [
            {
                textoRespuesta: "Acortándola",
                isCorrect: false
            },
            {
                textoRespuesta: "Alargándola",
                isCorrect: true
            },
            {
                textoRespuesta: "No influye",
                isCorrect: false
            },
            {
                textoRespuesta: "No pueden hacerse despegues viento en cola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. La cantidad de grados que nos desvía el viento de una ruta determinada se denomina:",
        opciones: [
            {
                textoRespuesta: "Desvío",
                isCorrect: false
            },
            {
                textoRespuesta: "Declinación",
                isCorrect: false
            },
            {
                textoRespuesta: "Deriva",
                isCorrect: true
            },
            {
                textoRespuesta: "Corrección de deriva",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. Al aproximarse a una cumbre orográfica es aconsejable hacerlo:",
        opciones: [
            {
                textoRespuesta: "Perpendicularmente para atravesarla lo antes posible",
                isCorrect: false
            },
            {
                textoRespuesta: "Con un cierto ángulo para observar las corrientes de aire y su influencia en nuestro ULM, asegurándose la salida",
                isCorrect: true
            },
            {
                textoRespuesta: "Lo suficientemente alto para acelerar con rapidez si hiciera falta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. La trayectoria de despegue con flaps respecto de un despegue sin flaps:",
        opciones: [
            {
                textoRespuesta: "Es más pendiente",
                isCorrect: true
            },
            {
                textoRespuesta: "Es menos pendiente",
                isCorrect: false
            },
            {
                textoRespuesta: "Permanece constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. Que desventajas tiene la Vx respecto a la Vy",
        opciones: [
            {
                textoRespuesta: "Hay muy pocas ocasiones en las que sea realmente necesaria su uso",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay más posibilidades de que se caliente el motor en exceso",
                isCorrect: false
            },
            {
                textoRespuesta: "Al ser más baja, está más cerca de la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "91. Cuando la velocidad es modificada en cualquier forma, tiene lugar el fenómeno conocido por 'aceleración'. ¿Qué unidad se utiliza para medirla?",
        opciones: [
            {
                textoRespuesta: "a) Una unidad estándar llamada 'gravedad'",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Una unidad estándar llamada 'aceleratriz'",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Una unidad estándar llamada 'G'",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"a\" y la \"c\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "92. Una pendiente negativa en la pista:",
        opciones: [
            {
                textoRespuesta: "Acorta la carrera de despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "No influye en la carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Alarga la carrera de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. La resistencia inducida es mayor a velocidades más pequeñas.",
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
        titulo: "94. La aguja indicadora del anemómetro refleja siempre la velocidad de las partículas de aire que rodean el avión.",
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
        titulo: "95. ¿Cuál es el aspecto más importante de la zona trasera de la curva polar de velocidades o segundo régimen de vuelo?",
        opciones: [
            {
                textoRespuesta: "Altitud no puede mantenerse",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión no entra en pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe actuarse sobre el timón de profundidad para picar el avión",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidades inestables",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. Se define como rendimiento aerodinámico del ala:",
        opciones: [
            {
                textoRespuesta: "Al coeficiente entre peso y sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "A la relación entre la distancia recorrida y la altura alcanzada",
                isCorrect: false
            },
            {
                textoRespuesta: "A la relación entre peso y avance",
                isCorrect: false
            },
            {
                textoRespuesta: "A la relación entre sustentación y resistencia al avance",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "97. Si un avión entra en pérdida a 80 km/h IAS a 2000 pies de altitud, a 3500 pies de altitud:",
        opciones: [
            {
                textoRespuesta: "Entrará en pérdida a 65 km/h IAS.",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrará en pérdida a 80 km/h TAS.",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrará en pérdida a 95 km/h IAS.",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrará en pérdida a 80 km/h IAS.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "98. Utilizando la velocidad normal de ascenso:",
        opciones: [
            {
                textoRespuesta: "Se consume más gasolina",
                isCorrect: false
            },
            {
                textoRespuesta: "Se alcanza antes el nivel de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Se reduce el tiempo de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Se calienta el motor excesivamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. Sucede una 'pérdida de alta':",
        opciones: [
            {
                textoRespuesta: "Cuando se da una alta pérdida de velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la velocidad es más alta que la pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando por un cambio brusco de ángulo de ataque a alta velocidad se rompe la capa límite",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando el avión entra en pérdida desde una altura considerable",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Si la densidad del aire aumenta:",
        opciones: [
            {
                textoRespuesta: "Disminuye la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el peso del ultraligero",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la sustentación",
                isCorrect: true
            }
        ]
    }
];

export default preguntas;