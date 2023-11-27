const preguntas = [
    {
        titulo: "1. Tenemos que empezar a mirar fuera con atención, cuando vayamos a despegar, y a partir de ahí, en todo el vuelo",
        opciones: [
            {
                textoRespuesta: "Si estamos volando en IFR no hace falta mirar fuera",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. Desde antes de arrancar el avión y hasta que no lo paremos debemos mirar fuera",
                isCorrect: true
            },
            {
                textoRespuesta: "Verdadero",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. Basta mirar cuando estamos en circuito",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. Antes del despegue, el piloto deberá asegurarse de que la temperatura de aceite está dentro de sus valores normales. De no hacerlo así:",
        opciones: [
            {
                textoRespuesta: "El motor no dará la potencia de subida",
                isCorrect: false
            },
            {
                textoRespuesta: "El motor podrá pararse en el despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "No pasará nada",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la presión del combustible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. Cuando una aeronave en vuelo recibe una señal de luz a 'destellos rojos', significa:",
        opciones: [
            {
                textoRespuesta: "Autorizado a aterrizar con precaución, peligro indefinido en el campo",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay otras aeronaves en vuelo, mantenga separación de ellas",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeródromo peligroso, no aterrice",
                isCorrect: true
            },
            {
                textoRespuesta: "Permanezca en circuito de tráfico hasta nuevo aviso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. Cuando una aeronave está rodando antes del despegue, si recibe una señal de luz a 'destellos blancos', significa:",
        opciones: [
            {
                textoRespuesta: "Autorizado a despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "Regrese al punto de partida en el aeródromo",
                isCorrect: true
            },
            {
                textoRespuesta: "Autorizado a rodar",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a despegar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. En un alabeo hacia la derecha:",
        opciones: [
            {
                textoRespuesta: "a) El alerón izquierdo bajará y el derecho subirá",
                isCorrect: true
            },
            {
                textoRespuesta: "b) El alerón derecho bajará y el izquierdo subirá",
                isCorrect: false
            },
            {
                textoRespuesta: "c) El timón girará a la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"c\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. La velocidad normal de ascenso, está prevista para:",
        opciones: [
            {
                textoRespuesta: "Sobrevolar todos los obstáculos",
                isCorrect: false
            },
            {
                textoRespuesta: "Ascenso en el mismo tiempo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ascenso en la mínima distancia horizontal",
                isCorrect: false
            },
            {
                textoRespuesta: "Ser mantenida durante largos periodos de tiempo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "7. Donde puedo ver la velocidad de maniobra de mi avión",
        opciones: [
            {
                textoRespuesta: "En el manual del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "En el manual de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "En el certificado de matrícula",
                isCorrect: false
            },
            {
                textoRespuesta: "En el CDA",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Cuando notemos el efecto de una térmica y queramos ganar altura con ella, debemos:",
        opciones: [
            {
                textoRespuesta: "Virar en sentido contrario a ella",
                isCorrect: true
            },
            {
                textoRespuesta: "Hacer un viraje a la izquierda y otro a la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "Esperar a que el variómetro se pare en la subida",
                isCorrect: false
            },
            {
                textoRespuesta: "Virar cuando el variómetro marque descendencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. En caso de \"overshoot\", sin tiempo y distancia a la pista para corregir, el piloto deberá",
        opciones: [
            {
                textoRespuesta: "Hacer motor y al aire",
                isCorrect: true
            },
            {
                textoRespuesta: "Aterrizar sin flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuir el viraje",
                isCorrect: false
            },
            {
                textoRespuesta: "Incrementar el viraje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Un piloto se pierde. Le quedan 10 minutos para el ocaso. Decide aterrizar en un prado que le ofrece aterrizar con seguridad.",
        opciones: [
            {
                textoRespuesta: "Tiene que buscar un aeródromo a toda costa",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene que solicitar cambio a visual nocturno",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene que esperar a que se le acabe el combustible, y declarar emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una buena decisión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "11. Delante de nuestra trayectoria de vuelo observamos una bandada muy grande de pájaros. Si la situación lo permite, es conveniente reducir la potencia del motor a ralentí",
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
        titulo: "12. La barrena se provoca:",
        opciones: [
            {
                textoRespuesta: "Tras aguantar la pérdida y mantener una guiñada",
                isCorrect: true
            },
            {
                textoRespuesta: "Por un descenso en espiral",
                isCorrect: false
            },
            {
                textoRespuesta: "Haciendo una pérdida exagerada",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las tres",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. Navegando con un ULM desde un punto de referencia hasta otro, vemos que nos estamos desplazando a la derecha, señal de que hay viento cruzado de la izquierda. Lo correcto será:",
        opciones: [
            {
                textoRespuesta: "Poner un rumbo menor en la brújula",
                isCorrect: true
            },
            {
                textoRespuesta: "Poner un rumbo mayor en la brújula",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantenerse igual",
                isCorrect: false
            },
            {
                textoRespuesta: "Apuntar permanentemente con el morro a la referencia buscada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. Que reglaje pondremos en el altímetro por encima de la altitud de transición, si hemos despegado con un QNH de 1019",
        opciones: [
            {
                textoRespuesta: "Tendremos que preguntar el QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "1019",
                isCorrect: false
            },
            {
                textoRespuesta: "1013",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. Se nos para el motor. Ya tenemos el avión controlado y altura que consideramos segura para intentar el rearranque. Contesta que pasos de los siguientes son ciertos, antes de intentar arrancar el motor",
        opciones: [
            {
                textoRespuesta: "Comprobar todos los encendidos en ON",
                isCorrect: false
            },
            {
                textoRespuesta: "Si tenemos bomba eléctrica, conectarla",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobar todas las llaves de gasolina abiertas",
                isCorrect: false
            },
            {
                textoRespuesta: "Todos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "16. En caso de una parada del motor del avión, elegiremos con preferencia el campo:",
        opciones: [
            {
                textoRespuesta: "Más cercano a nuestra derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "El más duro y llano a la proa del ULM",
                isCorrect: true
            },
            {
                textoRespuesta: "Que presente la hierba más alta y mullida",
                isCorrect: false
            },
            {
                textoRespuesta: "El más cercano a nuestra izquierda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. ¿Cómo se efectúan los giros en tierra con un ULM?",
        opciones: [
            {
                textoRespuesta: "Palanca atrás, timón de dirección hacia un lado y algo de motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Palanca adelante y gases a fondo",
                isCorrect: false
            },
            {
                textoRespuesta: "Moviendo la palanca de un lado a otro",
                isCorrect: false
            },
            {
                textoRespuesta: "Impulsando aire detrás del ULM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Según las reglas generales, toda aeronave evitará pasar con respecto a otra aeronave:",
        opciones: [
            {
                textoRespuesta: "Por encima, delante y debajo",
                isCorrect: false
            },
            {
                textoRespuesta: "Por detrás y debajo",
                isCorrect: false
            },
            {
                textoRespuesta: "No volarán ambas aeronaves en formación más que cuando se convenga previamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Las respuestas primera y tercera son ciertas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "19. Si usted sufre una parada de motor nada más despegar, deberá",
        opciones: [
            {
                textoRespuesta: "Efectuar un viraje de 180° y aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Tirar de la palanca para disminuir la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobar que el sistema de combustible está conectado",
                isCorrect: false
            },
            {
                textoRespuesta: "Conseguir un planeo a velocidad de máximo rendimiento y aterrizar por derecho",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "20. El arco blanco del anemómetro indica el margen de velocidad",
        opciones: [
            {
                textoRespuesta: "Máxima de control",
                isCorrect: false
            },
            {
                textoRespuesta: "Normal de operación con el flap extendido",
                isCorrect: true
            },
            {
                textoRespuesta: "De precaución",
                isCorrect: false
            },
            {
                textoRespuesta: "Máxima operativa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. El adelantamiento de aeronaves ULM en la misma trayectoria y dirección del aire debe realizarse:",
        opciones: [
            {
                textoRespuesta: "Por la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Por la derecha",
                isCorrect: true
            },
            {
                textoRespuesta: "Por encima",
                isCorrect: false
            },
            {
                textoRespuesta: "Por debajo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. Si se desea terminar un viraje orientado a rumbo 360° y el avión estaba virando por la derecha, se deberá sacar cuando la brújula indique:",
        opciones: [
            {
                textoRespuesta: "360º",
                isCorrect: false
            },
            {
                textoRespuesta: "330º",
                isCorrect: true
            },
            {
                textoRespuesta: "270º",
                isCorrect: false
            },
            {
                textoRespuesta: "180º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. En un viraje a la izquierda, si la indicación de la bola es totalmente desplazadas la derecha, ¿Qué nos indica?",
        opciones: [
            {
                textoRespuesta: "Que el ULM resbala haga el interior del viraje",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el ULM resbala hacia el exterior del viraje",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el ULM derrapa hacia el interior del viraje",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el ULM derrapa hacia el exterior del viraje",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "24. Para aparcar un ULM en el suelo con viento, debemos:",
        opciones: [
            {
                textoRespuesta: "Situarlo con el viento de cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Situarlo con el viento de lado",
                isCorrect: false
            },
            {
                textoRespuesta: "Situarlo cerca de un muro o árbol",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproarlo al viento",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "25. La decisión de la pista por la cual podemos operar",
        opciones: [
            {
                textoRespuesta: "La toma el Jefe de Vuelo del campo, pero siempre es responsabilidad del piloto como comandante de aeronave asegurarse de las condiciones en el momento del despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "En caso de existir dos pilotos abordo la toma el de mayor edad",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene que discutirse entre el piloto y Jefe de Vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "La toma solamente el Jefe de Vuelos y por tanto es solamente su propia responsabilidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. Cuando se nota que el motor está detonando durante el ascenso después del despegue, la primera acción será",
        opciones: [
            {
                textoRespuesta: "Poner la bomba de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Ajustar la mezcla",
                isCorrect: false
            },
            {
                textoRespuesta: "Aplicar calefacción de carburador",
                isCorrect: false
            },
            {
                textoRespuesta: "Bajar el morro del avión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. ¿Qué puede ocurrir si esperamos a estar muy cerca del suelo antes de iniciar la recogida?",
        opciones: [
            {
                textoRespuesta: "Que salga una toma perfecta con toda seguridad",
                isCorrect: false
            },
            {
                textoRespuesta: "Nada, la recogida debe iniciarse lo más cerca del suelo posible",
                isCorrect: false
            },
            {
                textoRespuesta: "Que no calcule bien la maniobra y provoque una toma dura con posible rebote sobre la pista, o tire de palanca más de lo necesario, yéndonos de nuevo al aire peligrosamente",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. Un piloto no es capaz de determinar su posición. esa situación se puede considerar como una emergencia",
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
        titulo: "29. El resbale:",
        opciones: [
            {
                textoRespuesta: "Es una maniobra avanzada que un piloto de ULM no ha de conocer",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una maniobra prohibida",
                isCorrect: false
            },
            {
                textoRespuesta: "Se realiza para obtener un mayor ángulo de descenso sin incremento de la velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Sólo sirve en casos extremos de emergencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Un altímetro calado con el QNE, nos dará",
        opciones: [
            {
                textoRespuesta: "Depende de la temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitudes",
                isCorrect: false
            },
            {
                textoRespuesta: "Alturas",
                isCorrect: false
            },
            {
                textoRespuesta: "Niveles de vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. En caso de parada de motor, jamás se debe accionar el paracaídas de emergencia",
        opciones: [
            {
                textoRespuesta: "Falso, se accionará, si el piloto considera que la situación es tan comprometida, que es el procedimiento más seguro",
                isCorrect: true
            },
            {
                textoRespuesta: "Verdadero, salvo que exista viento fuerte, en ese caso lo más conveniente es descender en paracaídas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Se requiere más potencia para volar en viraje que en vuelo recto y nivelado, ¿por qué?",
        opciones: [
            {
                textoRespuesta: "Al aumentar la inclinación se necesita más sustentación para contrarrestar el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque la resistencia aumenta",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque la velocidad de pérdida se incrementa",
                isCorrect: false
            },
            {
                textoRespuesta: "Por todas las razones anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "33. Para recuperar una 'pérdida' debemos:",
        opciones: [
            {
                textoRespuesta: "a) Disminuir el ángulo de ataque picando al ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Aplicar plena potencia si ésta no estuviera ya puesta",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Recuperar la dirección del morro lo antes posible",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"b\"",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. La carrera de despegue será mayor en una pista:",
        opciones: [
            {
                textoRespuesta: "Con hierba alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Con barro",
                isCorrect: false
            },
            {
                textoRespuesta: "Inclinada hacia arriba",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas ellas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. Elige entre las respuestas, la configuración que presentará un mayor ángulo de ataque, teniendo en cuenta que el peso es el mismo",
        opciones: [
            {
                textoRespuesta: "Descendiendo a 150 km/h",
                isCorrect: true
            },
            {
                textoRespuesta: "Ascendiendo a 150 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "Ascendiendo a 200 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "Descendiendo a 100 km/h",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Cuando un altímetro está calado con el QNH. ¿Qué marca?",
        opciones: [
            {
                textoRespuesta: "Altura sobre el terreno",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud sobre el nivel medio del mar",
                isCorrect: true
            },
            {
                textoRespuesta: "Nivel de transición",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. Se define una 'recogida' como:",
        opciones: [
            {
                textoRespuesta: "La nivelación y planeo necesarios para realizar una toma de contacto con la pista en las mejores condiciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Momento en que las ruedas del tren de aterrizaje contactan con el suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Momento en que las ruedas del tren de aterrizaje dejan el suelo en el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Maniobra para ajustar la potencia lo necesario para recuperar una pérdida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Si el aterrizaje de emergencia ha de ser en un campo cultivado, maíz, trigo, etc., elegiremos preferentemente",
        opciones: [
            {
                textoRespuesta: "Un cultivo crecido",
                isCorrect: false
            },
            {
                textoRespuesta: "Un cultivo bajo",
                isCorrect: true
            },
            {
                textoRespuesta: "No influye la altura del cultivo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Si la temperatura en un campo de vuelo aumenta considerablemente, la carrera de despegue, la carrera de despegue será",
        opciones: [
            {
                textoRespuesta: "Igual",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor",
                isCorrect: true
            },
            {
                textoRespuesta: "Menor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Cuáles son las maniobras fundamentales que rigen el vuelo de un avión",
        opciones: [
            {
                textoRespuesta: "Vuelo recto y nivelado, giros, ascensos y descensos",
                isCorrect: true
            },
            {
                textoRespuesta: "Despegues y aterrizajes",
                isCorrect: false
            },
            {
                textoRespuesta: "Empuje, sustentación, giros y planeos",
                isCorrect: false
            },
            {
                textoRespuesta: "Potencia, actitud, alabeo y estabilizador",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. La velocidad de mejor ángulo de ascenso, debe utilizarse inmediatamente después del despegue, y mantenerlo hasta:",
        opciones: [
            {
                textoRespuesta: "El nivel de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "La altura de tráfico",
                isCorrect: false
            },
            {
                textoRespuesta: "Reducir la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Haber sobrevolado los obstáculos en las proximidades",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "42. Las aeronaves que operen en un aeródromo o en sus cercanías:",
        opciones: [
            {
                textoRespuesta: "a) Harán todos los virajes hacia la derecha al aproximarse para aterrizar y después del despegue, salvo orden en contra",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Observarán el tránsito del aeródromo tanto si se encuentran o no en dicha zona de tránsito",
                isCorrect: true
            },
            {
                textoRespuesta: "c) Aterrizarán y despegarán a favor del viento, salvo razones de seguridad, de configuración de la pista o de tránsito aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "d) La \"a\" y la \"b\" son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. En un descenso el altímetro deberá ajustarse con el QNH al pasar",
        opciones: [
            {
                textoRespuesta: "La estratosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud de transición",
                isCorrect: false
            },
            {
                textoRespuesta: "El nivel de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "El nivel de transición",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. Cuando se vaya a realizar una toma de emergencia en cultivos crecidos (trigo, cebada, etc.) debemos tener la precaución de:",
        opciones: [
            {
                textoRespuesta: "No llevar un cigarro encendido en el ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Esperar a que llegue el dueño de la finca",
                isCorrect: false
            },
            {
                textoRespuesta: "Considerar la pista al suelo, pues el cultivo no nos frenará",
                isCorrect: false
            },
            {
                textoRespuesta: "Considerar la pista a la parte superior del cultivo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. Cuando hay viento fuerte o racheado se debe:",
        opciones: [
            {
                textoRespuesta: "Extender al máximo el flap para lograr una mayor estabilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "No utilizar de ninguna manera el flap",
                isCorrect: false
            },
            {
                textoRespuesta: "Se puede utilizar flaps, pero con poco calado",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. Se nos para el motor. Tenemos que tomar fuera de pista. Podemos tomar con el flap extendido a la mitad",
        opciones: [
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "Se debe tomar con el flap retraído",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente",
                isCorrect: false
            },
            {
                textoRespuesta: "Se debe tomar con todo el flap",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "47. Podemos disminuir ese margen de velocidad de 30% sobre la velocidad de pérdida en aproximación final en alguna circunstancia.",
        opciones: [
            {
                textoRespuesta: "Sí, sólo en un dos ejes",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo si hay viento fuerte",
                isCorrect: false
            },
            {
                textoRespuesta: "El piloto puede tomar esa medida en situaciones excepcionales",
                isCorrect: true
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. La velocidad que proporciona la mayor ganancia de altura en el menor tiempo posible se llama",
        opciones: [
            {
                textoRespuesta: "Vx - Velocidad de mejor ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de rotación",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de ascenso en crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Vy - Velocidad de mejor régimen de ascenso",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "49. Hay que esmerarse en mirar fuera muy frecuentemente durante todo el vuelo. Y hay que considerar que estamos en vuelo desde justo antes de arrancar el motor, durante el rodaje de salida, y durante el rodaje de llegada hasta que el motor está parado",
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
        titulo: "50. Tiene prioridad para aterrizar:",
        opciones: [
            {
                textoRespuesta: "El aparato que está en aproximación final",
                isCorrect: true
            },
            {
                textoRespuesta: "El aparato que se encuentre en base",
                isCorrect: false
            },
            {
                textoRespuesta: "El aparato que esté en viento de cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Todos ellos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. La señal emitida por radiotelefonía consistente en la palabra MAYDAY, es:",
        opciones: [
            {
                textoRespuesta: "Una señal de urgencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Una señal de peligro",
                isCorrect: false
            },
            {
                textoRespuesta: "Una señal de socorro",
                isCorrect: true
            },
            {
                textoRespuesta: "Una señal de acuse de recibo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. ¿Cuándo es especialmente crítico entrar en pérdida?",
        opciones: [
            {
                textoRespuesta: "En crucero a gran altura por la poca densidad del aire",
                isCorrect: false
            },
            {
                textoRespuesta: "A poca altura cerca del suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando hay turbulencias",
                isCorrect: false
            },
            {
                textoRespuesta: "Si la temperatura es muy baja",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. Si hemos de realizar un aterrizaje de emergencia en un terreno con pendiente, debemos:",
        opciones: [
            {
                textoRespuesta: "Aterrizar cuesta abajo",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizar cuesta arriba",
                isCorrect: true
            },
            {
                textoRespuesta: "No hay problema si las ruedas del ULM presentan frenos",
                isCorrect: false
            },
            {
                textoRespuesta: "No hay problema si el ULM presenta frenos aerodinámicos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. Las 'señales' por las que el piloto reconoce la velocidad de su aparato con relación al aire son:",
        opciones: [
            {
                textoRespuesta: "Los ruidos aerodinámicos",
                isCorrect: false
            },
            {
                textoRespuesta: "La lectura del anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "La fuerza sobre los mandos",
                isCorrect: false
            },
            {
                textoRespuesta: "Las tres anteriores son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "55. En caso de una toma a motor parado fuera de pista, los pasos del procedimiento de emergencia, como desconectar la batería, llamar por radio, cerrar la llave de combustible, no es absolutamente imprescindible realizarlos. Solo lo haremos si consideramos, en base a la situación y nuestra experiencia, que no nos menoscaba nuestra principal prioridad. Que es VOLAR EL AVIÓN",
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
        titulo: "56. En un descenso con el mando de gases a ralentí, ¿Cómo se controla la velocidad?",
        opciones: [
            {
                textoRespuesta: "Empujando la palanca hacia un lado",
                isCorrect: false
            },
            {
                textoRespuesta: "Empujando la palanca hacia adelante y luego hacia atrás",
                isCorrect: true
            },
            {
                textoRespuesta: "Utilizando los spoilers",
                isCorrect: false
            },
            {
                textoRespuesta: "Utilizando el sistema de paracaídas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. Hemos tenido la emergencia de humo eléctrico en cabina, realizado el procedimiento, y combatido el humo. Podemos encender algún equipo, por ejemplo el GPS",
        opciones: [
            {
                textoRespuesta: "Si el humo no reaparece, podemos seguir usando ese equipo",
                isCorrect: false
            },
            {
                textoRespuesta: "Si lo consideramos seguro, podemos seguir el vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Nuestro acompañante se empieza a sentir muy mal. Puede ser algo grave. Cuál es el primer paso que tenemos que dar",
        opciones: [
            {
                textoRespuesta: "Llamar al 112 por teléfono",
                isCorrect: false
            },
            {
                textoRespuesta: "Volar el avión",
                isCorrect: true
            },
            {
                textoRespuesta: "Declarar emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Hacerle el boca a boca",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. La posición máxima de flaps para el despegue es:",
        opciones: [
            {
                textoRespuesta: "10º",
                isCorrect: false
            },
            {
                textoRespuesta: "15º",
                isCorrect: true
            },
            {
                textoRespuesta: "25º",
                isCorrect: false
            },
            {
                textoRespuesta: "40º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. En nuestro anemómetro, el arco blanco acaba a 110, el amarillo empieza a 160, y tiene una raya roja a 210. Nos vemos sorprendidos por una tormenta, excepcionalmente, en esta ocasión, para alejarnos lo más rápido posible, podemos volar a 230",
        opciones: [
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "Se permite un 20% más de la VNE, por un periodo máximo de 5 minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "No",
                isCorrect: true
            },
            {
                textoRespuesta: "Solo si no hay turbulencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. En el caso de encontrar aire turbulento, el piloto de un ULM deberá:",
        opciones: [
            {
                textoRespuesta: "Picar y volar a poca altura por que hay menos viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentar la velocidad poniendo gas a fondo",
                isCorrect: false
            },
            {
                textoRespuesta: "Volar a mínima velocidad garantizando la no entrada en pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "Ganar velocidad con giros descendentes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Despegando detrás de un avión grande con viento en calma, se aconseja:",
        opciones: [
            {
                textoRespuesta: "Virar a la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "No realizar el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Esperar unos minutos",
                isCorrect: true
            },
            {
                textoRespuesta: "Virar a la izquierda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. En el caso de que las tomas estáticas quedaran obstruidas, pueden obtenerse indicaciones en los instrumentos de presión",
        opciones: [
            {
                textoRespuesta: "Rompiendo el cristal de uno de ellos",
                isCorrect: true
            },
            {
                textoRespuesta: "No se puede",
                isCorrect: false
            },
            {
                textoRespuesta: "Seleccionando corriente alterna",
                isCorrect: false
            },
            {
                textoRespuesta: "Cambiando los giróscopos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. El arco blanco de nuestro anemómetro acaba a 100 km/h. El arco amarillo empieza a 160 km/h. Entramos en una zona de turbulencia fuerte, y con los nervios no nos acordamos de cuál es la Va. ¿A qué velocidad deberemos volar?",
        opciones: [
            {
                textoRespuesta: "100 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproximadamente 180 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "160 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproximadamente 130 km/h",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "65. A mayor temperatura, el avión necesita más longitud de pista porque la densidad del aire disminuye, con lo que el avión \"siente\" que está a mayor altitud",
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
        titulo: "66. Llenar el tanque de combustible después del último vuelo, se considera una buena práctica porque previene de la condensación de la humedad al disminuir la cantidad de aire en el tanque",
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
        titulo: "67. ¿Qué relación hay entre el factor de carga y la velocidad de pérdida?",
        opciones: [
            {
                textoRespuesta: "No tienen relación alguna",
                isCorrect: false
            },
            {
                textoRespuesta: "La pérdida sólo está relacionada con el ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "A mayor factor de carga mayor velocidad de pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "A menor factor de carga mayor velocidad de pérdida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. Si en vuelo recto y nivelado a altitud de crucero tuviéramos una parada de motor imprevista, ¿qué es lo primero de todo que debemos hacer?",
        opciones: [
            {
                textoRespuesta: "Declarar la emergencia por radio",
                isCorrect: false
            },
            {
                textoRespuesta: "Tirar del paracaídas balístico",
                isCorrect: false
            },
            {
                textoRespuesta: "Poner los flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "Volar el avión",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "69. Si durante la carrera de despegue notamos una falta de potencia en el motor, la medida más recomendable es:",
        opciones: [
            {
                textoRespuesta: "Continuar, aunque necesitaremos más pista para despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "Abortar el despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "Comunicarlo al controlador si lo hubiera",
                isCorrect: false
            },
            {
                textoRespuesta: "Seguir sin darle importancia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. Cuando una aeronave está rodando antes del despegue, si se recibe una señal de luz a 'destellos rojos', significa:",
        opciones: [
            {
                textoRespuesta: "Apartarse rápidamente del área de aterrizaje en servicio",
                isCorrect: true
            },
            {
                textoRespuesta: "Peligro, pare el motor",
                isCorrect: false
            },
            {
                textoRespuesta: "El campo está encharcado",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a despegar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. Cuando un avión atraviesa una zona de bajas presiones vuela más alto de lo que le correspondería en un día ISA:",
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
        titulo: "72. Si abres la palanca de gases al máximo y bajas el morro lo suficiente para que el avión no ascienda. ¿Qué conseguirás?",
        opciones: [
            {
                textoRespuesta: "Velocidad de mejor ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de mejor régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad máxima",
                isCorrect: true
            },
            {
                textoRespuesta: "La VNE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. Si con fuerte viento en altura de tráfico, antes de aterrizar vemos la manga del campo indicando poco viento en el suelo:",
        opciones: [
            {
                textoRespuesta: "Es una indicación de que la meteo está mejorando",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una indicación de que existe un elevado gradiente, por lo que aproximaremos alerta con un plus de velocidad relativa",
                isCorrect: true
            },
            {
                textoRespuesta: "Nos relajamos, al haber poco viento en el suelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. A velocidad del viento es de 40 km/h. Indique que clase ULM está en condiciones de volar sin que le afecte limitación del viento",
        opciones: [
            {
                textoRespuesta: "ULM de velocidad máxima de 70 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "ULM de velocidad máxima de 80 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "ULM de velocidad máxima de 90 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "Dependerá de las limitaciones especificadas por el fabricante",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "75. A mayor altitud de densidad la eficiencia de la hélice",
        opciones: [
            {
                textoRespuesta: "Aumenta porque las palas tienen menos rozamiento",
                isCorrect: false
            },
            {
                textoRespuesta: "Permanece constante",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye porque la hélice ejerce menos fuerza en aire denso",
                isCorrect: false
            },
            {
                textoRespuesta: "Se reduce",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "76. Cuando serán iguales el QNH y el QFE",
        opciones: [
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando haya anticiclón",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando pase un frente frío",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el campo se encuentre a nivel del mar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "77. Hay algún tipo de vuelo en el que se pueda prescindir de la tarea de comunicar",
        opciones: [
            {
                textoRespuesta: "Cuando volemos por Francia",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí. En los vuelos en los que no sea requerida la radio",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "78. Cuando hablamos de que no se debe sobrepasar la velocidad máxima del avión, nos referimos a",
        opciones: [
            {
                textoRespuesta: "La velocidad máxima de flaps con flaps extendidos",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad máxima de turbulencia si existen turbulencias",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "VNE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. Despegar en una pista de hierba requiere una carrera de despegue mayor que en una de asfalto",
        opciones: [
            {
                textoRespuesta: "Verdadero, una superficie irregular frena el avión retrasando su aceleración",
                isCorrect: true
            },
            {
                textoRespuesta: "Falso, el avión acelera más rápido sobre pistas irregulares o de tierra",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. El máximo tiempo de vuelo para una determinada cantidad de combustible se alcanza",
        opciones: [
            {
                textoRespuesta: "A la mínima velocidad indicada",
                isCorrect: false
            },
            {
                textoRespuesta: "En un descenso largo",
                isCorrect: false
            },
            {
                textoRespuesta: "A la velocidad de mínima potencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. En el caso de realizar un despegue inmediatamente después del aterrizaje de un avión grande, se deberá realizar de forma que el punto de irse al aire este situado, con respecto al punto de contacto de la estela del otro avión",
        opciones: [
            {
                textoRespuesta: "Depende del QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "Después",
                isCorrect: true
            },
            {
                textoRespuesta: "Antes",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Si nada más despegar sufrimos una parada de motor, ¿Cuál es la maniobra más eficaz normalmente?",
        opciones: [
            {
                textoRespuesta: "Girar y aterrizar en el campo",
                isCorrect: false
            },
            {
                textoRespuesta: "Seguir derecho y aterrizar",
                isCorrect: true
            },
            {
                textoRespuesta: "Girar a viento en cola para aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Bajar el morro y girar a viento en cola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Un aterrizaje con viento en cola es",
        opciones: [
            {
                textoRespuesta: "Recomendable",
                isCorrect: false
            },
            {
                textoRespuesta: "Se deberá hacer siempre",
                isCorrect: false
            },
            {
                textoRespuesta: "Es obligatorio",
                isCorrect: false
            },
            {
                textoRespuesta: "No es en absoluto recomendable",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "84. Cuando volamos con altitudes usamos:",
        opciones: [
            {
                textoRespuesta: "QNH",
                isCorrect: true
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "1013.2 mb.",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las anteriores son ciertas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. Para eliminar la posibilidad de colisión en el despegue, el piloto de ULM deberá",
        opciones: [
            {
                textoRespuesta: "Chequear las sendas de aproximación y despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "Rodar lentamente hacia cabecera de pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Acelerar al despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "No hacer nada hasta que hayan despegado los ULM Que estén por delante de el",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. La velocidad de maniobra permite hacer una deflexión total de los mandos para contrarrestar las fuertes oscilaciones en cabeceo y alabeo que la turbulencia produce, sin riesgo para la estructura del avión",
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
        titulo: "87. El código de colores y marcas del anemómetro toman como referencia las velocidades",
        opciones: [
            {
                textoRespuesta: "CAS",
                isCorrect: false
            },
            {
                textoRespuesta: "TAS",
                isCorrect: false
            },
            {
                textoRespuesta: "IAS",
                isCorrect: true
            },
            {
                textoRespuesta: "EAS",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. ¿Qué es lo primero que tienes que hacer para recuperar una pérdida?",
        opciones: [
            {
                textoRespuesta: "Alabear levantando el plano más bajo",
                isCorrect: false
            },
            {
                textoRespuesta: "Subir el morro",
                isCorrect: false
            },
            {
                textoRespuesta: "Centrar la palanca Alabear bajando el plano más alto",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "89. Como denominamos la velocidad que nos marca el GPS",
        opciones: [
            {
                textoRespuesta: "Velocidad real",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad indicada",
                isCorrect: false
            },
            {
                textoRespuesta: "GS o velocidad sobre el suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad verdadera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. Una fórmula rápida para calcular la altitud de densidad DA, es DA=PA+120x(AT­ST) ¿Que significan las abreviaturas?",
        opciones: [
            {
                textoRespuesta: "ST - Temperatura estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "PA - Altitud de Presión",
                isCorrect: false
            },
            {
                textoRespuesta: "AT - Temperatura real",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "91. En nuestro anemómetro, el arco blanco acaba a 110, el amarillo empieza a 160, y tiene una raya roja a 210. ¿Cuál es, aproximadamente, la velocidad recomendada para volar con turbulencia fuerte?",
        opciones: [
            {
                textoRespuesta: "210",
                isCorrect: false
            },
            {
                textoRespuesta: "110",
                isCorrect: false
            },
            {
                textoRespuesta: "160",
                isCorrect: false
            },
            {
                textoRespuesta: "135",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "92. Un avión aterriza en Matilla, a 2300 pies. Que marcara el altímetro si lo calamos con el QNH",
        opciones: [
            {
                textoRespuesta: "2300 pies",
                isCorrect: true
            },
            {
                textoRespuesta: "Depende de si hay anticiclón o no",
                isCorrect: false
            },
            {
                textoRespuesta: "0 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "1000 pies",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. Definición de altitud: distancia vertical entre un avión y el nivel medio del mar",
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
        titulo: "94. La barrena:",
        opciones: [
            {
                textoRespuesta: "Provoca la entrada en pérdida del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "El morro sube más de lo normal",
                isCorrect: false
            },
            {
                textoRespuesta: "Es imposible si el avión no está en pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "El morro baja más de lo normal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. Viene marcada la velocidad de maniobra en el anemómetro",
        opciones: [
            {
                textoRespuesta: "En los que pesan más de 350 kg",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la marca del anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Normalmente no",
                isCorrect: true
            },
            {
                textoRespuesta: "Sólo en los autogiros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. En un ULM concreto, una velocidad se corresponderá con un determinado ángulo de ataque",
        opciones: [
            {
                textoRespuesta: "En un peso determinado",
                isCorrect: true
            },
            {
                textoRespuesta: "Si el viento es en calma",
                isCorrect: false
            },
            {
                textoRespuesta: "Independientemente del factor de carga",
                isCorrect: false
            },
            {
                textoRespuesta: "Independientemente del peso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. A mayor altitud de densidad de un aeródromo, mayor será la distancia de despegue",
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
        titulo: "98. En caso de que la presión de aceite no suba a unos valores normales después de poner en marcha, el piloto deberá:",
        opciones: [
            {
                textoRespuesta: "Aumentar la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Parar el motor",
                isCorrect: true
            },
            {
                textoRespuesta: "Poner la calefacción del aceite",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobar la temperatura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. La velocidad de vuelo a la que se vuela por razones de economía de combustible y vida operativa del motor es:",
        opciones: [
            {
                textoRespuesta: "Velocidad mínima",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad normal o de crucero",
                isCorrect: true
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
        titulo: "100. Se nos para el motor. Tenemos controlado el avión y altura suficiente. Di que pasos son correctos",
        opciones: [
            {
                textoRespuesta: "Apretarse ambos cinturones muy bien, antes de estar a baja altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Intentar re-arranque",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Tomar con viento en cara",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;