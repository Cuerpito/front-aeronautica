const preguntas = [
  {
    titulo: '1. ¿Qué nos permiten determinar las líneas isógonas dibujadas en las cartas de navegación?',
    opciones: [
      {
        textoRespuesta: 'Los puntos que tienen la misma declinación magnética',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los puntos que tienen idéntica variación magnética',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los puntos que tienen idéntica desviación magnética',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. El límite superior de la zona LED131: FL145/GND es 1.450 ft:',
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
    titulo: '3. La máxima sustentación se produce:',
    opciones: [
      {
        textoRespuesta: 'Con poco ángulo de ataque y mucha velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'En régimen de ascenso constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el ángulo de ataque es crítico',
        isCorrect: true
      },
      {
        textoRespuesta: 'A la máxima velocidad de la aeronave',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4. Van a hacer dos años desde que obtuvimos nuestra habilitación de radiofonista (RTC). ¿Qué debemos hacer?',
    opciones: [
      {
        textoRespuesta: 'Revalidarla, acreditando experiencia en comunicaciones en los doce meses anteriores a la solicitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Renovarla, acreditado experiencia en comunicaciones en los doce meses anteriores a la solicitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Revalidarla, realizando una prueba de comunicación por radio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nada, puesto que esta habilitación tiene una validez indefinida',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5. Indique cuál de las siguientes afirmaciones es correcta:',
    opciones: [
      {
        textoRespuesta: 'Los globos deben ceder el paso a los planeadores',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los planeadores deben ceder el paso a los dirigibles',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los planeadores deben ceder el paso a las aeronaves propulsadas mecánicamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las aeronaves propulsadas mecánicamente deben ceder el paso a dirigibles, planeadores y globos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6. ¿De qué forma podemos aumentar el alcance de las ondas VHF?',
    opciones: [
      {
        textoRespuesta: 'Disminuyendo la altura de la torre emisora',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuyendo el nivel de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con el squelch',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentando la altitud de la aeronave',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7. Para que un piloto de ULM pueda ser acreditado como jefe de vuelos debe acreditar:',
    opciones: [
      {
        textoRespuesta: 'Un mínimo de 200 horas de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un mínimo de 100 horas de vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: '100 horas de vuelo como piloto y 50 como instructor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un mínimo de 100 horas de vuelo como instructor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. La velocidad Vfe de nuestro anemómetro marca:',
    opciones: [
      {
        textoRespuesta: 'La velocidad mínima sin flaps',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad máxima con flaps',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad normal de operación',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad mínima con flaps',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9. El centro de gravedad de la aeronave:',
    opciones: [
      {
        textoRespuesta: 'Coincide siempre con el centro de presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es más peligroso para las actuaciones si se encuentra adelantado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es más peligroso para las actuaciones si se encuentra retrasado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es siempre fijo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. La banda de frecuencias asignada al Servicio Móvil Aeronáutico es:',
    opciones: [
      {
        textoRespuesta: '110.000 – 136.975',
        isCorrect: false
      },
      {
        textoRespuesta: '136.000 – 154.950',
        isCorrect: false
      },
      {
        textoRespuesta: '118.000 – 136.975',
        isCorrect: true
      },
      {
        textoRespuesta: '118.000 – 154.975',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. ¿Cuál es aproximadamente la carga alar de un ULM de 300kg y una superficie alar de 15m2?',
    opciones: [
      {
        textoRespuesta: '15 kg/m2.',
        isCorrect: false
      },
      {
        textoRespuesta: '20 kg/m2.',
        isCorrect: true
      },
      {
        textoRespuesta: '300 kg.',
        isCorrect: false
      },
      {
        textoRespuesta: '25 kg/m2.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12. Si vamos por encima de la velocidad Vne marcada en nuestro anemómetro:',
    opciones: [
      {
        textoRespuesta: 'Debemos llevar flaps extendidos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debemos llevar un mínimo calado de flaps',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se pueden producir fallos estructurales en nuestra aeronave',
        isCorrect: true
      },
      {
        textoRespuesta: 'Iremos a la velocidad normal de operación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. ¿Cuál es la masa máxima autorizada al despegue para un ULM terrestre?',
    opciones: [
      {
        textoRespuesta: '450 kg para un monoplaza',
        isCorrect: false
      },
      {
        textoRespuesta: '300 kg para un biplaza',
        isCorrect: false
      },
      {
        textoRespuesta: '450 kg para un biplaza',
        isCorrect: true
      },
      {
        textoRespuesta: '300 kg tanto para monoplaza como para biplaza',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. Llamamos amplitud de onda a:',
    opciones: [
      {
        textoRespuesta: 'La distancia entre la cresta de la onda y su punto medio',
        isCorrect: true
      },
      {
        textoRespuesta: 'El número de veces que se repite una onda por segundo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La distancia que tiene una onda completa',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad a la que se propaga cada una de las ondas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. Indique la afirmación correcta:',
    opciones: [
      {
        textoRespuesta: 'Los planeadores cederán el paso a las aeronaves propulsadas mecánicamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'En aproximación final, la aeronave que esté más baja tendrá preferencia sobre las que estén más altas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando dos aeronaves se encuentren de frente, ambas realizarán un viraje a la izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las aeronaves en tramo final cederán el paso a las que estén en base',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16. En cuanto a los instrumentos del motor, la medición y control de la presión incluye:',
    opciones: [
      {
        textoRespuesta: 'El medidor de presión del aceite',
        isCorrect: false
      },
      {
        textoRespuesta: 'El medidor de presión de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'El medidor de presión de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '17. De las siguientes características que puede tener una carta aeronáutica, indique cuál es la considerada como una de las más importante:',
    opciones: [
      {
        textoRespuesta: 'Equidistancia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Equivalencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Conformidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. Vamos a despegar de una pista en la que poco antes ha despegado un avión grande:',
    opciones: [
      {
        textoRespuesta: 'Tenemos que esperar, al menos, 20 minutos desde que el avión grande se fue al aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tenemos que irnos al aire antes del punto en el que lo hizo el otro avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tenemos que irnos al aire en el punto exacto en el que despegó la otra aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nos tenemos que ir al aire después del punto en que despegó la otra aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '19. Un día con atmósfera estándar estamos en un campo a 13ºC. Ascendemos 2.000’. ¿Qué temperatura aproximada habrá a esa altitud?',
    opciones: [
      {
        textoRespuesta: '17ºC',
        isCorrect: false
      },
      {
        textoRespuesta: '7ºC',
        isCorrect: false
      },
      {
        textoRespuesta: '11ºC',
        isCorrect: false
      },
      {
        textoRespuesta: '9ºC',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '20. ¿En qué circunstancias puede un vuelo VFR entrar en espacio aéreo clase A?',
    opciones: [
      {
        textoRespuesta: 'Nunca',
        isCorrect: true
      },
      {
        textoRespuesta: 'Siempre que realice un plan de vuelo previamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Siempre que tenga autorización',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. ¿Cuándo se renueva la habilitación de instructor?',
    opciones: [
      {
        textoRespuesta: 'Cada dos años',
        isCorrect: false
      },
      {
        textoRespuesta: 'No hay que renovarla porque tiene validez indefinida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando haya caducado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una vez al año',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. ¿Cuál es la principal razón de que los aviones vuelen mejor en invierno?',
    opciones: [
      {
        textoRespuesta: 'Que las altas temperaturas influyen negativamente en el funcionamiento del motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que cuanto más frío la densidad del aire es menor y esto mejora la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que cuanto más frío la densidad del aire es mayor y eso mejora la sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que con aire caliente la resistencia inducida aumenta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. Mientras mantenemos contacto por radio sufrimos una emergencia. ¿Cómo lo comunicaremos?',
    opciones: [
      {
        textoRespuesta: 'Pasaremos inmediatamente a la frecuencia 121,5 MHz y repetiremos tres veces la palabra MAYDAY',
        isCorrect: false
      },
      {
        textoRespuesta: 'Lo haremos en la misma frecuencia en las que tenemos contacto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es preferible cortar la comunicación para atender la emergencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pondremos el código de emergencias en el transpondedor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. El certificado de examinador requiere un mínimo de horas de vuelo como instructor. ¿Cuántas son?',
    opciones: [
      {
        textoRespuesta: '100',
        isCorrect: false
      },
      {
        textoRespuesta: '200',
        isCorrect: false
      },
      {
        textoRespuesta: '150',
        isCorrect: true
      },
      {
        textoRespuesta: '500',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. Si hablamos de la brújula, ¿qué es la variación o declinación?',
    opciones: [
      {
        textoRespuesta: 'La diferencia en grados entre el Norte geográfico y el magnético',
        isCorrect: true
      },
      {
        textoRespuesta: 'El error causado por campos magnéticos originados en las proximidades del instrumento',
        isCorrect: false
      },
      {
        textoRespuesta: 'El error debido a la inclinación en el viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'El error causado por las aceleraciones de la aeronave',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '26. ¿Cómo afectará a la lectura del altímetro un día con temperaturas muy frías?',
    opciones: [
      {
        textoRespuesta: 'La temperatura no afecta al altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indicará una altura mayor a la que va el avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Indicará una altura menor de lo que va el avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presentará errores debido a la formación de hielo en las tomas medidoras de presión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. Indique la correcta. Cuanto mayor es el peso de un ULM:',
    opciones: [
      {
        textoRespuesta: 'Mayor velocidad de aterrizaje',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor velocidad de despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor capacidad de maniobra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor ángulo de ascenso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. ¿Cómo se denomina el máximo valor de intensidad del viento cuando no es constante?',
    opciones: [
      {
        textoRespuesta: 'Turbulencia de aire claro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ráfaga o racha',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cizalladura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Gradiente de viento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. ¿Cuándo se produce una detonación?',
    opciones: [
      {
        textoRespuesta: 'Cuando el combustible explota después de lo debido en el cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el combustible explota de forma instantánea, perdiendo su valor progresivo',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Cuando se producen varias explosiones a la vez dentro del cilindro que con demasiada frecuencia causa daños en el motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. ¿Cuál es la causa de que al aplicar calor al carburador la mezcla se enriquezca?',
    opciones: [
      {
        textoRespuesta: 'Que el aire caliente es más denso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el aire caliente es menos denso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que deja entrar más aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que también calienta el combustible y lo hace más fluido',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '31. Las nubes formadas por convección suelen ser:',
    opciones: [
      {
        textoRespuesta: 'Estratos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cúmulos o de desarrollo vertical',
        isCorrect: true
      },
      {
        textoRespuesta: 'Estratocúmulos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nimbostratos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. ¿Cuál es el factor de carga límite que debe tener como mínimo un ULM según la ley?',
    opciones: [
      {
        textoRespuesta: '+3 y -2',
        isCorrect: true
      },
      {
        textoRespuesta: '+4’5 y -3',
        isCorrect: false
      },
      {
        textoRespuesta: '+3 y -3',
        isCorrect: false
      },
      {
        textoRespuesta: '+2 y -3',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. Con un factor de carga igual a 1G:',
    opciones: [
      {
        textoRespuesta: 'La sustentación es igual al peso',
        isCorrect: true
      },
      {
        textoRespuesta: 'El piloto sentirá que se queda pegado al asiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'El avión está soportando el doble de su peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. En un área de señales, una flecha hacia la derecha de color llamativo indica:',
    opciones: [
      {
        textoRespuesta: 'La dirección que debe seguir la aeronave para aterrizar o despegar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que los virajes deben efectuarse hacia la derecha antes del aterrizaje y después del despegue',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que el viento es totalmente cruzado',
        isCorrect: false
      },
      {
        textoRespuesta: 'La dirección de la que viene el viento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. Lo más peligroso de una entrada en pérdida puede ser:',
    opciones: [
      {
        textoRespuesta: 'La recuperación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que se produzca a poca altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'La posible aparición de pérdidas secundarias',
        isCorrect: false
      },
      {
        textoRespuesta: 'La desorientación a la que se ve sometida el piloto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. El punto de transición de un perfil aerodinámico:',
    opciones: [
      {
        textoRespuesta: 'Se encuentra siempre fijo en el mismo punto del extradós',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se mueve hacia delante o hacia atrás según la velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se mueve hacia delante o hacia atrás según el ángulo de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es lo mismo que el centro aerodinámico o de presiones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '37. En un motor de cuatro tiempos, tenemos mezcla pobre cuando:',
    opciones: [
      {
        textoRespuesta: 'El combustible que estamos usando es de mala calidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'La mezcla con la que estamos operando está por debajo del valor de la mezcla estequiométrica',
        isCorrect: false
      },
      {
        textoRespuesta: 'La mezcla con la que estamos operando está por encima del valor de la mezcla estequiométrica',
        isCorrect: true
      },
      {
        textoRespuesta: 'El combustible no tiene los octanos suficientes',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. Durante un descenso, la mezcla de aire y combustible:',
    opciones: [
      {
        textoRespuesta: 'Debemos empobrecerla poco a poco',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debemos enriquecerla poco a poco',
        isCorrect: true
      },
      {
        textoRespuesta: 'Debemos dejarla constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se verá afectada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. ¿Cuánto será nuestro tiempo útil de conciencia si volamos a 25.000 ft?',
    opciones: [
      {
        textoRespuesta: 'De 3 a 5 minutos',
        isCorrect: true
      },
      {
        textoRespuesta: 'De 5 a 10 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: 'De 15 a 20 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: '30 minutos o más',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. A igualdad de presión, un aumento de la temperatura:',
    opciones: [
      {
        textoRespuesta: 'Hará aumentar la densidad atmosférica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hará disminuir la densidad atmosférica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mejorará la sustentación de la aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'Generará mayor resistencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. ¿Podremos llevar a cabo un vuelo VFR por el área LER71: FL100/2000 ft AGL?',
    opciones: [
      {
        textoRespuesta: 'No, nunca',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, puesto que el límite superior de un ULM es de 1.000 ft.',
        isCorrect: true
      },
      {
        textoRespuesta: 'No, puesto que se trata de una zona restringida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, siempre que tengamos autorización previa',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. Estamos volando en una zona de bajas presiones, así que:',
    opciones: [
      {
        textoRespuesta: 'El altímetro indica que vamos a una altura superior a la verdadera',
        isCorrect: true
      },
      {
        textoRespuesta: 'El altímetro indica que vamos a una altura inferior a la verdadera',
        isCorrect: false
      },
      {
        textoRespuesta: 'El altímetro marca la altura real a la que vamos',
        isCorrect: false
      },
      {
        textoRespuesta: 'La lectura del altímetro será la misma que en zona de altas presiones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. Un piloto con habilitación de instructor de helicópteros, ¿es también instructor de multieje de ala fija?',
    opciones: [
      {
        textoRespuesta: 'Sí, puesto que esta habilitación se expide para todo tipo de ultraligeros',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No. Tendría que volver a pasar por todo el proceso mediante el cual consiguió la habilitación de instructor de helicópteros',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No. Para ello debe tener la habilitación de multieje de ala fija y acreditar un mínimo de 200 horas de vuelo en ese tipo de ultraligero',
        isCorrect: true
      },
      {
        textoRespuesta: 'No. Solo está permitido ser instructor de un tipo de ultraligero al mismo tiempo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. Si tenemos viento cruzado en despegue:',
    opciones: [
      {
        textoRespuesta: 'Intentaremos utilizar la pista adecuada más larga',
        isCorrect: true
      },
      {
        textoRespuesta: 'Despegaremos a menor velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'No despegaremos si tenemos viento cruzado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizaremos poca potencia para despegar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. En una tormenta, por encima de la isoterma de 0º, ¿qué ocurre?',
    opciones: [
      {
        textoRespuesta: 'Se dan fuertes corrientes ascendentes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se forma granizo o nieve',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las corrientes ascendentes empiezan a desaparecer',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '46. Estamos en senda de aproximación y en la pista en uso acaba de despegar un avión grande. ¿Cómo procederemos?',
    opciones: [
      {
        textoRespuesta: 'Daremos otra vuelta al circuito de tráfico para asegurarnos de que las turbulencias han desaparecido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aterrizaremos después del punto en que el otro avión se fue al aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aterrizaremos sin flaps para evitar que las turbulencias generen daños estructurales en ellos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aterrizaremos antes del punto en que el otro avión se fue al aire',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '47. Si entramos en pérdida y aguantamos una guiñada:',
    opciones: [
      {
        textoRespuesta: 'Entraremos en barrena',
        isCorrect: true
      },
      {
        textoRespuesta: 'Será prácticamente imposible de recuperar',
        isCorrect: false
      },
      {
        textoRespuesta: 'No podremos mantener una guiñada si entramos en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nos ayudará a no perder demasiada altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '48. La velocidad de pérdida de nuestro ULM viene recogida en su Manual de Vuelo. Pero, ¿puede variar a lo largo del vuelo?',
    opciones: [
      {
        textoRespuesta: 'No, se mantendrá constante en cualquier circunstancia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí. Puede variar por ejemplo si aumentamos el factor de carga, entre otros factores',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sí, pero dependerá únicamente de las condiciones de densidad en las que volemos',
        isCorrect: false
      },
      {
        textoRespuesta: 'No, siempre que estemos en atmósfera estándar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. Indique la correcta. Los flaps:',
    opciones: [
      {
        textoRespuesta: 'Aumentan la carrera de despegue debido a que generan mayor resistencia inducida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son mandos primarios que nos ayudan a generar una mayor sustentación en las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nos permiten despegar a una menor velocidad que si no los usáramos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Pueden utilizarse a cualquier velocidad, incluso a la de crucero',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '50. El aeropuerto de Barcelona tiene dos pistas 07/25 y una pista 02/20. Con un viento de 040º a 15kt, ¿qué pista debemos utilizar?',
    opciones: [
      {
        textoRespuesta: 'La 07',
        isCorrect: false
      },
      {
        textoRespuesta: 'La 25',
        isCorrect: false
      },
      {
        textoRespuesta: 'La 02',
        isCorrect: true
      },
      {
        textoRespuesta: 'La 20',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. ¿Cómo sabremos si en un viraje estamos provocando un resbale?',
    opciones: [
      {
        textoRespuesta: 'Cuando el bastón se desplaza hacia el lado contrario al que viramos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la bola se queda centrada en el instrumento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la bola se desplaza hacia el lado contrario que el bastón',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando la bola se desplaza hacia el mismo lugar que el bastón',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '52. El centro de gravedad:',
    opciones: [
      {
        textoRespuesta: 'Coincide siempre con el centro de presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puede oscilar dentro de unos márgenes sin que sea peligroso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es preferible que se encuentre detrás del centro de presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'No podemos hacer nada para controlarlo porque se da en un punto que es fijo',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '53. En un aeródromo en el que hay una humedad relativa alta y la temperatura ambiente es muy cercana a la del punto de rocío, ¿qué falta para que sea muy probable la formación de niebla?',
    opciones: [
      {
        textoRespuesta: 'Viento en calma o muy suave',
        isCorrect: true
      },
      {
        textoRespuesta: 'Inestabilidad de la atmósfera en las cercanías del suelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Baja altitud de densidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viento con gran intensidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. La válvula selectora de combustible siempre la tendremos que poner en el depósito que esté más vacío:',
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
    titulo: '55. ¿Qué información nos da un anemómetro?',
    opciones: [
      {
        textoRespuesta: 'El régimen de ascensos y descensos de la aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad indicada',
        isCorrect: true
      },
      {
        textoRespuesta: 'La velocidad corregida por todos los errores',
        isCorrect: false
      },
      {
        textoRespuesta: 'La altitud a la que vamos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. Un centro de presión rodeado de isobaras de valor decreciente es:',
    opciones: [
      {
        textoRespuesta: 'Un anticiclón',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una depresión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una borrasca',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un ciclón',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '57. La mezcla de aire y combustible en el motor se realiza en:',
    opciones: [
      {
        textoRespuesta: 'El cilindro',
        isCorrect: false
      },
      {
        textoRespuesta: 'La válvula de admisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'El carburador',
        isCorrect: true
      },
      {
        textoRespuesta: 'El depósito de combustible seleccionado con la válvula',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '58. ¿Qué nos están pidiendo si nos dicen que colacionemos?',
    opciones: [
      {
        textoRespuesta: 'Que repitamos el mensaje que acabamos de recibir',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que repitamos el mensaje que les acabamos de enviar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que concluyamos nuestra comunicación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que identifiquemos nuestra aeronave',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '59. “LEZL 230800Z 2309/2409 04005KT CAVOK TX24/2315Z TN07/2407Z”. ¿Cuál de las siguientes afirmaciones sobre este pronóstico es correcta?',
    opciones: [
      {
        textoRespuesta: 'El viento va hacia 40º a 5 nudos',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura mínima es de 9º C.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura máxima es de 23º C.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La visibilidad es de 10 km o más',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '60. Aunque hay muchas causas por las que se puede dar hiperventilación, ¿cuál es la principal en vuelo?',
    opciones: [
      {
        textoRespuesta: 'El estrés',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las altas temperaturas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La hipoxia',
        isCorrect: true
      },
      {
        textoRespuesta: 'El miedo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '61. ¿Se puede revalidar o renovar una habilitación con el certificado médico caducado?',
    opciones: [
      {
        textoRespuesta: 'Se puede revalidar pero no renovar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se puede renovar pero no revalidar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se puede renovar y revalidar, aunque tendremos que tenerlo en vigor para cuando realicemos un vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tanto para revalidar como para renovar tenemos que tenerlo en vigor',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '62. Además del mínimo de horas, para obtener la licencia el alumno piloto deberá hacer un vuelo de travesía que dure al menos:',
    opciones: [
      {
        textoRespuesta: '90 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: '30 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una hora',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dos horas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. ¿Cuánto tiempo tenemos para presentarnos al examen práctico después de aprobar el teórico?',
    opciones: [
      {
        textoRespuesta: '1 año',
        isCorrect: false
      },
      {
        textoRespuesta: '2 años',
        isCorrect: true
      },
      {
        textoRespuesta: '18 meses',
        isCorrect: false
      },
      {
        textoRespuesta: '3 años',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '64. En una prueba de radio, ¿cuál de las siguientes transmisiones quiere decir que ésta es totalmente legible?',
    opciones: [
      {
        textoRespuesta: 'Legibilidad cinco',
        isCorrect: true
      },
      {
        textoRespuesta: 'Legibilidad uno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Legibilidad total',
        isCorrect: false
      },
      {
        textoRespuesta: 'Legibilidad tres',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. El tipo de hipoxia producido por la incapacidad de la sangre de transportar suficiente oxígeno es la hipoxia:',
    opciones: [
      {
        textoRespuesta: 'Anémica',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hipóxica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Histotóxica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isquémica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '66. Indique la correcta. A mayor densidad:',
    opciones: [
      {
        textoRespuesta: 'Mayor sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Menor resistencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '67. Una pista con una pendiente del 5% quiere decir que:',
    opciones: [
      {
        textoRespuesta: 'Que la pista tiene un ángulo de inclinación del 5%',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que por cada 100 unidades de longitud, la altura de la pista ha variado 5',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que entre un extremo de la pista y otro, la altura de la pista ha variado 5 metros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una pista nunca puede tener pendiente',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '68. Si a la hora de diseñar nuestra ruta de vuelo lo hacemos tomando como referencia puntos significativos del terreno que podamos identificar fácilmente desde el aire, estaremos realizando una navegación:',
    opciones: [
      {
        textoRespuesta: 'A estima',
        isCorrect: false
      },
      {
        textoRespuesta: 'Observada',
        isCorrect: true
      },
      {
        textoRespuesta: 'Radio-eléctrica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. ¿Se pueden realizar pruebas para aprender a reconocer los síntomas de la hipoxia?',
    opciones: [
      {
        textoRespuesta: 'No es recomendable en ningún caso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los intentos realizados han demostrado que no es posible aprender a reconocer los síntomas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Podría ser recomendable hacerlo en un simulador de altitud',
        isCorrect: true
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. ¿A qué llamamos el techo de vuelo de la aeronave?',
    opciones: [
      {
        textoRespuesta: 'A la altura máxima permitida por ley para cada tipo de avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la altura a la que la densidad del aire ya no es suficiente para mantener la sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'A la máxima altura a la que el fabricante una aeronave recomienda ascender',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la altura a la que una aeronave debería ir durante el vuelo de crucero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. Durante el paso de un frente frío, ¿qué ocurre con la presión?',
    opciones: [
      {
        textoRespuesta: 'La presión dependerá de otros fenómenos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Baja',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se mantiene',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desciende',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '72. ¿Cuál de los siguientes fenómenos utiliza el altímetro para medir la altitud?',
    opciones: [
      {
        textoRespuesta: 'Que la temperatura disminuye con la altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la densidad disminuye con la altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la presión disminuye con la altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que la humedad disminuye con la altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. La hora prevista de llegada se representa con las siglas:',
    opciones: [
      {
        textoRespuesta: 'HR',
        isCorrect: false
      },
      {
        textoRespuesta: 'HN',
        isCorrect: false
      },
      {
        textoRespuesta: 'HJ',
        isCorrect: false
      },
      {
        textoRespuesta: 'ETA',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '74. ¿Cuál de las siguientes situaciones será más favorable para el despegue?',
    opciones: [
      {
        textoRespuesta: 'Pista con pendiente negativa y viento en cara',
        isCorrect: true
      },
      {
        textoRespuesta: 'Pista con pendiente positiva y viento en cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pista con pendiente negativa y viento en cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pista con pendiente positiva y viento en cara',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. ¿Cómo tendríamos que comunicar la frecuencia 127,050 MHz correctamente?',
    opciones: [
      {
        textoRespuesta: 'Ciento veintisiete como cero cincuenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno dos siete coma cero cinco',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ciento veintisiete coma cero cinco cero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno dos siete coma cero cincuenta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. ¿Qué significa el código QMS?',
    opciones: [
      {
        textoRespuesta: 'Es el rumbo verdadero hacia la emisora',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el rumbo magnético hacia la emisora',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la línea imaginaria perpendicular al eje de la pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la prolongación del eje de pista',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '77. ¿En qué fase de una tormenta aparecen las descargas eléctricas, rayos y truenos?',
    opciones: [
      {
        textoRespuesta: 'En la etapa de madurez',
        isCorrect: true
      },
      {
        textoRespuesta: 'En la etapa de crecimiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la etapa de disipación',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la etapa de debilitamiento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. El cielo está ‘Scattered’. ¿Cuántas octas tiene cubiertas de nubes?',
    opciones: [
      {
        textoRespuesta: 'De 5 a 7',
        isCorrect: false
      },
      {
        textoRespuesta: 'De 1 a 2',
        isCorrect: false
      },
      {
        textoRespuesta: 'De 3 a 4',
        isCorrect: true
      },
      {
        textoRespuesta: '8',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '79. Nuestro anemómetro marca las siguientes velocidades: Vs0 55; Vs1 65; Vfe 100; Vno 150; Vne 180. ¿A cuál de las siguientes velocidades sólo podremos volar si usamos flaps?',
    opciones: [
      {
        textoRespuesta: '59',
        isCorrect: true
      },
      {
        textoRespuesta: '78',
        isCorrect: false
      },
      {
        textoRespuesta: '120',
        isCorrect: false
      },
      {
        textoRespuesta: '151',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. Si aumentamos la velocidad de nuestra aeronave:',
    opciones: [
      {
        textoRespuesta: 'Tenemos mayor posibilidad de entrar en pérdida',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia parásita disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'No influirá en la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia inducida disminuye',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '81. En un mapa, las isotermas:',
    opciones: [
      {
        textoRespuesta: 'Unen puntos con la misma temperatura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Delimitan zonas con la misma temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Unen puntos con la misma presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Delimitan zonas con la misma densidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '82. Si en un mapa vemos que las isobaras están muy juntas, ¿qué significa?',
    opciones: [
      {
        textoRespuesta: 'Que el viento no es muy fuerte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el viento es muy fuerte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el gradiente horizontal de presión es grande',
        isCorrect: false
      },
      {
        textoRespuesta: 'B y C son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '83. ¿Cuál de los siguientes síntomas indicaría que estamos entrando en pérdida?',
    opciones: [
      {
        textoRespuesta: 'Un aumento repentino de la velocidad de la aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'La pérdida de efectividad de los controles de vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'El avión deja de vibrar y notamos como si estuviese flotando',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. ¿Cómo deletrearía la palabra ALTITUD según el alfabeto internacional de radiocomunicaciones?',
    opciones: [
      {
        textoRespuesta: 'Alfa, Limón, Tanto, India, Tango, Uniform, Delta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alba, Lima, Tango, India, Tango, Uniform, Delta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alfa, Lima, Tango, India, Tango, Uniform, Delta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Alfa, Limón, Tango, Indio, Tango, Uniform, Delta',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '85. Si tenemos que atravesar una zona montañosa en la que el viento viene perpendicularmente a ésta, ¿cuál puede ser la mejor opción?',
    opciones: [
      {
        textoRespuesta: 'Bordeando la montaña por la zona de sotavento',
        isCorrect: false
      },
      {
        textoRespuesta: 'No atravesándola bajo ningún concepto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bordeando la montaña por la zona de barlovento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Atravesándolas con altura suficiente para no encontrarnos con turbulencias',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '86. ¿Cuál es el dispositivo que se utiliza en comunicaciones para eliminar los ruidos parásitos de la radio?',
    opciones: [
      {
        textoRespuesta: 'Squawk',
        isCorrect: false
      },
      {
        textoRespuesta: 'Squelch',
        isCorrect: true
      },
      {
        textoRespuesta: 'Filtro de frecuencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sintonizador',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. Llevar un extintor en la aeronave:',
    opciones: [
      {
        textoRespuesta: 'Es obligatorio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está prohibido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es recomendable',
        isCorrect: true
      },
      {
        textoRespuesta: 'No está recomendado',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '88. ¿Cuál de las siguientes características de un ala sirve para evitar que entre en pérdida de forma repentina en toda su superficie?',
    opciones: [
      {
        textoRespuesta: 'La torsión',
        isCorrect: true
      },
      {
        textoRespuesta: 'El ángulo diedro',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ángulo flecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '89. La válvula selectora de combustible nos permite:',
    opciones: [
      {
        textoRespuesta: 'Seleccionar el depósito del que queremos obtener el combustible',
        isCorrect: true
      },
      {
        textoRespuesta: 'Activar o desactivar la bomba de combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ajustar la mezcla de aire y combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Seleccionar la cantidad de combustible que queremos extraer',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. Nos encontramos en el aeropuerto de Málaga a las 06:00Z a 3 de febrero. ¿Qué hora local tenemos?',
    opciones: [
      {
        textoRespuesta: '07:00h.',
        isCorrect: true
      },
      {
        textoRespuesta: '05:00h.',
        isCorrect: false
      },
      {
        textoRespuesta: '08:00h.',
        isCorrect: false
      },
      {
        textoRespuesta: '04:00h.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. ¿Cuál de las siguientes puede ser una definición de gradiente de viento?',
    opciones: [
      {
        textoRespuesta: 'El cambio de velocidad o dirección del viento en el espacio',
        isCorrect: true
      },
      {
        textoRespuesta: 'El cambio de presión del aire en el espacio',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad horizontal que lleva un viento constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad horizontal o vertical que lleva un viento constante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. ¿Qué es el ángulo diedro?',
    opciones: [
      {
        textoRespuesta: 'Es el formado entre el 25% de la cuerda y el eje lateral del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el que se forma entre el borde de ataque y el viento relativo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el formado entre el plano horizontal a la aeronave y el plano de las alas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es el formado por la pala de la hélice y la dirección del viento relativo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. ¿Qué documento define las características de una aeronave y expresa la calificación que merece para su utilización?',
    opciones: [
      {
        textoRespuesta: 'El manual de usuario',
        isCorrect: false
      },
      {
        textoRespuesta: 'El libro de procedimientos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las instrucciones de mantenimiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'El certificado de aeronavegabilidad',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '94. Si tenemos un rumbo magnético de 220º, con una desviación de 3ºE y una declinación de 5ºE, nuestro rumbo verdadero es de:',
    opciones: [
      {
        textoRespuesta: '222º',
        isCorrect: false
      },
      {
        textoRespuesta: '225º',
        isCorrect: true
      },
      {
        textoRespuesta: '228º',
        isCorrect: false
      },
      {
        textoRespuesta: '212º',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. Cuando tenemos hélices de paso variable, ¿cuál será mejor para despegues?',
    opciones: [
      {
        textoRespuesta: 'Será indiferente, pues el paso no afecta a la potencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paso corto',
        isCorrect: true
      },
      {
        textoRespuesta: 'Paso largo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La posición en bandera será óptima para los despegues',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. El factor de carga será positivo siempre que:',
    opciones: [
      {
        textoRespuesta: 'La fuerza se aplique hacia abajo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se duplique, en maniobras como el viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'La fuerza se aplique hacia arriba',
        isCorrect: false
      },
      {
        textoRespuesta: 'No sea peligroso para la estructura del avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '97. Una capa de viento con una dirección está sobre otra capa con una dirección diferente. En la zona en la que se encuentran, ¿qué puede ocurrir?',
    opciones: [
      {
        textoRespuesta: 'Que se produzcan turbulencias',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que se produzca cizalladura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que se produzca turbulencia orográfica',
        isCorrect: false
      },
      {
        textoRespuesta: 'A y B son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '98. Si alguien presenta síntomas de hipoxia en vuelo, ¿a qué altitud deberemos descender?',
    opciones: [
      {
        textoRespuesta: 'Por debajo de 20.000ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por debajo de 1.000ft.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por debajo de 10.000m.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por debajo de 10.000ft.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '99. Indique la correcta. La tasa de viraje de una aeronave:',
    opciones: [
      {
        textoRespuesta: 'Es el grado de inclinación del mismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la velocidad a la que se efectúa el viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la relación entre la velocidad y el grado de inclinación en que éste se realiza',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es el número de grados que el avión recorre por segundo',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '100. Una relación de mezcla de 16:1 en un motor de cuatro tiempos significa que:',
    opciones: [
      {
        textoRespuesta: 'El motor tendrá mejor rendimiento que con la mezcla estequiométrica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que llevamos la mezcla estequiométrica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que llevamos mezcla rica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que llevamos mezcla pobre',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
