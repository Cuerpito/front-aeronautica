const preguntas = [
    {
        titulo: "1. ¿Cuál es la altura máxima de vuelo de un ULM?",
        opciones: [
            {
                textoRespuesta: "El techo del aparato",
                isCorrect: false
            },
            {
                textoRespuesta: "300 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "600 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "300 metros.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "2. Que significa TWR",
        opciones: [
            {
                textoRespuesta: "Control de aproximación",
                isCorrect: false
            },
            {
                textoRespuesta: "Torre de control de aeródromo",
                isCorrect: true
            },
            {
                textoRespuesta: "Calle de rodadura",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. VFR significa condiciones meteorológicas visuales",
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
        titulo: "4. En caso de aterrizar al mismo tiempo, ¿cuál debe ceder el paso a las otras?",
        opciones: [
            {
                textoRespuesta: "El planeador",
                isCorrect: false
            },
            {
                textoRespuesta: "El globo",
                isCorrect: false
            },
            {
                textoRespuesta: "El ULM",
                isCorrect: true
            },
            {
                textoRespuesta: "El último en pedir permiso a la torre de control",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Todo ULM deberá llevar incorporado obligatoriamente:",
        opciones: [
            {
                textoRespuesta: "Un extintor",
                isCorrect: false
            },
            {
                textoRespuesta: "Una brújula",
                isCorrect: false
            },
            {
                textoRespuesta: "Una paracaídas",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "6. ¿Quién es la persona responsable de las operaciones de seguridad en vuelo de un ULM?",
        opciones: [
            {
                textoRespuesta: "El jefe de vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "El piloto",
                isCorrect: true
            },
            {
                textoRespuesta: "El instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "Si hay controlador, él es el máximo responsable",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. A menos que se indique lo contrario, todos los virajes en los tráficos de un aeródromo serán",
        opciones: [
            {
                textoRespuesta: "Indistintamente",
                isCorrect: false
            },
            {
                textoRespuesta: "A la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "A la izquierda",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Las alas de vuelo libre serán aquellas aeronaves ultraligeras cuyo peso no excederá de:",
        opciones: [
            {
                textoRespuesta: "70 kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "150 kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "200 kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "No se consideran aeronaves ultraligeras",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "9. Un espacio aéreo de dimensiones definidas en el cual pueden desplegarse en determinados momentos actividades peligrosas para el vuelo de las aeronaves",
        opciones: [
            {
                textoRespuesta: "Es una zona prohibida",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una zona peligrosa",
                isCorrect: true
            },
            {
                textoRespuesta: "Es una zona restringida",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una zona de maniobras de aeronaves de estado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. La señal 'X' utilizada por los supervivientes significa:",
        opciones: [
            {
                textoRespuesta: "Necesitamos ayuda médica",
                isCorrect: true
            },
            {
                textoRespuesta: "Necesitamos ayuda",
                isCorrect: false
            },
            {
                textoRespuesta: "No",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Cuando dos aeronaves se aproximan de frente y ha ya peligro de colisión, deberán:",
        opciones: [
            {
                textoRespuesta: "Virar ambas a la derecha",
                isCorrect: true
            },
            {
                textoRespuesta: "Virar ambas a la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Virar una a la derecha y otra a la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Una ascenderá y otra descenderá",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. ¿Qué significado tiene una serie de destellos rojos efectuados por el control del aeródromo a una aeronave en vuelo?",
        opciones: [
            {
                textoRespuesta: "Regrese para aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeródromo peligroso, no aterrice",
                isCorrect: true
            },
            {
                textoRespuesta: "Autorizado rodaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Regrese al punto de partida en el aeródromo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. La responsabilidad del Jefe de Vuelos en caso de accidente consiste en:",
        opciones: [
            {
                textoRespuesta: "Comunicar inmediatamente, y por el medio más rápido a la Subdirección General de Seguridad en Vuelo de la Agencia Estatal de Seguridad Aérea",
                isCorrect: false
            },
            {
                textoRespuesta: "Ponerse en contacto con una empresa de transporte aéreo para auxiliar al personal accidentado",
                isCorrect: false
            },
            {
                textoRespuesta: "Comunicar inmediatamente lo sucedido a la Comisión de accidentes de la Agencia Estatal de Seguridad Aérea",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. Que significa ALT",
        opciones: [
            {
                textoRespuesta: "Elevación",
                isCorrect: false
            },
            {
                textoRespuesta: "Altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "15. Las horas mínimas necesarias de vuelo solo, que el alumno debe realizar para presentarse a examen son:",
        opciones: [
            {
                textoRespuesta: "1 hora",
                isCorrect: false
            },
            {
                textoRespuesta: "El alumno no debe volar solo",
                isCorrect: false
            },
            {
                textoRespuesta: "10 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "3 horas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "16. Un ultraligero terrestre nunca puede superar los:",
        opciones: [
            {
                textoRespuesta: "200 kg al despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "450 kg al despegue si es biplaza",
                isCorrect: true
            },
            {
                textoRespuesta: "200 kg en vacío",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. ¿Qué porcentaje de preguntas hay que responder correctamente para aprobar el examen teórico?",
        opciones: [
            {
                textoRespuesta: "El 90%",
                isCorrect: false
            },
            {
                textoRespuesta: "El 75%",
                isCorrect: true
            },
            {
                textoRespuesta: "El 50%",
                isCorrect: false
            },
            {
                textoRespuesta: "Para aprobar el examen teórico hay que responder 20 preguntas correctamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. Para renovar las habilitaciones MAF, DCG, AG, H y HD caducadas, el interesado deberá:",
        opciones: [
            {
                textoRespuesta: "Realizar en los últimos 12 meses un mínimo de 20 horas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizar una prueba de vuelo ante un examinador.",
                isCorrect: true
            },
            {
                textoRespuesta: "Realizar en los últimos 12 meses un mínimo de 5 horas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizar en los últimos 12 meses un mínimo de 3 horas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Los vuelos por encima del mar están:",
        opciones: [
            {
                textoRespuesta: "Prohibidos",
                isCorrect: false
            },
            {
                textoRespuesta: "Restringidos",
                isCorrect: false
            },
            {
                textoRespuesta: "Permitidos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "20. En vuelo VFR no se despegará, ni se aterrizará en un aeródromo dentro de una zona de tránsito de aeródromo, como norma general si:",
        opciones: [
            {
                textoRespuesta: "El techo de nubes es inferior a 550 m",
                isCorrect: false
            },
            {
                textoRespuesta: "El techo de nubes es inferior a 1.500 m",
                isCorrect: false
            },
            {
                textoRespuesta: "La visibilidad en tierra es menor de 5 kilómetros",
                isCorrect: true
            },
            {
                textoRespuesta: "La visibilidad en vuelo es menor de 5 kilómetros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. El curso para la obtención de la licencia de Piloto de ULM con habilitación MAF incluirá:",
        opciones: [
            {
                textoRespuesta: "Como mínimo 5 horas de vuelo que incluirá 3 de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "Como mínimo 10 horas de vuelo que incluirá 5 de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "Como mínimo 15 horas de vuelo que incluirá 3 de vuelo solo",
                isCorrect: true
            },
            {
                textoRespuesta: "Como mínimo 10 horas de vuelo que incluirá 5 de vuelo solo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. En un mapa aeronáutico la 'D' indica:",
        opciones: [
            {
                textoRespuesta: "Zonas prohibidas",
                isCorrect: false
            },
            {
                textoRespuesta: "Zonas de depresión",
                isCorrect: false
            },
            {
                textoRespuesta: "Zonas peligrosas",
                isCorrect: true
            },
            {
                textoRespuesta: "Zonas de tránsito",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. El manual del usuario debe describir al menos:",
        opciones: [
            {
                textoRespuesta: "Procedimientos normales, límites de operación y procedimientos de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Actuaciones, limites de pesos y centrados, combustibles y lubricantes admitidos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Procedimientos de montaje, desmontaje y almacenaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Todos los anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "24. Se denomina maniobra de aproximación, al:",
        opciones: [
            {
                textoRespuesta: "Conjunto de maniobras efectuadas por una aeronave para aterrizar en un aeródromo",
                isCorrect: true
            },
            {
                textoRespuesta: "Conjunto de maniobras efectuadas por una aeronave para despegar de un aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Conjunto de maniobras efectuadas por una aeronave durante el vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiempo que tarda una aeronave en alcanzar a otra",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. ¿Si llegando en vuelo a un Aeródromo no controlado antes de aterrizar aparece un individuo agitando una bandera roja significa que?",
        opciones: [
            {
                textoRespuesta: "Aterrizamos mas adelante de el",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizamos con mucha precaución",
                isCorrect: false
            },
            {
                textoRespuesta: "No podemos aterrizar",
                isCorrect: true
            },
            {
                textoRespuesta: "Que le falla el servicio de radio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. En una carta aeronáutica, una zona determinada, cuyos límites son 10000ALT/SEA, significa:",
        opciones: [
            {
                textoRespuesta: "Que el límite superior de la zona es 10000 sobre el terreno",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el límite superior de la zona es nivel de vuelo 10000",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el límite inferior de la zona comienza en la tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el límite inferior de la zona es el mar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. Cuál es el circuito de tráfico correcto en un aeródromo no controlado",
        opciones: [
            {
                textoRespuesta: "Sin tráfico publicado, virajes a la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Seguir el tráfico publicado, si lo hubiera",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Sin tráfico publicado, hacer un tráfico estándar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. No puede sobrevolarse con ULM:",
        opciones: [
            {
                textoRespuesta: "Espacios aéreos restringidos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacios aéreos controlados.",
                isCorrect: false
            },
            {
                textoRespuesta: "Zonas urbanas.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguno de ellos.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "29. Los vuelos de ULM en un aeródromo, se harán bajo la supervisión de:",
        opciones: [
            {
                textoRespuesta: "Jefe de Vuelos",
                isCorrect: true
            },
            {
                textoRespuesta: "Instructor Jefe",
                isCorrect: false
            },
            {
                textoRespuesta: "El Piloto más antiguo",
                isCorrect: false
            },
            {
                textoRespuesta: "Piloto con más de 100 horas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Referente al Real Decreto 2876/1982, quedan catalogados como de 'Categoría B' a:",
        opciones: [
            {
                textoRespuesta: "Los giroaviones terrestres biplazas de 300 Kg de masa máxima autorizada al despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Los giroaviones terrestres biplazas de 450 Kg de masa máxima autorizada al despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "Los aviones terrestres monoplazas de 330 Kg de masa máxima autorizada al despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Los giroaviones acuáticos biplazas de 330 Kg de masa máxima autorizada al despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. El tipo de gasolina que utiliza el motor debe figurar escrito en:",
        opciones: [
            {
                textoRespuesta: "La hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "Junto a la boca de llenado del depósito",
                isCorrect: true
            },
            {
                textoRespuesta: "En el certificado de aeronavegabilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "No figura en ningún sitio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Una escuela de Vuelo de ULM llevará la siguiente documentación:",
        opciones: [
            {
                textoRespuesta: "Las hojas de cronometraje",
                isCorrect: false
            },
            {
                textoRespuesta: "Parte mensual de actividades",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorización de AESA",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "33. Para poder revalidar la habilitación MAF, DCG, AG, H y HD; se han de:",
        opciones: [
            {
                textoRespuesta: "Realizar en los últimos 12 meses un mínimo de 20 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizar en los últimos 12 meses un mínimo de 3 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizar en los últimos 12 meses un mínimo de 5 horas",
                isCorrect: true
            },
            {
                textoRespuesta: "Realizar una prueba de vuelo ante un examinador",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. En los límites verticales de una zona LER, vemos 3500 ft ALT. Esto significa",
        opciones: [
            {
                textoRespuesta: "3500 pies de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "3500 pies de altitud",
                isCorrect: true
            },
            {
                textoRespuesta: "3500 metros de altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "3500 metros de altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. ¿Qué es necesario para obtener la habilitación de radiofonista?",
        opciones: [
            {
                textoRespuesta: "Realizar una prueba teórica y acreditar 200 horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizar una prueba práctica en vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Poseer la licencia de piloto de ultraligero, con al menos una habilitación en vigor, y superar una prueba teórica y otra práctica realizada por AESA",
                isCorrect: true
            },
            {
                textoRespuesta: "Volar con instructor en espacio aéreo controlado un mínimo de 10 horas y 10 vuelos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. IMC significa",
        opciones: [
            {
                textoRespuesta: "Reglas de vuelo por instrumentos",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproximación instrumental",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones meteorológicas instrumentales",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. Se permite sobrevolar en ULM aglomeraciones de personas y zonas urbanas.",
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
        titulo: "38. El responsable del mantenimiento en todo momento de la seguridad en vuelo de una aeronave es:",
        opciones: [
            {
                textoRespuesta: "El propietario del avión.",
                isCorrect: true
            },
            {
                textoRespuesta: "AESA",
                isCorrect: false
            },
            {
                textoRespuesta: "El Jefe de Vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "El piloto comandante del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Señale la falsa:",
        opciones: [
            {
                textoRespuesta: "Las aeronaves con motor dejaran pasar a las que no los tengas (Globos, Planeadores etc.)",
                isCorrect: false
            },
            {
                textoRespuesta: "Las aeronaves en fase final de aterrizaje o de aproximación tienen preferencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Las aeronaves que se acerquen por la derecha tienen preferencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es falsa",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "40. A menos que esté indicado lo contrario, todos los virajes en los tráficos se harán hacia:",
        opciones: [
            {
                textoRespuesta: "Indistintamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Según la orientación de la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "Izquierda",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "41. En las telecomunicaciones aeronáuticas, la palabra PESADO se deletrearía:",
        opciones: [
            {
                textoRespuesta: "Papa, Echo, Sala, Ana, Delta, Orden.",
                isCorrect: false
            },
            {
                textoRespuesta: "Papa, Echo, Siesta, Alfa, Delta, Oro.",
                isCorrect: false
            },
            {
                textoRespuesta: "Papa, Echo, Sierra, Alfa, Delta, Oscar.",
                isCorrect: true
            },
            {
                textoRespuesta: "Para, Echo, Sala, Alfa, Delta, Orden.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. ¿Qué es el umbral?",
        opciones: [
            {
                textoRespuesta: "La línea que separa la calle de rodaje de la pista de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "El comienzo de la parte de pista utilizable para el aterrizaje",
                isCorrect: true
            },
            {
                textoRespuesta: "El punto de decisión para hacer motor y al aire",
                isCorrect: false
            },
            {
                textoRespuesta: "No significa nada en particular",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. Estoy volando bajo el Área 1 del TMA de Sevilla, cuyo límite inferior es 300 m. AGL/AMSL, en mi trayectoria tengo un terreno con una elevación de 1500 pies ¿puedo continuar el vuelo sin entrar en el TMA?",
        opciones: [
            {
                textoRespuesta: "No, pues entraría en el TMA al subir por encima de 300 metros de altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, pero manteniendo 1500 pies de altitud máxima sobre ese terreno",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, manteniendo 2500 pies de altitud máxima sobre ese terreno",
                isCorrect: true
            },
            {
                textoRespuesta: "No, pues no debería estar bajo un TMA",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. Los requisitos para la habilitación de instructor de vuelo de ultraligeros son entre otros el de:",
        opciones: [
            {
                textoRespuesta: "Tener aprobado un curso de instructor de ultraligero por una escuela de ultraligeros",
                isCorrect: false
            },
            {
                textoRespuesta: "Tener en su cartilla de vuelos la certificación expedida por el jefe de vuelos de haber realizado mas de 300 horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ser piloto de avión con motor, con licencia en vigor",
                isCorrect: false
            },
            {
                textoRespuesta: "Superar las pruebas teóricas y prácticas del curso de instructor de ultraligero ante un examinador designado por la Agencia Estatal de Seguridad Aérea.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. La ficha de alumno piloto tiene una validez de:",
        opciones: [
            {
                textoRespuesta: "1 año",
                isCorrect: false
            },
            {
                textoRespuesta: "2 años",
                isCorrect: false
            },
            {
                textoRespuesta: "No caduca",
                isCorrect: false
            },
            {
                textoRespuesta: "La del Certificado Médico Aeronáutico",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "46. De las siguientes matrículas señale la que no puede pertenecer a un ultraligero con certificado de tipo",
        opciones: [
            {
                textoRespuesta: "EC-LLP",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-CQ3",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-ZOY",
                isCorrect: true
            },
            {
                textoRespuesta: "EC-U301",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. ¿Es obligatorio el uso de arnés o cinturón de seguridad a bordo de un ULM?",
        opciones: [
            {
                textoRespuesta: "Siempre",
                isCorrect: true
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Si el ULM no está carenado",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende del caso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. Se prohíben las maniobras acrobáticas con ULM.",
        opciones: [
            {
                textoRespuesta: "Sobre zonas urbanas y aglomeraciones de persona",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre",
                isCorrect: true
            },
            {
                textoRespuesta: "Si se vuela a menos de 300 m.",
                isCorrect: false
            },
            {
                textoRespuesta: "Si no disponemos de paracaídas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. ¿Está permitido volar con ULM sobre zonas urbanas y aglomeraciones de personas?",
        opciones: [
            {
                textoRespuesta: "Síi, si se vuela a más de 300 metros de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si se está haciendo publicidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Si, si disponemos de paracaídas de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "No está autorizado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. Ultraligeros motorizados serán aquellas aeronaves aptas para el vuelo tripulado, cuyo peso máximo al despegue sea inferior a:",
        opciones: [
            {
                textoRespuesta: "330 Kg en monoplaza terrestres",
                isCorrect: false
            },
            {
                textoRespuesta: "450 Kg. en biplaza terrestres",
                isCorrect: true
            },
            {
                textoRespuesta: "70 Kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "525 Kg en biplaza anfibios",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. ¿Cuál de estas definiciones de 'zona restringida' es la correcta?",
        opciones: [
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas establecido alrededor de un aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas dentro del territorio de un estado, en el cual esta regulado el vuelo de las aeronaves",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas sobre territorio o aguas jurisdiccionales de un estado, dentro del cual esta restringido el vuelo de las aeronaves de acuerdo con determinadas condiciones especificas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "52. ¿Podemos hacer con un ULM maniobras acrobáticas?",
        opciones: [
            {
                textoRespuesta: "Sí, si estamos haciendo una exhibición aérea.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si estamos a más de 300 metros.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si tenemos paracaídas de emergencias.",
                isCorrect: false
            },
            {
                textoRespuesta: "Están prohibidas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "53. ¿Qué Administración expide la Licencia de Piloto ULM?",
        opciones: [
            {
                textoRespuesta: "Ministerio de Interior",
                isCorrect: false
            },
            {
                textoRespuesta: "AESA",
                isCorrect: true
            },
            {
                textoRespuesta: "Si se vuela sobre el mar será el Ministerio de Pesca",
                isCorrect: false
            },
            {
                textoRespuesta: "Si se vuela sobre tierra será el Ministerio de Agricultura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. En un CTR, se proporciona Servicio de Control a los vuelos IFR solamente",
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
        titulo: "55. Nuestro acompañante se empieza a sentir mal. Puede ser algo grave. Ya tenemos controlado el avión. Estamos a 5 min del aeropuerto de Sevilla, y a 20 del campo de vuelo de Aerohispalis. Aun siendo ULM, podemos tomar la decisión de proceder al aeropuerto, si consideramos que lo situación lo requiere.",
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
        titulo: "56. ¿Podemos hacer con un ULM maniobras acrobáticas?",
        opciones: [
            {
                textoRespuesta: "Si, si tenemos paracaídas de emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Están prohibidas",
                isCorrect: true
            },
            {
                textoRespuesta: "Si, si estamos haciendo una exhibición aérea",
                isCorrect: false
            },
            {
                textoRespuesta: "Si, si estamos a más de 300 metros.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "57. ¿Cada cuánto tiempo hay que revalidar las habilitaciones de la licencia de ULM?",
        opciones: [
            {
                textoRespuesta: "No hay necesidad, sólo se revalida el certificado médico",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada año",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada dos años",
                isCorrect: true
            },
            {
                textoRespuesta: "Cada cinco años si el piloto es menor de 30 años",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. ¿Cuáles son los requisitos, entre otros, para poder obtener la habilitación de instructor de ULM?",
        opciones: [
            {
                textoRespuesta: "Acreditar un mínimo de 100 horas de vuelo y tener en vigor la habilitación en la que quiere instruir",
                isCorrect: false
            },
            {
                textoRespuesta: "Acreditar un mínimo de 200 horas de vuelo en el tipo de ULM que quiere instruir y poseer dicha habilitación en vigor",
                isCorrect: true
            },
            {
                textoRespuesta: "Pasar un examen teórico y uno práctico, sin necesidad de horas mínimas",
                isCorrect: false
            },
            {
                textoRespuesta: "Tener Bachiller aprobado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. ¿Cuál es la publicación donde se puede obtener, por ejemplo, el horario activación de la zona LED27B?",
        opciones: [
            {
                textoRespuesta: "En el PGB",
                isCorrect: false
            },
            {
                textoRespuesta: "En el AIP, apartado NAV",
                isCorrect: false
            },
            {
                textoRespuesta: "En el AIP, apartado ENR",
                isCorrect: true
            },
            {
                textoRespuesta: "En el COM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. Los vuelos en ultraligero están prohibidos entre:",
        opciones: [
            {
                textoRespuesta: "Orto y ocaso",
                isCorrect: false
            },
            {
                textoRespuesta: "Ocaso y orto",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. ¿Cuál de las siguientes es la definición correcta de visibilidad en tierra?",
        opciones: [
            {
                textoRespuesta: "Visibilidad medida por un observador desde tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "Visibilidad de un aeródromo indicada por un observador competente",
                isCorrect: true
            },
            {
                textoRespuesta: "Visibilidad horizontal medida desde un punto de referencia del aeródromo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Se consideran alas de vuelo libre aquellas aeronaves ultraligeras aptas para el vuelo tripulado, cuyo peso no exceda de:",
        opciones: [
            {
                textoRespuesta: "150 kilogramos",
                isCorrect: false
            },
            {
                textoRespuesta: "70 kilogramos",
                isCorrect: false
            },
            {
                textoRespuesta: "100 kilogramos",
                isCorrect: false
            },
            {
                textoRespuesta: "No se consideran aeronaves ultraligeras.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "63. Un CTR es:",
        opciones: [
            {
                textoRespuesta: "Una región de control cuyo límite inferior comienza a una determinada altura sobre el terreno, dejando libre un espacio por debajo",
                isCorrect: false
            },
            {
                textoRespuesta: "El área de alcance visual de los controladores en torno a una torre de control",
                isCorrect: false
            },
            {
                textoRespuesta: "Una zona de control de aeródromos militares",
                isCorrect: false
            },
            {
                textoRespuesta: "Una zona de control en torno a un aeropuerto o aeródromo controlado, cuyo límite inferior está en la superficie",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "64. Durante el vuelo el piloto al mando de la aeronave tendrá plena autoridad decisiva en todo lo relacionado con ella mientras:",
        opciones: [
            {
                textoRespuesta: "Cuando tenga el seguro a su nombre",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando lo autorice el propietario",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre",
                isCorrect: true
            },
            {
                textoRespuesta: "No se oponga el jefe de vuelos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. Visibilidad en tierra:",
        opciones: [
            {
                textoRespuesta: "Visibilidad medida por un observador desde tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "Visibilidad de un aeródromo indicada por un observador competente",
                isCorrect: true
            },
            {
                textoRespuesta: "Visibilidad horizontal medida desde un punto de referencia del aeródromo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Que significa AD",
        opciones: [
            {
                textoRespuesta: "Área peligrosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Antediluviano",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeródromo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "67. La instrucción de vuelo en ULM, debe impartirla un:",
        opciones: [
            {
                textoRespuesta: "Piloto con 100 horas de vuelo mínimo",
                isCorrect: false
            },
            {
                textoRespuesta: "Instructor de vuelo de ULM, calificado",
                isCorrect: true
            },
            {
                textoRespuesta: "Piloto con experiencia en dar clases",
                isCorrect: false
            },
            {
                textoRespuesta: "Tripulante de ULM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. ¿Cuál de estos conjuntos corresponde a la matrícula de un ULM?",
        opciones: [
            {
                textoRespuesta: "EC-XAB",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-A34.",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-526.",
                isCorrect: false
            },
            {
                textoRespuesta: "EC-AB4",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "69. ¿En qué sección de las AIP se contienen elementos relativos a aéreas prohibidas, restringidas o peligrosas?",
        opciones: [
            {
                textoRespuesta: "GEN",
                isCorrect: false
            },
            {
                textoRespuesta: "AGA",
                isCorrect: false
            },
            {
                textoRespuesta: "AD",
                isCorrect: false
            },
            {
                textoRespuesta: "ENR",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "70. La señal 'V' utilizada por los supervivientes significa:",
        opciones: [
            {
                textoRespuesta: "Necesitamos ayuda médica",
                isCorrect: false
            },
            {
                textoRespuesta: "Necesitamos ayuda",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. ¿Es necesario pasar una prueba de vuelo para obtener el certificado de examinador?",
        opciones: [
            {
                textoRespuesta: "Hay que pasar la prueba de vuelo sólo si se tienen menos de 1000 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "No hay que pasar una prueba de vuelo para ser examinador",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay que pasar la prueba de vuelo sólo si se tienen menos de 500 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "Si, hay que pasar una prueba de vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "72. La licencia de piloto de ULM será expedida por:",
        opciones: [
            {
                textoRespuesta: "Las escuelas autorizadas",
                isCorrect: false
            },
            {
                textoRespuesta: "La Agencia Estatal de Seguridad Aérea",
                isCorrect: true
            },
            {
                textoRespuesta: "Las escuelas que dispongan de un programa de estudios homologados",
                isCorrect: false
            },
            {
                textoRespuesta: "El instructor de cada alumno piloto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. El uso de arnés o cinturón de seguridad, es, para los vuelos en ULM:",
        opciones: [
            {
                textoRespuesta: "Conveniente",
                isCorrect: false
            },
            {
                textoRespuesta: "No es necesario",
                isCorrect: false
            },
            {
                textoRespuesta: "Es obligatorio",
                isCorrect: true
            },
            {
                textoRespuesta: "Da igual",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. No se hará ningún lanzamiento ni rociado desde la aeronave en vuelo, salvo en las condiciones prescritas por la Autoridad competente…",
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
        titulo: "75. En el caso de accidente de un ULM el jefe de vuelos lo comunicará inmediatamente y por el medio más rápido posible, a:",
        opciones: [
            {
                textoRespuesta: "La guardia civil",
                isCorrect: false
            },
            {
                textoRespuesta: "A la Agencia Estatal de Seguridad Aérea; comisión accidentes",
                isCorrect: false
            },
            {
                textoRespuesta: "A la dirección general de protección civil",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "76. La licencia de Piloto de ULM con habilitación de Instructor permite realizar vuelos remunerados:",
        opciones: [
            {
                textoRespuesta: "No, nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, pero sólo vuelos para instrucción",
                isCorrect: true
            },
            {
                textoRespuesta: "Sólo instrucción y paseos",
                isCorrect: false
            },
            {
                textoRespuesta: "De instrucción, paseos y publicitarios",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. No es necesaria la Licencia de Piloto ULM, si se es titular de una Licencia de Piloto ...",
        opciones: [
            {
                textoRespuesta: "CPL",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre es necesaria",
                isCorrect: true
            },
            {
                textoRespuesta: "ATPL",
                isCorrect: false
            },
            {
                textoRespuesta: "Militar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. El documento expedido por la Agencia Estatal de Seguridad Aérea que faculta a su poseedor para actuar como piloto al mando es:",
        opciones: [
            {
                textoRespuesta: "El título de piloto de ultraligero",
                isCorrect: false
            },
            {
                textoRespuesta: "El certificado médico",
                isCorrect: false
            },
            {
                textoRespuesta: "Las habilitaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "La licencia, si está debidamente habilitado para el tipo de ultraligero",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "79. Las habilitaciones insertas en la licencia de Ultraligero deberán revalidarse:",
        opciones: [
            {
                textoRespuesta: "Anualmente",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada dos años",
                isCorrect: true
            },
            {
                textoRespuesta: "Cada cinco años",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las respuestas anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Para indicar a una aeronave no autorizada que está volando o esta a punto de entrar en una zona R, P, D. se le indicará mediante:",
        opciones: [
            {
                textoRespuesta: "Proyectiles que al explotar produzcan luces o estrellas rojas",
                isCorrect: false
            },
            {
                textoRespuesta: "Proyectiles que al explotar produzcan luces o estrellas verdes y rojas, disparadas a intervalos de 10 segundos",
                isCorrect: true
            },
            {
                textoRespuesta: "Proyectiles que al explotar produzcan luces o estrellas verdes y rojas, disparadas a intervalos de 5 segundos",
                isCorrect: false
            },
            {
                textoRespuesta: "Luces intermitentes de color rojo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. Si una zona LED se activa mediante NOTAM, esto significa que:",
        opciones: [
            {
                textoRespuesta: "Estará inactiva y se podrá volar en ella salvo que haya un NOTAM publicado, que notifique su activación",
                isCorrect: true
            },
            {
                textoRespuesta: "Estará siempre activa y se podrá volar con precaución",
                isCorrect: false
            },
            {
                textoRespuesta: "Una zona LED sólo se activa mediante horarios fijos, nunca mediante un NOTAM",
                isCorrect: false
            },
            {
                textoRespuesta: "Estará siempre activa y no se podrá volar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. El peso en vacío y el peso máximo autorizado son lo mismo…",
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
        titulo: "83. Una 'T' de aterrizaje horizontal, de color blanco o anaranjado, indica:",
        opciones: [
            {
                textoRespuesta: "Una dirección de aterrizaje y despegue paralela al trazo largo de la 'T' y hacia su travesaño",
                isCorrect: true
            },
            {
                textoRespuesta: "Una dirección de aterrizaje y despegue paralela al trazo largo de la 'T' y desde su travesaño",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. ¿Cuál es la altura mínima a la que un ULM debe sobrevolar una aglomeración de gente para poder hacer publicidad aérea?",
        opciones: [
            {
                textoRespuesta: "300 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "500 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "100 metros en vertical y 200 metros de distancia horizontal",
                isCorrect: false
            },
            {
                textoRespuesta: "Esta prohibido hacer publicidad con ULM y sobrevolar aglomeraciones humanas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "85. Según la orden ministerial de 14 de noviembre de 1988, toda aeronave definida como ULM deberá llevar incorporado el siguiente equipo mínimo:",
        opciones: [
            {
                textoRespuesta: "Anemómetro, cuentahoras, radio, luces de posición y brújula",
                isCorrect: false
            },
            {
                textoRespuesta: "Anemómetro, altímetro, tacómetro de motor, cuenta horas, cinturón de seguridad y un indicador de cantidad de combustible",
                isCorrect: true
            },
            {
                textoRespuesta: "Anemómetro, cinturones de seguridad y paracaídas",
                isCorrect: false
            },
            {
                textoRespuesta: "Anemómetro, brújula, radio y paracaídas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. ¿Cuántas horas de vuelo se necesitan para obtener el certificado de examinador?",
        opciones: [
            {
                textoRespuesta: "Doscientas horas",
                isCorrect: false
            },
            {
                textoRespuesta: "Ciento cincuenta horas como piloto al mando",
                isCorrect: false
            },
            {
                textoRespuesta: "Quinientas horas como piloto al mando y 150 horas en el tipo de aeronave para la cual se desea calificar",
                isCorrect: true
            },
            {
                textoRespuesta: "No son necesarias horas mínimas, sólo el bachillerato",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. ¿Qué código Q se usa para reportar la altura?",
        opciones: [
            {
                textoRespuesta: "QNH",
                isCorrect: false
            },
            {
                textoRespuesta: "QFE",
                isCorrect: true
            },
            {
                textoRespuesta: "ALT",
                isCorrect: false
            },
            {
                textoRespuesta: "MSL",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. \nÁrea LEP 161 en las cercanías de Ávila. El límite superior son 5000 pies AGL",
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
        titulo: "89. En vuelo, se debe evitar a una aeronave que se acerca a nosotros por delante nuestro haciendo:",
        opciones: [
            {
                textoRespuesta: "Un viraje a la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Un viraje a la derecha",
                isCorrect: true
            },
            {
                textoRespuesta: "Descendiendo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. Se puede comenzar la formación para la obtención de la Licencia de Piloto de Ultraligero, a partir de:",
        opciones: [
            {
                textoRespuesta: "17 años",
                isCorrect: false
            },
            {
                textoRespuesta: "16 años",
                isCorrect: true
            },
            {
                textoRespuesta: "18 años",
                isCorrect: false
            },
            {
                textoRespuesta: "21 años",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. ¿Qué significan las siglas VMC?",
        opciones: [
            {
                textoRespuesta: "Condiciones Meteorológicas Visuales",
                isCorrect: true
            },
            {
                textoRespuesta: "Reglas de vuelo visual",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones meteorológicas instrumentales",
                isCorrect: false
            },
            {
                textoRespuesta: "Reglas de vuelo instrumental",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. Cuando dos aeronaves converjan a un nivel igual, la que tenga la otra a su derecha (exceptuando las situaciones especiales previstas):",
        opciones: [
            {
                textoRespuesta: "Deberá ceder el paso",
                isCorrect: true
            },
            {
                textoRespuesta: "Tiene derecho de paso",
                isCorrect: false
            },
            {
                textoRespuesta: "Deberá descender",
                isCorrect: false
            },
            {
                textoRespuesta: "Deberá ascender",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. ¿Cuál de las siguientes aeronaves tiene preferencia para aterrizar?",
        opciones: [
            {
                textoRespuesta: "El planeador",
                isCorrect: false
            },
            {
                textoRespuesta: "El ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "El globo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cualquiera con problemas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "94. El máximo organismo internacional que se dedica a los asuntos de Aviación Civil es:",
        opciones: [
            {
                textoRespuesta: "OACI",
                isCorrect: true
            },
            {
                textoRespuesta: "FAA",
                isCorrect: false
            },
            {
                textoRespuesta: "ONU",
                isCorrect: false
            },
            {
                textoRespuesta: "IFALPA",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "95. ¿Quién realiza los exámenes teóricos y prácticos de ULM?",
        opciones: [
            {
                textoRespuesta: "El instructor escuela realiza el teórico y personal de AESA el práctico",
                isCorrect: false
            },
            {
                textoRespuesta: "Examinadores médicos aeronáuticos",
                isCorrect: false
            },
            {
                textoRespuesta: "El instructor de la escuela",
                isCorrect: false
            },
            {
                textoRespuesta: "Examinadores reconocidos por AESA",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "96. Las siglas LEP significan espacio aéreo peligroso",
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
        titulo: "97. Deletree en radiotelefonía la palabra SABADELL.",
        opciones: [
            {
                textoRespuesta: "Sierra. Alfa Bravo. Alfa. Delta. Echo. Lima. Lima.",
                isCorrect: true
            },
            {
                textoRespuesta: "Salamanca. Alfa. Bravo. Alfa. Día. Echo. Lima Lima.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sierra. Alfa. Bravo. Alfa. Día. Echo. Lima. Lima.",
                isCorrect: false
            },
            {
                textoRespuesta: "Sierra. Alfa. Bravo. Alfa. Delta. España. Lima. Lima.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Para ser Jefe de Vuelos, además de poseer licencia de Piloto de Ultraligero:",
        opciones: [
            {
                textoRespuesta: "Ha de acreditar a la Agencia Estatal de Seguridad Aérea más de 50 horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ha de acreditar a la Agencia Estatal de Seguridad Aérea 75 horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ha de acreditar a la Agencia Estatal de Seguridad Aérea más de 100 horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ha de acreditar a la Agencia Estatal de Seguridad Aérea, al menos, 100 horas de vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "99. La enseñanza para la obtención de la licencia de piloto de ULM puede comenzar a partir de los:",
        opciones: [
            {
                textoRespuesta: "16 años",
                isCorrect: true
            },
            {
                textoRespuesta: "17 años",
                isCorrect: false
            },
            {
                textoRespuesta: "18 años",
                isCorrect: false
            },
            {
                textoRespuesta: "21 años",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. El Jefe de Vuelos podrá delegar expresamente en un Piloto ULM el establecer el orden de los vuelos:",
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
    }
];

export default preguntas;