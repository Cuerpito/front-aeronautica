const preguntas = [
  {
    titulo: '1. ¿Qué efectos tienen las aceleraciones con G positivas sobre la vista?',
    opciones: [
      {
        textoRespuesta: 'Pueden llegar a provocar la visión roja.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En primer lugar provocan visión borrosa, luego el efecto túnel y por último visión roja.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En primer lugar provocan visión borrosa, luego el efecto túnel y por último visión negra.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En primer lugar provocan visión roja y luego la visión se volvería negra.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. ¿Cuál es la función básica que cumple el oído?',
    opciones: [
      {
        textoRespuesta: 'La percepción del sonido o audición, para lo cual cada una de las partes del oído cumple su objetivo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cumple dos funciones básicas que son la percepción del sonido o audición, por medio del sistema vestibular, y el mantenimiento del equilibrio corporal mediante la cóclea o caracol.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cumple dos funciones básicas que son la percepción del sonido o audición, por medio de la trompa de Eustaquio, y el mantenimiento del equilibrio corporal mediante el sistema vestibular.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cumple dos funciones básicas que son la percepción del sonido o audición, por medio de la cóclea o caracol, y el mantenimiento del equilibrio corporal mediante el sistema vestibular.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3. Durante la respiración, ¿cómo se introduce el aire en los pulmones?',
    opciones: [
      {
        textoRespuesta:
          'Durante la fase de espiración, debido a la disminución del volumen del tórax, que reduce la presión pulmonar y permite que el aire entre en ellos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Durante la fase de inspiración, debido al incremento del volumen del tórax, que reduce la presión pulmonar y permite que el aire entre en ellos.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Durante la fase de inspiración, debido al incremento del volumen del tórax, que aumenta la presión pulmonar y permite que el aire entre en ellos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Durante la fase de inspiración, debido a la disminución del volumen del tórax, que reduce la presión pulmonar y permite que el aire entre en ellos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4. Las células receptoras del ojo humano encargadas de la visión diurna y la captación de los colores son:',
    opciones: [
      {
        textoRespuesta: 'Los conos, que se encuentran en la fóvea y de los cuales existen tres tipos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los conos, que se encuentran en la retina fuera de la fóvea y de los cuales existen tres tipos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los bastones, que se encuentran en la fóvea y de los cuales existen tres tipos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los bastones, que se encuentran en la retina fuera de la fóvea.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. ¿Qué papel tienen los vasos sanguíneos en el sistema circulatorio?',
    opciones: [
      {
        textoRespuesta:
          'Están formados por las arterias y las venas y son los encargados de que la sangre, a través del bombeo del corazón, llegue a todas las células del cuerpo humano.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Son los encargados de que la sangre se pueda transportar a través de todas las arterias, venas y capilares que forman el sistema circulatorio.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Están formados por las arterias, venas y capilares y son los encargados de que la sangre, a través del bombeo del corazón, llegue a todas las células del cuerpo humano.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Están formados por las arterias, venas y capilares y son los encargados de que la sangre reciba la cantidad de oxígeno adecuado para su circulación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6. El estrés puede tener múltiples causas pero cuando aparece es normal que se dé una serie de síntomas fisiológicos tales como:',
    opciones: [
      {
        textoRespuesta:
          'Desaceleración del pulso, aumento de la temperatura corporal, disminución de la respiración, dilatación de las pupilas, etc.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aceleración del pulso, aumento de la temperatura corporal, incremento de la respiración, contracción de las pupilas, etc.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aceleración del pulso, aumento de la temperatura corporal, incremento de la respiración, dilatación de las pupilas, etc.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aceleración del pulso, disminución de la temperatura corporal, incremento de la respiración, dilatación de las pupilas, etc.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7. En cuanto al sistema circulatorio, indique cuál de las siguientes afirmaciones es correcta:',
    opciones: [
      {
        textoRespuesta:
          'La sangre sale del corazón a través de las arterias y entra por las venas, mientras que los capilares son los encargados de la unión de ambas con el corazón.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La sangre sale del corazón a través de las arterias y entra por las venas, mientras que los capilares son los encargados de establecer la conexión entre ambas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La sangre sale del corazón a través de las venas y entra por las arterias, mientras que los capilares son los encargados de establecer la conexión entre ambas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La sangre sale del corazón a través de las venas y entra por las arterias, mientras que los capilares son los encargados de la unión de ambas con el corazón.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. ¿En qué consiste el error de la visión conocido como miopía?',
    opciones: [
      {
        textoRespuesta: 'En que la refracción de los rayos luminosos se formen delante de la retina y afecta a la visión de lejos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En que la refracción de los rayos luminosos se formen delante de la retina y afecta a la visión de cerca.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En que la refracción de los rayos luminosos se formen detrás de la retina y afecta a la visión de lejos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En que la refracción de los rayos luminosos se formen detrás de la retina y afecta a la visión de cerca.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '9. Una persona que tiene tendencia a pensar que nada puede sucederle, encajaría en la actitud de comportamiento que denominamos:',
    opciones: [
      {
        textoRespuesta: 'Macho.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Invulnerable.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Resignado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Impulsivo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. ¿Cómo es la frecuencia respiratoria de un adulto en reposo?',
    opciones: [
      {
        textoRespuesta:
          'Está en torno a los 12 ciclos de inspiración/espiración por minuto en las mujeres y 20 ciclos en los hombres.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede oscilar entre 12 y 20 ciclos de inspiración/espiración por minuto.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Está en torno a los 20 ciclos de inspiración/espiración por minuto en las mujeres y 12 ciclos en los hombres.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede oscilar entre 10 y 15 ciclos de inspiración/espiración por minuto.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11. El vuelo siempre exige un esfuerzo físico y mental además de un permanente estado de alerta por parte del piloto, lo que puede llevarlo a un estado de fatiga, que consiste en:',
    opciones: [
      {
        textoRespuesta:
          'La sensación de cansancio, debilitamiento, etc., aunque en principio sea capaz de reaccionar adecuadamente ante una necesidad o estímulo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La sensación de cansancio, debilitamiento, etc., que disminuye sus capacidades físicas y funcionales de tal forma que no es capaz de reaccionar adecuadamente ante una necesidad o estímulo.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Una estimulación del sistema nervioso central que provoca la sensación de cansancio, debilitamiento, etc., aunque en principio sea capaz de reaccionar adecuadamente ante una necesidad o estímulo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La sensación de falsa euforia que disminuye sus capacidades físicas y funcionales de tal forma que no es capaz de reaccionar adecuadamente ante una necesidad o estímulo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12. Las ilusiones en vuelo pueden causar desorientación. En este sentido, por ejemplo, ¿qué suele ocurrir cuando sacamos un viraje largo?',
    opciones: [
      {
        textoRespuesta:
          'Que tenemos la ilusión de que viramos hacia el lado contrario, por lo que tendemos a seguir virando hacia el mismo lado.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que tenemos la ilusión de que seguimos en el viraje, por lo que tendemos a virar hacia el lado contrario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el caso de los virajes no suelen darse ilusiones que causen la desorientación en el vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que tenemos la ilusión de que seguimos en el viraje, por lo que tendemos a seguir virando hacia el mismo lado.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. La parte del ojo que cumple la función de regular la cantidad de luz que pasa y llega finalmente a la retina es:',
    opciones: [
      {
        textoRespuesta: 'La córnea.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La pupila.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El iris.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las células receptoras.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. De las dos variables que se dan en la presión sanguínea:',
    opciones: [
      {
        textoRespuesta: 'La contracción de los ventrículos corresponde a la sístole y la de las aurículas a la diástole.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relajación de los ventrículos corresponde a la sístole y la contracción de los mismos, a la diástole.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La contracción de los ventrículos corresponde a la sístole y la relajación de los mismos, a la diástole.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La contracción de las aurículas corresponde a la sístole y la de los ventrículos, a la diástole.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '15. En un momento determinado sentimos que nos falta el aire y aumentamos el ritmo de nuestra respiración. ¿Qué nos puede ocurrir?',
    opciones: [
      {
        textoRespuesta:
          'Que suframos hiperventilación por un desequilibrio entre el dióxido de carbono expulsado y el producido, siendo mayor el segundo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que suframos hiperventilación por un desequilibrio entre el dióxido de carbono expulsado y el producido, siendo mayor el primero.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Que suframos hiperventilación por un desequilibrio entre el oxígeno expulsado y el aspirado, siendo mayor el primero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que suframos hiperventilación por un desequilibrio entre el oxígeno expulsado y el aspirado, siendo mayor el segundo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16. En cuanto a la presión arterial, sabemos que:',
    opciones: [
      {
        textoRespuesta:
          'La relajación de la musculatura auricular permite que la sangre acumulada en los ventrículos fluya a las aurículas, lo cual corresponde a la diástole.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La relajación de la musculatura ventricular permite que la sangre acumulada en las aurículas fluya a los ventrículos, lo cual corresponde a la sístole.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La contracción de la musculatura ventricular permite que la sangre acumulada en las aurículas fluya a los ventrículos, lo cual corresponde a la diástole.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La relajación de la musculatura ventricular permite que la sangre acumulada en las aurículas fluya a los ventrículos, lo cual corresponde a la diástole.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '17. La taquipnea consiste en:',
    opciones: [
      {
        textoRespuesta:
          'Que el número de latidos del corazón por minuto de una persona adulta en reposo está por encima de lo que se considera habitual.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que el número de respiraciones por minuto de una persona adulta en reposo está por debajo de lo que se considera habitual.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que el número de respiraciones por minuto de una persona adulta en reposo está por encima de lo que se considera habitual.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Que el número de latidos del corazón por minuto de una persona adulta en reposo está por debajo de lo que se considera habitual.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. La función de los capilares en el sistema circulatorio es:',
    opciones: [
      {
        textoRespuesta: 'Establecer la conexión entre el corazón y las venas y arterias.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Establecer la conexión entre el corazón y las venas y arterias y entre estas últimas entre sí.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Establecer la conexión entre las venas y las arterias.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Establecer la conexión entre los tejidos del organismo y las venas y arterias.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. Los conocidos como ladeos representan una de las formas más comunes de desorientación y se dan:',
    opciones: [
      {
        textoRespuesta:
          'Cuando, en vuelo por instrumentos, se realiza un ligero viraje o alabeo y éste no es percibido por el piloto que, al mirar los instrumentos, sacará el viraje bruscamente y tendrá la sensación de seguir virando en el mismo sentido.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando, en vuelo por instrumentos, se realiza un ligero viraje o alabeo y éste no es percibido por el piloto que, al mirar los instrumentos, sacará el viraje bruscamente y tendrá la sensación de estar virando en sentido contrario.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando el piloto realiza un rápido movimiento de cabeza durante el viraje.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando el piloto inclina la cabeza durante un viraje y tiene la sensación de estar descendiendo y realizando un resbale al mismo tiempo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. En el funcionamiento del sistema circulatorio, las arterias:',
    opciones: [
      {
        textoRespuesta: 'Transportan sangre poco oxigenada desde los tejidos del organismo hasta el corazón.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transportan sangre poco oxigenada desde el corazón hasta los tejidos del organismo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transportan sangre oxigenada y con nutrientes desde el corazón hasta los tejidos del organismo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Transportan sangre oxigenada y con nutrientes desde los tejidos del organismo hasta el corazón.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. En reposo, la respiración de una persona adulta:',
    opciones: [
      {
        textoRespuesta: 'Está entre los 16 y 22 ciclos de inspiración y espiración por minuto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está entre los 12 y 20 ciclos de inspiración y espiración por segundo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está entre los 10 y 15 ciclos de inspiración y espiración por segundo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está entre los 12 y 20 ciclos de inspiración y espiración por minuto.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '22. De los tipos de hipoxia que se pueden dar, ¿cuál es la hipóxica?',
    opciones: [
      {
        textoRespuesta:
          'La que corresponde a la disminución de la presión parcial de oxígeno en el aire aspirado a causa de su disminución con la altura.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La que corresponde a la incapacidad de los tejidos del cuerpo humano de utilizar el oxígeno que necesitan.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La que corresponde a un inadecuado transporte de oxígeno a través de la sangre hasta los tejidos que lo necesitan.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que se da cuando la sangre oxigenada en los pulmones no se mueve hacia los tejidos que la necesitan.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. La presión arterial cuenta con dos variables. ¿Cuáles son y a qué corresponde cada una de ellas?',
    opciones: [
      {
        textoRespuesta:
          'La presión diastólica es la más alta, coincidiendo con la contracción de los ventrílocuos, y la sistólica es la más baja, coincidiendo con su relajación.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La presión sistólica es la más alta, coincidiendo con la contracción de los ventrílocuos, y la diastólica es la más baja, coincidiendo con su relajación.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La presión sistólica es la más alta, coincidiendo con la relajación de los ventrílocuos, y la diastólica es la más baja, coincidiendo con su contracción.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La presión sistólica es la más baja, coincidiendo con la contracción de los ventrículos, y la diastólica es la más alta, coincidiendo con su relajación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. Las maniobras que implican giros continuos o prolongados, cuando terminan:',
    opciones: [
      {
        textoRespuesta: 'Provocan la sensación de que seguimos virando en el mismo sentido.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provocan la sensación de un viraje en el sentido contrario.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Provocan la sensación de que estamos descendiendo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provocan la sensación de que estamos ascendiendo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. La mejor forma de detectar el monóxido de carbono es:',
    opciones: [
      {
        textoRespuesta: 'Por el fuerte e inconfundible olor que desprende.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con un detector de humos instalado en la cabina de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Por un detector que consiste en un filtro que se oscurece ante la presencia del gas, instalado en la cabina de la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por el indicador de gases que se encuentra en el panel de instrumentos de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '26. Probablemente, las ilusiones visuales más críticas son aquellas que se pueden producir durante la fase de aterrizaje. En este caso, ¿qué ocurre cuando vamos a aterrizar de noche?',
    opciones: [
      {
        textoRespuesta:
          'Que la ilusión provoca la sensación de volar más bajo, por lo que el piloto volará más alto de lo recomendado, con el riesgo de pasarse la pista.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que la ilusión provoca la sensación de volar más alto, por lo que el piloto volará más bajo de lo recomendado, con el riesgo de chocar con posibles obstáculos.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Que la ilusión provoca la sensación de volar más alto, por lo que el piloto volará más alto de lo recomendado, con el riesgo de pasarse la pista.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que la ilusión provoca la sensación de volar más bajo, por lo que el piloto volará más bajo de lo recomendado, con el riesgo de chocar con posibles obstáculos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. Algunos de los síntomas de la intoxicación por monóxido de carbono son los siguientes:',
    opciones: [
      {
        textoRespuesta: 'Efusividad, dolor de cabeza, visión borrosa, mareos, somnolencia y pérdida de fuerza muscular.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dolor de cabeza, visión borrosa, mareos, somnolencia y pérdida de fuerza muscular.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cianosis, efusividad, dolor de cabeza, mareos, somnolencia y pérdida de fuerza muscular.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Efusividad, deshidratación, dolor de cabeza, visión borrosa, mareos, somnolencia y pérdida de fuerza muscular.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. Las actuaciones humanas se podrían definir como:',
    opciones: [
      {
        textoRespuesta: 'Las capacidades y limitaciones humanas que repercuten en la seguridad de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Las capacidades y limitaciones humanas que repercuten en la seguridad y eficiencia de las operaciones aeronáuticas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Las capacidades y limitaciones humanas que no repercuten en la seguridad y eficiencia de las operaciones aeronáuticas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Capacidades y limitaciones aeronáuticas que repercuten en la seguridad y eficiencia de las operaciones humanas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '29. El juicio del piloto y una correcta toma de decisiones es fundamental para el vuelo, pero hay una serie de actitudes de comportamiento que son susceptibles de provocar deficiencias en este sentido. Por ejemplo, el impulsivo, que es el que:',
    opciones: [
      {
        textoRespuesta: 'Piensa demasiado antes de hacer las cosas hasta el punto de que no es capaz de tomar ninguna decisión.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tiene tendencia a demostrar que es el mejor, con un exceso de confianza que le lleva a realizar acciones arriesgadas para demostrar sus habilidades.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantiene un sentimiento de disconformidad hacia las indicaciones de lo que debe o no debe  hacer.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No piensa antes de hacer las cosas, que las efectúa precipitadamente sin detenerse a realizar análisis de otras alternativas.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '30. Indique cuál de las siguientes afirmaciones es correcta en cuanto a las aceleraciones sufridas durante el vuelo:',
    opciones: [
      {
        textoRespuesta: 'Las aceleraciones con G positivas son las más comunes y las peor toleradas por el cuerpo humano.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las aceleraciones con G negativas son las más comunes y las peor toleradas por el cuerpo humano.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Las aceleraciones con G positivas son las más comunes pero las de G negativas son las peor toleradas por el cuerpo humano.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Las aceleraciones con G negativas son las más comunes pero las de G positivas son las peor toleradas por el cuerpo humano.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '31. El vuelo bajo los efectos del alcohol:',
    opciones: [
      {
        textoRespuesta:
          'Aunque está totalmente prohibido, no siempre supone un impacto negativo sobre la seguridad de la aeronave y de sus ocupantes.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aunque no está prohibido, tiene un impacto negativo sobre la seguridad de la aeronave y de sus ocupantes que hay que tener en cuenta.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Además de estar totalmente prohibido, tiene un impacto negativo sobre la seguridad de la aeronave y de sus ocupantes.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Además de estar totalmente prohibido, tiene un impacto positivo sobre la seguridad de la aeronave y de sus ocupantes.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. Una buena forma de combatir la hiperventilación es:',
    opciones: [
      {
        textoRespuesta: 'Respirando en una bolsa para restablecer el equilibrio de monóxido de carbono.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Respirando en una bolsa para restablecer el equilibrio de oxígeno.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentando la frecuencia de la respiración para restablecer el equilibrio de oxígeno.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Respirando en una bolsa para restablecer el equilibrio de dióxido de carbono.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '33. ¿Cuál puede ser una causa de la presencia de monóxido de carbono en la cabina de la aeronave?',
    opciones: [
      {
        textoRespuesta: 'Por una mala ventilación en el interior.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por los gases de escape de un motor de combustión interna.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La disminución de la presión parcial de oxígeno en altura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por un deficiente funcionamiento de la calefacción.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '34. La hipoxia anémica se produce cuando:',
    opciones: [
      {
        textoRespuesta: 'Los tejidos del cuerpo humano presentan una incapacidad para utilizar el oxígeno.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hay un inadecuado transporte del oxígeno a través de la sangre.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuye la presión parcial de oxígeno debido a la disminución de la presión del aire en altura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La sangre oxigenada en los pulmones no se mueve hacia los tejidos que la necesitan.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. En cuanto a la presión sanguínea, distinguimos entre:',
    opciones: [
      {
        textoRespuesta: 'Diastólica, que corresponde a la máxima presión en las arterias, y sistólica, que corresponde a la mínima.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sistólica, que corresponde a la máxima presión en las arterias, y diastólica, que corresponde a la mínima.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Sistólica, que corresponde a la presión en fase de relajación, y diastólica, que corresponde a la fase de excitación.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Diastólica, que corresponde a la presión en fase de relajación, y sistólica, que corresponde a la fase de excitación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. ¿A qué corresponden la visión periférica y la visión central?',
    opciones: [
      {
        textoRespuesta:
          'La central corresponde a la visión en color y la periférica a aquella que permite detectar el movimiento aunque con información menos detallada.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La periférica corresponde a la visión en color y la central a aquella que permite detectar el movimiento aunque con información menos detallada.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La central corresponde a la visión en color pero con información menos detallada que la periférica, que permite detectar el movimiento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La central corresponde a la imagen del punto en el que estamos enfocando, mientras que la periférica corresponde al resto de nuestro campo visual.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '37. Durante un vuelo se ejerce sobre el piloto una fuerza de aceleración hacia los pies, por lo que la fuerza de inercia va hacia la cabeza. ¿Qué G le está afectando?',
    opciones: [
      {
        textoRespuesta: 'G negativos, que son peor soportados que los positivos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'G positivos, que son peor soportados que los negativos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'G negativos, que son mejor soportados que los positivos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'G positivos, que son mejor soportados que los negativos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. ¿Qué habría que hacer si detectamos la presencia de monóxido de carbono en la cabina?',
    opciones: [
      {
        textoRespuesta:
          'Siempre que sea posible, abrir las ventanillas, cerrar la calefacción, aspirar oxígeno y aterrizar cuanto antes.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Siempre que sea posible, abrir las ventanillas, poner la calefacción, aspirar oxígeno y aterrizar cuanto antes.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Siempre que sea posible, cerrar las ventanillas, cerrar la calefacción, aspirar oxígeno y aterrizar cuanto antes.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Siempre que sea posible, cerrar las ventanillas, poner la calefacción, aspirar oxígeno y aterrizar cuanto antes.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. Las estrategias para reducir el estrés:',
    opciones: [
      {
        textoRespuesta:
          'Dependen fundamentalmente del profesional que lo trate, pero se pueden seguir algunas técnicas susceptibles de ayudar como mantener la forma física o dormir adecuadamente.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Dependen fundamentalmente de la persona de la que se trate, por lo que no existen técnicas susceptibles de ayudar de forma general.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Dependen fundamentalmente de la persona de la que se trate, pero se pueden seguir algunas técnicas susceptibles de ayudar como mantener la forma física o dormir adecuadamente.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Dependen fundamentalmente del profesional que lo trate, que será quien decida qué técnicas se deben llevar a cabo, sin que existan algunas susceptibles de ayudar de forma general.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. El alcohol o los narcóticos pueden provocar un tipo de hipoxia, ¿cuál?',
    opciones: [
      {
        textoRespuesta: 'La hipóxica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La histotóxica.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La anémica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La isquémica.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. ¿Cuáles son las células receptoras que se encuentran en el ojo humano?',
    opciones: [
      {
        textoRespuesta:
          'Los bastones, que se encargan de la discriminación de los colores, y los conos, más utilizados en la visión nocturna.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los conos, que se encargan de la discriminación de los colores, y los bastones, más utilizados en la visión nocturna.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Los bastones y los conos, que se encuentran mezclados en la fóvea y cuyo funcionamiento en común proporciona tanto la visión diurna como la nocturna.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los conos, que se encargan de la discriminación de los colores, y los bastones, más utilizados en la visión diurna.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. Cuando se aplica una aceleración de G positivos sobre el cuerpo humano:',
    opciones: [
      {
        textoRespuesta:
          'Primero se tiene visión borrosa, luego se produce el efecto túnel y por último la visión negra, que es el paso previo a la pérdida de conocimiento.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Primero se tiene visión borrosa, luego se produce el efecto túnel y por último la visión roja, que es el paso previo a la pérdida de conocimiento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Primero se produce el efecto túnel y luego la visión roja, que es el paso previo a la pérdida de conocimiento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se da directamente la visión roja, lo que puede llegar a causar la muerte por la excesiva presión intracraneal.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '43. Existen una serie de aspectos o actitudes de comportamiento susceptibles de provocar deficientes juicios y toma de decisiones, que se han clasificado en:',
    opciones: [
      {
        textoRespuesta: 'Autoritario, impulsivo, resignado, invulnerable y macho.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antiautoridad, impulsivo, resignado, invulnerable y macho.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Antiautoridad, impulsivo, resignado, vulnerable y macho.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autoritario, impulsivo, resignado vulnerable y macho.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. En la respiración, ¿qué proceso tiene lugar durante la fase de espiración?',
    opciones: [
      {
        textoRespuesta:
          'Aumenta el volumen del tórax debido a la relajación del diafragma, se incrementa la presión en los pulmones y se fuerza el aire a salir.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Disminuye el volumen del tórax debido a la contracción del diafragma, disminuye la presión en los pulmones y se fuerza el aire a salir.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aumenta el volumen del tórax debido a la relajación del diafragma, disminuye la presión en los pulmones y permite al aire entrar en ellos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Disminuye el volumen del tórax debido a la relajación del diafragma, se incrementa la presión en los pulmones y se fuerza el aire a salir.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '45. En una barrena nos afectan los G de tal forma que sentiríamos:',
    opciones: [
      {
        textoRespuesta: 'Los efectos propios de los G negativos, como el efecto túnel, entre otros.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los efectos propios de los G positivos, como el efecto túnel, entre otros.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los efectos propios de los G negativos, como la visión roja, entre otros.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los efectos propios de los G positivos, como la visión roja, entre otros.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. El alcohol etílico o etanol está prohibido para el vuelo porque:',
    opciones: [
      {
        textoRespuesta: 'Actúa como un estimulante del sistema nervioso central y deteriora la eficiencia del cuerpo humano.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Actúa como depresor del sistema nervioso central y aunque mejora ciertas capacidades como la de atención, deteriora la eficiencia de otras.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Actúa como estimulante del sistema nervioso central y aunque mejora ciertas capacidades como la coordinación, deteriora la eficiencia de otras.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Actúa como un depresor del sistema nervioso central y deteriora la eficiencia del cuerpo humano.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '47. Durante los ascensos, con el correspondiente cambio de presiones del aire, ¿cómo se comportará el oído?',
    opciones: [
      {
        textoRespuesta:
          'La trompa de Eustaquio tratará de equilibrar las presiones, que en este caso será mayor en el interior del oído medio.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La trompa de Eustaquio tratará de equilibrar las presiones, que en este caso será menor en el interior del oído medio.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El tímpano tratará de equilibrar las presiones, que en este caso será menor en el interior del oído medio.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El tímpano tratará de equilibrar las presiones, que en este caso será mayor en el interior del oído medio.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. La hipermetropía es un efecto de la visión que consiste en:',
    opciones: [
      {
        textoRespuesta:
          'Un error de refracción que hace que los rayos luminosos converjan detrás de la retina y que afecta a la visión de lejos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un error de refracción que hace que los rayos luminosos converjan detrás de la retina y que afecta a la visión de cerca.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un error de refracción que hace que los rayos luminosos converjan delante de la retina y que afecta a la visión de cerca.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un error de refracción que hace que los rayos luminosos converjan delante de la retina y que afecta a la visión de lejos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. El sistema vestibular del oído:',
    opciones: [
      {
        textoRespuesta: 'Se encuentra en el oído medio y su función es cooperar en el mantenimiento del equilibrio.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se encuentra en el oído medio y su función es igualar las presiones entre el interior y el exterior.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se encuentra en el oído interno y su función es cooperar en el mantenimiento del equilibrio.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se encuentra en el oído interno y su función es igualar las presiones entre el interior y el exterior.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. Hablamos de taquicardia cuando:',
    opciones: [
      {
        textoRespuesta: 'Se dan más de 60 latidos por minuto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se dan más de 100 latidos por minuto.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se dan menos de 100 latidos por minuto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se dan menos de 60 latidos por minuto.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. La presión arterial corresponde a una de las características principales de la circulación sanguínea, de forma que:',
    opciones: [
      {
        textoRespuesta: 'Los ventrílocuos son los que se contraen y presionan la sangre en las arterias.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las aurículas son las que se contraen y presionan la sangre en las arterias.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aurícula y el ventrílocuo izquierdos son los que se contraen y presionan la sangre en las arterias.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aurícula y el ventrílocuo derechos son los que se contraen y presionan la sangre en las arterias.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. Podemos decir que la desorientación espacial se produce cuando:',
    opciones: [
      {
        textoRespuesta:
          'El cerebro no es capaz de interpretar correctamente la diferencia entre la información que le proporciona el sentido de la vista y lo que realmente está pasando.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El cerebro no es capaz de interpretar correctamente la diferencia entre las sensaciones producidas por la aceleración centrípeta y la aceleración centrífuga.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El cerebro no es capaz de interpretar correctamente la diferencia entre las sensaciones producidas por la aceleración de la gravedad y la aceleración centrífuga.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El cerebro no es capaz de interpretar correctamente la información recibida a través del sistema vestibular.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. La función que cumple el sistema vestibular del oído es la siguiente:',
    opciones: [
      {
        textoRespuesta:
          'Localizar, discriminar y procesar sonidos procedentes de fuentes distintas, con diferentes tonos y frecuencias.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Equilibrar las presiones entre la parte exterior del oído y la parte interna.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El mantenimiento del equilibrio corporal, función que cumple junto con el sistema visual y el propioceptivo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La adaptación y el aislamiento de ciertos sonidos ante otros que resultan familiares y repetitivos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. La ilusión de Coriolis:',
    opciones: [
      {
        textoRespuesta: 'Se produce debido a un rápido movimiento de la cabeza durante ascensos y descensos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se produce debido a un rápido movimiento de la cabeza durante ascensos, descensos y virajes.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se produce cuando, después de sacar un viraje, se produce la ilusión de que viramos en sentido contrario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se produce debido a un rápido movimiento de la cabeza durante un viraje.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '55. Una de las fases más importantes de la respiración es:',
    opciones: [
      {
        textoRespuesta: 'La inspiración.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La espiración.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La circulación respiratoria.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La ventilación.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '56. La trompa de Eustaquio:',
    opciones: [
      {
        textoRespuesta: 'Se encuentra en el oído interno y su función es igualar las presiones entre el interior y el exterior.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se encuentra en el oído medio y su función es igualar las presiones entre el interior y el exterior.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se encuentra en el oído externo y su función es igualar las presiones entre el interior y el exterior.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se encuentra en el oído interno y su función es ayudar en el mantenimiento del equilibrio.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '57. Funcional y anatómicamente, ¿en qué partes se puede dividir el oído?',
    opciones: [
      {
        textoRespuesta: 'En dos, que corresponden a las funciones que desempeña y que son la de audición y la de equilibrio.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En tres, que corresponden al oído externo, al oído medio y al oído interno.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En dos, que corresponden al oído medio y al oído interno.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En cuatro, que corresponden al oído externo, al oído medio, al oído interno y al conducto auditivo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '58. Cuando los tejidos del cuerpo humano presentan una incapacidad para utilizar el oxígeno que necesitan estamos ante:',
    opciones: [
      {
        textoRespuesta: 'Hipoxia hipóxica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipoxia histotóxica.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hipoxia anémica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipoxia isquémica.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. La ilusión autocinética consiste en que:',
    opciones: [
      {
        textoRespuesta: 'Cuando miramos un punto luminoso sobre un fondo oscuro, este punto parece que se mueve.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando miramos un punto luminoso que oscila en un fondo oscuro, este punto parece permanecer quieto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando se observa una señal luminosa con el avión virando, ésta parecerá tener movimiento propio.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las luces parpadeantes pueden provocar reacciones peligrosas como sensación de vértigo, náuseas o vómitos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. La función de las venas en el sistema circulatorio es:',
    opciones: [
      {
        textoRespuesta: 'Transportar sangre poco oxigenada desde el corazón hasta los tejidos del organismo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transportar sangre oxigenada y con nutrientes desde el corazón hasta los tejidos del organismo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transportar sangre oxigenada y con nutrientes desde los tejidos del organismo hasta el corazón.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transportar sangre poco oxigenada desde los tejidos del organismo hasta el corazón.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '61. ¿De qué forma funciona la visión binocular?',
    opciones: [
      {
        textoRespuesta:
          'Es aquella  en la que las imágenes que llegan al cerebro son procesadas separadamente de forma que se obtiene una visión sin percepción de profundidad.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es aquella en la que ambos ojos miran simultáneamente al mismo objeto, de tal forma que el cerebro, al combinar las dos imágenes, obtiene una visión sin percepción de profundidad.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es aquella en la que ambos ojos miran simultáneamente al mismo objeto, de tal forma que el cerebro, al combinar las dos imágenes, obtiene la visión tridimensional.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Es aquella  en la que las imágenes que llegan al cerebro son procesadas separadamente, de tal forma que el cerebro, al combinar las dos imágenes, obtiene la visión tridimensional.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '62. Teniendo en cuenta los efectos de la hipoxia hipóxica, ¿cuál se considera la zona habitable de la atmósfera?',
    opciones: [
      {
        textoRespuesta: 'Entre el suelo y los 20.000 pies de altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La troposfera.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre el suelo y los 15.000 pies de altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre el suelo y los 10.000 pies de altitud.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '63. ¿Cuáles son las precauciones que debemos tener para el vuelo cuando hemos buceado?',
    opciones: [
      {
        textoRespuesta: 'Evitar volar durante 12 horas si no hemos descendido por debajo de 30 pies y 24 horas si lo hemos hecho.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Evitar volar durante 24 horas si no hemos descendido por debajo de 30 pies y 48 horas si lo hemos hecho.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Evitar volar durante 24 horas siempre que hayamos descendido por debajo de los 10 pies.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Evitar volar durante 12 horas siempre que hayamos descendido por debajo de los 10 pies.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '64. Las aceleraciones o G también tienen efectos sobre el cuerpo humano y su funcionamiento. En este sentido:',
    opciones: [
      {
        textoRespuesta:
          'Los G positivos se producen cuando el cuerpo es acelerado hacia los pies y la fuerza de la inercia actúa hacia la cabeza, y los G negativos, al contrario.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los G positivos se producen cuando el cuerpo es acelerado hacia la cabeza y la fuerza de la inercia también va en esa dirección, y los G negativos, al contrario.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los G positivos se producen cuando el cuerpo es acelerado hacia los pies y la fuerza de la inercia también va en esa dirección, y los G negativos, al contrario.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los G positivos se producen cuando el cuerpo es acelerado hacia la cabeza y la fuerza de la inercia actúa hacia los pies, y los G negativos, al contrario.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '65. Los síntomas que produce la hipoxia:',
    opciones: [
      {
        textoRespuesta: 'Son fácilmente detectables por la persona que los sufre, por lo que puede ponerle solución rápidamente.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No son fácilmente detectables pero suelen afectar de la misma forma a todas las personas, por lo que se puede aprender a detectarlos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No son fácilmente detectables porque provocan una falsa sensación de bienestar que impide ser consciente del problema.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Son tan difíciles de detectar que en demasiadas ocasiones, cuando se hace, ya es demasiado tarde para la persona que los sufre.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '66. La reacción que tiene el cuerpo humano ante cualquier exigencia hecha sobre él es la definición de:',
    opciones: [
      {
        textoRespuesta: 'Reflejo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estrés.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Fatiga.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hipoxia.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. La intoxicación por monóxido de carbono se produce debido a que:',
    opciones: [
      {
        textoRespuesta:
          'Este gas desplaza al oxígeno de los glóbulos blancos, provocando una reducción del suministro de oxígeno a los tejidos del organismo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Este gas desplaza al oxígeno de la hemoglobina, provocando una reducción del suministro de oxígeno a los tejidos del organismo.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Este gas desplaza al oxígeno de la hemoglobina, provocando un aumento del suministro de oxígeno a los tejidos del organismo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Este gas desplaza el oxígeno de los tejidos del organismo, impidiendo así que lo utilicen correctamente.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '68. Podemos decir que la respiración:',
    opciones: [
      {
        textoRespuesta: 'Es un proceso cíclico por medio del cual un organismo intercambia gases con el medio externo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es un proceso cíclico por medio del cual un organismo intercambia oxígeno con el medio externo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es un proceso cíclico por medio del cual un organismo intercambia gases con el medio interno.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es un proceso no cíclico por medio del cual un organismo intercambia oxígeno con el medio externo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '69. Durante la respiración, ¿en qué lugar se produce el intercambio de gases entre el aire atmosférico y la corriente sanguínea?',
    opciones: [
      {
        textoRespuesta: 'En los glóbulos rojos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la laringe.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En los alveolos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En los bronquios.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '70. Teniendo en cuenta que la presión total es la suma de las presiones individuales de los gases que componen una mezcla, ¿a qué llamamos presión parcial?',
    opciones: [
      {
        textoRespuesta: 'A la presión de un número determinado de gases que no conforman el total de la mezcla.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la presión individual de cada gas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'A la presión de un número determinado de gases que no conforman el total de la mezcla o a la presión individual de cada gas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A una parte de la presión de uno de los gases que conforman el total la mezcla.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. La función de la pupila del ojo es:',
    opciones: [
      {
        textoRespuesta: 'Hacer converger los rayos luminosos hacia la parte más interna del ojo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Proporcionar la información visual al cerebro.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alojar las células receptoras como son los conos y los bastones.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Regular la cantidad de luz que llega al fondo del ojo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '72. Aunque existen otras muchas causas, la hipoxia puede provocar hiperventilación. ¿En qué consiste ésta?',
    opciones: [
      {
        textoRespuesta:
          'Aumenta el ritmo y la profundidad de la respiración, deteriorando así el equilibrio entre el oxígeno producido y el eliminado, siendo mayor este último.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aumenta el ritmo y la profundidad de la respiración, deteriorando así el equilibrio entre el CO2 producido y el eliminado, siendo mayor este último.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Disminuye el ritmo y la profundidad de la respiración, deteriorando así el equilibrio entre el CO2 producido y el eliminado, siendo mayor este último.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aumenta el ritmo y la profundidad de la respiración, deteriorando así el equilibrio entre el oxígeno producido y el eliminado, siendo mayor el primero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. La hemoglobina está presente en la sangre y la función que cumple es la de:',
    opciones: [
      {
        textoRespuesta: 'Transportar el oxígeno desde los órganos respiratorios hasta los tejidos del organismo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Transportar el dióxido de carbono desde los órganos respiratorios hasta los tejidos del organismo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transportar el oxígeno desde los tejidos del organismo hasta los órganos respiratorios.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transportar el monóxido de carbono desde los órganos respiratorios hasta los tejidos del organismo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '74. Si el número de respiraciones por minuto de una persona adulta en reposo está por debajo de lo que se considera habitual, hablamos de:',
    opciones: [
      {
        textoRespuesta: 'Bradipnea.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Bradicardia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Taquipnea.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Taquicardia.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '75. Volando a 2.500 pies de altitud sentimos mareo, vértigo, palidez, cianosis y disminución del control y coordinación muscular. ¿Qué es posiblemente lo que nos está pasando?',
    opciones: [
      {
        textoRespuesta: 'Que estamos sufriendo los síntomas de la hipoxia hipóxica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que estamos sufriendo los síntomas de la deshidratación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que estamos sufriendo los síntomas de la hiperventilación.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que estamos sufriendo los síntomas de algún posible problema de oído medio y senos paranasales.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. Las células receptoras que tenemos en el ojo, ¿en qué parte de éste se encuentran?',
    opciones: [
      {
        textoRespuesta: 'En la retina y, más específicamente, dentro de la fóvea.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la retina, pero fuera de la fóvea.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la retina; los bastones dentro de la fóvea y los conos dentro de ésta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la retina; los conos dentro de la fóvea y los bastones fuera de ésta.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '77. El gas causante de la DCS y que hace que tengamos que tomar ciertas precauciones después del buceo es:',
    opciones: [
      {
        textoRespuesta: 'El oxígeno.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El monóxido de carbono.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El nitrógeno.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El hidrógeno.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. ¿Cuál será el tiempo útil de conciencia volando en una cabina presurizada a 40.000 pies de altitud?',
    opciones: [
      {
        textoRespuesta: 'De 9 a 15 segundos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De 15 a 20 segundos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En esas condiciones podremos respirar con normalidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'De 30 a 60 segundos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. Los alveolos son:',
    opciones: [
      {
        textoRespuesta: 'Las unidades funcionales de cada pulmón y el lugar a través del que el aire llega a éste.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Los elementos del pulmón encargados de filtrar, gracias a sus mucosas, los gases procedentes del aire atmosférico.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las unidades funcionales de cada pulmón y el lugar en el que se produce el intercambio de oxígeno.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Las unidades funcionales de cada pulmón y el lugar en el que se produce el intercambio de gases entre el aire atmosférico y la corriente sanguínea.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '80. La presión del aire disminuye con la altura. ¿Por qué afecta este fenómeno a la respiración?',
    opciones: [
      {
        textoRespuesta:
          'Porque la presión parcial de oxígeno en los alveolos también disminuye y ésta es la que determina la cantidad de oxígeno que llega a los tejidos y a la corriente sanguínea.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Porque la presión total en los alveolos es la que determina la cantidad de oxígeno que llega a los tejidos y a la corriente sanguínea.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque la presión parcial de oxígeno en los alveolos también disminuye y ésta es la que determina la cantidad de dióxido de carbono que llega a los tejidos y a la corriente sanguínea.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque la presión parcial de dióxido de carbono en los alveolos también disminuye y ésta es la que determina la cantidad de oxígeno y CO2 que se intercambia en ellos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '81. ¿Cuál es la razón por la que se debe evitar el vuelo cuando tenemos la nariz congestionada?',
    opciones: [
      {
        textoRespuesta:
          'Porque la trompa de Eustaquio, sobre todo en descensos, tendrá dificultad para igualar las presiones, lo que puede causar incomodidades y problemas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Porque la cóclea, sobre todo en descensos, tendrá dificultad para igualar las presiones, lo que puede causar incomodidades y problemas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque la trompa de Eustaquio, sobre todo en ascensos, tendrá dificultad para igualar las presiones, lo que puede causar incomodidades y problemas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Porque la cóclea, sobre todo en ascensos, tendrá dificultad para igualar las presiones, lo que puede causar incomodidades y problemas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '82. La hipoxia es un estado que se produce debido a:',
    opciones: [
      {
        textoRespuesta:
          'Un aumento de la presión parcial de oxígeno en el aire al ser aspirado, a un inadecuado transporte de éste o a la incapacidad de los tejidos para utilizarlo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La disminución de la proporción de oxígeno en el aire aspirado a medida que aumenta la altitud.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La disminución de la presión parcial de oxígeno en el aire al ser aspirado, a un inadecuado transporte de éste o a la incapacidad de los tejidos para utilizarlo.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un aumento del dióxido de carbono en el aire aspirado, normalmente debido a una disminución de la presión parcial de oxígeno.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. La intoxicación por monóxido de carbono es peligrosa porque:',
    opciones: [
      {
        textoRespuesta: 'Impide a los tejidos utilizar correctamente el oxígeno que les llega a través de la sangre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Impide que la sangre oxigenada de los alveolos se mueva hacia los tejidos que la necesitan.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye la presión parcial de oxígeno del aire que aspiramos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dificulta la capacidad de transporte de oxígeno a través de la hemoglobina.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '84. ¿De qué forma se produce el intercambio de gases que tiene lugar en los alveolos pulmonares?',
    opciones: [
      {
        textoRespuesta:
          'Gracias a la diferencia de presión, el aire del exterior llega hasta los bronquios, donde proporciona oxígeno y recibe dióxido de carbono.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Gracias a la diferencia de presión, el aire del exterior llega hasta los alveolos, donde proporciona dióxido de carbono y recibe oxígeno.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Gracias a la igualdad de presión, el aire del exterior llega hasta los alveolos, donde proporciona oxígeno y recibe dióxido de carbono.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Gracias a la diferencia de presión, el aire del exterior llega hasta los alveolos, donde proporciona oxígeno y recibe dióxido de carbono.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '85. Un piloto capaz de reconocer que sufre estrés:',
    opciones: [
      {
        textoRespuesta: 'Debería abstenerse de volar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Debería tomar medicación que le ayude a controlarlo antes de cada vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debería volar con otro piloto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No debería preocuparse a menos que sea estrés crónico.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. La capacidad pulmonar total de una persona adulta suele ser:',
    opciones: [
      {
        textoRespuesta: 'De diez litros.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De seis litros para las mujeres y cuatro litros para los hombres.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De seis litros para los hombres y cuatro litros para las mujeres.',
        isCorrect: true
      },
      {
        textoRespuesta: 'De quince litros para los hombres y doce litros para las mujeres.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. ¿En cuál de los siguientes casos el piloto de una aeronave estaría sufriendo G negativos?',
    opciones: [
      {
        textoRespuesta: 'Durante el vuelo recto y nivelado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Durante un ascenso brusco.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Durante un descenso brusco.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Durante el aterrizaje, en el momento en que el tren toca la pista.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '88. Existen varios tipos de hipoxia que se dan debido a diferentes factores. Entre ellas, ¿cuál es la que más frecuentemente podría afectar al piloto?',
    opciones: [
      {
        textoRespuesta: 'La hipoxia histotóxica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La hipoxia anémica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La hipoxia hipóxica.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La hipoxia isquémica.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '89. El tiempo útil de conciencia volando a 30.000 pies de altitud en una cabina sin presurizar es:',
    opciones: [
      {
        textoRespuesta: 'De uno a dos minutos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'De 30 a 60 segundos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De tres a cinco minutos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'De 15 a 20 segundos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. La frecuencia respiratoria se define como:',
    opciones: [
      {
        textoRespuesta: 'El número de ciclos respiratorios por unidad de tiempo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El número de ciclos respiratorios por unidad de aire.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El número de ciclos respiratorios por cantidad de oxígeno.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El número de ciclos respiratorios por el volumen de aire que es inspirado o espirado.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. Entre los problemas asociados a la visión está la presbicia, que es:',
    opciones: [
      {
        textoRespuesta: 'Un error de refracción a causa de la edad que afecta tanto a la visión de lejos como de cerca.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un error de refracción que hace que los rayos luminosos converjan detrás de la retina y que afecta a la visión de cerca.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un defecto, a causa de la edad, del poder de acomodación o de variación de la distancia focal del cristalino.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un error de refracción por el que los rayos de luz, a causa de irregularidades en la córnea, no se refractan del mismo modo en todas las direcciones.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. ¿Cuáles son los pasos que se deben seguir si notamos síntomas de hipoxia en cualquier persona durante el vuelo?',
    opciones: [
      {
        textoRespuesta:
          'Ponerle la mascarilla de oxígeno a la persona que presenta los síntomas, luego ponérnosla nosotros y descender por debajo de los 10.000 pies de altitud.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Ponernos la mascarilla de oxígeno, luego ponérsela a la persona que presenta los síntomas y descender por debajo de los 10.000 pies de altitud.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Ponerle la mascarilla de oxígeno a la persona que presenta los síntomas, luego ponérnosla nosotros y descender por debajo de los 10.000 metros de altitud.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Comenzar a descender con el fin de llegar por debajo de los 10.000 pies de altitud, ponerle la mascarilla de oxígeno a la persona que presenta los síntomas y luego ponérnosla nosotros mismos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. La ilusión que se produce cuando vamos a aterrizar en una pista más estrecha de lo habitual es:',
    opciones: [
      {
        textoRespuesta:
          'Que volamos más alto, por lo que la tendencia del piloto será la de hacer la senda de aproximación más alto de lo que debería',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que volamos más bajo, por lo que la tendencia del piloto será la de hacer la senda de aproximación más alto de lo que debería.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que volamos más bajo, por lo que la tendencia del piloto será la de hacer la senda de aproximación más bajo de lo que debería.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que volamos más alto, por lo que la tendencia del piloto será la de hacer la senda de aproximación más bajo de lo que debería.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '94. Las ilusiones que puede sufrir la persona que pilota la aeronave se producen en diferentes maniobras. Por ejemplo, tras volar en vuelo recto y nivelado a una velocidad constante durante un largo rato, ¿qué ocurre si aceleramos?',
    opciones: [
      {
        textoRespuesta: 'Que nos da la sensación de estar ascendiendo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que nos da la sensación de entrada en pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que nos da la sensación de estar descendiendo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que nos da la sensación de que la aeronave se acelera demasiado, más de lo que realmente lo está haciendo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. El campo visual se define como:',
    opciones: [
      {
        textoRespuesta:
          'Todo lo que una persona puede ver mirando directamente hacia delante, incluyendo las visiones central y periférica.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Todo lo que una persona puede ver mirando directamente hacia delante, incluyendo la visión central pero no la periférica.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todo lo que una persona puede ver mirando directamente hacia delante y hacia los lados.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Todo lo que una persona puede ver desde una posición determinada, incluyendo la visión que obtiene al ladear la cabeza.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '96. ¿En cuáles de los siguientes casos de aterrizaje se producirá la ilusión visual de volar más alto de lo que realmente vamos?',
    opciones: [
      {
        textoRespuesta:
          'Cuando la pista es más ancha de lo habitual, cuando tiene gradiente negativo, en vuelo de noche o cuando el terreno no tiene características distintivas alrededor',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando la pista es más estrecha de lo habitual, cuando tiene gradiente positivo, en vuelo de día o cuando el terreno tiene características distintivas alrededor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando la pista es más estrecha de lo habitual, cuando tiene gradiente positivo, en vuelo de noche o cuando el terreno no tiene características distintivas alrededor.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Cuando la pista es más ancha de lo habitual, cando tiene gradiente negativo, en vuelo de noche o cuando el terreno no tiene características distintivas alrededor.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. La razón por la que se produce el síndrome de descompresión o DCS después de bucear es que:',
    opciones: [
      {
        textoRespuesta:
          'Al descender durante el buceo, aumenta la presión parcial de hidrógeno en el organismo, que intenta expulsarlo en forma de burbujas cuando la presión exterior disminuye al ascender.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Al descender durante el buceo, aumenta la presión parcial de oxígeno en el organismo, que intenta expulsarlo en forma de burbujas cuando la presión exterior disminuye al ascender.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Al descender durante el buceo, disminuye la presión parcial de nitrógeno en el organismo, que intenta expulsarlo en forma de burbujas cuando la presión exterior aumenta al ascender.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Al descender durante el buceo, aumenta la presión parcial de nitrógeno en el organismo, que intenta expulsarlo en forma de burbujas cuando la presión exterior disminuye al ascender.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '98. Una buena forma de prevenir la desorientación es:',
    opciones: [
      {
        textoRespuesta: 'Realizando entrenamientos en los que, en vuelo real, se utilice el panel de instrumentos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Realizando entrenamientos en los que, en un simulador preferiblemente, se utilice el panel de instrumentos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Mantenerse en buena forma física y llevar una buena alimentación, ya que no es algo que se pueda mejorar con entrenamiento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Combinar siempre el vuelo visual y el vuelo por instrumentos para no dejarnos llevar únicamente por nuestras sensaciones.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '99. El concepto que se puede resumir como el proceso de reconocimiento y análisis de toda la información disponible, seguido por una racional evaluación de las alternativas disponibles, que conduzca a la toma de decisión más oportuna, es:',
    opciones: [
      {
        textoRespuesta: 'La toma de decisión del piloto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El juicio del piloto.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El estrés.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La capacidad de reacción del piloto.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. Los seres humanos tenemos un límite de tolerancia para las aceleraciones que es el siguiente:',
    opciones: [
      {
        textoRespuesta: '3G positivos y 4’5G negativos.',
        isCorrect: false
      },
      {
        textoRespuesta: '2’5G positivos y 5G negativos.',
        isCorrect: false
      },
      {
        textoRespuesta: '4’5G positivos y 3G negativos.',
        isCorrect: true
      },
      {
        textoRespuesta: '5G positivos y 2’5G negativos.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
