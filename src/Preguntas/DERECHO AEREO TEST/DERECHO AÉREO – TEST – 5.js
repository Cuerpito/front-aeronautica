const preguntas = [
    {
        titulo: "1. La edad mínima para obtener la licencia de ultraligero es de 18 años:",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: true
            },
            {
                textoRespuesta: "Falso. La edad mínima es de 16 años",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. La edad mínima es de 17 años",
                isCorrect: false
            },
            {
                textoRespuesta: "Falso. La edad mínima es de 21 años",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. El certificado de aeronavegabilidad:",
        opciones: [
            {
                textoRespuesta: "No es obligatorio para los ultraligeros",
                isCorrect: false
            },
            {
                textoRespuesta: "Es un documento que debe llevarse a bordo de la aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "Solo es obligatorio para las aeronaves de construcción amateur",
                isCorrect: false
            },
            {
                textoRespuesta: "Aunque es obligatorio, no es necesario llevarlo a bordo de la aeronave",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. ¿Cuál de los siguientes elementos es obligatorio llevar en un ULM?",
        opciones: [
            {
                textoRespuesta: "Anemómetro, altímetro, variómetro, contador horario, extintor y brújula",
                isCorrect: false
            },
            {
                textoRespuesta: "Altímetro, anemómetro, contador horario, tacómetro, cinturón de seguridad e indicador de cantidad de combustible",
                isCorrect: true
            },
            {
                textoRespuesta: "Brújula, anemómetro, altímetro, tacómetro, cinturón de seguridad, paracaídas e indicador de cantidad de combustible",
                isCorrect: false
            },
            {
                textoRespuesta: "Anemómetro, altímetro, indicador de cantidad de combustible, brújula y paracaídas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. ¿Qué es el registro de tiempo de vuelo?",
        opciones: [
            {
                textoRespuesta: "El documento donde se anotan los vuelos realizados por el piloto",
                isCorrect: true
            },
            {
                textoRespuesta: "El documento en el que se anotan los vuelos realizados por una aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "El documento que debe entregar el alumno piloto antes de realizar el examen práctico",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. ¿Dónde podemos consultar si una zona peligrosa está activada?",
        opciones: [
            {
                textoRespuesta: "En una carta aeronáutica",
                isCorrect: false
            },
            {
                textoRespuesta: "En el AIP, apartado ENR",
                isCorrect: true
            },
            {
                textoRespuesta: "En el AIP, apartado AD",
                isCorrect: false
            },
            {
                textoRespuesta: "En el VOLMET",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. La distancia vertical entre un nivel, punto u objeto considerado como punto, y una referencia especificada es:",
        opciones: [
            {
                textoRespuesta: "Altura",
                isCorrect: true
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud de transición",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede ser tanto altitud como altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Una persona con licencia de piloto privado (PPL) que quiera obtener la de ultraligero, además de poseer la licencia de piloto en vigor y disponer de certificado médico, ¿qué más debe acreditar?",
        opciones: [
            {
                textoRespuesta: "Que ha realizado tres horas de instrucción práctica de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "Que ha realizado tres horas de instrucción práctica de las cuales, una habrá sido de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "Haber superado una prueba de vuelo ante un examinador",
                isCorrect: false
            },
            {
                textoRespuesta: "La respuesta B o, alternativamente, la C, son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "8. ¿Cuál es la edad mínima a la que se puede ser alumno piloto?",
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
        titulo: "9. El anemómetro, el altímetro y el variómetro son instrumentos obligatorios que debe llevar toda aeronave definida como ULM:",
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
        titulo: "10. ¿Qué significan las siglas AMSL?",
        opciones: [
            {
                textoRespuesta: "Sobre el terreno",
                isCorrect: false
            },
            {
                textoRespuesta: "Sobre el nivel del mar",
                isCorrect: true
            },
            {
                textoRespuesta: "Sobre el nivel medio de la superficie",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Para un ULM biplaza, ¿qué tipo de póliza de seguro es obligatoria?",
        opciones: [
            {
                textoRespuesta: "Una que cubra daños a terceros",
                isCorrect: false
            },
            {
                textoRespuesta: "Una a todo riesgo",
                isCorrect: false
            },
            {
                textoRespuesta: "Una que cubra daños a terceros y a ocupantes",
                isCorrect: true
            },
            {
                textoRespuesta: "Todas las pólizas de seguros disponibles para ULM son a todo riesgo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. En aproximación final, un planeador se encuentra por encima de una aeronave propulsada. ¿Cuál de las dos tendrá prioridad para aterrizar?",
        opciones: [
            {
                textoRespuesta: "La que esté más baja, en este caso la aeronave propulsada",
                isCorrect: false
            },
            {
                textoRespuesta: "La que esté más alta, en este caso el planeador",
                isCorrect: false
            },
            {
                textoRespuesta: "La aeronave propulsada deberá cederle el paso al planeador, aunque vaya más baja",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. A menos que se indique lo contrario, el circuito de tránsito de un aeródromo se realiza:",
        opciones: [
            {
                textoRespuesta: "Con virajes a la izquierda",
                isCorrect: true
            },
            {
                textoRespuesta: "Con virajes a la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "No hay una forma estándar de realizar este circuito",
                isCorrect: false
            },
            {
                textoRespuesta: "En cada momento concreto se debe especificar hacia dónde se hace el tráfico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "14. ¿Qué significan las siglas RNWY?",
        opciones: [
            {
                textoRespuesta: "Aerovía",
                isCorrect: false
            },
            {
                textoRespuesta: "Hora prevista de llegada",
                isCorrect: false
            },
            {
                textoRespuesta: "Pista",
                isCorrect: true
            },
            {
                textoRespuesta: "Control de aeródromo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. ¿Qué documentación debe presentar un menor de edad para matricularse en una escuela de vuelo?",
        opciones: [
            {
                textoRespuesta: "Fotocopia de su DNI",
                isCorrect: false
            },
            {
                textoRespuesta: "Autorización de quien ostente la patria potestad o tutela sobre el menor",
                isCorrect: false
            },
            {
                textoRespuesta: "Certificado médico en vigor",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "16. Indique la correcta. El certificado de aeronavegabilidad:",
        opciones: [
            {
                textoRespuesta: "Será expedido por el fabricante de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Es obligatorio para que las aeronaves sean autorizadas para el vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "No es obligatorio para el vuelo de los ultraligeros",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. ¿Cuál de la siguiente documentación deberá llevar una escuela de ultraligeros?",
        opciones: [
            {
                textoRespuesta: "Un parte mensual de actividades de la escuela",
                isCorrect: false
            },
            {
                textoRespuesta: "Un libro de mantenimiento en el que se anoten las operaciones importantes que afecten al mismo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un libro diario de vuelos que incluya las hojas de cronometraje donde se anoten los vuelos realizados por pilotos y alumnos",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "18. Indique la correcta. En un espacio aéreo clase G solo se podrá obtener:",
        opciones: [
            {
                textoRespuesta: "Servicio de control de tránsito aéreo para separación de IFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de control de tránsito aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de asesoramiento de tránsito aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "Servicio de información de vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "19. Comprobamos que nuestra habilitación de helicópteros (H) nos ha caducado. ¿Qué tendremos que hacer para obtenerla de nuevo?",
        opciones: [
            {
                textoRespuesta: "Revalidarla, acreditando cinco horas de vuelo en los doce meses anteriores a la solicitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Renovarla, acreditando cinco horas de vuelo en los doce meses anteriores a la solicitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Renovarla, realizando una prueba de vuelo ante un examinador",
                isCorrect: true
            },
            {
                textoRespuesta: "Nada, puesto que esta habilitación tiene una validez indefinida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. Según la ley, el factor de carga límite de un ULM será de, al menos:",
        opciones: [
            {
                textoRespuesta: "+2 y -3",
                isCorrect: false
            },
            {
                textoRespuesta: "+3 y -3",
                isCorrect: false
            },
            {
                textoRespuesta: "+3 y -2",
                isCorrect: true
            },
            {
                textoRespuesta: "+4 y -2",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. Indique la respuesta correcta respecto a la zona LED122: UNL/SEA:",
        opciones: [
            {
                textoRespuesta: "Se trata de una zona delimitada",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una zona peligrosa",
                isCorrect: false
            },
            {
                textoRespuesta: "El límite superior de la zona es ilimitado",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "22. ¿Quién es la persona encargada de decidir la pista por la que debemos operar?",
        opciones: [
            {
                textoRespuesta: "El jefe de vuelos",
                isCorrect: true
            },
            {
                textoRespuesta: "El comandante de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "El comandante y el copiloto toman la decisión por consenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Cualquiera de los anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. ¿Cuál es el periodo de validez del certificado de examinador?",
        opciones: [
            {
                textoRespuesta: "Dos años",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indefinido",
                isCorrect: false
            },
            {
                textoRespuesta: "Un año",
                isCorrect: false
            },
            {
                textoRespuesta: "Tres años",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "24. Cuando nuestra aeronave, propulsada mecánicamente, converja casi al mismo nivel que un planeador, ¿qué haremos?",
        opciones: [
            {
                textoRespuesta: "El planeador deberá cedernos el paso",
                isCorrect: false
            },
            {
                textoRespuesta: "Los dos deberemos virar hacia la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "Le cederemos el paso al planeador",
                isCorrect: true
            },
            {
                textoRespuesta: "Cederá el paso quien tenga a la otra a su derecha",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. ¿Cuáles son las siglas que significan “calle de rodadura”?",
        opciones: [
            {
                textoRespuesta: "TWR",
                isCorrect: false
            },
            {
                textoRespuesta: "TWY",
                isCorrect: true
            },
            {
                textoRespuesta: "RNWY",
                isCorrect: false
            },
            {
                textoRespuesta: "AWY",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. ¿Cómo se podría definir la Aeronavegabilidad?",
        opciones: [
            {
                textoRespuesta: "Es la capacidad de una aeronave para volar en condiciones IMC",
                isCorrect: false
            },
            {
                textoRespuesta: "Como la capacidad de una aeronave para cumplir las condiciones de utilización previstas",
                isCorrect: true
            },
            {
                textoRespuesta: "Como la capacidad de un avión para volar en situaciones extremas",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el certificado que se expide a las aeronaves que vayan a volar en VFR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Indique la correcta. El certificado médico en vigor:",
        opciones: [
            {
                textoRespuesta: "Es requisito imprescindible tanto para renovar como para revalidar una habilitación",
                isCorrect: true
            },
            {
                textoRespuesta: "Es requisito imprescindible para renovar una habilitación pero no para revalidarla",
                isCorrect: false
            },
            {
                textoRespuesta: "Es requisito imprescindible para revalidar una habilitación pero no para renovarla",
                isCorrect: false
            },
            {
                textoRespuesta: "Es solo requisito imprescindible para instructores y examinadores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. ¿Qué es el AIS?",
        opciones: [
            {
                textoRespuesta: "La publicación de información aeronáutica",
                isCorrect: false
            },
            {
                textoRespuesta: "No existe, lo que se utiliza es el AIP",
                isCorrect: false
            },
            {
                textoRespuesta: "El servicio de información aeronáutica",
                isCorrect: true
            },
            {
                textoRespuesta: "El control de tráfico aéreo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. ¿Cuál es la diferencia entre renovar y revalidar una habilitación?",
        opciones: [
            {
                textoRespuesta: "La única que se revalida es la de radiofonista, el resto de habilitaciones se renueva",
                isCorrect: false
            },
            {
                textoRespuesta: "Se revalida antes de que caduque y se renueva si ya ha caducado",
                isCorrect: true
            },
            {
                textoRespuesta: "No hay ninguna diferencia, son sinónimos",
                isCorrect: false
            },
            {
                textoRespuesta: "La única que se revalida es la de instructor. El resto, excepto la de radiofonista, se renueva",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Además de quienes hayan obtenido el certificado de examinador, ¿a quién más podrá designar AESA para serlo?",
        opciones: [
            {
                textoRespuesta: "A los instructores de vuelo que acrediten más de 100 horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "A los pilotos que acrediten más de cinco años de experiencia en vuelo como instructores",
                isCorrect: false
            },
            {
                textoRespuesta: "A los instructores de vuelo que acrediten más de 150 horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "A quienes desarrollen tareas de inspección aeronáutica para AESA",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "31. ¿De quién es la responsabilidad de asegurarse de que las condiciones son las adecuadas antes del despegue?",
        opciones: [
            {
                textoRespuesta: "Del jefe de vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Del copiloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Del comandante de la aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "Del personal del aeropuerto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. Cuando dos aeronaves se aproximen de frente:",
        opciones: [
            {
                textoRespuesta: "Las dos virarán a la derecha",
                isCorrect: true
            },
            {
                textoRespuesta: "La que primero se dé cuenta virará a la derecha y la otra seguirá su ruta",
                isCorrect: false
            },
            {
                textoRespuesta: "Las dos virarán hacia la izquierda",
                isCorrect: false
            },
            {
                textoRespuesta: "La que primero se dé cuenta ascenderá y la otra descenderá",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. Nos encontramos en tramo base, a una altitud inferior que otra aeronave en tramo final. ¿Quién tiene preferencia?",
        opciones: [
            {
                textoRespuesta: "La aeronave en tramo final",
                isCorrect: true
            },
            {
                textoRespuesta: "Nosotros, puesto que las aeronaves en base tienen preferencia sobre las que estén en final",
                isCorrect: false
            },
            {
                textoRespuesta: "Nosotros, debido a que las aeronaves que estén más bajas tienen preferencia sobre las que estén más altas",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "34. En una escuela de ultraligeros, ¿quién es la persona encargada de formular el parte mensual de actividades de la escuela?",
        opciones: [
            {
                textoRespuesta: "Un instructor habilitado",
                isCorrect: false
            },
            {
                textoRespuesta: "El jefe de vuelos",
                isCorrect: true
            },
            {
                textoRespuesta: "El propietario de la escuela",
                isCorrect: false
            },
            {
                textoRespuesta: "La persona que realice las funciones de administración de la escuela",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. De las siguientes funciones del jefe de vuelos de una escuela de ultraligeros, ¿cuál puede delegar en un piloto expresamente autorizado?",
        opciones: [
            {
                textoRespuesta: "Firmar la hoja de cronometraje al finalizar los vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Establecer el orden de los vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Determinar la pista en servicio",
                isCorrect: false
            },
            {
                textoRespuesta: "Realizar los vuelos de prueba relacionados con el mantenimiento y la seguridad de los ultraligeros de la escuela",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "36. En vuelo de crucero, un ULM no puede descender por debajo de la mitad de su límite máximo establecido.",
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
        titulo: "37. Un examinador experimentado puede realizar evaluaciones para obtener la habilitación de instructor.",
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
        titulo: "38. ¿Qué requisitos son indispensables para designar a un piloto como comandante de la aeronave?",
        opciones: [
            {
                textoRespuesta: "Estar en posesión de la licencia correspondiente",
                isCorrect: false
            },
            {
                textoRespuesta: "Tener el vigor las habilitaciones que se requieran para el tipo de aeronave que va volar",
                isCorrect: false
            },
            {
                textoRespuesta: "Haber superado un examen práctico que habilite para el puesto de comandante",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "39. Un alumno piloto con 16 años aprueba el examen práctico. ¿Obtendrá la licencia?",
        opciones: [
            {
                textoRespuesta: "No, no obtendrá la licencia hasta que cumpla 18 años",
                isCorrect: false
            },
            {
                textoRespuesta: "No, no obtendrá la licencia hasta que cumpla 17 años",
                isCorrect: false
            },
            {
                textoRespuesta: "El examen práctico no podrá hacerlo hasta que haya cumplido 17 años",
                isCorrect: true
            },
            {
                textoRespuesta: "Para ser alumno piloto hay que ser mayor de edad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "40. ¿Puede volar solo un alumno piloto?",
        opciones: [
            {
                textoRespuesta: "Bajo ningún concepto",
                isCorrect: false
            },
            {
                textoRespuesta: "Le está permitido siempre que ya haya realizado su primer vuelo solo bajo la supervisión de un instructor de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo cuando haya sido autorizado expresamente por su escuela",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo cuando forme parte de su instrucción y lo haga bajo la supervisión de su instructor de vuelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "41. ¿Cuándo podrá hacer el alumno piloto su primer vuelo solo?",
        opciones: [
            {
                textoRespuesta: "Cuando hayan realizado un mínimo de 15 horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando haya demostrado a su instructor el conocimiento de las reglas de vuelo  y situaciones que se puedan dar",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando haya realizado un mínimo de 20 horas de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando haya realizado no menos de 20 despegues y 20 aterrizajes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. Indique la correcta respecto al área LEP143: 3.000 ft ALT/SFC:",
        opciones: [
            {
                textoRespuesta: "Es una zona peligrosa cuyo límite superior es 3.000 ft de altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una zona prohibida cuyo límite inferior es el suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una zona restringida cuyo límite superior es 3.000 ft de altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Es una zona prohibida cuyo límite inferior es el suelo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "43. ¿Cuál de los siguientes medios no es obligatorio que tengan las escuelas de ultraligeros?",
        opciones: [
            {
                textoRespuesta: "Un jefe de vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Un botiquín",
                isCorrect: false
            },
            {
                textoRespuesta: "Un sistema de comunicaciones por radio",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. ¿Cada cuánto tiempo tiene un piloto que revalidar las habilitaciones que así lo requieran?",
        opciones: [
            {
                textoRespuesta: "Una vez al año",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada dos años",
                isCorrect: true
            },
            {
                textoRespuesta: "Las habilitaciones se revalidan de forma automática cuando renovamos nuestro certificado médico",
                isCorrect: false
            },
            {
                textoRespuesta: "Cada cinco años",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. La renovación a revalidación de la habilitación de radiofonista:",
        opciones: [
            {
                textoRespuesta: "Será automática cuando se revalide o renueve alguna de las habilitaciones de ultraligero",
                isCorrect: true
            },
            {
                textoRespuesta: "Debe hacerse cada dos años",
                isCorrect: false
            },
            {
                textoRespuesta: "Deberá hacerse cada cinco años",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. La masa máxima autorizada al despegue para un ULM terrestre monoplaza es:",
        opciones: [
            {
                textoRespuesta: "400 kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "300 kg.",
                isCorrect: true
            },
            {
                textoRespuesta: "350 kg.",
                isCorrect: false
            },
            {
                textoRespuesta: "450 kg.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. En España, ¿quién determina el nivel de transición?",
        opciones: [
            {
                textoRespuesta: "El jefe de vuelos de cada aeropuerto",
                isCorrect: false
            },
            {
                textoRespuesta: "Un controlador aéreo",
                isCorrect: false
            },
            {
                textoRespuesta: "El Estado",
                isCorrect: true
            },
            {
                textoRespuesta: "Un operador designado por AESA",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. ¿Cuál es el documento que sirve para identificar técnicamente a la aeronave?",
        opciones: [
            {
                textoRespuesta: "El manual de Vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "El manual técnico que expide OACI",
                isCorrect: false
            },
            {
                textoRespuesta: "El certificado de aeronavegabilidad",
                isCorrect: true
            },
            {
                textoRespuesta: "El libro de mantenimiento de la aeronave",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. El documento de identificación de alumno que emiten las escuelas, ¿qué periodo de validez tiene?",
        opciones: [
            {
                textoRespuesta: "Hay que renovarlo cada dos años en caso de que la persona siga siendo alumno",
                isCorrect: false
            },
            {
                textoRespuesta: "Caduca en la misma fecha que el certificado médico del alumno",
                isCorrect: true
            },
            {
                textoRespuesta: "No caduca mientras el alumno continúe su formación con la escuela",
                isCorrect: false
            },
            {
                textoRespuesta: "Hay que renovarlo una vez al año si la persona sigue siendo alumno",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "50. ¿Cuál de los siguientes es requisito para obtener el certificado de examinador por parte de AESA?",
        opciones: [
            {
                textoRespuesta: "Acreditar, al menos, 500 horas como instructor de ultraligero",
                isCorrect: false
            },
            {
                textoRespuesta: "Haber ejercido como instructor de ultraligero, al menos, durante los últimos 12 meses",
                isCorrect: false
            },
            {
                textoRespuesta: "Acreditar, al menos, 500 horas de vuelo como piloto al mando y 150 como instructor",
                isCorrect: true
            },
            {
                textoRespuesta: "Haber ejercido un mínimo de 300 horas como instructor de ultraligero en los últimos 24 meses",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. ¿Cuál es la definición de visibilidad en vuelo?",
        opciones: [
            {
                textoRespuesta: "La visibilidad en un aeródromo, indicada por un observador competente",
                isCorrect: false
            },
            {
                textoRespuesta: "La visibilidad hacia adelante, medida desde el puesto de pilotaje de una aeronave en vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "La visibilidad vertical, medida desde el puesto de pilotaje de una aeronave en vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "La distancia horizontal en un aeródromo sin obstáculos por encima de 50’",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Según los códigos de señales en tierra, V significa ____ y X significa____:",
        opciones: [
            {
                textoRespuesta: "Ayuda médica / Ayuda",
                isCorrect: false
            },
            {
                textoRespuesta: "Emergencia / Urgencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Ayuda / Ayuda médica",
                isCorrect: true
            },
            {
                textoRespuesta: "Urgencia / Emergencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. ¿Qué figura es la encargada de supervisar la prueba de vuelo para la renovación de una habilitación?",
        opciones: [
            {
                textoRespuesta: "Un examinador acreditado por AESA",
                isCorrect: true
            },
            {
                textoRespuesta: "El jefe de Vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Un instructor de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un examinador experimentado acreditado por AESA",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. ¿Cuál es el periodo de validez del examen teórico para la obtención de la licencia, antes de que hagamos el práctico?",
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
                textoRespuesta: "18 meses",
                isCorrect: false
            },
            {
                textoRespuesta: "36 meses",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "55. El peso en vacío de la aeronave incluye el combustible no consumible:",
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
        titulo: "56. ¿A qué nos referimos cuando hablamos de “visibilidad en tierra”?",
        opciones: [
            {
                textoRespuesta: "A la distancia horizontal en un aeródromo en la que no encontramos obstáculos de más de 50’ de altura",
                isCorrect: false
            },
            {
                textoRespuesta: "A la visibilidad hacia adelante medida desde el puesto de pilotaje de una aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "A la visibilidad vertical en un aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "A la visibilidad en un aeródromo, indicada por un observador competente",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "57. “Trayectoria de vuelo paralela a la pista de aterrizaje en la dirección opuesta al aterrizaje”. ¿A qué tramo del circuito de tránsito de aeródromo corresponde esta definición?",
        opciones: [
            {
                textoRespuesta: "Tramo viento en cola",
                isCorrect: true
            },
            {
                textoRespuesta: "Tramo base",
                isCorrect: false
            },
            {
                textoRespuesta: "Tramo viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Tramo viento cruzado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Si en una zona de señales vemos un panel cuadrado rojo horizontal con diagonales amarillas, ¿podremos aterrizar en el aeródromo?",
        opciones: [
            {
                textoRespuesta: "Sí, aunque con precauciones especiales",
                isCorrect: false
            },
            {
                textoRespuesta: "No, pues indica un área de maniobras inservible",
                isCorrect: false
            },
            {
                textoRespuesta: "No, es una prohibición de aterrizar",
                isCorrect: true
            },
            {
                textoRespuesta: "No, pues indica que la zona está siendo utilizada por planeadores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. ¿Cuál es la edad mínima a la que puede presentarse al examen práctico el alumno piloto?",
        opciones: [
            {
                textoRespuesta: "16 años",
                isCorrect: false
            },
            {
                textoRespuesta: "17 años",
                isCorrect: true
            },
            {
                textoRespuesta: "18 años",
                isCorrect: false
            },
            {
                textoRespuesta: "A la misma a la que puede ser alumno piloto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. El instructor de ULM deberá llevar siempre encima la autorización de la escuela de ultraligeros expedida por AESA:",
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
        titulo: "61. En un ULM de dos plazas, ¿cuál de ellas se considera el puesto de mando?",
        opciones: [
            {
                textoRespuesta: "La que está situada a la izquierda",
                isCorrect: true
            },
            {
                textoRespuesta: "La que tenga a su alcance todos los medios necesarios para el manejo y control de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "La que está situada a la derecha",
                isCorrect: false
            },
            {
                textoRespuesta: "Es indiferente, pues en todo caso todos los medios necesarios están duplicados",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. El instructor de un alumno piloto, ¿puede ejercer de examinador de ese mismo alumno?",
        opciones: [
            {
                textoRespuesta: "No, pues para ello debe tener el certificado de examinador",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, siempre que esté acreditado como examinador",
                isCorrect: false
            },
            {
                textoRespuesta: "No, pues no puede hacerlo ninguna persona cuya parcialidad con el interesado se vea afectada",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, pues los alumnos piloto siempre son examinados por sus instructores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. ¿A qué corresponden las dos cifras que se encuentran en la cabecera de pista?",
        opciones: [
            {
                textoRespuesta: "A la dirección magnética del viento",
                isCorrect: false
            },
            {
                textoRespuesta: "Al número de pista, que indica el rumbo verdadero",
                isCorrect: false
            },
            {
                textoRespuesta: "Al número de pista, que indica el rumbo magnético",
                isCorrect: true
            },
            {
                textoRespuesta: "A la longitud de la pista",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. ¿Dónde se señala el número de la pista de un aeródromo?",
        opciones: [
            {
                textoRespuesta: "En la cabecera de la pista",
                isCorrect: true
            },
            {
                textoRespuesta: "En el umbral de la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Aproximadamente en el centro de la pista",
                isCorrect: false
            },
            {
                textoRespuesta: "En el umbral y en el centro de la pista, aproximadamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. ¿Puede volar una aeronave si no tiene certificado de aeronavegabilidad?",
        opciones: [
            {
                textoRespuesta: "No",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, es un documento recomendable per no obligatorio",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, siempre que el resto de la documentación esté en regla",
                isCorrect: false
            },
            {
                textoRespuesta: "Solo para realizar prácticas en una escuela de ultraligeros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Para la obtención de la habilitación de radiofonista:",
        opciones: [
            {
                textoRespuesta: "No es necesario tener la licencia de ultraligero, pues es una titulación aparte",
                isCorrect: false
            },
            {
                textoRespuesta: "Deberemos tener, al menos, una habilitación en nuestra licencia de ultraligero",
                isCorrect: true
            },
            {
                textoRespuesta: "Podemos obtenerla tras realizar un curso aprobado por AESA sin necesidad de realización de examen",
                isCorrect: false
            },
            {
                textoRespuesta: "La obtendremos tras superar un examen teórico y otro práctico, sin necesidad de tener previamente otra habilitación en nuestra licencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. ¿Cuál es la definición de capacidad de combustible?",
        opciones: [
            {
                textoRespuesta: "La capacidad mínima de combustible con la que la aeronave tiene permitido despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "La capacidad máxima de combustible que puede contener la aeronave",
                isCorrect: true
            },
            {
                textoRespuesta: "La capacidad óptima de consumo de combustible de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "La cantidad de combustible que debe contener la aeronave en función del tipo de vuelo que vaya a realizar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. En circunstancias normales, ¿qué organismo es el encargado del control de la circulación aérea en España?",
        opciones: [
            {
                textoRespuesta: "El Ministerio de Defensa",
                isCorrect: false
            },
            {
                textoRespuesta: "El Ministerio de Fomento",
                isCorrect: true
            },
            {
                textoRespuesta: "El Ministerio del Interior",
                isCorrect: false
            },
            {
                textoRespuesta: "El Ministerio de Industria, Comercio y Turismo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. El comienzo de la parte de pista utilizable para el aterrizaje es:",
        opciones: [
            {
                textoRespuesta: "Principio de pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Tramo de pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Umbral",
                isCorrect: true
            },
            {
                textoRespuesta: "Pista en servicio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. ¿Cuál es la altura mínima que puede llevar un ULM en vuelo de crucero?",
        opciones: [
            {
                textoRespuesta: "150 ft.",
                isCorrect: false
            },
            {
                textoRespuesta: "500 m.",
                isCorrect: false
            },
            {
                textoRespuesta: "150 ft o 500 m.",
                isCorrect: false
            },
            {
                textoRespuesta: "500 ft o 150 m.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. En un área de señales hay un panel cuadrado rojo y horizontal, con una diagonal amarilla. ¿Qué significa?",
        opciones: [
            {
                textoRespuesta: "Necesidad de precauciones especiales durante la aproximación y el aterrizaje",
                isCorrect: true
            },
            {
                textoRespuesta: "Prohibición de aterrizar",
                isCorrect: false
            },
            {
                textoRespuesta: "Área de maniobras inservible",
                isCorrect: false
            },
            {
                textoRespuesta: "Planeadores en vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "72. De las siguientes habilitaciones, ¿cuáles deben ser revalidadas o renovadas cada dos años?",
        opciones: [
            {
                textoRespuesta: "Multiejes de ala fija (MAF), Instructor (FI) y Radiofonista (RTC)",
                isCorrect: false
            },
            {
                textoRespuesta: "Multiejes de ala fija (MAF), Instructor (FI), Desplazamiento del centro de gravedad (DCG), Autogiros (AG), Helicópteros (H) e Hidroavión (HD)",
                isCorrect: true
            },
            {
                textoRespuesta: "Multiejes de ala fija (MAF), Helicópteros (H), Instructor (FI) y Radiofonista (RTC)",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas deben ser revalidadas o renovadas cada dos años",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "73. Un ultraligero no debe operar a una altura mayor de:",
        opciones: [
            {
                textoRespuesta: "1.000 m sobre tierra o mar",
                isCorrect: false
            },
            {
                textoRespuesta: "300 ft sobre tierra o mar",
                isCorrect: false
            },
            {
                textoRespuesta: "1.000’ sobre tierra o mar",
                isCorrect: true
            },
            {
                textoRespuesta: "3.000’ sobre tierra o mar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. ¿Cuántas horas de vuelo deberá acreditar un piloto de ULM para poder ser jefe de vuelos?",
        opciones: [
            {
                textoRespuesta: "100 horas",
                isCorrect: true
            },
            {
                textoRespuesta: "5 horas en los últimos doce meses",
                isCorrect: false
            },
            {
                textoRespuesta: "200 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "50 horas como piloto y 50 horas como instructor",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. ¿Cuáles son las mínimas condiciones VMC que se tienen que cumplir para que un ultraligero vuele en un espacio aéreo de clase A?",
        opciones: [
            {
                textoRespuesta: "5 km de visibilidad de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "8 km de visibilidad de vuelo y 1.000’ de distancia vertical de nubes",
                isCorrect: false
            },
            {
                textoRespuesta: "Un vuelo VFR no está permitido en un espacio aéreo de clase A",
                isCorrect: true
            },
            {
                textoRespuesta: "8 km de visibilidad de vuelo y 1.500 m de distancia horizontal de nubes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. Para la instrucción práctica el alumno piloto deberá realizar un vuelo de travesía con una duración mínima de:",
        opciones: [
            {
                textoRespuesta: "60 minutos",
                isCorrect: true
            },
            {
                textoRespuesta: "45 minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "Una hora y media",
                isCorrect: false
            },
            {
                textoRespuesta: "Dos horas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. El Comandante de la aeronave:",
        opciones: [
            {
                textoRespuesta: "Deberá actuar en todo momento como piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el responsable de la seguridad en vuelo pero no actuará como piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el responsable de que la operación se realice de acuerdo con el Reglamento de Circulación Aérea",
                isCorrect: true
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "78. El encargado de demostrar que una aeronave conserva las condiciones de aeronavegabilidad para las que fue construido será:",
        opciones: [
            {
                textoRespuesta: "El inspector de Material de la Dirección General de Aviación Civil",
                isCorrect: false
            },
            {
                textoRespuesta: "El piloto al que se lo requiera el Ministerio de Fomento",
                isCorrect: false
            },
            {
                textoRespuesta: "El constructor de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "El propietario de la aeronave",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "79. ¿Qué significan las siglas TSA?",
        opciones: [
            {
                textoRespuesta: "Área temporal de seguridad",
                isCorrect: false
            },
            {
                textoRespuesta: "Pista",
                isCorrect: false
            },
            {
                textoRespuesta: "Salida de tránsito de aeródromo",
                isCorrect: false
            },
            {
                textoRespuesta: "Área temporalmente segregada",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "80. Vemos que nuestra habilitación de multiejes de ala fija (MAF) está a punto de cumplir dos años. ¿Qué tenemos que hacer?",
        opciones: [
            {
                textoRespuesta: "Revalidarla, acreditando cinco horas de vuelo en los doce meses anteriores a la solicitud",
                isCorrect: true
            },
            {
                textoRespuesta: "Renovarla, acreditando cinco horas de vuelo en los doce meses anteriores a la solicitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Revalidarla, realizando una prueba de vuelo ante un examinador",
                isCorrect: false
            },
            {
                textoRespuesta: "Nada, puesto que esta habilitación tiene una validez indefinida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. El Servicio de Información Aeronáutica (AIS) proporciona el asesoramiento e información necesarios para la seguridad operacional, regularidad y eficiencia de la navegación aérea:",
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
        titulo: "82. Según la Ley de Navegación Aérea, ¿quién es el encargado de expedir el certificado de aeronavegabilidad de una aeronave?",
        opciones: [
            {
                textoRespuesta: "Aesa",
                isCorrect: true
            },
            {
                textoRespuesta: "El fabricante de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "El inspector de Vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "El jefe de Vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Además de otros requisitos, el piloto que desee obtener la habilitación de instructor (FI) deberá acreditar:",
        opciones: [
            {
                textoRespuesta: "100 horas de vuelo en el tipo de aeronave en la que pretende impartir la instrucción",
                isCorrect: false
            },
            {
                textoRespuesta: "200 horas de vuelo en el tipo de aeronave de la que pretende impartir la instrucción",
                isCorrect: true
            },
            {
                textoRespuesta: "150 horas de vuelo en el tipo de aeronave de la que pretende impartir la instrucción",
                isCorrect: false
            },
            {
                textoRespuesta: "500 horas de vuelo en el tipo de aeronave de la que pretende impartir la instrucción",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. En el AIP vemos que la zona LED104: FL460/FL100 está activada. ¿Podremos volar por ella con un ULM?",
        opciones: [
            {
                textoRespuesta: "Sí, puesto que el nivel inferior es de 10.000’",
                isCorrect: true
            },
            {
                textoRespuesta: "No, ya que el nivel inferior es de 100’",
                isCorrect: false
            },
            {
                textoRespuesta: "No, ya que nunca podremos pasar por una zona peligrosa",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, siempre que tengamos autorización previa",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. Los examinadores experimentados, además de las funciones de un examinador, ¿para qué más están habilitados?",
        opciones: [
            {
                textoRespuesta: "Para realizar la evaluación de competencia para obtener la autorización de examinador",
                isCorrect: false
            },
            {
                textoRespuesta: "Para acreditar a otros examinadores como experimentados",
                isCorrect: false
            },
            {
                textoRespuesta: "Para realizar la evaluación de competencia para la obtención de la habilitación de instructor de ultraligero",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "86. ¿Quién debe responsabilizarse con su firma de la hoja de cronometraje al finalizar los vuelos realizados en la escuela?",
        opciones: [
            {
                textoRespuesta: "El piloto de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "El instructor de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "El propietario de la escuela",
                isCorrect: false
            },
            {
                textoRespuesta: "El jefe de vuelos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "87. ¿Cuál es la documentación mínima que el constructor de un ULM debe entregar al usuario?",
        opciones: [
            {
                textoRespuesta: "Un manual de usuario en el que se describan procedimientos, limitaciones, etc., y un libro de mantenimiento",
                isCorrect: true
            },
            {
                textoRespuesta: "Un certificado tipo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un manual de usuario en el que se describan procedimientos, limitaciones, etc., y un diario de vuelos",
                isCorrect: false
            },
            {
                textoRespuesta: "Un manual de usuario y las instrucciones de mantenimiento periódico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. La distancia vertical entre un nivel, punto u objeto considerado como punto, y el nivel medio del mar es:",
        opciones: [
            {
                textoRespuesta: "Altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud",
                isCorrect: true
            },
            {
                textoRespuesta: "Altitud de transición",
                isCorrect: false
            },
            {
                textoRespuesta: "Puede ser tanto altitud como altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. Indique la correcta. El peso en vacío de la aeronave:",
        opciones: [
            {
                textoRespuesta: "Incluye el combustible utilizable",
                isCorrect: false
            },
            {
                textoRespuesta: "No incluye combustible pero sí la máxima cantidad de aceite lubricante y líquido refrigerante del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el peso de la aeronave terminada con todos sus equipos sin incluir combustible ni líquidos lubricantes o refrigerantes",
                isCorrect: false
            },
            {
                textoRespuesta: "Incluye el combustible no consumible y la máxima cantidad de aceite lubricante y de líquido refrigerante",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "90. ¿En cuál de las siguientes situaciones podrá un alumno piloto llevar pasajeros a bordo de un ULM?",
        opciones: [
            {
                textoRespuesta: "Siempre que no vaya a realizar un vuelo de travesía",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre que ya haya realizado su primero vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "Siempre que tenga autorización expresa por parte de su instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "Un alumno piloto no puede llevar pasajeros",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "91. ¿Cuántas horas como instructor de vuelo deberá acreditar un piloto que quiere obtener el certificado de examinador?",
        opciones: [
            {
                textoRespuesta: "150",
                isCorrect: true
            },
            {
                textoRespuesta: "500",
                isCorrect: false
            },
            {
                textoRespuesta: "100",
                isCorrect: false
            },
            {
                textoRespuesta: "200",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. Cuando un piloto no pueda acreditar las horas de vuelo necesarias para revalidar su habilitación de instructor, ¿qué ocurre?",
        opciones: [
            {
                textoRespuesta: "Tendrá que renovarla",
                isCorrect: true
            },
            {
                textoRespuesta: "La habilitación se anulará y tendrá que realizar todo el proceso de nuevo para obtenerla",
                isCorrect: false
            },
            {
                textoRespuesta: "No ocurre nada porque esta habilitación tiene validez indefinida",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendrá que realizar un examen teórico y uno práctico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. ¿Qué se considera como “vuelo solo” según el RD123/2015 de 27 de febrero?",
        opciones: [
            {
                textoRespuesta: "Cualquier vuelo en el que vaya una sola persona a bordo de la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Aquel en el que el alumno piloto toma los mandos durante todo el vuelo por primera vez",
                isCorrect: false
            },
            {
                textoRespuesta: "Aquel vuelo en el que la única persona a bordo es el alumno piloto",
                isCorrect: true
            },
            {
                textoRespuesta: "Todo vuelo que se haga sin necesidad de establecer contacto por radio",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. Indique cuál de las siguientes respuestas incluye todas las habilitaciones establecidas para la licencia de ultraligeros:",
        opciones: [
            {
                textoRespuesta: "Multiejes de ala fija, Autogiros, Helicópteros, Hidroavión, Instructor y Radiofonista",
                isCorrect: false
            },
            {
                textoRespuesta: "Multiejes de ala fija, Autogiros, Helicópteros, Hidroavión e Instructor",
                isCorrect: false
            },
            {
                textoRespuesta: "Multiejes de ala fija, Desplazamiento del centro de gravedad, Autogiros, Helicópteros, Hidroavión, Instructor, Radiofonista y Examinador",
                isCorrect: false
            },
            {
                textoRespuesta: "Multiejes de ala fija, Desplazamiento del centro de gravedad, Autogiros, Helicópteros, Hidroavión, Instructor y Radiofonista",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "95. Cuando dos aeronaves converjan al mismo nivel aproximadamente, ¿quién cederá el paso?",
        opciones: [
            {
                textoRespuesta: "La aeronave que tenga a la otra a su izquierda, en cualquier caso",
                isCorrect: false
            },
            {
                textoRespuesta: "La aeronave que lleva una velocidad IAS menor",
                isCorrect: false
            },
            {
                textoRespuesta: "La aeronave que tenga a la otra a su derecha, en cualquier caso",
                isCorrect: false
            },
            {
                textoRespuesta: "La aeronave que tenga a la otra a su derecha, salvo en las excepciones previstas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "96. ¿Cómo podrá el piloto obtener la habilitación de radiofonista (RTC)?",
        opciones: [
            {
                textoRespuesta: "Bastará con haber superado el curso de radiofonista tras obtener la licencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Deberá tener, al menos, una habilitación en vigor en su licencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Bastará con realizar un examen teórico",
                isCorrect: false
            },
            {
                textoRespuesta: "Tendrá que superar únicamente un examen práctico",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. ¿Cuántas maniobras de despegue y aterrizaje debe realizar el alumno piloto en su instrucción práctica?",
        opciones: [
            {
                textoRespuesta: "Las que el instructor crea oportunas",
                isCorrect: false
            },
            {
                textoRespuesta: "No menos de veinte despegues y veinte aterrizajes",
                isCorrect: true
            },
            {
                textoRespuesta: "No menos de quince despegues y quince aterrizajes",
                isCorrect: false
            },
            {
                textoRespuesta: "No menos de diez despegues y diez aterrizajes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. De las siguientes aeronaves, ¿cuál tendrá prioridad para el aterrizaje?",
        opciones: [
            {
                textoRespuesta: "Una aeronave propulsada en aproximación final",
                isCorrect: false
            },
            {
                textoRespuesta: "Cualquier aeronave con una situación de urgencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Un planeador",
                isCorrect: false
            },
            {
                textoRespuesta: "Cualquier aeronave con una situación de emergencia",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "99. ¿Cuántas horas de vuelo comprenderá la instrucción del tipo concreto de aeronave?",
        opciones: [
            {
                textoRespuesta: "Un mínimo de 15, de las cuales 3 serán de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mínimo de 20, de las cuales 5 serán de vuelo solo",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mínimo de 10 en el caso de aeronaves con desplazamiento de centro de gravedad",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "100. ¿Cuál de las habilitaciones establecidas tiene una validez indefinida?",
        opciones: [
            {
                textoRespuesta: "Desplazamiento del centro de gravedad (DCG)",
                isCorrect: false
            },
            {
                textoRespuesta: "Instructor (FI)",
                isCorrect: false
            },
            {
                textoRespuesta: "Radiofonista (RTC)",
                isCorrect: true
            },
            {
                textoRespuesta: "Multiejes de ala fija (MAF)",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;