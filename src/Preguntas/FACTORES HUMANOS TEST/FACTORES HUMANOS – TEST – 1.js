const preguntas = [
  {
    titulo: '1. ¿A partir de qué altitud deberíamos tener en cuenta problemas por hipoxia?',
    opciones: [
      {
        textoRespuesta: '8.000 ft',
        isCorrect: false
      },
      {
        textoRespuesta: '10.000 ft',
        isCorrect: true
      },
      {
        textoRespuesta: '5.000 ft',
        isCorrect: false
      },
      {
        textoRespuesta: '16.000 ft',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. La primera fase del estrés se conoce como:',
    opciones: [
      {
        textoRespuesta: 'Periodo de Alarma',
        isCorrect: true
      },
      {
        textoRespuesta: 'Periodo de Agotamiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Periodo de Respuesta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Periodo de Resistencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3. Las aceleraciones positivas y negativas:',
    opciones: [
      {
        textoRespuesta: 'Se combaten con entrenamiento solamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se pueden combatir',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo se combaten con arnés de seguridad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se pueden prevenir con entrenamiento',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '4. Para evitar el mareo en vuelo, deberíamos:',
    opciones: [
      {
        textoRespuesta: 'Mirar hacia ambos lados mientras se realiza el viraje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Respirar profundamente controlando la frecuencia respiratoria',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener un ritmo respiratorio normal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Evitar los movimientos bruscos de cabeza durante los virajes',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5. La orientación espacial se consigue gracias a:',
    opciones: [
      {
        textoRespuesta: 'Aparato vestibular',
        isCorrect: false
      },
      {
        textoRespuesta: 'La correcta integración de los sistemas visual, propioceptivo y del aparato vestibular',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sistema propioceptivo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sistema visual',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6. La hiperventilación es una respuesta fisiológica frente a la hipoxia, pero aparte de esta causa ¿cuál es el motivo más frecuente de hiperventilación en aeronáutica?.',
    opciones: [
      {
        textoRespuesta: 'Ingesta excesiva de alcohol',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilización de salicilatos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fiebre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ansiedad',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7. La EDC se produce más fácilmente:',
    opciones: [
      {
        textoRespuesta: 'Antes de actividades subacuáticas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Después de actividades subacuáticas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Después de comer',
        isCorrect: false
      },
      {
        textoRespuesta: 'Antes de comer, con hipoglucemias',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. La utilización de las listas de comprobación deben efectuarse de manera tal que:',
    opciones: [
      {
        textoRespuesta: 'Pueda rechazarse ya que la redundancia en la siguiente lista de comprobación servirá como verificación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su ejecución no coincida con otras tareas importantes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su ejecución pueda coincidir con la realización de otras actividades',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su ejecución no se realice simultáneamente con otras tareas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9. La orientación espacial proporcionada por la vista es:',
    opciones: [
      {
        textoRespuesta: '0,7',
        isCorrect: false
      },
      {
        textoRespuesta: '0,8',
        isCorrect: false
      },
      {
        textoRespuesta: '0,9',
        isCorrect: true
      },
      {
        textoRespuesta: '0,6',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. El principal «zeitgeber» o sincronizador externo en los seres humanos es:',
    opciones: [
      {
        textoRespuesta: 'Las variaciones estacionales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las influencias sociales ambientales',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11. Los "leans" o ladeos son:',
    opciones: [
      {
        textoRespuesta: 'Un tipo de vértigo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son vértigos en aceleraciones lineales',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se deben a enfermedades del equilibrio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vértigos producidos por las aceleraciones angulares',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12. A partir de concentraciones del 20 % de monóxido de carbono:',
    opciones: [
      {
        textoRespuesta: 'Duelen las articulaciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se suceden los estornudos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tendremos un sabor de boca amargo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se puede llegar a perder el conocimiento',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '13. ¿Qué parte del oído podría verse afectada por los cambios en la presión del aire que se producen durante el ascenso / descenso?',
    opciones: [
      {
        textoRespuesta: 'Los utrículos y sáculo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La cóclea',
        isCorrect: false
      },
      {
        textoRespuesta: 'La trompa de Eustaquio y la membrana del tímpano',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los conductos semicirculares',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. La variación de la temperatura en la troposfera según la ICAO (Standar Atmosfere) es de aproximadamente:',
    opciones: [
      {
        textoRespuesta: '10º C cada 1.000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '2º C cada 1.000 pies',
        isCorrect: true
      },
      {
        textoRespuesta: '2º C cada 1.000 metros',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura se mantiene constante en la troposfera',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. Los “bends” , como manifestaciones clínicas de la Enfermedad Descompresiva, consisten en:',
    opciones: [
      {
        textoRespuesta: 'Dolores articulares',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dolor torácico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pérdida de visión central',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pérdida de visión periférica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16. El sentido del equilibrio en vuelo es, con relación a tierra,',
    opciones: [
      {
        textoRespuesta: 'Más difícil de mantener en vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Más difícil de mantener en tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el no influye el vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '17. En relación con el alcohol ¿cuál de los siguientes enunciados es FALSO?',
    opciones: [
      {
        textoRespuesta: 'En ayunas alcanza más rápidamente el Sistema Nervioso Central',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se absorbe más deprisa si se ingiere con alimento',
        isCorrect: true
      }
    ]
  },
  {
    titulo: "18. Las 'G' positivas se adquieren, entre otras maniobras en",
    opciones: [
      {
        textoRespuesta: 'Los virajes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las salidas de picados',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las frenadas',
        isCorrect: false
      },
      {
        textoRespuesta: 'En todas las maniobras anteriores',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '19. En vuelo la mejor forma de combatir la hiperventilación es:',
    opciones: [
      {
        textoRespuesta: 'Provocarse bradipnea',
        isCorrect: true
      },
      {
        textoRespuesta: 'Provocarse taquipnea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provocarse la maniobra de mansalva',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tomar tierra',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. El hematíe o glóbulo rojo de la sangre:',
    opciones: [
      {
        textoRespuesta: 'Es responsable de la inspiración',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es responsable de la espiración',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tiene una gran capacidad de combinarse con el oxígeno del aire',
        isCorrect: true
      },
      {
        textoRespuesta: 'No tiene capacidad de combinarse con el CO2 del aire',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. La tensión o presión sanguínea debe tomarse:',
    opciones: [
      {
        textoRespuesta: 'Todos los días',
        isCorrect: false
      },
      {
        textoRespuesta: 'En condiciones de reposo',
        isCorrect: true
      },
      {
        textoRespuesta: 'De pie',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sentado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. Cuando sufre una aceleración longitudinal negativa se produce visión:',
    opciones: [
      {
        textoRespuesta: 'Gris',
        isCorrect: false
      },
      {
        textoRespuesta: 'Roja',
        isCorrect: true
      },
      {
        textoRespuesta: 'Negra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Borrosa',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '23. Un piloto que está acostumbrado a aterrizar solamente en pistas anchas, al efectuar aproximaciones a pistas más cortas y/o estrechas, podrá tener la sensación de que se encuentra:',
    opciones: [
      {
        textoRespuesta: 'A una altitud menor que la real, con la impresión de que está aterrizando lento',
        isCorrect: false
      },
      {
        textoRespuesta: 'A una altitud mayor que la real, con la impresión de que se quedará corto al aterrizar',
        isCorrect: false
      },
      {
        textoRespuesta: 'A una altura mayor que la real, con tendencia a quedarse corto al aterrizar',
        isCorrect: true
      },
      {
        textoRespuesta: 'A una altitud menor que la real, con tendencia a irse largo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. El riesgo de hipoxia aparece alrededor de los:',
    opciones: [
      {
        textoRespuesta: '5.000 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '3.000 m.',
        isCorrect: true
      },
      {
        textoRespuesta: '7.000 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '10.000 m.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. ¿Cuáles son los síntomas fácilmente observables a simple vista de un cuadro de estrés?',
    opciones: [
      {
        textoRespuesta: 'Sudores, piel enrojecida, pupilas dilatadas, respiración acelerada',
        isCorrect: true
      },
      {
        textoRespuesta: 'Inhalaciones rápidas y profundas, pinchazos precordiales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumento de la presión arterial, contracción de las pupilas, pinchazos precordiales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bajadas de la presión arterial',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '26. Antes de volar es conveniente:',
    opciones: [
      {
        textoRespuesta: 'Comer y beber abundantemente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tomar sólo alimentos líquidos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tomar alimentos líquidos y sólidos con moderación',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '27. Diga qué es correcto con respecto a los antihistamínicos…',
    opciones: [
      {
        textoRespuesta: 'Son compatibles con el vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'No son compatibles con el vuelo porque producen somnolencia y pérdida de atención',
        isCorrect: true
      },
      {
        textoRespuesta: 'Son compatibles con el',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. La permanencia de información en la memoria a corto plazo es:',
    opciones: [
      {
        textoRespuesta: 'Menos de 1 segundo',
        isCorrect: false
      },
      {
        textoRespuesta: 'De unos 30 segundos',
        isCorrect: true
      },
      {
        textoRespuesta: 'De 5 a 10 minutos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alrededor de 24 horas',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '29. Internacionalmente se considera que el límite máximo admisible de tiempo de exposición a un ruido de una intensidad de 80 db es de:',
    opciones: [
      {
        textoRespuesta: '6 horas día',
        isCorrect: false
      },
      {
        textoRespuesta: '8 horas día',
        isCorrect: false
      },
      {
        textoRespuesta: '12 horas día',
        isCorrect: false
      },
      {
        textoRespuesta: '16 horas día',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '30. ¿Cuáles de las siguientes no son variables personales psicológicas?',
    opciones: [
      {
        textoRespuesta: 'Neurosis',
        isCorrect: false
      },
      {
        textoRespuesta: 'Problemas de motivación y de actitudes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Problemas derivados de los sentimientos y emociones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Problemas antropológicos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '31. La respiración en vuelo en altura superior a los 1800 m sobre el nivel del mar:',
    opciones: [
      {
        textoRespuesta: 'Puede entrar en taquipnea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es dolorosa casi siempre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es dificultosa en casos extremos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trata de compensar la falta de oxígeno aumentando la frecuencia respiratoria',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '32. ¿Cuál es la función de la trompa de Eustaquio?',
    opciones: [
      {
        textoRespuesta: 'Igualar la presión a ambos lados del tímpano',
        isCorrect: true
      },
      {
        textoRespuesta: 'Junto con el caracol determina nuestra posición en el espacio y ayuda a la orientación espacial',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ayuda a la lubricación de la cadena de huesecillos aportando mucosas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Recibir las vibraciones del tímpano y llevarlas a la cadena de huesecillos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. Las alteraciones en el sentido del equilibrio pueden provocar en el piloto',
    opciones: [
      {
        textoRespuesta: 'Sueño',
        isCorrect: false
      },
      {
        textoRespuesta: 'Gases gastrointestinales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ilusiones sensoriales',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aerotitis',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. Los factores psicológicos como temores, desconfianza y/o ansiedad, pueden aumentar la predisposición al mareo',
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
      '35. Si tras mantener una velocidad constante durante un cierto tiempo en vuelo nivelado aceleramos bruscamente (“metemos gases”) tendremos la impresión de:',
    opciones: [
      {
        textoRespuesta: 'Que el avión gira sobre su eje longitudinal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el morro del avión se eleva',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que iniciamos un picado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que no elevamos "en ascensor”',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. La principal misión de los glóbulos rojos, eritrocitos o hematíes es:',
    opciones: [
      {
        textoRespuesta: 'Participar en el proceso de coagulación de la sangre',
        isCorrect: false
      },
      {
        textoRespuesta: 'La defensa celular del organismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Colaborar con la respuesta inmune del organismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transportar oxígeno',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '37. La contracción del músculo de los ventrículos se llama:',
    opciones: [
      {
        textoRespuesta: 'Diástole',
        isCorrect: false
      },
      {
        textoRespuesta: 'Taquicardia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Taquisístola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sístole',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '38. El alcohol es un tóxico importante con gran acción sobre el sistema nervioso central. Según recomienda OACI, ¿Cuál es el tiempo mínimo que hay que dejar pasar desde la última copa antes de volar?',
    opciones: [
      {
        textoRespuesta: '12 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '6 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '24 horas',
        isCorrect: true
      },
      {
        textoRespuesta: '48 horas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. La función principal de los glóbulos rojos es:',
    opciones: [
      {
        textoRespuesta: 'Contribuir a la respuesta de inmunización del organismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La defensa celular del organismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Participar en el proceso de coagulación de la sangre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Transportar el oxígeno',
        isCorrect: true
      }
    ]
  },
  {
    titulo: "40. Las 'G' negativas son más fáciles de soportar por el ser humano que las 'G' positivas",
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
    titulo: '41. La visión en túnel de un piloto se produce:',
    opciones: [
      {
        textoRespuesta: 'Solo en aceleraciones positivas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solo en atardeceres, con aceleraciones positivas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Siempre que sea de noche, en aceleraciones positivas',
        isCorrect: false
      },
      {
        textoRespuesta: 'En aceleraciones positivas por encima de 3 G,s',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '42. Las aceleraciones de más de 20 G,s:',
    opciones: [
      {
        textoRespuesta: 'Se soportan con un buen arnés',
        isCorrect: false
      },
      {
        textoRespuesta: 'Son peores que las de 6 G,s',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provocan vértigo y malestar general',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provocan la muerte',
        isCorrect: true
      }
    ]
  },
  {
    titulo: "43. Identifique los síntomas producidos por las 'G' negativas",
    opciones: [
      {
        textoRespuesta: 'Oscurecimiento de la visión, visión negra y pérdida de conocimiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Visión roja, hemorragias de ojos y oídos y pérdida de conocimiento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todos los anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. El nervio vago:',
    opciones: [
      {
        textoRespuesta: 'Está relacionado con el ritmo cardiaco',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está relacionado con el sistema digestivo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Está relacionado con la respiración',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '45. Cree usted que para que una persona propensa a marearse es bueno comer antes de volar?',
    opciones: [
      {
        textoRespuesta: 'Lo mejor es que no comiese nada antes del vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es muy recomendable ir bien comido al vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tener algo en el estómago antes del vuelo es muy recomendable',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '46. La entrada en cabina de gases de escape puede producir Hipoxia',
    opciones: [
      {
        textoRespuesta: 'Hipóxica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isquémica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los gases de escape no producen Hipoxia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Anémica',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '47. Cuando la imagen óptica se forma delante de la retina, hablamos de:',
    opciones: [
      {
        textoRespuesta: 'Miopía',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hipermetropía',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presbicia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Astigmatismo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. La mejor forma de combatir la hipoxia en un ultraligero es:',
    opciones: [
      {
        textoRespuesta: 'Tomar altura hasta los 10.000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'Respirar lentamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Respirar rápidamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Descender a menos de 10.000 pies',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '49. Las aceleraciones negativas sobre el encéfalo:',
    opciones: [
      {
        textoRespuesta: 'Provocan pérdida de conciencia real a partir de los 30 seg. de duración',
        isCorrect: true
      },
      {
        textoRespuesta: 'Pueden provocar pérdida de conciencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provocan pérdida de conciencia que puede ser grave sobre los 5 seg. de duración',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provocan vértigos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. En caso de hipoxia en vuelo debemos:',
    opciones: [
      {
        textoRespuesta: 'Picar inmediatamente hasta alcanzar una altura de seguridad por debajo de 10.000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ponernos la máscara, conectar el sistema de oxígeno al 100 % y descender por debajo de 10.000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: 'Conectar el sistema de oxígeno al 100% , ponernos la máscara, y descender por debajo de 10.000 pies',
        isCorrect: true
      },
      {
        textoRespuesta: 'Conectarnos al sistema de oxígeno y seguir volando normalmente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. La posición del piloto en su asiento:',
    opciones: [
      {
        textoRespuesta: 'No debe modificarse a lo largo del vuelo en su eje vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mejora los efectos de las aceleraciones si se sienta en un eje de 30º desde la vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mejora los efectos de las aceleraciones si se sienta en un eje menor de 30º desde la vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mejora los efectos si se sienta en un eje mayor de 30º desde la vertical',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '52. La presión intracraneal en aceleraciones positivas:',
    opciones: [
      {
        textoRespuesta: 'Disminuye en los ascensos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye y provoca pérdidas de conciencia si es mantenida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuye por debajo de las 1 G,s',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye si aumenta en el resto del cuerpo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. A menos de 5000 m de altitud sobre el nivel del mar no hay relación con barotraumatismo, pero si con:',
    opciones: [
      {
        textoRespuesta: 'Con la EDC en su fase de BENDS',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con la EDC en su fase de CHOKES',
        isCorrect: false
      },
      {
        textoRespuesta: 'EDC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Síntomas descompresivos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '54. La palidez:',
    opciones: [
      {
        textoRespuesta: 'Nunca se da en la hipoxia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Siempre se da en la hipoxia',
        isCorrect: false
      },
      {
        textoRespuesta: 'No es típica de la hipoxia',
        isCorrect: true
      },
      {
        textoRespuesta: 'No es frecuente en la hipoxia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '55. ¿Qué es la hipoxia?',
    opciones: [
      {
        textoRespuesta: 'a) Falta de CO2 en el organismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Falta de oxígeno en la sangre',
        isCorrect: true
      },
      {
        textoRespuesta: 'c) Es lo mismo que la hiperventilación',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) La "b" y la "c" son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. Entendemos por tiempo útil de conciencia:',
    opciones: [
      {
        textoRespuesta: 'El que disponemos antes de perder el conocimiento al desconectarnos de nuestro sistema de oxígeno',
        isCorrect: false
      },
      {
        textoRespuesta: 'El que disponemos antes de que se inicie la visión negra la someternos a altas aceleraciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'El que disponemos desde que se produce la visión negra hasta que perdemos el conocimiento',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El que disponemos para actuar con claridad de juicio y tomar decisiones correctas desde que nos desconectamos del equipo de oxígeno',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '57. Uno de los problemas mas graves que puede parecer un piloto en vuelo es la hipoxia y esta se produce por',
    opciones: [
      {
        textoRespuesta: 'Disminución del porcentaje de oxígeno de la atmósfera con la altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminución de la presión parcial del oxígeno con la altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumento de la fuerza de la gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alteraciones vestibulares',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '58. La sensación abdominal de gran peso se debe a:',
    opciones: [
      {
        textoRespuesta: 'Comidas excesivas cuando hay aceleraciones superiores a 3G',
        isCorrect: false
      },
      {
        textoRespuesta: 'Comidas excesivas antes del vuelo, en aceleraciones positivas o negativas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aceleraciones superiores a 3 G,s',
        isCorrect: true
      },
      {
        textoRespuesta: 'En aceleraciones superiores a 4 G,s',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. ¿Cuál es la unidad básica del sistema nervioso?',
    opciones: [
      {
        textoRespuesta: 'La sinapsis',
        isCorrect: false
      },
      {
        textoRespuesta: 'La neurona',
        isCorrect: true
      },
      {
        textoRespuesta: 'El cortex',
        isCorrect: false
      },
      {
        textoRespuesta: 'El cerebro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. En una pista más estrecha de lo habitual:',
    opciones: [
      {
        textoRespuesta: 'La ilusión produce la sensación de volar más bajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'No se produce ninguna ilusión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tendremos la ilusión que la pista tiene un gradiente descendente',
        isCorrect: false
      },
      {
        textoRespuesta: 'La ilusión produce la sensación de volar más alto',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '61. El corazón:',
    opciones: [
      {
        textoRespuesta: 'Se encarga de repartir el O2 del pulmón al resto del organismo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se contrae unas 60 veces por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se encarga de recoger el CO2 del organismo y llevarlo a los pulmones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '62. La ilusión tipo "Coriolis":',
    opciones: [
      {
        textoRespuesta: 'Se combate fácilmente con un buen arnés',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es imposible de evitar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es de tipo visual, no tiene que ver con el equilibrio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es muy peligrosa y debe evitarse mover la cabeza en aceleraciones',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '63. Hablamos de BRAQUICARDIA:',
    opciones: [
      {
        textoRespuesta: 'Cuando el corazón late a un ritmo superior a 100 lpm.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el corazón late a más de 60 lpm.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el corazón late a menos de 100 lpm.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el ritmo cardiaco es inferior de 60 lpm.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '64. El alcohol es un tóxico importante, con gran acción sobre el Sistema Nervioso Central. Naturalmente, está contraindicado volar bajo la influencia del alcohol. Según recomienda OACI ¿cuál es el tiempo mínimo que hay que dejar pasar desde la última copa antes de volar?',
    opciones: [
      {
        textoRespuesta: '6 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '12 horas',
        isCorrect: false
      },
      {
        textoRespuesta: '24 horas',
        isCorrect: true
      },
      {
        textoRespuesta: '48 horas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. Un barotrauma causado por la acumulación de gas en el estómago e intestinos puede conducir a:',
    opciones: [
      {
        textoRespuesta: 'Barotitis',
        isCorrect: false
      },
      {
        textoRespuesta: 'Enfermedad de descompresión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Barosinusitis',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dolor por presión o flatulencia',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '66. La irritabilidad producida por el ruido en vuelo:',
    opciones: [
      {
        textoRespuesta: 'Es difícil de evitar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provoca aumento de la concentración del piloto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provoca dolor de cabeza, debido además a la altitud de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Provoca disminución de la concentración del piloto',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '67. Tras realizar prácticas de submarinismo:',
    opciones: [
      {
        textoRespuesta: 'Debe dejarse pasar un mínimo de 6 horas antes de exponernos a ambiente de bajas presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se recomienda un periodo de 24 horas antes de exponerse a un ambiente de bajas presiones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se recomienda un lapso de 72 horas antes de la exposición a ambiente de bajas presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se puede volar inmediatamente en cualquier tipo de avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '68. El tratamiento urgente de una fractura consiste en:',
    opciones: [
      {
        textoRespuesta: 'Administrar calmantes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Manipular la extremidad hasta alinear el hueso roto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inmovilizar la extremidad mediante un entablillado de la misma',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aplicar un torniquete a la extremidad fracturada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. Con respecto a las aceleraciones, el entrenamiento:',
    opciones: [
      {
        textoRespuesta: 'No mejora sino se ayuda con una buena posición del piloto',
        isCorrect: false
      },
      {
        textoRespuesta: 'No tiene que ver con las aceleraciones negativas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ayuda a combatir las aceleraciones',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '70. ¿Cómo se denominan las terminaciones nerviosas de la retina utilizadas para la visión nocturna?',
    opciones: [
      {
        textoRespuesta: 'Conos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cristalinos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fóveas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bastones',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '71. El monóxido o dióxido de carbono es un gas:',
    opciones: [
      {
        textoRespuesta: 'Incoloro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inodoro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se difunde rápidamente en la atmósfera sin que pueda ser detectable fácilmente por nuestros sentidos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las tres son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '72. La ilusión autocinética consiste en:',
    opciones: [
      {
        textoRespuesta: 'Es la sensación de autorrotación que sentimos al estar dentro de una nube',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la sensación de estar virando aunque se vuele recto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una fuente luminosa aislada frente a un fondo uniformemente oscuro, parecerá que se mueve aunque esté quieta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. La frecuencia respiratoria normal es de:',
    opciones: [
      {
        textoRespuesta: '12 a 16 respiraciones por minuto',
        isCorrect: true
      },
      {
        textoRespuesta: '20 a 30 respiraciones por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: '32 a 40 respiraciones por minuto',
        isCorrect: false
      },
      {
        textoRespuesta: '60 a 100 respiraciones por minuto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '74. La hipoxia entre los 2000 y 3000 m sobre el nivel del mar:',
    opciones: [
      {
        textoRespuesta: 'En un ULM no se nota hasta los 10.000 m',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la fase indiferente no hay alteraciones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminuye cuando se compensa con O2',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. En relación al efecto de los medicamentos sobre el rendimiento de los pilotos…',
    opciones: [
      {
        textoRespuesta: 'Sólo han de considerarse los efectos secundarios de los medicamentos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Han de tenerse en cuenta tanto los efectos principales como los secundarios',
        isCorrect: true
      },
      {
        textoRespuesta: 'La medicación no influye en el rendimiento de los pilotos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo han de considerarse los efectos principales, la influencia de los efectos secundarios no es apreciable',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. El sistema nervioso central puede ser origen de la desorientación:',
    opciones: [
      {
        textoRespuesta: 'Por acostumbramiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por acumulación de tareas y exceso de confianza',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por cansancio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '77. Entendemos por hipoxia en sentido estricto:',
    opciones: [
      {
        textoRespuesta: 'La disminución de la concentración de oxígeno en el medio ambiente',
        isCorrect: false
      },
      {
        textoRespuesta: 'La disminución de la presión parcial de oxígeno en los alvéolos pulmonares',
        isCorrect: false
      },
      {
        textoRespuesta: 'La dificultad respiratoria originada por un problema ventilatorio',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La disminución de la cantidad de oxígeno en los órganos y tejidos corporales, que dificulta o impide su funcionamiento normal',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '78. Al referirnos a la hipoxia en el medio aeronáutico, hablamos de fase indiferente (respirando aire ambiente):',
    opciones: [
      {
        textoRespuesta: 'Hasta los 3.000 m. de altitud',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hasta los 5.000 m. de altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 3.000 y 5.000 m. de altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 5.000 y 7.000 m. de altitud',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. La cadena de huesecillos (martillo, yunque y estribo) , se sitúa en:',
    opciones: [
      {
        textoRespuesta: 'El oído interno',
        isCorrect: false
      },
      {
        textoRespuesta: 'El oído externo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El seno maxilar',
        isCorrect: false
      },
      {
        textoRespuesta: 'El oído medio',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '80. Hipoxia significa:',
    opciones: [
      {
        textoRespuesta: 'Ausencia total de oxígeno en los tejidos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Falta de oxígeno en la sangre y los tejidos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Disminución de oxígenos en pulmones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es un término sinónimo a la hiperventilación',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '81. Un cuadro de tos seca, dolor torácico opresivo y dificultad respiratoria, tras un vuelo a alta cota, nos hace pensar en:',
    opciones: [
      {
        textoRespuesta: 'Bends',
        isCorrect: false
      },
      {
        textoRespuesta: 'Chokes',
        isCorrect: true
      },
      {
        textoRespuesta: 'Shock hipovolémico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Parestesias',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '82. El bulbo raquídeo:',
    opciones: [
      {
        textoRespuesta: 'No influye en la respiración',
        isCorrect: false
      },
      {
        textoRespuesta: 'Contiene los elementos que proporcionan equilibrio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de ellas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Regula las condiciones cardiacas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '83. En la inspiración se provoca:',
    opciones: [
      {
        textoRespuesta: 'Relajación de los músculos intercostales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Relajación del diafragma',
        isCorrect: false
      },
      {
        textoRespuesta: 'Captación de CO2',
        isCorrect: false
      },
      {
        textoRespuesta: 'Captación de O2 por los capilares de sangre venosa',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '84. Los investigadores de accidentes aéreos han puesto últimamente un especial énfasis en los factores humanos como responsables de gran parte de los accidentes aéreos. ¿En qué tanto por ciento aproximadamente?',
    opciones: [
      {
        textoRespuesta: '15%',
        isCorrect: false
      },
      {
        textoRespuesta: '4%',
        isCorrect: false
      },
      {
        textoRespuesta: '40%',
        isCorrect: false
      },
      {
        textoRespuesta: '75%',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '85. El corazón:',
    opciones: [
      {
        textoRespuesta: 'Tiene cuatro cavidades y cuatro válvulas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tiene cuatro válvulas y dos cavidades',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tiene dos válvulas y dos cavidades',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se contrae rápidamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. El consumo de tabaco',
    opciones: [
      {
        textoRespuesta: 'Favorece la aparición de hipoxia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reduce el número de células capaces de transportar oxígeno',
        isCorrect: false
      },
      {
        textoRespuesta: 'Forma carboxihemoglobina en los hematíes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '87. La nefrona tiene como principal objetivo:',
    opciones: [
      {
        textoRespuesta: 'Eliminar la orina',
        isCorrect: false
      },
      {
        textoRespuesta: 'Eliminar los productos de desecho de la sangre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Eliminar los residuos de la digestión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener el equilibrio ácido/básico de la sangre',
        isCorrect: true
      }
    ]
  },
  {
    titulo: "88. El parámetro ambiental puede definirse como 'la influencia que el medio natural ejerce sobre el hombre'",
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
    titulo: '89. Las anfetaminas:',
    opciones: [
      {
        textoRespuesta: 'Estimulan la vigilancia y combaten la sensación de fatiga, pero provocan una fase posterior de depresión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tienen efectos anorexígenos',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Están completamente contraindicados si se va a volar. Han sido los fármacos que han ocasionado mayor número de incidentes aéreos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las anteriores son ciertas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '90. Tiene influencia sobre la agudeza visual:',
    opciones: [
      {
        textoRespuesta: 'Alcohol',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tabaco',
        isCorrect: false
      },
      {
        textoRespuesta: 'La hipoxia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todo lo anterior',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '91. Hablamos de taquicardia:',
    opciones: [
      {
        textoRespuesta: 'Cuando el corazón late a menos de 10 latidos por minuto (Lpm)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el corazón late a menos de 100 latidos por minuto (Lpm)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el ritmo cardiaco es inferior a 60 latidos por minuto (Lpm)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el corazón late a ritmo superior a 100 latidos por minuto (Lpm)',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '92. ¿Qué es y qué significa exactamente la expresión FASE DE EMERGENCIA?',
    opciones: [
      {
        textoRespuesta: 'a) Una fase de Alerta',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Una fase de peligro',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Una fase de incertidumbre',
        isCorrect: false
      },
      {
        textoRespuesta:
          'd) Es una expresión genérica que puede significar, según el caso, cualquiera de las fases mencionadas en "a", "b" y "c"',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '93. Las maniobras de masaje cardiaco necesitan:',
    opciones: [
      {
        textoRespuesta: 'Lecho duro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cada 10 > 12 insuflaciones boca a boca',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión sobre el esternón',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '94. La tolerancia media habitual del ser humano frente a las altas aceleraciones es de :',
    opciones: [
      {
        textoRespuesta: '2.5 Gz positivas',
        isCorrect: false
      },
      {
        textoRespuesta: '4.5 Gz positivas',
        isCorrect: true
      },
      {
        textoRespuesta: '7 Gz positivas',
        isCorrect: false
      },
      {
        textoRespuesta: '9 Gz positivas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. La espiración se produce :',
    opciones: [
      {
        textoRespuesta: 'De forma involuntaria',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por relajación de músculos intercostales y diafragma',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por contractura de los músculos intercostales y diafragma',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por contractura de los bronquios',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. La cinetosis es:',
    opciones: [
      {
        textoRespuesta: 'Una dificultad en adaptarse al movimiento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una incapacidad de adaptarse al desequilibrio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un tipo de vértigo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un cambio del equilibrio del piloto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. Las tres variables personales que afecta al ser humano en relación con la seguridad de la aviación, son:',
    opciones: [
      {
        textoRespuesta: 'Biológicas, psicológicas y sociales',
        isCorrect: true
      },
      {
        textoRespuesta: 'Biológicas, históricas y ecológicas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Económicas, políticas y culturales',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. Una rotura timpánica da como resultado:',
    opciones: [
      {
        textoRespuesta: 'Una sordera de percepción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una sordera mixta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Desorientación espacial',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una sordera de transmisión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '99. El oído interno:',
    opciones: [
      {
        textoRespuesta: 'Es responsable siempre del equilibrio',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es siempre responsable del equilibrio y a veces de la audición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es responsable de la audición y del equilibrio a veces',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguno de los anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. La unidad funcional básica del pulmón es:',
    opciones: [
      {
        textoRespuesta: 'La areola',
        isCorrect: false
      },
      {
        textoRespuesta: 'La nefrona',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los bronquios',
        isCorrect: false
      },
      {
        textoRespuesta: 'El alveolo',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
