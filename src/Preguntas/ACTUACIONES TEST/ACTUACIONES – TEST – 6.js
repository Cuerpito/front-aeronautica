const preguntas = [
    {
        titulo: "1. Si volamos en una zona de altas presiones:",
        opciones: [
            {
                textoRespuesta: "El anemómetro marca que volamos más bajo de lo que realmente estamos.",
                isCorrect: false
            },
            {
                textoRespuesta: "El altímetro marca que volamos más alto de lo que realmente estamos.",
                isCorrect: false
            },
            {
                textoRespuesta: "El altímetro marca que volamos más bajo de lo que realmente estamos.",
                isCorrect: true
            },
            {
                textoRespuesta: "El altímetro marca el mismo nivel de vuelo que en un día con atmósfera estándar.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. Cerca de donde volamos observamos una cadena montañosa a la que atraviesa el viento con gran intensidad. ¿Qué debemos tener en cuenta?",
        opciones: [
            {
                textoRespuesta: "Que debemos evitar volar a sotavento porque es probable que encontremos turbulencia mecánica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que debemos evitar volar a barlovento porque es probable que encontremos turbulencia mecánica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que debemos evitar volar a sotavento porque es probable que encontremos turbulencia orográfica.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que debemos evitar volar a barlovento porque es probable que encontremos turbulencia orográfica.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. ¿Cómo afecta la posición del centro de gravedad a las actuaciones de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Un centro de gravedad muy adelantado será más peligroso que si estuviera retrasado, pues dificulta la recuperación de la pérdida.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un centro de gravedad muy retrasado será más peligroso que si estuviera adelantado, pues compromete el despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un centro de gravedad muy adelantado será más peligroso que si estuviera retrasado, pues compromete el despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un centro de gravedad muy retrasado será más peligroso que si estuviera adelantado, pues dificulta la recuperación de la pérdida.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "4. ¿Qué marcará el altímetro si en vuelo pasamos de una zona de alta presión a una de baja?",
        opciones: [
            {
                textoRespuesta: "Seguirá marcando lo mismo, pero nosotros ascenderemos, por lo que la lectura indicará que vamos más bajo de lo que en realidad vamos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Empezará a marcar mayor altura aunque nosotros no ascendamos, por lo que la lectura indicará que vamos más alto de lo que realmente vamos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Seguirá marcando lo mismo, pero nosotros descenderemos, por lo que la lectura indicará que vamos más alto de lo que en realidad vamos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Empezará a marcar menor altura aunque nosotros no descendamos, por lo que la lectura indicará que vamos más bajo de lo que realmente vamos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Las aeronaves tienen certificados unos pesos máximos estructurales que son:",
        opciones: [
            {
                textoRespuesta: "El peso máximo al despegue y peso máximo sin combustible en los depósitos de las alas.",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso máximo al despegue, peso máximo al aterrizaje, peso máximo en vacío y peso máximo sin combustible en los depósitos de las alas.",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso máximo al despegue y peso máximo al aterrizaje.",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso máximo al despegue, peso máximo al aterrizaje y peso máximo sin combustible en los depósitos de las alas.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "6. En las tablas o gráficos en los que se detalla la pista necesaria para el aterrizaje de un avión se proporcionan dos informaciones, que son:",
        opciones: [
            {
                textoRespuesta: "Carrera en tierra desde que la aeronave pone las ruedas en el suelo y la distancia desde el punto en el que el avión sobrevuele 75 pies de altura sobre la pista.",
                isCorrect: false
            },
            {
                textoRespuesta: "Carrera en tierra desde que la aeronave pone las ruedas en el suelo y la distancia desde el punto en el que el avión sobrevuele 75 metros de altura sobre la pista.",
                isCorrect: false
            },
            {
                textoRespuesta: "Carrera en tierra desde que la aeronave pone las ruedas en el suelo y la distancia desde el punto en el que el avión sobrevuele 50 metros de altura sobre la pista.",
                isCorrect: false
            },
            {
                textoRespuesta: "Carrera en tierra desde que la aeronave pone las ruedas en el suelo y la distancia desde el punto en el que el avión sobrevuele 50 pies de altura sobre la pista.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "7. ¿De qué forma influyen las turbulencias en las actuaciones de un avión?",
        opciones: [
            {
                textoRespuesta: "Disminuyen el factor de carga y por tanto aumenta la velocidad de pérdida del avión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyen el factor de carga y por tanto también disminuye la velocidad de pérdida del avión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentan el factor de carga y por tanto disminuye la velocidad de pérdida del avión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentan el factor de carga y por tanto también aumenta la velocidad de pérdida del avión.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "8. El uso de flaps en despegue:",
        opciones: [
            {
                textoRespuesta: "Nos permite irnos al aire a mayor velocidad pero aumenta la resistencia, por lo que tendremos que usar mayor potencia de motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos permite irnos al aire a una menor velocidad y además disminuye la resistencia, por lo que también podremos usar menor potencia de motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos permite irnos al aire a una menor velocidad pero aumenta la resistencia, por lo que tendremos que usar mayor potencia de motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Nos permite irnos al aire a una menor velocidad y no tiene influencia sobre la resistencia al avance.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Normalmente, los aeródromos situados a gran altitud de densidad:",
        opciones: [
            {
                textoRespuesta: "Tienen pistas más largas, ya que los aviones necesitarán longitudes superiores para poder despegar debido a la baja densidad del aire.",
                isCorrect: true
            },
            {
                textoRespuesta: "Tienen pistas más cortas, ya que los aviones no necesitarán demasiada longitud para despegar debido a la alta densidad del aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tienen pistas más largas, ya que los aviones necesitarán longitudes superiores para poder despegar debido a la baja presión del aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tienen longitudes de pista iguales a las de cualquier otro aeródromo porque la altitud de densidad no determina las actuaciones del avión en despegues.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. La mejor forma de controlar las actuaciones del avión en aproximación y aterrizaje es:",
        opciones: [
            {
                textoRespuesta: "Ir calculando la velocidad según las referencias visuales, atendiendo a cómo “pasan” esas referencias.",
                isCorrect: false
            },
            {
                textoRespuesta: "Manteniendo la TAS según el manual de vuelo de nuestra aeronave y una posición del avión muy estabilizada.",
                isCorrect: false
            },
            {
                textoRespuesta: "Manteniendo la GS según el manual de vuelo de nuestra aeronave y una posición del avión muy estabilizada.",
                isCorrect: false
            },
            {
                textoRespuesta: "Manteniendo la IAS según el manual de vuelo de nuestra aeronave y una posición del avión muy estabilizada.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "11. ¿De qué forma afecta la pendiente de una pista a las actuaciones del avión en despegues y aterrizajes?",
        opciones: [
            {
                textoRespuesta: "Una pendiente negativa acorta la carrera de despegue y una pendiente positiva acorta la de aterrizaje.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una pendiente negativa acorta la carrera de aterrizaje y una pendiente positiva acorta la de despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una pendiente negativa alarga la carrera de despegue y una pendiente positiva alarga la de aterrizaje.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una pendiente negativa alarga tanto la carrera de despegue como la de aterrizaje, y una pendiente positiva las acorta.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. La longitud de pista necesaria para despegar será menor cuando:",
        opciones: [
            {
                textoRespuesta: "La pista tenga pendiente positiva y la altitud de densidad sea menor.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista tenga pendiente negativa y la altitud de densidad sea menor.",
                isCorrect: true
            },
            {
                textoRespuesta: "La pista tenga pendiente negativa y la altitud de densidad sea mayor.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista tenga pendiente positiva y la altitud de densidad sea mayor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. El alcance de una aeronave hace referencia a:",
        opciones: [
            {
                textoRespuesta: "La velocidad indicada máxima a la que puede ir en vuelo de crucero.",
                isCorrect: false
            },
            {
                textoRespuesta: "La distancia que es capaz de recorrer volando a velocidad de crucero en línea recta.",
                isCorrect: true
            },
            {
                textoRespuesta: "El punto más alejado al que puede llegar una aeronave en el caso de que tenga que regresar a su punto de despegue inicial.",
                isCorrect: false
            },
            {
                textoRespuesta: "La distancia que es capaz de recorrer desde que despega en un campo hasta que aterriza.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. ¿Cuál es la velocidad de mejor ángulo de ascenso?",
        opciones: [
            {
                textoRespuesta: "Vy o la velocidad idónea para conseguir la mayor altura en el menor tiempo posible.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vx o la velocidad idónea para ascender lo más alto posible en la menor distancia horizontal.",
                isCorrect: true
            },
            {
                textoRespuesta: "Vy o la velocidad idónea para ascender lo más alto posible en la menor distancia horizontal.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vx o la velocidad idónea para conseguir la mayor altura en el menor tiempo posible.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. ¿Cómo afecta la dirección del viento a la velocidad indicada o IAS?",
        opciones: [
            {
                textoRespuesta: "Con viento en cara el anemómetro marcará una IAS mayor, pero el viento en cola no le afectará.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con viento en cara el anemómetro marcará una IAS mayor y con viento en cola, una IAS menor.",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento no afecta a la IAS, ya que el anemómetro indica las velocidades relativas del avión en la masa de aire.",
                isCorrect: true
            },
            {
                textoRespuesta: "Con viento en cara el anemómetro marcará una IAS menor y con viento en cola, una IAS mayor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. En la pista de un aeródromo, a la misma presión, baja la temperatura. ¿Qué ocurre?",
        opciones: [
            {
                textoRespuesta: "Aumenta la densidad del aire, por lo que también aumenta la altitud de densidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la densidad del aire, por lo que también disminuye la altitud de densidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la densidad del aire, por lo que disminuye la altitud de densidad.",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye la densidad del aire, por lo que aumenta la altitud de densidad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. ¿A qué llamamos actuaciones de un avión?",
        opciones: [
            {
                textoRespuesta: "Al comportamiento que éste tiene en aquellas situaciones específicas para las que ha sido diseñado, teniendo en cuenta que el avión ha sido certificado según la atmósfera estándar.",
                isCorrect: true
            },
            {
                textoRespuesta: "Al comportamiento que éste tiene en situaciones de emergencia y urgencia, teniendo en cuenta que el avión ha sido certificado según la atmósfera estándar.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la capacidad que presenta una aeronave para volar en situaciones extremas como un gran factor de carga, gran altitud de densidad o fuertes componentes de viento cruzado, entre otras.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al comportamiento que éste tiene en aquellas situaciones específicas para las que ha sido diseñado, teniendo en cuenta que el avión no ha sido certificado según la atmósfera estándar.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. ¿Qué efectos produce el uso de los flaps en las actuaciones del avión durante el despegue?",
        opciones: [
            {
                textoRespuesta: "Acortará la carrera de despegue y aumentará el ángulo de ascenso, aunque debido al aumento de resistencia necesitaremos usar mayor potencia de motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Acortará la carrera de despegue y aumentará el ángulo de ascenso, y debido a la disminución de resistencia necesitaremos usar menor potencia de motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Acortará la carrera de despegue y disminuirá el ángulo de ascenso, aunque debido al aumento de resistencia necesitaremos usar mayor potencia de motor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Alargará la carrera de despegue y disminuirá el ángulo de ascenso, aunque debido al aumento de resistencia necesitaremos usar mayor potencia de motor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. ¿En cuál de las siguientes situaciones es más peligroso volar cerca de zonas montañosas?",
        opciones: [
            {
                textoRespuesta: "Volando a barlovento cuando el viento viene de forma perpendicular a la cadena montañosa a una velocidad igual o superior a 20 nudos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Volando a sotavento cuando el viento viene de forma paralela a la cadena montañosa a una velocidad igual o superior a 20 nudos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Volando a sotavento cuando el viento viene de forma perpendicular a la cadena montañosa a una velocidad igual o superior a 20 nudos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Volando a sotavento cuando el viento viene de forma perpendicular a la cadena montañosa a una velocidad igual o inferior a 20 nudos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. Vamos a aterrizar en una pista corta y nos damos cuenta de que vamos un poco altos. ¿De qué forma podemos aumentar nuestro ángulo de descenso para llegar a la pista?",
        opciones: [
            {
                textoRespuesta: "Disminuyendo el ángulo de ataque, así perderemos sustentación y alcanzaremos antes la pista.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentando el ángulo de ataque y la velocidad, así descenderemos más rápido y alcanzaremos antes la pista.",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando mayor calado de flaps, así aumentaremos nuestro ángulo de descenso y alcanzaremos la pista a menor velocidad.",
                isCorrect: true
            },
            {
                textoRespuesta: "Usando menor calado de flaps, así aumentaremos nuestro ángulo de descenso y alcanzaremos la pista a menor velocidad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. ¿En cuál de los siguientes casos no se verán disminuidas las actuaciones de un avión?",
        opciones: [
            {
                textoRespuesta: "Un día cálido a nivel del mar, con baja presión y poca humedad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día frío a nivel del mar, con alta presión y poca humedad.",
                isCorrect: true
            },
            {
                textoRespuesta: "Un día frío a nivel del mar, con baja presión y poca humedad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día cálido a nivel del mar, con alta presión y poca humedad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. ¿Cuál de las siguientes situaciones disminuirá más la capacidad de ascenso de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Una elevada altitud de densidad, alta presión y turbulencias.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una elevada altitud de densidad, alta humedad y turbulencias.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una elevada altitud de presión, alta densidad y turbulencias.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una elevada altitud de densidad, poca humedad y turbulencias.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. En despegue, debemos tener en cuenta que una vez que abandonamos el efecto suelo:",
        opciones: [
            {
                textoRespuesta: "Para mantener la velocidad hay que aumentar al ángulo de ataque y para mantener la sustentación hay que aumentar la potencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Para aumentar la sustentación tenemos que disminuir el ángulo de ataque y para mantener la velocidad hay que aumentar la potencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Para mantener la misma sustentación tenemos que disminuir el ángulo de ataque y para mantener la velocidad hay que aumentar la potencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Para mantener la misma sustentación tenemos que aumentar el ángulo de ataque y para mantener la velocidad hay que aumentar la potencia.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "24. ¿Cuál de las siguientes pistas será peor para las actuaciones de una aeronave en despegue?",
        opciones: [
            {
                textoRespuesta: "Una pista de hierba alta con pendiente positiva.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una pista de hierba corta con pendiente negativa.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una pista asfaltada con pendiente negativa.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una pista de hierba alta con pendiente negativa.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. Los pesos máximos estructurales certificados para las aeronaves:",
        opciones: [
            {
                textoRespuesta: "No deben sobrepasarse, aunque existen unos márgenes de seguridad para asegurar que si se hace, la resistencia estructural no se vea afectada.",
                isCorrect: false
            },
            {
                textoRespuesta: "No deben sobrepasarse en ningún caso, pues aunque haya previstos unos márgenes de seguridad, la resistencia estructural podría verse afectada.",
                isCorrect: true
            },
            {
                textoRespuesta: "No deben sobrepasarse a menos que lo apruebe el comandante, pues aunque haya previstos unos márgenes de seguridad, la resistencia estructural podría verse afectada.",
                isCorrect: false
            },
            {
                textoRespuesta: "No deben sobrepasarse en ningún caso, pues no hay previstos unos márgenes de seguridad y la resistencia estructural se vería afectada.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. Tras haber despegado, abandonamos el circuito de tráfico del aeródromo pero tenemos que seguir ascendiendo. ¿Qué velocidad usaremos?",
        opciones: [
            {
                textoRespuesta: "La velocidad de mejor régimen de ascenso hasta superar el nivel de transición, en España establecido a unos 6.000 pies de altura.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad normal de ascenso, que es la que permite una adecuada refrigeración del motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad de mejor ángulo de ascenso hasta superar el nivel de transición, en España establecido a unos 6.000 pies de altura.",
                isCorrect: false
            },
            {
                textoRespuesta: "Podremos usar cualquiera de las tres velocidades de ascenso hasta alcanzar el nivel de vuelo deseado, en función de las necesidades que tengamos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. A velocidad de crucero, ¿cómo se distribuirán las resistencias de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Presentará mucha resistencia tanto parásita como inducida.",
                isCorrect: false
            },
            {
                textoRespuesta: "Presentará poca resistencia parásita y mucha inducida.",
                isCorrect: false
            },
            {
                textoRespuesta: "Presentará mucha resistencia parásita y poca inducida.",
                isCorrect: true
            },
            {
                textoRespuesta: "Presentará poca resistencia tanto parásita como inducida.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. ¿Cuál es el efecto que produce sobre las actuaciones de la aeronave un aumento de la temperatura?",
        opciones: [
            {
                textoRespuesta: "Disminuye la altitud de densidad, así que alarga la carrera de despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la altitud de densidad, así que alarga la carrera de despegue.",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la altitud de densidad, así que acorta la carrera de despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la altitud de densidad, así que acorta la carrera de despegue.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. Tenemos que aterrizar en una pista corta, por lo que debemos extremar ciertas precauciones. ¿Cuál será la mejor forma de hacerlo?",
        opciones: [
            {
                textoRespuesta: "Aterrizando con viento en cara y usando flaps durante la aproximación, lo que nos permitirá aterrizar a una velocidad mayor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizando con viento en cara y usando flaps durante la aproximación, lo que nos permitirá aterrizar a una velocidad menor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Aterrizando con viento en cola y usando flaps durante la aproximación, lo que nos permitirá aterrizar a una velocidad menor.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizando con viento en cara y sin uso flaps durante la aproximación, lo que nos permitirá aterrizar a una velocidad menor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Normalmente se intenta que las pistas no tengan pendiente, pero no siempre es posible. En caso de que exista una diferencia de elevación entre sus cabeceras, debemos tener en cuenta que:",
        opciones: [
            {
                textoRespuesta: "Prácticamente no tendrá influencia sobre las actuaciones de la aeronave, por lo que no lo tendremos en cuenta.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista con pendiente negativa alarga la carrea de despegue y acorta la de aterrizaje.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista con pendiente negativa acorta la carrera de despegue y alarga la de aterrizaje.",
                isCorrect: true
            },
            {
                textoRespuesta: "La pista con pendiente positiva acorta la carrera de despegue y alarga la de aterrizaje.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. Indique en cuál de los siguientes casos será menor la resistencia parásita producida por la aeronave:",
        opciones: [
            {
                textoRespuesta: "Cuando vuele a menor velocidad y con configuración limpia.",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando vuele a mayor velocidad y con configuración limpia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando vuele a menor velocidad y con configuración sucia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando vuele a mayor velocidad y con configuración sucia.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. ¿Sobre qué eje de la aeronave actúa un centro de gravedad muy adelantado o retrasado?",
        opciones: [
            {
                textoRespuesta: "Sobre el eje longitudinal, provocando un movimiento de alabeo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sobre el eje lateral, provocando un movimiento de cabeceo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Sobre el eje lateral, provocando un movimiento de alabeo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sobre el eje longitudinal, provocando un movimiento de cabeceo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Si vamos a aterrizar en una pista en la que sabemos que acaba de despegar un avión de grandes características, ¿qué precaución debemos tomar?",
        opciones: [
            {
                textoRespuesta: "Debemos aterrizar bastante después del punto en el que el otro avión se fue al aire, para evitar las turbulencias originadas en la punta de sus alas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos aterrizar bastante antes del punto en el que el otro avión se fue al aire, para evitar las turbulencias originadas en la punta de sus alas.",
                isCorrect: true
            },
            {
                textoRespuesta: "Debemos aterrizar en el mismo punto en que el otro avión se fue al aire, para evitar las turbulencias originadas en la punta de sus alas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos aterrizar bastante antes del punto en el que el otro avión se fue al aire, para evitar las turbulencias originadas en el encastre de sus alas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. ¿Cómo afectará una elevada altitud de densidad en las actuaciones de despegue y ascenso de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Alargará la carrera de despegue y aumentará el ángulo de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Acortará la carrera de despegue y aumentará el ángulo de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Acortará la carrera de despegue y disminuirá el ángulo de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Alargará la carrera de despegue y disminuirá el ángulo de ascenso.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. Se despega con viento en cara y no con viento en cola porque:",
        opciones: [
            {
                textoRespuesta: "El viento en cola no afecta al ángulo de ascenso pero alarga considerablemente la carrera de despegue, por lo que alcanzaremos los obstáculos a menor altura, al revés que con el viento en cara.",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento en cola acorta la carrera de despegue pero disminuye el ángulo de ascenso, por lo que alcanzaremos los obstáculos a menor altura, al revés que con el viento en cara.",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento en cola alarga considerablemente la carrera de despegue y disminuye el ángulo de ascenso, por lo que alcanzaremos los obstáculos a menor altura, al revés que con el viento en cara.",
                isCorrect: true
            },
            {
                textoRespuesta: "El viento en cola no afecta a la carrera de despegue pero sí disminuye el ángulo de ascenso, por lo que alcanzaremos los obstáculos a menor altura, al revés que con el viento en cara.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Estamos en un aeródromo que cuenta con las pistas 13/31 y 12/30. Con un viento de 315º, ¿qué ocurre si utilizamos la pista 13?",
        opciones: [
            {
                textoRespuesta: "Tendremos viento en cola, así que se alargará nuestra carrera de despegue y disminuirá el ángulo de ascenso.",
                isCorrect: true
            },
            {
                textoRespuesta: "Tendremos viento en cola, así que se alargará nuestra carrera de despegue y aumentará el ángulo de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendremos viento en cara, así que se alargará nuestra carrera de despegue y disminuirá el ángulo de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendremos viento en cola, así que se acortará nuestra carrera de despegue y aumentará el ángulo de ascenso.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. La forma habitual de expresar la posición del centro de gravedad de una aeronave es la siguiente:",
        opciones: [
            {
                textoRespuesta: "Se expresa en pulgadas, comenzando a contar desde una línea de referencia llamada Fulcrum, o también en % de la cuerda aerodinámica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se expresa en centímetros, comenzando a contar desde una línea de referencia llamada Datum, o también en % de la cuerda aerodinámica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se expresa en %, comenzando a contar desde una línea de referencia llamada Datum, o en pulgadas desde el comienzo de la cuerda aerodinámica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se expresa en pulgadas, comenzando a contar desde una línea de referencia llamada Datum, o también en % de la cuerda aerodinámica.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "38. ¿Cuál es la relación que hay entre la densidad del aire y las actuaciones de una aeronave?",
        opciones: [
            {
                textoRespuesta: "La influencia que la densidad del aire ejerce sobre la sustentación y las actuaciones de la aeronave es insignificante y por lo tanto no se tiene en cuenta.",
                isCorrect: false
            },
            {
                textoRespuesta: "La densidad del aire es uno de los factores que influyen en la sustentación del ala, por lo que a mayor densidad, menor sustentación.",
                isCorrect: false
            },
            {
                textoRespuesta: "La densidad del aire es uno de los factores que influyen en la sustentación del ala, por lo que a mayor densidad, mayor sustentación.",
                isCorrect: true
            },
            {
                textoRespuesta: "La densidad del aire es uno de los factores que influyen en la sustentación, pero solo si va acompañado de un cambio en la presión atmosférica.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Si aumentamos el peso de una aeronave, ¿qué ocurrirá en el despegue?",
        opciones: [
            {
                textoRespuesta: "Que necesitará mayor ángulo de ataque para despegar, por lo que también va a necesitar mayor longitud de pista.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que necesitará la máxima deflexión de flaps para irse al aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que necesitará mayor velocidad para irse al aire con un mismo ángulo de ataque, por lo que también va a necesitar mayor longitud de pista.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que necesitará mayor velocidad y mayor ángulo de ataque para irse al aire, por lo que también va a necesitar mayor longitud de pista.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. La velocidad mínima de vuelo es:",
        opciones: [
            {
                textoRespuesta: "La velocidad más alta a la que puede volar una aeronave sin entrar en pérdida.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad más baja a la que puede volar una aeronave en vuelo de crucero.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad más baja a la que puede volar una aeronave sin entrar en pérdida.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad a la que se consigue mayor alcance de la aeronave en vuelo de crucero.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. En aterrizaje, cuando estemos bajo el efecto suelo:",
        opciones: [
            {
                textoRespuesta: "Para mantener la misma sustentación deberemos disminuir el ángulo de ataque.",
                isCorrect: true
            },
            {
                textoRespuesta: "Para mantener la misma sustentación deberemos aumentar el ángulo de ataque.",
                isCorrect: false
            },
            {
                textoRespuesta: "Para mantener la misma sustentación deberemos aumentar la potencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Para aumentar la sustentación deberemos disminuir el ángulo de ataque.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. ¿Cuál es el momento de utilizar la velocidad de mejor ángulo de ascenso?",
        opciones: [
            {
                textoRespuesta: "Inmediatamente después del despegue y hasta haber superado todos los obstáculos de las proximidades.",
                isCorrect: true
            },
            {
                textoRespuesta: "Inmediatamente después del despegue y hasta abandonar el circuito de tráfico.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una vez superados todos los obstáculos de las proximidades y hasta abandonar el circuito de tráfico.",
                isCorrect: false
            },
            {
                textoRespuesta: "Inmediatamente después del despegue y hasta alcanzar la altitud deseada.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. En cuanto a la mezcla de aire y combustible en las actuaciones de la aeronave en descenso, hay que tener la precaución de:",
        opciones: [
            {
                textoRespuesta: "Empobrecer la mezcla en la altitud recomendada.",
                isCorrect: false
            },
            {
                textoRespuesta: "Enriquecer la mezcla en la altitud recomendada.",
                isCorrect: true
            },
            {
                textoRespuesta: "Comprobar que no llevamos la mezcla estequiométrica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Comprobar que no se enriquece.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. ¿Cuál es la altitud más importante para tener en cuenta, sobre todo en despegues, para las actuaciones de la aeronave?",
        opciones: [
            {
                textoRespuesta: "La altitud de presión.",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud indicada.",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la que hayamos calado en la ventanilla de Kollsman de nuestro altímetro.",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud de densidad.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. Si en la pista de un aeródromo disminuye la temperatura pero la presión se mantiene constante, ¿cómo afectaría a las actuaciones de una aeronave?",
        opciones: [
            {
                textoRespuesta: "Disminuiría la densidad del aire y por tanto se acortaría la carrera de despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentaría la densidad del aire y por tanto se acortaría la carrera de despegue.",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentaría la densidad del aire y por tanto se alargaría la carrera de despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuiría la densidad del aire y por tanto se alargaría la carrera de despegue.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. ¿Cuáles de los siguientes factores alargan la carrera de despegue de una aeronave?",
        opciones: [
            {
                textoRespuesta: "Gran altitud de densidad, viento en cara, pista de tierra con pendiente positiva y mayor peso de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Gran altitud de densidad, viento en cola, pista de tierra con pendiente positiva y mayor peso de la aeronave.",
                isCorrect: true
            },
            {
                textoRespuesta: "Gran altitud de densidad, viento en cola, pista de tierra con pendiente negativa y mayor peso de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Gran altitud de densidad, viento en cola, pista asfaltada con pendiente negativa y mayor peso de la aeronave.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. ¿Cómo afecta un aumento del peso de la aeronave a la pérdida?",
        opciones: [
            {
                textoRespuesta: "Al aumentar el peso, el avión entrará en pérdida con el mismo ángulo de ataque pero a una velocidad IAS menor.",
                isCorrect: false
            },
            {
                textoRespuesta: "El aumento del peso no afectará a la entrada en pérdida, que se dará con el mismo ángulo de peso y la misma velocidad IAS.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al aumentar el peso, el avión entrará en pérdida con el mismo ángulo de ataque pero a una velocidad IAS mayor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Al aumentar el peso, el avión entrará en pérdida a la misma velocidad IAS pero con un ángulo de ataque mayor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. Tras el despegue, acabamos de superar todos los obstáculos de las proximidades del aeródromo. ¿Qué velocidad de ascenso debemos llevar?",
        opciones: [
            {
                textoRespuesta: "La velocidad de mejor régimen de ascenso o Vx.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de mejor ángulo de ascenso o Vx.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de mejor ángulo de ascenso o Vy.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de mejor régimen de ascenso o Vy.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "49. Una aeronave con un peso de 200kg al despegue presenta una carga alar de 12’5 kg/m2. ¿Qué superficie alar tiene?",
        opciones: [
            {
                textoRespuesta: "Una superficie de 14m2.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una superficie de 18m2.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una superficie de 12’5m2.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una superficie de 16m2.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. La altitud de densidad es:",
        opciones: [
            {
                textoRespuesta: "La altitud de presión corregida por la densidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud de presión corregida por la temperatura real.",
                isCorrect: true
            },
            {
                textoRespuesta: "La altitud que nos da el anemómetro, corregida por la temperatura.",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud que nos da el anemómetro, corregida por la densidad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. En una pista a una altitud de 1.000 pies, una aeronave despega con una IAS de 60mn, ¿a qué IAS se irá al aire a una altitud de 2.000 pies, donde la densidad será menor?",
        opciones: [
            {
                textoRespuesta: "A 80mn.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 60mn.",
                isCorrect: true
            },
            {
                textoRespuesta: "A 55mn.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 100mn.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. La velocidad de ascenso con la que subimos lo más alto en el menor tiempo posible es:",
        opciones: [
            {
                textoRespuesta: "La velocidad de mejor ángulo de ascenso o Vx.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de mejor régimen de ascenso o Vy.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad de mejor régimen de ascenso o Vx.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de mejor ángulo de ascenso o Vy.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. En vuelo de crucero, ¿cómo podemos aumentar el alcance de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Aumentando la velocidad, de modo que invertiremos menos tiempo en el viaje y por lo tanto el alcance será muy superior.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentando la potencia del motor, de modo que invertiremos menos tiempo en el viaje y el alcance será muy superior.",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyendo la potencia del motor, de modo que invertiremos mayor tiempo en el viaje pero el alcance será muy superior.",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuyendo la potencia del motor, de modo que invertiremos menos tiempo en el viaje pero el alcance será muy superior.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. El peso máximo al despegue es:",
        opciones: [
            {
                textoRespuesta: "El peso mínimo certificado para iniciar el despegue que está directamente relacionado con la máxima sustentación que puede crear el ala.",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso máximo certificado para iniciar el despegue que está directamente relacionado con la máxima sustentación que puede crear el ala.",
                isCorrect: true
            },
            {
                textoRespuesta: "El peso máximo certificado para iniciar el despegue que está directamente relacionado con la mínima sustentación que puede crear el ala.",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso máximo certificado para iniciar el despegue que está directamente relacionado con el factor de carga que podrá soportar en vuelo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. A temperatura constante, disminuye la presión en la pista de un aeródromo. ¿Qué ocurre con las actuaciones de una aeronave en despegue?",
        opciones: [
            {
                textoRespuesta: "La carrera de despegue será menor debido a que aumenta la altitud de densidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "La carrera de despegue será mayor debido a que disminuye la altitud de densidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "La carrera de despegue será menor debido a que disminuye la altitud de densidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "La carrera de despegue será mayor debido a que aumenta la altitud de densidad.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "56. Indique cuál de las siguientes afirmaciones respecto a la turbulencia generada por las alas de los aviones es correcta:",
        opciones: [
            {
                textoRespuesta: "La turbulencia originada es proporcional al peso de la aeronave y comienza a originarse en el momento en que la primera rueda del tren se va al aire.",
                isCorrect: true
            },
            {
                textoRespuesta: "La turbulencia originada no es proporcional al peso de la aeronave y comienza a originarse en el momento en que la primera rueda del tren se va al aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "La turbulencia originada es proporcional al peso de la aeronave y comienza a originarse en el momento en que ésta empieza a rodar por la pista.",
                isCorrect: false
            },
            {
                textoRespuesta: "La turbulencia originada es proporcional a la sustentación y comienza a originarse en el momento en que la primera rueda del tren se va al aire.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. El uso de flaps está indicado para:",
        opciones: [
            {
                textoRespuesta: "Aterrizajes y despegues, especialmente cuando hay obstáculos cerca, ascensos y descensos en vuelo; solo se debe evitar utilizarlos en situación de viento fuerte y racheado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizajes y despegues, especialmente cuando hay obstáculos cerca; solo se debe evitar utilizarlos en situación de viento totalmente cruzado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizajes y despegues, únicamente cuando haya obstáculos en las proximidades de la pista.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizajes y despegues, especialmente cuando hay obstáculos cerca; solo se debe evitar utilizarlos en situación de viento fuerte y racheado.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "58. Tenemos que realizar un despegue después de que un avión de grandes características haya aterrizado en la misma pista. Si tenemos viento en calma, ¿cómo lo llevaremos a cabo?",
        opciones: [
            {
                textoRespuesta: "Nos iremos al aire antes del punto en el que el otro avión puso las ruedas sobre la pista.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos iremos al aire después del punto en el que el otro avión se detuvo, momento en el que deja de generar remolinos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos iremos al aire después del punto en el que el otro avión puso las ruedas sobre la pista, momento en que deja de generar remolinos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Nos iremos al aire después del punto en el que el otro avión puso las ruedas sobre la pista, momento en que los remolinos generados disminuyen considerablemente su intensidad hasta que el avión se detiene y desaparecen.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. En cuanto a la posición del centro de gravedad de la aeronave:",
        opciones: [
            {
                textoRespuesta: "Está certificado en un punto exacto medido desde la línea de referencia Datum, y no puede oscilar en ningún caso o las actuaciones de la aeronave se verán comprometidas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay unos márgenes dentro de los que puede oscilar pero las actuaciones de la aeronave se verán comprometidas siempre si no se encuentra en el punto exacto en el que debe estar.",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay unos márgenes dentro de los que puede oscilar sin que las actuaciones de la aeronave se vean comprometidas.",
                isCorrect: true
            },
            {
                textoRespuesta: "La configuración de la aeronave hace casi imposible que podamos modificar la situación del centro de gravedad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. Debido a la influencia de la densidad sobre las actuaciones de la aeronave, es importante saber calcular la altitud de densidad del aeródromo del que vamos a despegar. ¿Qué datos nos debe aportar la Torre de Control para que podamos hacerlo?",
        opciones: [
            {
                textoRespuesta: "La temperatura, la presión y la humedad.",
                isCorrect: false
            },
            {
                textoRespuesta: "La temperatura y la presión.",
                isCorrect: true
            },
            {
                textoRespuesta: "La temperatura, la presión y el viento con dirección e intensidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "La temperatura, la presión, la humedad y el viento con dirección e intensidad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. Las turbulencias originadas por grandes aviones pueden llegar a alcanzar hasta 90 nudos, así que pueden ser muy peligrosas para un ULM. Si antes que nosotros ha despegado uno y tenemos viento en calma, ¿cómo debemos actuar?",
        opciones: [
            {
                textoRespuesta: "Tenemos que asegurarnos de irnos al aire en el mismo punto en que lo hizo el avión pesado, para no cruzar la turbulencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos que asegurarnos de irnos al aire después del punto en que lo hizo el avión pesado, para no cruzar la turbulencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos que asegurarnos de irnos al aire con la velocidad suficiente para que la turbulencia no afecte a la estructura del ULM.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos que asegurarnos de irnos al aire antes del punto en que lo hizo el avión pesado, para no cruzar la turbulencia.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "62. En un mismo aeródromo, ¿en cuál de los siguientes momentos necesitaríamos menos pista para despegar?",
        opciones: [
            {
                textoRespuesta: "Un día de verano en el que haya una borrasca.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno en el que haya un anticiclón.",
                isCorrect: true
            },
            {
                textoRespuesta: "Un día de invierno en el que haya una borrasca.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno en el que la presión sea 1.013 milibares.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. De las siguientes situaciones que se pueden dar en una pista, ¿cuál será más desfavorable para las actuaciones de una aeronave?",
        opciones: [
            {
                textoRespuesta: "Gran altitud de densidad, baja temperatura y baja humedad relativa.",
                isCorrect: false
            },
            {
                textoRespuesta: "Gran altitud de densidad, alta temperatura y baja humedad relativa.",
                isCorrect: false
            },
            {
                textoRespuesta: "Baja altitud de densidad, alta temperatura y alta humedad relativa.",
                isCorrect: false
            },
            {
                textoRespuesta: "Gran altitud de densidad, alta temperatura y alta humedad relativa.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "64. Hay factores y situaciones que afectan a las actuaciones de las aeronaves y las dificulta. De las siguientes situaciones, ¿cuál sería más peligrosa a la hora de realizar un despegue?",
        opciones: [
            {
                textoRespuesta: "Tener viento en cola, un avión con mucho peso, pista de grava con pendiente negativa y obstáculos cercanos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tener viento en cola, un avión con mucho peso, pista de asfalto con pendiente negativa y obstáculos cercanos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tener viento en cara, un avión con mucho peso, pista de grava con pendiente positiva y obstáculos cercanos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tener viento en cola, un avión con mucho peso, pista de grava con pendiente positiva y obstáculos cercanos.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "65. El efecto suelo puede producirse tanto en aterrizajes como en despegues. ¿Qué ocurre cuando salimos de él al despegar?",
        opciones: [
            {
                textoRespuesta: "Que aumenta la resistencia inducida y disminuye el rendimiento de la aeronave.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que aumentan tanto la resistencia inducida como el rendimiento de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que aumenta la resistencia parásita y disminuye el rendimiento de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que disminuye la resistencia inducida y aumenta el rendimiento de la aeronave.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. ¿Qué ocurre durante el efecto suelo?",
        opciones: [
            {
                textoRespuesta: "Que aumenta la sustentación y disminuye la resistencia inducida.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que aumenta la sustentación y disminuye la resistencia parásita.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que disminuye la sustentación pero también la resistencia inducida.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que aumenta la sustentación y disminuyen la resistencia parásita y la inducida.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. ¿En cuál de los siguientes casos aumenta la velocidad de pérdida de una aeronave?",
        opciones: [
            {
                textoRespuesta: "Al aumentar el peso y/o el factor de carga, al realizar un viraje y en vuelo recto y nivelado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al aumentar el peso y/o el factor de carga y al realizar un viraje.",
                isCorrect: true
            },
            {
                textoRespuesta: "Al aumentar el peso y/o el factor de carga, al realizar un viraje y con deflexión de flaps.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al disminuir el peso y/o el factor de carga y al realizar un viraje.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. La velocidad de aproximación adecuada en función del ajuste de flaps:",
        opciones: [
            {
                textoRespuesta: "Viene recogida en el manual de vuelo, indicada como TAS y será siempre la misma, independientemente de la altitud de densidad y la temperatura.",
                isCorrect: false
            },
            {
                textoRespuesta: "Viene recogida en el manual de vuelo, indicada como IAS y será siempre la misma, independientemente de la altitud de densidad y la temperatura.",
                isCorrect: true
            },
            {
                textoRespuesta: "No viene recogida en el manual de vuelo ya que dependerá de la altitud de densidad de la pista y de la temperatura.",
                isCorrect: false
            },
            {
                textoRespuesta: "Viene recogida en el manual de vuelo, indicada como IAS, acompañada de unas tablas para ajustarla en función de la altitud de densidad y la temperatura.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. Si tenemos que realizar un ascenso durante un tiempo prolongado, ¿qué velocidad utilizaremos?",
        opciones: [
            {
                textoRespuesta: "La velocidad normal de ascenso, porque aunque puede sobrecalentar el motor, consume menos combustible.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad de mejor régimen de ascenso, porque conseguiremos subir en el menor tiempo posible y así ahorraremos combustible.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad normal de ascenso, porque así evitaremos un sobrecalentamiento del motor.",
                isCorrect: true
            },
            {
                textoRespuesta: "La velocidad normal de ascenso, porque así evitaremos la adecuada refrigeración del motor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. ¿En cuál de los siguientes casos será mayor nuestro ángulo de ascenso durante un despegue?",
        opciones: [
            {
                textoRespuesta: "Sin deflexión de flaps y con viento en cara.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con deflexión de flaps y viento en cara.",
                isCorrect: true
            },
            {
                textoRespuesta: "Con deflexión de flaps y viento en calma.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con deflexión de flaps y viento en cola.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. Una aeronave con un centro de gravedad muy adelantado:",
        opciones: [
            {
                textoRespuesta: "Es peligroso porque alargará la carrera de despegue y el timón de profundidad solo será efectivo a gran velocidad.",
                isCorrect: true
            },
            {
                textoRespuesta: "Es peligroso porque alargará la carrera de despegue y el timón de dirección solo será efectivo a gran velocidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Alargará la carrera de despegue pero no será peligroso siempre que tengamos la longitud de pista suficiente.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es peligroso porque alargará la carrera de despegue y los tres mandos primarios solo serán efectivos a gran velocidad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. Si no podemos comprobar el centrado del avión, ¿cuál es la norma recomendada que deberíamos seguir?",
        opciones: [
            {
                textoRespuesta: "Intentar compensar las cargas pesadas y ligeras a lo largo de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Colocar las cargas más ligeras adelante y los pasajeros y las más pesadas detrás.",
                isCorrect: false
            },
            {
                textoRespuesta: "Colocar los pasajeros y las cargas más pesadas adelante, y las más ligeras detrás.",
                isCorrect: true
            },
            {
                textoRespuesta: "No podemos cargar el avión si no comprobamos previamente su centrado.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. Las actuaciones de un ULM se calculan según:",
        opciones: [
            {
                textoRespuesta: "El peso en vacío de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso máximo al despegue.",
                isCorrect: true
            },
            {
                textoRespuesta: "El peso mínimo al despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso máximo sin combustible en los depósitos de las alas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. ¿Qué hay que tener en cuenta para el despegue en un aeródromo que se encuentre en una zona muy elevada?",
        opciones: [
            {
                textoRespuesta: "Que en la pista habrá poca densidad, por lo que se acortará la carrera de despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que en la pista habrá poca presión atmosférica, por lo que se alargará la carrera de despegue.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que en la pista habrá poca densidad, por lo que se alargará la carrera de despegue.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que en la pista habrá mucha densidad, por lo que se alargará la carrera de despegue.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. La altitud de densidad se puede definir como:",
        opciones: [
            {
                textoRespuesta: "La altitud que indica el altímetro cuando el ajuste utilizado es de 1.013 milibares.",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud que indica el altímetro cuando lo ajustamos con la presión de un punto corregida al nivel del mar.",
                isCorrect: false
            },
            {
                textoRespuesta: "La altitud de presión corregida por el efecto de la temperatura cuando la atmósfera no es estándar.",
                isCorrect: true
            },
            {
                textoRespuesta: "La altitud de presión corregida por el efecto de la temperatura cuando la atmósfera es estándar.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. ¿Cuál es la definición de una “recogida”?",
        opciones: [
            {
                textoRespuesta: "La velocidad necesaria para realizar una toma de contacto en las mejores condiciones, en un aterrizaje.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tras un despegue, el momento en que dejamos de usar los dispositivos hipersustentadores y recogemos el tren de aterrizaje, es decir, cuando el avión pasa a tener una configuración limpia.",
                isCorrect: false
            },
            {
                textoRespuesta: "El momento en que realizamos una toma de contacto con la pista, en un aterrizaje.",
                isCorrect: false
            },
            {
                textoRespuesta: "La nivelación y planeo necesarios para realizar una toma de contacto en las mejores condiciones, en un aterrizaje.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "77. ¿Cuál es la carga alar de una aeronave con peso al despegue de 180kg y una superficie alar de 15m2?",
        opciones: [
            {
                textoRespuesta: "12 kg/m2.",
                isCorrect: true
            },
            {
                textoRespuesta: "15 kg/m2.",
                isCorrect: false
            },
            {
                textoRespuesta: "18 kg/m2.",
                isCorrect: false
            },
            {
                textoRespuesta: "13 kg/m2.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. ¿Qué es la deriva?",
        opciones: [
            {
                textoRespuesta: "La trayectoria de vuelo seguida por una aeronave sin viento.",
                isCorrect: false
            },
            {
                textoRespuesta: "La cantidad de grados que nos desvía el viento de una ruta determinada.",
                isCorrect: true
            },
            {
                textoRespuesta: "La distancia horizontal medida en millas náuticas que nos desvía el viento de una ruta determinada.",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección de una aeronave que no sigue una ruta previamente determinada.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. ¿En qué momentos del vuelo podemos hacer uso de los flaps?",
        opciones: [
            {
                textoRespuesta: "En aproximación con aterrizaje y despegues, cuando su posición no podrá ser inferior a los 15º.",
                isCorrect: false
            },
            {
                textoRespuesta: "En aproximación con aterrizaje y despegues, cuando su posición no podrá ser superior a los 15º.",
                isCorrect: true
            },
            {
                textoRespuesta: "En aproximación con aterrizaje, ascensos, descensos y despegues, cuando su posición no podrá ser superior a los 15º.",
                isCorrect: false
            },
            {
                textoRespuesta: "En aproximación con aterrizaje, ascensos, descensos y despegues, cuando su posición no podrá ser inferior a los 15º.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. El uso de flaps en despegues:",
        opciones: [
            {
                textoRespuesta: "Acorta la carrera de despegue y disminuye el ángulo de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Alarga la carrera de despegue debido a que genera mayor resistencia pero aumenta el ángulo de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Acorta la carrera de despegue y aumenta el ángulo de ascenso.",
                isCorrect: true
            },
            {
                textoRespuesta: "Alarga la carrera de despegue debido a que genera mayor resistencia y aumenta el ángulo de ascenso.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. ¿Qué son los controles primarios de una aeronave?",
        opciones: [
            {
                textoRespuesta: "Los elementos encargados de modificar el perfil aerodinámico, consiguiendo que produzcan sustentación a velocidades menores a las normales para las que está calculado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los elementos encargados de aliviar al piloto sobre los mandos de control del avión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las superficies aerodinámicas encargadas de provocar de forma controlada desplazamientos del avión sobre sus tres ejes de referencia.",
                isCorrect: true
            },
            {
                textoRespuesta: "Las superficies aerodinámicas encargadas de provocar de forma controlada desplazamientos del avión sobre su eje longitudinal.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Si volamos de una zona de bajas presiones a una de altas, ¿qué marcará el altímetro?",
        opciones: [
            {
                textoRespuesta: "Marcará lo mismo, aunque nosotros ascenderemos, por lo que la lectura indicará una altitud inferior a la que realmente llevamos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Marcará que vamos ascendiendo, aunque en realidad la aeronave se mantendrá al mismo nivel de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Marcará lo mismo, aunque nosotros descenderemos, por lo que la lectura indicará una altitud superior a la que realmente llevamos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Marcará que vamos descendiendo, aunque en realidad la aeronave se mantendrá al mismo nivel de vuelo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. En aterrizajes, el uso de flaps permite:",
        opciones: [
            {
                textoRespuesta: "Acortar la carrera de aterrizaje debido a que lo puede realizar a menor velocidad y aumentar el ángulo de descenso.",
                isCorrect: true
            },
            {
                textoRespuesta: "Acortar la carrera de aterrizaje debido a que lo puede realizar a mayor velocidad y aumentar el ángulo de descenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Acortar la carrera de aterrizaje debido a que lo puede realizar a menor velocidad y disminuir el ángulo de descenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Alargar la carrera de aterrizaje debido a que lo puede realizar a mayor velocidad y disminuir el ángulo de descenso.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. ¿Cómo definiríamos la velocidad de mejor régimen ascensional?",
        opciones: [
            {
                textoRespuesta: "Como la velocidad idónea para ascender lo más alto posible en la menor distancia horizontal.",
                isCorrect: false
            },
            {
                textoRespuesta: "Como la velocidad idónea para conseguir la mayor altura durante el mayor tiempo posible.",
                isCorrect: false
            },
            {
                textoRespuesta: "Como la velocidad idónea para conseguir la mayor altura en el menor tiempo posible.",
                isCorrect: true
            },
            {
                textoRespuesta: "Como la velocidad idónea para ascender y ser mantenida durante largos periodos de tiempo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. Al aumentar la velocidad de la aeronave, ¿cómo actúan las resistencias?",
        opciones: [
            {
                textoRespuesta: "Tanto la resistencia parásita como la inducida aumentan.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la resistencia inducida y disminuye la parásita.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tanto la resistencia parásita como la inducida disminuyen.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la resistencia parásita y disminuye la inducida.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "86. En un aterrizaje, ¿cómo llamamos a la nivelación y planeo necesarios para realizar una toma de contacto en las mejores condiciones?",
        opciones: [
            {
                textoRespuesta: "Rotación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Recogida.",
                isCorrect: true
            },
            {
                textoRespuesta: "Planeo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Senda de planeo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. La velocidad normal de ascenso no es ni la que mejor régimen presenta ni mejor ángulo. Sin embargo, tiene una ventaja principal. ¿Cuál es?",
        opciones: [
            {
                textoRespuesta: "Que proporciona una refrigeración adecuada al motor, por eso se usa para ascensos prolongados.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que proporciona una refrigeración adecuada al motor, aunque no por ello debemos usarla durante un tiempo prolongado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que mientras la usamos el motor está a plena potencia y la velocidad sobre el suelo es mayor que con el resto de velocidades de ascenso, por lo que reduciremos el tiempo de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que proporciona una lubricación adecuada al motor, por eso se usa para ascensos prolongados.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. En un aeródromo con las pistas 36/18 y un viento de 012º, ¿qué pista tendremos que usar si queremos aumentar nuestro ángulo de descenso para el aterrizaje?",
        opciones: [
            {
                textoRespuesta: "La pista 18.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista es indiferente para el ángulo, que solo podremos aumentarlo con la correcta deflexión de flaps.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista es indiferente para el ángulo, que solo podremos aumentarlo con una velocidad adecuada.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista 36.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "89. ¿Qué factores son los que influyen sobre la resistencia parásita que genera una aeronave y de qué forma lo hacen?",
        opciones: [
            {
                textoRespuesta: "La resistencia parásita aumenta al aumentar la velocidad y disminuye al disminuir la densidad del aire.",
                isCorrect: true
            },
            {
                textoRespuesta: "La resistencia parásita disminuye al aumentar la velocidad y al disminuir la densidad del aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "La resistencia parásita aumenta al aumentar la velocidad y al disminuir la densidad del aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "La resistencia parásita disminuye al aumentar la velocidad y aumenta al disminuir la densidad del aire.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. Las turbulencias afectan a las actuaciones del avión. En aterrizajes y despegues, especialmente, hay un tipo de ellas con las que debemos tener mucha precaución. ¿Cuáles son?",
        opciones: [
            {
                textoRespuesta: "Las originadas por el despegue y aterrizaje de grandes aviones, que crean unos torbellinos aerodinámicos en la punta de sus alas debido a la sustentación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Las originadas por el despegue y aterrizaje de grandes aviones, que crean unos torbellinos aerodinámicos en el encastre de sus alas debido a la sustentación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las originadas por el despegue y aterrizaje de grandes aviones, que crean unos torbellinos aerodinámicos en la punta de sus alas debido a las resistencias inducida y parásita.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las originadas por el despegue y aterrizaje de grandes aviones, que crean unos torbellinos aerodinámicos en la punta de sus alas debido a la sustentación, desde el momento en que empieza la carrera de despegue y hasta que el avión se para.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. Los despegues siempre deben realizarse:",
        opciones: [
            {
                textoRespuesta: "Con viento en cola, ya que el viento en cara nos acerca a los obstáculos y puede ser peligroso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con viento en calma, ya que el viento en cara o en cola nos acerca a los obstáculos y puede ser peligroso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Indistintamente con viento en cara o en cola, ya que lo peligroso para el despegue es el viento cruzado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con viento en cara, ya que el viento en cola nos acerca a los obstáculos y puede ser peligroso.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "92. ¿De qué forma afecta el viento a las actuaciones del avión durante el despegue?",
        opciones: [
            {
                textoRespuesta: "El viento en cara reduce la carrera de despegue, mientras que el viento en cola la alarga.",
                isCorrect: true
            },
            {
                textoRespuesta: "El viento en cara alarga la carrera de despegue, mientras que el viento en cola la reduce.",
                isCorrect: false
            },
            {
                textoRespuesta: "La carrera de despegue no se ve afectada por el viento en cara o en cola, sino por la densidad del aire.",
                isCorrect: false
            },
            {
                textoRespuesta: "El viento siempre alarga la carrera de despegue, independientemente de que lo tengamos en cara o en cola.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. En un mismo aeródromo, ¿en cuál de los siguientes momentos necesitaríamos más pista para despegar?",
        opciones: [
            {
                textoRespuesta: "Un día de verano en el que haya un anticiclón.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno en el que haya un anticiclón.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de invierno en el que haya una borrasca.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un día de verano en el que haya una borrasca.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "94. Vamos a despegar de un aeródromo en el que hay obstáculos en sus proximidades. ¿En qué orden usaremos las diferentes velocidades de ascenso?",
        opciones: [
            {
                textoRespuesta: "Primero velocidad de mejor ángulo de ascenso, luego velocidad de mejor régimen de ascenso y por último velocidad normal de ascenso.",
                isCorrect: true
            },
            {
                textoRespuesta: "Primero velocidad de mejor régimen de ascenso, luego velocidad de mejor ángulo de ascenso y por último velocidad normal de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Primero velocidad normal de ascenso, luego velocidad de mejor régimen de ascenso y por último velocidad de mejor ángulo de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Primero velocidad de mejor ángulo de ascenso, luego velocidad normal de ascenso y por último velocidad de mejor régimen de ascenso.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. Si aumentamos el peso de la aeronave, ¿qué efectos tendrá sobre el despegue?",
        opciones: [
            {
                textoRespuesta: "Necesitaremos más pista para despegar, aumentará la velocidad de pérdida y se reducirá la pendiente de ascenso.",
                isCorrect: true
            },
            {
                textoRespuesta: "Necesitaremos más pista para despegar, aumentará la velocidad de pérdida y aumentará la pendiente de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Necesitaremos más pista para despegar, disminuirá la velocidad de pérdida y se reducirá la pendiente de ascenso.",
                isCorrect: false
            },
            {
                textoRespuesta: "Necesitaremos más pista para despegar, disminuirá la velocidad de pérdida y aumentará la pendiente de ascenso.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. La definición de los dispositivos hipersustentadores corresponde con la siguiente:",
        opciones: [
            {
                textoRespuesta: "Aquellos elementos destinados a modificar las superficies de los mandos secundarios, consiguiendo que produzcan sustentación a unas velocidades menores a las normales para las que está calculado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aquellos elementos destinados a modificar las superficies de los mandos primarios, consiguiendo que produzcan sustentación a unas velocidades menores a las normales para las que está calculado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aquellos elementos destinados a modificar el perfil aerodinámico, consiguiendo que produzcan sustentación a unas velocidades mayores a las normales para las que está calculado.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aquellos elementos destinados a modificar el perfil aerodinámico, consiguiendo que produzcan sustentación a unas velocidades menores a las normales para las que está calculado.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "97. De los siguientes casos, indique cuál sería más peligroso porque aumentaría la velocidad de entrada en pérdida:",
        opciones: [
            {
                textoRespuesta: "Un gran peso de la aeronave y un centro de gravedad adelantado volando en una zona de turbulencias moderadas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un gran peso de la aeronave y un centro de gravedad retrasado volando en una zona de turbulencias moderadas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un gran peso de la aeronave y un centro de gravedad retrasado volando en una zona de turbulencias fuertes.",
                isCorrect: true
            },
            {
                textoRespuesta: "Un gran peso de la aeronave y un centro de gravedad adelantado volando en una zona de turbulencias fuertes.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. De las siguientes situaciones, ¿en cuál de ellas necesitaríamos una longitud de pista mayor?",
        opciones: [
            {
                textoRespuesta: "Con poca altitud de densidad y una pista con pendiente negativa.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con gran altitud de densidad y una pista con pendiente negativa.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con poca altitud de densidad y una pista con pendiente positiva.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con gran altitud de densidad y una pista con pendiente positiva.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "99. En el manual de vuelo de la aeronave viene recogida la velocidad adecuada de aproximación. Teniendo esto en cuenta, indique cuál de las siguientes afirmaciones es correcta:",
        opciones: [
            {
                textoRespuesta: "Viene recogida la velocidad indicada, que será siempre la misma, aunque con una temperatura mayor y una presión inferior que en un día ISA, la TAS y la GS serán mayores que la IAS.",
                isCorrect: true
            },
            {
                textoRespuesta: "Viene recogida la velocidad indicada, que será siempre la misma, aunque con una temperatura mayor y una presión inferior que en un día ISA, la TAS y la GS serán menores que la IAS.",
                isCorrect: false
            },
            {
                textoRespuesta: "Viene recogida la velocidad indicada y hay que tener en cuenta que con una temperatura mayor y una presión inferior que en un día ISA, la IAS será mayor que la que recoge el manual.",
                isCorrect: false
            },
            {
                textoRespuesta: "Viene recogida la velocidad verdadera, que será siempre la misma, aunque con una temperatura mayor y una presión inferior que en un día ISA, la IAS y la GS serán mayores que la TAS.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. En una pista con viento cruzado, vamos a despegar detrás de un avión de grandes características. En este caso debemos planificar nuestro despegue de forma que:",
        opciones: [
            {
                textoRespuesta: "Nos vayamos al aire después del punto en que lo hizo el otro avión y virar hacia el lado hacia el que va el viento.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos vayamos al aire antes del punto en que lo hizo el otro avión y virar hacia el lado hacia el que va el viento.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos vayamos al aire después del punto en que lo hizo el otro avión y virar hacia el lado del que viene el viento.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos vayamos al aire antes del punto en que lo hizo el otro avión y virar hacia el lado del que viene el viento.",
                isCorrect: true
            }
        ]
    }
];

export default preguntas;