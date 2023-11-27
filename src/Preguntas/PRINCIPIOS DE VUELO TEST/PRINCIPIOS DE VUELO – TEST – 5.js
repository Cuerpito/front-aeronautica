const preguntas = [
    {
        titulo: "1. Indique la correcta. El ángulo de ataque:",
        opciones: [
            {
                textoRespuesta: "Se aumenta o disminuye con el timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el ángulo formado entre la curvatura media y la trayectoria de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Se puede aumentar utilizando los flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "2. En las siguientes situaciones, ¿cuándo es positivo el factor de carga?",
        opciones: [
            {
                textoRespuesta: "Cuando el avión desciende y la fuerza se ejerce hacia arriba",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el avión asciende y la fuerza se ejerce hacia arriba",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el avión asciende y la fuerza se ejerce hacia abajo",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. En las siguientes situaciones, ¿cuándo es negativo el factor de carga?",
        opciones: [
            {
                textoRespuesta: "El factor de carga siempre es positivo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el avión desciende y la fuerza se ejerce hacia arriba",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando el avión desciende y la fuerza se ejerce hacia abajo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el avión asciende y la fuerza se ejerce hacia abajo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. Un movimiento del timón de dirección hacia la izquierda generará un movimiento de guiñada hacia la derecha.",
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
        titulo: "5. La línea de referencia que se utiliza como punto de partida para las mediciones de peso y centrado de la aeronave se llama:",
        opciones: [
            {
                textoRespuesta: "Fulcrum.",
                isCorrect: false
            },
            {
                textoRespuesta: "Punto de partida",
                isCorrect: false
            },
            {
                textoRespuesta: "Datum",
                isCorrect: true
            },
            {
                textoRespuesta: "Plano de referencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Después del despegue, los flaps deben retraerse:",
        opciones: [
            {
                textoRespuesta: "Inmediatamente o podrán producirse daños estructurales",
                isCorrect: false
            },
            {
                textoRespuesta: "No deben retraerse hasta que estemos en vuelo recto y nivelado",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando tengamos la altura adecuada de retracción",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando hayamos alcanzado la velocidad adecuada de retracción",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "7. ¿Qué le sucede a la capa límite durante la pérdida?",
        opciones: [
            {
                textoRespuesta: "Se desprende de la superficie del ala",
                isCorrect: true
            },
            {
                textoRespuesta: "Se vuelve más densa",
                isCorrect: false
            },
            {
                textoRespuesta: "Pierde velocidad y por eso perdemos la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. ¿Cuál de los siguientes factores atmosféricos es determinante para la sustentación?",
        opciones: [
            {
                textoRespuesta: "La humedad relativa",
                isCorrect: false
            },
            {
                textoRespuesta: "La densidad del aire",
                isCorrect: true
            },
            {
                textoRespuesta: "El viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. La resistencia inducida:",
        opciones: [
            {
                textoRespuesta: "Es siempre constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye al aumentar la velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta al aumentar la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Es igual a la resistencia parásita",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Si durante la pérdida, por cualquier razón, se produce un resbale, ¿qué puede ocurrir?",
        opciones: [
            {
                textoRespuesta: "Que se produzca una barrena",
                isCorrect: false
            },
            {
                textoRespuesta: "Durante una pérdida no puede producirse un resbale ya que no tenemos control sobre los mandos",
                isCorrect: false
            },
            {
                textoRespuesta: "Que se produzca un movimiento de rotación en espiral",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "11. Si alabeamos hacia la izquierda, ¿cómo se están moviendo los alerones?",
        opciones: [
            {
                textoRespuesta: "El alerón izquierdo se mueve hacia abajo y el de la derecha se mueve hacia arriba",
                isCorrect: false
            },
            {
                textoRespuesta: "El responsable del alabeo es el timón de profundidad y no los alerones",
                isCorrect: false
            },
            {
                textoRespuesta: "El responsable del alabeo es el timón de dirección y no los alerones",
                isCorrect: false
            },
            {
                textoRespuesta: "El alerón izquierdo se mueve hacia arriba y el derecho se mueve hacia abajo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "12. Si durante el vuelo notamos que el sonido que produce nuestra aeronave en el aire cambia repentinamente, puede significar que:",
        opciones: [
            {
                textoRespuesta: "Tenemos un fallo del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Hemos alcanzado la máxima sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Vamos a velocidad de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Estamos entrando en pérdida",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "13. ¿Cuál es el movimiento de la aeronave que provoca el uso de los alerones?",
        opciones: [
            {
                textoRespuesta: "La guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "El alabeo",
                isCorrect: true
            },
            {
                textoRespuesta: "El cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "El picado y el encabritado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. El eje longitudinal del avión es el responsable de su estabilidad:",
        opciones: [
            {
                textoRespuesta: "Direccional",
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
                textoRespuesta: "Transversal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. El fenómeno de la sustentación se producirá cuando:",
        opciones: [
            {
                textoRespuesta: "La presión del aire en el extradós sea mayor que en el intradós",
                isCorrect: false
            },
            {
                textoRespuesta: "Las presiones en el intradós y el extradós sean iguales",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión del aire en el extradós sea menor que en el intradós",
                isCorrect: true
            },
            {
                textoRespuesta: "La capa límite deje de ser laminar y pase a ser turbulenta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. En un viraje, ¿qué ocurre con la velocidad de pérdida de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Aumenta, debido a que disminuye el factor de carga",
                isCorrect: false
            },
            {
                textoRespuesta: "Se mantiene igual que en vuelo recto y nivelado ya que esta maniobra no le influye",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta, debido a que también aumenta el factor de carga",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye, debido a que aumenta el factor de carga",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Elige la correcta. Los compensadores de profundidad…",
        opciones: [
            {
                textoRespuesta: "Ayudan a mantener el timón de profundidad en la posición deseada",
                isCorrect: false
            },
            {
                textoRespuesta: "Se mueven en el sentido contrario al timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Permiten que el piloto no tenga que estar controlando el timón constantemente",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las anteriores son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "18. Los dispositivos hipersustentadores que dejan pasar la corriente de aire mediante ranuras en el borde de ataque son:",
        opciones: [
            {
                textoRespuesta: "Slats",
                isCorrect: true
            },
            {
                textoRespuesta: "Flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "Los flaps Krueger",
                isCorrect: false
            },
            {
                textoRespuesta: "Spoilers",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. En un perfil alar, la capa límite:",
        opciones: [
            {
                textoRespuesta: "Varía su velocidad desde cero hasta la de la corriente de aire",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede ser laminar o turbulenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Se desprende con un ángulo de ataque excesivo",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las anteriores son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "20. Los dispositivos hipersustentadores nos permitirán:",
        opciones: [
            {
                textoRespuesta: "Hacer mayor nuestra carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Hacer menor nuestra carrera de despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "Alcanzar la velocidad de crucero con mayor rapidez",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizar a mayor velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. La distancia máxima que separa el extradós y el intradós de un perfil alar se denomina:",
        opciones: [
            {
                textoRespuesta: "Cuerda media",
                isCorrect: false
            },
            {
                textoRespuesta: "Espesor",
                isCorrect: true
            },
            {
                textoRespuesta: "Anchura",
                isCorrect: false
            },
            {
                textoRespuesta: "Borde de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. La entrada en pérdida siempre ocurre a bajas velocidades.",
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
        titulo: "23. ¿Cómo se llaman los flaps que se colocan en el borde de ataque del ala?",
        opciones: [
            {
                textoRespuesta: "Flaps Krueger",
                isCorrect: true
            },
            {
                textoRespuesta: "Flaps delanteros",
                isCorrect: false
            },
            {
                textoRespuesta: "Los flaps sólo se pueden situar en el borde de salida",
                isCorrect: false
            },
            {
                textoRespuesta: "En esa parte del ala sólo puede haber slats o ranuras de borde de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. ¿Con qué elementos podemos provocar los desplazamientos de la aeronave sobre sus ejes de referencia?",
        opciones: [
            {
                textoRespuesta: "Con los alerones, el timón de profundidad y el timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el timón de profundidad, el de dirección y los compensadores",
                isCorrect: false
            },
            {
                textoRespuesta: "Con los mandos primarios",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "25. Un viraje coordinado es aquel que:",
        opciones: [
            {
                textoRespuesta: "Se realiza a 45º, momento a partir del cual el factor de carga empezaría a aumentar drásticamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Se realiza utilizando los tres mandos primarios",
                isCorrect: true
            },
            {
                textoRespuesta: "Se realiza utilizando los compensadores una vez iniciado el viraje",
                isCorrect: false
            },
            {
                textoRespuesta: "Realiza un giro de 180º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. ¿Podemos aumentar la cuerda aerodinámica de alguna manera?",
        opciones: [
            {
                textoRespuesta: "No podemos. Viene determinada por la estructura del ala del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, podemos hacerlo usando los spoilers",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, mediante el uso de flaps",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, mediante los slats",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Los factores principales que influyen en la estabilidad longitudinal de la aeronave son:",
        opciones: [
            {
                textoRespuesta: "El centro de gravedad y el centro de presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "El centro aerodinámico y el centro de presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "El centro de gravedad y el centro aerodinámico",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "28. Respecto a la dirección del viento relativo, la resistencia inducida es:",
        opciones: [
            {
                textoRespuesta: "Paralela",
                isCorrect: true
            },
            {
                textoRespuesta: "Perpendicular",
                isCorrect: false
            },
            {
                textoRespuesta: "De igual intensidad",
                isCorrect: false
            },
            {
                textoRespuesta: "De sentido opuesto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. ¿Cuándo será el factor de carga igual a 1G?",
        opciones: [
            {
                textoRespuesta: "En ascensos",
                isCorrect: false
            },
            {
                textoRespuesta: "En descensos",
                isCorrect: false
            },
            {
                textoRespuesta: "En vuelo recto y nivelado",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Los controles de vuelo:",
        opciones: [
            {
                textoRespuesta: "Los hay primarios y secundarios",
                isCorrect: false
            },
            {
                textoRespuesta: "Se utilizan para adoptar una determinada actitud de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "El piloto los utiliza para equilibrar la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. Cuanto mayor sea el alargamiento del ala, mayor será resistencia inducida:",
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
        titulo: "32. ¿Cuál de las siguientes situaciones es menos favorable para el vuelo?",
        opciones: [
            {
                textoRespuesta: "Que el centro de gravedad coincida con el centro de presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el centro de gravedad esté por delante del centro de presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el centro de presiones esté por delante del de gravedad",
                isCorrect: true
            },
            {
                textoRespuesta: "Las situaciones de B y C son igual de poco favorables",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. La resistencia inducida es:",
        opciones: [
            {
                textoRespuesta: "La misma que la resistencia parásita",
                isCorrect: false
            },
            {
                textoRespuesta: "La suma de la resistencia parásita y la producida por la sustentación del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "La que aumenta con la velocidad de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "La producida por la sustentación del ala",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. El centro de gravedad del avión se mide tomando como punto de partida:",
        opciones: [
            {
                textoRespuesta: "El borde de ataque del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "El morro del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "El Datum",
                isCorrect: true
            },
            {
                textoRespuesta: "El 25% de la cuerda media",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. ¿En cuál de las siguientes situaciones el avión estaría encabritado?",
        opciones: [
            {
                textoRespuesta: "El timón de profundidad está desplazado hacia abajo",
                isCorrect: false
            },
            {
                textoRespuesta: "El centro de gravedad está detrás del centro de presiones",
                isCorrect: true
            },
            {
                textoRespuesta: "El centro de gravedad está delante del centro de gravedad",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Si aumentamos nuestro ángulo de ataque pero queremos mantener la misma sustentación, ¿sobre qué factor o elemento deberemos actuar?",
        opciones: [
            {
                textoRespuesta: "Usaremos los spoilers para frenar",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentaremos nuestra potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuiremos la velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Usaremos las ranuras de borde de ataque para reducir la superficie sustentadora",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. En un régimen de ascenso constante, la sustentación es el doble que el peso:",
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
        titulo: "38. ¿Cómo movemos los alerones?",
        opciones: [
            {
                textoRespuesta: "Girando el volante",
                isCorrect: true
            },
            {
                textoRespuesta: "Empujando hacia adelante o tirando del volante",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el uso de los pedales",
                isCorrect: false
            },
            {
                textoRespuesta: "Empujando o tirando de la palanca",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. En despegues, la posición de los flaps nunca debe ser mayor de:",
        opciones: [
            {
                textoRespuesta: "15º",
                isCorrect: true
            },
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
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Lo que determina la entrada en pérdida es:",
        opciones: [
            {
                textoRespuesta: "La velocidad, independientemente del ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "El factor de carga, que aumenta la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo de ataque, independientemente de la velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "El peso que tenga la aeronave",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. El movimiento de guiñada lo conseguimos:",
        opciones: [
            {
                textoRespuesta: "Girando el volante para mover el timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando los pedales para mover el timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Girando el volante para mover los alerones",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando los pedales para mover el timón de dirección",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "42. Si durante el vuelo entramos en pérdida, ¿qué es lo primero que debemos hacer?",
        opciones: [
            {
                textoRespuesta: "Aplicar motor a fondo",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentar el ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Usar los flaps y así aumentar la superficie sustentadora",
                isCorrect: false
            },
            {
                textoRespuesta: "Bajar el morro de la aeronave",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "43. ¿Cuál de las siguientes afirmaciones es correcta?",
        opciones: [
            {
                textoRespuesta: "Lo ideal es que todas las aeronaves sean estables",
                isCorrect: false
            },
            {
                textoRespuesta: "Una aeronave inestable permanece en la nueva posición después de haber sido separado de su posición de equilibrio",
                isCorrect: false
            },
            {
                textoRespuesta: "Un avión muy estable nos aliviará de grandes esfuerzos sobre los mandos primarios",
                isCorrect: false
            },
            {
                textoRespuesta: "La estabilidad de un avión deberá depender de aquello para lo que esté diseñado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. Estando en vuelo recto y nivelado, queremos aumentar la velocidad sin ascender. ¿Cómo procederemos?",
        opciones: [
            {
                textoRespuesta: "Aumentando la potencia y disminuyendo el ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentando la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyendo el ángulo de ataque sin modificar la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentando la potencia y el ángulo de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. Los dispositivos llamados spoilers se usan para:",
        opciones: [
            {
                textoRespuesta: "Generar mayor resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuir la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Romper la corriente de aire en el extradós",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "46. Los disruptores o spoilers son:",
        opciones: [
            {
                textoRespuesta: "Dispositivos hipersustentadores que se suelen colocar en el borde de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Frenos aerodinámicos que se suelen ir colocados en medio de la superficie del ala",
                isCorrect: true
            },
            {
                textoRespuesta: "Dispositivos hipersustentadores que se colocan normalmente en el borde de salida",
                isCorrect: false
            },
            {
                textoRespuesta: "Mandos secundarios que alivian al piloto de la atención sobre los primarios",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. ¿Por qué es peligroso un excesivo factor de carga?",
        opciones: [
            {
                textoRespuesta: "Porque no nos permitirá virar correctamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque puede dañar gravemente la estructura del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque aumenta considerablemente la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "48. ¿En qué momento tendremos un factor de carga de 2G?",
        opciones: [
            {
                textoRespuesta: "En vuelo recto y nivelado",
                isCorrect: false
            },
            {
                textoRespuesta: "En virajes de 60º",
                isCorrect: true
            },
            {
                textoRespuesta: "En virajes de 45º",
                isCorrect: false
            },
            {
                textoRespuesta: "En virajes, independientemente de su ángulo de inclinación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Un movimiento hacia arriba del timón de profundidad:",
        opciones: [
            {
                textoRespuesta: "Produce una mayor sustentación en la superficie estabilizadora horizontal del empenaje de cola",
                isCorrect: false
            },
            {
                textoRespuesta: "No influye en la sustentación puesto que ésta sólo se produce en las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "Genera menor sustentación en la superficie estabilizadora horizontal del empenaje de cola",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. El fenómeno que se produce en el extradós de un perfil aerodinámico y que permite la sustentación es:",
        opciones: [
            {
                textoRespuesta: "El efecto Bernoulli (presión más velocidad igual a constante)",
                isCorrect: false
            },
            {
                textoRespuesta: "El efecto Venturi (presión más velocidad igual a constante)",
                isCorrect: false
            },
            {
                textoRespuesta: "El efecto Venturi (las partículas sometidas a un estrechamiento aumentan su velocidad y disminuyen su presión)",
                isCorrect: true
            },
            {
                textoRespuesta: "El efecto Bernoulli (las partículas sometidas a un estrechamiento aumentan su velocidad y disminuyen su presión)",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. La línea que une los puntos equidistantes entre el extradós y el intradós es:",
        opciones: [
            {
                textoRespuesta: "Cuerda media",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuerda aerodinámica",
                isCorrect: false
            },
            {
                textoRespuesta: "Espesor",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. ¿Cuál de las siguientes respuestas incluye todos los elementos que influyen en la sustentación?",
        opciones: [
            {
                textoRespuesta: "Densidad, velocidad, presión y ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de ataque, densidad, superficie del coeficiente aerodinámico y velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad, densidad y ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Densidad, ángulo de ataque, velocidad y peso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. Momentos antes de entrar en pérdida:",
        opciones: [
            {
                textoRespuesta: "Se incrementa la velocidad del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce un bataneo que el piloto puede notar en la palanca de mando",
                isCorrect: true
            },
            {
                textoRespuesta: "El piloto no puede detectar nada anormal hasta que no se ha producido la pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta considerablemente el factor de carga",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. Indique la correcta. El viento relativo:",
        opciones: [
            {
                textoRespuesta: "Es la corriente de aire total que incide en la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Corresponde a la dirección de la corriente de aire con respecto al ala",
                isCorrect: true
            },
            {
                textoRespuesta: "Es el viento que incidiría en la aeronave si ésta estuviera en reposo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. En ascensos, el factor de carga será:",
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
                textoRespuesta: "Siempre de 2G",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre de 1G",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. ¿Cuáles de los siguientes elementos forman parte de un perfil aerodinámico?",
        opciones: [
            {
                textoRespuesta: "Borde de ataque, borde de salida, interior y exterior",
                isCorrect: false
            },
            {
                textoRespuesta: "Borde de ataque, borde de salida, parte superior y parte inferior",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación, fuerza aerodinámica y resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Borde de salida, borde de ataque, intradós y extradós",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "57. Si para evitar obstáculos, antes del aterrizaje nuestra senda de planeo debe ser más pronunciada, ¿cuál de los siguientes elementos usaríamos?",
        opciones: [
            {
                textoRespuesta: "Los compensadores",
                isCorrect: false
            },
            {
                textoRespuesta: "Los flaps",
                isCorrect: true
            },
            {
                textoRespuesta: "Los dispositivos de punta alar o winglets",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. El objetivo principal de los dispositivos hipersustentadores es:",
        opciones: [
            {
                textoRespuesta: "Aumentar la velocidad de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener el avión en una posición determinada y aliviar al piloto del esfuerzo por el constante control de los mandos",
                isCorrect: false
            },
            {
                textoRespuesta: "Producir sustentación a velocidades menores a las normales",
                isCorrect: true
            },
            {
                textoRespuesta: "Provocar el desplazamiento del avión sobre sus ejes de referencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. La entrada en pérdida no se puede detectar hasta que no la hemos alcanzado completamente:",
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
        titulo: "60. Los compensadores son:",
        opciones: [
            {
                textoRespuesta: "Mandos primarios",
                isCorrect: false
            },
            {
                textoRespuesta: "Dispositivos hipersustentadores",
                isCorrect: false
            },
            {
                textoRespuesta: "Frenos aerodinámicos",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. ¿Qué efectos producen los alerones?",
        opciones: [
            {
                textoRespuesta: "Una diferencia entre la sustentación de las dos alas, lo que provoca que una suba y la otra baje",
                isCorrect: true
            },
            {
                textoRespuesta: "Una diferencia entre la sustentación de las alas y del estabilizador horizontal de cola, lo que provoca el cabeceo",
                isCorrect: false
            },
            {
                textoRespuesta: "Una diferencia en el peso de las alas, lo que hace que una baje y la otra suba",
                isCorrect: false
            },
            {
                textoRespuesta: "Una diferencia en el peso de las alas y el estabilizador horizontal de cola, lo que hace que se produzca el cabeceo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Entre los factores que afectan a la sustentación está la densidad del aire. ¿Cómo influye en ésta la humedad?",
        opciones: [
            {
                textoRespuesta: "Cuanto más húmedo sea el aire, más denso será",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuanto menos húmedo sea el aire, menos denso será",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuanto más húmedo sea el aire, menos denso será",
                isCorrect: true
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. En la aviación ligera, aproximadamente, ¿a partir de cuántos grados de ángulo de ataque se produce la pérdida?",
        opciones: [
            {
                textoRespuesta: "10º",
                isCorrect: false
            },
            {
                textoRespuesta: "15º",
                isCorrect: false
            },
            {
                textoRespuesta: "20º",
                isCorrect: true
            },
            {
                textoRespuesta: "30º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. El punto de transición es:",
        opciones: [
            {
                textoRespuesta: "El momento en el que empieza a producirse la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto en el que las resistencias inducida y parásita son iguales",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto en el que una capa límite laminar pasa a ser turbulenta",
                isCorrect: true
            },
            {
                textoRespuesta: "El punto en el que se produce el efecto Venturi",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. Mientras estamos en vuelo notamos repentinamente que nos despegamos del asiento. ¿Qué ocurre?",
        opciones: [
            {
                textoRespuesta: "Estamos ascendiendo",
                isCorrect: false
            },
            {
                textoRespuesta: "Estamos siendo sometidos a un factor de carga positivo",
                isCorrect: false
            },
            {
                textoRespuesta: "Estamos siendo sometidos a un factor de carga negativo",
                isCorrect: true
            },
            {
                textoRespuesta: "Estamos incrementando nuestra velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. ¿Qué efectos producen los flaps sobre nuestra carrera de aterrizaje?",
        opciones: [
            {
                textoRespuesta: "Hacen más pronunciada nuestra senda de aproximación pero no influyen en la carrera de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentan la carrera de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "No es recomendable usar flaps durante la carrera de aterrizaje, pues podría causar daños estructurales",
                isCorrect: false
            },
            {
                textoRespuesta: "Acortan la carrera de aterrizaje",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "67. En la senda de aproximación para aterrizaje tendremos un factor de carga:",
        opciones: [
            {
                textoRespuesta: "De 1G",
                isCorrect: false
            },
            {
                textoRespuesta: "Positivo",
                isCorrect: false
            },
            {
                textoRespuesta: "Negativo",
                isCorrect: true
            },
            {
                textoRespuesta: "De 2G",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. La estabilidad longitudinal depende de la capacidad del avión de recuperar una posición determinada después de sufrir una perturbación en:",
        opciones: [
            {
                textoRespuesta: "El eje lateral",
                isCorrect: true
            },
            {
                textoRespuesta: "El eje vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "El eje longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Cualquiera de los ejes de la aeronave",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. En vuelo recto y nivelado, las cuatro fuerzas que resultan iguales son:",
        opciones: [
            {
                textoRespuesta: "Fuerza Aerodinámica = Peso; Tracción = Resistencias",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación = Resistencias; Tracción = Peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Tracción = Resistencias; Sustentación = Peso",
                isCorrect: true
            },
            {
                textoRespuesta: "Tracción = Sustentación; Peso = Resistencias",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. Indique cuál de las siguientes afirmaciones es correcta:",
        opciones: [
            {
                textoRespuesta: "Los resultados de someter a un avión a factores de carga altos son acumulativos, por lo que los fallos pueden aparecer posteriormente",
                isCorrect: true
            },
            {
                textoRespuesta: "El factor de carga aumenta considerablemente en virajes a partir de 60º. En grados inferiores es casi inapreciable",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de pérdida disminuye con el aumento del factor de carga",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. En un ULM de 350kg, ¿qué significa que estamos sometidos a un factor de carga de 2G?",
        opciones: [
            {
                textoRespuesta: "Que la estructura del avión está soportando el doble de su peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la estructura del avión está soportando la mitad de su peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la estructura está soportando 700kg de peso",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "72. La densidad del aire es un elemento clave en los principios de vuelo. ¿De qué depende ésta fundamentalmente?",
        opciones: [
            {
                textoRespuesta: "De la presión y la temperatura",
                isCorrect: true
            },
            {
                textoRespuesta: "De la temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "De la altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "De la presión y la altitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. ¿Cuál puede ser la causa de que aparezcan pérdidas secundarias después de recuperar el avión una primera vez?",
        opciones: [
            {
                textoRespuesta: "Tirar demasiado del volante al realizar la maniobra de recuperación",
                isCorrect: true
            },
            {
                textoRespuesta: "No haber bajado el morro lo suficiente en la recuperación",
                isCorrect: false
            },
            {
                textoRespuesta: "No tener altura suficiente",
                isCorrect: false
            },
            {
                textoRespuesta: "Olvidar el uso de los flaps durante la maniobra",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. La estabilidad direccional de la aeronave depende de:",
        opciones: [
            {
                textoRespuesta: "Su eje transversal",
                isCorrect: false
            },
            {
                textoRespuesta: "Su eje lateral",
                isCorrect: false
            },
            {
                textoRespuesta: "Su eje vertical",
                isCorrect: true
            },
            {
                textoRespuesta: "Su eje longitudinal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. Respecto a la dirección del viento relativo, la sustentación es:",
        opciones: [
            {
                textoRespuesta: "Paralela",
                isCorrect: false
            },
            {
                textoRespuesta: "Perpendicular",
                isCorrect: true
            },
            {
                textoRespuesta: "De igual intensidad",
                isCorrect: false
            },
            {
                textoRespuesta: "De sentido opuesto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. La fuerza que se opone a la resistencia es:",
        opciones: [
            {
                textoRespuesta: "La sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso",
                isCorrect: false
            },
            {
                textoRespuesta: "La tracción",
                isCorrect: true
            },
            {
                textoRespuesta: "El factor de carga",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. Indique la correcta. A mayor densidad:",
        opciones: [
            {
                textoRespuesta: "Mayor sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Menor sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Menor resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "La densidad no influye en la sustentación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. Con efecto suelo en aterrizaje:",
        opciones: [
            {
                textoRespuesta: "Debemos meter motor para aumentar la velocidad y así alcanzar la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos subir el morro para dejar de flotar y descender",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos disminuir el ángulo de ataque o seguiremos flotando",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas las anteriores son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. ¿En cuál de las siguientes situaciones es más peligrosa una pérdida?",
        opciones: [
            {
                textoRespuesta: "Cuando nuestra aeronave no disponga de los sistemas de aviso de pérdida adecuados",
                isCorrect: false
            },
            {
                textoRespuesta: "En vuelo recto y nivelado",
                isCorrect: false
            },
            {
                textoRespuesta: "En despegues, debido a que tenemos baja altura para recuperarla",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas, pues una pérdida es extremadamente peligrosa en cualquier situación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. ¿Qué pasos debemos seguir cuando nuestra aeronave entra en pérdida?",
        opciones: [
            {
                textoRespuesta: "Bajar el morro, aplicar motor a fondo y recuperar la altura perdida cuando tengamos velocidad suficiente",
                isCorrect: true
            },
            {
                textoRespuesta: "Aplicar motor a fondo, bajar el morro y recuperar la altura cuando hayamos ganado la velocidad suficiente",
                isCorrect: false
            },
            {
                textoRespuesta: "Sacar los flaps, aplicar motor a fondo para ganar velocidad y recuperar la altura perdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. ¿Cuándo será mayor la resistencia inducida?",
        opciones: [
            {
                textoRespuesta: "Cuanto mayor sea el alargamiento del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "Volando a una mayor velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Con un ángulo de ataque menor",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. En vuelo recto y nivelado, la tracción es igual a otra/s fuerza/s. ¿Cuál/es?",
        opciones: [
            {
                textoRespuesta: "Las resistencias parásita e inducida",
                isCorrect: true
            },
            {
                textoRespuesta: "El peso",
                isCorrect: false
            },
            {
                textoRespuesta: "La sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. ¿Qué movimiento genera sobre el avión el uso del timón de profundidad?",
        opciones: [
            {
                textoRespuesta: "El alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "La guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "El cabeceo",
                isCorrect: true
            },
            {
                textoRespuesta: "El viraje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. Una vez que el piloto ha situado el avión en la posición que quiere con los mandos primarios, ¿cómo la mantiene?",
        opciones: [
            {
                textoRespuesta: "Controlando los pedales y el volante constantemente",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando los mandos secundarios",
                isCorrect: true
            },
            {
                textoRespuesta: "Manteniendo los mandos primarios en la misma posición manualmente",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. Una mayor densidad del aire genera mayor resistencia:",
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
        titulo: "86. El efecto Venturi se produce en:",
        opciones: [
            {
                textoRespuesta: "El borde de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "El extradós",
                isCorrect: true
            },
            {
                textoRespuesta: "El borde de salida",
                isCorrect: false
            },
            {
                textoRespuesta: "El intradós",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. Un excesivo ángulo de ataque puede producir:",
        opciones: [
            {
                textoRespuesta: "El desprendimiento de la capa límite",
                isCorrect: false
            },
            {
                textoRespuesta: "La entrada en pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "88. La estabilidad longitudinal neutra de una aeronave depende de la posición de dos fuerzas que son:",
        opciones: [
            {
                textoRespuesta: "El centro de gravedad y el centro de presiones",
                isCorrect: true
            },
            {
                textoRespuesta: "La sustentación y el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "El centro de presiones y el centro aerodinámico",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. La velocidad de pérdida:",
        opciones: [
            {
                textoRespuesta: "Corresponde a la velocidad de la aeronave cuando se alcance su ángulo de ataque crítico",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta al aumentar el peso del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta al aumentar la carga alar",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "90. El fenómeno que produce una diferencia de presiones entre el intradós y el extradós se denomina:",
        opciones: [
            {
                textoRespuesta: "Venturi",
                isCorrect: true
            },
            {
                textoRespuesta: "Bernoulli",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Aerodinámica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. ¿Con cuál de los mandos primarios conseguimos mover el avión a través de su eje lateral o transversal?",
        opciones: [
            {
                textoRespuesta: "Con el timón de profundidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Con el timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el compensador de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Con los alerones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. ¿Cuál de las siguientes actuaciones nos permite acortar nuestra carrera de aterrizaje?",
        opciones: [
            {
                textoRespuesta: "Apagar el motor un rato antes de aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproximarnos con flaps para así bajar con menor velocidad y poder frenar antes",
                isCorrect: false
            },
            {
                textoRespuesta: "Utilizar los spoilers una vez que hemos tocado la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "93. Indique la correcta. El efecto suelo…",
        opciones: [
            {
                textoRespuesta: "Sólo se produce en tierra y no en agua",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la altura de las alas sobre el suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Sólo se da en condiciones de atmósfera ISA",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. ¿Por qué punto pasan los tres ejes del avión?",
        opciones: [
            {
                textoRespuesta: "Por el centro de presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "Por el Datum",
                isCorrect: false
            },
            {
                textoRespuesta: "Por el centro aerodinámico",
                isCorrect: false
            },
            {
                textoRespuesta: "Por el centro de gravedad",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "95. Nuestra aeronave tiene una velocidad de pérdida de 70 millas en situación normal. ¿Cuál será aproximadamente la velocidad de pérdida si lo sometemos a 2G?",
        opciones: [
            {
                textoRespuesta: "140 millas",
                isCorrect: false
            },
            {
                textoRespuesta: "89 millas",
                isCorrect: false
            },
            {
                textoRespuesta: "99 millas",
                isCorrect: true
            },
            {
                textoRespuesta: "No podemos saberlo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. La actitud de un avión:",
        opciones: [
            {
                textoRespuesta: "Es la orientación de los ejes de la aeronave con respecto al horizonte y se actúa sobre ella sólo con los mandos primarios",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la orientación de los ejes de la aeronave con respecto al horizonte y se actúa sobre ella con los controles o mandos de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Es la orientación de los ejes de la aeronave con respecto al horizonte y se actúa sobre ella sólo con los mandos secundarios",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la orientación del eje longitudinal del avión con respecto al horizonte",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Si se produce una barrena sin haber entrado en pérdida:",
        opciones: [
            {
                textoRespuesta: "Será más fácil de recuperar",
                isCorrect: false
            },
            {
                textoRespuesta: "El piloto tendrá menos margen de maniobra",
                isCorrect: false
            },
            {
                textoRespuesta: "La maniobra de recuperación será la misma que si produce después de una pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "No se puede producir una barrena sin antes haber entrado en pérdida",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "98. Un aumento del factor de carga:",
        opciones: [
            {
                textoRespuesta: "Aumenta la velocidad de pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "No afecta a la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. La palanca o el volante de la aeronave:",
        opciones: [
            {
                textoRespuesta: "Es el mando secundario con el que movemos los alerones y el timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el mando primario con el que realizamos la guiñada",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el mando primario con el que movemos el timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el mando primario con el que movemos los alerones y el timón de profundidad",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "100. Un incremento del factor de carga debido a un viraje, una turbulencia, etc., tendría el mismo efecto que aumentar el peso de la aeronave:",
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