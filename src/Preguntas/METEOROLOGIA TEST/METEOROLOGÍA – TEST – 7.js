const preguntas = [
  {
    titulo: '1. La densidad del aire de la atmósfera:',
    opciones: [
      {
        textoRespuesta: 'Será mayor cuanto mayor sea la temperatura y menor sea la presión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será menor cuanto mayor sea la temperatura y mayor sea la presión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será menor cuanto mayor sea la temperatura y menor sea la presión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Será mayor cuanto menor sea la temperatura y menor sea la presión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. La circulación atmosférica es debida a:',
    opciones: [
      {
        textoRespuesta: 'La radiación terrestre y los rayos de sol que inciden directamente en la atmósfera.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al calentamiento de la atmósfera, que hace que el aire caliente suba y el frío descienda.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los rayos de sol que calientan la atmósfera y a la rotación de la Tierra.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La rotación de la Tierra.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3. En el hemisferio norte un anticiclón es:',
    opciones: [
      {
        textoRespuesta:
          'Un centro de presión rodeado por isobaras de valor creciente, en el que el viento sopla alrededor en el sentido de las agujas del reloj.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un centro de presión rodeado por isobaras de valor decreciente, en el que el viento sopla alrededor en el sentido contrario a las agujas del reloj.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un centro de presión rodeado por isobaras de valor creciente, en el que el viento sopla alrededor en el sentido contrario a las agujas del reloj.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un centro de presión rodeado por isobaras de valor decreciente, en el que el viento sopla alrededor en el sentido de las agujas del reloj.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4. Entre los diferentes tipos de nubes, ¿en cuál es más probable que se produzca engelamiento?',
    opciones: [
      {
        textoRespuesta: 'En las de tipo nimbostratos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En las de tipo cúmulos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En las de tipo cirros, cirrostratos y cirrocúmulos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En todas las nubes que superen la isoterma de 0º.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. La presión o tensión de vapor se define como:',
    opciones: [
      {
        textoRespuesta: 'La cantidad de vapor de agua contenido en una unidad de aire.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura a la cual el vapor de agua contenido en una masa de aire alcanzaría la saturación.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La relación entre el contenido de vapor de agua de una masa de aire y la cantidad de vapor de agua que podría contener a la misma temperatura, si estuviese saturada.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El peso del vapor de agua contenido en una unidad de aire.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6. ¿Cuándo se da una inversión por proceso adiabático?',
    opciones: [
      {
        textoRespuesta:
          'Cuando la temperatura disminuye con la altura debido a que una masa de aire se calienta adiabáticamente al descender, por lo que llega a niveles inferiores a mayor temperatura que las capas de abajo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando la temperatura aumenta con la altura debido a que la capa de aire en contacto con la superficie terrestre se enfría con mayor rapidez que las capas superiores, que está recibiendo la radiación de aire caliente de la tierra.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando la temperatura aumenta con la altura debido a que una masa de aire se calienta adiabáticamente al descender, por lo que llega a niveles inferiores a menor temperatura que las capas de abajo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando la temperatura aumenta con la altura debido a que una masa de aire se calienta adiabáticamente al descender, por lo que llega a niveles inferiores a mayor temperatura que las capas de abajo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7. ¿Qué condiciones se deben dar para que sean altas las probabilidades de encontrar onda de montaña durante el vuelo?',
    opciones: [
      {
        textoRespuesta:
          'Que el viento lleve una dirección paralela a la cadena montañosa con una intensidad superior a 20 nudos, y que nos encontremos a barlovento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que el viento lleve una dirección paralela a la cadena montañosa con una intensidad superior a 20 nudos, y que nos encontremos a sotavento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que el viento lleve una dirección perpendicular a la cadena montañosa con una intensidad superior a 20 nudos, y que nos encontremos a barlovento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que el viento lleve una dirección perpendicular a la cadena montañosa con una intensidad superior a 20 nudos, y que nos encontremos a sotavento.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '8. En atmósfera estándar, ¿cómo desciende la temperatura con la altura en la troposfera?',
    opciones: [
      {
        textoRespuesta:
          '-1’98ºC cada 1.000 pies o -0’65ºC cada 1.000 metros hasta la tropopausa, cuando se considera constante a -56’5ºC.',
        isCorrect: false
      },
      {
        textoRespuesta:
          '-1’98ºC cada 1.000 pies o -6’5ºC cada 1.000 metros hasta la estratopausa, cuando se considera constante a -56’5ºC.',
        isCorrect: false
      },
      {
        textoRespuesta:
          '-1’98ºC cada 1.000 pies o -6’5ºC cada 1.000 metros hasta la tropopausa, cuando se considera constante a -56’5ºC.',
        isCorrect: true
      },
      {
        textoRespuesta: '-1’98ºC cada 1.000 pies o -6’5ºC cada 1.000 metros durante todas las capas que forman la atmósfera.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9. Las nubes de convección se forman:',
    opciones: [
      {
        textoRespuesta:
          'Debido al calentamiento del aire próximo a la superficie terrestre que aumenta su densidad y asciende, formando nubes de tipo cúmulos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Debido al calentamiento del aire próximo a la superficie terrestre que disminuye su densidad y asciende, formando nubes de tipo cúmulos.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Debido al calentamiento del aire próximo a la superficie terrestre que disminuye su densidad y asciende, formando nubes de tipo estratos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Debido al calentamiento del aire próximo a la superficie terrestre que disminuye su presión y asciende, formando nubes de tipo cúmulos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. El proceso que llamamos de advección de formación de nubes consiste en:',
    opciones: [
      {
        textoRespuesta: 'Que una masa de aire caliente y húmedo se coloca sobre otra fría y que forman nubes de tipo estratos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que una masa de aire frío se coloca sobre otra caliente y húmeda y que forman nubes de tipo estratos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una formación de corrientes verticales ascendentes que forman nubes de tipo cúmulos y de desarrollo vertical.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que una masa de aire caliente y húmedo se coloca sobre otra fría y que forman nubes de tipo cúmulos y de desarrollo vertical.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11. Teniendo en cuenta la proporción de las fuentes que generan el calentamiento de la Tierra, ¿podemos decir que se da igual en todas partes?',
    opciones: [
      {
        textoRespuesta: 'No. Hay superficies, como un campo de hierba, que emitirá más calor que un campo de tierras secas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí. Todas las superficies terrestres tienen la capacidad de emitir aproximadamente el mismo calor.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No. Hay superficies, como un campo de hierba, que emitirá menos calor que un campo de tierras secas.',
        isCorrect: true
      },
      {
        textoRespuesta: 'No. Dependerá exclusivamente de la inclinación de los rayos de sol que inciden sobre la Tierra.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12. ¿Qué es la turbulencia de aire claro (TAC)?',
    opciones: [
      {
        textoRespuesta:
          'Un tipo de turbulencia fuerte fácil de detectar porque, aunque se da sin nubes, aparece en zonas de montaña o de altos edificios.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un tipo de turbulencia que suele ser muy débil y difícil de detectar porque se da en zonas en las que no hay nubes ni montañas que avisen de su presencia.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un tipo de turbulencia fuerte difícil de detectar porque se da en zonas en las que no hay nubes ni montañas que avisen de su presencia.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un tipo de turbulencia que suele ser muy débil pero fácil de detectar porque, aunque se da sin nubes, aparece en zonas de montaña o de altos edificios.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. La primera fase de formación de una tormenta es:',
    opciones: [
      {
        textoRespuesta: 'La etapa de inicio, que dura unos 30 minutos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La etapa de crecimiento, que dura unos 15 minutos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La etapa de crecimiento, que dura unos 30 minutos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La etapa de creación, que dura unos 15 minutos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. ¿Cuáles son, por orden de menor a mayor altura, las capas de la atmósfera?',
    opciones: [
      {
        textoRespuesta: 'La troposfera, estratosfera, termosfera, mesosfera y exosfera, separadas cada una por una pausa.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La troposfera, estratosfera, mesosfera, termosfera y exosfera, separadas cada una por una pausa.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La troposfera, exosfera, termosfera, mesosfera y estratosfera, separadas cada una por una pausa.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La troposfera, tropopausa, mesosfera, termosfera y exosfera, separadas cada una por una pausa.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. En el proceso de formación de nubes por ascenso orográfico:',
    opciones: [
      {
        textoRespuesta:
          'La pendiente del terreno obliga a la masa de aire en movimiento a ganar altura y se formarán las nubes cuando sople el viento perpendicular a la montaña a una intensidad de al menos 20 nudos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La pendiente del terreno obliga a la masa de aire en movimiento a ganar altura hasta que encuentre otra masa de aire superior, cuando se formarán  las nubes.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La pendiente del terreno obliga a la masa de aire en movimiento a ganar altura y se formarán las nubes cuando su temperatura ascienda hasta el punto de rocío.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La pendiente del terreno obliga a la masa de aire en movimiento a ganar altura y se formarán las nubes cuando alcance el nivel de condensación.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '16. La capa de la atmósfera en la que se desarrollan la mayoría de los vuelos es:',
    opciones: [
      {
        textoRespuesta:
          'La troposfera, cuya altura es mayor en el Ecuador que en los Polos y varía con las estaciones, siendo más baja en verano que en invierno.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La troposfera, cuya altura permanece prácticamente uniforme a lo largo de la superficie terrestre y varía con las estaciones, siendo más baja en verano que en invierno.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La troposfera, cuya altura es mayor en el Ecuador que en los Polos y varía con las estaciones, siendo más alta en verano que en invierno.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La troposfera, cuya altura permanece prácticamente uniforme a lo largo de la superficie terrestre y varía con las estaciones, siendo más alta en verano que en invierno.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '17. La Tierra, además de radiar calor a través de infrarrojos, también tiene otros modos de transmitir el calor, como por contacto de una capa de aire con su superficie. A este proceso lo llamamos:',
    opciones: [
      {
        textoRespuesta: 'Conducción.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Convección.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Advención.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Subsidencia.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '18. ¿Cómo se llama el proceso de formación de nubes cuando la pendiente de un terreno obliga a una masa de aire en movimiento a ganar altura?',
    opciones: [
      {
        textoRespuesta: 'Nubes formadas por turbulencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ascenso orográfico.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Convección.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nubes frontales.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. ¿Qué condiciones son necesarias para que se generen nubes formadas por turbulencia?',
    opciones: [
      {
        textoRespuesta: 'Un viento de unos 20 nudos de intensidad y una altitud mayor de los 2.000 pies.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un viento de unos 20 nudos de intensidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un viento de unos 20km/h de intensidad y una altitud mayor de los 2.000 pies.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un viento de unos 20km/h de intensidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. La cantidad de vapor de agua que puede contener el aire saturado depende de:',
    opciones: [
      {
        textoRespuesta: 'Su temperatura.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Su presión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su densidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '21. La zona fronteriza entre dos masas de aire de distintas características y diferencias en temperatura y humedad, de las cuales ninguna prevalece o ejerce fuerza de desplazamiento, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Zona frontal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frente ocluido.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frente estacionario.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Superficie frontal.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. ¿En qué momento comienza el proceso de formación de una nube cuando una masa de aire húmedo asciende?',
    opciones: [
      {
        textoRespuesta:
          'Cuando ese aire se calienta hasta alcanzar su punto de rocío, momento en el que el vapor de agua comienza a condensarse.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando ese aire llega al nivel de condensación, momento en el que alcanza su punto de rocío y el vapor de agua comienza a condensarse.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Cuando ese aire alcanza la temperatura a la cual la tensión o presión de vapor pasa a ser mínima, momento en que el vapor de agua comienza a condensarse.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando ese aire llega al nivel de condensación, momento en que la presión o tensión de vapor es mínima y el vapor de agua comienza a consensarse.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. Una línea de turbonada es una línea nubosa negruzca, cuyo aspecto puede ser impresionante, y que se forma:',
    opciones: [
      {
        textoRespuesta:
          'Entre 100 y 500 km delante de un frente frío y paralelo a éste, cuando una masa de aire frío ha intentado penetrar en una masa caliente muy inestable.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Entre 100 y 500 km delante de un frente cálido y paralelo a éste, cuando una masa de aire caliente muy inestable ha intentado penetrar en una masa de aire frío.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Entre 100 y 500 km delante de un frente frío y paralelo a éste, cuando una masa de aire fría ha intentado penetrar en una masa caliente muy estable.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Entre 100 y 500 km delante de un frente frío y perpendicular a éste, cuando una masa de aire frío ha intentado penetrar en una masa caliente muy inestable.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. La humedad absoluta es:',
    opciones: [
      {
        textoRespuesta:
          'La relación entre el contenido de vapor de agua de una masa de aire y la cantidad de vapor de agua que podría contener, a la misma temperatura, si estuviese saturada.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El peso del vapor de agua contenido en una unidad de aire.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La cantidad de vapor de agua que contiene el aire por unidad de volumen.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La cantidad de vapor de agua que puede contener el aire por unidad de volumen a una temperatura constante.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '25. Las nubes habitualmente nos aportan información sobre la situación de la atmósfera. Cuando observamos una nube que probablemente se ha formado por convección, ¿qué fenómenos podemos esperar con cierta seguridad?',
    opciones: [
      {
        textoRespuesta:
          'La turbulencia en el interior de la nube y la cizalladura debajo de ella, además de ser posible la formación de hielo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La turbulencia y la cizalladura en el interior de la nube y debajo de ella, sin que sea posible la formación de hielo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La turbulencia y la cizalladura en el interior de la nube y debajo de ella, además de ser posible la formación de hielo.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La turbulencia mecánica y la cizalladura en el interior de la nube y debajo de ella, además de ser posible la formación de hielo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '26. ¿Cuál de las siguientes características se asocian a una masa de aire caliente?',
    opciones: [
      {
        textoRespuesta: 'Muy buena o buena visibilidad, baja humedad, alto gradiente vertical de temperatura e inestabilidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Regular o mala visibilidad, alta humedad, bajo gradiente vertical de temperatura y estabilidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Regular o mala visibilidad, alta humedad, bajo gradiente vertical de temperatura e inestabilidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Muy buena o buena visibilidad, alta humedad, bajo gradiente vertical de temperatura e inestabilidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. ¿Cómo se comportan las corrientes de aire en la troposfera y la estratosfera?',
    opciones: [
      {
        textoRespuesta:
          'En ambos casos la circulación se da tanto vertical como horizontalmente, convirtiendo a las dos capas en inestables.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En la troposfera la circulación se da en todas direcciones, mientras que en la estratosfera sólo se mueve prácticamente de manera horizontal.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'En la troposfera la circulación se da en todas direcciones, mientras que en la estratosfera sólo se mueve prácticamente de manera vertical.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En la tropopausa la circulación se da en todas direcciones, mientras que en la estratopausa sólo se mueve prácticamente de manera horizontal.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. Las isobaras de un mapa:',
    opciones: [
      {
        textoRespuesta: 'Unen puntos con la misma densidad atmosférica y normalmente se dibujan a intervalos entre 2 y 4 milibares.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unen puntos con la misma presión atmosférica y normalmente se dibujan a intervalos entre 2 y 4 milibares.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Unen puntos con la misma presión atmosférica y normalmente se dibujan a intervalos entre 8 y 10 milibares.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unen puntos con la misma temperatura atmosférica y normalmente se dibujan a intervalos entre 2 y 4ºC.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '29. La formación de hielo en el carburador puede producir falta de potencia del motor. ¿En qué condiciones se puede formar este hielo?',
    opciones: [
      {
        textoRespuesta: 'Con temperaturas exteriores comprendidas entre 0ºC y 25ºC.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con temperaturas exteriores comprendidas entre -10ºC y -25ºC.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con temperaturas exteriores comprendidas entre -10ºC y 25ºC.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Con temperaturas exteriores comprendidas entre -20 y -40ºC.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. Una línea de turbonada es muy peligrosa para el vuelo. ¿Por qué?',
    opciones: [
      {
        textoRespuesta:
          'Porque en ella se da un tipo de turbulencia muy fuerte difícil de detectar porque se da en zonas en las que no hay nubes ni montañas que avisen de su presencia.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque aunque no suele provocar chubascos, el viento suele ser de gran intensidad y con cambios de dirección muy bruscos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque debido a los fuertes chubascos se reduce la visibilidad horizontal y vertical hasta tal punto que no podríamos volar en VFR.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque provoca chubascos muy fuertes, rayos, truenos, gran aparato eléctrico y un viento de gran intensidad y cambios de dirección muy bruscos.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '31. Una masa de aire que se enfría adiabáticamente con la altura, ¿a qué temperatura lo hace?',
    opciones: [
      {
        textoRespuesta: 'A -2ºC cada 1.000 pies.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A -3ºC cada 1.000 pies.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A -6’5ºC cada 1.000 metros.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A -0’65ºC cada 1.000 metros.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. ¿Cuál es el comportamiento de la temperatura y la presión en la atmósfera estándar?',
    opciones: [
      {
        textoRespuesta:
          'La temperatura desciende 1’98ºC cada 1.000 pies o 6’5ºC cada 1.000 metros y la presión desciende 1mb cada 27 pies.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La temperatura desciende 1’98ºC cada 1.000 metros o 6’5ºC cada 1.000 pies y la presión desciende 1mb cada 27 pies.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La temperatura desciende 1’98ºC cada 1.000 pies o 6’5ºC cada 1.000 metros y la presión desciende 1mb cada 9 pies.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La temperatura desciende 1’98ºC cada 1.000 pies o 6’5ºC cada 1.000 metros y la presión aumenta 1mb cada 27 pies.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. Una inversión de temperatura se produce cuando:',
    opciones: [
      {
        textoRespuesta:
          'Al contrario de lo que es usual, la temperatura aumenta con la altura y puede producirse en superficie o en altura.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Al contrario de lo que es usual, la temperatura disminuye con la altura y puede producirse en superficie o en altura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al contrario de lo que es usual, la presión y la densidad aumentan con la altura.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Al contrario de lo que es usual, la temperatura aumenta con la altura, lo cual siempre se produce en superficie.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '34. Además de que el viento sople a más de 20 nudos y perpendicular a una cadena montañosa, hay otra evidencia que puede alertarnos de que la presencia de onda de montaña es casi segura. ¿Cuál es?',
    opciones: [
      {
        textoRespuesta: 'La aparición a barlovento de nubes rotores y sobre ellas la formación de nubes lenticulares.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aparición a sotavento de nubes lenticulares y sobre ellas la formación de nubes rotores.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aparición a sotavento de nubes rotores y sobre ellas la formación de nubes lenticulares.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La aparición a barlovento de nubes lenticulares y la formación a sotavento de nubes rotores.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. ¿Cuáles son los factores que forman el vector viento?',
    opciones: [
      {
        textoRespuesta: 'Dirección e intensidad, siendo la dirección aquella adonde va el viento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dirección e intensidad, siendo la dirección aquella de donde viene el viento.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dirección, intensidad y velocidad, siendo la dirección aquella adonde va el viento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dirección, intensidad y velocidad, siendo la dirección aquella de donde viene el viento.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. ¿Qué es una clave METAR?',
    opciones: [
      {
        textoRespuesta: 'Una información de previsión de la situación meteorológica en las próximas horas en un aeropuerto.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un mensaje ordinario que especifica las condiciones meteorológicas de un aeropuerto y que se realiza cada hora a no ser que se produzcan cambios significativos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un mensaje extraordinario que especifica las condiciones meteorológicas de un aeropuerto cuando se producen fenómenos destacables y de importancia para los pilotos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un mensaje ordinario que especifica las condiciones meteorológicas de un aeropuerto y que se realiza cada media hora a no ser que se produzcan cambios significativos.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '37. Tras la etapa de crecimiento de una tormenta llega la etapa de madurez, que:',
    opciones: [
      {
        textoRespuesta:
          'Comienza cuando el hielo comienza a formarse, empiezan a darse fuertes corrientes ascendentes y aparecen las descargas eléctricas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Comienza cuando la lluvia empieza a precipitarse, empiezan a darse corrientes descendentes y desaparecen las descargas eléctricas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Comienza cuando las corrientes descendentes se han extendido a toda la nube, la precipitación disminuye y desaparecen las descargas eléctricas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Comienza cuando la lluvia empieza a precipitarse, empiezan a darse corrientes descendentes y aparecen las descargas eléctricas.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '38. El engelamiento o formación de hielo es uno de los riesgos más importantes para el vuelo. Las temperaturas idóneas para que esto ocurra son:',
    opciones: [
      {
        textoRespuesta: 'Las comprendidas entre -10ºC y 25ºC.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las comprendidas entre 0ºC y -10ºC.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las comprendidas entre -10ºC y -20ºC.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las comprendidas entre 0ºC y -40ºC.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. Las nubes formadas por turbulencia son de tipo:',
    opciones: [
      {
        textoRespuesta: 'Cúmulos o de desarrollo vertical.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todos los tipos de nubes.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estratocúmulos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Estratos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. Indique la correcta respecto al METAR “LEBA 251130Z 14002KT CAVOK 16/05 Q1031”:',
    opciones: [
      {
        textoRespuesta: 'La temperatura máxima es de 16º C.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hay una alta presión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se ha realizado a las 11:30h local.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. Las brisas marinas y terrestres son:',
    opciones: [
      {
        textoRespuesta:
          'Vientos locales que se forman debido a la diferencia de densidad atmosférica provocada por los cambios de temperatura entre el mar y la superficie terrestre.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Vientos permanentes que se forman debido a la diferencia de densidad atmosférica provocada por los cambios de temperatura entre el mar y la superficie terrestre.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Vientos permanentes que se forman debido a la diferencia de presiones provocada por los cambios de temperatura entre el mar y la superficie terrestre.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Vientos locales que se forman debido a la diferencia de presiones provocada por los cambios de temperatura entre el mar y la superficie terrestre.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '42. ¿Cómo se comporta la presión si no estamos en una zona de altas o bajas bien definidas?',
    opciones: [
      {
        textoRespuesta:
          'A lo largo del día se da una variación conocida como marea barométrica, que presenta una máxima a las 10h y una mínima a las 22h.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'A lo largo del día se da una variación conocida como marea barométrica, que presenta unas máximas a las 10 y 22h y unas mínimas a las 4 y 16h.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'A lo largo del día se da una variación conocida como marea barométrica, que presenta unas mínimas a las 10 y 22h y unas máximas a las 4 y 16h.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'A lo largo del día se da una variación conocida como marea barométrica, que presenta una máxima a las 4h y una mínima a las 16h.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '43. La cizalladura es un fenómeno que puede llegar a ser peligroso en algunas situaciones para el vuelo. ¿En qué consiste?',
    opciones: [
      {
        textoRespuesta:
          'Se produce cuando el viento cambia de dirección e intensidad muy rápidamente en poco espacio y se puede dar de forma vertical u horizontal.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Se produce cuando el viento cambia de intensidad muy rápidamente en poco espacio y se puede dar de forma vertical u horizontal.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se produce cuando el viento cambia de dirección e intensidad muy rápidamente en poco espacio y solo se da de forma horizontal.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se produce cuando el viento cambia de dirección e intensidad muy rápidamente en poco espacio y solo se da de forma vertical.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. Según su temperatura las masas de aire se dividen en:',
    opciones: [
      {
        textoRespuesta: 'Calientes cuando la temperatura media es superior a 15ºC y frías cuando es inferior.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Masas de origen polar, tropical o ecuatorial.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Calientes cuando la temperatura de la superficie por la que pasa es superior a 15ºC y frías cuando es inferior.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Calientes cuando su temperatura es mayor que la superficie por la que pasa y frías cuando es menor.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '45. La atmósfera estándar definida por OACI cumple las siguientes características:',
    opciones: [
      {
        textoRespuesta:
          'Tiene una temperatura de 15ºC a nivel del mar, una presión atmosférica de 1.013 milibares o 29’92 mm de mercurio; y la temperatura disminuye con la altura 1’98ºC cada 1.000 metros o 6’5ºC cada 1.000 pies hasta la tropopausa, cuando se considera constante a -56’5ºC.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tiene una temperatura de 15ºC a nivel del mar, una presión atmosférica de 1.013 milibares o 29’92 pulgadas de mercurio; y la temperatura disminuye con la altura 6’5ºC cada 1.000 metros o 1’98ºC cada 1.000 pies hasta la tropopausa, cuando se considera constante a -56’5ºC.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Tiene una temperatura de 15ºC a nivel del mar, una presión atmosférica de 29’92 milibares o 1.013 pulgadas de mercurio; y la temperatura disminuye con la altura 6’5ºC cada 1.000 metros o 1’98ºC cada 1.000 pies hasta la tropopausa, cuando se considera constante a -56’5ºC.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tiene una temperatura de 15ºC a nivel del mar, una presión atmosférica de 1.013 milibares o 29’92 pulgadas de mercurio; y la temperatura disminuye con la altura 6’5ºC cada 1.000 metros o 1’98ºC cada 1.000 pies hasta la exosfera.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. Durante el paso de un frente cálido, ¿cómo será la visibilidad, por lo general?',
    opciones: [
      {
        textoRespuesta: 'Buena excepto cuando haya precipitaciones.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Muy mala debido a que es un aire inestable que provoca fuertes precipitaciones.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Muy mala debido a que es un aire estable en el que además se pueden formar nieblas.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Buena porque se trata de un aire estable y no suele provocar precipitaciones.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '47. Las brisas marinas y terrestres se forman debido a que:',
    opciones: [
      {
        textoRespuesta:
          'La superficie de la tierra se calienta y enfría más rápidamente que el agua, lo que genera un gradiente de presión que provoca el viento del mar a la tierra durante el día y de la tierra al mar durante la noche.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La superficie de la tierra  se calienta y enfría más rápidamente que el agua, lo que genera un gradiente de presión que provoca el viento de la tierra al mar durante el día y del mar a la tierra durante la noche.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El agua se calienta y enfría más rápidamente que la superficie de la tierra, lo que genera un gradiente de presión que provoca el viento del mar a la tierra durante el día y de la tierra al mar durante la noche.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La superficie de la tierra  se calienta y enfría más rápidamente que el agua, lo que genera un gradiente de presión que provoca el viento del mar a la tierra.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '48. La condensación de vapor de agua contenido en la atmósfera a nivel del suelo y que redice la visibilidad horizontal a menos de 1km es:',
    opciones: [
      {
        textoRespuesta:
          'La neblina, que representa uno de los principales problemas para las aeronaves en despegues y aterrizajes, sobre todo para las que operan en VFR.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La niebla, que representa uno de los principales problemas para las aeronaves en despegues y aterrizajes, sobre todo para las que operan en VFR.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La bruma, que representa uno de los principales problemas para las aeronaves en despegues y aterrizajes, sobre todo para las que operan en VFR.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La niebla, que representa uno de los principales problemas para las aeronaves en despegues y aterrizajes, sobre todo para las que operan en IFR.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. La troposfera se encuentra limitada por:',
    opciones: [
      {
        textoRespuesta: 'La exosfera, que se extiende entre 40 y 50 km.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estratosfera, que se extiende entre 40 y 50 km.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estratosfera, que corresponde al límite en el que la temperatura deja de descender con la altura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La tropopausa, que corresponde al límite en el que la temperatura deja de descender con la altura.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '50. Debido a varios factores, la cantidad de energía solar que recibe la tierra no es la misma en toda la superficie, lo cual hace que su calentamiento no sea uniforme. ¿Qué consecuencias tiene esto en la atmósfera?',
    opciones: [
      {
        textoRespuesta:
          'Genera diferencias de temperatura que hace que se den también diferencias de presión, motivo por el que se produce el movimiento horizontal del aire en la atmósfera.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Genera diferencias de presión que hace que se den también diferencias de temperatura, motivo por el que se produce el movimiento horizontal del aire en la atmósfera.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Genera diferencias de temperatura que hace que se den también diferencias de presión, motivo por el que se produce el movimiento vertical del aire en la atmósfera.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Genera diferencias de temperatura que hace que se den también diferencias de densidad, motivo por el que se produce el movimiento horizontal del aire en la atmósfera.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. Se dice que una masa de aire es activa cuando:',
    opciones: [
      {
        textoRespuesta: 'Se ve influenciada por las características del terreno por el que pasa, cambiando las suyas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hace menos de dos días que partió de su lugar de origen.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se desplaza rápidamente.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hace más de dos días que partió de su lugar de origen.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. La primera capa de la atmósfera que rodea la Tierra es:',
    opciones: [
      {
        textoRespuesta: 'La troposfera, que se extiende aproximadamente unos 15km. uniformemente por toda la superficie terrestre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estratosfera, que se extiende aproximadamente 8km en los Polos y 18km. en el Ecuador.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La troposfera, que se extiende aproximadamente 18km en los Polos y 8km. en el Ecuador.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La troposfera, que se extiende aproximadamente 8km en los Polos y 18km. en el Ecuador.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '53. Cuando la condensación del vapor de agua de las capas atmosféricas más cercanas al suelo generan un conjunto formado por gotas de agua en suspensión que reduce la visibilidad horizontal a valores comprendidos entre 1 y 2km, hablamos de:',
    opciones: [
      {
        textoRespuesta: 'Niebla.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bruma.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Calima.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Neblina.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '54. En un mapa, cuanto menor sea la distancia entre las isobaras:',
    opciones: [
      {
        textoRespuesta: 'Menor será el gradiente de presión y menor la intensidad del viento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor será el gradiente de presión y mayor la intensidad del viento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor será el gradiente de presión y mayor la intensidad del viento.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor será el gradiente de presión y menor la intensidad del viento.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '55. ¿Cuáles son las fuentes de calor por las que se ve afectada la atmósfera?',
    opciones: [
      {
        textoRespuesta: 'El 15% de ese calentamiento lo proporcionan los rayos de sol directamente y el 85%, la radiación terrestre.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El 25% de ese calentamiento lo proporcionan los rayos de sol directamente y el 75%, la radiación terrestre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El 15% de ese calentamiento lo proporciona la radiación terrestre y el 85%, los rayos de sol directamente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El 15% de ese calentamiento lo proporcionan los rayos de sol directamente y el 85%, el efecto invernadero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. En la clasificación de las nubes por la altura a la que podemos encontrarlas, ¿cuáles son las nubes altas?',
    opciones: [
      {
        textoRespuesta:
          'Los cirros, cirrostratos y cirrocúmulos, cuya base está por encima de 20.000 pies y están formadas por cristales de hielo.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Los cirros, cirrostratos y cirrocúmulos, cuya base está por encima de 6.500 pies y están formadas por cristales de hielo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los altocúmulos y altoestratos, cuya base está por encima de 20.000 pies y están formadas por cristales de hielo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los altocúmulos y altoestratos, cuya base está por encima de 6.500 pies y están formadas por cristales de hielo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '57. En meteorología, una alta presión se suele asociar a:',
    opciones: [
      {
        textoRespuesta: 'Tormentas y precipitaciones.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La inestabilidad y el buen tiempo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La inestabilidad y el mal tiempo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estabilidad y el buen tiempo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '58. Aunque rara vez ocurre, imagina que volamos en atmósfera estándar. Teniendo en cuenta el comportamiento de la presión con la altura, ¿qué presión nos encontraríamos aproximadamente volando a 3.000 pies de altitud?',
    opciones: [
      {
        textoRespuesta: '950 milibares.',
        isCorrect: false
      },
      {
        textoRespuesta: '908 milibares.',
        isCorrect: true
      },
      {
        textoRespuesta: '1.013 milibares.',
        isCorrect: false
      },
      {
        textoRespuesta: '880 milibares.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. En el hemisferio sur una borrasca es:',
    opciones: [
      {
        textoRespuesta:
          'Un centro de presión rodeado por isobaras de valor creciente, en el que el viento sopla alrededor en el sentido de las agujas del reloj.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un centro de presión rodeado por isobaras de valor decreciente, en el que el viento sopla alrededor en el sentido de las agujas del reloj.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un centro de presión rodeado por isobaras de valor creciente, en el que el viento sopla alrededor en el sentido contrario a las agujas del reloj.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un centro de presión rodeado por isobaras de valor decreciente, en el que el viento sopla alrededor en el sentido contrario a las agujas del reloj.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. ¿Qué es lo que conocemos como marea barométrica?',
    opciones: [
      {
        textoRespuesta:
          'Es la variación de la densidad atmosférica que se da a lo largo de un día, que presenta unas máximas a las 10 y 22h y unas mínimas a las 4 y 16h.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es la variación de la presión atmosférica que se da a lo largo de un día, que presenta unas mínimas a las 10 y 22h y unas máximas a las 4 y 16h.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es la variación de la presión atmosférica que se da a lo largo de un día, que presenta unas máximas a las 10 y 22h y unas mínimas a las 4 y 16h.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Es la variación de la presión atmosférica que se da desde el centro de una alta o una baja hasta su límite exterior, que se representa en un mapa con líneas isobáricas a intervalos entre 2 y 4 milibares.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '61. ¿Por qué motivo la brisa terrestre se da durante la noche?',
    opciones: [
      {
        textoRespuesta:
          'Porque el mar se enfría más rápidamente que la tierra,  lo que genera una mayor presión atmosférica en la superficie terrestre que desplaza el aire hacia la superficie de menor presión.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque la tierra se enfría más despacio que el mar, lo que genera una mayor presión atmosférica en la superficie terrestre que desplaza el aire hacia la superficie de menor presión.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque la tierra se enfría más rápidamente que el mar, lo que genera una mayor presión atmosférica en la superficie terrestre que desplaza el aire hacia la superficie de menor presión.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Porque el mar se enfría más despacio que la tierra, lo que genera una menor presión atmosférica en la superficie terrestre que desplaza el aire hacia la superficie de mayor presión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '62. En caso de que exista probabilidad de que haya un fenómeno meteorológico como una línea de turbonada fuerte o tempestades extensas de arena o polvo, ¿qué información se debe emitir?',
    opciones: [
      {
        textoRespuesta: 'METAR.',
        isCorrect: false
      },
      {
        textoRespuesta: 'VOLMET.',
        isCorrect: false
      },
      {
        textoRespuesta: 'SIGMET.',
        isCorrect: true
      },
      {
        textoRespuesta: 'ATIS.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. ¿En qué momento del proceso de vida de una tormenta la caída de las gotas de agua anula las corrientes ascendentes?',
    opciones: [
      {
        textoRespuesta: 'En la etapa de madurez.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En la etapa de crecimiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la etapa disipación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la etapa de precipitación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '64. La relación entre el contenido de vapor de agua de una masa de aire y la cantidad de vapor de agua que podría contener, a la misma temperatura, si estuviese saturada, corresponde a:',
    opciones: [
      {
        textoRespuesta: 'El punto de rocío.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La humedad absoluta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión o tensión de vapor.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La humedad relativa.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '65. Cuando una masa de aire caliente y húmedo se coloca sobre otra masa de aire frío:',
    opciones: [
      {
        textoRespuesta:
          'El aire frío aumentará su temperatura, por lo que se formarán nubes de tipo estratos mediante el proceso de advección.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El aire caliente disminuirá su temperatura, por lo que se formarán nubes de tipo estratos mediante el proceso de convección.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El aire caliente disminuirá su temperatura, por lo que se formarán nubes de tipo estratos mediante el proceso de advección.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El aire caliente disminuirá su temperatura, por lo que se formarán nubes de tipo cirros y cirrostratos mediante el proceso de advección.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '66. Cuando en un mapa meteorológico observemos que las isobaras están muy separadas entre sí:',
    opciones: [
      {
        textoRespuesta: 'Significa que el gradiente de presión es pequeño y por tanto el viento no será de gran intensidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Significa que el gradiente de presión es grande y por tanto el viento será de gran intensidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Significa que el gradiente de presión es pequeño y por tanto el viento será de gran intensidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Significa que el gradiente de presión es grande y por tanto el viento no será de gran intensidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. Un frente estacionario es:',
    opciones: [
      {
        textoRespuesta:
          'Un frente en el que dos masas de aire de diferentes características se encuentran pero ninguna prevalece y en el que los vientos soplan paralelos al frente.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un frente en el que dos masas de aire de diferentes características se encuentran pero ninguna prevalece y en el que los vientos soplan de forma perpendicular al frente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un frente que cumple las características meteorológicas de la estación del año en la que se produzca.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El que se produce cuando un frente frío alcanza a un frente cálido debido a que se desplaza con mayor rapidez.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '68. ¿Cuál de las siguientes definiciones corresponde a la de punto de rocío?',
    opciones: [
      {
        textoRespuesta:
          'La temperatura a la cual el vapor de agua contenido en una masa de aire alcanzaría la saturación si fuera enfriada a densidad constante.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La altitud a la cual una masa de aire alcanza la temperatura en la que el vapor de agua se satura y comienza a condensarse.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La temperatura a la cual el vapor de agua contenido en una masa de aire alcanzaría la saturación si fuera enfriada a presión constante.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La relación entre el contenido de vapor de agua de una masa de aire y la cantidad de vapor de agua que podría contener a la misma temperatura, si estuviese saturada.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. El viento se produce cuando:',
    opciones: [
      {
        textoRespuesta:
          'Una masa de aire situada entre dos puntos de la superficie de la tierra entre los que existe una diferencia de presión experimenta un movimiento hacia el punto donde la presión es más alta.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una masa de aire situada entre dos puntos de la superficie de la tierra entre los que existe una diferencia de presión experimenta un movimiento hacia el punto donde la presión es más baja.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Una masa de aire situada entre dos puntos de la superficie de la tierra entre los que existe una diferencia de densidad experimenta un movimiento hacia el punto donde la densidad es más baja.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una masa de aire situada entre dos puntos de la superficie de la tierra entre los que existe una diferencia de densidad experimenta un movimiento hacia el punto donde la densidad es más alta.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. La altitud a la cual el vapor de agua comienza a condensarse y se inicia el proceso de formación de una nube es:',
    opciones: [
      {
        textoRespuesta: 'El punto de rocío.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La tensión de vapor.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La humedad absoluta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El nivel de condensación.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '71. La composición de gases de la atmósfera terrestre es de:',
    opciones: [
      {
        textoRespuesta: '78% Nitrógeno, 21% Oxígeno y 1% otros gases que se mantienen prácticamente inalterables.',
        isCorrect: false
      },
      {
        textoRespuesta:
          '78% Oxígeno, 21% Nitrógeno y 1% otros gases cuya proporción varía en función de las emisiones de la actividad industrial, volcánica, etc.',
        isCorrect: false
      },
      {
        textoRespuesta:
          '78% Hidrógeno, 21% Oxígeno y 1% otros gases cuya proporción varía en función de las emisiones de la actividad industrial, volcánica, etc.',
        isCorrect: false
      },
      {
        textoRespuesta:
          '78% Nitrógeno, 21% Oxígeno y 1% otros gases cuya proporción varía en función de las emisiones de la actividad industrial, volcánica, etc.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '72. La niebla es un fenómeno atmosférico que se produce cuando:',
    opciones: [
      {
        textoRespuesta:
          'La condensación del vapor de agua contenido en la atmósfera se produce a nivel del suelo y reduce la visibilidad horizontal a menos de 2km.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La condensación del vapor de agua contenido en la atmósfera se produce a nivel del suelo y reduce la visibilidad horizontal a valores entre 1 y 2km.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La condensación del vapor de agua contenido en la atmósfera se produce a nivel del suelo y reduce la visibilidad horizontal a menos de 1km.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La condensación de diferentes gases contenidos en la atmósfera se produce a nivel del suelo y reduce la velocidad horizontal a menos de 1km.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. Si en una clave METAR vemos “32014G21kt”, ¿qué quiere decir?',
    opciones: [
      {
        textoRespuesta: 'Que el viento viene de 320º a 14 nudos con rachas hasta 21 nudos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que el viento va hacia 320º a 21 nudos con rachas hasta 14 nudos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el viento viene de 320º a 21 nudos con rachas hasta 14 nudos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el viento va hacia 320º a 14 nudos con rachas hasta 21 nudos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '74. ¿Qué ocurre con la presión atmosférica antes de un frente frío, durante su paso y una vez que se ha ido?',
    opciones: [
      {
        textoRespuesta: 'Antes del paso disminuye, al paso también disminuye y después aumenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antes del paso disminuye, al paso aumenta y después también aumenta.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Antes del paso aumenta, al paso disminuye y después también disminuye.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En los tres casos la presión atmosférica aumenta.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. La altitud de densidad corresponde a:',
    opciones: [
      {
        textoRespuesta: 'A la altitud de presión corregida por temperaturas no estándar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A la altitud de presión corregida por temperaturas estándar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la altitud de densidad corregida por presión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la altitud de presión corregida por densidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. La densidad del aire será:',
    opciones: [
      {
        textoRespuesta: 'Mayor cuanto mayor sea la altitud y también la temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor cuanto menor sea la altitud y también la temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor cuanto mayor sea la temperatura y menor altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor cuanto mayor sea la altitud y también la temperatura.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '77. Los informes meteorológicos como los METAR incluyen información acerca de la temperatura y el punto de rocío con el fin de:',
    opciones: [
      {
        textoRespuesta:
          'Que los pilotos puedan reconocer la posible aparición de niebla, cuando la diferencia entre ambas es mínima y el viento está en calma o muy suave.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Que los pilotos puedan reconocer la posible aparición de precipitaciones, cuando la diferencia entre ambas es mínima y el viento está en calma o muy suave.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que los pilotos puedan reconocer la posible aparición de niebla, cuando la diferencia entre ambas es mínima y hay ausencia absoluta de viento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que los pilotos puedan reconocer la posible aparición de niebla, cuando la diferencia entre ambas es mínima y la atmósfera es muy inestable.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. ¿Qué ocurre cuando dos masas de aire de diferentes características en movimiento se encuentran?',
    opciones: [
      {
        textoRespuesta: 'Que chocan pero no se mezclan, creando una zona frontal que es la separación entre ambas.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que chocan y al ser más densa siempre predomina la más fría, que desplaza a la más caliente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que se mezclan completamente, siendo la más fría la que predominante en todo caso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que se mezclan completamente, siendo la masa activa la predominante en todo caso.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. El proceso de formación de las nubes incluye:',
    opciones: [
      {
        textoRespuesta:
          'Una masa de aire húmeda que se enfría hasta alcanzar su humedad relativa, en un aire en el que hay partículas en suspensión que actúan como núcleos de condensación.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una masa de aire húmeda que se enfría hasta alcanzar su punto de rocío, en un aire puro en el que prácticamente no existen partículas en suspensión.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una masa de aire húmeda que se enfría hasta alcanzar su punto de rocío, en un aire en el que hay partículas en suspensión que actúan como núcleos de condensación.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Una masa de aire húmeda que se enfría hasta alcanzar su humedad absoluta, en un aire en el que hay partículas en suspensión que actúan como núcleos de condensación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. La densidad de la atmósfera está principalmente definida por:',
    opciones: [
      {
        textoRespuesta: 'La altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión atmosférica y la temperatura.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La humedad y la temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión atmosférica y la latitud.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '81. De los gases que componen la atmósfera, ¿cuál es el más importante para la vida humana?',
    opciones: [
      {
        textoRespuesta:
          'El Oxígeno, que debido a la disminución de la densidad atmosférica con la altura, también va perdiendo densidad hasta hacerse irrespirable.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El Oxígeno, que debido a su disminución con la altura se va haciendo insuficiente hasta hacer la atmósfera prácticamente inhabitable a partir de 20.000 pies de altura.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El Oxígeno, que debido a la disminución de la presión atmosférica con la altura, también pierde presión y se hace irrespirable a partir de 5.000 pies de altura.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El Oxígeno, que debido a la disminución de la presión atmosférica con la altura, también va perdiendo presión hasta hacerse irrespirable.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '82. Una masa de aire es:',
    opciones: [
      {
        textoRespuesta:
          'Un volumen de aire de gran extensión horizontal que cubre zonas a las que proporciona prácticamente el mismo tiempo meteorológico y que se desplaza aunque por lo general no se mezcla con otras masas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un volumen de aire de gran extensión horizontal que cubre zonas a las que proporciona prácticamente el mismo tiempo meteorológico y que se desplaza y se mezcla generalmente con otras masas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un volumen de aire de gran extensión horizontal que cubre zonas a las que solo proporciona temperaturas similares y que se desplaza aunque por lo general no se mezcla con otras masas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un volumen de aire de gran extensión horizontal que cubre zonas a las que solo proporciona temperaturas similares y que se desplaza y se mezcla generalmente con otras masas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. ¿Qué ocurre con la cantidad de agua que puede contener una masa de aire cuando ésta sufre cambios de temperatura?',
    opciones: [
      {
        textoRespuesta: 'La capacidad de almacenar vapor de agua depende fundamentalmente de la densidad y no de la temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta su capacidad de almacenar vapor de agua cuando se calienta y disminuye cuando se enfría.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuye su capacidad de almacenar vapor de agua cuando se calienta y aumenta cuando se enfría.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La capacidad de almacenar vapor de agua depende fundamentalmente de la presión y no de la temperatura.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '84. La brisa marítima se produce por diferencias de presión provocadas por los cambios de temperatura. ¿Cómo se da este proceso?',
    opciones: [
      {
        textoRespuesta:
          'Durante la noche, la presión atmosférica sobre el agua es mayor que en la superficie terrestre, lo que genera el movimiento de aire del mar hacia la tierra.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Durante el día, la presión atmosférica sobre el agua es mayor que en la superficie terrestre, lo que genera el movimiento de aire del mar hacia la tierra.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Durante el día, la presión atmosférica sobre el agua es menor que en la superficie terrestre, lo que genera el movimiento del aire de la tierra hacia el mar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Durante la noche, la presión atmosférica sobre el agua es menor que en la superficie terrestre, lo que genera el movimiento del aire de la tierra hacia el mar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '85. La humedad relativa dependerá de:',
    opciones: [
      {
        textoRespuesta:
          'La temperatura del aire, por eso suele alcanzar su máximo valor en los momentos del día en que las temperaturas son máximas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La temperatura del aire, por eso suele alcanzar su máximo valor en los momentos del día en que las temperaturas son mínimas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La temperatura del aire, por eso suele alcanzar su mínimo valor en los momentos del día en que las temperaturas son mínimas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La presión del aire, por eso suele alcanzar su máximo valor en los momentos del día en que la presión es mínima.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. A la línea de intersección de la superficie frontal con la superficie de la tierra se le llama:',
    opciones: [
      {
        textoRespuesta: 'Situación frontal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Zona frontal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frente.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Área frontal.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. Podemos afirmar que la zona habitable de la atmósfera está entre el nivel del mar y 10.000 pies. ¿Por qué?',
    opciones: [
      {
        textoRespuesta: 'Porque el Oxígeno va disminuyendo con la altura hasta hacerse insuficiente a partir de esa altitud.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque la densidad del Oxígeno va disminuyendo con la altura hasta hacerse totalmente irrespirable a partir de esa altitud.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque la presión del Oxígeno va disminuyendo con la altura y los primeros síntomas por no poder respirarlo adecuadamente empiezan a sentirse a partir de esa altitud.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Porque la disminución de Oxígeno con la altura hace que a partir de esa altitud sea mayor la cantidad de Nitrógeno en el aire.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '88. El proceso de formación de nubes por convección consiste en:',
    opciones: [
      {
        textoRespuesta: 'Que una masa de aire caliente y húmeda se coloca sobre otra fría y que forman nubes de tipo estratos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Corrientes verticales ascendentes que prácticamente forman nubes de todos los tipos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Corrientes verticales ascendentes que forman nubes de tipo estratocúmulos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Corrientes verticales ascendentes que forman nubes de tipo cúmulos o de desarrollo vertical.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '89. Muy buena visibilidad, baja humedad y un alto gradiente vertical de temperatura son características asociadas a una masa de aire:',
    opciones: [
      {
        textoRespuesta: 'Marítima.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tropical.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Caliente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fría.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '90. Entre los diferentes tipos de formación de nubes, ¿cómo se forman las que llamamos frontales?',
    opciones: [
      {
        textoRespuesta:
          'Se forman cuando dos masas de aire con diferentes temperaturas se encuentran, momento en el que se dan las de desarrollo vertical.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se forman cuando dos masas de aire con diferentes temperaturas se encuentran, momento en el que se pueden dar todos los tipos de nubes.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Se forman cuando dos masas de aire con diferentes temperaturas se encuentran, momento en el que se dan las de tipo estratos y estratocúmulos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se forma cuando dos masas de aire con temperaturas similares se encuentran, momento en el que se pueden dar todos los tipos de nubes.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. La capa de la atmósfera que está sobre la troposfera es:',
    opciones: [
      {
        textoRespuesta: 'La estratosfera, una capa menos seca y estable que la troposfera.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estratosfera, una capa más seca e inestable que la troposfera.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La exosfera, una capa más seca y estable que la troposfera.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estratosfera, una capa más seca y estable que la troposfera.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '92. ¿A qué llamamos circulación atmosférica?',
    opciones: [
      {
        textoRespuesta: 'Al conjunto de corrientes y desplazamientos de las masas de aire que se desarrolla en la atmósfera.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A las normas de comportamiento del aire en la atmósfera.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la mezcla de gases que se mantiene en las diferentes capas concéntricas que envuelven el globo terráqueo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Al cambio uniforme de temperatura que se da a medida que se asciende en cada una de las capas de la atmósfera.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. Cuando hablamos de un proceso de advención nos referimos:',
    opciones: [
      {
        textoRespuesta:
          'Al transporte de calor en la atmósfera que se efectúa por contacto de una masa de aire con la superficie terrestre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al transporte de calor en la atmósfera que se efectúa verticalmente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al transporte de calor en la atmósfera que se efectúa horizontalmente.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Al cambio de temperatura que se da en una masa de aire por los cambios en la presión atmosférica.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. Cuando una masa de aire frío empuja a una masa de aire caliente muy inestable estamos ante:',
    opciones: [
      {
        textoRespuesta: 'Un frente cálido que forma nubes de desarrollo vertical.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un frente frío que forma nubes de desarrollo vertical.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un frente frío que forma nubes de tipo estratos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un frente frío que forma nubes bajas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. Entre los tres tipos de hielo que afectan principalmente al vuelo, ¿cuál se considera más peligroso?',
    opciones: [
      {
        textoRespuesta: 'El hielo vítreo y el granular, pues ambos son difíciles de eliminar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La escarcha.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El hielo vítreo, pues es difícil de eliminar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El hielo granular, pues es difícil de eliminar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. La presión atmosférica se define como:',
    opciones: [
      {
        textoRespuesta: 'El peso del aire por unidad de superficie.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La densidad del aire por unidad de superficie.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación entre la masa y el volumen de aire.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El peso del aire por su densidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. Una masa de aire tropical es aquella que:',
    opciones: [
      {
        textoRespuesta: 'Tiene su origen en alguna región comprendida entre los paralelos 35º y 65º.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tiene su origen en alguna región comprendida entre los paralelos 15º y 35º.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tiene su origen en alguna región comprendida entre el Ecuador y el paralelo 15º.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está pasando por alguna región comprendida entre los paralelos 35º y 65º.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. ¿Cómo se clasifican los diferentes tipos de nubes según la altura a la que es común encontrarlas?',
    opciones: [
      {
        textoRespuesta:
          'En nubes altas, que son cirros, cirrostratos y altocúmulos; nubes medias, que son altoestratos; nubes bajas, que son estratos, estratocúmulos y nimbostratos; y nubes de desarrollo vertical, que son cúmulos y cumulonimbos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En nubes altas, que son altocúmulos y altoestratos; nubes medias, que son cirros, cirrocúmulos y cirrostratos; nubes bajas, que son estratos, estratocúmulos y nimbostratos; y nubes de desarrollo vertical, que son cúmulos y cumulonimbos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En nubes altas, que son cirros, cirrostratos y cirrocúmulos; nubes medias, que son altocúmulos y altoestratos; nubes bajas, que son estratos, estratocúmulos; y nubes de desarrollo vertical, que son cúmulos, cumulonimbos y nimbostratos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En nubes altas, que son cirros, cirrostratos y cirrocúmulos; nubes medias, que son altocúmulos y altoestratos; nubes bajas, que son estratos, estratocúmulos y nimbostratos; y nubes de desarrollo vertical, que son cúmulos y cumulonimbos.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '99. El gradiente horizontal de presión lo definimos como:',
    opciones: [
      {
        textoRespuesta:
          'La diferencia de presiones que se da de forma vertical y que se representa en un mapa a través de isobaras, siendo el gradiente grande cuando éstas están muy juntas y pequeño cuando están separadas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La diferencia de presiones que se da de forma horizontal y que se representa en un mapa a través de isobaras, siendo el gradiente pequeño cuando éstas están muy juntas y grande cuando están separadas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La diferencia de presiones que se da de forma horizontal y que se representa en un mapa a través de isobaras, siendo el gradiente grande cuando éstas están muy juntas y pequeño cuando están separadas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La diferencia de presiones que se da de forma horizontal y que se representa en un mapa a través de isógonas, siendo el gradiente grande cuando éstas están muy juntas y pequeño cuando está separadas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. En cuanto a la temperatura del aire, ¿qué proceso se puede dar más comúnmente una noche de invierno?',
    opciones: [
      {
        textoRespuesta:
          'La inversión térmica por proceso adiabático, cuando la temperatura aumenta con la altura por haberse calentado las capas superiores rápidamente al descender.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La inversión térmica por irradiación nocturna, cuando la capa de aire en contacto con la superficie terrestre se enfría con mayor rapidez que las capas superiores, por lo que la temperatura aumenta con la altura.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La inversión térmica por irradiación nocturna, cuando la capa de aire en contacto con la superficie terrestre se calienta con mayor rapidez que las capas superiores, por lo que la temperatura aumenta con la altura.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La inversión térmica por proceso adiabático, cuando la capa de aire en contacto con la superficie terrestre se enfría con mayor rapidez que las capas superiores, por lo que la temperatura aumenta con la altura.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
