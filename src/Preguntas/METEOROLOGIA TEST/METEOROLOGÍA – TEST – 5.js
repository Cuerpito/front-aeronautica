const preguntas = [
    {
        titulo: "1. Para considerar una niebla como neblina, la visibilidad debe ser:",
        opciones: [
            {
                textoRespuesta: "Inferior a 100 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "Superior a 1 kilómetro",
                isCorrect: true
            },
            {
                textoRespuesta: "Inferior a 1 kilómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Superior a 1.000 pies",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. En una zona de altas presiones, cuando el aire esta húmedo, es fácil la existencia de nieblas.",
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
        titulo: "3. Una masa de aire se llama activa cuando:",
        opciones: [
            {
                textoRespuesta: "Se desplaza muy rápidamente",
                isCorrect: true
            },
            {
                textoRespuesta: "Tiene gran aparato eléctrico",
                isCorrect: false
            },
            {
                textoRespuesta: "Es muy inestable",
                isCorrect: false
            },
            {
                textoRespuesta: "Es de aire caliente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. ¿Qué es un nimboestrato?",
        opciones: [
            {
                textoRespuesta: "Es un nivel de gran cizalladura",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una capa nubosa, que contiene gran cantidad de agua",
                isCorrect: true
            },
            {
                textoRespuesta: "Es una nube que tiene fuertes corrientes",
                isCorrect: false
            },
            {
                textoRespuesta: "Es de un proceso idéntico al de formación de la niebla, pero con mayor intensidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. En un sistema frontal orográfico, cuando la masa de aire es inestable y húmeda, la nubosidad que se forma es:",
        opciones: [
            {
                textoRespuesta: "De poco desarrollo vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Cumuliforme",
                isCorrect: true
            },
            {
                textoRespuesta: "Estratiforme",
                isCorrect: false
            },
            {
                textoRespuesta: "Prácticamente nula",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. El aire:",
        opciones: [
            {
                textoRespuesta: "Es una mezcla química de diferentes gases con el oxígeno y el nitrógeno como principales",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una mezcla física de diferentes gases con el oxígeno y el nitrógeno como principales",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "7. El tiempo meteorológico en una línea de turbonada suele le ser muy peligroso y produce chubascos muy intensos pero de duración",
        opciones: [
            {
                textoRespuesta: "Entre 1 y 2 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "De 15 a 30 minutos",
                isCorrect: true
            },
            {
                textoRespuesta: "Continuos todo el día",
                isCorrect: false
            },
            {
                textoRespuesta: "No produce chubascos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Durante el paso de un frente cálido la visibilidad es:",
        opciones: [
            {
                textoRespuesta: "Buena",
                isCorrect: false
            },
            {
                textoRespuesta: "Mala",
                isCorrect: true
            },
            {
                textoRespuesta: "Regular",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. La formación nubosa más peligrosa para el vuelo por sus condiciones turbulentas son los:",
        opciones: [
            {
                textoRespuesta: "Cirrocúmulos",
                isCorrect: false
            },
            {
                textoRespuesta: "Nimboestratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cumulonimbos",
                isCorrect: true
            },
            {
                textoRespuesta: "Cúmulos húmilis",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Cuando una masa de aire caliente pasa por encima de una fría, origina nubes:",
        opciones: [
            {
                textoRespuesta: "De advección",
                isCorrect: true
            },
            {
                textoRespuesta: "De convección",
                isCorrect: false
            },
            {
                textoRespuesta: "Frontales",
                isCorrect: false
            },
            {
                textoRespuesta: "De turbulencias",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Se dice que un viento es periódico cuando:",
        opciones: [
            {
                textoRespuesta: "Unas veces lleva un sentido y en otras ocasiones otro",
                isCorrect: true
            },
            {
                textoRespuesta: "Su acción es constante y en la misma dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Su acción es constante y en distinta dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Son propios de una región determinada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. Por debajo de qué tipo de nubes pueden esperarse turbulencias notables.",
        opciones: [
            {
                textoRespuesta: "Estratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Nimbostratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cúmulos",
                isCorrect: true
            },
            {
                textoRespuesta: "Altostratos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. ¿Cuál es la presión en la atmósfera estándar a nivel del mar?",
        opciones: [
            {
                textoRespuesta: "1013 milibares",
                isCorrect: false
            },
            {
                textoRespuesta: "760 milímetros",
                isCorrect: false
            },
            {
                textoRespuesta: "29,92 pulgadas",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. En un frente cálido, la masa de aire caliente se desliza por debajo de la masa de aire frío obligándola a retirarse.",
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
        titulo: "15. La variación de la temperatura con la altura en la atmósfera estándar es de 6,5º por kilómetro de altura hasta 11 kilómetros:",
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
        titulo: "16. La turbulencia orográfica es la producida por el viento:",
        opciones: [
            {
                textoRespuesta: "En el transcurso del día en verano",
                isCorrect: false
            },
            {
                textoRespuesta: "Al paso por terreno accidentado",
                isCorrect: true
            },
            {
                textoRespuesta: "Al cruzar grandes superficies de agua",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. La temperatura a la cual se alcanza el punto de saturación del vapor de agua, se denomina:",
        opciones: [
            {
                textoRespuesta: "Punto de saturación",
                isCorrect: false
            },
            {
                textoRespuesta: "Punto de rocío",
                isCorrect: true
            },
            {
                textoRespuesta: "Punto de tensión de vapor",
                isCorrect: false
            },
            {
                textoRespuesta: "Temperatura de ebullición",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Los estratos están asociados generalmente a:",
        opciones: [
            {
                textoRespuesta: "Vientos débiles",
                isCorrect: true
            },
            {
                textoRespuesta: "Condiciones turbulentas",
                isCorrect: false
            },
            {
                textoRespuesta: "Buena visibilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Precipitaciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. La temperatura varia con la altura (gradiente vertical, de temperatura) de la siguiente forma:",
        opciones: [
            {
                textoRespuesta: "5° cada 1.000 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "5° cada 1.000 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "6,5° cada 1.000 metros",
                isCorrect: true
            },
            {
                textoRespuesta: "6,5° cada 1.000 pies",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. El predominio de corrientes descendentes, la disipación de las nubes y el cese de las precipitaciones en una tormenta, corresponde a la etapa de disipación.",
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
        titulo: "21. ¿Dónde se desarrollan los ciclones y anticiclones térmicos?",
        opciones: [
            {
                textoRespuesta: "En los mares",
                isCorrect: false
            },
            {
                textoRespuesta: "En las costas",
                isCorrect: false
            },
            {
                textoRespuesta: "En los continentes",
                isCorrect: true
            },
            {
                textoRespuesta: "En zonas de baja presión atmosférica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. La formación de una tormenta está condicionada por:",
        opciones: [
            {
                textoRespuesta: "Gran estabilidad atmosférica, con fuerte gradiente de temperatura y baja humedad",
                isCorrect: false
            },
            {
                textoRespuesta: "Gran inestabilidad atmosférica, con fuerte gradiente vertical de temperatura y alta humedad",
                isCorrect: true
            },
            {
                textoRespuesta: "Gran inestabilidad atmosférica, con gradiente horizontal de temperatura poco acusado",
                isCorrect: false
            },
            {
                textoRespuesta: "Gran inestabilidad atmosférica, con fuerte gradiente horizontal de presión y baja humedad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. En los mapas meteorológicos la letra A y la letra B representan",
        opciones: [
            {
                textoRespuesta: "A= anticiclón y B= ciclón",
                isCorrect: true
            },
            {
                textoRespuesta: "A= collado y B= loma",
                isCorrect: false
            },
            {
                textoRespuesta: "A= depresión y B= bonanza",
                isCorrect: false
            },
            {
                textoRespuesta: "A= borrasca y B= depresión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Se denomina humedad absoluta:",
        opciones: [
            {
                textoRespuesta: "La cantidad de vapor de agua que existe en una unidad de aire",
                isCorrect: true
            },
            {
                textoRespuesta: "La tensión de vapor en un metro cúbico de aire",
                isCorrect: false
            },
            {
                textoRespuesta: "La cantidad de vapor de agua que tiene que haber para que el aire esté saturado",
                isCorrect: false
            },
            {
                textoRespuesta: "La temperatura para la cual el vapor de agua se condensa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. Si la diferencia entre la temperatura exterior y el punto de rocío es menor de 2ºC:",
        opciones: [
            {
                textoRespuesta: "Se pueden formar nieblas engelante con temperaturas menores de 10ºC y viento entre 5-15 kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se pueden formar nieblas con viento flojo",
                isCorrect: true
            },
            {
                textoRespuesta: "Se pueden formar nieblas si la temperatura es inferior a la estándar y el viento en calma",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo se formarán nieblas se la diferencia entre punto de rocío y temperatura exterior es mayor de 2ºC.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. La etapa de desarrollo de una tormenta se caracteriza por:",
        opciones: [
            {
                textoRespuesta: "Baja precipitación, corrientes descendentes intensas por debajo de la isoterma de 0ºC.",
                isCorrect: false
            },
            {
                textoRespuesta: "Predominio de las corrientes descendentes, cese de la lluvia y disipación de las nubes",
                isCorrect: false
            },
            {
                textoRespuesta: "Desarrollo de un cúmulo por aumento de la humedad y fuerte inestabilidad, corrientes ascendentes especialmente intensas pasando la isoterma de 0ºC.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. En condiciones ISA, la temperatura a nivel del mar es de:",
        opciones: [
            {
                textoRespuesta: "10 grados centígrados",
                isCorrect: false
            },
            {
                textoRespuesta: "5 grados centígrados",
                isCorrect: false
            },
            {
                textoRespuesta: "15 grados centígrados",
                isCorrect: true
            },
            {
                textoRespuesta: "20 grados centígrados",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. La relación que existe entre la humedad absoluta del aire y la que tendría que haber para que estuviera saturado, se denomina:",
        opciones: [
            {
                textoRespuesta: "Humedad relativa",
                isCorrect: true
            },
            {
                textoRespuesta: "Humedad absoluta",
                isCorrect: false
            },
            {
                textoRespuesta: "Tensión de vapor",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las tres",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. La onda de montaña se define como:",
        opciones: [
            {
                textoRespuesta: "Turbulencia muy fuerte creada en el sotavento de una montaña",
                isCorrect: true
            },
            {
                textoRespuesta: "Turbulencia muy fuerte creada en el barlovento de una montaña",
                isCorrect: false
            },
            {
                textoRespuesta: "Turbulencia creada en una montaña por ráfagas de viento existente en altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Onda de viento originada en el barlovento de una montaña y de dirección paralela a la misma",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Si una masa de aire caliente estable al ascender uniformemente, se enfría y se condensa en nubes estables y estratificadas, crea:",
        opciones: [
            {
                textoRespuesta: "Un frente frío - estable",
                isCorrect: false
            },
            {
                textoRespuesta: "Un frente cálido - estable",
                isCorrect: true
            },
            {
                textoRespuesta: "Un frente frío - inestable",
                isCorrect: false
            },
            {
                textoRespuesta: "Un frente caliente - inestable",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. La atmósfera está compuesta por:",
        opciones: [
            {
                textoRespuesta: "78% de oxigeno, 21% de nitrógeno; 0,90% de argón; 0.03% de dióxido de carbono y el resto de diversos gases",
                isCorrect: false
            },
            {
                textoRespuesta: "78% de nitrógeno, 21% de oxigeno; 0,90% de argón; 0.03% de dióxido de carbono y el resto de diversos gases",
                isCorrect: true
            },
            {
                textoRespuesta: "90% de oxigeno, 10% de nitrógeno; 0,10% de argón; 0.5% de dióxido de carbono y el resto de diversos gases",
                isCorrect: false
            },
            {
                textoRespuesta: "50% de oxigeno y 50% de nitrógeno junto con otros gases",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. La atmósfera estándar, la temperatura a nivel del mar se considera igual a:",
        opciones: [
            {
                textoRespuesta: "0º",
                isCorrect: false
            },
            {
                textoRespuesta: "10º",
                isCorrect: false
            },
            {
                textoRespuesta: "15º",
                isCorrect: true
            },
            {
                textoRespuesta: "Puede variar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Se dice que un viento es local cuando:",
        opciones: [
            {
                textoRespuesta: "Es propio de un área territorial muy pequeña",
                isCorrect: true
            },
            {
                textoRespuesta: "Unas veces lleva un sentido y en otras ocasiones otro",
                isCorrect: false
            },
            {
                textoRespuesta: "Su acción es constante y en una misma dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Su acción es variable y en distinta dirección",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. ¿Qué es necesario para que se produzcan precipitaciones?",
        opciones: [
            {
                textoRespuesta: "Que la temperatura ambiente sea elevada",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la presión atmosférica sea alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el aire esté saturado",
                isCorrect: true
            },
            {
                textoRespuesta: "Que la densidad del aire sea alta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. La convección es el fenómeno por el que el calor del suelo se transmite al aire:",
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
        titulo: "36. La zona de separación de dos masas de aire de diferentes características, se denomina:",
        opciones: [
            {
                textoRespuesta: "Isobara",
                isCorrect: false
            },
            {
                textoRespuesta: "Superficie frontal",
                isCorrect: true
            },
            {
                textoRespuesta: "Frente",
                isCorrect: false
            },
            {
                textoRespuesta: "Zona frontal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. Después de pasar un frente cálido la visibilidad es:",
        opciones: [
            {
                textoRespuesta: "Buena",
                isCorrect: false
            },
            {
                textoRespuesta: "Regular",
                isCorrect: false
            },
            {
                textoRespuesta: "Mala",
                isCorrect: true
            },
            {
                textoRespuesta: "Nula",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. ¿Cuál es la presión atmosférica en la atmósfera estándar a nivel del mar?",
        opciones: [
            {
                textoRespuesta: "1013 milibares",
                isCorrect: false
            },
            {
                textoRespuesta: "760 mm Hg.",
                isCorrect: false
            },
            {
                textoRespuesta: "29,92 pulgadas",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "39. El tiempo meteorológico en una línea de turbonada suele ser muy peligroso, y produce chubascos muy intensos, pero de duración:",
        opciones: [
            {
                textoRespuesta: "15 a 30 minutos",
                isCorrect: true
            },
            {
                textoRespuesta: "Continuos todo el día",
                isCorrect: false
            },
            {
                textoRespuesta: "No produce chubascos",
                isCorrect: false
            },
            {
                textoRespuesta: "Entre 1 y 2 horas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. El granizo puede formarse en nubes del tipo:",
        opciones: [
            {
                textoRespuesta: "Estratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Altostratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cumulonimbo",
                isCorrect: true
            },
            {
                textoRespuesta: "Cirros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. Las nubes se desplazan con el viento, por lo que las térmicas se encuentran a sotavento de las mismas.",
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
        titulo: "42. En la atmósfera estándar, la temperatura al nivel del mar se considera igual a:",
        opciones: [
            {
                textoRespuesta: "25º",
                isCorrect: false
            },
            {
                textoRespuesta: "0º",
                isCorrect: false
            },
            {
                textoRespuesta: "15º",
                isCorrect: true
            },
            {
                textoRespuesta: "Es variable",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. Algunos fenómenos atmosféricos es posible preverlos, pero otros se presentan inesperadamente haciendo difícil su predicción.",
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
        titulo: "44. La 'gloria' es un o unos anillos de colores de difracción, observado al lado opuesto del sol, sobre una nube de agua líquida o sobre el rocío.",
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
        titulo: "45. ¿Cómo se realiza la formación de las nubes?",
        opciones: [
            {
                textoRespuesta: "Por la transformación del vapor de agua en cristales de hielo",
                isCorrect: false
            },
            {
                textoRespuesta: "Por enfriamiento del aire húmedo",
                isCorrect: true
            },
            {
                textoRespuesta: "Por calentamiento del aire húmedo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las tres",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. Tras el paso de un frente cálido:",
        opciones: [
            {
                textoRespuesta: "La visibilidad es mala",
                isCorrect: false
            },
            {
                textoRespuesta: "La visibilidad es buena",
                isCorrect: false
            },
            {
                textoRespuesta: "La visibilidad es regular y mejorando",
                isCorrect: true
            },
            {
                textoRespuesta: "La visibilidad no se ve influida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. En las cimas de las montañas podemos esperar vientos:",
        opciones: [
            {
                textoRespuesta: "Más fuertes",
                isCorrect: true
            },
            {
                textoRespuesta: "Más débiles",
                isCorrect: false
            },
            {
                textoRespuesta: "De igual intensidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Calma",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. La fuerza de la brisa marina es mayor:",
        opciones: [
            {
                textoRespuesta: "En el ocaso",
                isCorrect: false
            },
            {
                textoRespuesta: "Al amanecer",
                isCorrect: false
            },
            {
                textoRespuesta: "Al mediodía",
                isCorrect: true
            },
            {
                textoRespuesta: "De noche",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. ¿De qué forma se realizan normalmente las precipitaciones en una gota fría?",
        opciones: [
            {
                textoRespuesta: "En forma de llovizna fina",
                isCorrect: false
            },
            {
                textoRespuesta: "En forma de chubascos y tormentas",
                isCorrect: true
            },
            {
                textoRespuesta: "En forma de nieve",
                isCorrect: false
            },
            {
                textoRespuesta: "No se producen precipitaciones",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;