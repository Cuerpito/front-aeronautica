const preguntas = [
  {
    titulo: '1. La altura máxima de vuelo en un ULM sobre tierra o agua, no será superior a:',
    opciones: [
      {
        textoRespuesta: '250 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '500 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '300 m.',
        isCorrect: true
      },
      {
        textoRespuesta: '3.000 m.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '2. La relación entre la distancia recorrida horizontalmente y la distancia vertical recorrida al mismo tiempo, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Carga alar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Coeficiente de planeo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Rendimiento aerodinámico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Trayectoria de vuelo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '3. La curvatura superior que va desde el borde de ataque al borde de salida en un ala se denomina:',
    opciones: [
      {
        textoRespuesta: 'Cuerda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Curvatura media',
        isCorrect: false
      },
      {
        textoRespuesta: 'Extradós',
        isCorrect: true
      },
      {
        textoRespuesta: 'Intradós',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4. Las mejores prestaciones en un avión se consiguen:',
    opciones: [
      {
        textoRespuesta: 'Un día de verano a nivel del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un día de invierno a gran altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un día de invierno a nivel del mar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Un día de verano a gran altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. Los vuelos en ultraligeros se realizarán siempre en condiciones meteorológicas de vuelo:',
    opciones: [
      {
        textoRespuesta: 'VHF',
        isCorrect: false
      },
      {
        textoRespuesta: 'UHF',
        isCorrect: false
      },
      {
        textoRespuesta: 'IFR',
        isCorrect: false
      },
      {
        textoRespuesta: 'VFR',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '6. Supongamos dos ultraligeros:\n(a) Factor de carga 4G (+) y 2G (-)\n(b) Factor de carga 5G (+) y 2G (-)\n¿Cuál de los dos posee mayor resistencia estructural?',
    opciones: [
      {
        textoRespuesta: 'B',
        isCorrect: true
      },
      {
        textoRespuesta: 'A',
        isCorrect: false
      },
      {
        textoRespuesta: 'Iguales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de otros factores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7. Espacio aéreo controlado:',
    opciones: [
      {
        textoRespuesta:
          'Espacio aéreo de dimensiones definidas donde se facilita asesoramiento aeronáutico para los vuelos controlados',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Espacio aéreo de dimensiones definidas dentro del cual se facilita servicio de control de tránsito aéreo para los vuelos controlados',
        isCorrect: true
      },
      {
        textoRespuesta: 'Espacio donde el controlador vigila las aeronaves en vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Espacio aéreo donde se puede volar con un ULM si tenemos equipo de radio',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '8. La variación de la temperatura con la altura en la atmósfera estándar es de 2ºC por cada 1.000 ft. de altura hasta los 11 Km.',
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
    titulo: '9. El “efecto suelo” depende de:',
    opciones: [
      {
        textoRespuesta: 'El estado de la pista y altitud del campo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La turbulencia creada por el flujo de la hélice',
        isCorrect: false
      },
      {
        textoRespuesta: 'La posición del centro de gravedad respecto al centro de presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'La envergadura del ala y su distancia al suelo',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '10. El movimiento alrededor del eje vertical, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Guiñada',
        isCorrect: true
      },
      {
        textoRespuesta: 'Alabeo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cabeceo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Picado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '11. Nivel de condensación es:',
    opciones: [
      {
        textoRespuesta: 'La temperatura a la cual el vapor de agua alcanza su punto de saturación',
        isCorrect: false
      },
      {
        textoRespuesta: 'El nivel al cual los cristales de hielo se convierten en agua',
        isCorrect: false
      },
      {
        textoRespuesta: 'La altitud a la cual el vapor de agua alcanza su punto de rocío',
        isCorrect: true
      },
      {
        textoRespuesta: 'La altitud a la cual se transforma en vapor de agua',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12. ¿Cómo se realiza la formación de las nubes?',
    opciones: [
      {
        textoRespuesta: 'Por la transformación del vapor de agua en cristales de hielo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por enfriamiento del aire húmedo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por calentamiento del aire húmedo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por el aumento de la presión atmosférica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. Si el centro de gravedad está por detrás del centro de presiones, el avión tendrá tendencia',
    opciones: [
      {
        textoRespuesta: 'Alabear',
        isCorrect: false
      },
      {
        textoRespuesta: 'Picar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Encabritar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Guiñar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '14. Durante el paso de un frente frío, el viento:',
    opciones: [
      {
        textoRespuesta: 'Disminuye y cambia de dirección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permanece constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta y cambia de dirección',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta y mantiene la misma dirección',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. Si en vuelo se atraviesa una zona de fuertes turbulencias, se debe: A. Picar y volar a ras del suelo.',
    opciones: [
      {
        textoRespuesta: 'Picar y volar a ras del suelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Volar a mínima velocidad garantizando la no entrada en pérdida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumentar potencia y ganar velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perder altura con giros descendentes',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '16. Si una masa de aire asciende por la pendiente de una montaña hasta su nivel de condensación, puede originarse nubes:',
    opciones: [
      {
        textoRespuesta: 'Turbulentas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frontales',
        isCorrect: false
      },
      {
        textoRespuesta: 'Orográficas',
        isCorrect: true
      },
      {
        textoRespuesta: 'De advención',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '17. Cuando la diferencia de temperatura de dos masas de aire es igual o mayor a 5ºC y la velocidad del frente igual o superior a 30 nudos, se produce:',
    opciones: [
      {
        textoRespuesta: 'Cizalladura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Turbulencia mecánica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Turbulencia orográfica',
        isCorrect: false
      },
      {
        textoRespuesta: 'Onda de montaña',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '18. Si nada más despegar sufrimos una parada motor, ¿cuál es la maniobra más eficaz normalmente?',
    opciones: [
      {
        textoRespuesta: 'Girar y aterrizar en el campo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Seguir a derecho y aterrizar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Girar a viento en cola para aterrizar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Bajar el morro y girar a viento en cola',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. Se denomina umbral de pista al:',
    opciones: [
      {
        textoRespuesta: 'Final de la parte de pista utilizable para el despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'Final de la pista que se deja sin utilizar después del despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'Comienzo de la parte de pista utilizable para el despegue',
        isCorrect: false
      },
      {
        textoRespuesta: 'Comienzo de la parte de pista utilizable para el aterrizaje',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '20. La dirección de los vientos en un frente estacionario es:',
    opciones: [
      {
        textoRespuesta: 'Perpendicular al frente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Con un ángulo de 30º respecto al frente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Circular',
        isCorrect: false
      },
      {
        textoRespuesta: 'Paralela al frente',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '21. La brisa marina está originada por:',
    opciones: [
      {
        textoRespuesta: 'El oleaje del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia térmica entre el mar y la Tierra',
        isCorrect: true
      },
      {
        textoRespuesta: 'La mayor humedad que porta la superficie del mar',
        isCorrect: false
      },
      {
        textoRespuesta: 'La diferencia térmica entre el agua y el aire de superficie',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '22. La documentación obligatoria para volar un ULM, será:',
    opciones: [
      {
        textoRespuesta: 'Cédula de identificación, matrícula, carné de tripulante de ULM y seguros',
        isCorrect: true
      },
      {
        textoRespuesta: 'Certificado de Aeronavegabilidad y carné de piloto',
        isCorrect: false
      },
      {
        textoRespuesta: 'Certificado de identificación y seguro a todo riesgo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Carné de Piloto y Certificado de identificación',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. ¿Está permitido volar con ULM en espacios aéreos controlados?',
    opciones: [
      {
        textoRespuesta: 'Sí, si llevamos emisora',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, si estamos autorizados por el controlador',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, si nos autoriza el jefe de vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'No',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '24. Las corrientes verticales producidas por las diferentes temperaturas del terreno originan nubes:',
    opciones: [
      {
        textoRespuesta: 'De convección',
        isCorrect: true
      },
      {
        textoRespuesta: 'De advección',
        isCorrect: false
      },
      {
        textoRespuesta: 'De turbulencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Orográficas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. Si tenemos un mapa escala 1/ 50.000 cuánto representan en la realidad 10 cm. del mapa.',
    opciones: [
      {
        textoRespuesta: '0,5 Km.',
        isCorrect: true
      },
      {
        textoRespuesta: '5 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: '10 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: '50 Km.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '26. Los tramos del modelo de tráfico son:',
    opciones: [
      {
        textoRespuesta: 'Despegue – Viento en Cola – Base – Aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Despegue – Viraje – Viento en cola – Aproximación final',
        isCorrect: false
      },
      {
        textoRespuesta: 'Despegue – Aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Despegue o cara al viento – Viento cruzado – Viento en cola – Base – Aproximación final y aterrizaje',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '27. La inversión térmica se produce cuando:',
    opciones: [
      {
        textoRespuesta: 'La presión aumenta con la temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura aumenta con la altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'La altura disminuye con la presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura disminuye con la altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '28. Si aumentamos la velocidad relativa del ultraligero la resistencia inducida:',
    opciones: [
      {
        textoRespuesta: 'Aumentará',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuirá',
        isCorrect: true
      },
      {
        textoRespuesta: 'Será la misma',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad no afecta a la resistencia inducida',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. ¿Cuál es la equivalencia de una milla náutica en unidades decimales?',
    opciones: [
      {
        textoRespuesta: '1.609 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '1.853 m.',
        isCorrect: true
      },
      {
        textoRespuesta: '3,3 m.',
        isCorrect: false
      },
      {
        textoRespuesta: '1.653 m.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. Techo absoluto de un ULM, es:',
    opciones: [
      {
        textoRespuesta: 'La máxima altura de vuelo, es decir 300 m.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La máxima altitud alcanzable por el ULM',
        isCorrect: true
      },
      {
        textoRespuesta: 'La máxima altura entre las ruedas y las alas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La altura entre las ruedas y la parte más alta del ULM',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '31. ¿Cuál de los ULM siguientes presenta mejores prestaciones en vuelo, siendo Vm= velocidad máxima y Vp= Velocidad de pérdida?',
    opciones: [
      {
        textoRespuesta: 'Vp= 30 Km/h y Vm= 60 Km/h.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vp= 25 Km/h y Vm= 65 Km/h.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vp= 30 Km/h y Vm= 120 Km/h.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Vp= 40 Km/h y Vm= 125 Km/h.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '32. Si la inclinación de la pista es hacia abajo, la carrera de despegue será:',
    opciones: [
      {
        textoRespuesta: 'Menor',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mayor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Igual',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mayor, pues el ultraligero tendrá ángulo de ataque negativo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. La capa de la atmósfera en la cual se desarrollan las actividades de los ultraligeros, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Estratosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Troposfera',
        isCorrect: true
      },
      {
        textoRespuesta: 'Capa límite',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tropopausa',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '34. Para poder renovar la licencia, se ha de realizar en los últimos 12 meses, un mínimo de horas de:',
    opciones: [
      {
        textoRespuesta: '1',
        isCorrect: false
      },
      {
        textoRespuesta: '2',
        isCorrect: false
      },
      {
        textoRespuesta: '3',
        isCorrect: true
      },
      {
        textoRespuesta: '4',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '35. Se denomina empenaje:',
    opciones: [
      {
        textoRespuesta: 'Al tubo que une el motor con la cola',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al conjunto de tubos que configuran el ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la tela empleada en el velamen del ULM',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al conjunto de cola horizontal y vertical',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '36. Cuando notemos el efecto de una térmica y queremos ganar altura con ella, ¿que debemos hacer?',
    opciones: [
      {
        textoRespuesta: 'Virar en sentido contrario a ella',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hacer un viraje a izquierda y otro a la derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Esperar a que el variómetro se pare en la subida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Virar cuando el variómetro marque descendencia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '37. Para realizar un viraje pronunciado y no perder altura, se debe:',
    opciones: [
      {
        textoRespuesta: 'Disminuir la velocidad del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar el ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Da un mayor ángulo de inclinación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumentar la velocidad del avión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '38. Las pólizas de seguros exigibles para poder utilizar los ULM, son:',
    opciones: [
      {
        textoRespuesta: 'Sólo a terceros en el monoplaza',
        isCorrect: false
      },
      {
        textoRespuesta: 'Obligatorio ocupantes para los biplaza',
        isCorrect: false
      },
      {
        textoRespuesta: 'A terceros monoplaza y además de ocupantes para los biplaza',
        isCorrect: true
      },
      {
        textoRespuesta: 'A todo riesgo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. La tarjeta de "alumno piloto" tiene una validez de:',
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
        textoRespuesta: '4 años',
        isCorrect: false
      },
      {
        textoRespuesta: '5 años',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. Si se va a cruzar una montaña o colina por el lado de sotavento, es recomendable:',
    opciones: [
      {
        textoRespuesta: 'Rodear la cadena montañosa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ganar altura suficiente y cruzarla con un ángulo de inclinación',
        isCorrect: true
      },
      {
        textoRespuesta: 'No cruzarla',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cruzarla deprisa',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. Se dice que una masa de aire es activa cuando:',
    opciones: [
      {
        textoRespuesta: 'Produce gran inestabilidad y fuertes precipitaciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando su desplazamiento es rápido',
        isCorrect: true
      },
      {
        textoRespuesta: 'Produce nubes de desarrollo vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'Origina altas o bajas presiones bien definidas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. Definición de altitud:',
    opciones: [
      {
        textoRespuesta: 'Altura de un cuerpo en posición vertical.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Distancia vertical entre un nivel, punto u objeto considerado como punto, y el nivel medio del mar',
        isCorrect: true
      },
      {
        textoRespuesta: 'Distancia vertical entre el valle de una montaña y la cima',
        isCorrect: false
      },
      {
        textoRespuesta: 'Distancia vertical que recorre un ULM al despegar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '43. En un sistema frontal orográfico, cuando la masa de aire es estable y húmeda, la nubosidad que se forma es:',
    opciones: [
      {
        textoRespuesta: 'Cumuliforme',
        isCorrect: false
      },
      {
        textoRespuesta: 'De desarrollo vertical',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nula',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estratiforme',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '44. Delante de un frente frío, la presión:',
    opciones: [
      {
        textoRespuesta: 'Sube',
        isCorrect: false
      },
      {
        textoRespuesta: 'Baja',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se mantiene constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Varía según la temperatura',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '45. La relación que existe entre la humedad absoluta del aire y la que tendría que haber para que estuviera saturado, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Humedad relativa',
        isCorrect: true
      },
      {
        textoRespuesta: 'Humedad absoluta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tensión de vapor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las tres',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '46. Se dice que un motor tiene mezcla rica cuando:',
    opciones: [
      {
        textoRespuesta: 'La parte de aire es superior a la normal',
        isCorrect: false
      },
      {
        textoRespuesta: 'El combustible tiene mayor octanaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'La parte de combustible es superior a la normal',
        isCorrect: true
      },
      {
        textoRespuesta: 'El combustible tiene menor octanaje',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '47. ¿Puede llevar pasajeros un "alumno piloto"?',
    opciones: [
      {
        textoRespuesta: 'Sí, si el ULM es biplaza',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, si está autorizado por el instructor',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, si el ULM tiene seguros de ocupantes',
        isCorrect: false
      },
      {
        textoRespuesta: 'No, la tarjeta de "alumno piloto" no permite llevar pasajeros',
        isCorrect: true
      }
    ]
  },
  {
    titulo:
      '48. Cuando dos aeronaves se aproximen de frente, o casi de frente, y haya peligro de colisión, ambas aeronaves alterarán su rumbo hacia:',
    opciones: [
      {
        textoRespuesta: 'Arriba',
        isCorrect: false
      },
      {
        textoRespuesta: 'Abajo',
        isCorrect: false
      },
      {
        textoRespuesta: 'La izquierda',
        isCorrect: false
      },
      {
        textoRespuesta: 'La derecha',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '49. Las nubes medias, de 2.000 a 6.000 metros en altura , son:',
    opciones: [
      {
        textoRespuesta: 'Ci-Cs-Ns',
        isCorrect: false
      },
      {
        textoRespuesta: 'As-Ac',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ac-Cs-Ci-Cc',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cu-Cb',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. La disminución de la presión con la altura es mayor cuando la masa de aire es:',
    opciones: [
      {
        textoRespuesta: 'Caliente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Húmeda',
        isCorrect: false
      },
      {
        textoRespuesta: 'Templada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fría',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '51. Si una aeronave está en aproximación final y otra está dentro de la base pero más baja, ¿Quién tiene preferencia?',
    opciones: [
      {
        textoRespuesta: 'La que está más baja',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que está dentro de la base',
        isCorrect: false
      },
      {
        textoRespuesta: 'La que está en aproximación final',
        isCorrect: true
      },
      {
        textoRespuesta: 'La que tenga menor velocidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '52. Cuando una masa de aire caliente pasa por encima de una masa de aire frío, formando nubes estratificadas, se llaman nubes de:',
    opciones: [
      {
        textoRespuesta: 'Convección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Advección',
        isCorrect: true
      },
      {
        textoRespuesta: 'Turbulencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frontales',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. ¿Qué práctica es aconsejable realizar durante el vuelo, para aterrizar ante una posible emergencia?',
    opciones: [
      {
        textoRespuesta: 'Mantener una velocidad constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Observar el terreno por donde se vuela',
        isCorrect: true
      },
      {
        textoRespuesta: 'Mantener una altura constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'No ir siempre a máxima potencia, relajar el motor',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. La responsabilidad del cuidado y mantenimiento de un ULM, así como las revisiones periódicas, será del:',
    opciones: [
      {
        textoRespuesta: 'Propietario del campo donde vuela',
        isCorrect: false
      },
      {
        textoRespuesta: 'Jefe de Vuelos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Inspector de aviación civil',
        isCorrect: false
      },
      {
        textoRespuesta: 'Usuario del mismo',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '55. La intensidad de los torbellinos de punta de ala depende directamente de:',
    opciones: [
      {
        textoRespuesta: 'Las resistencias parásitas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'La resistencia inducida',
        isCorrect: false
      },
      {
        textoRespuesta: 'La torsión del ala',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. Cuando el titular haya cumplido 40 años, el carné de Piloto ULM, tendrá una validez de:',
    opciones: [
      {
        textoRespuesta: '1 año',
        isCorrect: true
      },
      {
        textoRespuesta: '2 años',
        isCorrect: false
      },
      {
        textoRespuesta: '4 años',
        isCorrect: false
      },
      {
        textoRespuesta: '5 años',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '57. ¿Podemos hacer con un ULM maniobras acrobáticas?',
    opciones: [
      {
        textoRespuesta: 'Si, si estamos con permiso en una exhibición aérea',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, si estamos a más de 300 metros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sí, si contamos con paracaídas de emergencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Están totalmente prohibidas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '58. La distancia angular para la latitud, está comprendida entre:',
    opciones: [
      {
        textoRespuesta: '0º a 90º Norte o Sur',
        isCorrect: true
      },
      {
        textoRespuesta: '0º a 180º Norte o Sur',
        isCorrect: false
      },
      {
        textoRespuesta: '0º a 90º Este u Oeste',
        isCorrect: false
      },
      {
        textoRespuesta: '0º a 180º Este u Oeste',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '59. ¿Cómo influye al aterrizaje el “efecto suelo”?',
    opciones: [
      {
        textoRespuesta: 'Alarga el planeo antes de la toma',
        isCorrect: true
      },
      {
        textoRespuesta: 'La toma se transforma en forma brusca',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye considerablemente la carrera de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permite realizar rápidamente la toma con la pista.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. Si durante la carrera de despegue notamos una falta de potencia en el motor, la medida más recomendable es:',
    opciones: [
      {
        textoRespuesta: 'Aprovechar rápido la pista y despegar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Comunicarlo por radio',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cortar motor y frenar, abortando despegue',
        isCorrect: true
      },
      {
        textoRespuesta: 'Acelerar a fondo y comprobar presión aceite y combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '61. A menos que este indicado lo contrario, todos los virajes en los tráficos se harán hacia:',
    opciones: [
      {
        textoRespuesta: 'Izquierda',
        isCorrect: true
      },
      {
        textoRespuesta: 'Derecha',
        isCorrect: false
      },
      {
        textoRespuesta: 'Indistintamente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Según la orientación de la pista',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '62. Las térmicas son unas masas de aire caliente que se desprenden del suelo, teniendo mayor fuerza:',
    opciones: [
      {
        textoRespuesta: 'A primeras horas de la mañana',
        isCorrect: false
      },
      {
        textoRespuesta: 'A últimas horas de la tarde',
        isCorrect: false
      },
      {
        textoRespuesta: 'A las horas centrales del día',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por la noche',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. Durante el paso de un frente frío, la temperatura:',
    opciones: [
      {
        textoRespuesta: 'Se mantiene constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Baja bruscamente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Varía con respecto a la presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sube bruscamente',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '64. La tendencia de un avión a retornar a su condición original de vuelo, después de haber sufrido una perturbación, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Estabilidad positiva',
        isCorrect: true
      },
      {
        textoRespuesta: 'Estabilidad neutra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estabilidad negativa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estabilidad dinámica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. Al aumentar la temperatura, la densidad del aire disminuye.',
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
    titulo: '66. ¿En que dirección soplan los vientos con altas presiones en el Hemisferio Norte?',
    opciones: [
      {
        textoRespuesta: 'Hacia afuera y en sentido de la agujas del reloj',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hacia afuera y en sentido contrario a las agujas del reloj',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hacia adentro y en sentido de las agujas de un reloj',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hacia adentro y en sentido contrario de las agujas del reloj',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '67. Las principales nubes causantes de tormentas, se denominan:',
    opciones: [
      {
        textoRespuesta: 'Estratos – Cúmulos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cúmulos- Nimbos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Nimbo – Estratos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estrato – Cúmulos y Nimbo – Estratos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '68. Cuando aumenta el vapor de agua en una masas de aire, su densidad disminuye:',
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
    titulo: '69. La identificación de una zona del espacio aéreo con la letra “D”, significa zona:',
    opciones: [
      {
        textoRespuesta: 'Peligrosa',
        isCorrect: true
      },
      {
        textoRespuesta: 'Prohibida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Restringida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perforada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. Se denomina pista en servicio:',
    opciones: [
      {
        textoRespuesta: 'La designada para calentar motores',
        isCorrect: false
      },
      {
        textoRespuesta: 'La utilizada para aparcar con el fin de aproar los al viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'La designada en cada momento para el despegue y el aterrizaje',
        isCorrect: true
      },
      {
        textoRespuesta: 'La designada para el rodaje antes del despegue',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. Cuando la declinación es Oeste, una vez hallado el rumbo geográfico (RG), el magnético (RM) será:',
    opciones: [
      {
        textoRespuesta: 'RG X declinación',
        isCorrect: false
      },
      {
        textoRespuesta: 'RG / declinación',
        isCorrect: false
      },
      {
        textoRespuesta: 'RG + declinación',
        isCorrect: true
      },
      {
        textoRespuesta: 'RG – declinación',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '72. El elemento encargado de proporcionar la mezcla aire-combustible idónea para cada régimen de funcionamiento del motor es:',
    opciones: [
      {
        textoRespuesta: 'La bomba de gasolina',
        isCorrect: false
      },
      {
        textoRespuesta: 'El filtro de aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'El carburador',
        isCorrect: true
      },
      {
        textoRespuesta: 'La magneto',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. A mayor inclinación de los rayos del Sol, mayor radiación de calor de la Tierra.',
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
    titulo: '74. La existencia de cielo despejado en un anticiclón está asociado:',
    opciones: [
      {
        textoRespuesta: 'Al descenso del aire situado en los niveles altos, sobre el centro del anticiclón',
        isCorrect: true
      },
      {
        textoRespuesta: 'Al descenso del aire situado en los niveles altos de los alrededores del anticiclón',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al ascenso del aire situado en niveles bajos del anticiclón',
        isCorrect: false
      },
      {
        textoRespuesta: 'A la diferencia de presión entre las isobaras consecutivas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. Una gota fría es:',
    opciones: [
      {
        textoRespuesta: 'Una precipitación en forma de cristales de hielo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una alta presión caracterizada por su formación de altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Un anticiclón formado a baja altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una baja presión caracterizada por su formación en altura',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '76. ¿Cuál de las siguientes definiciones corresponde a la milla náutica?',
    opciones: [
      {
        textoRespuesta: 'Es la distancia igual a un grado de circulo polar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la distancia igual a un grado de longitud Este',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la distancia igual a la longitud de un minuto de arco',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es la distancia igual a la longitud de un grado de arco',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '77. La identificación de una zona del espacio aéreo con la letra “R”, significa zona:',
    opciones: [
      {
        textoRespuesta: 'Peligrosa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Prohibida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Restringida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Reservada',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. ¿Que es necesario para que se produzcan precipitaciones?',
    opciones: [
      {
        textoRespuesta: 'Que la temperatura ambiente sea elevada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la presión atmosférica sea alta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que el aire esté saturado',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que la densidad del aire sea alta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. Cuando un ultraligero llega a la pérdida, uno de los síntomas que se producen es:',
    opciones: [
      {
        textoRespuesta: 'Posición del morro más bajo de lo normal',
        isCorrect: false
      },
      {
        textoRespuesta: 'El ruido del viento es más fuerte',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta la sensación de depresión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Respuesta lenta de los mandos, sensación de poca presión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '80. El vuelo a barlovento produce:',
    opciones: [
      {
        textoRespuesta: 'Vuelos peligrosos incluso con poco viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Remolinos incómodos para el vuelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Grandes descendencias',
        isCorrect: false
      },
      {
        textoRespuesta: 'Gran sustentación debido a las corrientes ascendentes',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '81. Las nubes que se forman cuando dos masas de aire, una caliente y otra fría chocan, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Orográficas',
        isCorrect: false
      },
      {
        textoRespuesta: 'De convección',
        isCorrect: false
      },
      {
        textoRespuesta: 'De advección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frontales',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '82. En un frente cálido, la masa de aire caliente se desliza por debajo de la masa de aire frío obligándola a retirarse.',
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
    titulo: '83. ¿Por qué se deben llenar los depósitos de combustible después del último vuelo?',
    opciones: [
      {
        textoRespuesta: 'Así eliminamos la evaporación del combustible',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se previene la condensación del agua, eliminando espacios vacíos en los depósitos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Evitamos la condensación del combustible, quedando el agua flotando',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se previene la expansión del combustible manteniendo el volumen',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. El larguero de un ULM, es el:',
    opciones: [
      {
        textoRespuesta: 'Miembro que une el fuselaje con el tren de aterrizaje',
        isCorrect: false
      },
      {
        textoRespuesta: 'Miembro que une las ruedas del tren principal con la rueda de morro',
        isCorrect: false
      },
      {
        textoRespuesta: 'Miembro estructural longitudinal y principal del fuselaje',
        isCorrect: true
      },
      {
        textoRespuesta: 'Miembro estructural que soporta el peso del ULM, cuando está aparcado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '85. La velocidad de ascenso con la que se sube lo más alto posible en la menor distancia horizontal, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Velocidad de ángulo de ascenso',
        isCorrect: true
      },
      {
        textoRespuesta: 'Velocidad de régimen de ascenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad normal de ascenso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Velocidad de subida',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '86. Si un ULM vuela con viento en cola de 10 Km/h. y su velocidad relativa es de 80 Km/h., ¿cuál será su velocidad con respecto a la Tierra?',
    opciones: [
      {
        textoRespuesta: '70 Km/h',
        isCorrect: false
      },
      {
        textoRespuesta: '80 Km/h',
        isCorrect: false
      },
      {
        textoRespuesta: '90 Km/h',
        isCorrect: true
      },
      {
        textoRespuesta: '100 Km/h',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. La pérdida se define como la reducción drástica de la sustentación del ala, debido a un ángulo de ataque excesivo.',
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
    titulo: '88. Cuando aparece alguna ráfaga de viento por detrás del avión, o aire en calma delante, la velocidad relativa',
    opciones: [
      {
        textoRespuesta: 'Se mantiene constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminuye',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta con respecto al flujo de la hélice',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '89. La identificación de una zona del espacio aéreo con la letra “P”, significa zona:',
    opciones: [
      {
        textoRespuesta: 'Peligrosa',
        isCorrect: false
      },
      {
        textoRespuesta: 'Prohibida',
        isCorrect: true
      },
      {
        textoRespuesta: 'Restringida',
        isCorrect: false
      },
      {
        textoRespuesta: 'Diurna',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. De las siguientes masas de aire cuál pesa más:',
    opciones: [
      {
        textoRespuesta: 'Aire frío seco',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aire frío húmedo saturado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aire caliente seco',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aire caliente húmedo saturado',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. Las resistencias parásitas son:',
    opciones: [
      {
        textoRespuesta: 'Las que producen mayor sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las producidas por la sustentación del avión',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las que frenan el avión cuando está aparcado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las producidas por los componentes del avión',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '92. Los factores que afectan a la sustentación del ala, son:',
    opciones: [
      {
        textoRespuesta:
          'Velocidad de pérdida, superficie alar, densidad del aire, resistencia total, peso del avión y ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Superficie alar, densidad del aire, resistencias parásitas, coeficiente de planeo y ángulo de ataque',
        isCorrect: false
      },
      {
        textoRespuesta: 'Forma del perfil del ala, superficie alar, densidad del aire, velocidad y ángulo de ataque',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ángulo de ataque, peso del avión, superficie alar, resistencia inducida y densidad del aire',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. El aterrizaje con viento en cara , permitirá:',
    opciones: [
      {
        textoRespuesta: 'Una mayor velocidad de aproximación respecto a tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una mayor carrera y pistas más largas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aterrizar a mayor velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aterrizar en pistas más cortas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '94. ¿Cuál de estos conjuntos pertenece a la matrícula de un ULM?',
    opciones: [
      {
        textoRespuesta: 'EC- BAC',
        isCorrect: false
      },
      {
        textoRespuesta: 'EC- A4D',
        isCorrect: false
      },
      {
        textoRespuesta: 'EC- AB5',
        isCorrect: true
      },
      {
        textoRespuesta: 'EC- 623',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '95. Se dice que un motor tiene una mezcla pobre cuando:',
    opciones: [
      {
        textoRespuesta: 'La parte de aire es superior a la normal.',
        isCorrect: true
      },
      {
        textoRespuesta: 'El combustible tiene mayor octanaje.',
        isCorrect: false
      },
      {
        textoRespuesta: 'La parte de combustible es superior a lo normal.',
        isCorrect: false
      },
      {
        textoRespuesta: 'El combustible tiene menor octanaje.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '96. La presión atmosférica depende de:',
    opciones: [
      {
        textoRespuesta: 'Altitud, humedad y temperatura',
        isCorrect: true
      },
      {
        textoRespuesta: 'La época del año',
        isCorrect: false
      },
      {
        textoRespuesta: 'Si es anticiclón o borrasca',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las anteriores son correctas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '97. Con alta temperatura:',
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
    titulo: '98. Existen bajas presiones cuando están por debajo de:',
    opciones: [
      {
        textoRespuesta: '1.023 milibares',
        isCorrect: false
      },
      {
        textoRespuesta: '29,92 pulgadas',
        isCorrect: true
      },
      {
        textoRespuesta: '1.013 pulgadas',
        isCorrect: false
      },
      {
        textoRespuesta: '92,29 milibares',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '99. En un sistema de bajas presiones, la presión es mínima:',
    opciones: [
      {
        textoRespuesta: 'En el exterior',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el centro',
        isCorrect: true
      },
      {
        textoRespuesta: 'En las orillas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es la misma en toda su extensión',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '100. Durante el ascenso de un ULM, la energía cinética de velocidad proporcionada por el motor, se va transformando en energía potencial de altura:',
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
