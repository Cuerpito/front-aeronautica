const preguntas = [
    {
        titulo: "1. Según la orden ministerial de 14 de Noviembre de 1988, el equipo mínimo requerido para toda aeronave definida como ULM será:",
        opciones: [
            {
                textoRespuesta: "Un anemómetro. Un altímetro, y un tacómetro de motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Un anemómetro, un altímetro, un tacómetro de motor, un contador horario totalizador y un indicador de combustible remanente (a menos que el depósito sea transparente o translúcido y visible por el piloto en vuelo)",
                isCorrect: true
            },
            {
                textoRespuesta: "Un anemómetro, un altímetro, un tacómetro de motor y un Variómetro de energía Total",
                isCorrect: false
            },
            {
                textoRespuesta: "La orden ministerial a que hace referencia no marca equipo mínimo. Llevará El que el constructor del ULM considere oportuno",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. La renovación de las habilitaciones de piloto de ultraligero se efectuara:",
        opciones: [
            {
                textoRespuesta: "Cada dos años",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada año a partir de los 40 años de edad",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizando una prueba de vuelo ante un examinador",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "3. Vemos en una carta una zona LED55 cuyos límites verticales son 4000 ft ALT/1000 ft AGL ¿podemos pasar en ULM?",
        opciones: [
            {
                textoRespuesta: "No si la zona está activada",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si mantenemos el vuelo por debajo de 1000 pies de altura",
                isCorrect: true
            },
            {
                textoRespuesta: "No, nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, manteniendo nivel de vuelo 4000",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. A partir de qué fecha está totalmente prohibido volar con un ULM sin matricular.",
        opciones: [
            {
                textoRespuesta: "29 de julio de 1.983",
                isCorrect: false
            },
            {
                textoRespuesta: "15 de octubre de 1.982",
                isCorrect: true
            },
            {
                textoRespuesta: "9 de agosto de 1.987",
                isCorrect: false
            },
            {
                textoRespuesta: "7 de mayo de 1.986",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. ¿Qué significa el símbolo VFR?",
        opciones: [
            {
                textoRespuesta: "Reglas de vuelo visual",
                isCorrect: true
            },
            {
                textoRespuesta: "Aeródromo fuera de servicio",
                isCorrect: false
            },
            {
                textoRespuesta: "Emisora de muy alta frecuencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el indicativo de una radio ayuda",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. Si se han cumplido los 40 años, la licencia de Piloto de ULM tienen una validez de:",
        opciones: [
            {
                textoRespuesta: "La licencia de piloto de ULM no caduca nunca",
                isCorrect: true
            },
            {
                textoRespuesta: "3 años",
                isCorrect: false
            },
            {
                textoRespuesta: "2 años",
                isCorrect: false
            },
            {
                textoRespuesta: "1 año",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Cuál de estos equipos es obligatorio que cuente un ULM",
        opciones: [
            {
                textoRespuesta: "Extintor",
                isCorrect: false
            },
            {
                textoRespuesta: "Paracaídas",
                isCorrect: false
            },
            {
                textoRespuesta: "Altímetro",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguno es obligatorio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Entre otras, es función del jefe de vuelos:",
        opciones: [
            {
                textoRespuesta: "Verificar el montaje de los ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Establecer el comienzo, fin y orden de los vuelos, pista en servicio y firmar las cartillas de vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Expedir las tarjetas de alumno piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Autentificar con su firma y el sello del centro, los certificados de aeronavegabilidad de los aparatos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. IFR significa",
        opciones: [
            {
                textoRespuesta: "Reglas de vuelo por instrumentos",
                isCorrect: true
            },
            {
                textoRespuesta: "Condiciones meteorológicas instrumentales",
                isCorrect: false
            },
            {
                textoRespuesta: "Sistema de navegación por infrarrojos",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproximación instrumental",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Según la orden ministerial de 14 de noviembre de 1.988 el mínimo requerido para toda aeronave definida como ULM será:",
        opciones: [
            {
                textoRespuesta: "Un anemómetro, un altímetro y un tacómetro de motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Un anemómetro, un altímetro, un tacómetro de motor, un contador horario totalizador y un indicador de combustible remanente (a menos que el depósito de combustible sea transparente o translúcido y visible por el piloto en vuelo)",
                isCorrect: true
            },
            {
                textoRespuesta: "Un anemómetro, un altímetro, un tacómetro de motor y un variómetro de energía total",
                isCorrect: false
            },
            {
                textoRespuesta: "La orden ministerial a qué hace referencia no marca equipo mínimo. Llevara el que el constructor del ULM considere oportuno",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Qué significa HJ:",
        opciones: [
            {
                textoRespuesta: "Visual nocturno",
                isCorrect: false
            },
            {
                textoRespuesta: "De orto a ocaso",
                isCorrect: true
            },
            {
                textoRespuesta: "Del ocaso al orto",
                isCorrect: false
            },
            {
                textoRespuesta: "Todo el día",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. ¿Cuál es la mínima visibilidad horizontal permitida para el vuelo en ULM?",
        opciones: [
            {
                textoRespuesta: "1500 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "5 km.",
                isCorrect: true
            },
            {
                textoRespuesta: "6 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "5 nm.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. La matrícula ECBL8 corresponde a:",
        opciones: [
            {
                textoRespuesta: "Una avioneta",
                isCorrect: false
            },
            {
                textoRespuesta: "Un ultraligero de construcción amateur",
                isCorrect: false
            },
            {
                textoRespuesta: "Un ultraligero homologado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. Para revalidar la calificación de Instructor será suficiente acreditar haber efectuado:",
        opciones: [
            {
                textoRespuesta: "Un máximo de tres horas de vuelo de instrucción durante los últimos seis meses",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mínimo de tres horas de vuelo de instrucción durante los últimos 12 meses",
                isCorrect: false
            },
            {
                textoRespuesta: "Un máximo de tres horas de vuelo de instrucción durante los últimos doce meses",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mínimo de cinco horas de vuelo de instrucción durante los últimos doce meses",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "15. La prueba escrita aprobada, para presentarse a examen práctico, tendrá una validez de:",
        opciones: [
            {
                textoRespuesta: "3 años",
                isCorrect: false
            },
            {
                textoRespuesta: "2 años",
                isCorrect: true
            },
            {
                textoRespuesta: "1 año",
                isCorrect: false
            },
            {
                textoRespuesta: "Para siempre",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. Las franjas de pista mínimas a cada lado de la pista y en las prolongaciones de las cabeceras, en una pista de ULM, son:",
        opciones: [
            {
                textoRespuesta: "15 metros por 25 metros respectivamente",
                isCorrect: false
            },
            {
                textoRespuesta: "10 metros por 25 metros respectivamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la aeronave base para el cálculo",
                isCorrect: true
            },
            {
                textoRespuesta: "No son necesarias franjas de seguridad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. ¿Cuál es la edad mínima para poder ser alumno-­piloto?",
        opciones: [
            {
                textoRespuesta: "17 años",
                isCorrect: false
            },
            {
                textoRespuesta: "18 años",
                isCorrect: false
            },
            {
                textoRespuesta: "16 años",
                isCorrect: true
            },
            {
                textoRespuesta: "No existe edad mínima",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. El documento de identificación del \"alumno piloto\" tiene una validez de:",
        opciones: [
            {
                textoRespuesta: "6 meses",
                isCorrect: false
            },
            {
                textoRespuesta: "1 año",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual a la del certificado médico",
                isCorrect: true
            },
            {
                textoRespuesta: "3 años",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. La palabra TREN se deletrea:",
        opciones: [
            {
                textoRespuesta: "Tango Romeo Echo Nike",
                isCorrect: false
            },
            {
                textoRespuesta: "Tango Romeo Echo November",
                isCorrect: true
            },
            {
                textoRespuesta: "Tango Ronda Echo November",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. El Certificado médico de aptitud para Piloto de ULM será expedido:",
        opciones: [
            {
                textoRespuesta: "Dentro de los 40 días anteriores a la fecha de caducidad de su licencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Dentro de los 45 días anteriores a la fecha de caducidad de dicho Certificado",
                isCorrect: true
            },
            {
                textoRespuesta: "Después de la fecha de caducidad de la licencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Antes de la fecha de caducidad de la licencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. Ninguna aeronave volará tan cerca de otra de modo que pueda ocasionar peligro de colisión...",
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
        titulo: "22. La responsabilidades del cuidado y mantenimiento de un ULM, así como las revisiones periódicas será de:",
        opciones: [
            {
                textoRespuesta: "El usuario",
                isCorrect: false
            },
            {
                textoRespuesta: "El jefe de vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "El constructor o fabricante",
                isCorrect: false
            },
            {
                textoRespuesta: "El propietario",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "23. La orden que regula el vuelo de ultraligeros desarrollando el real decreto 2876, es de fecha:",
        opciones: [
            {
                textoRespuesta: "24 de abril de 1.986",
                isCorrect: true
            },
            {
                textoRespuesta: "15 de septiembre de 1.988",
                isCorrect: false
            },
            {
                textoRespuesta: "4 de mayo de 1.983",
                isCorrect: false
            },
            {
                textoRespuesta: "10 de abril de 1.976",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. La identificación de una zona del espacio aéreo con la letra R, significa zona:",
        opciones: [
            {
                textoRespuesta: "Peligrosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Prohibida",
                isCorrect: false
            },
            {
                textoRespuesta: "Restringida",
                isCorrect: true
            },
            {
                textoRespuesta: "Diurna",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. Según las reglas generales, toda aeronave evitará pasar con respecto a otra aeronave:",
        opciones: [
            {
                textoRespuesta: "a) Por encima, delante y debajo.",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Por detrás y debajo.",
                isCorrect: false
            },
            {
                textoRespuesta: "c) No volarán ambas aeronaves en formación más que cuando se convenga previamente.",
                isCorrect: false
            },
            {
                textoRespuesta: "d) Las respuestas \"a\" y \"c\" son ciertas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "26. Un súbdito de un país extranjero, ¿qué requisitos tiene que cumplir para matricularse en una escuela de ultraligeros?",
        opciones: [
            {
                textoRespuesta: "Si es nacional de un país miembro de la Unión Europea no necesita obtener la Tarjeta de Alumno Piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "No la necesita si la tiene en su país de origen",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual que un nacional más una prueba de español",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual que un nacional",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "27. ¿Puede llevar pasajeros el alumno piloto?",
        opciones: [
            {
                textoRespuesta: "Sí, si se está suelto y con el consentimiento de su instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, si el ULM tiene seguro de ocupantes",
                isCorrect: false
            },
            {
                textoRespuesta: "Si, solamente dentro de los límites de la zona de vuelos designada para escuela",
                isCorrect: false
            },
            {
                textoRespuesta: "No",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "28. Los vuelos en condiciones de turbulencia o marginales están:",
        opciones: [
            {
                textoRespuesta: "Recomendados para conseguir mayor experiencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Desaconsejados",
                isCorrect: false
            },
            {
                textoRespuesta: "Prohibidos",
                isCorrect: true
            },
            {
                textoRespuesta: "Permitidos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. ¿Cuántas horas se necesitan como mínimo para revalidar la licencia de ULM?",
        opciones: [
            {
                textoRespuesta: "Sólo se necesita haber volado un vuelo el último año",
                isCorrect: false
            },
            {
                textoRespuesta: "5 horas voladas como piloto al mando el último año en el tipo de aeronave para el cual se desea renovar la habilitación",
                isCorrect: true
            },
            {
                textoRespuesta: "10 horas en el tipo de aeronave para el cual se desea renovar la habilitación",
                isCorrect: false
            },
            {
                textoRespuesta: "4 horas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. ¿Cuál es la Masa Máxima al Despegue de un ULM biplaza terrestre?",
        opciones: [
            {
                textoRespuesta: "470 Kgs.",
                isCorrect: false
            },
            {
                textoRespuesta: "450 Kgs.",
                isCorrect: true
            },
            {
                textoRespuesta: "200 Kgs.",
                isCorrect: false
            },
            {
                textoRespuesta: "270 Kgs.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. La habilitación de radiofonista caduca:",
        opciones: [
            {
                textoRespuesta: "A los 2 años",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indefinida, en tanto se mantenga en vigor alguna otra habilitación",
                isCorrect: true
            },
            {
                textoRespuesta: "En la fecha del certificado médico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Un espacio aéreo de dimensiones definidas sobre el territorio o las aguas jurisdiccionales de España, dentro del cual está prohibido el vuelo de aeronaves, excepto las españolas de estado debidamente autorizadas por el Ministerio de Defensa.",
        opciones: [
            {
                textoRespuesta: "Es una zona controlada",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una zona prohibida",
                isCorrect: true
            },
            {
                textoRespuesta: "Es una zona peligrosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una zona restringida militar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Corresponde al Jefe de Vuelos las funciones siguientes:",
        opciones: [
            {
                textoRespuesta: "Establecer las comunicaciones tierra¬-aire",
                isCorrect: false
            },
            {
                textoRespuesta: "Determinar el comienzo y fin de los vuelos.",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Verificar que los vuelos se desarrollen de acuerdo con la normativa vigente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. La habilitación de instructor faculta a su poseedor a:",
        opciones: [
            {
                textoRespuesta: "Volar de noche",
                isCorrect: false
            },
            {
                textoRespuesta: "Volar por renumeración",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizar trabajos aéreos",
                isCorrect: false
            },
            {
                textoRespuesta: "Impartir instrucción teórica y práctica en una escuela de ultraligeros",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "35. Si aterrizamos en un aeródromo y se nos pide que mostremos la documentación de la aeronave ¿Quién es la persona indicada para poder hacerlo?",
        opciones: [
            {
                textoRespuesta: "El presidente del aeroclub",
                isCorrect: false
            },
            {
                textoRespuesta: "El Secretario",
                isCorrect: false
            },
            {
                textoRespuesta: "El Dueño del campo",
                isCorrect: false
            },
            {
                textoRespuesta: "El Jefe de vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "36. Las letras identificadoras serán P para zonas prohibidas, R para restringidas y D para peligrosas, precedidas por el indicador de nacionalidad, que, por ejemplo, será LE para España peninsular.",
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
        titulo: "37. Según el RAC, la operación de aeronaves durante el vuelo de una aeronave, se ajustará:",
        opciones: [
            {
                textoRespuesta: "a) Reglas de vuelo visual o reglas de vuelo por instrumentos",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Reglas Generales",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Las respuestas \"a\" y \"b\" son ciertas",
                isCorrect: true
            },
            {
                textoRespuesta: "d) Solo si es IFR, no un VFR.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Las pólizas de seguros exigibles para poder utilizar los ULM, son:",
        opciones: [
            {
                textoRespuesta: "A terceros monoplazas, y además de ocupantes los biplazas",
                isCorrect: true
            },
            {
                textoRespuesta: "Solo a terceros",
                isCorrect: false
            },
            {
                textoRespuesta: "Obligatorio ocupantes para los dos",
                isCorrect: false
            },
            {
                textoRespuesta: "No es obligatorio ningún seguro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. Las infraestructuras en las que pretendan operar ultraligeros deberán disponer de:",
        opciones: [
            {
                textoRespuesta: "Controlador",
                isCorrect: false
            },
            {
                textoRespuesta: "Alumno piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Jefe de vuelos",
                isCorrect: true
            },
            {
                textoRespuesta: "Mecánico de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. Que significa SFC",
        opciones: [
            {
                textoRespuesta: "Nivel de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Superficie",
                isCorrect: true
            },
            {
                textoRespuesta: "Scarface",
                isCorrect: false
            },
            {
                textoRespuesta: "Suficiente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. El símbolo usado para designar las reglas del vuelo visual es:",
        opciones: [
            {
                textoRespuesta: "UHF",
                isCorrect: false
            },
            {
                textoRespuesta: "VHF",
                isCorrect: false
            },
            {
                textoRespuesta: "VFR",
                isCorrect: true
            },
            {
                textoRespuesta: "IFR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. En los límites verticales de una zona LER, vemos FL 100. Esto significa",
        opciones: [
            {
                textoRespuesta: "10000 pies de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "10000 pies de altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel de vuelo 100",
                isCorrect: true
            },
            {
                textoRespuesta: "100 pies de altitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. ¿Cuál es la longitud para establecer un aeródromo donde operen ultraligeros?",
        opciones: [
            {
                textoRespuesta: "150 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "250 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "350 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende de la aeronave base para el cálculo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. Las reglas generales de vuelo, en lo relativo a prevención de colisiones se aplican a:",
        opciones: [
            {
                textoRespuesta: "Aeronaves con plan de vuelo visual",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeronaves con plan de vuelo instrumental, en condiciones VMC",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las aeronaves fuera de espacio aéreo controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "En todos los casos anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. Para el vuelo en ULM, es obligatorio el uso de:",
        opciones: [
            {
                textoRespuesta: "Arnés o cinturón de seguridad",
                isCorrect: true
            },
            {
                textoRespuesta: "Arnés y casco",
                isCorrect: false
            },
            {
                textoRespuesta: "Arnés, casco, radio y altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Ningún equipo es obligatorio, solo recomendable",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. Un \"alumno piloto\" puede llevar de pasajero:",
        opciones: [
            {
                textoRespuesta: "a) A una persona si es un biplaza",
                isCorrect: false
            },
            {
                textoRespuesta: "b) A una persona previa autorización del Instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "c) \"a\" y \"b\"",
                isCorrect: false
            },
            {
                textoRespuesta: "d) Ninguna de ellas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "47. A efectos de señales de búsqueda y salvamento, la maniobra de dar una pasada a baja altura cruzando la estela de una embarcación cerca de la popa quiere decir.",
        opciones: [
            {
                textoRespuesta: "Sígame",
                isCorrect: false
            },
            {
                textoRespuesta: "Acuso recibo de sus señales",
                isCorrect: false
            },
            {
                textoRespuesta: "Se necesita ayuda",
                isCorrect: false
            },
            {
                textoRespuesta: "Ya no se necesita ayuda",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "48. Las licencias y habilitaciones se revalidan ___________ y se renuevan ___________.\n(Elegir la respuesta que complete los espacios en blanco en el orden correcto)",
        opciones: [
            {
                textoRespuesta: "cada dos años y antes de que caduquen / si han caducado",
                isCorrect: true
            },
            {
                textoRespuesta: "si han caducado / cada dos años",
                isCorrect: false
            },
            {
                textoRespuesta: "por habilitaciones caducadas / las licencias",
                isCorrect: false
            },
            {
                textoRespuesta: "si han caducado o perdido su validez / solo antes de que caduquen",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Que significa SMC",
        opciones: [
            {
                textoRespuesta: "Velocidad que indica el GPS",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones meteorológicas en tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "Control de rodadura",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. Las luces de posición recomendadas, situadas en los extremos del ala del ULM, serán:",
        opciones: [
            {
                textoRespuesta: "Rojas a babor y verdes a estribor",
                isCorrect: true
            },
            {
                textoRespuesta: "Verde a babor y azul a estribor",
                isCorrect: false
            },
            {
                textoRespuesta: "Blancas en los extremos",
                isCorrect: false
            },
            {
                textoRespuesta: "Rojas a babor y blancas a estribor.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. ¿Cuál de estas definiciones de 'aeródromo controlado' es la correcta?",
        opciones: [
            {
                textoRespuesta: "Aeródromo en el que se facilita información aeronáutica para el tránsito aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeródromo en el que se facilita asesoramiento aeronáutico para el tránsito aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "Aeródromo en el que se facilita servicio de control de tránsito aéreo de aeródromo",
                isCorrect: true
            },
            {
                textoRespuesta: "Aeródromo donde hay vigilancia de las fuerzas de seguridad del estado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Si nos encontramos con otra aeronave de frente, viraremos",
        opciones: [
            {
                textoRespuesta: "No viraremos. Esperaremos a que lo haga el otro",
                isCorrect: false
            },
            {
                textoRespuesta: "A la derecha, pero sólo en el hemisferio norte.",
                isCorrect: false
            },
            {
                textoRespuesta: "A la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "A la derecha",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "53. En el apartado ENR del AIP consultamos el horario de activación de una zona LED concreta, y dice así: MON/THU EXC HOL: 0600­2300 FRI EXC HOL: 0600­1500 ¿Qué significa?",
        opciones: [
            {
                textoRespuesta: "Desactivada de lunes a jueves de 6:00 a 23:00, y los viernes de 6:00 a 15:00, en todo caso días laborables",
                isCorrect: false
            },
            {
                textoRespuesta: "Activada de lunes a jueves de 6:00 a 23:00, y los viernes de 6:00 a 15:00, en todo caso días festivos",
                isCorrect: false
            },
            {
                textoRespuesta: "Activada de lunes a jueves de 6:00 a 23:00, y los viernes de 6:00 a 15:00, en todo caso días laborables",
                isCorrect: true
            },
            {
                textoRespuesta: "Estos datos son sólo válidos para vuelos IFR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. Que significa TMA",
        opciones: [
            {
                textoRespuesta: "Técnico de mantenimiento de autogiros",
                isCorrect: false
            },
            {
                textoRespuesta: "Zona de control prohibida para vuelos VFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Área de control terminal",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. Indicar cuál de estos instrumentos no es obligatorio.",
        opciones: [
            {
                textoRespuesta: "Altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Brújula",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuentahoras",
                isCorrect: false
            },
            {
                textoRespuesta: "Anemómetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. Si volando nos encontramos delante (alcanzamos) un avión que sigue la misma ruta, procederemos como sigue:",
        opciones: [
            {
                textoRespuesta: "Reduciremos la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Descenderemos",
                isCorrect: false
            },
            {
                textoRespuesta: "Viraremos a la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Viraremos a la derecha",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "57. Como normas generales del aire deberemos saber que:",
        opciones: [
            {
                textoRespuesta: "Toda aeronave con problemas tiene preferencia para aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Si dos aeronaves están en aproximación final, la que esté más baja y más cerca de la pista es la que tiene preferencia.",
                isCorrect: false
            },
            {
                textoRespuesta: "Toda aeronave en aproximación final tiene preferencia para aterrizar.",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas las respuestas son ciertas.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "58. Es un jueves laborable a las 12:00Z. Consultamos en el AIP­ENR una zona que dice así: LED6 BATERÍAS (Segovia) 10000ft ALT/GND Ejercicios tiro terrestre. MON/FRI: HJ, EXC HOL Otras actividades y alturas superiores se anunciarán por NOTAM, ¿se podría volar en esta zona?",
        opciones: [
            {
                textoRespuesta: "No, porque está activada de lunes a viernes de orto a ocaso, sólo exceptuando festivos",
                isCorrect: true
            },
            {
                textoRespuesta: "Es necesario consultar el NOTAM para saber si se puede o no",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, siempre que mantengamos 1000 pies AGL",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, siempre que mantengamos menos de 10000 pies de altitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. Para acusar recibo de las señales, una embarcación podrá:",
        opciones: [
            {
                textoRespuesta: "a) Transmitir con una lámpara de señales la letra 'T' en morse.",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Cambiar el rumbo para seguir a la aeronave.",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Izar la bandera internacional 'Y'.",
                isCorrect: false
            },
            {
                textoRespuesta: "d) Las respuestas \"a\" y \"b\" son correctas.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "60. Se indicará la dirección de aterrizaje:",
        opciones: [
            {
                textoRespuesta: "Mediante una flecha de color naranja",
                isCorrect: false
            },
            {
                textoRespuesta: "Mediante dos flechas, una naranja y otra blanca",
                isCorrect: false
            },
            {
                textoRespuesta: "Mediante una 'T' de color blanco o naranja",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "61. Ninguna aeronave remolcará a otra, o a otro objeto, a no ser de acuerdo con los requisitos prescritos por la autoridad competente…",
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
        titulo: "62. ¿Cuál es la titulación requerida a un tripulante de ULM, que no tenga certificado de aeronavegabilidad para poder hacer trabajos aéreos?",
        opciones: [
            {
                textoRespuesta: "Piloto comercial 2ª",
                isCorrect: false
            },
            {
                textoRespuesta: "Está prohibido hacer trabajos aéreos a un ULM, en esas condiciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Piloto privado",
                isCorrect: false
            },
            {
                textoRespuesta: "Piloto comercial 1ª",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. ¿Puede un alumno piloto volar con un acompañante?",
        opciones: [
            {
                textoRespuesta: "No, excepto si el pasajero es otro alumno piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "No",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, solo si el pasajero es piloto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. Las escuelas de ULM desarrollarán su actividad de enseñanza bajo la supervisión y responsabilidad del:",
        opciones: [
            {
                textoRespuesta: "El Piloto que posea más aviones",
                isCorrect: false
            },
            {
                textoRespuesta: "Instructor Habilitado de ULM",
                isCorrect: true
            },
            {
                textoRespuesta: "Jefe de Vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Propietario del Campo de Vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. La altura máxima de vuelo con ULM no será superior a 300 m sobre tierra o agua…",
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
        titulo: "66. Las aeronaves no volarán en formación mas que cuando se haya convenido y autorizado previamente.",
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
        titulo: "67. Compete dirigir e inspeccionar la práctica y enseñanza de vuelo con ULM:",
        opciones: [
            {
                textoRespuesta: "Al Ministro de Fomento",
                isCorrect: false
            },
            {
                textoRespuesta: "Al instructor de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "A la Agencia Estatal de Seguridad Aérea",
                isCorrect: true
            },
            {
                textoRespuesta: "Las Escuelas de ULM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. La identificación de una zona del espacio aéreo con la letra \"R\", significa zona:",
        opciones: [
            {
                textoRespuesta: "Peligrosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Restringida",
                isCorrect: true
            },
            {
                textoRespuesta: "Prohibida",
                isCorrect: false
            },
            {
                textoRespuesta: "Reservada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. ¿Qué significan las siglas IFR?",
        opciones: [
            {
                textoRespuesta: "Reglas de Vuelo Visual",
                isCorrect: false
            },
            {
                textoRespuesta: "Condiciones Meteorológicas Instrumentales",
                isCorrect: false
            },
            {
                textoRespuesta: "Reglas de Vuelo Instrumental",
                isCorrect: true
            },
            {
                textoRespuesta: "Indagar Frenar Rodear",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. La altura máxima de vuelo de un ULM sobre el terreno, no podrá ser superior a:",
        opciones: [
            {
                textoRespuesta: "300 pies sobre el nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "El techo operativo del ultraligero",
                isCorrect: false
            },
            {
                textoRespuesta: "300 metros sobre el nivel del suelo (tierra o agua)",
                isCorrect: true
            },
            {
                textoRespuesta: "1000 metros sobre el nivel del suelo (tierra o agua)",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. La utilización de la documentación aeronáutica ha de formar parte del programa de enseñanzas teóricas, para la obtención de la licencia de piloto de ULM",
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
        titulo: "72. Área LEP 161. En las cercanías de Ávila. Podemos entrar en ella, con autorización de la torre de Salamanca.",
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
        titulo: "73. Una serie de destellos verdes dirigidos desde la torre de Control de aeródromo a una aeronave en vuelo significa:",
        opciones: [
            {
                textoRespuesta: "Regrese para aterrizar",
                isCorrect: true
            },
            {
                textoRespuesta: "Aeródromo peligroso, no aterrice",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorizado a despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "Ceda paso a las demás aeronaves en circuito",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. La altitud mínima para vuelos VFR es de:",
        opciones: [
            {
                textoRespuesta: "1000 pies de altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "500 pies de elevación",
                isCorrect: false
            },
            {
                textoRespuesta: "1000 pies AGL",
                isCorrect: false
            },
            {
                textoRespuesta: "500 pies AGL",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "75. Los vuelos en ULM siempre se realizarán en condiciones:",
        opciones: [
            {
                textoRespuesta: "VMC",
                isCorrect: true
            },
            {
                textoRespuesta: "IMC",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "Estándar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Se debe tener autorización del propietario o poseedor legítimo del terreno donde se despegue o aterrice.",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. Se debe despegar o aterrizar desde aeródromos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "77. Es recomendable llevar en el ULM...",
        opciones: [
            {
                textoRespuesta: "Un anemómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Un altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Una brújula",
                isCorrect: true
            },
            {
                textoRespuesta: "Los tres",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. El paracaídas en un ULM es:",
        opciones: [
            {
                textoRespuesta: "Recomendable",
                isCorrect: true
            },
            {
                textoRespuesta: "Obligatorio",
                isCorrect: false
            },
            {
                textoRespuesta: "Indispensable en unos ultraligeros e inútil en otros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. El piloto al mando es el último responsable de la seguridad del avión y sus ocupantes. Por tanto puede incumplir algún procedimiento establecido o limitación del avión, siempre que lo considere necesario en una situación de emergencia.",
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
        titulo: "80. El jefe de vuelos de una escuela de ULM deberá presentar en AESA un parte resumen de las horas voladas:",
        opciones: [
            {
                textoRespuesta: "Cada mes",
                isCorrect: true
            },
            {
                textoRespuesta: "Cada tres meses",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada seis meses",
                isCorrect: false
            },
            {
                textoRespuesta: "No tiene, realmente, obligación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. Un ULM en vuelo de crucero no puede descender a menos de 150 m sobre el terreno:",
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
        titulo: "82. ¿Qué es un NOTAM?",
        opciones: [
            {
                textoRespuesta: "Aviso que informa sobre condiciones de cualquier instalación aeronáutica, servicio, procedimiento o peligro",
                isCorrect: true
            },
            {
                textoRespuesta: "Una información meteorológica",
                isCorrect: false
            },
            {
                textoRespuesta: "Un tipo de navegación aérea",
                isCorrect: false
            },
            {
                textoRespuesta: "No significa nada de lo anteriormente dicho",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Un ULM, o cualquier otro tipo de aeronave, en emergencia, tiene prioridad absoluta sobre todas las demás aeronaves en vuelo y tierra.",
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
        titulo: "84. Antes de iniciar una ruta obtendré información actualizada sobre los espacios aéreos que voy a utilizar, a fin de evitar:",
        opciones: [
            {
                textoRespuesta: "Entrar en un espacio aéreo controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrar en una zona prohibida",
                isCorrect: false
            },
            {
                textoRespuesta: "Entrar en una zona peligrosa activada",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "85. Los giroaviones terrestres monoplazas debe presentar una masa máxima al despegue que no sea superior a:",
        opciones: [
            {
                textoRespuesta: "250 Kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "300 Kg.",
                isCorrect: true
            },
            {
                textoRespuesta: "350 Kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "400 Kg.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. ¿Quien es el responsable pleno del mantenimiento y conservación de la aeronavegabilidad de un ULM?",
        opciones: [
            {
                textoRespuesta: "El constructor",
                isCorrect: false
            },
            {
                textoRespuesta: "El jefe de la delegación de material correspondiente",
                isCorrect: false
            },
            {
                textoRespuesta: "El propietario del ULM",
                isCorrect: true
            },
            {
                textoRespuesta: "El piloto que habitual o esporádicamente lo vuela",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. La operación de la aeronave será responsabilidad del piloto al mando de la aeronave, manipule o no los mandos, y solo dejará de seguir el Reglamento del Aire en circunstancias que hagan tal incumplimiento absolutamente necesario por motivos de seguridad:",
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
        titulo: "88. ¿En qué libro se recogen todas las informaciones sobre aeródromos y aeropuertos?",
        opciones: [
            {
                textoRespuesta: "Reglamento General del Aire",
                isCorrect: false
            },
            {
                textoRespuesta: "TIB",
                isCorrect: false
            },
            {
                textoRespuesta: "AIP",
                isCorrect: true
            },
            {
                textoRespuesta: "Código de navegación española",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. El vuelo VFR sobre población en un ULM no debe hacerse a menos de:",
        opciones: [
            {
                textoRespuesta: "Solo si es estrictamente imprescindible para tomar",
                isCorrect: false
            },
            {
                textoRespuesta: "Que vuele dentro de un CTR",
                isCorrect: false
            },
            {
                textoRespuesta: "Vuele sobre el obstáculo a 1000 FT o mas",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "90. Las luces de navegación recomendadas situadas en las puntas de plano de un ULM, serán:",
        opciones: [
            {
                textoRespuesta: "Verde a la derecha, y roja a la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Roja a estribor, y verde a babor",
                isCorrect: false
            },
            {
                textoRespuesta: "Verde a estribor, y roja a babor",
                isCorrect: true
            },
            {
                textoRespuesta: "Blancas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. ¿Qué validez tiene el examen teórico?",
        opciones: [
            {
                textoRespuesta: "24 meses",
                isCorrect: true
            },
            {
                textoRespuesta: "12 meses",
                isCorrect: false
            },
            {
                textoRespuesta: "Caduca cuando se caduque el certificado médico",
                isCorrect: false
            },
            {
                textoRespuesta: "Ilimitada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. ¿Podremos volar si tenemos licencia de ULM pero el certificado médico está caducado?",
        opciones: [
            {
                textoRespuesta: "Sí",
                isCorrect: false
            },
            {
                textoRespuesta: "No. Para que sea válida la licencia, nuestro certificado médico debe estar en vigor",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí siempre y cuando tengamos cita con el médico",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí. Siempre y cuando no transcurran mas de 30 días desde su vencimiento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. ¿Quién tendrá preferencia de operación?",
        opciones: [
            {
                textoRespuesta: "Las aeronaves que estén aterrizando o en fase de aproximación final",
                isCorrect: true
            },
            {
                textoRespuesta: "Las que estén en tierra a punto de despegar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. Cuando el Piloto de ULM haya cumplido 40 años, la validez de las habilitaciones de su Licencia ULM será de",
        opciones: [
            {
                textoRespuesta: "6 meses",
                isCorrect: false
            },
            {
                textoRespuesta: "5 años",
                isCorrect: false
            },
            {
                textoRespuesta: "1 año",
                isCorrect: false
            },
            {
                textoRespuesta: "2 años",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "95. ¿Qué significa AESA?",
        opciones: [
            {
                textoRespuesta: "Agencia Estatal de Seguridad Aérea Sociedad Anónima",
                isCorrect: false
            },
            {
                textoRespuesta: "Aviación Española Sociedad Anónima",
                isCorrect: false
            },
            {
                textoRespuesta: "Agencia Estatal de Suficiencia Aeronáutica",
                isCorrect: false
            },
            {
                textoRespuesta: "Agencia Estatal de Seguridad Aérea",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "96. Una cruz blanca doble dispuesta horizontalmente en el área de señales indica:",
        opciones: [
            {
                textoRespuesta: "El aeródromo esta siendo usado por planeadores y se están desarrollando operaciones de vuelo a vela",
                isCorrect: true
            },
            {
                textoRespuesta: "Han de adoptarse precauciones especiales durante la aproximación para el aterrizaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Han de adoptarse precauciones especiales debido al mal estado de las calles de rodadura",
                isCorrect: false
            },
            {
                textoRespuesta: "Una unidad de área para el movimiento de aeronaves",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. Si en una carta aeronáutica, junto a las siglas de un CTR existe una letra D, esto significa:",
        opciones: [
            {
                textoRespuesta: "Que dicho CTR es un espacio aéreo de clase D, y por lo tanto, controlado",
                isCorrect: true
            },
            {
                textoRespuesta: "Que dicho CTR es un espacio aéreo no controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Que ese CTR sólo permite la entrada a aeronaves en VFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Que ese CTR sólo permite la entrada a aeronaves en IFR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. El factor de carga límite en un ULM será al menos:",
        opciones: [
            {
                textoRespuesta: "+3 y 2",
                isCorrect: true
            },
            {
                textoRespuesta: "+5 y 3",
                isCorrect: false
            },
            {
                textoRespuesta: "+2 y 1",
                isCorrect: false
            },
            {
                textoRespuesta: "El que establezca el fabricante",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. Área LER 71 C. El límite inferior es: 2000 pies AGL.",
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
        titulo: "100. Si una aeronave alcanza a otra en la misma dirección y sentido, deberá adelantarla por:",
        opciones: [
            {
                textoRespuesta: "La derecha",
                isCorrect: true
            },
            {
                textoRespuesta: "La izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "Abajo",
                isCorrect: false
            },
            {
                textoRespuesta: "Arriba",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;