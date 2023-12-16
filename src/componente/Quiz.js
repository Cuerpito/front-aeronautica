//import preguntas from "../Preguntas/preguntas";
//import preguntas from "../Preguntas/preguntas";
import { useState, useEffect } from 'react';
import '../hojas estilo/Quiz.css';

function Quiz() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [auxPuntuacion, setAuxPuntuacion] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(40);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);
  const [con, setCon] = useState(1);
  //const [conTiempo, setConTiempo] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  //const [limite, setLimite] = useState(0);

  useEffect(() => {
    const currentTestJSFilePath = localStorage.getItem('currentTestJSFilePath');
    console.log(currentTestJSFilePath);
    const questions = require(`../${currentTestJSFilePath}`);
    console.log(questions.default);
    setPreguntas(questions.default);
  }, []);

  function handleAnswerSubmit(isCorrect, e) {
    // setConTiempo(conTiempo + 1);
    // añadir puntuación
    if (auxPuntuacion === 0) {
      if (isCorrect) setPuntuación(puntuación + 1);
      setAuxPuntuacion(1);
    }
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
    // cambiar a la siguiente pregunta
    setCon(0);
    //setLimite(preguntas[preguntaActual].opciones.length);
    //console.log(limite);
    //console.log(conTiempo);
    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        // if(conTiempo === limite-1){
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(40);
        setAuxPuntuacion(0);
        //setConTiempo(0);
        // }
      }
      console.log(puntuación);
      setCon(1);
    }, 300);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante(prev => prev - con);
      //if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <main className='app'>
        <div className='juego-terminado'>
          <span>
            {' '}
            Obtuviste {puntuación} de {preguntas.length}{' '}
          </span>
          <button onClick={() => (window.location.href = '/quiz')}> Volver a realizar el cuestionario</button>
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaActual(0);
            }}>
            Ver respuestas
          </button>
        </div>
      </main>
    );

  if (answersShown)
    return (
      <main className='app'>
        <div className='lado-izquierdo'>
          <div className='numero-pregunta'>
            <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          <div className='titulo-pregunta'>{preguntas[preguntaActual].titulo}</div>
          <br></br>
          <div className='gg'>{preguntas[preguntaActual].opciones.filter(opcion => opcion.isCorrect)[0].textoRespuesta}</div>
          <br></br>
          <button
            onClick={() => {
              if (preguntaActual === preguntas.length - 1) {
                window.location.href = '/quiz';
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}>
            {preguntaActual === preguntas.length - 1 ? 'Volver a realizar el cuestionario' : 'Siguiente'}
          </button>
        </div>
      </main>
    );

  return (
    <main className='app'>
      <div className='lado-izquierdo'>
        <div className='numero-pregunta'>
          <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
        </div>
        <div className='titulo-pregunta'>{preguntas[preguntaActual]?.titulo}</div>
        <div>
          {!areDisabled ? (
            <span className='tiempo-restante'>Tiempo restante: {tiempoRestante} </span>
          ) : (
            <button
              onClick={() => {
                setTiempoRestante(40);
                setAreDisabled(false);
                if (preguntaActual === preguntas.length - 1) {
                  setIsFinished(true);
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}>
              Continuar
            </button>
          )}
        </div>
      </div>
      <div className='lado-derecho'>
        {preguntas[preguntaActual]?.opciones.map(respuesta => (
          <button disabled={areDisabled} key={respuesta.textoRespuesta} onClick={e => handleAnswerSubmit(respuesta.isCorrect, e)}>
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Quiz;
