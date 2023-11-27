const preguntas = [
    {
        titulo: "1. La velocidad del ULM Con relación al suelo no tiene nada que ver con el movimiento del avión en el aire:",
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
        titulo: "2. ¿Por qué en los aviones de hélice la velocidad de pérdida es menos con el motor a plena potencia que con el motor a ralentí?",
        opciones: [
            {
                textoRespuesta: "Porque el efecto giroscópico de la hélice ayuda más",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque el motor crea una pequeña sustentación que sostiene el avión en la pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "Porque el efecto de barrido de la hélice sobre el ala da una energía extra al aire sobre la misma",
                isCorrect: false
            },
            {
                textoRespuesta: "No se pueden hacer pérdidas con el motor a alta potencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. El movimiento alrededor del eje lateral del avión se denomina:",
        opciones: [
            {
                textoRespuesta: "Alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cabeceo",
                isCorrect: true
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. ¿A qué velocidad es menor la resistencia inducida?",
        opciones: [
            {
                textoRespuesta: "Velocidad de maniobra",
                isCorrect: true
            },
            {
                textoRespuesta: "Mejor ángulo ascensional",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. ¿Qué efecto produce la doble membrana en las alas de un ULM?",
        opciones: [
            {
                textoRespuesta: "Hace más bonito",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la sustentación y velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye la velocidad y aumenta la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "No produce ningún efecto práctico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. La densidad del aire depende sobre todo de:",
        opciones: [
            {
                textoRespuesta: "La humedad y el viento",
                isCorrect: false
            },
            {
                textoRespuesta: "La temperatura y la humedad",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión y la temperatura",
                isCorrect: true
            },
            {
                textoRespuesta: "La altura y la presión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. La pérdida:",
        opciones: [
            {
                textoRespuesta: "Se produce por un excesivo ángulo de ataque independientemente de la velocidad del avión",
                isCorrect: true
            },
            {
                textoRespuesta: "Sólo depende de la velocidad del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce por un excesivo ángulo de ataque solo volando a baja velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce por un ángulo de ataque bajo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Un centro de gravedad muy adelantado es peligroso por:",
        opciones: [
            {
                textoRespuesta: "Poca efectividad del timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor longitud de pista en despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Dificultad al realizar 'motor y al aire'",
                isCorrect: false
            },
            {
                textoRespuesta: "Las tres respuestas anteriores son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "9. La tendencia hacia la izquierda causada por el efecto del par motor es el resultado de:",
        opciones: [
            {
                textoRespuesta: "La rotación en el sentido de las agujas del reloj del motor y la hélice, girando el avión en el sentido contrario a las agujas del reloj",
                isCorrect: true
            },
            {
                textoRespuesta: "La pala de la hélice descendiendo hacia la derecha produce mayor empuje que la ascendente en la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "La fuerza giroscópica aplicada a la rotación de la hélice actúan a 90° del punto de aplicación de la fuerza",
                isCorrect: false
            },
            {
                textoRespuesta: "La tendencia de la corriente de la hélice a girar en espiral",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. ¿A que se llama ENVOLVENTE DE VUELO?",
        opciones: [
            {
                textoRespuesta: "Conjunto de velocidades de una aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo por el que transita la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Actitud en una configuración de vuelo de una aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidades, configuraciones, factores de carga, etc en que es operable una aeronave",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "11. El control de un viraje en un ULM de dos ejes se realiza mediante:",
        opciones: [
            {
                textoRespuesta: "Los alerones, timón de dirección y timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "El timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "El timón de dirección y timón de profundidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Los flaps y el timón de dirección",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. Si la densidad del aire aumenta:",
        opciones: [
            {
                textoRespuesta: "Aumenta el peso del ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el rendimiento aerodinámico de las superficies sustentadoras",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "13. El uso de los flaps produce:",
        opciones: [
            {
                textoRespuesta: "Un aumento de la sustentación y de la resistencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Un aumento de la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Una disminución de la resistencia y un aumento de la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Un aumento de la resistencia y una disminución de la sustentación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. ¿Puede entrar un avión en perdida a la máxima velocidad?",
        opciones: [
            {
                textoRespuesta: "Nunca siempre se entra a baja velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Si, existe la pérdida a alta velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "No, la pérdida a alta velocidad no existe",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo si el avión ha sufrido daños estructurales por exceso de velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. En un viraje de 45º, el factor de carga:",
        opciones: [
            {
                textoRespuesta: "Aumentará menos que en virajes menores",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentará menos que en virajes mayores",
                isCorrect: true
            },
            {
                textoRespuesta: "Permanecerá constante",
                isCorrect: false
            },
            {
                textoRespuesta: "El factor de carga y el grado de viraje no están relacionados",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. ¿Cuál cree usted que tiene el viento de cola?",
        opciones: [
            {
                textoRespuesta: "El a",
                isCorrect: false
            },
            {
                textoRespuesta: "El b",
                isCorrect: true
            },
            {
                textoRespuesta: "Los dos tienen viento cruzado",
                isCorrect: false
            },
            {
                textoRespuesta: "Los dos tienen viento de cola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Si a un perfil se le aumenta el ángulo de ataque, el espesor de la capa límite disminuye.",
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
        titulo: "18. Un avión X, con un determinado peso, entra en pérdida a un ángulo de ataque de 14º. Si en las mismas condiciones meteorológicas aumentamos su peso, la pérdida se produciría…",
        opciones: [
            {
                textoRespuesta: "A un ángulo de ataque menor pero a una velocidad más alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Al mismo ángulo de ataque y a la misma velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "A un ángulo de ataque mayor. No depende de la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "19. Un excesivo ángulo de ataque en el que el flujo de aire se desprende de la superficie alar y puede ocasionar una pérdida:",
        opciones: [
            {
                textoRespuesta: "No es mayor a 15 grados",
                isCorrect: false
            },
            {
                textoRespuesta: "Es siempre entre 15 y 20 grados",
                isCorrect: false
            },
            {
                textoRespuesta: "Suele ser mayor de 20 grados",
                isCorrect: true
            },
            {
                textoRespuesta: "No importa el ángulo de ataque, para entrar en pérdida sólo depende la velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. En la entrada en 'pérdida' el factor de carga puede llegar a ser nulo:",
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
        titulo: "21. Cuando se cumple que la CAS es igual a la TAS:",
        opciones: [
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "A nivel del mar, en condiciones ISA",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando volamos con 1013",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. El viento en calma, en cara o en cola no afecta a las velocidades indicadas, ya que el anemómetro indica velocidades relativas del avión en la masa de aire:",
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
        titulo: "23. Un viento de cola:",
        opciones: [
            {
                textoRespuesta: "Disminuye el ángulo y el régimen de ascenso",
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
                textoRespuesta: "Aumenta el ángulo de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Definición de Vy",
        opciones: [
            {
                textoRespuesta: "Velocidad de máximo régimen de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad de máximo alcance",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de máxima autonomía",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de máximo ángulo de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. Cuando utilizamos flaps, la carrera de despegue:",
        opciones: [
            {
                textoRespuesta: "Disminuye",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Permanece constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. El timón de dirección:",
        opciones: [
            {
                textoRespuesta: "Se utiliza para los movimientos de cabeceo del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Se utiliza para los movimientos alrededor del eje longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Se utiliza para los movimientos de guiñada del avión",
                isCorrect: true
            },
            {
                textoRespuesta: "Se utiliza para los movimientos de alabeo del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Volar a 35 NM7H, quiere decir que llevamos una velocidad de:",
        opciones: [
            {
                textoRespuesta: "3.500 Km./h.",
                isCorrect: false
            },
            {
                textoRespuesta: "64,85 Km./h.",
                isCorrect: true
            },
            {
                textoRespuesta: "72,5 Km./h.",
                isCorrect: false
            },
            {
                textoRespuesta: "59 Km./h.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. La línea roja en un anemómetro indica:",
        opciones: [
            {
                textoRespuesta: "VNE",
                isCorrect: true
            },
            {
                textoRespuesta: "VNO",
                isCorrect: false
            },
            {
                textoRespuesta: "Vs1",
                isCorrect: false
            },
            {
                textoRespuesta: "Vs2",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. Con la velocidad de régimen de ascenso o Vy, obtenemos:",
        opciones: [
            {
                textoRespuesta: "Mayor altura en menor tiempo",
                isCorrect: true
            },
            {
                textoRespuesta: "La refrigeración óptima del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor altura en mayor tiempo",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor altura en menor distancia horizontal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. La presión atmosférica:",
        opciones: [
            {
                textoRespuesta: "No varía con la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta con la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Es constante con la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye con la altura",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. El avión cuando está bajo el efecto suelo:",
        opciones: [
            {
                textoRespuesta: "Mayor sustentación y mayor resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor sustentación y menor resistencia inducida",
                isCorrect: true
            },
            {
                textoRespuesta: "Mayor sustentación y menor resistencia parásita",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor sustentación y menor resistencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Durante la nivelación del avión después de una pérdida, suele darse un factor de carga:",
        opciones: [
            {
                textoRespuesta: "Positivo, ya que se tira de la palanca",
                isCorrect: true
            },
            {
                textoRespuesta: "Negativo, ya que se tira fuertemente de la palanca",
                isCorrect: false
            },
            {
                textoRespuesta: "No influye la nivelación de la pérdida en el factor de carga",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Un avión será neutro si, separado de su posición inicial:",
        opciones: [
            {
                textoRespuesta: "Tiende inicialmente a recobrada",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiende a alejarse de ella cada vez más",
                isCorrect: false
            },
            {
                textoRespuesta: "Permanece en la nueva posición",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. Como se suele denominar la velocidad que nos proporciona un máximo ángulo de ascenso:",
        opciones: [
            {
                textoRespuesta: "Vm",
                isCorrect: false
            },
            {
                textoRespuesta: "Vy",
                isCorrect: false
            },
            {
                textoRespuesta: "Vx",
                isCorrect: true
            },
            {
                textoRespuesta: "Va",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. Las mejores prestaciones en un avión se consiguen:",
        opciones: [
            {
                textoRespuesta: "Un día de verano a nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno a gran altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno a nivel del mar",
                isCorrect: true
            },
            {
                textoRespuesta: "Un día de verano a gran altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. El Piloto debe conocer cómo está certificado el ULM que va a pilotar y no tratar de obtener un comportamiento para el que no ha sido concebido:",
        opciones: [
            {
                textoRespuesta: "Falso",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el propietario el único responsable de la certificación del avión Falso",
                isCorrect: false
            },
            {
                textoRespuesta: "Es responsabilidad exclusiva del jefe de vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cierto",
                isCorrect: true
            },
            {
                textoRespuesta: "Es responsabilidad de la empresa operadora o titular de la aeronave",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. Cuando el avión esta en vuelo recto y nivelado, la sustentación tiene la misma magnitud que la fuerza:",
        opciones: [
            {
                textoRespuesta: "De gravedad",
                isCorrect: true
            },
            {
                textoRespuesta: "De empuje",
                isCorrect: false
            },
            {
                textoRespuesta: "Centrifuga",
                isCorrect: false
            },
            {
                textoRespuesta: "De resistencia estructural",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Coeficiente de planeo es.",
        opciones: [
            {
                textoRespuesta: "La relación entre la distancia vertical recorrida y la altura perdida en el mismo tiempo",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la distancia horizontal recorrida en línea recta y la altura perdida en el mismo tiempo",
                isCorrect: true
            },
            {
                textoRespuesta: "La relación entre la distancia horizontal recorrida en línea recta y el tiempo empleado en alcanzarla",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Cuando un avión está volando en una zona de bajas presiones, su altitud real con relación a la indicada en el altímetro es:",
        opciones: [
            {
                textoRespuesta: "Más alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual",
                isCorrect: false
            },
            {
                textoRespuesta: "Más baja",
                isCorrect: true
            },
            {
                textoRespuesta: "Si el altímetro es de precisión no tiene variación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. A mayor altitud de densidad en una pista:",
        opciones: [
            {
                textoRespuesta: "Mayor carrera de despegue y mayor régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor carrera de despegue y menor ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Menor carrera de despegue y mayor régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor carrera de despegue y menor régimen de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. Un aumento del espesor del ala disminuye el coeficiente de sustentación máxima, así como el ángulo de 'pérdida'.",
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
        titulo: "42. Si la presión de una partícula disminuye, su velocidad:",
        opciones: [
            {
                textoRespuesta: "Aumenta",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye",
                isCorrect: false
            },
            {
                textoRespuesta: "Permanece constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. La altitud de presión coincide con la altitud real para una altitud determinada.",
        opciones: [
            {
                textoRespuesta: "Siempre",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la temperatura real coincide con la ISA",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando la temperatura real no coincide con la ISA",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. Una fuerte estabilidad positiva en el avión:",
        opciones: [
            {
                textoRespuesta: "Permite una más fácil maniobrabilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Permite un mejor ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Hace cabecear más al avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Produce mayor dificultad en las maniobras",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. Un viento de frente constante:",
        opciones: [
            {
                textoRespuesta: "Aumento del régimen de descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el ángulo de trayectoria de vuelo de descenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumento de la distancia de descenso respecto al suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumento del ángulo de descenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. En una pérdida, el factor carga se reduce, pudiendo incluso desaparecer.",
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
        titulo: "47. Toda partícula de aire está dotada de:",
        opciones: [
            {
                textoRespuesta: "Presión y velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Densidad y velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Densidad y altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión y altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. Con relación a la temperatura:",
        opciones: [
            {
                textoRespuesta: "Si un día ésta es mayor, el avión volará realmente más alto de lo que indica el altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Si un día ésta es menor, el avión volará realmente más bajo de lo que indica el altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Ambas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. La velocidad de aproximación de un avión",
        opciones: [
            {
                textoRespuesta: "Se trata de una velocidad indicada (IAS) y será disminuida proporcionalmente según el aumento de la temperatura, la disminución de la densidad, etc.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se trata de una velocidad indicada (IAS) y será aumentada proporcionalmente según el aumento de la temperatura, la disminución de la densidad, etc.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se trata de una velocidad verdadera (TAS) y será aumentada proporcionalmente según el aumento de la temperatura, la disminución de la densidad, etc.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se trata de velocidad indicada (IAS) y será siempre la misma independientemente de la elevación de la temperatura, de la pista, etc.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. El centro aerodinámico de un avión puede variar dentro de unos límites sin que las actuaciones del avión se vean comprometidas:",
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
        titulo: "51. Una mayor temperatura del aire exterior:",
        opciones: [
            {
                textoRespuesta: "Disminuye el ángulo de ascenso pero aumenta el régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "No tiene efectos apreciables sobre las prestaciones del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el ángulo de ascenso pero reduce el régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Reduce el régimen de ascenso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "52. Los flaps disminuyen la resistencia:",
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
        titulo: "53. Un aumento del peso del ULM:",
        opciones: [
            {
                textoRespuesta: "No afectará a la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Hará que entre en perdida a una velocidad indicada mayor, y a menor ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Hará que entre en perdida a una velocidad indicada menor, y a menor ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Hará que entre en perdida a una velocidad indicada mayor, pero el ángulo de ataque será el mismo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "54. La velocidad de despegue aumenta con la altitud.",
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
        titulo: "55. Si el peso máximo en el despegue de un ULM es de 200 Kg, y su superficie alar es de 25 m. cuadrado:",
        opciones: [
            {
                textoRespuesta: "Su carga alar es de 8 Kg/m. cuadrados",
                isCorrect: true
            },
            {
                textoRespuesta: "Su carga alar es de 15 Kg/m. cuadrados",
                isCorrect: false
            },
            {
                textoRespuesta: "Su carga alar es de 2 Kg/m. cuadrados",
                isCorrect: false
            },
            {
                textoRespuesta: "Su carga alar es de 20 Kg/m. cuadrados",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. La estabilidad longitudinal de un avión, es la estabilidad en el eje:",
        opciones: [
            {
                textoRespuesta: "Lateral",
                isCorrect: true
            },
            {
                textoRespuesta: "Vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Longitudinal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. El alargamiento se hace menos importante con la velocidad, ya que la resistencia inducida aumenta.",
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
        titulo: "58. El centro de gravedad es un punto imaginario en el que se concentran las fuerzas aerodinámicas del avión.",
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
        titulo: "59. La torsión alar permite.",
        opciones: [
            {
                textoRespuesta: "Más estabilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Más sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Mejor trepada",
                isCorrect: false
            },
            {
                textoRespuesta: "Una pérdida más suave",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "60. Un aparato está bien reglado cuando su velocidad de compensación (velocidad correspondiente en aire en calma a un esfuerzo nulo sobre los mandos).",
        opciones: [
            {
                textoRespuesta: "Corresponde a la VNE",
                isCorrect: false
            },
            {
                textoRespuesta: "Corresponde a la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Corresponde a la velocidad de crucero",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. La velocidad de mejor régimen ascensional, permite alcanzar en el menor tiempo posible:",
        opciones: [
            {
                textoRespuesta: "Mayor altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Mayor velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor alcance",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. El avisador de pérdida comienza a funcionar:",
        opciones: [
            {
                textoRespuesta: "Unos segundos antes de que esta se produzca",
                isCorrect: false
            },
            {
                textoRespuesta: "Unos nudos antes de que esta se produzca",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre que el morro esté a un número determinado de grados sobre el horizonte",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. La posición del centro de gravedad se calcula a lo largo del eje:",
        opciones: [
            {
                textoRespuesta: "Lateral",
                isCorrect: false
            },
            {
                textoRespuesta: "Horizontal",
                isCorrect: false
            },
            {
                textoRespuesta: "Longitudinal",
                isCorrect: true
            },
            {
                textoRespuesta: "Vertical",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Los gradientes de viento por obstáculos varían dependiendo del tipo de obstáculos, es decir: volando cerca del suelo, detrás de obstáculos sólidos, podemos esperar:",
        opciones: [
            {
                textoRespuesta: "Vientos fuertes",
                isCorrect: false
            },
            {
                textoRespuesta: "Vientos turbulentos",
                isCorrect: true
            },
            {
                textoRespuesta: "Vientos débiles",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento en calma",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. La resistencia parásita creada por el tren de aterrizaje volando a 70 Km/h:",
        opciones: [
            {
                textoRespuesta: "Se duplica al volar a 140 Km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se triplica al volar a 140 Km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se cuatriplica al volar a 140 Km/h.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "66. ¿Qué tipo de pista proporciona una carrera más corta de despegue?",
        opciones: [
            {
                textoRespuesta: "De hierba corta",
                isCorrect: false
            },
            {
                textoRespuesta: "De hierba alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Pavimentada",
                isCorrect: true
            },
            {
                textoRespuesta: "De tierra apisonada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. ¿Dónde hará falta más recorrido de despegue?",
        opciones: [
            {
                textoRespuesta: "En un campo a nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "En un campo a 1.000 metros de altura",
                isCorrect: true
            },
            {
                textoRespuesta: "En ambos necesitaremos el mismo recorrido de pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Dependerá de la potencia del motor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. En final si el punto de contacto desciende con relación a nuestra trayectoria:",
        opciones: [
            {
                textoRespuesta: "Nos estamos quedando cortos",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos estamos pasando de largo",
                isCorrect: true
            },
            {
                textoRespuesta: "Seguimos la senda de aterrizaje correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. En 'pérdida' el sonido del aire aumenta:",
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
        titulo: "70. El balanceo de un ala producido por el resbalamiento o guiñada en un ULM dos ejes, se denomina:",
        opciones: [
            {
                textoRespuesta: "Efecto torsión",
                isCorrect: false
            },
            {
                textoRespuesta: "Guiñada doble",
                isCorrect: false
            },
            {
                textoRespuesta: "Efecto alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Efecto diedro",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. El centro de gravedad es:",
        opciones: [
            {
                textoRespuesta: "El punto donde se aplica la resultante de las fuerzas verticales del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto donde se aplica la fuerza aerodinámica",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto donde el avión tiende a encabritar",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto de intersección de los tres ejes de giro del avión donde se aplica la fuerza de la gravedad o peso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "72. La velocidad de mejor ángulo de ascenso permite ascender lo más alto posible en:",
        opciones: [
            {
                textoRespuesta: "El menor tiempo",
                isCorrect: false
            },
            {
                textoRespuesta: "La menor velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "La mínima potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "El mínimo recorrido horizontal",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "73. Si aumentamos el peso del ULM:",
        opciones: [
            {
                textoRespuesta: "Disminuye el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye el régimen de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. ¿Qué significado tiene en un avión, un coeficiente de planeo 7:1?",
        opciones: [
            {
                textoRespuesta: "Desciende 7 metros en un segundo",
                isCorrect: false
            },
            {
                textoRespuesta: "Recorre 7 metros en un segundo",
                isCorrect: false
            },
            {
                textoRespuesta: "Recorre 7 metros en horizontal por cada 1 metro de descenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Recorre 1 metro en horizontal por cada 7 metros de descenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. Son factores que influyen en la sustentación:",
        opciones: [
            {
                textoRespuesta: "La forma del perfil, el ángulo de ataque y la superficie de las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "La densidad y la velocidad del aire relativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las anteriores",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. La estabilidad longitudinal es:",
        opciones: [
            {
                textoRespuesta: "a) La capacidad del avión para recobrar una posición determinada tras una perturbación",
                isCorrect: true
            },
            {
                textoRespuesta: "b) La capacidad del avión para mantener el centro de gravedad dentro de unos límites",
                isCorrect: false
            },
            {
                textoRespuesta: "c) \"a\" y \"b\" son ciertas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. La turbulencia originada por la estela de un avión:",
        opciones: [
            {
                textoRespuesta: "Es inversamente proporcional la superficie del ala del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Es siempre igual en un avión determinado",
                isCorrect: false
            },
            {
                textoRespuesta: "Es mayor a menor peso del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Es proporcional al peso del avión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "78. Un viento de frente:",
        opciones: [
            {
                textoRespuesta: "Aumenta el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la velocidad de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el ángulo de trayectoria de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Acortará la duración del ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. La disminución drástica del ruido del viento y la posición del morro más alta de lo normal son síntomas de una 'pérdida':",
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
        titulo: "80. La capacidad ascensional del avión en el despegue, puede aumentarse:",
        opciones: [
            {
                textoRespuesta: "Cargando más combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambiando el compensador",
                isCorrect: false
            },
            {
                textoRespuesta: "Iniciando un viraje",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyendo peso en el despegue",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "81. En un día con igual temperatura que la indicada en un día ISA:",
        opciones: [
            {
                textoRespuesta: "El avión volará más alto de lo que indica el altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión volará más bajo de lo que indica el altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión volará a la misma altitud que indica el altímetro",
                isCorrect: true
            },
            {
                textoRespuesta: "La temperatura no afecta a la altitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Que hay que tener en cuenta cuando el avión está en efecto suelo:",
        opciones: [
            {
                textoRespuesta: "Se crean problemas de estela turbulenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "Podemos entrar en pérdida antes",
                isCorrect: false
            },
            {
                textoRespuesta: "La resistencia inducida disminuye, por tanto, cualquier exceso de velocidad en la recogida puede ocasionar que el avión flote en exceso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "83. Los ULM con mando a dos ejes no poseen ningún mando especial para el control de la guiñada.",
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
        titulo: "84. En la parte interior de los acantilados muy pronunciados puede encontrarse:",
        opciones: [
            {
                textoRespuesta: "Mucha sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Mucha ascendencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Zonas de calma junto con zonas de turbulencia fuerte",
                isCorrect: true
            },
            {
                textoRespuesta: "Variaciones de temperatura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. El efecto tierra o suelo:",
        opciones: [
            {
                textoRespuesta: "Aumenta la sustentación y disminuye la resistencia inducida",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye la resistencia inducida y la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la sustentación y la resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "La resistencia inducida y la sustentación no varían",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. El centro de gravedad en posición trasera es menos peligroso que en posición delantera:",
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
        titulo: "87. El factor de carga se vuelve negativo en 'pérdida' en el momento de:",
        opciones: [
            {
                textoRespuesta: "El ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "El descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "La recuperación",
                isCorrect: true
            },
            {
                textoRespuesta: "Nivelar el avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. El contenido exacto de la mezcla de gases en el aire varía con la altura y la latitud.",
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
        titulo: "89. La máxima velocidad relativa indicada de un avión con motor alternativo en vuelo nivelado se alcanza:",
        opciones: [
            {
                textoRespuesta: "A la menor cota posible",
                isCorrect: true
            },
            {
                textoRespuesta: "A la altitud de crucero óptima",
                isCorrect: false
            },
            {
                textoRespuesta: "En el techo operativo",
                isCorrect: false
            },
            {
                textoRespuesta: "En el techo práctico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. Si el centro de gravedad estuviera delante del centro aerodinámico, el avión tendría:",
        opciones: [
            {
                textoRespuesta: "Un momento de encabritado",
                isCorrect: false
            },
            {
                textoRespuesta: "Un momento de picado",
                isCorrect: true
            },
            {
                textoRespuesta: "Una estabilidad longitudinal neutra",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. Si la temperatura de un Campo de Vuelo aumenta considerablemente, la carrera de despegue será:",
        opciones: [
            {
                textoRespuesta: "Menor",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor",
                isCorrect: true
            },
            {
                textoRespuesta: "No afecta la temperatura al despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. La velocidad de pérdida se incrementa cuando se cargue al avión con:",
        opciones: [
            {
                textoRespuesta: "Un peso total menor y con el centro de gravedad retrasado",
                isCorrect: false
            },
            {
                textoRespuesta: "Un peso total mayor y con el centro de gravedad adelantado",
                isCorrect: false
            },
            {
                textoRespuesta: "Un peso total menor y con el centro de gravedad adelantado",
                isCorrect: false
            },
            {
                textoRespuesta: "Un peso total mayor y con el centro de gravedad retrasado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "93. El valor de la resistencia parásita depende de la velocidad a que se vuele:",
        opciones: [
            {
                textoRespuesta: "No es cierto, no tiene nada que ver con la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "A mayor velocidad, mayor resistencia",
                isCorrect: true
            },
            {
                textoRespuesta: "A menor velocidad, mayor resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "A mayor velocidad, menor resistencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. El rendimiento de un avión:",
        opciones: [
            {
                textoRespuesta: "Disminuye con la presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Es siempre constante porque depende de la potencia del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta con la presión",
                isCorrect: true
            },
            {
                textoRespuesta: "La presión no influye en la eficiencia del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. Para ganar altura con una térmica debemos virar en sentido contrario a ella.",
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
        titulo: "96. Un aumento del factor de carga (n) puede llegar a romper la estructura del avión pero anteriormente a esa situación límite provoca también:",
        opciones: [
            {
                textoRespuesta: "Aumento de la velocidad de pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminución de la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Dificulta el descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "No provoca nada de estas cosas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Despegar con viento de cola es una práctica:",
        opciones: [
            {
                textoRespuesta: "Recomendada",
                isCorrect: false
            },
            {
                textoRespuesta: "No recomendada",
                isCorrect: true
            },
            {
                textoRespuesta: "Prohibida",
                isCorrect: false
            },
            {
                textoRespuesta: "Habitual",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Altitud:",
        opciones: [
            {
                textoRespuesta: "a) Es la distancia vertical entre un nivel y el nivel medio del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Es la distancia vertical entre un punto y el nivel medio del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Las respuestas \"a\" y \"b\" son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "d) Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. Si tenemos pista 09­-27 y un viento 240º, ¿qué pista utilizaremos?",
        opciones: [
            {
                textoRespuesta: "La 27 para el aterrizaje, la 09 para el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "La 27 para despegues y aterrizajes",
                isCorrect: true
            },
            {
                textoRespuesta: "La 09 para despegues y aterrizajes",
                isCorrect: false
            },
            {
                textoRespuesta: "La 09 para el aterrizaje, la 27 para el despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Los flaps calados en posición de despegue:",
        opciones: [
            {
                textoRespuesta: "Disminuyen la carrera de despegue y aumentan el ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Se calan a tope para el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyen la carrera de despegue y el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentan la carrera de despegue y el ángulo de ascenso",
                isCorrect: false
            }
        ]
    }
];
export default preguntas;