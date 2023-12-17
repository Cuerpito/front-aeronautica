const preguntas = [
  {
    titulo: '1. ¿Cuál es la definición de ‘peso en vacío’?',
    opciones: [
      {
        textoRespuesta:
          'El peso de la aeronave totalmente terminada aunque sin todo su equipo, sin el combustible utilizable, pero incluyendo el combustible no consumible y la máxima cantidad de aceite lubricante y de líquido refrigerante del motor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El peso de la aeronave totalmente terminada pero sin todo su equipo, sin incluir el combustible utilizable ni la máxima cantidad de aceite lubricante y de líquido refrigerante del motor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El peso de la aeronave totalmente terminada y con todo su equipo, sin incluir el combustible utilizable ni el no consumible, y tampoco la máxima cantidad de aceite lubricante y de líquido refrigerante del motor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El peso de la aeronave totalmente terminada y con todo su equipo, sin el combustible utilizable, pero incluyendo el combustible no consumible y la máxima cantidad de aceite lubricante y de líquido refrigerante del motor.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '2. El alumno piloto no realizará solo un vuelo transfronterizo:',
    opciones: [
      {
        textoRespuesta: 'A menos que, con motivo de su instrucción, lo haga bajo la supervisión de un instructor de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'A menos que, con motivo de su instrucción, lo haga bajo la supervisión del examinador el día que realice el examen práctico.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En ningún caso.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'A menos que ya haya realizado su primer vuelo solo en territorio español y lo haga bajo la supervisión de su instructor de vuelo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3. En cuanto al examen teórico que hay que superar:',
    opciones: [
      {
        textoRespuesta: 'Será de desarrollo y tendrá un periodo de validez de 12 meses una vez superado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será tipo test y tendrá un periodo de validez de 12 meses una vez superado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será tipo test y tendrá un periodo de validez de 24 meses una vez superado.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Será tipo test y tendrá un periodo de validez indefinido una vez superado.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '4. El comandante de la aeronave es el que tiene la condición de autoridad en el ejercicio de su mando y además es el responsable de:',
    opciones: [
      {
        textoRespuesta: 'La aeronave y su tripulación, los viajeros y la carga, siempre que asuma su pilotaje material.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La aeronave y su tripulación, los viajeros y la carga, aunque no asuma el pilotaje material.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La aeronave y su tripulación, los viajeros y equipajes, de la carga y del correo, siempre que asuma su pilotaje material.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La aeronave y su tripulación, los viajeros y equipajes, de la carga y del correo, aunque no asuma el pilotaje material.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '5. Una zona calificada como Peligrosa es:',
    opciones: [
      {
        textoRespuesta:
          'Un espacio aéreo de dimensiones definidas, dentro del cual está restringido el vuelo de las aeronaves, y se identifica con la letra “P”.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un espacio aéreo de dimensiones definidas, en el cual pueden desplegarse en determinados momentos actividades peligrosas para el vuelo de las aeronaves, y se identifica con la letra “P”.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un espacio aéreo de dimensiones definidas, en el cual pueden desplegarse en determinados momentos actividades peligrosas para el vuelo de las aeronaves, y se identifica con la letra “D”.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un espacio aéreo de dimensiones definidas, dentro del cual está restringido el vuelo de las aeronaves, y se identifica con la letra “D”.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '6. La distancia vertical entre un punto o nivel en la superficie de la tierra, o unido a ella, y el nivel medio del mar (MSL) es:',
    opciones: [
      {
        textoRespuesta: 'Altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Elevación.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Altitud crítica.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '7. Según el Artículo 2. del Real Decreto 123/2015, ¿cuál es la definición correcta de Desplazamiento del Centro de Gravedad (DCG)?',
    opciones: [
      {
        textoRespuesta:
          'Consideración particular de los ultraligeros que no supeditan su mando aerodinámico al desplazamiento del centro de gravedad del conjunto de la aeronave y ocupantes.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Consideración general de los ultraligeros que supeditan su mando aerodinámico al desplazamiento del centro de gravedad del conjunto de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Consideración particular de los ultraligeros con imposibilidad de supeditar su mando aerodinámico al desplazamiento del centro de gravedad del conjunto de la aeronave y ocupantes.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Consideración particular de los ultraligeros que supeditan su mando aerodinámico al desplazamiento del centro de gravedad del conjunto de la aeronave y ocupantes.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '8. Para la obtención de las certificaciones, aprobaciones, licencias, habilitaciones, convalidaciones y otras autorizaciones, el interesado deberá remitir un escrito de solicitud a AESA. En aquellos procedimientos en los que el interesado deba superar una prueba de vuelo o una evaluación de competencia, la solicitud:',
    opciones: [
      {
        textoRespuesta:
          'Deberá presentarse en el plazo máximo de tres meses desde la superación de la prueba y el plazo para resolver será de dos meses desde la fecha de la solicitud.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Deberá presentarse en el plazo máximo de un mes desde la superación de la prueba y el plazo para resolver será de tres meses desde la fecha de la solicitud.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Deberá presentarse en el plazo máximo de dos meses desde la superación de la prueba y el plazo para resolver será de tres meses desde la fecha de solicitud.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Deberá presentarse en el plazo mínimo de dos meses desde la superación de la prueba y el plazo para resolver será de tres meses desde la fecha de la solicitud.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '9. Indique cuál de las siguientes afirmaciones en cuanto al equipo mínimo que debe llevar una aeronave definida como ULM es correcta:',
    opciones: [
      {
        textoRespuesta:
          'El anemómetro, altímetro, tacómetro, brújula, contador horario, cinturón de seguridad, indicador de cantidad de combustible y un paracaídas son obligatorios.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El anemómetro, altímetro, tacómetro, brújula, contador horario, cinturón de seguridad e indicador de cantidad de combustible son obligatorios. El paracaídas es un elemento recomendable.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El anemómetro, altímetro, tacómetro, contador horario, cinturón de seguridad e indicador de cantidad de combustible son obligatorios. La brújula y el paracaídas son elementos recomendables.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El anemómetro, altímetro, variómetro, tacómetro, contador horario, cinturón de seguridad e indicador de cantidad de combustible son obligatorios. La brújula y el paracaídas son elementos recomendables.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '10. ¿Cuál de las siguientes es la definición de techo de nubes?',
    opciones: [
      {
        textoRespuesta:
          'Altura a la que, sobre la tierra o el agua, se encuentra la base de la capa inferior de nubes, por debajo de 20.000 pies.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Altura a la que, sobre la tierra o el agua, se encuentra la base de la capa inferior de nubes, por debajo de 6.000 pies.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Altura a la que, sobre la tierra, se encuentra la base de la capa inferior de nubes, por debajo de 20.000 pies.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Altura a la que, sobre la tierra o el agua, se encuentra la base de la capa inferior de nubes, por debajo de 20.000 metros.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. ¿Cuál de las siguientes es la definición de Aeronavegabilidad?',
    opciones: [
      {
        textoRespuesta:
          'La capacidad del piloto para cumplir con seguridad las condiciones de utilización previstas para una aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La capacidad de una aeronave para cumplir con seguridad las condiciones de utilización previstas.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La capacidad de una aeronave para cumplir con seguridad las situaciones extremas de utilización.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La capacidad de una aeronave para cumplir con seguridad las condiciones de utilización que no han sido previstas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '12. Las condiciones de visibilidad y distancia a las nubes para que se pueda realizar un vuelo VFR por debajo de 300 metros serán: Mirar',
    opciones: [
      {
        textoRespuesta: 'Iguales o superiores a una visibilidad de 10 km y una distancia vertical de 150 metros.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Iguales o superiores a una visibilidad de 5 km y una distancia vertical de 150 metros.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Iguales o inferiores a una visibilidad de 5 km y una distancia vertical de 150 metros.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Iguales o inferiores a una visibilidad de 10 km y una distancia vertical de 150 metros.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. Para renovar las habilitaciones MAF, DCG, AG, H y HD:',
    opciones: [
      {
        textoRespuesta:
          'El interesado deberá acreditar, en su registro de tiempo de vuelo o mediante certificado emitido por una escuela de vuelo de ultraligero, cinco horas de vuelo en los doce meses anteriores a la solicitud.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El interesado deberá acreditar, en su registro de tiempo de vuelo o mediante certificado emitido por una escuela de vuelo de ultraligero, cinco horas de vuelo en los doce meses anteriores a la solicitud y realizar una prueba ante un examinador.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El interesado deberá acreditar, en su registro de tiempo de vuelo o mediante certificado emitido por una escuela de vuelo de ultraligero, tres horas de vuelo en los doce meses anteriores a la solicitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El interesado deberá realizar una prueba de vuelo ante un examinador.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '14. ¿Cuáles de los siguientes forman parte de los requisitos que debe cumplir el piloto para obtener el certificado de examinador?',
    opciones: [
      {
        textoRespuesta:
          'Disponer de la habilitación de instructor correspondiente al tipo de ultraligero del que va a examinar y acreditar 500 horas de vuelo como piloto al mando y 150 como instructor.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Disponer de la habilitación de instructor correspondiente al tipo de ultraligero del que va a examinar y acreditar 500 horas de vuelo como instructor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Disponer de la habilitación de instructor correspondiente al tipo de ultraligero del que va a examinar y acreditar 500 horas de vuelo como piloto al mando y 200 como instructor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Disponer de la habilitación de instructor correspondiente al tipo de ultraligero del que va a examinar y acreditar 150 horas de vuelo como piloto al mando.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. El comandante de la aeronave:',
    opciones: [
      {
        textoRespuesta:
          'Será responsable de que todas las maniobras se efectúen de acuerdo con el RCA y, salvo las excepciones autorizadas expresamente por AESA, deberá seguir el reglamento en todo momento.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Será responsable de que todas las maniobras se efectúen de acuerdo con el RCA y no podrá dejar de seguir el reglamento bajo ninguna circunstancia.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Será responsable de que todas las maniobras se efectúen de acuerdo con el RCA. Podrá dejar de seguir el reglamento cuando sea absolutamente necesario por razones de seguridad.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Será responsable de que todas las maniobras se efectúen de acuerdo con el RD 123/2015. Podrá dejar de seguirlo cuando sea absolutamente necesario por razones de seguridad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16. La acreditación como examinador experimentado habilita para realizar, además de las pruebas de vuelo:',
    opciones: [
      {
        textoRespuesta: 'La evaluación de competencia para obtener la autorización de jefe de vuelos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La evaluación de competencia para obtener la autorización de examinador experimentado y también la habilitación de instructor de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La evaluación de competencia para obtener la autorización de piloto al mando de la aeronave y también la habilitación de instructor de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La evaluación de competencia para obtener la autorización de examinador y también la habilitación de instructor de ultraligero.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '17. ¿Cuándo se considera que una aeronave se encuentra en las inmediaciones de un aeródromo?',
    opciones: [
      {
        textoRespuesta: 'Una vez que se encuentra incorporada dentro de un circuito de tránsito de aeródromo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando se encuentra dentro del área de CTR del aeródromo en cuestión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando se encuentra dentro de un circuito de tránsito de aeródromo, o bien entrando o saliendo del mismo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando se encuentra dentro de un radio de 8 km alrededor del aeródromo en cuestión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. Indique la correcta. La licencia de piloto de ultraligero:',
    opciones: [
      {
        textoRespuesta:
          'Siempre que vaya acompañada de una autorización expresa de AESA, faculta a su poseedor para actuar como piloto al mando de cualquier ultraligero para el que esté debidamente habilitado.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Siempre que vaya acompañada del certificado médico en vigor, faculta a su poseedor para actuar como piloto al mando de cualquier ultraligero para el que esté debidamente habilitado.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Aunque vaya acompañada del certificado médico en vigor, no faculta a su poseedor para actuar como piloto al mando de cualquier ultraligero para el que esté debidamente habilitado.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Siempre que vaya acompañada del certificado médico en vigor, faculta a su poseedor para actuar como piloto al mando de cualquier ultraligero, aunque no esté previamente habilitado para ello.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. En el área de señales de un aeródromo, una señal blanca y horizontal en forma de pesas quiere decir:',
    opciones: [
      {
        textoRespuesta: 'Que las aeronaves deben aterrizar, despegar y rodar únicamente en las calles de rodaje.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Que las aeronaves deben aterrizar y despegar únicamente en las pistas, pero que las demás maniobras no necesitan limitarse a las pistas ni a las calles de rodaje.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que las aeronaves deben aterrizar, despegar y rodar únicamente en las pistas principales.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que las aeronaves deben aterrizar, despegar y rodar únicamente en las pistas y en las calles de rodaje.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '20. El examen práctico que debe superar el alumno para obtener la licencia de piloto de ultraligero:',
    opciones: [
      {
        textoRespuesta: 'Será supervisado por un examinador a bordo de la aeronave, designado por el jefe de vuelos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Será supervisado por un examinador a bordo de la aeronave, designado por la Agencia Estatal de Seguridad Aérea.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Será supervisado por el instructor habitual del alumno piloto a bordo de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será supervisado desde tierra por un examinador designado por la Agencia Estatal de Seguridad Aérea.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '21. De las siguientes definiciones, indique cuál es la que corresponde a ‘Altura’:',
    opciones: [
      {
        textoRespuesta:
          'Distancia vertical entre un nivel, punto u objeto considerado como punto y un punto o nivel en la superficie.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Distancia vertical entre un nivel, punto u objeto considerado como punto y el nivel medio del mar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Distancia vertical entre un punto o nivel en la superficie de la tierra, o unido a ella, y el nivel medio del mar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Distancia vertical u horizontal entre un nivel, punto u objeto considerado como punto y un punto o nivel en la superficie.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '22. Las infraestructuras en las que pretendan operar ultraligeros deberán disponer de un jefe de vuelos que cumpla los siguientes requisitos:',
    opciones: [
      {
        textoRespuesta:
          'Acreditar doscientas horas de vuelo, así como ser titular de una licencia de piloto de ultraligero en vigor, con experiencia acreditada antela Dirección General de Aviación Civil.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Acreditar cien horas de vuelo, así como ser titular de una licencia de piloto de ultraligero en vigor, con experiencia acreditada ante la Agencia Estatal de Seguridad Aérea.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Acreditar cien horas de vuelo, así como ser titular de una licencia de piloto de ultraligero en vigor, con experiencia acreditada ante la Dirección General de Aviación Civil.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Acreditar doscientas horas de vuelo, así como ser titular de una licencia de piloto de ultraligero en vigor, con experiencia acreditada ante la Agencia Estatal de Seguridad Aérea.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. Según el Artículo 3. del Real Decreto 123/2015, corresponde a la Agencia Estatal de Seguridad Aérea:',
    opciones: [
      {
        textoRespuesta:
          'Expedir las licencias de los pilotos de ultraligero, así como anotar en las mismas la obtención, reválida y renovación de las habilitaciones.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Expedir las habilitaciones de los pilotos de ultraligeros, así como anotar en las mismas la obtención, reválida y renovación de las licencias.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Expedir los títulos y habilitaciones requeridos para el vuelo en ultraligero otorgados por Estados miembros del Convenio de Aviación Civil Internacional.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Convalidar exclusivamente las licencias de pilotos de ultraligero otorgadas por Estamos miembros del Convenio de Aviación Civil Internacional, así como anotar en las mismas la obtención, reválida y renovación de las habilitaciones conseguidas posteriormente.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '24. Alguien que haya obtenido la licencia de piloto de ultraligero, con una habilitación en vigor, y quiera obtener una habilitación distinta, deberá haber realizado, al menos:',
    opciones: [
      {
        textoRespuesta:
          'La instrucción teórica y práctica correspondiente, cinco horas de vuelo y una prueba de vuelo ante un examinador.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cinco horas de vuelo y una prueba de vuelo ante un examinador.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La instrucción teórica y práctica correspondiente, tres horas de vuelo y una prueba de vuelo ante un examinador.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una prueba de vuelo ante un examinador.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. La persona responsable de que todas las maniobras se efectúen de acuerdo al Reglamento de Circulación Aérea es:',
    opciones: [
      {
        textoRespuesta: 'El comandante de la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El piloto que esté realizando la maniobra en cada momento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El jefe de vuelos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El piloto, que comparte la responsabilidad con el copiloto, si lo hubiera.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '26. Indique la correcta. El alumno piloto:',
    opciones: [
      {
        textoRespuesta: 'En ningún caso puede volar solo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No volará sin la supervisión de su instructor a menos que ya haya realizado su primer vuelo solo y tenga expresa autorización de éste.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No volará solo a menos que, con motivo de su instrucción, lo haga bajo la supervisión del examinador el día que realice el examen práctico.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No volará solo a menos que, con motivo de su instrucción, lo haga bajo supervisión de un instructor de vuelo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '27. Para la obtención de la licencia de piloto de ultraligero será necesario completar la instrucción teórica y práctica requerida. En este sentido, la instrucción práctica comprenderá la realización de:',
    opciones: [
      {
        textoRespuesta:
          'Un mínimo de 10 horas de vuelo, 15 en caso de DCG, que incluirán 3 horas de vuelo solo, no menos de 20 despegues y 20 aterrizajes, y un vuelo de travesía de al menos 60 minutos durante el que se hará una parada en un campo diferente al de partida',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un mínimo de 15 horas de vuelo, 10 en caso de DCG, que incluirán 3 horas de vuelo solo, no menos de 20 despegues y 20 aterrizajes, y un vuelo de travesía de al menos 60 minutos durante el que se hará una parada en un campo diferente al de partida.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Un mínimo de 15 horas de vuelo, 10 en caso de DCG, que incluirán 5 horas de vuelo solo, no menos de 20 despegues y 20 aterrizajes, y un vuelo de travesía de al menos 50 minutos durante el que se hará una parada en un campo diferente al de partida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un mínimo de 15 horas de vuelo, 10 en caso de DCG, que incluirán 3 horas de vuelo solo, no menos de 10 despegues y 10 aterrizajes, y un vuelo de travesía de al menos 45 minutos durante el que se hará una parada en un campo diferente al de partida.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. Definimos elevación del aeródromo como:',
    opciones: [
      {
        textoRespuesta: 'La elevación media del área de aterrizaje.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La elevación del punto más bajo del área de aterrizaje.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La elevación del punto más alto del área de aterrizaje.',
        isCorrect: true
      },
      {
        textoRespuesta: 'La elevación del punto en el que se encuentra la torre de control del aeródromo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '29. Según la Orden de 14 de noviembre de 1988, la relación entre la distancia horizontal recorrida en línea recta y la altura perdida en el mismo tiempo es:',
    opciones: [
      {
        textoRespuesta: 'La velocidad de descenso.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El coeficiente de planeo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El cociente de planeo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La trayectoria de planeo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '30. Los pilotos con licencia de piloto privado (PPL), piloto comercial de avión (CPL) y piloto de transporte de línea aérea (ATPL) que soliciten la convalidación para obtener la licencia de ultraligero deberán acreditar que:',
    opciones: [
      {
        textoRespuesta:
          'Poseen la licencia de piloto y el certificado médico en vigor y haber realizado, al menos, cinco horas de instrucción práctica, de las cuales una de vuelo solo, o alternativamente, haber superado una prueba de vuelo ante un examinador.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Poseen la licencia de piloto y el certificado médico en vigor y haber realizado, al menos, tres horas de instrucción práctica, de las cuales una de vuelo solo, o alternativamente, haber superado una prueba de vuelo ante un examinador.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Poseen la licencia de piloto y el certificado médico en vigor y haber realizado, al menos, tres horas de instrucción de vuelo que serán de vuelo solo, o alternativamente, haber superado una prueba de vuelo ante un examinador.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Poseen la licencia de piloto y la habilitación de radiofonista en vigor y haber realizado, al menos, tres horas de instrucción práctica, de las cuales una de vuelo solo, o alternativamente, haber superado una prueba de vuelo ante un examinador.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '31. ¿Quién determina los contenidos básicos de cada una de las materias que integran el programa de enseñanza de instrucción teórica de ultraligero?',
    opciones: [
      {
        textoRespuesta: 'La Agencia Estatal de Seguridad Aérea (AESA).',
        isCorrect: true
      },
      {
        textoRespuesta: 'La Organización de Aviación Civil Internacional (OACI).',
        isCorrect: false
      },
      {
        textoRespuesta: 'El Estado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La Unión Europea.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. ¿Es posible convalidar una licencia de piloto de ultraligero expedida fuera de España?',
    opciones: [
      {
        textoRespuesta:
          'Sí, siempre que su licencia esté en vigor, disponga del certificado médico y realice una prueba de vuelo ante un examinador.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Sí, siempre que su licencia esté en vigor, disponga de certificado médico y pueda acreditar 20 horas de vuelo en los últimos 12 meses en el tipo de ultraligero del que quiera obtener la habilitación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, siempre que sea una licencia expedida por uno de los estados miembro de la Unión Europea.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Sí, siempre que su licencia esté en vigor y pueda acreditar, al menos, 40 horas de vuelo en el tipo de ultraligero del que quiera obtener la habilitación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. Con carácter previo al inicio de su actividad, las escuelas de ultraligero:',
    opciones: [
      {
        textoRespuesta: 'Deberán haber sido autorizadas por el Gobierno, previa acreditación de los requisitos exigibles.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Deberán haber sido autorizadas por la Agencia Estatal de Seguridad Aérea y posteriormente acreditar los requisitos exigibles.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Deberán haber sido autorizadas por la Agencia Estatal de Seguridad Aérea, previa acreditación de los requisitos exigibles.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Deberán haber sido autorizadas por la Organización de Aviación Civil Internacional, previa acreditación de los requisitos exigibles.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. Además de entre quienes hayan obtenido el certificado de examinador, AESA podrá designar examinadores:',
    opciones: [
      {
        textoRespuesta: 'Entre quienes desarrollen tareas de inspección aeronáutica al servicio de AESA.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Entre quienes desarrollen tareas de inspección aeronáutica al servicio de OACI.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre quienes presten servicios aeronáuticos a AESA.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre instructores de vuelo que acrediten, al menos, 200 horas de vuelo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '35. Cuando los elementos sustentadores o de control de los ULM se construyan con materiales no rígidos, deben llevar líneas de parada de rasgaduras. ¿Cuántas llevarán?',
    opciones: [
      {
        textoRespuesta:
          'El número de líneas de parada será tal que en cada semiplano o elemento de control existan como mínimo dos zonas independizadas a efectos de rasgaduras.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El número de líneas de parada será tal que en cada semiplano o elemento de control existan como mínimo tres zonas independizadas a efectos de rasgaduras.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El número de líneas de parada será tal que en cada semiplano o elemento de control existan como mínimo cinco zonas independizadas a efectos de rasgaduras.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El número de líneas de parada será tal que en cada semiplano o elemento de control existan como mínimo tres zonas independizadas a efectos de rasgaduras en ultraligeros con envergaduras menores y de cuatro zonas independizadas en ultraligeros con envergaduras mayores.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. La distancia vertical entre un nivel, punto u objeto considerado como punto y el nivel medio del mar (MSL) es:',
    opciones: [
      {
        textoRespuesta: 'Altitud.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Altura.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Elevación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud crítica.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '37. Un piloto con la habilitación de Instructor (FI) en Multiejes de Ala Fija (MAF), ¿qué requisitos debe cumplir para obtener la habilitación de Instructor de Helicópteros (H)?',
    opciones: [
      {
        textoRespuesta:
          'Ninguna, pues la habilitación de Instructor acredita para impartir instrucción teórica y práctica en todos los tipos de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Poseer la habilitación de Helicópteros y acreditar en su registro de tiempo de vuelo o mediante certificado emitido por una escuela, un mínimo de 200 horas de vuelo en este tipo de ultraligero.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Poseer la habilitación de Helicópteros y acreditar en su registro de tiempo de vuelo o mediante certificado emitido por una escuela, un mínimo de 150 horas de vuelo en este tipo de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Poseer la habilitación de Helicópteros y acreditar en su registro de tiempo de vuelo o mediante certificado emitido por una escuela, un mínimo de 100 horas de vuelo en este tipo de ultraligero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. En cuanto a la conservación de la aeronavegabilidad, según la Orden de 14 de noviembre de 1988:',
    opciones: [
      {
        textoRespuesta:
          'El propietario será plenamente responsable del mantenimiento y conservación de la aeronavegabilidad de su aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El piloto será plenamente responsable del mantenimiento y conservación de la aeronavegabilidad de la aeronave que vaya a utilizar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El jefe de vuelo será plenamente responsable del mantenimiento y conservación de la aeronavegabilidad de las aeronaves.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El designado como comandante de la aeronave será plenamente responsable del mantenimiento y conservación de la aeronavegabilidad de la misma.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '39. Para realizar el examen práctico, además de tener, al menos, diecisiete años de edad en la fecha en que se realice, el alumno piloto:',
    opciones: [
      {
        textoRespuesta: 'Deberá haber completado la instrucción práctica y tener en vigor el certificado médico.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Deberá haber completado la instrucción práctica y encontrarse dentro de los doce meses siguientes a la fecha de superación del examen teórico, además de tener el certificado médico en vigor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Deberá haber completado la instrucción práctica y encontrarse dentro de los veinticuatro meses siguientes a la fecha de superación del examen teórico, además de tener el certificado médico en vigor.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Deberá haber completado la instrucción práctica y encontrarse dentro de los veinticuatro meses siguientes a la fecha de superación del examen teórico.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. ¿Cuál de las siguientes es la definición correcta de ‘Elevación’?',
    opciones: [
      {
        textoRespuesta: 'Distancia vertical entre un nivel, punto u objeto considerado como punto y el nivel medio del mar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Distancia vertical entre un punto o nivel en la superficie de la tierra, o unido a ella, y el nivel medio del mar.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Distancia horizontal o vertical entre un punto o nivel en la superficie de la tierra, o unido a ella, y el nivel medio del mar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Distancia vertical entre un nivel, punto u objeto considerado como punto y un punto o nivel en la superficie.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. ¿En qué casos puede llevar acompañantes el alumno piloto?',
    opciones: [
      {
        textoRespuesta: 'Cuando, con motivo de su instrucción, lo haga bajo la supervisión de su instructor de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En ningún caso.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cuando, con motivo de su instrucción, lo haga con la expresa autorización de su instructor de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando, con motivo de su instrucción, lo haga bajo la supervisión del examinador.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. Las escuelas de ultraligeros deberán disponer, al menos, de los siguientes medios:',
    opciones: [
      {
        textoRespuesta:
          'Un titular de licencia de piloto con habilitación de instructor, un ULM de doble mando, un jefe de vuelos, un sistema de comunicaciones por radio o sistema de señales y un extintor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un titular de licencia de piloto con habilitación de instructor, un ULM de doble mando, un jefe de vuelos, un sistema de comunicaciones por radio o sistema de señales, un botiquín y un extintor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un titular de licencia de piloto con habilitación de instructor, un ULM de doble mando, un sistema de comunicaciones por radio o sistema de señales y un botiquín.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Un titular de licencia de piloto con habilitación de instructor, un ULM de doble mando, un jefe de vuelos, un sistema de comunicaciones por radio o sistema de señales y un botiquín.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '43. ¿Qué son las líneas de parada que deben llevar los elementos sustentadores de algunos ULM?',
    opciones: [
      {
        textoRespuesta:
          'Son refuerzos, costuras o cualquier otro dispositivo tal que, situado paralelamente a la cuerda del ala o elemento en cuestión y en toda la longitud de la cuerda, impedirá la progresión de las rasgaduras que se originen entre cada dos de estas líneas de parada.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Son refuerzos, costuras o cualquier otro dispositivo tal que, situado perpendicularmente a la cuerda del ala o elemento en cuestión y en toda la longitud de la cuerda, impedirá la progresión de las rasgaduras que se originen entre cada dos de estas líneas de parada.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Son refuerzos, costuras o cualquier otro dispositivo tal que, situado paralelamente a la cuerda del ala o elemento en cuestión y en una parte de la longitud de la cuerda, impedirá la progresión de las rasgaduras que se originen entre cada dos de estas líneas de parada.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Son refuerzos, costuras o cualquier otro dispositivo tal que, situado paralelamente al eje longitudinal y en toda la longitud del fuselaje, impedirá la progresión de las rasgaduras que se originen entre cada dos de estas líneas de parada.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. El registro de tiempo de vuelo:',
    opciones: [
      {
        textoRespuesta:
          'Deberá llevarlo y mantenerlo actualizado el titular de la licencia de piloto de ultraligero conforme al modelo publicado por AESA.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Deberá llevarlo y mantenerlo actualizado el propietario de una aeronave conforme al modelo publicado por AESA.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Deberá llevarlo y mantenerlo actualizado el titular de la licencia de piloto de ultraligero conforme al modelo publicado por el aeródromo en el que opere.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Deberá llevarlo y mantenerlo actualizado el instructor de vuelo de ultraligero conforme al modelo publicado por AESA.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '45. Según las definiciones del Artículo 2. del Real Decreto 123/2015, el vuelo solo es:',
    opciones: [
      {
        textoRespuesta:
          'Aquel en el que el alumno piloto es el único ocupante del ultraligero y en el que desarrolla los ejercicios bajo la supervisión del examinador.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aquel en el que el alumno piloto es el único ocupante del ultraligero y en el que desarrolla los ejercicios bajo la supervisión del instructor.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Aquel en el que el alumno piloto es el único ocupante del ultraligero y en el que desarrolla los ejercicios bajo la supervisión del jefe de vuelos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Aquel en el que el alumno piloto realiza los ejercicios él solo, acompañado del instructor y bajo la supervisión de éste.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. Indique cuál de las siguientes es la definición del término “Visibilidad”:',
    opciones: [
      {
        textoRespuesta:
          'Distancia en un aeródromo, determinada por las condiciones atmosféricas y expresada en unidades de longitud, a la que pueden verse e identificarse objetos y que está indicada por un observador competente.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Distancia, determinada por las condiciones atmosféricas y expresada en unidades de longitud, a la que pueden verse e identificarse objetos, medida desde el punto de pilotaje de una aeronave en vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Distancia, determinada por las condiciones del observador competente y expresada en unidades de longitud, a la que pueden verse e identificarse objetos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Distancia, determinada por las condiciones atmosféricas y expresada en unidades de longitud, a que pueden verse e identificarse objetos.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '47. Para renovar la habilitación de Instructor de ultraligero (FI) el interesado deberá:',
    opciones: [
      {
        textoRespuesta:
          'Asistir al seminario de actualización para instructores, acreditar que ha impartido, al menos, tres horas de clases teóricas, cinco horas de vuelo como instructor y superar una evaluación de competencia.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Asistir al seminario de actualización para instructores, acreditar que ha impartido, al menos, cinco horas de clases teóricas, tres horas de vuelo como instructor y superar una evaluación de competencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Superar de nuevo las  pruebas teóricas y prácticas del curso de instructor de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Asistir al seminario de actualización para instructores y superar las pruebas teóricas y prácticas del curso de instructor de ultraligero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. Cuando dos o más aeronaves se aproximen a un aeródromo para aterrizar:',
    opciones: [
      {
        textoRespuesta:
          'La que esté a menor nivel cederá el paso a las que estén más bajas, pero éstas últimas no deberán cruzar por delante de otra que esté en las fases finales de una aproximación, para aterrizar ni para alcanzarla.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La que esté a mayor nivel cederá el paso a las que estén más bajas, incluso cuando éstas últimas tengan que cruzar por delante de otra que esté en las fases finales de una aproximación, para aterrizar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La que esté a mayor nivel cederá el paso a las que estén más bajas, pero éstas últimas no deberán cruzar por delante de otra que esté en las fases finales de una aproximación, para aterrizar ni para alcanzarla.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La que esté a menor nivel cederá el paso a las que estén más bajas, incluso cuando éstas últimas tengan que cruzar por delante de otra que esté en las fases finales de una aproximación, para aterrizar.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. La renovación o revalidación de la habilitación de radiofonista (RTC):',
    opciones: [
      {
        textoRespuesta:
          'Será automática cuando sea revalidada o renovada cualquiera de las habilitaciones de MAF, DCG, AG, H o HD asociadas a la licencia.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Será automática cuando sea revalidada o renovada cualquiera de las habilitaciones de MAF, DCG, AG, H, HD o FI asociadas a la licencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Será automática cuando sea renovado el certificado médico del piloto.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se llevará a cabo cada dos años, con una prueba de comunicaciones realizada durante un vuelo.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. Para obtener la acreditación de radiofonista (RTC) el interesado deberá acreditar:',
    opciones: [
      {
        textoRespuesta:
          'Poseer la licencia de piloto de ultraligero con al menos una habilitación en vigor y haber superado el curso de radiofonista de ultraligero, que no incluirá examen teórico o práctico.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Poseer la habilitación de piloto de ultraligero con al menos una licencia en vigor y haber superado el curso de radiofonista de ultraligero, que incluirá un examen teórico y práctico.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Poseer la licencia de piloto de ultraligero con al menos una habilitación en vigor y haber superado el curso de radiofonista de ultraligero, que incluirá un examen teórico y práctico.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Poseer la licencia de piloto de ultraligero con al menos una habilitación en vigor y haber superado el curso de radarista de ultraligero, que incluirá un examen teórico y práctico.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '51. Entre los requisitos a los que están sujetas las operaciones de ultraligeros está:',
    opciones: [
      {
        textoRespuesta: 'Operar a una altura máxima de vuelo no superior a 300 pies sobre tierra o agua.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Operar a una altura máxima de vuelo no superior a 1.000 metros sobre tierra o agua.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Operar a una altura máxima de vuelo no superior a 1.000 pies sobre tierra.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Operar a una altura máxima de vuelo no superior a 1.000 pies sobre tierra o agua.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '52. El examen práctico realizado por un alumno piloto será supervisado:',
    opciones: [
      {
        textoRespuesta: 'Por el instructor de vuelo del interesado, a bordo de la aeronave previa autorización de AESA.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por un examinador designado por AESA desde la pista.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por un examinador designado por AESA a bordo de la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por el jefe de vuelos del campo desde la pista, previa autorización de AESA.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. Durante el vuelo recto y nivelado nos damos cuenta de que otra aeronave se aproxima de frente. ¿Cómo debemos actuar?',
    opciones: [
      {
        textoRespuesta: 'Ascenderemos todo lo que sea posible para evitar la colisión.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Viraremos hacia la derecha.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Viraremos hacia la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Descenderemos todo lo que sea posible para evitar la colisión.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. El titular de la habilitación de Instructor de ultraligero (FI):',
    opciones: [
      {
        textoRespuesta:
          'Podrá impartir únicamente instrucción práctica en una escuela, en el tipo de ultraligero a que se refiere su habilitación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Podrá impartir instrucción teórica y práctica en una escuela, en todos los tipos de ultraligero que existen.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Podrá impartir instrucción teórica y práctica en una escuela, únicamente en el tipo de ultraligero a que se refiere su habilitación.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Podrá impartir únicamente instrucción teórica en una escuela, en el tipo de ultraligero a que se refiere su habilitación.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '55. Para la realización del examen práctico, el alumno piloto:',
    opciones: [
      {
        textoRespuesta: 'Deberá tener, al menos, dieciséis años de edad en la fecha en que se realice el examen.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deberá tener, al menos, diecisiete años de edad en la fecha en que se realice el examen.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Deberá tener, al menos, diecisiete años de edad en la fecha en que se matricule para el examen.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Deberá tener, al menos, dieciocho años de edad en la fecha en que se realice el examen.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. El comandante de la aeronave:',
    opciones: [
      {
        textoRespuesta:
          'Es la persona expresamente designada para ejercer el mando de la aeronave y la que actuará como piloto en todo momento.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la persona expresamente designada para ejercer el mando de la aeronave.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es la persona que actuará en todo momento como piloto de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la persona que supervisará el vuelo desde la cabina actuando como copiloto de la aeronave.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '57. Para ser alumno piloto:',
    opciones: [
      {
        textoRespuesta:
          'Se requiere una edad mínima de 16 años y estar matriculado en una escuela de vuelo de ultraligeros autorizada por el Estado.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se requiere una edad mínima de 18 años y estar matriculado en una escuela de vuelo de ultraligeros autorizada por AESA.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se requiere una edad mínima de 17 años y estar matriculado en una escuela de vuelo de ultraligeros autorizada por AESA.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Se requiere una edad mínima de 16 años y estar matriculado en una escuela de vuelo de ultraligeros autorizada por AESA.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '58. Indique cuál es la definición correcta de ‘altitud’:',
    opciones: [
      {
        textoRespuesta:
          'Distancia vertical entre un nivel, punto u objeto considerado como punto y un punto o nivel en la superficie.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Distancia horizontal o vertical entre un nivel, punto u objeto considerado como punto y el nivel medio del mar (MSL).',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Distancia vertical entre un punto o nivel en la superficie de la tierra, o unido a ella, y el nivel medio del mar (MSL).',
        isCorrect: false
      },
      {
        textoRespuesta: 'Distancia vertical entre un nivel, punto u objeto considerado como punto y el nivel medio del mar (MSL).',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '59. Un espacio aéreo de dimensiones definidas sobre el territorio o las aguas jurisdiccionales de un Estado, dentro del cual está restringido el vuelo de las aeronaves, de acuerdo con determinadas condiciones especificadas, es:',
    opciones: [
      {
        textoRespuesta: 'Una zona prohibida, identificada con la letra “R”.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una zona prohibida, identificada con la letra “P”.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una zona restringida, identificada con la letra “D”.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una zona restringida, identificada con la letra “R”.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '60. ¿Cuál es la señal que, situada en el área de señales del aeródromo, significa que están prohibidos los aterrizajes y que es posible que dure esa prohibición?',
    opciones: [
      {
        textoRespuesta: 'Un panel cuadrado, rojo y vertical, con diagonales amarillas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un panel cuadrado, amarillo y horizontal, con diagonales rojas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un panel cuadrado, rojo y horizontal, con diagonales amarillas.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un panel cuadrado, rojo y horizontal, con una diagonal amarilla.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '61. La persona que se responsabiliza, con su firma, de la hoja de cronometraje al finalizar los vuelos realizados en la escuela de ultraligeros, comprobando la exactitud de las anotaciones, es:',
    opciones: [
      {
        textoRespuesta: 'El jefe de vuelos.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El director de la escuela.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El piloto con habilitación de instructor que opere el ULM.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El propietario del ULM.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '62. En cuanto a las habilitaciones establecidas en el Artículo 9. del Real Decreto 123/2015:',
    opciones: [
      {
        textoRespuesta:
          'Tienen una validez de dos años, debiendo ser revalidadas o renovadas, según proceda, por idénticos periodos bienales, excepto las de Instructor y Radiofonista, que tienen una validez indefinida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tienen una validez de dos años, debiendo ser revalidadas o renovadas, según proceda, por idénticos periodos bienales, excepto la de Instructor, que tiene una validez indefinida.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Tienen una validez de dos años, debiendo ser revalidadas o renovadas, según proceda, por idénticos periodos bienales, excepto la de Radiofonista, que tiene una validez indefinida.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Tienen una validez de dos años, debiendo ser revalidadas o renovadas, según proceda, por idénticos periodos bienales.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. Las escuelas de vuelo de ultraligero emitirán un documento de identificación de cada alumno matriculado que:',
    opciones: [
      {
        textoRespuesta:
          'Incluirá la identidad del responsable de la instrucción y caducará en la misma fecha que el certificado médico del alumno.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Incluirá la identidad del responsable de la instrucción y caducará a los 24 meses de su expedición.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Incluirá la identidad del responsable de la instrucción y tendrá que ser renovado a los 12 meses de su expedición.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Incluirá la identidad del propietario de la escuela y caducará en la misma fecha que el certificado médico del alumno.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '64. Las escuelas de ultraligero deben acreditar que operan, como mínimo:',
    opciones: [
      {
        textoRespuesta:
          'En un aeródromo que haya acreditado los requisitos de seguridad exigibles para la realización de estas operaciones.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'En un aeródromo que no haya acreditado necesariamente los requisitos de seguridad exigibles para la realización de estas operaciones.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En un aeropuerto que haya acreditado los requisitos de seguridad exigibles para la realización de estas operaciones.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En un aeródromo certificado por AESA.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. ¿Quién expide el certificado de aeronavegabilidad de una aeronave?',
    opciones: [
      {
        textoRespuesta: 'La Organización de Aviación Civil Internacional (OACI).',
        isCorrect: false
      },
      {
        textoRespuesta: 'El fabricante de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La Agencia Estatal de Seguridad Aérea (AESA).',
        isCorrect: true
      },
      {
        textoRespuesta: 'La Agencia Estatal de Navegación Aérea (AENA).',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '66. Según la orden de 14 de noviembre de 1988, para la determinación de la carga límite el factor de carga límite será al menos de:',
    opciones: [
      {
        textoRespuesta: '+3 y -3.',
        isCorrect: false
      },
      {
        textoRespuesta: '+2 y -2.',
        isCorrect: false
      },
      {
        textoRespuesta: '+2 y -3.',
        isCorrect: false
      },
      {
        textoRespuesta: '+3 y -2.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '67. La señal que indica que el área no es utilizable para el movimiento de aeronaves es:',
    opciones: [
      {
        textoRespuesta:
          'Cruces de un solo color llamativo, preferiblemente blanco, colocadas horizontalmente en el área de maniobras.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Una señal blanca y horizontal en forma de pesas colocada en un área de señales.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Una señal blanca y horizontal en forma de pesas con una barra negra perpendicular al eje de las pesas a través de cada una de sus porciones circulares, cuando esté colocada en un área de señales.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un panel cuadrado, rojo y horizontal, con diagonales amarillas, cuando esté colocado en un área de señales.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '68. Las operaciones de ultraligeros, además de despegar o aterrizar desde aeródromos que acrediten el cumplimiento de las normas técnicas de seguridad operacional exigibles, y de otra serie de requisitos, están sujetas a:',
    opciones: [
      {
        textoRespuesta: 'Operar a una altura máxima del vuelo no superior a 300 metros sobre agua.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Operar a una altura máxima del vuelo no superior a 300 metros sobre tierra o agua.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Operar a una altura máxima del vuelo no superior a 300 metros sobre tierra.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Operar a una altura mínima del vuelo no inferior a 300 metros sobre tierra o agua.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. ¿Cuál de los siguientes es requisito imprescindible tanto para revalidar como para renovar una habilitación?',
    opciones: [
      {
        textoRespuesta:
          'Acreditar cinco horas de vuelo en los doce meses anteriores a la solicitud y disponer del certificado médico en vigor.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disponer del certificado médico en vigor.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Acreditar cinco horas de vuelo en los veinticuatro meses anteriores a la solicitud y disponer del certificado médico en vigor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Acreditar cinco horas de vuelo en los doce meses anteriores a la solicitud, realizar una prueba de vuelo ante un examinador y disponer del certificado médico en vigor.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '70. Además de la fotocopia del DNI y el certificado médico en vigor, los menores de edad que quieran ser alumnos piloto deberán adjuntar:',
    opciones: [
      {
        textoRespuesta: 'La autorización de quien ostente la patria potestad o tutela sobre el interesado.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La autorización de quien ostente la patria potestad o tutela sobre el interesado y un seguro especial para menores.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La autorización de quien ostente la patria potestad o tutela sobre el interesado y un certificado de responsabilidad firmado por éste.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La autorización de quien ostente la patria potestad o tutela sobre el interesado, un certificado de responsabilidad firmado por éste, y un seguro especial para menores.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. En una situación de vuelo recto y nivelado, dos aeronaves se encuentran de frente. ¿Qué tendrán que hacer?',
    opciones: [
      {
        textoRespuesta:
          'La aeronave de mayores características tendrá preferencia y la otra deberá realizar un viraje hacia la derecha.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ambas aeronaves tendrán que realizar un viraje hacia la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La aeronave de mayores características tendrá preferencia y la otra deberá realizar un viraje hacia la izquierda.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ambas aeronaves tendrán que realizar un viraje hacia la derecha.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '72. ¿Pueden los pilotos con licencia de piloto privado (PPL) solicitar la convalidación para obtener la licencia de ultraligero?',
    opciones: [
      {
        textoRespuesta:
          'Sí, y la convalidación se concederá sin ningún otro requisito más que acreditar que tanto su licencia como su certificado médico se encuentran en vigor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Sí, y la convalidación se concederá siempre que cumpla una serie de requisitos establecidos en el RD 123/2015.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'No, pues se trata de licencias totalmente diferentes, por lo que el piloto tendrá que superar las pruebas previstas para cualquier persona que quiera obtener la licencia de piloto de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Sí, y la convalidación se concederá siempre que cumpla una serie de requisitos establecidos en la Orden de 14 de noviembre de 1988.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. El Real Decreto 123/2015, de 27 de febrero, tiene por objeto:',
    opciones: [
      {
        textoRespuesta:
          'Regular los requisitos para la obtención de la licencia y las habilitaciones para los pilotos de ultraligero, así como los requisitos de las pruebas para su obtención.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Regular los requisitos y el procedimiento para la obtención de la licencia y las habilitaciones para los pilotos de ultraligero, así como los requisitos de la enseñanza y pruebas para su obtención.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Regular el procedimiento de expedición de licencias y habilitaciones para los pilotos de ultraligero así como, en su caso, la suspensión o revocación a las que hubiera lugar.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Regular el vuelo de ultraligero, así como los requisitos y el procedimiento para la obtención de la licencia y las habilitaciones para los pilotos de ultraligero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '74. Realizar los vuelos de prueba relacionados con el mantenimiento y la seguridad en el vuelo de los ultraligeros de la escuela le corresponde a:',
    opciones: [
      {
        textoRespuesta: 'El jefe de vuelos, que no podrá delegar esta atribución.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El jefe de vuelos, que podrá delegar la atribución al piloto con habilitación de instructor de la escuela expresamente autorizado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El jefe de vuelos, que podrá delegar la atribución a un piloto de ultraligero expresamente autorizado.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El propietario de la aeronave, que podrá delegar la atribución a un piloto de ultraligero expresamente autorizado.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '75. El titular de la habilitación de Instructor (FI), ¿puede impartir instrucción teórica y práctica en otro tipo de ultraligero al que se refiere su habilitación?',
    opciones: [
      {
        textoRespuesta:
          'Sí. La habilitación de instructor acredita para impartir instrucción teórica y práctica en cualquier tipo de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta: 'No. Podrá impartir instrucción teórica pero no práctica.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No. Para impartir instrucción en otro tipo de ultraligero debe poseer la habilitación correspondiente y acreditar un mínimo de 150 horas de vuelo en ese tipo de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'No. Para impartir instrucción en otro tipo de ultraligero debe poseer la habilitación correspondiente y acreditar un mínimo de 200 horas de vuelo en ese tipo de ultraligero.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '76. Todo vuelo VFR deberá desarrollarse:',
    opciones: [
      {
        textoRespuesta:
          'En condiciones meteorológicas de vuelo por instrumentos (VMC) y con referencia visual constante con la superficie terrestre.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En condiciones meteorológicas de vuelo visual (VMC) y no necesariamente con una referencia visual constante con la superficie terrestre.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En condiciones meteorológicas de vuelo visual (IMC) y con referencia visual constante con la superficie terrestre.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'En condiciones meteorológicas de vuelo visual (VMC) y con referencia visual constante con la superficie terrestre.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '77. Cuando se efectúe un vuelo VFR:',
    opciones: [
      {
        textoRespuesta:
          'El piloto que esté efectuando la maniobra es el responsable de evitar colisiones con otras aeronaves y con obstáculos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El comandante de la aeronave es el responsable de evitar colisiones con otras aeronaves y con obstáculos.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El comandante de la aeronave y el copiloto, si lo hubiera, comparten la responsabilidad de evitar colisiones con otras aeronaves y obstáculos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El Control de Circulación Aérea es el responsable de dar las indicaciones al comandante de la aeronave para evitar colisiones con otras aeronaves y obstáculos.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. La elevación del punto más alto del área de aterrizaje la llamamos:',
    opciones: [
      {
        textoRespuesta: 'Altitud del aeródromo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Elevación de la pista.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Elevación del aeródromo.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Altitud de la pista.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. La habilitación de radiofonista (RTC) permite a quien la tenga:',
    opciones: [
      {
        textoRespuesta:
          'Utilizar la banda aérea para establecer las comunicaciones aeronáuticas necesarias para la realización de la práctica de vuelo solo en caso de encontrarnos en una situación de emergencia.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Utilizar la banda aérea para establecer las comunicaciones aeronáuticas necesarias para la realización de la práctica de vuelo en caso de encontrarnos en una situación de emergencia o de urgencia.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Utilizar la banda aérea para establecer las comunicaciones aeronáuticas con un CTR.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Utilizar la banda aérea para establecer las comunicaciones aeronáuticas necesarias para la realización de la práctica de vuelo.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '80. ¿Cuál de las siguientes afirmaciones es correcta, según el Real Decreto 123/2015?',
    opciones: [
      {
        textoRespuesta:
          'La edad mínima para ser alumno piloto es de 16 años y 17 años para presentarse al examen práctico y para obtener la licencia de piloto de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La edad mínima para ser alumno piloto es de 18 años, la misma que para presentarse al examen práctico y para obtener la licencia de piloto de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La edad mínima para ser alumno piloto es de 17 años, igual que para presentarse al examen práctico, y 18 años para obtener la licencia de piloto de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La edad mínima para ser alumno piloto es de 16 años, 17 años para presentarse al examen práctico y 18 años para obtener la licencia de piloto de ultraligero.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '81. La instrucción práctica que impartirá una escuela de vuelo autorizada por AESA en el tipo de aeronave en la que se quiere conseguir la licencia será:',
    opciones: [
      {
        textoRespuesta: 'De un mínimo de diez (10) horas de instrucción de vuelo que incluirán tres horas de vuelo solo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'De un mínimo de quince (15) horas de instrucción de vuelo para todas las aeronaves que incluirán un mínimo de tres horas de vuelo solo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'De un mínimo de quince (15) horas de instrucción de vuelo que incluirán tres  horas de vuelo solo. En el caso de aeronaves con desplazamiento del centro de gravedad, el mínimo será de diez (10) horas.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'De un mínimo de diez (10) horas de instrucción de vuelo que incluirán tres horas de vuelo solo. En el caso de aeronaves con desplazamiento del centro de gravedad, el mínimo será de quince (15) horas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '82. Según el Artículo 7. Del Real Decreto 123/2015:',
    opciones: [
      {
        textoRespuesta: 'La habilitación de examinador tendrá una validez de tres años.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El certificado expedido de examinador tendrá una validez de tres años.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El certificado expedido de examinador tendrá una validez de dos años.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La habilitación de examinador tendrá una validez de dos años.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. Para renovar o revalidar la habilitación de radiofonista (RTC):',
    opciones: [
      {
        textoRespuesta:
          'La renovación o revalidación de radiofonista será automática cuando sea revalidada o renovada cualquiera de las habilitaciones MAF, DCG, AG, H y HD asociadas a la licencia.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'La renovación o revalidación de radiofonista será automática cuando sea renovado el certificado médico correspondiente.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El interesado deberá realizar una prueba de radio utilizando la banda aérea y establecer las comunicaciones aeronáuticas necesarias para la realización de la práctica de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'La habilitación de radiofonista tiene una validez indefinida, independientemente de que se mantenga en vigor o no cualquiera de las habilitaciones MAF, DCG, AG, H y HD asociadas a la licencia.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. Quien posea una licencia de piloto de ultraligero expedida fuera de España:',
    opciones: [
      {
        textoRespuesta:
          'Podrá solicitar a AESA la convalidación de su licencia con las habilitaciones que lleve insertas, excepto la de Radiofonista (RTC).',
        isCorrect: false
      },
      {
        textoRespuesta: 'De ningún modo podrá solicitar a AESA la convalidación de su licencia.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Podrá solicitar a AESA la convalidación de su licencia, debiendo realizar una prueba de vuelo en el tipo de ultraligero del que quiera conseguir la habilitación.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Podrá solicitar a AESA la convalidación de su licencia con las habilitaciones que lleve insertas, excepto la de Instructor (FI).',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '85. Indique la correcta, según la Orden de 14 de noviembre de 1988:',
    opciones: [
      {
        textoRespuesta: 'Para la determinación de la carga límite el factor de carga límite será al menos de +3 y -3.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para la determinación de la carga límite el factor de carga límite será al menos de +2 y -2.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para la determinación de la carga límite el factor de carga límite será al menos de +2 y -3.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para la determinación de la carga límite el factor de carga límite será al menos de +3 y -2.',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '86. Para obtener la habilitación de instructor de ultraligero (FI), además de la licencia de piloto de ultraligero, con la habilitación en vigor del tipo de ultraligero en el que pretende impartir la instrucción y, en su caso, la habilitación de radiofonista, se requiere:',
    opciones: [
      {
        textoRespuesta: 'Acreditar doscientas horas de vuelo en el tipo de ultraligero en el que pretende impartir la instrucción.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Acreditar doscientas horas de vuelo en cualquier tipo de ultraligero y superar las pruebas teóricas y prácticas del curso de instructor de ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Acreditar doscientas horas de vuelo en el tipo de ultraligero en el que pretende impartir la instrucción y superar las pruebas teóricas y prácticas del curso de instructor de ultraligero.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Acreditar doscientas horas de vuelo en el tipo de ultraligero en el que pretende impartir la instrucción y superar la prueba práctica del curso de instructor de ultraligero.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. La distancia vertical entre un nivel, punto u objeto considerado como punto y un punto o nivel en la superficie es:',
    opciones: [
      {
        textoRespuesta: 'Altitud.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altura.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Elevación.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Altitud crítica.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '88. Según las definiciones del Artículo 2. del Real Decreto 123/2015, el registro de tiempo de vuelo es:',
    opciones: [
      {
        textoRespuesta: 'El documento de anotación de los vuelos realizados por el ultraligero.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El documento de anotación de los vuelos realizados por el ultraligero en un periodo de 24 horas.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El documento de anotación de los vuelos realizados por el piloto de ultraligeros.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El documento de anotación de los vuelos realizados por el piloto de ultraligeros en un periodo de 24 horas.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '89. En un plan de vuelo vemos las siglas “ETA”. ¿Qué significa?',
    opciones: [
      {
        textoRespuesta: 'Hora de salida.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hora prevista de llegada.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hora prevista sobre los límites de la región de información de vuelo.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aeródromo de aterrizaje previsto.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. Para la obtención de la licencia de piloto de ultraligero:',
    opciones: [
      {
        textoRespuesta:
          'Será necesario completar la instrucción teórica y práctica requerida y tener, al menos, dieciocho años de edad.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Será necesario completar la instrucción teórica requerida y tener, al menos, dieciocho años de edad.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Será necesario completar la instrucción teórica y práctica requerida y tener, al menos, diecisiete años de edad.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Será necesario completar la instrucción teórica y práctica requerida y tener, al menos, dieciséis años de edad.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. ¿Cuándo serán las líneas de parada un requisito de construcción de los ULM?',
    opciones: [
      {
        textoRespuesta: 'Cuando los elementos sustentadores o de control se construyan exclusivamente en dacrón.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando los elementos sustentadores o de control se construyan en materiales rígidos.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Cuando los elementos sustentadores o de control se construyan en materiales no rígidos, como telas o similares.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'En cualquier caso, cuando los elementos sustentadores o de control se construyan en materiales rígidos o no rígidos, como telas o similares.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '92. En cuanto al orden de prioridad correspondiente a las aeronaves que llegan y que salen de un aeródromo, indique cuál de las siguientes afirmaciones es correcta:',
    opciones: [
      {
        textoRespuesta:
          'Una aeronave que se encuentra en las últimas fases de una aproximación final, normalmente tendrá prioridad sobre otra que está a punto de salir.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Una aeronave que está a punto de salir, normalmente tendrá prioridad sobre otra que se encuentra en las últimas fases de una aproximación final.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Entre una aeronave que está a punto de salir y otra que se encuentra en las últimas fases de una aproximación final, tendrá prioridad la que haya solicitado la maniobra en primer lugar a la torre de control.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Entre una aeronave que está a punto de salir y otra que se encuentra en las últimas fases de una aproximación final, tendrá prioridad la que esté más próxima a realizar la maniobra.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. El Real Decreto 123/2015 establece que para superar el examen teórico para obtener la licencia de ultraligero:',
    opciones: [
      {
        textoRespuesta:
          'Hay que contestar correctamente el 75% de las preguntas y penalizarán las preguntas contestadas incorrectamente.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Hay que contestar correctamente el 80% de las preguntas y penalizarán las preguntas contestadas incorrectamente.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Hay que contestar correctamente el 75% de las preguntas y no penalizarán las preguntas contestadas incorrectamente.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Hay que contestar correctamente el 80% de las preguntas y no penalizarán las preguntas contestadas incorrectamente.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '94. ¿Cómo se pueden revalidar, antes de que caduquen, las habilitaciones MAF, DCG, AG, H y HD?',
    opciones: [
      {
        textoRespuesta: 'El interesado deberá realizar una prueba de vuelo ante un examinador.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El interesado deberá acreditar, en su registro de tiempo de vuelo o mediante certificado emitido por una escuela de vuelo de ultraligero, cinco horas de vuelo en los doce meses anteriores a la solicitud y realizar una prueba práctica.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'El interesado deberá acreditar, en su registro de tiempo de vuelo o mediante certificado emitido por una escuela de vuelo de ultraligero, cinco horas de vuelo en los doce meses anteriores a la solicitud.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'El interesado deberá acreditar, en su registro de tiempo de vuelo o mediante certificado emitido por una escuela de vuelo de ultraligero, cinco horas de vuelo en los veinticuatro meses anteriores a la solicitud.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. ¿Para qué es necesario acreditar, el menos, 500 horas de vuelo como piloto al mando y 150 horas con instructor?',
    opciones: [
      {
        textoRespuesta: 'Para obtener el certificado de examinador experimentado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para obtener el certificado de examinador.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Para obtener el certificado de jefe de vuelos.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Para obtener la habilitación de examinador.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '96. ‘El peso de la aeronave totalmente terminada y con todo su equipo, sin el combustible utilizable, pero incluyendo el combustible no consumible y la máxima cantidad de aceite lubricante y de líquido refrigerante del motor’. Esta es la definición de:',
    opciones: [
      {
        textoRespuesta: 'Peso en vacío.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Peso máximo autorizado.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Peso máximo en despegue.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Peso máximo de proyecto.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '97. Los mandos en un ULM de dos plazas están duplicados. Sin embargo, ¿se considera a alguno de los dos como puesto de mando?',
    opciones: [
      {
        textoRespuesta:
          'No, pues al estar duplicados es innecesario y dependerá del lugar en el que se siente el comandante de la aeronave.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, se considera que el puesto de mando es el que está situado a la izquierda.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sí, se considera que el puesto de mando es el que está situado a la derecha.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Sí, pero dependerá del tipo de aeronave para saber si éste se encuentra situado a la izquierda o a la derecha.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '98. ¿Cuál es el número de horas de vuelo solo que incluye, como mínimo, la instrucción práctica del piloto de ultraligeros?',
    opciones: [
      {
        textoRespuesta:
          'Al menos tres horas de vuelo solo, entendido éste como aquel en el que el alumno piloto es el único ocupante del ultraligero y en el que desarrolla los ejercicios bajo la supervisión del instructor.',
        isCorrect: true
      },
      {
        textoRespuesta:
          'Al menos cinco horas de vuelo solo, entendido éste como aquel en el que el alumno piloto es el único ocupante del ultraligero y en el que desarrolla los ejercicios bajo la supervisión del instructor.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Al menos tres horas de vuelo solo, entendido éste como aquel en el que el alumno piloto es el único ocupante del ultraligero y en el que desarrolla los ejercicios bajo la supervisión del examinador.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Al menos diez horas de vuelo solo, entendido éste como aquel en el que el alumno piloto es el único ocupante del ultraligero y en el que desarrolla los ejercicios bajo la supervisión del instructor.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '99. Las habilitaciones de una licencia de piloto de ultraligero expedida fuera de España, ¿podrán ser convalidadas junto con dicha licencia?',
    opciones: [
      {
        textoRespuesta:
          'No, lo que se puede convalidar es  la licencia, pero para obtener las habilitaciones el piloto deberá realizar las pruebas correspondientes.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Sí, siempre que cumpla los requisitos para convalidar la licencia, se pueden convalidar todas las habilitaciones.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, se podrán convalidar todas excepto la de Instructor (FI).',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sí, se podrán convalidar todas excepto las de Instructor (FI) y Radiofonista (RTC).',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '100. Los pilotos con licencia de piloto privado (PPL), piloto comercial de avión (CPL) y piloto de transporte de línea aérea (ATPL) que soliciten la convalidación de la habilitación de Instructor de ultraligero (FI) deberán acreditar que:',
    opciones: [
      {
        textoRespuesta:
          'Poseen la licencia de piloto y la habilitación de Instructor en vigor y haber realizado, al menos, tres horas de instrucción práctica, de las cuales una de vuelo solo, o alternativamente, haber superado una prueba de vuelo ante un examinador.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Poseen la licencia de piloto y el certificado médico en vigor y haber realizado, al menos, tres horas de instrucción práctica, de las cuales una de vuelo solo, o alternativamente, haber superado una prueba de vuelo ante un examinador.',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Poseen la licencia de piloto y el certificado médico en vigor y haber realizado, al menos, cinco horas de instrucción práctica, de las cuales una de vuelo solo, o alternativamente, haber superado una prueba de vuelo ante un examinador.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En ningún caso podrá convalidarse la habilitación de Instructor de ultraligero (FI).',
        isCorrect: true
      }
    ]
  }
];

export default preguntas;
