const preguntas = [
  {
    titulo: '1. Que significa la clave CAVOK:',
    opciones: [
      {
        textoRespuesta: 'El avión está en perfectas condiciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Buena visibilidad y ausencia de nubes por debajo de 5000 pies',
        isCorrect: true
      },
      {
        textoRespuesta: 'La pista está limpia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es un tipo de combustible',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '2. ¿Qué son los núcleos de condensación?',
    opciones: [
      {
        textoRespuesta: 'Partículas de la atmósfera en suspensión, sobre las cuales se forman las gotas de agua',
        isCorrect: true
      },
      {
        textoRespuesta: 'Zonas donde se realiza la formación de las nubes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Zonas de concentración de masas nubosas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Zonas donde el aire alcanza el nivel de condensación',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '3. La estabilidad atmosférica viene determinada fundamentalmente por dos factores. Uno de ellos es la variación de la temperatura con la altura en el aire que rodea la masa de aire que asciende o desciende. El otro factor es:',
    opciones: [
      {
        textoRespuesta: 'El movimiento de rotación de la tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'La variación de la presión atmosférica',
        isCorrect: false
      },
      {
        textoRespuesta: 'La variación de temperatura que experimenta en si misma la masa de aire que se mueve verticalmente',
        isCorrect: true
      },
      {
        textoRespuesta: 'El viento en altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '4. Las principales nubes causantes de tormentas, se denominan:',
    opciones: [
      {
        textoRespuesta: 'Estratocúmulos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cumulonimbos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Nimboestratos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estratocúmulos y nimboestratos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '5. Un frente estacionario se caracteriza por:',
    opciones: [
      {
        textoRespuesta: 'El movimiento paralelo de las masas de aire',
        isCorrect: false
      },
      {
        textoRespuesta: 'El mantenimiento constante de sus temperaturas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Poseer una actividad nula',
        isCorrect: false
      },
      {
        textoRespuesta: 'El estacionamiento de las masas de aire',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '6. La variación prevista de temperatura con la altura es de 1,98º centígrados cada:',
    opciones: [
      {
        textoRespuesta: '100 metros',
        isCorrect: false
      },
      {
        textoRespuesta: 'Pies',
        isCorrect: true
      },
      {
        textoRespuesta: 'Metros',
        isCorrect: false
      },
      {
        textoRespuesta: '10 centímetros',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '7. Cuando se realiza un mapa de isobaras:',
    opciones: [
      {
        textoRespuesta: 'Las líneas isobáricas tienen todas la presión estándar',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas las isobaras reducen su presión al nivel del mar al dibujarse en el mapa significativo',
        isCorrect: true
      },
      {
        textoRespuesta: 'En cada país se mide las isobaras según altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'Las líneas de igual presión no son isobaras, sino hipoipsas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '8. De las capas en que dividimos la atmósfera, la más cercana a la Tierra es:',
    opciones: [
      {
        textoRespuesta: 'Termosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estratosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ionosfera',
        isCorrect: false
      },
      {
        textoRespuesta: 'Troposfera',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '9. Superficie frontal es la superficie que limita masas de aire de iguales características.',
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
    titulo: '10. Un viento es constante cuando su fuerza es constante aunque puede variar su dirección.',
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
    titulo: '11. Con relación a las nubes:',
    opciones: [
      {
        textoRespuesta: "a) Se debe ascender y descender mediante virajes cuando se vuela en 'calles' de nubes",
        isCorrect: false
      },
      {
        textoRespuesta: 'b) Las formas de las nubes no dan información sobre la sustentación',
        isCorrect: false
      },
      {
        textoRespuesta: 'c) Las nubes sólidas y con protuberancias curvas bien definidas generan generalmente buena sustentación',
        isCorrect: true
      },
      {
        textoRespuesta: 'd) "a" y "b"',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '12. Según el teorema de Bernoulli, si una partícula de aire pierde velocidad:',
    opciones: [
      {
        textoRespuesta: 'Su presión aumenta',
        isCorrect: true
      },
      {
        textoRespuesta: 'Su presión disminuye',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '13. Al aumentar la presión, la densidad del aire:',
    opciones: [
      {
        textoRespuesta: 'Disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'Permanece constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se hace nula',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumenta',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '14. Que significa METAR',
    opciones: [
      {
        textoRespuesta: 'Es una predicción',
        isCorrect: false
      },
      {
        textoRespuesta: 'Meteorological Air Report',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se refiere a la información meteorológica prevista y se mide a intervalos de 30 min.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es una información meteorológica esporádica',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '15. En un sistema de altas presiones, la presión es máxima:',
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
    titulo: '16. Se define como sotavento la ladera opuesta o resguardada a la dirección del viento.',
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
    titulo: '17. Debido al rozamiento en las capas inferiores de la atmósfera el viento cambia de dirección ya que:',
    opciones: [
      {
        textoRespuesta: 'Se forma la turbulencia y la presión aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'La velocidad del viento disminuye, con la consiguiente disminución de la aceleración de Coriolis',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se forma la turbulencia y la presión disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'El gradiente de presión aumenta',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '18. En el caso de que la temperatura del aire (termómetro seco) y el punto de rocío (termómetro húmedo) estén muy próximos:',
    opciones: [
      {
        textoRespuesta: 'Los vientos serán fuertes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es probable formación de nieblas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Los vientos serán moderados',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hay probabilidad de tormentas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '19. Las nieblas de radiación se forman sólo en tierra.',
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
    titulo: '20. Si volamos cerca de la base de una nube tipo cúmulo, pueden aparecer:',
    opciones: [
      {
        textoRespuesta: 'Fuertes corrientes descendientes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cristales de hielo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Precipitaciones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fuertes corrientes ascendentes',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '21. Un frente cálido y activo es aquel en que:',
    opciones: [
      {
        textoRespuesta: 'Su temperatura es mayor de 25ºC y tiene gran actividad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su temperatura es superior a la zona por donde va pasando y tiene gran actividad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Su temperatura es superior a la estándar y se mueve con rapidez',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '22. Ac es la abreviación de:',
    opciones: [
      {
        textoRespuesta: 'Altocúmulos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Altocirrus',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '23. Son factores que influyen en el viento:',
    opciones: [
      {
        textoRespuesta: 'La rotación y la gravedad de la Tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'La rotación de la Tierra y la proximidad de las isobaras',
        isCorrect: true
      },
      {
        textoRespuesta: 'La gravedad y el rozamiento de la tierra',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas ellas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '24. En la Troposfera, el gradiente o la variación estándar de temperatura es de:',
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
        textoRespuesta: '20º C cada 1.000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '5º C cada 1.000 pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '25. Durante el paso de un frente cálido, la temperatura:',
    opciones: [
      {
        textoRespuesta: 'Se mantiene',
        isCorrect: false
      },
      {
        textoRespuesta: 'Baja',
        isCorrect: false
      },
      {
        textoRespuesta: 'Nula',
        isCorrect: false
      },
      {
        textoRespuesta: 'Sube',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '26. La atmósfera estándar y la presión a nivel del mar se considera igual a:',
    opciones: [
      {
        textoRespuesta: '29.92 pulgadas Hg.',
        isCorrect: false
      },
      {
        textoRespuesta: '760 milímetros',
        isCorrect: false
      },
      {
        textoRespuesta: '1.013 milibares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cualquiera de las anteriores',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '27. La nube se denomina convectiva si la elevación que la origina es por un diferencia de temperaturas.',
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
    titulo: '28. Las dos variables más importantes para analizar el comportamiento de la atmósfera son:',
    opciones: [
      {
        textoRespuesta: 'Presión y velocidad',
        isCorrect: false
      },
      {
        textoRespuesta: 'Presión y temperatura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Humedad y punto de rocío',
        isCorrect: false
      },
      {
        textoRespuesta: 'Humedad y densidad',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '29. En toda la zona cubierta por una masa de aire, el tiempo meteorológico es:',
    opciones: [
      {
        textoRespuesta: 'Distinto en cada zona',
        isCorrect: false
      },
      {
        textoRespuesta: 'El mismo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Estratiforme siempre',
        isCorrect: false
      },
      {
        textoRespuesta: 'Una alta presión siempre',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '30. Existen altas presiones cuando están:',
    opciones: [
      {
        textoRespuesta: 'Por debajo de los 1.013 milibares',
        isCorrect: false
      },
      {
        textoRespuesta: 'A923 milibares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Entre 1.013 y 923 milibares',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por encima de 1.013 milibares',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '31. La Troposfera es una capa de la atmósfera de unos:',
    opciones: [
      {
        textoRespuesta: '10 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: '50 Km.',
        isCorrect: false
      },
      {
        textoRespuesta: '6 Km. en el ecuador y 18 km en los polos',
        isCorrect: false
      },
      {
        textoRespuesta: '18 Km. en el ecuador y 6 km en los polos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '32. Las nubes de advección se forman:',
    opciones: [
      {
        textoRespuesta: 'Cuando una masa de aire caliente pasa por encima de una masa de aire frío',
        isCorrect: true
      },
      {
        textoRespuesta: 'Debido a las corrientes de aire verticales producidas por las distintas temperaturas del terreno',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '33. Se habla de inversión térmica cuando:',
    opciones: [
      {
        textoRespuesta: 'La presión aumenta con la altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura no aumenta con la altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura disminuye con la altitud',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura aumenta con la altitud',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '34. Cuando aumenta el vapor de agua en una masa de aire, su densidad disminuye.',
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
    titulo: '35. Qué pasa con la presión delante, al paso y detrás de un frente cálido:',
    opciones: [
      {
        textoRespuesta: 'Aumenta, se estabiliza, baja',
        isCorrect: false
      },
      {
        textoRespuesta: 'Baja, se estabiliza, se estabiliza',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumenta, baja, aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se estabiliza, aumenta, baja',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '36. En el interior del nimbo­estrato hay:',
    opciones: [
      {
        textoRespuesta: 'Gran cantidad de agua',
        isCorrect: true
      },
      {
        textoRespuesta: 'Exclusivamente hielo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Vientos muy fuertes',
        isCorrect: false
      },
      {
        textoRespuesta: 'Turbulencias ascendentes',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '37. Las nubes formadas en un frente cálido y estable son:',
    opciones: [
      {
        textoRespuesta: 'De desarrollo vertical y cumuliformes',
        isCorrect: false
      },
      {
        textoRespuesta: 'De desarrollo vertical y estratificadas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estables y estratificadas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Inestables y estratificadas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '38. La turbulencia mecánica se produce por:',
    opciones: [
      {
        textoRespuesta: 'La producción de térmicas en verano',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por fuertes vientos variables',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por el rozamiento del viento sobre la superficie de la tierra',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por efecto del movimiento del propio avión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '39. En qué circunstancias la altitud indicada es igual a la real:',
    opciones: [
      {
        textoRespuesta: 'Cuando el altímetro no tiene errores',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cuando el QNH=1013mb y el gradiente vertical de presión es el ISA',
        isCorrect: true
      },
      {
        textoRespuesta: 'Por encima de la altitud de transición',
        isCorrect: false
      },
      {
        textoRespuesta: 'Por debajo del nivel de transición',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '40. Una gota fría puede producir:',
    opciones: [
      {
        textoRespuesta: 'Temperaturas muy bajas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tormentas y chubascos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Lluvia muy fina',
        isCorrect: false
      },
      {
        textoRespuesta: 'Mezcla de llovizna y cristales de hielo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '41. La atmósfera estándar definida por OACI es la que a nivel del mar tiene una presión de:',
    opciones: [
      {
        textoRespuesta: '1013 mb.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Todas son correctas.',
        isCorrect: true
      },
      {
        textoRespuesta: '760 mm de Hg.',
        isCorrect: false
      },
      {
        textoRespuesta: '29.92 pulgadas de Hg.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '42. ¿Dónde se forma la baja presión orográfica en una cadena montañosa?',
    opciones: [
      {
        textoRespuesta: 'En la cúspide cuando sopla el viento perpendicular a la misma',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el barlovento cuando sopla fuerte viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se forman altas presiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el sotavento cuando sopla el viento perpendicular a la misma',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '43. ¿En qué dirección soplan los vientos en un ciclón?',
    opciones: [
      {
        textoRespuesta: 'Hacia el exterior',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hacia el interior',
        isCorrect: true
      },
      {
        textoRespuesta: 'Paralelo a las isobaras',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento es nulo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '44. Durante el paso de un frente frío, la temperatura:',
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
    titulo: '45. El viento se ve afectado por:',
    opciones: [
      {
        textoRespuesta: 'La gravedad terrestre, humedad y temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'La gravedad terrestre, rozamiento y presión',
        isCorrect: false
      },
      {
        textoRespuesta: 'La curvatura de las isobaras y el rozamiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'La proximidad de las isobaras, rozamiento y rotación de la tierra',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '46. La convección es la transmisión del calor por movimientos horizontales del aire.',
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
    titulo: '47. La suspensión de partículas sólidas en el aire, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Calima',
        isCorrect: true
      },
      {
        textoRespuesta: 'Neblina',
        isCorrect: false
      },
      {
        textoRespuesta: 'Niebla',
        isCorrect: false
      },
      {
        textoRespuesta: 'Escarcha',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '48. La disminución de la presión atmosférica con la altura es mayor cuando la masa de aire es:',
    opciones: [
      {
        textoRespuesta: 'Húmedo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Caliente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Fría',
        isCorrect: true
      },
      {
        textoRespuesta: 'Seca',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '49. Si en un mapa meteorológico encontramos dibujadas las isobaras muy separadas, significa:',
    opciones: [
      {
        textoRespuesta: 'El viento es muy fuerte',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento es muy flojo',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hace mucho frío',
        isCorrect: false
      },
      {
        textoRespuesta: 'Zona de formación de nubes',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '50. El viento es originado por una diferencia de presiones que tienden a igualarse.',
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
    titulo: '51. Durante el paso de un frente frío, la temperatura:',
    opciones: [
      {
        textoRespuesta: 'Baja bruscamente',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se mantiene constante',
        isCorrect: false
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
    titulo: '52. La marea barométrica:',
    opciones: [
      {
        textoRespuesta: 'Alcanza sus cotas máximas a las 10:000 y a las 22:00 horas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Alcanza sus cotas mínimas a las 04:00 y 16:00 horas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ambas son correctas',
        isCorrect: true
      },
      {
        textoRespuesta: 'Ambas son falsas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '53. ¿Qué es una inversión de temperatura?',
    opciones: [
      {
        textoRespuesta: 'Que la temperatura disminuye con la altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la temperatura aumenta con la altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que la temperatura permanece constante',
        isCorrect: false
      },
      {
        textoRespuesta: 'Que la temperatura se ajusta al gradiente estándar',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '54. La inversión térmica se produce cuando:',
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
    titulo: '55. En un METAR, en el campo de las nubes, encontramos OVC045. Se refiere a la altura máxima de las nubes:',
    opciones: [
      {
        textoRespuesta: 'Falso, es siempre la base',
        isCorrect: true
      },
      {
        textoRespuesta: 'Verdadero',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '56. Después del paso de un frente cálido, es muy probable que se formen:',
    opciones: [
      {
        textoRespuesta: 'Tormentas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Relámpagos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Niebla de advección',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estratos',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '57. Que significa la clave DZ:',
    opciones: [
      {
        textoRespuesta: 'Granizo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Niebla',
        isCorrect: false
      },
      {
        textoRespuesta: 'Llovizna',
        isCorrect: true
      },
      {
        textoRespuesta: 'Tormentas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '58. Como se llaman las líneas de igual temperatura:',
    opciones: [
      {
        textoRespuesta: 'Isofrigos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isógonas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isobaras',
        isCorrect: false
      },
      {
        textoRespuesta: 'Isotermas',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '59. Si una masa de aire seco sube adiabáticamente sin llegar a la saturación, esta se enfriará:',
    opciones: [
      {
        textoRespuesta: '3ºC cada 1.000 pies',
        isCorrect: true
      },
      {
        textoRespuesta: '1ºC cada 1.000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '1.5ºC cada 1.000 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '2ºC cada 1.000 pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '60. La temperatura es de 4 grados. No se nos puede formar hielo en el carburador, porque la temperatura es positiva.',
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
      '61. Los movimientos de la atmósfera, que son en parte regulares y en parte impredecibles, son provocados principalmente por:',
    opciones: [
      {
        textoRespuesta: 'Las predicciones mayas',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los ritmos circadianos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Los ciclos lunares',
        isCorrect: false
      },
      {
        textoRespuesta: 'La variación de temperatura por la exposición al Sol',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '62. La ladera de una montaña encarada a la dirección del viento, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Barlovento',
        isCorrect: true
      },
      {
        textoRespuesta: 'Sotavento',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tramontana',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ladera norte, si el viento es norte y sur si el viento es sur',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '63. Cerca del suelo podemos esperar un viento:',
    opciones: [
      {
        textoRespuesta: 'Más fuerte que en altura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Más flojo que en altura',
        isCorrect: true
      },
      {
        textoRespuesta: 'El mismo que en altura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '64. Las principales nubes causantes de tormentas se denominan:',
    opciones: [
      {
        textoRespuesta: 'Nimbostratos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Cumulonimbos',
        isCorrect: true
      },
      {
        textoRespuesta: 'Estratocúmulos',
        isCorrect: false
      },
      {
        textoRespuesta: 'Estratocúmulos¬-Nimbostratos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '65. En un sistema frontal orográfico, cuando la masa de aire es estable y húmeda, la nubosidad que se forma es:',
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
    titulo: '66. La neblina se diferencia de la niebla en que:',
    opciones: [
      {
        textoRespuesta: 'Es más densa y con visibilidad menor de 1 km.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es menos densa y con visibilidad menor de 1 km.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es menos densa y con visibilidad mayor de 1 km.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es más densa y con visibilidad mayor de 10 km.',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '67. Si al volar cerca de montañas se ven nubes en forma de coliflor y sobre ellas otras en forma de lenteja, es un signo de que podemos encontrar',
    opciones: [
      {
        textoRespuesta: 'Onda de montaña',
        isCorrect: true
      },
      {
        textoRespuesta: 'Cizalladura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Turbulencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Tormentas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '68. Un aumento de la temperatura produce:',
    opciones: [
      {
        textoRespuesta: 'Que la densidad del aire disminuya',
        isCorrect: true
      },
      {
        textoRespuesta: 'Que la densidad del aire aumente',
        isCorrect: false
      },
      {
        textoRespuesta: 'Efectos sobre la densidad pero depende de la estación del año',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de ellas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '69. ¿Antes del paso de un frente cálido?',
    opciones: [
      {
        textoRespuesta: 'QNH y QFE disminuyen',
        isCorrect: true
      },
      {
        textoRespuesta: 'QNH aumenta y QFE disminuye',
        isCorrect: false
      },
      {
        textoRespuesta: 'QNH disminuye y QFE aumenta',
        isCorrect: false
      },
      {
        textoRespuesta: 'QNH y QFE aumentan',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '70. Cuando las isobaras están separadas:',
    opciones: [
      {
        textoRespuesta: 'El gradiente horizontal de presión es grande',
        isCorrect: false
      },
      {
        textoRespuesta: 'El gradiente horizontal de presión es pequeño',
        isCorrect: true
      },
      {
        textoRespuesta: 'El gradiente horizontal de presión es nulo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El gradiente de la presión con la altura en una unidad de distancia es constante',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '71. Los anticiclones en el hemisferio Sur describen giros:',
    opciones: [
      {
        textoRespuesta: 'En sentido de las agujas del reloj.',
        isCorrect: false
      },
      {
        textoRespuesta: 'En sentido contrario al de las agujas del reloj.',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '72. Calcular el QFE a partir del QNH. QNH: 1022 mb. Indicación actual del altímetro: 10,200 ft.:',
    opciones: [
      {
        textoRespuesta: '800 mb.',
        isCorrect: false
      },
      {
        textoRespuesta: '658 mb.',
        isCorrect: true
      },
      {
        textoRespuesta: '700 mb.',
        isCorrect: false
      },
      {
        textoRespuesta: '1022 mb.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '73. En la etapa de madurez de una tormenta, se origina:',
    opciones: [
      {
        textoRespuesta: 'Estabilidad atmosférica, precipitación débil y gran aparato eléctrico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Precipitaciones, corrientes ascendentes y escaso aparato eléctrico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Poco desarrollo vertical, con fuertes gradiante horizontal de temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Precipitaciones, corrientes ascendentes y descendentes y gran aparato eléctrico',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '74. En el hemisferio sur, ¿cómo giran los vientos en los anticiclones?',
    opciones: [
      {
        textoRespuesta: 'De oeste a este',
        isCorrect: false
      },
      {
        textoRespuesta: 'En el sentido contrario a las agujas del reloj',
        isCorrect: true
      },
      {
        textoRespuesta: 'En el sentido de las agujas del reloj',
        isCorrect: false
      },
      {
        textoRespuesta: 'De este a oeste',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '75. Respecto al siguiente METAR. LEVD 031400z 22009G20kt 150v280 CAVOK 30/07 Q1012:',
    opciones: [
      {
        textoRespuesta: 'La temperatura es de 30 grados',
        isCorrect: true
      },
      {
        textoRespuesta: 'La temperatura máxima es de siete grados',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura es de 10 grados',
        isCorrect: false
      },
      {
        textoRespuesta: 'La temperatura es de 12 grados',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '76. El gradiente del viento es su variación con la longitud.',
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
    titulo: '77. La presencia de altocúmulos lenticulares indica:',
    opciones: [
      {
        textoRespuesta: 'Presencia de vientos de valle',
        isCorrect: false
      },
      {
        textoRespuesta: 'Riesgo de tormentas de carácter orográfico',
        isCorrect: false
      },
      {
        textoRespuesta: 'La presencia de ondas de montaña',
        isCorrect: true
      },
      {
        textoRespuesta: 'Desarrollo de bajas térmicas',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '78. Condiciones para que se formen nieblas:',
    opciones: [
      {
        textoRespuesta: 'Disminución de la humedad y descenso de la temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Disminución del viento y descenso de la temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Aumento de humedad relativa y descenso de temperatura',
        isCorrect: true
      },
      {
        textoRespuesta: 'Aumento del viento y aumento de temperatura',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '79. Al aumentar la altitud, la densidad del aire:',
    opciones: [
      {
        textoRespuesta: 'Permanece constante',
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
        textoRespuesta: 'Ninguna es correcta',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '80. Un aire saturado:',
    opciones: [
      {
        textoRespuesta: 'No presenta movimiento',
        isCorrect: false
      },
      {
        textoRespuesta: 'No puede contener más cantidad de vapor',
        isCorrect: true
      },
      {
        textoRespuesta: 'No puede calentarse más',
        isCorrect: false
      },
      {
        textoRespuesta: 'No puede elevar más su presión',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '81. ¿En qué dirección soplan los vientos en un sistema de altas presiones?',
    opciones: [
      {
        textoRespuesta: 'Hacia fuera y en sentido de las agujas del reloj',
        isCorrect: true
      },
      {
        textoRespuesta: 'Hacia fuera y en sentido contrario a las agujas del reloj',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hacia dentro y en sentido de las agujas del reloj',
        isCorrect: false
      },
      {
        textoRespuesta: 'Hacia dentro y en sentido contrario a las agujas del reloj',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '82. La composición del aire se mantiene invariable hasta los:',
    opciones: [
      {
        textoRespuesta: '20.000 pies de altitud (6.000 m. aproximadamente)',
        isCorrect: false
      },
      {
        textoRespuesta: '50.000 pies de altitud (15.200 m. aproximadamente)',
        isCorrect: false
      },
      {
        textoRespuesta: '70.000 pies de altitud (21.300 m. aproximadamente)',
        isCorrect: true
      },
      {
        textoRespuesta: 'Varía desde un nivel del mar en un gradiente fijo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '83. A sotavento de una zona montañosa podemos esperar:',
    opciones: [
      {
        textoRespuesta: 'Ascendencias',
        isCorrect: false
      },
      {
        textoRespuesta: 'Descendencias',
        isCorrect: true
      },
      {
        textoRespuesta: 'Nada en particular',
        isCorrect: false
      },
      {
        textoRespuesta: 'Lluvia',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '84. En una zona de nimboestratos podemos esperar:',
    opciones: [
      {
        textoRespuesta: 'Buen tiempo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Lluvia',
        isCorrect: true
      },
      {
        textoRespuesta: 'Turbulencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Onda de montaña',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '85. La niebla se formará probablemente:',
    opciones: [
      {
        textoRespuesta: 'A baja humedad, alta temperatura y punto de rocío próximos y viento en calma',
        isCorrect: false
      },
      {
        textoRespuesta: 'A alta humedad, alta temperatura y punto de rocío próximos y fuerte viento',
        isCorrect: false
      },
      {
        textoRespuesta: 'A alta humedad, alta temperatura y punto de rocío próximos y viento en calma',
        isCorrect: true
      },
      {
        textoRespuesta: 'A alta humedad, baja temperatura y punto de rocío próximos y viento en calma',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '86. Si una masa de aire frío de mayor actividad penetra en cuña y obliga a elevarse al aire caliente:',
    opciones: [
      {
        textoRespuesta: 'Se produce un frente frío',
        isCorrect: true
      },
      {
        textoRespuesta: 'Se produce un frente estacionario',
        isCorrect: false
      },
      {
        textoRespuesta: 'No puede ocurrir',
        isCorrect: false
      },
      {
        textoRespuesta: 'Se produce un frente cálido',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '87. En los frentes estacionarios, los vientos soplan:',
    opciones: [
      {
        textoRespuesta: 'Paralelos a los frentes',
        isCorrect: true
      },
      {
        textoRespuesta: 'Perpendiculares al frente frío',
        isCorrect: false
      },
      {
        textoRespuesta: 'Perpendiculares al frente cálido',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '88. La barrera tormentosa paralela y por delante de un frente frío, caracterizada por el extraordinario desarrollo de los Cb, con vientos muy fuertes y racheados, fuertes precipitaciones y gran aparato eléctrico, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Frente frío con aire caliente estable',
        isCorrect: false
      },
      {
        textoRespuesta: 'Frente cálido con aire caliente inestable',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ciclón térmico',
        isCorrect: false
      },
      {
        textoRespuesta: 'Línea de turbonada',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '89. La formación de nubes se produce por:',
    opciones: [
      {
        textoRespuesta: 'El calentamiento del aire húmedo',
        isCorrect: false
      },
      {
        textoRespuesta: 'El aumento de la presión atmosférica',
        isCorrect: false
      },
      {
        textoRespuesta: 'El enfriamiento del aire húmedo',
        isCorrect: true
      },
      {
        textoRespuesta: 'La transformación del vapor de agua en cristales de hielo',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '90. Una onda de montaña puede identificarse por:',
    opciones: [
      {
        textoRespuesta: 'La formación a sotavento de nubes poco definidas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La formación a sotavento de nubes lenticulares y rotoras',
        isCorrect: true
      },
      {
        textoRespuesta: 'La formación a barlovento de nubes poco definidas',
        isCorrect: false
      },
      {
        textoRespuesta: 'La formación a barlovento de nubes lenticulares y rotoras',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '91. La composición aproximada de la atmósfera es:',
    opciones: [
      {
        textoRespuesta: '78% Nitrógeno, 21% Oxígeno y 1% otros gases',
        isCorrect: true
      },
      {
        textoRespuesta: '78% Oxígeno, 21% Nitrógeno y 1% otros gases',
        isCorrect: false
      },
      {
        textoRespuesta: '78% Oxígeno, 21% Dióxido de carbono y 1% otros gases',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '92. Las regiones donde el aire se acumula y la presión es relativamente fuerte se denominan:',
    opciones: [
      {
        textoRespuesta: 'Anticiclones',
        isCorrect: true
      },
      {
        textoRespuesta: 'Depresiones',
        isCorrect: false
      },
      {
        textoRespuesta: 'Ciclón',
        isCorrect: false
      },
      {
        textoRespuesta: 'Borrasca',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '93. Cuál es la altitud de transición en la mayoría de los aeropuertos españoles:',
    opciones: [
      {
        textoRespuesta: '4500 pies',
        isCorrect: false
      },
      {
        textoRespuesta: '1000 pies AGL',
        isCorrect: false
      },
      {
        textoRespuesta: '6000 pies',
        isCorrect: true
      },
      {
        textoRespuesta: '7000 pies',
        isCorrect: false
      }
    ]
  },
  {
    titulo:
      '94. La transformación del vapor de agua en cristales de hielo, cuando el punto de roció está por debajo de 0° C, se denomina:',
    opciones: [
      {
        textoRespuesta: 'Punto de rocío',
        isCorrect: false
      },
      {
        textoRespuesta: 'Helada',
        isCorrect: false
      },
      {
        textoRespuesta: 'Precipitación',
        isCorrect: false
      },
      {
        textoRespuesta: 'Escarcha',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '95. La brisa de tierra es mayor:',
    opciones: [
      {
        textoRespuesta: 'En el ocaso',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al amanecer',
        isCorrect: false
      },
      {
        textoRespuesta: 'Al mediodía',
        isCorrect: false
      },
      {
        textoRespuesta: 'De noche',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '96. Cuál es la temperatura estándar:',
    opciones: [
      {
        textoRespuesta: '20 grados a 1.000 pies AGL',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de si es verano o invierno',
        isCorrect: false
      },
      {
        textoRespuesta: '10 grados a cualquier altura',
        isCorrect: false
      },
      {
        textoRespuesta: '15 grados a nivel del mar',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '97. En condiciones ISA, la presión atmosférica a nivel del mar:',
    opciones: [
      {
        textoRespuesta: 'Es de 700 mmHg.',
        isCorrect: false
      },
      {
        textoRespuesta: 'Depende de la temperatura',
        isCorrect: false
      },
      {
        textoRespuesta: 'Es de 760 mm Hg.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Es de 782 mm Hg.',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '98. Si en pleno vuelo divisamos un frente de nubes oscuras que amenazan lluvia, ¿Cual sería lo más prudente a realizar?:',
    opciones: [
      {
        textoRespuesta: 'No prestarle atención y concentrarnos en nuestro rumbo marcado',
        isCorrect: false
      },
      {
        textoRespuesta: 'Volar por bajo de el pegado al suelo',
        isCorrect: false
      },
      {
        textoRespuesta: 'Atravesarle sin miedo y coger experiencia',
        isCorrect: false
      },
      {
        textoRespuesta: 'Dar la vuelta o evitarlo lo más posible',
        isCorrect: true
      }
    ]
  },
  {
    titulo: '99. Respecto al siguiente METAR LEVD 031400z 22009G20kt 150v280 CAVOK 30/07 Q1012:',
    opciones: [
      {
        textoRespuesta: 'El viento viene del noreste',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento es del suroeste, de 9 nudos de intensidad, con rachas de 20',
        isCorrect: true
      },
      {
        textoRespuesta: 'El viento es calma',
        isCorrect: false
      },
      {
        textoRespuesta: 'El viento tiene rachas de 9 nudos',
        isCorrect: false
      }
    ]
  },
  {
    titulo: '100. La etapa de madurez de una tormenta se caracteriza por:',
    opciones: [
      {
        textoRespuesta: 'Comienzo de la precipitación, corrientes descendentes intensas por debajo de la isoterma de 0ºC.',
        isCorrect: true
      },
      {
        textoRespuesta: 'Predominio de las corrientes descendentes, cese de la lluvia y disipación de las nubes',
        isCorrect: false
      },
      {
        textoRespuesta:
          'Desarrollo de un cúmulo por aumento de la humedad y fuerte inestabilidad, corrientes ascendentes especialmente intensas pasando la isoterma de 0ºC.',
        isCorrect: false
      }
    ]
  }
];

export default preguntas;
