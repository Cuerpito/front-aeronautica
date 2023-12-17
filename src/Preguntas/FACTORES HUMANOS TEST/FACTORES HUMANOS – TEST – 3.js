const preguntas = [
  {
    titulo: '1. Las aceleraciones positivas por encima de 3G provocan:',
    opciones: [
      {
        textoRespuesta: 'Efecto túnel',
        isCorrect: true
      },
      {
        textoRespuesta: 'Visión roja',
        isCorrect: false
      },
      {
        textoRespuesta: 'cMayor presión intracraneal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las anteriores son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. ¿Cuál es el tipo de hipoxia que suele causar el alcohol o los narcóticos?',
    opciones: [
      {
        textoRespuesta: 'Anémica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipóxica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isquémica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Histotóxica',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3. Algunos aviones llevan un filtro de color anaranjado o rojo para detectar un gas. ¿Cuál es?',
    opciones: [
      {
        textoRespuesta: 'Monóxido de carbono',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dióxido de carbono',
        isCorrect: false
      },
      {
        textoRespuesta: 'Azufre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nitrógeno',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4. ¿De dónde obtienen su energía las células del cuerpo humano?',
    opciones: [
      {
        textoRespuesta: 'De la sangre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del dióxido de carbono',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del oxígeno',
        isCorrect: true
      },
      {
        textoRespuesta: 'Del nitrógeno',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. ¿Cuáles son las etapas del estrés?',
    opciones: [
      {
        textoRespuesta: 'De alarma, de resistencia y de agotamiento',
        isCorrect: true
      },
      {
        textoRespuesta: 'De alarma y de agotamiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estrés crónico y estrés agudo',
        isCorrect: false
      },
      {
        textoRespuesta: 'De resistencia, crónico y agudo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6. Nuestro tiempo útil de conciencia volando a 40.000 ft en una cabina presurizada será:',
    opciones: [
      {
        textoRespuesta: 'De 15 a 20 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: 'De 9 a 15 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: 'De 30 a 60 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: 'En una cabina presurizada no debemos tener problemas de hipoxia',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7. ¿Cuál de las siguientes es la composición de la atmósfera?',
    opciones: [
      {
        textoRespuesta: '78% Oxígeno, 21% Nitrógeno, 1% otros gases',
        isCorrect: false
      },
      {
        textoRespuesta: '78% Nitrógeno, 22% Oxígeno',
        isCorrect: false
      },
      {
        textoRespuesta: '78% Nitrógeno, 21% Oxígeno, 1% otros gases',
        isCorrect: true
      },
      {
        textoRespuesta: '78% Hidrógeno, 21% Oxígeno, 1% otros gases',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. Un movimiento brusco de la cabeza durante un viraje:',
    opciones: [
      {
        textoRespuesta: 'Causa bradipnea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Produce mareos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Causa taquipnea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede producir braquicardia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9. ¿Cuánto tiempo aproximadamente necesitan los bastones para adaptarse a la oscuridad?',
    opciones: [
      {
        textoRespuesta: 'Entre 1 y 5 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 10 y 15 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unos 30 minutos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una hora',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. Empezamos a sentir la falta de presión de oxígeno y comenzamos a querer respirar más rápido. ¿Qué nos puede pasar?',
    opciones: [
      {
        textoRespuesta: 'Que surta efecto y empecemos a respirar con normalidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que suframos hiperventilación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que perdamos el conocimiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que aumentemos un poco nuestro tiempo útil de conciencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. ¿Por qué no debemos volar si estamos resfriados o tenemos alergia?',
    opciones: [
      {
        textoRespuesta: 'Porque nos marearemos con mayor facilidad en altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Porque la obstrucción de la trompa de Eustaquio puede causar problemas en nuestro oído',
        isCorrect: true
      },
      {
        textoRespuesta: 'Porque la obstrucción de la cóclea puede causar problemas en nuestro oído',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12. Si hemos tomado alcohol, ¿cuánto tiempo tiene que pasar antes de que pilotemos según recomienda OACI?',
    opciones: [
      {
        textoRespuesta: '6 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '12 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '24 horas',
        isCorrect: true
      },
      {
        textoRespuesta: '36 horas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. La intoxicación por monóxido de carbono causa un tipo de hipoxia. ¿Cuál es?',
    opciones: [
      {
        textoRespuesta: 'Histotóxica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Anémica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hipóxica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isquémica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. El tiempo útil de conciencia volando a 35.000 ft es aproximadamente de:',
    opciones: [
      {
        textoRespuesta: '9 a 15 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: '1 a 2 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: '30 a 60 segundos',
        isCorrect: true
      },
      {
        textoRespuesta: '5 a 10 minutos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. Indique la correcta. La trompa de Eustaquio:',
    opciones: [
      {
        textoRespuesta: 'Es la encargada de equilibrar las presiones a un lado y otro del tímpano',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es la parte del sistema vestibular que mantiene el equilibrio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la encargada de enviar los impulsos del oído al cerebro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Recoge las vibraciones del tímpano',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16. Indique la correcta. El consumo de alcohol:',
    opciones: [
      {
        textoRespuesta:
          'Aumenta la capacidad normal de resistencia a la hipoxia, lo cual no quiere decir que esté permitido para el vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deteriora la eficiencia del cuerpo humano pero no afecta a la hipoxia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye la capacidad normal de resistencia a la hipoxia',
        isCorrect: true
      },
      {
        textoRespuesta: 'En pequeñas cantidades está permitido para el vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '17. ¿Qué actitud de comportamiento presenta una persona que mantiene disconformidad o desatención ante las indicaciones de lo que tiene que hacer?',
    opciones: [
      {
        textoRespuesta: 'Resignado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antiautoridad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Impulsivo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Invulnerabilidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. ¿Qué relación hay entre la altura y la respiración?',
    opciones: [
      {
        textoRespuesta: 'Con la altura disminuye la cantidad de oxígeno, lo que causa la hipoxia',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Al disminuir la presión del aire, el oxígeno también disminuye su presión y llega menor cantidad de éste a nuestras células',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por debajo de 10.000 ft prácticamente no hay problemas',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '19. ¿Cuál es el límite de tolerancia de aceleraciones para las personas?',
    opciones: [
      {
        textoRespuesta: '+ 3G / - 4’5G',
        isCorrect: false
      },
      {
        textoRespuesta: '+ 4’5G / - 3G',
        isCorrect: true
      },
      {
        textoRespuesta: '+ 3G / - 3G',
        isCorrect: false
      },
      {
        textoRespuesta: '+ 4’5G / - 5G',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. El límite de aceleraciones positivas que soportan las personas es:',
    opciones: [
      {
        textoRespuesta: '3 G positivos',
        isCorrect: false
      },
      {
        textoRespuesta: '2’5 G positivos',
        isCorrect: false
      },
      {
        textoRespuesta: '4’5 G positivos',
        isCorrect: true
      },
      {
        textoRespuesta: '5 G positivos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. Quien no acepta responsabilidades o deja para otros la toma de decisiones entra en el perfil de:',
    opciones: [
      {
        textoRespuesta: 'Macho',
        isCorrect: false
      },
      {
        textoRespuesta: 'Impulsivo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Resignado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Invulnerable',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. Las aceleraciones (G) positivas son más peligrosas que las negativas:',
    opciones: [
      {
        textoRespuesta: 'Falso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Verdadero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. Cuando en una aceleración, la fuerza de inercia actúa hacia la cabeza, ¿qué G nos afecta?',
    opciones: [
      {
        textoRespuesta: 'G negativo, que son los que mejor soportan las personas',
        isCorrect: false
      },
      {
        textoRespuesta: 'G positivo, que son los que peor soportan las personas',
        isCorrect: false
      },
      {
        textoRespuesta: 'G negativo, que son los que peor soportan las personas',
        isCorrect: true
      },
      {
        textoRespuesta: 'G positivo, que son los que mejor soportan las personas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. Si sufrimos una descompresión rápida, ¿qué pasa con el tiempo de conciencia útil?',
    opciones: [
      {
        textoRespuesta: 'Se reduce en un 50%',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es el mismo que si la descompresión se produce gradualmente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pasa a ser menor de 10 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta en un 50%',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. Hemos volado con velocidad constante durante un rato y desaceleramos la aeronave. ¿Qué sensación nos causa?',
    opciones: [
      {
        textoRespuesta: 'Que estamos ascendiendo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que entramos en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que estamos descendiendo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que tenemos un momento de encabritado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '26. Si vemos mejor de cerca que de lejos probablemente tengamos:',
    opciones: [
      {
        textoRespuesta: 'Hipermetropía',
        isCorrect: false
      },
      {
        textoRespuesta: 'Astigmatismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Miopía',
        isCorrect: true
      },
      {
        textoRespuesta: 'Presbicia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. Tras llevar una velocidad constante, aceleramos la aeronave. ¿Qué ilusión nos produce?',
    opciones: [
      {
        textoRespuesta: 'Que estamos ascendiendo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que hemos entrado en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que estamos descendiendo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que tenemos un momento de picado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. La enfermedad por descompresión en buceo está causada por un gas. ¿Cuál es?',
    opciones: [
      {
        textoRespuesta: 'Hidrógeno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Oxígeno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dióxido de Carbono',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nitrógeno',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '29. La hiperventilación se puede tratar respirando con una bolsa:',
    opciones: [
      {
        textoRespuesta: 'Falso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Verdadero',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '30. Cuando una pista tiene un gradiente positivo:',
    opciones: [
      {
        textoRespuesta: 'Tendemos a volar más bajo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tendemos a volar más alto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tenemos la sensación de volar más bajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '31. En las aceleraciones con G negativas:',
    opciones: [
      {
        textoRespuesta: 'El piloto se despega del asiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede producirse la visión roja',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede producirse el efecto túnel',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '32. Estamos en vuelo y notamos síntomas de hipoxia en nuestro copiloto. ¿Qué haremos en primer lugar?',
    opciones: [
      {
        textoRespuesta: 'Descender inmediatamente por debajo de 10.000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ponerle la mascarilla de oxígeno y luego ponérnosla nosotros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Declarar una situación de emergencia (MAYDAY)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ponernos la mascarilla y luego ponérsela al copiloto',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '33. ¿Cómo podemos detectar una intoxicación por monóxido de carbono?',
    opciones: [
      {
        textoRespuesta: 'Por el fuerte olor que produce',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por el cambio de color en el aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con un detector, ya que se trata de un gas inodoro e incoloro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por síntomas como la cianosis',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. ¿Qué parte del sistema circulatorio transporta sangre oxigenada del corazón hasta los tejidos?',
    opciones: [
      {
        textoRespuesta: 'Las venas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las arterias',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las arterias y las venas pulmonares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las venas y las arterias',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. ¿A qué llamamos tiempo útil de conciencia o TUC?',
    opciones: [
      {
        textoRespuesta: 'Es el tiempo del que dispone el piloto en vuelo antes de sentir fatiga',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el tiempo del que disponemos para actuar de manera efectiva o consciente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es el tiempo del que disponemos antes de perder la conciencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el tiempo que tenemos antes de que el alcohol haga efecto en el organismo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. ¿Cuál de las siguientes ilusiones se pueden dar por volar de noche?',
    opciones: [
      {
        textoRespuesta: 'La ilusión de que la pista está más alta',
        isCorrect: false
      },
      {
        textoRespuesta: 'La ilusión de que volamos más bajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La ilusión de Coriolis',
        isCorrect: false
      },
      {
        textoRespuesta: 'El falso horizonte producido por la luz de una ciudad',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '37. ¿Qué es la DCS?',
    opciones: [
      {
        textoRespuesta: 'La enfermedad por descompresión',
        isCorrect: true
      },
      {
        textoRespuesta: 'La diferencia de presiones a un lado y otro del tímpano',
        isCorrect: false
      },
      {
        textoRespuesta: 'El tiempo útil de conciencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son las siglas en inglés de la disminución de la presión con la altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. ¿Cuál es la ilusión que percibimos si aceleramos la aeronave de repente?',
    opciones: [
      {
        textoRespuesta: 'Que entramos en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que tenemos un momento de encabritado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que descendemos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que tenemos un momento de picado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. De las partes que forman el sistema circulatorio, ¿cuáles son las que transportan sangre rica en oxígeno?',
    opciones: [
      {
        textoRespuesta: 'Las venas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las arterias',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las arterias y las venas pulmonares',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las arterias y las venas',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '40. Cuando las condiciones en vuelo no nos permiten usar la vista (nubes, vuelo de noche, etc.), ¿qué elemento nos proporciona la orientación espacial?',
    opciones: [
      {
        textoRespuesta: 'La trompa de Eustaquio',
        isCorrect: false
      },
      {
        textoRespuesta: 'El sistema vestibular (oído medio)',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los senos paranasales',
        isCorrect: false
      },
      {
        textoRespuesta: 'El sistema somatosensorial',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. ¿Qué parte del ojo es la primera que capta la luz que recibimos?',
    opciones: [
      {
        textoRespuesta: 'La pupila',
        isCorrect: false
      },
      {
        textoRespuesta: 'La retina',
        isCorrect: false
      },
      {
        textoRespuesta: 'El iris',
        isCorrect: false
      },
      {
        textoRespuesta: 'La córnea',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '42. ¿Cuál es la hipoxia que se produce debido a la disminución de la presión por la altura?',
    opciones: [
      {
        textoRespuesta: 'Hipoxia histotóxica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipoxia hipóxica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hipoxia isquémica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipoxia anémica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. El monóxido de carbono es un gas rápidamente detectable por su fuerte olor:',
    opciones: [
      {
        textoRespuesta: 'Falso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Verdadero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. ¿Qué es la ilusión autocinética?',
    opciones: [
      {
        textoRespuesta: 'Se da cuando miramos una luz fija en un entorno oscuro y parece que se mueve',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se da cuando movemos rápidamente la cabeza durante un viraje',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La que se produce en aproximación de noche, cuando las luces de la pista nos hacen verla más baja de lo que está',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. ¿Cuál de los sentidos es el sentido que proporciona el 0’9 de la orientación espacial?',
    opciones: [
      {
        textoRespuesta: 'El oído',
        isCorrect: false
      },
      {
        textoRespuesta: 'El tacto',
        isCorrect: false
      },
      {
        textoRespuesta: 'La vista',
        isCorrect: true
      },
      {
        textoRespuesta: 'El olfato',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. ¿Dónde se encuentra la cóclea?',
    opciones: [
      {
        textoRespuesta: 'En el oído externo',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el oído interno',
        isCorrect: true
      },
      {
        textoRespuesta: 'En el oído medio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre el oído externo y el oído medio',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '47. Un descenso brusco provoca:',
    opciones: [
      {
        textoRespuesta: 'La sensación de entrada en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'La ilusión de Coriolis',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aceleraciones G positivas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aceleraciones G negativas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '48. ¿Qué es la hiperventilación?',
    opciones: [
      {
        textoRespuesta: 'Una disminución de la concentración pulmonar de oxígeno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una disminución de la concentración pulmonar de dióxido de carbono',
        isCorrect: true
      },
      {
        textoRespuesta: 'La consecuencia de la falta de oxígeno en los tejidos del organismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La insuficiente presión de oxígeno en altura para nuestra respiración',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '49. Tras haber pasado por una intervención que requiera una anestesia general, ¿cuánto tiempo tiene que esperar el piloto para volar?',
    opciones: [
      {
        textoRespuesta: '12 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '72 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '48 horas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una semana',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. ¿Cuál es el límite de tolerancia para los humanos de los G negativos?',
    opciones: [
      {
        textoRespuesta: '3 G negativos',
        isCorrect: true
      },
      {
        textoRespuesta: '2’5 G negativos',
        isCorrect: false
      },
      {
        textoRespuesta: 'c5 G negativos',
        isCorrect: false
      },
      {
        textoRespuesta: '4 G negativos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. ¿Qué es la taquipnea?',
    opciones: [
      {
        textoRespuesta: 'Una disminución de la frecuencia respiratoria',
        isCorrect: false
      },
      {
        textoRespuesta: 'El síndrome de descompresión inducida por la altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aumento de la frecuencia respiratoria',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un aumento de los latidos del corazón por encima de 100 latidos por minuto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. Indique la correcta. Las arterias:',
    opciones: [
      {
        textoRespuesta: 'Transportan sangre oxigenada desde el corazón hasta los tejidos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Transportan sangre oxigenada en dirección al corazón',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su función es transportar CO2 hacia los alveolos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Salen de las aurículas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. En un viraje a velocidad constante, llega un momento que:',
    opciones: [
      {
        textoRespuesta: 'Nos da la sensación de estar rectos respecto al horizonte',
        isCorrect: true
      },
      {
        textoRespuesta: 'Creemos que estamos descendiendo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nos da la sensación de que hemos entrado en barrena y tendemos a recuperarla',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pensamos que estamos virando en sentido contrario',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. ¿Cuál será nuestro tiempo de conciencia útil si volamos a 5.000 ft de altitud en una cabina sin presurizar?',
    opciones: [
      {
        textoRespuesta: '30 minutos o más',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 15 y 20 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 10 y 15 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: 'A esa altitud no sufriremos hipoxia',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '55. En vuelo recto y nivelado a 3.000 ft empezamos a sentir sensación de hormigueo, aturdimiento, cianosis, etc. ¿Qué podemos estar sufriendo?',
    opciones: [
      {
        textoRespuesta: 'Hiperventilación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hipoxia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desorientación espacial',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deshidratación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. El término utilizado para definir el movimiento del aire desde y hacia los alveolos es:',
    opciones: [
      {
        textoRespuesta: 'Respiración',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ventilación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Inspiración',
        isCorrect: false
      },
      {
        textoRespuesta: 'Espiración',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '57. Aproximadamente, ¿cuánto tenemos que esperar para volar después de haber buceado para evitar la DCS?',
    opciones: [
      {
        textoRespuesta: '12 horas si no hemos bajado de 30’',
        isCorrect: false
      },
      {
        textoRespuesta: '24 horas si hemos bajado de 30’',
        isCorrect: false
      },
      {
        textoRespuesta: '24 horas si no hemos bajado de 30’',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '58. ¿Qué parte o partes del oído pueden verse afectadas en ascensos y descensos?',
    opciones: [
      {
        textoRespuesta: 'Todo el sistema vestibular',
        isCorrect: false
      },
      {
        textoRespuesta: 'La cóclea',
        isCorrect: false
      },
      {
        textoRespuesta: 'El tímpano',
        isCorrect: false
      },
      {
        textoRespuesta: 'La trompa de Eustaquio y el tímpano',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '59. Las arterias salen de ____ y las venas llegan a ____:',
    opciones: [
      {
        textoRespuesta: 'Ambas salen de las aurículas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ambas salen de los ventrículos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las aurículas / los ventrículos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los ventrículos / las aurículas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '60. Indique la correcta. Una pista más estrecha de lo normal:',
    opciones: [
      {
        textoRespuesta: 'Crea la ilusión de que vamos más bajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Crea la ilusión de que vamos más alto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Crea la ilusión de que descendemos más deprisa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Crea la ilusión de que descendemos más despacio',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '61. ¿Cuáles son las células que encontramos en la fóvea del ojo?',
    opciones: [
      {
        textoRespuesta: 'Los conos, que son los que distinguen los colores',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los bastones, que distinguen los colores',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los bastones, que se utilizan en la visión nocturna',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los conos, que se utilizan en la visión nocturna',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '62. ¿Cuáles son los efectos de la hipermetropía?',
    opciones: [
      {
        textoRespuesta: 'Ver mejor de lejos que de cerca',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ver mejor de cerca que de lejos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una visión borrosa',
        isCorrect: false
      },
      {
        textoRespuesta: 'No distinguir los colores con claridad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. ¿Cuál sería el aspecto de comportamiento de alguien que cree que no puede pasarle nada?',
    opciones: [
      {
        textoRespuesta: 'Macho',
        isCorrect: false
      },
      {
        textoRespuesta: 'Impulsivo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Resignado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Invulnerable',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '64. ¿Qué ocurre cuando la frecuencia respiratoria es mayor que la normal?',
    opciones: [
      {
        textoRespuesta: 'Se da la bradipnea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se da la braquicardia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se da la taquicardia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se da la taquipnea',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '65. ¿De dónde obtiene información la función del equilibrio para su correcto funcionamiento?',
    opciones: [
      {
        textoRespuesta: 'Del sistema visual',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del sistema vestibular',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del sistema propioceptivo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las anteriores son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '66. ¿Cómo se produce la ilusión de Coriolis?',
    opciones: [
      {
        textoRespuesta: 'Cuando mantenemos la cabeza recta en un viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando miramos rápidamente hacia y lado y a otro en vuelo recto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando sacamos un viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando movemos rápidamente la cabeza durante un viraje',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '67. Una visión borrosa o distorsionada puede ser por:',
    opciones: [
      {
        textoRespuesta: 'Hipermetropía',
        isCorrect: false
      },
      {
        textoRespuesta: 'Astigmatismo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Presbicia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Miopía',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '68. En aproximación por la noche, ¿qué ilusión se genera?',
    opciones: [
      {
        textoRespuesta: 'Que la pista está más lejos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la pista está más alta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la pista está más baja',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que la pista está más cerca',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. Un piloto al que le han puesto una anestesia local no podrá volar hasta pasadas al menos:',
    opciones: [
      {
        textoRespuesta: '12 horas',
        isCorrect: true
      },
      {
        textoRespuesta: '24 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '48 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '36 horas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. Si aumentamos la frecuencia respiratoria para tratar de compensar la falta de oxígeno:',
    opciones: [
      {
        textoRespuesta: 'Se produce hipoxia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nos provocaremos braquicardia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Respiraremos mejor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se produce la hiperventilación',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '71. ¿Cuándo se da la braquicardia?',
    opciones: [
      {
        textoRespuesta: 'A menos de 60 latidos por minuto',
        isCorrect: true
      },
      {
        textoRespuesta: 'A menos de 100 latidos por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'A más de 60 latidos por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'A más de 100 latidos por segundo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '72. ¿Cuál se considera la frecuencia de respiración normal en adultos?',
    opciones: [
      {
        textoRespuesta: 'Unas 40 ventilaciones por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 12 y 16 ventilaciones por minuto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Entre 18 y 25 ventilaciones por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unas 30 ventilaciones por minuto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. Indique la correcta. La taquicardia se produce cuando se dan:',
    opciones: [
      {
        textoRespuesta: 'Más de 100 latidos por segundo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Más de 60 latidos por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Más de 100 latidos por minuto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Menos de 60 latidos por minuto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '74. ¿Cuál de los siguientes problemas de visión es causado por la edad?',
    opciones: [
      {
        textoRespuesta: 'Miopía',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipermetropía',
        isCorrect: false
      },
      {
        textoRespuesta: 'cAstigmatismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presbicia',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '75. Cuando la frecuencia de ventilación de una persona adulta supera las 20 ventilaciones por minutos:',
    opciones: [
      {
        textoRespuesta: 'Está teniendo taquicardia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está teniendo bradipnea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está teniendo taquipnea',
        isCorrect: true
      },
      {
        textoRespuesta: 'Está teniendo bradicardia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. Indique la correcta. Las células del ojo que se utilizan en la visión nocturna:',
    opciones: [
      {
        textoRespuesta: 'Son los conos, que están en la retina pero fuera de la fóvea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son los bastones, que están en la fóvea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son los conos, que están en la fóvea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son los bastones, que están en la retina pero fuera de la fóvea',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '77. Cuando podemos enfocar perfectamente objetos cercanos pero no los lejanos, ¿qué problema de visión podemos tener?',
    opciones: [
      {
        textoRespuesta: 'Miopía',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hipermetropía',
        isCorrect: false
      },
      {
        textoRespuesta: 'Astigmatismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cualquiera de los anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. Indique cuál de los siguientes elementos reducen la resistencia a la hipoxia:',
    opciones: [
      {
        textoRespuesta: 'El tabaco',
        isCorrect: false
      },
      {
        textoRespuesta: 'El alcohol',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los narcóticos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las anteriores son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '79. El tipo de hipoxia más común en aviación es:',
    opciones: [
      {
        textoRespuesta: 'Hipoxia hipóxica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hipoxia isquémica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipoxia histotóxica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipoxia anémica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. Respirar en una bolsa es una buena forma de evitar la hipoxia.',
    opciones: [
      {
        textoRespuesta: 'Falso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Verdadero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '81. ¿Cuándo se producen los problemas en el oído medio y en los senos paranasales?',
    opciones: [
      {
        textoRespuesta: 'En ascensos',
        isCorrect: false
      },
      {
        textoRespuesta: 'En descensos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se dan durante todo el vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '82. ¿Por qué se produce la intoxicación por monóxido de carbono?',
    opciones: [
      {
        textoRespuesta: 'Porque el CO se adhiere mejor a la hemoglobina que el oxígeno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Porque el CO reduce el suministro de oxígeno a los tejidos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Porque produce reacciones alérgicas en los humanos',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '83. ¿En qué parte del ojo se encuentran las células receptoras llamadas conos y bastones?',
    opciones: [
      {
        textoRespuesta: 'En la córnea',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la pupila',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la retina',
        isCorrect: true
      },
      {
        textoRespuesta: 'En la fóvea',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. ¿Hasta qué altitud permanece constante la composición de la atmósfera?',
    opciones: [
      {
        textoRespuesta: 'Hasta los 10.000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hasta los 20.000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hasta los 40.000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hasta los 70.000 ft.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '85. La parte del ojo que regula la cantidad de luz que llega hasta la retina es:',
    opciones: [
      {
        textoRespuesta: 'La córnea',
        isCorrect: false
      },
      {
        textoRespuesta: 'La pupila',
        isCorrect: true
      },
      {
        textoRespuesta: 'El iris',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los bastones y los conos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. ¿Cuál es el sentido que proporciona el 90% de nuestra orientación espacial?',
    opciones: [
      {
        textoRespuesta: 'El olfato',
        isCorrect: false
      },
      {
        textoRespuesta: 'El oído',
        isCorrect: false
      },
      {
        textoRespuesta: 'El tacto',
        isCorrect: false
      },
      {
        textoRespuesta: 'La visión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '87. ¿Cuándo se produce la hipoxia?',
    opciones: [
      {
        textoRespuesta: 'Cuando disminuye la cantidad de oxígeno en el aire y no podemos respirar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando respiramos más dióxido de carbono que oxígeno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la sangre oxigenada en los pulmones no se mueve hacia las células y tejidos que necesitan oxígeno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la cantidad de oxígeno que reciben las células o tejidos de nuestro organismo no es suficiente',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '88. ¿Cuánto hay que descender si empezamos a notar efectos de hipoxia?',
    opciones: [
      {
        textoRespuesta: 'Hasta que veamos que el resto de tripulantes se encuentra mejor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por debajo de 20.000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por debajo de 10.000 ft.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por debajo de 1.000 ft.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '89. Si notamos algún síntoma de hipoxia tenemos que descender:',
    opciones: [
      {
        textoRespuesta: 'Por debajo de 3.000 metros',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por debajo de 10.000 metros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por debajo de 3.000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por debajo de 20.000 pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. ¿Cuándo puede producirse el efecto túnel?',
    opciones: [
      {
        textoRespuesta: 'Con cualquier G negativa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con aceleraciones por encima de 3 G negativas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con aceleraciones por encima de 3 G positivas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Con aceleraciones por encima de 5 G negativas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. Durante las aceleraciones, la visión negra:',
    opciones: [
      {
        textoRespuesta: 'Se produce con G negativos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se produce con G positivos y es el paso anterior a la pérdida de conciencia',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se produce con G positivos y es el paso posterior a la visión roja',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. Indique la correcta. En una cabina presurizada:',
    opciones: [
      {
        textoRespuesta: 'La presión no será inferior a la que corresponde a niveles por debajo de 10.000 ft.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La presión no será inferior a la que corresponde a niveles por debajo de 20.000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión en el interior es inferior a la que existe en el exterior',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia de presiones entre la cabina y el exterior disminuirá con la altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. ¿Cuál se puede considerar la zona habitable de la atmósfera?',
    opciones: [
      {
        textoRespuesta: 'Hasta los 5.000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hasta los 10.000 ft.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hasta los 20.000 ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hasta los 40.000 ft.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. ¿Es conveniente comer antes de un vuelo?',
    opciones: [
      {
        textoRespuesta: 'No, pues puede producirnos náuseas',
        isCorrect: false
      },
      {
        textoRespuesta: 'No, porque nos podría producir dolor intestinal con las aceleraciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, siempre que se haga con moderación',
        isCorrect: true
      },
      {
        textoRespuesta: 'La ingesta de comida o bebidas no afecta durante el vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. ¿Qué problema podemos tener cuando vemos mejor de lejos que de cerca?',
    opciones: [
      {
        textoRespuesta: 'Miopía',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipermetropía',
        isCorrect: true
      },
      {
        textoRespuesta: 'Astigmatismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presbicia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. ¿Qué ilusión genera una pista más ancha de lo normal?',
    opciones: [
      {
        textoRespuesta: 'Que estamos más bajo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que la pista es descendente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que estamos más alto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la pista es ascendente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. ¿Cuál es el elemento encargado de transportar el oxígeno a los tejidos de nuestro cuerpo?',
    opciones: [
      {
        textoRespuesta: 'Los pulmones',
        isCorrect: false
      },
      {
        textoRespuesta: 'La hemoglobina',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los alveolos',
        isCorrect: false
      },
      {
        textoRespuesta: 'El corazón',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. La cantidad de oxígeno que llega a los tejidos de nuestro organismo está determinada por:',
    opciones: [
      {
        textoRespuesta: 'La presión parcial de oxígeno en los alveolos',
        isCorrect: true
      },
      {
        textoRespuesta: 'La cantidad de oxígeno que haya en el aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión sistólica',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión diastólica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '99. Realizamos un viraje prolongado. ¿Qué ilusión se produce cuando lo sacamos?',
    opciones: [
      {
        textoRespuesta: 'Que hemos entrado en barrena',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que seguimos virando hacia el mismo lado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que estamos virando hacia el lado opuesto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que hemos entrado en pérdida',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. ¿Cuál de las siguientes situaciones crea la sensación de que vamos más bajo?',
    opciones: [
      {
        textoRespuesta: 'Una pista estrecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una pista con pendiente ascendente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una pista con pendiente descendente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una pista que está rodeada de nieve',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
