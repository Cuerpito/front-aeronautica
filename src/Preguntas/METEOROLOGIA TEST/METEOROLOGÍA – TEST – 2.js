const preguntas = [
    {
        titulo: "1. Condiciones IMC son:",
        opciones: [
            {
                textoRespuesta: "Condiciones necesarias para poder volar como piloto de vuelo por instrumentos",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones meteorológicas expresadas en términos de visibilidad iguales o mejores que las mínimas especificadas",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones meteorológicas expresadas en términos de visibilidad, distancia de nubes y techo, inferiores a las mínimas especificadas para condiciones meteorológicas visuales",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. Durante el paso de un frente frío, la temperatura no necesariamente tiene que bajar bruscamente.",
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
        titulo: "3. Los cirros son:",
        opciones: [
            {
                textoRespuesta: "Nubes del nivel inferior",
                isCorrect: false
            },
            {
                textoRespuesta: "Nubes del nivel medio",
                isCorrect: false
            },
            {
                textoRespuesta: "Nubes del nivel superior",
                isCorrect: true
            },
            {
                textoRespuesta: "Nubes que pueden darse en cualquier nivel",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. ¿Cuál es la mejor manera de que se disipe una nube?",
        opciones: [
            {
                textoRespuesta: "Calentándola o sustrayéndole vapor de agua",
                isCorrect: true
            },
            {
                textoRespuesta: "Enfriándola o añadiéndole vapor de agua",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentando el viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Por medio de la radiación nocturna",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Que es Altitud de Presión:",
        opciones: [
            {
                textoRespuesta: "La altitud indicada corregida por temperatura y presión no estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud indicada cuando la escala barométrica del altímetro se cala a 1013",
                isCorrect: true
            },
            {
                textoRespuesta: "La altitud indicada corregida por posición y errores de instalación",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud indicada corregida por presión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Visibilidad en tierra:",
        opciones: [
            {
                textoRespuesta: "Distancia a la que puede verse desde tierra una aeronave volando",
                isCorrect: false
            },
            {
                textoRespuesta: "Visibilidad en un aeródromo medida por un observador competente",
                isCorrect: true
            },
            {
                textoRespuesta: "Visibilidad horizontal y vertical de un campo",
                isCorrect: false
            },
            {
                textoRespuesta: "Visibilidad horizontal de un campo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. ¿Qué característica meteorológica se asocia a la inversión de temperatura?",
        opciones: [
            {
                textoRespuesta: "Tormentas",
                isCorrect: false
            },
            {
                textoRespuesta: "Estabilidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Inestabilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Onda de montaña",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Si las isobaras están próximas, la velocidad del viento:",
        opciones: [
            {
                textoRespuesta: "Es nula",
                isCorrect: false
            },
            {
                textoRespuesta: "Es mínima",
                isCorrect: false
            },
            {
                textoRespuesta: "Es variable",
                isCorrect: false
            },
            {
                textoRespuesta: "Es grande",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "9. Son nubes altas, formadas por encima de los 6.000 m. y generalmente formadas por cristales de hielo, los:",
        opciones: [
            {
                textoRespuesta: "Cirros, cirrostratos y cirrocúmulos",
                isCorrect: true
            },
            {
                textoRespuesta: "Estratos, cirrostratos y cúmulos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cúmulo-nimbos, cúmulos y lenticulares",
                isCorrect: false
            },
            {
                textoRespuesta: "Altocúmulos y altostratos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Respecto al siguiente METAR. LEVD 031400z 22009G20kt 150v280 CAVOK 30/07 Q1012:",
        opciones: [
            {
                textoRespuesta: "No varía",
                isCorrect: false
            },
            {
                textoRespuesta: "Varía de norte a sur",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento varía del noreste a noroeste",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento varía del sureste a suroeste",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "11. ¿Qué código Q se usa para reportar la altitud?",
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
                textoRespuesta: "QTE",
                isCorrect: false
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. En un mapa meteorológico, ¿Qué significa este símbolo?",
        opciones: [
            {
                textoRespuesta: "Viento de 90° y 25 nudos",
                isCorrect: true
            },
            {
                textoRespuesta: "Viento de 270° y 25 nudos",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento de 90° y 2,5 nudos",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento de 270° y 25 kilómetros por hora",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. Las nubes de bajo nivel se llaman también:",
        opciones: [
            {
                textoRespuesta: "Cc",
                isCorrect: false
            },
            {
                textoRespuesta: "St",
                isCorrect: true
            },
            {
                textoRespuesta: "Cs",
                isCorrect: false
            },
            {
                textoRespuesta: "As",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. Un aire caliente admite mayor cantidad de vapor de agua que uno frío.",
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
        titulo: "15. En la etapa de madurez de una tormenta se caracteriza por:",
        opciones: [
            {
                textoRespuesta: "Predominio de corrientes ascendentes, disipación de nubes y fuerte aparato eléctrico",
                isCorrect: false
            },
            {
                textoRespuesta: "Corrientes ascendentes y descendentes, precipitaciones y grandes fenómenos eléctricos",
                isCorrect: true
            },
            {
                textoRespuesta: "Precipitaciones débiles, predominio de corrientes descendientes y aparato eléctrico",
                isCorrect: false
            },
            {
                textoRespuesta: "Corrientes ascendentes y descendentes y escasas precipitaciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. ¿Cómo se llaman las condiciones meteorológicas que resultan del encuentro de dos masas de aire?",
        opciones: [
            {
                textoRespuesta: "Frente",
                isCorrect: false
            },
            {
                textoRespuesta: "Superficie frontal",
                isCorrect: true
            },
            {
                textoRespuesta: "Masas ocluidas",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuña",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. A sotavento de las montañas podéis esperar:",
        opciones: [
            {
                textoRespuesta: "a) Corrientes descendentes",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Corrientes ascendentes",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Turbulencia",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"c\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "18. Las térmicas son masas de aire calientes que ascienden desde el suelo y:",
        opciones: [
            {
                textoRespuesta: "Presentan mayor fuerza al terminar el día",
                isCorrect: false
            },
            {
                textoRespuesta: "Presentan mayor fuerza al empezar el día",
                isCorrect: false
            },
            {
                textoRespuesta: "Presentan mayor fuerza en las noches de verano",
                isCorrect: false
            },
            {
                textoRespuesta: "Presentan mayor fuerza en las horas centrales del día",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "19. ¿Con qué tipo de nubes suele venir asociada la lluvia?",
        opciones: [
            {
                textoRespuesta: "Estratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Nimboestratos",
                isCorrect: true
            },
            {
                textoRespuesta: "Estratocúmulos",
                isCorrect: false
            },
            {
                textoRespuesta: "Altocúmulos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. Delante de un frente cálido la presión:",
        opciones: [
            {
                textoRespuesta: "Baja",
                isCorrect: true
            },
            {
                textoRespuesta: "Se mantiene constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Sube",
                isCorrect: false
            },
            {
                textoRespuesta: "Sube lentamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. Las nubes medias, de 2000 a 6000 metros son:",
        opciones: [
            {
                textoRespuesta: "Ci - Cs - Ns",
                isCorrect: false
            },
            {
                textoRespuesta: "Cu - Cb",
                isCorrect: false
            },
            {
                textoRespuesta: "Ac - Cs - Ci - Cc",
                isCorrect: false
            },
            {
                textoRespuesta: "As - Ac",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "22. Se denomina superficie frontal:",
        opciones: [
            {
                textoRespuesta: "La superficie que limita las masas de aire de diferentes características",
                isCorrect: true
            },
            {
                textoRespuesta: "La superficie de la tierra afectada por el paso de la masa de aire",
                isCorrect: false
            },
            {
                textoRespuesta: "La intersección de la superficie frontal con la superficie de la tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "La zona de separación de las masas de aire",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. A la depresión se le denomina también:",
        opciones: [
            {
                textoRespuesta: "a) Ciclón",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Borrasca",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Anticiclón inverso",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"b\"",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "24. Se define como gradiente vertical de temperatura:",
        opciones: [
            {
                textoRespuesta: "A la variación de la temperatura en la distancia horizontal",
                isCorrect: false
            },
            {
                textoRespuesta: "A la variación de la temperatura con la altura",
                isCorrect: true
            },
            {
                textoRespuesta: "A la variación de la temperatura en un día",
                isCorrect: false
            },
            {
                textoRespuesta: "A la variación de la presión atmosférica en relación a la temperatura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. En un anticiclón, las presiones son más bajas:",
        opciones: [
            {
                textoRespuesta: "En primavera",
                isCorrect: false
            },
            {
                textoRespuesta: "En otoño",
                isCorrect: false
            },
            {
                textoRespuesta: "En Invierno",
                isCorrect: true
            },
            {
                textoRespuesta: "En verano",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. Las nubes formadas por turbulencia mecánica suelen alcanzar como máximo:",
        opciones: [
            {
                textoRespuesta: "3000' GND",
                isCorrect: true
            },
            {
                textoRespuesta: "El nivel de condensación",
                isCorrect: false
            },
            {
                textoRespuesta: "50.000'",
                isCorrect: false
            },
            {
                textoRespuesta: "10.000'",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Son nubes que se forman a alturas de 2.000 a 6.000 metros de altura:",
        opciones: [
            {
                textoRespuesta: "Los cirrus",
                isCorrect: false
            },
            {
                textoRespuesta: "Los cirrus-cúmulus",
                isCorrect: false
            },
            {
                textoRespuesta: "Los alto-cúmulus",
                isCorrect: true
            },
            {
                textoRespuesta: "Los estrato-cúmulus",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. La línea de intersección de la superficie frontal con la superficie de la tierra, se denomina:",
        opciones: [
            {
                textoRespuesta: "Frente",
                isCorrect: true
            },
            {
                textoRespuesta: "Superficie frontal",
                isCorrect: false
            },
            {
                textoRespuesta: "Zona frontal",
                isCorrect: false
            },
            {
                textoRespuesta: "Isobara",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. Podemos encontrar onda de montaña o turbulencias fuerte a sotavento de una cadena montañosa cuando el viento es:",
        opciones: [
            {
                textoRespuesta: "Perpendicular a ella y de por lo menos 50 nudos",
                isCorrect: false
            },
            {
                textoRespuesta: "Perpendicular a ella y de 20 nudos más o menos",
                isCorrect: true
            },
            {
                textoRespuesta: "Paralelo a ella y de 20 nudos al menos",
                isCorrect: false
            },
            {
                textoRespuesta: "Ese fenómeno sucede solamente a barlovento de las cadenas montañosas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Nivel de condensación es:",
        opciones: [
            {
                textoRespuesta: "La temperatura a la cual el vapor de agua alcanza su punto de saturación",
                isCorrect: false
            },
            {
                textoRespuesta: "El nivel al cual los cristales de hielo se convierten en agua",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud a la cual el vapor de agua alcanza su punto de rocío",
                isCorrect: true
            },
            {
                textoRespuesta: "La altitud a la cual se transforma en vapor de agua",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. La altitud de transición (TA), quien la determina:",
        opciones: [
            {
                textoRespuesta: "El estado",
                isCorrect: true
            },
            {
                textoRespuesta: "El piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "El controlador",
                isCorrect: false
            },
            {
                textoRespuesta: "El jefe de vuelos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. La buena visibilidad es una característica de:",
        opciones: [
            {
                textoRespuesta: "Aire estable",
                isCorrect: false
            },
            {
                textoRespuesta: "Aire inestable",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "33. En el hemisferio norte, ¿cómo giran los vientos en las borrascas?",
        opciones: [
            {
                textoRespuesta: "En el sentido de las agujas del reloj",
                isCorrect: false
            },
            {
                textoRespuesta: "En el mismo sentido que los anticiclones en el hemisferio sur",
                isCorrect: false
            },
            {
                textoRespuesta: "En el sentido de las agujas del reloj y en el mismo sentido que los anticiclones en el hemisferio sur",
                isCorrect: false
            },
            {
                textoRespuesta: "En el sentido contrario a las agujas del reloj y en el mismo sentido que los anticiclones en el hemisferio sur",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. La marea barométrica se presenta cuando existen altas o bajas presiones bien definidas.",
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
        titulo: "35. Las zonas industriales y grandes aglomeraciones urbanas:",
        opciones: [
            {
                textoRespuesta: "Producen fuerte inestabilidad en un aeródromo cercano",
                isCorrect: false
            },
            {
                textoRespuesta: "Produce un aumento de las temperaturas alrededor de un aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Favorece la formación de núcleos de condensación",
                isCorrect: true
            },
            {
                textoRespuesta: "Favorece la formación de neblinas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Que significa la clave OVC:",
        opciones: [
            {
                textoRespuesta: "Hay viento muy fuerte",
                isCorrect: false
            },
            {
                textoRespuesta: "Está totalmente cubierto",
                isCorrect: true
            },
            {
                textoRespuesta: "Está totalmente despejado",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay tormentas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. La diferencia de presión existente entre dos isóbaras consecutivas en una unidad de distancia, se denomina:",
        opciones: [
            {
                textoRespuesta: "Gradiente horizontal de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Gradiente vertical de presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Gradiente horizontal de presión",
                isCorrect: true
            },
            {
                textoRespuesta: "Gradiente vertical de temperatura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Las corrientes de aire en la etapa del desarrollo de una tormenta, son:",
        opciones: [
            {
                textoRespuesta: "Ascendentes",
                isCorrect: true
            },
            {
                textoRespuesta: "Descendentes",
                isCorrect: false
            },
            {
                textoRespuesta: "Nulas",
                isCorrect: false
            },
            {
                textoRespuesta: "Horizontales",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Cuando la diferencia de temperatura de dos masa de aire es igual o mayor a 5ºC y la velocidad del frente igual o superior a 30 Kts, se produce:",
        opciones: [
            {
                textoRespuesta: "Cizalladura",
                isCorrect: true
            },
            {
                textoRespuesta: "Turbulencia mecánica",
                isCorrect: false
            },
            {
                textoRespuesta: "Turbulencia orográfica",
                isCorrect: false
            },
            {
                textoRespuesta: "Onda de montaña",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Se define la cizalladura como:",
        opciones: [
            {
                textoRespuesta: "a) Un cambio brusco y rápido de la dirección del viento",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Un cambio brusco y rápido de la velocidad del viento",
                isCorrect: false
            },
            {
                textoRespuesta: "c) \"a\" y \"b\"",
                isCorrect: true
            },
            {
                textoRespuesta: "d) Ninguna de ellas es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. Como sabemos, la atmósfera se divide en 5 zonas de distintas dimensiones, la gran mayoría de los vuelos y la casi totalidad de los fenómenos atmosféricos se desarrollan:",
        opciones: [
            {
                textoRespuesta: "En la troposfera",
                isCorrect: true
            },
            {
                textoRespuesta: "En la tropopausa",
                isCorrect: false
            },
            {
                textoRespuesta: "En la estratosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "En todas las capas de la atmósfera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. Delante de un frente frío, la presión:",
        opciones: [
            {
                textoRespuesta: "Es constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Sube",
                isCorrect: false
            },
            {
                textoRespuesta: "Baja",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "43. En una zona de altas presiones, el viento circula en:",
        opciones: [
            {
                textoRespuesta: "Dirección norte",
                isCorrect: false
            },
            {
                textoRespuesta: "El sentido de las agujas del reloj",
                isCorrect: true
            },
            {
                textoRespuesta: "Dirección a las bajas presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "El sentido contrario a las agujas del reloj",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. Como se llama la isoterma de 0 grados:",
        opciones: [
            {
                textoRespuesta: "Isogona cero",
                isCorrect: false
            },
            {
                textoRespuesta: "No tiene nombre",
                isCorrect: false
            },
            {
                textoRespuesta: "Isocero",
                isCorrect: true
            },
            {
                textoRespuesta: "Isoterma cero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. Una gota fría es:",
        opciones: [
            {
                textoRespuesta: "Una precipitación en forma de cristales de hielo",
                isCorrect: false
            },
            {
                textoRespuesta: "Una alta presión caracterizada por su formación de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Un anticiclón formado a baja altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Una baja presión caracterizada por su formación en altura",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "46. En las nubes formadas por convección, con absoluta seguridad se encontrará turbulencia:",
        opciones: [
            {
                textoRespuesta: "Por encima",
                isCorrect: false
            },
            {
                textoRespuesta: "A la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "Por debajo y en el interior",
                isCorrect: true
            },
            {
                textoRespuesta: "No hay turbulencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. Respecto al siguiente METAR. LEVD 031400z 22009G20kt 150v280 CAVOK 30/07 Q1012:",
        opciones: [
            {
                textoRespuesta: "El QNE es de 1012",
                isCorrect: false
            },
            {
                textoRespuesta: "El QNH es 1012",
                isCorrect: true
            },
            {
                textoRespuesta: "El QFE es de 1012",
                isCorrect: false
            },
            {
                textoRespuesta: "El QTE es de 1012",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. La composición aproximada de la atmósfera es:",
        opciones: [
            {
                textoRespuesta: "78% Oxígeno, 21% Nitrógeno y 1% Otros gases",
                isCorrect: false
            },
            {
                textoRespuesta: "21% Oxígeno, 78% Nitrógeno y 1% Otros gases",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Al pasar un frente cálido, la temperatura baja.",
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
        titulo: "50. ¿Cuál de los siguientes tipos de nubes es más probable que origine fuertes precipitaciones?",
        opciones: [
            {
                textoRespuesta: "Ns",
                isCorrect: true
            },
            {
                textoRespuesta: "St",
                isCorrect: false
            },
            {
                textoRespuesta: "As",
                isCorrect: false
            },
            {
                textoRespuesta: "Cc",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. La isoterma es una línea que une puntos de igual temperatura. Aunque los mapas isotérmicos no dan al piloto demasiada información, hay una isoterma cuya altitud sobre todo en invierno, es necesario conocer para la seguridad de nuestro vuelo. ¿Cómo se llama?",
        opciones: [
            {
                textoRespuesta: "Isoterma estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "Isoterma del nivel medio de mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Isoterma de 0°",
                isCorrect: true
            },
            {
                textoRespuesta: "Realmente necesitamos saberlas todas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. En una borrasca los vientos circulan en sentido contrario de las agujas del reloj:",
        opciones: [
            {
                textoRespuesta: "En el hemisferio Norte y al revés en el hemisferio Sur",
                isCorrect: true
            },
            {
                textoRespuesta: "En el hemisferio Sur y al revés en el hemisferio Norte",
                isCorrect: false
            },
            {
                textoRespuesta: "Tanto en el hemisferio Norte como en el Sur",
                isCorrect: false
            },
            {
                textoRespuesta: "Indistintamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. La escarcha es la transformación del vapor de agua en cristales de hielo cuando el punto de rocío es igual a 0ºC.",
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
        titulo: "54. En una inversión térmica se produce:",
        opciones: [
            {
                textoRespuesta: "Disminución de temperatura al aumentar la altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumento de la temperatura al aumentar la altitud",
                isCorrect: true
            },
            {
                textoRespuesta: "La inversión térmica en altura es la más peligrosa para el vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Produce nieblas persistentes en invierno",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. Que significa la clave SKC:",
        opciones: [
            {
                textoRespuesta: "Ausencia de nubes",
                isCorrect: true
            },
            {
                textoRespuesta: "Buena visibilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Granizo",
                isCorrect: false
            },
            {
                textoRespuesta: "Tormentas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. La atmósfera es una capa gaseosa que rodea la tierra y, como en un océano, en ella hay mareas, corrientes y desplazamiento de masas, ¿Cómo se llaman esos movimientos?",
        opciones: [
            {
                textoRespuesta: "Movimientos regulares",
                isCorrect: false
            },
            {
                textoRespuesta: "Movimientos sísmicos",
                isCorrect: false
            },
            {
                textoRespuesta: "Circulación atmosférica",
                isCorrect: true
            },
            {
                textoRespuesta: "Corrientes de chorro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. Si una masa de aire caliente de mayor actividad choca contra una de aire frío obligándola a retirarse:",
        opciones: [
            {
                textoRespuesta: "Se produce un frente frío",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce un frente estacionario",
                isCorrect: false
            },
            {
                textoRespuesta: "No puede ocurrir",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce un frente cálido",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "58. La atmósfera está compuesta por:",
        opciones: [
            {
                textoRespuesta: "90% de oxigeno; 10% de nitrógeno; 0,10% de argón; 0,5% de dióxido de carbono y el resto de diversos gases",
                isCorrect: false
            },
            {
                textoRespuesta: "75% de oxigeno y 5% de nitrómetano además de gas carbónico y polvo en suspensión",
                isCorrect: false
            },
            {
                textoRespuesta: "78% de nitrógeno; 21% de oxigeno; 0,90% de argón; 0,03% de dióxido de carbono y el resto de diversos gases",
                isCorrect: true
            },
            {
                textoRespuesta: "78% de oxigeno; 21% de nitrógeno; 0,90% de argón; 0,03% de dióxido de carbono y el resto de diversos gases",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. La temperatura de la atmósfera estándar a nivel del mar, es de:",
        opciones: [
            {
                textoRespuesta: "16,5º C.",
                isCorrect: false
            },
            {
                textoRespuesta: "25º C.",
                isCorrect: false
            },
            {
                textoRespuesta: "15º C.",
                isCorrect: true
            },
            {
                textoRespuesta: "5º C.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. Transformar 500 mb. en hectopascales.",
        opciones: [
            {
                textoRespuesta: "100 Hpa.",
                isCorrect: false
            },
            {
                textoRespuesta: "200 Hpa.",
                isCorrect: false
            },
            {
                textoRespuesta: "300 Hpa.",
                isCorrect: false
            },
            {
                textoRespuesta: "500 Hpa.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. Cuál es el gradiente de disminución de temperatura con la altura:",
        opciones: [
            {
                textoRespuesta: "a) Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "b) 6.5 grados cada 1.000 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "c) 2 grados por cada 1.000 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"b\" y la \"c\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "62. Si al llegar a nuestro campo de vuelo observamos que hay niebla a baja cota pero parece que esta va a disiparse en breve, ¿Podremos despegar?:",
        opciones: [
            {
                textoRespuesta: "Solo si estamos totalmente seguros de que despejara",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si tenemos instrumentación con visión sintética en la Aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí pero sólo si vemos el Sol",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Humedad absoluta es:",
        opciones: [
            {
                textoRespuesta: "La temperatura a la cual el vapor de agua se condensa",
                isCorrect: false
            },
            {
                textoRespuesta: "La cantidad de vapor de agua que hay en un frente cálido y húmedo",
                isCorrect: false
            },
            {
                textoRespuesta: "La cantidad de vapor de agua que hay en una unidad de aire",
                isCorrect: true
            },
            {
                textoRespuesta: "La cantidad de vapor de agua necesaria para que el aire se sature",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Nivel de condensación es:",
        opciones: [
            {
                textoRespuesta: "La altitud a la cual se transforma en vapor de agua",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud a la cual el vapor de agua alcanza su punto de rocío",
                isCorrect: true
            },
            {
                textoRespuesta: "La temperatura a la cual el vapor de agua alcanza su punto de saturación",
                isCorrect: false
            },
            {
                textoRespuesta: "El nivel al cual los cristales de hielo se convierten en agua",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. Cuanto más cálido sea el aire en altitud, menos estable será la masa de aire.",
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
        titulo: "66. Cuando una masa de aire caliente estable asciende uniformemente, enfriándose y condensándose en nubes estables y estratificadas, el frente es:",
        opciones: [
            {
                textoRespuesta: "Cálido - estable",
                isCorrect: true
            },
            {
                textoRespuesta: "Frío - estable",
                isCorrect: false
            },
            {
                textoRespuesta: "Cálido - inestable",
                isCorrect: false
            },
            {
                textoRespuesta: "Frío - inestable",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. El punto de rocío es la temperatura a la cual:",
        opciones: [
            {
                textoRespuesta: "Se alcanza el punto de saturación del vapor de agua",
                isCorrect: true
            },
            {
                textoRespuesta: "Se alcanza el punto de mayor temperatura del vapor de agua",
                isCorrect: false
            },
            {
                textoRespuesta: "Es igual que la temperatura de ebullición",
                isCorrect: false
            },
            {
                textoRespuesta: "Es igual que el punto de saturación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. En una circulación brisa terrestre y marina la brisa de tierra:",
        opciones: [
            {
                textoRespuesta: "La brisa terrestre fluye de tierra a mar durante el día",
                isCorrect: false
            },
            {
                textoRespuesta: "La brisa terrestre fluye de mar a tierra durante la día",
                isCorrect: false
            },
            {
                textoRespuesta: "La brisa terrestre fluye de tierra a mar durante la noche",
                isCorrect: true
            },
            {
                textoRespuesta: "La brisa terrestre fluye de mar a tierra durante la noche",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. En un frente frío, cuando la masa de aire caliente es estable, se originan nubes de desarrollo vertical.",
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
        titulo: "70. En un METAR, en el campo de las nubes, dice OVC045:",
        opciones: [
            {
                textoRespuesta: "La clave numérica es la altura de la base, que son 4500 pies",
                isCorrect: true
            },
            {
                textoRespuesta: "La clave numérica, es la altitud de la base",
                isCorrect: false
            },
            {
                textoRespuesta: "La clave numérica es la cantidad de nubes",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. Calima es:",
        opciones: [
            {
                textoRespuesta: "Viento totalmente en calma",
                isCorrect: false
            },
            {
                textoRespuesta: "La suspensión de partículas de polvo en el aire",
                isCorrect: true
            },
            {
                textoRespuesta: "Partículas cargadas de humedad suspendidas en el aire",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. En el caso de niebla intensa, podemos suponer que será persistente si el viento es:",
        opciones: [
            {
                textoRespuesta: "En calma o muy ligero",
                isCorrect: true
            },
            {
                textoRespuesta: "Muy fuerte",
                isCorrect: false
            },
            {
                textoRespuesta: "Muy frío",
                isCorrect: false
            },
            {
                textoRespuesta: "Norte",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. En caso de niebla intensa podemos suponer que será persistente si el viento es:",
        opciones: [
            {
                textoRespuesta: "Muy fuerte",
                isCorrect: false
            },
            {
                textoRespuesta: "Muy frío",
                isCorrect: false
            },
            {
                textoRespuesta: "De dirección constante",
                isCorrect: false
            },
            {
                textoRespuesta: "En calma",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "74. Doblando la presión del aire, su volumen:",
        opciones: [
            {
                textoRespuesta: "Disminuye la mitad",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye tres veces",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye según su temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. Definición de altitud de densidad:",
        opciones: [
            {
                textoRespuesta: "La que nos da el altímetro cuando lo calamos con la presión real",
                isCorrect: false
            },
            {
                textoRespuesta: "Es siempre igual a la altitud, independientemente de la temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "La que nos da el altímetro calado a 1013",
                isCorrect: false
            },
            {
                textoRespuesta: "A la altitud de presión corregida según temperatura real exterior",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "76. En un sistema de bajas presiones, la presión es mínima en:",
        opciones: [
            {
                textoRespuesta: "Exterior",
                isCorrect: false
            },
            {
                textoRespuesta: "Centro",
                isCorrect: true
            },
            {
                textoRespuesta: "En las orillas",
                isCorrect: false
            },
            {
                textoRespuesta: "La misma en toda su extensión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. Las borrascas llevan asociadas:",
        opciones: [
            {
                textoRespuesta: "Vientos flojos",
                isCorrect: false
            },
            {
                textoRespuesta: "Bajas presiones",
                isCorrect: true
            },
            {
                textoRespuesta: "Altas presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "Altas temperaturas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. Las corrientes de aire verticales producidas por las diferentes temperaturas del suelo producen nubes:",
        opciones: [
            {
                textoRespuesta: "De advección",
                isCorrect: false
            },
            {
                textoRespuesta: "Mal definidas",
                isCorrect: false
            },
            {
                textoRespuesta: "De convección",
                isCorrect: true
            },
            {
                textoRespuesta: "De turbulencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. Para que se den precipitaciones es necesario:",
        opciones: [
            {
                textoRespuesta: "Que intervengan fuertes vientos",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la temperatura se eleve precipitadamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el aire se encuentre saturado de humedad",
                isCorrect: true
            },
            {
                textoRespuesta: "Que la presión atmosférica varíe en poco espacio y en poco tiempo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Cuando una masa de aire frío, de mayor actividad, avanza por debajo del aire cálido, penetrando como una cuña y obligándola a elevarse, se produce un frente:",
        opciones: [
            {
                textoRespuesta: "Cálido",
                isCorrect: false
            },
            {
                textoRespuesta: "Frío",
                isCorrect: true
            },
            {
                textoRespuesta: "Ocluido",
                isCorrect: false
            },
            {
                textoRespuesta: "Estacionario",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. Si en un mapa meteorológico encontramos dibujadas las isobaras muy separadas, significa:",
        opciones: [
            {
                textoRespuesta: "Que hará mucho frío",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el viento será fuerte",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento será flojo",
                isCorrect: true
            },
            {
                textoRespuesta: "Que hará mucho calor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Una gota fría es:",
        opciones: [
            {
                textoRespuesta: "Una baja presión caracterizada por su formación en altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Una precipitación en forma de cristales de hielo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un anticiclón formado a baja altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Una alta presión caracterizada por su formación de altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Según los valores ISA, el gradiente vertical de temperatura es de:",
        opciones: [
            {
                textoRespuesta: "2 grados C/1.000 pies",
                isCorrect: true
            },
            {
                textoRespuesta: "10 grados /1.000 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "5 grados/1.000 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "20 grados/1.000 pies",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. Las nubes de desarrollo vertical, desde cerca del suelo hasta 15 km son:",
        opciones: [
            {
                textoRespuesta: "Cu - Cb",
                isCorrect: true
            },
            {
                textoRespuesta: "Sc - Cu",
                isCorrect: false
            },
            {
                textoRespuesta: "Ns - Ci",
                isCorrect: false
            },
            {
                textoRespuesta: "Ci - Cc",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. En una térmica, la ascensión del aire caliente es:",
        opciones: [
            {
                textoRespuesta: "Menor cuanto mayor humedad posea el aire y mayor gradiente de temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor cuanto mayor humedad posea el aire y mayor gradiente de temperatura",
                isCorrect: true
            },
            {
                textoRespuesta: "Menor cuanto menor humedad posea el aire y mayor gradiente de temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor cuanto mayor humedad posea el aire y menor gradiente de temperatura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. Se define como ráfaga:",
        opciones: [
            {
                textoRespuesta: "El valor de la intensidad del viento cuando es constante",
                isCorrect: false
            },
            {
                textoRespuesta: "El valor máximo de la intensidad del viento cuando no es constante",
                isCorrect: true
            },
            {
                textoRespuesta: "El valor mínimo de la intensidad del viento cuando no es constante",
                isCorrect: false
            },
            {
                textoRespuesta: "La turbulencia creada al sotavento de una montaña",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. El factor determinante en las actuaciones de un avión es:",
        opciones: [
            {
                textoRespuesta: "La densidad",
                isCorrect: true
            },
            {
                textoRespuesta: "La estación del año",
                isCorrect: false
            },
            {
                textoRespuesta: "La hora del día",
                isCorrect: false
            },
            {
                textoRespuesta: "La estación del tren",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. Una masa de aire es activa si:",
        opciones: [
            {
                textoRespuesta: "Produce grandes precipitaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Produce nubes de convección",
                isCorrect: false
            },
            {
                textoRespuesta: "Produce inestabilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Se desplaza rápidamente",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "89. Cuando una masa de aire caliente, de mayor actividad, arremete contra una masa de aire frío haciéndola retirarse, se produce un frente:",
        opciones: [
            {
                textoRespuesta: "Cálido",
                isCorrect: true
            },
            {
                textoRespuesta: "Frío",
                isCorrect: false
            },
            {
                textoRespuesta: "Estacionario",
                isCorrect: false
            },
            {
                textoRespuesta: "Ocluido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. ¿Qué formación nubosa es más probable que se desarrolle a baja cota cuando una masa de aire cálido se superpone a una masa de aire frío?",
        opciones: [
            {
                textoRespuesta: "Estratos",
                isCorrect: true
            },
            {
                textoRespuesta: "Cúmulos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cúmulonimbos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cirros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. El mínimo diario de temperatura coincide con:",
        opciones: [
            {
                textoRespuesta: "El mediodía",
                isCorrect: false
            },
            {
                textoRespuesta: "El ocaso",
                isCorrect: false
            },
            {
                textoRespuesta: "2 ó 3 horas después del orto",
                isCorrect: false
            },
            {
                textoRespuesta: "El orto",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "92. Existe riesgo de encontrar onda de montaña o al menos turbulencia fuerte cuando el viento es perpendicular a la cadena montañosa y su intensidad es como mínimo de:",
        opciones: [
            {
                textoRespuesta: "50 nudos",
                isCorrect: false
            },
            {
                textoRespuesta: "20 nudos",
                isCorrect: true
            },
            {
                textoRespuesta: "30 nudos",
                isCorrect: false
            },
            {
                textoRespuesta: "Calma",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. Las nubes Medias son:",
        opciones: [
            {
                textoRespuesta: "As - Ac",
                isCorrect: true
            },
            {
                textoRespuesta: "Ac - St - Sc",
                isCorrect: false
            },
            {
                textoRespuesta: "Ci - Cs - Cc",
                isCorrect: false
            },
            {
                textoRespuesta: "Ns - St - Cs",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. La niebla por radiación se forma sobre tierra firme al enfriarse ésta:",
        opciones: [
            {
                textoRespuesta: "En noches claras y serenas",
                isCorrect: true
            },
            {
                textoRespuesta: "En noches nubosas",
                isCorrect: false
            },
            {
                textoRespuesta: "En noches de viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. En una zona de altas presiones situada en el hemisferio Norte, el viento circula en:",
        opciones: [
            {
                textoRespuesta: "Dirección norte",
                isCorrect: false
            },
            {
                textoRespuesta: "El sentido de las agujas del reloj",
                isCorrect: true
            },
            {
                textoRespuesta: "Hacia las bajas presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "En sentido antihorario",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. La etapa de disipación de una tormenta se caracteriza por:",
        opciones: [
            {
                textoRespuesta: "Comienzo de la precipitación, corrientes descendentes intensas por debajo de la isoterma de 0ºC.",
                isCorrect: false
            },
            {
                textoRespuesta: "Predominio de las corrientes descendentes, cese de la lluvia y disipación de las nubes",
                isCorrect: true
            },
            {
                textoRespuesta: "Desarrollo de un cúmulo por aumento de la humedad y fuerte inestabilidad, corrientes ascendentes especialmente intensas pasando la isoterma de 0ºC.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. La niebla puede darse cuando el aire está húmedo en zonas de:",
        opciones: [
            {
                textoRespuesta: "Bajas presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "Altas presiones",
                isCorrect: true
            },
            {
                textoRespuesta: "Presión constante",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión no influye en la producción de niebla",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. En un anticiclón, la presión es máxima en el centro.",
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
        titulo: "99. Los cumulonimbos solo son peligrosos si nos metemos dentro:",
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
        titulo: "100. El viento fluye de la alta a la baja presión.",
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
    }
];

export default preguntas;