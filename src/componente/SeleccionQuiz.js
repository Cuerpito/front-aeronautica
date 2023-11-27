import React from 'react';
import '../hojas estilo/SeleccionQuiz.css'
import 'bootstrap/dist/css/bootstrap.css';


function SeleccionQuiz() {

    return (
      <div className='general-seleccionQuiz'>
        <div className="parrafos-seleccionQuiz">
          <p>OPCIONES DEL QUIZ</p>
        </div>
        <div className="cuadro-botones-seleccionQuiz">
          <a href="/quiz">
            <button type="button" className="btn btn-outline-warning btn-seleccionQuiz">REALIZAR TEST</button>
          </a>       
          <a href="/quizRespuesta">
            <button type="button" className="btn btn-outline-warning btn-seleccionQuiz">PREGUNTAS - RESPUESTAS</button>
          </a>
        </div>
        <br></br>
      </div> 
  );
}

export default SeleccionQuiz;