const preguntas = [
  {
    titulo: "1. Cuando una aeronave en vuelo recibe una señal de luz a 'destellos verdes', significa:",
    opciones: [
      {
        textoRespuesta: 'No aterrice todavía, permanezca en circuito de tráfico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Regrese para aterrizar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Autorizado a aterrizar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Esta señal no significa nada para un avión en vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. El propósito de los flaps es el de:',
    opciones: [
      {
        textoRespuesta: 'Permitir al piloto realizar aproximaciones más pronunciadas sin aumentar la velocidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Liberar al piloto de mantener presiones constantes en los controles',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener una corrección de deriva para controlar el desplazamiento del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inyectar succión en la capa límite',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "3. Cuando una aeronave está rodando antes del despegue, si recibe una señal de luz 'verde fija', significa:",
    opciones: [
      {
        textoRespuesta: 'Autorizado a rodar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorizado a despegar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Regrese al aparcamiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'No significa nada; esa señal no existe',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4. Cuesta abajo, es decir, con pendiente negativa, la carrera de despegue será',
    opciones: [
      {
        textoRespuesta: 'Más larga',
        isCorrect: false
      },
      {
        textoRespuesta: 'Más corta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Indiferente',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se puede despegar en pistas cuesta abajo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. ¿Por dónde adelantara una aeronave en vuelo a otra?',
    opciones: [
      {
        textoRespuesta: 'Por la izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por la derecha',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por debajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por encima',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '6. Si la pista de vuelo presenta barro, la velocidad de despegue será mayor.',
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
    titulo: '7. Si tenemos que aterrizar de emergencia en un pastizal ¿Qué podemos esperar?',
    opciones: [
      {
        textoRespuesta: 'Buena zona de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Buena zona de aterrizaje pero posibilidad de pequeños hoyos y protuberancias o salientes de terreno',
        isCorrect: true
      },
      {
        textoRespuesta: 'Debemos evitar los pastizales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Grandes charcos y barro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. Una luz verde fija en tierra significa:',
    opciones: [
      {
        textoRespuesta: 'Autorización para rodar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorización para despegar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Autorización para aterrizar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '9. Para realizar un viraje continuo con viento y describir una trayectoria circular sobre el mismo punto se debe:',
    opciones: [
      {
        textoRespuesta: 'Aumentar la inclinación para viento en cara y disminuirla para viento en cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar la inclinación para viento en cola y ganar altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar la inclinación para viento en cola y disminuirla para viento en cara',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentar la velocidad para viento en cola y perder altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. ¿Cuándo se debe enderezar un tubo doblado?',
    opciones: [
      {
        textoRespuesta: 'Siempre que sea posible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solo si no se agrieta su superficie',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando no se haya enderezado en anteriores ocasiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nunca',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11. No se debe virar a viento en cola nada más despegar y a poca altura, porque:',
    opciones: [
      {
        textoRespuesta: 'Aumenta la velocidad relativa del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta el ángulo de ascenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye la velocidad del avión con respecto a tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye la velocidad relativa del avión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12. Despegando detrás de un avión grande con viento en calma, se aconseja:',
    opciones: [
      {
        textoRespuesta: 'No realizar el despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'Virar a la derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Virar a la izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Esperar unos minutos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '13. El procedimiento correcto para recuperar una barrena es:',
    opciones: [
      {
        textoRespuesta: 'Cortar motor, palanca al centro, pie contrario al giro',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cortar motor, palanca al centro, pies neutrales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Palanca atrás, no cortar motor, pie contrario',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cortar motor, palanca atrás, pie contrario al giro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. Un aterrizaje puede considerarse como una situación de pérdida provocada.',
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
    titulo: '15. La barrena es una maniobra:',
    opciones: [
      {
        textoRespuesta: 'Efectuada en vuelo recto y nivelado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Acrobática',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que está permitida en los ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'De rotación alrededor de un eje horizontal',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '16. En nuestro anemómetro, el arco blanco acaba a 110, el amarillo empieza a 160, y tiene una raya roja a 210. ¿Cuál es la velocidad máxima a la que podemos volar en aire turbulento?',
    opciones: [
      {
        textoRespuesta: '110',
        isCorrect: false
      },
      {
        textoRespuesta: '135',
        isCorrect: false
      },
      {
        textoRespuesta: '160',
        isCorrect: true
      },
      {
        textoRespuesta: '210',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17. Cualquier aparato en apuros tiene prioridad frente:',
    opciones: [
      {
        textoRespuesta: 'A los globos',
        isCorrect: false
      },
      {
        textoRespuesta: 'A los planeadores',
        isCorrect: false
      },
      {
        textoRespuesta: 'A los ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'A todos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '18. A menos que se ordene lo contrario, todos los virajes en los tráficos se harán hacia:',
    opciones: [
      {
        textoRespuesta: 'La izquierda',
        isCorrect: true
      },
      {
        textoRespuesta: 'La derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indistintamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. Si accidentalmente sufriera una parada de motor no recuperable, ¿Qué maniobras emprendería?',
    opciones: [
      {
        textoRespuesta: 'Saltar en paracaídas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tratar de conseguir una térmica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tratar de encontrar un campo adecuado, a ser posible siempre por delante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dar media vuelta y regresar al aeródromo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. ¿Cuál es el primer paso a dar si tiene una parada de motor?',
    opciones: [
      {
        textoRespuesta: 'Virar 180° y aterrizar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desplegar el paracaídas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Palanca adelante para conseguir un planeo a velocidad de máximo rendimiento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Intentar ponerlo en marcha nuevamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. En el aterrizaje, el dirigible tiene preferencia sobre el ala delta:',
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
    titulo: '22. Siempre debemos:',
    opciones: [
      {
        textoRespuesta: 'Alinearnos con el centro de la pista sólo en el último momento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Efectuar virajes en S para perder altura en aterrizajes con obstáculos u obstrucciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aterrizar cuesta abajo sobre colinas y despegar cuesta abajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. La dirección y velocidad del viento debe observarse',
    opciones: [
      {
        textoRespuesta: 'Momentos antes del vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Después de un accidente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Días antes de volar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todos los días',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. ¿Qué debemos hacer para salir de una barrena?',
    opciones: [
      {
        textoRespuesta: 'a) Nada, el avión se recupera solo',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Aplicar motor al máximo y tirar fuertemente de la palanca para reducir el régimen de descenso',
        isCorrect: false
      },
      {
        textoRespuesta:
          'c) Relajar la palanca de mando para disminuir el ángulo de ataque y aplicar timón contrario al sentido de rotación',
        isCorrect: true
      },
      {
        textoRespuesta: 'd) "b" pero sin aplicar motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. La calefacción del carburador debe ponerse, en aproximaciones, con tiempo frío:',
    opciones: [
      {
        textoRespuesta: 'Antes de cortar motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Al aterrizar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Después de cortar motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al iniciar el viraje a base',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '26. Si accidentalmente sufriese una parada de motor no recuperable, ¿qué maniobra emprendería?',
    opciones: [
      {
        textoRespuesta: 'Saltar en paracaídas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Buscar el primer campo adecuado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tratar de conseguir una térmica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tratar de buscar un campo adecuado a ser posible siempre por la proa',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '27. Aterrizando con viento cruzado lateral fuerte, se obtiene mejor control del avión usando un calaje de flap menor del que usamos normalmente para aterrizar',
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
    titulo: '28. La aeronave que tenga derecho de paso:',
    opciones: [
      {
        textoRespuesta: 'Mantendrá rumbo y velocidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cederá el paso a la que le sigue',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cambiará su rumbo a su derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cambiará su rumbo a la izquierda',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. La dirección del viento en superficie se proporciona según el norte magnético para:',
    opciones: [
      {
        textoRespuesta: 'Compararlo con la dirección de la pista',
        isCorrect: true
      },
      {
        textoRespuesta: 'Transformarlo en geográfico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Calcular la intensidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Analizar la turbulencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. ¿Cuál es el primer paso a seguir para iniciar un viraje en un ULM de 2 ejes?',
    opciones: [
      {
        textoRespuesta: 'Dar gases al máximo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Quitar gases',
        isCorrect: false
      },
      {
        textoRespuesta: 'Empujar la palanca hacia delante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Empujar la palanca hacia el lado que deseamos virar',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '31. En el hipotético caso de entrar en pérdida:',
    opciones: [
      {
        textoRespuesta: 'Mantendremos la palanca donde esté y aplicaremos motor a tope',
        isCorrect: false
      },
      {
        textoRespuesta: 'Centraremos la palanca',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bajaremos el morro por debajo del horizonte, centraremos la palanca y aplicaremos con suavidad el motor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tiraremos con fuerza de la palanca y aplicaremos motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. ¿Cuál es mando principal de la altura?',
    opciones: [
      {
        textoRespuesta: 'Alabeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Timón de profundidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Timón de dirección',
        isCorrect: false
      },
      {
        textoRespuesta: 'El gas',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '33. La velocidad de turbulencia está destinada a asegurar que las turbulencias no generen en el avión factores de carga que fuesen excesivos para su estructura:',
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
    titulo: '34. Si en vuelo se atraviesa una zona de fuertes turbulencias, se debe:',
    opciones: [
      {
        textoRespuesta: 'Picar a volar a ras del suelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar la velocidad poniendo gas a fondo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Volar a mínima velocidad garantizando la no entrada en pérdida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ganar velocidad con giros ascendentes',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. Umbral de pista es el comienzo de la pista que se utiliza para el aterrizaje.',
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
    titulo: '36. El gasto de combustible debe realizarse consumiendo primero un depósito y después el otro.',
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
    titulo: '37. Que configuración de flap usaremos en caso de una toma fuera de pista',
    opciones: [
      {
        textoRespuesta: 'Da igual, lo importante es tomar cuesta arriba',
        isCorrect: false
      },
      {
        textoRespuesta: 'Da igual, lo importante es tomar viento en cara',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que permita la mínima velocidad del avión',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depende de si es un avión de ala baja o no',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. ¿Qué avión tiene preferencia en la fase de aproximación?',
    opciones: [
      {
        textoRespuesta: 'Del que está viento en cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'El que está en base',
        isCorrect: false
      },
      {
        textoRespuesta: 'El que está en final',
        isCorrect: true
      },
      {
        textoRespuesta: 'El que está cruzando perpendicularmente el GMS de la pista en servicio',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. Una pista de aterrizaje marcada con la cifra 30 quiere decir que:',
    opciones: [
      {
        textoRespuesta: 'Deberá seguir un rumbo de 30° para aterrizar en esa pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deberá seguir un rumbo de 300º para aterrizar en esa pista',
        isCorrect: true
      },
      {
        textoRespuesta: 'Deberá seguir un rumbo de 3° para aterrizar en esa pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'La pista mide 30 metros de ancha',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '40. Hemos calculado que la velocidad de referencia en final de nuestro avión es de 75 km/h. Vamos a aterrizar en un campo en el que hay cierta turbulencia. Podemos aumentar nuestra velocidad a 85 km/h',
    opciones: [
      {
        textoRespuesta: 'No',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aumentaremos sólo si vamos en un pendular',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aumentaremos sólo si vamos en un dos ejes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '41. La velocidad de maniobra es suficientemente superior a la velocidad de pérdida, para protegernos de las fuertes disminuciones de velocidad que la turbulencia produce',
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
    titulo: '42. ¿Qué es un factor de carga 1?',
    opciones: [
      {
        textoRespuesta: 'La potencia de los motores es igual al peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'La resistencia es igual al peso',
        isCorrect: false
      },
      {
        textoRespuesta: 'La sustentación es igual al peso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna de las anteriores son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. Si estoy volando con los flaps totalmente desplegados y la velocidad menor que indica el arco blanco son 35 millas:',
    opciones: [
      {
        textoRespuesta: 'Puedo volar por encima de esa velocidad porque no entraré en pérdida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Puedo volar con precaución por debajo de esa velocidad en aire en calma',
        isCorrect: false
      },
      {
        textoRespuesta: 'El arco blanco no tiene nada que ver con los flaps',
        isCorrect: false
      },
      {
        textoRespuesta: 'Puedo volar por encima de esa velocidad mientras el aire sea laminar y no haga maniobras bruscas',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '44. Cuando accionamos la palanca de mando hacia atrás, actuamos sobre el timón de profundidad y el avión sube. Pero, ¿En qué posición colocamos dicho timón?',
    opciones: [
      {
        textoRespuesta: 'Hacia arriba',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hacia abajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Neutro',
        isCorrect: false
      },
      {
        textoRespuesta: 'La palanca hacia detrás no acciona el timón de profundidad en los ULM',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. Para preparar un viaje, tendremos que recabar información',
    opciones: [
      {
        textoRespuesta: 'Meteorológica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sobre el aeródromo de destino',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Espacios aéreos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. Aterrizar con viento de cola es una práctica:',
    opciones: [
      {
        textoRespuesta: 'Recomendada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Prohibida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Habitual',
        isCorrect: false
      },
      {
        textoRespuesta: 'No recomendada',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '47. Para realizar un viraje circular, lo correcto en condiciones de viento será',
    opciones: [
      {
        textoRespuesta: 'Aumentar la inclinación viento en cola y disminuir la viento en cara',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuir la inclinación viento en cola y aumentar la viento en cara',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar la inclinación siempre',
        isCorrect: false
      },
      {
        textoRespuesta: 'No sucede nada porque compensa el tramo viento en cola con el tramo viento en cara',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "48. Para recuperar una 'pérdida' se debe disminuir el ángulo de ataque picando el avión:",
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
    titulo: '49. Volando con niveles de vuelo, calamos el altímetro a:',
    opciones: [
      {
        textoRespuesta: '1012,3 Mb.',
        isCorrect: false
      },
      {
        textoRespuesta: "28,92 'Hg.",
        isCorrect: false
      },
      {
        textoRespuesta: '1013,2 Mb.',
        isCorrect: true
      },
      {
        textoRespuesta: "29,82 'Hg.",
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '50. ¿Cómo acusara recibo la aeronave, cuando está en tierra, de las señales luminosas que se le hacen desde la torre de control?',
    opciones: [
      {
        textoRespuesta: 'Haciendo señales con los brazos desde la cabina de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Describiendo un giro de 360° con el avión sobre el lugar donde se encuentre en ese momento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Moviendo los alerones o el timón de dirección repetidas veces',
        isCorrect: true
      },
      {
        textoRespuesta: 'No hay una manera estándar de dar acuse de recibo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. Si durante el vuelo notamos fuertes rachas de viento procedentes de una tormenta, debemos:',
    opciones: [
      {
        textoRespuesta: 'Pasarlas a toda velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ascender sobre ellas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desviar el rumbo hacia el claro más cercano',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '52. En una pista con pendiente, al margen de la acción del viento ¿En qué sentido es más favorable realizar la toma de tierra?',
    opciones: [
      {
        textoRespuesta: 'Cuesta arriba',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuesta abajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'No importa el sentido',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. ¿Por dónde adelantará una nave en vuelo a otra?',
    opciones: [
      {
        textoRespuesta: 'Por la Izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por la derecha',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por debajo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. En caso de fallo de radio durante el día, un acuse de recibo de la aeronave a la torre de control se realizará:',
    opciones: [
      {
        textoRespuesta: 'Sacando e introduciendo el tren de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mediante un movimiento de guiñada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mediante un movimiento de cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mediante el alabeo de las alas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '55. Definición de altura: distancia vertical de un avión al suelo',
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
  }
];

export default preguntas;
