import React from 'react';
import '../hoja estilo ULM/ProcedimientosOperacionales.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function ProcedimientosOperacionales() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-ProcedimientosOperacionales'>
        <div className="parrafos-ProcedimientosOperacionales">
          <p>SELECCIONE EL TEST PROCEDIMIENTOS OPERACIONALES</p>
        </div>
        <div className="cuadro-botones-ProcedimientosOperacionales">
          <button type="button" className="btn btn-outline-success btn-ProcedimientosOperacionales" onClick={()=>goToTestHandler("Preguntas/PROCEDIMIENTOS OPERACIONALES TEST/PROCEDIMIENTOS OPERACIONALES – TEST – 1.js")}>TEST 1 PROCEDIMIENTOS OPERACIONALES</button>                
          <br></br>
          <button type="button" className="btn btn-outline-success btn-ProcedimientosOperacionales" onClick={()=>goToTestHandler("Preguntas/PROCEDIMIENTOS OPERACIONALES TEST/PROCEDIMIENTOS OPERACIONALES – TEST – 2.js")}>TEST 2 PROCEDIMIENTOS OPERACIONALES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-ProcedimientosOperacionales">
          <button type="button" className="btn btn-outline-success btn-ProcedimientosOperacionales" onClick={()=>goToTestHandler("Preguntas/PROCEDIMIENTOS OPERACIONALES TEST/PROCEDIMIENTOS OPERACIONALES – TEST – 3.js")}>TEST 3 PROCEDIMIENTOS OPERACIONALES</button>       
          <br></br>
          <button type="button" className="btn btn-outline-success btn-ProcedimientosOperacionales" onClick={()=>goToTestHandler("Preguntas/PROCEDIMIENTOS OPERACIONALES TEST/PROCEDIMIENTOS OPERACIONALES – TEST – 4.js")}>TEST 4 PROCEDIMIENTOS OPERACIONALES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-ProcedimientosOperacionales">
          <button type="button" className="btn btn-outline-success btn-ProcedimientosOperacionales" onClick={()=>goToTestHandler("Preguntas/PROCEDIMIENTOS OPERACIONALES TEST/PROCEDIMIENTOS OPERACIONALES – TEST – 5.js")}>TEST 5 PROCEDIMIENTOS OPERACIONALES</button>       
          <br></br>
          <button type="button" className="btn btn-outline-success btn-ProcedimientosOperacionales" onClick={()=>goToTestHandler("Preguntas/PROCEDIMIENTOS OPERACIONALES TEST/PROCEDIMIENTOS OPERACIONALES – TEST – 6.js")}>TEST 6 PROCEDIMIENTOS OPERACIONALES</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='procedimientos-video-uno-ULM'>
          <div className='pc1-ULM'>
            <ReactPlayer
              url='https://youtu.be/Nc0DraCyKvg'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='pc1-ULM'>
            <ReactPlayer
              url='https://youtu.be/oOY_2dm6wVc'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
		    </div> 
      </div> 
  );
}

export default ProcedimientosOperacionales;