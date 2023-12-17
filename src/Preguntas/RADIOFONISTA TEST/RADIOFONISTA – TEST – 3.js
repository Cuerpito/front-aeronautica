const preguntas = [
  {
    titulo: '1. Cuál es la máxima distancia de VHF sobre terreno llano a FL 050:',
    opciones: [
      {
        textoRespuesta: '15 NM',
        isCorrect: false
      },
      {
        textoRespuesta: '8 NM',
        isCorrect: false
      },
      {
        textoRespuesta: '150 NM',
        isCorrect: false
      },
      {
        textoRespuesta: '85 NM',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '2. ¿Qué frase deberá emplear un piloto que quisiera decir: “Entiendo su mensaje y procederé a su cumplimiento”:',
    opciones: [
      {
        textoRespuesta: 'De acuerdo, lo haré',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cumpliré su orden',
        isCorrect: false
      },
      {
        textoRespuesta: 'Comprendido (“Wilco”)',
        isCorrect: true
      },
      {
        textoRespuesta: 'Recibido ("Roger”’)',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3. ¿En qué frecuencia se da la señal de socorro MAY DAY?',
    opciones: [
      {
        textoRespuesta: 'a) En la actual',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) 121.5 MHz.',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) En cualquier frecuencia de emergencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "a" y "b" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '4. ¿Cual es el indicativo en radiotelefonía para la estación que presta servicios de control de movimientos en superficie de las aeronaves en la zona de maniobras?',
    opciones: [
      {
        textoRespuesta: 'Torre.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Control',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aproximación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tierra',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5. De los siguientes grupos de bandas de frecuencias diga cual de ellos es el más utilizado en radiotelefonía:',
    opciones: [
      {
        textoRespuesta: 'VLF, LF, MF',
        isCorrect: false
      },
      {
        textoRespuesta: 'HF, VLF, EHF',
        isCorrect: false
      },
      {
        textoRespuesta: 'HF, VHF, UHF',
        isCorrect: true
      },
      {
        textoRespuesta: 'EHF, SHF',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "6. La prioridad del siguiente mensaje 'Requerimos QDM' es:",
    opciones: [
      {
        textoRespuesta: "Menor que 'Requerimos ascender al nivel...'",
        isCorrect: false
      },
      {
        textoRespuesta: "Menor que 'Requerimos descender hasta el nivel...'",
        isCorrect: false
      },
      {
        textoRespuesta: "Igual que 'último QNH 1018'",
        isCorrect: false
      },
      {
        textoRespuesta: "Mayor que 'Vire a la izquierda'",
        isCorrect: true
      }
    ]
  },
  {
    titulo: '7. ¿Cuál es la forma correcta de transmitir y colacionar la frecuencia 120.37S Mhz (canal VHF separado por 2S Khz)?',
    opciones: [
      {
        textoRespuesta: 'Uno dos cero tres siete',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno dos cero decimal tres siete',
        isCorrect: true
      },
      {
        textoRespuesta: 'Uno veinte decimal tres siete',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno dos cero decimal tres siete cinco',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. En aeródromos con poco tráfico en el suelo podemos rodar sin autorización hasta el punto de espera.',
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
    titulo: "9. El mensaje dirigido a un centro de control de área 'requiero vectores radar para rodear área de mal tiempo' es:",
    opciones: [
      {
        textoRespuesta: 'Un mensaje de seguridad en vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un mensaje meteorológico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un mensaje relativo a la localización',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un mensaje de movimiento',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '10. Si existe alguna circunstancia añadida al fallo de radio la cual no permite hacer la pasada por la torre para recibir autorización, por ejemplo poco combustible, o cualquier otra situación de emergencia. ¿Qué haría?',
    opciones: [
      {
        textoRespuesta: 'Ir a otro aeródromo donde sí podamos pasar por la torre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aterrizar en la pista contraria a la que esté en uso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entrar en circuito cuidando nuestra separación con las demás aeronaves y aterrizar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. La banda VHF:',
    opciones: [
      {
        textoRespuesta: 'Es para comunicaciones de largo alcance',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es para comunicaciones de largo y corto alcance',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es para comunicaciones de corto y medio alcance',
        isCorrect: true
      },
      {
        textoRespuesta: 'Esta banda no es para comunicaciones',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12. ¿Cuál es la prioridad de los mensajes?',
    opciones: [
      {
        textoRespuesta: 'Emergencia, urgencia, notificación de posición',
        isCorrect: true
      },
      {
        textoRespuesta: 'Posición, meteorológicos, urgencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Emergencia, posición y altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Urgencia , posición y meteorológicos',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '13. Después de hacer una llamada a la estación aeronáutica y antes de hacer una segunda llamada, deberá transcurrir un periodo de por lo menos:',
    opciones: [
      {
        textoRespuesta: '10 segundos',
        isCorrect: true
      },
      {
        textoRespuesta: '20 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: '30 segundos',
        isCorrect: false
      },
      {
        textoRespuesta: '5 segundos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "14. Que significa cuando el control nos dice 'colacione'",
    opciones: [
      {
        textoRespuesta: 'Que debemos esperar para transmitir',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que debemos repetir todo o parte del mensaje recibido tal como lo hemos escuchado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que mantengamos escucha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que repitamos solo el calaje de altímetro y el viento',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. Si detectamos un fallo de transmisión en nuestra radio. ¿Qué es lo primero que debe hacer?',
    opciones: [
      {
        textoRespuesta: 'Comprobar que la clavija del micrófono se halla bien conectada',
        isCorrect: true
      },
      {
        textoRespuesta: 'Realizar el circuito de fallo de radio del aeródromo al que vamos a aterrizar',
        isCorrect: false
      },
      {
        textoRespuesta: "Transmitir dos veces la frase: 'Transmitiendo a ciegas' seguido del nombre del destinatario de dicho mensaje",
        isCorrect: false
      },
      {
        textoRespuesta: 'Desconectar y conectar el master',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "16. La expresión 'dispersas' en meteorología hace referencia:",
    opciones: [
      {
        textoRespuesta: '1 a 7 octavos de nubes.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presencia de nubes en cinco a siete octavos del cielo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nubosidad en el cielo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nubosidad variable',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '17. ¿A qué banda pertenece el entorno de frecuencias comprendido entre 118.000 -­ 136.975 MHz del Servicio Aeronáutico Móvil?',
    opciones: [
      {
        textoRespuesta: 'Very high frequency (VHF)',
        isCorrect: true
      },
      {
        textoRespuesta: 'Very low frequency (VLF)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Low frequency (LF)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Medium frequency (MF)',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. ¿Que elementos de instrucciones o informaciones se deben siempre colacionar?',
    opciones: [
      {
        textoRespuesta:
          'Autorizaciones ATC, instrucciones de velocidad, información del estado de las pistas, QNH, código transponder',
        isCorrect: false
      },
      {
        textoRespuesta: 'QNH, Código transponder, estado de las ayudas a la aproximación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Código transponder, QNH, autorización de despegue, instrucciones de velocidad',
        isCorrect: true
      },
      {
        textoRespuesta: 'QNH, información meteorológica, pista en uso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. ¿Cómo se debe hablar por radio de una manera clara y sencilla para un buen entendimiento?',
    opciones: [
      {
        textoRespuesta: 'Enfatizando al principio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Enfatizando al final',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizando un tono constante',
        isCorrect: true
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '20. Si una estación aeronáutica nos pide que colacionemos un mensaje quiere decir:',
    opciones: [
      {
        textoRespuesta: 'a) Cumpla con las instrucciones dadas',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Repita todo el mensaje tal y como lo haya entendido',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Nos está pidiendo que hagamos un read back',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) La "b" y "c" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '21. Recibes una orden de llamar a TORRE en 118,7 y eres el XBC; como realizaras la colación',
    opciones: [
      {
        textoRespuesta: 'Llamaré',
        isCorrect: false
      },
      {
        textoRespuesta: '118,7 XBC',
        isCorrect: true
      },
      {
        textoRespuesta: 'Contactaré',
        isCorrect: false
      },
      {
        textoRespuesta: 'Gracias llamaré',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. Qué significa GO AHEAD:',
    opciones: [
      {
        textoRespuesta: 'Repita todo el mensaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Prosiga con su mensaje',
        isCorrect: true
      },
      {
        textoRespuesta: 'Recibido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Espere',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "23. ¿Qué significa el término 'Transmisión Ciega' (blind transmisión)?",
    opciones: [
      {
        textoRespuesta: 'No podemos ver la torre',
        isCorrect: false
      },
      {
        textoRespuesta: 'No tenemos equipo de radio',
        isCorrect: false
      },
      {
        textoRespuesta: 'No tenemos cobertura radar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todo es falso',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '24. Quién es el responsable de la separación de tráfico del aeródromo en lo que se refiere a su superficie?',
    opciones: [
      {
        textoRespuesta: 'a) El servicio de control de rodadura (ground control)',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) El servicio de control de torre en el caso de que no exista control de rodadura',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) El servicio de control de aproximación y salidas',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "a" y "b" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '25. Una aeronave es autorizada a mantener corto de la pista en uso. ¿Cuál es la fraseología correcta para indicar que se cumplirá dicha instrucción?',
    opciones: [
      {
        textoRespuesta: 'Recibido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pararemos antes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Comprendido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener corto',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '26. La unidad de medida de frecuencia es:',
    opciones: [
      {
        textoRespuesta: 'El VHF',
        isCorrect: false
      },
      {
        textoRespuesta: 'El Kilohercio',
        isCorrect: false
      },
      {
        textoRespuesta: 'El hercio',
        isCorrect: true
      },
      {
        textoRespuesta: 'El Megahercio',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '27. Cuál de los siguientes mensajes indicados abajo, no puede ser transmitido por el servicio móvil aeronáutico',
    opciones: [
      {
        textoRespuesta: 'Mensajes de teletipo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mensajes meteorológicos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mensajes de seguridad en vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mensajes de urgencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '28. Al avión X­BC se le ha ordenado contactar con la TORRE de Córdoba en la frecuencia de 118.3 ¿Cual es la respuesta correcta para indicar que cumplirá la orden recibida?',
    opciones: [
      {
        textoRespuesta: '118.3 X-BC',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cambiaré a TORRE X-BC',
        isCorrect: false
      },
      {
        textoRespuesta: 'TORRE Córdoba X-BC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cambiando X-BC',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. En caso de fallo de comunicaciones, ¿en qué clave debemos responder?',
    opciones: [
      {
        textoRespuesta: '7500',
        isCorrect: false
      },
      {
        textoRespuesta: '7700',
        isCorrect: false
      },
      {
        textoRespuesta: '7600',
        isCorrect: true
      },
      {
        textoRespuesta: '7400',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. Se define urgencia como:',
    opciones: [
      {
        textoRespuesta: 'Existe peligro para un pasajero o para la aeronave que no necesita ayuda',
        isCorrect: true
      },
      {
        textoRespuesta: 'Persona en problemas sin necesidad de ayuda inmediata',
        isCorrect: false
      },
      {
        textoRespuesta: 'No necesita ayuda inmediata',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son falsas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "31. Que significa el término 'Transmitiendo a ciegas'?",
    opciones: [
      {
        textoRespuesta:
          'Una transmisión de una estación a otra en circunstancias en las que una comunicación en ambos sentidos no se puede establecer, pero se cree que la estación a la que se llama es capaz de recibir la transmisión',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Una transmisión de información relativa a la navegación aérea que no está dirigida a una estación o estaciones específicas',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una transmisión de mensajes relativos a información meteorológica en ruta que puede afectar a la seguridad de la operación de aeronaves y no está dirigido a ninguna estación o estaciones específicas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una transmisión donde no se requiere una respuesta de la estación receptora',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. ¿Qué fenómeno influye por le general en la recepción de una transmisión VHF?',
    opciones: [
      {
        textoRespuesta: 'El nivel de vuelo del avión y la elevación del terreno',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las descargas eléctricas de las tormentas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La ionosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nada de lo anterior',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. ¿Cómo se llama el mando mediante el cual ajustamos la máxima recepción son que aparezcan ruidos parásitos?',
    opciones: [
      {
        textoRespuesta: 'Squelch',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sintonizador',
        isCorrect: false
      },
      {
        textoRespuesta: 'ID.rtf.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "34. En la escala de legibilidad, 'legible 3' significa:",
    opciones: [
      {
        textoRespuesta: 'Sin problemas para entenderlo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alto y claro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ilegible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Legible, pero con dificultad',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '35. Urgencia se define como...',
    opciones: [
      {
        textoRespuesta:
          'Una condición que afecta a la seguridad de una aeronave o de una persona a bordo y que no requiere asistencia inmediata',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Una condición que afecta a la altitud de una aeronave cuando ésta está interceptando el localizador durante una aproximación ILS',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una condición que afecta a la seguridad de una persona a bordo o a la vista y que no requiere asistencia inmediata',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una condición en la que se está amenazado por un peligro serio e inminente y en la que se requiere asistencia inmediata',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "36. ¿Qué frase deberá emplear un piloto que quisiera decir: 'espere y le volveré a llamar'?",
    opciones: [
      {
        textoRespuesta: 'Recibido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantenga escucha',
        isCorrect: true
      },
      {
        textoRespuesta: 'Así lo haremos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Adelante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '37. El controlador le dice a un avión EC-ET2 proceda al punto S. El piloto debe contestar: Recibido, EC-ET2',
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
    titulo: '38. ¿Qué significa una luz verde fija para un avión en tierra?',
    opciones: [
      {
        textoRespuesta: 'Autorizado a rodar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorizado a aparcar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Autorizado a despegar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Apártese del área de aterrizaje en uso',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. ¿Qué afecta a la señal VHF?',
    opciones: [
      {
        textoRespuesta: 'Ionosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Día y noche',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tormentas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alturas y relieve del terreno',
        isCorrect: true
      }
    ]
  },
  {
    titulo: "40. El grupo de palabras ' Break Break' se utiliza:",
    opciones: [
      {
        textoRespuesta: 'Antes de dar nuestra identificación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para separar mensajes a distintas aeronaves con comunicaciones saturadas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Para interrumpir una comunicación tierra-aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para finalizar nuestro mensaje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. Que se entiende por buena técnica al micrófono?',
    opciones: [
      {
        textoRespuesta: 'Hablar muy alto al micrófono',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mantener el micrófono alejado, ya que mejora la recepción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Usar un tono normal de conversación, hablar clara y correctamente',
        isCorrect: true
      },
      {
        textoRespuesta: "Hacer uso de coletillas corno 'eeeeh...'",
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. ¿Las autorizaciones se colacionan siempre?',
    opciones: [
      {
        textoRespuesta: 'Sí',
        isCorrect: false
      },
      {
        textoRespuesta: 'No',
        isCorrect: false
      },
      {
        textoRespuesta: 'No, si así nos lo ordena el ATC',
        isCorrect: true
      },
      {
        textoRespuesta: 'Siempre se colaciona',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "43. La palabra 'Stand By' significa:",
    opciones: [
      {
        textoRespuesta: 'Mi mensaje ha terminado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hable más despacio',
        isCorrect: false
      },
      {
        textoRespuesta: 'No entendí su mensaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '44. El reporte de información de la pregunta anterior consta de:',
    opciones: [
      {
        textoRespuesta:
          'Informe de posición, información operacional e información meteorológica a petición del servicio meteorológico',
        isCorrect: true
      },
      {
        textoRespuesta: 'Información operacional y meteorológica a petición, sin informe de posición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Informe de viento en altura, turbulencia, temperatura y hora prevista de llegada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Informe de autonomía, hora precisa de llegada e informe operacional',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. ¿Cuál es la forma correcta de transmitir y verificar la transmisión de 120.375 Mhz (canal VHF separado por 25 Hz)?',
    opciones: [
      {
        textoRespuesta: 'Uno dos cero tres siete',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno veinte decimal tres siete',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno dos cero decimal tres siete cinco',
        isCorrect: false
      },
      {
        textoRespuesta: 'Uno dos cero decimal tres siete',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '46. Que expresión se debe utilizar si se requiere la repetición entera de un mensaje',
    opciones: [
      {
        textoRespuesta: 'Repita su mensaje',
        isCorrect: false
      },
      {
        textoRespuesta: '¿Cuál fue su mensaje?',
        isCorrect: false
      },
      {
        textoRespuesta: 'Repita su última transmisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Repita',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '47. ¿Qué código Q se usa para reportar la altura?',
    opciones: [
      {
        textoRespuesta: 'QNH',
        isCorrect: false
      },
      {
        textoRespuesta: 'QDM',
        isCorrect: false
      },
      {
        textoRespuesta: 'QSI',
        isCorrect: false
      },
      {
        textoRespuesta: 'QFE',
        isCorrect: true
      }
    ]
  },
  {
    titulo: "48. ¿Qué significa 'Inteligibilidad 3'?",
    opciones: [
      {
        textoRespuesta: 'Inteligible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inteligible con dificultad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ningún Problema de comprensión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alto y claro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. ¿Cuál de las siguientes abreviaturas del indicativo de llamada Cherokee XY-­ABC es correcto?',
    opciones: [
      {
        textoRespuesta: 'Cherokee XY-BC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cherokee BC',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cherokee X-BC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cherokee X-ABC',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. ¿Cuál de las siguientes comunicaciones del avión EC-­ALK es correcta?',
    opciones: [
      {
        textoRespuesta: 'a) Bilbao, ELK pista libre',
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Bilbao, EC-ALK listos para rodar y alinear',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) ALK, Bilbao, en carrera de despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'd) "a" y "b" son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '51. Las llamadas de peligro y emergencia se harán en la frecuencia que se estaba utilizando, o en la frecuencia:',
    opciones: [
      {
        textoRespuesta: '121.5 Mhz.',
        isCorrect: true
      },
      {
        textoRespuesta: '125.1 Mhz.',
        isCorrect: false
      },
      {
        textoRespuesta: '121.5 Khz.',
        isCorrect: false
      },
      {
        textoRespuesta: '125.1 Khz.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: "52. ¿Qué abreviatura se utiliza para el término 'zona de control'?",
    opciones: [
      {
        textoRespuesta: 'CZ',
        isCorrect: false
      },
      {
        textoRespuesta: 'CTR',
        isCorrect: true
      },
      {
        textoRespuesta: 'CTA',
        isCorrect: false
      },
      {
        textoRespuesta: 'CTZ',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. El control de aproximación generalmente es el que nos autoriza a aterrizar:',
    opciones: [
      {
        textoRespuesta: 'Sólo en condiciones de poca visibilidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'En aeropuertos de poco tráfico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Esa es función del control de aeródromo, no del de aproximación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sólo autoriza a despegar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. Si en vuelo con fallo de radio recibimos de la torre una luz roja fija, significa:',
    opciones: [
      {
        textoRespuesta: 'Aeródromo peligroso no aterrice',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aterrice en este aeródromo y diríjase a la plataforma',
        isCorrect: false
      },
      {
        textoRespuesta: 'Haga virajes a la izquierda de 360º',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ceda el paso a otras aeronaves y siga en circuito',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '55. ¿Cuál de los siguientes contactos del avión EC­-EUY con una torre de control es más correcto?',
    opciones: [
      {
        textoRespuesta: 'Santander, EUY, buenos días',
        isCorrect: false
      },
      {
        textoRespuesta: 'Santander, EE-UY, buenos días',
        isCorrect: false
      },
      {
        textoRespuesta: 'Santander, EC-EUY, buenos días',
        isCorrect: true
      },
      {
        textoRespuesta: 'EC-EUY, Santander, buenos días',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. Un megahercio equivale a:',
    opciones: [
      {
        textoRespuesta: '100 Hercios',
        isCorrect: false
      },
      {
        textoRespuesta: '1.000 Hercios',
        isCorrect: false
      },
      {
        textoRespuesta: '10.000 Hercios',
        isCorrect: false
      },
      {
        textoRespuesta: '1.000.000 de Hercios',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '57. En un aeropuerto con control de rodadura, de aeródromo (torre) y de aproximación ¿Quién nos dará información acerca de plataformas y calles de rodaje?',
    opciones: [
      {
        textoRespuesta: 'Control de aeródromo (torre)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Control de aproximación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Control de rodadura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Esa información no nos dará ninguna de las dependencias citadas',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '58. Al avión XBC se le ha ordenado contactar con torre de Córdoba en la frecuencia 118.3, ¿cuál es la respuesta correcta para indicar que cumple la orden recibida?',
    opciones: [
      {
        textoRespuesta: 'Cambiaré a torre XBC',
        isCorrect: false
      },
      {
        textoRespuesta: 'Torre Córdoba XBC',
        isCorrect: false
      },
      {
        textoRespuesta: '118.3 XBC',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cambiando XBC',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. ¿Qué significa el término QDR?',
    opciones: [
      {
        textoRespuesta: 'Marcación magnética desde la estación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Rumbo verdadero hacia la estación (sin viento)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Rumbo magnético hacia la estación (sin viento)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Marcación verdadera desde la estación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. Autorizado a despegar pista 03, ¿qué tipo de mensaje es?',
    opciones: [
      {
        textoRespuesta: 'Seguridad',
        isCorrect: true
      },
      {
        textoRespuesta: 'Urgencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Control',
        isCorrect: false
      },
      {
        textoRespuesta: 'Socorro',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '61. ¿Bajo qué condiciones debemos responder en el SSR el código 7600?',
    opciones: [
      {
        textoRespuesta: 'Cuando entramos en áreas de mala meteorología',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando nos aproximamos a áreas prohibidas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando sobrevolamos áreas desérticas',
        isCorrect: false
      },
      {
        textoRespuesta: 'En caso de fallo de comunicaciones',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '62. Cuando se habla desde de un mensaje de control de tráfico aéreo, se hace referencia a:',
    opciones: [
      {
        textoRespuesta: 'Servicio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Clase B',
        isCorrect: false
      },
      {
        textoRespuesta: 'Seguridad de vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Regulación de vuelo',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
