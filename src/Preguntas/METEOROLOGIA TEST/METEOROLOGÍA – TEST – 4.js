const preguntas = [
  {
    titulo: '1. Inmediatamente después del paso de un frente frío, la visibilidad:',
    opciones: [
      {
        textoRespuesta: 'Mejora extraordinariamente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Empeora',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se forman nieblas',
        isCorrect: false
      },
      {
        textoRespuesta: 'No varía',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. El cambio de las estaciones es causado por:',
    opciones: [
      {
        textoRespuesta: 'a) La oblicuidad de la eclíptica',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) El movimiento de traslación de la Tierra alrededor del sol',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) "a" y "b" son correctas',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) Ninguna es correcta',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3. La capa de la atmósfera en la que los vuelos normalmente se llevan a cabo, se llama:',
    opciones: [
      {
        textoRespuesta: 'Estratosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tropopausa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ionosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Troposfera',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4. Las isobaras son líneas que unen puntos de igual presión en un momento dado y:',
    opciones: [
      {
        textoRespuesta: 'Si la presión es inferior a 1.000 mb no se representa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducida esa presión a nivel del mar',
        isCorrect: true
      },
      {
        textoRespuesta: 'La presión de dichos puntos es la que directamente se lee en el barómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'También unen puntos de igual intensidad de viento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. Respecto al siguiente METAR. LEVD 0314z 22009G20kt 150v280 CAVOK 30/07 Q1012',
    opciones: [
      {
        textoRespuesta: 'Es del día 22 a las 0900 utc.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es del día 3 y la hora las 1400 utc.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es del día 14 a las 0300 utc.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6. Las nubes cumuliformes:',
    opciones: [
      {
        textoRespuesta: 'Están estrechamente relacionadas con la estabilidad atmosférica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Están estrechamente relacionadas con la inestabilidad y los movimientos verticales intensos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Están estrechamente relacionadas con la inestabilidad y los movimientos horizontales intensos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son características de las tardes de verano',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7. Según la Clave Metar se denominan:',
    opciones: [
      {
        textoRespuesta: 'CI a los Cirrus y CS a los Cirrocumulus',
        isCorrect: false
      },
      {
        textoRespuesta: 'CS a los Cirrostratus y SC a los Cúmulus',
        isCorrect: false
      },
      {
        textoRespuesta: 'CB a los Cumulonimbos y CS a los Cirrostratus',
        isCorrect: true
      },
      {
        textoRespuesta: 'AS a los Altostratus y ES a los Stratus',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. En un sistema frontal orográfico, la nubosidad se centra en:',
    opciones: [
      {
        textoRespuesta: 'La cima',
        isCorrect: false
      },
      {
        textoRespuesta: 'A sotavento',
        isCorrect: false
      },
      {
        textoRespuesta: 'A barlovento',
        isCorrect: true
      },
      {
        textoRespuesta: 'En el valle solamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9. La advección es la transmisión del calor por movimientos horizontales del aire.',
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
    titulo: '10. Que significa la clave RA:',
    opciones: [
      {
        textoRespuesta: 'Niebla',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tormentas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Granizo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Lluvia',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11. ¿Según la variación diaria, cuándo se produce la temperatura mínima en la atmósfera?',
    opciones: [
      {
        textoRespuesta: 'Dos ó tres horas después del orto',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el hemisferio norte, durante el invierno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Zonas próximas a los polos',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el orto',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12. La brisa marina está originada por:',
    opciones: [
      {
        textoRespuesta: 'La mayor humedad que porta la superficie del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia térmica entre el agua y el aire de superficie',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia térmica entre el mar y la tierra',
        isCorrect: true
      },
      {
        textoRespuesta: 'El oleaje del mar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. En cuál de estas nubes hay mayor inestabilidad:',
    opciones: [
      {
        textoRespuesta: 'Ns',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ac',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sc',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cb',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '14. ¿Qué zona de la montaña es la más peligrosa con onda de montaña?:',
    opciones: [
      {
        textoRespuesta: 'Sotavento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Barlovento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nunca jamás debe de volarse en las inmediaciones o sobre montañas',
        isCorrect: false
      },
      {
        textoRespuesta: 'A gran altura sobre la cima',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. Cuando se dibuja en el cielo una línea de cúmulos y cumulonimbos:',
    opciones: [
      {
        textoRespuesta: 'Indica la llegada de un frente frío',
        isCorrect: true
      },
      {
        textoRespuesta: 'Indica la llegada de un frente cálido',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16. El incremento del vapor de agua en una masa de aire no disminuye su densidad.',
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
    titulo: '17. La nube más peligrosa para el vuelo es:',
    opciones: [
      {
        textoRespuesta: 'Cu',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ns',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cb',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. Las características meteorológicas de un frente estacionario son semejantes a las de un frente:',
    opciones: [
      {
        textoRespuesta: 'Frío',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ocluido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frío estable',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cálido',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '19. ¿Qué es la subsidencia?',
    opciones: [
      {
        textoRespuesta: 'Movimientos verticales ascendentes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Movimientos verticales descendentes',
        isCorrect: true
      },
      {
        textoRespuesta: 'Movimientos horizontales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Movimiento horizontal violento',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '20. Además de la circulación general de la atmósfera hay que tener en cuenta los efectos del viento local. Entre los vientos locales más conocidos, además de las brisas marinas y terrestres, se encuentran:',
    opciones: [
      {
        textoRespuesta: 'Orográfico, analógico y nocturno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Orográfico, anabático y catabático',
        isCorrect: true
      },
      {
        textoRespuesta: 'Viento en altura, canalizado y sotavento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todos los anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. Los cúmulos son:',
    opciones: [
      {
        textoRespuesta: 'Nubes densas y de contornos difusos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nubes densas, de contornos definidos y de desarrollo vertical',
        isCorrect: true
      },
      {
        textoRespuesta: 'Nubes espesas y grises que invaden todo el cielo y que acompañan precipitaciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nubes grises con la misma estructura que los cirrocúmulos pero menos espesas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. La cizalladura es:',
    opciones: [
      {
        textoRespuesta: 'Un cambio brusco y rápido de la intensidad del viento, en poco espacio horizontal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aumento de la intensidad del viento al paso por accidentes del terreno',
        isCorrect: false
      },
      {
        textoRespuesta: 'La variación de la presión atmosférica con la temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un cambio brusco y rápido de la dirección del viento en poco espacio vertical',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '23. Durante el paso de un frente cálido, la precipitaciones es:',
    opciones: [
      {
        textoRespuesta: 'Fuerte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continua',
        isCorrect: true
      },
      {
        textoRespuesta: 'Nula',
        isCorrect: false
      },
      {
        textoRespuesta: 'Escasa',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. La unidad de presión atmosférica utilizada en meteorología aeronáutica es:',
    opciones: [
      {
        textoRespuesta: 'a) El milibar',
        isCorrect: true
      },
      {
        textoRespuesta: 'b) La pulgada de mercurio',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) El milímetro de mercurio',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "a" y "b"',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. El punto de rocío es:',
    opciones: [
      {
        textoRespuesta: 'El porcentaje de humedad máximo que puede contener el aire a determinada temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura a la que se alcanza la saturación del vapor del agua',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '26. Son nubes de advección:',
    opciones: [
      {
        textoRespuesta: 'Cúmulos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estratos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cirros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nimbos',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '27. Un piloto puede esperar encontrarse con una cizalladura en condiciones de inversión térmica cuando la velocidad del viento entre 2000 y 4000 pies sobre la superficie:',
    opciones: [
      {
        textoRespuesta: '5 kts.',
        isCorrect: false
      },
      {
        textoRespuesta: '15 kts.',
        isCorrect: false
      },
      {
        textoRespuesta: '10 kts.',
        isCorrect: false
      },
      {
        textoRespuesta: '25 kts.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '28. Respecto al siguiente METAR. LEVD 031400z 22009G20kt 150v280 CAVOK 30/07 Q1012:',
    opciones: [
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'No hay nubes por debajo de 5000 pies',
        isCorrect: true
      },
      {
        textoRespuesta: 'Esta cubierto por debajo de 3000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hay tormentas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. Respecto al siguiente dato dado por el aeródromo en una información aeronáutica: viento 270/14 kt, podemos afirmar:',
    opciones: [
      {
        textoRespuesta: 'El viento va hacia rumbo magnético de 270º',
        isCorrect: false
      },
      {
        textoRespuesta: 'La pista en servicio es la 14',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento viene de rumbo magnético 270º',
        isCorrect: true
      },
      {
        textoRespuesta: 'El viento viene de rumbo geográfico 270º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. Al aumentar la altitud, la temperatura, según la atmósfera ISA:',
    opciones: [
      {
        textoRespuesta: 'La temperatura baja 2 grados cada 1000 metros',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura desciende 1.98 ºC cada 1000 pies',
        isCorrect: true
      },
      {
        textoRespuesta: 'La temperatura baja 6,5 grados cada 1000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permanece constante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '31. Las líneas que unen iguales puntos de presión, se denominan:',
    opciones: [
      {
        textoRespuesta: 'Isógonas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isobaras',
        isCorrect: true
      },
      {
        textoRespuesta: 'Isótonas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isotacas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. La clave que nos da el pronóstico del tiempo para vuelos a baja cota y para la aviación general, se denomina:',
    opciones: [
      {
        textoRespuesta: 'GAFOR',
        isCorrect: true
      },
      {
        textoRespuesta: 'FAGOR',
        isCorrect: false
      },
      {
        textoRespuesta: 'METEO',
        isCorrect: false
      },
      {
        textoRespuesta: 'TAFOR',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. La brisa marina está originada por:',
    opciones: [
      {
        textoRespuesta: 'El oleaje del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia térmica entre el mar y la tierra',
        isCorrect: true
      },
      {
        textoRespuesta: 'La mayor humedad de la superficie del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia térmica entre el agua y el aire de superficie',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. Los ciclones y los anticiclones térmicos se originan es:',
    opciones: [
      {
        textoRespuesta: 'Las masas de agua',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los desiertos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las zonas de presión variable del globo',
        isCorrect: false
      },
      {
        textoRespuesta: 'En los continentes',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '35. Volar a sotavento de una montaña cuando hay viento fuerte, puede ser peligroso:',
    opciones: [
      {
        textoRespuesta: 'Verdadero',
        isCorrect: true
      },
      {
        textoRespuesta: 'Falso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de dónde proceda el viento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. Con neblina la visibilidad se reduce:',
    opciones: [
      {
        textoRespuesta: 'Entre 1.000 y 5.000 m.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 900 y 1.500 m.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 0 y 1.000 m.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 1.000 y 2.000 m.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '37. ¿Qué circunstancia determina la formación de una oclusión?',
    opciones: [
      {
        textoRespuesta: 'Las elevaciones de la masa de aire caliente del suelo por acción de la masa de aire frío de mayor actividad',
        isCorrect: true
      },
      {
        textoRespuesta: 'La presión atmosférica',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura atmosférica',
        isCorrect: false
      },
      {
        textoRespuesta: 'La curvatura de las isobaras',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. Ráfaga es:',
    opciones: [
      {
        textoRespuesta: 'El valor de intensidad del viento cuando éste no es constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'El valor máximo de intensidad del viento cuando éste no es constante',
        isCorrect: true
      },
      {
        textoRespuesta: 'El valor mínimo de intensidad del viento cuando éste no es constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de ellas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. La capa de la atmósfera en la cual se desarrollan las actividades de los ultraligeros, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Estratosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Troposfera',
        isCorrect: true
      },
      {
        textoRespuesta: 'Capa límite',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tropopausa',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '40. La atmósfera es una capa gaseosa que rodea la tierra y, como en un océano, en ella hay mareas, corrientes y desplazamiento de masas, ¿cómo se llaman esos movimientos?',
    opciones: [
      {
        textoRespuesta: 'Corrientes de chorro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Circulación atmosférica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Movimientos regulares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Movimientos sísmicos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. Cuando dos masas de aire se encuentran se producen unas condiciones meteorológicas características conocidas como:',
    opciones: [
      {
        textoRespuesta: 'Superficie frontal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Situación frontal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Zona frontal',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. En la atmósfera, según vamos ascendiendo:',
    opciones: [
      {
        textoRespuesta: 'Presión aumenta, Temperatura aumenta y Densidad aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión disminuye, Temperatura disminuye, Densidad disminuye',
        isCorrect: true
      },
      {
        textoRespuesta: 'Presión disminuye, Temperatura aumenta, Densidad aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión aumenta, Temperatura disminuye, Densidad disminuye',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. La brisa marina sopla durante el día:',
    opciones: [
      {
        textoRespuesta: 'Del mar hacia la tierra',
        isCorrect: true
      },
      {
        textoRespuesta: 'De la tierra hacia el mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de los restantes factores meteorológicos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es cambiante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. En un sistema de bajas presiones, la presión es mínima:',
    opciones: [
      {
        textoRespuesta: 'En el exterior',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el centro',
        isCorrect: true
      },
      {
        textoRespuesta: 'En las orillas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la misma en toda su extensión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. Una línea de ruptura es una zona de convergencia o de encuentro entre diferentes masas de aire.',
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
    titulo: '46. Tras pasar un frente frío:',
    opciones: [
      {
        textoRespuesta: 'La presión permanece constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión baja de forma brusca',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión sube de forma brusca',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión sube lentamente',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '47. A las variaciones de presión que se suceden a lo largo del día se denominan:',
    opciones: [
      {
        textoRespuesta: 'Mareas barométricas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Variaciones barométricas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desviaciones barométricas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. Las líneas que se indican en un mapa meteorológico se llaman:',
    opciones: [
      {
        textoRespuesta: 'Isoipsas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isogónicas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isóbaras',
        isCorrect: true
      },
      {
        textoRespuesta: 'Isotacas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. El peso del vapor de agua contenida en el aire por unidad de superficie, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Tensión de vapor o presión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Humedad absoluta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Humedad relativa',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. En el nivel de condensación la masa de aire que asciende, alcanza su:',
    opciones: [
      {
        textoRespuesta: 'Punto de rocío',
        isCorrect: true
      },
      {
        textoRespuesta: 'Nivel máximo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Atmósfera estándar',
        isCorrect: false
      },
      {
        textoRespuesta: '0º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. La presión atmosférica depende de:',
    opciones: [
      {
        textoRespuesta: 'Altitud, humedad y temperatura',
        isCorrect: true
      },
      {
        textoRespuesta: 'La presión atmosférica',
        isCorrect: false
      },
      {
        textoRespuesta: 'La marea barométrica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las tres son verdaderas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. Se dice que el aire está saturado cuando:',
    opciones: [
      {
        textoRespuesta: 'No admite mayor cantidad de vapor de agua',
        isCorrect: true
      },
      {
        textoRespuesta: 'Su tensión de vapor es mínima',
        isCorrect: false
      },
      {
        textoRespuesta: 'No admite mayor cantidad de partículas de polvo en suspensión',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se puede comprimir más',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. Existen bajas presiones cuando están por debajo de:',
    opciones: [
      {
        textoRespuesta: '1.023 milibares',
        isCorrect: false
      },
      {
        textoRespuesta: '29,92 pulgadas',
        isCorrect: true
      },
      {
        textoRespuesta: '1.013 pulgadas',
        isCorrect: false
      },
      {
        textoRespuesta: '92,29 milibares',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. En un sistema montañoso:',
    opciones: [
      {
        textoRespuesta: 'El viento a barlovento produce descendencias',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento a sotavento produce ascendencias',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento en barlovento produce ascendencias',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '55. Las corrientes verticales producidas por las diferentes temperaturas del terreno originan nubes:',
    opciones: [
      {
        textoRespuesta: 'De convección',
        isCorrect: true
      },
      {
        textoRespuesta: 'De advección',
        isCorrect: false
      },
      {
        textoRespuesta: 'De turbulencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Orográficas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. En las previsiones, ¿Cómo se describen la dirección y la velocidad de los vientos en altura?',
    opciones: [
      {
        textoRespuesta: 'La dirección al Norte magnético y la velocidad en millas por hora',
        isCorrect: false
      },
      {
        textoRespuesta: 'Gráficamente con vectores que expresan dirección y la velocidad en nudos',
        isCorrect: true
      },
      {
        textoRespuesta: 'La dirección al Norte verdadero y la velocidad en millas por hora',
        isCorrect: false
      },
      {
        textoRespuesta: 'La dirección al Norte magnético y la velocidad en nudos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '57. Que significa la clave TS:',
    opciones: [
      {
        textoRespuesta: 'Niebla',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tormentas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Llovizna',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ceniza volcánica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '58. Gradiente vertical de temperatura se define como:',
    opciones: [
      {
        textoRespuesta: 'La variación de la temperatura con la altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'La variación de la temperatura con la distancia horizontal',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cambio de temperatura a lo largo del día',
        isCorrect: false
      },
      {
        textoRespuesta: 'La variación de presión con la temperatura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. Se dice que el viento es constante cuando:',
    opciones: [
      {
        textoRespuesta: 'Unas veces lleva un sentido y en otras otro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su acción es constante y en la misma dirección',
        isCorrect: true
      },
      {
        textoRespuesta: 'Son propios de una región determinada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su acción es constante, pero puede variar su dirección',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. Tras pasar un frente frío, la presión:',
    opciones: [
      {
        textoRespuesta: 'Baja de forma brusca',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sube de forma brusca',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permanece constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sube lentamente',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '61. El viento fluye:',
    opciones: [
      {
        textoRespuesta: 'De alta a baja presión',
        isCorrect: true
      },
      {
        textoRespuesta: 'De baja a alta presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia de presiones no influye en el viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es cierta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '62. En España, la masa de aire en los anticiclones, gira en sentido horario:',
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
      '63. En un frente frío, con situaciones de aire caliente muy inestable, se produce una línea de turbonada por delante, a una distancia de:',
    opciones: [
      {
        textoRespuesta: '300 km.',
        isCorrect: true
      },
      {
        textoRespuesta: '100 metros',
        isCorrect: false
      },
      {
        textoRespuesta: '10 km.',
        isCorrect: false
      },
      {
        textoRespuesta: '500 metros',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '64. Cuál de las siguientes nubes es más baja:',
    opciones: [
      {
        textoRespuesta: 'St',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cs',
        isCorrect: false
      },
      {
        textoRespuesta: 'As',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cc',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. Cuál será la altitud de presión en un aeropuerto que está a 1380 pies de elevación, con un QNH de 1015 mb:',
    opciones: [
      {
        textoRespuesta: '1320 pies',
        isCorrect: true
      },
      {
        textoRespuesta: '1440 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '1620 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '1560 pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '66. Para analizar el comportamiento de la atmósfera, ¿Cuáles son las variables más importantes?',
    opciones: [
      {
        textoRespuesta: 'Presión y humedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión y temperatura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Humedad y temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión y nivel de ozono',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. Cuando las isobaras en un mapa meteorológico están muy juntas, ¿Qué podemos esperar?.',
    opciones: [
      {
        textoRespuesta: 'Frío',
        isCorrect: false
      },
      {
        textoRespuesta: 'Lluvia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Zona de formación de nubes',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '68. La niebla se forma cuando el aire se enfría por encima de su punto de rocío.',
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
      '69. Nos encontramos el avión con hielo en el borde de ataque. Podemos volar con precaución siempre que el extradós esté libre de hielo.',
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
    titulo: '70. Durante el paso de un frente cálido, el viento:',
    opciones: [
      {
        textoRespuesta: 'Cambia de dirección',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta y mantiene la misma dirección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se mantiene constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta de intensidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. Como se llaman las líneas que unen puntos de igual presión atmosférica:',
    opciones: [
      {
        textoRespuesta: 'Isonautas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isobaras',
        isCorrect: true
      },
      {
        textoRespuesta: 'Isotermas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isógonas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '72. Una brisa de montaña (viento catabático) sopla:',
    opciones: [
      {
        textoRespuesta: 'Ladera arriba durante el día',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ladera arriba durante la noche',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ladera abajo durante el día',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ladera abajo durante la noche',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '73. La turbulencia orográfica es la creada por el viento al paso por accidentes del terreno.',
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
    titulo: '74. La densidad del aire a nivel del mar es:',
    opciones: [
      {
        textoRespuesta: 'Mayor que a mayor altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Menor que a mayor altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. Antes del paso de un frente cálido, la precipitación producida es:',
    opciones: [
      {
        textoRespuesta: 'Ninguna',
        isCorrect: false
      },
      {
        textoRespuesta: 'Muy fuerte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Muy baja',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continua',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '76. La temperatura a la cual se alcanza el punto de saturación de vapor de agua se denomina:',
    opciones: [
      {
        textoRespuesta: 'Punto de rocío',
        isCorrect: true
      },
      {
        textoRespuesta: 'Punto de saturación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Punto de tensión de vapor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura de ebullición',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '77. Para calcular el QNH a partir del QFE se necesitan:',
    opciones: [
      {
        textoRespuesta: 'Presión y temperatura a nivel del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Elevación del aeródromo y temperatura a nivel del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Elevación del aeródromo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Elevación y temperatura del aeródromo',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '78. La altura a que sobre la tierra o agua se encuentra la base de la capa inferior de nubes y que cubre más de la mitad del cielo, se llama:',
    opciones: [
      {
        textoRespuesta: 'Nubosidad media',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nivel de transición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isoterma de 0°',
        isCorrect: false
      },
      {
        textoRespuesta: 'Techo de nubes',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '79. La baja presión orográfica en una cadena de montaña se produce:',
    opciones: [
      {
        textoRespuesta: 'Justo en la cima de ésta',
        isCorrect: false
      },
      {
        textoRespuesta: 'A barlovento si el aire sopla fuerte',
        isCorrect: false
      },
      {
        textoRespuesta: 'A sotavento si el aire sopla fuerte',
        isCorrect: true
      },
      {
        textoRespuesta: 'A barlovento si a sotavento no sopla aire',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. La identificación de una onda de montaña es posible:',
    opciones: [
      {
        textoRespuesta: 'Por la aparición en el barlovento de nubes rotoras y lenticulares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por la aparición en el sotavento de nubes rotoras y lenticulares',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por la aparición en el sotavento de nubes cúmulos-nimbos y lenticulares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por la aparición en la cumbre de la montaña de nubes rotoras y lenticulares',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '81. A mayor inclinación de los rayos del Sol, mayor radiación de calor.',
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
    titulo: '82. El aire caliente admite mayor cantidad de vapor de agua que uno frío.',
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
    titulo: '83. Meteorológicamente hablando, las características de un frente estacionario se parecen a las de:',
    opciones: [
      {
        textoRespuesta: 'Un frente ocluido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un frente cálido',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un frente frío estacionario',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una cizalladura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. El gradiente de temperatura con la altura es de:',
    opciones: [
      {
        textoRespuesta: '6,5ºC. cada 1.000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '2ºC. cada 1.000 pies',
        isCorrect: true
      },
      {
        textoRespuesta: '15ºC. cada 100 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '15ºC. cada 1.000 pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '85. Influyen en la aparición de turbulencias:',
    opciones: [
      {
        textoRespuesta: 'La geografía, la orografía y las condiciones térmicas de la atmósfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento y las condiciones térmicas de la atmósfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las fuertes tormentas con aparato eléctrico y las condiciones térmicas de la atmósfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las condiciones térmicas de la atmósfera, la orografía y el viento',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '86. Si en un mapa meteorológico encontramos dibujadas las isobaras muy juntas significa:',
    opciones: [
      {
        textoRespuesta: 'Hace mucho frío',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento es muy fuerte',
        isCorrect: true
      },
      {
        textoRespuesta: 'El viento es flojo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nada especial',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. La presión atmosférica depende de:',
    opciones: [
      {
        textoRespuesta: 'Si es anticiclón o borrasca',
        isCorrect: false
      },
      {
        textoRespuesta: 'La época del año',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud, humedad y temperatura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '88. Al paso de un frente cálido:',
    opciones: [
      {
        textoRespuesta: 'aEl viento disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento cambia de dirección',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna de ellas es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las dos primeras son verdaderas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '89. Las líneas que unen iguales puntos de presión, se denominan:',
    opciones: [
      {
        textoRespuesta: 'Isotacas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isóbaras',
        isCorrect: true
      },
      {
        textoRespuesta: 'Isógonas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isótonas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. Cuanto más lejos se encuentre la temperatura atmosférica del punto de rocío:',
    opciones: [
      {
        textoRespuesta: 'Menor posibilidad de heladas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor posibilidad de escarcha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor será el riesgo de niebla',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor será el riesgo de niebla',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '91. De la relación que existe entre los gráficos de isobaras y la dirección del viento y fuerza del viento, podemos deducir que:',
    opciones: [
      {
        textoRespuesta: 'Cuanto más juntas estén la isobaras más intensidad de viento tendremos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuanto más separadas estén las isobaras más intensidad de viento tendremos',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los gráficos de isobaras sólo tienen relación respecto a la dirección del viento, no respecto a la intensidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una isobara de 1.004 mb equivale a 4 nudos de viento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. Los ciclones y anticiclones térmicos se desarrollan en función de la:',
    opciones: [
      {
        textoRespuesta: 'Densidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Humedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '93. En los anticiclones o altas presiones, la presión aumenta hacia el centro, donde es máxima.',
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
    titulo: '94. Cuando existe un techo de nubes muy bajo o la visibilidad es reducida, un aeropuerto puede ser considerado:',
    opciones: [
      {
        textoRespuesta: 'Bajo mínimos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cubierto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo para operaciones VFR',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alternativo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. Una masa de aire se caracteriza por:',
    opciones: [
      {
        textoRespuesta: 'Fuerte gradiente de presión y temperaturas altas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Condiciones meteorológicas homogéneas y gran dimensión horizontal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Altas presiones en su centro y disminución progresiva hacia el exterior',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bajas presiones en su centro y gran dimensión vertical',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. Se dice que una masa de aire es activa cuando:',
    opciones: [
      {
        textoRespuesta: 'Produce gran inestabilidad y fuertes precipitaciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su desplazamiento es rápido',
        isCorrect: true
      },
      {
        textoRespuesta: 'Produce nubes de desarrollo vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'Origina altas o bajas presiones bien definidas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. Las nubes formadas por el choque de dos masas de aire, una caliente y la otra fría, se llaman:',
    opciones: [
      {
        textoRespuesta: 'De convección',
        isCorrect: false
      },
      {
        textoRespuesta: 'De advección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Orográficas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frontales',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '98. Las nubes se forman por:',
    opciones: [
      {
        textoRespuesta: 'Enfriamiento de aire caliente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por calentamiento de aire húmedo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Enfriamiento de aire húmedo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por transformación de vapor de agua en cristales de hielo',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '99. La atmósfera terrestre recibe calor del sol directamente y calor por irradiación de la tierra. ¿Pero en qué proporción aproximadamente?',
    opciones: [
      {
        textoRespuesta: '15% del sol y 85% de irradiación',
        isCorrect: true
      },
      {
        textoRespuesta: '15% de irradiación y 85% de sol',
        isCorrect: false
      },
      {
        textoRespuesta: '50% de cada uno',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se pueden estipular los porcentajes ni aproximadamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. El nivel de condensación es:',
    opciones: [
      {
        textoRespuesta: 'La altitud a la cual el vapor de agua alcanza su punto de rocío',
        isCorrect: true
      },
      {
        textoRespuesta: 'La temperatura a la cual el vapor de agua alcanza su punto de saturación',
        isCorrect: false
      },
      {
        textoRespuesta: 'El nivel al cual los cristales de hielo se convierten en agua',
        isCorrect: false
      },
      {
        textoRespuesta: 'La altitud a la cual se el vapor de agua se transforma hielo',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
