const preguntas = [
    {
        titulo: "1. ¿A qué arco del anemómetro corresponde aquel que indica el entorno de velocidades a las que se puede usar los flaps sin que la aeronave sufra daños en su estructura?",
        opciones: [
            {
                textoRespuesta: "Arco blanco.",
                isCorrect: true
            },
            {
                textoRespuesta: "Arco verde.",
                isCorrect: false
            },
            {
                textoRespuesta: "Arco amarillo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Arco rojo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. El variómetro es un instrumento que nos proporciona:",
        opciones: [
            {
                textoRespuesta: "El régimen de ascensos y descensos, en pies por hora, normalmente.",
                isCorrect: false
            },
            {
                textoRespuesta: "El régimen de ascensos y descensos, en millas por hora, normalmente.",
                isCorrect: false
            },
            {
                textoRespuesta: "El régimen de ascensos y descensos, en metros por minuto, normalmente.",
                isCorrect: false
            },
            {
                textoRespuesta: "El régimen de cambio de altura, en pies por minuto, normalmente.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "3. Un tren de aterrizaje está compuesto por:",
        opciones: [
            {
                textoRespuesta: "Dos ruedas a ambos lados del eje longitudinal de la aeronave, que forman el tren principal, y una rueda delantera o trasera.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una rueda delantera o trasera, que es el tren principal, y dos ruedas a ambos lados del eje longitudinal de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos ruedas delanteras o traseras, que forman el tren principal, y una rueda en el eje longitudinal de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos ruedas a ambos lados del eje longitudinal de la aeronave, que forman el tren principal, y dos ruedas delanteras o traseras.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. ¿Cuál de las siguientes afirmaciones sobre la hélice de una aeronave es correcta?",
        opciones: [
            {
                textoRespuesta: "Está formada por un conjunto infinito de perfiles aerodinámicos y es el elemento que genera la tracción necesaria para que el avión vuele.",
                isCorrect: false
            },
            {
                textoRespuesta: "Está formada por un conjunto infinito de perfiles aerodinámicos y es el elemento que genera la sustentación necesaria para que el avión vuele.",
                isCorrect: false
            },
            {
                textoRespuesta: "Está formada por un conjunto finito de perfiles aerodinámicos y es el elemento que genera la tracción necesaria para que el avión se mueva.",
                isCorrect: false
            },
            {
                textoRespuesta: "Está formada por un conjunto infinito de perfiles aerodinámicos y es el elemento que genera la tracción necesaria para que el avión se mueva.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "5. El tacómetro es el instrumento que:",
        opciones: [
            {
                textoRespuesta: "Mide las revoluciones por minuto del motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Mide las revoluciones por segundo del motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mide las revoluciones por minuto de las hélices.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mide la presión de admisión en aeronaves con hélices de paso variable.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Las revoluciones por minuto del motor podemos verlas en:",
        opciones: [
            {
                textoRespuesta: "El anemómetro.",
                isCorrect: false
            },
            {
                textoRespuesta: "El tacómetro.",
                isCorrect: true
            },
            {
                textoRespuesta: "El contador.",
                isCorrect: false
            },
            {
                textoRespuesta: "El variómetro.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. La línea roja marcada en el anemómetro de la aeronave indica:",
        opciones: [
            {
                textoRespuesta: "La velocidad que no debe ser excedida en situación de turbulencias fuertes o moderadas.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad que nunca debe ser excedida salvo que sea necesario en casos de emergencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad que nunca debe ser excedida, pues podría causar daños estructurales en la aeronave.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad de precaución, a partir de la cual no podemos realizar maniobras bruscas o la aeronave podría sufrir daños estructurales.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. En un motor atmosférico de cuatro tiempos, la bujía:",
        opciones: [
            {
                textoRespuesta: "Proporciona la chispa que prende la mezcla de aire y combustible en el cilindro, lo que provoca la detonación de esta mezcla.",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporciona la chispa que prende la mezcla de aire y combustible en el cilindro, lo que provoca la explosión de esta mezcla.",
                isCorrect: true
            },
            {
                textoRespuesta: "Proporciona la chispa que prende la mezcla de aire y combustible en el carburador, lo que provoca la explosión de esta mezcla.",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporciona la chispa que prende la mezcla de aire y combustible en el cilindro, lo que provoca la preignición de esta mezcla.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Las alas de una aeronave:",
        opciones: [
            {
                textoRespuesta: "Proporcionan la mayor fuerza sustentadora de ésta y pueden estar unidas al fuselaje de tres maneras: ala alta, media o baja.",
                isCorrect: true
            },
            {
                textoRespuesta: "Proporcionan la mayor fuerza sustentadora de ésta y pueden estar unidas al fuselaje de dos maneras: ala alta o baja.",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionan una pequeña parte de la fuerza sustentadora de ésta y pueden estar unidas al fuselaje de tres maneras: ala alta, media o baja.",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionan la mayor fuerza sustentadora de ésta y pueden estar unidas al fuselaje de dos maneras: ala alta o media.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. La velocidad indicada se define como:",
        opciones: [
            {
                textoRespuesta: "La velocidad que se lee en el anemómetro de la aeronave, sin corrección de los errores del sistema indicador.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad que se lee en el anemómetro de la aeronave, con corrección de los errores del sistema indicador.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad corregida por los errores inducidos por la dirección del viento y la intensidad de éste.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad que se lee en el anemómetro de la aeronave, que indica la velocidad real sobre el suelo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. El sistema de encendido de los motores de combustión interna de cuatro tiempos usados en aviación es un sistema de magnetos, que funciona de la siguiente forma:",
        opciones: [
            {
                textoRespuesta: "Una magneto proporciona corriente eléctrica a las dos bujías que proporcionan la chispa necesaria para que se produzca la explosión de la mezcla de aire y combustible en el cilindro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada una de las dos magnetos proporciona corriente eléctrica a una de las dos bujías que proporcionan la chispa necesaria para que se produzca la explosión de la mezcla de aire y combustible en el carburador.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada una de las dos magnetos proporciona corriente eléctrica a una de las dos bujías que proporcionan la chispa necesaria para que se produzca la explosión de la mezcla de aire y combustible en el cilindro.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una magneto proporciona corriente eléctrica a las dos bujías que proporcionan la chispa necesaria para que se produzca la explosión de la mezcla de aire y combustible en el carburador.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. ¿Cuál es el instrumento que obtiene la información calculando la diferencia entre la presión total y la presión estática?",
        opciones: [
            {
                textoRespuesta: "El altímetro, que nos puede proporcionar distintas altitudes según la presión que calemos en la ventanilla de Kollsman.",
                isCorrect: false
            },
            {
                textoRespuesta: "El anemómetro, que nos proporciona la velocidad indicada, que es la corregida por el error de densidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "El anemómetro, que nos proporciona la velocidad indicada, que es la corregida por el error de compresibilidad del aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "El anemómetro, que nos proporciona la velocidad indicada, que es la que leemos directamente en el instrumento, sin corregir.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "13. En el anemómetro, el límite superior del arco blanco indica:",
        opciones: [
            {
                textoRespuesta: "La mínima velocidad para extender los flaps.",
                isCorrect: false
            },
            {
                textoRespuesta: "La máxima velocidad para extender los flaps.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad máxima de operación de la aeronave con turbulencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de pérdida con flaps.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. ¿En qué eje de la aeronave se produce un giro si utilizamos los alerones y cómo se llama el movimiento que provoca?",
        opciones: [
            {
                textoRespuesta: "Se produce un giro a través del eje transversal que se llama alabeo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce un giro a través del eje longitudinal que se llama cabeceo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce un giro a través del eje longitudinal que se llama alabeo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Se produce un giro a través del eje lateral que se llama cabeceo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. El control en vuelo de un ULM de ala fija de tres ejes se realiza:",
        opciones: [
            {
                textoRespuesta: "Mediante los controles primarios que son el timón de dirección y el timón de profundidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mediante el control de las superficies sustentadoras de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mediante los controles primarios que son el timón de dirección, el timón de profundidad y los flaps.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mediante los controles primarios que son el timón de dirección, el timón de profundidad y los alerones.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "16. ¿Qué ocurre con el motor de la aeronave si durante un vuelo falla el sistema eléctrico?",
        opciones: [
            {
                textoRespuesta: "Que se apagará y tendremos que aprovechar al máximo el coeficiente de planeo de la aeronave para acercarnos a un campo de aterrizaje.",
                isCorrect: false
            },
            {
                textoRespuesta: "No ocurriría nada puesto que el sistema de encendido es independiente y no necesita el sistema eléctrico para trabajar.",
                isCorrect: true
            },
            {
                textoRespuesta: "No ocurriría nada puesto que si falla el alternador tenemos la batería, que nos da un margen de tiempo para aterrizar antes de que el motor se pare.",
                isCorrect: false
            },
            {
                textoRespuesta: "No ocurriría nada puesto que si falla la batería tenemos el alternador, que nos da un margen de tiempo para aterrizar antes de que el motor se pare.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Indique la correcta. El estabilizador vertical de cola:",
        opciones: [
            {
                textoRespuesta: "Tiene alojada en su parte posterior una superficie móvil denominada timón de dirección.",
                isCorrect: true
            },
            {
                textoRespuesta: "Tiene alojada en su parte anterior una superficie móvil denominada timón de dirección.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene alojada en su parte posterior una superficie móvil denominada timón de profundidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene alojada en su parte anterior una superficie móvil denominada timón de profundidad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Los sistemas de compensación:",
        opciones: [
            {
                textoRespuesta: "Permiten minimizar los esfuerzos necesarios para actuar sobre los controles secundarios de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Permiten minimizar los esfuerzos necesarios para actuar sobre los controles de vuelo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Tienen como misión fundamental aumentar la sustentación que producen las alas de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Permiten aumentar los esfuerzos necesarios para actuar sobre los controles de vuelo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. ¿Qué fuente o fuentes de energía utiliza el sistema eléctrico de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Una fuente continua, proporcionada por la batería.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una fuente continua y una alterna, proporcionadas por el alternador.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una fuente alterna, proporcionada por la batería y una fuente continua, proporcionada por el alternador.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una fuente continua, proporcionada por la batería y una fuente alterna, proporcionada por el alternador.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "20. Un ala es:",
        opciones: [
            {
                textoRespuesta: "Cualquier superficie que no ha sido diseñada para obtener una reacción sustentadora de la masa de aire en la que se mueve.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cualquier superficie plana capaz de moverse a través del aire y generar fuerzas sustentadoras.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cualquier superficie que ha sido diseñada para obtener una reacción sustentadora de la masa de aire en la que se mueve.",
                isCorrect: true
            },
            {
                textoRespuesta: "Cualquier superficie que ha sido diseñada para generar el movimiento de la aeronave.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. Un ULM de tres ejes:",
        opciones: [
            {
                textoRespuesta: "Tiene tres ejes de giro que se controlan mediante los mandos secundarios que son timón de profundidad, de dirección y alerones.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene tres ejes de giro que se controlan mediante los mandos primarios que son timón de profundidad, de dirección y alerones.",
                isCorrect: true
            },
            {
                textoRespuesta: "Tienen tres ejes de giro que se controlan mediante los mandos primarios que son timón de profundidad, de dirección, alerones y compensadores.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tienen tres ejes de giro que se controlan mediante los controles secundarios a través de la palanca y los pedales.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. ¿Cuál de los siguientes momentos corresponde al tiempo de admisión en un motor atmosférico de cuatro tiempos?",
        opciones: [
            {
                textoRespuesta: "El pistón forma, en su posición de desplazamiento máximo, con la parte superior del cilindro una cámara estanca donde comprime la mezcla de aire y gasolina.",
                isCorrect: false
            },
            {
                textoRespuesta: "El cilindro expulsa, a través de un orificio regulado por una válvula, una mezcla de aire y combustible en las proporciones adecuadas.",
                isCorrect: false
            },
            {
                textoRespuesta: "El cilindro recibe, a través de un orificio regulado por una válvula, una mezcla de aire y combustible en las proporciones adecuadas.",
                isCorrect: true
            },
            {
                textoRespuesta: "El cilindro recibe, a través de un orificio regulado por una válvula, una determinada cantidad de aire que mezcla en su interior con combustible en las proporciones adecuadas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. ¿Cómo se suelen especificar las medidas de una hélice, expresadas en pulgadas?",
        opciones: [
            {
                textoRespuesta: "Paso x Diámetro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Diámetro x Paso.",
                isCorrect: true
            },
            {
                textoRespuesta: "Diámetro x Largo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Largo x Paso.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Cuando encabritamos el avión lo que estamos haciendo es:",
        opciones: [
            {
                textoRespuesta: "Actuar la palanca de mando hacia adelante, lo que provoca un movimiento del timón de profundidad hacia arriba.",
                isCorrect: false
            },
            {
                textoRespuesta: "Actuar la palanca de mando hacia atrás, lo que provoca un movimiento del timón de profundidad hacia abajo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Actuar la palanca de mando hacia atrás, lo que provoca un movimiento del timón de dirección hacia arriba.",
                isCorrect: false
            },
            {
                textoRespuesta: "Actuar la palanca de mando hacia atrás, lo que provoca un movimiento del timón de profundidad hacia arriba.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "25. Si utilizamos una gasolina de menor número de octanos del que corresponde a una aeronave:",
        opciones: [
            {
                textoRespuesta: "Tendremos mezcla pobre.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendremos aumento de potencia pero será perjudicial debido al calentamiento excesivo de los cilindros, la suciedad en las bujías, el alto consumo de aceite y la detonación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Causaremos pérdida de potencia, calentamiento excesivo de los cilindros, suciedad en las bujías, alto consumo de aceite y detonación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Causaremos pérdida de potencia, enfriamiento excesivo de los cilindros, suciedad en las bujías, bajo consumo de aceite y detonación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. La dirección seguida por el perfil aerodinámico durante su desplazamiento en el seno del aire es:",
        opciones: [
            {
                textoRespuesta: "El viento relativo.",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo de ataque.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo verdadero o magnético.",
                isCorrect: false
            },
            {
                textoRespuesta: "La trayectoria de vuelo.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. ¿Qué función cumple la reductora del motor de una aeronave?",
        opciones: [
            {
                textoRespuesta: "Es el mecanismo que cambia el paso de la hélice cuando ésta es de velocidad constante.",
                isCorrect: false
            },
            {
                textoRespuesta: "Permite a la hélice tener un régimen de rotación inferior al régimen del motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Permite a la hélice tener un régimen de rotación superior al régimen del motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Permite a la hélice tener el régimen de rotación adecuado para cada maniobra.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. Una pequeña superficie móvil situada en el borde de salida de los timones de profundidad y de dirección y de los alerones es:",
        opciones: [
            {
                textoRespuesta: "Un control secundario de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un control primario de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un sistema de compensación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Un sistema de mejora de la sustentación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. La función de la brújula en una aeronave es:",
        opciones: [
            {
                textoRespuesta: "Proporcionar el rumbo del avión con respecto al norte magnético de la Tierra.",
                isCorrect: true
            },
            {
                textoRespuesta: "Proporcionar el rumbo del avión con respecto al norte geográfico de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionar la situación del avión con respecto al norte magnético de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionar la situación del avión con respecto al norte geográfico de la Tierra.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Los ejes de giro en un ULM de tres ejes se corresponden con:",
        opciones: [
            {
                textoRespuesta: "El eje longitudinal, lateral y transversal, que se cruzan en el centro de gravedad.",
                isCorrect: false
            },
            {
                textoRespuesta: "El eje longitudinal, lateral y transversal, que se cruzan en el centro de presiones.",
                isCorrect: false
            },
            {
                textoRespuesta: "El eje lateral, vertical y transversal, que se cruzan en el centro de gravedad.",
                isCorrect: false
            },
            {
                textoRespuesta: "El eje longitudinal, lateral y vertical, que se cruzan en el centro de gravedad.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. El arco amarillo del anemómetro es el que corresponde a:",
        opciones: [
            {
                textoRespuesta: "A la escala de operación normal, cuyo límite inferior corresponde a la velocidad de pérdida sin flaps y el superior a la velocidad máxima de operación de la aeronave con turbulencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la escala de precaución, cuyo límite inferior corresponde a la velocidad de pérdida sin flaps y el superior a la velocidad máxima de operación de la aeronave con turbulencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la escala de precaución, cuyo límite inferior corresponde a la velocidad de pérdida con flaps y el superior a la velocidad que nunca hay que exceder.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la escala de precaución, cuyo límite inferior corresponde a la velocidad máxima de operación de la aeronave con turbulencias y el superior a la velocidad que nunca se debe exceder.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. En un perfil alar, la línea equidistante entre el intradós y el extradós es:",
        opciones: [
            {
                textoRespuesta: "La cuerda.",
                isCorrect: false
            },
            {
                textoRespuesta: "La curvatura superior.",
                isCorrect: false
            },
            {
                textoRespuesta: "La curvatura inferior.",
                isCorrect: false
            },
            {
                textoRespuesta: "La curvatura o cuerda media.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "33. Si vamos a efectuar un despegue en un día muy caluroso es posible que tengamos que actuar sobre la mezcla de la siguiente manera:",
        opciones: [
            {
                textoRespuesta: "Enriqueciéndola, ya que la densidad del aire será menor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Empobreciéndola, ya que la densidad del aire será menor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Enriqueciéndola, ya que la densidad del aire será mayor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Empobreciéndola, ya que la densidad del aire será mayor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. El control de movimiento la aeronave se realiza:",
        opciones: [
            {
                textoRespuesta: "Con los mandos primarios, a través de los tres ejes de giro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con los mandos secundarios, a través de los tres ejes de giro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con los mandos primarios, a través de los tres ejes de giro o de dos ejes en algunas aeronaves.",
                isCorrect: true
            },
            {
                textoRespuesta: "Con los mandos primarios y secundarios, a través de los tres ejes de giro o de dos ejes en algunas aeronaves.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. Los cálculos adecuados para que las reacciones de una aeronave a las cargas recibidas no sobrepasen los parámetros establecidos están realizados:",
        opciones: [
            {
                textoRespuesta: "En condiciones normales de utilización.",
                isCorrect: true
            },
            {
                textoRespuesta: "En condiciones anormales de utilización.",
                isCorrect: false
            },
            {
                textoRespuesta: "En condiciones extremas de utilización.",
                isCorrect: false
            },
            {
                textoRespuesta: "En aquellas condiciones en las que la aeronave recibe fuertes cargas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Si durante el vuelo se obstruye la entrada del tubo pitot, ¿qué instrumentos proporcionarían una lectura errónea?",
        opciones: [
            {
                textoRespuesta: "El anemómetro, que basa su lectura en la diferencia entre la presión estática y la total.",
                isCorrect: true
            },
            {
                textoRespuesta: "El anemómetro, el altímetro y el variómetro, que basan su lectura en la diferencia entre la presión estática y la total.",
                isCorrect: false
            },
            {
                textoRespuesta: "El altímetro y el variómetro, que basan su lectura en la diferencia entre la presión estática y la total.",
                isCorrect: false
            },
            {
                textoRespuesta: "El altímetro, que basa su lectura en la diferencia entre la presión estática y la total.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. ¿De qué forma podemos realizar un movimiento de picado en nuestra aeronave?",
        opciones: [
            {
                textoRespuesta: "Moviendo el timón de profundidad hacia abajo, lo que se consigue tirando de la palanca o volante.",
                isCorrect: false
            },
            {
                textoRespuesta: "Moviendo el timón de profundidad hacia abajo, lo que se consigue empujando la palanca o volante.",
                isCorrect: true
            },
            {
                textoRespuesta: "Moviendo el timón de profundidad hacia arriba, lo que se consigue empujando la palanca.",
                isCorrect: false
            },
            {
                textoRespuesta: "Moviendo el timón de dirección hacia abajo, lo que se consigue empujando la palanca o volante.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. La función de un sistema de lubricación es:",
        opciones: [
            {
                textoRespuesta: "Proporcionar un fluido lubricante, como es el aceite, al eje de rotación de la hélice a una determinada presión y en una adecuada cantidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionar un fluido lubricante, como es el aceite, al motor a una determinada presión y en una adecuada cantidad.",
                isCorrect: true
            },
            {
                textoRespuesta: "Proporcionar un fluido lubricante, como es el propio combustible, a una determinada presión y en una adecuada cantidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener la temperatura, presión y cantidad del aceite en los valores adecuados para una correcta lubricación del motor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. El centro de presiones es:",
        opciones: [
            {
                textoRespuesta: "El punto del perfil aerodinámico en el que se considera aplicada la sustentación y que se encuentra en el 25% de la cuerda con unos márgenes de desplazamiento anterior y posterior.",
                isCorrect: true
            },
            {
                textoRespuesta: "El punto del perfil aerodinámico en el que se considera aplicada la sustentación y que se encuentra en el 25% de la cuerda sin margen de movimiento.",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto imaginario en el que se cruzan los tres ejes de giro del avión y que varía en función del peso, carga y centrado.",
                isCorrect: false
            },
            {
                textoRespuesta: "El punto del perfil aerodinámico en el que se considera aplicada la tracción y que se encuentra en el 25% de la cuerda con unos márgenes de desplazamiento anterior y posterior.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Hay algunos elementos de la aeronave que incorporan calefacción para evitar la formación de hielo. Entre ellos está el tubo pitot. ¿Cuándo hay que conectarla?",
        opciones: [
            {
                textoRespuesta: "Hay que llevarla conectada siempre.",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre que el tiempo sea frío, haya humedad en la atmósfera o la aeronave vaya a cruzar una zona de nubes.",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre que el tiempo sea frío, haya humedad en la atmósfera o la aeronave vaya a cruzar una zona de nubes además de en aterrizajes y despegues.",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay que evitar conectarla a menos que haya que retirar el hielo que ya se ha formado.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. El tren de aterrizaje consta de dos conjuntos fundamentales que son el tren principal y la rueda de morro o de cola. De éstos, el tren principal consiste en:",
        opciones: [
            {
                textoRespuesta: "Un elemento de apoyo que se sitúa sobre el eje longitudinal de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un conjunto de elementos situados a ambos lados del eje lateral de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un conjunto de elementos situados sobre el eje longitudinal de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un conjunto de elementos situados a ambos lados del eje longitudinal de la aeronave.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "42. Una hélice de paso fijo es aquella que:",
        opciones: [
            {
                textoRespuesta: "Tiene ángulos de pala fijos que establece el fabricante y que no se pueden modificar.",
                isCorrect: true
            },
            {
                textoRespuesta: "Tiene ángulos de pala fijos que el piloto establece en tierra según la maniobra que vaya a realizar pero que no pueden ser modificados en vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene ángulos de pala variables que el piloto puede modificar durante el vuelo en función de la maniobra que vaya a realizar.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambia los ángulos de pala automáticamente para que el paso o las revoluciones del motor se mantengan fijas y constantes.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. El control de la potencia de un motor se puede realizar:",
        opciones: [
            {
                textoRespuesta: "Controlando la potencia de admisión de aire a los cilindros mediante la palanca de mando de gases, que es la única forma.",
                isCorrect: false
            },
            {
                textoRespuesta: "Actuando sobre las revoluciones del motor a través del mando de paso de la hélice, que es la única forma.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tanto controlando la potencia de admisión de aire a los cilindros mediante la palanca de mando de gases como actuando sobre las revoluciones a través del mando de paso de la hélice.",
                isCorrect: true
            },
            {
                textoRespuesta: "Actuando sobre las revoluciones del motor a través de la palanca de mando de gases, que es la única forma.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. El empenaje de una aeronave es:",
        opciones: [
            {
                textoRespuesta: "La parte que configura la cola de la aeronave y que comprende el estabilizador vertical.",
                isCorrect: false
            },
            {
                textoRespuesta: "La parte que configura la cola de la aeronave y que comprende el estabilizador vertical y horizontal.",
                isCorrect: true
            },
            {
                textoRespuesta: "La parte que configura el fuselaje de la aeronave y que comprende las alas y los estabilizadores vertical y horizontal de cola.",
                isCorrect: false
            },
            {
                textoRespuesta: "La parte que configura la cola de la aeronave, sin tener en cuenta los estabilizadores vertical y horizontal.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. ¿De qué forma controlamos las rpm del motor de una aeronave con hélice de paso fijo?",
        opciones: [
            {
                textoRespuesta: "Con la palanca o volante, que controla la mezcla de aire y combustible que va al motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con el tacómetro de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con la palanca de mando de gases, que controla la mezcla de aire y combustible que va al motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Con el pedal de gases, que controla la mezcla de aire y combustible que va al motor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. Además de estar afectada por el magnetismo terrestre, la brújula también lo está por:",
        opciones: [
            {
                textoRespuesta: "Otros campos magnéticos que se originen en sus proximidades, lo que provoca el error de declinación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Otros campos magnéticos que se originen en sus proximidades, lo que provoca el error de variación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Otros campos magnéticos que se originen en sus proximidades, lo que provoca el error de desviación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Otros campos magnéticos que se originen en sus proximidades, lo que provoca un error de la brújula cuando iniciamos un viraje.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. La definición de velocidad verdadera (TAS) es:",
        opciones: [
            {
                textoRespuesta: "La velocidad que se lee en el anemómetro de la aeronave, sin corrección de los errores del sistema indicador.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad que se lee en el anemómetro, que es la velocidad de la aeronave con relación al aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de la aeronave con relación al suelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de la aeronave con relación al aire.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "48. Aerodinámicamente, el empuje o tracción que produce la hélice es el resultado de:",
        opciones: [
            {
                textoRespuesta: "La forma de la hélice y el ángulo de ataque de la pala.",
                isCorrect: true
            },
            {
                textoRespuesta: "El ángulo de ataque de la pala y la velocidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "La forma de la hélice y la velocidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "La forma de la hélice y las revoluciones del motor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Entre las partes que componen el ala de una aeronave está la cuerda, que es:",
        opciones: [
            {
                textoRespuesta: "La línea equidistante entre el intradós y el extradós que recorre el perfil del ala.",
                isCorrect: false
            },
            {
                textoRespuesta: "La curvatura específica de las superficies superior e inferior del ala.",
                isCorrect: false
            },
            {
                textoRespuesta: "La línea recta imaginaria trazada entre los bordes de ataque y de salida.",
                isCorrect: true
            },
            {
                textoRespuesta: "La línea curva imaginaria trazada entre los bordes de ataque y de salida.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. En cuanto a la variación o declinación magnética podemos decir:",
        opciones: [
            {
                textoRespuesta: "Que no es la misma en todos los puntos de la Tierra, aunque sigue una pauta determinada.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que es la misma en todos los puntos de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que no es la misma en todos los puntos de la Tierra ni sigue una pauta determinada.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que es la misma en todos los puntos de la Tierra, aunque va cambiando con el tiempo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. El perfil alar corresponde a:",
        opciones: [
            {
                textoRespuesta: "La sección transversal del ala, que suele disminuir progresivamente hacia su extremo.",
                isCorrect: true
            },
            {
                textoRespuesta: "La sección transversal del ala, que suele aumentar progresivamente hacia su extremo.",
                isCorrect: false
            },
            {
                textoRespuesta: "La sección paralela al borde de ataque del ala, que suele disminuir progresivamente hacia su extremo.",
                isCorrect: false
            },
            {
                textoRespuesta: "La sección paralela al borde de ataque del ala, que suele aumentar progresivamente hacia su extremo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Para su funcionamiento el variómetro o indicador de velocidad vertical utiliza:",
        opciones: [
            {
                textoRespuesta: "La toma estática para medir la densidad que hay en el aire que rodea a la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "La toma estática y el tubo pitot, para medir la diferencia de presiones estática y dinámica.",
                isCorrect: false
            },
            {
                textoRespuesta: "La toma estática para medir la presión que hay en el aire que rodea a la aeronave.",
                isCorrect: true
            },
            {
                textoRespuesta: "El tubo pitot para medir la presión dinámica.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. La velocidad Vs o Vs1 del anemómetro indica:",
        opciones: [
            {
                textoRespuesta: "La velocidad mínima de operación en configuración de aterrizaje.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de pérdida en configuración limpia.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad máxima con el flaps extendido.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad mínima a la que una aeronave es controlable en configuración de aterrizaje.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. ¿Qué función cumple la bujía en el sistema de encendido de un motor de combustión interna de cuatro tiempos?",
        opciones: [
            {
                textoRespuesta: "Recibe la corriente eléctrica que será la que produzca la chispa que inicia la combustión de la mezcla en el cilindro.",
                isCorrect: true
            },
            {
                textoRespuesta: "Recibe la corriente eléctrica que será la que produzca la chispa que inicia la combustión de la mezcla en el carburador.",
                isCorrect: false
            },
            {
                textoRespuesta: "Genera la corriente eléctrica que será la que produzca la chispa que inicia la combustión de la mezcla en el cilindro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Genera la corriente eléctrica que será la que produzca la chispa que inicia la combustión de la mezcla en el carburador.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. El sistema de encendido de los motores de combustión interna de cuatro tiempos utilizados en aviación es:",
        opciones: [
            {
                textoRespuesta: "El sistema de encendido por bujías, que no depende para su funcionamiento del sistema eléctrico general del avión.",
                isCorrect: false
            },
            {
                textoRespuesta: "El sistema de encendido por magnetos, que depende para su funcionamiento del sistema eléctrico general del avión.",
                isCorrect: false
            },
            {
                textoRespuesta: "El sistema de encendido por magnetos, que no depende para su funcionamiento del sistema eléctrico general del avión.",
                isCorrect: true
            },
            {
                textoRespuesta: "El sistema de encendido por bujías,  que depende para su funcionamiento del sistema eléctrico general del avión.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. El factor más importante para evitar la detonación es:",
        opciones: [
            {
                textoRespuesta: "Impedir que la mezcla alcance en el carburador temperaturas muy elevadas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Impedir que la mezcla alcance en el cilindro temperaturas muy bajas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Controlar que la mezcla alcance en el cilindro temperaturas muy elevadas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Impedir que la mezcla alcance en el cilindro temperaturas muy elevadas.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "57. Si estamos en vuelo y la presión desciende, el altímetro marcará:",
        opciones: [
            {
                textoRespuesta: "Lo mismo, aunque en este caso descenderemos, y ascenderemos si la presión aumenta.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una disminución de la altitud, y un incremento si la presión aumenta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un incremento o disminución de la altitud, dependiendo de la presión que hayamos calado en la ventanilla de Kollsman.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que volamos más bajo de lo que realmente vamos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. En ciertas aeronaves el sistema hidráulico es fundamental. Por eso es importante saber que:",
        opciones: [
            {
                textoRespuesta: "Utiliza el teorema de Bernouilli y se usa para mover sistemas que requieren mucha fuerza durante periodos relativamente grandes de tiempo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Utiliza el principio de Pascal y se usa para mover sistemas que requieren mucha fuerza aunque solo es eficaz durante cortos periodos de tiempo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Utiliza el principio de Pascal y se usa para mover sistemas que requieren mucha fuerza durante periodos relativamente grandes de tiempo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Utiliza el efecto Venturi y se usa para mover sistemas que requieren mucha fuerza durante periodos relativamente grandes de tiempo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. Con hélice de paso fijo, para una posición fija del mando de gases, cualquier incremento de la velocidad de la aeronave:",
        opciones: [
            {
                textoRespuesta: "Equivale a una disminución del número de revoluciones del motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Equivale a un aumento del ángulo de paso de la hélice.",
                isCorrect: false
            },
            {
                textoRespuesta: "Equivale a un aumento del número de revoluciones del motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Equivale a una disminución del ángulo de paso de la hélice.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. Las dos velocidades que delimitan el arco verde del anemómetro son:",
        opciones: [
            {
                textoRespuesta: "Vfe y Vno.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vs1 y Vno.",
                isCorrect: true
            },
            {
                textoRespuesta: "Vs0 y Vfe.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vno y Vne.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. Los flaps son superficies hipersustentadoras que pueden incrementar la sustentación del ala:",
        opciones: [
            {
                textoRespuesta: "Disminuyendo la superficie aerodinámica o cambiando la forma de esta superficie.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentando la superficie aerodinámica o cambiando la forma de esta superficie.",
                isCorrect: true
            },
            {
                textoRespuesta: "Cambiando la forma de la superficie aerodinámica y disminuyendo así el ángulo de ataque.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentando la superficie aerodinámica y disminuyendo así el ángulo de ataque.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Cuando el norte geográfico se encuentra a la izquierda del norte magnético tenemos:",
        opciones: [
            {
                textoRespuesta: "Desviación Este.",
                isCorrect: false
            },
            {
                textoRespuesta: "Declinación Este.",
                isCorrect: true
            },
            {
                textoRespuesta: "Declinación Oeste.",
                isCorrect: false
            },
            {
                textoRespuesta: "Variación Oeste.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Con una hélice de paso variable:",
        opciones: [
            {
                textoRespuesta: "A mayor potencia demandad del motor, menor número de revoluciones y viceversa.",
                isCorrect: false
            },
            {
                textoRespuesta: "A mayor potencia demandada del motor, mayor número de revoluciones y viceversa.",
                isCorrect: false
            },
            {
                textoRespuesta: "A mayor potencia demandada del motor, mayor paso y viceversa.",
                isCorrect: true
            },
            {
                textoRespuesta: "A mayor potencia demandada del motor, menor paso y viceversa.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. El principal inconveniente de una hélice de paso fijo es:",
        opciones: [
            {
                textoRespuesta: "Que solo alcanza el mejor rendimiento en despegues y ascensos, pero no el vuelo de crucero.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que por su configuración aumenta el peso de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que solo alcanza el mejor rendimiento en vuelo de crucero pero no es demasiado eficaz en despegues y ascensos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que solo alcanza el mejor rendimiento en una determinada combinación de velocidad y revoluciones.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "65. Con la chispa de una bujía, la llama que se produce en el cilindro de un motor se propaga rápida y progresivamente por toda la cámara de combustión. Sin embargo, hay ocasiones en las que la este proceso se genera de forma instantánea, sin esa progresividad. Cuando esto ocurre estamos ante:",
        opciones: [
            {
                textoRespuesta: "La preignición.",
                isCorrect: false
            },
            {
                textoRespuesta: "La explosión.",
                isCorrect: false
            },
            {
                textoRespuesta: "La detonación.",
                isCorrect: true
            },
            {
                textoRespuesta: "La combustión.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. El sistema de encendido de la aeronave es un sistema completo en sí mismo y su función es:",
        opciones: [
            {
                textoRespuesta: "Proporcionar la chispa necesaria a la bujía, situada en el cilindro, para quemar la mezcla de aire y combustible y originar la fase de explosión en el motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Proporcionar la chispa necesaria a la bujía, situada en el carburador, para quemar la mezcla de aire y combustible y originar la fase de explosión en el motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionar la chispa necesaria a la magneto para quemar la mezcla de aire y combustible y originar la fase de explosión en el motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Proporcionar la chispa necesaria a la bujía, que a su vez transmitirá energía a la magneto para quemar la mezcla de aire y combustible y originar la fase de explosión en el motor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. Cuando el tren de aterrizaje de una aeronave tiene una rueda en la parte delantera, se denomina:",
        opciones: [
            {
                textoRespuesta: "Tren triciclo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Tren convencional.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tren delantero.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tren de rueda delantera.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. La misión fundamental de los controles secundarios de vuelo es:",
        opciones: [
            {
                textoRespuesta: "Aumentar la sustentación que se produce en las alas.",
                isCorrect: true
            },
            {
                textoRespuesta: "Minimizar los esfuerzos necesarios para actuar los controles de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuir la sustentación que se produce en las alas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Minimizar los esfuerzos necesarios para actuar en las superficies sustentadoras.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. El altímetro es:",
        opciones: [
            {
                textoRespuesta: "Un instrumento que proporciona la altura de una aeronave sobre el nivel del mar.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un instrumento que proporciona la velocidad de ascensos y descensos de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un instrumento que proporciona la altura de la aeronave midiendo la temperatura exterior.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un instrumento que proporciona la altura de una aeronave sobre un nivel determinado.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "70. En el anemómetro podemos leer la velocidad indicada o IAS. ¿Cuándo coincidirá ésta con la velocidad verdadera o TAS?",
        opciones: [
            {
                textoRespuesta: "Un día en el que la atmósfera sea estándar, a cualquier altitud a la que estemos volando.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día con atmósfera estándar volando a nivel del mar.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad indicada y la verdadera nunca podrían ser iguales, ya que la primera no está corregida por el error de densidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día en el que estemos volando con viento en calma.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. El plano imaginario, perpendicular al eje longitudinal de la aeronave que representa el punto de partida de todas las mediciones de peso y centrado es:",
        opciones: [
            {
                textoRespuesta: "El morro de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "El fulcrum.",
                isCorrect: false
            },
            {
                textoRespuesta: "El datum.",
                isCorrect: true
            },
            {
                textoRespuesta: "La punta delantera de la hélice.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. Si movemos el timón de profundidad de nuestra aeronave provocamos un movimiento de ésta. ¿En qué eje se da ese movimiento y cómo se llama?",
        opciones: [
            {
                textoRespuesta: "Se da un giro en el eje longitudinal que se denomina alabeo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se da un giro en el eje longitudinal que se denomina cabeceo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se da un giro en el eje vertical que se denomina cabeceo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se da un giro en el eje lateral que se denomina cabeceo.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "73. Indique la correcta. El estabilizador horizontal:",
        opciones: [
            {
                textoRespuesta: "Se encuentra en la parte delantera del fuselaje y tiene en su parte posterior una superficie móvil denominada timón de dirección.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se encuentra en el empenaje y tiene alojada en su parte anterior una superficie móvil denominada timón de profundidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se encuentra en el empenaje y tiene alojada en su parte posterior una superficie móvil denominada timón de profundidad.",
                isCorrect: true
            },
            {
                textoRespuesta: "Se encuentra en la parte delantera del fuselaje y tiene en su parte anterior una superficie móvil denominada timón de dirección.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. Si un grupo motor cuenta con hélice de paso variable:",
        opciones: [
            {
                textoRespuesta: "La hélice mantiene fijo su ángulo de paso independientemente del número de revoluciones del motor seleccionado por el piloto.",
                isCorrect: false
            },
            {
                textoRespuesta: "El mando de gases controla tanto la admisión como el número de revoluciones del motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "El número de revoluciones del motor se modifica de tal forma que se mantenga fijo el ángulo de paso de la hélice seleccionado por el piloto.",
                isCorrect: false
            },
            {
                textoRespuesta: "La hélice modifica su ángulo de paso de tal forma que se mantenga fijo el número de revoluciones del motor seleccionado por el piloto.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "75. En un motor atmosférico de cuatro tiempos, la preignición es:",
        opciones: [
            {
                textoRespuesta: "Una pérdida de potencia del motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una explosión a destiempo de la mezcla de aire y combustible en el cilindro.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una explosión a destiempo de la mezcla de aire y combustible en el carburador.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una propagación instantánea de la llama que se produce al prender la mezcla de aire y combustible, perdiendo así su progresividad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. La velocidad indicada o IAS corregida por el error de densidad es:",
        opciones: [
            {
                textoRespuesta: "La velocidad calibrada o CAS.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad sobre el suelo o GS.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad equivalente o EAS.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad verdadera o TAS.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "77. ¿Qué es una magneto y qué función tiene?",
        opciones: [
            {
                textoRespuesta: "Es el elemento que recibe la corriente eléctrica de la bujía que se encuentra en el carburador del motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el elemento que genera corriente eléctrica y la proporciona a una bujía que se encuentra en el carburador del motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el elemento que recibe la corriente eléctrica de la bujía que se encuentra en el cilindro del motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el elemento que genera corriente eléctrica y la proporciona a una bujía que se encuentra en el cilindro del motor.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "78. La hélice de una aeronave:",
        opciones: [
            {
                textoRespuesta: "Está formada por un conjunto finito de perfiles aerodinámicos y convierte la fuerza de rotación del motor en empuje.",
                isCorrect: false
            },
            {
                textoRespuesta: "Está formada por un conjunto infinito de perfiles aerodinámicos y convierte la fuerza de rotación del motor en empuje.",
                isCorrect: true
            },
            {
                textoRespuesta: "Está formada por un conjunto infinito de palas y convierte la fuerza de rotación del motor en empuje.",
                isCorrect: false
            },
            {
                textoRespuesta: "Está formada por un conjunto infinito de perfiles aerodinámicos y convierte la fuerza de tracción en empuje.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. Entre las marcas del anemómetro, ¿qué significa Vno?",
        opciones: [
            {
                textoRespuesta: "Velocidad mínima de operación normal.",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad que nunca se debe exceder.",
                isCorrect: false
            },
            {
                textoRespuesta: "Marca tanto la mínima con la máxima de operación normal.",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad máxima de operación normal.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "80. Entre las partes del ala de una aeronave, el borde de salida corresponde a:",
        opciones: [
            {
                textoRespuesta: "La parte posterior en la que se unen los caudales de aire de las superficies aerodinámicas superior e inferior.",
                isCorrect: true
            },
            {
                textoRespuesta: "La parte delantera o la que primero entra en contacto con la corriente de aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "La parte posterior en la que se separan los caudales de aire de las superficies aerodinámicas superior e inferior.",
                isCorrect: false
            },
            {
                textoRespuesta: "La parte delantera en la que se unen los caudales de aire de las superficies aerodinámicas superior e inferior.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. En el anemómetro de la aeronave podemos ver ciertas limitaciones de velocidad indicada. Entre ellas, ¿a qué corresponde Vfe?",
        opciones: [
            {
                textoRespuesta: "A la velocidad máxima con el flaps extendido.",
                isCorrect: true
            },
            {
                textoRespuesta: "A la velocidad máxima de operación con el tren de aterrizaje fuera.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la velocidad mínima con el flaps extendido.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la velocidad que nunca se debe exceder.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. La parte del ala en la que se unen los caudales de aire del intradós y el extradós es:",
        opciones: [
            {
                textoRespuesta: "Borde de ataque.",
                isCorrect: false
            },
            {
                textoRespuesta: "Borde de salida.",
                isCorrect: true
            },
            {
                textoRespuesta: "Curvatura.",
                isCorrect: false
            },
            {
                textoRespuesta: "Perfil.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Indique cuál de las siguientes afirmaciones sobre la detonación es correcta:",
        opciones: [
            {
                textoRespuesta: "Es más fácil que se produzca con una alta presión de admisión de aire en los cilindros.",
                isCorrect: true
            },
            {
                textoRespuesta: "Es más fácil que se produzca con una baja temperatura del aire exterior.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es más fácil que se produzca con una baja presión de admisión de aire en los cilindros.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es más fácil que se produzca con una baja relación de compresión de la mezcla de aire y combustible.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. El coeficiente de planeo es:",
        opciones: [
            {
                textoRespuesta: "La relación entre la distancia vertical recorrida en línea recta y la distancia horizontal recorrida en el mismo tiempo.",
                isCorrect: false
            },
            {
                textoRespuesta: "El perfil de descenso determinado para guía vertical durante una aproximación final.",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la distancia horizontal recorrida en línea recta y la altura perdida en el mismo tiempo.",
                isCorrect: true
            },
            {
                textoRespuesta: "dEl perfil de descenso determinado para guía horizontal durante una aproximación final.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. La brújula nos indica el rumbo magnético, que no coincide con el geográfico. A esta diferencia que se da entre el norte magnético y el geográfico la llamamos:",
        opciones: [
            {
                textoRespuesta: "Desviación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Error de inclinación o “dip”.",
                isCorrect: false
            },
            {
                textoRespuesta: "Variación o desviación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Variación o declinación.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "86. ¿Cómo realizamos el movimiento de los mandos primarios de la aeronave?",
        opciones: [
            {
                textoRespuesta: "El timón de dirección y de profundidad se mueve mediante una palanca o volante, mientras que los alerones lo hacen mediante el uso de los pedales.",
                isCorrect: false
            },
            {
                textoRespuesta: "El timón de profundidad y los alerones se mueven mediante una palanca o volante, mientras que el timón de dirección lo hace mediante el uso de los pedales.",
                isCorrect: true
            },
            {
                textoRespuesta: "El timón de profundidad se mueve mediante una palanca o volante, mientras que el timón de dirección y los alerones lo hacen mediante el uso de los pedales.",
                isCorrect: false
            },
            {
                textoRespuesta: "El timón de dirección y los alerones se mueven mediante una palanca o volante, mientras que el timón de profundidad lo hace mediante el uso de los pedales.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. Si durante el vuelo se obstruye la toma estática de la aeronave, ¿cuál será el instrumento que dejará de aportar información fiable?",
        opciones: [
            {
                textoRespuesta: "El anemómetro, que es el instrumento que utiliza la presión estática para su funcionamiento.",
                isCorrect: false
            },
            {
                textoRespuesta: "El anemómetro, el altímetro y el variómetro, que son los tres instrumentos que utilizan la presión dinámica.",
                isCorrect: false
            },
            {
                textoRespuesta: "El anemómetro, el altímetro y el variómetro, que son los tres instrumentos que utilizan la presión estática.",
                isCorrect: true
            },
            {
                textoRespuesta: "El altímetro y el variómetro, que son los dos instrumentos que utilizan la presión estática para su funcionamiento.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. El viento relativo corresponde a:",
        opciones: [
            {
                textoRespuesta: "La dirección de la corriente del aire con respecto al ángulo de ataque. Es paralelo y opuesto a la trayectoria de éste.",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección de la corriente del aire con respecto al ala. Es paralelo y tiene la misma trayectoria que ésta.",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección de la corriente de aire con respecto al ala. Es perpendicular y opuesto a la trayectoria de ésta.",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección de la corriente de aire con respecto al ala. Es paralelo y opuesto a la trayectoria de ésta.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "89. ¿Qué nos proporciona el altímetro?",
        opciones: [
            {
                textoRespuesta: "La altura de la aeronave sobre el suelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud de la aeronave sobre el nivel del mar.",
                isCorrect: false
            },
            {
                textoRespuesta: "La altura de la aeronave sobre un punto, dependiendo de la presión a la que lo calemos.",
                isCorrect: true
            },
            {
                textoRespuesta: "La altura de la aeronave sobre un punto, dependiendo de la densidad a la que lo calemos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. ¿En qué basa el altímetro su funcionamiento?",
        opciones: [
            {
                textoRespuesta: "En la variación presión debida a la altura, que mide a través del tubo pitot.",
                isCorrect: false
            },
            {
                textoRespuesta: "En la variación de densidad debida a la altura, que mide a través de las tomas estáticas.",
                isCorrect: false
            },
            {
                textoRespuesta: "En la variación de presión debida a la altura, que mide a través de las tomas estáticas.",
                isCorrect: true
            },
            {
                textoRespuesta: "En el aumento de presión debida a la altura, que mide a través de las tomas estáticas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. El control de mezcla es el dispositivo que regula la proporción de aire y combustible que inyectamos en la cámara de combustión del cilindro. En este sentido, ¿cómo deberíamos proceder en un ascenso?",
        opciones: [
            {
                textoRespuesta: "Debemos ir enriqueciendo la mezcla paulatinamente.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos mantener una proporción de mezcla rica durante todo el ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos ir empobreciendo la mezcla paulatinamente.",
                isCorrect: true
            },
            {
                textoRespuesta: "En ascensos no debemos aplicar ningún cambio a la relación de mezcla hasta que lleguemos al nivel de crucero.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. ¿A qué llamamos ángulo de ataque?",
        opciones: [
            {
                textoRespuesta: "Al ángulo formado por la curvatura inferior del ala y la dirección del viento relativo, que es la dirección de la corriente de aire con respecto al ala.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al ángulo formado por la cuerda del ala y la dirección del viento relativo, que es la dirección de la corriente de aire en la atmósfera.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al ángulo formado por la cuerda del ala y la dirección del viento relativo, que es la dirección de la corriente de aire con respecto al ala.",
                isCorrect: true
            },
            {
                textoRespuesta: "Al ángulo formado por la cuerda del ala y la dirección del viento relativo, que es la trayectoria del viento predominante en cada momento.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. Una hélice de paso fijo colocada con paso corto:",
        opciones: [
            {
                textoRespuesta: "Será muy eficaz en vuelo de crucero, con una adecuada velocidad y bajo consumo, pero le costará obtener la potencia suficiente en despegues.",
                isCorrect: false
            },
            {
                textoRespuesta: "Será muy eficaz tanto en despegues como en vuelo de crucero, con adecuada velocidad y bajo consumo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Será muy eficaz en despegues pero en vuelo de crucero, aunque garantice un bajo consumo, la velocidad será excesivamente lenta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Será muy eficaz en despegues pero en vuelo de crucero la velocidad será excesivamente lenta y el consumo, elevado.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "94. El principio de funcionamiento de una hélice en un ULM de ala fija es:",
        opciones: [
            {
                textoRespuesta: "Muy similar al que genera la sustentación en un ala, produciendo así tracción.",
                isCorrect: true
            },
            {
                textoRespuesta: "Muy similar al que genera tracción en un ala, produciendo así sustentación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Muy similar al que genera sustentación en un ala, produciendo así el vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "El principio de funcionamiento variará en función del paso de la hélice.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. La velocidad sobre el suelo (GS) se define como:",
        opciones: [
            {
                textoRespuesta: "La velocidad de desplazamiento de la aeronave sobre el suelo, resultante de la velocidad verdadera.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de desplazamiento de la aeronave sobre el suelo, resultante de la velocidad verdadera y de la velocidad del viento.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad que se lee en el anemómetro de la aeronave, resultante de la velocidad verdadera y de la velocidad del viento.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de desplazamiento de la aeronave sobre el suelo, resultante de la velocidad indicada y de la velocidad del viento.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. El ángulo de ataque corresponde:",
        opciones: [
            {
                textoRespuesta: "Al ángulo formado entre la curvatura superior y la dirección del viento relativo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al ángulo formado entre la cuerda media del perfil y la dirección del viento relativo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al ángulo formado entre la cuerda del perfil y la dirección del viento relativo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Al ángulo formado entre la curvatura inferior y la dirección del viento relativo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Cuando una hélice es de paso fijo, ¿qué tipo de paso suele usarse más comúnmente?",
        opciones: [
            {
                textoRespuesta: "Un paso corto, pues es preferible obtener mayor eficacia durante el despegue, que necesita mucha potencia, que en vuelo de crucero.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un paso largo, pues aunque necesitaremos más pista para despegar, es preferible que el consumo durante vuelo de crucero no sea demasiado elevado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un paso que proporcione un compromiso intermedio de eficacia en las diferentes situaciones.",
                isCorrect: true
            },
            {
                textoRespuesta: "No hay ningún paso que se utilice de forma más común, pues siempre dependerá del tipo de maniobras para la que esté diseñada la aeronave.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Cuando actuamos la palanca de mando hacia adelante decimos que estamos picando, y conseguimos:",
        opciones: [
            {
                textoRespuesta: "Que el timón de profundidad se desplace hacia abajo y la aeronave tienda a realizar un movimiento también hacia abajo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que el timón de profundidad se desplace hacia arriba y la aeronave tienda a realizar un movimiento hacia abajo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el timón de profundidad se desplace hacia abajo y la aeronave tienda a realizar un movimiento hacia arriba.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el timón de profundidad se desplace hacia arriba y la aeronave tienda a realizar un movimiento también hacia arriba.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. En un grupo motor con hélice de paso fijo:",
        opciones: [
            {
                textoRespuesta: "El mando de gases controla tanto la presión de admisión como el número de revoluciones del motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "El mando de gases controla  tanto la presión de admisión como el paso de la hélice.",
                isCorrect: false
            },
            {
                textoRespuesta: "El mando de gases controla tanto las revoluciones del motor como el paso de la hélice.",
                isCorrect: false
            },
            {
                textoRespuesta: "El mando de gases solamente puede controlar el número de revoluciones del motor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. El anemómetro es un instrumento que nos da la velocidad indicada calculando:",
        opciones: [
            {
                textoRespuesta: "La diferencia de presión que hay entre la presión total, que mide a través del tubo pitot, y la presión estática, que mide de las tomas estáticas.",
                isCorrect: true
            },
            {
                textoRespuesta: "La diferencia de presión que hay entre la presión estática, que pide en el tubo pitot, y la presión dinámica.",
                isCorrect: false
            },
            {
                textoRespuesta: "La diferencia que hay entre la presión estática y la presión dinámica, que se mide a través del tubo pitot.",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión dinámica, que se mide a través del tubo pitot.",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;