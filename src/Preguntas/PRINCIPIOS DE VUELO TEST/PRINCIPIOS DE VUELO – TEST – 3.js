const preguntas = [
  {
    titulo: '1. El ángulo de ataque al que un avión entra en pérdida',
    opciones: [
      {
        textoRespuesta: 'No depende del peso del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Varía con la altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cambia con el peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta si el CG se mueve hacia adelante',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '2. Un centro de gravedad muy adelantado, excediendo los límites especificados por el fabricante para la carga y centrado, ¿es muy peligroso?:',
    opciones: [
      {
        textoRespuesta: 'a) Sí, porque necesitaremos mucha más longitud de pista para despegar',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Sí, porque deja sin suficiente efectividad control de profundidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Si, las respuestas "b" y "c" son correctas',
        isCorrect: true
      },
      {
        textoRespuesta:
          'd) No, mientras más adelantado se encuentre más estable será el avión. Sólo perderá prestaciones como velocidad punta por ejemplo, pero eso no hace peligroso volarlo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3. El efecto del movimiento de los alerones es alabeo',
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
    titulo: '4. El centro de presiones puede desplazarse durante el vuelo',
    opciones: [
      {
        textoRespuesta: 'Es inmóvil, si se desplazara el avión sería ingobernable',
        isCorrect: false
      },
      {
        textoRespuesta: 'En ningún caso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si, se desplaza',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depende del avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. ¿Cómo se llama el punto del avión por el que pasan los tres ejes de giro sobre los que se desplaza?',
    opciones: [
      {
        textoRespuesta: 'Centro de balance',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro de gravedad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Centro de Presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro aerodinámico',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6. Según la figura, la letra 'C':",
    opciones: [
      {
        textoRespuesta: 'Diagonal del perfil',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuerda',
        isCorrect: true
      },
      {
        textoRespuesta: 'Anchura máxima',
        isCorrect: false
      },
      {
        textoRespuesta: 'Espesor el ala',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7. El peso del avión se contrarresta con una fuerza llamada:',
    opciones: [
      {
        textoRespuesta: 'Velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tracción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. La dirección de vuelo presenta la misma dirección que el viento relativo.',
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
    titulo: '9. Se denomina capa límite a:',
    opciones: [
      {
        textoRespuesta: 'La capa de aire mínima para la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'La capa máxima de sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'El flujo de aire en los extremos de las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La capa de aire adyacente a una superficie sobre la que circula el aire',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10. En el diseño de un ULM, la pérdida es mejor que...',
    opciones: [
      {
        textoRespuesta: 'Se manifieste de forma brusca',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se manifieste mucho después de pasar el ángulo de ataque crítico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se manifieste de manera imperceptible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se manifieste de forma progresiva',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11. Cuando el avión esta en vuelo recto y nivelado, la sustentación tiene la misma magnitud que la fuerza:',
    opciones: [
      {
        textoRespuesta: 'De resistencia estructural',
        isCorrect: false
      },
      {
        textoRespuesta: 'De empuje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centrípeta',
        isCorrect: false
      },
      {
        textoRespuesta: 'De gravedad',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12. En un avión en vuelo recto y nivelado, a velocidad constante:',
    opciones: [
      {
        textoRespuesta: 'a) La tracción del motor es superior a la resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) La sustentación es superior al peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Las dos anteriores son falsas',
        isCorrect: true
      },
      {
        textoRespuesta: 'd) La "a" y la "b" son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. ¿Cuándo puede producirse una pérdida?',
    opciones: [
      {
        textoRespuesta: 'Sólo a muy baja velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo a muy alta velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo durante el alabeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'En cualquier actitud del avión',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '14. El factor de carga se define como la relación que existe entre la fuerza total sobre el avión y la resistencia inducida',
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
    titulo: '15. Si un U.L.M. pesa 150 Kg. al despegue y dispone de una superficie alar de 15 m2, ¿Cuál será su carga alar?',
    opciones: [
      {
        textoRespuesta: '150 Kg./m2',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      },
      {
        textoRespuesta: '15 Kg./m2',
        isCorrect: false
      },
      {
        textoRespuesta: '10 Kg./m2',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '16. El efecto Venturi dice en base al teorema de Bernoulli, que para una partícula de aire, en un estrechamiento',
    opciones: [
      {
        textoRespuesta: 'Disminuyen ambas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentan ambas',
        isCorrect: false
      },
      {
        textoRespuesta: 'V aumenta y P aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad aumenta y Presión disminuye',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '17. Respecto a los mandos del ULM, podemos afirmar que:',
    opciones: [
      {
        textoRespuesta: 'Que tirando de palanca, el timón de profundidad baja',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que para incrementar la velocidad de un avión en vuelo recto y nivelado, tenemos que aplicar potencia exclusivamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con el timón de profundidad se controla la actitud de morro del avión y por extensión el ángulo de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. El centro de gravedad y el centro de presiones en un U.L.M. son lo mismo.',
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
    titulo: '19. Los virajes a poca velocidad',
    opciones: [
      {
        textoRespuesta: 'Deben hacerse con mucha inclinación, para aumentar el factor de carga',
        isCorrect: false
      },
      {
        textoRespuesta: 'No aumentan el factor de carga, al no existir fuerza centrífuga',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deben hacerse con la inclinación que sea necesaria dependiendo de la urgencia que tengamos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deben hacerse con poca inclinación, para no incrementar el factor de carga',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '20. El timón de profundidad permite',
    opciones: [
      {
        textoRespuesta: 'Mayor sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Más resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Picar y encabritar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Alabear',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. ¿Cuáles son los tres ejes sobre los cuales se mueve un avión?',
    opciones: [
      {
        textoRespuesta: 'Oblicuo, lateral o transversal y longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vertical, perpendicular y longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vertical, lateral o transversal y longitudinal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vertical, paralelo y longitudinal',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. Los alerones producen desplazamientos en el eje longitudinal del avión mediante:',
    opciones: [
      {
        textoRespuesta: 'Descompensación aerodinámica entre las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Diferencia de sustentación entre las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Par de fuerzas en las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las anteriores',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '23. El factor de carga aumenta en relación a',
    opciones: [
      {
        textoRespuesta: 'La régimen de viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'El peso de la aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de ataque en virajes muy cerrados',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de inclinación en viraje',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '24. La actitud de un avión es:',
    opciones: [
      {
        textoRespuesta: 'La tendencia hacia un lado u otro que tiene en vuelo nivelado y recto y sin viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'La orientación de los ejes del aparato con respecto al horizonte',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '25. El centro de presiones coincide siempre con el centro de gravedad',
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
    titulo: '26. Un avión puede entrar en pérdida a cualquier velocidad.',
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
    titulo: '27. El borde delantero de un perfil alar se denomina:',
    opciones: [
      {
        textoRespuesta: 'Borde de salida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Borde de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Línea de curvatura media',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuerda aerodinámica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. ¿Qué debe ocurrir para que un ala produzca sustentación?',
    opciones: [
      {
        textoRespuesta: 'Movimiento de aire sobre el ala',
        isCorrect: true
      },
      {
        textoRespuesta: 'El ala debe estar con gran ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'El motor debe de estar produciendo empuje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debe reducirse la gravedad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. La pérdida en un ultraligero se produce cuando:',
    opciones: [
      {
        textoRespuesta: 'Se le somete a un ángulo de ataque excesivo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un paro de motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Te lo roban',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se le somete a alabeos constantes',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. En el avión podemos determinar como diferentes clases de compensador los siguientes',
    opciones: [
      {
        textoRespuesta: 'Manuales y neumáticos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Manuales e hidráulicos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dirección, alabeo y profundidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dirección, cabeceo y profundidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '31. El punto donde se aplica la fuerza de sustentación se conoce como',
    opciones: [
      {
        textoRespuesta: 'Cuerda aerodinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro gravitatorio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro de presiones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Centro de gravedad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. Si aumenta la velocidad, la resistencia inducida disminuye',
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
    titulo: '33. Los compensadores de profundidad se mueven:',
    opciones: [
      {
        textoRespuesta: 'En el mismo sentido que el timón de profundidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el sentido opuesto al timón de profundidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Perpendicularmente al timón de profundidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se mueven',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. En el despegue, las palas de una hélice de paso variable en vuelo, se ajustarán a:',
    opciones: [
      {
        textoRespuesta: 'En bandera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paso largo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Posición intermedia de velocidad constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paso corto',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '35. Despegamos de un campo a nivel del mar, con viento calma, temperatura 10 grados, QNH 1021. Haciendo una rotación correcta, nos vamos al aire a 60 km/h (de anemómetro), después de recorrer 80 metros. Cual será la TAS a la que nos vamos al aire',
    opciones: [
      {
        textoRespuesta: '55 Km/h.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es imposible saberlo',
        isCorrect: false
      },
      {
        textoRespuesta: '70 Km/h.',
        isCorrect: false
      },
      {
        textoRespuesta: '60 Km/h.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '36. Una definición del ángulo de ataque, podrá ser: es el ángulo formado por la trayectoria de vuelo y la cuerda aerodinámica',
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
    titulo: '37. Qué relación hay entre un ángulo de ataque concreto y el coeficiente de sustentación que le corresponde.',
    opciones: [
      {
        textoRespuesta: 'La relación es variable, la modifica el piloto con la potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación es variable, la modifica el piloto con la palanca',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La relación es fija mientras no se varíe la configuración del avión con el uso de superficies hipersustentadoras',
        isCorrect: true
      },
      {
        textoRespuesta: 'No tienen relación',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '38. ¿Cómo se llama la capacidad del avión para recuperar una posición determinada, cuando ha sufrido una perturbación en cabeceo?',
    opciones: [
      {
        textoRespuesta: 'Estabilidad vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estabilidad transversal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estabilidad lateral',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estabilidad longitudinal',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '39. La rotación sobre el eje lateral se llama',
    opciones: [
      {
        textoRespuesta: 'Alabeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Guiñada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cabeceo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Picado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. Si queremos descender a una velocidad (IAS) concreta, debemos actuar de la siguiente forma:',
    opciones: [
      {
        textoRespuesta: 'Actuaremos sobre el timón de dirección, sin tocar el mando de gases',
        isCorrect: false
      },
      {
        textoRespuesta: 'Picaremos para descender y ajustaremos la velocidad mediante el mando de gases',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Quitaremos potencia para descender, y ajustaremos una posición en el timón de profundidad para establecer una velocidad concreta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Solamente aplicaremos una potencia determinada con el mando de gases',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '41. Las superficies aerodinámicas destinadas a provocar el desplazamiento controlado del avión sobre los tres ejes de referencia, se denominan:',
    opciones: [
      {
        textoRespuesta: 'Aletas canalizadoras',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mandos secundarios',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mandos primarios.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ruptores de flujo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. El efecto físico producido por la deflexión de los flaps es',
    opciones: [
      {
        textoRespuesta: 'Aumento de la resistencia al avance',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumento del coeficiente de sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor carrera de despegue',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. El coeficiente de sustentación sólo depende',
    opciones: [
      {
        textoRespuesta: 'Del ángulo de asiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del ángulo de subida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del ángulo ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Del ángulo de incidencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '44. ¿Por qué entra en pérdida una avión a mayor velocidad en virajes coordinados y a nivel, que en vuelo recto y nivelado?',
    opciones: [
      {
        textoRespuesta:
          'Porque al incrementarse el factor de carga, necesitamos más ángulo de ataque para disminuir la sustentación a una misma velocidad',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Porque al disminuir el factor de carga, necesitamos más ángulo de ataque para mantener la sustentación a una misma velocidad',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque al incrementarse el factor de carga, necesitamos más ángulo de ataque para mantener la sustentación a una misma velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un avión entra siempre en pérdida a la misma velocidad, sea cual sea la maniobra que esté haciendo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. El factor de carga se denomina también:',
    opciones: [
      {
        textoRespuesta: 'Centro de gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro aerodinámico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro de presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'G',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '46. El movimiento del avión sobre el eje lateral o transversal se llama:',
    opciones: [
      {
        textoRespuesta: 'No tiene nombre especifico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cabeceo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Guiñada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alabeo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '47. A la velocidad de crucero la distribución de las resistencias es aproximadamente:',
    opciones: [
      {
        textoRespuesta: 'Poca parásita y Poca inducida',
        isCorrect: false
      },
      {
        textoRespuesta: '50% parásita y 50% inducida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mucha parásita y Poca inducida',
        isCorrect: true
      },
      {
        textoRespuesta: 'No puede medirse así esta magnitud',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. En un perfil alar, la línea recta que une el bode de ataque con el borde de salida se denomina:',
    opciones: [
      {
        textoRespuesta: 'Espesor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuerda',
        isCorrect: true
      },
      {
        textoRespuesta: 'Intradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'Extradós',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. El centro aerodinámico:',
    opciones: [
      {
        textoRespuesta: 'a) Se desplaza a lo largo del vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Permanece invariable a lo largo del vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Se desplaza a lo largo de la cuerda',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "a" y "c" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '50. La velocidad de las partículas de la capa límite',
    opciones: [
      {
        textoRespuesta: 'Varía desde 0 hasta la velocidad de la corriente de aire',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depende de la velocidad del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye al alejarse de la superficie alar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es cero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. El factor de carga en un viraje coordinado y manteniendo altura depende exclusivamente de:',
    opciones: [
      {
        textoRespuesta: 'Ángulo de alabeo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Peso del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. A mayor ángulo de ataque, la sustentación:',
    opciones: [
      {
        textoRespuesta: 'Disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'No influye',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depende del peso del avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. ¿Cómo se llama el punto del perfil aerodinámico en el que se aplica la resultante de la sustentación?',
    opciones: [
      {
        textoRespuesta: 'Centro de resistencias',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro de gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro de presiones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Centro de cargas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. Los torbellinos producidos en los extremos de las alas son parte de la resistencia.',
    opciones: [
      {
        textoRespuesta: 'Inducida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Parásita',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '55. ¿Qué es un spoiler?',
    opciones: [
      {
        textoRespuesta: 'Un indicador de virajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un dispositivo hipersustentador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un freno aerodinámico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un flap de extradós',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. Define la resistencia parásita:',
    opciones: [
      {
        textoRespuesta: 'Es aquella que no está relacionada con la génesis de sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que no origina peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que origina peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es aquella que está relacionada con la génesis de sustentación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '57. Se define a la fuerza aerodinámica como:',
    opciones: [
      {
        textoRespuesta: 'a) La fuerza generada por un cuerpo en movimiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) La fuerza total generada por el movimiento de un cuerpo inmerso en el aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Es la resultante de la sustentación y resistencia inducida en un perfil aerodinámico',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "b" y "c"',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '58. La curvatura superior que va desde el borde de ataque al borde de salida en un ala, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Cuerda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Curvatura media',
        isCorrect: false
      },
      {
        textoRespuesta: 'Extradós',
        isCorrect: true
      },
      {
        textoRespuesta: 'Intradós',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. Mientras estamos volando, una de las razones para ajustar una hélice de paso variable en vuelo, a paso corto es:',
    opciones: [
      {
        textoRespuesta: 'Poder disponer de más potencia para el posterior despegue, después del aterrizaje',
        isCorrect: true
      },
      {
        textoRespuesta: 'Reducir las RPM del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Obtener mejor velocidad de crucero a baja altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reducir el consumo de combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. El efecto suelo crea un aumento de flotabilidad del avión en la última fase del aterrizaje',
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
    titulo: '61. Si aumentamos el peso de un ULM, este entrará en pérdida:',
    opciones: [
      {
        textoRespuesta: 'Exactamente igual que con menos peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor velocidad (IAS) y mayor ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'A menor velocidad (IAS) y menor ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor velocidad (IAS), pero con el mismo ángulo de ataque',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '62. La dirección del viento relativo y la trayectoria de vuelo son',
    opciones: [
      {
        textoRespuesta: 'No tienen relación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dependen del ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Opuestas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Perpendiculares',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. El timón de profundidad provoca desplazamientos sobre:',
    opciones: [
      {
        textoRespuesta: 'El eje longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'El eje transversal',
        isCorrect: true
      },
      {
        textoRespuesta: 'El eje vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'El eje de la rueda',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "64. Se llama 'pérdida' aerodinámica a:",
    opciones: [
      {
        textoRespuesta: 'La reducción de velocidad del ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'La reducción del control del movimiento del movimiento el cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La reducción drástica de altura del ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'La reducción drástica de la sustentación del ala',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '65. Cuando accionamos la palanca de mandos hacia atrás, actuamos sobre el timón de profundidad y el avión sube. Pero, ¿en qué posición colocamos dicho timón?',
    opciones: [
      {
        textoRespuesta: 'Neutro',
        isCorrect: false
      },
      {
        textoRespuesta: 'La palanca hacia detrás no acciona el timón de profundidad en los U.L.M.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hacia arriba',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hacia abajo',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '66. El aumento del factor de carga (N) puede llegar a romper la estructura del avión, pero anteriormente a esta situación límite provoca también:',
    opciones: [
      {
        textoRespuesta: 'Aumento de la velocidad de pérdida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminución de la velocidad de pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dificulta el ascenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'No provoca nada de esto, solo estudia el límite estructural',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. ¿Que debe ocurrir para que un ala produzca sustentación?',
    opciones: [
      {
        textoRespuesta: 'Debe reducirse la gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Movimiento de aire sobre el ala y ángulo de ataque efectivo',
        isCorrect: true
      },
      {
        textoRespuesta: 'El ala debe estar con gran ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'El motor debe de estar produciendo empuje',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '68. ¿Cómo se llaman las resistencias que origina un avión al desplazarse en el aire y que no tiene que ver con la generación de sustentación?',
    opciones: [
      {
        textoRespuesta: 'Complementaria',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inducida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estructural',
        isCorrect: false
      },
      {
        textoRespuesta: 'Parásita',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '69. Si entro en pérdida en un viraje la recuperaré:',
    opciones: [
      {
        textoRespuesta: 'Moviendo la palanca de mando hacia el lado contrario del viraje y metiendo motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Moviendo la palanca de mando hacia el lado contrario del viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cediendo palanca de mando al centro y adelante y nivelando el avión después de recuperar la velocidad',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '70. En un vuelo recto y nivelado:',
    opciones: [
      {
        textoRespuesta: 'La componente de la sustentación se opone a la resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza de la resistencia es igual que la del empuje',
        isCorrect: true
      },
      {
        textoRespuesta: 'La sustentación se igual al empuje',
        isCorrect: false
      },
      {
        textoRespuesta: 'El empuje es mayor que la sustentación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. ¿Qué diferencia hay entre altitud y altura?',
    opciones: [
      {
        textoRespuesta: 'Ninguna',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una tiene como punto de referencia el nivel medio del mar y la segunda el terreno que se sobrevuela',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una se refiere a terminología aeronáutica y la otra a terminología de uso corriente',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Altitud es la medida que proporciona el instrumento del avión volando y altura la que proporciona el mismo instrumento cuando el avión está en tierra en distintos campos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '72. Un aumento fuerte de viento en cola (racha), nos puede acercar a la velocidad de pérdida',
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
    titulo: '73. El desprendimiento de la capa limite se produce:',
    opciones: [
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'La capa límite no se desprende',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando tiene mucha velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el ángulo de ataque es excesivo',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '74. Las superficies del avión expuestas al viento originan una resistencia llamada',
    opciones: [
      {
        textoRespuesta: 'Parásita',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por compresibilidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Horizontal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inducida',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. Durante el viraje, la componente horizontal de la sustentación es la responsable de :',
    opciones: [
      {
        textoRespuesta: 'El picado del ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'El encabritado del ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'Girar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Subir',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '76. La resistencia que producen algunas partes del avión que no están directamente relacionadas con la sustentación, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Resistencia inducida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Resistencia aerodinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Resistencia parásita',
        isCorrect: true
      },
      {
        textoRespuesta: 'Resistencia por compresibilidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '77. Como se suele denominar la velocidad de maniobra',
    opciones: [
      {
        textoRespuesta: 'Vy',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vx',
        isCorrect: false
      },
      {
        textoRespuesta: 'Va',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depende de que maniobra se trate',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. ¿Qué maniobras básicas aumentan el factor de carga de un avión?',
    opciones: [
      {
        textoRespuesta: 'Resbales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Descensos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ascensos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Virajes',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '79. Durante un viraje, el ala exterior tiene:',
    opciones: [
      {
        textoRespuesta: 'Más velocidad y menos sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Más velocidad y más sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Menos velocidad y menos sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menos velocidad y más sustentación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. ¿Cuál de estas definiciones de "fuerza aerodinámica" es la correcta?',
    opciones: [
      {
        textoRespuesta: 'Es la fuerza que se origina sobre un perfil a consecuencia de la presión barométrica y el peso del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La primera y la ultima definición son correctas',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es la fuerza que se origina sobre un perfil a consecuencia de las modificaciones en la presión y velocidad de las partículas de aire que la rodean',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Es la fuerza que se origina sobre un perfil a consecuencia de la resultante entre la gravedad y la fuerza centripeta',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '81. ¿Qué puede ocurrir si actuamos bruscamente sobre el mando de profundidad del avión durante la recuperación de una pérdida, al tratar de nivelar nuestra posición?',
    opciones: [
      {
        textoRespuesta: 'Aparición de pérdidas secundarias',
        isCorrect: true
      },
      {
        textoRespuesta: 'Falta de refrigeración del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumento de la guiñada adversa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumento excesivo del factor de carga negativo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '82. Si estoy aproximando a una pista corta y estoy más alto de lo normal, lo correcto sería:',
    opciones: [
      {
        textoRespuesta: 'a) Picar hasta estar en cabecera de pista, entonces tocar con las tres ruedas para frenar inmediatamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Utilizar el resbale para perder altura y establecerme en la senda de planeo correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) La "a" y la "c" son correctas',
        isCorrect: true
      },
      {
        textoRespuesta: 'd) Utilizar los flaps para reducir el planeo siempre que sea posible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. Cuanto mayor sea el ángulo de ataque',
    opciones: [
      {
        textoRespuesta: 'Mayor será el ángulo de ataque inducido',
        isCorrect: false
      },
      {
        textoRespuesta: 'La corriente relativa real se va haciendo perpendicular a dicho ángulo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor será la resistencia inducida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Menor será la resistencia inducida',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. El compensador de profundidad es una superficie aerodinámica…',
    opciones: [
      {
        textoRespuesta: 'Unida al timón de dirección, con movimiento solidario a éste y que ayuda a mantener la posición deseada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unida al timón de dirección, con movimiento contrario a éste y que ayuda a mantener la posición deseada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unida al timón de profundidad, con movimiento solidario a éste y que ayuda a mantener la posición deseada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unida al timón de profundidad, con movimiento contrario a éste y que ayuda a mantener la posición deseada',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '85. Elige la falsa',
    opciones: [
      {
        textoRespuesta: 'Si aumenta la temperatura, disminuye la resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si aumenta la presión, aumenta la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si se aumenta la superficie alar, aumenta la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si aumentamos la densidad, disminuye la sustentación',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '86. Cuando a un perfil alar inmerso en una corriente de aire se le aplica un ángulo de ataque positivo, la presión en el extradós ….. Y el el intradós …….',
    opciones: [
      {
        textoRespuesta: 'Disminuye - Aumenta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta - Aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye - Disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta - Disminuye',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. La TAS será la IAS corregida por',
    opciones: [
      {
        textoRespuesta: 'Densidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Posición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '88. Si quiero mantener un determinado régimen de ascenso sin modificar la velocidad, ¿cómo procederé?',
    opciones: [
      {
        textoRespuesta:
          'No es posible mantener una velocidad constante con un régimen de ascenso constante, ya que eso sólo se puede conseguir en vuelo recto y nivelado',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Manteniendo la velocidad con la palanca o volante (timón de profundidad) mientras ajusto una potencia adecuada que mantenga el régimen de ascenso constante',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aplicando gases para mantener la velocidad y ajustando el timón de profundidad para obtener un régimen de ascenso constante',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Manteniendo la velocidad con la palanca o volante (timón de dirección) mientras ajusto una potencia adecuada que mantenga el régimen de ascenso constante',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '89. El factor de carga es negativo (­) cuando:',
    opciones: [
      {
        textoRespuesta: 'Su dirección es hacia abajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su dirección es hacia arriba',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '90. La causa directa de toda pérdida es un exceso de',
    opciones: [
      {
        textoRespuesta: 'Ángulo de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Viraje fuerte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tasa de descenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud de densidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. La pérdida se define como la incapacidad del ala para producir la sustentación necesaria debido a',
    opciones: [
      {
        textoRespuesta: 'Mucha altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Peso excesivo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Insuficiente tracción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Excesivo ángulo de ataque',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '92. El borde de salida también se denomina borde de fuga:',
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
    titulo: '93. Las fuerza principales que actúan sobre un avión son:',
    opciones: [
      {
        textoRespuesta: 'Sustentación, peso, resistencia y velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Empuje vertical, peso, resistencia y sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación, tracción, resistencia y peso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Peso, gravedad, sustentación y empuje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. La sustentación es una fuerza ascendente, creada por la suma de presiones entre el extradós y el intradós',
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
      '95. Estamos en aproximación final a un campo a nivel del mar. El viento es calma. Llevamos una velocidad indicada de 80 Km/h. Cuál será la velocidad sobre el suelo GS',
    opciones: [
      {
        textoRespuesta: '80 Km/h.',
        isCorrect: true
      },
      {
        textoRespuesta: '90 Km/h.',
        isCorrect: false
      },
      {
        textoRespuesta: '85 Km/h.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No puede saberse',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '96. ¿Cuál de los U.L.M. que a continuación se describen mediante sus factores de carga límite, será más resistente estructuralmente?',
    opciones: [
      {
        textoRespuesta: '+5G y 1G',
        isCorrect: false
      },
      {
        textoRespuesta: '+4G y 2G',
        isCorrect: false
      },
      {
        textoRespuesta: '+4,5G y 2,5G',
        isCorrect: true
      },
      {
        textoRespuesta: '3G y 1G',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. ¿Qué es el factor de carga en un ULM?',
    opciones: [
      {
        textoRespuesta: 'La relación entre el peso en carga del avión y el peso máximo al despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación entre la sustentación y el peso',
        isCorrect: true
      },
      {
        textoRespuesta: 'La relación entre la potencia del motor y el peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación entre la resistencia y el peso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. Si aumentamos el ángulo de ataque, la capa límite se desprenderá:',
    opciones: [
      {
        textoRespuesta: 'Más cerca del borde de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Más lejos del borde de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el mismo punto que anteriormente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '99. Podemos definir la dirección del viento relativo como:',
    opciones: [
      {
        textoRespuesta: 'De sentido contrario pero en la misma dirección que la trayectoria del vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Paralelo y dirección contrario al curso del vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paralelo a la cuerda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Variable según la condición atmosférica del viento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. Los dispositivos hipersustentadores permiten volar',
    opciones: [
      {
        textoRespuesta: 'Más bajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'A menor velocidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'A mayor velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Más alto',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
