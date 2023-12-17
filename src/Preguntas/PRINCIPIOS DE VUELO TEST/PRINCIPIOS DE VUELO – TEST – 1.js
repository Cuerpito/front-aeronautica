const preguntas = [
  {
    titulo: '1. Factores que influyen en la sustentación:',
    opciones: [
      {
        textoRespuesta: 'Presión, velocidad, superficie alar, ángulo de ataque y resistencia total',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión, velocidad, cuerda alar, ángulo de ataque y coeficiente aerodinámico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Densidad, velocidad, superficie alar, y coeficiente de sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Densidad, velocidad, carga alar, ángulo de incidencia y coeficiente aerodinámico',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. Los tres ejes de un avión se llaman',
    opciones: [
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vertical, lateral, longitudinal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vertical, perpendicular, longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Oblicuo, lateral, longitudinal',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '3. La fuerza aerodinámica se origina sobre un perfil a consecuencia de las modificaciones en la presión y velocidad de las partículas que la rodean',
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
      '4. La resistencia es la fuerza generada por un objeto enfrentado al viento relativo. Para su estudio se divide en dos tipos, ¿Cuales son?',
    opciones: [
      {
        textoRespuesta: 'Parásita y de fricción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Flujo y reflujo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inducida y parásita',
        isCorrect: true
      },
      {
        textoRespuesta: 'Inducida y resultante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. El punto de aplicación de la sustentación del ala se denomina:',
    opciones: [
      {
        textoRespuesta: 'a) Centro de gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Centro aerodinámico',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Centro de presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "b" y "c" son correctas.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6. El centro de gravedad y el centro aerodinámico en un ULM son lo mismo',
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
      '7. En el Manual de Vuelo de tu ULM, la velocidad de pérdida en que condiciones de presión, densidad y temperatura están recogidas.',
    opciones: [
      {
        textoRespuesta: 'En atmósfera ISA',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sólo en temperatura a nivel del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo en densidad a nivel del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo en presión a nivel del mar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. La sustentación es una fuerza de succión y forma un ángulo de 90 grados con la cuerda aerodinámica',
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
    titulo: '9. Durante un viraje la componente horizontal de la sustentación hace:',
    opciones: [
      {
        textoRespuesta: 'Elevarse',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perder altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Virar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Descender',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. ¿Que determina la estabilidad longitudinal de un avión?',
    opciones: [
      {
        textoRespuesta: 'La relación entre tracción y sustentación, peso y resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'La efectividad del estabilizador de cola y compensador de dirección',
        isCorrect: false
      },
      {
        textoRespuesta: 'La localización del centro de gravedad',
        isCorrect: true
      },
      {
        textoRespuesta: 'El diedro, ángulo de flecha y efecto quilla',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. El movimiento sobre el eje vertical del avión se denomina:',
    opciones: [
      {
        textoRespuesta: 'Alabeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bataneo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Guiñada',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12. El peso del ULM se contrarresta con otra fuerza llamada:',
    opciones: [
      {
        textoRespuesta: 'Tracción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Elevación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Resistencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. El compensador del timón de dirección es:',
    opciones: [
      {
        textoRespuesta: 'Una superficie de mando secundaria',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una superficie de mando de apoyo al viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una superficie de mando intermedio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una superficie de mando principal',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. Una perdida no supone gran problema de recuperación si el piloto dispone de:',
    opciones: [
      {
        textoRespuesta: 'Velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altura',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '15. ¿Dónde se considera aplicada la fuerza de sustentación?',
    opciones: [
      {
        textoRespuesta: 'En el centro de gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el centro de presión',
        isCorrect: true
      },
      {
        textoRespuesta: 'En el punto de intersección de los tres ejes de giro del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas. Las tres significan lo mismo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16. ¿Qué causa un incremento de la resistencia parásita?',
    opciones: [
      {
        textoRespuesta: 'La sustentación producida por las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Acumulación de insectos en las alas y derivas',
        isCorrect: true
      },
      {
        textoRespuesta: 'El peso combinado de avión y tripulantes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Partículas de aire golpeando las superficies del avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17. ¿Cómo puedo detectar que estoy acercándome a la entrada en pérdida?',
    opciones: [
      {
        textoRespuesta: 'Sólo me preocuparé del pitido del avisador de pérdida (si está instalado), lo demás es irrelevante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Porque el copiloto está gritando',
        isCorrect: false
      },
      {
        textoRespuesta: 'Porque noto un temblor inusual en la aeronave cuando mantengo la palanca atrás',
        isCorrect: true
      },
      {
        textoRespuesta: 'Porque al mirar al suelo veo que voy muy lento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. Sobre la resistencia inducida:',
    opciones: [
      {
        textoRespuesta: 'a) Disminuye al aumentar la velocidad y al disminuir el peso',
        isCorrect: true
      },
      {
        textoRespuesta: 'b) Disminuye al aumentar el peso solamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Aumenta al aumentar la velocidad y aumenta al disminuir el peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "a" y "b"',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. El factor de carga aumenta rápidamente a partir de ángulos de inclinación en viraje de:',
    opciones: [
      {
        textoRespuesta: '180º',
        isCorrect: false
      },
      {
        textoRespuesta: '90º',
        isCorrect: false
      },
      {
        textoRespuesta: '30º',
        isCorrect: true
      },
      {
        textoRespuesta: 'No depende del ángulo de inclinación sino del ángulo de ataque',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. El efecto del movimiento de los alerones es creación de un par de fuerzas',
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
    titulo: '21. Durante un viraje, la componente horizontal de la sustentación es la que hace:',
    opciones: [
      {
        textoRespuesta: 'Girar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Subir',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perder altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bajar el morro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. El perfil aerodinámico es una superficie diseñada para producir:',
    opciones: [
      {
        textoRespuesta: 'Velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Empuje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '23. Los compensadores permiten al piloto:',
    opciones: [
      {
        textoRespuesta: 'Mejorar el rendimiento del motor con la altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir el esfuerzo sobre los mandos primarios',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentar la sensación de velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Evitar interferencias en los equipos de radio',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '24. En caso de vuelo turbulento, reduciremos nuestra velocidad a la velocidad de turbulencia especificada en el manual de vuelo del avión, la cual estará dentro del arco de color ………………….. del anemómetro.',
    opciones: [
      {
        textoRespuesta: 'Blanco',
        isCorrect: false
      },
      {
        textoRespuesta: 'Verde',
        isCorrect: true
      },
      {
        textoRespuesta: 'Rojo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Amarillo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. El flap Krueger se sitúa en:',
    opciones: [
      {
        textoRespuesta: 'En aviones reactores',
        isCorrect: false
      },
      {
        textoRespuesta: 'El borde de salida',
        isCorrect: false
      },
      {
        textoRespuesta: 'El borde de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'En aviones supersónicos',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '26. Un aumento del factor de carga (N) puede llegar a romper la estructura del avión pero anteriormente a esa situación límite provoca también:',
    opciones: [
      {
        textoRespuesta: 'No provoca nada de estas cosas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminución de la velocidad de pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dificulta el descenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumento de la velocidad de pérdida',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '27. En un avión en vuelo recto y nivelado, se verifica que:',
    opciones: [
      {
        textoRespuesta: 'a) Peso = Sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Peso = Tracción',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Tracción = Resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "a" y "c" son ciertas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: "28. Según la figura, la letra “E':",
    opciones: [
      {
        textoRespuesta: 'Intradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'Extradós',
        isCorrect: true
      },
      {
        textoRespuesta: 'Perfil NACA',
        isCorrect: false
      },
      {
        textoRespuesta: 'Curvatura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. Durante un viraje la componente horizontal de la sustentación hace:',
    opciones: [
      {
        textoRespuesta: 'Perder altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Elevarse',
        isCorrect: false
      },
      {
        textoRespuesta: 'Virar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Descender',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. El movimiento del avión sobre el eje vertical se llama:',
    opciones: [
      {
        textoRespuesta: 'Guiñada',
        isCorrect: true
      },
      {
        textoRespuesta: 'No tiene nombre específico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alabeo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '31. En un viraje coordinado, con alabeo constante, el factor de carga',
    opciones: [
      {
        textoRespuesta: 'Disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permanece constante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depende de la altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. Con alta temperatura:',
    opciones: [
      {
        textoRespuesta: 'Aumenta la velocidad relativa del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye las actuaciones del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta las actuaciones del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mejora el rendimiento del ala',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. ¿Qué significado tiene que un avión tenga un coeficiente de planeo 1:7?',
    opciones: [
      {
        textoRespuesta: 'Que desciende 7 metros en 1 segundo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que recorre 1 metro en horizontal por cada 7 metros que desciende en vertical',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que recorre 7 metros en 1 segundo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que recorre 7 metros en horizontal por cada metro que desciende en vertical',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. La "fuerza de sustentación" se considera siempre perpendicular a la trayectoria.',
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
    titulo: '35. La distancia máxima entre la parte superior e inferior de un perfil aerodinámico se denomina:',
    opciones: [
      {
        textoRespuesta: 'Espesor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuerda aerodinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trayectoria de vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. Según la figura, la letra “A":',
    opciones: [
      {
        textoRespuesta: 'Borde de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Borde de altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Curvatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frente alar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '37. Relación entre velocidad y ángulo de ataque',
    opciones: [
      {
        textoRespuesta: 'A menor velocidad mayor ángulo de ataque, a menor velocidad menor ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna son correctas',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor velocidad mayor ángulo de ataque, a menor velocidad menor ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor velocidad menor ángulo de ataque, a menor velocidad mayor ángulo de ataque',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '38. Las cuatro fuerzas principales que actúan en un avión son:',
    opciones: [
      {
        textoRespuesta: 'Sustentación, peso, velocidad y resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación, peso, tracción y resistencia',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tracción, empuje, resistencia y sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación, gravedad, peso y resistencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. La flecha de un ala es:',
    opciones: [
      {
        textoRespuesta: 'El ángulo formado por la cuerda del ala y el eje transversal del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo formado por la línea del 25% de la cuerda y el eje longitudinal del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un ángulo formado por la línea del 25% de la cuerda y el eje longitudinal del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es equivalente al ángulo de ataque del ala',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. El viento que se considera a efectos aerodinámicos en un perfil alar se denomina:',
    opciones: [
      {
        textoRespuesta: 'Viento del norte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento corriente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento de la corriente libre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento relativo',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '41. Un avión despega de una pista en 100 metros, a una velocidad indicada de 70 Km/h. La temperatura ambiente es de 15 grados. Con las mismas condiciones de viento, peso, en la misma pista, si la temperatura fuera de 35 grados, la carrera de despegue sería',
    opciones: [
      {
        textoRespuesta: 'Igual',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor',
        isCorrect: true
      },
      {
        textoRespuesta: 'No puede saberse',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. ¿Cómo se podría definir la barrena?',
    opciones: [
      {
        textoRespuesta: 'Como una pérdida con auto rotación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Auto rotación con gran IAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'Auto rotación con ángulo de ataque pequeño y gran régimen de descenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es cierta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. La trayectoria de vuelo es siempre respecto al viento relativo:',
    opciones: [
      {
        textoRespuesta: 'Opuesta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Misma dirección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perpendicular a la izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perpendicular a la derecha',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "44. La 'fuerza aerodinámica' es perpendicular a la cuerda.",
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
    titulo: '45. Al actuar sobre el mando de alabeo se produce una diferencia de sustentación entre ambos planos, que provoca:',
    opciones: [
      {
        textoRespuesta: 'Un desprendimiento de la capa límite en el plano cuyo alerón sube',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un par de giro sobre el eje lateral',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un par de giro sobre el eje longitudinal',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un desprendimiento de la capa límite en el plano cuyo alerón baja',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. ¿Qué se puede hacer para conseguir mayor sustentación?',
    opciones: [
      {
        textoRespuesta: 'a) Reducir los efectos de la gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Incrementar la velocidad y el flujo del aire sobre las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Incrementar el ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) Son correctas "b" y "c"',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '47. Si durante un descenso a velocidad de aproximación, tiramos de palanca inadvertidamente, ¿qué podría suceder?',
    opciones: [
      {
        textoRespuesta: 'Nada, es la manera correcta de ajustar la altura para una buena aproximación',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión podría entrar en pérdida',
        isCorrect: true
      },
      {
        textoRespuesta: 'No pasaría nada, pues llevamos una posición de morro bajo y en descenso un avión no entrará nunca en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión ganará velocidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. Uno de los siguientes parámetros no forma parte de la fórmula de la sustentación, ¿cuál?:',
    opciones: [
      {
        textoRespuesta: 'La densidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'La superficie alar',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. ¿Cómo influye el viraje en la velocidad de pérdida?',
    opciones: [
      {
        textoRespuesta: 'La disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aumenta sólo por encima de 60 grados',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aumenta sólo por encima de 45 grados',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aumenta',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '50. En pleno viraje, el factor carga es la fuerza resultante de:',
    opciones: [
      {
        textoRespuesta: 'La fuerza centrípeta y la centrífuga',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza centrífuga y la fuerza de la gravedad',
        isCorrect: true
      },
      {
        textoRespuesta: 'La fuerza de la gravedad y la resultante de la centrífuga y el impulso del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza centrífuga y la componente horizontal de la sustentación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. Un incremento de velocidad hará que tengamos',
    opciones: [
      {
        textoRespuesta: 'Menor resistencia inducida y parásita',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor resistencia inducida y menor resistencia parásita',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor resistencia inducida y mayor resistencia parásita',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor resistencia inducida y parásita',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. La fuerza aerodinámica es origen de dos fuerzas llamadas',
    opciones: [
      {
        textoRespuesta: 'Empuje y resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación y tracción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sustentación y resistencia inducida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sustentación y peso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. Se produce la pérdida siempre que:',
    opciones: [
      {
        textoRespuesta: 'Aumentemos la velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de ataque sea excesivamente alto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Reduzcamos la velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'No sepamos donde estamos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. El centro de presiones es el punto de aplicación de la fuerza de sustentación',
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
    titulo: '55. Girando a baja altura, tirar demasiado de la palanca, mata',
    opciones: [
      {
        textoRespuesta: 'Demasiado a menudo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Nunca',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se puede tirar de la palanca todo lo que queramos, siempre que nos aseguremos que volamos a más velocidad que la velocidad de pérdida',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. ¿Qué es un slat?',
    opciones: [
      {
        textoRespuesta:
          'Un dispositivo hipersustentador que rompe la circulación de la corriente aerodinámica en el extradós, mediante ranuras en el borde de ataque',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un dispositivo hipersustentador que rompe la circulación de la corriente aerodinámica en el extradós, mediante ranuras en el borde de salida',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un dispositivo hipersustentador que facilita la circulación de la corriente aerodinámica en el extradós, mediante ranuras en el borde de salida',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un dispositivo hipersustentador que facilita la circulación de la corriente aerodinámica en el extradós, mediante ranuras en el borde de ataque',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '57. Cómo relacionarías la carga alar con la velocidad de pérdida en vuelo recto y nivelado.',
    opciones: [
      {
        textoRespuesta: 'La carga alar no tiene relación con la velocidad de pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'A menor carga alar mayor velocidad de pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'A mayor carga alar mayor velocidad de pérdida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '58. Podemos señalar como algunos de los factores que incrementan el valor de la Sustentación los siguientes:',
    opciones: [
      {
        textoRespuesta: 'Disminución de la temperatura, aumento del ángulo de ataque, disminución de la velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumento de la temperatura, aumento del ángulo de ataque, aumento de la velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumento de superficie alar, aumento de presión atmosférica, aumento del ángulo de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminución de la temperatura, disminución del ángulo de ataque, aumento de la velocidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '59. Partiendo de una vuelo recto y nivelado a velocidad constante superior a Vy, para disminuir la velocidad a Vy o superior manteniendo el vuelo recto y nivelado, debemos:',
    opciones: [
      {
        textoRespuesta: 'Picar el ULM solamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Encabritar el ULM para ganar sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir la potencia y ajustar una posición de morro más alto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuir la potencia solamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. (Efecto Venturi) Al pasar un fluido por un estrechamiento, sus partículas:',
    opciones: [
      {
        textoRespuesta: 'Aumentan su velocidad y disminuyen su presión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuyen su velocidad y su presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuyen su velocidad y aumentan su presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentan su velocidad y su presión',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '61. El centro de presiones de un avión puede variar dentro de unos límites sin que la estabilidad en profundidad del avión se vean comprometidas.',
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
    titulo: '62. En el despegue, el uso de hipersustentadores permite',
    opciones: [
      {
        textoRespuesta: 'Aumentar la carrera de despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir la tracción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir la carrera de despegue',
        isCorrect: true
      },
      {
        textoRespuesta: 'Frenar aerodinámicamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. La pérdida está directamente relacionada con:',
    opciones: [
      {
        textoRespuesta: 'La actitud del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de alabeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de ataque',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '64. En vuelo recto y nivelado, podemos afirmar que la sustentación y el peso son fuerzas opuestas',
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
    titulo: '65. Es peligroso practicar pérdidas con viento en cola',
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
    titulo: '66. A medida que el ángulo de ataque crece, el centro aerodinámico se desplaza hacia adelante:',
    opciones: [
      {
        textoRespuesta: 'Falso  ',
        isCorrect: false
      },
      {
        textoRespuesta: 'Verdadero  ',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '67. La velocidad de pérdida indicada en un avión que vuela contra el viento. comparada con la del mismo avión que vuela a favor:',
    opciones: [
      {
        textoRespuesta: 'Se diferencia en un valor igual al doble de la velocidad del viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es menor cuando vuela contra el viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es menor cuando vuela a favor del viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la misma',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '68. En un determinado perfil alar, como podemos aumentar el valor de la sustentación.',
    opciones: [
      {
        textoRespuesta: 'Aumentando el ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentando la velocidad del viento relativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las dos anteriores son correctas',
        isCorrect: true
      },
      {
        textoRespuesta: 'La sustentación viene dada en virtud del fabricante.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. La fuerza de la gravedad es el resultado de:',
    opciones: [
      {
        textoRespuesta: 'La fuerza de atracción y la fuerza centrípeta',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza de atracción y la fuerza centrífuga',
        isCorrect: true
      },
      {
        textoRespuesta: 'La fuerza centrífuga y la fuerza de adición',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza centrípeta y la fuerza de adición',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. ¿Cuál es la dirección de la sustentación sobre la parte superior de las alas?',
    opciones: [
      {
        textoRespuesta: 'Hacia el suelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La dirección de la sustentación varia con la velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perpendicular a la superficie de las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perpendicular al viento relativo y normalmente opuesta a la fuerza de la gravedad',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '71. Una disminución fuerte del viento en cara se denomina',
    opciones: [
      {
        textoRespuesta: 'No tiene ningún nombre',
        isCorrect: false
      },
      {
        textoRespuesta: 'No existe ese fenómeno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Racha aparente de cola',
        isCorrect: true
      },
      {
        textoRespuesta: 'Turbonada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '72. Los tipos de diedro se clasifican en:',
    opciones: [
      {
        textoRespuesta: 'Sencillo, ranurado y fowler',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estable, inestable y neutro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Superior, inferior y nulo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Positivo, negativo y nulo',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '73. La sustentación depende del ángulo de ataque, coeficiente de sustentación, velocidad, superficie alar y...',
    opciones: [
      {
        textoRespuesta: 'Peso total',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dirección del viento relativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Exceso de tracción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Densidad del aire',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '74. Despegamos de un campo a nivel del mar, con viento calma, temperatura 10 grados, QNH 1021. Haciendo una rotación correcta, nos vamos al aire a 60 km/h (de anemómetro), después de recorrer 80 metros. Cuál será la velocidad respecto al suelo a la que nos iremos al aire',
    opciones: [
      {
        textoRespuesta: '65.5 Km/h',
        isCorrect: false
      },
      {
        textoRespuesta: 'No lo podemos saber',
        isCorrect: false
      },
      {
        textoRespuesta: '60 Km/h',
        isCorrect: true
      },
      {
        textoRespuesta: '70 Km/h',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. La pérdida',
    opciones: [
      {
        textoRespuesta: 'a) Sobreviene a altas velocidades',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Ninguna es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) "a" y "b" son correctas',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) Sobreviene a altos ángulos de ataque',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '76. La línea recta que une el borde de ataque con el borde de salida de un perfil alar, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Curvatura media',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuerda',
        isCorrect: true
      },
      {
        textoRespuesta: 'Espesor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento relativo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '77. En el aterrizaje, las palas de una hélice de paso variable en vuelo, se ajustarán a:',
    opciones: [
      {
        textoRespuesta: 'Posición intermedia de velocidad constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paso largo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paso corto',
        isCorrect: true
      },
      {
        textoRespuesta: 'En bandera',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. El altímetro para su funcionamiento necesita medir',
    opciones: [
      {
        textoRespuesta: 'Presión dinámica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión total',
        isCorrect: false
      },
      {
        textoRespuesta: 'Temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión estática',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '79. El ángulo que forma la cuerda aerodinámica con la dirección del viento relativo es:',
    opciones: [
      {
        textoRespuesta: 'El ángulo aerodinámico propiamente dicho',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de salida',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de ataque',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '80. Cuanto más alto sea el ángulo de ataque, más régimen de ascenso conseguiremos',
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
    titulo: '81. Si hacemos pasar una corriente de aire por un estrechamiento:',
    opciones: [
      {
        textoRespuesta: 'La velocidad aumenta y la presión disminuye',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad disminuye y la presión aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad y la presión aumentan',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad y la presión disminuyen',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '82. Un factor de carga n=3 en un U.L.M. de 200 Kg. de peso significa:',
    opciones: [
      {
        textoRespuesta: 'Que la resistencia estructural puede soportar tres veces el peso del avión en cualquier actitud de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la estructura del avión está soportando una fuerza de 3 Kg, por unidad de superficie alar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la estructura del avión está soportando una carga de 600 Kgs.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que la resistencia parásita es igual a la estructural multiplicada por 3',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. Como denominamos la velocidad que nos marca el anemómetro',
    opciones: [
      {
        textoRespuesta: 'Velocidad respecto al aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad real',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad indicada o IAS',
        isCorrect: true
      },
      {
        textoRespuesta: 'GS',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. ¿Qué diferencia hay entre centro de gravedad (C.G.) y centro de presiones (C.P.)?',
    opciones: [
      {
        textoRespuesta: 'El C.P. es el que limita el movimiento del C.G.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna, son lo mismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El C.G. es móvil y el C.P. es fijo',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El C.G. es el punto donde se consideran concentradas las fuerzas pesantes del ULM y el C.P. es el punto donde actúa la fuerza aerodinámica',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '85. Los disruptores son:',
    opciones: [
      {
        textoRespuesta: 'Un tipo de freno aerodinámico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un dispositivo hipersustentador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un sistema de control de cabeceo',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '86. Con un régimen de ascenso constante, es decir sin aceleración, la resultante de fuerzas de sustentación, peso, tracción y resistencia:',
    opciones: [
      {
        textoRespuesta: 'La sustentación y el peso no están relacionados con el régimen de ascenso, sólo el exceso de potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resultante de tracción y resistencia será nula pero la sustentación tiene que ser superior al peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es indiferente el régimen de ascenso o descenso, la sustentación siempre será superior al peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será cero. La resultante de fuerzas hacia abajo y hacia arriba será nula',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '87. ¿Cuál de las siguientes afirmaciones es correcta?',
    opciones: [
      {
        textoRespuesta: 'Un exceso de factor de carga puede llegar a romper el avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aumento del factor de carga aumenta la velocidad de pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'En un viraje coordinado, el factor de carga es el resultado de la fuerza centrífuga y la gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las anteriores',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '88. El compensador permite',
    opciones: [
      {
        textoRespuesta: 'Cambiar la resistencia inducida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar el régimen de ascenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir el esfuerzo sobre los mandos primarios',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentar la sensación de velocidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '89. Al incrementar el calaje de flaps, estamos aumentando el ángulo de incidencia del ala',
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
      '90. En una aproximación normal, con condiciones meteorológicas favorables, debo tener una velocidad lo suficientemente alta para no entrar en pérdida, y lo suficientemente baja para ajustar el aterrizaje sin utilizar más pista de la necesaria pero que permita hacer la recogida sin desplomarnos.',
    opciones: [
      {
        textoRespuesta: 'Verdadero, y cada avión posee una velocidad (IAS) concreta para cada configuración',
        isCorrect: true
      },
      {
        textoRespuesta: 'Verdadero, se ajustará una velocidad un 5% por encima de la velocidad de pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Verdadero, y siempre será la misma velocidad TAS',
        isCorrect: false
      },
      {
        textoRespuesta: 'No es correcto, pues en aproximación un avión nunca entrará en pérdida',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. La sustentación es:',
    opciones: [
      {
        textoRespuesta: 'La fuerza hacia arriba perpendicular al viento relativo y desarrollada para soportar el peso del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'La fuerza aerodinámica más la resistencia parasitaria',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza que hace caer de morro al avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza perpendicular al viento relativo y desarrollada para realizar la tracción del avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. La sustentación y la resistencia varían con la densidad del aire.',
    opciones: [
      {
        textoRespuesta: 'a) Es falso',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) A mayor densidad, mayor resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) A mayor densidad, mayor sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) Las respuestas "b" y "c" son correctas.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '93. La potencia:',
    opciones: [
      {
        textoRespuesta: 'Se opone a la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se opone al peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se opone a la resistencia',
        isCorrect: true
      },
      {
        textoRespuesta: 'Posee el mismo sentido y dirección que la resistencia.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. La resistencia inducida es:',
    opciones: [
      {
        textoRespuesta: 'La debida al rozamiento del avión con el viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'La debida a la producción de sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'La que proporciona mayor velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'La suma de la gravedad más la resistencia parásita',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. Cuanto mayor es el alargamiento de la superficie sustentadora, mayor es la resistencia inducida que genera:',
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
    titulo: '96. Define la resistencia inducida:',
    opciones: [
      {
        textoRespuesta: 'La origina el tren de aterrizaje que no contribuye a producir sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'La origina el fuselaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'La origina el ala y proviene del hecho que está produciendo sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'La origina la estela de los motores que han originado sustentación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. Una definición del ángulo de ataque, podría ser: ángulo formado por el viento relativo y la cuerda aerodinámica',
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
    titulo: '98. Una pérdida no representa graves problemas de recuperación, si el piloto dispone de:',
    opciones: [
      {
        textoRespuesta: 'Altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Paracaídas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ángulo de ataque',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '99. ¿Qué se puede hacer para conseguir mayor sustentación?',
    opciones: [
      {
        textoRespuesta: 'a) Son correctas "c" y "d"',
        isCorrect: true
      },
      {
        textoRespuesta: 'b) Incrementar el ángulo de ataque de las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Incrementar la velocidad del flujo de aire sobre las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) Reducir los efectos de la gravedad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. Una capa límite sería:',
    opciones: [
      {
        textoRespuesta: 'Sólo turbulenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo laminar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Laminar o turbulenta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
