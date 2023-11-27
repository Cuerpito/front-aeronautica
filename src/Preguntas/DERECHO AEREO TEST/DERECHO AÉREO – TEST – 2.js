const preguntas = [
    {
        titulo: "1. Nuestro acompañante se empieza a sentir muy mal. Puede ser algo grave. Podemos declarar emergencia por la radio, siendo un ULM",
        opciones: [
            {
                textoRespuesta: "No. Debemos seguir al campo de vuelo más cercano",
                isCorrect: false
            },
            {
                textoRespuesta: "Por supuesto que podemos",
                isCorrect: true
            },
            {
                textoRespuesta: "No. Hay que darle una aspirina",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende del aprecio que le tengamos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. Las habilitaciones que acompañan a la licencia de piloto de ULM, tiene una duración o vigencia de:",
        opciones: [
            {
                textoRespuesta: "5 años",
                isCorrect: false
            },
            {
                textoRespuesta: "2 años y 1 año para mayores de 40 años",
                isCorrect: false
            },
            {
                textoRespuesta: "2 años  x  6 meses",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "3. En la Orden de 14 de noviembre de 1988 se establece la incorporación al ULM como equipo recomendable:",
        opciones: [
            {
                textoRespuesta: "Un extintor y un paracaídas",
                isCorrect: false
            },
            {
                textoRespuesta: "Luces de posición",
                isCorrect: false
            },
            {
                textoRespuesta: "Una brújula",
                isCorrect: false
            },
            {
                textoRespuesta: "Todo lo anterior es equipo recomendado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "4. Según orden de 14 de Noviembre de 1988, Coda aeronave definida como ULM deberá llevar incorporado el siguiente equipo mínimo:",
        opciones: [
            {
                textoRespuesta: "Anemómetro, Cuentahoras, radio, luces de posición y brújula",
                isCorrect: false
            },
            {
                textoRespuesta: "Anemómetro, altímetro, tacómetro de motor, Cuentahoras, cinturón de seguridad y un indicador de cantidad de combustible",
                isCorrect: true
            },
            {
                textoRespuesta: "Anemómetro, cinturón de seguridad y paracaídas",
                isCorrect: false
            },
            {
                textoRespuesta: "Anemómetro, brújula, radio y paracaídas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. Los ultraligeros terrestres monoplaza deben presentar una masa máxima autorizada al despegue que no sea superior a:",
        opciones: [
            {
                textoRespuesta: "150 Kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "250 Kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "200 Kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "300 Kg.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "6. ¿A qué distancia y altura se volará sobre superficies pobladas y de diversión?",
        opciones: [
            {
                textoRespuesta: "300 metros de altura y 600 metros de distancia",
                isCorrect: false
            },
            {
                textoRespuesta: "No se volará sobre superficies pobladas ni sobre aglomeraciones humanas",
                isCorrect: true
            },
            {
                textoRespuesta: "600 pies de altura y 300 metros de distancia",
                isCorrect: false
            },
            {
                textoRespuesta: "500 metros de altura y 300 pies de distancia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Un espacio aéreo de dimensiones definidas dentro del cual se facilita Servicio de Control de Tránsito Aéreo se conoce como:",
        opciones: [
            {
                textoRespuesta: "Aerovía",
                isCorrect: false
            },
            {
                textoRespuesta: "FIR o UIR en su caso",
                isCorrect: false
            },
            {
                textoRespuesta: "Zona de control",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo controlado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "8. La frecuencia 130,125 se retransmitirá:",
        opciones: [
            {
                textoRespuesta: "cientotreinta decimal cientoveinticinco",
                isCorrect: false
            },
            {
                textoRespuesta: "uno tres cero coma uno dos cinco",
                isCorrect: true
            },
            {
                textoRespuesta: "uno tres cero decimal uno dos cinco",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las respuestas anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. En el límite vertical inferior de una zona LEP, vemos GND/SEA. Esto significa:",
        opciones: [
            {
                textoRespuesta: "No veremos nunca estas siglas en una zona LEP",
                isCorrect: false
            },
            {
                textoRespuesta: "Las siglas GND/SEA sólo estarán en espacios aéreos LED activados",
                isCorrect: false
            },
            {
                textoRespuesta: "GND es altura sobre el suelo, SEA sobre el mar",
                isCorrect: false
            },
            {
                textoRespuesta: "El límite inferior es la superficie, que puede ser de la tierra o del mar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "10. Los distintivos de identificación de una aeronave han de ir impresos en la misma y visibles desde tierra.",
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
        titulo: "11. Cuando una aeronave desciende para aterrizar, al cruzar el nivel de vuelo mas bajo utilizable debe ajustar su altímetro a:",
        opciones: [
            {
                textoRespuesta: "a)\tQNH ( presión a nivel medio del mar)",
                isCorrect: true
            },
            {
                textoRespuesta: "QNE",
                isCorrect: false
            },
            {
                textoRespuesta: "No debe de ajustar el altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. La licencia de Piloto de Ultraligero permite realizar vuelos remunerados…",
        opciones: [
            {
                textoRespuesta: "No, nunca",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, pero solo vuelos para instrucción",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo instrucción y paseos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. El espacio aéreo controlado es:",
        opciones: [
            {
                textoRespuesta: "Espacio donde el controlador vigila a las aeronaves en vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas donde se facilita asesoramiento aeronáutico para los vuelos controlados",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas dentro del cual se facilita servicio de control de tránsito aéreo para los vuelos controlados",
                isCorrect: true
            },
            {
                textoRespuesta: "Espacio aéreo donde se puede volar con ULM si tenemos equipo de radio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. ¿Si el certificado médico está vencido, puedo volar si la licencia está en vigor?",
        opciones: [
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "No",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, si se vuela dentro del siguiente mes a la caducidad del certificado médico",
                isCorrect: false
            },
            {
                textoRespuesta: "No, excepto si volamos con un piloto comercial como acompañante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. Se prohíbe volar con ULM fuera del territorio nacional.",
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
        titulo: "16. Las licencias y habilitaciones serán expedidos por:",
        opciones: [
            {
                textoRespuesta: "La Agencia Estatal de Seguridad Aérea",
                isCorrect: true
            },
            {
                textoRespuesta: "El ministro de Cultura",
                isCorrect: false
            },
            {
                textoRespuesta: "Las escuelas de ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Los instructores de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. ¿Las licencias de ultraligero se revalidan periódicamente?",
        opciones: [
            {
                textoRespuesta: "No, sólo el certificado médico",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, cada dos años",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo el primer año",
                isCorrect: false
            },
            {
                textoRespuesta: "Las licencias no se revalidan. Son las habilitaciones las que hay que revalidar o renovar.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "18. Para la realización del examen práctico es necesario, además de haber completado la instrucción práctica y haber superado el examen teórico:",
        opciones: [
            {
                textoRespuesta: "Haber realizado el número de vuelos de doble mando que se estime necesario",
                isCorrect: false
            },
            {
                textoRespuesta: "Contar con una edad mínima de 17 años en la fecha en que se realice el examen",
                isCorrect: true
            },
            {
                textoRespuesta: "Certificado de instructor acreditando el grado de competencia apropiado en ultraligeros",
                isCorrect: false
            },
            {
                textoRespuesta: "Está familiarizado con los instrumento y equipo para los vuelos en condiciones VFR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. Una señal blanca en forma de pesas, significa:",
        opciones: [
            {
                textoRespuesta: "Aterrizar, despegar y rodar en las pistas",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizar, despegar y rodar únicamente en la pista y calles de rodaje",
                isCorrect: true
            },
            {
                textoRespuesta: "Aterrizar y despegar en las pistas, pero las demás maniobras no necesitan limitarse a las pistas ni en las calles de rodaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las respuestas anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. ¿Cuál es la definición de peso en vacío de un ULM?",
        opciones: [
            {
                textoRespuesta: "El peso de la aeronave totalmente terminada y con todo su equipo",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso de la aeronave totalmente terminada y con el combustible utilizable",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso de la aeronave totalmente terminada, sin el combustible, pero incluyendo el aceite",
                isCorrect: false
            },
            {
                textoRespuesta: "El peso de la aeronave totalmente terminada y con todo su equipo, sin el combustible, pero incluyendo el combustible no consumible y la máxima cantidad de aceite lubricante y de liquido refrigerante del motor",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "21. Para la realización del examen práctico, el alumno piloto deberá cumplir los siguientes requisitos:",
        opciones: [
            {
                textoRespuesta: "Haber superado el examen teórico dentro de los 24 meses anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener en vigor el certificado médico",
                isCorrect: false
            },
            {
                textoRespuesta: "Haber completado la instrucción práctica que incluirá tres horas de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "22. ¿Cuál de estos elementos es obligatorio llevar para volar con un ULM?",
        opciones: [
            {
                textoRespuesta: "Casco",
                isCorrect: false
            },
            {
                textoRespuesta: "Arnés de seguridad",
                isCorrect: true
            },
            {
                textoRespuesta: "Casco y Arnés de seguridad",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. ¿Qué requisitos debe reunir un súbdito de un país extranjero para obtener la Licencia de Piloto ULM en España?",
        opciones: [
            {
                textoRespuesta: "Compulsar toda su documentación en el país de origen",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual que los nacionales",
                isCorrect: true
            },
            {
                textoRespuesta: "Si es francés o portugués es automático la concesión de la Licencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Hacer una prueba de español",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Quedan prohibidos los vuelos de ultraligeros sobre zonas urbanas:",
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
                textoRespuesta: "No, si se obtiene el correspondiente permiso de la autoridad competente.",
                isCorrect: false
            },
            {
                textoRespuesta: "No, mientras no se trate de espacios aéreos restringidos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. La abreviatura TSA se usa para identificar las áreas temporalmente segregadas",
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
        titulo: "26. ¿Puede hacerse publicidad con un ULM?",
        opciones: [
            {
                textoRespuesta: "Sí, si se tienen voladas 100 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "No, nunca",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, si se posee la titulación comercial",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, pero depende del tipo del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Para que un ULM aterrice o despegue de un campo o terreno deberá contar con la autorización de su propietario o poseedor legítimo.",
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
        titulo: "28. ¿Puede un alumno piloto cruzar la frontera española si está volando sólo?",
        opciones: [
            {
                textoRespuesta: "Sólo si tiene contacto radio con el instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo si tiene autonomía para volver",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, siempre que sea un vuelo de entrenamiento",
                isCorrect: false
            },
            {
                textoRespuesta: "No",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "29. Cuando una aeronave podrá volar a una altura menor de 1000 pies en un área poblada:",
        opciones: [
            {
                textoRespuesta: "Cuando el vuelo es VMC",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la visibilidad sea mayor de 5 Km.",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el vuelo sea VFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando sea necesario para el aterrizaje y el despegue",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "30. Según el RCA, la operación de aeronaves durante el vuelo se ajustará:",
        opciones: [
            {
                textoRespuesta: "a) Reglas de vuelo visual o reglas de vuelo por instrumentos",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Reglas generales",
                isCorrect: false
            },
            {
                textoRespuesta: "Las respuestas \"a\" y \"b\" son ciertas",
                isCorrect: true
            },
            {
                textoRespuesta: "Solo si es IFR, no un VFR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. ¿Qué atribuciones tiene un \"examinador experimentado\"?",
        opciones: [
            {
                textoRespuesta: "Poder realizar exámenes en toda la geografía española",
                isCorrect: false
            },
            {
                textoRespuesta: "Poder realizar evaluaciones para obtener la habilitación de instructor y de examinador",
                isCorrect: true
            },
            {
                textoRespuesta: "Poder examinar más de 5 alumnos en un día",
                isCorrect: false
            },
            {
                textoRespuesta: "Poder examinar a sus propios alumnos, en caso de tener escuela propia dicho examinador",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Referente al Real Decreto 2876/1982, quedan catalogados como de 'Categoría A' a:",
        opciones: [
            {
                textoRespuesta: "Los giroaviones terrestres biplazas de 300 K.g de masa máxima autorizada al despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Los aviones terrestres biplazas de 330 Kg. de masa máxima autorizada al despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Los aviones terrestres monoplazas de 300 Kg. de masa máxima autorizada al despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "Los giroaviones acuáticos monoplazas de 330 Kg. de masa máxima autorizada al despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Se puede operar un avión sin el certificado de aeronavegabilidad",
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
        titulo: "34. Los vuelos de ultraligero se realizan siempre en condiciones meteorológicas de vuelo:  VHF",
        opciones: [
            {
                textoRespuesta: "VFR",
                isCorrect: true
            },
            {
                textoRespuesta: "IFR",
                isCorrect: false
            },
            {
                textoRespuesta: "VFH",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. Las partes de un circuito de tráfico normal de forma ordenada siguiendo la secuencia desde el despegue son:",
        opciones: [
            {
                textoRespuesta: "No existe esa denominación de “circuito de tráfico”",
                isCorrect: false
            },
            {
                textoRespuesta: "Despegue, viento cruzado, final, base y viento en cola.",
                isCorrect: false
            },
            {
                textoRespuesta: "Despegue, viento cruzado, viento en cola, base, final.",
                isCorrect: true
            },
            {
                textoRespuesta: "Da igual, siempre que operemos en un aeródromo podemos transitar por donde queramos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. De los siguientes requerimientos, cuál no es necesario para la autorización de una escuela de ULM:",
        opciones: [
            {
                textoRespuesta: "Un piloto instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "Un ultraligero de doble mando",
                isCorrect: false
            },
            {
                textoRespuesta: "Un hangar",
                isCorrect: true
            },
            {
                textoRespuesta: "Un botiquín",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "37. El propietario o usuario de un ULM deberá llevar consigo cuando realice un vuelo:",
        opciones: [
            {
                textoRespuesta: "Certificado de tipo y de aeronavegabilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Certificado de equipo de radionavegación",
                isCorrect: false
            },
            {
                textoRespuesta: "Certificado de matrícula de la aeronave y licencia de piloto de ULM en vigor",
                isCorrect: true
            },
            {
                textoRespuesta: "Título de propiedad del ULM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Las habilitaciones son anotaciones en una licencia en las que se especifican las atribuciones referentes a la misma y pueden ser:",
        opciones: [
            {
                textoRespuesta: "Multiejes de ala fija (MAF), desplazamiento del centro de gravedad (DCG) y Autogiros (AG)",
                isCorrect: false
            },
            {
                textoRespuesta: "Helicópteros (H) e Hidroavión (HD)",
                isCorrect: false
            },
            {
                textoRespuesta: "Instructor (FI) y Radiofonista (RTC)",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son ciertas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "39. El límite inferior del Área 1 del TMA de Sevilla es 300 m. AGL/AMSL, esto significa",
        opciones: [
            {
                textoRespuesta: "Que si supero los 300 metros de altura sobre tierra o mar que esté sobrevolando, habré entrado en un área temporalmente segregada",
                isCorrect: false
            },
            {
                textoRespuesta: "Que si supero los 300 metros de altura sobre tierra o mar que esté sobrevolando, habré entrado en un espacio aéreo controlado",
                isCorrect: true
            },
            {
                textoRespuesta: "Que si supero los 300 metros de altitud, habré entrado en una espacio aéreo controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Que para un ULM no es posible subir por encima de 300 metros de altitud con QNH calado en el altímetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. El vuelo efectuado por los ULM, de acuerdo con las reglas de vuelo visual, se denomina:",
        opciones: [
            {
                textoRespuesta: "Vuelo VFR",
                isCorrect: true
            },
            {
                textoRespuesta: "Vuelo IFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Vuelo VHF",
                isCorrect: false
            },
            {
                textoRespuesta: "Vuelo diurno (DFR).",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. Se denomina umbral de pista al:",
        opciones: [
            {
                textoRespuesta: "Comienzo de la parte de pista utilizable para el aterrizaje",
                isCorrect: true
            },
            {
                textoRespuesta: "Final de la parte de pista utilizable para el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Final de la pista que se deja sin utilizar después del despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Comienzo de la parte de pista utilizable para el despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. Un panel cuadrado rojo y horizontal, con una diagonal amarilla, colocado en un área de señales indica:",
        opciones: [
            {
                textoRespuesta: "Necesidad de precauciones especiales durante la aproximación y el aterrizaje",
                isCorrect: true
            },
            {
                textoRespuesta: "Necesidad de precauciones especiales durante el rodaje y el despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. ¿Cuántas horas mínimas de vuelo se necesitan para presentarse a examen práctico?",
        opciones: [
            {
                textoRespuesta: "1 hora de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "10 horas en cualquier modalidad",
                isCorrect: false
            },
            {
                textoRespuesta: "15 horas en cualquier modalidad, excepto en desplazamiento de centro de gravedad, que son 10 horas",
                isCorrect: true
            },
            {
                textoRespuesta: "3 horas de navegación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. Se consideran ultraligeros motorizados terrestres, aquellas aeronaves terrestres biplaza aptas para el vuelo tripulado, cuyo MTOW sea inferior a:",
        opciones: [
            {
                textoRespuesta: "475 kilogramos",
                isCorrect: false
            },
            {
                textoRespuesta: "250 kilogramos",
                isCorrect: false
            },
            {
                textoRespuesta: "200 kilogramos",
                isCorrect: false
            },
            {
                textoRespuesta: "450 kilogramos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. La señal de la aeronave interceptada, consistente en encender y apagar todas las luces disponibles a intervalos irregulares significa:",
        opciones: [
            {
                textoRespuesta: "Imposible cumplir",
                isCorrect: false
            },
            {
                textoRespuesta: "En peligro",
                isCorrect: true
            },
            {
                textoRespuesta: "Comprendido",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. Una doble cruz blanca, horizontal en el área de señales indica:",
        opciones: [
            {
                textoRespuesta: "Que el aeródromo está siendo utilizado por planeadores",
                isCorrect: true
            },
            {
                textoRespuesta: "Que el aeródromo está siendo utilizado por aviones contraincendios",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. ¿Qué abreviatura se utiliza para el término \"zona de control\"?",
        opciones: [
            {
                textoRespuesta: "ATZ",
                isCorrect: false
            },
            {
                textoRespuesta: "CTR",
                isCorrect: true
            },
            {
                textoRespuesta: "ZDC",
                isCorrect: false
            },
            {
                textoRespuesta: "IFR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. La edad mínima para ser titular de una Licencia de Piloto ULM es de:",
        opciones: [
            {
                textoRespuesta: "17 años",
                isCorrect: false
            },
            {
                textoRespuesta: "18 años",
                isCorrect: true
            },
            {
                textoRespuesta: "16 años",
                isCorrect: false
            },
            {
                textoRespuesta: "16 años si se vuela solo y de 18 años si se vuela con pasajeros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. El vuelo internacional pilotado solo por el alumno piloto:",
        opciones: [
            {
                textoRespuesta: "a) Está prohibido",
                isCorrect: true
            },
            {
                textoRespuesta: "b) Está permitido bajo el control y autorización del instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Está permitido en condiciones visuales",
                isCorrect: false
            },
            {
                textoRespuesta: "Las respuestas \"b\" y \"c\" son ciertas.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. Que significa TWY",
        opciones: [
            {
                textoRespuesta: "Iluminación de la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Pista en servicio",
                isCorrect: false
            },
            {
                textoRespuesta: "Calle de rodadura",
                isCorrect: true
            },
            {
                textoRespuesta: "Torre de control",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. ¿Cuál de estas definiciones de 'zona peligrosa' es la correcta?",
        opciones: [
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas sobre tierra o agua donde se prohíben los vuelos VFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas sobre territorio jurisdiccional de un estado, donde se prohíben todo tipo de vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas, en el cual pueden desplegarse en determinados momentos actividades peligrosas para el vuelo de las aeronaves",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "52. No se efectuarán vuelos de ULM en:",
        opciones: [
            {
                textoRespuesta: "Por encima del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Sobre zonas peligrosas activadas",
                isCorrect: true
            },
            {
                textoRespuesta: "A menos de 300 metros sobre el terreno",
                isCorrect: false
            },
            {
                textoRespuesta: "Todos los anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. ¿Está prohibido el lanzamiento de objetos, materiales, etc. desde aeronaves en vuelo?",
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
        titulo: "54. Un vuelo VFR puede volar en condiciones IMC",
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
        titulo: "55. En una carta veo una zona delimitada que dice: LED14 FL125/GND. Si voy a cruzarla ¿qué debo hacer?",
        opciones: [
            {
                textoRespuesta: "Consultar en el apartado AD del AIP su horario de activación, ya que sus límites son desde 12500 pies de altitud hasta el suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cruzarla, ya que manteniendo 1000 pies de altura no me afectará, aún estando activada",
                isCorrect: false
            },
            {
                textoRespuesta: "Consultar si está activada en el apartado ENR del AIP, pues sus límites son de nivel de vuelo 125 hasta el suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Llamar a la torre de control más cercana para obtener más información",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. El alumno piloto puede llevar pasajero",
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
        titulo: "57. El Jefe de Vuelos de la escuela podrá delegar expresamente en un Piloto ULM realizar los vuelos de prueba relacionados con el mantenimiento y la seguridad en vuelo de las aeronaves de la escuela:",
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
        titulo: "58. Que significa APP",
        opciones: [
            {
                textoRespuesta: "Indicativo del aeropuerto de Pamplona",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Control de área",
                isCorrect: false
            },
            {
                textoRespuesta: "Control de aproximación",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "59. Una ''X\" de color amarillo sobre un cuadrado de color rojo significa:",
        opciones: [
            {
                textoRespuesta: "Punto de aterrizaje para los helicópteros",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeródromo con meteorología adversa",
                isCorrect: false
            },
            {
                textoRespuesta: "Prohibido aterrizar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "60. ¿Cuál de estos equipos es recomendable llevar en un ultraligero?",
        opciones: [
            {
                textoRespuesta: "Cuentahoras motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Brújula",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. Con un ULM se puede volar en espacios aéreos prohibidos ...",
        opciones: [
            {
                textoRespuesta: "Sólo los fines de semana",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: true
            },
            {
                textoRespuesta: "Por encima de 700ft AGL",
                isCorrect: false
            },
            {
                textoRespuesta: "Por debajo de 1000ft",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Los ultraligeros deberán operar en aeródromos autorizados por:",
        opciones: [
            {
                textoRespuesta: "La Agencia Estatal de Seguridad Aérea",
                isCorrect: true
            },
            {
                textoRespuesta: "El Pleno Municipal",
                isCorrect: false
            },
            {
                textoRespuesta: "La Administración Territorial correspondiente en virtud de Ley Orgánica",
                isCorrect: false
            },
            {
                textoRespuesta: "La Delegación de la seguridad en Vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. ¿Cuál es la velocidad máxima de entrada en pérdida de un ULM?",
        opciones: [
            {
                textoRespuesta: "55 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "75 km/h",
                isCorrect: false
            },
            {
                textoRespuesta: "65 km/h",
                isCorrect: true
            },
            {
                textoRespuesta: "No existe limitación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Que significa HGT",
        opciones: [
            {
                textoRespuesta: "Abreviatura de Houston",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Elevación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. Un ULM terrestre nunca puede superar los:",
        opciones: [
            {
                textoRespuesta: "200 Kg al despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "450 Kg al despegue si es biplaza",
                isCorrect: true
            },
            {
                textoRespuesta: "200 Kg en vacío",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. La edad mínima para la expedición de la licencia de piloto de ULM es de:",
        opciones: [
            {
                textoRespuesta: "21 años",
                isCorrect: false
            },
            {
                textoRespuesta: "16 años",
                isCorrect: false
            },
            {
                textoRespuesta: "17 años",
                isCorrect: false
            },
            {
                textoRespuesta: "18 años",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "67. Si pretendemos operar en un aeródromo y se nos requiere que enseñemos nuestra licencia de vuelo y certificado médico junto con el DNI. ¿Quién es la persona autorizada según ley para poder hacerlo?",
        opciones: [
            {
                textoRespuesta: "El Jefe de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "El presidente del aeroclub",
                isCorrect: false
            },
            {
                textoRespuesta: "El Guardia de seguridad",
                isCorrect: false
            },
            {
                textoRespuesta: "El secretario del Aeroclub",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. El vuelo en condiciones IFR esta:",
        opciones: [
            {
                textoRespuesta: "Permitido en ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Restringido en ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Prohibido en ULM",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "69. Usando el código de señales en tierra, expresaremos \"NECESITAMOS AYUDA\" con el símbolo :",
        opciones: [
            {
                textoRespuesta: "N",
                isCorrect: false
            },
            {
                textoRespuesta: "Y",
                isCorrect: false
            },
            {
                textoRespuesta: "V",
                isCorrect: true
            },
            {
                textoRespuesta: "X",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. ¿Cuál es la definición correcta de espacio aéreo controlado?",
        opciones: [
            {
                textoRespuesta: "Espacio aéreo donde hay cobertura radar",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo especificado, sobre una trayectoria de aproximación, dentro del cual una aeronave efectúa una maniobra de aproximación IFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo de dimensiones definidas, dentro del cual se facilita servicio de control de tránsito aéreo para los vuelos controlados",
                isCorrect: true
            },
            {
                textoRespuesta: "Espacio aéreo sobre el cual se ejerce vigilancia fiscal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. ¿Cuál es la documentación mínima que el constructor de un ULM deberá entregar al usuario?",
        opciones: [
            {
                textoRespuesta: "Un manual del usuario y un libro de mantenimiento",
                isCorrect: true
            },
            {
                textoRespuesta: "Un manual del usuario, un libro de mantenimiento y un diario de a bordo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un manual del usuario, un libro de mantenimiento, un diario de a bordo y el manual del equipo de radiotelefonía",
                isCorrect: false
            },
            {
                textoRespuesta: "Un manual del usuario, un libro de mantenimiento, un diario de a bordo, un manual del equipo de radiotelefonía y un libro de horas del piloto de ULM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. ¿Qué significa en una carta aeronáutica, un límite superior o inferior FL 460?",
        opciones: [
            {
                textoRespuesta: "Límite que está a 460 pies de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Límite que está a nivel de vuelo 460, o lo que es lo mismo, 46000 pies con QFE calado en el altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Límite que está a nivel de vuelo 460, o lo que es lo mismo, 46000 pies con QNE calado en el altímetro",
                isCorrect: true
            },
            {
                textoRespuesta: "Límite que está a nivel de vuelo 460, o lo que es lo mismo, 46000 pies con QNH calado en el altímetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. ¿El \"alumno piloto\" puede llevar pasajeros?",
        opciones: [
            {
                textoRespuesta: "No, Nunca",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, pero solo al propio instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, siempre que sean pilotos.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. ¿Para revalidar una habilitación específica (MAF, AG, DCG, HD ó H), me sirven las horas en otras habilitaciones?",
        opciones: [
            {
                textoRespuesta: "Sí, si se han volado 40 horas en otro tipo de aeronave desde la última renovación",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, con un máximo de tres horas",
                isCorrect: false
            },
            {
                textoRespuesta: "No, deben ser un mínimo de 5 horas voladas el último año en el tipo específico de aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "No existen las renovaciones de habilitaciones",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. La legislación vigente no permite que un alumno piloto vuele con un acompañante que no sea el instructor",
        opciones: [
            {
                textoRespuesta: "Falso",
                isCorrect: false
            },
            {
                textoRespuesta: "Verdadero",
                isCorrect: true
            },
            {
                textoRespuesta: "El alumno piloto podrá llevar un acompañante si se lo autoriza su instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "El alumno piloto podrá llevar acompañante siempre y cuando haya volado solo al menos 10 horas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Área LEP 161 en las cercanías de Ávila. El límite inferior es el suelo",
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
        titulo: "77. El seguro exigido a un ULM, debe cubrir necesariamente:",
        opciones: [
            {
                textoRespuesta: "RC y seguro del piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "RC y seguro de casco avión",
                isCorrect: false
            },
            {
                textoRespuesta: "RC a terceros",
                isCorrect: false
            },
            {
                textoRespuesta: "RC a terceros, y a ocupante en el caso de un biplaza",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "78. Qué tipo de aeronave tiene preferencia de paso sobre cualquier otro tráfico",
        opciones: [
            {
                textoRespuesta: "Un planeador",
                isCorrect: false
            },
            {
                textoRespuesta: "Una aeronave en emergencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Una aeronave en final",
                isCorrect: false
            },
            {
                textoRespuesta: "Un globo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. Está permitido volar con un ULM sobre zonas urbanas o concentraciones de personas siempre que:",
        opciones: [
            {
                textoRespuesta: "La altura de vuelo sea superior a 300 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "Se esté haciendo publicidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: true
            },
            {
                textoRespuesta: "Esté matriculado y lleve paracaídas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Cuando dos aeronaves se acercan en la misma dirección, y sentido contrario, ambas virarán:",
        opciones: [
            {
                textoRespuesta: "Una subirá y la otra bajará",
                isCorrect: false
            },
            {
                textoRespuesta: "A la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "A la derecha",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. ¿Podemos volar con nuestro ULM en un CTR?",
        opciones: [
            {
                textoRespuesta: "Siempre",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si nos autoriza el Jefe de Vuelos más cercano",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si tenemos una exención operativa otorgada por la Directora General de AESA",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "82. La licencia de ULM tendrá una validez de:",
        opciones: [
            {
                textoRespuesta: "2 años",
                isCorrect: false
            },
            {
                textoRespuesta: "2 años hasta que el titular tenga 40 años y después 1 año",
                isCorrect: false
            },
            {
                textoRespuesta: "La licencia tiene validez indefinida, pero solo podrá reexpedirse cuando al menos una de las habilitaciones Multiejes de ala fija (MAF), Desplazamiento del centro de gravedad (DCG), Helicópteros (H), Autogiros (AG) o Hidroavión (HD) estén en vigor",
                isCorrect: true
            },
            {
                textoRespuesta: "La del Certificado Médico Aeronáutico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. ¿Qué significan las siglas IMC?",
        opciones: [
            {
                textoRespuesta: "Reglas de Vuelo Instrumental",
                isCorrect: false
            },
            {
                textoRespuesta: "Reglas de Vuelo Visual",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones Meteorológicas Visuales",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones Meteorológicas Instrumentales",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "84. Para la expedición de la licencia de Piloto de ULM el aspirante debe tener cumplidos:",
        opciones: [
            {
                textoRespuesta: "Los 18 años",
                isCorrect: true
            },
            {
                textoRespuesta: "Los 16 años",
                isCorrect: false
            },
            {
                textoRespuesta: "Los 20 años",
                isCorrect: false
            },
            {
                textoRespuesta: "No hay edad límite",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. La instrucción de vuelo para la obtención de la licencia de Piloto ULM comprende como mínimo:",
        opciones: [
            {
                textoRespuesta: "10 horas de vuelo, 3 de las cuales de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "15 horas de vuelo, 6 de las cuales de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "15 horas de vuelo (10 para DCG), 3 de las cuales de vuelo solo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "86. ¿Cuáles son las condiciones meteorológicas del vuelo visual?",
        opciones: [
            {
                textoRespuesta: "Condiciones óptimas para realizar el vuelo programado",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones encontradas en la ruta exigidas por la autoridad competente",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones meteorológicas expresadas en términos de visibilidad, distancia de las nubes y techo, iguales o mejores que las mínimas especificadas",
                isCorrect: true
            },
            {
                textoRespuesta: "Las que fija la dirección general de meteorología",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. En una carta aeronáutica, hay una zona determinada LED128 UNL/SEA ¿qué significa?",
        opciones: [
            {
                textoRespuesta: "Zona peligrosa cuyo límite superior es ilimitado, y el inferior es el mar, en la que no se podrá volar nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Zona prohibida cuyo límite superior es ilimitado, y el inferior es el mar, en la que no se podrá volar nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Zona prohibida cuyo límite superior es ilimitado, y el inferior es el mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Zona peligrosa cuyo límite superior es ilimitado, y el inferior es el mar",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "88. Para obtener la licencia de ULM, los pilotos de aviones con motor, con licencia en vigor, necesitarán la certificación de un instructor de ultraligeros que acredite que ha realizado, en una escuela de ultraligeros, al menos tres horas de instrucción práctica, de las cuales una será de vuelo solo, en el tipo de ultraligero cuya habilitación pretenda anotar en la licencia…",
        opciones: [
            {
                textoRespuesta: "No es necesario, bastará solicitar la acreditación de la parte teórica",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí la necesitan, pero la certificación debe ser acreditada por el funcionario piloto examinador",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, o alternativamente, haber superado una prueba de vuelo ante un examinador",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "89. Si se tiene un fallo de comunicaciones en ambos sentidos, deberá seleccionar en el transponder la clave:",
        opciones: [
            {
                textoRespuesta: "7700",
                isCorrect: false
            },
            {
                textoRespuesta: "7600",
                isCorrect: true
            },
            {
                textoRespuesta: "7500",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. ¿Un alumno-­piloto puede llevar pasajeros a bordo de un ULM?",
        opciones: [
            {
                textoRespuesta: "No",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si se mantiene en contacto visual con el Campo de Vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo cuando tenga la \"suelta\" de su instructor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. La encargada de inspeccionar periódicamente los aeródromos donde operan ULM es la Agencia Estatal de Seguridad Aérea...",
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
        titulo: "92. El espacio aéreo de dimensiones definidas sobre el territorio y/o las aguas jurisdiccionales del Estado, dentro del cual está restringido el vuelo de las aeronaves de acuerdo con determinadas condiciones especificadas es:",
        opciones: [
            {
                textoRespuesta: "Una zona peligrosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Una zona restringida",
                isCorrect: true
            },
            {
                textoRespuesta: "Una base militar",
                isCorrect: false
            },
            {
                textoRespuesta: "Un pasillo aéreo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. El rumbo magnético de una pista se señala en:",
        opciones: [
            {
                textoRespuesta: "El travesaño horizontal de la 'T'",
                isCorrect: false
            },
            {
                textoRespuesta: "En un rótulo sobre la torre de control",
                isCorrect: false
            },
            {
                textoRespuesta: "En cabecera de pista",
                isCorrect: true
            },
            {
                textoRespuesta: "A pie de pista",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. Está prohibido volar en ULM fuera del territorio nacional.",
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
        titulo: "95. El lanzamiento de objetos desde una aeronave en vuelo:",
        opciones: [
            {
                textoRespuesta: "Está prohibido",
                isCorrect: true
            },
            {
                textoRespuesta: "Esta autorizado",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo está prohibido sobre las ciudades",
                isCorrect: false
            },
            {
                textoRespuesta: "Esta normativa no afecta a los ULM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. Una de las condiciones para el desempeño de las funciones de Jefe de Vuelos en los aeródromos donde operan ultraligeros es tener acreditadas:",
        opciones: [
            {
                textoRespuesta: "Sesenta horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cien horas de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Ochenta horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Se exige para la utilización de ULM una Póliza de Seguros",
        opciones: [
            {
                textoRespuesta: "A terceros en cualquier caso y de ocupantes en los biplazas",
                isCorrect: true
            },
            {
                textoRespuesta: "A terceros en los monoplaza",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo a terceros",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Si volando de noche, seguimos la trayectoria de un avión que nos precede con las luces de navegación encendidas; las veremos de la siguiente manera:",
        opciones: [
            {
                textoRespuesta: "Verde, roja y blanca",
                isCorrect: false
            },
            {
                textoRespuesta: "Roja, blanca y verde",
                isCorrect: false
            },
            {
                textoRespuesta: "Roja y verde solamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Blanca solamente",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "99. Una luz verde intermitente recibida por una aeronave en tierra, significa:",
        opciones: [
            {
                textoRespuesta: "Ruede hasta la plataforma",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a rodar",
                isCorrect: true
            },
            {
                textoRespuesta: "No existe esta señal con intermitencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. Las escuelas de ultraligeros desarrollaran su actividad bajo la supervisión y responsabilidad:",
        opciones: [
            {
                textoRespuesta: "Del Jefe de Vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Del piloto que el Jefe de Vuelos designe",
                isCorrect: false
            },
            {
                textoRespuesta: "Del Jefe de Vuelos y del propietario o poseedor",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: true
            }
        ]
    }
];

export default preguntas;