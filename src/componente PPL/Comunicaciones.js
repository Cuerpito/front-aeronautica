import React from 'react';
import '../hoja estilo PPL/Comunicaciones.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';



function Comunicaciones() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-comunicaciones'>
        <div className="parrafos-comunicaciones">
          <p>SELECCIONE EL TEST COMUNICACIONES</p>
        </div>
        <div className="cuadro-botones-comunicaciones">
            <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-001-COMUNICACIONES.js")}>TEST 1 COMUNICACIONES</button>
            <br></br>
            <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-002-COMUNICACIONES.js")}>TEST 2 COMUNICACIONES</button>
            <br></br>
            <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-003-COMUNICACIONES.js")}>TEST 3 COMUNICACIONES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-comunicaciones">
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-004-COMUNICACIONES.js")}>TEST 4 COMUNICACIONES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-005-COMUNICACIONES.js")}>TEST 5 COMUNICACIONES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-006-COMUNICACIONES.js")}>TEST 6 COMUNICACIONES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-comunicaciones">
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-007-COMUNICACIONES.js")}>TEST 7 COMUNICACIONES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-008-COMUNICACIONES.js")}>TEST 8 COMUNICACIONES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-009-COMUNICACIONES.js")}>TEST 9 COMUNICACIONES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-comunicaciones">
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-010-COMUNICACIONES.js")}>TEST 10 COMUNICACIONES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-011-COMUNICACIONES.js")}>TEST 11 COMUNICACIONES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-012-COMUNICACIONES.js")}>TEST 12 COMUNICACIONES</button>          
        </div>
        <br></br>
        <div className="cuadro-botones-comunicaciones">
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-013-COMUNICACIONES.js")}>TEST 13 COMUNICACIONES</button>                           
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-014-COMUNICACIONES.js")}>TEST 14 COMUNICACIONES</button>          
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-015-COMUNICACIONES.js")}>TEST 15 COMUNICACIONES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-comunicaciones">
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-016-COMUNICACIONES.js")}>TEST 16 COMUNICACIONES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-comunicaciones" onClick={()=>goToTestHandler("Preguntas PPL/COMUNICACIONES/EX-COM-017-COMUNICACIONES.js")}>TEST 17 COMUNICACIONES</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='comunicaciones-video-uno'>
          <div className='mt1-PPL'>
            <ReactPlayer
              url='https://youtu.be/n57N4itVu60'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='mt1-PPL'>
            <ReactPlayer
              url='https://youtu.be/JBX5g6R0iFA'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='mt1-PPL'>
            <ReactPlayer
              url='https://youtu.be/ndfQ7F1Je58'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
		    </div> 
        <br></br>
      </div> 
  );
}

export default Comunicaciones;