const preguntas = [
    {
        titulo: "1. ¿Cuál de estas definiciones corresponde a la milla náutica?",
        opciones: [
            {
                textoRespuesta: "Es la distancia igual a un grado de círculo polar",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la distancia igual a un grado de longitud este",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la distancia igual a la longitud de un minuto de arco",
                isCorrect: true
            },
            {
                textoRespuesta: "Es la distancia igual a la longitud de un grado de arco",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. La dirección en la que apunta el eje longitudinal de una aeronave. Expresada generalmente en grados respecto al norte, se llama:",
        opciones: [
            {
                textoRespuesta: "Ruta",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo",
                isCorrect: true
            },
            {
                textoRespuesta: "Referencia ILS",
                isCorrect: false
            },
            {
                textoRespuesta: "Las tres son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. Un nudo es:",
        opciones: [
            {
                textoRespuesta: "Una milla terrestre por hora",
                isCorrect: false
            },
            {
                textoRespuesta: "El recorrido que hace una aeronave en un minuto",
                isCorrect: false
            },
            {
                textoRespuesta: "1,6 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "Una milla náutica por hora",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "4. El ángulo de corrección de deriva será:",
        opciones: [
            {
                textoRespuesta: "Siempre menor que la deriva para navegar correctamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual que el de deriva y de signo contrario",
                isCorrect: true
            },
            {
                textoRespuesta: "Menor que el de deriva y de idéntico signo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Cualquier área D, R, P o F, publicada en los mapas de navegación, está activa siempre:",
        opciones: [
            {
                textoRespuesta: "No necesariamente",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "Los fines de semana",
                isCorrect: false
            },
            {
                textoRespuesta: "De lunes a viernes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. La inclinación es:",
        opciones: [
            {
                textoRespuesta: "El ángulo medido en referencia al eje longitudinal del avión con respecto a la tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "El ángulo medido en referencia al eje longitudinal de la trayectoria del avión con respecto a la tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "La pendiente de la línea de flujo magnético",
                isCorrect: true
            },
            {
                textoRespuesta: "La diferencia angular entre Norte Geográfico y Norte Magnético",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. ¿Qué son los meridianos?",
        opciones: [
            {
                textoRespuesta: "Círculos menores",
                isCorrect: false
            },
            {
                textoRespuesta: "Círculos máximos que pasan por los polos",
                isCorrect: true
            },
            {
                textoRespuesta: "Círculos máximos paralelos al ecuador",
                isCorrect: false
            },
            {
                textoRespuesta: "Círculos menores paralelos al ecuador",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Antes de iniciar un vuelo de navegación en ULM, debemos tener en cuenta algunas cuestiones. De las expuestas, señale la correcta:",
        opciones: [
            {
                textoRespuesta: "Basaré la navegación en la técnica observada y a estima, aunque lleve otros instrumentos de apoyo, como puede ser un GPS",
                isCorrect: true
            },
            {
                textoRespuesta: "Usaré el GPS como instrumento principal, sólo si está alimentado por el sistema eléctrico del ULM, y no si está alimentado por una batería propia",
                isCorrect: false
            },
            {
                textoRespuesta: "No será necesaria una preparación de la ruta si llevamos sistema GPS u otro sistema similar",
                isCorrect: false
            },
            {
                textoRespuesta: "Usaré el GPS como instrumento principal para la navegación, apoyándome en las cartas VFR y verificando la ruta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Si yendo a rumbo 085º constante, se incrementa la intensidad del viento de 175º",
        opciones: [
            {
                textoRespuesta: "Iremos cada vez más a la izquierda de la ruta trazada",
                isCorrect: true
            },
            {
                textoRespuesta: "Iremos paralelos a la ruta trazada, pero a su derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "Iremos cada vez más a la derecha de la ruta trazada",
                isCorrect: false
            },
            {
                textoRespuesta: "Iremos paralelos a la ruta trazada, pero a su izquierda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. ¿Que es la desviación de la brújula?",
        opciones: [
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "El error de instalación de la brújula",
                isCorrect: true
            },
            {
                textoRespuesta: "La diferencia entre el norte geográfico y el magnético",
                isCorrect: false
            },
            {
                textoRespuesta: "La diferencia entre el norte geográfico y el de la brújula",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Si en una ficha de un campo de vuelo, se nos indica que la entrada se realiza por punto WHISKY, esto significa:",
        opciones: [
            {
                textoRespuesta: "Que aproximaremos al tráfico manteniendo Rumbo Oeste",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            },
            {
                textoRespuesta: "Que aproximaremos al tráfico por el Oeste",
                isCorrect: true
            },
            {
                textoRespuesta: "Que aproximaremos al tráfico por el Este",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. Sabemos que los mapas representan la superficie terrestre de acuerdo a unas relaciones de las medidas, estas son las escalas 1/1.000.000, 1/500.000, etc. En el supuesto de que tengamos un mapa a escala 1/500.000, 2 cm. En el mapa representan en la realidad.",
        opciones: [
            {
                textoRespuesta: "5 Km.",
                isCorrect: false
            },
            {
                textoRespuesta: "100 Km.",
                isCorrect: false
            },
            {
                textoRespuesta: "10 Km.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "13. Con un determinado viento cruzado, el ángulo de deriva será menor:",
        opciones: [
            {
                textoRespuesta: "Cuanto menor sea la TAS del ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuanto mayor sea la TAS del ULM",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuanto menor sea la Ground Speed",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. En aeronáutica no se utiliza la hora local (local time) sino otra hora internacional que puede tener diferencias con la local de cada país normalmente o en determinadas épocas del año, a esta hora la conocemos por:",
        opciones: [
            {
                textoRespuesta: "a) UTC",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Hora Z",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Institucionalizada",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"b\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "15. Rumbo 050, viento 230 20kt, TAS 100kt. Hallar la GS",
        opciones: [
            {
                textoRespuesta: "80 Kt",
                isCorrect: false
            },
            {
                textoRespuesta: "120 Kt",
                isCorrect: true
            },
            {
                textoRespuesta: "85 Kt",
                isCorrect: false
            },
            {
                textoRespuesta: "125 Kt",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. La latitud de un punto es el ángulo formado por el punto, el centro de la tierra y el Ecuador",
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
        titulo: "17. Para información sobre actividad de paracaidismo en las inmediaciones de un aeródromo, un piloto debe:",
        opciones: [
            {
                textoRespuesta: "Llamar 24 horas antes al aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Consultar los NOTAM en vigor",
                isCorrect: true
            },
            {
                textoRespuesta: "Consultar las notas colocadas en la cartelera sitiada en la oficina del jefe de vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Consultar los TAFOR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. ¿Qué tipos de navegación aérea existen básicamente?",
        opciones: [
            {
                textoRespuesta: "Observada, a estima y radio-eléctrica",
                isCorrect: true
            },
            {
                textoRespuesta: "A estima y azimutal",
                isCorrect: false
            },
            {
                textoRespuesta: "Radio-eléctrica y meteorológica",
                isCorrect: false
            },
            {
                textoRespuesta: "Astronómica, radio-eléctrica y meteorológica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Respecto al área LED 125. Puede haber alguna actividad que suponga peligro para el vuelo:",
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
        titulo: "20. El meridiano 0 también se conoce como:",
        opciones: [
            {
                textoRespuesta: "Meridiano de abscisas",
                isCorrect: false
            },
            {
                textoRespuesta: "Meridiano de Greenwich",
                isCorrect: true
            },
            {
                textoRespuesta: "Meridiano de referencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Circulo menor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. La Tierra se encuentra dividida en 24 husos horarios:",
        opciones: [
            {
                textoRespuesta: "De 20º cada uno",
                isCorrect: false
            },
            {
                textoRespuesta: "De 15º cada uno",
                isCorrect: true
            },
            {
                textoRespuesta: "De 30º cada uno",
                isCorrect: false
            },
            {
                textoRespuesta: "De 10º cada uno",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. Con declinación 5ºW, estamos siguiendo curso geográfico de 085º ¿Qué marcará la brújula?",
        opciones: [
            {
                textoRespuesta: "85º",
                isCorrect: false
            },
            {
                textoRespuesta: "90º",
                isCorrect: true
            },
            {
                textoRespuesta: "80º",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. ¿En cuáles de estos casos tendremos que aplicar una corrección de deriva hacia un rumbo mayor?",
        opciones: [
            {
                textoRespuesta: "Rumbo 140º, viento de 320º",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo 180º, viento 180º",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo 270º, viento de 010º",
                isCorrect: true
            },
            {
                textoRespuesta: "Rumbo 090º, viento de 290º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. La latitud se encuentra:",
        opciones: [
            {
                textoRespuesta: "Entre 0º y 45º especificando si es Norte o Sur",
                isCorrect: false
            },
            {
                textoRespuesta: "Entre 0º y 90º especificando si es Norte o Sur",
                isCorrect: true
            },
            {
                textoRespuesta: "Entre 0º y 45º especificando si es Este u Oeste",
                isCorrect: false
            },
            {
                textoRespuesta: "Entre 0º y 90º especificando si es Este u Oeste",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. El rumbo que medimos en una carta de navegación es:",
        opciones: [
            {
                textoRespuesta: "Geográfico",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "Directo",
                isCorrect: false
            },
            {
                textoRespuesta: "Magnético",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. Las siglas GCR111, significan:",
        opciones: [
            {
                textoRespuesta: "Código OACI para Ceuta y Melilla, seguido de la letra R, espacio aéreo restringido, y su identificación",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicador de lugar OACI para Canarias, seguido de la letra R, espacio aéreo restringido, y su identificación",
                isCorrect: true
            },
            {
                textoRespuesta: "Código OACI para España peninsular, seguido de la letra R, espacio aéreo restringido, y su identificación",
                isCorrect: false
            },
            {
                textoRespuesta: "Código OACI para Canarias, seguido de la letra R, espacio aéreo reestablecido, y su identificación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. En ausencia de viento, el rumbo de brújula a seguir, será:",
        opciones: [
            {
                textoRespuesta: "El obtenido en la carta, más o menos la deriva, si es W ó E respectivamente",
                isCorrect: false
            },
            {
                textoRespuesta: "El obtenido en la carta, más o menos la variación, si es W ó E respectivamente",
                isCorrect: true
            },
            {
                textoRespuesta: "El obtenido en la carta, más o menos la variación, si es E ó W respectivamente",
                isCorrect: false
            },
            {
                textoRespuesta: "El obtenido en la carta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. La identificación de una zona del espacio aéreo con la letra 'P', significa zona:",
        opciones: [
            {
                textoRespuesta: "Peligrosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Prohibida",
                isCorrect: true
            },
            {
                textoRespuesta: "Restringida",
                isCorrect: false
            },
            {
                textoRespuesta: "Diurna",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. Los Polos están en el punto de intersección de todos los meridianos, es decir su longitud es 0.",
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
        titulo: "30. Antes de iniciar un vuelo de navegación en ULM, debemos tener en cuenta algunas cuestiones. De las expuestas, señale la correcta:",
        opciones: [
            {
                textoRespuesta: "Calcular el tiempo de vuelo para evitar llegar al aeródromo fuera de las condiciones VFR-HJ",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son ciertas",
                isCorrect: true
            },
            {
                textoRespuesta: "Calcular el tiempo del vuelo y el consumo de combustible, y no iniciar el vuelo si las condiciones no garantizan la llegada al aeródromo de destino",
                isCorrect: false
            },
            {
                textoRespuesta: "Tener información meteorológica de toda la ruta, a fin de evitar condiciones fuera de las VMC",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. Con respecto a los Nortes magnético y geográfico:",
        opciones: [
            {
                textoRespuesta: "España tiene declinación Norte",
                isCorrect: false
            },
            {
                textoRespuesta: "España tiene declinación Sur",
                isCorrect: false
            },
            {
                textoRespuesta: "España tiene declinación Oeste",
                isCorrect: false
            },
            {
                textoRespuesta: "España puede tener declinación Este u Oeste",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. Rumbo 100, viento 060 15kt, TAS 165km/h. Hallar la GS",
        opciones: [
            {
                textoRespuesta: "150 km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "180 km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "143 km/h.",
                isCorrect: true
            },
            {
                textoRespuesta: "178 km/h.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Sobre la carta de proyección cónica conforme de Lambert:",
        opciones: [
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Es prácticamente equidistante",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una proyección normal secante",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una proyección cónica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. Rumbo geográfico 270, declinación 5ºW, viento 0. Indique rumbo magnético",
        opciones: [
            {
                textoRespuesta: "275",
                isCorrect: true
            },
            {
                textoRespuesta: "260",
                isCorrect: false
            },
            {
                textoRespuesta: "270",
                isCorrect: false
            },
            {
                textoRespuesta: "265",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. Cuando dibujamos en triángulo de velocidades, los tres lados de dicho triángulo, corresponden a:",
        opciones: [
            {
                textoRespuesta: "TAS, Viento y Ground Speed",
                isCorrect: true
            },
            {
                textoRespuesta: "Distancia, Tiempo y Consumo",
                isCorrect: false
            },
            {
                textoRespuesta: "Distancia, TAS y Viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento, Consumo y Ground Speed",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. En la tierra, un grado en el paralelo del ecuador equivale a:",
        opciones: [
            {
                textoRespuesta: "1 milla náutica",
                isCorrect: false
            },
            {
                textoRespuesta: "1.857 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "1 Milla terrestre",
                isCorrect: false
            },
            {
                textoRespuesta: "60 millas náuticas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "37. Un vuelo VFR, para entrar en un CTR sin permiso del controlador, tiene que mantenerse a 1000 pies y en condiciones VMC",
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
        titulo: "38. ¿Puede utilizar un ULM los espacios aéreos de clase \"F\" y \"G\"?",
        opciones: [
            {
                textoRespuesta: "El \"G\" sí, el \"F\" no",
                isCorrect: false
            },
            {
                textoRespuesta: "El \"F\" sí, el \"G\" no",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, de hecho son los que puede utilizar, al no ser controlados, aunque han de cumplir otras limitaciones",
                isCorrect: true
            },
            {
                textoRespuesta: "No, está prohibido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Las declinaciones W, para aplicar rumbo en brújula, siempre se:",
        opciones: [
            {
                textoRespuesta: "Suman al rumbo geográfico",
                isCorrect: true
            },
            {
                textoRespuesta: "Restan al rumbo magnético",
                isCorrect: false
            },
            {
                textoRespuesta: "Suman al rumbo magnético",
                isCorrect: false
            },
            {
                textoRespuesta: "Restan al rumbo magnético",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. La ortodrómica es:",
        opciones: [
            {
                textoRespuesta: "La línea que une dos puntos de la superficie de la Tierra sin mantener el rumbo constante",
                isCorrect: false
            },
            {
                textoRespuesta: "La línea que une dos puntos de la superficie de la Tierra en la menor distancia posible, pero sin mantener el rumbo constante",
                isCorrect: true
            },
            {
                textoRespuesta: "La línea que une dos puntos de la superficie de la Tierra en la menor distancia posible, manteniendo el rumbo constante",
                isCorrect: false
            },
            {
                textoRespuesta: "La línea que une dos puntos de la superficie de la Tierra manteniendo un rumbo constante, pero no en la menor distancia posible",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. Cualquier punto de la superficie de la Tierra puede ser situado exactamente por la intersección de un meridiano y un paralelo",
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
        titulo: "42. El GPS ¿Dónde falla?",
        opciones: [
            {
                textoRespuesta: "En la exactitud de la medida de la situación con errores de hasta 2 NM",
                isCorrect: false
            },
            {
                textoRespuesta: "En que las ondas se refractan en la ionosfera",
                isCorrect: false
            },
            {
                textoRespuesta: "Para vuelos a velocidades superiores a 0,7 Mach",
                isCorrect: false
            },
            {
                textoRespuesta: "En las cercanías de zonas tormentosas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "43. AGL significa:",
        opciones: [
            {
                textoRespuesta: "Altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Elevación",
                isCorrect: false
            },
            {
                textoRespuesta: "Indicativo IATA de Málaga",
                isCorrect: false
            },
            {
                textoRespuesta: "Sobre el suelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. Una proyección cónica es aquella:",
        opciones: [
            {
                textoRespuesta: "La superficie desarrollable en la que se representa la figura es un cilindro",
                isCorrect: false
            },
            {
                textoRespuesta: "En la que la superficie desarrollable en la que se representa la figura es un cono",
                isCorrect: true
            },
            {
                textoRespuesta: "Que no puede ser secante",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. La diferencia existente entre el Norte Geográfico y el Norte Magnético, se denomina:",
        opciones: [
            {
                textoRespuesta: "Desviación",
                isCorrect: false
            },
            {
                textoRespuesta: "Inclinación",
                isCorrect: false
            },
            {
                textoRespuesta: "Variación",
                isCorrect: false
            },
            {
                textoRespuesta: "Declinación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "46. En un sistema ADF, el emisor del suelo NDB es capaz de proporcionar, por sí mismo, dirección y sentido a la señal emitida.",
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
        titulo: "47. Si volamos con referencia a niveles de vuelo, cuál será el ajuste del altímetro:",
        opciones: [
            {
                textoRespuesta: "QNH",
                isCorrect: false
            },
            {
                textoRespuesta: "1013 mb.",
                isCorrect: true
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "QFF",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. En vuelo de ULM, para calcular el rumbo magnético debemos:",
        opciones: [
            {
                textoRespuesta: "Sumar la declinación al rumbo geográfico",
                isCorrect: false
            },
            {
                textoRespuesta: "Restar la declinación al rumbo geográfico",
                isCorrect: true
            },
            {
                textoRespuesta: "Dividir la declinación por el rumbo geográfico",
                isCorrect: false
            },
            {
                textoRespuesta: "Multiplicar. la declinación por el rumbo geográfico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Se considera el meridiano de referencia:",
        opciones: [
            {
                textoRespuesta: "Al meridiano 0",
                isCorrect: false
            },
            {
                textoRespuesta: "Al meridiano que pasa por la ciudad inglesa de Grenwhich",
                isCorrect: false
            },
            {
                textoRespuesta: "Al primer meridiano",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas ellas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. Si nuestro rumbo geográfico es 312° y el magnético 299° ¿Cuál será la declinación?",
        opciones: [
            {
                textoRespuesta: "11° E",
                isCorrect: false
            },
            {
                textoRespuesta: "11° W",
                isCorrect: false
            },
            {
                textoRespuesta: "13° E",
                isCorrect: true
            },
            {
                textoRespuesta: "13º W",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Todos los meridianos terrestres:",
        opciones: [
            {
                textoRespuesta: "Son de igual tamaño",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentan o disminuyen según nos acercamos o alejamos de los Polos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. El rumbo geográfico es:",
        opciones: [
            {
                textoRespuesta: "La dirección del eje longitudinal del avión medido respecto a una referencia cualquiera",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección del avión medido respecto al Norte Magnético",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección del eje del avión medido respecto al Norte Geográfico",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas las respuestas son válidas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. Antes de iniciar un vuelo de navegación en ULM, debemos tener en cuenta algunas cuestiones. De las expuestas, señale la correcta:",
        opciones: [
            {
                textoRespuesta: "Identificaremos bien los puntos de entrada a los tráficos en los aeródromos de destino, pues es en ellos donde tenemos que observar la ficha del aeródromo para estudiar el procedimiento a seguir",
                isCorrect: false
            },
            {
                textoRespuesta: "Si llevamos radio, comunicaremos siempre, obligatoriamente. Por esta causa es obligatorio saber las frecuencias de radio de los aeródromos y llevarlas activas",
                isCorrect: false
            },
            {
                textoRespuesta: "En los aeródromos o campos de vuelo desconocidos, aplicaremos la regla de aproximación estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos extremar las precauciones para cumplir los procedimientos en los campos de destino, pues el piloto puede distraer estos procedimientos a causa del estrés añadido que supone operar en una pista no habitual. Para ello hay que llevar información suficiente de los campos de destino, y tener estudiado los procedimientos a seguir",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "54. En un vuelo de navegación, observo que la siguiente referencia a alcanzar se me va quedando cada vez más a la izquierda, ¿qué significa?",
        opciones: [
            {
                textoRespuesta: "Tenemos viento de la izquierda",
                isCorrect: true
            },
            {
                textoRespuesta: "Tenemos más intensidad de viento de cola, y no nos afecta al par motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos más intensidad de viento en cara, y nos afecta al par motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos viento de la derecha",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. Si vuelo con rumbo 250º y tengo viento de 250º, tengo viento de cara:",
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
        titulo: "56. La brújula indica:",
        opciones: [
            {
                textoRespuesta: "Altitud sobre el mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo magnético",
                isCorrect: true
            },
            {
                textoRespuesta: "Rumbo geográfico",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad relativa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. El circulo máximo que pasando por el centro de la tierra es perpendicular al eje de rotación, se llama",
        opciones: [
            {
                textoRespuesta: "Ecuador",
                isCorrect: true
            },
            {
                textoRespuesta: "Meridiano",
                isCorrect: false
            },
            {
                textoRespuesta: "Longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Transversal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Para entrar en espacio aéreo A, un vuelo VFR:",
        opciones: [
            {
                textoRespuesta: "Se puede entrar con plan de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo pueden entrar los planeadores",
                isCorrect: false
            },
            {
                textoRespuesta: "No puede entrar",
                isCorrect: true
            },
            {
                textoRespuesta: "Necesita permiso de control",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. Un círculo con indicación de los puntos cardinales es el símbolo empleado para indicar:",
        opciones: [
            {
                textoRespuesta: "Radiofaro no direccional",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeródromo militar terrestre",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeródromo de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeródromo civil terrestre",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "60. La navegación consistente en utilizar la brújula y el mapa se llama:",
        opciones: [
            {
                textoRespuesta: "Navegación a estima",
                isCorrect: true
            },
            {
                textoRespuesta: "Navegación observada",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación efectiva",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación orbita",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. Rumbo Verdadero. 090, declinación 0º, viento 270º 20kt",
        opciones: [
            {
                textoRespuesta: "Tengo 20 nudos de viento en cola",
                isCorrect: true
            },
            {
                textoRespuesta: "Tengo 20 km/h de viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Tengo 20 km/h de viento en cola",
                isCorrect: false
            },
            {
                textoRespuesta: "Tengo 20 nudos de viento en cara",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. ¿Qué es un meridiano?",
        opciones: [
            {
                textoRespuesta: "Un círculo máximo que pasa por los Polos, perpendicular al Ecuador, donde se mide la latitud",
                isCorrect: true
            },
            {
                textoRespuesta: "Un círculo menor que corta a la esfera de la Tierra paralelamente al Ecuador, y donde se mide la latitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Un círculo menor que corta a la esfera de la Tierra paralelamente al Ecuador, y donde se mide la longitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Un círculo máximo que pasa por los Polos, perpendicular al Ecuador, donde se mide la longitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Un avión consume 15 litros por hora de vuelo ¿cuánto consumirá en 20 minutos?",
        opciones: [
            {
                textoRespuesta: "4 litros",
                isCorrect: false
            },
            {
                textoRespuesta: "5 litros",
                isCorrect: true
            },
            {
                textoRespuesta: "10 litros",
                isCorrect: false
            },
            {
                textoRespuesta: "7,5 litros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Para navegar a la estima, es muy importante apuntar la hora de despegue:",
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
        titulo: "65. Si vemos en una carta un espacio aéreo con las siglas LEP, que indica un límite superior de FL080, ¿qué significa?",
        opciones: [
            {
                textoRespuesta: "Que el límite inferior está en el nivel de vuelo 080, o lo que es lo mismo, 8000 pies con QNE calado",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el límite inferior está a 8000 pies de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el límite superior está a 8000 pies de altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el límite superior está en el nivel de vuelo 080, o lo que es lo mismo, 8000 pies con QNE calado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "66. En concreto, la zona LED119 tiene unos límites FL 600/FL 245 ¿podemos seguir nuestra ruta dibujada en la carta, si vemos que pasa por esta zona, si la zona está activada?",
        opciones: [
            {
                textoRespuesta: "No, en ningún caso, pues está activada",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, pues las zonas D no afectan a los ULM, estén o no activadas",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, pues su límite inferior está en el nivel de vuelo 245, que son 24500 pies con QNE calado",
                isCorrect: true
            },
            {
                textoRespuesta: "No, pues sus límites son desde 245 pies de altura hasta 6000 pies de altura, y no podremos pasar no por encima ni por debajo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. Para encontrar la frecuencia de APP LEAL, nos iremos a la parte del AIP",
        opciones: [
            {
                textoRespuesta: "RAC",
                isCorrect: false
            },
            {
                textoRespuesta: "AD",
                isCorrect: true
            },
            {
                textoRespuesta: "ENR",
                isCorrect: false
            },
            {
                textoRespuesta: "AGA",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. En relación a la Derrota:",
        opciones: [
            {
                textoRespuesta: "Se define como la proyección sobre la superficie terrestre de la trayectoria de una aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "También se llama Ruta",
                isCorrect: false
            },
            {
                textoRespuesta: "Se expresa generalmente en grados respecto al Norte",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas ellas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "69. Unos de los datos fundamentales que tenemos que conocer del aeródromo de destino, es la elevación del mismo ¿para qué sirve este dato, entre otras cosas?",
        opciones: [
            {
                textoRespuesta: "Para poder obtener el QFE a partir de la elevación, antes de aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Para incorporarnos al tráfico con una altitud correcta, si llevamos el QNH correcto",
                isCorrect: true
            },
            {
                textoRespuesta: "Para incorporarnos al tráfico con QNE calado, y aterrizar a esa altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Para poder obtener el QNH a partir de la elevación, antes de aterrizar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. La navegación que se realiza por cálculo de la posición del avión según la velocidad del mismo y el tiempo transcurrido en una dirección determinada, se denomina:",
        opciones: [
            {
                textoRespuesta: "Navegación a estima",
                isCorrect: true
            },
            {
                textoRespuesta: "Navegación observada",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación efectiva",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación astronómica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. La identificación de una zona del espacio aéreo con la letra D significa zona:",
        opciones: [
            {
                textoRespuesta: "Peligrosa",
                isCorrect: true
            },
            {
                textoRespuesta: "Prohibida",
                isCorrect: false
            },
            {
                textoRespuesta: "Restringida",
                isCorrect: false
            },
            {
                textoRespuesta: "Diurna",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. La proyección sobre la superficie terrestre de la trayectoria de una aeronave, cuya dirección en cualquier punto se expresa generalmente en grados a partir del norte, se llama.",
        opciones: [
            {
                textoRespuesta: "Derrota",
                isCorrect: true
            },
            {
                textoRespuesta: "Rumbo",
                isCorrect: false
            },
            {
                textoRespuesta: "Referencia I.L.S.",
                isCorrect: false
            },
            {
                textoRespuesta: "Las tres son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. Un altímetro calado con QFE nos indicará",
        opciones: [
            {
                textoRespuesta: "Altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. Cuando viramos a rumbo sur hay que sacar el viraje al llegar justo a los 180°:",
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
        titulo: "75. El ángulo de deriva será mayor:",
        opciones: [
            {
                textoRespuesta: "Cuanto mayor sea la TAS del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuanto mayor sea la IAS",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuanto mayor sea la componente cruzada de viento",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "76. La loxodrónica es la línea que une dos puntos:",
        opciones: [
            {
                textoRespuesta: "Formando siempre el mismo ángulo con los meridianos",
                isCorrect: true
            },
            {
                textoRespuesta: "Formando ángulos distintos con los meridianos",
                isCorrect: false
            },
            {
                textoRespuesta: "Opuestos a la ortodrónica",
                isCorrect: false
            },
            {
                textoRespuesta: "Perpendiculares al ecuador",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. La altitud de transición T.A. de un aeropuerto:",
        opciones: [
            {
                textoRespuesta: "Depende de las condiciones meteorológicas",
                isCorrect: false
            },
            {
                textoRespuesta: "Es variable según la velocidad del viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Es fija para cada aeropuerto",
                isCorrect: true
            },
            {
                textoRespuesta: "Es igual en todos los aeropuertos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. Hacia Norte o Sur los meridianos se miden en grados hasta:",
        opciones: [
            {
                textoRespuesta: "90º",
                isCorrect: true
            },
            {
                textoRespuesta: "180º",
                isCorrect: false
            },
            {
                textoRespuesta: "170º",
                isCorrect: false
            },
            {
                textoRespuesta: "360º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. Respecto a la figura adjunta de un triángulo de viento. La TAS del avión son 160 Km/h; el viento es de 150º y de 25 km/h de intensidad. ¿Qué rumbo debemos poner para compensar el viento cruzado?",
        opciones: [
            {
                textoRespuesta: "21º",
                isCorrect: false
            },
            {
                textoRespuesta: "69º",
                isCorrect: true
            },
            {
                textoRespuesta: "30º",
                isCorrect: false
            },
            {
                textoRespuesta: "60º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Cuando estemos en tramo viento en cola de la pista 36, nuestro rumbo será:",
        opciones: [
            {
                textoRespuesta: "360º",
                isCorrect: false
            },
            {
                textoRespuesta: "180º",
                isCorrect: true
            },
            {
                textoRespuesta: "0º",
                isCorrect: false
            },
            {
                textoRespuesta: "270º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. La distancia vertical entre un avión y el nivel medio del mar se denomina:",
        opciones: [
            {
                textoRespuesta: "Altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "82. La latitud:",
        opciones: [
            {
                textoRespuesta: "Se mide en grados, minutos y segundos",
                isCorrect: false
            },
            {
                textoRespuesta: "Se denominan Norte y Sur",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el arco de meridiano que va desde el Ecuador hasta el punto que queremos definir en latitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas ellas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "83. ¿Cuántos pies hacen un metro?:",
        opciones: [
            {
                textoRespuesta: "3,28 pies",
                isCorrect: true
            },
            {
                textoRespuesta: "1,85 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "1,6 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "25 pies",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. Los errores de brújula producidos por campos magnéticos situados en sus proximidades se llaman:",
        opciones: [
            {
                textoRespuesta: "Desviaciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Declinaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Variaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Derivadas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. Respecto a la figura adjunta, la distancia entre A y B son 320 Km.; la TAS del avión son 160 Km/h; el viento es de 150º y de 25 km/h de intensidad. ¿Cuál es el tiempo que tardará nuestro avión en ir desde A hasta B?",
        opciones: [
            {
                textoRespuesta: "2 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "2 horas y 1 minuto",
                isCorrect: true
            },
            {
                textoRespuesta: "1 hora y 58 minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "2 horas y media",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. Si en una ficha de un campo de vuelo, se nos indica que la entrada se realiza por punto SIERRA, esto significa:",
        opciones: [
            {
                textoRespuesta: "Que aproximaremos al tráfico por el Sur",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            },
            {
                textoRespuesta: "Que aproximaremos al tráfico por el Norte",
                isCorrect: false
            },
            {
                textoRespuesta: "Que aproximaremos al tráfico manteniendo Rumbo Sur",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. El error de marcación de una brújula magnética debido a posibles campos magnéticos cercanos a ella es:",
        opciones: [
            {
                textoRespuesta: "La desviación",
                isCorrect: true
            },
            {
                textoRespuesta: "La deriva magnética",
                isCorrect: false
            },
            {
                textoRespuesta: "La variación",
                isCorrect: false
            },
            {
                textoRespuesta: "La declinación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. Define las Coordenadas Geográficas del Polo Sur:",
        opciones: [
            {
                textoRespuesta: "Latitud: S 0 Longitud: 90",
                isCorrect: false
            },
            {
                textoRespuesta: "Latitud: S 90 Longitud : 0",
                isCorrect: true
            },
            {
                textoRespuesta: "cLatitud: S 0 Longitud: 0",
                isCorrect: false
            },
            {
                textoRespuesta: "Latitud: N 90 Longitud: 90",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. ¿Cuándo podemos volar en el interior de un CTR Militar en España?:",
        opciones: [
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo con autorización expresa",
                isCorrect: true
            },
            {
                textoRespuesta: "Siempre que no molestemos al tráfico aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo los días que no operen los militares y los días festivos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. ¿Qué es una ortodrómica?",
        opciones: [
            {
                textoRespuesta: "La línea que une dos puntos de la esfera terrestre por el camino más corto",
                isCorrect: true
            },
            {
                textoRespuesta: "La línea que une dos puntos de la esfera terrestre por el camino más largo",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la línea de máxima curvatura de la esfera terrestre",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la línea de mínima curvatura de la esfera terrestre",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. Una milla náutica equivale a:",
        opciones: [
            {
                textoRespuesta: "18,5 Km.",
                isCorrect: false
            },
            {
                textoRespuesta: "1.852 metros",
                isCorrect: true
            },
            {
                textoRespuesta: "185,20 metros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. La latitud de un punto sobre la superficie de la tierra es:",
        opciones: [
            {
                textoRespuesta: "La distancia en millas desde el ecuador",
                isCorrect: false
            },
            {
                textoRespuesta: "La distancia angular entre el punto y el meridiano de Greenwich",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores respuestas es válida",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "93. La proyección sobre la superficie terrestre de la trayectoria que sigue el avión, se llama:",
        opciones: [
            {
                textoRespuesta: "Derrota",
                isCorrect: true
            },
            {
                textoRespuesta: "Dirección",
                isCorrect: false
            },
            {
                textoRespuesta: "Rumbo",
                isCorrect: false
            },
            {
                textoRespuesta: "Deriva",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. ¿Qué significa que una carta aeronáutica es equivalente?",
        opciones: [
            {
                textoRespuesta: "a) Que mantiene las proporciones entre las áreas representadas",
                isCorrect: true
            },
            {
                textoRespuesta: "b) \"a\" y \"c\" son correctas",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Que la escala es igual alrededor de un punto, pero no en toda la carta.",
                isCorrect: false
            },
            {
                textoRespuesta: "d) Que no mantiene las proporciones entre las áreas representadas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. ¿Como se denomina la ruta que une dos puntos formando siempre el mismo ángulo con los meridianos?",
        opciones: [
            {
                textoRespuesta: "Directa",
                isCorrect: false
            },
            {
                textoRespuesta: "Loxodrómica",
                isCorrect: true
            },
            {
                textoRespuesta: "Ortodrómica",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. El rumbo que se mide en una carta es siempre geográfico y debe calcularse",
        opciones: [
            {
                textoRespuesta: "En el punto de salida",
                isCorrect: false
            },
            {
                textoRespuesta: "En el punto de llegada",
                isCorrect: false
            },
            {
                textoRespuesta: "En el punto medio de la ruta",
                isCorrect: true
            },
            {
                textoRespuesta: "En los paralelos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Si la declinación es Oeste,el Norte magnético está a la izquierda del geográfico.",
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
        titulo: "98. ¿Qué es un TMA?",
        opciones: [
            {
                textoRespuesta: "Un espacio aéreo temporalmente abierto",
                isCorrect: false
            },
            {
                textoRespuesta: "Un área de control terminal, cuyo límite inferior está a cierta altura sobre el terreno y que engloba a varios aeropuertos controlados",
                isCorrect: true
            },
            {
                textoRespuesta: "Lo mismo que un CTR, pero para varios aeropuertos",
                isCorrect: false
            },
            {
                textoRespuesta: "Un espacio aéreo temporalmente segregado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. Si un ULM lleva una velocidad de 50 NM/H, ¿Con cuantos Km./h. volará?",
        opciones: [
            {
                textoRespuesta: "100 Km./h.",
                isCorrect: false
            },
            {
                textoRespuesta: "92,50 Km./h.",
                isCorrect: true
            },
            {
                textoRespuesta: "75,5 Km./h.",
                isCorrect: false
            },
            {
                textoRespuesta: "82,60 Km./h.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Dos aeronaves salen del aeropuerto A con dirección al aeropuerto B. La aeronave X sale a las 10:00 h y tiene una TAS de 180 Kt. La aeronave Y sale a las 10:20 horas y tiene una TAS de 140 Kt. A las 11:00 horas, la aeronave X pasa por un punto de notificación. ¿A qué hora pasará la aeronave Y por el mismo punto?",
        opciones: [
            {
                textoRespuesta: "A las 11:37 h.",
                isCorrect: true
            },
            {
                textoRespuesta: "A las 10:55 h.",
                isCorrect: false
            },
            {
                textoRespuesta: "A las 11:30 h.",
                isCorrect: false
            },
            {
                textoRespuesta: "A las 10:50 h.",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;