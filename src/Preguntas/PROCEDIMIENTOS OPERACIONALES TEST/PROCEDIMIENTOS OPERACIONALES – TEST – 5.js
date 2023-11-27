const preguntas = [
    {
        titulo: "1. Mientras volamos para llegar a un punto concreto, vemos que nos estamos desplazando hacia la izquierda. ¿Qué significa?",
        opciones: [
            {
                textoRespuesta: "Que nuestra brújula tiene una desviación y ha dejado de funcionar correctamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el viento viene por la derecha",
                isCorrect: true
            },
            {
                textoRespuesta: "Que el viento viene por la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Que nuestra brújula no está bien calibrada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. El instrumento que nos indica cuál es la actitud del avión es:",
        opciones: [
            {
                textoRespuesta: "El indicador de virajes",
                isCorrect: false
            },
            {
                textoRespuesta: "El giro direccional",
                isCorrect: false
            },
            {
                textoRespuesta: "La brújula",
                isCorrect: false
            },
            {
                textoRespuesta: "El horizonte artificial",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "3. ¿Qué le ocurre a la mezcla de aire y combustible si dejamos de aplicar calor al carburador?",
        opciones: [
            {
                textoRespuesta: "Se enriquece",
                isCorrect: false
            },
            {
                textoRespuesta: "Se empobrece",
                isCorrect: true
            },
            {
                textoRespuesta: "No le pasa nada",
                isCorrect: false
            },
            {
                textoRespuesta: "Se ajustará sola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. Con hélice de paso variable, en despegues:",
        opciones: [
            {
                textoRespuesta: "Llevaremos paso corto",
                isCorrect: true
            },
            {
                textoRespuesta: "Llevaremos paso largo",
                isCorrect: false
            },
            {
                textoRespuesta: "Llevaremos paso corto si estamos a poco altitud de densidad y paso largo si el campo está muy elevado",
                isCorrect: false
            },
            {
                textoRespuesta: "Llevaremos paso en bandera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Si en nuestra ruta queremos llegar a un punto concreto pero vemos que cada vez nos desviamos más hacia la izquierda. ¿Qué debemos hacer?",
        opciones: [
            {
                textoRespuesta: "Poner un rumbo mayor en la brújula",
                isCorrect: true
            },
            {
                textoRespuesta: "Continuar con el mismo rumbo y aumentar la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Poner un rumbo menor en la brújula",
                isCorrect: false
            },
            {
                textoRespuesta: "Ir haciendo virajes hacia la derecha para corregir la trayectoria",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Estamos volando con una TAS de 135kt, con viento en cara a 5kt. ¿Qué velocidad marcará el GPS?",
        opciones: [
            {
                textoRespuesta: "El GPS marcará la misma que el anemómetro, es decir, la indicada",
                isCorrect: false
            },
            {
                textoRespuesta: "135kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "140kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "130kt.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "7. El factor de carga mínimo que debe poder soportar nuestro ULM es:",
        opciones: [
            {
                textoRespuesta: "+3 y -2",
                isCorrect: true
            },
            {
                textoRespuesta: "+3 y -3",
                isCorrect: false
            },
            {
                textoRespuesta: "+2 y -2",
                isCorrect: false
            },
            {
                textoRespuesta: "+4 y -2",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Si movemos el volante hacia la izquierda:",
        opciones: [
            {
                textoRespuesta: "El timón de dirección se moverá hacia la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "El alerón izquierdo bajará y el derecho subirá",
                isCorrect: false
            },
            {
                textoRespuesta: "El timón de dirección se moverá hacia la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "El alerón derecho bajará y el izquierdo subirá",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "9. La velocidad de mejor régimen de ascenso debe utilizarse desde que despegamos hasta:",
        opciones: [
            {
                textoRespuesta: "Que hayamos superado todos los obstáculos de las proximidades",
                isCorrect: false
            },
            {
                textoRespuesta: "Que hayamos pasado el nivel de transición",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad que hay que llevar después del despegue es la de mejor ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Hasta que hayamos salido de la zona de tránsito del aeródromo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Si nos dan el QFE estando en la pista de un aeródromo y lo calamos en el altímetro:",
        opciones: [
            {
                textoRespuesta: "Marcará la altitud del campo, corregida al nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicará 0 ft.",
                isCorrect: true
            },
            {
                textoRespuesta: "Marcará la altitud real sobre el nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "El QFE no es un código que se pueda calar en el altímetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. ¿Cómo se consigue realizar un viraje hacia la derecha?",
        opciones: [
            {
                textoRespuesta: "Con el alerón de la derecha subido y el de la izquierda bajado",
                isCorrect: true
            },
            {
                textoRespuesta: "Con el alerón de la derecha abajo y el de la izquierda arriba",
                isCorrect: false
            },
            {
                textoRespuesta: "Moviendo el timón de dirección hacia la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Moviendo el timón de dirección hacia la derecha",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. ¿Qué operación podemos usar para aterrizar con viento cruzado?",
        opciones: [
            {
                textoRespuesta: "Un resbale",
                isCorrect: true
            },
            {
                textoRespuesta: "Un derrape",
                isCorrect: false
            },
            {
                textoRespuesta: "Un aumento significativo de la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. Las marcas de nuestro anemómetro son Vs0=50, Vs1=70, Vfe=100, Vno=150, Vne=180. ¿Podremos llevar flaps sin volamos a 65?",
        opciones: [
            {
                textoRespuesta: "No",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, a esa velocidad podemos volar tanto con flaps como sin ellos",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, a esa velocidad solo podremos volar si usamos flaps",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, siempre que llevemos muy poco calado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. ¿De qué forma conseguiremos un viraje más cerrado?",
        opciones: [
            {
                textoRespuesta: "Con más inclinación y menos velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Con menos inclinación y más velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizando un derrape",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizando un resbale",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. En un ascenso, la mezcla de aire y combustible se empobrece.",
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
        titulo: "16. Vamos a aterrizar en un aeródromo con viento en cara decreciente. ¿Cómo procederemos?",
        opciones: [
            {
                textoRespuesta: "Aumentaremos la potencia para mantenernos en la senda de planeo",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentaremos el ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuiremos la potencia para mantenernos en la senda de planeo",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento en cara decreciente no afectará a la actitud de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Si superamos la Vne de nuestra aeronave, ¿qué ocurre?",
        opciones: [
            {
                textoRespuesta: "Nada, es la velocidad normal de operación",
                isCorrect: false
            },
            {
                textoRespuesta: "Que podrá sufrir daños estructurales",
                isCorrect: true
            },
            {
                textoRespuesta: "No es recomendable pero podremos seguir volándolo sin problemas",
                isCorrect: false
            },
            {
                textoRespuesta: "No la podemos superar aunque quisiéramos porque es el tope que tiene nuestra aeronave",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Si no podemos consultar la velocidad de maniobra de la aeronave, ¿hay alguna forma de conocerla?",
        opciones: [
            {
                textoRespuesta: "La única forma es mirando el manual de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí. Coincide con la línea que separa el arco verde del arco amarillo",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí. Coincide con la línea que separa el arco blanco del arco verde",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí. Se encuentra a la mitad entre el final del arco blanco y el final del arco verde",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "19. ¿Cuándo necesitaremos mayor longitud de pista de lo normal?",
        opciones: [
            {
                textoRespuesta: "Cuando una aeronave tiene el centro de gravedad muy adelantado",
                isCorrect: false
            },
            {
                textoRespuesta: "En un aeródromo a gran altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "En un aterrizaje en una pista con pendiente negativa",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "20. ¿Cuáles son las siglas de velocidad de maniobra?",
        opciones: [
            {
                textoRespuesta: "Vno",
                isCorrect: false
            },
            {
                textoRespuesta: "Vm",
                isCorrect: false
            },
            {
                textoRespuesta: "Vx",
                isCorrect: false
            },
            {
                textoRespuesta: "Va",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "21. La velocidad de mejor régimen de ascenso:",
        opciones: [
            {
                textoRespuesta: "Está prevista para utilizarla durante largos periodos de tiempo",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos usarla nada más despegar de la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la que usaremos hasta que hayamos superado todos los obstáculos de las proximidades",
                isCorrect: false
            },
            {
                textoRespuesta: "La usaremos una vez superados los obstáculos tras el despegue",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "22. ¿Cuál de las siguientes situaciones será más comprometida para el vuelo?",
        opciones: [
            {
                textoRespuesta: "Cuando volamos de una zona de baja presión a una de alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando volamos de una zona de alta presión a una de baja",
                isCorrect: true
            },
            {
                textoRespuesta: "Las dos situaciones anteriores son igual de comprometidas",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las situaciones anteriores tiene algún riesgo para el vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. ¿Qué ocurre cuando aumenta el factor de carga?",
        opciones: [
            {
                textoRespuesta: "Disminuye la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyen la resistencia inducida y la parásita",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la velocidad de pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "Entraremos en pérdida a un mayor ángulo de ataque",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. ¿Cuál de las siguientes puede ser una definición de GS?",
        opciones: [
            {
                textoRespuesta: "IAS +/- viento",
                isCorrect: false
            },
            {
                textoRespuesta: "EAS +/- viento",
                isCorrect: false
            },
            {
                textoRespuesta: "TAS +/- viento",
                isCorrect: true
            },
            {
                textoRespuesta: "CAS +/- viento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. ¿Cómo podemos conocer la velocidad de maniobra de nuestra aeronave?",
        opciones: [
            {
                textoRespuesta: "Mirándola en el anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizando pruebas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Consultándola en el manual de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Consultándola en el libro de mantenimiento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. ¿De qué forma conseguiremos mayor velocidad?",
        opciones: [
            {
                textoRespuesta: "Bajando el morro para disminuir el ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Aplicando palanca de gases al máximo sin modificar el ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Aplicando palanca de gases al máximo y bajando el morro",
                isCorrect: true
            },
            {
                textoRespuesta: "Aplicando palanca de gases al máximo y subiendo el morro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. En un campo que tiene obstáculos cerca, ¿qué velocidad utilizaremos tras el despegue?",
        opciones: [
            {
                textoRespuesta: "Velocidad de mejor ángulo de ascenso y la normal de ascenso una vez superados",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de mejor régimen de ascenso y la normal de ascenso una vez superados",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad normal de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de mejor ángulo de ascenso y la de mejor régimen de ascenso una vez superados",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "28. El objetivo del chequeo prevuelo es:",
        opciones: [
            {
                textoRespuesta: "Determinar si la aeronave está en condiciones de realizar un vuelo seguro",
                isCorrect: true
            },
            {
                textoRespuesta: "Comprobar que el motor se encuentra en buen estado",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobar si la pista está en buen estado para su uso y que no haya elementos peligrosos en ella",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobar que el sistema de comunicaciones funciona correctamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. De las siguientes situaciones, ¿cuál elegiría para el despegue?",
        opciones: [
            {
                textoRespuesta: "Pista con pendiente positiva y viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Pista con pendiente negativa y viento en cara",
                isCorrect: true
            },
            {
                textoRespuesta: "Pista con pendiente negativa y viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Pista con pendiente positiva y viento en cola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Una pista VFR básica, ¿qué marcas debe llevar?",
        opciones: [
            {
                textoRespuesta: "Marcas de calle de rodaje, de bordes de calle de rodaje y números de pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Marca de calle de rodaje y línea de detención",
                isCorrect: false
            },
            {
                textoRespuesta: "Marcas de posición y números de pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Línea central y números de pista",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. ¿Cómo podemos evitar la contaminación de agua en los depósitos de combustible?",
        opciones: [
            {
                textoRespuesta: "Poniendo la calefacción durante un rato antes de aparcar la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Drenando los depósitos después de cada vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobando que estén bien cerrados para que no entre humedad",
                isCorrect: false
            },
            {
                textoRespuesta: "Llenando los depósitos completamente después del último vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. ¿Cuál es la velocidad a la que el motor del avión funciona a niveles óptimos de presión y temperatura?",
        opciones: [
            {
                textoRespuesta: "Velocidad de maniobra",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad normal de operación",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de mejor régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de crucero",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "33. ¿Qué ocurre si superamos la Vno de nuestra aeronave?",
        opciones: [
            {
                textoRespuesta: "Que podrá sufrir daños estructurales",
                isCorrect: false
            },
            {
                textoRespuesta: "Nada, porque es la velocidad normal de operación",
                isCorrect: true
            },
            {
                textoRespuesta: "Que habrá que revisarlo antes de volver a volar",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. Estamos en nivel de vuelo. ¿Qué debemos llevar en nuestro altímetro?",
        opciones: [
            {
                textoRespuesta: "El QNH del aeródromo más cercano",
                isCorrect: false
            },
            {
                textoRespuesta: "El QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "El QNE",
                isCorrect: true
            },
            {
                textoRespuesta: "Podemos llevar tanto el QNH como el QNE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. ¿Por qué no debemos despegar desde intersecciones de pista si antes ha despegado un avión grande?",
        opciones: [
            {
                textoRespuesta: "Porque en caso de emergencia podría volver a necesitar la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque las turbinas de los aviones grandes generan turbulencias",
                isCorrect: false
            },
            {
                textoRespuesta: "Por las turbulencias que generan en la punta de sus alas",
                isCorrect: true
            },
            {
                textoRespuesta: "Porque podemos entorpecer el tráfico de otras aeronaves",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Levamos una TAS de 160kt, y tenemos viento en cola a 15kt. ¿Cuánto marcará el GPS?",
        opciones: [
            {
                textoRespuesta: "160kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "175kt.",
                isCorrect: true
            },
            {
                textoRespuesta: "145kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "El GPS marcará la misma que la indicada en el anemómetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. Acabamos de entrar en pérdida. ¿Qué será lo primero que haremos?",
        opciones: [
            {
                textoRespuesta: "Aumentar la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Tirar de la palanca para aumentar el ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Empujar la palanca para disminuir el ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuir la potencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Si para nivelarnos tras recuperar una pérdida tiramos fuertemente de la palanca:",
        opciones: [
            {
                textoRespuesta: "Entraremos en barrena",
                isCorrect: false
            },
            {
                textoRespuesta: "Causaremos un daño estructural irreparable en la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendremos pérdidas secundarias",
                isCorrect: true
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. ¿Qué debemos hacer con la mezcla de aire y combustible si estamos descendiendo?",
        opciones: [
            {
                textoRespuesta: "Dejarla igual",
                isCorrect: false
            },
            {
                textoRespuesta: "Empobrecerla",
                isCorrect: false
            },
            {
                textoRespuesta: "Enriquecerla",
                isCorrect: true
            },
            {
                textoRespuesta: "Depende del criterio del piloto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Una pendiente de pista negativa:",
        opciones: [
            {
                textoRespuesta: "Acorta la carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Alarga la carrera de aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Una pista no puede tener pendiente negativa",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "41. En caso de la parada de uno de los dos motores, la bola acusa ese movimiento instantáneamente. ¿Qué haremos?",
        opciones: [
            {
                textoRespuesta: "Pisaremos con el pie contrario de donde esté la bola",
                isCorrect: false
            },
            {
                textoRespuesta: "Pisaremos con el pie del lado en el que esté la bola",
                isCorrect: true
            },
            {
                textoRespuesta: "Viraremos hacia el lado contrario en el que esté la bola",
                isCorrect: false
            },
            {
                textoRespuesta: "Viraremos hacia el lado contrario de la bola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. La inspección o el chequeo prevuelo debe hacerse:",
        opciones: [
            {
                textoRespuesta: "Según el método que el piloto crea conveniente",
                isCorrect: false
            },
            {
                textoRespuesta: "Siguiendo la lista de instrucciones del fabricante de la aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "Una vez al mes",
                isCorrect: false
            },
            {
                textoRespuesta: "Una vez cada dos semanas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. ¿Qué indicará el altímetro si volamos de una zona de bajas presiones a una de altas?",
        opciones: [
            {
                textoRespuesta: "El altímetro indicará lo mismo aunque nosotros ascenderemos",
                isCorrect: true
            },
            {
                textoRespuesta: "El altímetro indicará que ascendemos aunque seguiremos al mismo nivel",
                isCorrect: false
            },
            {
                textoRespuesta: "El altímetro indicará lo mismo aunque nosotros descenderemos",
                isCorrect: false
            },
            {
                textoRespuesta: "El altímetro indicará que descendemos aunque seguiremos al mismo nivel",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. Si tenemos que cruzar una montaña por sotavento:",
        opciones: [
            {
                textoRespuesta: "No debemos cruzarla bajo ningún concepto",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendremos que ganar altura y cruzarla con un ángulo de inclinación",
                isCorrect: true
            },
            {
                textoRespuesta: "Deberemos hacerlo lo más cerca posible a la ladera",
                isCorrect: false
            },
            {
                textoRespuesta: "Lo haremos pero a velocidad de maniobra",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. Indique la correcta. El efecto suelo:",
        opciones: [
            {
                textoRespuesta: "Se produce solo en despegues",
                isCorrect: false
            },
            {
                textoRespuesta: "Se produce cuando la aeronave está a una altura del suelo menor de ¼ de la extensión del ala",
                isCorrect: true
            },
            {
                textoRespuesta: "Es proporcional al peso de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la resistencia inducida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. La relación entre las resistencias y la velocidad es:",
        opciones: [
            {
                textoRespuesta: "La inducida y la parásita aumentan cuando aumenta la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Con aumento de velocidad, la inducida aumenta y la parásita disminuye",
                isCorrect: false
            },
            {
                textoRespuesta: "La inducida y la parásita disminuyen cuando aumenta la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Con aumento de velocidad, la parásita aumenta y la inducida disminuye",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "47. Estamos realizando un viraje hacia la derecha y queremos orientarnos al rumbo 360º. ¿Cuándo sacaremos el viraje?",
        opciones: [
            {
                textoRespuesta: "En 360º",
                isCorrect: false
            },
            {
                textoRespuesta: "En 330º",
                isCorrect: true
            },
            {
                textoRespuesta: "En 030º",
                isCorrect: false
            },
            {
                textoRespuesta: "En 010º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. Indique la correcta. La IAS y la TAS serán iguales:",
        opciones: [
            {
                textoRespuesta: "Un día con atmósfera estándar a nivel del mar",
                isCorrect: true
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día con atmósfera estándar a cualquier altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "A gran altitud de densidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Despegamos con flaps. ¿Cuándo debemos dejar de usarlos?",
        opciones: [
            {
                textoRespuesta: "Cuando hayamos salido del circuito de tráfico de aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Tras asegurarnos que hemos alcanzado la velocidad adecuada de operación sin flaps",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando superemos el nivel de transición",
                isCorrect: false
            },
            {
                textoRespuesta: "Justo después de despegar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. Si en las proximidades de una pista hay obstáculos, en el despegue:",
        opciones: [
            {
                textoRespuesta: "El viento en cara nos acercará a ellos",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento en cola nos acercará a ellos",
                isCorrect: true
            },
            {
                textoRespuesta: "Usaremos velocidad de mejor régimen de ascenso hasta que los hayamos superado",
                isCorrect: false
            },
            {
                textoRespuesta: "Usaremos velocidad normal de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Queremos terminar nuestro viraje orientados hacia rumbo 180º y estamos virando hacia la derecha. Debemos parar cuando la brújula indique:",
        opciones: [
            {
                textoRespuesta: "180º",
                isCorrect: false
            },
            {
                textoRespuesta: "150º",
                isCorrect: false
            },
            {
                textoRespuesta: "210º",
                isCorrect: true
            },
            {
                textoRespuesta: "90º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Vamos a despegar de un aeródromo, ¿qué tenemos que pedir para calar en el altímetro?",
        opciones: [
            {
                textoRespuesta: "El QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "El QNE",
                isCorrect: false
            },
            {
                textoRespuesta: "El QNH",
                isCorrect: true
            },
            {
                textoRespuesta: "El QMS",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. ¿Cuál es la máxima velocidad a la que un avión debe volar con turbulencias?",
        opciones: [
            {
                textoRespuesta: "Velocidad normal de operación",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de maniobra",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de turbulencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. Las marcas de nuestro anemómetro son Vs0=50, Vs1=70, Vfe=100, Vno=150, Vne=180. ¿A cuál de las siguientes velocidades podremos usar flaps?",
        opciones: [
            {
                textoRespuesta: "65",
                isCorrect: false
            },
            {
                textoRespuesta: "90",
                isCorrect: false
            },
            {
                textoRespuesta: "130",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "55. Si calamos el QNH estando en tierra en un aeródromo, ¿qué marcará el altímetro?",
        opciones: [
            {
                textoRespuesta: "La altitud del campo, corregida al nivel del mar",
                isCorrect: true
            },
            {
                textoRespuesta: "Marcará 0 ft.",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud real sobre el nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Marcará el nivel de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. ¿A qué se debe el efecto suelo?",
        opciones: [
            {
                textoRespuesta: "A un aumento de la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "A la disminución de la resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "A la disminución de la resistencia parásita",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "57. Durante un ascenso, la mezcla de aire y combustible:",
        opciones: [
            {
                textoRespuesta: "Se empobrece",
                isCorrect: false
            },
            {
                textoRespuesta: "Se mantendrá estable",
                isCorrect: false
            },
            {
                textoRespuesta: "La debemos enriquecer paulatinamente",
                isCorrect: false
            },
            {
                textoRespuesta: "La debemos empobrecer poco a poco",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "58. ¿Qué consideramos como carrera de aterrizaje?",
        opciones: [
            {
                textoRespuesta: "Desde que entramos en tramo final hasta que se para el ULM en la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Desde que el tren de aterrizaje principal toma contacto con la pista hasta que el ULM se para",
                isCorrect: true
            },
            {
                textoRespuesta: "Desde que estamos en tramo final hasta que el tren principal de aterrizaje toma contacto con la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. ¿Por qué en aproximaciones, con tiempo frío, hay que poner la calefacción del carburador antes de cortar motor?",
        opciones: [
            {
                textoRespuesta: "Para no dejar la aeronave aparcada con hielo en el carburador",
                isCorrect: false
            },
            {
                textoRespuesta: "Para que no se forme hielo por si al final tenemos que hacer un motor y al aire",
                isCorrect: true
            },
            {
                textoRespuesta: "Porque necesitamos la máxima potencia del motor en ese momento",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque en la senda de aproximación es más fácil que se forme hielo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. Estamos virando hacia la izquierda y queremos orientarnos al rumbo 180º. Sacaremos el viraje cuando la brújula indique:",
        opciones: [
            {
                textoRespuesta: "170º",
                isCorrect: false
            },
            {
                textoRespuesta: "210º",
                isCorrect: false
            },
            {
                textoRespuesta: "180º",
                isCorrect: false
            },
            {
                textoRespuesta: "150º",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. ¿En qué arco del anemómetro debemos volar si nos encontramos con turbulencias en vuelo?",
        opciones: [
            {
                textoRespuesta: "En el amarillo",
                isCorrect: false
            },
            {
                textoRespuesta: "En el verde",
                isCorrect: true
            },
            {
                textoRespuesta: "En el blanco",
                isCorrect: false
            },
            {
                textoRespuesta: "Muy cerca de Vne, pero con precaución de no sobrepasarla",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. ¿Cómo controlamos la actitud de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Con los controles de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Con la potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Con los compensadores",
                isCorrect: false
            },
            {
                textoRespuesta: "Con los dispositivos hipersustentadores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Si antes que nosotros ha despegado un avión de grandes características:",
        opciones: [
            {
                textoRespuesta: "Nos iremos al aire después del punto en que se fue el otro avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendremos que esperar al menos 20 minutos para usar la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "cNos iremos al aire antes del punto en que despegó el otro avión",
                isCorrect: true
            },
            {
                textoRespuesta: "El uso previo de la pista no nos afectará a nosotros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Nos estamos aproximando a un aeródromo con obstáculos en las proximidades. ¿Cómo conseguimos un mayor ángulo de descenso?",
        opciones: [
            {
                textoRespuesta: "Bajando el morro",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentando la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando flaps",
                isCorrect: true
            },
            {
                textoRespuesta: "Aterrizando con viento en cola",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. En un aterrizaje, ¿cómo podemos acabar con el efecto suelo?",
        opciones: [
            {
                textoRespuesta: "Bajando el morro para disminuir el ángulo de ataque",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentando el ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Quitando todo el calado de flaps",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Virando hacia la izquierda queremos orientarnos hacia el rumbo 360º. Sacaremos nuestro viraje cuando la brújula indique:",
        opciones: [
            {
                textoRespuesta: "030º",
                isCorrect: true
            },
            {
                textoRespuesta: "360º",
                isCorrect: false
            },
            {
                textoRespuesta: "330º",
                isCorrect: false
            },
            {
                textoRespuesta: "270º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. En un descenso, ¿qué ocurre con la mezcla de aire y combustible?",
        opciones: [
            {
                textoRespuesta: "Se empobrece",
                isCorrect: true
            },
            {
                textoRespuesta: "Se enriquece",
                isCorrect: false
            },
            {
                textoRespuesta: "Si no la cambia el piloto, se mantendrá estable",
                isCorrect: false
            },
            {
                textoRespuesta: "La mezcla siempre será la misma",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. Durante la inspección prevuelo de nuestra aeronave:",
        opciones: [
            {
                textoRespuesta: "Drenaremos los depósitos de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos aseguraremos de quitar la funda del tubo pitot",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobaremos que las tomas de presión estática no están obstruidas",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "69. Vamos a despegar de un mismo campo un primer día con 12º C y un segundo día con 34º C. Indique la correcta:",
        opciones: [
            {
                textoRespuesta: "El segundo día necesitaremos más longitud de pista",
                isCorrect: true
            },
            {
                textoRespuesta: "El primer día necesitaremos más longitud de pista",
                isCorrect: false
            },
            {
                textoRespuesta: "El primer día saldremos al aire con mayor velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. La aplicación de la máxima deflexión de los controles de cabeceo, alabeo o dirección debe estar limitada a:",
        opciones: [
            {
                textoRespuesta: "La velocidad de maniobra",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Los límites del arco verde del anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "La Vne",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. ¿Cómo realizamos un viraje coordinado?",
        opciones: [
            {
                textoRespuesta: "Utilizando el volante para la inclinación y el timón de dirección para centrar la bola",
                isCorrect: true
            },
            {
                textoRespuesta: "Utilizando el timón de dirección para la inclinación y el volante para centrar la bola",
                isCorrect: false
            },
            {
                textoRespuesta: "Utilizando el timón de dirección para llevar la bola hacia el lado de inclinación",
                isCorrect: false
            },
            {
                textoRespuesta: "Utilizando el volante para llevar la bola hacia el lado de inclinación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. ¿Cuándo será mayor la TAS que la IAS?",
        opciones: [
            {
                textoRespuesta: "A nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "En un día con atmósfera estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "En gran altitud de densidad",
                isCorrect: true
            },
            {
                textoRespuesta: "La TAS siempre será menor que la IAS",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. La velocidad máxima a la que un avión puede entrar en pérdida sin sobrepasar los límites de factor de carga soportados por la aeronave es:",
        opciones: [
            {
                textoRespuesta: "La velocidad de maniobra",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad normal de operación (Vno)",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad que nunca debemos exceder (Vne)",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. ¿Cuál es el criterio para orientar las pistas de los aeródromos?",
        opciones: [
            {
                textoRespuesta: "La pendiente del terreno en el que está situado",
                isCorrect: false
            },
            {
                textoRespuesta: "Según los vientos predominantes locales",
                isCorrect: true
            },
            {
                textoRespuesta: "Según cuáles sean las rutas más utilizadas, para que las aeronaves se tengan que desviar lo menos posible tras el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Según la actividad para la que esté destinado el aeródromo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. Indique la correcta. A la velocidad de crucero:",
        opciones: [
            {
                textoRespuesta: "La resistencia inducida es muy grande",
                isCorrect: false
            },
            {
                textoRespuesta: "El motor se puede recalentar",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye el consumo de combustible",
                isCorrect: true
            },
            {
                textoRespuesta: "La resistencia parásita se reduce mucho",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Cuando estamos volando en una zona de altas presiones y pasamos a una de bajas:",
        opciones: [
            {
                textoRespuesta: "Nos mantenemos al mismo nivel pero el altímetro indica que descendemos",
                isCorrect: false
            },
            {
                textoRespuesta: "Ascendemos pero la lectura del altímetro es la misma",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos mantenemos en el mismo nivel pero el altímetro indica que ascendemos",
                isCorrect: false
            },
            {
                textoRespuesta: "Descendemos pero la lectura del altímetro es la misma",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "77. Cualquier aeronave puede entrar en pérdida a cualquier velocidad.",
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
        titulo: "78. Si queremos conocer la altitud de presión en un aeródromo, ¿cómo lo haremos?",
        opciones: [
            {
                textoRespuesta: "Pidiendo el QFE y calándolo en el altímetro. Lo que marquen las agujas será la altitud de presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Consultando el NOTAM",
                isCorrect: false
            },
            {
                textoRespuesta: "Calando 1.013 mb en el altímetro. Lo que marquen las agujas será la altitud de presión",
                isCorrect: true
            },
            {
                textoRespuesta: "No podemos conocer esta altitud por nosotros mismos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. En configuración de aterrizaje, nuestra aeronave tiene una velocidad de pérdida de 50 km/h. ¿A qué velocidad mínima volaremos en aproximación final?",
        opciones: [
            {
                textoRespuesta: "50 km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "55 km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "65 km/h.",
                isCorrect: true
            },
            {
                textoRespuesta: "70 km/h.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Con hélice de paso variable, a altas velocidades en vuelo:",
        opciones: [
            {
                textoRespuesta: "Llevaremos paso corto",
                isCorrect: false
            },
            {
                textoRespuesta: "Llevaremos en bandera, para disminuir al máximo la resistencia generada por la hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "Llevaremos paso largo",
                isCorrect: true
            },
            {
                textoRespuesta: "A grandes velocidades el paso que llevemos es indiferente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. Volando en una zona de altas presiones, el altímetro:",
        opciones: [
            {
                textoRespuesta: "Indicará que vamos más bajo",
                isCorrect: true
            },
            {
                textoRespuesta: "Indicará que vamos más alto",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicará lo mismo que si vamos en una zona de bajas presiones",
                isCorrect: false
            },
            {
                textoRespuesta: "Iremos más bajo de lo que marca el altímetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Una vez que estamos en ruta tenemos que ascender durante un largo periodo de tiempo. ¿Qué velocidad usaremos?",
        opciones: [
            {
                textoRespuesta: "Velocidad de mejor ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad normal de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad de crucero",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de mejor régimen de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Vamos a aterrizar con viento en cara creciente. ¿Cómo lo tendremos que hacer?",
        opciones: [
            {
                textoRespuesta: "Seguiremos el mismo procedimiento que si no hubiera viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentaremos la potencia para no desviarnos de nuestra senda de planeo",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuiremos la potencia para mantener la senda de planeo",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentaremos el ángulo de ataque conforme nos vayamos acercando a la pista",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. El jefe vuelos decide cuál es la pista en uso desde la que tenemos que despegar:",
        opciones: [
            {
                textoRespuesta: "Verdadero, y tendremos que acatar su decisión en cualquier caso",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso, esa decisión no la toma el jefe de vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Verdadero, pero la responsabilidad última de comprobar que las condiciones sean las adecuadas es del comandante de la aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "Falso, es el comandante de la aeronave quien decide qué pista usar en cada momento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. El anemómetro nos marca la velocidad indicada. ¿Cuál es la que nos marca el GPS?",
        opciones: [
            {
                textoRespuesta: "TAS o verdadera",
                isCorrect: false
            },
            {
                textoRespuesta: "IAS o indicada",
                isCorrect: false
            },
            {
                textoRespuesta: "GS o sobre el suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "EAS o equivalente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. El despegue en una pista con hierba corta:",
        opciones: [
            {
                textoRespuesta: "Necesitará la misma carrera que en una pista asfaltada",
                isCorrect: false
            },
            {
                textoRespuesta: "La carrera de despegue será mayor que en una pista con hierba alta",
                isCorrect: false
            },
            {
                textoRespuesta: "Necesitará mayor carrera de despegue que en una pista asfaltada",
                isCorrect: true
            },
            {
                textoRespuesta: "Será prácticamente imposible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. El piloto deberá drenar los depósitos de combustible:",
        opciones: [
            {
                textoRespuesta: "Durante el chequeo prevuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre que el avión lleve varios días aparcado",
                isCorrect: false
            },
            {
                textoRespuesta: "Después de cada vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "88. Si superamos la Vne de nuestra aeronave habrá que revisarla antes de volver a volar.",
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
        titulo: "89. Las marcas de nuestro anemómetro son Vs0=50, Vs1=70, Vfe=100, Vno=150, Vne=180. ¿A qué velocidad podríamos ir en caso de turbulencia fuerte?",
        opciones: [
            {
                textoRespuesta: "A cualquiera que no sobrepase 180",
                isCorrect: false
            },
            {
                textoRespuesta: "A 130",
                isCorrect: true
            },
            {
                textoRespuesta: "A 160",
                isCorrect: false
            },
            {
                textoRespuesta: "A 60",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. ¿Qué calaremos en el altímetro una vez superado el nivel de transición?",
        opciones: [
            {
                textoRespuesta: "El QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "El QNE",
                isCorrect: false
            },
            {
                textoRespuesta: "1.013 mb.",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "91. ¿Cuál es la velocidad de referencia que debemos llevar en configuración de aterrizaje para volar con seguridad?",
        opciones: [
            {
                textoRespuesta: "La velocidad de pérdida, como mínimo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un 50% más de la velocidad de pérdida",
                isCorrect: false
            },
            {
                textoRespuesta: "Un 30% más de la velocidad de pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad normal de descenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. ¿Cuándo no es recomendable el uso de flaps, o lo es su uso con poco calado?",
        opciones: [
            {
                textoRespuesta: "Cuando la longitud de la pista es suficiente para no tener que usarlos",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando estemos en una alta presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando haya atmósfera estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando haya viento fuerte o racheado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "93. ¿Cuál es el factor de carga que tenemos durante el vuelo recto y nivelado?",
        opciones: [
            {
                textoRespuesta: "-1G",
                isCorrect: false
            },
            {
                textoRespuesta: "1G",
                isCorrect: true
            },
            {
                textoRespuesta: "1’5G",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende del peso de la aeronave",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. ¿En cuál de las siguientes situaciones se alargará la carrera de despegue?",
        opciones: [
            {
                textoRespuesta: "En gran altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "En un día con altas temperaturas",
                isCorrect: false
            },
            {
                textoRespuesta: "En una pista con pendiente positiva",
                isCorrect: false
            },
            {
                textoRespuesta: "En todas las anteriores se alargará la carrera",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "95. Mientras no se supere la velocidad de maniobra, el avión podrá entrar en pérdida antes de experimentar un aumento en el factor de carga que exceda su carga límite.",
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
        titulo: "96. Las marcas de nuestro anemómetro son Vs0=50, Vs1=70, Vfe=100, Vno=150, Vne=180. ¿En cuál de las siguientes velocidades podríamos tanto usar flaps como no hacerlo?",
        opciones: [
            {
                textoRespuesta: "80",
                isCorrect: true
            },
            {
                textoRespuesta: "55",
                isCorrect: false
            },
            {
                textoRespuesta: "110",
                isCorrect: false
            },
            {
                textoRespuesta: "170",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Cuando el bastón esté en la “caseta de perro” y la bola centrada:",
        opciones: [
            {
                textoRespuesta: "Estamos haciendo un viraje con una inclinación de 60º",
                isCorrect: false
            },
            {
                textoRespuesta: "Estaremos virando a 1º por segundo",
                isCorrect: false
            },
            {
                textoRespuesta: "Estaremos realizando un viraje coordinado",
                isCorrect: true
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Aunque debamos seguir las instrucciones del fabricante, una forma de hacer el chequeo prevuelo para evitar que se nos pase algo es:",
        opciones: [
            {
                textoRespuesta: "Realizando nosotros mismo una lista antes de empezar",
                isCorrect: false
            },
            {
                textoRespuesta: "Empezar por el morro y dar una vuelta completa por la derecha",
                isCorrect: true
            },
            {
                textoRespuesta: "Empezar por la cola y dar una vuelta completa por la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "Empezando por el morro y dar una vuelta completa por la izquierda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. ¿Cuándo tendremos que irnos al aire si antes ha aterrizado un avión de grandes dimensiones en la pista?",
        opciones: [
            {
                textoRespuesta: "Justo antes del punto en el que el otro puso las ruedas",
                isCorrect: false
            },
            {
                textoRespuesta: "Después del punto en el que el otro puso las ruedas",
                isCorrect: true
            },
            {
                textoRespuesta: "Bastante antes del punto en el que el otro puso las ruedas",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Si estamos en aproximación y notamos que algo no va bien respecto al aterrizaje:",
        opciones: [
            {
                textoRespuesta: "Será mejor hacer un motor y al aire",
                isCorrect: true
            },
            {
                textoRespuesta: "Aterrizaremos de todas formas",
                isCorrect: false
            },
            {
                textoRespuesta: "Cortaremos motor y continuaremos con el aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentaremos la potencia para aterrizar cuanto antes",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;