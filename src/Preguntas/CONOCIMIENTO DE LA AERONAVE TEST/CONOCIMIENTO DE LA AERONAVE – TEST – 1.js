const preguntas = [
  {
    titulo: '1. Es recomendable calibrar la distancia entre electrodos de las bujías nuevas?',
    opciones: [
      {
        textoRespuesta: 'Sí',
        isCorrect: true
      },
      {
        textoRespuesta: 'No',
        isCorrect: false
      },
      {
        textoRespuesta: 'Da igual',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se puede',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. Al volar desde un sector de aire cálido hasta otro de aire más frío, al altímetro:',
    opciones: [
      {
        textoRespuesta: 'Proporciona una indicación incorrecta por defecto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indica la altitud real sobre el suelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continúa indicando lecturas tan correctas como anteriormente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporciona una indicación incorrecta por exceso',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3. ¿Qué indica el Variómetro?',
    opciones: [
      {
        textoRespuesta: 'La variación de la velocidad indicada (IAS) del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La carga de la batería',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo de ascensos y descensos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Régimen de ascensos y descensos',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '4. La hélice en un avión no se comporta como un tornillo que se enrosca y avanza en el aire, sino que es un ala y como tal genera sustentación orientada hacia adelante',
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
    titulo: '5. En el caso de observar un cable deshilachado, ¿Qué medida habrá que tomar?',
    opciones: [
      {
        textoRespuesta: 'Ninguna. No es peligroso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cortar los hilos sueltos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Forrarlo con una cinta plástica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cambiarlo inmediatamente',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6. Se dice que una hélice está en bandera cuando la pala',
    opciones: [
      {
        textoRespuesta: 'Está pintada con la bandera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está parada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Forma un ángulo de ataque de 90 grados',
        isCorrect: true
      },
      {
        textoRespuesta: 'Está reducida la potencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7. El timón de profundidad es:',
    opciones: [
      {
        textoRespuesta: 'La superficie aerodinámica encargada de producir el movimiento del alabeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La superficie aerodinámica encargada de producir el movimiento del cabeceo',
        isCorrect: true
      },
      {
        textoRespuesta: 'La superficie aerodinámica encargada de producir el movimiento del picado o encabritado',
        isCorrect: false
      },
      {
        textoRespuesta: 'La superficie aerodinámica encargada de producir el movimiento de la guiñada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. El tubo de escape:',
    opciones: [
      {
        textoRespuesta: 'Sólo sirve para disminuir el ruido',
        isCorrect: false
      },
      {
        textoRespuesta: 'No tiene influencia en la potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es necesario para el buen funcionamiento del motor',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9. Determinar la igualdad errónea',
    opciones: [
      {
        textoRespuesta: '2 inches=2000 ft',
        isCorrect: false
      },
      {
        textoRespuesta: '2 mb=60 ft',
        isCorrect: false
      },
      {
        textoRespuesta: '1 pulgada=10000 pies',
        isCorrect: true
      },
      {
        textoRespuesta: '3 mb=27 mts',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. ¿Es aconsejable hacer movimientos rápidos del mando de gases en los motores calientes?',
    opciones: [
      {
        textoRespuesta: 'Sí, pues aumentamos más rápidamente la velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'No, pues podemos producir detonaciones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sí, para conseguir un ajuste fino de potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, para dar una mejor mezcla',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. ¿Cuál de estas maniobras podría tener factor de carga n = 1?',
    opciones: [
      {
        textoRespuesta: 'Viraje con alabeo de 60º',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una maniobra brusca de recogida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vuelo recto y nivelado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Maniobra brusca pasando de ascenso a descenso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12. La ventanilla de Kollsman es un dispositivo que se encuentra en:',
    opciones: [
      {
        textoRespuesta: 'La brújula',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro',
        isCorrect: true
      },
      {
        textoRespuesta: 'El termómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'El anemómetro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. La relación de compresión es una relación',
    opciones: [
      {
        textoRespuesta: 'Potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Efectiva',
        isCorrect: false
      },
      {
        textoRespuesta: 'Volumétrica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Consistente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. Identifique las partes del perfil de la figura: letra F',
    opciones: [
      {
        textoRespuesta: 'Cuerda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Espesor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Línea de curvatura media',
        isCorrect: true
      },
      {
        textoRespuesta: 'Intradós',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. En aviación deportiva podríamos considerar como error de anemómetro despreciable el de',
    opciones: [
      {
        textoRespuesta: 'Densidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Posición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Instrumento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Compresibilidad',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '16. ¿Qué es la flecha de un ala?',
    opciones: [
      {
        textoRespuesta: 'El ángulo que forma la línea del 25% y el eje vertical del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el ángulo que forma la línea del 25% y una perpendicular al eje longitudinal del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es siempre el ángulo que forma la línea del 25% y eje transversal del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las anteriores son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17. La precesión es una propiedad giroscópica que se manifiesta',
    opciones: [
      {
        textoRespuesta: 'Desplazando el punto de aplicación de la fuerza ejercida 90 grados según el sentido del giro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Manteniéndose fija la posición del giróscopo en el espacio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Adelantando 90 grados dicha fuerza según su giro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debido a sus propiedades inerciales',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. ¿Qué significa la medida 54 por 27 pulgadas en una hélice?',
    opciones: [
      {
        textoRespuesta: 'Diámetro y número de laminaciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Diámetro y calidad del barniz protector',
        isCorrect: false
      },
      {
        textoRespuesta: 'Diámetro y paso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Radio y espesor',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '19. La batería se usa casi exclusivamente para la puesta en marcha, permaneciendo el resto del vuelo como fuente eléctrica de reserva:',
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
    titulo: '20. El uso de la calefacción del carburador tiende a:',
    opciones: [
      {
        textoRespuesta: 'Disminuye la potencia y disminuye la Temp.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la potencia y disminuye la Temp. de funcionamiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la potencia y aumenta le Temp. De funcionamiento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuye la potencia y aumenta la Temp. De funcionamiento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. tacómetro en un conjunto motor-hélice sin reductora permite conocer el número de revoluciones del',
    opciones: [
      {
        textoRespuesta: 'Rosario',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ruedas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hélice',
        isCorrect: true
      },
      {
        textoRespuesta: 'Giróscopos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. Un tren de aterrizaje convencional está constituido por:',
    opciones: [
      {
        textoRespuesta: 'Dos ruedas principales y una rueda en el morro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dos ruedas principales y una rueda de cola o patín',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dos ruedas principales detrás del centro de gravedad y una rueda en el morro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuatro ruedas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. El sistema de medición de presión consta de tomas dinámicas y',
    opciones: [
      {
        textoRespuesta: 'Variables',
        isCorrect: false
      },
      {
        textoRespuesta: 'Marginales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Superficiales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estáticas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '24. ¿Qué es el alargamiento de un ala?',
    opciones: [
      {
        textoRespuesta: 'El cociente entre la superficie alar y la envergadura',
        isCorrect: false
      },
      {
        textoRespuesta: 'El alargamiento solo se considera en los perfiles no en el ala',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cociente entre la envergadura y la superficie alar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es cociente entre la envergadura y la cuerda media',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '25. La parte superior del ala comprendida entre el borde de ataque y el borde de salida es:',
    opciones: [
      {
        textoRespuesta: 'El intradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'La superficie alar',
        isCorrect: false
      },
      {
        textoRespuesta: 'La cuerda media',
        isCorrect: false
      },
      {
        textoRespuesta: 'El extradós',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '26. Los flaps son unos elementos:',
    opciones: [
      {
        textoRespuesta: 'De mando que se sitúan en la parte trasera del estabilizador vertical de cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Móviles de control en la parte trasera exterior de cada ala',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentan el coeficiente de sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'De mando que se sitúan en la parte trasera del estabilizador horizontal de cola',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. ¿Qué marca el indicador de presión de colector o manifold a motor parado en tierra?',
    opciones: [
      {
        textoRespuesta: 'Máximo a la derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión atmosférica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mínimo a la izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'La mitad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. ¿Qué es un anemómetro?',
    opciones: [
      {
        textoRespuesta: 'Un medidor de longitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un instrumento que determina la velocidad del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un instrumento del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una cápsula aneroide acoplada al altímetro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. Identifique las partes del perfil de la figura: letra B',
    opciones: [
      {
        textoRespuesta: 'Borde de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Borde de salida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Perfil',
        isCorrect: false
      },
      {
        textoRespuesta: 'Radio',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. El anemómetro necesita medir la presión estática y la presión total para su funcionamiento.',
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
    titulo: '31. En el caso de rodar por pistas de tierra, se deberá hacer lentamente, puesto que la hélice puede dañarse por',
    opciones: [
      {
        textoRespuesta: 'Vientos cruzados',
        isCorrect: false
      },
      {
        textoRespuesta: 'Piedrecitas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mala visibilidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trepidaciones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. La relación de comprensión de los motores modernos de 2 tiempos está limitada por los valores',
    opciones: [
      {
        textoRespuesta: '8:1 a 11:1',
        isCorrect: true
      },
      {
        textoRespuesta: '6:1 a 8:1',
        isCorrect: false
      },
      {
        textoRespuesta: '12:1 a 17:1',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguno de los anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. Las condiciones que pueden causar detonaciones son:',
    opciones: [
      {
        textoRespuesta: 'Alta presión de admisión y bajo número de revoluciones por minuto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Baja presión de admisión y alto flujo de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Baja presión de admisión y alto número de revoluciones por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alta presión de admisión y alto número de revoluciones por minuto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. Los motores de inyección no presentan problemas de hielo en el carburador',
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
    titulo:
      '35. Durante el ascenso, si nuestro motor es atmosférico, con ajuste constante de mando de gases y mando de RPM (con mezcla constante)',
    opciones: [
      {
        textoRespuesta: 'Las RPM disminuyen',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión de admisión de aire (MAP) aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión de admisión de aire (MAP) disminuye',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las RPM aumentan',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. Que condiciones son más favorables para la formación de hielo en el carburador',
    opciones: [
      {
        textoRespuesta: 'Temperatura entre 5 y 21',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cualquier temperatura bajo 0',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura entre 0 y 10',
        isCorrect: false
      },
      {
        textoRespuesta: 'Siempre que haya humedad menor del 50%',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '37. El arco blanco del anemómetro indica',
    opciones: [
      {
        textoRespuesta: 'Gama de velocidad para volar en turbulencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad de pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad de operación de flap',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '38. ¿Qué sistemas son los que se utilizan para avisar al piloto de la cercanía de una pérdida?',
    opciones: [
      {
        textoRespuesta: 'a) Audibles',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Luminosos',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Táctiles',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "a" y "b" son ciertas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '39. En caso de rodar por pistas de tierra, se deberá hacer lentamente, puesto que la hélice puede dañarse por:',
    opciones: [
      {
        textoRespuesta: 'Vientos cruzados',
        isCorrect: false
      },
      {
        textoRespuesta: 'Melladuras producidas por las piedras',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mala visibilidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trepidaciones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. La batería es una fuente de corriente eléctrica:',
    opciones: [
      {
        textoRespuesta: 'Alternativa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continua',
        isCorrect: true
      },
      {
        textoRespuesta: 'Trifásica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ciclada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. La velocidad IAS y la velocidad TAS son siempre iguales.',
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
    titulo: '42. ¿Qué instrumento tiene una toma de presión total del aire a través del tubo pitot?',
    opciones: [
      {
        textoRespuesta: 'Variómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Anemómetro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguno de ellos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. La excesiva temperatura del motor, tanto en el aire como en tierra:',
    opciones: [
      {
        textoRespuesta: 'Dañará los conductos de la calefacción y las aletas de refrigeración de los cilindros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hará perder potencia, consumir aceite en exceso y posibles daños internos en el motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Apreciablemente no afectará al motor de una aeronave en ningún caso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentará el consumo de combustible y puede aumentar la potencia debido al exceso de calor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. Un combustible de bajo octanaje puede producir',
    opciones: [
      {
        textoRespuesta: 'Mezclas pobres',
        isCorrect: false
      },
      {
        textoRespuesta: 'Detonaciones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Parada de motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. ¿Cómo podemos obtener el QNH nosotros mismos?',
    opciones: [
      {
        textoRespuesta: 'No es posible obtener el QNH por nosotros mismos',
        isCorrect: false
      },
      {
        textoRespuesta: 'En vuelo o en tierra, calando 1013 Mb',
        isCorrect: false
      },
      {
        textoRespuesta: 'Poniendo a cero el altímetro en tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'En tierra, calando la elevación del aeródromo en el altímetro',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '46. Un avión de 1.000 Kg con factor de carga n=3 significa que su estructura está soportando una fuerza de:',
    opciones: [
      {
        textoRespuesta: '300 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: '3.000 Kg.',
        isCorrect: true
      },
      {
        textoRespuesta: '1/3.000 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: '3 Kg.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '47. Si el tubo o las tomas estáticas están taponadas, ¿Qué instrumento o instrumentos estarían afectados?:',
    opciones: [
      {
        textoRespuesta: 'El indicador de velocidad, el altímetro y el indicador de virajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solamente el altímetro y el indicador de virajes darán lecturas erróneas',
        isCorrect: false
      },
      {
        textoRespuesta: 'El indicador de velocidad indicará velocidades excesivamente altas',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro, el Variómetro y el indicador de velocidad, darán lecturas erróneas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '48. La gasolina, si está bien almacenada',
    opciones: [
      {
        textoRespuesta: 'Se conserva indefinidamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con el tiempo se deteriora y forma barniz',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se evapora',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende si es con plomo o sin plomo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. Un instrumento llamado bola es:',
    opciones: [
      {
        textoRespuesta: 'a) Un indicador de posición de alabeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Un indicador de resbale',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Un indicador de derrape',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "b" y "c" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '50. El paso de una hélice es la distancia que la hélice se desplaza hacia delante:',
    opciones: [
      {
        textoRespuesta: 'Cuando empuja al avión aparcado',
        isCorrect: false
      },
      {
        textoRespuesta: 'En cada revolución',
        isCorrect: true
      },
      {
        textoRespuesta: 'En un metro recorrido horizontalmente',
        isCorrect: false
      },
      {
        textoRespuesta: 'A plena potencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. ¿Cómo puedo obtener el QFE de un campo, estando en un avión situado en tierra?',
    opciones: [
      {
        textoRespuesta: 'Poniendo la elevación del campo en el altímetro y leyendo la ventanilla de Kollsman',
        isCorrect: false
      },
      {
        textoRespuesta: 'No es posible obtener el QFE por nosotros mismos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Poniendo 0 pies en las agujas, la lectura de la ventanilla de Kollsman indicará el QFE',
        isCorrect: true
      },
      {
        textoRespuesta: 'No es posible obtener el QFE en tierra, sólo es posible hacerlo en vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. ¿Cuál de estas características de las bujías es correcta?',
    opciones: [
      {
        textoRespuesta: 'a) Tienen todas las mismas dimensiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) No son forzosamente intercambiables, aunque las dimensiones sean las mismas',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Hay bujías para tiempos calurosos y para tiempos fríos',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) La "a" y la "c" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '53. ¿Cómo se verifica que la hélice está bien puesta?',
    opciones: [
      {
        textoRespuesta: 'A ojo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Midiéndola desde el suelo al buje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Midiendo desde un mismo punto la distancia al borde de ataque y de fuga de las palas',
        isCorrect: true
      },
      {
        textoRespuesta: 'No se puede comprobar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. La batería es una fuente de corriente',
    opciones: [
      {
        textoRespuesta: 'Ciclada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alterna',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trifásica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Continua',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '55. ¿Qué instrumento basa su medición en la diferencia de la presión atmosférica exterior y la presión atmosférica estándar?',
    opciones: [
      {
        textoRespuesta: 'Altímetro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Variómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Anemómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguno de ellos',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '56. Un ultraligero peso 150 Kg. en vacío y tiene un factor de carga de + 4 Kg., esto significa que la estructura puede soportar:',
    opciones: [
      {
        textoRespuesta: 'Una fuerza positiva de 600 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una fuerza positiva de 500 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una fuerza negativa de 600 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de ellas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '57. El avión se inclinará más:',
    opciones: [
      {
        textoRespuesta: 'Cuanto más se incline el volante que actúa sobre los alerones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuanto menos se incline el volante que actúa sobre los alerones',
        isCorrect: false
      },
      {
        textoRespuesta: 'El alabeo no depende de los alerones',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión no se inclina nunca en vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '58. Un ultraligero de dos ejes se controla:',
    opciones: [
      {
        textoRespuesta: 'Con el timón de profundidad, el timón de dirección y los alerones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con el timón de profundidad y el timón de dirección',
        isCorrect: true
      },
      {
        textoRespuesta: 'Con los alerones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con los alerones, los flaps y los spoilers',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. Los instrumentos basados en las propiedades giroscópicas son',
    opciones: [
      {
        textoRespuesta: 'Horizonte artificial, natural, indicador de dirección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Horizonte artificial, giro direccional, GPS',
        isCorrect: false
      },
      {
        textoRespuesta: 'Horizonte artificial, giro direccional, bastón y bola',
        isCorrect: true
      },
      {
        textoRespuesta: 'Direccional y brújula',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. Los trenes de aterrizaje se clasifican en patín de cola y triciclo',
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
    titulo: '61. Sobre las magnetos, podemos afirmar que constan de inductor e inducido',
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
    titulo: '62. En caso de que no suba la presión de aceite a valores normales después de la puesta en marcha del motor, se deberá',
    opciones: [
      {
        textoRespuesta: 'Aumentar potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Parar el motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Poner la calefacción del carburador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Comprobar temperatura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. ¿Cuáles son las calidades de tornillería normalmente utilizadas en los ULM?',
    opciones: [
      {
        textoRespuesta: '5.6',
        isCorrect: false
      },
      {
        textoRespuesta: '8/8 AN',
        isCorrect: true
      },
      {
        textoRespuesta: '7.2',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas valen',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '64. El ángulo de incidencia es:',
    opciones: [
      {
        textoRespuesta: 'El ángulo formado por el borde de ataque con el viento relativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo formado por la cuerda alar con el viento relativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo formado por la línea de cuerda alar con el eje longitudinal del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'El ángulo formado por el borde de ataque del ala con el eje lateral',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. Los cables de sustentación instalados por debajo del ala en algunos modelos de ULM, sujetan el ala:',
    opciones: [
      {
        textoRespuesta: 'Contra las cargas positivas de vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Contra las cargas negativas de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Contra las cargas negativas en rodaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando está aparcado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '66. Se deberá despegar cuando la temperatura del motor sea baja...',
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
    titulo: '67. En un carburador, ciertos elementos:',
    opciones: [
      {
        textoRespuesta: 'Mezclan el aceite con la gasolina',
        isCorrect: false
      },
      {
        textoRespuesta: 'Determinan principalmente el régimen del motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Son obligatoriamente reciclables',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '68. La filosofía de los dispositivos hipersustentadores es la de aumentar el ángulo de ataque y obtener así una sustentación adicional.',
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
    titulo: '69. El tacómetro en un motor de paso variable permite conocer el numero de revoluciones de:',
    opciones: [
      {
        textoRespuesta: 'La hélice',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las ruedas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los giróscopos',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cigüeñal del motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. ¿Quién repara una hélice que tiene una melladura?',
    opciones: [
      {
        textoRespuesta: 'El propietario del ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un mecánico especializado',
        isCorrect: true
      },
      {
        textoRespuesta: 'El piloto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. La envergadura de un ala:',
    opciones: [
      {
        textoRespuesta: 'La distancia medida desde la punta del ala hasta el cuerpo del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La superficie total de un ala',
        isCorrect: false
      },
      {
        textoRespuesta: 'La superficie total de ambas alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la distancia medida desde una punta del ala a la otra',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '72. Los spoilers son:',
    opciones: [
      {
        textoRespuesta: 'Unos frenos aerodinámicos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Unas superficie hipersustentadoras',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unos slats de reducidas dimensiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. La máxima distancia entre el extradós y el intradós es:',
    opciones: [
      {
        textoRespuesta: 'La cuerda',
        isCorrect: false
      },
      {
        textoRespuesta: 'El espesor',
        isCorrect: true
      },
      {
        textoRespuesta: 'La curvatura media',
        isCorrect: false
      },
      {
        textoRespuesta: 'La media',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '74. Qué superficies de vuelo o elementos del avión son controlados por la palanca en un ULM de 2 ejes?',
    opciones: [
      {
        textoRespuesta: 'Spoilers y timón de dirección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Spoilers y timón de profundidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Timón de profundidad y de dirección',
        isCorrect: true
      },
      {
        textoRespuesta: 'Timón de dirección y mando de gases',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. El eje vertical es:',
    opciones: [
      {
        textoRespuesta: 'a) La recta que podemos dibujar pasando por el centro de gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) La respuesta "a" y además es perpendicular al plano formado por los ejes lateral y longitudinal',
        isCorrect: true
      },
      {
        textoRespuesta: 'c) Sólo "a"',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. Una lectura demasiado elevada en el termómetro de escape puede indicar:',
    opciones: [
      {
        textoRespuesta: 'Problemas en la refrigeración del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mezcla demasiado pobre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las anteriores son correctas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las anteriores son falsas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '77. En caso de que salte un fusible, se aconseja reasentarlo',
    opciones: [
      {
        textoRespuesta: 'Las veces que se quiera',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se puede reasentar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hasta que se quede dentro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una o dos veces',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '78. La causa principal de contaminación del combustible es',
    opciones: [
      {
        textoRespuesta: 'Agua en los depósitos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hielo laminar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mezcla con aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'Filtro en malas condiciones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. ¿Cómo se llama el ángulo x de la figura?',
    opciones: [
      {
        textoRespuesta: 'Ángulo diedro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ángulo ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo alabeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo aerodinámico',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. El ángulo de paso de la hélice de velocidad constante:',
    opciones: [
      {
        textoRespuesta: 'Sólo varía con las R.P.M. del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta al aumentar la velocidad verdadera',
        isCorrect: true
      },
      {
        textoRespuesta: 'No depende de la velocidad verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye al aumentar la velocidad verdadera',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '81. La viscosidad del aceite depende de:',
    opciones: [
      {
        textoRespuesta: 'Presión externa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión de aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cantidad de aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura del aceite',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '82. El ascenso continuo a la velocidad de mejor régimen ascensional puede producirse en motores poco refrigerados:',
    opciones: [
      {
        textoRespuesta: 'Caída de R.P.M.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Formación de hielo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trepidaciones del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Calentamiento del motor',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '83. El error de lectura que puede dar una brújula debido a los posibles campos magnéticos cercanos a ella se denomina:',
    opciones: [
      {
        textoRespuesta: 'Desviación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Deriva magnética',
        isCorrect: false
      },
      {
        textoRespuesta: 'Variación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Declinación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. ¿Cómo logramos el mejor rendimiento en un motor de explosión?',
    opciones: [
      {
        textoRespuesta: 'Aire frío y seco a alta presión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aire cálido y húmedo a baja presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aire frío y húmedo a alta presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aire cálido y seco a alta presión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '85. El instrumento que basa sus mediciones en la diferencia de presión total y estática es el:',
    opciones: [
      {
        textoRespuesta: 'Altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Termómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Anemómetro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Variómetro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. Si en un amperímetro la aguja está a la derecha del cero, significa que',
    opciones: [
      {
        textoRespuesta: 'La batería se está descargando',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el voltaje es de 24 v',
        isCorrect: false
      },
      {
        textoRespuesta: 'La batería está cargando',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '87. Si en vuelo debemos de actualizar el QNH ¿es una buena práctica obtenerlo, por ejemplo, calando en el altímetro la altitud que marque un GPS?',
    opciones: [
      {
        textoRespuesta: 'Siempre que el ULM lleve un GPS certificado por la FAA',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, ya que el GPS es más exacto que el altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, aún siendo el GPS menos exacto que el altímetro, es la forma más práctica de hacerlo',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No. Debo obtener un QNH lo más aproximado posible a la zona en la que estoy volando, pues así llevaré el mismo error de altitud que las demás aeronaves',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '88. ¿Cuál es el número de zonas independientes a efectos de rasgaduras que deberá tener cada semiplano o elemento de control de un ULM?',
    opciones: [
      {
        textoRespuesta: 'No hay número establecido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una sola zona independiente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dos zonas independizadas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tres zonas independizadas como mínimo',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '89. El instrumento que mide la presión es el:',
    opciones: [
      {
        textoRespuesta: 'Pluviómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Anemómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Termómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Barómetro',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '90. Los cuatro tiempos del motor de explosión son: admisión, compresión, explosión y',
    opciones: [
      {
        textoRespuesta: 'Tracción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Avance',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reacción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Escape',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '91. Que es el "TRIM"',
    opciones: [
      {
        textoRespuesta: 'Dispositivo que genera mayor sustentación en la aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sistema de radioayudas para la navegación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Elemento de ayuda sobre la cadena de mando para conseguir un menor esfuerzo sobre los mandos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Freno de rotor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. Un motor atmosférico, En un ascenso con RPM constante y gases en una posición constante.',
    opciones: [
      {
        textoRespuesta: 'Va aumentando la presión de admisión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Va disminuyendo las Rpm´s',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permanecen constantes las Rpm y la presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Va disminuyendo la presión de admisión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. ¿Qué es el horizonte artificial?',
    opciones: [
      {
        textoRespuesta: 'Un indicador de pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un indicador de la altura de las montañas en el horizonte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un indicador de la posición del avión respecto al horizonte',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un artificio eléctrico para saber si vamos por mar o tierra',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. La refrigeración en los motores de los ultraligeros es del tipo:',
    opciones: [
      {
        textoRespuesta: 'Refrigeración por aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Refrigeración por agua y por aire',
        isCorrect: true
      },
      {
        textoRespuesta: 'Refrigeración por agua',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. El sistema de engrase empleado en los motores de dos tiempos para evitar calentamiento y desgaste es el de:',
    opciones: [
      {
        textoRespuesta: 'Engrase por salpicadura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Circuito cerrado de agua con refrigerador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Engrase por mezcla',
        isCorrect: true
      },
      {
        textoRespuesta: 'Engrase manual',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. Si el C.G. esta por detrás del centro de presiones el avión tenderá a ...',
    opciones: [
      {
        textoRespuesta: 'Alabear',
        isCorrect: false
      },
      {
        textoRespuesta: 'Encabritar descontroladamente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Girar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Guiñar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. Si un elemento se ha sometido a un esfuerzo por encima del límite elástico',
    opciones: [
      {
        textoRespuesta: 'a) Se producen deformaciones permanentes',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) No importa para seguir volando',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Debe ser cambiado',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) La "a" y la "c" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '98. Se denomina empenaje:',
    opciones: [
      {
        textoRespuesta: 'Al conjunto de cola horizontal y vertical',
        isCorrect: true
      },
      {
        textoRespuesta: 'Al tubo que une el motor con la cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al conjunto de tubos que configuran el ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la tela empleada en el velamen del ULM',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '99. ¿Cómo es el rodaje de un motor?',
    opciones: [
      {
        textoRespuesta: 'No es imprescindible para los motores que usan los ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se realiza de idéntica manera en todos los motores',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solamente se realiza en los motores de 2 tiempos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es indispensable y debe ser realizado según las recomendaciones del fabricante',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '100. ¿Cuál es el tipo normal de tejido que constituye el velamen de los ULM?',
    opciones: [
      {
        textoRespuesta: 'Fibra de Kevlar-45',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fibra de carbono',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dacrón',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tela de seda de calidad aeronáutica',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
