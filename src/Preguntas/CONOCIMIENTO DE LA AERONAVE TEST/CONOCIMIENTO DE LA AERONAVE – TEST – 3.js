const preguntas = [
    {
        titulo: "1. Cuando actuamos el botón de reglaje del altímetro:",
        opciones: [
            {
                textoRespuesta: "Modificamos sólo la lectura de la ventanilla de Kolsman",
                isCorrect: false
            },
            {
                textoRespuesta: "El altímetro carece de ningún sistema de reglaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Modificamos sólo las agujas, pues la lectura de la ventanilla de Kolsman se modifica sola al cambiar la Presión atmosférica",
                isCorrect: false
            },
            {
                textoRespuesta: "Modificamos tanto la lectura de las agujas, como la de la ventanilla de Kolsman",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "2. Se dice que un motor tiene mezcla rica cuando:",
        opciones: [
            {
                textoRespuesta: "La parte de aire es superior a la normal",
                isCorrect: false
            },
            {
                textoRespuesta: "bEl combustible tiene mayor octanaje",
                isCorrect: false
            },
            {
                textoRespuesta: "cLa parte de combustible es superior a la normal",
                isCorrect: true
            },
            {
                textoRespuesta: "El combustible tiene menor octanaje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. El indicador de presión de admisión permite conocer la presión de:",
        opciones: [
            {
                textoRespuesta: "Aceite",
                isCorrect: false
            },
            {
                textoRespuesta: "Aire-Gasolina",
                isCorrect: true
            },
            {
                textoRespuesta: "Bomba de vacío",
                isCorrect: false
            },
            {
                textoRespuesta: "Neumáticos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. El centro de gravedad:",
        opciones: [
            {
                textoRespuesta: "Es un punto imaginario",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el punto en que se concentra toda la masa del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Se encuentra aproximadamente a 1/4 de distancia del borde de ataque del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "5. ¿Por qué se deben llenar los depósitos de combustible después del último vuelo?",
        opciones: [
            {
                textoRespuesta: "Así eliminamos la evaporación del combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Se previene la condensación de agua, eliminando espacios vacíos en los depósitos",
                isCorrect: true
            },
            {
                textoRespuesta: "Evitamos la condensación de combustible, quedando el agua flotando",
                isCorrect: false
            },
            {
                textoRespuesta: "Se previene la expansión del combustible, así como la entrada de impurezas del aceite",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Como se llama el elemento del motor que une el émbolo con el pie de biela:",
        opciones: [
            {
                textoRespuesta: "Leva",
                isCorrect: false
            },
            {
                textoRespuesta: "Segmentp",
                isCorrect: false
            },
            {
                textoRespuesta: "Bulón",
                isCorrect: true
            },
            {
                textoRespuesta: "Taqué",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. En el caso de que la presión de aceite no suba a unos valores normales después de poner en marcha, el piloto deberá:",
        opciones: [
            {
                textoRespuesta: "Aumentar la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Poner la calefacción del aceite",
                isCorrect: false
            },
            {
                textoRespuesta: "Parar el motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Comprobar la temperatura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. El indicador de virajes 'bastón' indica",
        opciones: [
            {
                textoRespuesta: "Rumbo",
                isCorrect: false
            },
            {
                textoRespuesta: "Altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Derrape",
                isCorrect: false
            },
            {
                textoRespuesta: "Dirección y régimen de viraje",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "9. El primer síntoma de hielo en el carburador será",
        opciones: [
            {
                textoRespuesta: "Rateo del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Respuesta lenta del mando de gases",
                isCorrect: false
            },
            {
                textoRespuesta: "Elevación de la temperatura del motor por mezcla pobre",
                isCorrect: false
            },
            {
                textoRespuesta: "Pérdida de potencia",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "10. El sistema de medición de presiones consta de tomas dinámicas y tomas:",
        opciones: [
            {
                textoRespuesta: "Variables",
                isCorrect: false
            },
            {
                textoRespuesta: "Superficiales",
                isCorrect: false
            },
            {
                textoRespuesta: "Estáticas",
                isCorrect: true
            },
            {
                textoRespuesta: "Marginales",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. La parte superior de un perfil alar, se denomina:",
        opciones: [
            {
                textoRespuesta: "Intradós",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuerda",
                isCorrect: false
            },
            {
                textoRespuesta: "Extradós",
                isCorrect: true
            },
            {
                textoRespuesta: "Curvatura media",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. El sector amarillo del indicador de temperatura se corresponde con:",
        opciones: [
            {
                textoRespuesta: "Un margen de operación frecuente",
                isCorrect: false
            },
            {
                textoRespuesta: "Un margen de funcionamiento normal",
                isCorrect: false
            },
            {
                textoRespuesta: "Un margen de funcionamiento excepcional",
                isCorrect: true
            },
            {
                textoRespuesta: "Un margen de funcionamiento prohibido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. Si el combustible usado en un ULM es de menor octanaje que el recomendado por el fabricante:",
        opciones: [
            {
                textoRespuesta: "Disminuirá la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Producirá detonaciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Se calentará el motor más de lo normal",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentarán las evoluciones.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. El Variómetro indica:",
        opciones: [
            {
                textoRespuesta: "Altitud sobre el mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de ascenso y descenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad relativa",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo magnético",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. El aceite en los motores de explosión desarrolla una misión",
        opciones: [
            {
                textoRespuesta: "Depende de la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Accesoria",
                isCorrect: false
            },
            {
                textoRespuesta: "Fundamental",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna en los motores de inyección",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. Cuando después de un vuelo, notemos que la tela de nuestro aparato está sucia (alguna mancha de aceite o similar), deberemos:",
        opciones: [
            {
                textoRespuesta: "Lavar la tela para que no se pudra",
                isCorrect: true
            },
            {
                textoRespuesta: "Limpiarla",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambiar la tela",
                isCorrect: false
            },
            {
                textoRespuesta: "Dejarla tal y como está",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Se define como carga alar a:",
        opciones: [
            {
                textoRespuesta: "La relación entre el peso máximo del ala y la superficie alar",
                isCorrect: false
            },
            {
                textoRespuesta: "La fuerza que tiene que soportar la superficie total del ala respecto al peso máximo al despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "La relación entre la superficie alar y la envergadura del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre el peso del ULM y la envergadura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. ¿Qué ocurre si nos olvidamos la funda del tubo Pitot?",
        opciones: [
            {
                textoRespuesta: "Que el altímetro no funciona",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el anemómetro no funciona",
                isCorrect: true
            },
            {
                textoRespuesta: "Las dos anteriores son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "Que no hay aireación en la cabina",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. ¿Qué velocidades delimitan el arco amarillo?",
        opciones: [
            {
                textoRespuesta: "Vne - Vlo",
                isCorrect: false
            },
            {
                textoRespuesta: "Vne - Vfe",
                isCorrect: false
            },
            {
                textoRespuesta: "Vne - Vle",
                isCorrect: false
            },
            {
                textoRespuesta: "Vno - Vne",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "20. El anemómetro necesita medir la presión estática para su funcionamiento",
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
        titulo: "21. El mando por desplazamiento se caracteriza por:",
        opciones: [
            {
                textoRespuesta: "Un movimiento del peso del avión y del timón de profundidad simultáneos",
                isCorrect: false
            },
            {
                textoRespuesta: "Un movimiento del ala y el peso del avión simultáneos",
                isCorrect: true
            },
            {
                textoRespuesta: "Un movimiento del timón de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Un movimiento del timón de profundidad y el de dirección simultáneos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. El cabeceo es el movimiento alrededor del eje lateral del avión.",
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
        titulo: "23. Para corregir la tendencia del par motor",
        opciones: [
            {
                textoRespuesta: "Presionamos el pedal opuesto al par",
                isCorrect: true
            },
            {
                textoRespuesta: "Encabritando",
                isCorrect: false
            },
            {
                textoRespuesta: "Reduciendo potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Reduciendo velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. El encargado de generar la corriente eléctrica en el motor de un ULM es:",
        opciones: [
            {
                textoRespuesta: "El magneto",
                isCorrect: true
            },
            {
                textoRespuesta: "La bujía",
                isCorrect: false
            },
            {
                textoRespuesta: "El carburador",
                isCorrect: false
            },
            {
                textoRespuesta: "El platino",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. Un tren de aterrizaje con rueda de morro y dos ruedas principales situadas detrás del centro de gravedad se llama:",
        opciones: [
            {
                textoRespuesta: "Tren bicicleta",
                isCorrect: false
            },
            {
                textoRespuesta: "Tren triciclo",
                isCorrect: true
            },
            {
                textoRespuesta: "Tren adelantado",
                isCorrect: false
            },
            {
                textoRespuesta: "Tren convencional",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. ¿Qué determina la estabilidad longitudinal de un avión?",
        opciones: [
            {
                textoRespuesta: "La localización del centro de gravedad",
                isCorrect: true
            },
            {
                textoRespuesta: "La efectividad del estabilizador de cola y compensador de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre tracción y sustentación, peso y resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "El diedro, ángulo de flecha y efecto quilla",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. ¿Qué tipo de aceite deja menor residuo en la combustión?",
        opciones: [
            {
                textoRespuesta: "Sintético",
                isCorrect: true
            },
            {
                textoRespuesta: "Semisintético",
                isCorrect: false
            },
            {
                textoRespuesta: "Mineral",
                isCorrect: false
            },
            {
                textoRespuesta: "De oliva",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. La comprobación de la cantidad y estado del aceite debe hacerse:",
        opciones: [
            {
                textoRespuesta: "En cada revisión de 50 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "Antes de cada vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "En la revisión general del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando lo indique el certificado de aeronavegabilidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. ¿Qué significa un factor de carga n=4?",
        opciones: [
            {
                textoRespuesta: "Que la sustentación es cuatro veces el peso de la aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "No existe factor de carga n=4",
                isCorrect: false
            },
            {
                textoRespuesta: "La resistencia más la fuerza de inercia en la maniobra es cuatro veces al peso",
                isCorrect: false
            },
            {
                textoRespuesta: "La potencia de los motores y la fuerza de inercia es igual al peso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Al aumentar la altitud sin ajustar la relación de la mezcla, las prestaciones del motor de émbolo se ven afectadas por:",
        opciones: [
            {
                textoRespuesta: "Una disminución de la densidad del aire para una menor cantidad de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Una densidad de aire constante para una mayor cantidad de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "La disminución de la masa de mezcla aire¬-combustible que entra en el cilindro",
                isCorrect: true
            },
            {
                textoRespuesta: "Un aumento en la densidad del aire para una menor cantidad de combustible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. Podemos entender el funcionamiento de la hélice como",
        opciones: [
            {
                textoRespuesta: "Un tornillo a rosca invertido",
                isCorrect: false
            },
            {
                textoRespuesta: "Parte independiente del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Una suma de perfiles aerodinámicos",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Las flaps son:",
        opciones: [
            {
                textoRespuesta: "Ranuras del borde de ataque cuya finalidad es canalizar la corriente de aire por la parte superior del ala",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una superficie aerodinámica encargada de producir el movimiento de 'guiñada' del ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Unas superficies hipersustentadoras móviles cuya finalidad es dar mayor curvatura al ala para aumentar la sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Unos frenos aerodinámicos que reducen drásticamente la sustentación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. El anemómetro que parámetro mide",
        opciones: [
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad corregida por la temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. En caso de rodar por pistas de tierra, se deberá hacer lentamente porque se puede dañar por",
        opciones: [
            {
                textoRespuesta: "Trepidaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Vientos cruzados",
                isCorrect: false
            },
            {
                textoRespuesta: "Mala visibilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Melladuras de piedras",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. ¿Qué significa que una hélice es de 36 x 16?",
        opciones: [
            {
                textoRespuesta: "Que tiene 36 cm de larga por 16 de ancha",
                isCorrect: false
            },
            {
                textoRespuesta: "Que tiene 36 pulgadas de larga por 16 pulgadas de ancha",
                isCorrect: false
            },
            {
                textoRespuesta: "Que regenta un diámetro de 36 pulgadas y un paso de 16 pulgadas",
                isCorrect: true
            },
            {
                textoRespuesta: "Nada de lo anterior es cierto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Por que se deben llenar los depósitos de combustible después del último vuelo.",
        opciones: [
            {
                textoRespuesta: "Así eliminamos la evaporación del combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Se previene la condensación del agua, eliminando espacios vacíos en los depósitos",
                isCorrect: true
            },
            {
                textoRespuesta: "Evitamos la condensación del combustible, quedando el agua flotando",
                isCorrect: false
            },
            {
                textoRespuesta: "Se previene la expansión del combustible, así como la entrada de impurezas del aceite",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. La recta que podemos dibujar de extremo a extremo del ala pasando por el centro de gravedad se denomina:",
        opciones: [
            {
                textoRespuesta: "Eje lateral",
                isCorrect: true
            },
            {
                textoRespuesta: "Eje longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Eje transversal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. ¿Para qué sirve la chapa doblada que va unida al borde de fuga del timón de dirección?",
        opciones: [
            {
                textoRespuesta: "Para ayudar al alabeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Existe en algunos modelos, generalmente para reforzar el borde de fuga",
                isCorrect: false
            },
            {
                textoRespuesta: "Para evitar el flutter",
                isCorrect: false
            },
            {
                textoRespuesta: "Para compensar el flujo asimétrico de la hélice sobre el estabilizador vertical, y que no tengamos que hacer mucho esfuerzo en el pedal en vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "39. Los compensadores de profundidad se encuentran:",
        opciones: [
            {
                textoRespuesta: "En el borde de salida de las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "En el borde de salida del timón de profundidad",
                isCorrect: true
            },
            {
                textoRespuesta: "En el borde de salida del timón de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Si llevamos el QFE de un aeródromo concreto, al aterrizar en él, el altímetro marcará",
        opciones: [
            {
                textoRespuesta: "0 pies",
                isCorrect: true
            },
            {
                textoRespuesta: "La elevación del campo",
                isCorrect: false
            },
            {
                textoRespuesta: "1013 Mb",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. ¿Qué instrumentos utilizan las tomas estáticas y el tubo pitot?",
        opciones: [
            {
                textoRespuesta: "La brújula, el tacómetro y el bastón y bola",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo el altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "El altímetro, el variómetro y el anemómetro",
                isCorrect: true
            },
            {
                textoRespuesta: "El girodireccional y el horizonte artificial",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. En un motor, el lubricante:",
        opciones: [
            {
                textoRespuesta: "Siempre lo lleva la gasolina",
                isCorrect: false
            },
            {
                textoRespuesta: "No siempre es necesario",
                isCorrect: false
            },
            {
                textoRespuesta: "Asegura el funcionamiento correcto de las piezas en movimiento",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "43. El distribuidor es accionado directamente por el cigüeñal",
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
        titulo: "44. Durante el ascenso con valor constante de presión de admisión de aire (MAP) y de indicación de RPM del motor y con un ajuste de mezcla también constante, la potencia desarrollada por un motor alternativo:",
        opciones: [
            {
                textoRespuesta: "Permanece constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta, pero esta situación sólo es posible en ULM's dotados con motores sobrealimentados y con hélice de velocidad constante",
                isCorrect: true
            },
            {
                textoRespuesta: "Sólo permanece constante si se empuja hacia delante el mando de gases",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. En el caso de tener un fallo de motor y suponer que es de una perla en la bujía, ¿Qué intento de soltarla se puede hacer?",
        opciones: [
            {
                textoRespuesta: "Picar y encabritar el avión bruscamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Acelerar varias veces el motor a tope",
                isCorrect: false
            },
            {
                textoRespuesta: "Quitar el contacto y volverlo a dar rápidamente",
                isCorrect: true
            },
            {
                textoRespuesta: "Cortar el paso de combustible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. ¿Cuál puede ser la causa de detonación?",
        opciones: [
            {
                textoRespuesta: "Baja presión de admisión y alto número de revoluciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Alta presión de admisión y alto número de revoluciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Baja presión de admisión y bajo número de revoluciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Alta presión de admisión y bajo número de revoluciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. La primera indicación de hielo en el carburador, con hélice de velocidad constante, será",
        opciones: [
            {
                textoRespuesta: "Caída de presión de admisión",
                isCorrect: true
            },
            {
                textoRespuesta: "Caída en las rpm",
                isCorrect: false
            },
            {
                textoRespuesta: "Alta presión de aceite",
                isCorrect: false
            },
            {
                textoRespuesta: "Alta presión de combustible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. Identifique las partes del perfil de la figura: letra D",
        opciones: [
            {
                textoRespuesta: "Intradós",
                isCorrect: false
            },
            {
                textoRespuesta: "Extradós",
                isCorrect: true
            },
            {
                textoRespuesta: "Curvatura mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Perfil",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Todos los aviones van equipados con sistemas de anti hielo",
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
        titulo: "50. El carburador en un motor de 2 tiempos cumple dos funciones principales, una es: 'vaporizar el combustible y mezclarlo con el aire en una determinada proporción'. La otra es:",
        opciones: [
            {
                textoRespuesta: "Controlar el nivel de gasolina de los depósitos",
                isCorrect: false
            },
            {
                textoRespuesta: "Controlar la cantidad de mezcla utilizada por el motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Controlar los filtros de aire y gasolina",
                isCorrect: false
            },
            {
                textoRespuesta: "Retrasar el encendido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. ¿Por qué no se utilizan tornillos acerados en los ULM?",
        opciones: [
            {
                textoRespuesta: "a) Por fragilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Por no ser dúctiles",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Por ser más caros",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"b\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "52. Los dispositivos hipersustentadores que facilitan la circulación de la corriente aerodinámica abriendo ranuras en el borde de ataque se denominan:",
        opciones: [
            {
                textoRespuesta: "a) Slats",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Ranuras de borde de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"b\" y \"c\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "53. Es recomendable drenar el combustible como mínimo una vez al mes",
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
        titulo: "54. El sistema hidráulico se utiliza para mover equipos que requieran la aplicación de una fuerza durante periodos muy largos de tiempo:",
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
        titulo: "55. ¿Que velocidades delimitan el arco blanco del anemómetro?",
        opciones: [
            {
                textoRespuesta: "Vso-Vle",
                isCorrect: false
            },
            {
                textoRespuesta: "Vs-Vfe",
                isCorrect: false
            },
            {
                textoRespuesta: "Vne-Vle",
                isCorrect: false
            },
            {
                textoRespuesta: "Vso-Vfe",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "56. En caso de fallo del alternador, la batería no continuaría alimentando a todo el sistema eléctrico.",
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
        titulo: "57. La capacidad de una bujía para soportar grandes cargas sin sobrecalentamientos, es lo que se denominad 'gama térmica' que puede ser controlada",
        opciones: [
            {
                textoRespuesta: "Variando la conductibilidad térmica del aislante y electrodos",
                isCorrect: false
            },
            {
                textoRespuesta: "Variando el material de la junta interna del aislante",
                isCorrect: false
            },
            {
                textoRespuesta: "Controlando la longitud del aislante",
                isCorrect: false
            },
            {
                textoRespuesta: "Todos los anteriores métodos son correctos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "58. La brújula nos indica:",
        opciones: [
            {
                textoRespuesta: "Rumbos geográficos",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbos magnéticos",
                isCorrect: true
            },
            {
                textoRespuesta: "Rumbos cartesianos",
                isCorrect: false
            },
            {
                textoRespuesta: "El Norte geográfico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. Las superficies secundarias de mando son:",
        opciones: [
            {
                textoRespuesta: "Compensadores, flaps, slats y spoilers o aerofrenos",
                isCorrect: true
            },
            {
                textoRespuesta: "Alerones, timón de profundidad y compensadores",
                isCorrect: false
            },
            {
                textoRespuesta: "Timón de profundidad, timón de dirección y compensadores",
                isCorrect: false
            },
            {
                textoRespuesta: "Alerones, timón de dirección y timón de profundidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. La carga última de una aeronave es:",
        opciones: [
            {
                textoRespuesta: "La carga límite multiplicada por 2",
                isCorrect: false
            },
            {
                textoRespuesta: "La carga límite multiplicada por unos factores de seguridad establecidos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. En un viraje a la derecha ¿Hacia qué lado se desplazarán los números de una brújula magnética?",
        opciones: [
            {
                textoRespuesta: "A la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "A la izquierda",
                isCorrect: true
            },
            {
                textoRespuesta: "Se mantendrá quieta",
                isCorrect: false
            },
            {
                textoRespuesta: "Dependerá de cómo esté calada la brújula",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. La superficie alar es la superficie total:",
        opciones: [
            {
                textoRespuesta: "De las dos alas",
                isCorrect: false
            },
            {
                textoRespuesta: "De las alas incluida la parte que pueda quedar cubierta por el fuselaje o por las góndolas de los motores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "63. Si no se está seguro de que entra aceite en el sistema, se ha de:",
        opciones: [
            {
                textoRespuesta: "Dar plena potencia al motor y esperar un momento",
                isCorrect: false
            },
            {
                textoRespuesta: "Esperar un momento sin dar plena potencia al motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Parar el motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Esto no ocurre nunca",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. La línea imaginaria que une el morro del avión con la cola se denomina:",
        opciones: [
            {
                textoRespuesta: "Eje longitudinal",
                isCorrect: true
            },
            {
                textoRespuesta: "Eje lateral",
                isCorrect: false
            },
            {
                textoRespuesta: "Eje vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. La batería se usa casi exclusivamente para la puesta en marcha, permaneciendo el resto del vuelo como fuente eléctrica de reserva",
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
        titulo: "66. Los compensadores permiten al piloto",
        opciones: [
            {
                textoRespuesta: "Disminuir el esfuerzo sobre los mandos primarios",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentar la sensación de velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambiar las resistencias inducidas",
                isCorrect: false
            },
            {
                textoRespuesta: "Mejorar el rendimiento del motor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. El conocimiento de la EGT nos permite",
        opciones: [
            {
                textoRespuesta: "Saber cuál es la temperatura del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Saber si la mezcla aire¬-combustible es la adecuada",
                isCorrect: true
            },
            {
                textoRespuesta: "Conocer la temperatura del aceite",
                isCorrect: false
            },
            {
                textoRespuesta: "Saber si la presión de admisión es la correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. En los carburadores de depresión, las variaciones en la relación de la mezcla se obtiene ajustando:",
        opciones: [
            {
                textoRespuesta: "El flujo de aire, el flujo de combustible y la temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Los flujos de combustible y aire",
                isCorrect: false
            },
            {
                textoRespuesta: "El flujo de aire",
                isCorrect: false
            },
            {
                textoRespuesta: "El flujo de combustible en función de la presión de admisión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "69. Los cables de aterrizaje situados por encima del ala en algunos modelos de ULM, sujetan el ala:",
        opciones: [
            {
                textoRespuesta: "Contra las cargas positivas",
                isCorrect: false
            },
            {
                textoRespuesta: "Contra las cargas negativas y de aterrizaje",
                isCorrect: true
            },
            {
                textoRespuesta: "Contra las cargas positivas y de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el empenaje de cola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. El momento de encabritado del avión se puede contrarrestar con el:",
        opciones: [
            {
                textoRespuesta: "Compensador de dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Compensador de profundidad",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. En caso de no disponer del gráfico de centrado del avión, los pasajeros y cargas más pesadas deben colocarse:",
        opciones: [
            {
                textoRespuesta: "Delante",
                isCorrect: true
            },
            {
                textoRespuesta: "Detrás",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. ¿Mantiene siempre sus propiedades el dacrón?",
        opciones: [
            {
                textoRespuesta: "Sí, porque es un tejido sintético",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo las pierde si se moja",
                isCorrect: false
            },
            {
                textoRespuesta: "Va perdiéndolas con el tiempo",
                isCorrect: true
            },
            {
                textoRespuesta: "Depende de la tensión que tiene imprimida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. Anemómetro, altímetro y variómetro son instrumentos basados en la medida de la presión.",
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
        titulo: "74. Cuando la hélice vibra, deberemos...",
        opciones: [
            {
                textoRespuesta: "Equilibrarla nosotros",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambiarla",
                isCorrect: false
            },
            {
                textoRespuesta: "Equilibrarla por un especialista",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. En qué parte del motor de dos tiempos tiene la toma de depresión la bomba de gasolina para su funcionamiento.",
        opciones: [
            {
                textoRespuesta: "En el carburador",
                isCorrect: false
            },
            {
                textoRespuesta: "En el cilindro",
                isCorrect: false
            },
            {
                textoRespuesta: "En la culata",
                isCorrect: false
            },
            {
                textoRespuesta: "En el cárter",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "76. ¿Qué tipo de presión proporciona un tubo de pitot con abertura en la dirección de la corriente libre?",
        opciones: [
            {
                textoRespuesta: "Presión estática",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión dinámica",
                isCorrect: false
            },
            {
                textoRespuesta: "Presión total",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. El elemento aerodinámico utilizado para proporcionar la tracción necesaria para que el ultraligero se mueva, es:",
        opciones: [
            {
                textoRespuesta: "El patín de cola",
                isCorrect: false
            },
            {
                textoRespuesta: "El tren principal",
                isCorrect: false
            },
            {
                textoRespuesta: "La hélice",
                isCorrect: true
            },
            {
                textoRespuesta: "El motor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. ¿Cómo es el ruido en los motores de 2 tiempos?",
        opciones: [
            {
                textoRespuesta: "Es menor que el producido por los motores de 4 tiempos",
                isCorrect: false
            },
            {
                textoRespuesta: "Es mayor que el producido por los motores de 4 tiempos",
                isCorrect: true
            },
            {
                textoRespuesta: "Es similar en ambos tipos de motores",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la proporción de aceite de la mezcla",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. La refrigeración en un motor indica el calentamiento excesivo de las piezas debido a:",
        opciones: [
            {
                textoRespuesta: "El rozamiento",
                isCorrect: false
            },
            {
                textoRespuesta: "La combustión",
                isCorrect: true
            },
            {
                textoRespuesta: "El rodaje brusco sin calentar",
                isCorrect: false
            },
            {
                textoRespuesta: "La alimentación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. La causa principal de contaminación del combustible es:",
        opciones: [
            {
                textoRespuesta: "Formación de hielo laminar",
                isCorrect: false
            },
            {
                textoRespuesta: "Aparición de agua en los depósitos",
                isCorrect: true
            },
            {
                textoRespuesta: "Mezcla con el aceite del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Filtro de aceite en malas condiciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. Se define como presión de admisión",
        opciones: [
            {
                textoRespuesta: "La que medimos considerando la presión atmosférica",
                isCorrect: false
            },
            {
                textoRespuesta: "La que existe en el sistema de aceite",
                isCorrect: false
            },
            {
                textoRespuesta: "La que existe en el colector del depósito",
                isCorrect: false
            },
            {
                textoRespuesta: "La que existe en el colector de admisión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "82. El conjunto de eje cigüeñal consiste en:",
        opciones: [
            {
                textoRespuesta: "Carter, cigüeñal, bielas y émbolos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cigüeñal, árbol de levas, válvulas, muelles de válvulas y varillas de empuje",
                isCorrect: false
            },
            {
                textoRespuesta: "Hélice, cigüeñal, émbolos y bielas",
                isCorrect: false
            },
            {
                textoRespuesta: "Cigüeñal, bielas y émbolos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "83. ¿Qué es la cuerda media del ala?",
        opciones: [
            {
                textoRespuesta: "La cuerda media está referida a perfiles no al ala",
                isCorrect: false
            },
            {
                textoRespuesta: "Es aquella que multiplicada por el alargamiento es igual a la superficie alar",
                isCorrect: false
            },
            {
                textoRespuesta: "Es aquella que multiplicada por la envergadura es igual a la superficie alar",
                isCorrect: true
            },
            {
                textoRespuesta: "Es aquella que multiplicada por el estrechamiento es igual a la superficie alar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. Una hélice de paso variable permite",
        opciones: [
            {
                textoRespuesta: "No tiene ventajas",
                isCorrect: false
            },
            {
                textoRespuesta: "Volar más despacio",
                isCorrect: false
            },
            {
                textoRespuesta: "Despegar a mayor altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Rendimiento óptimo en todas las fases",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "85. Identifique las partes del perfil de la figura: letra H",
        opciones: [
            {
                textoRespuesta: "Intradós",
                isCorrect: false
            },
            {
                textoRespuesta: "Curvatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuerda",
                isCorrect: false
            },
            {
                textoRespuesta: "Espesor",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "86. El alargamiento se define como el cociente entre la envergadura y la cuerda media",
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
        titulo: "87. ¿Cuál de estas bujías se denomina más fría?",
        opciones: [
            {
                textoRespuesta: "Bujía de punta corta",
                isCorrect: true
            },
            {
                textoRespuesta: "Bujía de punta larga",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. Los motores de explosión se clasifican principalmente",
        opciones: [
            {
                textoRespuesta: "Directos y retardados",
                isCorrect: false
            },
            {
                textoRespuesta: "Radiales, en V, en estrella y en línea",
                isCorrect: false
            },
            {
                textoRespuesta: "Admisión, compresión, explosión y escape",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos tiempos, cuatro tiempos, diesel",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "89. La toma estática mide presión estática",
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
        titulo: "90. Un motor presenta mezcla pobre cuando:",
        opciones: [
            {
                textoRespuesta: "El combustible presenta mejor octanaje",
                isCorrect: false
            },
            {
                textoRespuesta: "El combustible presenta mayor octanaje",
                isCorrect: false
            },
            {
                textoRespuesta: "La parte de aire es superior a la normal",
                isCorrect: true
            },
            {
                textoRespuesta: "La parte de aire es inferior a la normal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. Un biplano es un:",
        opciones: [
            {
                textoRespuesta: "Avión con dos alas, una a cada lado",
                isCorrect: false
            },
            {
                textoRespuesta: "Avión con dos grupos de alas, uno por encima del otro",
                isCorrect: true
            },
            {
                textoRespuesta: "Avión con un ala por encima del fuselaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Avión con fuselaje plano",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. Del anemómetro obtenemos:",
        opciones: [
            {
                textoRespuesta: "La lectura de la velocidad verdadera (TAS)",
                isCorrect: false
            },
            {
                textoRespuesta: "La lectura de la velocidad relativa (TAS)",
                isCorrect: false
            },
            {
                textoRespuesta: "La lectura de la velocidad con respecto al suelo (GS)",
                isCorrect: false
            },
            {
                textoRespuesta: "La lectura de la velocidad indicada (IAS)",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "93. ¿Cuál podría ser una maniobra con factor de carga n = 0?",
        opciones: [
            {
                textoRespuesta: "En un viraje de 60º",
                isCorrect: false
            },
            {
                textoRespuesta: "Pasando de un régimen de ascenso a uno brusco de descenso",
                isCorrect: true
            },
            {
                textoRespuesta: "En vuelo recto y nivelado",
                isCorrect: false
            },
            {
                textoRespuesta: "En un régimen de descenso mantenido de 500 fpm",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. Es aconsejable mantener alejado el depósito y conducciones de la gasolina de emisiones de calor (sistema de escape, por ejemplo), porque:",
        opciones: [
            {
                textoRespuesta: "El combustible mas frió da mas potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "El combustible caliente tiende a evaporarse",
                isCorrect: false
            },
            {
                textoRespuesta: "El combustible caliente tiende a la detonación o preignición",
                isCorrect: true
            },
            {
                textoRespuesta: "Por todo lo anterior",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. Los cuatro tiempos del motor de explosión se llaman: admisión, compresión, explosión y…",
        opciones: [
            {
                textoRespuesta: "Expulsión",
                isCorrect: true
            },
            {
                textoRespuesta: "Reacción",
                isCorrect: false
            },
            {
                textoRespuesta: "Tracción",
                isCorrect: false
            },
            {
                textoRespuesta: "Avance",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. El diedro es:",
        opciones: [
            {
                textoRespuesta: "a) El ángulo formado entre la vertical y el plano de la cuerda alar que proporciona la estabilidad horizontal",
                isCorrect: false
            },
            {
                textoRespuesta: "b) El ángulo formado entre la horizontal y el plano de la cuerda alar que proporciona la estabilidad vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Puede ser positivo o negativo, y proporciona la estabilidad lateral",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"c\" y es el ángulo formado entre la horizontal y el plano de la cuerda alar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "97. En el manual del avión, el centro de gravedad se expresa en distancia a una línea de referencia que se llama",
        opciones: [
            {
                textoRespuesta: "Brazo",
                isCorrect: false
            },
            {
                textoRespuesta: "Momento",
                isCorrect: false
            },
            {
                textoRespuesta: "Datum",
                isCorrect: true
            },
            {
                textoRespuesta: "Palanca",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Cuando el piloto de un avión con motor alternativo mueve la palanca de la mezcla a una posición de mezcla pobre:",
        opciones: [
            {
                textoRespuesta: "Aumenta el volumen de aire que penetra en el carburador",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la cantidad de combustible que penetra en la cámara de combustión",
                isCorrect: false
            },
            {
                textoRespuesta: "Se reduce el volumen de aire que penetra en el carburador",
                isCorrect: false
            },
            {
                textoRespuesta: "Se reduce la cantidad de combustible que penetra en la cámara de combustión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "99. El uso de combustible de menor octanaje al recomendado para el motor.",
        opciones: [
            {
                textoRespuesta: "Produce enfriamiento de los cilindros",
                isCorrect: false
            },
            {
                textoRespuesta: "Produce detonaciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Ambas respuestas son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "Ambas respuestas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Básicamente podemos considerar el altímetro como un",
        opciones: [
            {
                textoRespuesta: "Barómetro",
                isCorrect: true
            },
            {
                textoRespuesta: "Variómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Instrumento estático",
                isCorrect: false
            },
            {
                textoRespuesta: "Instrumento dinámico",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;