const preguntas = [
  {
    titulo: '1. ¿Qué tipo de motor llevan la mayoría de los ULM?',
    opciones: [
      {
        textoRespuesta: 'Inyección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Atmosférico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Diesel',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sobrealimentado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. La línea formada por el comienzo de todos los perfiles que constituyen el ala es:',
    opciones: [
      {
        textoRespuesta: 'El borde de salida',
        isCorrect: false
      },
      {
        textoRespuesta: 'El intradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'El borde de ataque',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3. Los instrumentos basados en la medición de presión son anemómetro, altímetro y',
    opciones: [
      {
        textoRespuesta: 'Brújula',
        isCorrect: false
      },
      {
        textoRespuesta: 'Horizonte artificial',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicador de virajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Variómetro',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '4. ¿Qué pérdida aproximada de potencia experimenta un motor atmosférico, sin turbocompresor, por cada mil pies de altitud?',
    opciones: [
      {
        textoRespuesta: '0,03',
        isCorrect: true
      },
      {
        textoRespuesta: '0,2',
        isCorrect: false
      },
      {
        textoRespuesta: '0,5',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. ¿Qué indicadores de resbale y derrape pueden llevar los ULM?',
    opciones: [
      {
        textoRespuesta: 'a) Una bola en tubo de cristal lleno de aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Un trozo de cuerda',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Un anemocinemógrafo',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) Sólo "a" y "b" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '6. Dejar el avión con los depósitos parcialmente llenos durante un largo periodo de tiempo puede ser la causa grave de contaminación, por formación de agua',
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
    titulo: '7. La torsión del ala consiste en dar diferentes ángulos de ataque a todos los perfiles que componen el ala.',
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
    titulo: '8. A qué instrumento proporciona presión dinámica el tubo pitot',
    opciones: [
      {
        textoRespuesta: 'Altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Variómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicador de virajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9. Para ajustar la relación de mezcla en un motor alternativo al aumentar la altitud, habrá que:',
    opciones: [
      {
        textoRespuesta:
          'Aumentar la cantidad de combustible presente en la mezcla para compensar la reducción de la presión y de la densidad del aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar la relación de la mezcla',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducir la cantidad de combustible presente en la mezcla para compensar el aumento en la densidad del aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducir el flujo de combustible para compensar la reducción de la densidad del aire',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10. A la mayor medida de un avión tomada perpendicularmente a la dirección de la marcha, se llama:',
    opciones: [
      {
        textoRespuesta: 'Cuerda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Envergadura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Alargadora',
        isCorrect: false
      },
      {
        textoRespuesta: 'Longitud',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. ¿Cuál podría ser una maniobra con factor de carga n = 2?',
    opciones: [
      {
        textoRespuesta: 'En régimen mantenido de ascenso de 500 fpm',
        isCorrect: false
      },
      {
        textoRespuesta: 'En vuelo recto y nivelado',
        isCorrect: false
      },
      {
        textoRespuesta: 'En régimen mantenido de descenso de 500 fpm',
        isCorrect: false
      },
      {
        textoRespuesta: 'En un viraje con un alabeo de 60º',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12. ¿Cuál de estas relaciones es la correcta?',
    opciones: [
      {
        textoRespuesta: 'Un motor poco revolucionado necesita bujías más frías',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un motor muy revolucionado necesita bujías más frías',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un motor poco revolucionado necesita bujías más calientes',
        isCorrect: false
      },
      {
        textoRespuesta: 'No hay relación alguna entre revoluciones y bujías',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. El elemento encargado de generar la corriente eléctrica en el motor del ultraligero es:',
    opciones: [
      {
        textoRespuesta: 'La bujía',
        isCorrect: false
      },
      {
        textoRespuesta: 'La magneto',
        isCorrect: true
      },
      {
        textoRespuesta: 'La bobina',
        isCorrect: false
      },
      {
        textoRespuesta: 'El platino',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. ¿Qué es la envergadura de un ala?',
    opciones: [
      {
        textoRespuesta: 'La superficie en metros cuadrados',
        isCorrect: false
      },
      {
        textoRespuesta: 'La proyección en planta de un semi-ala',
        isCorrect: false
      },
      {
        textoRespuesta: 'La distancia de punta a punta de ala, independientemente de la forma que tenga ésta',
        isCorrect: true
      },
      {
        textoRespuesta: 'El alzado de un semi-ala',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '15. En el caso de no disponer de baterías, el motor no podría ponerse en marcha, ya que las magnetos no producirían encendido.',
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
    titulo: '16. La parte de la estructura del ultraligero que aloja al piloto se denomina:',
    opciones: [
      {
        textoRespuesta: 'Empenaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tren de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bancada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fuselaje',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '17. Los alternadores producen corriente eléctrica',
    opciones: [
      {
        textoRespuesta: 'Alterna',
        isCorrect: true
      },
      {
        textoRespuesta: 'Contínua',
        isCorrect: false
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
    titulo: '18. Sobre las magnetos podemos afirmar que obedecen a principios de inducción electromagnética',
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
    titulo: '19. En caso de no disponer de gasolina del número de octanos necesario, se deberá usar otra de un octanaje',
    opciones: [
      {
        textoRespuesta: 'Inferior',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se puede usar ninguna',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es indiferente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Superior',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '20. El anemómetro mide',
    opciones: [
      {
        textoRespuesta: 'La velocidad pura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Diferencia entre presión estática y dinámica en reposo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Diferencia de presión de impacto y presión estática',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. Si tenemos una declinación Oeste (W), el Norte magnético se encontrará:',
    opciones: [
      {
        textoRespuesta: 'En España sólo existe declinación Este (E)',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la derecha del geográfico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Coincidirá con el geográfico',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la izquierda del geográfico',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '22. La brújula presenta errores que tienen como origen la inclinación y aceleración del avión.',
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
    titulo: '23. El medidor de temperatura de culata de cilindros toma su información:',
    opciones: [
      {
        textoRespuesta: 'Del cilindro más frío',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del cilindro más caliente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hace la media de las temperaturas de los cilindros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indiferentemente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. La aguja del anemómetro refleja siempre la velocidad de las partículas de aire que rodean el avión',
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
      '25. El sistema de escape en un motor de 2 tiempos tiene un gran efecto sobre las características de potencia, porque, además de actuar como válvula de escape, lo hace como:',
    opciones: [
      {
        textoRespuesta: 'Refrigerador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Compensador de la presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Difusor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sobrealimentador',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '26. El compás es un instrumento que:',
    opciones: [
      {
        textoRespuesta: 'Indica la orientación del eje longitudinal del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Indica el norte',
        isCorrect: false
      },
      {
        textoRespuesta: 'No funciona con viento en calma',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. El instrumento que obtiene la presión total por el llamado tubo pitot es el:',
    opciones: [
      {
        textoRespuesta: 'Variómetro',
        isCorrect: false
      },
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
      }
    ]
  },
  {
    titulo: '28. El error de altímetro debido a las variaciones de la presión estática cerca de la fuente se denomina:',
    opciones: [
      {
        textoRespuesta: 'Error de instrumento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Efecto de histéresis',
        isCorrect: false
      },
      {
        textoRespuesta: 'Error de variómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Error de posición',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '29. La potencia está relacionada con el trabajo y',
    opciones: [
      {
        textoRespuesta: 'El consumo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'El tiempo',
        isCorrect: true
      },
      {
        textoRespuesta: 'La altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. Las superficies principales de mando son:',
    opciones: [
      {
        textoRespuesta: 'Compensadores, flaps, slats y spoilers o aerofrenos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alerones, timón de profundidad y compensadores',
        isCorrect: false
      },
      {
        textoRespuesta: 'Timón de profundidad, timón de dirección y compensadores',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alerones, timón de dirección y timón de profundidad',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '31. El indicador de temperatura de aceite proporciona información del aceite:',
    opciones: [
      {
        textoRespuesta: 'A la salida del motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'A la salida del depósito',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el filtro de aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la entrada en el motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. Los flaps pueden aumentar los coeficientes máximos de sustentación y resistencia en despegues y aterrizajes.',
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
    titulo: '33. Se dice que una hélice esta en bandera cuando las palas:',
    opciones: [
      {
        textoRespuesta: 'Está pintada con la bandera nacional',
        isCorrect: false
      },
      {
        textoRespuesta: 'Forman un ángulo de ataque de 90 grados',
        isCorrect: true
      },
      {
        textoRespuesta: 'Está parada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está reducida la potencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. El funcionamiento correcto de las magnetos se comprobará',
    opciones: [
      {
        textoRespuesta: 'Inmediatamente antes de arrancar',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la revisión de 50 horas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antes del despegue',
        isCorrect: true
      },
      {
        textoRespuesta: 'En crucero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. Si a un perfil alar se le aumenta el ángulo de ataque, el espesor de la capa límite disminuye.',
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
    titulo: '36. La calefacción del carburador debe ponerse en aproximación con tiempo frío',
    opciones: [
      {
        textoRespuesta: 'Al iniciar el viraje a base',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al aterrizar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Después de cortar el motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antes de cortar el motor',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '37. El arco verde en un anemómetro indica el margen de velocidades:',
    opciones: [
      {
        textoRespuesta: 'Normal de operaciones con flaps extendidos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Normal de operación',
        isCorrect: true
      },
      {
        textoRespuesta: 'De precaución',
        isCorrect: false
      },
      {
        textoRespuesta: 'Máximas operativas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. El ULM con una rueda en la cola tiene un tren tipo:',
    opciones: [
      {
        textoRespuesta: 'Triciclo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Convencional',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '39. El variómetro:',
    opciones: [
      {
        textoRespuesta: 'a) Nos indica la velocidad vertical del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Nos indica los ángulos de descenso o ascenso del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Nos mide el régimen de ascenso o descenso del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) La "a" y la "c" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '40. La reductora:',
    opciones: [
      {
        textoRespuesta: 'Es obligatoria en todos los motores',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Existen en la mayoría de los motores y permite a la hélice tener un régimen de rotación inferior al régimen del motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Solamente funciona con correas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. ¿Son admisibles desgarros en el dacrón?',
    opciones: [
      {
        textoRespuesta: 'No. Pueden ser muy peligrosos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sí, si están situados cerca de los bordes marginales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, si no son muy grandes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unas veces sí y otras veces no',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. El mecanismo de reducción de la hélice sirve para',
    opciones: [
      {
        textoRespuesta: 'Conseguir una velocidad constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ponerla en bandera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Evitar que sus puntas lleguen a la velocidad del sonido',
        isCorrect: true
      },
      {
        textoRespuesta: 'Reducir la potencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. Entre los dispositivos hipersustentadores se encuentran:',
    opciones: [
      {
        textoRespuesta: 'a) Spoilers',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Flaps',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Slats',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "b" y "c"',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '44. Identifique las partes del perfil de la figura: letra A',
    opciones: [
      {
        textoRespuesta: 'Borde de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Borde de salida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Curvatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Flaps',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. A la lectura del altímetro cuando hemos introducido en la ventanilla la presión estándar la llamamos',
    opciones: [
      {
        textoRespuesta: 'Altitud calibrada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud de densidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud real',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud de presión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '46. Identifique las partes del perfil de la figura: letra I',
    opciones: [
      {
        textoRespuesta: 'Curvatura media',
        isCorrect: false
      },
      {
        textoRespuesta: 'Espesor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro aerodinámico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Punto de fuga',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '47. La torsión del ala produce:',
    opciones: [
      {
        textoRespuesta: 'Mayor estabilidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor velocidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. Si la fuente estática de un altímetro se bloquea durante el descenso, el instrumento:',
    opciones: [
      {
        textoRespuesta: 'Continuará indicando la lectura correspondiente al momento en el que se produjo el bloqueo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Gradualmente indicará cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicará una altitud equivalente al ajuste de la escala secundaria en milibares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicará una lectura inferior a la real',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. El número de octano de las gasolinas indica:',
    opciones: [
      {
        textoRespuesta: 'Propiedades volátiles',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su poder antidetonante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Conductividad eléctrica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su poder de compresión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. El lubricante:',
    opciones: [
      {
        textoRespuesta: 'Calienta el motor debido a las fricciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reduce las fricciones y rozamientos',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '51. El ángulo de ataque de las palas de una hélice de paso fijo, si mantenemos potencia constante, al incrementar la velocidad verdadera:',
    opciones: [
      {
        textoRespuesta: 'Aumenta al aumentar la velocidad verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'No depende de la velocidad verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye al aumentar la velocidad verdadera',
        isCorrect: true
      },
      {
        textoRespuesta: 'Solo varía con las RPM del motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. En caso de fallo del alternador, la batería continuará alimentando al sistema eléctrico',
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
      '53. Una buena inspección de bujías puede descubrir, entre otras cosas: condiciones de mezcla, presencia o ausencia de preignición o detonación, calidad del combustible etc.',
    opciones: [
      {
        textoRespuesta: 'Verdadero ',
        isCorrect: true
      },
      {
        textoRespuesta: 'Falso ',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solo las dos primeras cosas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solo la calidad del combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. ¿Qué es el estrechamiento de un ala?',
    opciones: [
      {
        textoRespuesta: 'Las alas no tienen estrechamiento solo los perfiles',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cociente de dividir la cuerda que hay en el perfil del encastre con la de la punta del ala',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es el cociente entre la envergadura y la superficie alar',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cociente entre la superficie alar y la envergadura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '55. Los instrumentos basados en la presión de aire son',
    opciones: [
      {
        textoRespuesta: 'Todos los instrumentos están presurizados',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicador de presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altímetro, anemómetro y horizonte artificial',
        isCorrect: false
      },
      {
        textoRespuesta: 'Anemómetro, altímetro, variómetro',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '56. Cuando un altímetro está calado con QFE, ¿Qué marca?',
    opciones: [
      {
        textoRespuesta: 'Altura sobre el terreno',
        isCorrect: true
      },
      {
        textoRespuesta: 'Nivel de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud sobre el nivel medio del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nivel de transición',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '57. En caso de fallo de motor en vuelo, las palas de una hélice de velocidad constante que impulsan a un monomotor que carezca de sistema de abanderamiento:',
    opciones: [
      {
        textoRespuesta: 'Se desplazarán a la posición de máximo paso por efecto de la fuerza aerodinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se desplazarán a una determinada posición de paso, según las R.P.M. del molinete',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se desplazarán a la posición de mínimo paso, por la acción de la fuerza centrífuga',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se desplazarán a la posición de paso bajo por efecto de la presión oleoneumática generada por el molinete',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '58. Se llama centro aerodinámico',
    opciones: [
      {
        textoRespuesta: 'Es el punto donde se considera aplicada la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta:
          'b)\tEl centro donde se reúnen ficticiamente la acción de todas las fuerzas que actúan sobre el estradós y el intradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ningunas de ellas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ambas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '59. La línea formada por el final de todos los perfiles de que consta el ala es:',
    opciones: [
      {
        textoRespuesta: 'El extradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'El intradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'El borde de salida',
        isCorrect: true
      },
      {
        textoRespuesta: 'La cuerda del perfil',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. El horizonte artificial, direccional e indicador de virajes están basados en:',
    opciones: [
      {
        textoRespuesta: 'Mediciones de presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Propiedades giroscópicas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mediciones de velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Electrónica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '61. Podemos encontrarnos con formación de hielo en temperaturas comprendidas entre',
    opciones: [
      {
        textoRespuesta: '15 y 15',
        isCorrect: false
      },
      {
        textoRespuesta: '0 y 30',
        isCorrect: false
      },
      {
        textoRespuesta: '10 y 30',
        isCorrect: true
      },
      {
        textoRespuesta: '10 y 20',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '62. Podemos definir envergadura como la distancia media entre los perfiles aerodinámicos externos',
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
    titulo: '63. El octanaje del combustible y la compresión de un motor alternativo mantienen una de las siguientes relaciones:',
    opciones: [
      {
        textoRespuesta: 'A mayor octanaje, mayor relación de compresión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor octanaje menor relación de compresión',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor octanaje de la gasolina que usemos más potencia nos dará nuestro motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'A menor octanaje mayor relación de compresión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '64. ¿Qué superficies móviles controlan los pedales en un ULM de 3 ejes?',
    opciones: [
      {
        textoRespuesta: 'Timón de dirección',
        isCorrect: true
      },
      {
        textoRespuesta: 'Timón de profundidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Spoilers',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alerones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. ¿Un avión con hélice de paso variable como debe utilizarse al aumentar la potencia?',
    opciones: [
      {
        textoRespuesta: 'Primero se ajusta la admisión y después el paso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Primero se ajusta el paso y después la presión de admisión',
        isCorrect: true
      },
      {
        textoRespuesta: 'El orden es indiferente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un avión de paso variable no tiene indicador de presión de admisión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '66. La cuerda es:',
    opciones: [
      {
        textoRespuesta: 'La línea recta que une el borde de ataque con el borde de salida',
        isCorrect: true
      },
      {
        textoRespuesta: 'La línea que une el intradós y el extradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'La línea formada por el final de todos los perfiles que constituyen el ala',
        isCorrect: false
      },
      {
        textoRespuesta: 'La línea formada por el comienzo de todos los perfiles que constituyen el ala',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. El enemigo público número 1 en la atmósfera, según considera hoy en día la meteorología aeronáutica es',
    opciones: [
      {
        textoRespuesta: 'Engelamientos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Descargas eléctricas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Granizo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Turbulencia',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '68. La parte inferior de un perfil alar, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Extradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'Intradós',
        isCorrect: true
      },
      {
        textoRespuesta: 'Curvatura media',
        isCorrect: false
      },
      {
        textoRespuesta: 'Borde de fuga',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '69. Al cambiar de potencia en motores equipados con hélices de velocidad constante, la sobrecarga del motor se evita mediante:',
    opciones: [
      {
        textoRespuesta: 'Reduciendo las RPM antes de reducir la presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ajustando el flujo de combustible antes de ajustar la presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentando de RPM antes de aumentar la presión de admisión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentando la presión de admisión antes de aumentar las RPM',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. El desplazamiento sobre el eje longitudinal se llama:',
    opciones: [
      {
        textoRespuesta: 'Guiñada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alabeo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'No tiene nombre',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. Si tenemos tapada la toma estática de los instrumentos, el instrumento que nos dará marcaciones erróneas, es:',
    opciones: [
      {
        textoRespuesta: 'Variómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Anemómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los tres darán marcaciones erróneas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '72. El rendimiento aerodinámico de un ala es:',
    opciones: [
      {
        textoRespuesta: 'La relación entre la sustentación y la resistencia ofrecida al avance del ala',
        isCorrect: true
      },
      {
        textoRespuesta: 'La relación entre el peso y el avance del ala',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación entre la cuerda y la envergadura del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. Los mandos primarios que provocan desplazamientos sobre el eje longitudinal del avión se denominan:',
    opciones: [
      {
        textoRespuesta: 'Alerones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Timones de profundidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Timón de dirección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dispositivos hipersustentadores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '74. El arco blanco de un anemómetro, indica el margen de velocidad:',
    opciones: [
      {
        textoRespuesta: 'Normal de operación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Normal de ascenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Normal de operación con flaps extendidos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mínimas de control',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. ¿Cómo se llama el elemento que absorbe el esfuerzo del aterrizaje?',
    opciones: [
      {
        textoRespuesta: 'Rueda de morro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rueda de cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tren de aterrizaje principal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mástil',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. Si estando en vuelo, el sistema eléctrico del avión falla por completo, el motor:',
    opciones: [
      {
        textoRespuesta: 'Seguirá funcionando normalmente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se parará',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de la altura de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Funcionara solo una magneto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '77. Cuando volamos en altitudes, debemos llevar un correcto calaje de altímetro:',
    opciones: [
      {
        textoRespuesta: 'Con QNH calado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Con QFE calado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con 1013 Mb calado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con QNN calado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. Los mandos primarios de un avión son:',
    opciones: [
      {
        textoRespuesta: 'Flaps, alerones y compensadores',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alerones, timón de profundidad y timón de dirección',
        isCorrect: true
      },
      {
        textoRespuesta: 'Alerones y tren de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Flaps, compensadores y tren de aterrizaje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. ¿Qué significa un factor de carga n = ­ 1?',
    opciones: [
      {
        textoRespuesta: 'La potencia de los motores más la fuerza de inercia en la maniobra es mayor que el peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'No existe factor de carga n = 1',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia más la fuerza de inercia en la maniobra es mayor que el peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la sustentación es igual al peso pero en sentido contrario',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '80. Muchas cosas puede alterar el rendimiento de una hélice, reducir el empuje, etc., pero de las que se relacionan a continuación, ¿cuales, además de las señaladas, alteran el equilibrio de la hélice dando lugar a vibraciones?',
    opciones: [
      {
        textoRespuesta: 'Suciedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Impactos de insectos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Glóbulos de aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'Muescas y grietas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '81. El engrase usado en motores de dos tiempos para prever su calentamiento y desgaste, es el engrase por mezcla.',
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
    titulo: '82. La primera indicación de que existe hielo en el carburador en un motor de hélice de paso fijo es',
    opciones: [
      {
        textoRespuesta: 'Una caída en la presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una caída en las r.p.m.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una aceleración del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aumento de la carga alar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. Normalmente se usan dos sistemas de encendido en los motores de aviación',
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
    titulo: '84. ¿Cuáles son los instrumentos del motor?',
    opciones: [
      {
        textoRespuesta: 'El tacómetro, los indicadores de temperatura y presión de aceite, y los indicadores de combustible',
        isCorrect: true
      },
      {
        textoRespuesta: 'El anemómetro el primer y la mezcla',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las bujías, la batería, los gases y los fusibles',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '85. ¿Qué nos indica la brújula?',
    opciones: [
      {
        textoRespuesta: 'Rumbos magnéticos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Rumbos geográficos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Direcciones de los meridianos y par',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. ¿Qué indica el tacómetro?',
    opciones: [
      {
        textoRespuesta: 'Nº de vueltas por minuto de la hélice',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las revoluciones por minuto del motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'La cilindrada del motor a distintas velocidades',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las revoluciones del motor medidas sobre el embrague',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. Un instrumento llamado bastón es:',
    opciones: [
      {
        textoRespuesta: 'Un indicador de resbale',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un indicador de posición de cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un coordinador de giros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un indicador de viraje',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '88. La causa principal de contaminación de combustible suele ser',
    opciones: [
      {
        textoRespuesta: 'Bajo octanaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Degradación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Evaporación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Condensación de agua en los depósitos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '89. Que instrumento basa su medición en la diferencia de presiones total y estática:',
    opciones: [
      {
        textoRespuesta: 'Variómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Anemómetro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Brújula',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. El motor desarrolla mayor potencia:',
    opciones: [
      {
        textoRespuesta: 'En un día de verano a nivel del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'En un día de verano en la montaña',
        isCorrect: false
      },
      {
        textoRespuesta: 'En un día de invierno a nivel del mar',
        isCorrect: true
      },
      {
        textoRespuesta: 'En un día de invierno en la montaña',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. El ajuste de la riqueza de la mezcla',
    opciones: [
      {
        textoRespuesta: 'No afecta a las bujías',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permite únicamente un ahorro de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es necesario para obtener la máxima potencia del motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depende del porcentaje de aceite de la misma',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. La recta que podemos dibujar de morro a cola del avión es:',
    opciones: [
      {
        textoRespuesta: 'El eje longitudinal',
        isCorrect: true
      },
      {
        textoRespuesta: 'El eje lateral',
        isCorrect: false
      },
      {
        textoRespuesta: 'El eje transversal',
        isCorrect: false
      },
      {
        textoRespuesta: 'El eje vertical',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. Para que se forme hielo en el carburador',
    opciones: [
      {
        textoRespuesta: 'La temperatura exterior ha de estar por debajo de los 0°c',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura exterior ha de estar por debajo de los ¬5° c',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Con un alto nivel de humedad en el aire puede formarse hielo aun con temperatura exterior superior a los 15°c',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La humedad del aire no tiene nada que ver con la formación de hielo; solamente depende de la temperatura exterior',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. Identifique las partes del perfil de la figura: letra E',
    opciones: [
      {
        textoRespuesta: 'Intradós',
        isCorrect: true
      },
      {
        textoRespuesta: 'Extradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'Curvatura menor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perfil',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. La comprobación del aceite debe hacerse',
    opciones: [
      {
        textoRespuesta: 'Cada 50 horas',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la revisión general',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antes de cada vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando lo indique el CDA',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. ¿En qué puntos de la estructura de un ULM, se utilizan tuercas autoblocantes?',
    opciones: [
      {
        textoRespuesta: 'En el casco del piloto',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la sujeción del anemómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'cEn el depósito de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'En zonas donde no es necesario su desmontaje para transporte',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '97. La velocidad IAS será mayor que la TAS, si:',
    opciones: [
      {
        textoRespuesta: 'Tenemos viento de cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tenemos viento en cara',
        isCorrect: false
      },
      {
        textoRespuesta: 'La densidad del aire es mayor que la de la atmósfera estándar',
        isCorrect: true
      },
      {
        textoRespuesta: 'La densidad del aire es menor que la de la atmósfera estándar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. La línea imaginaria que une las puntas de las alas se denomina:',
    opciones: [
      {
        textoRespuesta: 'Eje longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Eje lateral',
        isCorrect: true
      },
      {
        textoRespuesta: 'Eje vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'Eje de simetría',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '99. Se dice que un motor tiene mezcla pobre cuando:',
    opciones: [
      {
        textoRespuesta: 'La parte de aire es superior a la normal',
        isCorrect: true
      },
      {
        textoRespuesta: 'El combustible tiene mayor octanaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'La parte de combustible es superior a la normal',
        isCorrect: false
      },
      {
        textoRespuesta: 'El combustible tiene menor octanaje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. Un día en que se cumplan las condiciones de atmósfera estándar (ISA):',
    opciones: [
      {
        textoRespuesta: 'Habrá 1023 Mb de presión y 15ºC de temperatura a nivel del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'El QNH y el QFE serán iguales siempre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Habrá 1023 Mb de presión a nivel del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los calajes de altímetro QNH y QNE serán todos 1013,2 Mb',
        isCorrect: true
      }
    ]
  },
  {
    titulo: "101. ¿Qué es una 'línea de parada' del elemento sustentador o de control de un ULM?",
    opciones: [
      {
        textoRespuesta: 'Los frenos aerodinámicos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los frenos de ruedas',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los refuerzos o costuras situados en las telas de que están construidos tales elementos y que impiden la progresión de las posibles rasgaduras que se originen',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La curva del borde de ataque que para el impacto de los insectos u otros posibles obstáculos (aves, grava, etc.) que puedan chocar con un ULM',
        isCorrect: false
      }
    ]
  }
];
export default preguntas;
