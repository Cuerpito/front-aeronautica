const preguntas = [
    {
        titulo: "1. Cómo se llama el plano fijo que asegura la estabilidad del avión sobre su eje tranversal:",
        opciones: [
            {
                textoRespuesta: "Empenaje vertical de cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Empenaje horizontal de cola",
                isCorrect: true
            },
            {
                textoRespuesta: "Empenaje oblicuo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. Los alternadores producen corriente",
        opciones: [
            {
                textoRespuesta: "Contínua",
                isCorrect: false
            },
            {
                textoRespuesta: "Trifásica",
                isCorrect: false
            },
            {
                textoRespuesta: "Alterna",
                isCorrect: true
            },
            {
                textoRespuesta: "General",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. Si vamos a aterrizar en un campo cuya elevación es de 1500 pies, y queremos hacer un tráfico a 500 pies de altura, una vez obtenido el QNH",
        opciones: [
            {
                textoRespuesta: "Haremos el tráfico a 500 pies de altura, que es lo que me indicará el altímetro al calar QNH",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo podremos hacer un tráfico a 500 pies AGL si calamos QNE",
                isCorrect: false
            },
            {
                textoRespuesta: "Haremos un tráfico manteniendo 1500 pies de altitud indicada en el altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Haremos el tráfico a 2000 pies de altitud indicada por el altímetro",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "4. El ángulo flecha es el ángulo formado:",
        opciones: [
            {
                textoRespuesta: "Por el viento relativo y la cuerda",
                isCorrect: false
            },
            {
                textoRespuesta: "Por el eje lateral y el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Por el borde de ataque y la perpendicular a la cuerda del ala",
                isCorrect: true
            },
            {
                textoRespuesta: "Entre el eje vertical y la cuerda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. La cuerda media del ala es:",
        opciones: [
            {
                textoRespuesta: "La recta de la parte media del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "La recta que une el borde de ataque con el borde de salida en cada perfil",
                isCorrect: false
            },
            {
                textoRespuesta: "La cuerda que multiplicada por su envergadura determina la superficie alar",
                isCorrect: true
            },
            {
                textoRespuesta: "La recta que parte en dos al ala",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. En un carburador, ciertos elementos:",
        opciones: [
            {
                textoRespuesta: "Mezclan el aceite con la gasolina",
                isCorrect: false
            },
            {
                textoRespuesta: "Determinan principalmente el régimen del motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Son obligatoriamente reciclables",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. En el movimiento de la bola actúan las fuerzas de",
        opciones: [
            {
                textoRespuesta: "Peso y aerodinámica",
                isCorrect: false
            },
            {
                textoRespuesta: "Peso y gravedad",
                isCorrect: false
            },
            {
                textoRespuesta: "Precisión y rigidez",
                isCorrect: false
            },
            {
                textoRespuesta: "Peso y fuerza centrífuga",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "8. La fuerza con la que la hélice tira del avión y es de sentido contrario a la resistencia se llama:",
        opciones: [
            {
                textoRespuesta: "Fuerza del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Resistencia final",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Tracción o empuje",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "9. ¿Qué es un espoiler?",
        opciones: [
            {
                textoRespuesta: "Un dispositivo hipersustentador",
                isCorrect: false
            },
            {
                textoRespuesta: "Un freno aerodinámico",
                isCorrect: true
            },
            {
                textoRespuesta: "Un indicador de virajes",
                isCorrect: false
            },
            {
                textoRespuesta: "Un flaps de extradós",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Las melladuras y muescas pronunciadas deberían eliminarse inmediatamente de la pala de una hélice para evitar:",
        opciones: [
            {
                textoRespuesta: "Fallo por fatiga",
                isCorrect: false
            },
            {
                textoRespuesta: "Vibración excesiva del motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Formación de óxido",
                isCorrect: false
            },
            {
                textoRespuesta: "Alabeamientos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Al aumentar la altitud sin ajustar la relación de la mezcla, las prestaciones del motor de émbolo se ven afectadas por:",
        opciones: [
            {
                textoRespuesta: "Un aumento en la densidad del aire para una menor cantidad de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Una disminución de la densidad del aire para una menor cantidad de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Una densidad de aire constante para una mayor cantidad de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "La disminución de la densidad del aire para una cantidad de combustible constante",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "12. El ajustar las RPM a sus valores recomendados es importante para:",
        opciones: [
            {
                textoRespuesta: "Ir a mayor velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Ascender más rápidamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Calentar el motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Ajustar el consumo de gasolina",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "13. El tren retráctil suele tener un sistema de emergencia",
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
        titulo: "14. No debe despegarse nunca con el motor a baja temperatura.",
        opciones: [
            {
                textoRespuesta: "Es cierto, pero sólo en invierno",
                isCorrect: false
            },
            {
                textoRespuesta: "Es cierto, pero sólo en verano",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre es cierto",
                isCorrect: true
            },
            {
                textoRespuesta: "Nunca es cierto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. Se dice que una hélice es de paso variable cuando",
        opciones: [
            {
                textoRespuesta: "Puede cambiar su ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "Es posible cambiar la hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede reducir su tamaño",
                isCorrect: false
            },
            {
                textoRespuesta: "Se puede abanderar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. ¿Cuál es el fundamento del sistema de ignición?",
        opciones: [
            {
                textoRespuesta: "Controlar el fuego que se produzca en el carburador",
                isCorrect: false
            },
            {
                textoRespuesta: "Suministrar a las bujías energía eléctrica en un momento preciso durante la carrera del pistón",
                isCorrect: true
            },
            {
                textoRespuesta: "Suministrar a la batería energía eléctrica",
                isCorrect: false
            },
            {
                textoRespuesta: "Suministrar energía eléctrica a las luces de navegación e instrumentos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Los compensadores son:",
        opciones: [
            {
                textoRespuesta: "Unas pequeñas superficies aerodinámicas colocadas en la parte superior del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "Unas pequeñas superficies aerodinámicas colocadas en el borde de salida de los mandos de control de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Unas pequeñas superficies aerodinámicas colocadas en los extremos de las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "Unas pequeñas superficies aerodinámicas colocadas en el extremo del timón",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Una hélice sucia, o con melladuras produce:",
        opciones: [
            {
                textoRespuesta: "Mayor efectividad",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor resistencia al avance",
                isCorrect: false
            },
            {
                textoRespuesta: "Vibraciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Un aumento de revoluciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. ¿Cuándo desarrolla más potencia un motor?",
        opciones: [
            {
                textoRespuesta: "A nivel del mar, un día de invierno",
                isCorrect: true
            },
            {
                textoRespuesta: "En la montaña, un día de invierno",
                isCorrect: false
            },
            {
                textoRespuesta: "A nivel del mar, un día de verano",
                isCorrect: false
            },
            {
                textoRespuesta: "En la montaña, un día de verano",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. La bola en el indicador de viraje se desplaza debido a las fuerzas:",
        opciones: [
            {
                textoRespuesta: "De presión estática",
                isCorrect: false
            },
            {
                textoRespuesta: "Giroscópicas",
                isCorrect: true
            },
            {
                textoRespuesta: "De succión",
                isCorrect: false
            },
            {
                textoRespuesta: "Centrífuga y de gravedad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. En el hemisferio sur, durante la deceleración posterior a un aterrizaje en dirección este, la brújula magnética indicara:",
        opciones: [
            {
                textoRespuesta: "Una fluctuación del rumbo en torno a 090",
                isCorrect: false
            },
            {
                textoRespuesta: "Un viraje aparente hacia el sur",
                isCorrect: false
            },
            {
                textoRespuesta: "Un viraje aparente hacia el norte",
                isCorrect: true
            },
            {
                textoRespuesta: "Ningún viraje aparente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. Un motor presenta mezcla rica cuando:",
        opciones: [
            {
                textoRespuesta: "El combustible presenta menor octanaje",
                isCorrect: false
            },
            {
                textoRespuesta: "El combustible presenta mayor octanaje",
                isCorrect: false
            },
            {
                textoRespuesta: "La parte de combustible es superior a la normal",
                isCorrect: true
            },
            {
                textoRespuesta: "La parte de combustible es inferior a la normal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. El anemómetro indica:",
        opciones: [
            {
                textoRespuesta: "Altitud sobre el mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de ascenso y descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad relativa",
                isCorrect: true
            },
            {
                textoRespuesta: "El rumbo magnético",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. El centro de gravedad deberá estar por delante del centro aerodinámico para que el avión:",
        opciones: [
            {
                textoRespuesta: "Sea estable verticalmente",
                isCorrect: false
            },
            {
                textoRespuesta: "Sea estable longitudinalmente",
                isCorrect: true
            },
            {
                textoRespuesta: "Sea estable lateralmente",
                isCorrect: false
            },
            {
                textoRespuesta: "La posición del centro de gravedad no influye en la estabilidad del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. El funcionamiento correcto de las magnetos se comprobará:",
        opciones: [
            {
                textoRespuesta: "Inmediatamente después de haber arrancado el motor",
                isCorrect: false
            },
            {
                textoRespuesta: "En la revisión de las 50 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "Antes del despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "En vuelo de crucero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. La bomba de gasolina tiene la toma en vacío en:",
        opciones: [
            {
                textoRespuesta: "El carburador",
                isCorrect: false
            },
            {
                textoRespuesta: "El depósito de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "La culata",
                isCorrect: false
            },
            {
                textoRespuesta: "El cárter",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. Dejar los depósitos con poco combustible por largos periodos de tiempo, puede causar la aparición de agua en los depósitos",
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
        titulo: "28. ¿Qué es la refrigeración tipo fan?",
        opciones: [
            {
                textoRespuesta: "Refrigeración por líquido refrigerante",
                isCorrect: false
            },
            {
                textoRespuesta: "Refrigeración por aire",
                isCorrect: true
            },
            {
                textoRespuesta: "Es una marca de fabricante",
                isCorrect: false
            },
            {
                textoRespuesta: "No existe",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. Los dispositivos hipersustentadores cuya finalidad es la de aumentar el ángulo de ataque y así obtener una sustentación adicional se denominan:",
        opciones: [
            {
                textoRespuesta: "Flaps",
                isCorrect: true
            },
            {
                textoRespuesta: "Slats",
                isCorrect: false
            },
            {
                textoRespuesta: "Spoiler",
                isCorrect: false
            },
            {
                textoRespuesta: "Ranuras de borde de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Las capacidad de las baterías se mide en:",
        opciones: [
            {
                textoRespuesta: "Amperios /voltios",
                isCorrect: false
            },
            {
                textoRespuesta: "Ohmios",
                isCorrect: false
            },
            {
                textoRespuesta: "Vatios",
                isCorrect: false
            },
            {
                textoRespuesta: "Amperios/ hora",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. La ventaja principal de una hélice de velocidad constante en comparación con una hélice de paso fijo radica en:",
        opciones: [
            {
                textoRespuesta: "Su menor tensión en las palas de la hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "Su eficiencia constante en cualquier condición de funcionamiento",
                isCorrect: true
            },
            {
                textoRespuesta: "Su mayor eficiencia en vuelo de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Su mayor eficiencia en cualquier condición de funcionamiento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Al aplicar calor al carburador:",
        opciones: [
            {
                textoRespuesta: "Se empobrece la mezcla",
                isCorrect: false
            },
            {
                textoRespuesta: "Se enriquece la mezcla",
                isCorrect: true
            },
            {
                textoRespuesta: "Como consecuencia de la mezcla pobre se reducen las R.P.M.",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación de mezcla no experimenta ninguna variación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. La capacidad de combustible de una aeronave es:",
        opciones: [
            {
                textoRespuesta: "La cantidad máxima de combustible que una aeronave puede consumir en un vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "La cantidad máxima de combustible que una aeronave puede contener",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. La línea equidistante entre el extradós y el intradós se denomina:",
        opciones: [
            {
                textoRespuesta: "Curva del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuerda",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Curvatura media",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. En caso de no disponer de gasolina del numero de octanos necesario, se deberá usar otra de:",
        opciones: [
            {
                textoRespuesta: "Menor número de octanos",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor número de octanos",
                isCorrect: true
            },
            {
                textoRespuesta: "No se puede utilizar otra gasolina",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente el número de octanos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. ¿Cómo es el consumo de combustible en los motores de 2 tiempos?",
        opciones: [
            {
                textoRespuesta: "a) Es mayor que en los de 4 tiempos",
                isCorrect: true
            },
            {
                textoRespuesta: "b) Es aproximadamente la mitad de los registrados en un motor de 4 tiempos",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Es aproximadamente igual al de los motores de 4 tiempos",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"a\" y la \"b\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. Las superficies que permiten mantener el avión en una posición determinada, aliviando al piloto de la atención y el esfuerzo continuo sobre los mandos de control primario se denominan:",
        opciones: [
            {
                textoRespuesta: "Mandos de control secundarios",
                isCorrect: true
            },
            {
                textoRespuesta: "Mandos de control primarios",
                isCorrect: false
            },
            {
                textoRespuesta: "Dispositivos hipersustentadores",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. La brújula tiene un error en viraje, que, en el hemisferio norte, consiste en:",
        opciones: [
            {
                textoRespuesta: "Se retrasa en virajes hacia el Norte y se adelanta en virajes hacia el Sur",
                isCorrect: false
            },
            {
                textoRespuesta: "Se adelanta en virajes hacia el Norte y en virajes hacia el Sur",
                isCorrect: false
            },
            {
                textoRespuesta: "Se adelanta en virajes hacia el Norte y se retrasa en virajes hacia el Sur",
                isCorrect: true
            },
            {
                textoRespuesta: "La brújula no tiene errores en los virajes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Si se despega con el aceite fuera de su temperatura normal, el motor",
        opciones: [
            {
                textoRespuesta: "Depende de la presión de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Dará menor potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "No pasara nada",
                isCorrect: false
            },
            {
                textoRespuesta: "Se podrá parar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "40. Los sistemas de encendido de los ULM se alimentan de:",
        opciones: [
            {
                textoRespuesta: "El sistema de C.A.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es encendido por la batería del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "El sistema de C.C.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una fuente independiente del sistema eléctrico del avión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "41. Qué significa la medida 54x27 pulgadas en una hélice...",
        opciones: [
            {
                textoRespuesta: "Diámetro y Nº de laminaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Diámetro y calidad del barniz protector",
                isCorrect: false
            },
            {
                textoRespuesta: "Diámetro y paso",
                isCorrect: true
            },
            {
                textoRespuesta: "Radio y espesor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. El tren de aterrizaje con rueda de morro y dos ruedas principales detrás del centro de gravedad se denomina:",
        opciones: [
            {
                textoRespuesta: "Tren convencional",
                isCorrect: false
            },
            {
                textoRespuesta: "Tren de bicicleta",
                isCorrect: false
            },
            {
                textoRespuesta: "Tren triciclo",
                isCorrect: true
            },
            {
                textoRespuesta: "Tren retráctil",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. El variómetro necesita para su funcionamiento, medir solamente presiones:",
        opciones: [
            {
                textoRespuesta: "Dinámicas",
                isCorrect: false
            },
            {
                textoRespuesta: "Absolutas",
                isCorrect: false
            },
            {
                textoRespuesta: "Estáticas",
                isCorrect: true
            },
            {
                textoRespuesta: "Totales",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. Si la fuente estática de un indicador de velocidad verdadera ASI se bloquea durante el descenso el instrumento:",
        opciones: [
            {
                textoRespuesta: "Indicará una lectura cero",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicará una lectura superior a la real",
                isCorrect: true
            },
            {
                textoRespuesta: "Continuará indicando una velocidad aplicable a la del momento de producirse el bloqueo",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicará una lectura inferior a la real",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. El tubo Pitot, recogerá presión",
        opciones: [
            {
                textoRespuesta: "Dinámica",
                isCorrect: false
            },
            {
                textoRespuesta: "Estática",
                isCorrect: false
            },
            {
                textoRespuesta: "Total",
                isCorrect: true
            },
            {
                textoRespuesta: "Estándar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. ¿Cuáles son los tres ejes sobre los cuales se mueve un avión?",
        opciones: [
            {
                textoRespuesta: "Vertical, lateral o transversal y longitudinal",
                isCorrect: true
            },
            {
                textoRespuesta: "Vertical, perpendicular y longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Oblicuo, lateral o transversal y longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Vertical, paralelo y longitudinal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. El arco amarillo en un anemómetro indica el margen de velocidades:",
        opciones: [
            {
                textoRespuesta: "Normales",
                isCorrect: false
            },
            {
                textoRespuesta: "De precaución",
                isCorrect: true
            },
            {
                textoRespuesta: "Máximo alcance",
                isCorrect: false
            },
            {
                textoRespuesta: "Máxima autonomía",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. El variómetro nos señala:",
        opciones: [
            {
                textoRespuesta: "La variación en la presión atmosférica",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de ascenso y descenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Al igual que la brújula, el norte magnético",
                isCorrect: false
            },
            {
                textoRespuesta: "La variación de altitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Los compensadores de profundidad:",
        opciones: [
            {
                textoRespuesta: "Se encuentran en cualquier tipo de avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Se controlan desde la cabina",
                isCorrect: false
            },
            {
                textoRespuesta: "Se controlan a través de un sistema de poleas y cables",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. La presión medida en el orificio delantero de un tubo Pitot es:",
        opciones: [
            {
                textoRespuesta: "La presión dinámica",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión estática",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión total",
                isCorrect: true
            },
            {
                textoRespuesta: "La suma de la presión estática más la presión total",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Al roscar y apretar una tuerca, ¿es conveniente hacer girar el tornillo?",
        opciones: [
            {
                textoRespuesta: "Sí, cuando facilita la operación",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, puesto que asienta mejor en su alojamiento",
                isCorrect: false
            },
            {
                textoRespuesta: "A veces es necesario para apretar bien la tuerca",
                isCorrect: false
            },
            {
                textoRespuesta: "No, nunca. El tornillo puede marcarse",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "52. La hélice, elemento tractor del avión, está formada por un conjunto infinito de perfiles aerodinámicos. El ángulo de ataque de cada uno de ellos:",
        opciones: [
            {
                textoRespuesta: "Es igual para todos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambian desde la raíz hasta la punta de la hélice",
                isCorrect: true
            },
            {
                textoRespuesta: "No presentan ángulos de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. ¿Cuál es el tipo de aleación de aluminio más normalmente utilizada en la estructura de los ULM?",
        opciones: [
            {
                textoRespuesta: "6261 t.6",
                isCorrect: false
            },
            {
                textoRespuesta: "6061 t.6",
                isCorrect: true
            },
            {
                textoRespuesta: "5441 t.8",
                isCorrect: false
            },
            {
                textoRespuesta: "Acero al CrNi",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. La calefacción de tubo pitot evita formación de hielo en",
        opciones: [
            {
                textoRespuesta: "Bordes de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Parabrisas",
                isCorrect: false
            },
            {
                textoRespuesta: "Tomas de presión de aire",
                isCorrect: true
            },
            {
                textoRespuesta: "Mandos de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. En un ascenso con un motor alternativo atmosférico la potencia.",
        opciones: [
            {
                textoRespuesta: "No le afecta",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Se mantiene",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "56. ¿Cuál es el desplazamiento de un motor multicilíndrico?",
        opciones: [
            {
                textoRespuesta: "Área por carrera del émbolo por número de cilindros",
                isCorrect: true
            },
            {
                textoRespuesta: "Área por longitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Desplazamiento lineal en los motores tipo Boxer",
                isCorrect: false
            },
            {
                textoRespuesta: "Desplazamiento lineal en los motores tipo de estrella",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. ¿Cuáles son los tipos de aleación de aluminio más utilizados en los ULM?",
        opciones: [
            {
                textoRespuesta: "a) 6261 t6 y 6162 t8",
                isCorrect: false
            },
            {
                textoRespuesta: "b) 6061 t6 y 2017 t4",
                isCorrect: true
            },
            {
                textoRespuesta: "c) 5441 t8 y 1236 h3",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"c\" son correctos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Al aumentar la altura de vuelo, si no se regula la mezcla, ésta...",
        opciones: [
            {
                textoRespuesta: "Detona",
                isCorrect: false
            },
            {
                textoRespuesta: "Se empobrece",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta su temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Se enriquece",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "59. ¿Qué significa un factor de carga n=2?",
        opciones: [
            {
                textoRespuesta: "La resistencia y la fuerza de inercia en la maniobra es el doble del peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "La potencia de los motores y la fuerza de inercia en la maniobra es el doble del peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la sustentación es el doble que el peso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "60. El condensador elimina el arco eléctrico y la extracorriente de las magnetos",
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
        titulo: "61. ¿Qué es la superficie alar?",
        opciones: [
            {
                textoRespuesta: "Es la superficie de la vista en planta del contorno aparente del ala, incluyendo la parte del ala que pueda estar cubierta por el fuselaje y excluyendo las góndolas de los motores",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la superficie de la vista en planta del contorno aparente del ala, excluyendo la parte del ala que pueda estar cubierta por el fuselaje o góndolas de los motores",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la superficie de la vista en planta del contorno aparente del ala, incluyendo la parte del ala que este cubierta por el fuselaje o góndolas de los motores",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son incorrectas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. ¿Qué indica una bujía negra y con mucha carbonilla?",
        opciones: [
            {
                textoRespuesta: "Que hace mucho calor",
                isCorrect: false
            },
            {
                textoRespuesta: "Que hace mucho frió",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la mezcla es demasiado pobre",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la mezcla es demasiado rica",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "63. El agua que puede depositarse en el fondo del depósito dé combustible de un ULM",
        opciones: [
            {
                textoRespuesta: "No tiene ninguna importancia",
                isCorrect: false
            },
            {
                textoRespuesta: "Ayuda a refrigerar el motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede producir la parada del motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Es imposible que entre agua en la gasolina",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. El larguero de un ULM, es el:",
        opciones: [
            {
                textoRespuesta: "Miembro que une el fuselaje con el tren de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Miembro que une las ruedas del tren principal con la rueda de morro",
                isCorrect: false
            },
            {
                textoRespuesta: "Miembro estructural longitudinal y principal del fuselaje",
                isCorrect: true
            },
            {
                textoRespuesta: "Miembro estructural que soporta el peso del ULM, cuando está aparcado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. El ángulo diedro es el formado entre:",
        opciones: [
            {
                textoRespuesta: "aLas dos alas",
                isCorrect: false
            },
            {
                textoRespuesta: "bUn ala y la horizontal",
                isCorrect: true
            },
            {
                textoRespuesta: "Un ala y el fuselaje",
                isCorrect: false
            },
            {
                textoRespuesta: "La cuerda y el viento relativo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Si tenemos un medidor de temperatura de culata de cilindros con una sola sonda de temperaturas, toma su información de",
        opciones: [
            {
                textoRespuesta: "Cilindro más frio",
                isCorrect: false
            },
            {
                textoRespuesta: "Cilindro más caliente",
                isCorrect: true
            },
            {
                textoRespuesta: "De todos a la vez",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una media",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. ¿Cómo se realiza la lubricación en los motores de 2 tiempos?",
        opciones: [
            {
                textoRespuesta: "Se realiza mediante un circuito aparte",
                isCorrect: false
            },
            {
                textoRespuesta: "Los motores de 2 tiempos no lo necesitan",
                isCorrect: false
            },
            {
                textoRespuesta: "Se efectúa mediante la mezcla gaseosa de combustión que circula por el interior del cárter del motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Mediante el aceite de la reductora",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. Cada magneto proporciona encendido a una sola bujía:",
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
        titulo: "69. Los ultraligeros de dos ejes no poseen un mando especial para el movimiento del alabeo.",
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
        titulo: "70. El timón de dirección se mueve:",
        opciones: [
            {
                textoRespuesta: "Tirando de la palanca",
                isCorrect: false
            },
            {
                textoRespuesta: "Empujando la palanca",
                isCorrect: false
            },
            {
                textoRespuesta: "Inclinando la palanca",
                isCorrect: false
            },
            {
                textoRespuesta: "Presionando los pedales",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. Los compensadores pueden ser:",
        opciones: [
            {
                textoRespuesta: "De profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "De alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "De dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "72. Que ventaja tiene poner una hélice en bandera en caso de parada de motor",
        opciones: [
            {
                textoRespuesta: "El avión no trepida",
                isCorrect: false
            },
            {
                textoRespuesta: "Ofrece menos resistencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Permite mejor visibilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. ¿Cuándo no es necesario el uso de la bomba de gasolina?",
        opciones: [
            {
                textoRespuesta: "Siempre es necesario",
                isCorrect: false
            },
            {
                textoRespuesta: "No es necesario nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el depósito esta más alto que la toma del motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando el depósito está más bajo que la toma del motor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. El altímetro necesita para su funcionamiento, medir solamente:",
        opciones: [
            {
                textoRespuesta: "Presión dinámica",
                isCorrect: false
            },
            {
                textoRespuesta: "Temperatura absoluta",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión total",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión estática",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "75. El sistema dual de encendido proporciona",
        opciones: [
            {
                textoRespuesta: "Menor gasto mecánico",
                isCorrect: false
            },
            {
                textoRespuesta: "Distribución más uniforme del calor",
                isCorrect: false
            },
            {
                textoRespuesta: "Mejor balance de presión en los cilindros",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor fiabilidad y mejor rendimiento del motor",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "76. Las interferencias magnéticas en la brújula (radios, metales,etc.) nos da un error en la lectura de esta denominada:",
        opciones: [
            {
                textoRespuesta: "Desvío",
                isCorrect: true
            },
            {
                textoRespuesta: "Declinación",
                isCorrect: false
            },
            {
                textoRespuesta: "Error magnético",
                isCorrect: false
            },
            {
                textoRespuesta: "Variación geográfica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. Identifique las partes del perfil de la figura: letra G",
        opciones: [
            {
                textoRespuesta: "Curvatura",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuerda",
                isCorrect: false
            },
            {
                textoRespuesta: "Intradós",
                isCorrect: false
            },
            {
                textoRespuesta: "Centro aerodinámico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. El sistema de encendido de motores de émbolo que se utilizan para las aeronaves ULM:",
        opciones: [
            {
                textoRespuesta: "Dependen del generador de C.C.",
                isCorrect: false
            },
            {
                textoRespuesta: "Dependen de la batería",
                isCorrect: false
            },
            {
                textoRespuesta: "Dependen del generador de C.A.",
                isCorrect: false
            },
            {
                textoRespuesta: "Son independientes del sistema eléctrico de la aeronave",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "79. Los 3 ejes de giro de un avión se llaman:",
        opciones: [
            {
                textoRespuesta: "Vertical, paralelo y longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Vertical, lateral y longitudinal",
                isCorrect: true
            },
            {
                textoRespuesta: "Vertical, perpendicular y longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Oblicuo, lateral y longitudinal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. ¿Cómo es la velocidad de la hélice?",
        opciones: [
            {
                textoRespuesta: "Igual en toda la longitud de la misma",
                isCorrect: false
            },
            {
                textoRespuesta: "En el centro casi nula; en los extremos se acerca a la velocidad del sonido",
                isCorrect: true
            },
            {
                textoRespuesta: "Desde el centro hasta 3/4 partes de la misma igual; en el resto progresivamente más alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende del paso y diámetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. La estructura sobre la que descansa el avión mientras se encuentra en tierra, se denomina:",
        opciones: [
            {
                textoRespuesta: "Bancada",
                isCorrect: false
            },
            {
                textoRespuesta: "Empenaje de cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Fuselaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Tren de aterrizaje",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "82. El arco blanco del anemómetro, abarca las velocidades:",
        opciones: [
            {
                textoRespuesta: "De pérdida sin flaps (Vs1) hasta el comienzo de arco amarillo (VNO)",
                isCorrect: false
            },
            {
                textoRespuesta: "Normal de operación (Vs1-VNO)",
                isCorrect: false
            },
            {
                textoRespuesta: "De precaución (VNO-VNE)",
                isCorrect: false
            },
            {
                textoRespuesta: "De uso de flaps (Vs0-VFE)",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "83. Identifique las partes del perfil de la figura: letra C",
        opciones: [
            {
                textoRespuesta: "Radio de curvatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuerda",
                isCorrect: true
            },
            {
                textoRespuesta: "Espesor máximo",
                isCorrect: false
            },
            {
                textoRespuesta: "Curvatura media",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. ¿Si en la cabecera de pista antes del despegue notamos un fuerte olor a combustible que debemos hacer?",
        opciones: [
            {
                textoRespuesta: "Despegar inmediatamente para que se vaya",
                isCorrect: false
            },
            {
                textoRespuesta: "Nada ya hicimos el Chek List con anterioridad",
                isCorrect: false
            },
            {
                textoRespuesta: "No darle importancia es normal",
                isCorrect: false
            },
            {
                textoRespuesta: "Parar inmediatamente el motor y averiguar el por qué",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "85. Las tomas de presión estática deben comprobarse",
        opciones: [
            {
                textoRespuesta: "En la inspección prevuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "En vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Antes del despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Antes del aterrizaje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. Ajustar las r.p.m. A sus valores recomendados es importante para",
        opciones: [
            {
                textoRespuesta: "Ir a mayor velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Ascender más rápidamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Ajustar el consumo de combustible",
                isCorrect: true
            },
            {
                textoRespuesta: "Calentar el motor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. En un motor de explosión, llamaremos carrera a",
        opciones: [
            {
                textoRespuesta: "Cada uno de los recorridos del pistón entre los puntos muertos superior e inferior",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad del pistón",
                isCorrect: false
            },
            {
                textoRespuesta: "Altura del pistón",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. El movimiento que origina en el avión la tendencia a volver o alejarse aún más de su posición de equilibrio es:",
        opciones: [
            {
                textoRespuesta: "Estabilidad positiva",
                isCorrect: false
            },
            {
                textoRespuesta: "Estabilidad negativa",
                isCorrect: false
            },
            {
                textoRespuesta: "Estabilidad estática",
                isCorrect: false
            },
            {
                textoRespuesta: "Estabilidad dinámica",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "89. Se dice que una hélice es de paso variable cuando:",
        opciones: [
            {
                textoRespuesta: "Puede modificar su ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "Puede reducir su tamaño",
                isCorrect: false
            },
            {
                textoRespuesta: "Es posible cambiar la hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "Se puede poner en bandera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. El alabeo:",
        opciones: [
            {
                textoRespuesta: "Es la rotación alrededor del eje lateral",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la inclinación del avión sobre sí mismo",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la inclinación del avión alrededor de su eje longitudinal",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. La línea recta que une el borde de ataque con el borde de salida, se denomina:",
        opciones: [
            {
                textoRespuesta: "Perfil",
                isCorrect: false
            },
            {
                textoRespuesta: "Extradós",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuerda",
                isCorrect: true
            },
            {
                textoRespuesta: "Intradós",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. De los siguientes instrumentos, ¿cual necesita de ambas presiones ­estática y total­ para obtener su lectura?",
        opciones: [
            {
                textoRespuesta: "El anemómetro",
                isCorrect: true
            },
            {
                textoRespuesta: "El altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "El variómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. Las bujías de un mismo cilindro están alimentadas por magnetos distintas",
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
        titulo: "94. Los principales parámetros del aceite que se deben vigilar son",
        opciones: [
            {
                textoRespuesta: "Viscosidad y temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión, temperatura y nivel",
                isCorrect: true
            },
            {
                textoRespuesta: "Presión y limpieza",
                isCorrect: false
            },
            {
                textoRespuesta: "Viscosidad y presión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. ¿Qué es un altímetro?",
        opciones: [
            {
                textoRespuesta: "Un barómetro aneroide",
                isCorrect: true
            },
            {
                textoRespuesta: "Un indicador de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Un indicador de velocidad vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Un instrumento de motor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. ¿Cuál podría ser una maniobra con un factor de carga n=2?",
        opciones: [
            {
                textoRespuesta: "En vuelo recto y nivelado",
                isCorrect: false
            },
            {
                textoRespuesta: "En un régimen de ascenso mantenido a 500 fpm",
                isCorrect: false
            },
            {
                textoRespuesta: "En una recogida, pasamos de un descenso a un ascenso brusco",
                isCorrect: true
            },
            {
                textoRespuesta: "En un régimen de descenso mantenido de 500 fpm",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Una bomba de combustible tiene la toma de vacío en:",
        opciones: [
            {
                textoRespuesta: "El cárter",
                isCorrect: true
            },
            {
                textoRespuesta: "El carburador",
                isCorrect: false
            },
            {
                textoRespuesta: "Los depósitos de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "La cápsula aneroide",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Las bujías con electrodos redondeados producen una chispa menos potente que si tienen los electrodos los cantos vivos",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: true
            },
            {
                textoRespuesta: "Falso",
                isCorrect: false
            },
            {
                textoRespuesta: "Indiferente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. Si la hélice está mellada o sucia:",
        opciones: [
            {
                textoRespuesta: "Presenta menos resistencia a la marcha",
                isCorrect: false
            },
            {
                textoRespuesta: "Produce un aumento de revoluciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Produce vibraciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Presenta mayor efectividad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. ¿Qué superficies móviles controlan los pedales en un ULM de 3 ejes?",
        opciones: [
            {
                textoRespuesta: "Timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Spoilers",
                isCorrect: false
            },
            {
                textoRespuesta: "Timón de dirección",
                isCorrect: true
            },
            {
                textoRespuesta: "Alerones",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;