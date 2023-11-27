const preguntas = [
    {
        titulo: "1. Normalmente el centro de presión se encuentra:",
        opciones: [
            {
                textoRespuesta: "Delante del centro de gravedad",
                isCorrect: false
            },
            {
                textoRespuesta: "En el del centro de gravedad",
                isCorrect: false
            },
            {
                textoRespuesta: "Detrás del centro de gravedad",
                isCorrect: true
            },
            {
                textoRespuesta: "Se encuentra en otro plano",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. ¿Qué maniobras básicas aumentan el factor carga en un avión, comparadas con un vuelo recto y nivelado?",
        opciones: [
            {
                textoRespuesta: "Ascensos",
                isCorrect: false
            },
            {
                textoRespuesta: "Virajes",
                isCorrect: true
            },
            {
                textoRespuesta: "Pérdidas",
                isCorrect: false
            },
            {
                textoRespuesta: "Resbales",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. La certificación de las actuaciones de un avión se realizarán según la atmósfera estándar.",
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
        titulo: "4. Si una pista tiene barro, la carrera de despegue será:",
        opciones: [
            {
                textoRespuesta: "Menor por ser más deslizante",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor",
                isCorrect: true
            },
            {
                textoRespuesta: "Igual que sin barro",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor, pues cuando hay barro hay bajas presiones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. ¿Cuál de los ULM que a continuación se citan presenta mejores prestaciones en vuelo, siendo Vm la velocidad máxima y Vp la velocidad de pérdida?:",
        opciones: [
            {
                textoRespuesta: "Vp=30 Km/h y Vm=60 Km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vp=25 Km/h y Vm=65 Km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vp=30 Km/h y Vm=120 Km/h.",
                isCorrect: true
            },
            {
                textoRespuesta: "Vp=40 Km/h y Vm=125 Km/h.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Después del despegue, que velocidad permitiría al piloto ganar la mayor altitud en un periodo de tiempo determinado.",
        opciones: [
            {
                textoRespuesta: "La velocidad de ascenso de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de mayor régimen de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad de mayor ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de mínimo control",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Para elevarse desde una pista situada a nivel del mar, un avión comienza a volar cuando el anemómetro marca 60 km/h (IAS). Si la pista estuviera a 2.500 metros de altura, ¿qué marcaría el anemómetro?",
        opciones: [
            {
                textoRespuesta: "La misma velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Un 20% más de velocidad, aproximadamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Menos velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Un 10% más de velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. ¿En qué momento es mayor la resistencia inducida?",
        opciones: [
            {
                textoRespuesta: "Cuanto mayor sea la velocidad del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Con elevado ángulo de ataque y baja velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "En un viraje en línea de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el piloto es de gran peso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Los tres ejes del avión se llaman:",
        opciones: [
            {
                textoRespuesta: "Vertical, paralelo y longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Vertical, lateral o transversal y longitudinal",
                isCorrect: true
            },
            {
                textoRespuesta: "Vertical, perpendicular y longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Oblicuo, transversal y vertical",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. La pérdida se divide en cuatro fases: entrada, pérdida, recuperación y nivelación. ¿Cómo suele ser el factor de carga en la fase de recuperación?",
        opciones: [
            {
                textoRespuesta: "Positivo",
                isCorrect: true
            },
            {
                textoRespuesta: "Negativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Permanece invariable",
                isCorrect: false
            },
            {
                textoRespuesta: "No existe relación entre ambos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Cuando tenemos viento en cara, ¿Qué indica el anemómetro?",
        opciones: [
            {
                textoRespuesta: "Una velocidad superior a la velocidad con respecto al suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Una velocidad inferior a la velocidad con respecto al suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Una velocidad igual a la velocidad con respecto al suelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. En qué consiste la torsión del ala.",
        opciones: [
            {
                textoRespuesta: "En dar diferentes ángulos de salida para aumentar la estabilidad lateral",
                isCorrect: false
            },
            {
                textoRespuesta: "Dar un ángulo diedro al ala para aumentar la estabilidad horizontal",
                isCorrect: false
            },
            {
                textoRespuesta: "Dar diferentes ángulos de ataque a todos los perfiles que componen el ala",
                isCorrect: true
            },
            {
                textoRespuesta: "En dar diferentes ángulos a la cuerda del ala",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. En el caso de que las tomas estáticas del sistema quedaran obstruidas, pueden obtenerse indicaciones bastante aproximadas en el anemómetro, aItímetro y variómetro:",
        opciones: [
            {
                textoRespuesta: "Cambiando los giróscopos",
                isCorrect: false
            },
            {
                textoRespuesta: "Seleccionando la corriente alterna",
                isCorrect: false
            },
            {
                textoRespuesta: "Rompiendo el cristal de uno de los instrumentos",
                isCorrect: true
            },
            {
                textoRespuesta: "No pueden obtenerse indicaciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. Despegar con viento de cara permite:",
        opciones: [
            {
                textoRespuesta: "Una mayor velocidad con respecto a la tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mayor ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Un menor ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Una mayor carrera de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. ¿Cómo se llaman las resistencias que origina un avión al desplazarse en el aire y que no tienen que ver con la generación de sustentación?",
        opciones: [
            {
                textoRespuesta: "Complementaria",
                isCorrect: false
            },
            {
                textoRespuesta: "Estructural",
                isCorrect: false
            },
            {
                textoRespuesta: "Inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "Parásita",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "16. Es imprescindible, realizar los cálculos de despegue:",
        opciones: [
            {
                textoRespuesta: "En despegues nocturnos",
                isCorrect: false
            },
            {
                textoRespuesta: "En caso de fuerte viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "En aeropuertos situados a nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "En aeropuertos muy elevados o en pistas cortas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "17. Al aumentar la altura, la densidad del aire disminuye.",
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
        titulo: "18. El aumento de flaps hace que la resistencia:",
        opciones: [
            {
                textoRespuesta: "Aumente",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuya",
                isCorrect: false
            },
            {
                textoRespuesta: "Permanezca constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Si el piloto actúa sobre los slats y los flaps:",
        opciones: [
            {
                textoRespuesta: "Tiene control sobre la curvatura del perfil",
                isCorrect: false
            },
            {
                textoRespuesta: "Influye en el aumento de la superficie alar",
                isCorrect: false
            },
            {
                textoRespuesta: "Ambos dos",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguno de los dos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. El movimiento alrededor del eje longitudinal del avión se denomina:",
        opciones: [
            {
                textoRespuesta: "Alabeo",
                isCorrect: true
            },
            {
                textoRespuesta: "Cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. La velocidad de pérdida aumenta en relación con el aumento del factor carga.",
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
        titulo: "22. Si un avión tiene el centro aerodinámico en el 25 %, significa que:",
        opciones: [
            {
                textoRespuesta: "Mide 25 centímetros de espesor",
                isCorrect: false
            },
            {
                textoRespuesta: "Se encuentra a 25 pulgadas del centro de gravedad",
                isCorrect: false
            },
            {
                textoRespuesta: "Se encuentra en el 25 % de la cuerda empezando por el borde de salida",
                isCorrect: false
            },
            {
                textoRespuesta: "Se encuentra en el 25 % de la Cuerda empezando por el borde de ataque",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "23. Si un avión entra en pérdida a 40 MPH IAS volando al nivel del mar. ¿Cuál será su velocidad de pérdida IAS a 10.000'?",
        opciones: [
            {
                textoRespuesta: "80 MPH.",
                isCorrect: false
            },
            {
                textoRespuesta: "60 MPH.",
                isCorrect: false
            },
            {
                textoRespuesta: "40 *Cos*",
                isCorrect: false
            },
            {
                textoRespuesta: "40 MPH.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "24. ¿Cuál de los ultraligeros que a continuación se indican presenta mayor resistencia estructural general?",
        opciones: [
            {
                textoRespuesta: "+4g. -2g.",
                isCorrect: false
            },
            {
                textoRespuesta: "+5g. -1g.",
                isCorrect: false
            },
            {
                textoRespuesta: "+4.5g. -2.5g.",
                isCorrect: true
            },
            {
                textoRespuesta: "+4g. -2.5g.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. ¿Qué se conoce como efecto tierra?",
        opciones: [
            {
                textoRespuesta: "La atracción que la tierra ejerce sobre el piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "La sensación del piloto de que puede volar con menos potencia al tiempo que su planeo parece mejorar cerca del suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Sensación de vértigo por proximidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Un aumento de la autonomía de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. ¿Cuál de estos métodos se utiliza para darle más estabilidad a un avión?",
        opciones: [
            {
                textoRespuesta: "El ángulo diedro",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener el centro de gravedad bajo respecto a las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "Las dos son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. La sensación de 'flotar' en el asiento significa que el avión está sufriendo:",
        opciones: [
            {
                textoRespuesta: "Un factor de carga positivo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un factor de carga negativo",
                isCorrect: true
            },
            {
                textoRespuesta: "Un aumento de su peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Una modificación en su configuración",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. Con flaps, la carrera de despegue se hace:",
        opciones: [
            {
                textoRespuesta: "Más corta",
                isCorrect: true
            },
            {
                textoRespuesta: "Permanece constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Más larga",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. ¿Qué indicios tenemos antes de la pérdida?",
        opciones: [
            {
                textoRespuesta: "Controles blandos y poco efectivos",
                isCorrect: false
            },
            {
                textoRespuesta: "Bataneo de los controles de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Bataneo del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las anteriores son ciertas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "30. Las Gs a las que se ve sometido un aerodino:",
        opciones: [
            {
                textoRespuesta: "Pueden ser positivas o negativas, siendo las primeras las más comunes en ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Pueden provocar deformaciones transitorias y permanentes en la estructura del ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Las positivas aparecen en virajes cerrados y en recogidas bruscas",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. Los instrumentos basados en la medición de presión son: Anemómetro, Altímetro y:",
        opciones: [
            {
                textoRespuesta: "Horizonte artificial",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicador de virajes",
                isCorrect: false
            },
            {
                textoRespuesta: "Variómetro",
                isCorrect: true
            },
            {
                textoRespuesta: "Brújula",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Si el centro de gravedad estuviera detrás del centro aerodinámico, el avión tendría:",
        opciones: [
            {
                textoRespuesta: "Un momento de encabritado",
                isCorrect: true
            },
            {
                textoRespuesta: "Un momento de picado",
                isCorrect: false
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
        titulo: "33. Un campo en pendiente y cuesta arriba:",
        opciones: [
            {
                textoRespuesta: "Acorta la carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Alarga la carrera de despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "No influye en la carrera de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. ¿Cuál de las capas límite tiene una mayor energía cinética?",
        opciones: [
            {
                textoRespuesta: "Laminar",
                isCorrect: false
            },
            {
                textoRespuesta: "Turbulenta",
                isCorrect: true
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
        titulo: "35. La densidad del aire, al aumentar la temperatura:",
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
                textoRespuesta: "Es constante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. La utilización de flaps en el despegue, permite:",
        opciones: [
            {
                textoRespuesta: "Disminuir recorrido-tierra y aumentar el ángulo de despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentar recorrido-tierra y disminuir el ángulo de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentar recorrido-tierra y aumentar el ángulo de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuir recorrido-tierra y disminuir el ángulo de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. La velocidad más baja alcanzable por una aeronave sin entrar en pérdida, fuera del efecto suelo es:",
        opciones: [
            {
                textoRespuesta: "Velocidad mínima de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad normal",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad máxima",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de pérdida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Cuando un altímetro está calado con 1.013,2 Mbrs. ¿Qué marca?",
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
            }
        ]
    },
    {
        titulo: "39. La altitud de presión se define como:",
        opciones: [
            {
                textoRespuesta: "La presión que marca el altímetro que se ha reglado a la elevación del aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión que marca el altímetro que se ha reglado al nivel del mar con la presión actual",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión que marca un altímetro que se ha reglado al nivel del mar con 1013 Mb.",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Un avión tendrá una estabilidad negativa si, separado de su posición inicial.",
        opciones: [
            {
                textoRespuesta: "Tiende inicialmente a recobrarla",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiende a alejarse de ella cada vez más",
                isCorrect: true
            },
            {
                textoRespuesta: "Permanece en la nueva posición",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;