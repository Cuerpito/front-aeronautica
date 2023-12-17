const preguntas = [
  {
    titulo:
      '1. En un motor atmosférico, ¿en cuál de las siguientes situaciones se puede enriquecer la mezcla de aire y combustible sin que la modifiquemos nosotros?',
    opciones: [
      {
        textoRespuesta: 'En descensos',
        isCorrect: false
      },
      {
        textoRespuesta: 'En ascensos',
        isCorrect: false
      },
      {
        textoRespuesta: 'En despegues en días de temperaturas muy altas',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '2. ¿Cuándo consideraremos que estamos volando en un nivel de vuelo?',
    opciones: [
      {
        textoRespuesta: 'Cuando hayamos superado el nivel de transición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando hayamos calado 1.013 milibares en el altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando calemos la presión de atmósfera estándar en la ventanilla de Kollsman',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3. ¿Por qué se deben llenar completamente los depósitos de combustible después del último vuelo?',
    opciones: [
      {
        textoRespuesta: 'Para asegurarnos de que no nos quedaremos sin combustible la próxima vez que salgamos a volar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para evitar la condensación de agua en el interior del depósito',
        isCorrect: true
      },
      {
        textoRespuesta: 'Porque así será más difícil que éste se evapore',
        isCorrect: false
      },
      {
        textoRespuesta: 'Después del último vuelo los depósitos no se deben llena, hay que vaciarlos',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '4. Si estamos en un aeródromo en tierra y nuestro anemómetro marca 0 pies, ¿qué llevamos calado en la ventanilla de Kollsman?',
    opciones: [
      {
        textoRespuesta: 'El QNH',
        isCorrect: false
      },
      {
        textoRespuesta: 'El QNE',
        isCorrect: false
      },
      {
        textoRespuesta: 'El QFE',
        isCorrect: true
      },
      {
        textoRespuesta: 'En un aeródromo las agujas de nuestro anemómetro nunca pueden marcar 0 pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. Indique la correcta. El altímetro:',
    opciones: [
      {
        textoRespuesta: 'Se lee empezando por la aguja más grande y en orden decreciente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se empieza a leer por la aguja más pequeña y en orden creciente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Su aguja más pequeña indica los miles de pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aguja más grande señala los diez miles de pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6. Si durante el vuelo se nos obstruyen las tomas de medición estática, ¿qué procedimiento podemos llevar a cabo?',
    opciones: [
      {
        textoRespuesta: 'aAterrizar inmediatamente en el aeródromo más cercano',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continuar con el vuelo normalmente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Encender la calefacción del tubo pitot para comprobar si la obstrucción ha sido por hielo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Romper el cristal del variómetro',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7. El cociente resultante entre la cuerda en la punta del ala y la cuerda en el encastre es:',
    opciones: [
      {
        textoRespuesta: 'El estrechamiento',
        isCorrect: true
      },
      {
        textoRespuesta: 'La superficie alar',
        isCorrect: false
      },
      {
        textoRespuesta: 'La envergadura',
        isCorrect: false
      },
      {
        textoRespuesta: 'El alargamiento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. Estando en tierra, ¿cómo podemos comprobar si nuestro altímetro tiene algún error?',
    opciones: [
      {
        textoRespuesta: 'Sólo podremos comprobarlo en vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Calando el QFE y comprobando si la lectura del altímetro es cero, como debería indicar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Calando el QNH y comprobando si la lectura del altímetro es cero, como debería indicar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pidiendo a un mecánico certificado que lo revise',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9. Además de reducir el rozamiento entre las partes internas del motor, el aceite puede:',
    opciones: [
      {
        textoRespuesta: 'Aumentar la temperatura de las partes calientes del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir la temperatura de las partes más calientes del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proteger del óxido y la corrosión a las partes internas del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10. Indique la correcta. Con hélice de velocidad constante:',
    opciones: [
      {
        textoRespuesta: 'El paso de la hélice siempre será fijo',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El número de revoluciones del motor variará en función de factores como la velocidad o la presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'El número de revoluciones del motor se mantendrá constante',
        isCorrect: true
      },
      {
        textoRespuesta: 'A y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. Los instrumentos giroscópicos se basan en dos propiedades que son la rigidez en el espacio y la precisión.',
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
    titulo:
      '12. Nuestro anemómetro marca las siguientes velocidades: Vs0 55; Vs1 65; Vfe 100; Vno 150; Vne 180. ¿A partir de qué velocidad no debemos usar los flaps?',
    opciones: [
      {
        textoRespuesta: '65',
        isCorrect: false
      },
      {
        textoRespuesta: '100',
        isCorrect: true
      },
      {
        textoRespuesta: '150',
        isCorrect: false
      },
      {
        textoRespuesta: '180',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. ¿Qué velocidades delimitan el arco amarillo del anemómetro?',
    opciones: [
      {
        textoRespuesta: 'Vfe y Vne',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vno y Vne',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vfe y Vno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vs1 y Vfe',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. ¿Qué elemento/s proporciona/n energía al sistema eléctrico de la aeronave?',
    opciones: [
      {
        textoRespuesta: 'El alternador',
        isCorrect: false
      },
      {
        textoRespuesta: 'La batería',
        isCorrect: false
      },
      {
        textoRespuesta: 'La magneto',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '15. El grupo motor es:',
    opciones: [
      {
        textoRespuesta: 'El tipo de motor que utiliza cada aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'El conjunto de elementos que forman el motor como son los cilindros, el pistón, el cigüeñal y la biela',
        isCorrect: false
      },
      {
        textoRespuesta: 'El conjunto formado por el motor y la hélice',
        isCorrect: true
      },
      {
        textoRespuesta: 'El elemento que genera la tracción necesaria para el avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '16. Si durante el arranque del motor pasan 30 segundos y observamos que no hay indicación de presión del aceite, ¿cómo procederemos?',
    opciones: [
      {
        textoRespuesta: 'Apagaremos el motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Esperaremos otros 30 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aplicaremos calor al carburador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continuaremos sin prestarle mayor importancia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17. Indique la correcta. El indicador de virajes:',
    opciones: [
      {
        textoRespuesta: 'Nos señala si estamos haciendo un viraje coordinado o si lo estamos realizando con un resbale o derrape',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indica la dirección y el régimen aproximado de cambio de rumbo de la aeronave',
        isCorrect: true
      },
      {
        textoRespuesta: 'Está formado por el bastón y la bola, que guardan relación entre sí',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las anteriores son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. ¿Por qué no debemos utilizar un combustible de menor número de octanos que el recomendado para nuestra aeronave?',
    opciones: [
      {
        textoRespuesta: 'Porque mejorará el rendimiento del motor a corto plazo pero puede ser perjudicial con el paso del tiempo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Porque el motor no lo aceptará y no podrá ponerse en marcha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Porque podría provocar detonación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Porque no generará la suficiente potencia en el motor necesaria para el vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. ¿Cuál es el ángulo formado por el 25% de la cuerda y el eje transversal de la aeronave?',
    opciones: [
      {
        textoRespuesta: 'Ángulo flecha',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ángulo diedro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo del eje transversal o lateral',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo de curvatura',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '20. Si ponemos la calefacción en el carburador debido a la formación de hielo, ¿tenemos que ajustar la mezcla de aire y combustible?',
    opciones: [
      {
        textoRespuesta: 'No, porque ésta no sufrirá ningún cambio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, porque con el aire caliente se enriquece',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sí, porque con el aire caliente se empobrece',
        isCorrect: false
      },
      {
        textoRespuesta: 'No podemos hacer ningún ajuste sobre la mezcla, ya que viene determinada por el tipo de motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. Los instrumentos de la aeronave se clasifican en dos grandes grupos que son:',
    opciones: [
      {
        textoRespuesta: 'Alimentados por corriente alterna y alimentados por corriente continua',
        isCorrect: false
      },
      {
        textoRespuesta: 'Basados en la medición de presión dinámica y en la medición de presión estática',
        isCorrect: false
      },
      {
        textoRespuesta: 'Basados en las propiedades de rigidez en el espacio y de precesión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Basados en la medición de presión y en las propiedades giroscópicas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '22. ¿Cuál de los siguientes instrumentos es el que lleva el control y la medida de la velocidad del motor?',
    opciones: [
      {
        textoRespuesta: 'El indicador de presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'El tacómetro',
        isCorrect: true
      },
      {
        textoRespuesta: 'El indicador de flujo de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'El indicador de presión de combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '23. Si estamos en tierra en un aeródromo y calamos el QNH en la ventanilla de Kollsman, ¿qué debería marcar el altímetro?',
    opciones: [
      {
        textoRespuesta: 'Las agujas deberían marcar cero o significará que nuestro altímetro tiene un error',
        isCorrect: false
      },
      {
        textoRespuesta: 'Marcará la altitud de transición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Marcará el nivel de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Marcará la elevación del campo en el que nos encontramos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '24. Antes de proceder a la puesta en marcha del motor, el piloto deberá poner la válvula selectora:',
    opciones: [
      {
        textoRespuesta: 'Es indiferente',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el depósito que esté más vacío',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el depósito que esté más lleno',
        isCorrect: true
      },
      {
        textoRespuesta: 'No podemos seleccionar un depósito, pues la válvula lo hace automáticamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. ¿Cuáles son los instrumentos que basan su funcionamiento en la rigidez en el espacio y la precesión?',
    opciones: [
      {
        textoRespuesta: 'El anemómetro, el altímetro y el variómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'El horizonte artificial y el giro direccional',
        isCorrect: false
      },
      {
        textoRespuesta: 'La brújula y el indicador de virajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'El horizonte artificial, el indicador de virajes y el giro direccional',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '26. Si en un motor de cuatro tiempos llevamos mezcla 17:1, quiere decir que:',
    opciones: [
      {
        textoRespuesta: 'Llevamos mezcla rica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Llevamos mezcla pobre',
        isCorrect: true
      },
      {
        textoRespuesta: 'Llevamos la mezcla estequiométrica',
        isCorrect: false
      },
      {
        textoRespuesta: 'El motor no puede funcionar con esa mezcla',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. La torsión del ala es:',
    opciones: [
      {
        textoRespuesta: 'El ángulo formado entre el 25% de la cuerda y el eje lateral',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo que se forma entre el plano horizontal y el plano de cada ala',
        isCorrect: false
      },
      {
        textoRespuesta: 'El máximo ángulo de ataque que puede tener un ala sin entrar en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia entre el ángulo de ataque que hay en el encastre y en la punta del ala',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '28. ¿Por qué es importante la calefacción del carburador?',
    opciones: [
      {
        textoRespuesta: 'Porque su uso calienta el combustible y esto favorece la explosión en el cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Porque así se mejora su lubricación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para evitar la formación de hielo o eliminarlo cuando ya se ha creado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Para mejorar el rendimiento del motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. Las hélices, al ser siempre fijas, no pueden cambiar su ángulo de ataque:',
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
    titulo:
      '30. Con hélice de velocidad constante, el regulador mantiene fijo el número de revoluciones del motor modificando el paso de las palas:',
    opciones: [
      {
        textoRespuesta: 'Falso ',
        isCorrect: false
      },
      {
        textoRespuesta: 'Verdadero ',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '31. Las fases de un motor de cuatro tiempos son:',
    opciones: [
      {
        textoRespuesta: 'Admisión, compresión, detonación y expulsión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Admisión, compresión, expulsión y tracción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Admisión, compresión, explosión y expulsión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Compresión, explosión, expulsión y tracción',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. Cuando se vuela de una zona de altas presiones a una de bajas:',
    opciones: [
      {
        textoRespuesta: 'El avión descenderá aunque la lectura del altímetro será la misma',
        isCorrect: true
      },
      {
        textoRespuesta: 'El avión ascenderá aunque la lectura del altímetro será la misma',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro marcará un ascenso aunque vayamos al mismo nivel',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro marcará un descenso aunque vayamos al mismo nivel',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. Indique la correcta. En un derrape:',
    opciones: [
      {
        textoRespuesta: 'El bastón se irá hacia el lado contrario al que estamos virando',
        isCorrect: false
      },
      {
        textoRespuesta: 'La bola se irá hacia el lado contrario del bastón',
        isCorrect: true
      },
      {
        textoRespuesta: 'La bola se irá hacia el mismo lado que el bastón',
        isCorrect: false
      },
      {
        textoRespuesta: 'El bastón permanecerá centrado y la bola se irá hacia el lado contrario del viraje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. Indique la correcta. Una hélice de velocidad constante:',
    opciones: [
      {
        textoRespuesta: 'Es cualquier hélice de paso fijo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es cualquier hélice de paso variable',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es una hélice de paso variable que se ajusta automáticamente y que mantiene fija su velocidad de giro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas las hélices son de velocidad constante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. ¿Dónde es habitual que se encuentre la toma de presión estática?',
    opciones: [
      {
        textoRespuesta: 'En el fuselaje, en el mismo plano que éste',
        isCorrect: false
      },
      {
        textoRespuesta: 'Junto al tubo pitot',
        isCorrect: false
      },
      {
        textoRespuesta: 'Habitualmente, una a cada lado del fuselaje del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y C son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '36. En un día con temperaturas muy altas:',
    opciones: [
      {
        textoRespuesta: 'El avión volará más alto de lo que indica el altímetro',
        isCorrect: true
      },
      {
        textoRespuesta: 'El altímetro indicará que el avión va más alto de lo que realmente va',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión volará más bajo de lo que indica el altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '37. Cuando el aire tiene un alto grado de humedad:',
    opciones: [
      {
        textoRespuesta: 'Se podrá formar hielo en el fuselaje aun cuando la temperatura sea alta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se formará hielo en el carburador cuando la temperatura descienda de 0ºC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Habrá que encender la calefacción del carburador incluso en tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se podrá formar hielo en el carburador aun cuando la temperatura esté por encima de los 0ºC',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '38. Nuestro anemómetro marca las siguientes velocidades: Vs0 55; Vs1 65; Vfe 100; Vno 150; Vne 180. De las siguientes velocidades, ¿a cuál podríamos volar si estamos en zona de turbulencias?',
    opciones: [
      {
        textoRespuesta: '120',
        isCorrect: true
      },
      {
        textoRespuesta: '165',
        isCorrect: false
      },
      {
        textoRespuesta: '60',
        isCorrect: false
      },
      {
        textoRespuesta: '55',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. En un motor de pistón, el sistema de encendido cuenta con dos bujías por cilindro y una magneto.',
    opciones: [
      {
        textoRespuesta: 'Verdadero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Falso',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '40. Indique la correcta. La velocidad sobre el suelo (GS):',
    opciones: [
      {
        textoRespuesta: 'Es la velocidad indicada o IAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la misma que la velocidad real o TAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la velocidad TAS ajustada por el viento',
        isCorrect: true
      },
      {
        textoRespuesta: 'A y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. Indique la correcta. Los winglets:',
    opciones: [
      {
        textoRespuesta: 'Reducen la resistencia parásita',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducen la resistencia inducida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentan la resistencia inducida y reducen la parásita',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. ¿Cuál es el tipo de combustible utilizado en aviación?',
    opciones: [
      {
        textoRespuesta: 'Diesel 100',
        isCorrect: false
      },
      {
        textoRespuesta: 'Avgas 100',
        isCorrect: false
      },
      {
        textoRespuesta: 'Avgas 80',
        isCorrect: false
      },
      {
        textoRespuesta: 'Avgas 100LL',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '43. ¿A qué nos referimos cuando hablamos del número de octanos del combustible?',
    opciones: [
      {
        textoRespuesta: 'A la resistencia de ese combustible a detonar',
        isCorrect: true
      },
      {
        textoRespuesta: 'A la cantidad de aditivos que lleva',
        isCorrect: false
      },
      {
        textoRespuesta: 'A su capacidad para mejorar el rendimiento de la aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. ¿Dónde se produce la compresión en un motor de cuatro tiempos?',
    opciones: [
      {
        textoRespuesta: 'En el cilindro',
        isCorrect: true
      },
      {
        textoRespuesta: 'En la apertura que regula la válvula',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el pistón',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el cigüeñal',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. ¿Cuál es el instrumento que nos proporciona información sobre la actitud de la aeronave con relación a la tierra?',
    opciones: [
      {
        textoRespuesta: 'El indicador de virajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'El horizonte artificial',
        isCorrect: true
      },
      {
        textoRespuesta: 'La brújula',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. Con hélices de paso variable, el paso largo se utiliza:',
    opciones: [
      {
        textoRespuesta: 'Para bajas velocidades',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando necesitamos mucha potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para altas velocidades',
        isCorrect: true
      },
      {
        textoRespuesta: 'En despegues',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '47. Con hélices de paso variable, en despegues:',
    opciones: [
      {
        textoRespuesta: 'Llevaremos paso corto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es indiferente el paso que llevemos, lo importante es llegar a la velocidad adecuada para despegar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Llevaremos paso largo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Llevaremos la hélice en posición de bandera',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. ¿Dónde se realiza la mezcla aire/combustible?',
    opciones: [
      {
        textoRespuesta: 'En el cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el depósito',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la válvula de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el carburador',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '49. Una detonación puede producirse por:',
    opciones: [
      {
        textoRespuesta: 'Presiones de admisión muy altas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Bajas temperaturas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presiones de admisión muy bajas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alto número de revoluciones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. Indique la correcta. Con menor densidad que en la atmósfera estándar:',
    opciones: [
      {
        textoRespuesta: 'La TAS será mayor que la IAS',
        isCorrect: true
      },
      {
        textoRespuesta: 'La IAS será mayor que la TAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'IAS y Tas serán iguales',
        isCorrect: false
      },
      {
        textoRespuesta: 'La densidad no afecta a la velocidad que indica el anemómetro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. El instrumento que para su funcionamiento utiliza tanto el tubo pitot como las tomas estáticas es:',
    opciones: [
      {
        textoRespuesta: 'El anemómetro',
        isCorrect: true
      },
      {
        textoRespuesta: 'El altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'El indicador de virajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'El variómetro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. Si la relación de mezcla que tenemos en un motor atmosférico de cuatro tiempos es de 12:1, ¿qué significa?',
    opciones: [
      {
        textoRespuesta: 'Que tenemos mezcla estequiométrica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que tenemos mezcla rica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que tenemos mezcla pobre',
        isCorrect: false
      },
      {
        textoRespuesta: 'El motor no funcionará con esa mezcla',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. Cuando el Norte magnético se encuentra a la derecha del geográfico:',
    opciones: [
      {
        textoRespuesta: 'Tenemos desviación Este',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tenemos declinación Oeste',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tenemos variación Este',
        isCorrect: true
      },
      {
        textoRespuesta: 'A y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. Si el medidor nos indica que los gases de escape están a altas temperaturas:',
    opciones: [
      {
        textoRespuesta: 'Aumenta el consumo de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentan las posibilidades de detonación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es probable que llevemos mezcla rica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentan las incrustaciones en las bujías',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '55. En un viraje coordinado:',
    opciones: [
      {
        textoRespuesta: 'La bola se encuentra en el centro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Daremos una vuelta de 180º',
        isCorrect: false
      },
      {
        textoRespuesta: 'El bastón se encuentra en el centro',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. Indique la correcta. La IAS será igual que la TAS:',
    opciones: [
      {
        textoRespuesta: 'Siempre',
        isCorrect: false
      },
      {
        textoRespuesta: 'En atmósfera estándar',
        isCorrect: true
      },
      {
        textoRespuesta: 'En grandes altitudes de densidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nunca',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '57. El instrumento que basa su funcionamiento en el principio de precesión giroscópica es:',
    opciones: [
      {
        textoRespuesta: 'El bastón',
        isCorrect: true
      },
      {
        textoRespuesta: 'La bola',
        isCorrect: false
      },
      {
        textoRespuesta: 'El horizonte artificial',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '58. La temperatura de los gases de escape tiene una relación directa con la cantidad idónea de combustible que necesita el motor:',
    opciones: [
      {
        textoRespuesta: 'Verdadero',
        isCorrect: true
      },
      {
        textoRespuesta: 'Falso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. ¿Cuál es el propósito del ángulo diedro?',
    opciones: [
      {
        textoRespuesta: 'Generar una mayor sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducir la resistencia parásita',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporcionar estabilidad longitudinal al avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporcionar estabilidad lateral a la aeronave',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '60. Indique la correcta. El drenaje de los depósitos de combustible:',
    opciones: [
      {
        textoRespuesta: 'La realiza el piloto durante la inspección prevuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'La debe realizar un mecánico especializado',
        isCorrect: false
      },
      {
        textoRespuesta: 'La realiza el piloto tras un vuelo para eliminar las impurezas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se debe llevar a cabo cuando se realicen las revisiones de la aeronave',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '61. La GS es la velocidad real del avión con relación al suelo:',
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
    titulo: '62. ¿Qué son los winglets?',
    opciones: [
      {
        textoRespuesta: 'Dispositivos aerodinámicos que se colocan en la punta de las alas',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Frenos aerodinámicos que se suelen encontrar en medio de la superficie del ala y que se utilizan en aterrizajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un tipo de flaps que se colocan en el borde de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Compensadores de los mandos primarios',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. ¿Cuál de los siguientes fenómenos puede indicar que se está produciendo preignición?',
    opciones: [
      {
        textoRespuesta: 'La pérdida de potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Funcionamiento irregular del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una perforación del pistón',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '64. Con hélice de paso fijo, el tacómetro:',
    opciones: [
      {
        textoRespuesta: 'Indica el número de revoluciones de la hélice',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indica el número de revoluciones del motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Indica si la mezcla aire / combustible es la adecuada',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. Indique la correcta. La superficie alar es:',
    opciones: [
      {
        textoRespuesta: 'El cociente resultante entre el perfil que hay en el encastre y la punta de un ala',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cociente resultante entre lo que mide el ala y la cuerda media',
        isCorrect: true
      },
      {
        textoRespuesta: 'El cociente resultante entre la envergadura y la cuerda media',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '66. ¿En qué propiedad basa su funcionamiento el horizonte artificial?',
    opciones: [
      {
        textoRespuesta: 'En la medición de presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la precesión',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la rigidez en el espacio',
        isCorrect: true
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. Indique la correcta. La velocidad verdadera o TAS:',
    opciones: [
      {
        textoRespuesta: 'Coincide siempre con la velocidad indicada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la velocidad indicada corregida por el error de temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la velocidad indicada corregida por el error de densidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es la velocidad indicada corregida por el error de compresibilidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '68. El error que presenta la brújula debido a la diferencia de grados entre el Norte geográfico y el magnético recibe el nombre de:',
    opciones: [
      {
        textoRespuesta: 'Desviación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Declinación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Variación',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '69. Indique la correcta. ¿A qué nos referimos cuando hablamos de altitud de presión?',
    opciones: [
      {
        textoRespuesta: 'A la que nos indica el altímetro cuando lo calamos a la atmósfera estándar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al QNE',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al QNH',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '70. La velocidad a la que podemos volar tanto con flaps como sin ellos está delimitada en el anemómetro por:',
    opciones: [
      {
        textoRespuesta: 'Vs0 y Vfe',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vfe y Vno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vs0 y Vs1',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vs1 y Vfe',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '71. Si dejamos de aplicar calor al carburador y no aplicamos ningún ajuste a la mezcla, ésta:',
    opciones: [
      {
        textoRespuesta: 'Se enriquece',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se mantiene igual',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se empobrece',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '72. El bastón se mueve gracias a las fuerzas centrífugas y de gravedad.',
    opciones: [
      {
        textoRespuesta: 'Verdadero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Falso',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '73. El sistema de encendido de un motor de pistón:',
    opciones: [
      {
        textoRespuesta: 'Consta de dos bujías por cilindro y dos magnetos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Consta de una bujía por cilindro y dos magnetos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Consta de dos bujías por cilindro y una magneto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Consta de una bujía por cilindro y una magneto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '74. Los instrumentos que utilizan la propiedad de rigidez en el espacio para su funcionamiento son:',
    opciones: [
      {
        textoRespuesta: 'El horizonte artificial y el giro direccional',
        isCorrect: true
      },
      {
        textoRespuesta: 'El horizonte artificial y el indicador de virajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'El variómetro y el giro direccional',
        isCorrect: false
      },
      {
        textoRespuesta: 'El horizonte artificial, el giro direccional y el indicador de virajes',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. ¿Qué factor/es influye/n en el buen funcionamiento del aceite en el motor?',
    opciones: [
      {
        textoRespuesta: 'La temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La cantidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '76. Con hélices de paso fijo, si aplicamos palanca de mando de gases:',
    opciones: [
      {
        textoRespuesta: 'Aumenta la potencia y disminuyen las revoluciones por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye la potencia y aumentan las revoluciones por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la potencia y las revoluciones por minuto se mantienen iguales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la potencia y aumentan las revoluciones por minuto',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '77. La formación de hielo en la aeronave:',
    opciones: [
      {
        textoRespuesta: 'Aumenta la resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede provocar dificultad para manejar los mandos primarios',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '78. La velocidad Vs1 del anemómetro marca:',
    opciones: [
      {
        textoRespuesta: 'La velocidad mínima a la que podemos usar flaps',
        isCorrect: false
      },
      {
        textoRespuesta: 'La mínima velocidad con flaps',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad mínima sin flaps',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad máxima con flaps',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. El instrumento que nos indica la velocidad vertical de la aeronave es:',
    opciones: [
      {
        textoRespuesta: 'El anemómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'El variómetro',
        isCorrect: true
      },
      {
        textoRespuesta: 'El giro direccional',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. En un motor de cuatro tiempos, ¿cuál consideramos que es la mezcla estequiométrica?',
    opciones: [
      {
        textoRespuesta: '8:1',
        isCorrect: false
      },
      {
        textoRespuesta: '1:8',
        isCorrect: false
      },
      {
        textoRespuesta: '1:15',
        isCorrect: false
      },
      {
        textoRespuesta: '15:1',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '81. Cuando la bola se desplaza hacia el mismo lugar que el bastón:',
    opciones: [
      {
        textoRespuesta: 'La bola siempre se desplaza hacia el mismo lugar que el bastón',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estamos provocando un derrape',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estamos provocando un resbale',
        isCorrect: true
      },
      {
        textoRespuesta: 'Estamos llevando a cabo un viraje coordinado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '82. ¿Cómo se consigue la ignición de la mezcla en el motor de combustión interna?',
    opciones: [
      {
        textoRespuesta: 'La bujía produce una corriente eléctrica que hace pasar por la magneto',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cada magneto proporciona la corriente necesaria a las bujías para que produzcan la chispa que inicia la ignición',
        isCorrect: true
      },
      {
        textoRespuesta: 'La propia compresión de la mezcla es la que hace que comience la ignición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. En vuelo nos encontramos con una zona de turbulencias moderadas. ¿A qué velocidad deberemos ir?',
    opciones: [
      {
        textoRespuesta: 'Dentro de los límites del arco blanco, pues sólo así evitaremos daños estructurales en la aeronave',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Dentro de los límites del arco amarillo, pues si vamos más despacio las turbulencias nos pueden hacer entrar en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Dentro de los límites del arco verde, pues así evitaremos los daños estructurales que pueden causar las turbulencias',
        isCorrect: true
      },
      {
        textoRespuesta: 'A la que esté establecida como nuestra velocidad de crucero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. ¿Cuál es el elemento del motor que convierte el movimiento lineal generado por el pistón en un movimiento circular?',
    opciones: [
      {
        textoRespuesta: 'El cigüeñal',
        isCorrect: false
      },
      {
        textoRespuesta: 'La biela',
        isCorrect: true
      },
      {
        textoRespuesta: 'El cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'El propio pistón',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '85. Podemos definir la mezcla estequiométrica como:',
    opciones: [
      {
        textoRespuesta: 'La relación a la que se quema toda la mezcla de aire y combustible',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aquella que presenta el menor consumo posible de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'La mezcla de aire y combustible que se da en el carburador y que podemos regular para que sea rica o pobre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. ¿Qué es la EGT?',
    opciones: [
      {
        textoRespuesta: 'El medidor de presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'El medidor de la temperatura del aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'El medidor de la temperatura de los gases de escape',
        isCorrect: true
      },
      {
        textoRespuesta: 'El medidor de presión del aceite',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. ¿En qué orden se dan las fases de un motor de cuatro tiempos?',
    opciones: [
      {
        textoRespuesta: 'Compresión, admisión, explosión y expulsión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Admisión, compresión, expulsión y explosión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Admisión, explosión, compresión y expulsión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Admisión, compresión, explosión y expulsión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '88. La función de los estabilizadores vertical y horizontal de cola es:',
    opciones: [
      {
        textoRespuesta: 'Ser el soporte del timón de profundidad y de dirección, respectivamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener estable el avión en guiñadas y cabeceos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ser el soporte del timón de dirección y de profundidad, respectivamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener recto y estable todo el empenaje de cola',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '89. ¿En qué principio basa su funcionamiento el sistema hidráulico?',
    opciones: [
      {
        textoRespuesta: 'En el de Venturi',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el de Bernoulli',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el de Pascal',
        isCorrect: true
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. Con un motor atmosférico, en un ascenso la mezcla____ y la potencia____:',
    opciones: [
      {
        textoRespuesta: 'Se enriquece / aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se empobrece / aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se enriquece / disminuye',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '91. La cápsula que forma parte del altímetro está tarada a:',
    opciones: [
      {
        textoRespuesta: '1013 milibares a 15º',
        isCorrect: false
      },
      {
        textoRespuesta: '29’92 pulgadas de mercurio a 15º',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión atmosférica estándar a nivel del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '92. ¿Cuál es la forma más común de deshacerse del hielo de las hélices?',
    opciones: [
      {
        textoRespuesta: 'Con un tipo de alcohol especial',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentando las revoluciones para que se desprenda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mediante el uso de la calefacción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debido a su movimiento, es imposible que se forme hielo sobre ellas en vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. ¿Cuál será la primera indicación de que tenemos hielo en el carburador?',
    opciones: [
      {
        textoRespuesta: 'Una caída en la presión de admisión si tenemos hélice de paso variable',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tendremos que llevar siempre la calefacción porque no podremos saber si tenemos hielo hasta que el motor finalmente se pare',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una caída de las revoluciones del motor si tenemos hélice de paso fijo',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y C son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '94. ¿Cuál es el verdadero elemento tractor de la aeronave?',
    opciones: [
      {
        textoRespuesta: 'El motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'La hélice',
        isCorrect: true
      },
      {
        textoRespuesta: 'El grupo motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. ¿Qué es la ventanilla de Kollsman?',
    opciones: [
      {
        textoRespuesta: 'Es la que sirve para ajustar la presión en el anemómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la que sirve para ajustar la densidad en el altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la que sirve para ajustar la densidad en el anemómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la que sirve para ajustar la presión en el altímetro',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '96. Si en la ventanilla de Kollsman calamos 1.013 milibares, ¿qué estamos haciendo?',
    opciones: [
      {
        textoRespuesta: 'Ajustando el altímetro para que nos dé la altitud absoluta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ajustando el altímetro para que nos dé al altitud de densidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ajustando el altímetro para que nos dé la altitud indicada',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ajustando el altímetro para que nos dé la altitud de presión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. ¿Cuál es la velocidad que leemos directamente en el anemómetro?',
    opciones: [
      {
        textoRespuesta: 'IAS (velocidad indicada)',
        isCorrect: true
      },
      {
        textoRespuesta: 'TAS (velocidad verdadera)',
        isCorrect: false
      },
      {
        textoRespuesta: 'CAS (velocidad calibrada)',
        isCorrect: false
      },
      {
        textoRespuesta: 'EAS (velocidad equivalente)',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. ¿Cuál o cuáles son los instrumentos que necesita medir la presión estática para su funcionamiento?',
    opciones: [
      {
        textoRespuesta: 'El altímetro y el variómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'El anemómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '99. En cuanto a la brújula, ¿cuándo decimos que tenemos una variación Oeste?',
    opciones: [
      {
        textoRespuesta: 'Cuando el Norte verdadero está al Oeste del magnético',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando un campo magnético ha desviado la brújula hacia el Oeste',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el Norte magnético está al Oeste del geográfico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando llevamos un rumbo Oeste',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. La TAS es la velocidad que leemos directamente en el anemómetro:',
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
  }
];

export default preguntas;
