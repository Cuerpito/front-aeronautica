const preguntas = [
    {
        titulo: "1. El factor de carga es positivo cuando:",
        opciones: [
            {
                textoRespuesta: "Las fuerzas son hacia abajo",
                isCorrect: true
            },
            {
                textoRespuesta: "Las fuerzas son hacia arriba",
                isCorrect: false
            },
            {
                textoRespuesta: "Las fuerzas son hacia los lados",
                isCorrect: false
            },
            {
                textoRespuesta: "Las fuerzas son nulas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. Estamos en aproximación final a un campo a nivel del mar. El viento es calma. Llevamos una velocidad indicada de 80 Km/h. Cuál será la velocidad sobre el suelo GS",
        opciones: [
            {
                textoRespuesta: "80 Km/h",
                isCorrect: true
            },
            {
                textoRespuesta: "90 Km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "85 Km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "No puede saberse",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. Según la figura, la letra 'D':",
        opciones: [
            {
                textoRespuesta: "Extradós",
                isCorrect: false
            },
            {
                textoRespuesta: "Intradós",
                isCorrect: true
            },
            {
                textoRespuesta: "Doble perfil inferior",
                isCorrect: false
            },
            {
                textoRespuesta: "Costilla inferior",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. Al aumentar la velocidad del avión, la resistencia inducida",
        opciones: [
            {
                textoRespuesta: "Permanece constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. En un perfil aerodinámico en movimiento, la fuerza de succión será mayor cuanto:",
        opciones: [
            {
                textoRespuesta: "a) Menor sea la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Mayor sea la velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "c) Menor sea la densidad del aire",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"c\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. La fuerza aerodinámica es:",
        opciones: [
            {
                textoRespuesta: "La suma de la sustentación más el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "La resultante de la sustentación y la resistencia inducida",
                isCorrect: true
            },
            {
                textoRespuesta: "La suma de la tracción y la resistencia parásita.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. El movimiento de alabeo de un avión se produce en el eje:",
        opciones: [
            {
                textoRespuesta: "Vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Longitudinal",
                isCorrect: true
            },
            {
                textoRespuesta: "Lateral",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. La estabilidad direccional es la estabilidad alrededor del eje:",
        opciones: [
            {
                textoRespuesta: "Lateral",
                isCorrect: false
            },
            {
                textoRespuesta: "Vertical",
                isCorrect: true
            },
            {
                textoRespuesta: "Longitudinal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. La rotación sobre el eje vertical se llama",
        opciones: [
            {
                textoRespuesta: "Cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Encabritado",
                isCorrect: false
            },
            {
                textoRespuesta: "Alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Guiñada",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "10. El factor de carga se define como:",
        opciones: [
            {
                textoRespuesta: "La relación entre la sustentación y el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la gravedad y el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la potencia y el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la suma de todas las fuerzas que actúan en el ultraligero y el peso total del mismo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "11. La pérdida se produce siempre que el perfil aerodinámico sea colocado en una posición excesiva de ángulo de ataque, independiente de la velocidad del avión",
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
        titulo: "12. ¿Qué tiene un perfil con ángulo de ataque crítico?",
        opciones: [
            {
                textoRespuesta: "a) Sustentación máxima",
                isCorrect: true
            },
            {
                textoRespuesta: "b) Resistencia nula",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Sustentación mínima",
                isCorrect: false
            },
            {
                textoRespuesta: "d) Son correctas \"a\" y \"b\"",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. El ángulo de ataque es el formado entre la cuerda aerodinámica y",
        opciones: [
            {
                textoRespuesta: "El fuselaje",
                isCorrect: false
            },
            {
                textoRespuesta: "El eje del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "La senda de planeo",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección del viento relativo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. La resistencia opuesta al avance que ofrece la estructura del avión, se denomina:",
        opciones: [
            {
                textoRespuesta: "Resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "Resistencia parásita",
                isCorrect: true
            },
            {
                textoRespuesta: "Resistencia total",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las tres",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. Los factores que intervienen en la sustentación son:",
        opciones: [
            {
                textoRespuesta: "Densidad del aire, peso del ULM, RPM del motor y velocidad del aire",
                isCorrect: false
            },
            {
                textoRespuesta: "Densidad y velocidad del aire, superficie alar y ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "Temperatura-aire, peso ULM, superficie alar y dirección del viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de ataque, densidad del aire, ángulo diedro y altitud del campo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. En el Manual de Vuelo de tu ULM, la velocidad de pérdida a que maniobra está referida.",
        opciones: [
            {
                textoRespuesta: "En un viraje suave",
                isCorrect: false
            },
            {
                textoRespuesta: "En vuelo recto y nivelado",
                isCorrect: true
            },
            {
                textoRespuesta: "En ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "En descenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. ¿Qué consecuencia aerodinámica se obtiene al utilizar los flaps?",
        opciones: [
            {
                textoRespuesta: "Se curva el perfil alar, aumentando la cuerda aerodinámica, disminuyendo el ángulo de ataque y obteniendo sustentación adicional",
                isCorrect: false
            },
            {
                textoRespuesta: "Se curva el perfil alar, disminuyendo la cuerda aerodinámica y el ángulo de ataque, obteniendo sustentación adicional",
                isCorrect: false
            },
            {
                textoRespuesta: "Se curva el perfil alar, aumentando la cuerda aerodinámica y el ángulo de ataque, obteniendo un coeficiente de sustentación mayor",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Si el centro de gravedad se encuentra por delante del centro de presiones, el avión será ______________ y si se encuentra detrás del C.P. _________________. ELEGIR LA RESPUESTA QUE COMPLETE LOS ESPACIOS EN BLANCO EN EL ORDEN ADECUADO.",
        opciones: [
            {
                textoRespuesta: "Más estable y más eficiente / menos estable y menos eficiente",
                isCorrect: false
            },
            {
                textoRespuesta: "Menos eficiente y menos estable / más estable y más eficiente",
                isCorrect: false
            },
            {
                textoRespuesta: "Más estable / completamente inestable e imposible de volar",
                isCorrect: true
            },
            {
                textoRespuesta: "Menos estable y más eficiente / más estable y menos eficiente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. La TAS y la IAS son siempre iguales",
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
        titulo: "20. El efecto venturi, establece que las partículas de un fluido al pasar por un estrechamiento:",
        opciones: [
            {
                textoRespuesta: "Disminuye su velocidad y aumenta su presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta su velocidad y aumenta su presión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta su velocidad y disminuye su presión",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye su velocidad y disminuye su presión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. El aumento del factor de carga",
        opciones: [
            {
                textoRespuesta: "Impide el descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Impide el viraje",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la velocidad de pérdida",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "22. La parte trasera de un perfil alar se denomina:",
        opciones: [
            {
                textoRespuesta: "Borde de salida",
                isCorrect: true
            },
            {
                textoRespuesta: "Borde de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuerda aerodinámica",
                isCorrect: false
            },
            {
                textoRespuesta: "Espesor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. Despegamos de un campo a nivel del mar, con viento calma, temperatura 10 grados, QNH 1021. Haciendo una rotación correcta, nos vamos al aire a 60 km/h (de anemómetro), después de recorrer 80 metros. ¿Cuál será la velocidad respecto al suelo a la que nos iremos al aire?",
        opciones: [
            {
                textoRespuesta: "65.5 Km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "No lo podemos saber",
                isCorrect: false
            },
            {
                textoRespuesta: "60 Km/h",
                isCorrect: true
            },
            {
                textoRespuesta: "70 Km/h",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Las resistencias parásitas son:",
        opciones: [
            {
                textoRespuesta: "Las que producen mayor sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Las producidas por la sustentación del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Las que frenan el avión cuando está aparcado",
                isCorrect: false
            },
            {
                textoRespuesta: "Las producidas por los componentes del avión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "25. Un factor de carga de 3, en un avión de 1000 kgs, significa que",
        opciones: [
            {
                textoRespuesta: "La estructura soporta 3000 kgs",
                isCorrect: true
            },
            {
                textoRespuesta: "Nada",
                isCorrect: false
            },
            {
                textoRespuesta: "La resistencia inducida es 3",
                isCorrect: false
            },
            {
                textoRespuesta: "El avión puede llevar 3 pasajeros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. Los ejes de la aeronaves son:",
        opciones: [
            {
                textoRespuesta: "Longitudinal y vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Vertical, lateral y transversal",
                isCorrect: false
            },
            {
                textoRespuesta: "Longitudinal, vertical y lateral",
                isCorrect: true
            },
            {
                textoRespuesta: "Lateral y transversal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Las ranuras de borde de ataque o slots son:",
        opciones: [
            {
                textoRespuesta: "Dispositivos hipersustentadores",
                isCorrect: true
            },
            {
                textoRespuesta: "Causadas por colisión con pájaros",
                isCorrect: false
            },
            {
                textoRespuesta: "Aceleradores de partículas",
                isCorrect: false
            },
            {
                textoRespuesta: "Frenos aerodinámicos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. Si aumentamos la velocidad, la resistencia inducida:",
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
                textoRespuesta: "Permanece constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta para disminuir de nuevo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. El rendimiento aerodinámico del ala es:",
        opciones: [
            {
                textoRespuesta: "La relación entre el peso y la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la sustentación y la resistencia al avance",
                isCorrect: true
            },
            {
                textoRespuesta: "La relación entre la sustentación y el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la distancia horizontal recorrido y la distancia vertical",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. La resistencia que se opone al avance del avión en vuelo es:",
        opciones: [
            {
                textoRespuesta: "Debido a la viscosidad del aire y el peso del aparato",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo puede hablarse de resistencia parásita",
                isCorrect: false
            },
            {
                textoRespuesta: "La producida por las turbulencias producidas por el propio avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Una fuerza resultante de la resistencia parásita y la resistencia inducida",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. Para recuperar la pérdida en un viraje:",
        opciones: [
            {
                textoRespuesta: "Centrar mandos, ganar velocidad, tirar de palanca virando para acercar el morro al horizonte y entonces alabear para conseguir posición de vuelo recto y nivelado",
                isCorrect: false
            },
            {
                textoRespuesta: "La \"a\" y la \"b\" son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "Meter pie contrario al viraje y aumentar potencia al máximo con cuidado de no adelantar la palanca",
                isCorrect: false
            },
            {
                textoRespuesta: "Cortar motor, palanca de mando CENTRADA , ganar velocidad, alabear hasta tener las alas paralelas al horizonte y tirar de palanca y aplicar potencia para conseguir posición de vuelo recto y nivelado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. Un avión entrará en pérdida a cualquier velocidad, pues la pérdida depende exclusivamente del ángulo de ataque:",
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
        titulo: "33. Una disminución fuerte del viento en cara, nos puede acercar a la velocidad de pérdida",
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
        titulo: "34. Si aumentamos el factor de carga de un ULM",
        opciones: [
            {
                textoRespuesta: "Entrará en pérdida a mayor velocidad (IAS) y mayor ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrará en pérdida a menor velocidad (IAS) y mayor ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrará en pérdida a menor velocidad (IAS) y con el mismo ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "Entrará en pérdida igual que sin el incremento de factor de carga",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. Siempre que entramos en barrena es porque a la vez estamos en pérdida.",
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
        titulo: "36. ¿Cuál de estas definiciones de 'fuerza aerodinámica' es la correcta?",
        opciones: [
            {
                textoRespuesta: "Es la fuerza que se origina sobre un perfil a consecuencia de las modificaciones en la presión y velocidad de las partículas de aire que la rodean",
                isCorrect: true
            },
            {
                textoRespuesta: "Es la fuerza que se origina sobre un perfil a consecuencia de la resultante entre la gravedad y la fuerza centrifuga",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la fuerza que se origina sobre un perfil a consecuencia de la presión barométrica y el peso del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "La primera y última definición son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. El desplazamiento del avión en vuelo tiene lugar según tres ejes de giro que se denominan:",
        opciones: [
            {
                textoRespuesta: "Lateral, simétrico y longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Longitudinal, vertical y simétrico",
                isCorrect: false
            },
            {
                textoRespuesta: "Lateral, longitudinal y vertical",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguno de los anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. La velocidad con que una aeronave se mueve respecto al aire es:",
        opciones: [
            {
                textoRespuesta: "Velocidad mínima",
                isCorrect: false
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
                textoRespuesta: "Velocidad relativa",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "39. 'La bola' en el indicador de virajes se desplaza debido a las fuerzas:",
        opciones: [
            {
                textoRespuesta: "De presión estática",
                isCorrect: false
            },
            {
                textoRespuesta: "Giroscópicas",
                isCorrect: false
            },
            {
                textoRespuesta: "De succión",
                isCorrect: false
            },
            {
                textoRespuesta: "Centrífuga y de gravedad",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "40. El efecto venturi se produce:",
        opciones: [
            {
                textoRespuesta: "En el intradós",
                isCorrect: false
            },
            {
                textoRespuesta: "En el extradós",
                isCorrect: true
            },
            {
                textoRespuesta: "En todo el ala",
                isCorrect: false
            },
            {
                textoRespuesta: "En el borde de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. El espesor de un perfil alar es:",
        opciones: [
            {
                textoRespuesta: "Lo mismo que la curvatura media",
                isCorrect: false
            },
            {
                textoRespuesta: "La cuerda dividida entre la envergadura",
                isCorrect: false
            },
            {
                textoRespuesta: "La distancia máxima entre el intradós y el extradós",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "42. Se define la regresión alar como:",
        opciones: [
            {
                textoRespuesta: "El ángulo formado por el borde de ataque y el viento relativo",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo formado por la cuerda alar y el viento relativo",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo formado por la línea de cuerda alar con el eje longitudinal del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo formado por el borde de ataque del ala con el eje lateral",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "43. A altitudes de densidad por encima del nivel del mar, la TAS es con relación a la IAS",
        opciones: [
            {
                textoRespuesta: "Depende del QNH",
                isCorrect: false
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
                textoRespuesta: "Mayor",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. Cuál es el efecto de avanzar la palanca de gases",
        opciones: [
            {
                textoRespuesta: "La aeronave acelerará y eso causará un giro a la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad sobre el terreno y el ángulo de ataque aumentarán",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad relativa permanecerá relativamente constante pero la aeronave ascenderá",
                isCorrect: true
            },
            {
                textoRespuesta: "La aeronave acelerará y descenderá",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. Como influye el peso en la velocidad de pérdida",
        opciones: [
            {
                textoRespuesta: "La disminuye",
                isCorrect: false
            },
            {
                textoRespuesta: "No afecta",
                isCorrect: false
            },
            {
                textoRespuesta: "La aumenta",
                isCorrect: true
            },
            {
                textoRespuesta: "La aumenta por encima de 1013 mb.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. El peso del avión es la fuerza que se opone a la sustentación.",
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
        titulo: "47. Se define como velocidad relativa a:",
        opciones: [
            {
                textoRespuesta: "La velocidad con que una aeronave se mueve con relación al aire",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad con que una aeronave se mueve con relación a la tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad con que una aeronave se mueve con relación a otra aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad con que una aeronave se mueve con relación a un punto concreto y prefijado en la tierra",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. El factor de carga se duplica en virajes para ángulos de inclinación",
        opciones: [
            {
                textoRespuesta: "30º",
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
        titulo: "49. ¿Qué es una pérdida?",
        opciones: [
            {
                textoRespuesta: "Creación de una capa limite turbulenta y por consiguiente una disminución drástica en la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Desprendimiento de la capa límite de la superficie del ala, produciendo una pérdida de sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Pérdida de los mandos por bloqueo de los mismos",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es cierta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. El ángulo de ataque es:",
        opciones: [
            {
                textoRespuesta: "El ángulo formado entre la cuerda aerodinámica y el eje longitudinal del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo formado entre la cuerda aerodinámica y la dirección del viento relativo",
                isCorrect: true
            },
            {
                textoRespuesta: "El ángulo con el cual sube más deprisa el avión",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo formado entre el horizonte y el viento relativo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Se evitarán las aproximaciones con flaps cuando existan condiciones de viento:",
        opciones: [
            {
                textoRespuesta: "Aproado laminar",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproado y racheado",
                isCorrect: false
            },
            {
                textoRespuesta: "Cruzado y racheado",
                isCorrect: true
            },
            {
                textoRespuesta: "Cruzado laminar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. La trayectoria de vuelo es:",
        opciones: [
            {
                textoRespuesta: "a) Del mismo sentido que el viento relativo",
                isCorrect: false
            },
            {
                textoRespuesta: "b) La seguida por el avión en su desplazamiento en el aire",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Opuesta y de la misma dirección que el viento relativo",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"b\" y \"c\"",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "53. Se denomina centro de presiones al punto donde:",
        opciones: [
            {
                textoRespuesta: "Más presión tienen las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe estar colocado el piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Se aplica la resultante de las fuerzas aerodinámicas",
                isCorrect: true
            },
            {
                textoRespuesta: "Pasan los 3 ejes de giro del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. El diedro positivo que normalmente existe en los U.L.M. trata de conseguir:",
        opciones: [
            {
                textoRespuesta: "Resistencia estructural",
                isCorrect: false
            },
            {
                textoRespuesta: "Estabilidad en el vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Coordinación en los virajes",
                isCorrect: false
            },
            {
                textoRespuesta: "Entradas en pérdidas progresivas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. Un aterrizaje puede considerarse como una situación de pérdida provocada.",
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
        titulo: "56. El efecto venturi establece que las partículas de un fluido al pasar por un estrechamiento aumentan de velocidad y disminuye en",
        opciones: [
            {
                textoRespuesta: "Presión",
                isCorrect: true
            },
            {
                textoRespuesta: "Energía térmica",
                isCorrect: false
            },
            {
                textoRespuesta: "Volumen",
                isCorrect: false
            },
            {
                textoRespuesta: "Densidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. ¿Con qué mando controlamos el movimiento de cabeceo del avión?",
        opciones: [
            {
                textoRespuesta: "Estabilizador",
                isCorrect: false
            },
            {
                textoRespuesta: "Alerones",
                isCorrect: false
            },
            {
                textoRespuesta: "Timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Timón de profundidad",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "58. El flap aumenta el coeficiente de sustentación debido a",
        opciones: [
            {
                textoRespuesta: "Aumenta la curvatura del perfil aerodinámico",
                isCorrect: true
            },
            {
                textoRespuesta: "Máxima adherencia de la capa límite",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminución del ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminución de la velocidad al extenderlos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. El vector de la fuerza de sustentación siempre es:",
        opciones: [
            {
                textoRespuesta: "Perpendicular al viento relativo",
                isCorrect: true
            },
            {
                textoRespuesta: "Perpendicular a la cuerda",
                isCorrect: false
            },
            {
                textoRespuesta: "Perpendicular al eje longitudinal del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;