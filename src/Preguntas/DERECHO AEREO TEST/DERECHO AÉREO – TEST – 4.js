const preguntas = [
  {
    titulo: '1. Para que un piloto de ULM pueda reportar su altitud de vuelo, debe de ajustar su altímetro a:',
    opciones: [
      {
        textoRespuesta: 'QNE ( Presión Standard)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión autorizada por el ATC',
        isCorrect: false
      },
      {
        textoRespuesta: 'QNH (presión a nivel del mar)',
        isCorrect: true
      },
      {
        textoRespuesta: 'QFE ( Presión a nivel de pista)',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. Un NOTAM, da información meteorológica',
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
    titulo: '3. La licencia de piloto de ULM no será necesaria cuando se posea el siguiente título:',
    opciones: [
      {
        textoRespuesta: 'Piloto privado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Siempre es necesario para volar ULM',
        isCorrect: true
      },
      {
        textoRespuesta: 'Piloto comercial',
        isCorrect: false
      },
      {
        textoRespuesta: 'Piloto de transporte de línea aérea',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '4. ¿Qué significado tienen una serie de destellos blancos efectuados por el control de aeródromo a una aeronave en vuelo?',
    opciones: [
      {
        textoRespuesta: 'Aterrice en éste aeródromo y diríjase a la plataforma',
        isCorrect: true
      },
      {
        textoRespuesta: 'Haga un vuelo circular y espere nueva señal',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ceda el paso a otra aeronave',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeródromo bajo mínimos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. ¿Cuál de estos equipos es obligatorio a bordo de un ULM?',
    opciones: [
      {
        textoRespuesta: 'Paracaídas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Extintor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Radio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguno de ellos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6. Como requisito de construcción de un ULM y a efectos de proyecto:',
    opciones: [
      {
        textoRespuesta: 'Debe suponerse un mínimo de 2 plazas y de 85 Kg. por pasajero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debe suponerse un máximo de 2 plazas y de 85 Kg. por pasajero',
        isCorrect: true
      },
      {
        textoRespuesta: 'Debe suponerse un mínimo de 2 plazas y de 95 Kg. por pasajero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de ellas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7. La altura máxima de vuelo para los ULM no será superior a:',
    opciones: [
      {
        textoRespuesta: 'No existe limitación de altura',
        isCorrect: false
      },
      {
        textoRespuesta: '1000 metros',
        isCorrect: false
      },
      {
        textoRespuesta: '300 metros sobre tierra o agua',
        isCorrect: true
      },
      {
        textoRespuesta: 'La que proporcione el techo operativo del ULM',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. Definición de aeródromo controlado:',
    opciones: [
      {
        textoRespuesta: 'Aeródromo en el que se facilita servicio de control de tránsito aéreo para el tránsito del aeródromo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aeródromo en el que se facilita asesoramiento aeronáutico para el tránsito aéreo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeródromo en el que se facilita información aeronáutica para el tránsito aéreo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeródromo que tiene control meteorológico por meteosat',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '9. El equipo de salvamento mínimo en un avión monomotor que vuele sobre el agua, a una distancia superior a la de planeo para poder alcanzar la costa, es:',
    opciones: [
      {
        textoRespuesta: 'Una balsa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un paracaídas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bengalas de señales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un chaleco salvavidas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10. Si un jefe de vuelo nos indicase que el campo no esta operativo y que desaconseja el vuelo, ¿que haríamos?',
    opciones: [
      {
        textoRespuesta: 'Desobedecer el no es la autoridad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Esperar a que se vaya',
        isCorrect: false
      },
      {
        textoRespuesta: 'El no puede hacer eso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Obedecer y no volar',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '11. ¿Cuál de estos equipos es obligatorio a bordo de un ULM?',
    opciones: [
      {
        textoRespuesta: 'Paracaídas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Extintor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Radio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguno de los anteriores',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '12. Uno de los requisitos para el vuelo solo es haber demostrado a su instructor:',
    opciones: [
      {
        textoRespuesta: 'La capacidad de realizar vuelos a la máxima velocidad que la actuación de la aeronave permita',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que conoce las reglas de vuelo y situaciones que se pueden presentar durante dicho vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que domina los despegues normales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que es capaz de realizar la acrobacia recomendable y propia de la aeronave',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. El jefe de vuelos de un aeródromo, para poder certificar horas de vuelo a un piloto de ULM debe:',
    opciones: [
      {
        textoRespuesta: 'Hacer el chequeo completo del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Exigir que el avión esté matriculado y asegurado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Pedir la cartilla de vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'No debe pedir nada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. ¿Se puede volar con un ULM fuera del espacio aéreo de España sin autorización de la autoridad aérea competente?',
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
    titulo: '15. La señal de socorro en radiotelefonía consiste en:',
    opciones: [
      {
        textoRespuesta: 'Tres veces la palabra MAYDAY',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tres veces la palabra PAM',
        isCorrect: false
      },
      {
        textoRespuesta: 'No existe una llamada específica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo se puede trasmitir la señal de socorro en Morse',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '16. La distancia determinada por la condición atmosférica y expresada en unidades de longitud, a que pueden verse e identificarse, durante el día, objetos prominentes no iluminados, se denomina visibilidad:',
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
    titulo: '17. ¿Quien es el responsable de evitar colisiones en vuelo?',
    opciones: [
      {
        textoRespuesta: 'El jefe de vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los controladores',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todos los pilotos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '18. ¿Qué es un boletín de servicio?',
    opciones: [
      {
        textoRespuesta:
          'Un documento que divulga el constructor en donde se recogen las modificaciones que considere procedente realizar al ULM para su fiable y segura operación',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un documento que divulga la FAA de los EEUU dando normas internacionales sobre el uso de ULM',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un documento que divulga la Aviación Civil de cada país recogiendo las recomendaciones de la OACI (Organización Aeronáutica Civil Internacional)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una separata del BOE dedicada a la aviación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. Para autorizar la apertura de una escuela de ultraligeros, se requiere:',
    opciones: [
      {
        textoRespuesta: 'Un ultraligero de doble mando y un piloto de ultraligero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un ultraligero de doble mando',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un piloto de ultraligero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las respuestas anteriores es correcta',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '20. Es responsable del mantenimiento, revisiones periódicas y cuidado del ULM:',
    opciones: [
      {
        textoRespuesta: 'Inspección de Aviación Civil',
        isCorrect: false
      },
      {
        textoRespuesta: 'El Instructor de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El usuario del ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo el propietario',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '21. Zona prohibida:',
    opciones: [
      {
        textoRespuesta: 'Espacio aéreo de dimensiones definidas sobre tierra o agua, donde se prohíben los vuelos VFR',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Espacio aéreo sobre dimensiones definidas sobre territorio jurisdiccional de un Estado donde se prohíbe todo tipo de vuelos',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Espacio aéreo de dimensiones definidas sobre el territorio o las aguas Jurisdiccionales de un Estado dentro del cual está prohibido el vuelo de las Aeronaves',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '22. Una doble cruz blanca situada horizontalmente indica que el aeródromo está siendo utilizado por:',
    opciones: [
      {
        textoRespuesta: 'Servicios de emergencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Planeadores',
        isCorrect: true
      },
      {
        textoRespuesta: 'Globos',
        isCorrect: false
      },
      {
        textoRespuesta: 'ULM solamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. El documento de identificación del Alumno­-Piloto de ULM caducará:',
    opciones: [
      {
        textoRespuesta: 'A contar desde la fecha de su concesión, dos años',
        isCorrect: false
      },
      {
        textoRespuesta: 'A contar desde la fecha de su petición a la Agencia Estatal de Seguridad Aérea, dos años',
        isCorrect: false
      },
      {
        textoRespuesta: 'En la misma fecha que el certificado médico',
        isCorrect: true
      },
      {
        textoRespuesta: 'A contar desde la fecha de su recepción, dos años',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. ¿Cuál de estos equipos es recomendable llevar en el ULM?',
    opciones: [
      {
        textoRespuesta: 'Un anemómetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un altímetro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una brújula',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los tres son obligatorios',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. En las telecomunicaciones aeronáuticas, la palabra FRASE se deletrearía:',
    opciones: [
      {
        textoRespuesta: 'Fox, Rima, Alfa, Sierra, Echo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Foxtrot, Rima, Alfa, Sierra, Echo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Foxtrot, Roma, Alfa, Sierra, Echo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Foxtrot, Romeo, Alfa, Sierra, Echo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '26. Corresponde al Jefe de Vuelos:',
    opciones: [
      {
        textoRespuesta: 'Determinar el comienzo y fin de las actividades de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Determinar los procedimientos de operación y pista en servicio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Establecer las comunicaciones aire¬-tierra y viceversa o colocación de señales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas ellas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '27. Un ULM matriculado en España podrá volar en otros países, siempre y cuando:',
    opciones: [
      {
        textoRespuesta: 'Cumplimente y sea aprobado un plan de vuelo estandarizado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Salga y entre por un aeropuerto aduanero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Lleve equipo de radio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solo le está permitido volar dentro del espacio aéreo español',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. Para la revalidación de las habilitaciones correspondientes a la licencia de ULM, habrá que acreditar, al menos:',
    opciones: [
      {
        textoRespuesta: '3 horas de vuelo y 3 vuelos solo, durante los dos últimos años',
        isCorrect: false
      },
      {
        textoRespuesta: '3 horas de vuelo solo',
        isCorrect: false
      },
      {
        textoRespuesta: '5 horas de vuelo durante el último año',
        isCorrect: true
      },
      {
        textoRespuesta: '3 horas de vuelo solo, en los últimos tres meses',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. Los ultraligeros biplaza terrestres deben presentar una masa máxima autorizada al despegue que no sea superior a:',
    opciones: [
      {
        textoRespuesta: '300 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: '330 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: '400 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: '450 Kg.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '30. Que significa GND',
    opciones: [
      {
        textoRespuesta: 'Grande',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tierra',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ganancia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '31. Las condiciones de visibilidad mínimas para el vuelo en ULM:',
    opciones: [
      {
        textoRespuesta: 'a) 8 kilómetros a FL 100 o por encima, 5 kilómetros por debajo de FL 100. para espacios E, F y G',
        isCorrect: false
      },
      {
        textoRespuesta:
          'b) 1500 metros cuando lo prescriba la autoridad ATS competente, a velocidades que permita observar los tráficos en espacios F y G',
        isCorrect: false
      },
      {
        textoRespuesta: '"a" y "b" son correctas',
        isCorrect: true
      },
      {
        textoRespuesta: '1500 metros en horizontal y 300 m en vertical.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. Si una aeronave está en aproximación final y otra está en el tramo de Base, pero más baja, ¿quién tiene preferencia?',
    opciones: [
      {
        textoRespuesta: 'La que está más baja',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que está en aproximación final',
        isCorrect: true
      },
      {
        textoRespuesta: 'La que está en Base',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que tenga menor velocidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. La documentación tanto de tripulante como de aeronave necesarias para volar son:',
    opciones: [
      {
        textoRespuesta: 'Ninguna, no es necesario ningún tipo de documentación, no sirven para nada y aportan más peso al avión',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Licencia de piloto de ULM en vigor, certificado de matrícula, certificado de aeronavegabilidad en vigor, seguro de responsabilidad civil y de acompañantes en caso de modelos biplaza',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un permiso de AESA para volar',
        isCorrect: false
      },
      {
        textoRespuesta: 'DNI o pasaporte',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. ¿Es imprescindible que haya un Jefe de Vuelos en una infraestructura en las que pretendan operar ultraligeros?',
    opciones: [
      {
        textoRespuesta: 'Sí',
        isCorrect: true
      },
      {
        textoRespuesta: 'No puede volar con dicha Licencia en España de forma indefinida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de la categoría del Campo de Vuelo ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'Siempre que la pista esté asfaltada y tenga una longitud superior a 700 m.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. Vemos en una carta una zona LED52 cuyos límites verticales son 8000 ft ALT/1000 ft AGL ¿podemos pasar?',
    opciones: [
      {
        textoRespuesta: 'Sí, si mantenemos el vuelo debajo de 8000 pies de altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, si mantenemos el vuelo por debajo de 1000 pies de altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'No, en ningún caso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es posible pasar manteniendo un máximo de 1000 pies de altitud',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. ¿Está permitido volar con ULM en espacios aéreos restringidos?',
    opciones: [
      {
        textoRespuesta: 'Sí, si llevamos emisora',
        isCorrect: false
      },
      {
        textoRespuesta: 'No está autorizado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sí, si nos ajustamos a las condiciones de la restricción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, si nos autoriza el jefe de vuelos',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '37. Nuestro acompañante, se empieza a sentir muy mal. Puede ser grave. Estamos a 20 min. del aeropuerto de Granada, y a 5 del campo de vuelo de Loja. Tenemos que proceder obligatoriamente a Loja, ya que está mas cerca y en Granada no permiten entrar ulm.',
    opciones: [
      {
        textoRespuesta: 'Verdadero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Falso. Si consideramos que en Granada nos darán asistencia más rápidamente, procederemos allí',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '38. Área LER 71C en las cercanías de Salamanca. Un vuelo VFR, volando a 800 pies AGL, para entrar en ella, tiene que pedir permiso a la torre de Salamanca',
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
    titulo: '39. VMC significa condiciones meteorológicas visuales',
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
    titulo: '40. ¿Quién es la persona responsable de la seguridad en vuelo de un ULM?',
    opciones: [
      {
        textoRespuesta: 'El Jefe de Vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'La empresa de mantenimiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'El piloto',
        isCorrect: false
      },
      {
        textoRespuesta: 'El piloto al mando',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '41. Para revalidar la Licencia de Piloto ULM es necesario, al menos en los doce meses anteriores ...',
    opciones: [
      {
        textoRespuesta: '3 vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: '3 horas de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: '5 horas de vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: '5 horas de vuelo y 5 vuelos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. El libro diario de vuelos, es el documento de las escuelas de ultraligeros formado por:',
    opciones: [
      {
        textoRespuesta: 'Las hojas de cronometraje',
        isCorrect: true
      },
      {
        textoRespuesta: 'El parte mensual de actividades',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las actividades diarias del aeródromo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '43. Dentro de las horas de vuelo en ultraligero que como mínimo comprende el curso para la obtención de la licencia de piloto de ultraligero, es necesario realizar un vuelo de travesía con una duración mínima de:',
    opciones: [
      {
        textoRespuesta: 'Una hora',
        isCorrect: true
      },
      {
        textoRespuesta: 'Media hora',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dos horas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las respuestas es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. ¿Qué Orden Ministerial es la que regula el vuelo ULM en España?',
    opciones: [
      {
        textoRespuesta: 'OM de 24 de abril de 1986 del Ministerio de Transportes, Turismo y Telecomunicaciones',
        isCorrect: true
      },
      {
        textoRespuesta: 'OM de 24 de julio de 1996 del Ministerio de Transportes, Turismo y Telecomunicaciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'OM de 29 de febrero de 2008 de la Secretaria de Estado de Transportes',
        isCorrect: false
      },
      {
        textoRespuesta: 'OM de 24 de abril de 2006 de AESA',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. Que significa CTR',
    opciones: [
      {
        textoRespuesta: 'Zona de control de aeródromo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sistema de navegación por gps',
        isCorrect: false
      },
      {
        textoRespuesta: 'Zona prohibida a vuelos IFR',
        isCorrect: false
      },
      {
        textoRespuesta: 'Zona prohibida a vuelos VFR',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. El montaje de un ULM se efectúa:',
    opciones: [
      {
        textoRespuesta: 'Siguiendo un orden cronológico de las operaciones',
        isCorrect: true
      },
      {
        textoRespuesta: 'No es preciso ser tan estricto, todo se monta muy fácilmente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sin verificación porque no es obligatorio',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '47. Como norma general, cual es la visibilidad mínima para operar en VFR en un aeropuerto',
    opciones: [
      {
        textoRespuesta: '9999 metros',
        isCorrect: false
      },
      {
        textoRespuesta: '1500 metros',
        isCorrect: false
      },
      {
        textoRespuesta: '5000 metros',
        isCorrect: true
      },
      {
        textoRespuesta: '10000 metros',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. Un ultraligero en vuelo de crucero no puede descender a menos de 150 metros sobre el terreno.',
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
    titulo: '49. Si en una carta aeronáutica, vemos que hay una zona así: LER154 6000 ft ALT/GND­SEA ¿qué significa?',
    opciones: [
      {
        textoRespuesta: 'Es una zona restringida, con límites verticales desde el suelo o mar hasta 6000 pies de altitud',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es una zona restablecida, con límites verticales desde el suelo o mar hasta 6000 pies de altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es una zona peligrosa, con límites verticales desde el suelo o mar hasta 6000 pies de altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es una zona restringida, con límites verticales desde el suelo o mar hasta nivel de vuelo 6000',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. La longitud y anchura mínima, considerada por las normas para una pista de ULM son:',
    opciones: [
      {
        textoRespuesta: '150 metros por 20 metros respectivamente',
        isCorrect: false
      },
      {
        textoRespuesta: '200 metros por 15 metros respectivamente',
        isCorrect: false
      },
      {
        textoRespuesta: '100 metros por 10 metros respectivamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de la aeronave base para el cálculo',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '51. El vuelo con ULM. En espacios aéreos controlados se permite siempre y cuando:',
    opciones: [
      {
        textoRespuesta: 'Se avise al centro de control correspondiente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se vuele a menos de 300 metros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se distinga el tráfico visualmente',
        isCorrect: false
      },
      {
        textoRespuesta: 'No está autorizado',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '52. Tiene prioridad para aterrizar:',
    opciones: [
      {
        textoRespuesta: 'El planeador al globo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El dirigible al ala delta',
        isCorrect: false
      },
      {
        textoRespuesta: 'El globo al planeador',
        isCorrect: true
      },
      {
        textoRespuesta: 'El ULM al dirigible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. En el tramo base, nos damos cuenta que otra aeronave esta ya en final pero más lejos de la pista que nosotros:',
    opciones: [
      {
        textoRespuesta: 'Podemos pasar delante, si nuestra aeronave es mas rápida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tenemos prioridad al estar más cerca de la pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'Debemos ponernos detrás de la aeronave que está en final',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por encima',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. ¿Cuál de las siguientes licencias es necesaria para pilotar un ULM?',
    opciones: [
      {
        textoRespuesta: 'Licencia de piloto privado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Licencia de piloto de helicóptero',
        isCorrect: false
      },
      {
        textoRespuesta: 'Licencia de piloto de ULM',
        isCorrect: true
      },
      {
        textoRespuesta: 'Con cualquier licencia superior a la de piloto de ULM vale',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '55. Para la apertura de una escuela de ULM es indispensable, al menos:',
    opciones: [
      {
        textoRespuesta: 'Un jefe de vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un sistema de comunicaciones por radio o un sistema de señales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un ULM de doble mando',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '56. El límite de edad para obtener la Licencia de Piloto de ULM es de:',
    opciones: [
      {
        textoRespuesta: '65 años',
        isCorrect: false
      },
      {
        textoRespuesta: '70 años',
        isCorrect: false
      },
      {
        textoRespuesta: '80 años',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '57. Una T en la zona de señales nos indica',
    opciones: [
      {
        textoRespuesta: 'TOP, parar',
        isCorrect: false
      },
      {
        textoRespuesta: 'TAC, turbulencia en aire claro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Obras en la pista',
        isCorrect: false
      },
      {
        textoRespuesta: 'El sentido del aterrizaje o despegue',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '58. Alas de vuelo libre serán aquellas aeronaves ultraligeras para el vuelo tripulado, cuyo peso no excederá de:',
    opciones: [
      {
        textoRespuesta: '70 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: '100 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: '200 Kg.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No son aeronaves ultraligeras',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '59. El límite inferior de un TMA es siempre el suelo',
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
    titulo: '60. ¿Cuál de los siguientes grupos corresponde a habilitaciones aeronáuticas?:',
    opciones: [
      {
        textoRespuesta: 'Piloto ULM, Instructor de Vuelo, Radiofonista Nacional',
        isCorrect: false
      },
      {
        textoRespuesta: 'MAF, DCG, Radiofonista, Instructor',
        isCorrect: true
      },
      {
        textoRespuesta: 'CDG, AG, Radiofonista, Instructor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Piloto Comercial, Piloto Privado, Piloto de transporte, piloto ULM',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '61. ¿Cuál es la definición correcta de visibilidad en vuelo?',
    opciones: [
      {
        textoRespuesta: 'Visibilidad hacia adelante, medida desde el puesto de pilotaje de una aeronave en vuelo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Visibilidad desde la cabina de los pilotos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Visibilidad horizontal medida desde cualquier dirección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Visibilidad que tiene un observador desde tierra de una aeronave que esta en vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '62. ¿Cuál es la edad mínima con la cual se puede expedir la licencia de ULM?',
    opciones: [
      {
        textoRespuesta: 'No existe edad mínima para expedir la licencia de ULM',
        isCorrect: false
      },
      {
        textoRespuesta: '18 años',
        isCorrect: true
      },
      {
        textoRespuesta: '17 años',
        isCorrect: false
      },
      {
        textoRespuesta: '16 años',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. Las siglas LER significan espacio aéreo restaurado',
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
      '64. Si queremos trazar una ruta entre dos aeródromos, y la ruta directa pasa por esta zona: LER153 FL105/GND ¿qué haremos?',
    opciones: [
      {
        textoRespuesta: 'Trazar la ruta directa manteniendo 1000 pies sobre terreno, ya que los límites son de FL105 hasta infinito',
        isCorrect: false
      },
      {
        textoRespuesta: 'Conseguir permiso del jefe de vuelo para pasar por la zona',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trazar la ruta recta, ya que no nos afecta, pues podemos pasar por encima de FL105',
        isCorrect: false
      },
      {
        textoRespuesta: 'Evitar pasar por esta zona, ya que se trata de una zona restringida',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '65. El real decreto 2876 por el que se regula el registro y uso de aeronaves de estructura ultraligera y se modifica el registro de aeronaves privadas no mercantiles, es de fecha:',
    opciones: [
      {
        textoRespuesta: '15 de octubre de 1.976',
        isCorrect: false
      },
      {
        textoRespuesta: '15 de octubre de 1.982',
        isCorrect: true
      },
      {
        textoRespuesta: '15 de octubre de 1.983',
        isCorrect: false
      },
      {
        textoRespuesta: '15 de octubre de 1.985',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '66. Un ultraligero no excederá nunca los 300 metros sobre el nivel del mar.',
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
    titulo: '67. Para la obtención de la licencia de Piloto de ULM los alumnos se someterán a un examen ante:',
    opciones: [
      {
        textoRespuesta: 'La persona designada del Ministerio de Fomento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un examinador designado por la Agencia Estatal de Seguridad Aérea',
        isCorrect: true
      },
      {
        textoRespuesta: 'El propio Jefe de Vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un comité de las Escuelas de ULM',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '68. Definición de aeródromo controlado:',
    opciones: [
      {
        textoRespuesta: 'Aeródromo en el que se facilita servicio de control de tránsito aéreo para el tránsito del aeródromo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aeródromo en el que se facilita asesoramiento aeronáutico para el tránsito aéreo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeródromo en el que se facilita información aeronáutica para el tránsito aéreo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeródromo que tiene control meteorológico por meteosat',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. ¿Qué significa las siglas VFR?',
    opciones: [
      {
        textoRespuesta: 'Condiciones Meteorológicas Visuales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reglas de Vuelo Visual',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ver Frenar Rodear',
        isCorrect: false
      },
      {
        textoRespuesta: 'Reglas de Vuelo Instrumental',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. La póliza de seguro de un avión biplaza debe cumplir obligatoriamente:',
    opciones: [
      {
        textoRespuesta: 'Solo al piloto, opcionalmente al acompañante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Solo responsabilidad civil a terceros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Acompañantes y responsabilidad civil a terceros',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '71. En una escuela de ultraligeros, ¿quién es el encargado de dar la formación?',
    opciones: [
      {
        textoRespuesta: 'El jefe de Vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Instructor de vuelo a motor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un Instructor de ULM habilitado por AESA',
        isCorrect: true
      },
      {
        textoRespuesta: 'La Escuela deberá contar con un Piloto Comercial para dar la formación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '72. Tiene prioridad para aterrizar',
    opciones: [
      {
        textoRespuesta: 'El planeador al globo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El dirigible al ala delta',
        isCorrect: false
      },
      {
        textoRespuesta: 'El globo al planeador',
        isCorrect: true
      },
      {
        textoRespuesta: 'El ULM al dirigible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. Con un ULM podemos hacer maniobras acrobáticas, siempre que',
    opciones: [
      {
        textoRespuesta: 'A más altura de 900 ft',
        isCorrect: false
      },
      {
        textoRespuesta: 'Están prohibidas',
        isCorrect: true
      },
      {
        textoRespuesta: 'A más altura de 300 m.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si llevamos paracaídas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '74. ¿Es necesario revalidar la habilitación de radiofonista?',
    opciones: [
      {
        textoRespuesta:
          'La habilitación de radiofonista se considera renovada siempre que se renueve una habilitación asociada a la licencia',
        isCorrect: true
      },
      {
        textoRespuesta: 'No',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo hay que renovarla con una prueba de radio si ha caducado la licencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, hay que realizar una prueba cada vez que se quiera renovar la licencia de radiofonista',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. ¿Cuáles son las palabras utilizadas para designar las fases de emergencia?',
    opciones: [
      {
        textoRespuesta: 'Incerfa, alerfa, detresfa',
        isCorrect: true
      },
      {
        textoRespuesta: 'Clave SSR, AFTN, OCL',
        isCorrect: false
      },
      {
        textoRespuesta: 'Precaución, alarma, accidente',
        isCorrect: false
      },
      {
        textoRespuesta: 'No hay ninguna palabra especial',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. Un ULM tipo A, es aquel:',
    opciones: [
      {
        textoRespuesta: 'En el que el control se realiza por desplazamiento del centro de gravedad',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el que el control se realiza por mando aerodinámico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que tiene alas con diedro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguno de los anteriores',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '77. La edad mínima para la obtención de la licencia de piloto de ultraligeros es:',
    opciones: [
      {
        textoRespuesta: '16 años',
        isCorrect: false
      },
      {
        textoRespuesta: '17 años',
        isCorrect: false
      },
      {
        textoRespuesta: '18 años',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '78. Si apruebas este examen, ¿cuánto tiempo tienes para examinarte de la parte práctica de piloto ulm, sin necesidad de repetir el presente examen teórico?',
    opciones: [
      {
        textoRespuesta: '3 años',
        isCorrect: false
      },
      {
        textoRespuesta: '1 año',
        isCorrect: false
      },
      {
        textoRespuesta: '2 años',
        isCorrect: true
      },
      {
        textoRespuesta: '6 meses',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. La edad mínima para poder ser piloto de ULM es:',
    opciones: [
      {
        textoRespuesta: '19 años',
        isCorrect: false
      },
      {
        textoRespuesta: '18 años',
        isCorrect: true
      },
      {
        textoRespuesta: '17 años',
        isCorrect: false
      },
      {
        textoRespuesta: '16 años',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. Que significa ACC',
    opciones: [
      {
        textoRespuesta: 'Corriente alterna',
        isCorrect: false
      },
      {
        textoRespuesta: 'Control de área',
        isCorrect: true
      },
      {
        textoRespuesta: 'Dispositivo anticolisión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '81. ¿Es obligatoria la matrícula de los ULM para poder volar?',
    opciones: [
      {
        textoRespuesta: 'Sólo para los biplazas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo los de construcción amateur',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sólo los de tipo A, los de tipo B están exentos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es obligatoria para todos.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '82. Para volar con ULM es obligatorio llevar:',
    opciones: [
      {
        textoRespuesta: 'Casco, radio y cinturón de seguridad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cinturón de seguridad o arnés',
        isCorrect: true
      },
      {
        textoRespuesta: 'Casco y arnés o cinturón de seguridad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todos son obligatorios',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. Si un TMA es un espacio aéreo de clase C, esto significa:',
    opciones: [
      {
        textoRespuesta: 'Que sólo podrán entrar aeronaves en IFR',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los TMA no pueden ser espacios aéreos de clase C, solo de clase F ó G',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que es un espacio aéreo restringido',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que es un espacio aéreo controlado',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '84. Las habilitaciones de la licencia de piloto de ULM tiene una validez máxima de:',
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
        textoRespuesta: '3 años',
        isCorrect: false
      },
      {
        textoRespuesta: '5 años',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '85. Un espacio aéreo de dimensiones definidas cuya activación requiere una reserva de espacio aéreo para uso exclusivo de usuarios específicos durante un período de tiempo determinado.',
    opciones: [
      {
        textoRespuesta: 'Es una zona de control ó CTR',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es una área de control de tránsito aéreo (TMA)',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es un área temporalmente segregada (TSA)',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es una zona de fauna sensible',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '86. Cuando dos aeronaves converjan a un nivel igual, la que venga por la derecha (exceptuando las situaciones especiales previstas):',
    opciones: [
      {
        textoRespuesta: 'Tiene derecho de paso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Deberá ceder el paso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deberá ascender',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deberá descender',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. Un ultraligero no excederá nunca los 300 metros sobre el nivel del mar.',
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
      '88. La información aeronáutica, relativa a todo el territorio, se encuentra recogida en un documento, disponible en todos los aeropuertos, que se conoce como:',
    opciones: [
      {
        textoRespuesta: 'NOTAM',
        isCorrect: false
      },
      {
        textoRespuesta: 'AIREP',
        isCorrect: false
      },
      {
        textoRespuesta: 'AIP',
        isCorrect: true
      },
      {
        textoRespuesta: 'TAFOR',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '89. Tenemos un avión ULM biplaza con las siguientes características técnicas: peso en vacio 215 Kg, carga util de 285 Kg. el instructor pesa unos 140 Kg y el amigo que le acompaña otros 125 Kg y se disponen para un vuelo de tres horas y media de larga distancia, teniendo en cuenta que el consumo del motor es de 14 Litros/hora, ¿es legal realizar dicho vuelo?',
    opciones: [
      {
        textoRespuesta: 'Sí, si logra despegar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí',
        isCorrect: false
      },
      {
        textoRespuesta: 'No',
        isCorrect: true
      },
      {
        textoRespuesta: 'd)\tNo porque el avión no despegaria',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. ¿Cuál es la edad mínima para realizar el examen práctico de ULM?',
    opciones: [
      {
        textoRespuesta: '16 años',
        isCorrect: false
      },
      {
        textoRespuesta: 'No existe edad mínima para examinarse de práctica',
        isCorrect: false
      },
      {
        textoRespuesta: '18 años',
        isCorrect: false
      },
      {
        textoRespuesta: '17 años',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '91. Los límites de tiempo dentro de los cuales el poseedor de una licencia puede ejercer las funciones específicas de la misma, los determinan:',
    opciones: [
      {
        textoRespuesta: 'La calificación de tipo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La calificación de condiciones de vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La licencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las habilitaciones',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '92. ¿Puede un ULM volar sobre aglomeraciones de personas o zonas urbanas?',
    opciones: [
      {
        textoRespuesta: 'Sí',
        isCorrect: false
      },
      {
        textoRespuesta: 'No',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sí, por encima de 300 metros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, manteniendo altura de seguridad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. Se define como aeródromo controlado:',
    opciones: [
      {
        textoRespuesta: 'Al aeródromo en zona de control',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al aeródromo en el que se facilita el servicio de control de tránsito aéreo',
        isCorrect: true
      },
      {
        textoRespuesta: 'El B pero que además se sitúa en una zona de control',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguno de ellos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. En los límites verticales de una zona LER, vemos 1000 ft AGL. Esto significa',
    opciones: [
      {
        textoRespuesta: '1000 pies de altitud',
        isCorrect: false
      },
      {
        textoRespuesta: '1000 pies de altura',
        isCorrect: true
      },
      {
        textoRespuesta: '1000 metros de altura',
        isCorrect: false
      },
      {
        textoRespuesta: '1000 metros de altitud',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '95. Los NOTAM (Notice to Air Men) se crean, entre otras cosas, para alertar a los aviadores de cualquier clase de peligros en una ruta o en algún lugar en especial',
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
    titulo: '96. La licencia de piloto de ULM será expedida por:',
    opciones: [
      {
        textoRespuesta: 'Las escuelas autorizadas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La Agencia Estatal de Seguridad Aérea',
        isCorrect: true
      },
      {
        textoRespuesta: 'Las escuelas que dispongan de un programa de estudios homologados',
        isCorrect: false
      },
      {
        textoRespuesta: 'El instructor de cada alumno',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. La altura máxima de vuelo sobre el terreno o agua será de:',
    opciones: [
      {
        textoRespuesta: '3000 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '30 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '900 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '300 m.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '98. En que partes se divide el AIP',
    opciones: [
      {
        textoRespuesta: 'Tomo 1 y 2',
        isCorrect: false
      },
      {
        textoRespuesta: 'GEN, COM, AD, MET',
        isCorrect: false
      },
      {
        textoRespuesta: 'NOTAM 1, NOTAM 2',
        isCorrect: false
      },
      {
        textoRespuesta: 'GEN, ENR, AD',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '99. Una bengala o luz pirotécnica de color rojo en el aeródromo significa:',
    opciones: [
      {
        textoRespuesta: 'Aeródromo en fiestas',
        isCorrect: false
      },
      {
        textoRespuesta: 'No aterrice a pesar de las instrucciones recibidas anteriormente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuerpo de bomberos alertado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paso abierto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. Agencia Estatal de Seguridad Aérea tiene la potestad de realizar inspecciones a los aeródromos en base a:',
    opciones: [
      {
        textoRespuesta: 'Las normas técnicas de seguridad operacional de aeródromos de uso restringido',
        isCorrect: true
      },
      {
        textoRespuesta: 'La normativa de ULM',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
