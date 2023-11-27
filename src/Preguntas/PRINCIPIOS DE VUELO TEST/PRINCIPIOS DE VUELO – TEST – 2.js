const preguntas = [
    {
        titulo: "1. Partiendo de una velocidad constante igual o superior a Vy en vuelo recto y nivelado, para incrementarla y mantener el vuelo recto y nivelado, debemos:",
        opciones: [
            {
                textoRespuesta: "Incrementar la potencia solamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Picar el ULM solamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Encabritar el ULM para ganar sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Aplicar más potencia y ajustar una posición de morro más bajo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "2. Los límites máximo y mínimo de uso de flaps del avión se encuentran marcados en el anemómetro con un arco de color:",
        opciones: [
            {
                textoRespuesta: "Amarillo",
                isCorrect: false
            },
            {
                textoRespuesta: "Blanco",
                isCorrect: true
            },
            {
                textoRespuesta: "Rojo",
                isCorrect: false
            },
            {
                textoRespuesta: "Verde",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. En un viraje coordinado, a nivel constante, el factor de carga es el resultado de:",
        opciones: [
            {
                textoRespuesta: "Velocidad y peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Fuerza centrífuga y sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Fuerza centrífuga y gravedad",
                isCorrect: true
            },
            {
                textoRespuesta: "Sustentación y tracción",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. ¿Por qué se relaciona la velocidad con la pérdida?",
        opciones: [
            {
                textoRespuesta: "Porque para un peso dado y una configuración dada, un ángulo de ataque se corresponderá con una velocidad concreta, y viceversa",
                isCorrect: true
            },
            {
                textoRespuesta: "Porque por encima de la velocidad de pérdida podremos hacer cualquier maniobra sin riesgo a provocarla",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque el principal indicador de ángulo de ataque que tenemos a bordo es el variómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque los aviones siempre entrar en pérdida a la misma velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Las fuerzas que actúan sobre un avión en vuelo son:",
        opciones: [
            {
                textoRespuesta: "Peso, velocidad, resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Peso, sustentación, densidad del aire, velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Peso, sustentación, tracción, resistencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Peso, elevación, resistencia, velocidad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Al factor carga puede llamarse también:",
        opciones: [
            {
                textoRespuesta: "C.",
                isCorrect: false
            },
            {
                textoRespuesta: "G.",
                isCorrect: true
            },
            {
                textoRespuesta: "C.F.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las tres respuesta es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Los movimientos efectuados por el avión alrededor de sus tres ejes se llaman respectivamente",
        opciones: [
            {
                textoRespuesta: "Guiñada-Transversal Cabeceo-Longitudinal Picado-Vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Cabeceo-Longitudinal Alabeo-Transversal Guiñada-Vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Cabeceo-Transversal Alabeo-Longitudinal Guiñada-Vertical",
                isCorrect: true
            },
            {
                textoRespuesta: "Cabeceo-Ventral Viraje-Dorsal Guiñada-Longitudinal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. ¿Qué es el viento relativo?:",
        opciones: [
            {
                textoRespuesta: "El que tenemos en cara y en dirección del viento",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento paralelo al intradós",
                isCorrect: false
            },
            {
                textoRespuesta: "La media del viento reinante",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento paralelo y en sentido contrario a la trayectoria del vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "9. El timón de dirección ayuda a controlar el avión en su movimiento en torno a su eje",
        opciones: [
            {
                textoRespuesta: "Del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Transversal",
                isCorrect: false
            },
            {
                textoRespuesta: "Longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Vertical",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "10. La pérdida de sustentación debida a un ángulo de ataque excesivo, se producirá siempre que el perfil sea colocado en esa posición crítica, independientemente de:",
        opciones: [
            {
                textoRespuesta: "Todas las anteriores",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad indicada",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "La actitud de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. La resistencia se pinta y representa en un perfil aerodinámico en la misma dirección y sentido que el viento relativo. ¿Cuál es la correcta?",
        opciones: [
            {
                textoRespuesta: "La resistencia es perpendicular a la cuerda del perfil",
                isCorrect: false
            },
            {
                textoRespuesta: "La resistencia es perpendicular a la sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "La resistencia es perpendicular al eje longitudinal del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Las tres respuestas anteriores son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. La reacción inmediata del avión al tirar de la palanca de mando al lado contrario del viraje cuando entra en pérdida es:",
        opciones: [
            {
                textoRespuesta: "Da igual a qué lado movamos la palanca cuando entra en pérdida, lo importante es mantener la calma",
                isCorrect: false
            },
            {
                textoRespuesta: "La nivelación y salida de la pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo si se tira al lado contrario con suavidad se sale de la pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión entraría en barrena",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "13. La resistencia parásita:",
        opciones: [
            {
                textoRespuesta: "a) Depende sobre  todo del diseño del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Depende sólo de la velocidad alcanzada",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Aumenta considerablemente al aumentar la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"c\"",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. El factor de carga (n) es la RELACIÓN de dos fuerzas que actúan sobre el avión, ¿cómo se llaman?",
        opciones: [
            {
                textoRespuesta: "Fuerza de gravedad y tracción",
                isCorrect: false
            },
            {
                textoRespuesta: "Fuerza centrípeta y viento relativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación y peso",
                isCorrect: true
            },
            {
                textoRespuesta: "Fuerza de gravedad y fuerza aerodinámica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. El desplazamiento del avión sobre su eje lateral se denomina:",
        opciones: [
            {
                textoRespuesta: "Guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "Cabeceo",
                isCorrect: true
            },
            {
                textoRespuesta: "Alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Balanceo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. A más velocidad en vuelo:",
        opciones: [
            {
                textoRespuesta: "Mayor resistencia parásita del ULM",
                isCorrect: true
            },
            {
                textoRespuesta: "La resistencia no se ve influida por la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "Tanto la resistencia parásita como la inducida aumentan",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. La resistencia inducida:",
        opciones: [
            {
                textoRespuesta: "No aparece por debajo de la velocidad del sonido",
                isCorrect: false
            },
            {
                textoRespuesta: "No existe",
                isCorrect: false
            },
            {
                textoRespuesta: "Mejora el rendimiento del U.L.M.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es consecuencia de la generación de sustentación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "18. A la incapacidad del ala para producir la sustentación necesaria, debido a un ángulo de ataque excesivo se le denomina:",
        opciones: [
            {
                textoRespuesta: "Sustentación máxima",
                isCorrect: false
            },
            {
                textoRespuesta: "Pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "Desprendimiento",
                isCorrect: false
            },
            {
                textoRespuesta: "Burbuja",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Una definición de ángulo de ataque podría ser: ángulo formado por la cuerda aerodinámica y la superficie horizontal",
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
        titulo: "20. Observamos que nuestra trayectoria pasará justo pocos metros por debajo de un buitre. Lo mejor es no alterar nuestro rumbo. Así hay más posibilidades de que el animal no se percate de nuestra presencia.",
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
        titulo: "21. La componente vertical de la fuerza aerodinámica que genera la corriente de aire sobre un perfil alar se denomina:",
        opciones: [
            {
                textoRespuesta: "Sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "Resistencia parásita",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. La resistencia total es la suma de:",
        opciones: [
            {
                textoRespuesta: "Laminar y turbulenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Inducida y parásita",
                isCorrect: true
            },
            {
                textoRespuesta: "Inducida y turbulenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Parásita y turbulenta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. La dirección seguida por el perfil aerodinámico durante el desplazamiento a través del aire, se denomina:",
        opciones: [
            {
                textoRespuesta: "Ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de incidencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Trayectoria de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Viento relativo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. La posición del centro de presiones está normalmente entre el 10% y el 75% de la cuerda aerodinámica",
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
        titulo: "25. Un avión estable",
        opciones: [
            {
                textoRespuesta: "Entra en pérdida más difícilmente",
                isCorrect: false
            },
            {
                textoRespuesta: "Es más difícil meterlo en el hangar",
                isCorrect: false
            },
            {
                textoRespuesta: "Requiere menos esfuerzo para su control",
                isCorrect: true
            },
            {
                textoRespuesta: "No entra en barrena",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. La rotación sobre el eje longitudinal se llama",
        opciones: [
            {
                textoRespuesta: "Alabeo",
                isCorrect: true
            },
            {
                textoRespuesta: "Picado",
                isCorrect: false
            },
            {
                textoRespuesta: "Cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Si utilizamos flaps en la aproximación al aterrizaje, obtendremos:",
        opciones: [
            {
                textoRespuesta: "Una velocidad de aproximación menor, una senda menos pronunciada y una carrera de aterrizaje mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Una velocidad de aproximación mayor, una senda menos pronunciada y una carrera de aterrizaje mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Una velocidad de aproximación menor, una senda más pronunciada y una carrera de aterrizaje menor",
                isCorrect: true
            },
            {
                textoRespuesta: "Una velocidad de aproximación mayor, una senda más pronunciada y una carrera de aterrizaje menor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. ¿Qué es el viento relativo?",
        opciones: [
            {
                textoRespuesta: "El que tenemos en cara y en dirección contraria a la trayectoria del avión",
                isCorrect: true
            },
            {
                textoRespuesta: "El viento medio del día",
                isCorrect: false
            },
            {
                textoRespuesta: "Por convenio el que figura en el último METAR",
                isCorrect: false
            },
            {
                textoRespuesta: "El que tenemos de espalda y en dirección favorable al curso del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. Definición de altitud.",
        opciones: [
            {
                textoRespuesta: "Altura de un cuerpo en posición vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Distancia vertical entre un nivel, punto u objeto considerado como punto, y el nivel medio del mar",
                isCorrect: true
            },
            {
                textoRespuesta: "Distancia vertical entre el valle de una montaña y la cima",
                isCorrect: false
            },
            {
                textoRespuesta: "Distancia vertical que recorre un ULM al despegar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Una disminución de la velocidad, hará que tengamos:",
        opciones: [
            {
                textoRespuesta: "Mayor resistencia inducida y parásita",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor resistencia inducida y menor resistencia parásita",
                isCorrect: true
            },
            {
                textoRespuesta: "Menor resistencia inducida y mayor resistencia parásita",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor resistencia inducida y parásita",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. La pérdida se produce siempre que el perfil aerodinámico sea colocado en una posición excesiva de ángulo de ataque, independientemente de la velocidad relativa.",
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
        titulo: "32. La situación del centro aerodinámico se expresa en:",
        opciones: [
            {
                textoRespuesta: "En pulgadas",
                isCorrect: false
            },
            {
                textoRespuesta: "En metros",
                isCorrect: false
            },
            {
                textoRespuesta: "En centímetros",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "33. El peso del avión se contrarresta con una fuerza llamada:",
        opciones: [
            {
                textoRespuesta: "Tracción",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. Normalmente:",
        opciones: [
            {
                textoRespuesta: "El peso es una fuerza que actúa en la misma dirección que el viento relativo",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento relativo es una fuerza que actúa en la misma dirección que la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección del vuelo posee la misma dirección que la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso es una fuerza que actúa en la misma dirección que la sustentación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. El movimiento del avión sobre el eje longitudinal se llama:",
        opciones: [
            {
                textoRespuesta: "Cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "Alabeo",
                isCorrect: true
            },
            {
                textoRespuesta: "No tiene nombre específico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. En un viraje de 90 grados de inclinación se produce el fenómeno de inversión de mandos, dirección se convierte en profundidad y profundidad en dirección.",
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
        titulo: "37. El timón de profundidad nos permite controlar el avión en el eje:",
        opciones: [
            {
                textoRespuesta: "Vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Lateral",
                isCorrect: true
            },
            {
                textoRespuesta: "Longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. El efecto que produce el movimiento del timón de profundidad hacia arriba se llama:",
        opciones: [
            {
                textoRespuesta: "Alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Picado",
                isCorrect: false
            },
            {
                textoRespuesta: "Encabritado",
                isCorrect: true
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. En un viraje, el factor de carga aumenta debido a:",
        opciones: [
            {
                textoRespuesta: "Composición de una resultante entre las fuerzas del peso y centrípeta",
                isCorrect: true
            },
            {
                textoRespuesta: "El factor de carga será constante sin turbulencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene tendencia a caer",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el avión entra en un derrape",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. El 'ángulo de ataque' es el formado por la cuerda aerodinámica y:",
        opciones: [
            {
                textoRespuesta: "El eje del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "El timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección del viento relativo",
                isCorrect: true
            },
            {
                textoRespuesta: "El fuselaje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. ¿Se puede entrar en pérdida con el morro horizontal?",
        opciones: [
            {
                textoRespuesta: "Sí",
                isCorrect: true
            },
            {
                textoRespuesta: "Depende del viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo si los flaps están retraídos",
                isCorrect: false
            },
            {
                textoRespuesta: "No",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. En caso de viento cruzado, en el despegue, se aplicará",
        opciones: [
            {
                textoRespuesta: "Palanca al viento y pie suave al viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Palanca al pecho, y pie contrario al viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Palanca al viento, y pie contrario",
                isCorrect: true
            },
            {
                textoRespuesta: "Palanca al lado opuesto del viento, y pie al viento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. ¿A qué velocidad debe volar un avión para entrar en pérdida?",
        opciones: [
            {
                textoRespuesta: "A velocidad de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "A la velocidad de mejor ángulo de subida",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión puede entrar en pérdida a cualquier velocidad cuando se excede el ángulo de ataque crítico",
                isCorrect: true
            },
            {
                textoRespuesta: "A 25 NM.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. El borde de ataque es:",
        opciones: [
            {
                textoRespuesta: "La parte trasera del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "La parte frontal o delantera de un perfil alar",
                isCorrect: true
            },
            {
                textoRespuesta: "El morro del ultraligero",
                isCorrect: false
            },
            {
                textoRespuesta: "La parte delantera del motor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. Un centro de gravedad demasiado atrasado",
        opciones: [
            {
                textoRespuesta: "Aumenta la tendencia al picado",
                isCorrect: false
            },
            {
                textoRespuesta: "Dificulta la entrada en pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Crea tendencia al aumento del ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. Según el teorema de Bemouilli:",
        opciones: [
            {
                textoRespuesta: "Presión + velocidad = constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión dinámica + presión estática = constante",
                isCorrect: true
            },
            {
                textoRespuesta: "Presión estática + presión total = constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad + altitud = constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. La altitud de densidad se define como:",
        opciones: [
            {
                textoRespuesta: "La densidad del aire en una altitud determinada",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud que correspondería en la ISA a una determinada densidad del aire",
                isCorrect: true
            },
            {
                textoRespuesta: "La densidad del aire al nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "La diferencia de altitud entre dos niveles de distinta densidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. La resistencia es la fuerza generada por un objeto paralelo al viento relativo.Para su estudio se divide en dos tipos que son:",
        opciones: [
            {
                textoRespuesta: "Inducida y resultante",
                isCorrect: false
            },
            {
                textoRespuesta: "Inducida y parásita",
                isCorrect: true
            },
            {
                textoRespuesta: "Parásita y de fricción",
                isCorrect: false
            },
            {
                textoRespuesta: "Flujo y reflujo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. El centro aerodinámico o de presiones es el punto donde se aplica la fuerza de sustentación.",
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
        titulo: "50. El principio básico del teorema de Bernouilli nos dice que para una partícula de aire",
        opciones: [
            {
                textoRespuesta: "Temperatura más velocidad igual a constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión por velocidad es constante",
                isCorrect: true
            },
            {
                textoRespuesta: "Presión mas volumen es constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Qué movimiento de los tres ejes del avión modifican el ángulo de ataque.",
        opciones: [
            {
                textoRespuesta: "Alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Cabeceo",
                isCorrect: true
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Un aumento del ángulo de ataque en un perfil alar:",
        opciones: [
            {
                textoRespuesta: "Aumenta la resistencia inducida",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye la resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "No influye en la resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. El peso siempre tiene dirección perpendicular a la superficie terrestre",
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
        titulo: "54. Un perfil aerodinámico es una superficie diseñada para producir",
        opciones: [
            {
                textoRespuesta: "Velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Empuje",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "55. Un avión despega de una pista en 100 metros, a una velocidad indicada de 70 Km/h. La temperatura ambiente es de 15 grados. Con las mismas condiciones de viento, peso, en la misma pista, si la temperatura fuera de 35 grados, la velocidad indicada sería:",
        opciones: [
            {
                textoRespuesta: "Mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "No puede saberse",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor",
                isCorrect: false
            },
            {
                textoRespuesta: "La misma",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "56. Si aumenta la velocidad, la resistencia parásita aumenta",
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
        titulo: "57. Se define factor de carga como",
        opciones: [
            {
                textoRespuesta: "La relación entre la fuerza aerodinámica y el peso del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "La carga que transporta el avión",
                isCorrect: false
            },
            {
                textoRespuesta: "La aceleración que se siente durante una maniobra",
                isCorrect: false
            },
            {
                textoRespuesta: "Relación entre la fuerza de sustentación y el peso total del avión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "58. Si, yendo a una velocidad constante con el ULM bien compensado, disminuimos la potencia progresivamente, sin tocar ningún otro mando:",
        opciones: [
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            },
            {
                textoRespuesta: "Al avión mantendrá el nivel, pero disminuirá la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión incrementará la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión iniciará un descenso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "59. Los tres ejes del avión y sus movimientos se cruzan perpendicularmente en el centro de gravedad.",
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
        titulo: "60. El centro de presiones se considera el punto de aplicación de:",
        opciones: [
            {
                textoRespuesta: "Eje vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "La fuerza aerodinámica",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. El punto en torno al que realiza los movimientos una aeronave en vuelo es:",
        opciones: [
            {
                textoRespuesta: "El centro de presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "El centro aerodinámico",
                isCorrect: false
            },
            {
                textoRespuesta: "El centro de gravedad",
                isCorrect: true
            },
            {
                textoRespuesta: "El 25% de la cuerda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Si estoy despegando en una pista con obstáculos al final y no tengo claro si los supero:",
        opciones: [
            {
                textoRespuesta: "Aborto el despegue, y analizo la situación para decidir si lo intento otra vez.",
                isCorrect: true
            },
            {
                textoRespuesta: "Si tengo un motor con turbo lo mantengo al máximo porque tengo potencia suficiente",
                isCorrect: false
            },
            {
                textoRespuesta: "Viro a un lado para poder ganar distancia mientras asciendo",
                isCorrect: false
            },
            {
                textoRespuesta: "Subo más el morro hasta que vea que paso los obstáculos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Cuando el ángulo de inclinación en un viraje aumenta, el factor de carga:",
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
        titulo: "64. Que es el efecto suelo",
        opciones: [
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "El resultado de la interacción de la superficie de la tierra con el flujo de aire del avión",
                isCorrect: true
            },
            {
                textoRespuesta: "El resultado de una alteración del flujo del aire que aumenta la resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "El resultado de una rotura del flujo de aire sobre las alas de un avión hasta el punto donde las alas ya no soportan el peso del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. Al aumentar nuestra velocidad de vuelo, la resistencia parásita e inducida:",
        opciones: [
            {
                textoRespuesta: "Disminuye y aumenta respectivamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentan las dos",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta y disminuye respectivamente",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuyen las dos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Acerca del viento relativo",
        opciones: [
            {
                textoRespuesta: "Coincide con el viento en superficie",
                isCorrect: false
            },
            {
                textoRespuesta: "Son todas correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "Coincide en dirección con la trayectoria de vuelo, pero el sentido es contrario",
                isCorrect: true
            },
            {
                textoRespuesta: "Coincide en dirección y sentido con la trayectoria de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. Tres factores definen la sustentación",
        opciones: [
            {
                textoRespuesta: "Coeficiente de resistencia, presión dinámica, superficie alar",
                isCorrect: false
            },
            {
                textoRespuesta: "Coeficiente de penetración, presión dinámica y superficie alar",
                isCorrect: false
            },
            {
                textoRespuesta: "Coeficiente aerodinámica, presión dinámica, superficie alar",
                isCorrect: false
            },
            {
                textoRespuesta: "Coeficiente de sustentación, presión dinámica y superficie alar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "68. La sustentación es una fuerza de tracción y forma 90 grados con la dirección del movimiento del avión",
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
        titulo: "69. Un avión entra en pérdida a 50 km/h IAS volando a nivel del mar. Cuál será su velocidad de pérdida IAS a 10000 pies",
        opciones: [
            {
                textoRespuesta: "30 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "50 Km/h",
                isCorrect: true
            },
            {
                textoRespuesta: "60 Km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "40 Km/h",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. Estamos en aproximación final a un campo a nivel del mar. Llevamos una velocidad indicada de 80 Km/h. Cuál será la velocidad real TAS del avión",
        opciones: [
            {
                textoRespuesta: "95 Km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "80 Km/h",
                isCorrect: true
            },
            {
                textoRespuesta: "No puede saberse",
                isCorrect: false
            },
            {
                textoRespuesta: "90 Km/h",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. A qué se debe la formación de resistencia inducida.",
        opciones: [
            {
                textoRespuesta: "A la formación de remolinos en las puntas de las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "A la creación de sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "A la circulación de aire desde el intradós hacia el extradós",
                isCorrect: false
            },
            {
                textoRespuesta: "Cualquiera de las tres es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. La resistencia inducida",
        opciones: [
            {
                textoRespuesta: "No existe en general",
                isCorrect: false
            },
            {
                textoRespuesta: "Es consecuencia de la generación de sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "No aparece por debajo de la velocidad del sonido",
                isCorrect: false
            },
            {
                textoRespuesta: "Existe sólo en los ultraligero de tubo y tela",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. ¿Que se conoce como efecto suelo?",
        opciones: [
            {
                textoRespuesta: "Sensación de vértigo por proximidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Un aumento de la autonomía de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "La sensación del piloto de que puede volar con menos potencia al tiempo que su planeo parece mejorar cerca del suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "La atracción que la tierra ejerce sobre el piloto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. Por que se desprende la capa límite durante la pérdida.",
        opciones: [
            {
                textoRespuesta: "a) Falta de energía de las partículas de aire que constituyen la capa límite",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Transición de capa límite laminar a turbulenta",
                isCorrect: false
            },
            {
                textoRespuesta: "c) La capa límite nunca se desprende del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"b\" son ciertas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "75. Una pérdida es preferible que se produzca primero:",
        opciones: [
            {
                textoRespuesta: "En las puntas de las alas que en el encastre",
                isCorrect: false
            },
            {
                textoRespuesta: "La pérdida se produce por igual en todo el ala",
                isCorrect: false
            },
            {
                textoRespuesta: "En el encastre del ala que en las puntas",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. El \"ángulo de ataque\" es el formado por la cuerda aerodinámica y:",
        opciones: [
            {
                textoRespuesta: "El timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "El eje del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección del viento relativo",
                isCorrect: true
            },
            {
                textoRespuesta: "El fuselaje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. Una hélice muy desequilibrada causará, durante el vuelo:",
        opciones: [
            {
                textoRespuesta: "Fallo de motor a altas velocidades",
                isCorrect: false
            },
            {
                textoRespuesta: "Excesiva vibración en toda la estructura de la aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "Inestabilidad respecto al eje longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Oscilaciones en la cola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. La fuerza de sustentación se considera con relación a la trayectoria de vuelo:",
        opciones: [
            {
                textoRespuesta: "Formando un ángulo de 45 grados",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende del ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "No tiene una relación definida.",
                isCorrect: false
            },
            {
                textoRespuesta: "Perpendicular",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "79. ¿Sobre cuáles de los factores que influyen en la sustentación puede actuar el piloto?",
        opciones: [
            {
                textoRespuesta: "Peso y ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad y densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Densidad y carga alar",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad y ángulo de ataque",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "80. Un avión entrará en pérdida",
        opciones: [
            {
                textoRespuesta: "A mayor velocidad (IAS) viento en cola que viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "A menor velocidad (IAS) viento en cola que viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "A un determinado ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre a una velocidad dada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. El punto donde una capa límite laminar llega a ser turbulenta se llama:",
        opciones: [
            {
                textoRespuesta: "El punto de separación",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto crítico",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto de desviación",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto de transición",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "82. La rotación sobre el eje longitudinal se logra con:",
        opciones: [
            {
                textoRespuesta: "Timones",
                isCorrect: false
            },
            {
                textoRespuesta: "Slats",
                isCorrect: false
            },
            {
                textoRespuesta: "Flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "Alerones",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "83. Cuando a una aeronave la alejamos de su posición de equilibrio y tiende a alejarse cada vez mas de ella la podemos calificar como",
        opciones: [
            {
                textoRespuesta: "Estable",
                isCorrect: false
            },
            {
                textoRespuesta: "Indiferente",
                isCorrect: false
            },
            {
                textoRespuesta: "Neutra",
                isCorrect: false
            },
            {
                textoRespuesta: "Inestable",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "84. El peso del avión se contrarresta con otra fuerza llamada",
        opciones: [
            {
                textoRespuesta: "Paralela",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Tracción",
                isCorrect: false
            },
            {
                textoRespuesta: "Elevación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. El factor determinante en las actuaciones de un avión es:",
        opciones: [
            {
                textoRespuesta: "La presión",
                isCorrect: false
            },
            {
                textoRespuesta: "La humedad",
                isCorrect: false
            },
            {
                textoRespuesta: "La densidad",
                isCorrect: true
            },
            {
                textoRespuesta: "La temperatura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. El aterrizaje es una situación de pérdida controlada",
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
        titulo: "87. El teorema de Bernouilli aplicado a una partícula de aire establece:",
        opciones: [
            {
                textoRespuesta: "Presión + densidad = constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión + volumen = constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión + velocidad = constante",
                isCorrect: true
            },
            {
                textoRespuesta: "Sustentación + presión = constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. ¿En qué momento es mayor la resistencia inducida?",
        opciones: [
            {
                textoRespuesta: "Con elevado ángulo de ataque y baja velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando el piloto es de gran peso",
                isCorrect: false
            },
            {
                textoRespuesta: "En un viraje en línea de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuanto mayor sea la velocidad del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. Para mantener la misma altura en un viraje, la sustentación deberá:",
        opciones: [
            {
                textoRespuesta: "Aumentar",
                isCorrect: true
            },
            {
                textoRespuesta: "Cambiar su sentido",
                isCorrect: false
            },
            {
                textoRespuesta: "Ser igual que en vuelo recto y nivelado",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuir",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. Según la figura, la letra “B':",
        opciones: [
            {
                textoRespuesta: "Borde marginal",
                isCorrect: false
            },
            {
                textoRespuesta: "Borde de salida",
                isCorrect: true
            },
            {
                textoRespuesta: "Salida de curvatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Borde final",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. ¿A qué velocidad es menor la resistencia inducida?",
        opciones: [
            {
                textoRespuesta: "Velocidad de despegue",
                isCorrect: false
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
                textoRespuesta: "Velocidad de maniobra",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "92. Si durante una aproximación, en tramo final y a velocidad correcta, notamos que no llegamos porque nos quedamos cortos:",
        opciones: [
            {
                textoRespuesta: "Cortaremos más motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiraremos de palanca o volante, para incrementar la sustentación y llegar a la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Aplicaremos potencia para ajustarnos a la senda de planeo correcta, vigilando que la velocidad no varíe y manteniéndola con el timón de profundidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Picaremos el ULM para ganar velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. Si a un perfil de ala en el interior de una corriente de aire se le aplica un ángulo de ataque positivo:",
        opciones: [
            {
                textoRespuesta: "a presión en el extradós aumenta y disminuye en el intrados",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión en el extradós y en el intrados aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión en el extradós y en el intrados disminuye",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión en el extradós disminuye y aumenta en el intrados",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "94. En un viraje, el ULM entrará en pérdida a una velocidad:",
        opciones: [
            {
                textoRespuesta: "Más alta",
                isCorrect: true
            },
            {
                textoRespuesta: "Más baja",
                isCorrect: false
            },
            {
                textoRespuesta: "A la misma velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Un viraje no influye en la velocidad de pérdida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. La sustentación:",
        opciones: [
            {
                textoRespuesta: "Es una fuerza que se opone al viento relativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una fuerza perpendicular al viento relativo y de la misma dirección y sentido que el peso del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una fuerza perpendicular al viento relativo y opuesta al peso del avión",
                isCorrect: true
            },
            {
                textoRespuesta: "Depende sólo de la velocidad y el diseño del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. A la mayor medida de un avión tomada perpendicularmente a la dirección de la marcha, se llama:",
        opciones: [
            {
                textoRespuesta: "Longitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Envergadura",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuerda",
                isCorrect: false
            },
            {
                textoRespuesta: "Alargadura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Las cuatro fuerzas que actúan sobre un avión en vuelo son:",
        opciones: [
            {
                textoRespuesta: "Peso, sustentación, elevación y resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Peso, sustentación, tracción y resistencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Sustentación, peso, velocidad y tracción",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. ¿Para poder mantener un en régimen constante de descenso no acelerado, la sustentación tiene que ser necesariamente menor que el peso?",
        opciones: [
            {
                textoRespuesta: "Es indiferente el régimen de descenso o ascenso, la sustentación siempre es superior al peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí siempre en régimen de descenso la sustentación es menor que el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "No, si no hay aceleración las fuerzas están equilibradas. Sólo al iniciar el descenso es necesario que la sustentación sea menor que el peso. Una vez en régimen de descenso a velocidad constante, las resultantes de sustentación se igualan a las de peso manteniendo un equilibrio de fuerzas",
                isCorrect: true
            },
            {
                textoRespuesta: "La sustentación y el peso no están directamente relacionados con el régimen de descenso, sólo la incidencia del ala y el ángulo de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. Un perfil aerodinámico es una superficie diseñada para producir:",
        opciones: [
            {
                textoRespuesta: "Empuje o tracción",
                isCorrect: false
            },
            {
                textoRespuesta: "Diferencia de presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "100. El factor de carga aumenta excesivamente, para la capacidad de maniobra de los ultraligeros, a partir de ángulos de inclinación en viraje de:",
        opciones: [
            {
                textoRespuesta: "90º",
                isCorrect: false
            },
            {
                textoRespuesta: "15º",
                isCorrect: false
            },
            {
                textoRespuesta: "25º",
                isCorrect: false
            },
            {
                textoRespuesta: "60º",
                isCorrect: true
            }
        ]
    }
];

export default preguntas;