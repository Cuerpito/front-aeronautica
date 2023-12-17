const preguntas = [
  {
    titulo: '1. Se habla de una declinación Este cuando el Norte magnético está a la izquierda del geográfico.',
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
    titulo: '2. Los husos horarios vienen determinados por:',
    opciones: [
      {
        textoRespuesta: 'Los Meridianos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los Paralelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'El Ecuador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está establecido de forma oficial y por convenio',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3. En navegación, la longitud es:',
    opciones: [
      {
        textoRespuesta:
          'La distancia angular del punto considerado, medida sobre el meridiano y tomando como referencia el Ecuador, y puede ser Norte o Sur',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La distancia angular del punto considerado, medida sobre el paralelo y tomando como referencia el Meridiano 0, y puede ser Este u Oeste',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La distancia angular del punto considerado, medida sobre el meridiano y tomando como referencia el Ecuador, y puede ser Este u Oeste',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La distancia angular del punto considerado, medida sobre el paralelo y tomando como referencia el Meridiano 0, y puede ser Norte o Sur',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "4. Un 'pie' equivale a:",
    opciones: [
      {
        textoRespuesta: '3,048 cm.',
        isCorrect: false
      },
      {
        textoRespuesta: '39,80 cm.',
        isCorrect: false
      },
      {
        textoRespuesta: '30,48 cm.',
        isCorrect: true
      },
      {
        textoRespuesta: '29,00 cm.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. La tropopausa es:',
    opciones: [
      {
        textoRespuesta: 'La zona de separación entre la estratosfera y la mesosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'La zona de separación entre la troposfera y la estratosfera',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las diferentes zonas de separación que existen en la atmósfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las diferentes zonas de separación que existen en la troposfera',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6. Hemos calculado un vuelo en línea recta dividido en 5 tramos de 20 minutos de duración cada uno. Al ejecutar el vuelo nos damos cuenta que el primer tramo hemos tardado en realizarlo 25 minutos. Habiendo mantenido una velocidad constante ¿qué puedo esperar?',
    opciones: [
      {
        textoRespuesta: 'Que tardaremos 25 minutos menos en hacer el vuelo completo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son falsas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que tengo viento de cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que tardaremos 25 minutos más en hacer el vuelo completo',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '7. Como el norte geográfico y el magnético no están en el mismo punto. Para calcular la situación magnética habrá que introducir una corrección llamada',
    opciones: [
      {
        textoRespuesta: 'Variación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Declinación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Desviación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inclinación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. ¿Donde se consulta el horario de activación de una zona peligrosa (LED)?',
    opciones: [
      {
        textoRespuesta: 'En el AIP, apartado ENR',
        isCorrect: true
      },
      {
        textoRespuesta: 'En el AIP, apartado GEN',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el API',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el AIP, apartado AD',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '9. Antes de iniciar un vuelo de navegación en ULM, debemos tener en cuenta algunas cuestiones. De las expuestas, señale la correcta:',
    opciones: [
      {
        textoRespuesta:
          'Volar en los sotaventos de las montañas podría ser peligroso por las turbulencias existentes en caso de existir viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son ciertas',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Es conveniente preparar la ruta con campos de vuelo y/o aeródromos alternativos donde aterrizar en caso de necesidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si vamos a volar en las cercanías de una montaña, procuraremos hacerlo por el barlovento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. En la clasificación del espacio aéreo, el espacio "A":',
    opciones: [
      {
        textoRespuesta: 'Es para uso exclusivo de vuelos en VFR',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede ser utilizado en IFR y VFR, pero es controlado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es de libre uso por vuelos VFR e IFR',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es para uso exclusivo de vuelos en IFR',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '11. En el cálculo de la gasolina necesaria para la realización de un vuelo de navegación, ¿Cuál de los siguientes factores se ha de tener en cuenta?',
    opciones: [
      {
        textoRespuesta: 'a) Distancia en km de la etapa y velocidad de crucero',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Vientos en ruta y velocidad sobre el suelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Tiempo de vuelo consumo/hora y reserva de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "b" y "c" son necesarios tener en cuenta',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12. ¿Qué es una loxodrómica?',
    opciones: [
      {
        textoRespuesta: 'Es la línea que une dos puntos de la esfera terrestre, formando ángulos distintos con los meridianos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la línea que une dos puntos de la esfera terrestre. formando ángulos iguales con los meridianos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es la opuesta al ecuador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la línea de la esfera terrestre que en todos sus puntos es perpendicular al ecuador',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. Si nuestro rumbo geográfico es de 80º y la declinación de 10º W, nuestro rumbo magnético es de:',
    opciones: [
      {
        textoRespuesta: '90º',
        isCorrect: true
      },
      {
        textoRespuesta: '70º',
        isCorrect: false
      },
      {
        textoRespuesta: '100º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. Si el norte magnético está a la derecha del geográfico tendremos variación o declinación:',
    opciones: [
      {
        textoRespuesta: 'Norte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sur',
        isCorrect: false
      },
      {
        textoRespuesta: 'Este',
        isCorrect: true
      },
      {
        textoRespuesta: 'Oeste',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. Respecto al área LED 125. El límite inferior es: 5000 pies de altitud:',
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
    titulo: '16. Un rumbo geográfico de 150º y una declinación de 10º W, determina un rumbo magnético de:',
    opciones: [
      {
        textoRespuesta: '140º',
        isCorrect: false
      },
      {
        textoRespuesta: '160º',
        isCorrect: true
      },
      {
        textoRespuesta: 'No puede darse una declinación W.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17. ¿Cuáles pueden ser modos adecuados de determinar la dirección del viento estando en vuelo con el ULM?',
    opciones: [
      {
        textoRespuesta: 'Humo o polvo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ondulación de sembrados y/o superficie del agua y/o sombra de nubes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Realizar virajes en círculo comprobando la deriva',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todos los anteriores son modos adecuados',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '18. Cualquier punto de la tierra queda exactamente determinado por la intersección:',
    opciones: [
      {
        textoRespuesta: 'De un meridiano y un paralelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Del ecuador y los paralelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del ecuador y los meridianos',
        isCorrect: false
      },
      {
        textoRespuesta: 'De dos meridianos',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '19. Conociendo TAS = 140 Kt, ruta verdadera = 120 grados y viento = 90 grados/30 Kt, declinación 0º, calcular el rumbo Verdadero. y la velocidad sobre el suelo GS.',
    opciones: [
      {
        textoRespuesta: '130 grados, 95 Kt',
        isCorrect: false
      },
      {
        textoRespuesta: '112 grados, 114 Kt',
        isCorrect: true
      },
      {
        textoRespuesta: '125 grados, 110 Kt',
        isCorrect: false
      },
      {
        textoRespuesta: '128 grados, 166 Kt',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. La distancia vertical entre un avión y el suelo se denomina:',
    opciones: [
      {
        textoRespuesta: 'Altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nivel',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. Los ejes magnético y geográfico:',
    opciones: [
      {
        textoRespuesta: 'Son paralelos y se corresponden los nortes y los sures',
        isCorrect: false
      },
      {
        textoRespuesta: 'No son paralelos pero sus líneas se cortan justo en el centro de la Tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'No son paralelos y no se cruzan las líneas que los une',
        isCorrect: true
      },
      {
        textoRespuesta: 'Son paralelos y no se corresponden los nortes y los sur.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. Qué tipo de reglaje de altímetro se utiliza en aviación por debajo del nivel de transición:',
    opciones: [
      {
        textoRespuesta: 'QNE',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'QNH',
        isCorrect: true
      },
      {
        textoRespuesta: 'QFE',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. Una milla náutica, equivale a 1852 metros:',
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
    titulo: '24. El Punto con Latitud Cero grados y Longitud Cero grados, correspondería:',
    opciones: [
      {
        textoRespuesta: 'La intersección del Ecuador con el meridiano de Greenwich',
        isCorrect: true
      },
      {
        textoRespuesta: 'La intersección de un segundo de latitud y un segundo de Longitud si son Coordenadas Geográficas',
        isCorrect: false
      },
      {
        textoRespuesta: 'No existen esas Coordenadas Geográficas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La intersección del paralelo del Ecuador con el antimeridiano de Greenwich',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. La ortodrómica y la loxodrómica prácticamente coinciden en:',
    opciones: [
      {
        textoRespuesta: 'Distancias menores de 1.000 millas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Distancias mayores de 1.000 millas',
        isCorrect: false
      },
      {
        textoRespuesta: 'El punto medio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al cruzar el ecuador',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '26. El límite inferior de un CTR es el suelo:',
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
    titulo: '27. En navegación, la situación de una aeronave, queda definida por:',
    opciones: [
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Coordenadas, o por la posición con relación a un punto bien identificado',
        isCorrect: true
      },
      {
        textoRespuesta: 'La posición con relación a otra aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad verdadera (TAS)',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '28. La distancia entre dos puntos es de 42 milímetros en una carta escala 1:1.600.000. La distancia real entre ambos es de:',
    opciones: [
      {
        textoRespuesta: '36,30 NM',
        isCorrect: true
      },
      {
        textoRespuesta: '3,69 NM',
        isCorrect: false
      },
      {
        textoRespuesta: '370 NM',
        isCorrect: false
      },
      {
        textoRespuesta: '62,2 NM',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. En la navegación con ULM habrá que tener en cuenta esencialmente.',
    opciones: [
      {
        textoRespuesta: 'Rumbo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puntos de referencia seguros sobre el terreno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estimadas de tiempo parcial (distancias y tiempos)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todo lo anterior',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '30. ¿Cuándo son la ortodrómica y loxodrómica prácticamente iguales?',
    opciones: [
      {
        textoRespuesta: 'En recorridos inferiores a 1.000 millas náuticas',
        isCorrect: true
      },
      {
        textoRespuesta: 'En recorridos superiores a 1.000 millas náuticas',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el punto medio de un recorrido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando se vuela en el hemisferio sur',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '31. Si el Norte magnético está a la izquierda del geográfico tendremos declinación:',
    opciones: [
      {
        textoRespuesta: 'Norte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sur',
        isCorrect: false
      },
      {
        textoRespuesta: 'Este',
        isCorrect: false
      },
      {
        textoRespuesta: 'Oeste',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '32. La dirección del viento se define de donde procede y no la dirección a donde va.',
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
    titulo: '33. Los paralelos terrestres son círculos perpendiculares a los meridianos que pasan por los Polos.',
    opciones: [
      {
        textoRespuesta: 'Verdadero ',
        isCorrect: false
      },
      {
        textoRespuesta: 'Falso ',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '34. Las coordenadas de un punto deben nombrarse, primero la longitud y después la latitud.',
    opciones: [
      {
        textoRespuesta: 'Verdadero  ',
        isCorrect: false
      },
      {
        textoRespuesta: 'Falso  ',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '35. Las líneas que unen puntos con idéntica declinación magnética se denominan',
    opciones: [
      {
        textoRespuesta: 'Anónimas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antígonas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isohipsas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isógonas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '36. Se conoce como ángulo de deriva al:',
    opciones: [
      {
        textoRespuesta: 'Formado por el rumbo geográfico y magnético',
        isCorrect: false
      },
      {
        textoRespuesta: 'Formado por la ruta y el rumbo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Formado por la ruta geográfica y la magnética',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desviación magnética medida en grados',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '37. Indique cuál es la carta utilizada normalmente en aviación visual:',
    opciones: [
      {
        textoRespuesta: 'Todas son falsas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proyección cónica conforme de Lambert',
        isCorrect: true
      },
      {
        textoRespuesta: 'Proyección cilíndrica conforme de Lambert',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proyección azimutal de Lambert',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '38. Para ir a un destino con rumbo geográfico 90º ¿Qué rumbo habrá que poner en la brújula estando en el hemisferio Norte y con declinación 4ºW?',
    opciones: [
      {
        textoRespuesta: '90º',
        isCorrect: false
      },
      {
        textoRespuesta: '94º',
        isCorrect: true
      },
      {
        textoRespuesta: '86º',
        isCorrect: false
      },
      {
        textoRespuesta: '104º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. Si nuestra deriva es de 10º, ¿de dónde nos viene el viento?',
    opciones: [
      {
        textoRespuesta: 'De la derecha',
        isCorrect: true
      },
      {
        textoRespuesta: 'De la izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'No nos afecta',
        isCorrect: false
      },
      {
        textoRespuesta: 'No podemos saberlo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. Los Polos magnéticos coinciden con los geográficos.',
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
    titulo:
      '41. En una carta trazamos una ruta y vemos que cruza un espacio aéreo peligroso cuyos límites son FL140/2500AGL, ¿cómo procederemos?',
    opciones: [
      {
        textoRespuesta: 'Mantendré 2500 pies de altitud máxima para pasar por debajo',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Seguiremos la ruta dibujada en la carta, ya que cumpliendo las limitaciones para ULM no entraré en ese espacio',
        isCorrect: true
      },
      {
        textoRespuesta: 'Evitaremos pasar, dando un rodeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Consultaremos la activación en el AIP, y lo evitaremos sólo si está activado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. Si en una ficha de un campo de vuelo, se nos indica que la entrada se realiza por punto NOVEMBER, esto significa:',
    opciones: [
      {
        textoRespuesta: 'Que aproximaremos al tráfico por el Norte',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas son falsas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que aproximaremos al tráfico manteniendo Rumbo Norte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que aproximaremos al tráfico por el Sur',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. Las siglas LED111 en una carta VFR, significan:',
    opciones: [
      {
        textoRespuesta: 'Espacio aéreo controlado tipo D',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Indicador de lugar OACI para España peninsular, seguido de la letra D, espacio aéreo peligroso, y su identificación',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Código OACI para España peninsular, seguido de la letra D, espacio aéreo restringido, y su identificación para consultar el horario en el AIP',
        isCorrect: false
      },
      {
        textoRespuesta: 'Código OACI para Canarias, seguido de la letra D, espacio aéreo peligroso, y su identificación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. La ruta ortodrómica y la loxodrómica son iguales:',
    opciones: [
      {
        textoRespuesta: 'Siempre',
        isCorrect: false
      },
      {
        textoRespuesta: 'En rumbos exactos N o S; y en rumbo E u W próximo al ecuador',
        isCorrect: true
      },
      {
        textoRespuesta: 'En rumbos E y W solamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nunca',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '45. Si durante un vuelo con viento lateral de la izquierda, compruebo que la referencia que tengo debajo no se corresponde con la que debería tener, buscaré la correcta inicialmente:',
    opciones: [
      {
        textoRespuesta: 'Por delante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por detrás',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por mi izquierda',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por mi derecha',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. Quedan prohibidos los vuelos de ultraligeros sobre zonas urbanas:',
    opciones: [
      {
        textoRespuesta: 'Nunca',
        isCorrect: false
      },
      {
        textoRespuesta: 'No, mientras no se trate de espacios aéreos restringidos',
        isCorrect: false
      },
      {
        textoRespuesta: 'No, si se obtiene el correspondiente permiso del jefe de vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Siempre',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '47. Los meridianos siempre son:',
    opciones: [
      {
        textoRespuesta: 'Paralelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perpendiculares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transversales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Iguales',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '48. Respecto a la figura adjunta de un triángulo de viento, la TAS del avión son 160 Km/h; el viento es de 150º y de 25 km/h de intensidad. Teniendo en cuenta que el viento es completamente cruzado, ¿cuál es la velocidad respecto al suelo (GS)?',
    opciones: [
      {
        textoRespuesta: '167 Km/h',
        isCorrect: false
      },
      {
        textoRespuesta: '158,03 Km/h',
        isCorrect: true
      },
      {
        textoRespuesta: '160 Km/h',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con los datos disponibles no se puede calcular',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. La milla náutica:',
    opciones: [
      {
        textoRespuesta: 'Se define como la longitud de un minuto de arco de meridiano',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se define como la longitud de un grado de arco de paralelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se define como la longitud de un grado de arco de meridiano',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se define como la longitud de un minuto de arco de paralelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. La longitud de un punto es el ángulo formado por el punto, el centro de la Tierra y el meridiano de Greenwich.',
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
    titulo: '51. Para saber navegar correctamente, hay que conocer los principios de la navegación VOR:',
    opciones: [
      {
        textoRespuesta: 'Falso ',
        isCorrect: true
      },
      {
        textoRespuesta: 'Verdadero ',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. Para corregir la deriva provocada por un viento lateral de la izquierda, procederemos',
    opciones: [
      {
        textoRespuesta: 'Llevando un rumbo menor al calculado inicialmente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Pisando pie derecho',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pisando pie izquierdo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Llevando un rumbo mayor al calculado inicialmente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. En un mapa aeronáutica una P indica:',
    opciones: [
      {
        textoRespuesta: 'Zona Peligrosa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Zona Prohibida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Zona Restringida',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. Área LER 71 C. El límite superior es 2400 pies ALT:',
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
    titulo: '55. Durante la navegación no puedo obtener información de la elevación del terreno desde la carta',
    opciones: [
      {
        textoRespuesta: 'Verdadero ',
        isCorrect: false
      },
      {
        textoRespuesta: 'Falso ',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '56. Sobre los meridianos y paralelos, podemos afirmar que:',
    opciones: [
      {
        textoRespuesta:
          'a) Los paralelos son siempre iguales; los meridianos van disminuyendo de tamaño a medida que se acercan a los Polos',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Los meridianos son círculos menores, mientras que los paralelos son círculos máximos',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) "a" y "b" son correctas',
        isCorrect: false
      },
      {
        textoRespuesta:
          'd) Los meridianos son siempre iguales; los paralelos van disminuyendo de tamaño a medida que se acercan a los Polos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '57. Si en una ficha de un campo de vuelo, se nos indica que la entrada se realiza por punto ECHO, esto significa:',
    opciones: [
      {
        textoRespuesta: 'Que aproximaremos al tráfico por el Oeste',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son falsas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que aproximaremos al tráfico manteniendo Rumbo Este',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que aproximaremos al tráfico por el Este',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '58. Para obtener el rumbo en una carta VFR, hay que tener en cuenta que:',
    opciones: [
      {
        textoRespuesta: 'Todos los paralelos se cruzan con el ecuador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todos los meridianos pasan por el Norte Geográfico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sólo algunos meridianos pasan por el Norte Geográfico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todos los meridianos pasan por el Norte Magnético',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '59. En una carta las elevaciones del terreno vienen medidas por un número y un punto negro con la situación exacta. Ese número que indica la elevación esta expresado en:',
    opciones: [
      {
        textoRespuesta: 'Millas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Metros, o en pies, o en ambas unidades, a condición de que se indiquen claramente las unidades empleadas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Metros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. Si nuestro rumbo geográfico es 100º y el rumbo magnético de 122º, la declinación que llevamos es de:',
    opciones: [
      {
        textoRespuesta: '22º Norte',
        isCorrect: false
      },
      {
        textoRespuesta: '22º Sur',
        isCorrect: false
      },
      {
        textoRespuesta: '22º Este',
        isCorrect: false
      },
      {
        textoRespuesta: '22º Oeste',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '61. Si Vd. está navegando con una carta visual. ¿Qué debe mirar antes, el exterior y luego la carta, o al revés?',
    opciones: [
      {
        textoRespuesta: 'Primero el exterior y luego la carta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende del tipo de terreno sobre el que volemos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Primero la carta y luego el exterior',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es indiferente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '62. El mapa, que en aviación llamamos carta, es la representación a escala de una parte de la esfera terrestre',
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
    titulo:
      '63. Con los siguientes datos Track­ 050 Rumbo­ 040 Velocidad relativa 75 kts Velocidad sobre el suelo 65 kts Determine dirección y velocidad del viento:',
    opciones: [
      {
        textoRespuesta: '355 grados 16 kts',
        isCorrect: true
      },
      {
        textoRespuesta: '355 grados 10 kts',
        isCorrect: false
      },
      {
        textoRespuesta: '105 grados 16 kts',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '64. ¿Qué significa que una carta aeronáutica es conforme?',
    opciones: [
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que los meridianos y paralelos son perpendiculares entre si, aunque no sean líneas rectas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que, en los alrededores de un punto dado, la escala es la misma en todas direcciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que preserva los ángulos (y por tanto, las formas) a nivel local',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. La brújula presenta errores que tienen como origen la inclinación y aceleración del avión:',
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
    titulo: '66. Para entrar en espacio aéreo G, necesitamos permiso de control:',
    opciones: [
      {
        textoRespuesta: 'Falso ',
        isCorrect: true
      },
      {
        textoRespuesta: 'Verdadero ',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. El aeródromo de Beas del Segura (Jaén) tiene las pistas 09/27 y 16/34. ¿Cuál usaríamos con viento de 150/15?',
    opciones: [
      {
        textoRespuesta: '27',
        isCorrect: false
      },
      {
        textoRespuesta: '16',
        isCorrect: true
      },
      {
        textoRespuesta: '09',
        isCorrect: false
      },
      {
        textoRespuesta: '34',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '68. Cuando la declinación es oeste (hemisferio norte), una vez hallado el rumbo geográfico (RG), el magnético (RM) será:',
    opciones: [
      {
        textoRespuesta: 'RG + declinación',
        isCorrect: false
      },
      {
        textoRespuesta: 'RG - declinación',
        isCorrect: true
      },
      {
        textoRespuesta: 'RG x declinación',
        isCorrect: false
      },
      {
        textoRespuesta: 'RG / declinación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. El valor del QNH es:',
    opciones: [
      {
        textoRespuesta: 'Fijo en cada momento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Variable en cada momento',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '70. La longitud de un punto se mide sobre el:',
    opciones: [
      {
        textoRespuesta: 'Meridiano',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paralelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Círculo Polar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Meridiano cero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. Define las Coordenadas Geográficas del Polo Norte:',
    opciones: [
      {
        textoRespuesta: 'Latitud: S 90 Longitud: 0',
        isCorrect: false
      },
      {
        textoRespuesta: 'Latitud: N 90 Longitud: 0',
        isCorrect: true
      },
      {
        textoRespuesta: 'Latitud: N 0 Longitud: 90',
        isCorrect: false
      },
      {
        textoRespuesta: 'Latitud: S 0 Longitud: 90',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '72. En un mapa a escala 1:500.000, 4 cm. medidos en el mapa, equivalen en km a:',
    opciones: [
      {
        textoRespuesta: '200 km.',
        isCorrect: false
      },
      {
        textoRespuesta: '2 km.',
        isCorrect: false
      },
      {
        textoRespuesta: '20 km.',
        isCorrect: true
      },
      {
        textoRespuesta: '0,2 km.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. ¿Qué es un CTA?',
    opciones: [
      {
        textoRespuesta: 'Un área terminal, que alberga debajo varios aeropuertos',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un área de control, en torno a un aeropuerto controlado, cuyo límite inferior está a cierta altura sobre el terreno',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una región de control, en torno a un aeropuerto controlado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un espacio aéreo no controlado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '74. Para dibujar el triángulo de velocidades necesitamos conocer varios datos mínimos con anterioridad ¿Cuáles?',
    opciones: [
      {
        textoRespuesta: 'Dirección e intensidad del viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'La ruta geográfica a seguir',
        isCorrect: false
      },
      {
        textoRespuesta: 'La TAS de nuestro ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son ciertas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '75. En un mapa escala 1:250.000 un centímetro del mapa equivale a:',
    opciones: [
      {
        textoRespuesta: '25 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: '2,5 Km.',
        isCorrect: true
      },
      {
        textoRespuesta: '10 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. En ausencia de viento la TAS y la GS son iguales:',
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
    titulo: '77. La ruta debe dividirse en segmentos de vuelo, de acuerdo con la velocidad del avión de:',
    opciones: [
      {
        textoRespuesta: '30 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: '1 hora',
        isCorrect: false
      },
      {
        textoRespuesta: '5 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: '10 a 20 minutos',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '78. La proyección es el método usado para llevar a una superficie plana la curva de una esfera. Sin entrar en grandes detalles, las proyecciones se clasifican en:',
    opciones: [
      {
        textoRespuesta: 'Azimutales, Gnomónicas, Ortográficas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Azimutales, Cilíndricas, Estereográficas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Distorsionadas, Proyectadas, Matemáticas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Azimutales, Cilíndricas, Cónicas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '79. El rumbo que se mide en una carta es siempre geográfico y debe calcularse:',
    opciones: [
      {
        textoRespuesta: 'En el punto de salida',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el punto de llegada',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el punto medio de la ruta',
        isCorrect: true
      },
      {
        textoRespuesta: 'En los paralelos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. La declinación magnética es el resultado de:',
    opciones: [
      {
        textoRespuesta: 'La diferencia angular entre el norte magnético y norte geográfico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Diferencia angular entre norte magnético y rumbo geográfico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Diferencia escalar entre norte magnético y norte geográfico',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "81. ¿Cuál es la distancia entre los puntos 37º 26' N y 41º 42' N?.",
    opciones: [
      {
        textoRespuesta: '256 NM.',
        isCorrect: false
      },
      {
        textoRespuesta: '317 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: '474 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las respuestas primera y tercera son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '82. ¿En cuáles de estos casos tendremos que aplicar una corrección de deriva hacia un rumbo menor?',
    opciones: [
      {
        textoRespuesta: 'Rumbo 090º, viento de 180º',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rumbo 180º, viento de 090º',
        isCorrect: true
      },
      {
        textoRespuesta: 'Rumbo 360º, viento de 090º',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rumbo 240º, viento de 250º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. Si llevamos una velocidad de 40 NM/h, ¿Cuál es el equivalente en Km./h?',
    opciones: [
      {
        textoRespuesta: '40 Km./h.',
        isCorrect: false
      },
      {
        textoRespuesta: '64 Km./h.',
        isCorrect: false
      },
      {
        textoRespuesta: '74 Km./h.',
        isCorrect: true
      },
      {
        textoRespuesta: '128 Km./h.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '84. Estos cuatro ULM siguen la misma trayectoria, con las mismas condiciones de viento cruzado, ¿cuáles de ellos tendrá que cambiar más su rumbo indicado para corregir la deriva?',
    opciones: [
      {
        textoRespuesta: 'El que mantiene una TAS de 150 km/h',
        isCorrect: false
      },
      {
        textoRespuesta: 'El que mantiene una TAS de 110 km/h',
        isCorrect: true
      },
      {
        textoRespuesta: 'El que mantiene una TAS de 125 km/h',
        isCorrect: false
      },
      {
        textoRespuesta: 'El que mantiene una TAS de 200 km/h',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '85. Rumbo 300, viento 330 10kt, TAS 185 km/h. Hallar la GS',
    opciones: [
      {
        textoRespuesta: '165 km/h',
        isCorrect: false
      },
      {
        textoRespuesta: '169 km/h',
        isCorrect: true
      },
      {
        textoRespuesta: '201 km/h',
        isCorrect: false
      },
      {
        textoRespuesta: '203 km/h',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. En qué tipo de cartas podemos encontrar que los paralelos y los meridianos son paralelos entre si?',
    opciones: [
      {
        textoRespuesta: 'Lambert',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mercator',
        isCorrect: true
      },
      {
        textoRespuesta: 'Gnómica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cónica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. La trayectoria seguida por un avión durante su desplazamiento en el seno del aire se denomina trayectoria de vuelo.',
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
    titulo: '88. La carta Mercator es:',
    opciones: [
      {
        textoRespuesta: 'Una proyección estereográfica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una proyección donde pueden medirse las distancias directamente, pero no los rumbos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una proyección cilíndrica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una proyección cónica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '89. La brújula indica el rumbo geográfico:',
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
    titulo:
      '90. Todos los puntos que están en el meridiano de Greenwich tienen longitud Cero grados, los que están en el antimeridiano de Greenwich tienen longitud 180 grados',
    opciones: [
      {
        textoRespuesta: 'Verdadero ',
        isCorrect: true
      },
      {
        textoRespuesta: 'Falso ',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. Supongamos que tenemos que corregir la deriva provocada por un viento de la derecha. ¿Cómo lo haremos?',
    opciones: [
      {
        textoRespuesta: 'Guiñaremos hacia la izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentaremos nuestro rumbo lo necesario',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuiremos nuestro rumbo lo necesario',
        isCorrect: false
      },
      {
        textoRespuesta: 'Guiñaremos hacia la derecha',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. La representación terrestre de proyección cónica es la llamada de:',
    opciones: [
      {
        textoRespuesta: 'Mercator',
        isCorrect: false
      },
      {
        textoRespuesta: 'Lambert',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ortofónica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Poliestereográfica',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '93. Siempre que efectuemos un vuelo en ultraligero, para hallar el rumbo magnético debemos ……….. La declinación al rumbo geográfico:',
    opciones: [
      {
        textoRespuesta: 'Restar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sumar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Multiplicar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dividir',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. Si un avión, volando en rumbo 180º, inclina a la derecha, la brújula instantáneamente comenzará a marcar:',
    opciones: [
      {
        textoRespuesta: '210º',
        isCorrect: true
      },
      {
        textoRespuesta: '270º',
        isCorrect: false
      },
      {
        textoRespuesta: '360º',
        isCorrect: false
      },
      {
        textoRespuesta: '150º',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '95. Durante un vuelo de navegación, observo que la siguiente referencia a alcanzar se va quedando a la derecha a causa del viento ¿cómo actuaré?',
    opciones: [
      {
        textoRespuesta: 'Corrigiendo deriva hacia la derecha, poniendo un rumbo mayor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Guiñando hacia la izquierda para corregir deriva',
        isCorrect: false
      },
      {
        textoRespuesta: 'Corrigiendo deriva hacia la izquierda, poniendo un rumbo menor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Guiñando a la derecha para corregir la deriva',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. Si trabajamos con un mapa de escala 1:250.000, 5 cm. en dicho mapa equivalen realmente a:',
    opciones: [
      {
        textoRespuesta: '1.250 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: '12,5 Km.',
        isCorrect: true
      },
      {
        textoRespuesta: '50 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: '5 Km.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. Con un determinado viento cruzado, el ángulo de deriva será mayor:',
    opciones: [
      {
        textoRespuesta: 'Cuanto mayor sea la Ground Speed',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son falsas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuanto menor sea la TAS de nuestro ULM',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuanto mayor sea la TAS de nuestro ULM',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. Un altímetro calado con QNH nos indicará',
    opciones: [
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud',
        isCorrect: true
      },
      {
        textoRespuesta: 'Altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nivel de vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '99. Antes de iniciar un vuelo de navegación en ULM, debemos tener en cuenta algunas cuestiones. De las expuestas, señale la correcta:',
    opciones: [
      {
        textoRespuesta: 'Debemos conocer el rumbo a seguir, para ponerlo tras abandonar el tráfico de aeródromo',
        isCorrect: true
      },
      {
        textoRespuesta: 'No encenderemos el GPS hasta estar a cierta altura, pues en tierra no cogerá señal de satélites suficientes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una vez terminado el despegue, abriremos la carta para obtener el rumbo magnético a seguir',
        isCorrect: false
      },
      {
        textoRespuesta: 'Durante la carrera de despegue, iremos observando la carta para identificar el primer punto de referencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. Rumbo geográfico 095, declinación 15ºE, viento 0, indique rumbo magnético',
    opciones: [
      {
        textoRespuesta: '115º',
        isCorrect: false
      },
      {
        textoRespuesta: '080º',
        isCorrect: true
      },
      {
        textoRespuesta: '095º',
        isCorrect: false
      },
      {
        textoRespuesta: '110º',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
