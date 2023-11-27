const preguntas = [
    {
        titulo: "1. En el hemisferio Norte, el error de inclinación de la brújula hace que durante la navegación, mientras viramos, tengamos que:",
        opciones: [
            {
                textoRespuesta: "Detener el viraje antes del Norte",
                isCorrect: false
            },
            {
                textoRespuesta: "Detener el viraje después del Norte",
                isCorrect: false
            },
            {
                textoRespuesta: "Detener al viraje después del Sur",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "2. Cuando trazamos una línea de ruta en nuestra carta de navegación observamos que ésta cruza una zona calificada como LED, cuyos límites son FL145/1500 ft AGL. ¿Debemos modificar nuestra ruta?",
        opciones: [
            {
                textoRespuesta: "No, pues aunque se trata de una zona prohibida, el límite inferior se encuentra por encima de las limitaciones a las que está sometido un ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, pues no podemos volar sobre una zona peligrosa bajo ningún concepto",
                isCorrect: false
            },
            {
                textoRespuesta: "No, pues aunque se trata de una zona peligrosa, el límite inferior se encuentra por encima de las limitaciones a las que está sometido un ULM",
                isCorrect: true
            },
            {
                textoRespuesta: "Sí, pues no podemos volar sobre una zona prohibida bajo ningún concepto",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. ¿Hacia dónde debemos realizar la corrección del ángulo de deriva durante la navegación?",
        opciones: [
            {
                textoRespuesta: "Hacia el lado donde viene el viento",
                isCorrect: true
            },
            {
                textoRespuesta: "Hacia la derecha si la declinación es Este",
                isCorrect: false
            },
            {
                textoRespuesta: "Hacia la izquierda si la declinación es Oeste",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "4. ¿A qué coordenadas corresponde la intersección entre el Ecuador y el antimeridiano de Greenwich?",
        opciones: [
            {
                textoRespuesta: "Latitud 0º  Longitud 90º",
                isCorrect: false
            },
            {
                textoRespuesta: "Longitud 0º Latitud 180º",
                isCorrect: false
            },
            {
                textoRespuesta: "Latitud 0º Longitud 180º",
                isCorrect: true
            },
            {
                textoRespuesta: "Latitud 90º Longitud 0º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. La derrota y el rumbo de la aeronave coincidirán siempre en ausencia de viento:",
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
        titulo: "6. En una escala de 1:1.000.000, 2’5 mm corresponden a:",
        opciones: [
            {
                textoRespuesta: "25 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "2’5 m.",
                isCorrect: false
            },
            {
                textoRespuesta: "2.500 m.",
                isCorrect: true
            },
            {
                textoRespuesta: "5 km.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Durante la navegación, indique en cuál de los siguientes momentos no recibiremos, o lo haremos con dificultad, las señales del VOR:",
        opciones: [
            {
                textoRespuesta: "Cuando nos encontremos sobrevolando la emisora",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando la emisora esté fuera del alcance visual",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando haya un obstáculo entre la emisora y la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "8. Si tenemos viento de 315º a 17 kt, ¿qué significa?",
        opciones: [
            {
                textoRespuesta: "Que el viento va hacia 315 grados a 17 nudos",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el viento va hacia 135 grados a 17 km/hora",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el viento viene de 315 grados a 17 km/hora",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el viento viene de 135 grados a 17 nudos",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "9. De los siguientes equipos, indique cuál es capaz de proporcionar la distancia entre la aeronave y la estación emisora:",
        opciones: [
            {
                textoRespuesta: "NDB",
                isCorrect: false
            },
            {
                textoRespuesta: "ADF",
                isCorrect: false
            },
            {
                textoRespuesta: "DME",
                isCorrect: true
            },
            {
                textoRespuesta: "VOR",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. Llevamos un rumbo de 070º, tenemos viento de 250º a 15kt y nuestra TAS es de 190kt. ¿Cuál es nuestra GS?",
        opciones: [
            {
                textoRespuesta: "205kt.",
                isCorrect: true
            },
            {
                textoRespuesta: "380kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "175kt.",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. Cuando vamos a realizar un vuelo:",
        opciones: [
            {
                textoRespuesta: "Debemos asegurarnos de que la ruta trazada es una línea recta sobre la carta",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca debemos doblar la carta que vamos a utilizar durante el vuelo, pues tiene que ser visible en su totalidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Se debe establecer un primer punto de situación para comenzar la ruta después de realizar la maniobra de despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "No será necesario localizar previamente campos para posibles aterrizajes de emergencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. Teniendo en cuenta el error de inclinación que presenta la brújula, ¿cuál de estas afirmaciones es correcta?",
        opciones: [
            {
                textoRespuesta: "Si nos encontramos en el hemisferio Sur y queremos virar al Norte, debemos parar antes de que la brújula indique 360º",
                isCorrect: false
            },
            {
                textoRespuesta: "Si nos encontramos en el hemisferio Norte y queremos virar al Norte, debemos parar antes de que la brújula indique 360º",
                isCorrect: true
            },
            {
                textoRespuesta: "Si nos encontramos en el hemisferio Norte y queremos virar al Norte, debemos parar después de que la brújula indique 360º",
                isCorrect: false
            },
            {
                textoRespuesta: "Si nos encontramos en el hemisferio Sur y queremos virar al Sur, debemos parar después de que la brújula indique 180º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. Indique cuál de los siguientes tipos de navegación podemos realizar en el vuelo con ULM:",
        opciones: [
            {
                textoRespuesta: "Navegación a estima",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación observada",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación radio-eléctrica",
                isCorrect: false
            },
            {
                textoRespuesta: "Las tres anteriores son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "14. Cada 15º el huso horario:",
        opciones: [
            {
                textoRespuesta: "Aumenta una hora",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye una hora",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "Las anteriores son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. Volando a 1.000’, nos encontramos a 35mn de una estación VOR. ¿Obtendremos la señal que ésta está emitiendo?",
        opciones: [
            {
                textoRespuesta: "Sí, si no hay obstáculos y la estación emisora se encuentra dentro de nuestra línea visual",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, pues a esa altura la aeronave está lo suficientemente cerca para captar la señal",
                isCorrect: false
            },
            {
                textoRespuesta: "No, pues a esa altura la aeronave no está lo suficientemente cerca para captar la señal",
                isCorrect: true
            },
            {
                textoRespuesta: "No, pues la aeronave está a demasiada altura para captar la señal a esa distancia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "16. A la diferencia entre el Norte magnético y el Norte geográfico la llamamos:",
        opciones: [
            {
                textoRespuesta: "Desviación",
                isCorrect: false
            },
            {
                textoRespuesta: "Deriva",
                isCorrect: false
            },
            {
                textoRespuesta: "Declinación",
                isCorrect: true
            },
            {
                textoRespuesta: "Compass",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. ¿Cómo podemos calcular el rumbo magnético a partir del rumbo geográfico?",
        opciones: [
            {
                textoRespuesta: "Restando la declinación al Norte geográfico",
                isCorrect: true
            },
            {
                textoRespuesta: "Restando la desviación al Norte geográfico",
                isCorrect: false
            },
            {
                textoRespuesta: "Sumando la desviación al Norte geográfico",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. ¿Cuál de las siguientes afirmaciones es correcta?",
        opciones: [
            {
                textoRespuesta: "3’3 millas náuticas = 1 metro",
                isCorrect: false
            },
            {
                textoRespuesta: "3’3 metros = 1 milla náutica",
                isCorrect: false
            },
            {
                textoRespuesta: "3’3 metros = 1 pie",
                isCorrect: false
            },
            {
                textoRespuesta: "3’3 pies = 1 metro",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "19. Para el piloto de ULM es conveniente conocer las condiciones meteorológicas con las que se va a encontrar en ruta. Pero, ¿cómo puede obtener esa información en vuelo?",
        opciones: [
            {
                textoRespuesta: "Escuchando la transmisión del ATIS",
                isCorrect: false
            },
            {
                textoRespuesta: "Consultando el METAR  el TAF desde un dispositivo con conexión a Internet",
                isCorrect: false
            },
            {
                textoRespuesta: "Escuchando la emisión del VOLMET",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "20. Si tenemos un rumbo geográfico de 110º, con una declinación de 10ºE y una desviación de 5ºW, ¿cuál es nuestro rumbo magnético?",
        opciones: [
            {
                textoRespuesta: "115º",
                isCorrect: false
            },
            {
                textoRespuesta: "95º",
                isCorrect: false
            },
            {
                textoRespuesta: "120º",
                isCorrect: false
            },
            {
                textoRespuesta: "100º",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "21. Un vuelo VFR con rumbo magnético 87º, ¿cuál es el nivel al que debe volar?",
        opciones: [
            {
                textoRespuesta: "Nivel par más 500",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel par menos 500",
                isCorrect: false
            },
            {
                textoRespuesta: "Nivel impar más 500",
                isCorrect: true
            },
            {
                textoRespuesta: "Nivel impar menos 500",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. Si venimos del punto 28º 37’ N y nos encontramos en 34º 40’ N, ¿cuánta distancia hemos recorrido?",
        opciones: [
            {
                textoRespuesta: "363 mn.",
                isCorrect: false
            },
            {
                textoRespuesta: "358 mn.",
                isCorrect: false
            },
            {
                textoRespuesta: "672 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "23. Si volamos a una velocidad de 310 km/h, con viento en calma, y queremos recorrer una distancia de 556 mn, ¿cuánto tiempo emplearemos?",
        opciones: [
            {
                textoRespuesta: "3 horas y 20 minutos",
                isCorrect: true
            },
            {
                textoRespuesta: "2 horas y 20 minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "3 horas y 40 minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "2 horas y 50 minutos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "24. Decimos que una carta es conforme cuando:",
        opciones: [
            {
                textoRespuesta: "Su proyección es acimutal, es decir, la superficie de la Tierra se representa en un plano tangente a la esfera",
                isCorrect: false
            },
            {
                textoRespuesta: "Los meridianos y paralelos se cortan perpendicularmente, la escala utilizada es la misma en toda la carta y los accidentes geográficos se representan con su misma forma",
                isCorrect: true
            },
            {
                textoRespuesta: "Los meridianos y paralelos no se cruzan, la escala utilizada es la misma en toda la carta y los accidentes geográficos se representan con su misma forma",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando se rige por las normas que OACI ha establecido para las cartas aeronáuticas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "25. ¿Cuál de las siguientes indicaciones las podemos encontrar en una carta aeronáutica?",
        opciones: [
            {
                textoRespuesta: "Elevaciones, distancia, indicaciones de aeropuerto",
                isCorrect: true
            },
            {
                textoRespuesta: "Elevaciones y distancia solamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Elevaciones e indicación de aeródromo solamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las indicaciones anteriores viene recogida en una carta aeronáutica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "26. El aeropuerto Adolfo Suárez Madrid-Barajas cuenta con dos pistas 18/36 y otras dos 14/32. ¿Cuál de ellas utilizaremos con viento de 200º a 20kt?",
        opciones: [
            {
                textoRespuesta: "La 18",
                isCorrect: true
            },
            {
                textoRespuesta: "La 36",
                isCorrect: false
            },
            {
                textoRespuesta: "La 14",
                isCorrect: false
            },
            {
                textoRespuesta: "La 32",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Después de haber planeado nuestra ruta, en primer lugar tras el despegue:",
        opciones: [
            {
                textoRespuesta: "Debemos tratar de averiguar el viento para realizar la corrección de deriva necesaria",
                isCorrect: false
            },
            {
                textoRespuesta: "Tenemos que anotar la hora de despegue e ir hacia el punto de situación en el que comienza la ruta",
                isCorrect: true
            },
            {
                textoRespuesta: "Debemos establecer contacto por radio con la Torre del aeropuerto más cercano",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos establecer contacto por radio con el aeropuerto de destino para comprobar su situación meteorológica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. En cuanto a la navegación radio-eléctrica, ¿cuál de las siguientes ventajas presenta el VOR frente al NDB/ADF?",
        opciones: [
            {
                textoRespuesta: "Su alcance no está limitado a la línea visual",
                isCorrect: false
            },
            {
                textoRespuesta: "Tiene un alcance mucho mayor que las señales VHF",
                isCorrect: false
            },
            {
                textoRespuesta: "Están libres de interferencias estáticas tales como las producidas por tormentas eléctricas",
                isCorrect: true
            },
            {
                textoRespuesta: "Las señales que emite pueden rodear obstáculos y, por tanto, ser fácilmente recibidas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. ¿Qué equipo de radionavegación presenta errores durante el orto y el ocaso?",
        opciones: [
            {
                textoRespuesta: "NDB/ADF",
                isCorrect: true
            },
            {
                textoRespuesta: "VOR",
                isCorrect: false
            },
            {
                textoRespuesta: "GPS",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Con una carta que tiene la escala 1:250.000 ¿Cuál de las siguientes afirmaciones es correcta?",
        opciones: [
            {
                textoRespuesta: "4 mm corresponde a 2.500 m.",
                isCorrect: false
            },
            {
                textoRespuesta: "4 cm corresponden a 10 km.",
                isCorrect: true
            },
            {
                textoRespuesta: "4 cm corresponden a 1 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "4 mm corresponden a 5 km.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. Tenemos una carta OACI con una escala 1:500.000 diseñada para vuelo visual. En ella trazamos una ruta en línea recta que mide 8 cm. ¿Cuánta distancia recorre esa ruta?",
        opciones: [
            {
                textoRespuesta: "40 mn.",
                isCorrect: false
            },
            {
                textoRespuesta: "32 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "8 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "40 km.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "32. El piloto de ultraligero podrá volar en un espacio aéreo clase A siempre que:",
        opciones: [
            {
                textoRespuesta: "Se cumplan las condiciones para el vuelo en VFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Nunca, ya que en el espacio aéreo clase A el vuelo en VFR no está permitido",
                isCorrect: true
            },
            {
                textoRespuesta: "El piloto cuente con autorización para volar en IFR",
                isCorrect: false
            },
            {
                textoRespuesta: "Las condiciones visuales sean libre de nubes y con la superficie a la vista",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. ¿A qué llamamos aeródromo de alternativa?",
        opciones: [
            {
                textoRespuesta: "El especificado en el Plan de Vuelo como el aeródromo de aterrizaje previsto",
                isCorrect: false
            },
            {
                textoRespuesta: "El especificado en el Plan de Vuelo como el aeródromo de partida",
                isCorrect: false
            },
            {
                textoRespuesta: "El especificado en el Plan de Vuelo como aeródromo de aterrizaje para repostar",
                isCorrect: false
            },
            {
                textoRespuesta: "El especificado en el Plan de Vuelo para utilizar en caso de no ser aconsejable hacerlo en el previsto",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. Durante la navegación podemos encontrar zonas del espacio aéreo calificadas como Prohibidas, Peligrosas o Restringidas. ¿Dónde debemos consultar la actividad de estas zonas?",
        opciones: [
            {
                textoRespuesta: "En las cartas de navegación actualizadas",
                isCorrect: false
            },
            {
                textoRespuesta: "En el NOTAM en vigor",
                isCorrect: true
            },
            {
                textoRespuesta: "En la información SIGMET",
                isCorrect: false
            },
            {
                textoRespuesta: "En el METAR del aeródromo de salida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. ¿En qué apartado del AIP tenemos que comprobar si una zona D, R o P está activa?",
        opciones: [
            {
                textoRespuesta: "AD",
                isCorrect: false
            },
            {
                textoRespuesta: "ENR",
                isCorrect: true
            },
            {
                textoRespuesta: "GEN",
                isCorrect: false
            },
            {
                textoRespuesta: "AIRAC",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. Si estamos en la pista 21 de un aeródromo y tenemos viento de 250º a 17kt, ¿cuáles son, aproximadamente, las componentes de viento en cara y viento cruzado que tenemos?",
        opciones: [
            {
                textoRespuesta: "10’2kt de viento cruzado y 6’8kt de viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "10’2kt de viento en cara y 6’8kt de viento cruzado",
                isCorrect: false
            },
            {
                textoRespuesta: "7’5kt de viento en cara y 13’02kt de viento cruzado",
                isCorrect: false
            },
            {
                textoRespuesta: "7’5kt de viento cruzado y 13’02kt de viento en cara",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "37. Un FIR es una región de información de vuelo cuyo límite se extiende desde el suelo hasta el nivel de vuelo FL245",
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
        titulo: "38. ¿Qué tipo de navegación estaremos llevando a cabo si nos guiamos por cálculos basados en tiempo, velocidad, distancia y dirección?",
        opciones: [
            {
                textoRespuesta: "Navegación a estima",
                isCorrect: true
            },
            {
                textoRespuesta: "Navegación radio-eléctrica",
                isCorrect: false
            },
            {
                textoRespuesta: "Navegación observada",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "39. En aviación ligera basaremos nuestra ruta en la navegación observada y a estima, mientras que el GPS se usará únicamente como apoyo:",
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
        titulo: "40. ¿Por qué las pistas de un aeródromo pueden variar sus números cada cierto tiempo?",
        opciones: [
            {
                textoRespuesta: "El número de la pista es siempre el mismo",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque varían en función de la asignación que les dé la OACI",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque están orientadas hacia el Norte magnético y éste va cambiando",
                isCorrect: true
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. El AIP se divide en tres tipos de informaciones que son:",
        opciones: [
            {
                textoRespuesta: "LEP, LER, LED",
                isCorrect: false
            },
            {
                textoRespuesta: "AGL, MSL, ALT",
                isCorrect: false
            },
            {
                textoRespuesta: "METAR, TAFOR, GAFOR",
                isCorrect: false
            },
            {
                textoRespuesta: "GEN, ENR, AD",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "42. Si durante un vuelo recto y nivelado mantenemos una trayectoria hacia 040º, ¿cuál de los siguientes sería el viento más favorable?",
        opciones: [
            {
                textoRespuesta: "Viento de 040º",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento de 130º",
                isCorrect: false
            },
            {
                textoRespuesta: "Viento de 220º",
                isCorrect: true
            },
            {
                textoRespuesta: "Viento de 230º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. ¿Cuándo son iguales la ortodrómica y la loxodrómica?",
        opciones: [
            {
                textoRespuesta: "En distancias inferiores a 1.000 millas náuticas",
                isCorrect: false
            },
            {
                textoRespuesta: "En rumbos exactos Norte o Sur",
                isCorrect: false
            },
            {
                textoRespuesta: "En rumbos Este u Oeste próximos al Ecuador",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "44. En la escala 1:750.000, 5 cm corresponden a:",
        opciones: [
            {
                textoRespuesta: "37’5 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "3’75 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "20’25 mn.",
                isCorrect: false
            },
            {
                textoRespuesta: "A y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "45. ¿Cuál de las siguientes cartas no es conforme?",
        opciones: [
            {
                textoRespuesta: "Mercator",
                isCorrect: false
            },
            {
                textoRespuesta: "Lambert",
                isCorrect: false
            },
            {
                textoRespuesta: "Estereográfica polar",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "46. ¿Bajo qué reglas debe basar su vuelo el piloto de ULM?",
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
                textoRespuesta: "VMC",
                isCorrect: false
            },
            {
                textoRespuesta: "IMC",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "47. ¿En cuál de este/os caso/s debemos realizar una corrección de deriva durante nuestro vuelo?",
        opciones: [
            {
                textoRespuesta: "En caso de viento cruzado",
                isCorrect: true
            },
            {
                textoRespuesta: "En caso de viento en cola o viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "En caso de que haya viento en calma",
                isCorrect: false
            },
            {
                textoRespuesta: "En ninguno de los anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. Para definir las coordenadas de un punto, debe nombrarse primero la longitud y después la latitud:",
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
        titulo: "49. Si estamos volando a FL050, ¿a qué altitud estamos volando?",
        opciones: [
            {
                textoRespuesta: "A 5.000 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "A 5.000 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "A 1’5 kilómetros",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. Con viento totalmente en cara vamos a despegar de la pista 27. ¿De dónde viene el viento?",
        opciones: [
            {
                textoRespuesta: "De 027º",
                isCorrect: false
            },
            {
                textoRespuesta: "De 270º",
                isCorrect: true
            },
            {
                textoRespuesta: "De 090º",
                isCorrect: false
            },
            {
                textoRespuesta: "De 009º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. Las líneas agónicas son aquellas que unen puntos en los que la declinación magnética es cero.",
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
        titulo: "52. En una carta con escala 1:1.000.000 trazamos una ruta en línea recta que mide 15’5 cm. ¿Cuánto mide la ruta?",
        opciones: [
            {
                textoRespuesta: "155 km.",
                isCorrect: true
            },
            {
                textoRespuesta: "15’5 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "150 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "15 km.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. Estamos volando a FL030, por lo que el alcance de la señal VHF llega aproximadamente hasta las 69 millas náuticas. ¿Cuál será el alcance de recepción si volamos a FL050?",
        opciones: [
            {
                textoRespuesta: "87mn.",
                isCorrect: true
            },
            {
                textoRespuesta: "95mn.",
                isCorrect: false
            },
            {
                textoRespuesta: "100mn.",
                isCorrect: false
            },
            {
                textoRespuesta: "47mn.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "54. La latitud de un punto se mide sobre el _______ y desde el _______.",
        opciones: [
            {
                textoRespuesta: "Ecuador / Meridiano 0",
                isCorrect: false
            },
            {
                textoRespuesta: "Paralelo / Meridiano",
                isCorrect: false
            },
            {
                textoRespuesta: "Paralelo / Ecuador",
                isCorrect: false
            },
            {
                textoRespuesta: "Meridiano / Ecuador",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "55. Indique la banda de frecuencias asignadas para la radionavegación con VOR:",
        opciones: [
            {
                textoRespuesta: "118.0 a 136.97 MHz",
                isCorrect: false
            },
            {
                textoRespuesta: "7500 a 7700",
                isCorrect: false
            },
            {
                textoRespuesta: "108.0 a 117.9 MHz",
                isCorrect: true
            },
            {
                textoRespuesta: "110.0 a 115.0 MHz",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. Los círculos menores:",
        opciones: [
            {
                textoRespuesta: "Pasan por el centro de la Tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "No pasan por el centro de la Tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "No dividen la Tierra en partes iguales",
                isCorrect: false
            },
            {
                textoRespuesta: "B y C son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "57. El espacio aéreo se divide en:",
        opciones: [
            {
                textoRespuesta: "Espacio aéreo controlado, que son los de clase A, B, C, D y E; y espacio aéreo no controlado, los de clase F y G",
                isCorrect: true
            },
            {
                textoRespuesta: "Espacio aéreo controlado, que son los de clase A, B, C y D; y espacio aéreo no controlado, los de clase E, F y G",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo controlado, espacio aéreo no controlado y espacio aéreo parcialmente controlado",
                isCorrect: false
            },
            {
                textoRespuesta: "Espacio aéreo de uso civil y espacio aéreo de uso militar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "58. Las estaciones VOR emiten señales VHF, de tal forma que:",
        opciones: [
            {
                textoRespuesta: "Su alcance disminuye al aumentar la altitud del equipo receptor",
                isCorrect: false
            },
            {
                textoRespuesta: "Su alcance aumenta al aumentar la altitud del equipo receptor",
                isCorrect: true
            },
            {
                textoRespuesta: "Su alcance aumenta al disminuir la altitud del equipo receptor",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. ¿Cuántas millas náuticas corresponden a 3º 45’ de arco?",
        opciones: [
            {
                textoRespuesta: "345 mn.",
                isCorrect: false
            },
            {
                textoRespuesta: "225 km.",
                isCorrect: false
            },
            {
                textoRespuesta: "225 mn.",
                isCorrect: true
            },
            {
                textoRespuesta: "305 mn.",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. Si en nuestro mapa de navegación aeronáutica trazamos una ruta en línea recta de 450 km, estaríamos trazando una línea:",
        opciones: [
            {
                textoRespuesta: "Loxodrómica",
                isCorrect: false
            },
            {
                textoRespuesta: "Ortodrómica",
                isCorrect: false
            },
            {
                textoRespuesta: "No podemos saberlo en distancias tan cortas",
                isCorrect: false
            },
            {
                textoRespuesta: "La ortodrómica y la loxodrómica coinciden en esa distancia",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. Entre los siguientes sistemas de radio-navegación, ¿cuál es el más utilizado?",
        opciones: [
            {
                textoRespuesta: "NDB",
                isCorrect: false
            },
            {
                textoRespuesta: "ADF",
                isCorrect: false
            },
            {
                textoRespuesta: "VOR",
                isCorrect: true
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. Las líneas isógonas son:",
        opciones: [
            {
                textoRespuesta: "Líneas que unen puntos con la misma desviación magnética",
                isCorrect: false
            },
            {
                textoRespuesta: "Líneas que unen puntos con el mismo rumbo magnético",
                isCorrect: false
            },
            {
                textoRespuesta: "Líneas que unen puntos con la misma declinación magnética",
                isCorrect: true
            },
            {
                textoRespuesta: "Líneas que unen puntos con la misma presión atmosférica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "63. Si en nuestra ruta en vuelo, para ir de un punto a otro, mantenemos un rumbo constante, ¿cuál es la línea que estamos siguiendo?",
        opciones: [
            {
                textoRespuesta: "Línea loxodrómica, la que traza el recorrido más corto",
                isCorrect: false
            },
            {
                textoRespuesta: "Línea ortodrómica, la que traza un recorrido mayor",
                isCorrect: false
            },
            {
                textoRespuesta: "Línea ortodrómica, la que traza el recorrido más corto",
                isCorrect: false
            },
            {
                textoRespuesta: "Línea loxodrómica, la que traza un recorrido mayor",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "64. Un aeropuerto aduanero vendrá indicado en nuestra carta de navegación:",
        opciones: [
            {
                textoRespuesta: "Con la representación de un círculo y cuatro líneas en los cuatro puntos cardinales",
                isCorrect: false
            },
            {
                textoRespuesta: "Con una línea punteada alrededor del nombre del aeródromo",
                isCorrect: true
            },
            {
                textoRespuesta: "Con la representación de dos círculos, uno dentro de otro",
                isCorrect: false
            },
            {
                textoRespuesta: "Con la representación de dos círculos y cuatro líneas en los cuatro puntos cardinales",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. Una representación de un círculo con otro círculo dentro en nuestra carta de navegación indica:",
        opciones: [
            {
                textoRespuesta: "Un aeropuerto militar",
                isCorrect: true
            },
            {
                textoRespuesta: "Un aeropuerto civil",
                isCorrect: false
            },
            {
                textoRespuesta: "Un aeropuerto mixto, civil y militar",
                isCorrect: false
            },
            {
                textoRespuesta: "Un aeropuerto aduanero",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. En ningún caso el aeródromo de alternativa especificado en nuestro Plan de Vuelo podrá ser el mismo que el de partida:",
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
        titulo: "67. A la hora de trazar nuestra ruta en la carta seleccionada, debemos tener en cuenta que:",
        opciones: [
            {
                textoRespuesta: "No siempre será posible seguir la ruta más corta entre dos puntos",
                isCorrect: true
            },
            {
                textoRespuesta: "La ruta trazada deberá corresponder siempre a una línea recta",
                isCorrect: false
            },
            {
                textoRespuesta: "En ningún caso se podrá seguir una ruta alternativa a la trazada inicialmente una vez que estemos en vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "68. En cuál de las siguientes situaciones la brújula presenta marcaciones correctas:",
        opciones: [
            {
                textoRespuesta: "En virajes con ángulo menor de 45º",
                isCorrect: false
            },
            {
                textoRespuesta: "En vuelo recto y nivelado",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando nos encontramos exactamente sobre el Polo Norte",
                isCorrect: false
            },
            {
                textoRespuesta: "A y B son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. La distancia que hay entre un punto A y un punto B es de 162 mn. Si vamos a una velocidad de 300 km/h, con viento en calma, ¿cuánto tardaremos en recorrer esa distancia?",
        opciones: [
            {
                textoRespuesta: "1 hora y 25 minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "1 hora",
                isCorrect: true
            },
            {
                textoRespuesta: "55 minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "1 hora y 15 minutos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "70. Si el nivel de transición en España está establecido en 6.000’ y estamos en nivel de vuelo FL080, ¿con qué deberemos tener ajustado nuestro altímetro?",
        opciones: [
            {
                textoRespuesta: "QNE",
                isCorrect: true
            },
            {
                textoRespuesta: "QNH",
                isCorrect: false
            },
            {
                textoRespuesta: "QFE",
                isCorrect: false
            },
            {
                textoRespuesta: "QMS",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "71. ¿Qué significa que tenemos una variación o declinación 9º E?",
        opciones: [
            {
                textoRespuesta: "Que el Norte geográfico está situado 9º al Este del magnético",
                isCorrect: false
            },
            {
                textoRespuesta: "Que la brújula está afectada por un campo magnético que varía el norte 9º al Este",
                isCorrect: false
            },
            {
                textoRespuesta: "Que nos hemos desviado 9º hacia el Este de nuestra ruta",
                isCorrect: false
            },
            {
                textoRespuesta: "Que el Norte magnético está situado 9º al Este del geográfico",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "72. Volando en España, si vamos a virar rumbo Norte, ¿cuántos grados antes de llegar hay que parar el viraje?",
        opciones: [
            {
                textoRespuesta: "10º",
                isCorrect: false
            },
            {
                textoRespuesta: "15º",
                isCorrect: false
            },
            {
                textoRespuesta: "20º",
                isCorrect: false
            },
            {
                textoRespuesta: "30º",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "73. Al realizar la planificación de nuestro vuelo hemos estimado como hora de llegada las 12:00h local. Si estamos en la Península Ibérica en España, ¿cuál será la hora Z?",
        opciones: [
            {
                textoRespuesta: "Serán las 13:00Z",
                isCorrect: false
            },
            {
                textoRespuesta: "Depende del lugar exacto en el que nos encontremos",
                isCorrect: false
            },
            {
                textoRespuesta: "Si es verano serán las 11:00Z y si es invierno las 10:00Z",
                isCorrect: false
            },
            {
                textoRespuesta: "Si es verano serán las 10:00Z y si es invierno las 11:00Z",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "74. El ángulo formado entre la ruta y el rumbo de nuestra aeronave se llama:",
        opciones: [
            {
                textoRespuesta: "Ángulo diedro",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de derrota",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de desvío",
                isCorrect: false
            },
            {
                textoRespuesta: "Ángulo de deriva",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "75. Indique la correcta. La GS es:",
        opciones: [
            {
                textoRespuesta: "IAS +/- viento",
                isCorrect: false
            },
            {
                textoRespuesta: "CAS +/- viento",
                isCorrect: false
            },
            {
                textoRespuesta: "TAS +/- viento",
                isCorrect: true
            },
            {
                textoRespuesta: "EAS +/- viento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. ¿Cuándo coincidirá la GS con la velocidad verdadera?",
        opciones: [
            {
                textoRespuesta: "En altitudes inferiores a 10.000’",
                isCorrect: false
            },
            {
                textoRespuesta: "En ausencia de viento",
                isCorrect: true
            },
            {
                textoRespuesta: "En atmósfera estándar",
                isCorrect: false
            },
            {
                textoRespuesta: "La GS nunca puede coincidir con la velocidad verdadera",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "77. El sistema de radionavegación GPS sólo puede utilizarse para vuelos IFR, no para VFR:",
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
        titulo: "78. ¿Cuál es el aparato que permite a un controlador conocer la situación exacta del avión en caso de que nos hayamos perdido?",
        opciones: [
            {
                textoRespuesta: "El equipo ADF instalado en la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "El transpondedor",
                isCorrect: true
            },
            {
                textoRespuesta: "El VOR",
                isCorrect: false
            },
            {
                textoRespuesta: "El NDB",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. Volando con rumbo 93º, indique cuál de los siguientes vientos sería viento en cola:",
        opciones: [
            {
                textoRespuesta: "93º",
                isCorrect: false
            },
            {
                textoRespuesta: "270º",
                isCorrect: false
            },
            {
                textoRespuesta: "273º",
                isCorrect: true
            },
            {
                textoRespuesta: "267º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Tenemos que recorrer una distancia de 500 km con una GS de 200kt. ¿Cuánto tiempo emplearemos en realizar el recorrido?",
        opciones: [
            {
                textoRespuesta: "2 horas",
                isCorrect: false
            },
            {
                textoRespuesta: "1 hora y 21 minutos",
                isCorrect: true
            },
            {
                textoRespuesta: "1 hora y 12 minutos",
                isCorrect: false
            },
            {
                textoRespuesta: "1 hora y 32 minutos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. Con un rumbo verdadero de 110º, un rumbo magnético de 100º y una desviación de 2ºW, ¿qué deberá marcar nuestro compás?",
        opciones: [
            {
                textoRespuesta: "102º",
                isCorrect: true
            },
            {
                textoRespuesta: "112º",
                isCorrect: false
            },
            {
                textoRespuesta: "110º",
                isCorrect: false
            },
            {
                textoRespuesta: "108º",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. En el hemisferio Norte, qué declinación tenemos si nuestro rumbo geográfico es de 280º, el magnético es de 295º y la desviación es de 5º W.",
        opciones: [
            {
                textoRespuesta: "15º E",
                isCorrect: false
            },
            {
                textoRespuesta: "15º W",
                isCorrect: true
            },
            {
                textoRespuesta: "10º E",
                isCorrect: false
            },
            {
                textoRespuesta: "20º W",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Cuando llamamos al ATC de un aeródromo y queremos conocer la altitud indicada del mismo, ¿qué información nos darán?",
        opciones: [
            {
                textoRespuesta: "El QNH, que lo tendremos que calar en la ventanilla de Kollsman",
                isCorrect: true
            },
            {
                textoRespuesta: "El QNE, que lo tendremos que calar en la ventanilla de Kollsman",
                isCorrect: false
            },
            {
                textoRespuesta: "El QFE, que lo tendremos que calar en la ventanilla de Kollsman",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores es correcta",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. Si en nuestro transpondedor hemos puesto el código 7700, ¿qué significa?",
        opciones: [
            {
                textoRespuesta: "Que tenemos un fallo de comunicaciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Que nos han secuestrado la aeronave",
                isCorrect: false
            },
            {
                textoRespuesta: "Que tenemos una emergencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Que nos hemos perdido",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "85. Una carta OACI 1:500.000 está recomendada para:",
        opciones: [
            {
                textoRespuesta: "Vuelos IFR a baja velocidad y baja cota",
                isCorrect: false
            },
            {
                textoRespuesta: "Vuelos VFR a baja velocidad y alta cota",
                isCorrect: false
            },
            {
                textoRespuesta: "Vuelos IFR a alta velocidad y alta cota",
                isCorrect: false
            },
            {
                textoRespuesta: "Vuelos VFR a baja velocidad y baja cota",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "86. Si en una carta de navegación encontramos un espacio aéreo calificado como LEP, cuyo límite superior está indicado en FL060, ¿podremos volar en esa zona con un ultraligero?",
        opciones: [
            {
                textoRespuesta: "No, ya que es una zona prohibida cuyo límite superior es de 6.000’, por lo que no podríamos superarlo con un ULM",
                isCorrect: true
            },
            {
                textoRespuesta: "No, ya que es una zona peligrosa cuyo límite superior es de 6.000’, por lo que no podríamos superarlo con un ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Sí, ya que el límite superior está a 600’, por lo que podemos sobrevolar la zona",
                isCorrect: false
            },
            {
                textoRespuesta: "No, ya que es una zona prohibida cuyo límite superior es de 600’",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "87. El curso o la ruta planeada de una aeronave también recibe el nombre de:",
        opciones: [
            {
                textoRespuesta: "Rumbo",
                isCorrect: false
            },
            {
                textoRespuesta: "Deriva",
                isCorrect: false
            },
            {
                textoRespuesta: "Trayectoria o derrota",
                isCorrect: true
            },
            {
                textoRespuesta: "Posición",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. El espacio aéreo no controlado está formado por los de clase:",
        opciones: [
            {
                textoRespuesta: "A, B, C, D y E",
                isCorrect: false
            },
            {
                textoRespuesta: "VFR y VMC",
                isCorrect: false
            },
            {
                textoRespuesta: "F y G",
                isCorrect: true
            },
            {
                textoRespuesta: "E, F y G",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. Un meridiano se puede definir como:",
        opciones: [
            {
                textoRespuesta: "Un círculo máximo que corta la esfera de la Tierra paralelamente al Ecuador",
                isCorrect: false
            },
            {
                textoRespuesta: "Un círculo menor que pasa por los Polos y es perpendicular al Ecuador",
                isCorrect: false
            },
            {
                textoRespuesta: "Un círculo máximo que pasa por los Polos perpendicularmente al Ecuador",
                isCorrect: true
            },
            {
                textoRespuesta: "Un círculo máximo que disminuye de tamaño a medida que se acerca a los Polos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. Si nuestro rumbo verdadero es de 81º y el magnético de 75º, ¿cuál es la declinación que tenemos?",
        opciones: [
            {
                textoRespuesta: "6º W",
                isCorrect: false
            },
            {
                textoRespuesta: "6º, independientemente de que sea E o W",
                isCorrect: false
            },
            {
                textoRespuesta: "6ºE",
                isCorrect: true
            },
            {
                textoRespuesta: "No podemos saberlo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "91. El código 7600 de un transpondedor corresponde a:",
        opciones: [
            {
                textoRespuesta: "Emergencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Secuestro",
                isCorrect: false
            },
            {
                textoRespuesta: "Fallo de comunicaciones",
                isCorrect: true
            },
            {
                textoRespuesta: "Cualquiera de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "92. Salimos un día de verano a las 06:00h UTC de un punto hacia otro en línea recta con una TAS de 150kt. La distancia entre los puntos es de 300 millas náuticas. ¿A qué hora local llegaremos, teniendo en cuenta que estamos en España?",
        opciones: [
            {
                textoRespuesta: "A las 08:00h.",
                isCorrect: false
            },
            {
                textoRespuesta: "A las 11:00h.",
                isCorrect: false
            },
            {
                textoRespuesta: "A las 07:00h.",
                isCorrect: false
            },
            {
                textoRespuesta: "A las 10:00h.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "93. La pista en servicio de un aeródromo es la 14. ¿Cuál es la pista contraria?",
        opciones: [
            {
                textoRespuesta: "La 41",
                isCorrect: false
            },
            {
                textoRespuesta: "La 32",
                isCorrect: true
            },
            {
                textoRespuesta: "La 26",
                isCorrect: false
            },
            {
                textoRespuesta: "La 30",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. La navegación aérea visual o VFR (Visual Flight Rules) se suele utilizar para:",
        opciones: [
            {
                textoRespuesta: "Vuelos a baja o media cota",
                isCorrect: false
            },
            {
                textoRespuesta: "Vuelos a baja velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Vuelos de corta o media distancia",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "95. La carta OACI 1:500.000 es:",
        opciones: [
            {
                textoRespuesta: "Una proyección cónica conforme",
                isCorrect: true
            },
            {
                textoRespuesta: "Una proyección cilíndrica conforme",
                isCorrect: false
            },
            {
                textoRespuesta: "Una proyección acimutal",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "96. Estamos en la pista 14 del aeropuerto Adolfo Suárez Madrid-Barajas. Tenemos viento de 200º a 30kt. ¿Qué componentes de viento tenemos aproximadamente?",
        opciones: [
            {
                textoRespuesta: "15kt de viento cruzado y 20kt de viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "15kt de viento en cara y 20kt de viento cruzado",
                isCorrect: true
            },
            {
                textoRespuesta: "20kt de viento cruzado y 10kt de viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "20kt de viento en cara y 10kt de viento cruzado",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "97. ¿Cuál es la proyección en la que la loxodrómica es una línea recta?",
        opciones: [
            {
                textoRespuesta: "Lambert",
                isCorrect: false
            },
            {
                textoRespuesta: "Mercator",
                isCorrect: true
            },
            {
                textoRespuesta: "La cónica",
                isCorrect: false
            },
            {
                textoRespuesta: "La acimutal",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Al utilizar la brújula debemos tener en cuenta varios errores, entre ellos el de desviación. ¿Cuándo se produce?",
        opciones: [
            {
                textoRespuesta: "Cuando se ve afectada por un campo magnético originado en sus proximidades",
                isCorrect: true
            },
            {
                textoRespuesta: "Cuando el Norte magnético y el geográfico no coinciden",
                isCorrect: false
            },
            {
                textoRespuesta: "Durante los virajes",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando nos encontramos exactamente sobre los Polos Norte o Sur",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "99. ¿Cuál de los siguientes nombres designa al código del transpondedor?",
        opciones: [
            {
                textoRespuesta: "Squelch",
                isCorrect: false
            },
            {
                textoRespuesta: "SSR",
                isCorrect: false
            },
            {
                textoRespuesta: "Transponder",
                isCorrect: false
            },
            {
                textoRespuesta: "Squawk",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "100. En España, a excepción de Canarias, durante el horario de verano, ¿cómo podemos conocer la hora Z (zulú) a través de nuestra hora local?",
        opciones: [
            {
                textoRespuesta: "Sumando dos horas a la local",
                isCorrect: false
            },
            {
                textoRespuesta: "Sumando una hora a la local",
                isCorrect: false
            },
            {
                textoRespuesta: "Restando dos horas a la local",
                isCorrect: true
            },
            {
                textoRespuesta: "Restando una hora a la local",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;