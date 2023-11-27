const preguntas = [
    {
        titulo: "1. La forma más común de medir las distancias en la navegación aérea es:",
        opciones: [
            {
                textoRespuesta: "Usando la milla náutica, que corresponde a un grado de arco de meridiano.",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando la medida internacional que se basa en metros y kilómetros.",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando la milla náutica, que corresponde a un segundo de arco de meridiano.",
                isCorrect: false
            },
            {
                textoRespuesta: "Usando la milla náutica, que corresponde a un minuto de arco de meridiano.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "2. En una carta con una escala de 1:1.000.000, ¿a qué distancia corresponden 5mm?",
        opciones: [
            {
                textoRespuesta: "A 0’5 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 10 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 5 km.",
                isCorrect: true
            },
            {
                textoRespuesta: "A 2’5 km.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. “Trayectoria de vuelo perpendicular a la pista de aterrizaje, a partir del final del tramo viento en cola”. ¿A qué tramo del circuito de tránsito de aeródromo se refiere esta definición?",
        opciones: [
            {
                textoRespuesta: "A tramo final.",
                isCorrect: false
            },
            {
                textoRespuesta: "A tramo viento en cara.",
                isCorrect: false
            },
            {
                textoRespuesta: "A tramo viento en cola.",
                isCorrect: false
            },
            {
                textoRespuesta: "A tramo base.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "4. ¿A qué medida equivale una milla náutica?",
        opciones: [
            {
                textoRespuesta: "A 1’852 km o a la longitud de un minuto de arco de meridiano.",
                isCorrect: true
            },
            {
                textoRespuesta: "A 1’582 km o a la longitud de un grado de arco de meridiano.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 1’852 km o a la longitud de un grado de arco de meridiano.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 1’528 km o la longitud de un minuto de arco de meridiano.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Debido al error de inclinación de la brújula y teniendo en cuenta que navegamos en el hemisferio norte, si efectuamos un viraje hacia 180º, debemos tener en cuenta que:",
        opciones: [
            {
                textoRespuesta: "Debemos parar el viraje en 190º si lo hacemos por la derecha o en 170º si lo hacemos por la izquierda, pues estaremos rumbo Sur aunque la brújula no lo indique.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos parar el viraje en 210º si lo hacemos por la izquierda o en 150º si lo hacemos por la derecha, pues estaremos rumbo Sur aunque la brújula no lo indique.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos parar el viraje en 210º si lo hacemos por la derecha o en 150º si lo hacemos por la izquierda, pues estaremos rumbo Sur aunque la brújula no lo indique.",
                isCorrect: true
            },
            {
                textoRespuesta: "El error de inclinación de la brújula no afecta en los virajes sino en los ascensos y descensos, por las líneas de flujo magnético.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. El ángulo hacia el lado del viento que habría que aplicar al curso deseado para obtener el rumbo de la aeronave corresponde:",
        opciones: [
            {
                textoRespuesta: "Al ángulo de deriva.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al ángulo de rumbo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al ángulo de corrección de rumbo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Al ángulo de corrección de deriva.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "7. La dirección en que apunta el eje longitudinal de una aeronave, expresada generalmente en grados respecto al norte es:",
        opciones: [
            {
                textoRespuesta: "La trayectoria.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo.",
                isCorrect: true
            },
            {
                textoRespuesta: "La deriva.",
                isCorrect: false
            },
            {
                textoRespuesta: "La ruta.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. La definición de “latitud” es:",
        opciones: [
            {
                textoRespuesta: "El punto formado por un ángulo, el centro de la Tierra y el Ecuador.",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo formado por un punto, el centro de la Tierra y el Meridiano 0 o de Greenwich.",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo formado por un punto, el centro de la Tierra y el Ecuador.",
                isCorrect: true
            },
            {
                textoRespuesta: "El punto formado por un ángulo, el centro de la Tierra y el Meridiano 0 o de Greenwich.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Los círculos máximos son aquellos que:",
        opciones: [
            {
                textoRespuesta: "Dividen la esfera de la Tierra en dos mitades iguales, como el Ecuador y los paralelos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Dividen la esfera de la Tierra en dos mitades iguales, como el Ecuador y los meridianos.",
                isCorrect: true
            },
            {
                textoRespuesta: "No dividen la esfera de la Tierra en partes iguales, como son los paralelos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Dividen la esfera de la Tierra en partes iguales, como son los paralelos y los meridianos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Si en una carta aeronáutica encontramos un recuadro con las letras GCP, ¿Qué debemos tener en cuenta?",
        opciones: [
            {
                textoRespuesta: "Que se trata de una zona peligrosa en Ceuta o Melilla.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que se trata de una zona prohibida en Ceuta o Melilla.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que se trata de una zona peligrosa en las Islas Canarias.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que se trata de una zona prohibida en las Islas Canarias.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "11. Si nos encontramos en el hemisferio Norte, volando con rumbo 90º y queremos virar completamente hacia el Sur, ¿cuándo debemos sacar el viraje?",
        opciones: [
            {
                textoRespuesta: "Cuando la brújula indique 180º.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la brújula indique 150º.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la brújula indique 210º.",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando la brújula indique 185º.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. El error de desviación que presentan las brújulas es debido:",
        opciones: [
            {
                textoRespuesta: "A los cambios de magnetismo de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la inclinación de la aeronave durante los virajes, especialmente acusado cuando el avión está orientado al Norte o al Sur.",
                isCorrect: false
            },
            {
                textoRespuesta: "A los campos magnéticos originados en sus proximidades por un objeto metálico o cualquier instrumento eléctrico.",
                isCorrect: true
            },
            {
                textoRespuesta: "Al ángulo formado por la diferencia entre el Norte geográfico y el magnético, que no coinciden.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. De todas las proyecciones cónicas, la más importante es:",
        opciones: [
            {
                textoRespuesta: "Mercator.",
                isCorrect: false
            },
            {
                textoRespuesta: "Conforme de Lambert.",
                isCorrect: true
            },
            {
                textoRespuesta: "Azimutal.",
                isCorrect: false
            },
            {
                textoRespuesta: "Estereográfica y Polar.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. Indique cuál de las siguientes calificaciones que podemos encontrar en una carta aeronáutica indicaría una zona peligrosa sobre las Islas Baleares:",
        opciones: [
            {
                textoRespuesta: "IBD.",
                isCorrect: false
            },
            {
                textoRespuesta: "IBP.",
                isCorrect: false
            },
            {
                textoRespuesta: "LED.",
                isCorrect: true
            },
            {
                textoRespuesta: "GED.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. El Equipo Medidor de Distancia o DME:",
        opciones: [
            {
                textoRespuesta: "Nos da la distancia en pies que llevamos respecto al suelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos da la distancia en metros que llevamos respecto al suelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos da la distancia a la que estamos de una estación en millas náuticas.",
                isCorrect: true
            },
            {
                textoRespuesta: "Nos da la distancia a la que estamos de otra aeronave en millas náuticas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. El error que presenta la brújula que hace que tengamos que parar un viraje antes o después de que indique el rumbo deseado se llama:",
        opciones: [
            {
                textoRespuesta: "Error de inclinación.",
                isCorrect: true
            },
            {
                textoRespuesta: "Desviación magnética.",
                isCorrect: false
            },
            {
                textoRespuesta: "Error de aceleración.",
                isCorrect: false
            },
            {
                textoRespuesta: "Declinación magnética.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Debido a la imanación de algunos elementos de la aeronave se pueden producir interferencias que afectan a la indicación de la brújula con relación al norte magnético. Este error es conocido como:",
        opciones: [
            {
                textoRespuesta: "Declinación",
                isCorrect: false
            },
            {
                textoRespuesta: "Inclinación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Variación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Desviación.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "18. ¿Cómo podríamos definir la variación o declinación de la brújula de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Es la diferencia medida en grados que hay entre el norte geográfico y el magnético.",
                isCorrect: true
            },
            {
                textoRespuesta: "Es el ángulo medido en grados que forma el vector fuerza del campo magnético con el plano horizontal.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la diferencia medida en coordenadas que hay entre el norte geográfico y el magnético.",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la diferencia medida según la escala de la carta que hay entre el norte geográfico y el magnético.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. El número de husos horarios en los que se encuentra dividida la Tierra es de:",
        opciones: [
            {
                textoRespuesta: "12, de 15 grados cada uno.",
                isCorrect: false
            },
            {
                textoRespuesta: "12, de 15 minutos cada uno.",
                isCorrect: false
            },
            {
                textoRespuesta: "24, de 15 minutos cada uno.",
                isCorrect: false
            },
            {
                textoRespuesta: "24, de 15 grados cada uno.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "20. La ruta de la aeronave es:",
        opciones: [
            {
                textoRespuesta: "La dirección horizontal de su movimiento proyectada sobre la superficie de la tierra y es geográfica cuando su referencia es el norte geográfico y verdadera cuando lo es el norte magnético.",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección hacia la cual apunta su eje longitudinal y es verdadera cuando su referencia es el norte geográfico y magnética cuando lo es el norte magnético.",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección horizontal de su movimiento proyectada sobre la superficie de la tierra y es geográfica cuando su referencia es el norte geográfico y magnética cuando lo es el norte magnético.",
                isCorrect: true
            },
            {
                textoRespuesta: "La dirección horizontal de su movimiento cuando no realiza ninguna corrección de viento y es verdadera cuando su referencia es el norte geográfico y magnética cuando lo es el norte magnético.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. ¿Cómo puede ser la declinación magnética?",
        opciones: [
            {
                textoRespuesta: "Puede ser Este si el norte geográfico está a la derecha del magnético u Oeste si está a la izquierda.",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede ser Este si el norte magnético está a la derecha del geográfico u Oeste si está a la izquierda.",
                isCorrect: true
            },
            {
                textoRespuesta: "Puede ser Este si el error de la brújula se da hacia la derecha u Oeste si se da hacia la izquierda.",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede ser Este si el norte magnético está a la izquierda del geográfico u Oeste si está a la derecha.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. La navegación observada es aquella que:",
        opciones: [
            {
                textoRespuesta: "Se basa en el vuelo de la ruta correspondiente con referencia a puntos sobre el terreno.",
                isCorrect: true
            },
            {
                textoRespuesta: "Se basa en la estimación de una posición futura a partir de una posición conocida, a base de rumbo, tiempo y velocidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se basa en la estimación de una posición futura a partir de una posición conocida, a base de rumbo y velocidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se basa en el conjunto de los dos tipos de navegación que son la visual y a la estima.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. Un piloto tienen que saber analizar una carta de navegación e identificar todas las indicaciones. Por ejemplo, ¿con qué símbolo se indicará un aeropuerto civil?",
        opciones: [
            {
                textoRespuesta: "Un círculo con otro círculo dentro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un círculo con otro círculo dentro y cuatro pequeñas líneas en el exterior indicando los puntos cardinales.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un círculo con cuatro pequeñas líneas en el exterior indicando los puntos cardinales.",
                isCorrect: true
            },
            {
                textoRespuesta: "Un círculo con ocho pequeñas líneas en el exterior.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. ¿En qué consisten las proyecciones cilíndricas?",
        opciones: [
            {
                textoRespuesta: "Utiliza un cilindro tangente a la esfera, según un círculo mínimo, y el punto de observación no se sitúa en el centro de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "Utiliza un triángulo tangente a la esfera, según un círculo mínimo, y el punto de observación se sitúa en el centro de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "Utiliza un cilindro tangente a la esfera, según un círculo menor, y el punto de observación se sitúa en el centro de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "Utiliza un cilindro tangente a la esfera, según un círculo máximo, y el punto de observación se sitúa en el centro de la Tierra.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "25. El VOR (Very High Frequency Omni-Directional Range) es:",
        opciones: [
            {
                textoRespuesta: "El sistema de navegación que se usa como red secundaria, complemento del sistema de navegación NDB-ADF.",
                isCorrect: false
            },
            {
                textoRespuesta: "El sistema de navegación más preciso y utilizado en todo el mundo como red primaria.",
                isCorrect: true
            },
            {
                textoRespuesta: "El sistema de navegación más preciso y utilizado en todo el mundo como red secundaria.",
                isCorrect: false
            },
            {
                textoRespuesta: "El sistema de navegación que está reservado para uso militar.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. En una escala 1:500.000, 3 cm corresponden a:",
        opciones: [
            {
                textoRespuesta: "15 km.",
                isCorrect: true
            },
            {
                textoRespuesta: "1’5 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "5 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "3 km.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Si tenemos un rumbo geográfico de 210º, con una declinación de 10ºE y una desviación de 5ºW, ¿cuál es nuestro rumbo magnético?",
        opciones: [
            {
                textoRespuesta: "220º.",
                isCorrect: false
            },
            {
                textoRespuesta: "200º.",
                isCorrect: true
            },
            {
                textoRespuesta: "205º.",
                isCorrect: false
            },
            {
                textoRespuesta: "205º.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. ¿En qué consiste el funcionamiento de la brújula magnética?",
        opciones: [
            {
                textoRespuesta: "En un imán que se orienta según la dirección de las líneas de flujo que surgen de los Polos magnéticos de la Tierra.",
                isCorrect: true
            },
            {
                textoRespuesta: "En un imán que se orienta según la dirección de las líneas de flujo que surgen de los Polos geográficos de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "En un imán que se orienta según la dirección de las líneas de flujo que surgen de los Polos tanto magnéticos como verdaderos de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "En un imán que se orienta según la intensidad de las líneas de flujo que surgen de los Polos geográficos de la Tierra.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. En cuanto a la situación de un lugar exacto en la Tierra, podemos decir que la longitud:",
        opciones: [
            {
                textoRespuesta: "Puede ser este u oeste y es el ángulo formado por un punto, el centro de la Tierra y el Meridiano 0 o de Greenwich.",
                isCorrect: true
            },
            {
                textoRespuesta: "Puede ser norte o sur y es el ángulo formado por un punto, el centro de la Tierra y el Meridiano 0 o de Greenwich.",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede ser este u oeste y es el ángulo formado por un punto, el centro de la Tierra y el Ecuador.",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede ser norte o sur y es el ángulo formado por un punto, el centro de la Tierra y el Ecuador.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. ¿Qué es un ATZ?",
        opciones: [
            {
                textoRespuesta: "Un Área de Control en altura que en España se da a partir de los 1.000 pies.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un Área Terminal de Control que en España se extiende a una distancia de 8 km de radio alrededor de un aeropuerto y 900 metros de alto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una Zona de Tránsito de Aeródromo que en España se extiende a una distancia de 8 km de radio alrededor de un aeropuerto y 900 metros de alto.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una Zona de Control de Aeródromo que en España se extiende a una distancia de 8 km de radio alrededor de un aeropuerto y 900 metros de alto.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. Cuando se lleva a cabo la navegación hay que tener en cuenta los errores que presenta la brújula. Uno de ellos se produce cuando ésta se ve afectada por campos magnéticos que se generan dentro de la aeronave y se conoce como:",
        opciones: [
            {
                textoRespuesta: "La variación.",
                isCorrect: false
            },
            {
                textoRespuesta: "La declinación.",
                isCorrect: false
            },
            {
                textoRespuesta: "El error de posición.",
                isCorrect: false
            },
            {
                textoRespuesta: "La desviación.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. Cuando vayamos a realizar una navegación observada y no sea posible trazar una ruta en línea recta, ¿cómo debemos hacerlo?",
        opciones: [
            {
                textoRespuesta: "Hay que trazar entonces una línea loxodrómica aunque ésta no nos lleve por el camino más corto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay que elegir puntos del terreno que sean muy significativos y fácil de identificar para realizar los cambios de dirección.",
                isCorrect: true
            },
            {
                textoRespuesta: "Hay que dividir la ruta desde el punto de partida en segmentos de unos 10 o 20 minutos de vuelo en los que tendremos que cambiar de dirección.",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay que dividir la ruta desde el punto de partida en segmentos de unos 30 o 40 minutos de vuelo en los que tendremos que cambiar de dirección.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. La declinación magnética es:",
        opciones: [
            {
                textoRespuesta: "La diferencia angular entre el norte geográfico y el norte magnético. Puede ser positivo si el norte geográfico está a la derecha del magnético o negativo si está a la izquierda.",
                isCorrect: false
            },
            {
                textoRespuesta: "La diferencia angular entre el norte geográfico y el norte magnético. Puede ser positivo si el norte magnético está a la derecha del geográfico o negativo si está a la izquierda.",
                isCorrect: false
            },
            {
                textoRespuesta: "La diferencia angular entre el norte geográfico y el norte magnético. Puede ser Este si el norte geográfico está a la derecha del magnético u Oeste si está a la izquierda.",
                isCorrect: false
            },
            {
                textoRespuesta: "La diferencia angular entre el norte geográfico y el norte magnético. Puede ser Este si el norte magnético está a la derecha del geográfico u Oeste si está a la izquierda.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. ¿Cómo se expresa la velocidad en la navegación aérea?",
        opciones: [
            {
                textoRespuesta: "En kilómetros por hora o lo que es lo mismo, en nudos.",
                isCorrect: false
            },
            {
                textoRespuesta: "En millas terrestres por hora o lo que es lo mismo, en nudos.",
                isCorrect: false
            },
            {
                textoRespuesta: "En millas náuticas por hora o lo que es lo mismo, en nudos.",
                isCorrect: true
            },
            {
                textoRespuesta: "En millas náuticas o lo que es lo mismo, en nudos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. Los emisores más frecuentes utilizados en la navegación radioeléctrica son:",
        opciones: [
            {
                textoRespuesta: "El VOR y el NDB.",
                isCorrect: true
            },
            {
                textoRespuesta: "El NDB y ADF.",
                isCorrect: false
            },
            {
                textoRespuesta: "El VOR y el ADF.",
                isCorrect: false
            },
            {
                textoRespuesta: "El VOR, el NDB y el TACAN.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Si para nuestra navegación queremos seguir la distancia más corta entre dos puntos, ¿qué debemos hacer?",
        opciones: [
            {
                textoRespuesta: "Trazar una línea ortodrómica, cuya desventaja es que tendremos que ir variando constantemente nuestro rumbo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Trazar una línea loxodrómica, cuya ventaja es que corta todos los meridianos con el mismo ángulo, por lo que podremos llevar un rumbo constante.",
                isCorrect: false
            },
            {
                textoRespuesta: "Trazar una línea ortodrómica, cuya ventaja es que corta todos los meridianos con el mismo ángulo, por lo que podremos llevar un rumbo constante.",
                isCorrect: false
            },
            {
                textoRespuesta: "Trazar una línea loxodrómica, cuya desventaja es que tendremos que ir variando constantemente nuestro rumbo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. En una carta aeronáutica hay un rectángulo que indica una zona del espacio aéreo restringido con las letras GEP, ¿qué significa?",
        opciones: [
            {
                textoRespuesta: "Que estamos ante una zona peligrosa en la Península Ibérica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que estamos ante una zona prohibida en las Islas Canarias.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que estamos ante una zona prohibida en la Península Ibérica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que estamos ante una zona prohibida en Ceuta o Melilla.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "38. Al planificar la ruta de vuelo hay que seleccionar una serie de puntos de comprobación. Aunque no hay unas reglas específicas para hacerlo, estos puntos deben cumplir una serie de requisitos como:",
        opciones: [
            {
                textoRespuesta: "Deben ser prominentes, fácilmente identificables a cualquier altitud y que se puedan diferenciar de otros elementos cercanos, entre otros aspectos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Deben ser prominentes, tener una altitud mínima de 50 pies y que se puedan diferenciar de otros elementos cercanos, entre otros aspectos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Deben ser prominentes y evitar que sean ciudades, lagos, etc., pues podríamos confundirlos con otros cercanos, entre otros aspectos.",
                isCorrect: false
            },
            {
                textoRespuesta: "No deben ser prominentes pero sí fácilmente identificables y que se puedan diferenciar de otros elementos cercanos, entre otros aspectos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. La radionavegación NDB-ADF tiene una serie de ventajas frente a la emisión de señales VHF, que son:",
        opciones: [
            {
                textoRespuesta: "Que la transmisión de señales no está limitada por la línea de visión y que su alcance, dependiendo de la potencia de emisión, puede ser mucho mayor.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que la transmisión de señales no está limitada por la línea de visión y que no se ve afectado por la línea de costa ni por el efecto de la salida y la puesta del sol.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que no presenta errores en situaciones de tormentas eléctricas y que la transmisión de señales no está limitada por la línea de visión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la transmisión de señales está limitada por la línea de visión y que su alcance, dependiendo de la potencia de emisión, puede ser mucho menor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. El ángulo de deriva de la aeronave se define como:",
        opciones: [
            {
                textoRespuesta: "La ruta real que sigue la aeronave proyectada sobre la superficie terrestre si no realiza ninguna corrección para contrarrestar el viento.",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo formado entre la ruta de la aeronave y el rumbo.",
                isCorrect: true
            },
            {
                textoRespuesta: "El ángulo formado entre la ruta de la aeronave y la trayectoria.",
                isCorrect: false
            },
            {
                textoRespuesta: "La ruta real que sigue la aeronave proyectada sobre la superficie terrestre una vez que realiza las correcciones sobre el viento.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. La recepción de una emisión VOR puede mejorarse:",
        opciones: [
            {
                textoRespuesta: "Disminuyendo la velocidad de la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyendo la altura de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentando la altura de vuelo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentando la velocidad de la aeronave.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. La ortodrómica y la loxodrómica son líneas que unen dos puntos de la esfera terrestre. Aunque son diferentes, hay situaciones en las que coinciden y son iguales, como es en los siguientes casos:",
        opciones: [
            {
                textoRespuesta: "A distancias inferiores a 1.000 millas náuticas, en rumbos exactos Norte o Sur cerca del Meridiano de Greenwich y en rumbos exactos Este u Oeste cerca del Ecuador.",
                isCorrect: false
            },
            {
                textoRespuesta: "A distancias superiores 1.000 millas náuticas, en rumbos exactos Norte o Sur o en rumbos exactos Este u Oeste cerca del Ecuador.",
                isCorrect: false
            },
            {
                textoRespuesta: "A distancias inferiores a 1.000 millas náuticas, en rumbos exactos Norte o Sur o en rumbos exactos Este u Oeste cerca del Ecuador.",
                isCorrect: true
            },
            {
                textoRespuesta: "A distancias inferiores a 1.000 millas náuticas, en rumbos exactos Norte o Sur cerca del Meridiano de Greenwich y en rumbos exactos Este u Oeste.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. El Equipo Medidor de Distancia o DME es:",
        opciones: [
            {
                textoRespuesta: "Un radar secundario que consiste en un emisor-receptor de UHF que proporciona la distancia a la estación expresada en millas náuticas.",
                isCorrect: true
            },
            {
                textoRespuesta: "Un radar primario que consiste en un emisor-receptor de UHF que proporciona la distancia a la estación expresada en millas náuticas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un radar secundario que consiste en un emisor-receptor de VHF que proporciona la distancia a la estación expresada en millas náuticas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un radar secundario que consiste en un emisor-receptor de VHF que proporciona la distancia a la estación expresada en kilómetros.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. La navegación que se realiza utilizando unas estaciones emisoras en tierra que envían ondas eléctricas que detectan los receptores a bordo de la aeronave se llama:",
        opciones: [
            {
                textoRespuesta: "Navegación radiotelefónica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación a estima.",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación por ondas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación radioeléctrica.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. Llevamos un rumbo geográfico de 170º y tenemos una declinación de 7ºW. ¿Cuál es nuestro rumbo magnético?",
        opciones: [
            {
                textoRespuesta: "177º.",
                isCorrect: true
            },
            {
                textoRespuesta: "163º.",
                isCorrect: false
            },
            {
                textoRespuesta: "170º.",
                isCorrect: false
            },
            {
                textoRespuesta: "No podemos saberlo porque nos falta el dato de la desviación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. Las estaciones emisoras NDB:",
        opciones: [
            {
                textoRespuesta: "Forman la red primaria de navegación y emiten una señal no direccional al espacio que es capaz de detectar el equipo ADF a bordo del avión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Forman la red secundaria de navegación y emiten una señal no direccional al espacio que es capaz de detectar el equipo ADF a bordo del avión.",
                isCorrect: true
            },
            {
                textoRespuesta: "Forman la red primaria de navegación y emiten una señal direccional al espacio que es capaz de detectar el equipo ADF a bordo del avión.",
                isCorrect: false
            },
            {
                textoRespuesta: "Forman la red secundaria de navegación y emiten una señal direccional al espacio que es capaz de detectar el equipo ADF a bordo del avión.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. En caso de que nos encontremos perdidos durante la navegación debemos seguir un procedimiento que empieza por:",
        opciones: [
            {
                textoRespuesta: "Realizar un viraje de 360º para intentar encontrar y sobrevolar el último punto de referencia que fue perfectamente identificado y volver a la ruta desde él, realizando la corrección de deriva que sea necesaria para no volver a perdernos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener el rumbo previsto y observar, en un ángulo de uno 25 a 30º, si hay algún accidente significativo que podamos sobrevolar e identificar posteriormente en nuestra carta de navegación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener el rumbo previsto, mirar la hora de sobrevuelo del último punto de referencia y a partir de él, trazar un sector de unos 25 a 30º a cada lado de la ruta prevista para intentar localizar algún accidente del terreno significativo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Establecer contacto con la Torre de Control más próxima, desde donde podrán proporcionarnos un rumbo aproximado para dirigirnos a su estación a través del pulsador del micrófono.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. En un vuelo VFR, ¿quién es responsable de una correcta planificación del vuelo y su ejecución para garantizar que sea seguro?",
        opciones: [
            {
                textoRespuesta: "El jefe de vuelo.",
                isCorrect: false
            },
            {
                textoRespuesta: "El piloto.",
                isCorrect: true
            },
            {
                textoRespuesta: "El controlador aéreo asignado.",
                isCorrect: false
            },
            {
                textoRespuesta: "El copiloto.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. ¿Qué ocurre cuando el avión sobrevuela una emisora de navegación VOR?",
        opciones: [
            {
                textoRespuesta: "Que alcanza la máxima recepción de la señal.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que en ese punto habría que aumentar la altura para recibir mejor la señal.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que en ese punto habría que disminuir la altura para recibir mejor la señal",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la señal tiene dificultades para recibirse.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. Las únicas cartas que son conforme y al mismo tiempo presentan la loxodrómica como una línea recta son:",
        opciones: [
            {
                textoRespuesta: "Las cartas Mercator.",
                isCorrect: true
            },
            {
                textoRespuesta: "Las cartas de Lambert.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las cartas cónicas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las cartas acimutales.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Uno de los elementos que toma en cuenta la navegación es la situación, es decir, el lugar exacto en el que se encuentra la aeronave. ¿Cómo se resuelve ésta?",
        opciones: [
            {
                textoRespuesta: "A través de las coordenadas, que se miden en grados, minutos y segundos y se expresan con la longitud en primer lugar y la latitud en el segundo.",
                isCorrect: false
            },
            {
                textoRespuesta: "A través de las coordenadas, que se miden en grados y minutos y se expresan con la latitud en primer lugar y la longitud en el segundo.",
                isCorrect: false
            },
            {
                textoRespuesta: "A través de las coordenadas, que se miden en grados, minutos y segundos y se expresan con la latitud en primer lugar y la longitud en el segundo.",
                isCorrect: true
            },
            {
                textoRespuesta: "A través de las coordenadas, que se miden en millas náuticas y se expresan con la latitud en primer lugar y la longitud en el segundo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. ¿Qué son los paralelos?",
        opciones: [
            {
                textoRespuesta: "Los círculos máximos que cortan la esfera de la Tierra de forma paralela al Ecuador y que, por tanto, no son todos de igual tamaño.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los círculos menores que cortan la esfera de la Tierra en dos mitades iguales y que son todos del mismo tamaño.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los círculos menores que cortan la esfera de la Tierra de forma paralela al Ecuador y que, por tanto, no son todos de igual tamaño.",
                isCorrect: true
            },
            {
                textoRespuesta: "Los círculos menores que cortan la esfera de la Tierra de forma paralela al Ecuador y que, por tanto, son todos de igual tamaño.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. El rumbo es uno de los aspectos importantes que debemos conocer para llevar a cabo la navegación. Se define como:",
        opciones: [
            {
                textoRespuesta: "La dirección horizontal de un determinado punto de la superficie terrestre con relación a otro y que en una aeronave corresponde a la dirección hacia la cual se dirige.",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección horizontal de un determinado punto de la superficie terrestre con relación a otro y que en una aeronave corresponde a la dirección hacia la cual apunta su eje transversal.",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección horizontal de un determinado punto de la superficie terrestre con relación a otro y que en una aeronave corresponde a la dirección hacia la cual apunta su eje longitudinal.",
                isCorrect: true
            },
            {
                textoRespuesta: "La dirección horizontal de un determinado punto de la superficie terrestre con relación a otro y que en una aeronave corresponde a la trayectoria.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. El equipo a bordo del avión que es capaz de captar la señal enviada desde una estación emisora NDB es:",
        opciones: [
            {
                textoRespuesta: "El VOR.",
                isCorrect: false
            },
            {
                textoRespuesta: "El ADF.",
                isCorrect: true
            },
            {
                textoRespuesta: "Otro NDB.",
                isCorrect: false
            },
            {
                textoRespuesta: "El TACAN.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. ¿De qué forma se especifica en una carta aeronáutica el espacio aéreo restringido?",
        opciones: [
            {
                textoRespuesta: "Con un recuadro y las letras D para una zona Peligrosa, P para una zona Prohibida y R para una zona Restringida.",
                isCorrect: true
            },
            {
                textoRespuesta: "Con un recuadro y clasificadas con las palabras Prohibida, Restringida o Peligrosa.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con un recuadro y las letras P para una zona Peligrosa, D para una zona Prohibida y R para una zona Restringida.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con un recuadro y las letras D para una zona Peligrosa, S para una zona Prohibida y R para una zona Restringida.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. La posición de un punto en el espacio con respecto a otro, sin relación de distancia entre ellos, determinada por el sentido y la línea que los une es:",
        opciones: [
            {
                textoRespuesta: "La dirección.",
                isCorrect: true
            },
            {
                textoRespuesta: "La posición.",
                isCorrect: false
            },
            {
                textoRespuesta: "La ruta.",
                isCorrect: false
            },
            {
                textoRespuesta: "La situación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. ¿Qué es el llamado cono de silencio que se encuentra sobre una emisora?",
        opciones: [
            {
                textoRespuesta: "Una zona en la que es difícil recibir la emisión y su anchura depende de la altura de la antena.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una zona en la que es difícil recibir la emisión y su anchura depende de la altura de vuelo.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una zona en la que es difícil recibir la emisión y su anchura depende de la velocidad a la que volemos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Una zona en la que es difícil recibir la emisión y su altura depende de nuestra altura de vuelo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Una aeronave con una TAS de 190kt realiza el recorrido desde el aeródromo A hasta el B en 1 hora y 15 minutos. ¿Cuánto tardará en hacer el mismo recorrido una aeronave con una TAS de 150kt?",
        opciones: [
            {
                textoRespuesta: "1 hora y 20 minutos.",
                isCorrect: false
            },
            {
                textoRespuesta: "1 hora y 35 minutos.",
                isCorrect: true
            },
            {
                textoRespuesta: "1 hora y 45 minutos.",
                isCorrect: false
            },
            {
                textoRespuesta: "1 hora y 50 minutos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. Cuando navegamos debemos tener en cuenta tanto la ruta como el rumbo. ¿Cuál de las siguientes afirmaciones es correcta?",
        opciones: [
            {
                textoRespuesta: "Aunque ambos se refieren a factores diferentes, en la práctica siempre coinciden.",
                isCorrect: false
            },
            {
                textoRespuesta: "Coincidirán únicamente cuando la variación o declinación magnética sea cero, pues dependen del norte verdadero y del magnético.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ambos se refieren a factores diferentes y nunca coinciden.",
                isCorrect: false
            },
            {
                textoRespuesta: "Coincidirán únicamente en ausencia de viento.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "60. ¿Cómo se indicaría en una carta aeronáutica que hay una zona peligrosa sobre las Islas Canarias?",
        opciones: [
            {
                textoRespuesta: "Con las letras GED.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con las letras GCD.",
                isCorrect: true
            },
            {
                textoRespuesta: "Con las letras LED.",
                isCorrect: false
            },
            {
                textoRespuesta: "Con las letras LEP.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. En la navegación a la estima:",
        opciones: [
            {
                textoRespuesta: "Se pronostica dónde estará la aeronave en el futuro, usando cálculos de rumbo, tiempo y viento.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se pronostica dónde estará la aeronave en el futuro a partir de las referencias visuales sobre el terreno previstas al planificar la ruta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Se pronostica dónde estará la aeronave en el futuro, usando cálculos de rumbo, tiempo y velocidad.",
                isCorrect: true
            },
            {
                textoRespuesta: "Se pronostica dónde estará la aeronave en el futuro, usando cálculos de rumbo, viento y velocidad.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Nos encontramos en el tramo viento en cola del tránsito de un aeródromo y llevamos rumbo 090º. ¿Cuál es la pista en la que vamos a aterrizar?",
        opciones: [
            {
                textoRespuesta: "La 09.",
                isCorrect: false
            },
            {
                textoRespuesta: "La 36.",
                isCorrect: false
            },
            {
                textoRespuesta: "La 27.",
                isCorrect: true
            },
            {
                textoRespuesta: "La 18.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. ¿Qué son los meridianos?",
        opciones: [
            {
                textoRespuesta: "Los círculos máximos que dividen a la esfera terrestre en dos mitades iguales de Norte a Sur y que son infinitos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Los círculos máximos que dividen a la esfera terrestre en dos mitades iguales de Norte a Sur y hay un total de 360.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los círculos menores que dividen a la esfera terrestre en dos mitades iguales de Norte a Sur y hay un total de 360.",
                isCorrect: false
            },
            {
                textoRespuesta: "Los círculos menores que dividen a la esfera terrestre en dos mitades iguales, de Norte a Sur y que son infinitos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. El sistema de radionavegación VOR tiene la ventaja de estar libre de interferencias estáticas. Sin embargo, hay un inconveniente importante que debe ser tenido en cuenta, que es que:",
        opciones: [
            {
                textoRespuesta: "Su alcance queda limitado a la línea visual, pues la señal no puede pasar los obstáculos.",
                isCorrect: true
            },
            {
                textoRespuesta: "Se ve afectado por la línea de costa y por el efecto de la salida y la puesta del sol.",
                isCorrect: false
            },
            {
                textoRespuesta: "La indicación de la dirección proporcionada es de difícil interpretación.",
                isCorrect: false
            },
            {
                textoRespuesta: "En situaciones de tormentas eléctricas presentará errores de orientación, pues la aguja apuntará al núcleo de la tormenta en lugar de hacerlo a la emisora.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. ¿A qué llamamos navegación a estima?",
        opciones: [
            {
                textoRespuesta: "A la estimación o determinación de una posición futura a partir de una posición conocida, a base de dirección, tiempo y velocidad.",
                isCorrect: true
            },
            {
                textoRespuesta: "A la estimación o determinación de una posición futura a partir de una posición conocida, a base de dirección, viento y velocidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la estimación o determinación de la posición de la aeronave a partir de una referencia visual del terreno.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la estimación o determinación de una posición futura a partir de una posición conocida, a base de dirección, viento y tiempo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Un ultraligero con una TAS de 110 nudos, ¿a cuántos kilómetros por hora está volando?",
        opciones: [
            {
                textoRespuesta: "A 212 km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 201 km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 204 km/h.",
                isCorrect: true
            },
            {
                textoRespuesta: "A 198 km/h.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. La brújula presenta algunos errores, entre ellos el de variación o declinación. ¿A qué se debe?",
        opciones: [
            {
                textoRespuesta: "A que el norte geográfico y el verdadero no están en el mismo punto.",
                isCorrect: false
            },
            {
                textoRespuesta: "A que el norte geográfico y el magnético no están en el mismo punto.",
                isCorrect: true
            },
            {
                textoRespuesta: "A los campos magnéticos generados en las proximidades de la brújula y que pueden afectar a su funcionamiento.",
                isCorrect: false
            },
            {
                textoRespuesta: "A que conforme nos acercamos al Polo Norte la aguja imantada de la brújula empezaría a apuntar hacia abajo buscando la línea de flujo magnético.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. ¿Cuáles son las más conocidas cartas cilíndricas?",
        opciones: [
            {
                textoRespuesta: "Las Mercator, que son las únicas que presentan conformidad al mismo tiempo que presentan la ortodrómica o línea de rumbos constantes como una línea recta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las Mercator, que son las únicas que presentan conformidad al mismo tiempo que presentan la loxodrómica o línea de rumbos constantes como una línea recta.",
                isCorrect: true
            },
            {
                textoRespuesta: "Las de Lambert, que son las únicas que presentan conformidad al mismo tiempo que presentan la loxodrómica o línea de rumbos constantes como una línea recta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las Mercator, que son las únicas que presentan conformidad al mismo tiempo que no presentan la loxodrómica o línea de rumbos constantes como una línea recta.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. En un viaje en línea recta, siguiendo un paralelo, nos movemos 2º18’, ¿cuál es la distancia que hemos recorrido?",
        opciones: [
            {
                textoRespuesta: "128 millas náuticas o 237’1 kilómetros.",
                isCorrect: false
            },
            {
                textoRespuesta: "218 millas náuticas o 403’7 kilómetros.",
                isCorrect: false
            },
            {
                textoRespuesta: "308 millas náuticas o 570’4 kilómetros.",
                isCorrect: false
            },
            {
                textoRespuesta: "138 millas náuticas o 255’6 kilómetros.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "70. Estamos en vuelo y llevamos un rumbo de 060º y una TAS de 120kt. El METAR dice que el viento es “06010KT”. Teniendo esto en cuenta, indique cuál de las siguientes afirmaciones es correcta:",
        opciones: [
            {
                textoRespuesta: "Tenemos viento en cara a 10 km/h y por lo tanto nuestra GS es de 110 kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos viento en cola a 10 kt y por lo tanto nuestra IAS es de 130 kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos viento en cola a 10 kt y por lo tanto nuestra GS es de 130 kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos viento en cara a 10 kt y por lo tanto nuestra GS es de 110 kt.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. ¿Qué determina la escala de un mapa o de una carta aeronáutica?",
        opciones: [
            {
                textoRespuesta: "La relación entre el radio de la esfera de referencia de la carta y el radio de la Tierra.",
                isCorrect: true
            },
            {
                textoRespuesta: "La relación entre el diámetro de la esfera de referencia de la carta y el diámetro de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre el tamaño de la carta y el tamaño de la Tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre el tamaño del terreno que representa la carta y el radio de la Tierra.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. Si iniciamos una ruta y la continuamos con rumbo constante durante más de 1.000 millas náuticas, ¿qué estaremos haciendo?",
        opciones: [
            {
                textoRespuesta: "Siguiendo una línea ortodrómica, por lo que estaríamos cortando los meridianos con el mismo ángulo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Siguiendo una línea loxodrómica, por lo que estaríamos cortando los meridianos con ángulos diferentes.",
                isCorrect: false
            },
            {
                textoRespuesta: "Siguiendo una línea que podría ser tanto la ortodrómica como la loxodrómica, pues ambas coinciden a más de 1.000 millas náuticas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Siguiendo una línea loxodrómica, por lo que estaríamos cortando los meridianos con el mismo ángulo.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "73. La ruta se puede definir como:",
        opciones: [
            {
                textoRespuesta: "Orientación actual del eje longitudinal del avión en cualquier instante, con respecto a una determinada referencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Dirección horizontal del movimiento de la aeronave proyectada sobre la superficie de la tierra, con respecto a una determinada referencia.",
                isCorrect: true
            },
            {
                textoRespuesta: "Dirección vertical del movimiento de la aeronave proyectada sobre la superficie de la tierra, con respecto a una determinada referencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Orientación del eje longitudinal de la aeronave proyectada sobre la superficie de la tierra, con respecto a una determinada referencia.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. De todas las características de las cartas aeronáuticas, la conformidad es una de las más importantes porque limita las deformaciones. ¿Qué requisitos debe cumplir una carta para que se considere conforme?",
        opciones: [
            {
                textoRespuesta: "La escala usada debe ser la misma en toda la carta, los accidentes geográficos representados deben tener la misma forma que sobre la superficie terrestre y los meridianos y paralelos tienen que cortarse perpendicularmente.",
                isCorrect: true
            },
            {
                textoRespuesta: "La escala usada no tiene por qué ser la misma en toda la carta, los accidentes geográficos representados deben tener la misma forma que sobre la superficie terrestre y los meridianos y paralelos no deben cortarse.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debe respetar las áreas y las proporciones en relación a la superficie real que representa, aunque esto signifique la distorsión de las formas, los ángulos y la escala.",
                isCorrect: false
            },
            {
                textoRespuesta: "La escala usada no tiene por qué ser la misma en toda la carta, los accidentes geográficos representados deben tener la misma forma que sobre la superficie terrestre y los meridianos y paralelos tienen que cortarse perpendicularmente.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. El sistema de radionavegación NDB-ADF presenta una serie de inconvenientes entre los que destacan los siguientes:",
        opciones: [
            {
                textoRespuesta: "La transmisión de señales está limitada por la línea de visión y presenta errores en situaciones de tormentas eléctricas, cuando la aguja se puede orientar hacia el núcleo de ésta en lugar de hacerlo a la estación emisora.",
                isCorrect: false
            },
            {
                textoRespuesta: "La transmisión de señales está limitada por la línea de visión, el alcance es mucho menor que las señales VHF y la indicación de dirección proporcionada suele ser difícil de interpretar.",
                isCorrect: false
            },
            {
                textoRespuesta: "La transmisión de señales está limitada por la línea de visión y se ve afectado por la línea de costa y por el efecto de la salida y la puesta del sol.",
                isCorrect: false
            },
            {
                textoRespuesta: "Presenta errores en situaciones de tormentas eléctricas, se ve afectado por la línea de costa y por el efecto de la salida y la puesta del sol y no proporciona una idea clara para realizar la corrección de deriva necesaria en caso de viento.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "76. El aeropuerto de La Coruña tiene las pistas 03/21. En el METAR vemos “16008KT 120V200”. ¿Qué pista usaríamos para el despegue y el aterrizaje?",
        opciones: [
            {
                textoRespuesta: "La pista 21.",
                isCorrect: true
            },
            {
                textoRespuesta: "Es indiferente porque según el METAR el viento está en calma.",
                isCorrect: false
            },
            {
                textoRespuesta: "La pista 03.",
                isCorrect: false
            },
            {
                textoRespuesta: "Podríamos usar indistintamente las dos, puesto que el viento es totalmente cruzado.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. De las siguientes escalas, indique en cuál de ellas 5mm corresponden a 5km:",
        opciones: [
            {
                textoRespuesta: "1:500.000",
                isCorrect: false
            },
            {
                textoRespuesta: "1:250.000",
                isCorrect: false
            },
            {
                textoRespuesta: "1:10.000.000",
                isCorrect: false
            },
            {
                textoRespuesta: "1:1.000.000",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "78. ¿Qué significan las siglas AWY?",
        opciones: [
            {
                textoRespuesta: "Calle de rodadura.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aerovía.",
                isCorrect: true
            },
            {
                textoRespuesta: "Aproximación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Torre de Control.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. ¿Cuál de las siguientes equivalencias es correcta?",
        opciones: [
            {
                textoRespuesta: "Un nudo corresponde a una milla náutica por hora y una milla náutica corresponde  a un grado de arco.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un nudo corresponde a una milla náutica por hora y una milla náutica corresponde  a un minuto de arco.",
                isCorrect: true
            },
            {
                textoRespuesta: "Un nudo corresponde a una milla náutica por hora y una milla náutica corresponde a 15 minutos de arco.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un nudo corresponde a una milla náutica por hora y una milla náutica corresponde a 15 grados de arco.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. ¿A qué corresponde el aumento o disminución de una hora en el huso horario?",
        opciones: [
            {
                textoRespuesta: "A 10 grados de la esfera terrestre.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 25 minutos de la esfera terrestre.",
                isCorrect: false
            },
            {
                textoRespuesta: "A 15 grados de la esfera terrestre.",
                isCorrect: true
            },
            {
                textoRespuesta: "A 15 minutos de la esfera terrestre.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. Las líneas isógonas:",
        opciones: [
            {
                textoRespuesta: "Vienen dibujadas en las cartas de navegación y unen los puntos con la misma presión atmosférica.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vienen dibujadas en las cartas de navegación y unen los puntos con la misma altitud.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vienen dibujadas en las cartas de navegación y unen los puntos con la misma desviación.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vienen dibujadas en las cartas de navegación y unen los puntos con la misma variación.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "82. Si en una carta aeronáutica vemos un símbolo en forma de círculo con otro círculo dentro, ¿qué está indicando?",
        opciones: [
            {
                textoRespuesta: "Que hay un aeródromo civil.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que hay una estación VOR.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que hay un aeródromo mixto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que hay un aeródromo militar.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "83. ¿A qué llamamos navegación observada?",
        opciones: [
            {
                textoRespuesta: "A la estimación o determinación de una posición futura a partir de una posición conocida, a base de dirección, tiempo y velocidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la estimación o determinación de la posición de la aeronave a partir de una referencia visual del terreno.",
                isCorrect: true
            },
            {
                textoRespuesta: "A la estimación o determinación de una posición futura a partir de una posición conocida, a base de dirección, viento y tiempo.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la estimación o determinación de la posición de la aeronave basada únicamente en el funcionamiento del GPS.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. ¿Existe alguna diferencia entre la ruta y el rumbo de la aeronave?",
        opciones: [
            {
                textoRespuesta: "La ruta hace referencia a la dirección hacia la que apunta el eje longitudinal de la aeronave y el rumbo es la dirección horizontal de su movimiento proyectada sobre la superficie de la tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo hace referencia a la dirección hacia la que apunta el eje transversal de la aeronave y la ruta es la dirección horizontal de su movimiento proyectada sobre la superficie de la tierra.",
                isCorrect: false
            },
            {
                textoRespuesta: "El rumbo hace referencia a la dirección hacia la que apunta el eje longitudinal de la aeronave y la ruta es la dirección horizontal de su movimiento proyectada sobre la superficie de la tierra.",
                isCorrect: true
            },
            {
                textoRespuesta: "El rumbo hace referencia a la dirección hacia la que apunta el eje longitudinal de la aeronave y la ruta es la dirección horizontal de su movimiento proyectada sobre la superficie de la tierra, los cuales siempre coinciden.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. Los parámetros que intervienen en el triángulo de velocidades son:",
        opciones: [
            {
                textoRespuesta: "Vector velocidad de la aeronave o IAS, vector viento y vector velocidad de la aeronave sobre el suelo o GS.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vector velocidad de la aeronave o TAS y vector viento.",
                isCorrect: false
            },
            {
                textoRespuesta: "Vector velocidad de la aeronave o TAS, vector viento y vector velocidad de la aeronave sobre el suelo o GS.",
                isCorrect: true
            },
            {
                textoRespuesta: "Vector velocidad de la aeronave o TAS, vector viento, vector rumbo y vector velocidad de la aeronave sobre el suelo o GS.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. ¿Cuál de las siguientes definiciones correspondería a la de Ecuador?",
        opciones: [
            {
                textoRespuesta: "El círculo máximo que pasa por el centro de la Tierra y es perpendicular a su eje de rotación.",
                isCorrect: true
            },
            {
                textoRespuesta: "El círculo menor que pasa por el centro de la Tierra y es perpendicular a su eje de rotación.",
                isCorrect: false
            },
            {
                textoRespuesta: "El círculo máximo que pasa por el centro de la Tierra y es paralelo a su eje de rotación.",
                isCorrect: false
            },
            {
                textoRespuesta: "El círculo máximo que no pasa por el centro de la tierra y es perpendicular a su eje de rotación.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. Una vez que hemos trazado la ruta en una carta de navegación aérea tenemos que medir el rumbo. ¿De qué forma lo haremos?",
        opciones: [
            {
                textoRespuesta: "Debemos medir el rumbo en una zona próxima al inicio de la ruta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos medir el rumbo en una zona próxima al punto en el que finaliza la ruta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos medir el rumbo en una zona próxima al inicio de la ruta y en otra cercana al final para hallar un punto medio.",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos medir el rumbo aproximadamente en el punto medio de la ruta.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "88. El equipo medidor de distancia es un emisor-receptor de:",
        opciones: [
            {
                textoRespuesta: "UHF.",
                isCorrect: true
            },
            {
                textoRespuesta: "VHF.",
                isCorrect: false
            },
            {
                textoRespuesta: "LF.",
                isCorrect: false
            },
            {
                textoRespuesta: "ULF.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. ¿A qué corresponden las siglas FIR?",
        opciones: [
            {
                textoRespuesta: "A una Región de Información en Vuelo, área de tráfico libre para los vuelos que operen con reglas de vuelo visual.",
                isCorrect: false
            },
            {
                textoRespuesta: "A una Zona de Control de Vuelo, área cuyo límite se extiende desde el suelo hasta el nivel de vuelo FL245.",
                isCorrect: false
            },
            {
                textoRespuesta: "A una zona de Tránsito de Aeródromo, cuya área se extiende unos 8km o 25mn y en la que pueden operar los vuelos VFR.",
                isCorrect: false
            },
            {
                textoRespuesta: "A una Región de Información en Vuelo, área cuyo límite se extiende desde el suelo hasta el nivel de vuelo FL245.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "90. La situación de un punto en la superficie de la Tierra queda definido por sus coordenadas, que se leen según la longitud y la latitud. ¿De qué forma?",
        opciones: [
            {
                textoRespuesta: "La longitud puede ser norte o sur y se mide sobre el meridiano tomando como referencia el Ecuador; la latitud puede ser este u oeste y se mide sobre el paralelo tomando como referencia el meridiano de Greenwich",
                isCorrect: false
            },
            {
                textoRespuesta: "La latitud puede ser norte o sur y se mide sobre el meridiano tomando como referencia el Ecuador; la longitud puede ser este u oeste y se mide sobre el paralelo tomando como referencia el meridiano de Greenwich.",
                isCorrect: true
            },
            {
                textoRespuesta: "La latitud puede ser norte o sur y se mide sobre el paralelo tomando como referencia el meridiano de Greenwich; la longitud puede ser este u oeste y se mide sobre el meridiano tomando como referencia el Ecuador.",
                isCorrect: false
            },
            {
                textoRespuesta: "La latitud puede ser este u oeste y se mide sobre el paralelo tomando como referencia el meridiano de Greenwich; la longitud puede ser norte o sur y se mide sobre el meridiano tomando como referencia el Ecuador.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. Un TMA es un/a:",
        opciones: [
            {
                textoRespuesta: "Área Terminal de Control, que puede darse sobre uno o varios aeropuertos, y de las que hay 12 en España.",
                isCorrect: true
            },
            {
                textoRespuesta: "Zona de Control que se da sobre un aeropuerto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Zona de Tránsito de Aeródromo que en España se extiende a una distancia de 8 km de radio alrededor de un aeropuerto 900 metros de alto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Zona de Tránsito de Aeródromo, que puede darse sobre uno o varios aeropuertos, y de las que hay 12 en España.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. La navegación aérea se basa en varios elementos que se deben tener en cuenta en todo momento. ¿Cuáles son?",
        opciones: [
            {
                textoRespuesta: "La situación, la dirección y la distancia.",
                isCorrect: false
            },
            {
                textoRespuesta: "La situación, la dirección y el tiempo.",
                isCorrect: false
            },
            {
                textoRespuesta: "La situación, la dirección, la distancia y el tiempo.",
                isCorrect: true
            },
            {
                textoRespuesta: "La situación, la elevación, la dirección, la distancia y el tiempo.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. ¿Qué nos permiten conocer las líneas isógonas dibujadas en una carta de navegación?",
        opciones: [
            {
                textoRespuesta: "Nos permiten determinar la inclinación magnética que existe en cualquier punto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos permiten determinar la variación o declinación que existe en cualquier punto.",
                isCorrect: true
            },
            {
                textoRespuesta: "Nos permiten determinar la desviación o declinación que existe en cualquier punto.",
                isCorrect: false
            },
            {
                textoRespuesta: "Nos permiten determinar la altitud a la que se encuentra cualquier punto.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. El mayor inconveniente que presenta una carta tipo Mercator es:",
        opciones: [
            {
                textoRespuesta: "Que en ella no se pueden medir directamente las distancias.",
                isCorrect: true
            },
            {
                textoRespuesta: "Que no presentan conformidad.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que no presentan la loxodrómica o línea de rumbos constante como una línea recta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Que en ella no se pueden medir directamente los rumbos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. ¿Qué es y qué información proporcional el TAF?",
        opciones: [
            {
                textoRespuesta: "Un informe ordinario que proporciona información sobre el tiempo actual en el aeródromo.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un pronóstico del tiempo en superficie cuya validez no puede ser inferior a 9 horas ni superior a 24 horas.",
                isCorrect: true
            },
            {
                textoRespuesta: "Una emisión meteorológica que proporciona información meteorológica en vuelo constantemente.",
                isCorrect: false
            },
            {
                textoRespuesta: "Un pronóstico del tiempo en superficie cuya validez no puede ser inferior a 24 horas ni superior a 48 horas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. ¿Cuál es el comportamiento de una brújula que se sitúa sobre el Polo Norte?",
        opciones: [
            {
                textoRespuesta: "La aguja imantada comienza a girar, dando vueltas de 360º “buscando el Polo”.",
                isCorrect: false
            },
            {
                textoRespuesta: "El imán se invierte y la aguja comienza a apuntar hacia el Sur.",
                isCorrect: false
            },
            {
                textoRespuesta: "La aguja imantada se queda fija en el punto Norte.",
                isCorrect: false
            },
            {
                textoRespuesta: "La aguja imantada empieza a apuntar hacia abajo, “buscando el Polo”.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "97. La brújula presenta un error de inclinación que hace que estando en el hemisferio Norte:",
        opciones: [
            {
                textoRespuesta: "Si queremos virar al Norte tenemos que sacar el viraje después de que marque 360º, y si queremos virar al Sur, tenemos que parar antes de que marque 180º.",
                isCorrect: false
            },
            {
                textoRespuesta: "En cualquier viraje debamos parar antes de que marque el rumbo deseado, independientemente de si viramos al Norte o al Sur.",
                isCorrect: false
            },
            {
                textoRespuesta: "Si queremos virar al Norte tenemos que sacar el viraje antes de que marque 360º, y si queremos virar al Sur, tenemos que parar después de que marque 180º.",
                isCorrect: true
            },
            {
                textoRespuesta: "En cualquier viraje debamos parar después de que marque el rumbo deseado, independientemente de si viramos al Norte o al Sur.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. En caso de habernos perdido durante la navegación y no ser capaces de orientarnos siguiendo los procedimientos habituales, ¿de qué forma puede un controlador de radar conocer y darnos la situación exacta del avión?",
        opciones: [
            {
                textoRespuesta: "Pulsando el botón del micrófono durante unos segundos cuando  el controlador diga “pulse para marcación”.",
                isCorrect: false
            },
            {
                textoRespuesta: "Pulsando el botón del transpondedor durante unos segundos cuando el controlador diga “pulse para marcación”.",
                isCorrect: false
            },
            {
                textoRespuesta: "Seleccionando en el transpondedor las claves que diga el controlador de radar.",
                isCorrect: true
            },
            {
                textoRespuesta: "Con el uso del GPS de la aeronave.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. La esfera de la Tierra se divide en mitades que llamamos hemisferios tomando como referencia:",
        opciones: [
            {
                textoRespuesta: "Dos círculos menores, el Ecuador que divide en hemisferio Norte y Sur y el Meridiano de Greenwich que lo hace en hemisferio Este y Oeste.",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos círculos mayores, el Ecuador que divide en hemisferio Norte y Sur y el Meridiano de Greenwich que lo hace en hemisferio Este y Oeste.",
                isCorrect: true
            },
            {
                textoRespuesta: "Dos círculos mayores, el Meridiano de Greenwich que divide en hemisferio Norte y Sur y el Ecuador que lo hace en hemisferio Este y Oeste.",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos círculos menores, un paralelo que divide en hemisferio Norte y Sur y un meridiano que lo hace en hemisferio Este y Oeste.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Los círculos menores se definen como:",
        opciones: [
            {
                textoRespuesta: "Aquellos que pueden ser trazados en la superficie de la Tierra cuyo centro o radio son los mismos que los de ésta.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aquellos que pueden ser trazados en la superficie de la Tierra pero que no la dividen en dos mitades iguales, como son los meridianos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aquellos que pueden ser trazados en la superficie de la Tierra y que la dividen en dos mitades iguales, como el Ecuador.",
                isCorrect: false
            },
            {
                textoRespuesta: "Aquellos que pueden ser trazados en la superficie de la Tierra pero que no la dividen en dos mitades iguales, como son los paralelos.",
                isCorrect: true
            }
        ]
    }
];

export default preguntas;