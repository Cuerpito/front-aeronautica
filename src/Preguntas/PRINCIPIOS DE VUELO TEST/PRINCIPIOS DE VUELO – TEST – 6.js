const preguntas = [
  {
    titulo: '1. ¿A qué llamamos una pérdida en aerodinámica?',
    opciones: [
      {
        textoRespuesta: 'A la incapacidad del ala para producir la sustentación necesaria, debido a una baja velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la incapacidad del ala para producir la sustentación necesaria, debido a un ángulo de ataque excesivo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A la capacidad del ala para producir la sustentación necesaria.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'A la incapacidad del ala para producir la sustentación necesaria, debido a un ángulo de ataque excesivo o a una baja velocidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. ¿Qué son los winglets?',
    opciones: [
      {
        textoRespuesta:
          'Son dispositivos hipersustentadores que modifican los torbellinos generados por la sustentación y reducen la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Son dispositivos de punta alar que modifican los torbellinos generados por la sustentación y reducen la resistencia inducida.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Son dispositivos de punta alar que modifican los torbellinos generados por la sustentación y aumentan la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son frenos aerodinámicos de punta alar que aumentan la resistencia inducida y parásita de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3. A la mayor distancia entre las puntas de las alas se le conoce como:',
    opciones: [
      {
        textoRespuesta: 'Alargamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Envergadura.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Superficie alar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estrechamiento.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4. ¿Qué consideramos la estabilidad de una aeronave?',
    opciones: [
      {
        textoRespuesta:
          'Su capacidad para responder a los mandos primarios de vuelo y la resistencia que presenta a éstos en el desplazamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su capacidad para permanecer en una nueva posición cuando se altera su equilibrio original.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Su capacidad para corregir las condiciones que alteren su equilibrio y recobrar la posición de vuelo original.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Su capacidad para permanecer en vuelo recto y nivelado sin que las perturbaciones que pueda sufrir lo desplacen de su posición original.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. El uso de flaps en despegues hará que:',
    opciones: [
      {
        textoRespuesta: 'La carrera sea más larga y la trayectoria de despegue tenga menos pendiente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La carrera sea más corta y la trayectoria de despegue tenga más pendiente.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La carrera sea más corta y la trayectoria de despegue tenga menos pendiente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La carrera sea más corta pero no afectará a la pendiente de la trayectoria de despegue.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6. Cuando durante una pérdida se produce un resbale, una guiñada o hay una racha de viento:',
    opciones: [
      {
        textoRespuesta:
          'Las alas pueden comportarse con diferentes ángulos de ataque y coeficientes de sustentación, por lo que el morro tenderá a caer más de un lado que de otro.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Las alas pueden comportarse con mismos ángulos de ataque y coeficientes de sustentación, por lo que se puede producir una barrena.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Las alas pueden comportarse con diferentes ángulos de ataque y coeficientes de sustentación, por lo que se puede producir una barrena.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Las alas pueden comportarse con el mismo ángulo de ataque pero con diferentes coeficientes de sustentación, por lo que se puede producir una barrena.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7. ¿Qué es una barrena?',
    opciones: [
      {
        textoRespuesta: 'Un movimiento rotatorio que se da en la aeronave y que se corrige con la guiñada.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una pérdida en la que aparece un movimiento rotatorio de la aeronave y que no puede ser recuperada.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una pérdida en la que aparece un movimiento rotatorio de la aeronave debido a turbulencias.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una pérdida en la que aparece un movimiento rotatorio de la aeronave.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '8. En cuanto a la resistencia inducida, podemos afirmar que:',
    opciones: [
      {
        textoRespuesta: 'Un mayor alargamiento del ala la aumenta, mientras que una mayor superficie alar no lo hace.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tanto un mayor alargamiento del ala como una mayor superficie alar la aumentan.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un mayor alargamiento del ala no la aumenta, mientras que una mayor superficie alar sí lo hace.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tanto un mayor alargamiento del ala como una mayor superficie alar la disminuyen.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9. La estabilidad lateral es:',
    opciones: [
      {
        textoRespuesta: 'La estabilidad alrededor del eje lateral.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estabilidad alrededor del eje vertical.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estabilidad alrededor del eje longitudinal.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La estabilidad alrededor del eje transversal.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. La capa límite se define como:',
    opciones: [
      {
        textoRespuesta:
          'La capa comprendida entre la inmediata superficie del cuerpo en la que la velocidad del fluido es cero, y el lugar externo a la superficie donde el flujo deja de encontrarse frenado y asume la velocidad de la corriente de aire.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La capa que se encuentra en la inmediata superficie del cuerpo, adherida a éste, y en la que la velocidad del fluido es cero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La capa comprendida entre la inmediata superficie del cuerpo en la que la velocidad del fluido es cero, y el lugar externo a la superficie donde el flujo comienza a tener cierta velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La capa comprendida entre la superficie del cuerpo, en la que el flujo ya no se encuentra adherido a éste pero su velocidad es cero, y el lugar externo a la superficie donde el flujo deja de encontrarse frenado y asume la velocidad de la corriente de aire.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. ¿Cómo definimos la torsión geométrica del ala?',
    opciones: [
      {
        textoRespuesta: 'La capacidad del ala para resistir las fuerzas de torsión durante el vuelo, especialmente en los virajes.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo que forman las líneas de sustentación nula del perfil de punta de ala y del encastre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo formado entre la curvatura media de la punta del ala y la del encastre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo formado entre la cuerda de la punta del ala y la cuerda del encastre.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12. El diedro de una aeronave es:',
    opciones: [
      {
        textoRespuesta:
          'Es el ángulo que se forma entre el 25% de la cuerda y la perpendicular al eje longitudinal de la aeronave, y se utiliza para proporcionarle estabilidad lateral.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El ángulo formado por el plano de las alas con el plano horizontal de la aeronave, y se utiliza para proporcionarle estabilidad longitudinal.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El ángulo formado por el plano de las alas con el plano vertical de la aeronave, y se utiliza para proporcionarle estabilidad lateral.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El ángulo formado por el plano de las alas con el plano horizontal de la aeronave, y se utiliza para proporcionarle estabilidad lateral.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '13. ¿Qué son los spoilers y para qué se utilizan?',
    opciones: [
      {
        textoRespuesta:
          'Son dispositivos hipersustentadores que se despliegan sobre las alas, rompen la corriente de aire, generan más resistencia y disminuyen la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Son frenos aerodinámicos que se despliegan sobre las alas, rompen la corriente de aire, generan más resistencia y disminuyen la sustentación.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Son frenos aerodinámicos que se despliegan sobre el fuselaje, rompen la corriente de aire, generan más resistencia y disminuyen la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Son mandos primarios que se despliegan sobre las alas, rompen la corriente de aire, generan más resistencia y disminuyen la sustentación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. Tras recuperar una pérdida, el siguiente paso es la nivelación. ¿Qué ocurre en esta fase con el factor de carga?',
    opciones: [
      {
        textoRespuesta:
          'Tenemos un factor de carga negativo que suele ser de 2 a 2’5g, apareciendo pérdidas secundarias si se superan estos valores',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tenemos un factor de carga positivo que suele ser de 2 a 2’5g, apareciendo pérdidas secundarias si se superan estos valores.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Tenemos un factor de carga positivo que suele ser de 2 a 2’5g, apareciendo daños estructurales en la aeronave si se superan estos valores.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tenemos un factor de carga negativo que suele ser de 2 a 2’5g, apareciendo daños estructurales en la aeronave si se superan estos valores.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. Indique la correcta. La sustentación:',
    opciones: [
      {
        textoRespuesta: 'Es una fuerza aerodinámica perpendicular al peso de la aeronave y opuesta a la trayectoria de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es una fuerza aerodinámica perpendicular a la trayectoria de vuelo y que se da en el mismo sentido que el peso de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es una fuerza aerodinámica perpendicular a la trayectoria de vuelo y opuesta a la resistencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es una fuerza aerodinámica perpendicular a la trayectoria de vuelo y opuesta al peso de la aeronave.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '16. A medida que la densidad del aire aumenta en la pista de un aeródromo:',
    opciones: [
      {
        textoRespuesta: 'La altitud de densidad será menor, por lo que será positivo para el despegue.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La altitud de densidad será mayor, por lo que será positivo para el despegue.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La altitud de densidad se mantendrá igual a menos que cambie la temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La altitud de densidad será menor, por lo que será negativo para el despegue.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17. ¿Cómo se produce una pérdida?',
    opciones: [
      {
        textoRespuesta: 'Siempre que tengamos un ángulo de ataque excesivo, independientemente de la velocidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Siempre que la velocidad no sea suficiente, independientemente del ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Siempre que tengamos un ángulo de ataque excesivo y la velocidad no sea suficiente para mantener la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Siempre que ni la velocidad ni el ángulo de ataque sean suficientes para mantener la sustentación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. La estabilidad direccional es:',
    opciones: [
      {
        textoRespuesta: 'La que se da alrededor del eje vertical.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La que se da alrededor del eje lateral.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que se da alrededor del eje longitudinal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que se da alrededor de los tres ejes de giro al mismo tiempo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. En vuelo recto y nivelado, ¿qué debemos hacer si queremos mantener el nivel a una velocidad inferior?',
    opciones: [
      {
        textoRespuesta: 'Disminuir la potencia y aumentar el ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuir la potencia y el ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir la potencia manteniendo el ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuir el ángulo de ataque manteniendo la potencia.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. La atmósfera es:',
    opciones: [
      {
        textoRespuesta:
          'La masa gaseosa que rodea la Tierra, dividida en capas con temperaturas similares que se distribuyen desde la superficie de ésta hasta el espacio exterior.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La masa gaseosa que rodea la Tierra, dividida en capas con diferentes temperaturas que se distribuyen desde la superficie de ésta hasta el espacio exterior.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La masa sólida que rodea la Tierra, dividida en capas con diferentes temperaturas que se distribuyen desde la superficie de ésta hasta el espacio exterior.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La masa gaseosa que rodea la Tierra, dividida en capas con diferentes temperaturas que se distribuyen desde aproximadamente 11 km por encima de la superficie de ésta hasta el espacio exterior.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. La variación de la presión y la temperatura del aire con la altura se puede considerar que es de:',
    opciones: [
      {
        textoRespuesta: 'Aproximadamente -1’98ºC cada 1.000 metros y 1 milibar cada 27 metros.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aproximadamente -1’98ºC cada 300 pies y 1 milibar cada 9 pies.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aproximadamente -1’98ºC cada 1.000 pies y 1 milibar cada 27 pies.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aproximadamente -1’98ºC cada 1.000 pies y 1 milibar cada 27 metros.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. El propósito del diedro es:',
    opciones: [
      {
        textoRespuesta: 'Proporcionar estabilidad lateral a la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Proporcionar estabilidad longitudinal a la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporcionar estabilidad vertical a la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporcionar una mejora de las actuaciones de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. La relación que se da entre la cuerda del perfil alar en la punta y el encastre corresponde:',
    opciones: [
      {
        textoRespuesta: 'Al alargamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la envergadura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al estrechamiento.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A la superficie alar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '24. La presión, la densidad y la temperatura se ven afectadas mutuamente. ¿Cuál de las siguientes afirmaciones con respecto a su comportamiento es correcta?',
    opciones: [
      {
        textoRespuesta: 'A igualdad de temperatura, un aumento de la presión hará disminuir la densidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A igualdad de presión, un aumento de la temperatura hará aumentar la densidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A igualdad de presión, un aumento de la temperatura hará disminuir la densidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A igualdad de presión, una disminución de la densidad hará disminuir la temperatura.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. ¿Cuál es o cuáles son los factores principales por los que se ve influenciada la presión atmosférica?',
    opciones: [
      {
        textoRespuesta: 'La temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La densidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La gravedad, temperatura y densidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura y la densidad.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '26. Los flaps son dispositivos hipersustentadores que:',
    opciones: [
      {
        textoRespuesta:
          'Permiten producir mayor sustentación a menor velocidad pero también generan resistencia, por lo que será necesaria mayor potencia de motor.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Permiten producir mayor sustentación a mayor velocidad pero también generan resistencia, por lo que será necesaria mayor potencia de motor.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permiten producir mayor sustentación a menor velocidad, por lo que será necesaria menor potencia de motor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Permiten producir menor sustentación a mayor velocidad pero también generan resistencia, por lo que será necesaria mayor potencia de motor.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. En un viraje realizado de forma coordinada y a nivel constante, el factor de carga de dos aeronaves:',
    opciones: [
      {
        textoRespuesta: 'Dependerá del peso de cada una de ellas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será el mismo para una misma inclinación, independientemente del peso del avión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Será mayor para la aeronave de mayor peso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será menor para la aeronave de mayor peso.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. Los compensadores los podemos definir como:',
    opciones: [
      {
        textoRespuesta:
          'Superficies aerodinámicas que permiten mantener el avión en una posición determinada aliviando al piloto del esfuerzo continuo sobre los mandos de control secundarios.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Superficies aerodinámicas que permiten mantener el avión en una posición determinada aliviando al piloto del esfuerzo continuo sobre los mandos de control primarios.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Superficies aerodinámicas que permiten realizar movimientos sobre los mandos de control primarios aliviando al piloto del esfuerzo que esto requiere.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Superficies aerodinámicas que permiten realizar movimientos sobre los mandos de control primarios y secundarios aliviando al piloto del esfuerzo que esto requiere.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. Para una determinada configuración, la velocidad de la aeronave cuando se alcanza el ángulo crítico corresponde a:',
    opciones: [
      {
        textoRespuesta: 'La velocidad crítica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La Vno o velocidad que no se debe exceder.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad de pérdida.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad de máxima sustentación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. Los dispositivos hipersustentadores son:',
    opciones: [
      {
        textoRespuesta:
          'Mandos de control primarios que permiten que una aeronave produzca sustentación a unas velocidades menores a las normales.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Mandos de control secundarios que permiten que una aeronave produzca sustentación a unas velocidades mayores a las normales.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Mandos de control secundarios que permiten que una aeronave produzca mayor sustentación a cualquier velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Mandos de control secundarios que permiten que una aeronave produzca sustentación a unas velocidades menores a las normales.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '31. La presión atmosférica se puede definir como:',
    opciones: [
      {
        textoRespuesta: 'La fuerza ejercida por el peso de la atmósfera por unidad de superficie.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La presión ejercida por el peso de la atmósfera por unidad de superficie.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza ejercida por el peso de la atmósfera.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza ejercida por el peso de la atmósfera por cm3.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. El factor de carga, también llamado número n, se puede definir como:',
    opciones: [
      {
        textoRespuesta: 'La relación que existe entre la fuerza total que actúa sobre el avión y el peso del mismo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La relación que existe entre la fuerza total que actúa sobre el piloto y el peso de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza de aceleración a la que se ve sometida la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La relación que existe entre la fuerza de aceleración y la fuerza de gravedad a las que se ve sometida la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. La densidad del aire se ve influenciada por la temperatura y la presión. ¿De qué forma?',
    opciones: [
      {
        textoRespuesta: 'Para que la densidad disminuya, debe disminuir la presión y aumentar la temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Para que la densidad disminuya, basta con que disminuya la presión, con temperatura constante, o que aumente la temperatura, con presión constante.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Para que la densidad disminuya, basta con que aumente la presión, con temperatura constante, o que disminuya la temperatura, con presión constante.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para que la densidad disminuya, deben disminuir tanto la presión como la temperatura.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. ¿Cómo se comporta el factor de carga en el instante en que se produce una pérdida?',
    opciones: [
      {
        textoRespuesta: 'Se reduce hasta el punto de que puede desaparecer.',
        isCorrect: true
      },
      {
        textoRespuesta: 'No aumenta por encima de 1G, como si estuviera en vuelo recto y nivelado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta y se hace negativo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta y se hace positivo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. ¿Cuál es la forma de utilizar los compensadores?',
    opciones: [
      {
        textoRespuesta:
          'En primer lugar se sitúa el avión en la posición deseada mediante los controles secundarios y después se usa los compensadores para aliviar el esfuerzo del piloto sobre ellos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En primer lugar se sitúa el avión en la posición deseada mediante los controles primarios y secundarios y después se usa los compensadores para aliviar el esfuerzo del piloto sobre ellos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En primer lugar se sitúa el avión en la posición deseada mediante los controles primarios y después se usa los compensadores para aliviar el esfuerzo del piloto sobre ellos.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'A la vez que se va situando el avión en la posición deseada mediante los controles primarios, se van adaptando los compensadores, hasta que alcance la posición que queremos y el piloto se verá aliviado del esfuerzo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. En un viraje coordinado a nivel constante, el factor de carga:',
    opciones: [
      {
        textoRespuesta: 'Es el resultado de la fuerza centrífuga.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el resultado de dos fuerzas, la fuerza centrífuga y la de gravedad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es el resultado de dos fuerzas, la de aceleración y la de gravedad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el resultado de la fuerza de gravedad y el peso de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '37. Cuanto mayor sea el alargamiento de una aeronave:',
    opciones: [
      {
        textoRespuesta: 'Mayor será la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor será la resistencia parásita.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor será la resistencia inducida.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El alargamiento no influye sobre las resistencias.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. ¿De qué es síntoma un bataneo que se percibe en la palanca de mando?',
    opciones: [
      {
        textoRespuesta:
          'De que estamos entrando en zona de turbulencias, por lo que el piloto debe reducir su velocidad a la de turbulencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De que estamos cercanos a la pérdida, por lo que el piloto debe disminuir el ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'De que hemos entrado en pérdida, por lo que tenemos que iniciar el procedimiento para recuperarla.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'De que estamos cercanos a la pérdida, por lo que el piloto debe disminuir el ángulo de ataque y aumentar la potencia.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. El mando primario que corresponde a cada uno de los ejes de giro es:',
    opciones: [
      {
        textoRespuesta:
          'El timón de profundidad para el eje longitudinal; el timón de dirección para el eje lateral; y los alerones para el eje vertical.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El timón de profundidad para el eje longitudinal; el timón de dirección para el eje vertical; y los alerones para el eje lateral.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El timón de profundidad para el eje lateral; el timón de dirección para el eje vertical; y los alerones para el eje longitudinal.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El timón de profundidad para el eje lateral; el timón de dirección para el eje longitudinal; y los alerones para el eje vertical.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. ¿Cuáles son los ejes de giro a través de los que se mueve una aeronave y qué movimientos generan?',
    opciones: [
      {
        textoRespuesta:
          'El eje longitudinal, que genera el alabeo; el eje lateral, que genera el cabeceo; y el eje vertical, que genera el picado o el encabritado.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El eje transversal, que genera el alabeo; el eje lateral, que genera el cabeceo; y el eje vertical, que genera la guiñada',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El eje longitudinal, que genera el alabeo; el eje lateral, que genera el cabeceo; y el eje vertical, que genera la guiñada.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El eje longitudinal, que genera el cabeceo; el eje lateral, que genera el alabeo; y el eje vertical, que genera la guiñada.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. El ángulo formado entre la cuerda de la punta del ala y la cuerda del encastre es:',
    opciones: [
      {
        textoRespuesta: 'La torsión del ala.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo de la cuerda.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo diedro.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. El efecto suelo:',
    opciones: [
      {
        textoRespuesta:
          'Se produce solo durante los aterrizajes, cuando la resistencia inducida es menor cuanto más cerca está el ala del suelo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se produce durante los aterrizajes y los despegues, cuando la resistencia inducida es menor cuanto más cerca está el ala del suelo.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Se produce durante los aterrizajes y los despegues, cuando la resistencia inducida es mayor cuanto más cerca está el ala del suelo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se produce solo durante los aterrizajes, cuando la sustentación es menor cuanto más cerca está el ala del suelo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. ¿Qué definimos como trayectoria de vuelo?',
    opciones: [
      {
        textoRespuesta: 'La dirección seguida por el perfil aerodinámico durante su desplazamiento en el aire.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La dirección seguida por el aire durante el desplazamiento del perfil aerodinámico.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La dirección seguida por el perfil aerodinámico durante su desplazamiento por el aire, en el mismo sentido que el viento relativo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo que sigue el perfil aerodinámico respecto al viento relativo durante su desplazamiento en el aire.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. La curvatura o cuerda media de un perfil alar se puede definir como:',
    opciones: [
      {
        textoRespuesta: 'Línea que une los puntos equidistantes entre el extradós y el intradós entre el encastre y la punta del ala.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Línea que une los puntos equidistantes entre el extradós y el intradós entre el borde de ataque y el de salida.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Línea recta que une el borde de ataque y el borde de salida en un perfil alar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Línea que une los puntos equidistantes entre el intradós y el extradós de un perfil alar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. El centro de gravedad de la aeronave se define como:',
    opciones: [
      {
        textoRespuesta:
          'El punto imaginario en el que se concentra toda la masa del avión y por el que se cruzan los tres ejes de giro.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El punto imaginario en el que se concentra toda la masa del avión y en el que se aplica la fuerza de sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El punto imaginario en el que se concentra toda la masa del avión, por el que se cruzan los tres ejes de giro y que no es posible modificar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El punto imaginario en el que se cruzan los tres ejes de giro y en el que se aplica la fuerza de sustentación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. La relación entre la envergadura y la cuerda media de una aeronave es:',
    opciones: [
      {
        textoRespuesta: 'La envergadura media.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El estrechamiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El alargamiento.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La superficie alar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '47. La pérdida se produce:',
    opciones: [
      {
        textoRespuesta: 'En el momento en que el ala alcanza su ángulo crítico de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Justo antes de que su ala alcance el ángulo crítico de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el ala excede su ángulo crítico de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A una determinada velocidad, a cualquier ángulo de ataque.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. La estabilidad longitudinal se ve muy afectada por:',
    opciones: [
      {
        textoRespuesta: 'El peso y centrado de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La posición del centro de gravedad y del centro de presiones, y el estabilizador horizontal de cola.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La actuación determinada de cada piloto a través del timón de profundidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La posición del centro de gravedad y el estabilizador horizontal de cola.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. La trayectoria de vuelo es siempre:',
    opciones: [
      {
        textoRespuesta: 'Del mismo sentido que el viento relativo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perpendicular al viento relativo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Del sentido opuesto al viento relativo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Paralela a la sustentación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. ¿Qué efectos causa sobre la presión un perfil aerodinámico que se mueve en una corriente de aire?',
    opciones: [
      {
        textoRespuesta: 'Aumenta la presión en el intradós y disminuye en el extradós.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la presión en el extradós y se mantiene prácticamente constante en el intradós.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión disminuye alrededor del perfil aerodinámico.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presión se mantiene prácticamente constante en el intradós y disminuye en el extradós.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '51. Para que una aeronave se mueva hacia adelante:',
    opciones: [
      {
        textoRespuesta:
          'La tracción debe ser mayor que la resistencia, y el avión ganará velocidad hasta que estas dos fuerzas opuestas se igualen.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La tracción debe ser mayor que la resistencia, y el avión ganará velocidad hasta que reduzcamos la fuerza de tracción.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La tracción debe ser mayor que la resistencia, y el avión ganará velocidad hasta que la resistencia sea mayor que la tracción.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La tracción debe ser menor que la resistencia, y el avión generará velocidad hasta que estas dos fuerzas opuestas se igualen.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. El ángulo de ataque crítico de un ala:',
    opciones: [
      {
        textoRespuesta: 'Es el ángulo al que se produce una mayor sustentación, antes de entrar en pérdida.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es el ángulo en el que la sustentación disminuye bruscamente y el avión entra en pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el ángulo al que se produce una menor sustentación, antes de entrar en pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el ángulo de ataque al que se vuelve a generar sustentación una vez recuperada la pérdida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. ¿Qué tipo de resistencia al avance se encuentra una aeronave en vuelo?',
    opciones: [
      {
        textoRespuesta: 'Con la resistencia inducida y la resistencia parásita.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Con la resistencia parásita, pues la inducida desaparece una vez que la aeronave despega.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con la resistencia inducida y la parásita sólo con la aeronave en configuración sucia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con la resistencia inducida, la resistencia parásita y la debida al peso de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. ¿Qué ocurre a medida que aumentamos el ángulo de ataque de la aeronave?',
    opciones: [
      {
        textoRespuesta: 'La capa límite se desprende más cerca del borde de ataque y disminuye la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La capa límite se desprende más cerca del borde de salida y disminuye la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La capa límite se desprende más cerca del borde de salida y aumenta la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La capa límite se desprende más cerca del borde de ataque y aumenta la resistencia inducida.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '55. El efecto suelo se puede entender como:',
    opciones: [
      {
        textoRespuesta:
          'Un aumento de la sustentación y una disminución de la resistencia inducida cuando la aeronave está cerca del suelo, ya sea tierra o agua.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un aumento de la sustentación y una disminución de la resistencia inducida cuando la aeronave está cerca del suelo en tierra, ya que en agua no se produce.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un aumento de la sustentación y de la resistencia inducida cuando la aeronave está cerca del suelo, ya sea en tierra o agua.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un aumento de la sustentación y una disminución de la resistencia parásita cuando la aeronave está cerca del suelo, ya sea en tierra o en agua.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. En una pista de aeródromo en la que la presión se mantenga constante:',
    opciones: [
      {
        textoRespuesta: 'Un aumento de la temperatura hará aumentar la densidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una disminución de la temperatura hará disminuir la densidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aumento de la temperatura hará disminuir forzosamente la presión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un aumento de la temperatura hará disminuir la densidad.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '57. Un perfil alar que se mueve dentro de una corriente de aire con cierto ángulo de ataque, ¿qué efecto produce?',
    opciones: [
      {
        textoRespuesta:
          'Un efecto Bernoulli por el que las partículas de aire del extradós aumentan su velocidad, por lo que si aplicamos el efecto Venturi, disminuyen su presión',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un efecto Venturi por el que las partículas de aire del extradós disminuyen su velocidad, por lo que si aplicamos el efecto Bernoulli, aumentan su presión.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un efecto Venturi por el que las partículas de aire del extradós aumentan su velocidad, por lo que si aplicamos el efecto Bernoulli, disminuyen su presión.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un efecto Venturi por el que las partículas de aire del extradós aumentan su velocidad, por lo que si aplicamos el efecto Bernoulli, también aumentan su presión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '58. La altitud de densidad y la altitud de presión:',
    opciones: [
      {
        textoRespuesta: 'Coincidirán siempre que la presión sea la de la atmósfera estándar, es decir, 1.013 milibares.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Coincidirán cuando la presión y la temperatura sean las de la atmósfera estándar, es decir, 1.013 milibares y 15ºC a nivel del mar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'No coincidirán en ningún caso ya que la altitud de densidad está corregida por temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Coincidirán siempre que la temperatura sea la de la atmósfera estándar, es decir, 15ºC a nivel del mar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. Normalmente la torsión del ala consigue que:',
    opciones: [
      {
        textoRespuesta: 'Sea más complicado entrar en barrena después de una pérdida, pues mejora la estabilidad longitudinal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La pérdida se inicie en la zona de las puntas y de ahí progresivamente hasta el encastre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La pérdida se inicie a un ángulo de ataque mayor, lo que proporciona más margen de maniobra.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La pérdida se inicie en la zona del encastre y de ahí progresivamente hasta las puntas.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '60. El diedro de una aeronave es:',
    opciones: [
      {
        textoRespuesta: 'El ángulo que se forma entre el 25% de la cuerda y la perpendicular al eje longitudinal de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El ángulo, que puede ser positivo, negativo o neutro, que forma el plano del ala con el plano horizontal de la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El ángulo, que puede ser positivo o negativo, que forma el plano del ala con el plano horizontal de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo que forma el plano del ala con el eje longitudinal de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '61. ¿Qué ocurre cuando tenemos efecto suelo?',
    opciones: [
      {
        textoRespuesta:
          'Para un mismo ángulo de ataque aumenta la velocidad y para una misma velocidad disminuye el empuje necesario.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Para un mismo ángulo de ataque aumenta la sustentación y para una misma velocidad aumenta el empuje necesario.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Para un mismo ángulo de ataque aumenta el empuje necesario y para una misma velocidad aumenta la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Para un mismo ángulo de ataque aumenta la sustentación y para una misma velocidad disminuye el empuje necesario.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '62. La estabilidad que se considera más afectada por diferentes factores durante el vuelo es:',
    opciones: [
      {
        textoRespuesta: 'La estabilidad lateral.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estabilidad longitudinal.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La estabilidad dinámica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La estabilidad vertical.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. El punto, a lo largo de la cuerda aerodinámica, en el que se encuentra aplicada la fuerza de sustentación es el:',
    opciones: [
      {
        textoRespuesta: 'Centro de gravedad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Punto de transición.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Punto de sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centro de presiones.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '64. A medida que el fluido se desliza por el extradós del ala:',
    opciones: [
      {
        textoRespuesta: 'Aumenta el espesor de la capa límite, que tras pasar por el punto de transición se convierte en turbulenta.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Disminuye el espesor de la capa límite, que tras pasar por el punto de transición se convierte en turbulenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta el espesor de la capa límite, que tras pasar por el punto de transición se convierte en laminar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye el espesor de la capa límite, que tras pasar por el punto de transición se convierte en laminar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. La relación entre la sustentación y la resistencia al avance es:',
    opciones: [
      {
        textoRespuesta: 'La resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia estructural de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El rendimiento aerodinámico del ala.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La tracción.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '66. La resistencia inducida:',
    opciones: [
      {
        textoRespuesta: 'Tiene su origen en la sustentación y disminuye al aumentar la velocidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tiene su origen en la sustentación y aumenta al aumentar la velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tiene su origen en la tracción y disminuye al aumentar la velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tiene su origen en la sustentación y aumenta al aumentar la resistencia parásita.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. Desplegar los spoilers en las dos alas al mismo tiempo permite:',
    opciones: [
      {
        textoRespuesta: 'Realizar descensos rápidos sin reducir la potencia ni aumentar la velocidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Realizar descensos rápidos sin reducir la potencia ni la velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Realizar descensos rápidos sin aumentar la potencia ni la velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Realizar ascensos con gran ángulo de trayectoria sin aumentar la potencia ni la velocidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '68. El mayor peligro de una pérdida es que se produzca a poca altura, pues es posible que no dé tiempo a recuperarla. Sin embargo, en condiciones normales su recuperación es relativamente sencilla. ¿Cómo se lleva a cabo?',
    opciones: [
      {
        textoRespuesta:
          'Lo primero que hay que hacer es aplicar motor, luego bajar el morro y una vez que tengamos la velocidad suficiente, recuperamos la altura perdida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Lo primero que hay que hacer es bajar el morro, luego aplicar motor y una vez tengamos la velocidad suficiente, recuperamos la altura perdida.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Lo primero que hay que hacer es subir el morro, luego aplicar motor y una vez que tengamos la velocidad suficiente, recuperamos la altura perdida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Lo primero que hay que hacer es bajar el morro, luego disminuir la potencia y una vez que tengamos velocidad suficiente, recuperamos la altura perdida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. La fuerza aerodinámica en un perfil alar se efectúa:',
    opciones: [
      {
        textoRespuesta: 'De forma perpendicular a la cuerda aerodinámica.',
        isCorrect: true
      },
      {
        textoRespuesta: 'De forma perpendicular a la dirección del viento relativo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De forma paralela a la fuerza de la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De forma paralela y de sentido opuesto a la dirección del viento relativo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. ¿Cómo definiría la flecha de una aeronave?',
    opciones: [
      {
        textoRespuesta: 'Es el ángulo que se forma entre el 25% de la cuerda y el eje longitudinal de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es el ángulo que se forma entre cualquier punto de la cuerda y la perpendicular al eje longitudinal de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el ángulo que se forma entre el 25% de la cuerda y la perpendicular al eje longitudinal de la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es el ángulo que se forma entre el borde de ataque y la perpendicular al eje longitudinal de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. La capa límite:',
    opciones: [
      {
        textoRespuesta: 'Es siempre laminar y su velocidad va desde cero hasta la de la corriente de aire.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede ser laminar o turbulenta, siendo el punto de transición aquel en el que pasa de una forma a otra.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Puede ser laminar o turbulenta, siendo el punto límite aquel en el que pasa de una forma a otra.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede ser laminar o turbulenta y su velocidad es siempre cero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '72. Si queremos ganar velocidad sin ascender, ¿cómo debemos actuar?',
    opciones: [
      {
        textoRespuesta: 'Aplicaremos palanca de gases y aumentaremos el ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aplicaremos palanca de gases.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aplicaremos palanca de gases y disminuiremos el ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuiremos el ángulo de ataque.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. ¿Dónde se encuentra aplicado el centro aerodinámico?',
    opciones: [
      {
        textoRespuesta: 'A lo largo del eje longitudinal de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el ala, se mide en % de la cuerda y se desplaza en función del ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En el ala, se mide en % de la cuerda media y se desplaza en función del ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el ala, se mide en % de la cuerda y se desplaza en función de la carga y centrado de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '74. ¿Cuál es el principio de funcionamiento por el que las superficies primarias de control de vuelo provocan movimientos a través de los tres ejes de giro de la aeronave?',
    opciones: [
      {
        textoRespuesta: 'Provocan un desplazamiento del centro de gravedad a lo largo de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provocan un desequilibrio aerodinámico entre diferentes partes de la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Provocan un desequilibrio del peso de la aeronave en sus diferentes superficies.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provocan un desequilibrio aerodinámico entre las dos alas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. Cuanto más cerca del borde de ataque se desprende la capa límite:',
    opciones: [
      {
        textoRespuesta: 'Mayor es el ángulo de ataque y la resistencia inducida.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor es el ángulo de ataque y menor la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor es el ángulo de ataque y la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor es el ángulo de ataque y mayor la resistencia inducida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. Los mandos primarios son los encargados de:',
    opciones: [
      {
        textoRespuesta: 'Llevar el control de la aeronave durante el vuelo mediante el movimiento de sus dos o tres ejes de giro.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Llevar el control de la aeronave durante el vuelo mediante el movimiento de sus dos o tres ejes de giro y controlar los dispositivos hipersustentadores.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Llevar el control de la aeronave en tierra mediante el movimiento de sus dos o tres ejes de giro.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Llevar el control de la aeronave durante el vuelo mediante el movimiento de sus dos o tres ejes de giro, controlar los dispositivos hipersustentadores y también los compensadores de vuelo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '77. ¿Cómo mantendremos una velocidad y altitud constantes?',
    opciones: [
      {
        textoRespuesta: 'Haciendo que la tracción sea mayor que el peso y la sustentación mayor que la resistencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Haciendo que la tracción sea igual que el peso y la sustentación igual que la resistencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Haciendo que la tracción sea igual a la resistencia y el peso igual a la sustentación.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Haciendo que la tracción sea mayor que la resistencia y la sustentación mayor que el peso.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '78. Dos aeronaves, una con más peso que otra, que realizan un viraje con el mismo grado de inclinación y de forma coordinada a nivel constante:',
    opciones: [
      {
        textoRespuesta:
          'La que realice el viraje a mayor velocidad tendrá un factor de carga mayor, independientemente del peso de cada una.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La de mayor peso se verá sometida a un factor de carga mayor y viceversa, independientemente de la velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cada una tendrá un factor de carga en función de su peso y la velocidad a la que realicen el viraje.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las dos se verán sometidas al mismo factor de carga, independientemente del peso y la velocidad.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '79. La deflexión de los flaps:',
    opciones: [
      {
        textoRespuesta:
          'Normalmente será menor en aterrizajes que en despegues, excepto cuando en despegues tengamos viento cruzado o racheado.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Normalmente será mayor en aterrizajes que en despegues, excepto cuando en aterrizajes tengamos viento cruzado o racheado.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Será igual tanto para despegues como para aterrizajes, normalmente con una deflexión inferior a los 15º.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será igual tanto para despegues como para aterrizajes, normalmente con una deflexión superior a los 15º.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. El efecto que produce la palanca o volante si tiramos de ella hacia nosotros es:',
    opciones: [
      {
        textoRespuesta: 'Un movimiento hacia arriba del timón de profundidad, lo que provoca el picado del avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un movimiento hacia abajo del timón de profundidad, lo que provoca el picado del avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un movimiento hacia abajo del timón de profundidad, lo que provoca el encabritado del avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un movimiento hacia arriba del timón de profundidad, lo que provoca el encabritado del avión.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '81. Los elementos que entran en juego en la fórmula de la sustentación son:',
    opciones: [
      {
        textoRespuesta:
          'Densidad y presión del aire, velocidad, temperatura, superficie del coeficiente aerodinámico y ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Densidad del aire, velocidad  y ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Densidad y presión del aire, velocidad, superficie del coeficiente aerodinámico y ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Densidad del aire, velocidad, superficie del coeficiente aerodinámico y ángulo de ataque.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '82. El eje longitudinal de la aeronave es:',
    opciones: [
      {
        textoRespuesta: 'El que se extiende transversalmente, de punta a punta de ala.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El que se extiende a lo largo de la aeronave, a través del morro y de la cola.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El perpendicular al plano que contiene las alas, que pasa por el centro de gravedad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El paralelo al plano que contiene las alas, que pasa por el centro de gravedad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. El factor de carga durante el vuelo recto y nivelado:',
    opciones: [
      {
        textoRespuesta: 'Es de 1G, por lo que el peso es mayor que la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es de 1G, por lo que la sustentación es mayor que el peso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es de 1’5G, por lo que el peso es mayor que la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es de 1G, por lo que la sustentación es igual al peso.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '84. Una aeronave tiene diferentes ejes de giro que son:',
    opciones: [
      {
        textoRespuesta: 'El longitudinal, el lateral y el transversal, que se cruzan en el centro de gravedad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El longitudinal, el lateral y el vertical, que se cruzan en el centro de presiones.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El longitudinal, el lateral y el vertical, que se cruzan en el centro de gravedad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El longitudinal, el lateral y el transversal, que se cruzan en el centro de presiones.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '85. Para evitar perder la mayor altura posible, es importante reconocer los síntomas de la pérdida cuanto antes. ¿Cuáles pueden ser esos síntomas?',
    opciones: [
      {
        textoRespuesta:
          'Una posición anormal de la aeronave, una disminución del sonido del flujo de aire sobre la aeronave y una disminución de la resistencia al movimiento de la palanca son algunos de los síntomas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Una posición anormal de la aeronave, un aumento del sonido del flujo de aire sobre la aeronave y un incremento de la resistencia al movimiento de la palanca son algunos de los síntomas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una posición anormal de la aeronave, un aumento del sonido del flujo de aire sobre la aeronave y una disminución de la resistencia al movimiento de la palanca son algunos de los síntomas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una posición normal de la aeronave, una disminución del sonido del flujo de aire sobre la aeronave y un incremento de la resistencia al movimiento de la palanca son algunos de los síntomas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '86. El factor de carga aumenta durante las turbulencias debido a las ráfagas de aire. ¿Sufrirá daños estructurales nuestra aeronave si volamos por una zona de turbulencias?',
    opciones: [
      {
        textoRespuesta:
          'No, pues el avión está diseñado para que las turbulencias no afecten a su estructura aun cuando vuela a la máxima velocidad estructural.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Sí. Las zonas de turbulencias son muy peligrosas para la estructura de la aeronave, por eso hay que intentar evitarlas en todo momento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No, siempre que volemos a la velocidad de turbulencias específica que tiene cada avión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'No, siempre que volemos a baja velocidad, a la más cercana que podamos a la velocidad de pérdida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. Conforme aumenta el ángulo de ataque el centro de presiones:',
    opciones: [
      {
        textoRespuesta: 'Ejerce más fuerza pero se mantiene fijo en su posición.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se desplaza hacia el borde de salida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ejerce menos fuerza pero se mantiene fijo en su posición.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se desplaza hacia el borde de ataque.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '88. El primer lugar del perfil alar donde incide o hace contacto la corriente de aire se denomina:',
    opciones: [
      {
        textoRespuesta: 'Extradós.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Intradós.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Borde de salida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Borde de ataque.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '89. Los vórtices que se generan detrás del perfil alar:',
    opciones: [
      {
        textoRespuesta: 'Son resistencia parásita debida a la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son resistencia inducida debida a la sustentación.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Son una corriente de aire que ayuda a la sustentación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son resistencia parásita debida a los componentes del avión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. La sustentación genera una fuerza que frena a la aeronave y es:',
    opciones: [
      {
        textoRespuesta:
          'La resistencia parásita, que empieza a generarse en el momento en que la primera rueda del tren de aterrizaje se levanta de la pista.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia inducida, que empieza a generarse desde el momento en que la aeronave comienza a moverse.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia parásita, que empieza a generarse desde el momento en que la aeronave comienza a moverse.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La resistencia inducida, que empieza a generarse en el momento en que la primera rueda del tren de aterrizaje se levanta de la pista.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '91. El factor de carga en un viraje coordinado, a nivel constante, es el resultado de las fuerzas centrífuga y de gravedad. Podemos afirmar que:',
    opciones: [
      {
        textoRespuesta: 'Este factor de carga aumenta significativamente a partir de 30º de inclinación y se duplica a los 45º.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Este factor de carga aumenta significativamente desde el momento en que iniciamos el viraje y se duplica a los 60º.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Este factor de carga aumenta significativamente a partir de 45º de inclinación y se duplica a los 60º.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Este factor de carga aumenta significativamente desde el momento en que iniciamos el viraje y se duplica a los 45º.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. El centro aerodinámico o centro de presiones se define como:',
    opciones: [
      {
        textoRespuesta:
          'El punto imaginario en el cual se encuentra concentrada toda la masa del avión y que tiene unos límites de desplazamiento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El punto de aplicación de la fuerza de sustentación, que se mide en % de la curvatura media y tiene unos límites de desplazamiento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El punto de aplicación de la fuerza de sustentación, que se mide en grados de la cuerda aerodinámica y es fijo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El punto de aplicación de la fuerza de sustentación, que se mide en % de la cuerda aerodinámica y tiene unos límites de desplazamiento.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '93. Si aplicamos palanca de gases pero no queremos ascender, ¿qué debemos hacer?',
    opciones: [
      {
        textoRespuesta: 'Mover el timón de profundidad hacia abajo para aumentar el ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mover el timón de profundidad hacia abajo para disminuir el ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mover el timón de profundidad hacia arriba para disminuir el ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mover el timón de profundidad hacia arriba para aumentar el ángulo de ataque.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '94. En vuelo recto y nivelado, las cuatro fuerzas que actúan sobre la aeronave están en equilibrio. ¿Qué ocurre si aumentamos una de ellas, como por ejemplo la tracción?',
    opciones: [
      {
        textoRespuesta: 'La aeronave se acelera y lo seguirá haciendo hasta que reduzcamos de nuevo la tracción.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La aeronave se acelera hasta que la resistencia compensa el aumento de tracción, y vuelve al vuelo recto y nivelado con la velocidad anterior.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La aeronave se acelera hasta que la resistencia compensa el aumento de tracción, y vuelve al vuelo recto y nivelado a una velocidad menor que la anterior.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La aeronave se acelera hasta que la resistencia compensa el aumento de tracción, y vuelve al vuelo recto y nivelado a una velocidad mayor que la anterior.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '95. Podemos definir el espesor como:',
    opciones: [
      {
        textoRespuesta: 'La distancia media que separa al extradós y al intradós en un perfil alar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La distancia máxima que separa al extradós y al intradós en un perfil alar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La distancia máxima que separa al borde de ataque del borde de salida en un perfil alar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La distancia media que separa al borde de ataque del borde de salida en un perfil alar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. El alargamiento de una aeronave se define como:',
    opciones: [
      {
        textoRespuesta: 'La relación entre la cuerda de la punta del ala y la cuerda del encastre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La mayor distancia entre la punta de las alas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación entre la envergadura y la cuerda media.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La relación entre la envergadura y lo que mide el fuselaje a lo largo del eje longitudinal de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. ¿Cuál es el propósito de la torsión de un ala?',
    opciones: [
      {
        textoRespuesta: 'Proporcionar estabilidad lateral a la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporcionar estabilidad longitudinal a la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Evitar que entre en pérdida con brusquedad al mismo tiempo a lo largo de toda el ala.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hacer el ala más resistente a las cargas tanto positivas como negativas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. ¿Cómo actúa el factor de carga en la recuperación de una barrena?',
    opciones: [
      {
        textoRespuesta: 'Será mayor que el de la pérdida y si se realiza correctamente no superará los 3G.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si se realiza correctamente será igual que en una pérdida y no superará los 3G.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si se realiza correctamente será igual que en una pérdida y no superará los 2’5G.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Si se realiza correctamente será menor que en una pérdida y no superará los 2G.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '99. La estabilidad longitudinal:',
    opciones: [
      {
        textoRespuesta: 'Hace que un avión sea dinámicamente estable.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hace que un avión sea estable alrededor de su eje longitudinal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hace que un avión sea estable alrededor de su eje vertical.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hace que un avión sea estable alrededor de su eje lateral.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '100. El espesor de la capa límite:',
    opciones: [
      {
        textoRespuesta: 'Aumenta conforme nos vamos acercando al borde de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se mantiene prácticamente constante en toda la zona en la que es laminar, aumentando cuando se vuelve turbulenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye conforme nos vamos acercando al borde de salida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta conforme nos vamos acercando al borde de salida.',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
