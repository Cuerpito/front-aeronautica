const preguntas = [
    {
        titulo: "1. El diedro positivo que normalmente existe en los ULM trata de conseguir:",
        opciones: [
            {
                textoRespuesta: "Coordinación en los virajes",
                isCorrect: false
            },
            {
                textoRespuesta: "Entradas en pérdida suaves",
                isCorrect: false
            },
            {
                textoRespuesta: "Resistencia lateral en vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Resistencia estructural",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "2. El factor de carga (n) es la resultante de dos fuerzas que actúan sobre el avión, ¿Cómo se llaman?",
        opciones: [
            {
                textoRespuesta: "Fuerza centrífuga y viento relativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Fuerza centrífuga y fuerza de gravedad",
                isCorrect: true
            },
            {
                textoRespuesta: "Fuerza de gravedad y tracción",
                isCorrect: false
            },
            {
                textoRespuesta: "Fuerza de gravedad y fuerza aerodinámica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "3. El ángulo de ataque en que se produce la 'pérdida' se denomina ángulo de ataque crítico:",
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
        titulo: "4. La envergadura del ala y su distancia al suelo produce:",
        opciones: [
            {
                textoRespuesta: "La resistencia inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "El efecto suelo",
                isCorrect: true
            },
            {
                textoRespuesta: "El efecto torsión",
                isCorrect: false
            },
            {
                textoRespuesta: "El efecto diedro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "5. ¿En qué consiste la torsión del ala?",
        opciones: [
            {
                textoRespuesta: "En dar diferentes ángulos de salida para aumentar la estabilidad lateral",
                isCorrect: false
            },
            {
                textoRespuesta: "Dar un ángulo diedro al ala para aumentar estabilidad horizontal",
                isCorrect: false
            },
            {
                textoRespuesta: "Dar diferentes ángulos de ataque a todos los perfiles que componen el ala",
                isCorrect: true
            },
            {
                textoRespuesta: "En dar diferentes ángulos a la cuerda alar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "6. La pérdida se produce siempre que el perfil aerodinámico sea colocado en una posición excesiva de ángulo de ataque, independientemente de la velocidad del avión:",
        opciones: [
            {
                textoRespuesta: "Verdadero",
                isCorrect: true
            },
            {
                textoRespuesta: "Falso",
                isCorrect: false
            },
            {
                textoRespuesta: "Indiferente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "7. Una pendiente positiva en la pista:",
        opciones: [
            {
                textoRespuesta: "Acorta la carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la sustentación, al tener mayor ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Alarga la carrera de despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "No influye en la carrera de despegue",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "8. Después de despegar queremos subir a una altitud determinada en el menor tiempo posible. Tendremos que subir a la:",
        opciones: [
            {
                textoRespuesta: "Vs",
                isCorrect: false
            },
            {
                textoRespuesta: "Vy",
                isCorrect: true
            },
            {
                textoRespuesta: "Vx",
                isCorrect: false
            },
            {
                textoRespuesta: "Va",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "9. Si estoy volando con flaps sin extender y la velocidad mínima que indica el arco verde son 35 millas:",
        opciones: [
            {
                textoRespuesta: "El arco verde no tiene nada que ver con los flaps retraídos",
                isCorrect: false
            },
            {
                textoRespuesta: "Puedo volar más lento que esa velocidad porque el arco blanco tiene una velocidad menor",
                isCorrect: false
            },
            {
                textoRespuesta: "Procuraré no acercarme a esa velocidad porque puedo entrar en pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "Procuraré no sacar los flaps a esa velocidad porque los puedo dañar",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "10. El código de marcas y colores del anemómetro toman como referencia las velocidades:",
        opciones: [
            {
                textoRespuesta: "IAS",
                isCorrect: true
            },
            {
                textoRespuesta: "CAS",
                isCorrect: false
            },
            {
                textoRespuesta: "TAS",
                isCorrect: false
            },
            {
                textoRespuesta: "EAS",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "11. En las proximidades del suelo, la variación de la presión en la atmósfera estándar se considera de 1 Mb. Cada:",
        opciones: [
            {
                textoRespuesta: "100 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "8 metros",
                isCorrect: true
            },
            {
                textoRespuesta: "100 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "1.000 pies",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "12. El despegue con viento en cola:",
        opciones: [
            {
                textoRespuesta: "Disminuye la carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la carrera de despegue",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la carrera de despegue y disminuye el régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la carrera de despegue y el ángulo de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "13. Un aumento de la curvatura del ala produce un menor coeficiente de sustentación máximo.",
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
        titulo: "14. Si un ULM Vuela a 60 km/h de velocidad relativa y tiene un viento en cola de 15 km/h, ¿Cuál será su velocidad sobre el suelo?",
        opciones: [
            {
                textoRespuesta: "60 km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "75 km/h.",
                isCorrect: true
            },
            {
                textoRespuesta: "45 km/h.",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad relativa y la velocidad sobre el suelo son siempre la misma",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "15. La utilización de flaps es óptima:",
        opciones: [
            {
                textoRespuesta: "a) En pistas largas asfaltadas",
                isCorrect: false
            },
            {
                textoRespuesta: "b) En pistas cortas de tierra",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Cuando se requiera sustentación para evitar obstáculos",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"b\" y \"c\" son correctas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "16. ¿Qué indica el variómetro?",
        opciones: [
            {
                textoRespuesta: "Variaciones en la velocidad horizontal",
                isCorrect: false
            },
            {
                textoRespuesta: "Variaciones en el régimen de ascenso y descenso (velocidad vertical)",
                isCorrect: true
            },
            {
                textoRespuesta: "Variaciones en el régimen del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Variaciones en el suministro de energía en el alternador",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "17. Para mantener la altura, el ala debe producir una sustentación.",
        opciones: [
            {
                textoRespuesta: "Igual al factor de carga dividido por el peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual al factor de carga sumado al peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Igual al factor de carga multiplicado por el peso",
                isCorrect: true
            },
            {
                textoRespuesta: "Mayor al factor de carga",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "18. El factor determinante en las actuaciones del avión es:",
        opciones: [
            {
                textoRespuesta: "La densidad",
                isCorrect: true
            },
            {
                textoRespuesta: "La temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "cLa presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "19. La extensión máxima de flaps en un despegue será:",
        opciones: [
            {
                textoRespuesta: "0º",
                isCorrect: false
            },
            {
                textoRespuesta: "15º",
                isCorrect: true
            },
            {
                textoRespuesta: "Todo el flap",
                isCorrect: false
            },
            {
                textoRespuesta: "No hay límite",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "20. Cuanto más denso es el aire:",
        opciones: [
            {
                textoRespuesta: "Menor es la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Mayor es la sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "La densidad no influye en la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "La sustentación sólo depende de la velocidad alcanzada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "21. Techo absoluto de un ULM es:",
        opciones: [
            {
                textoRespuesta: "La máxima altura de vuelo, es decir, 300 m.",
                isCorrect: false
            },
            {
                textoRespuesta: "La máxima altitud alcanzable por el ULM",
                isCorrect: true
            },
            {
                textoRespuesta: "La máxima altura entre las ruedas y las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "La altura entre las ruedas y la parte más alta del ULM",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "22. Un perfil alar con mucha curvatura produce:",
        opciones: [
            {
                textoRespuesta: "Mucha sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Poca sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "La sustentación sólo depende de la velocidad que alcance el avión en vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "23. La velocidad de ángulo de ascenso permite.",
        opciones: [
            {
                textoRespuesta: "Ganar la máxima altura en el mínimo tiempo",
                isCorrect: false
            },
            {
                textoRespuesta: "Ganar la máxima altura en la mínima distancia horizontal",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "24. Al aumentar la temperatura, la densidad del aire disminuye.",
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
        titulo: "25. Se define pendiente de ascenso como la relación entre:",
        opciones: [
            {
                textoRespuesta: "Aumento de altitud y distancia respecto al suelo en porcentaje",
                isCorrect: false
            },
            {
                textoRespuesta: "Régimen de ascenso y velocidad verdadera",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad verdadera y régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumento de altitud y distancia horizontal en relación con el aire en porcentaje",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "26. La velocidad TAS será la velocidad lAS o CAS corregida por:",
        opciones: [
            {
                textoRespuesta: "Temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Posición",
                isCorrect: false
            },
            {
                textoRespuesta: "Densidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Presión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "27. Una componente de viento de frente que aumenta con la altitud, en comparación con una condición de viento cero, suponiendo IAS constante:",
        opciones: [
            {
                textoRespuesta: "No afecta al régimen de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "No afecta el ángulo de trayectoria de vuelo durante el ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el ángulo y el régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye el ángulo y el régimen de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "28. Los flaps:",
        opciones: [
            {
                textoRespuesta: "Permiten una menor velocidad de aproximación, y aterrizar en pistas más cortas",
                isCorrect: true
            },
            {
                textoRespuesta: "Son obligatorios en todos los ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyen el ángulo de descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Todas son correctas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "29. El propósito del timón de dirección en un avión es el de:",
        opciones: [
            {
                textoRespuesta: "Controlar la guiñada",
                isCorrect: true
            },
            {
                textoRespuesta: "Controlar la tendencia al alabeo del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener una corrección de deriva para controlar el desplazamiento del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Mantener la inclinación en un viraje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "30. Cuanto más calor y mayor altura se encuentre el punto de despegue:",
        opciones: [
            {
                textoRespuesta: "a) Menos tendremos que correr para despegar",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Más tendremos que correr para despegar",
                isCorrect: true
            },
            {
                textoRespuesta: "c) Ninguno de los factores influye en el despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\", pero también debemos contar con la velocidad del viento",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "31. ¿Cuál es el sentido de la fuerza de sustentación sobre la parte superior de las alas?",
        opciones: [
            {
                textoRespuesta: "Hacia el suelo",
                isCorrect: false
            },
            {
                textoRespuesta: "Lo contrario a la fuerza de la gravedad",
                isCorrect: true
            },
            {
                textoRespuesta: "Perpendicular a la superficie de las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "La dirección de la sustentación varía con la velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "32. El viento relativo es:",
        opciones: [
            {
                textoRespuesta: "Una corriente o flujo de aire que se mueve en la misma dirección que el perfil",
                isCorrect: false
            },
            {
                textoRespuesta: "Una corriente o flujo de aire que se mueve hacia el perfil",
                isCorrect: true
            },
            {
                textoRespuesta: "Una corriente o flujo de aire que se mueve junto al ULM",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "33. ¿Cuándo están en equilibrio las cuatro fuerzas que actúan sobre un avión en vuelo?",
        opciones: [
            {
                textoRespuesta: "Durante un vuelo sin aceleraciones",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el avión está acelerando",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando el avión está decelerando",
                isCorrect: false
            },
            {
                textoRespuesta: "Durante el vuelo recto y nivelado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "34. Un viento de cola:",
        opciones: [
            {
                textoRespuesta: "Disminuye el ángulo de descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye el régimen de descenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta el ángulo y el régimen de descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye el ángulo y el régimen de descenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "35. Las prestaciones de un avión son óptimas en las siguientes condiciones:",
        opciones: [
            {
                textoRespuesta: "Al nivel del mar en un día cálido",
                isCorrect: false
            },
            {
                textoRespuesta: "Al nivel del mar en un día frío y anticiclónico",
                isCorrect: true
            },
            {
                textoRespuesta: "Al nivel del mar en un día frío",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "36. La línea imaginaria que es perpendicular al plano descrito por los ejes longitudinal y de profundidad se denomina:",
        opciones: [
            {
                textoRespuesta: "Eje longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Eje lateral",
                isCorrect: false
            },
            {
                textoRespuesta: "Eje de profundidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Eje vertical",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "37. Si aumentamos la velocidad de un fluido, su presión disminuye, según:",
        opciones: [
            {
                textoRespuesta: "El Teorema de Coriolis",
                isCorrect: false
            },
            {
                textoRespuesta: "El Teorema de Bernouilli",
                isCorrect: true
            },
            {
                textoRespuesta: "El Teorema de Venturi",
                isCorrect: false
            },
            {
                textoRespuesta: "El Teorema de Arquímedes",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "38. Una baja densidad del aire:",
        opciones: [
            {
                textoRespuesta: "Aumenta la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el rendimiento del motor y de la hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "39. En los cálculos de peso y centrado, el datum:",
        opciones: [
            {
                textoRespuesta: "Es la distancia desde el centro de gravedad al punto a través del cual actúa el peso de la componente",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la posición más adelantada del centro de gravedad",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la posición más retrasada del centro de gravedad",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el punto especificado por el fabricante del avión a partir del cual se realizan todas las mediciones de distancia para los cálculos del centro de gravedad",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "40. Virar a viento en cola inmediatamente después de un despegue es peligroso, por una de estas razones, entre otras:",
        opciones: [
            {
                textoRespuesta: "Disminuye la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la resistencia respecto a viento en cara",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye el ángulo de ascenso, existiendo la posibilidad de impactar con un obstáculo",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la resistencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "41. ¿Qué condiciones atmosféricas reducirían las performances de despegue y ascenso?",
        opciones: [
            {
                textoRespuesta: "Baja temperatura, baja humedad relativa y baja altitud",
                isCorrect: false
            },
            {
                textoRespuesta: "Alta temperatura, baja humedad relativa y baja altitud de densidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Alta temperatura, alta humedad relativa y alta altitud de densidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Baja temperatura, alta humedad relativa y alta altitud de densidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "42. Si la densidad del aire disminuye:",
        opciones: [
            {
                textoRespuesta: "Disminuye la resistencia parásita",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta el rendimiento de la hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la sustentación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "43. La elevación de los aeropuertos A, B y C es de 10, 2.500 y 5.320 pies respectivamente:",
        opciones: [
            {
                textoRespuesta: "El aeropuerto A presenta mayor presión atmosférica",
                isCorrect: true
            },
            {
                textoRespuesta: "El aeropuerto C presenta mayor presión atmosférica",
                isCorrect: false
            },
            {
                textoRespuesta: "La presión atmosférica depende del factor climatología solamente",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "44. Los instrumentos basados en la medición de la presión atmosférica son:",
        opciones: [
            {
                textoRespuesta: "Anemómetro, altímetro y nivelómetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Anemómetro, altímetro y variómetro",
                isCorrect: true
            },
            {
                textoRespuesta: "Anemómetro, brújula y temperatura",
                isCorrect: false
            },
            {
                textoRespuesta: "Sólo el altímetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "45. Durante un viraje la componente vertical de la sustentación es la fuerza que contrarresta a:",
        opciones: [
            {
                textoRespuesta: "El peso",
                isCorrect: true
            },
            {
                textoRespuesta: "El empuje",
                isCorrect: false
            },
            {
                textoRespuesta: "La fuerza centrífuga",
                isCorrect: false
            },
            {
                textoRespuesta: "La resistencia inducida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "46. ¿Por qué debemos aterrizar viento en cara?",
        opciones: [
            {
                textoRespuesta: "Porque se tiene más sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque la GS es menor",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "47. A la velocidad de crucero la distribución dé las resistencias es aproximadamente:",
        opciones: [
            {
                textoRespuesta: "50% parásita y 50% inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "90% parásita y 10% inducida",
                isCorrect: true
            },
            {
                textoRespuesta: "10% parásita y 90% inducida",
                isCorrect: false
            },
            {
                textoRespuesta: "No puede medirse así esta magnitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "48. Aterrizar con viento de cara permite:",
        opciones: [
            {
                textoRespuesta: "Aterrizar en pistas más largas",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizar en pistas más cortas",
                isCorrect: true
            },
            {
                textoRespuesta: "Aterrizar a menor velocidad indicada",
                isCorrect: false
            },
            {
                textoRespuesta: "Aterrizar a mayor velocidad indicada",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "49. Si un ULM vuela con un viento de cola de 20 Km./h y su velocidad relativa es de 65 Km./h:",
        opciones: [
            {
                textoRespuesta: "Su velocidad con respecto a la tierra es de 75 Km./h.",
                isCorrect: false
            },
            {
                textoRespuesta: "Su velocidad con respecto a la tierra es de 45 Km./h.",
                isCorrect: false
            },
            {
                textoRespuesta: "Su velocidad con respecto a la tierra es de 85 Km./h.",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "50. Un centro de gravedad muy retrasado es muy peligroso:",
        opciones: [
            {
                textoRespuesta: "Porque facilita la entrada en pérdida",
                isCorrect: true
            },
            {
                textoRespuesta: "Porque aumenta la carga alar",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque altera la resistencia estructural",
                isCorrect: false
            },
            {
                textoRespuesta: "Porque aumenta la resistencia parásita",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "51. La existencia de viento en cara en el despegue permitirá:",
        opciones: [
            {
                textoRespuesta: "Una mayor carrera de despegue",
                isCorrect: false
            },
            {
                textoRespuesta: "Un menor ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Un mayor ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Una mayor velocidad con respecto a la tierra",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "52. Los elementos destinados a modificar el perfil aerodinámico, consiguiendo que produzca sustentación a velocidades menores a las normales para las que está calculado se denominan:",
        opciones: [
            {
                textoRespuesta: "Dispositivos hipersustentadores",
                isCorrect: true
            },
            {
                textoRespuesta: "Dispositivos de aumentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Elementos de sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "53. Si tras haber sido separado el avión de su posición de equilibrio no tiende a alejarse más ni a volver a ella:",
        opciones: [
            {
                textoRespuesta: "Se habla de un equilibrio aerodinámico",
                isCorrect: false
            },
            {
                textoRespuesta: "Se habla de un equilibrio positivo",
                isCorrect: false
            },
            {
                textoRespuesta: "Se habla de un equilibrio negativo",
                isCorrect: false
            },
            {
                textoRespuesta: "Se habla de un equilibrio neutro",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "54. Cuanto mayor velocidad de giro en un viraje, menor es el factor de carga.",
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
        titulo: "55. La estabilidad en torno al eje vertical del avión se llama:",
        opciones: [
            {
                textoRespuesta: "Estabilidad transversal",
                isCorrect: false
            },
            {
                textoRespuesta: "Estabilidad longitudinal",
                isCorrect: false
            },
            {
                textoRespuesta: "Estabilidad direccional",
                isCorrect: true
            },
            {
                textoRespuesta: "Estabilidad lateral",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "56. La onda de montaña produce ligeras turbulencias que no afectan de forma importante al vuelo del ultraligero.",
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
        titulo: "57. Se define a la velocidad de ángulo de ascenso como:",
        opciones: [
            {
                textoRespuesta: "El ángulo que forman las alas del ULM al ascender",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre la velocidad y la distancia vertical",
                isCorrect: false
            },
            {
                textoRespuesta: "La relación entre velocidad y ángulo formado por las alas al ascender",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad con la que se sube lo más alto posible en la menor distancia horizontal",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "58. ¿Con qué velocidad mínima aproximada de viento es ya aconsejable aterrizar con él en cara?",
        opciones: [
            {
                textoRespuesta: "3 kts (5.5 km/h)",
                isCorrect: false
            },
            {
                textoRespuesta: "20 kts (37 km/h)",
                isCorrect: false
            },
            {
                textoRespuesta: "7 kts (13 km/h)",
                isCorrect: true
            },
            {
                textoRespuesta: "No influye el viento para elegir la pista de aterrizaje",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "59. ¿Cuál es la ventaja de poner una hélice en bandera en caso de parada del motor?",
        opciones: [
            {
                textoRespuesta: "El avión no trepa",
                isCorrect: false
            },
            {
                textoRespuesta: "Ofrecer menos resistencia al avance",
                isCorrect: true
            },
            {
                textoRespuesta: "Permite mejor visibilidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuir la altura",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "60. La velocidad que no debemos exceder por razones de seguridad y que puede producir daños estructurales es:",
        opciones: [
            {
                textoRespuesta: "VHF",
                isCorrect: false
            },
            {
                textoRespuesta: "VHR",
                isCorrect: false
            },
            {
                textoRespuesta: "VNO",
                isCorrect: false
            },
            {
                textoRespuesta: "VNE",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "61. La velocidad de pérdida de un avión depende:",
        opciones: [
            {
                textoRespuesta: "a) De su peso",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Las revoluciones por minuto del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Las dos anteriores son correctas",
                isCorrect: true
            },
            {
                textoRespuesta: "d) La \"a\" y \"b\" son falsas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "62. El centro de presiones se mueve normalmente hacia atrás a medida que crece el ángulo de ataque.",
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
        titulo: "63. En ascenso no acelerado:",
        opciones: [
            {
                textoRespuesta: "Sustentación es igual al peso más la componente horizontal de la resistencia aerodinámica",
                isCorrect: false
            },
            {
                textoRespuesta: "El empuje es igual a la resistencia aerodinámica más la componente ascendente del peso bruto en la dirección de la trayectoria de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "El empuje es igual a la resistencia aerodinámica más la componente descendente del peso bruto en la dirección de la trayectoria del vuelo",
                isCorrect: true
            },
            {
                textoRespuesta: "Sustentación es igual al peso mas la componente vertical de la resistencia aerodinámica",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "64. La distancia de aterrizaje se considera desde el punto en que el avión está situado a:",
        opciones: [
            {
                textoRespuesta: "100 pies",
                isCorrect: false
            },
            {
                textoRespuesta: "50 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "50 pies",
                isCorrect: true
            },
            {
                textoRespuesta: "150 metros",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "65. En el momento que el avión despega:",
        opciones: [
            {
                textoRespuesta: "Sustentación menor que peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación igual al peso",
                isCorrect: false
            },
            {
                textoRespuesta: "Sustentación mayor que peso",
                isCorrect: true
            },
            {
                textoRespuesta: "Dependerá de la velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "66. Los flaps:",
        opciones: [
            {
                textoRespuesta: "Disminuyen la sustentación y aumentan la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyen el ángulo de descenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumentan el ángulo de descenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumentan la sustentación y disminuyen la resistencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "67. El centro aerodinámico de un avión se encuentra dentro de unos límites, definidos en el manual de vuelo del avión:",
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
        titulo: "68. Para despegar en un campo de vuelo situado a gran altura, generalmente necesitamos:",
        opciones: [
            {
                textoRespuesta: "Una carrera menor que en uno situado a nivel del mar",
                isCorrect: false
            },
            {
                textoRespuesta: "Una carrera mayor que en uno situado a nivel del mar",
                isCorrect: true
            },
            {
                textoRespuesta: "La carrera no se ve afectada por la altitud",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "69. La densidad del aire:",
        opciones: [
            {
                textoRespuesta: "No varía con la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta con la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Es constante con la altura",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye con la altura",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "70. ¿Cuál de las siguientes afirmaciones es correcta?",
        opciones: [
            {
                textoRespuesta: "El flap debe retraerse a una velocidad por debajo del arco blanco",
                isCorrect: false
            },
            {
                textoRespuesta: "El flap debe retraerse todo al mismo tiempo",
                isCorrect: false
            },
            {
                textoRespuesta: "El flap debe retraerse a una velocidad por encima del arco blanco",
                isCorrect: false
            },
            {
                textoRespuesta: "El flap debe retraerse gradualmente",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "71. Las actuaciones de un ULM se calculan por el fabricante con el peso máximo al despegue (MTOW)",
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
        titulo: "72. Cuando un avión vuela en zonas de altas presiones, vuela más alto de lo que le correspondería en un día ISA:",
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
        titulo: "73. Un viento de cara:",
        opciones: [
            {
                textoRespuesta: "Disminuye el ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el ángulo y el régimen de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta el ángulo de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Disminuye el régimen de ascenso",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "74. La velocidad ascensional para conseguir la mayor altura en el menor tiempo posible se llama:",
        opciones: [
            {
                textoRespuesta: "Velocidad de ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de régimen de ascenso",
                isCorrect: true
            },
            {
                textoRespuesta: "Velocidad normal de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "75. Un avión que está saliendo del efecto suelo durante el despegue:",
        opciones: [
            {
                textoRespuesta: "Ninguna es correcta",
                isCorrect: false
            },
            {
                textoRespuesta: "Experimentará una reducción de la fricción con el suelo y requerirá una ligera reducción de potencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Experimentará un aumento de la resistencia inducida y disminución de su rendimiento",
                isCorrect: true
            },
            {
                textoRespuesta: "Requerirá un ángulo de ataque menor para mantener el mismo coeficiente de sustentación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "76. La definición de la Vx es:",
        opciones: [
            {
                textoRespuesta: "Es la llamada velocidad incógnita",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de máximo alcance",
                isCorrect: false
            },
            {
                textoRespuesta: "Velocidad de máxima autonomía",
                isCorrect: false
            },
            {
                textoRespuesta: "La velocidad con la que se consigue el mayor ángulo de subida",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "77. Para un ascenso prolongado:",
        opciones: [
            {
                textoRespuesta: "Pondremos la velocidad de régimen de ascenso, para una correcta refrigeración del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Pondremos la velocidad de ángulo de ascenso, para calentar el motor rápidamente",
                isCorrect: false
            },
            {
                textoRespuesta: "Pondremos la velocidad de ángulo de ascenso",
                isCorrect: false
            },
            {
                textoRespuesta: "Pondremos la velocidad normal de ascenso, para una correcta refrigeración del motor",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "78. La relación entre la distancia recorrida en línea recta y la altura pérdida en el mismo tiempo se denomina:",
        opciones: [
            {
                textoRespuesta: "Rendimiento aerodinámico del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Carga de las alas",
                isCorrect: false
            },
            {
                textoRespuesta: "Coeficiente de planeo",
                isCorrect: true
            },
            {
                textoRespuesta: "Coeficiente aerodinámico del avión",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "79. Las partículas de un fluido que pasan por un estrechamiento, aumentan su velocidad y por lo tanto:",
        opciones: [
            {
                textoRespuesta: "Aumentan su presión",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuyen su presión",
                isCorrect: true
            },
            {
                textoRespuesta: "Su presión permanece constante",
                isCorrect: false
            },
            {
                textoRespuesta: "No existe ninguna relación entre presión y velocidad",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "80. Cuando un avión ha aterrizado en un aeropuerto cuya elevación es de 1500'. ¿Qué marcará su altímetro ajustado a QFE?",
        opciones: [
            {
                textoRespuesta: "1500'",
                isCorrect: false
            },
            {
                textoRespuesta: "0'",
                isCorrect: true
            },
            {
                textoRespuesta: "1000'",
                isCorrect: false
            },
            {
                textoRespuesta: "500'",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "81. Un torbellino de punta de ala se origina por:",
        opciones: [
            {
                textoRespuesta: "La diferencia de velocidad en un extremo de un ala y el otro",
                isCorrect: false
            },
            {
                textoRespuesta: "La diferencia de presiones entre el extradós y el intradós",
                isCorrect: true
            },
            {
                textoRespuesta: "La diferencia de presiones en la parte delantera y trasera del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de ellas",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "82. Si un ULM, pesa 150 kg. Al despegue y dispone de una superficie alar de 15 m2, ¿Cuál será su carga alar?",
        opciones: [
            {
                textoRespuesta: "50 kg/m2.",
                isCorrect: false
            },
            {
                textoRespuesta: "10 kg/m2.",
                isCorrect: true
            },
            {
                textoRespuesta: "15 kg/m2.",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "83. Un aumento del factor de carga en el ULM:",
        opciones: [
            {
                textoRespuesta: "Hará que entre en pérdida a una velocidad indicada menor, y a menor ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "Hará que entre en pérdida a una velocidad indicada mayor, pero el ángulo de ataque será el mismo",
                isCorrect: true
            },
            {
                textoRespuesta: "Hará que entre en pérdida a una velocidad indicada mayor, y a menor ángulo de ataque",
                isCorrect: false
            },
            {
                textoRespuesta: "No afectará a la velocidad de pérdida",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "84. La mejor tasa de ascenso depende de:",
        opciones: [
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: false
            },
            {
                textoRespuesta: "La máxima relación sustentación/resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "La potencia de crucero establecida",
                isCorrect: false
            },
            {
                textoRespuesta: "La reserva de potencia y la velocidad IAS",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "85. Si la densidad del aire disminuye:",
        opciones: [
            {
                textoRespuesta: "Disminuye la resistencia",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la sustentación",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la tracción de la hélice",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la resistencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "86. Las superficies aerodinámicas destinadas a provocar de una forma controlada desplazamientos del avión sobre los tres ejes de referencia se denominan:",
        opciones: [
            {
                textoRespuesta: "a) Mandos primarios",
                isCorrect: false
            },
            {
                textoRespuesta: "b) Dispositivos hipersustentadores",
                isCorrect: false
            },
            {
                textoRespuesta: "c) Mandos de control de vuelo",
                isCorrect: false
            },
            {
                textoRespuesta: "d) \"a\" y \"c\" son ciertas",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "87. Si pasamos de una zona cálida a otra fría habiendo tomado una presión de referencia con la ventanilla Kollsman:",
        opciones: [
            {
                textoRespuesta: "Debemos tener en cuenta que el altímetro indicará menos altura que la real",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos tener en cuenta que el altímetro indicará más altura que la real",
                isCorrect: true
            },
            {
                textoRespuesta: "Las variaciones de temperatura exterior no influye en la lectura del altímetro",
                isCorrect: false
            },
            {
                textoRespuesta: "Debemos restar una constante a la lectura dada para obtener la real",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "88. El valor de la resistencia parásita depende de la velocidad a la que se vuele.",
        opciones: [
            {
                textoRespuesta: "No tiene nada que ver con la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "A mayor velocidad mayor resistencia",
                isCorrect: true
            },
            {
                textoRespuesta: "A menor velocidad mayor resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "A mayor velocidad menor resistencia",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "89. Antes de despegar, calamos el altímetro en QNH entonces debe indicar:",
        opciones: [
            {
                textoRespuesta: "0 metros",
                isCorrect: false
            },
            {
                textoRespuesta: "bLa altitud topográfica del terreno",
                isCorrect: true
            },
            {
                textoRespuesta: "El nivel de vuelo",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "90. En un vuelo de acrobacia es preferible que el avión:",
        opciones: [
            {
                textoRespuesta: "Sea muy estable para evitar riesgos al piloto",
                isCorrect: false
            },
            {
                textoRespuesta: "Sea inestable para aumentar la maniobrabilidad del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "La estabilidad no influye en la acrobacia",
                isCorrect: false
            },
            {
                textoRespuesta: "Ninguna de las anteriores",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "91. Se dice que un ULM ha entrado en 'pérdida':",
        opciones: [
            {
                textoRespuesta: "Al disminuir la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando cae",
                isCorrect: false
            },
            {
                textoRespuesta: "Al entrar en picado",
                isCorrect: false
            },
            {
                textoRespuesta: "Cuando se rompe la capa límite",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "92. Si el peso del avión es superior al inicialmente previsto, para una velocidad aerodinámica dada, el ángulo de ataque:",
        opciones: [
            {
                textoRespuesta: "Será constante, aumenta la resistencia aerodinámica y aumenta la autonomía",
                isCorrect: false
            },
            {
                textoRespuesta: "Será mayor, aumenta la resistencia aerodinámica y disminuye la autonomía",
                isCorrect: true
            },
            {
                textoRespuesta: "Será menor, disminuye la resistencia aerodinámica y aumenta la autonomía",
                isCorrect: false
            },
            {
                textoRespuesta: "Será constante, aumenta la resistencia aerodinámica y disminuye la autonomía",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "93. La altitud de densidad es:",
        opciones: [
            {
                textoRespuesta: "Es la referencia de altitud respecto al plano diferencial normal",
                isCorrect: false
            },
            {
                textoRespuesta: "Altitud de presión corregida por temperatura no tipo",
                isCorrect: true
            },
            {
                textoRespuesta: "Altura sobre la superficie",
                isCorrect: false
            },
            {
                textoRespuesta: "Lectura de altitud obtenida en el altímetro",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "94. Con una temperatura por encima de la standard y una presión por debajo, la TAS y, en consecuencia la G.S., serán mayores que la velocidad indicada.",
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
        titulo: "95. Usando los flaps el avión necesitará una pista para el despegue y aterrizaje menor.",
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
        titulo: "96. El factor de carga:",
        opciones: [
            {
                textoRespuesta: "Es el punto donde se concentra el peso del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Es el punto en el que se concentran las fuerzas aerodinámicas del avión",
                isCorrect: false
            },
            {
                textoRespuesta: "Es la relación existente entre la fuerza total que actúa sobre el avión y el peso del mismo",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "97. Si entramos inadvertidamente en una zona de vientos racheados y turbulentos volando con un ULM, deberemos:",
        opciones: [
            {
                textoRespuesta: "Aumentar la velocidad",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuir la velocidad",
                isCorrect: true
            },
            {
                textoRespuesta: "Ascender buscando zonas de vientos más débiles",
                isCorrect: false
            },
            {
                textoRespuesta: "Volar en círculos",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "98. Si vamos a despegar de la misma pista que un avión de gran tamaño inmediatamente después del mismo, debemos:",
        opciones: [
            {
                textoRespuesta: "Iniciar la rotación a una velocidad más lenta que la habitual, para evitar daños estructurales en caso de encontrar turbulencias",
                isCorrect: false
            },
            {
                textoRespuesta: "Iniciar la carrera de despegue desde el mismo punto en que la inició el otro avión, con el fin de estar seguros de que nuestro avión se irá al aire después del punto en que lo hizo el avión pesado",
                isCorrect: false
            },
            {
                textoRespuesta: "Iniciar la carrera de despegue más allá del punto en que la inició el otro avión, con el fin de estar seguros de que nuestro avión se irá al aire después del punto en que lo hizo el avión pesado",
                isCorrect: false
            },
            {
                textoRespuesta: "Iniciar la carrera de despegue desde el mismo punto en que la inició el otro avión, con el fin de estar seguros de que nuestro avión se irá al aire antes del punto en que lo hizo el avión pesado",
                isCorrect: true
            }
        ]
    },
    {
        titulo: "99. Si la temperatura de la tierra de un campo de vuelo aumenta de forma considerable:",
        opciones: [
            {
                textoRespuesta: "Aumenta la resistencia",
                isCorrect: false
            },
            {
                textoRespuesta: "Aumenta la efectividad del motor",
                isCorrect: false
            },
            {
                textoRespuesta: "Disminuye la sustentación",
                isCorrect: true
            },
            {
                textoRespuesta: "Aumenta la sustentación",
                isCorrect: false
            }
        ]
    },
    {
        titulo: "100. En zona de bajas presiones:",
        opciones: [
            {
                textoRespuesta: "El avión vuela más bajo de lo que indica el altímetro",
                isCorrect: true
            },
            {
                textoRespuesta: "El avión vuela más alto de lo que indica el altímetro",
                isCorrect: false
            }
        ]
    }
];

export default preguntas;