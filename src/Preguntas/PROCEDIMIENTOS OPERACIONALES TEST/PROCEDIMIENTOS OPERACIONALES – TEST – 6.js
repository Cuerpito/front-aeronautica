const preguntas = [
  {
    titulo: '1. El momento en el que se produce una pérdida, el factor de carga:',
    opciones: [
      {
        textoRespuesta: 'No suele ser mayor que 1G, el mismo que si estuviese en vuelo recto y nivelado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede hacerse negativo, lo cual tiende a separar al piloto de su asiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se reduce pudiendo llegar a desaparecer por un instante.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Puede hacerse positivo, lo cual tiende a “empujar” al piloto sobre su asiento.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. El umbral de pista se define como:',
    opciones: [
      {
        textoRespuesta:
          'El comienzo y el final de la zona utilizable para el despegue de las aeronaves que se sitúa, normalmente, en el extremo de la pista.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El comienzo de la zona utilizable para el aterrizaje y despegue de las aeronaves que se sitúa, normalmente, en el extremo de la pista.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El comienzo de la zona utilizable para el aterrizaje de las aeronaves que se sitúa, normalmente, en la mitad de la pista.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El comienzo de la zona utilizable para el aterrizaje de las aeronaves que se sitúa, normalmente, en el extremo de la pista.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '3. Un factor de carga positivo se produce:',
    opciones: [
      {
        textoRespuesta: 'En maniobras como por ejemplo un viraje pronunciado, y tienden a separar al piloto de su asiento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En maniobras como por ejemplo la nivelación de la aeronave tras una pérdida, y tienden a dejar al piloto “pegado” en su asiento.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'En maniobras como por ejemplo la nivelación de la aeronave tras una pérdida, y tienden a separar al piloto de su asiento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En maniobras como por ejemplo la entrada en pérdida, y tienden a separar al piloto de su asiento.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4. Estamos volando en una zona de bajas presiones y pasamos a una de altas. ¿Qué nos indicará el altímetro?',
    opciones: [
      {
        textoRespuesta: 'Nos indicará que ascendemos aunque en realidad continuaremos volando a la misma altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nos indicará que descendemos aunque en realidad continuaremos volando a la misma altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicará lo mismo mientras que nosotros descenderemos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicará lo mismo mientras que nosotros ascenderemos.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5. Una aeronave que ha superado la Vne que marca su anemómetro durante el vuelo:',
    opciones: [
      {
        textoRespuesta:
          'No podrá volver a volar, pues los daños estructurales en la aeronave aparecerán con seguridad si se supera esa velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No podrá volver a volar sin una revisión previa aun cuando no se aprecien daños estructurales evidentes, pues el efecto de la fatiga del material es acumulativo y éstos pueden aparecer más adelante.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Necesitará una revisión antes de volar cuando se aprecien daños estructurales evidentes.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Ninguna aeronave puede superar la Vne que marca su anemómetro pues es obligatorio que éstas incorporen un mecanismo regulador que les impida sobrepasarla y evitar así los daños estructurales.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6. ¿Cuáles son las velocidades que delimitan el arco amarillo o margen de velocidad de precaución del anemómetro?',
    opciones: [
      {
        textoRespuesta: 'La Vno y la Vne.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La Vfe y la Vne.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La Vfe y la Vno.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La Vs1 y Vne.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7. ¿Cuál es el mando primario que consigue el movimiento de cabeceo de la aeronave y cómo funciona?',
    opciones: [
      {
        textoRespuesta: 'Son los alerones, que se mueven hacia abajo para encabritar y hacia arriba para picar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el timón de profundidad, que se mueve hacia arriba para picar y hacia abajo para encabritar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el timón de profundidad, que se mueve hacia abajo para picar y hacia arriba para encabritar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Son los alerones, que se mueven hacia arriba para encabritar y hacia abajo para picar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. La mejor forma de despegar cuando tenemos viento cruzado es:',
    opciones: [
      {
        textoRespuesta: 'Utilizando un derrape llevando la palanca al viento y pisando con el pie contrario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizando un resbale pisando con el lado del viento y llevando la palanca al lado contrario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizando un derrape pisando con el lado del viento y llevando la palanca al lado contrario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizando un resbale llevando la palanca al viento y pisando con el pie contrario.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9. ¿De qué forma se realiza el chequeo pre vuelo exterior de la aeronave?',
    opciones: [
      {
        textoRespuesta:
          'Como no existen unas normas concretas, lo más común es empezar por el morro y dar una vuelta completa por la izquierda, y así evitaremos que se nos olvide inspeccionar algo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En todo momento tenemos que seguir las instrucciones del fabricante y si no las tenemos, lo mejor será cancelar el vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aunque debamos seguir las instrucciones del fabricante, una forma común es empezar por el morro, continuar con las dos alas y acabar inspeccionando la aeronave por la cola.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aunque debamos seguir las instrucciones del fabricante, una forma común es empezar por el morro y dar una vuelta completa por la derecha, y así evitaremos que se nos olvide inspeccionar algo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10. Estamos volando hacia el norte y observamos que cada vez nos desviamos más hacia la derecha. ¿Qué es lo que ocurre?',
    opciones: [
      {
        textoRespuesta: 'Que viene el viento por la izquierda, por lo que tenemos que tenemos que poner un rumbo mayor en la brújula.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que viene el viento por la izquierda, por lo que tenemos que tenemos que poner un rumbo menor en la brújula.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que viene el viento por la derecha, por lo que tenemos que tenemos que poner un rumbo mayor en la brújula.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que viene el viento por la derecha, por lo que tenemos que tenemos que poner un rumbo menor en la brújula.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '11. Entre una aeronave que se encuentra en base, a un nivel inferior, y otra que se encuentra en final, a un nivel superior, ¿quién deberá ceder el paso?',
    opciones: [
      {
        textoRespuesta: 'La que se encuentra a un nivel superior, en este caso la que está en final, deberá ceder el paso a la otra.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aeronave que está en final siempre cederá el paso a la que está en base, aunque vaya a un nivel inferior.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La aeronave que se encuentra más alejada de la pista será la que ceda el paso, independientemente de su situación en el circuito de tráfico y del nivel de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aeronave que está en base, aunque vaya a un nivel inferior, cederá el paso a la que está en final.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12. Vamos a aterrizar en un aeródromo y nos encontramos que hay viento en cara creciente. ¿De qué forma procedemos?',
    opciones: [
      {
        textoRespuesta:
          'Iremos disminuyendo el ángulo de ataque para disminuir también la sustentación y mantenernos en la senda de planeo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Iremos aumentando la potencia del motor para mantenernos en la senda de planeo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Iremos disminuyendo la potencia del motor para mantenernos en la senda de planeo.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Iremos aumentando el ángulo de ataque para aumentar también la sustentación y mantenernos en la senda de planeo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. Siempre que el avión lleve varios días aparcado, durante el chequeo prevuelo el piloto:',
    opciones: [
      {
        textoRespuesta:
          'Deberá drenar los depósitos de combustible completamente y utilizar combustible nuevo para evitar la contaminación con agua.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deberá drenar los depósitos de combustible para evitar la contaminación con agua.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Deberá comprobar que los depósitos estén completamente vacíos y llenarlos con combustible nuevo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Deberá drenar los depósitos de combustible para evitar la contaminación con sedimentos, pero no tendrá en cuenta la aparición de agua, pues con el calor ésta se evaporará y eliminará fácilmente.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '14. Los compensadores son los elementos que ayudan al piloto a aliviar su esfuerzo sobre los controles primarios. ¿Dónde se encuentra y cómo funciona el compensador de profundidad?',
    opciones: [
      {
        textoRespuesta: 'Normalmente está unido a la parte delantera del timón de profundidad y se mueve en sentido contrario a éste.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Normalmente está unido a la parte trasera del timón de profundidad y se mueve en el mismo sentido que éste.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Normalmente está unido a la parte trasera del timón de profundidad y se mueve en sentido contrario a éste.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Normalmente está unido a la parte delantera del estabilizador horizontal de cola y se mueve en sentido contrario al timón de profundidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. ¿Cuándo se produce un factor de carga negativo?',
    opciones: [
      {
        textoRespuesta: 'Cuando la fuerza se ejerce hacia abajo, como por ejemplo en un viraje pronunciado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la fuerza se ejerce hacia arriba, como por ejemplo en una nivelación brusca tras una pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la fuerza se ejerce hacia abajo, como por ejemplo en un descenso brusco de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la fuerza se ejerce hacia arriba, como por ejemplo en un descenso brusco de la aeronave.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '16. Excepto en algunos lugares, el nivel de transición en España:',
    opciones: [
      {
        textoRespuesta: 'Está establecido en los 6.000 pies, y cuando lo superamos hay que calar en el altímetro el QNE.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Está establecido en los 6.000 pies, y cuando lo superamos hay que calar en el altímetro el QNH.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está establecido en los 6.000 metros, y cuando lo superamos hay que calar en el altímetro 1.013 milibares.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está establecido en los 6.000 pies, y cuando lo superamos hay que calar en el altímetro el QFE.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17. ¿Cuál es el mínimo nivel de vuelo utilizable?',
    opciones: [
      {
        textoRespuesta: 'El nivel de transición, establecido en casi toda España en 3.000 pies.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El nivel de transición, establecido en casi toda España en 6.000 metros.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El nivel de transición, establecido en casi toda España en 10.000 pies.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El nivel de transición, establecido en casi toda España en 6.000 pies.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '18. Toda aeronave que durante su vuelo sea alcanzada por otra:',
    opciones: [
      {
        textoRespuesta:
          'Tendrá que ceder el paso y mantenerse fuera de la trayectoria de la aeronave a la que alcanza, ya sea ascendiendo, descendiendo o en vuelo horizontal, cambiando su rumbo hacia la derecha.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tendrá que ceder el paso y mantenerse fuera de la trayectoria de la aeronave a la que alcanza, ya sea ascendiendo, descendiendo o en vuelo horizontal, cambiando su rumbo hacia la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tendrá derecho de paso mientras que la que alcanza ya sea ascendiendo, descendiendo o en vuelo horizontal, se mantendrá fuera de su trayectoria cambiando de rumbo hacia la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tendrá derecho de paso mientras que la que alcanza ya sea ascendiendo, descendiendo o en vuelo horizontal, se mantendrá fuera de su trayectoria cambiando de rumbo hacia la derecha.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '19. Cuando dos aeronaves convergen a un mismo nivel aproximado, la que tenga la otra a su derecha es la que cede el paso. Sin embargo, hay una serie de excepciones. De las siguientes, indique cuál es la correcta:',
    opciones: [
      {
        textoRespuesta: 'Los globos cederán el paso a los planeadores.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los dirigibles cederán el paso a las aeronaves propulsadas mecánicamente.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los dirigibles cederán el paso a los globos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los globos cederán el paso a los dirigibles.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. ¿En qué momento marcará el altímetro de nuestra aeronave 0 pies estando en la pista de un aeródromo?',
    opciones: [
      {
        textoRespuesta: 'Cuando estemos en un día ISA, independientemente de la altitud a la que se encuentre la pista.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la pista esté a nivel del mar en un día ISA o cuando calemos el QFE en el altímetro.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando la pista esté a nivel del mar en un día ISA o cuando calemos el QNH en el altímetro.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la pista esté a nivel del mar en un día ISA o cuando calemos el QNE en el altímetro.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. ¿De qué forma conseguimos disminuir el ángulo de ataque de la aeronave?',
    opciones: [
      {
        textoRespuesta:
          'Empujando la palanca o volante, lo cual hace que el timón de profundidad se mueva hacia abajo y el avión realice un movimiento de picado.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Empujando la palanca o volante, lo cual hace que el timón de profundidad se mueva hacia arriba y el avión realice un movimiento de picado.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Empujando la palanca o volante, lo cual hace que el timón de profundidad se mueva hacia abajo y el avión realice un movimiento de encabritado.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Empujando la palanca o volante, lo cual hace que el timón de profundidad se mueva hacia arriba y el avión realice un movimiento de encabritado.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '22. En caso de que tengamos una emergencia por parada de motor con hélice de paso variable, ¿cuál es el paso que debemos usar?',
    opciones: [
      {
        textoRespuesta: 'Es indiferente, puesto que ya no será útil para la tracción.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un paso largo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un paso corto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La posición en bandera.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '23. Las luces de navegación que ostenta una aeronave son:',
    opciones: [
      {
        textoRespuesta: 'Una luz blanca a la izquierda, una verde a la derecha y una roja en la cola.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una luz verde a la izquierda, una roja a la derecha y una blanca en la cola.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una luz roja a la izquierda, una verde a la derecha y una blanca en la cola.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una luz blanca a la izquierda, una roja a la derecha y una verde en la cola.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. El procedimiento para recuperar una pérdida sigue el siguiente orden:',
    opciones: [
      {
        textoRespuesta:
          'Cortamos motor, empujamos palanca para bajar el morro, volvemos a arrancar el motor y aplicamos potencia a fondo para aumentar la velocidad, y recuperamos la altura perdida sin brusquedad para evitar pérdidas secundarias.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aplicamos motor a fondo para aumentar la velocidad, empujamos palanca para bajar el morro y recuperamos la altura perdida sin brusquedad para evitar pérdidas secundarias.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Empujamos palanca para bajar el morro, aplicamos motor a fondo para aumentar la velocidad y cuando haya alcanzado la suficiente, recuperamos la altura perdida sin brusquedad para evitar pérdidas secundarias.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Empujamos palanca para subir el morro, aplicamos motor a fondo para aumentar la velocidad y cuando haya alcanzado la suficiente, recuperamos la altura perdida sin brusquedad para evitar pérdidas secundarias.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '25. Teniendo en cuenta que las marcas de nuestro anemómetro, en millas por hora, son las siguientes: Vs0=55, Vs1=65, Vfe=100, Vno=150, Vne=180, ¿cuál de las siguientes afirmaciones es correcta?',
    opciones: [
      {
        textoRespuesta: 'La velocidad máxima a la que puedo usar flaps es 65 mph.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El arco verde o margen norma de operación va de 100 a 150 mph.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El arco blanco o margen normal de operación con flaps extendidos va de 65 a 100 mph.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El arco amarillo o margen de precaución va de 150 a 180 mph.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '26. ¿En qué momento podemos decir que estamos en “nivel del vuelo”?',
    opciones: [
      {
        textoRespuesta: 'Cuando descendemos del nivel de transición y calamos el QNH en el altímetro.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando superamos el nivel de transición y calamos el QNH en el altímetro.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando superamos el nivel de transición y calamos 1.013 milibares en el altímetro.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando superamos el nivel de transición y calamos el QFE en el altímetro.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. ¿A qué corresponde el arco blanco de un anemómetro?',
    opciones: [
      {
        textoRespuesta: 'Al margen de velocidad normal de operación sin flaps extendidos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al margen de velocidad normal de operación con flaps extendidos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Al margen de velocidad normal de operación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al margen de velocidad de precaución.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. Indique la correcta. A la velocidad de crucero:',
    opciones: [
      {
        textoRespuesta: 'El motor del avión funciona a niveles óptimos de presión y temperatura y reduce el consumo de combustible.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El motor del avión funciona a niveles óptimos de presión y temperatura pero aumenta el consumo de combustible.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se reduce el consumo de combustible pero el avión no funcional a niveles óptimos de presión y temperatura.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se reduce el consumo de combustible pero el motor se sobrecalienta, por lo que no es recomendable utilizarla durante largos periodos de vuelo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '29. La mezcla de aire y combustible del carburador es muy importante para el funcionamiento del motor. ¿Qué ocurre con esta mezcla cuando realizamos un ascenso?',
    opciones: [
      {
        textoRespuesta: 'Se enriquece debido a que la densidad del aire disminuye en el exterior.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se enriquece debido a que la presión atmosférica disminuye en el exterior.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se empobrece debido a que la presión atmosférica disminuye en el exterior.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se empobrece debido a que la densidad del aire disminuye en el exterior.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. ¿En cuál de las siguientes situaciones la carrera de despegue sería más corta?',
    opciones: [
      {
        textoRespuesta: 'Pista de hierba alta con pendiente negativa y viento en cara.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pista de hierba corta con pendiente positiva y viento en cara.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pista asfaltada con pendiente positiva y viento en cola.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pista asfaltada con pendiente negativa y viento en cara.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '31. El peso máximo al despegue de una aeronave:',
    opciones: [
      {
        textoRespuesta: 'Está directamente relacionado con la máxima sustentación que puede crear el ala del avión.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Está directamente relacionado con la mínima sustentación que puede crear el ala del avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está directamente relacionado con la máxima velocidad que puede alcanzar el avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está directamente relacionado con la mínima velocidad a la que puede generar sustentación el ala del avión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. Si durante la inspección prevuelo olvidamos quitar la funda al tubo pitot, ¿qué ocurrirá durante el vuelo?',
    opciones: [
      {
        textoRespuesta: 'Que el anemómetro no podrá medir la presión estática del aire y por lo tanto mostrará marcaciones erróneas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que el anemómetro, el altímetro y el variómetro no podrán medir la presión total del aire y por lo tanto mostrarán marcaciones erróneas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que el altímetro y el variómetro no podrán medir la presión total del aire y por lo tanto mostrará marcaciones erróneas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el anemómetro no podrá medir la presión total y por lo tanto mostrará marcaciones erróneas.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '33. ¿De qué forma podemos realizar un viraje pronunciado y no perder altura?',
    opciones: [
      {
        textoRespuesta: 'Aumentando el ángulo de ataque y la velocidad de la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentando el ángulo de ataque y disminuyendo la velocidad de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuyendo el ángulo de ataque y la velocidad de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuyendo el ángulo de ataque y aumentando la velocidad de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '34. Vamos a aterrizar en un aeródromo en el que hay una señal en forma de “T” de color blanco o anaranjado. ¿Qué significa?',
    opciones: [
      {
        textoRespuesta: 'Que el aterrizaje hay que realizarlo en dirección perpendicular al trazo largo de la “T”.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el aterrizaje hay que realizarlo en dirección paralela al trazo largo de la “T” y desde su travesaño.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el aterrizaje hay que realizarlo en dirección paralela al trazo largo de la “T” y hacia su travesaño.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Que el aterrizaje hay que realizarlo en dirección paralela al trazo corto de la “T” dejando el trazo largo a la derecha.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. En cuanto a la prevención de colisiones, en aterrizaje:',
    opciones: [
      {
        textoRespuesta:
          'Las aeronaves que estén operando en tierra cederán el paso a las otras que estén aterrizando o en las fases finales de aproximación para aterrizar.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Las aeronaves que estén en las fases finales de aproximación para aterrizar cederán el paso a las otras que estén operando en tierra.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Las aeronaves que estén operando en tierra no cederán el paso a las otras que estén aterrizando o en las fases finales de aproximación para aterrizar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Las aeronaves que estén en las fases finales de aproximación para aterrizar cederán el paso a las otras que estén en vuelo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. ¿Qué ocurre durante el vuelo si aplicamos palanca de gases?',
    opciones: [
      {
        textoRespuesta: 'Que la aeronave ascenderá.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que aumentará la velocidad de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que aumentará la velocidad de la aeronave y ascenderá.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la aeronave descenderá y aumentará la velocidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '37. Estamos virando hacia la derecha y queremos orientarnos hacia el norte exactamente. Tendremos que sacar el viraje cuando la brújula indique:',
    opciones: [
      {
        textoRespuesta: '330º.',
        isCorrect: true
      },
      {
        textoRespuesta: '360º.',
        isCorrect: false
      },
      {
        textoRespuesta: '030º.',
        isCorrect: false
      },
      {
        textoRespuesta: '010º.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. ¿Cómo se comportan los dos tipos de resistencia que presenta una aeronave en función de la velocidad de ésta?',
    opciones: [
      {
        textoRespuesta: 'Al aumentar la velocidad, tanto la resistencia parásita como la inducida aumentan.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al aumentar la velocidad, la resistencia parásita disminuye y la resistencia inducida aumenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al aumentar la velocidad, la resistencia parásita aumenta y la resistencia inducida disminuye.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Al aumentar la velocidad, tanto la resistencia parásita como la inducida disminuyen.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '39. Según el manual de vuelo de nuestra aeronave, su velocidad de pérdida en configuración de aterrizaje es de 50 km/h. Por lo tanto, ¿cuál es la velocidad mínima a la que podemos volar en aproximación final?',
    opciones: [
      {
        textoRespuesta: '60 km/h.',
        isCorrect: false
      },
      {
        textoRespuesta: '65 km/h.',
        isCorrect: true
      },
      {
        textoRespuesta: '50 km/h.',
        isCorrect: false
      },
      {
        textoRespuesta: '70 km/h.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. Estamos navegando con un rumbo de 45º y una TAS de 180kt, y tenemos viento de 225º a 10kt. ¿Cuál es nuestra GS?',
    opciones: [
      {
        textoRespuesta: '170kt.',
        isCorrect: false
      },
      {
        textoRespuesta: '190kt.',
        isCorrect: true
      },
      {
        textoRespuesta: '185kt.',
        isCorrect: false
      },
      {
        textoRespuesta: '175kt.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. La velocidad que se encuentra a la mitad entre el final del arco blanco y el final del arco verde es:',
    opciones: [
      {
        textoRespuesta: 'La velocidad normal de operación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad de maniobra.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad normal de operación con flaps extendidos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad de crucero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. ¿Cuál es el principio de funcionamiento del anemómetro?',
    opciones: [
      {
        textoRespuesta: 'Obtiene la presión dinámica medida a través del tubo pitot, para transformarla en velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Obtiene la presión dinámica midiendo la estática a través de las tomas estáticas y la total a través del tubo pitot, para transformarla en velocidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Obtiene la presión estática medida a través de las tomas estáticas para transformarla en velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Obtiene la presión total midiendo la estática a través de las tomas estáticas y la dinámica a través del tubo pitot para transformarla en velocidad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. Volando a una gran velocidad, ¿qué ocurre con las resistencias generadas por la aeronave y la sustentación?',
    opciones: [
      {
        textoRespuesta: 'Tendremos tanto una gran resistencia parásita como una gran resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tendremos mucha resistencia parásita y poca resistencia inducida.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tendremos mucha resistencia inducida y poca resistencia parásita.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tendremos tanto poca resistencia parásita como poca resistencia inducida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '44. Entre las razones que hacen importante conocer el factor de carga, hay dos que son especialmente de interés para el piloto. ¿Cuáles pueden ser?',
    opciones: [
      {
        textoRespuesta:
          'El peligro de someter a la aeronave a límites estructurales que pueden llegar a romperlo, y el hecho de que un aumento del factor de carga disminuye la velocidad de pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El peligro de someter a la aeronave a factores de carga positivos y el hecho de que un aumento del factor de carga aumenta la velocidad de pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El peligro de someter a la aeronave a límites estructurales que pueden llegar a romperlo, y el hecho de que un aumento del factor de carga aumenta la velocidad de pérdida.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El peligro de someter a la aeronave a factores de carga negativos y el hecho de que un aumento del factor de carga disminuye la velocidad de pérdida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. Con un motor atmosférico, ¿qué le ocurre a la mezcla de aire y combustible cuando ascendemos?',
    opciones: [
      {
        textoRespuesta: 'Que se enriquece debido a la disminución de presión en altura, así que tenemos que empobrecerla.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que se enriquece debido al incremento de presión en altura, así que tenemos que empobrecerla.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que se empobrece debido a la disminución de presión en altura, así que tenemos que enriquecerla.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que se enriquece debido a la disminución de presión el atura, pero se regula automáticamente en todo tipo de aeronaves.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. ¿Cuál será la velocidad con la que ganaremos mayor altura en la menor distancia horizontal?',
    opciones: [
      {
        textoRespuesta: 'Vx o velocidad de mejor régimen de ascenso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vy o velocidad de mejor ángulo de ascenso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vx o velocidad de mejor ángulo de ascenso.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vy o velocidad de mejor régimen de ascenso.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '47. Cuando ya estamos preparados para volar con nuestra aeronave, debemos realizar un chequeo pre vuelo cuyo objetivo es:',
    opciones: [
      {
        textoRespuesta:
          'Que el piloto, tras realizar una inspección rigurosa en el exterior de la aeronave, compruebe las condiciones de operación de ésta para realizar un vuelo seguro.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que el jefe de vuelos, tras realizar una inspección rigurosa en el exterior e interior de la aeronave, compruebe las condiciones de operación de ésta para realizar un vuelo seguro.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que el piloto, tras realizar una inspección rigurosa en el exterior e interior de la aeronave, compruebe las condiciones de operación de ésta para realizar un vuelo seguro.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Que el piloto, tras realizar una inspección rigurosa en el interior de la aeronave, compruebe las condiciones de operación de ésta para realizar un vuelo seguro.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. ¿Cuáles son las luces de navegación que deben ostentar las aeronaves?',
    opciones: [
      {
        textoRespuesta:
          'Una luz verde a la izquierda, una roja a la derecha y una blanca en la cola, y pueden llevarse como luces fijas o como luces de destellos.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Una luz verde a la izquierda, una roja a la derecha y una blanca en la cola, y deben llevarse como luces fijas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una luz verde a la izquierda, una roja a la derecha y una blanca en la cola, y deben llevarse como luces de destellos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una luz roja a la izquierda, una verde a la derecha y una blanca en la cola, y deben llevarse como luces de destellos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. La explicación de que en la recuperación de una pérdida aparezcan pérdidas secundarias puede ser la siguiente:',
    opciones: [
      {
        textoRespuesta:
          'El estrés causado por la situación hace que normalmente el piloto intente recuperar la altura perdida cuando aún no tiene la velocidad suficiente.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Si tiramos bruscamente de la palanca, el factor de carga positivo se incrementa considerablemente, aumentando también la velocidad de pérdida.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Si tiramos bruscamente de la palanca, el factor de carga negativo se incrementa considerablemente, aumentando también la velocidad de pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Si tiramos bruscamente de la palanca, el factor de carga aumenta de forma considerable, disminuyendo la velocidad de pérdida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '50. Cuando tenemos una emergencia, lo más seguro es seguir un orden de prioridad en las tareas básicas de pilotaje. ¿Cuál puede ser este orden?',
    opciones: [
      {
        textoRespuesta: 'En primer lugar comunicar que tenemos una emergencia cuanto antes, después volar el avión y navegar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En primer lugar volar el avión, después comunicar que tenemos una emergencia y por último navegar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El orden en este dependerá de la situación concreta y del criterio personal del piloto al mando de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En primer lugar volar el avión, después navegar y por último comunicar que tenemos una emergencia.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '51. En un motor atmosférico, la mezcla de aire y combustible:',
    opciones: [
      {
        textoRespuesta:
          'Depende de la presión atmosférica, que disminuye en altura, por lo que la mezcla se empobrece cuando subimos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Depende de la presión atmosférica, que disminuye en altura, por lo que la mezcla se enriquece cuando subimos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depende de la presión atmosférica, que aumenta en altura, por lo que la mezcla se enriquece cuando subimos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Depende de la presión atmosférica, que disminuye en altura, por lo que todas las aeronaves van equipadas para que la mezcla se regule automáticamente en ascensos y descensos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '52. Si vamos a realizar un aterrizaje y tenemos viento cruzado, ¿cuál será la mejor forma de hacerlo?',
    opciones: [
      {
        textoRespuesta: 'Realizando un derrape, llevando la palanca al viento y pisando con el pie contrario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Realizando un resbale, llevando la palanca al viento y pisando con el mismo pie.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Realizando un resbale, llevando la palanca al viento y pisando con el pie contrario.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Realizando un derrape, llevando la palanca al viento y pisando con el mismo pie.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. En un despegue en el que tenemos viento cruzado, ¿cómo actuaremos?',
    opciones: [
      {
        textoRespuesta: 'Llevaremos la palanca al viento y pisaremos con el pie contrario para conseguir un resbale.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Llevaremos la palanca al viento y pisaremos con el pie contrario para conseguir un derrape.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Llevaremos la palanca al viento y pisaremos con el mismo pie para conseguir un resbale.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Llevaremos la palanca al viento y pisaremos con el mismo pie para conseguir un derrape.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '54. El centro de gravedad de una aeronave puede oscilar dentro de unos márgenes sin que las actuaciones de una aeronave se vean comprometidas. Sin embargo, ¿qué puede ocurrir con un centro de gravedad muy adelantado?',
    opciones: [
      {
        textoRespuesta:
          'El avión necesitará menos pista para despegar pero en vuelo se hará inestable y de difícil control, además de hacer crítica la maniobra de recuperación de una pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El avión necesitará más pista para despegar y puede comprometer seriamente la maniobra en caso de tener que recuperar una pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El avión necesitará más longitud de pista para despegar y puede comprometer seriamente la maniobra en caso de tener que realizar un “motor y al aire”.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El avión se hace inestable y de difícil control, y puede hacer crítica la maniobra de recuperación de una pérdida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '55. Las marcas de nuestro anemómetro, en millas por hora, son las siguientes: Vs0=55, Vs1=65, Vfe=100, Vno=150, Vne=180. ¿Cuál es la velocidad máxima a la que puedo usar los flaps?',
    opciones: [
      {
        textoRespuesta: '55 mph.',
        isCorrect: false
      },
      {
        textoRespuesta: '65 mph.',
        isCorrect: false
      },
      {
        textoRespuesta: '100 mph.',
        isCorrect: true
      },
      {
        textoRespuesta: '150 mph.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '56. Estamos en tierra en un aeródromo y recibimos una serie de luces en forma de destellos verdes. ¿Qué quiere decir ese mensaje?',
    opciones: [
      {
        textoRespuesta: 'Autorizado para despegar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorizado para rodaje y despegue.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Regrese al punto de partida en el aeródromo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorizado para rodaje.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '57. De todas las siguientes situaciones, ¿en cuáles se alargará la carrera de despegue?',
    opciones: [
      {
        textoRespuesta:
          'En poca altitud de densidad, en una pista con pendiente positiva, un día con altas temperaturas y una aeronave de gran peso.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En gran altitud de densidad, en una pista con pendiente negativa, un día con altas temperaturas y una aeronave de gran peso.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En gran altitud de densidad, en una pista con pendiente negativa, en un día con bajas temperaturas y una aeronave de gran peso.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En gran altitud de densidad, en una pista con pendiente positiva, un día con altas temperaturas y una aeronave de gran peso.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '58. ¿Cómo se clasifica el factor de carga al que puede verse sometida una aeronave?',
    opciones: [
      {
        textoRespuesta:
          'Puede ser positivo, cuando la fuerza ejercida es hacia arriba, y negativo cuando la fuerza se ejerce hacia abajo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede ser positivo, cuando la fuerza es mayor que un 1G, y negativo cuando es menor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Puede ser positivo, cuando la fuerza ejercida es hacia abajo, y negativo cuando la fuerza se ejerce hacia arriba.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Puede ser positivo, cuando el piloto tiende a despegarse de su asiento, y negativo cuando se queda “pegado” a él.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. Según los instrumentos de los que disponemos en la aeronave, ¿cuándo estaremos realizando un viraje coordinado?',
    opciones: [
      {
        textoRespuesta: 'Cuando el bastón esté en la llamada “caseta de perro” y la bola esté centrada.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Cuando el bastón esté en la llamada “caseta de perro” y la bola esté en el lado hacia el que realizamos el viraje.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando el horizonte artificial marque exactamente los grados de inclinación con los que se está realizando el viraje.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el bastón y la bola coincidan en el lado hacia el que estamos realizando el viraje.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '60. Un avión que tenga el alerón izquierdo hacia abajo y el derecho hacia arriba, ¿sobre qué eje de giro se moverá y en qué dirección?',
    opciones: [
      {
        textoRespuesta: 'Girará sobre su eje vertical y por lo tanto realizará un viraje a la derecha.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Girará sobre su eje vertical y por lo tanto realizará una guiñada hacia la derecha.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Girará sobre su eje longitudinal y por lo tanto realizará un viraje hacia la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Girará sobre su eje longitudinal y por lo tanto realizará un viraje hacia la derecha.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '61. La velocidad de maniobra:',
    opciones: [
      {
        textoRespuesta:
          'Es aquella a la que puede volar una aeronave durante el vuelo de crucero sin peligro de sufrir daños estructurales.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es aquella a la que puede volar una aeronave en cualquier maniobra que realice sin peligro de sufrir daños estructurales.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Es aquella a la que puede volar una aeronave que esté realizando un viraje sin peligro de sufrir daños estructurales.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es aquella a la que puede volar una aeronave en turbulencia sin peligro de sufrir daños estructurales.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '62. En la pista de un mismo aeródromo, vamos a aterrizar un día con viento en cara y otro con viento en calma. ¿Hay alguna diferencia considerable que debamos tener en cuenta en uno y otro caso?',
    opciones: [
      {
        textoRespuesta:
          'Tendremos que tener en cuenta que el día con viento en calma, la senda de planeo en aproximación tendrá que ser más baja que el día con viento en cara.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tendremos que tener en cuenta que el día con viento en cara aumentará la velocidad de pérdida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tendremos que tener en cuenta que el día con viento en calma, la senda de planeo en aproximación tendrá que ser más alta que el día con viento en cara.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tendremos que tener en cuenta que el día con viento en calma aumentará la velocidad de pérdida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. El factor de carga se define como:',
    opciones: [
      {
        textoRespuesta: 'El peso del avión dividido entre la fuerza total que actúa sobre el mismo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación que existe entre la fuerza total que actúa sobre el avión y la fuerza centrífuga.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación que existe entre la fuerza de gravedad y el peso del avión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La relación que existe entre la fuerza total que actúa sobre el avión y el peso del mismo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '64. Nos encontramos en el hemisferio norte, estamos virando hacia la izquierda y queremos orientarnos hacia el rumbo 180º. Debido al error de la brújula, ¿cuándo tenemos que sacar el viraje?',
    opciones: [
      {
        textoRespuesta: 'En 180º.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En 210º.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En 150º.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En 190º.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. Cuando una aeronave esté alcanzando a otra, ¿cuál de las dos tendrá la prioridad?',
    opciones: [
      {
        textoRespuesta:
          'La que esté siendo alcanzada, mientras que la otra se mantendrá fuera de su trayectoria, cambiando su rumbo hacia la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La que esté siendo alcanzada, mientras que la otra se mantendrá fuera de su trayectoria, cambiando su rumbo hacia la derecha.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La que está alcanzando, mientras que la otra se mantendrá fuera de su trayectoria, cambiando su rumbo hacia la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La que está alcanzando, mientras que la otra se mantendrá fuera de su trayectoria, cambiando su rumbo hacia la derecha.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '66. Entre una aeronave propulsada mecánicamente, un planeador, un globo o un dirigible, ¿quién tiene prioridad en caso de que converjan al mismo nivel aproximadamente?',
    opciones: [
      {
        textoRespuesta: 'El planeador.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El dirigible.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El globo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La aeronave propulsada mecánicamente.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. Con un motor atmosférico, en ascenso, ¿qué tenemos que hacer?',
    opciones: [
      {
        textoRespuesta: 'Antes que nada, encender la calefacción del carburador.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Empobrecer la mezcla.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Enriquecer la mezcla.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aplicar palanca de gases al máximo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '68. En caso de que sepamos que podemos encontrar cizalladura en las aproximaciones de un aeródromo, ¿cómo debemos actuar?',
    opciones: [
      {
        textoRespuesta:
          'Disminuyendo la velocidad lo suficiente, tanto en aterrizaje como en despegue, para evitar una fuerte descendencia.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aumentando la velocidad lo suficiente, tanto en aterrizaje como en despegue, para evitar una fuerte descendencia.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Disminuyendo la velocidad lo suficiente, tanto en aterrizaje como en despegue, para evitar una fuerte ascendencia.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aumentando la velocidad lo suficiente, tanto en aterrizaje como en despegue, para evitar una fuerte ascendencia.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. El circuito de tránsito de aeródromo se realizará:',
    opciones: [
      {
        textoRespuesta:
          'Con virajes hacia la izquierda al aproximarse para aterrizar y hacia la derecha después del despegue, a menos que se ordene lo contrario.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con virajes hacia la izquierda al aproximarse para aterrizar y después del despegue.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Con virajes hacia la derecha al aproximarse para aterrizar y después del despegue.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Con virajes hacia la derecha al aproximarse para aterrizar y hacia la izquierda después del despegue, a menos que se ordene lo contrario.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. Cuanto más cerrado queramos que sea un viraje:',
    opciones: [
      {
        textoRespuesta: 'Menos inclinación y más velocidad deberemos llevar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Más inclinación y menos velocidad deberemos llevar.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Más inclinación y más velocidad deberemos llevar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menos inclinación y menos velocidad deberemos llevar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '71. Cuando aplicamos calor al carburador para evitar la formación de hielo, el aire de la mezcla también se calienta. ¿Qué ocurre entonces en un motor atmosférico?',
    opciones: [
      {
        textoRespuesta: 'Que la mezcla se enriquece debido a que la presión del aire aumentará.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la mezcla se empobrece debido a que la presión del aire disminuirá.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la mezcla se enriquece debido a que la presión del aire disminuirá.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que la mezcla se empobrece debido a que la presión de aire aumentará.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '72. Si iniciamos un descenso y no realizamos ningún ajuste a la mezcla de aire y combustible de un motor atmosférico, ¿qué ocurre con ésta?',
    opciones: [
      {
        textoRespuesta: 'Se ajustará automáticamente ya que los motores atmosféricos están preparados para ello.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se enriquecerá debido a que la presión atmosférica aumenta.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se empobrecerá debido a que la presión atmosférica aumenta.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se enriquecerá debido a que la presión atmosférica disminuye.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '73. Normalmente, las zonas más sensibles de una aeronave a los daños estructurales causados por altos factores de carga son:',
    opciones: [
      {
        textoRespuesta: 'Las alas, sobre todo en el borde de ataque y las puntas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las alas, sobre todo en su unión con el fuselaje, y el empenaje de cola.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las alas, sobre todo en su unión con el fuselaje, y el morro.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las alas, sobre todo en su unión con el fuselaje, los bordes de ataque y bordes de salida.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '74. El aumento del factor de carga de una aeronave en vuelo:',
    opciones: [
      {
        textoRespuesta: 'Hará que entre en pérdida a una velocidad menor pero con el mismo ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hará que entre en pérdida con un ángulo de ataque menor pero a la misma velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hará que entre en pérdida a una velocidad mayor pero con el mismo ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hará que entre en pérdida a una velocidad mayor o con un menor ángulo de ataque.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. El conocido como efecto suelo se debe a:',
    opciones: [
      {
        textoRespuesta: 'Un aumento de la sustentación y una disminución de la resistencia inducida.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un aumento de la sustentación aunque también de la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una disminución de la sustentación y un aumento de la resistencia inducida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una disminución tanto de la sustentación como de la resistencia inducida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. Cuando en despegues y aterrizajes tengamos viento cruzado deberemos:',
    opciones: [
      {
        textoRespuesta:
          'Realizar un resbale llevando la palanca al viento y pisando con el pie contrario, y llevar el máximo calado de flaps.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Realizar un derrape llevando la palanca al viento y pisando con el pie contrario, y llevar el mínimo calado de flaps.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Realizar un resbale llevando la palanca al lado contrario del viento y pisando con el mismo pie, y llevar el mínimo calado de flaps.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Realizar un resbale llevando la palanca al viento y pisando con el pie contrario, y llevar el mínimo calado de flaps.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '77. Tras una parada de motor en despegue cuando todavía estamos a poca altura ¿cuál es el procedimiento más seguro que podemos seguir?',
    opciones: [
      {
        textoRespuesta: 'Una vez controlado el avión, intentar volver a la pista de la que hemos salido para aterrizar allí.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una vez controlado el avión, intentar divisar un campo donde podamos aterrizar de emergencia y dirigirnos hacia el lugar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Lo primero que hay que hacer es comunicar la emergencia e intentar volver al campo del que hemos salido para aterrizar allí.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una vez controlado el avión, continuar recto dentro de lo posible y efectuar el aterrizaje de emergencia.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '78. ¿Qué ocurre en la aeronave cuando tiramos de la palanca o volante hacia el pecho?',
    opciones: [
      {
        textoRespuesta: 'El timón de profundidad se mueve hacia abajo y el avión realiza un movimiento en su eje longitudinal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El timón de profundidad se mueve hacia abajo y el avión realiza un movimiento en su eje lateral.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El timón de profundidad se mueve hacia arriba y el avión realiza un movimiento en su eje lateral.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El timón de profundidad se mueve hacia arriba y el avión realiza un movimiento en su eje longitudinal.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '79. La maniobra de recuperación de una pérdida, si tenemos altura suficiente, no debe suponer grandes problemas para el piloto. ¿Cuál es el primer paso que debe seguir?',
    opciones: [
      {
        textoRespuesta: 'Empujar la palanca para bajar el morro y así reducir el ángulo de ataque.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aplicar motor a fondo para aumentar la velocidad de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tirar de la palanca para subir el morro y así aumentar el ángulo de ataque.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cortar motor para, acto seguido, bajar el morro y así reducir el ángulo de ataque.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. ¿En qué posición se encontrarán los alerones de un avión que está virando hacia la izquierda?',
    opciones: [
      {
        textoRespuesta: 'Ambos alerones subirán, pero el de la derecha lo hará más que el de la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El alerón izquierdo se moverá hacia abajo y el derecho lo hará hacia arriba.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El alerón izquierdo se moverá hacia arriba y el derecho lo hará hacia abajo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ambos alerones bajarán, pero el de la derecha lo hará más que el de la izquierda.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '81. La trayectoria en aproximación de una aeronave con un ángulo determinado con respecto al suelo se conoce como:',
    opciones: [
      {
        textoRespuesta: 'Coeficiente de planeo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trayectoria.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Senda de planeo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Final.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '82. ¿Cómo podríamos definir los procedimientos operacionales?',
    opciones: [
      {
        textoRespuesta:
          'Son aquellos que encuadran todas las acciones y comprobaciones que preparan al avión para las diferentes fases de una operación.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Son aquellos que encuadran todas las acciones y comprobaciones que preparan al avión para las diferentes fases de una operación de emergencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son los comportamientos de la aeronave en aquellas situaciones específicas para las que ha sido diseñado.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Son los comportamientos de la aeronave ante aquellas situaciones de emergencia en las que se pueda ver envuelta.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. El altímetro presenta errores debido al cambio de temperatura. Por lo tanto, en un día frío:',
    opciones: [
      {
        textoRespuesta: 'El avión está más alto de lo que indica el altímetro.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro indica que estamos volando más bajo de lo que realmente estamos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión está más bajo de lo que indica el altímetro.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'En realidad la temperatura no influirá en la lectura del altímetro, por lo que no presentará este tipo de errores.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '84. Durante la inspección prevuelo hay algunos aspectos esenciales para el vuelo cuya revisión no se nos puede pasar. Por ejemplo, en el exterior:',
    opciones: [
      {
        textoRespuesta:
          'Tenemos que drenar los depósitos de combustible, comprobar que la cantidad de aceite no es la adecuada, poner la funda del tubo pitot y asegurarnos de que las tomas estáticas no están obstruidas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tenemos que drenar los depósitos de combustible, comprobar que la cantidad de aceite es la adecuada, poner la funda del tubo pitot y asegurarnos de que las tomas estáticas no están obstruidas.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tenemos que drenar los depósitos de combustible, comprobar que la cantidad de aceite es la adecuada, quitar la funda del tubo pitot y asegurarnos de que las tomas estáticas no están obstruidas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Tenemos que drenar los depósitos de combustible, comprobar que la cantidad de aceite es la adecuada, quitar la funda del tubo pitot y de las tomas estáticas, y comprobar que éstas no están obstruidas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '85. ¿Cuál se considera la mezcla estequiométrica en un motor de cuatro tiempos?',
    opciones: [
      {
        textoRespuesta: '8:1.',
        isCorrect: false
      },
      {
        textoRespuesta: '15:1.',
        isCorrect: true
      },
      {
        textoRespuesta: '12:1.',
        isCorrect: false
      },
      {
        textoRespuesta: '21:1.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. ¿En cuál de los siguientes momentos será más efectivo el paso corto de una hélice de paso variable?',
    opciones: [
      {
        textoRespuesta: 'En despegue.',
        isCorrect: true
      },
      {
        textoRespuesta: 'En vuelo de crucero.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A altas velocidades en vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En maniobras de viraje.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '87. Cuando un avión se desplaza se ve sometido a unas fuerzas que medimos con el factor de carga o número n. ¿Cuáles son estas fuerzas?',
    opciones: [
      {
        textoRespuesta: 'Las fuerzas debidas a las aceleraciones y fuerzas centrífugas.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las fuerzas debidas a las aceleraciones y la fuerza de gravedad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las fuerzas debidas a las aceleraciones, el peso de la aeronave, las fuerzas centrípetas y las centrífugas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las fuerzas debidas al peso de la aeronave y las debidas a las aceleraciones.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '88. ¿Cuál es la forma correcta de recuperar una barrena?',
    opciones: [
      {
        textoRespuesta:
          'Primero hay que dejar la palanca o volante en el centro y luego pisar con el pie contrario al sentido del giro.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Primero hay que cortar motor, luego dejar la palanca o volante en el centro y por último pisar con el pie contrario al sentido del giro.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Primero hay que cortar motor, luego dejar la palanca o volante en el centro y por último pisar con el pie en el sentido del giro.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Primero hay que cortar motor, después llevar la palanca o volante al lado contrario del sentido del giro y por último pisar también con el pie contrario.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '89. ¿A qué llamamos el techo de vuelo absoluto en un ULM?',
    opciones: [
      {
        textoRespuesta:
          'A la altitud máxima a la que un ULM es capaz de cumplir correctamente todas las funciones para la que ha sido diseñado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la altitud máxima que es capaz de alcanzar un ULM.',
        isCorrect: true
      },
      {
        textoRespuesta: 'A la altitud máxima a la que puede operar un ULM según la ley, que está fijada en 300 metros o 1.000 pies.',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la altitud mínima a la que puede operar un ULM según la ley, que está fijada en 300 metros o 1.000 pies.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. ¿Cómo se produce una barrena sin que antes hayamos entrado en pérdida?',
    opciones: [
      {
        textoRespuesta: 'Si mantenemos un viraje con derrape durante demasiado tiempo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si mantenemos un viraje con resbale durante demasiado tiempo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si entramos en una térmica y no manejamos bien la situación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una barrena siempre implica que antes hemos entrado en pérdida.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '91. ¿Qué tenemos que hacer cuando sobrepasamos el nivel de transición?',
    opciones: [
      {
        textoRespuesta: 'Calar el QNE en nuestro altímetro, o lo que es lo mismo, calar 1.013 milibares.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Calar el QNH en nuestro altímetro, o lo que es lo mismo, calar 1.013 milibares.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Calar el QNH en nuestro altímetro, que nos lo indicarán desde la torre de control.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Calar el QNE en nuestro altímetro, que nos lo indicarán desde la torre de control.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. La velocidad de maniobra es:',
    opciones: [
      {
        textoRespuesta:
          'La velocidad máxima a la que un avión puede entrar en pérdida sin sobrepasar los límites de factor de carga soportados por la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad a la que realizamos una maniobra con cualquiera de los tres controles de vuelo de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La velocidad mínima a la que un avión puede entrar en pérdida sin sobrepasar los límites de factor de carga soportados por la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La velocidad máxima que puede alcanzar una aeronave usando cualquiera de sus dispositivos sustentadores o frenos aerodinámicos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. Durante el vuelo recto y nivelado:',
    opciones: [
      {
        textoRespuesta: 'La sustentación es igual al peso y por lo tanto el factor de carga es de 0G.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La sustentación es igual al peso y por lo tanto el factor de carga es de 1G.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La sustentación es superior al peso y por lo tanto el factor de carga es de 1G o más.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La sustentación es igual al peso y por lo tanto el factor de carga es de -1G.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. Cuando dos aeronaves propulsadas mecánicamente converjan a un nivel aproximadamente igual:',
    opciones: [
      {
        textoRespuesta: 'La que tenga a la otra a su derecha cederá el paso.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La que vaya a girar a la derecha cederá el paso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que tenga a la otra a la izquierda cederá el paso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que vaya a girar a la izquierda cederá el paso.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. ¿Cuál es la definición de trayectoria de planeo?',
    opciones: [
      {
        textoRespuesta: 'Es la distancia que es capaz de recorrer una aeronave en horizontal por la que desciende en vertical.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el ángulo que forma la aeronave con respecto al suelo al descender durante cualquier momento del vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la trayectoria de una aeronave con una velocidad determinada con respecto al suelo en aproximación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la trayectoria de una aeronave con un ángulo determinado con respecto al suelo en aproximación.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '96. ¿Cómo podemos acortar la carrera de aterrizaje?',
    opciones: [
      {
        textoRespuesta: 'Realizando la aproximación con un menor ángulo de descenso para poder aterrizar a una menor velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Realizando la aproximación sin flaps para poder aterrizar a una menor velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Realizando la aproximación con el mínimo calado de flaps para poder aterrizar a una menor velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Realizando la aproximación con calado de flaps para poder aterrizar a una menor velocidad.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '97. Cuando estemos realizando una aproximación para el aterrizaje con tiempo frío, ¿qué debemos hacer con la calefacción del carburador?',
    opciones: [
      {
        textoRespuesta: 'Encenderla antes de cortar el motor y mantenerla hasta que se haya completado el aterrizaje.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Apagarla porque en ese momento necesitaremos toda la potencia del motor y ya no será peligrosa la formación de hielo puesto que vamos a aterrizar.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Encenderla después de cortar el motor y mantenerla hasta que se haya completado el aterrizaje.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Debemos dejarla puesta hasta completar el aterrizaje, porque la calefacción del carburador debe estar puesta en todo momento.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. Cuando estamos en tierra en un aeródromo, pedimos el QNH y lo calamos en nuestro altímetro, ¿qué nos indicará éste?',
    opciones: [
      {
        textoRespuesta: 'Cero pies de altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La elevación del campo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El nivel de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La altitud de transición.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '99. Cuando en vuelo nos encontramos en una zona de bajas presiones, ¿qué marcará el altímetro?',
    opciones: [
      {
        textoRespuesta: 'Que vamos más alto del nivel al que realmente estamos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que vamos más bajo del nivel al que realmente estamos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que vamos ascendiendo aunque en realidad mantendremos el mismo nivel de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que vamos descendiendo aunque en realidad mantendremos el mismo nivel de vuelo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. La forma de realizar un viraje más cerrado es:',
    opciones: [
      {
        textoRespuesta: 'Aumentando la inclinación y disminuyendo la velocidad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentando la inclinación y también la velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuyendo la inclinación y aumentando la velocidad.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuyendo la inclinación y también la velocidad.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
