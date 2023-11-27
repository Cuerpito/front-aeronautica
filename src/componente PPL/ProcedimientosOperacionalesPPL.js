import React from 'react';
import '../hoja estilo PPL/ProcedimientosOperacionalesPPL.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function ProcedimientosOperacionalesPPL() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-procedimientosOperacionalesPPL'>
        <div className="parrafos-procedimientosOperacionalesPPL">
          <p>SELECCIONE EL TEST PROCEDIMIENTOS OPERACIONALES</p>
        </div>
        <div className="cuadro-botones-procedimientosOperacionalesPPL">
          <button type="button" className="btn btn-outline-warning btn-procedimientosOperacionalesPPL" onClick={()=>goToTestHandler("Preguntas PPL/PROCEDIMIENTOS OPERACIONALES/EX-POP-001-PROCEDIMIENTOSOPERACIONALES.js")}>TEST 1 PROCEDIMIENTOS OPERACIONALES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-procedimientosOperacionalesPPL" onClick={()=>goToTestHandler("Preguntas PPL/PROCEDIMIENTOS OPERACIONALES/EX-POP-002-PROCEDIMIENTOSOPERACIONALES.js")}>TEST 2 PROCEDIMIENTOS OPERACIONALES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-procedimientosOperacionalesPPL">
          <button type="button" className="btn btn-outline-warning btn-procedimientosOperacionalesPPL" onClick={()=>goToTestHandler("Preguntas PPL/PROCEDIMIENTOS OPERACIONALES/EX-POP-003-PROCEDIMIENTOSOPERACIONALES.js")}>TEST 3 PROCEDIMIENTOS OPERACIONALES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-procedimientosOperacionalesPPL" onClick={()=>goToTestHandler("Preguntas PPL/PROCEDIMIENTOS OPERACIONALES/EX-POP-004-PROCEDIMIENTOSOPERACIONALES.js")}>TEST 4 PROCEDIMIENTOS OPERACIONALES</button> 
        </div>
        <br></br>
        <div className="cuadro-botones-procedimientosOperacionalesPPL">
          <button type="button" className="btn btn-outline-warning btn-procedimientosOperacionalesPPL" onClick={()=>goToTestHandler("Preguntas PPL/PROCEDIMIENTOS OPERACIONALES/EX-POP-005-PROCEDIMIENTOSOPERACIONALES.js")}>TEST 5 PROCEDIMIENTOS OPERACIONALES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-procedimientosOperacionalesPPL" onClick={()=>goToTestHandler("Preguntas PPL/PROCEDIMIENTOS OPERACIONALES/EX-POP-006-PROCEDIMIENTOSOPERACIONALES.js")}>TEST 6 PROCEDIMIENTOS OPERACIONALES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-procedimientosOperacionalesPPL">
          <button type="button" className="btn btn-outline-warning btn-procedimientosOperacionalesPPL" onClick={()=>goToTestHandler("Preguntas PPL/PROCEDIMIENTOS OPERACIONALES/EX-POP-007-PROCEDIMIENTOSOPERACIONALES.js")}>TEST 7 PROCEDIMIENTOS OPERACIONALES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-procedimientosOperacionalesPPL" onClick={()=>goToTestHandler("Preguntas PPL/PROCEDIMIENTOS OPERACIONALES/EX-POP-008-PROCEDIMIENTOSOPERACIONALES.js")}>TEST 8 PROCEDIMIENTOS OPERACIONALES</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='procedimientos-video-uno-PPL'>
          <div className='pc1-PPL'>
            <ReactPlayer
              url='https://youtu.be/Nc0DraCyKvg'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='pc1-PPL'>
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

export default ProcedimientosOperacionalesPPL;