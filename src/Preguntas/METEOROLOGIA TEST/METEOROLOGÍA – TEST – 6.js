const preguntas = [
    {
        titulo: "1. ¿Cuál es la zona habitable de la atmósfera?",
        opciones: [
            {
                textoRespuesta: "Entre el nivel del mar y 10.000’",
                isCorrect: true
            },
            {
                textoRespuesta: "Entre el nivel del mar y 20.000’",
                isCorrect: false
            },
            {
                textoRespuesta: "La troposfera",
                isCorrect: false
            },
            {
                textoRespuesta: "La troposfera y la tropopausa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. ¿Cuántas octas del cielo están cubiertas por nubes cuando está SCT?",
        opciones: [
            {
                textoRespuesta: "1-2",
                isCorrect: false
            },
            {
                textoRespuesta: "3-4-5",
                isCorrect: false
            },
            {
                textoRespuesta: "3-4",
                isCorrect: true
            },
            {
                textoRespuesta: "5-6-7",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. En la etapa de madurez de una tormenta, por encima de la isocero encontraremos:",
        opciones: [
            {
                textoRespuesta: "Corrientes ascendentes",
                isCorrect: false
            },
            {
                textoRespuesta: "Granizo o nieve",
                isCorrect: false
            },
            {
                textoRespuesta: "Precipitaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "4. En vuelo, ¿dónde podemos escuchar el METAR de un aeródromo?",
        opciones: [
            {
                textoRespuesta: "En el VOLMET",
                isCorrect: true
            },
            {
                textoRespuesta: "En el AIP",
                isCorrect: false
            },
            {
                textoRespuesta: "En el SIGMET",
                isCorrect: false
            },
            {
                textoRespuesta: "En el GAFOR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Podemos definir los vientos locales como “vientos a gran escala generados por gradientes locales de presión”.",
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
        titulo: "6. Si el gradiente de presión es pequeño significa que:",
        opciones: [
            {
                textoRespuesta: "Las isobaras están muy juntas",
                isCorrect: false
            },
            {
                textoRespuesta: "La borrasca o el anticiclón es muy pequeño",
                isCorrect: false
            },
            {
                textoRespuesta: "Las isobaras están bastante separadas",
                isCorrect: true
            },
            {
                textoRespuesta: "El viento es muy fuerte",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Cuando un frente está ocluido:",
        opciones: [
            {
                textoRespuesta: "Es probable que formen nubes de advección",
                isCorrect: true
            },
            {
                textoRespuesta: "Probablemente se formen nubes de convección",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento soplará paralelo al frente",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. El METAR “LEJR 212130Z 10005KT 070V130 CAVOK 10/06 Q1028”, suponiendo que estamos en invierno, ¿a qué hora local se ha realizado?",
        opciones: [
            {
                textoRespuesta: "A las 21 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "A las 22 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "A las 22:30 horas",
                isCorrect: true
            },
            {
                textoRespuesta: "A las 21:30 horas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Indique la correcta. La composición de la atmósfera es:",
        opciones: [
            {
                textoRespuesta: "78% Nitrógeno, 21% Oxígeno y 1% otros gases, de forma prácticamente constante hasta los 20.000’",
                isCorrect: false
            },
            {
                textoRespuesta: "78% Oxígeno, 21% Nitrógeno y 1% otros gases, de forma prácticamente constante hasta los 70.000’",
                isCorrect: false
            },
            {
                textoRespuesta: "78% Nitrógeno, 21% Oxígeno y 1% otros gases, de forma prácticamente constante hasta los 70.000’",
                isCorrect: true
            },
            {
                textoRespuesta: "78% Nitrógeno, 21% Oxígeno y 1 % otros gases, de forma prácticamente constante hasta los 10.000’",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. ¿Qué es la tropopausa?",
        opciones: [
            {
                textoRespuesta: "Es la zona que separa la troposfera de la mesosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la zona que separa la termosfera de la estratosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la zona que separa la troposfera de la estratosfera",
                isCorrect: true
            },
            {
                textoRespuesta: "Es la zona que separa la troposfera de la exosfera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. ¿Cómo se llama el proceso de formación de las nubes por corrientes verticales ascendentes?",
        opciones: [
            {
                textoRespuesta: "De convección",
                isCorrect: true
            },
            {
                textoRespuesta: "Nubes formadas por turbulencias",
                isCorrect: false
            },
            {
                textoRespuesta: "Por advección",
                isCorrect: false
            },
            {
                textoRespuesta: "Nubes frontales",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. ¿Cada cuánto tiempo se realizan los METAR si no hay grandes cambios significativos?",
        opciones: [
            {
                textoRespuesta: "Cada media hora",
                isCorrect: true
            },
            {
                textoRespuesta: "Cada 15 minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada hora",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada dos horas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. ¿De qué depende principalmente la cantidad de vapor de agua que puede almacenar una masa de aire?",
        opciones: [
            {
                textoRespuesta: "De la altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "De la temperatura",
                isCorrect: true
            },
            {
                textoRespuesta: "De la tensión de vapor",
                isCorrect: false
            },
            {
                textoRespuesta: "De la humedad relativa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. Cuando el viento no es constante, su valor máximo en intensidad se denomina:",
        opciones: [
            {
                textoRespuesta: "Cizalladura",
                isCorrect: false
            },
            {
                textoRespuesta: "Turbulencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Gradiente de viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Ráfaga o racha",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "15. Después del paso de un frente cálido, la temperatura:",
        opciones: [
            {
                textoRespuesta: "Depende de las temperaturas que hubiese traído el frente",
                isCorrect: false
            },
            {
                textoRespuesta: "Se mantiene",
                isCorrect: true
            },
            {
                textoRespuesta: "Sigue aumentando",
                isCorrect: false
            },
            {
                textoRespuesta: "Desciende",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. En una aeronave con hélice de paso variable, antes del funcionamiento irregular del motor, ¿cuál es la primera indicación de que hay hielo en el carburador?",
        opciones: [
            {
                textoRespuesta: "Una caída en la presión de admisión",
                isCorrect: true
            },
            {
                textoRespuesta: "Pérdida de revoluciones del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Un empobrecimiento repentino de la mezcla de aire y combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. La previsión meteorológica que se hace en un aeropuerto cuya validez no puede ser superior de 24 horas se llama:",
        opciones: [
            {
                textoRespuesta: "METAR",
                isCorrect: false
            },
            {
                textoRespuesta: "TAFOR",
                isCorrect: true
            },
            {
                textoRespuesta: "SIGMET",
                isCorrect: false
            },
            {
                textoRespuesta: "GAFOR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Indique la correcta. En altura, en una depresión:",
        opciones: [
            {
                textoRespuesta: "El viento soplará perpendicularmente a las isobaras",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento soplará en el sentido de las agujas del reloj",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento soplará de forma paralela a las isobaras",
                isCorrect: true
            },
            {
                textoRespuesta: "El viento soplará con un ángulo cada vez mayor respecto a las isobaras",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Indique la correcta. Un frente estacionario se da:",
        opciones: [
            {
                textoRespuesta: "Con las características típicas de la estación del año en la que se genere",
                isCorrect: false
            },
            {
                textoRespuesta: "En forma de línea nubosa paralela a otro frente que puede provocar intensos chubascos y tormentas",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando dos masas de aire de características diferentes se encuentran y ninguna de las dos prevalece",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando una masa de aire caliente empuja a otra de aire frío",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. La capacidad de un determinado volumen de aire para almacenar vapor de agua se dobla aproximadamente cada 10º C de aumento de la temperatura.",
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
        titulo: "21. ¿Cuándo se produce un proceso adiabático?",
        opciones: [
            {
                textoRespuesta: "Cuando la temperatura desciende al disminuir la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la temperatura del aire cambia exclusivamente debido a las variaciones de presió.",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando la temperatura del aire cambia exclusivamente debido a las variaciones de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la temperatura aumenta con la altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. ¿Cuándo se produce un frente ocluido?",
        opciones: [
            {
                textoRespuesta: "Cuando un frente frío hace desaparecer de la superficie a un frente cálido, cuya masa de aire caliente se sitúa sobre el frente frío",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando un frente cálido y un frente frío se encuentran pero sus masas de aire no se mezclan",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el viento sopla de forma perpendicular al frente, ya sea frío o cálido",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. Cuando el cielo se encuentra cubierto de nubes a la mitad, ¿cómo está?",
        opciones: [
            {
                textoRespuesta: "Few",
                isCorrect: false
            },
            {
                textoRespuesta: "Broken",
                isCorrect: false
            },
            {
                textoRespuesta: "Scattered",
                isCorrect: true
            },
            {
                textoRespuesta: "Overcast",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Cuando una masa de aire húmedo alcanza su punto de rocío en superficie:",
        opciones: [
            {
                textoRespuesta: "Se formarán nubes bajas",
                isCorrect: false
            },
            {
                textoRespuesta: "Se podrá formar niebla sólo si el viento está totalmente en calma",
                isCorrect: false
            },
            {
                textoRespuesta: "Se podrá formar neblina sólo si el viento sopla a más de 5 kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se podrá formar niebla si el viento sopla entre 2 y 5 kt.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "25. Indique qué afirmación sobre la niebla es correcta:",
        opciones: [
            {
                textoRespuesta: "Encuentra buenas condiciones para su formación en masas de aire inestable",
                isCorrect: false
            },
            {
                textoRespuesta: "Es más probable que se forme en altas presiones",
                isCorrect: true
            },
            {
                textoRespuesta: "Su visibilidad es superior a 1 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se forma mayoritariamente en bajas presiones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. ¿Por qué razón puede no darse la marea barométrica durante el día?",
        opciones: [
            {
                textoRespuesta: "Porque hay inversión de temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque en esa zona las presiones no están bien definidas",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque estamos en una zona de altas o bajas presiones bien definidas",
                isCorrect: true
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. ¿Qué ocurre con la presión antes de un frente frío?",
        opciones: [
            {
                textoRespuesta: "Aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Se mantiene estable",
                isCorrect: false
            },
            {
                textoRespuesta: "Baja",
                isCorrect: true
            },
            {
                textoRespuesta: "Depende de la intensidad con la que llegue el frente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. ¿Qué quieren decir las siglas NCD en una clave METAR?",
        opciones: [
            {
                textoRespuesta: "Que hay Cumulonimbos",
                isCorrect: false
            },
            {
                textoRespuesta: "Que no se han detectado nubes, cuando el METAR se ha hecho de forma automática",
                isCorrect: true
            },
            {
                textoRespuesta: "Que se ha detectado que el cielo está cubierto de nubes",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el cielo está ‘Scattered’",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. En un mapa meteorológico, ¿qué representa una línea con triángulos en uno de sus lados?",
        opciones: [
            {
                textoRespuesta: "Un frente frío. Los triángulos indican de dónde viene",
                isCorrect: false
            },
            {
                textoRespuesta: "Un frente cálido. Los triángulos indican de dónde viene",
                isCorrect: false
            },
            {
                textoRespuesta: "Un frente cálido. Los triángulos indican hacia dónde va",
                isCorrect: false
            },
            {
                textoRespuesta: "Un frente frío. Los triángulos indican hacia dónde va",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "30. Aquellas nubes que tienen un aspecto parecido al de plumas de aves o algodón son:",
        opciones: [
            {
                textoRespuesta: "Cúmulos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cirros",
                isCorrect: true
            },
            {
                textoRespuesta: "Estratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Altoestratos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. ¿En qué parte de una zona montañosa se forman las nubes lenticulares?",
        opciones: [
            {
                textoRespuesta: "A barlovento",
                isCorrect: false
            },
            {
                textoRespuesta: "A sotavento",
                isCorrect: true
            },
            {
                textoRespuesta: "Tanto a barlovento como a sotavento, en el momento en que la masa de aire que sube por la ladera alcanza el nivel de condensación",
                isCorrect: false
            },
            {
                textoRespuesta: "Justo encima de las zonas más altas de las montañas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Entre 0 y -10ºC se forma un tipo de hielo muy peligroso para el vuelo y difícil de eliminar. ¿Cuál es?",
        opciones: [
            {
                textoRespuesta: "El hielo granular",
                isCorrect: false
            },
            {
                textoRespuesta: "El hielo vítreo",
                isCorrect: true
            },
            {
                textoRespuesta: "El granizo",
                isCorrect: false
            },
            {
                textoRespuesta: "La escarcha",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. En el METAR la dirección del viento se da ____ y en el ATIS se da____:",
        opciones: [
            {
                textoRespuesta: "Magnética / verdadera",
                isCorrect: false
            },
            {
                textoRespuesta: "En las dos se da magnética",
                isCorrect: false
            },
            {
                textoRespuesta: "Verdadera / magnética",
                isCorrect: true
            },
            {
                textoRespuesta: "En las dos se da verdadera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. Dentro de un cumulonimbos siempre se forma una tormenta:",
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
        titulo: "35. ¿Cuál/es de los siguientes elementos son necesarios para la formación de una nube?",
        opciones: [
            {
                textoRespuesta: "Vapor de agua y núcleos de condensación",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambio de temperatura, núcleos de condensación y vapor de agua",
                isCorrect: true
            },
            {
                textoRespuesta: "Vapor de agua y altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Vapor de agua, núcleos de condensación y fuertes corrientes ascendentes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. La altitud a la que la temperatura alcanza los 0º C se llama:",
        opciones: [
            {
                textoRespuesta: "Isoterma de 0º C o isocero",
                isCorrect: true
            },
            {
                textoRespuesta: "Isoterma de transición",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud de transición",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud de engelamiento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. ¿Cuándo es más peligroso que haya un gradiente de presión grande?",
        opciones: [
            {
                textoRespuesta: "En un frente cálido",
                isCorrect: false
            },
            {
                textoRespuesta: "A bajos niveles de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "No es peligroso, puesto que así el viento no soplará fuerte",
                isCorrect: false
            },
            {
                textoRespuesta: "A gran altitud de densidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. ¿Cuál es la principal fuente del vapor de agua que encontramos en la atmósfera?",
        opciones: [
            {
                textoRespuesta: "La humedad absoluta",
                isCorrect: false
            },
            {
                textoRespuesta: "La evaporación de mares, ríos, etc.",
                isCorrect: false
            },
            {
                textoRespuesta: "La transpiración de las plantas",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "39. Cuando una masa de aire frío empuja a una de aire caliente:",
        opciones: [
            {
                textoRespuesta: "La masa de aire frío pasará por encima de la de aire caliente",
                isCorrect: false
            },
            {
                textoRespuesta: "Estamos ante un frente frío",
                isCorrect: true
            },
            {
                textoRespuesta: "Se forman nubes en forma de estratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Estamos ante un frente cálido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. El mensaje en el que se especifican las condiciones meteorológicas que se están dando en un aeropuerto se llama:",
        opciones: [
            {
                textoRespuesta: "TAFOR",
                isCorrect: false
            },
            {
                textoRespuesta: "GAFOR",
                isCorrect: false
            },
            {
                textoRespuesta: "SIGMET",
                isCorrect: false
            },
            {
                textoRespuesta: "METAR",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "41. El viento siempre sopla paralelo al frente:",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. El viento siempre es perpendicular al frente",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. En los frentes ocluidos el viento sopla de forma paralela",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. En los frentes estacionarios el viento sopla de forma paralela",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "42. ¿En cuál de las siguientes situaciones se forman Cu, Cb o Ns?",
        opciones: [
            {
                textoRespuesta: "Cuando un frente frío empuja un frente caliente",
                isCorrect: true
            },
            {
                textoRespuesta: "En la formación de nubes de advección",
                isCorrect: false
            },
            {
                textoRespuesta: "En las turbulencias orográficas",
                isCorrect: false
            },
            {
                textoRespuesta: "En todas las situaciones anteriores se forman nubes en forma de estratos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. El hielo que tiene un aspecto rugoso y denso y se forma entre -10º y -20ºC es:",
        opciones: [
            {
                textoRespuesta: "La escarcha",
                isCorrect: false
            },
            {
                textoRespuesta: "El hielo vítreo",
                isCorrect: false
            },
            {
                textoRespuesta: "El hielo granular",
                isCorrect: true
            },
            {
                textoRespuesta: "El granizo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. En atmósfera estándar, estamos en un campo a 16º C. Despegamos y ascendemos unos 300 metros. ¿Qué temperatura aproximada hará a ese nivel?",
        opciones: [
            {
                textoRespuesta: "18º C.",
                isCorrect: false
            },
            {
                textoRespuesta: "13º C.",
                isCorrect: false
            },
            {
                textoRespuesta: "12º C.",
                isCorrect: false
            },
            {
                textoRespuesta: "14º C.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. Para que en un METAR aparezca CAVOK, ¿cuántas octas como máximo puedo cubrir la capa más baja de nubes?",
        opciones: [
            {
                textoRespuesta: "3",
                isCorrect: false
            },
            {
                textoRespuesta: "2",
                isCorrect: false
            },
            {
                textoRespuesta: "4",
                isCorrect: true
            },
            {
                textoRespuesta: "6",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. ¿Qué tipo de nubes se dan si un frente frío se encuentra con una masa de aire caliente muy inestable?",
        opciones: [
            {
                textoRespuesta: "Cúmulos y cumulonimbos",
                isCorrect: true
            },
            {
                textoRespuesta: "Estratos y nimbostratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cirros, cirrostratos y cirrocúmulos",
                isCorrect: false
            },
            {
                textoRespuesta: "Altoestratos y altocúmulos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. ¿Qué es la humedad relativa?",
        opciones: [
            {
                textoRespuesta: "La cantidad de vapor de agua que tiene una masa de aire",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la cantidad de vapor de agua que tiene una masa de aire y la temperatura de ésta",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la cantidad de vapor de agua que tiene el aire y la máxima que es capaz de acumular",
                isCorrect: true
            },
            {
                textoRespuesta: "Es la temperatura a la cual el aire húmedo se satura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. En un anticiclón el viento gira:",
        opciones: [
            {
                textoRespuesta: "En el sentido de las agujas del reloj y hacia fuera",
                isCorrect: true
            },
            {
                textoRespuesta: "En el sentido contrario a las agujas del reloj y hacia dentro",
                isCorrect: false
            },
            {
                textoRespuesta: "En el sentido de las agujas del reloj y hacia dentro",
                isCorrect: false
            },
            {
                textoRespuesta: "En el sentido contrario a las agujas del reloj y hacia fuera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. En la fase de debilitamiento de una tormenta encontraremos:",
        opciones: [
            {
                textoRespuesta: "Corrientes ascendentes",
                isCorrect: false
            },
            {
                textoRespuesta: "Precipitación y corrientes eléctricas",
                isCorrect: false
            },
            {
                textoRespuesta: "Corrientes descendentes",
                isCorrect: true
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. ¿Cuál es el centro de presión que tiene una gran influencia sobre el tiempo en España?",
        opciones: [
            {
                textoRespuesta: "La borrasca de las Azores",
                isCorrect: false
            },
            {
                textoRespuesta: "La depresión de las Azores",
                isCorrect: false
            },
            {
                textoRespuesta: "El anticiclón de las Azores",
                isCorrect: true
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Las etapas de creación de una tormenta son:",
        opciones: [
            {
                textoRespuesta: "Formación y disipación",
                isCorrect: false
            },
            {
                textoRespuesta: "Crecimiento, formación y debilitamiento",
                isCorrect: false
            },
            {
                textoRespuesta: "Formación, crecimiento y debilitamiento",
                isCorrect: false
            },
            {
                textoRespuesta: "Crecimiento, madurez y debilitamiento",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "52. En una borrasca el viento gira:",
        opciones: [
            {
                textoRespuesta: "En el sentido de las agujas del reloj y hacia dentro",
                isCorrect: false
            },
            {
                textoRespuesta: "En el sentido contrario a las agujas del reloj y hacia fuera",
                isCorrect: false
            },
            {
                textoRespuesta: "En el sentido de las agujas del reloj y hacia fuera",
                isCorrect: false
            },
            {
                textoRespuesta: "En el sentido contrario de las agujas del reloj y hacia dentro",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "53. ¿A qué se debe el conocido como efecto Coriolis que se produce en el viento?",
        opciones: [
            {
                textoRespuesta: "A la rotación de la Tierra",
                isCorrect: true
            },
            {
                textoRespuesta: "A la gravedad terrestre",
                isCorrect: false
            },
            {
                textoRespuesta: "Al rozamiento o fricción",
                isCorrect: false
            },
            {
                textoRespuesta: "A la curvatura de las isobaras",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. En una clave METAR, ¿cómo se indica que el viento es variable entre 100º y 190º?",
        opciones: [
            {
                textoRespuesta: "VRB100º/190º",
                isCorrect: false
            },
            {
                textoRespuesta: "100V190",
                isCorrect: true
            },
            {
                textoRespuesta: "100VRB190",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. Si en un mapa meteorológico vemos una línea con triángulos hacia un lado y semicírculos hacia otro, ¿qué representa?",
        opciones: [
            {
                textoRespuesta: "Un frente estacionario",
                isCorrect: true
            },
            {
                textoRespuesta: "Un frente cálido",
                isCorrect: false
            },
            {
                textoRespuesta: "Un frente ocluido",
                isCorrect: false
            },
            {
                textoRespuesta: "Un frente frío",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. En atmósfera estándar, ¿cómo se comporta la presión con la altura?",
        opciones: [
            {
                textoRespuesta: "Aumenta 1 mb cada 8 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye 1 mb cada 8’ o 27 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye 1 mb cada 8 metros o 27’",
                isCorrect: true
            },
            {
                textoRespuesta: "En un mismo punto se mantiene estable a cualquier altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. ¿Cuál de los siguientes podemos considerar como vientos locales?",
        opciones: [
            {
                textoRespuesta: "Los vientos generados por un frente cálido",
                isCorrect: false
            },
            {
                textoRespuesta: "Los que se dan por un gradiente de presión grande en altas o bajas presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "Las brisas marítimas y de tierra",
                isCorrect: true
            },
            {
                textoRespuesta: "Los generados por el efecto Coriolis",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. La capa de la atmósfera en la que prácticamente se dan todos los procesos meteorológicos es:",
        opciones: [
            {
                textoRespuesta: "La estratosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "La termosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "La tropopausa",
                isCorrect: false
            },
            {
                textoRespuesta: "La troposfera",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "59. Si decimos que el cielo está ‘Broken’, ¿cuántas octas tiene cubiertas?",
        opciones: [
            {
                textoRespuesta: "De 5 a 7",
                isCorrect: true
            },
            {
                textoRespuesta: "De 1 a 2",
                isCorrect: false
            },
            {
                textoRespuesta: "De 7 a 8",
                isCorrect: false
            },
            {
                textoRespuesta: "De 3 a 4",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. Una inversión térmica en superficie puede producir:",
        opciones: [
            {
                textoRespuesta: "Inestabilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Mejor sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Mala visibilidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. Indique la correcta. La presión y la temperatura:",
        opciones: [
            {
                textoRespuesta: "Definen la densidad del aire",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentan con la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Tienen una influencia decisiva en la circulación atmosférica",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "62. ¿Qué tipo de nubes suelen ser las que se forman por advección?",
        opciones: [
            {
                textoRespuesta: "Cúmulos o de desarrollo vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Cirrocúmulos",
                isCorrect: false
            },
            {
                textoRespuesta: "Estratos",
                isCorrect: true
            },
            {
                textoRespuesta: "En este caso se suele formar cualquier tipo de nubes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. La temperatura desciende con la altura hasta una altitud aproximada de:",
        opciones: [
            {
                textoRespuesta: "11 km, cuando se considera constante e igual a -38’5º C.",
                isCorrect: false
            },
            {
                textoRespuesta: "11 km, cuando se considera constante e igual a -56’5º C.",
                isCorrect: true
            },
            {
                textoRespuesta: "Hasta que termina la última capa de la atmósfera, la exosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "Hasta la termosfera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Indique la correcta. Las isobaras:",
        opciones: [
            {
                textoRespuesta: "Unen puntos con la misma presión, a diferentes alturas",
                isCorrect: false
            },
            {
                textoRespuesta: "Unen puntos con la misma presión, a diferentes altitudes",
                isCorrect: false
            },
            {
                textoRespuesta: "Unen puntos con la misma presión reducida al nivel del mar",
                isCorrect: true
            },
            {
                textoRespuesta: "Unen puntos con la misma densidad reducida al nivel del mar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. Una diferencia en la velocidad o la dirección del viento entre dos puntos de la atmósfera se denomina:",
        opciones: [
            {
                textoRespuesta: "Turbulencia mecánica",
                isCorrect: false
            },
            {
                textoRespuesta: "Cizalladura",
                isCorrect: true
            },
            {
                textoRespuesta: "Frente",
                isCorrect: false
            },
            {
                textoRespuesta: "Masa de aire",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Indique la correcta. Si nos encontramos en un anticiclón:",
        opciones: [
            {
                textoRespuesta: "Estamos en una zona de altas presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "No se dará la marea barométrica",
                isCorrect: false
            },
            {
                textoRespuesta: "Estamos en una zona de bajas presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "67. ¿Cuál de los siguientes elementos es el responsable de la mayor parte de los fenómenos atmosféricos?",
        opciones: [
            {
                textoRespuesta: "El viento",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión",
                isCorrect: false
            },
            {
                textoRespuesta: "La temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "La humedad",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "68. ¿Cuál es la causa principal de la circulación atmosférica?",
        opciones: [
            {
                textoRespuesta: "El Sol",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento",
                isCorrect: false
            },
            {
                textoRespuesta: "La rotación de la Tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "69. ¿Cuándo es más peligroso para el vuelo que se produzca una cizalladura?",
        opciones: [
            {
                textoRespuesta: "A gran altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "En las capas inferiores de la atmósfera",
                isCorrect: true
            },
            {
                textoRespuesta: "En la tropopausa",
                isCorrect: false
            },
            {
                textoRespuesta: "En las capas superiores de la atmósfera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. ¿A qué es debido que, a cierta altitud, ya no podamos respirar?",
        opciones: [
            {
                textoRespuesta: "A la falta de Oxígeno",
                isCorrect: false
            },
            {
                textoRespuesta: "A la falta de densidad en el aire",
                isCorrect: false
            },
            {
                textoRespuesta: "A la falta de presión en el aire",
                isCorrect: true
            },
            {
                textoRespuesta: "A que llega un momento en que la cantidad de Nitrógeno se hace mayor que la de Oxígeno",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. En la clasificación de las nubes según la altura a la que se den, ¿cuáles son las nubes medias?",
        opciones: [
            {
                textoRespuesta: "Cirros, cirrostratos y cirrocúmulos",
                isCorrect: false
            },
            {
                textoRespuesta: "Altoestratos y altocúmulos",
                isCorrect: true
            },
            {
                textoRespuesta: "Cúmulos y cumulonimbos",
                isCorrect: false
            },
            {
                textoRespuesta: "Estratos, estratocúmulos y nimbostratos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. Después del paso de un frente frío la temperatura continúa descendiendo:",
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
        titulo: "73. ¿Cuándo podemos decir que el aire está saturado?",
        opciones: [
            {
                textoRespuesta: "Cuando ha alcanzado su máxima presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando su tensión de vapor es mínima",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando está cerca de su nivel de condensación",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando no puede admitir más cantidad de vapor de agua",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "74. Un centro de presión rodeado de isobaras de valor creciente es:",
        opciones: [
            {
                textoRespuesta: "Una depresión",
                isCorrect: false
            },
            {
                textoRespuesta: "Una borrasca",
                isCorrect: false
            },
            {
                textoRespuesta: "Un ciclón",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "75. ¿Cuándo es más alta la troposfera?",
        opciones: [
            {
                textoRespuesta: "En primavera",
                isCorrect: false
            },
            {
                textoRespuesta: "En verano",
                isCorrect: true
            },
            {
                textoRespuesta: "En otoño",
                isCorrect: false
            },
            {
                textoRespuesta: "En invierno",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Aproximadamente, ¿cuándo deja de disminuir la temperatura con la altura?",
        opciones: [
            {
                textoRespuesta: "A partir de 70.000 ft.",
                isCorrect: false
            },
            {
                textoRespuesta: "A partir de la tropopausa",
                isCorrect: true
            },
            {
                textoRespuesta: "A partir de la termosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "A partir de la estratopausa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. Las nubes bajas que se dan desde cerca del suelo hasta los 6.500 pies son:",
        opciones: [
            {
                textoRespuesta: "Cirrus, Cirrocúmulos y cirrostratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Estratos, estratocúmulos y nimbostratos",
                isCorrect: true
            },
            {
                textoRespuesta: "Altocúmulos y altoestratos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cúmulos y cumulonimbos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. ¿Qué quieren decir las letras “DZ” en un METAR?",
        opciones: [
            {
                textoRespuesta: "Llovizna",
                isCorrect: true
            },
            {
                textoRespuesta: "Granizo",
                isCorrect: false
            },
            {
                textoRespuesta: "Neblina",
                isCorrect: false
            },
            {
                textoRespuesta: "Humo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. ¿Qué significa ‘FG’ en una clave METAR?",
        opciones: [
            {
                textoRespuesta: "Neblina",
                isCorrect: false
            },
            {
                textoRespuesta: "Granizo",
                isCorrect: false
            },
            {
                textoRespuesta: "Nieve",
                isCorrect: false
            },
            {
                textoRespuesta: "Niebla",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "80. Estamos en atmósfera estándar en un campo exactamente al nivel del mar. Ascendemos 1.000’. ¿Cuál debería ser la temperatura aproximadamente?",
        opciones: [
            {
                textoRespuesta: "15º C.",
                isCorrect: false
            },
            {
                textoRespuesta: "13º C.",
                isCorrect: true
            },
            {
                textoRespuesta: "17º C.",
                isCorrect: false
            },
            {
                textoRespuesta: "14’5º C.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. ¿Cómo se representa un frente ocluido en un mapa meteorológico?",
        opciones: [
            {
                textoRespuesta: "Con una línea con triángulos hacia un lado y semicírculos hacia el otro",
                isCorrect: false
            },
            {
                textoRespuesta: "Un una línea con triángulos hacia los dos lados",
                isCorrect: false
            },
            {
                textoRespuesta: "Con una línea con triángulos y círculos intercalados en uno de los lados",
                isCorrect: true
            },
            {
                textoRespuesta: "Con una línea con semicírculos hacia los dos lados",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Una masa de aire frío es más inestable que una masa de aire caliente:",
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
        titulo: "83. ¿En qué proporción aproximada aportan calor a la atmósfera el Sol y la radiación terrestre?",
        opciones: [
            {
                textoRespuesta: "85% el Sol y 15% la radiación",
                isCorrect: false
            },
            {
                textoRespuesta: "25% el Sol y 75% la radiación",
                isCorrect: false
            },
            {
                textoRespuesta: "90% el Sol y 10% la radiación",
                isCorrect: false
            },
            {
                textoRespuesta: "15% el sol y 85% la radiación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "84. ¿Cuál es la composición de la atmósfera terrestre?",
        opciones: [
            {
                textoRespuesta: "78% Hidrógeno, 21% Oxígeno y 1% otros gases",
                isCorrect: false
            },
            {
                textoRespuesta: "78% Nitrógeno, 21% Oxígeno y 1% otros gases",
                isCorrect: true
            },
            {
                textoRespuesta: "78% Oxígeno, 21% Hidrógeno y 1% otros gases",
                isCorrect: false
            },
            {
                textoRespuesta: "78% Oxígeno, 21% Nitrógeno y 1% otros gases",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. En atmósfera estándar la temperatura desciende con la altura:",
        opciones: [
            {
                textoRespuesta: "6’5º C por cada 100 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "1’98º C por cada 1.000 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "6’5º C por cada 1.000 metros",
                isCorrect: true
            },
            {
                textoRespuesta: "0’65º C por cada 1.000’",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. En un aterrizaje con viento en cara decreciente, si el piloto no interviniese:",
        opciones: [
            {
                textoRespuesta: "Se alargaría la carrera de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Nuestra trayectoria iría cada vez más por encima de la senda de planeo",
                isCorrect: false
            },
            {
                textoRespuesta: "El piloto debe disminuir la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Nuestra trayectoria iría cada vez más por debajo de la senda de planeo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "87. Indique la correcta. En el proceso de convección:",
        opciones: [
            {
                textoRespuesta: "Se forman nubes porque una masa de aire cálido y húmedo se coloca por encima de otra fría",
                isCorrect: false
            },
            {
                textoRespuesta: "Se forman nubes al ascender corrientes de aire por la ladera de montañas",
                isCorrect: false
            },
            {
                textoRespuesta: "Las nubes se forman debido a las corrientes verticales ascendentes",
                isCorrect: true
            },
            {
                textoRespuesta: "Se forman todo tipo de nubes cuando dos masas de aire se encuentran",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. “LEJR 212130Z 10005KT 070V130 CAVOK 10/06 Q1028”. Indique la respuesta correcta sobre este METAR:",
        opciones: [
            {
                textoRespuesta: "El viento viene de 10º a 5 nudos",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento va hacia 100º a 5 nudos, aunque es variable entre los 70º y los 130º",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento es variable entre 70º y 130º a 10 nudos",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento viene de 100º a 5 nudos, aunque es variable entre los 70º y los 130º",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "89. Indique la correcta. La brisa marítima:",
        opciones: [
            {
                textoRespuesta: "Es un viento que se da debido a que el agua se calienta más rápido que la tierra y produce un gradiente de presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Es un viento generado porque la tierra se calienta más rápido que el agua y produce un gradiente de presión",
                isCorrect: true
            },
            {
                textoRespuesta: "Es el viento que se da sobre superficies acuosas como mares, lagos, etc.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. ¿Qué indican las isobaras en un mapa?",
        opciones: [
            {
                textoRespuesta: "Unen puntos con la misma temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Unen puntos con la misma presión",
                isCorrect: true
            },
            {
                textoRespuesta: "Delimitan zonas con la misma presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Delimitan zonas con la misma temperatura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. Cuanto más alta es la temperatura del aire:",
        opciones: [
            {
                textoRespuesta: "Mayor es la densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor es la presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor cantidad de vapor de agua es capaz de almacenar",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas las anteriores son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. ¿Cuándo hay inversión térmica?",
        opciones: [
            {
                textoRespuesta: "Cuando el descenso de temperatura con la altura es mayor que en atmósfera estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la temperatura aumenta con la altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando la temperatura disminuye con la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la temperatura no produce cambios en la densidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. ¿Cuál es considerada la atmósfera estándar?",
        opciones: [
            {
                textoRespuesta: "15º C a nivel del mar y 29’92 pulgadas de mercurio",
                isCorrect: true
            },
            {
                textoRespuesta: "15º F a nivel del mar y 1.013 milibares",
                isCorrect: false
            },
            {
                textoRespuesta: "15º C a nivel del mar y 1.013 pulgadas de mercurio",
                isCorrect: false
            },
            {
                textoRespuesta: "15º C a nivel del mar y 760 milibares",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. En el proceso de advección el transporte de calor en la atmósfera:",
        opciones: [
            {
                textoRespuesta: "Se da a través de corrientes ascendentes",
                isCorrect: false
            },
            {
                textoRespuesta: "Produce nubes debido a las turbulencias",
                isCorrect: false
            },
            {
                textoRespuesta: "Genera nubes de desarrollo vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Se da horizontalmente",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "95. ¿Dónde se suele producir la turbulencia en aire claro (TAC)?",
        opciones: [
            {
                textoRespuesta: "A sotavento de una zona montañosa",
                isCorrect: false
            },
            {
                textoRespuesta: "A baja cota, por lo que es comprometida para el despegue y el aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "A gran altitud",
                isCorrect: true
            },
            {
                textoRespuesta: "A barlovento de una zona montañosa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. ¿Cuál de las siguientes características es común en una masa de aire caliente?",
        opciones: [
            {
                textoRespuesta: "Es estable",
                isCorrect: true
            },
            {
                textoRespuesta: "La visibilidad suele ser buena",
                isCorrect: false
            },
            {
                textoRespuesta: "La humedad suele ser baja",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Un gradiente horizontal de presión grande indica que:",
        opciones: [
            {
                textoRespuesta: "El viento es muy fuerte",
                isCorrect: true
            },
            {
                textoRespuesta: "Las isobaras están bastante separadas",
                isCorrect: false
            },
            {
                textoRespuesta: "Apenas habrá viento",
                isCorrect: false
            },
            {
                textoRespuesta: "La borrasca o el anticiclón son muy grandes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Cuando el vapor de agua presente en el aire entra en contacto con una superficie que está a menos de 0º:",
        opciones: [
            {
                textoRespuesta: "Se crea el hielo vítreo",
                isCorrect: false
            },
            {
                textoRespuesta: "Se forma el granizo",
                isCorrect: false
            },
            {
                textoRespuesta: "Se crea la escarcha",
                isCorrect: true
            },
            {
                textoRespuesta: "Se forma el hielo granulado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. ¿A qué altura debe estar como mínimo la base de nubes para que un METAR aparezca CAVOK?",
        opciones: [
            {
                textoRespuesta: "10 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "10.000 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "5.000 pies",
                isCorrect: true
            },
            {
                textoRespuesta: "5 km.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Una masa de aire caliente:",
        opciones: [
            {
                textoRespuesta: "Es la que está a más de 15º C, que es la atmósfera estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una masa de aire continental",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una masa de aire que se da en verano",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la que está a mayor temperatura que la superficie por la que pasa",
                isCorrect: true
            }
        ]
    }
];

export default preguntas;