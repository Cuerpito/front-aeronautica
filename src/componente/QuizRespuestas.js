//import preguntas from "../Preguntas/preguntas";
//import preguntas from "../Preguntas/preguntas";
import { useState, useEffect } from 'react';
import '../hojas estilo/QuizRespuestas.css';

function QuizRespuestas() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    const currentTestJSFilePath = localStorage.getItem('currentTestJSFilePath');
    console.log(currentTestJSFilePath);
    const questions = require(`../${currentTestJSFilePath}`);
    console.log(questions.default);
    setPreguntas(questions.default);
  }, []);

  return (
    <main className='app'>
      <div className='lado-izquierdo'>
        <div className='numero-pregunta'>
          <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
        </div>
        <div className='titulo-pregunta'>{preguntas[preguntaActual]?.titulo}</div>
        <span className='letrasRespuesta'>Respuesta</span>
        <div className='pp'>{preguntas[preguntaActual]?.opciones.filter(opcion => opcion.isCorrect)[0].textoRespuesta}</div>
        <button
          onClick={() => {
            if (preguntaActual === preguntas.length - 1) {
              window.location.href = '/quizRespuesta';
            } else {
              setPreguntaActual(preguntaActual + 1);
            }
          }}>
          {preguntaActual === preguntas.length - 1 ? 'Volver a ver las respuestas' : 'Siguiente'}
        </button>
      </div>
    </main>
  );
}

export default QuizRespuestas;
