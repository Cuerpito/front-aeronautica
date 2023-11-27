import React from 'react';
import '../hoja estilo PPL/PrincipioVueloPPL.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';

function PrincipioVueloPPL() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-principioVueloPPL'>
        <div className="parrafos-principioVueloPPL">
          <p>SELECCIONE EL TEST PRINCIPIOS DE VUELO</p>
        </div>
        <div className="cuadro-botones-principioVueloPPL">
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-001-PRINCIPIOSDEVUELO.js")}>TEST 1 PRINCIPIOS DE VUELO</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-002-PRINCIPIOSDEVUELO.js")}>TEST 2 PRINCIPIOS DE VUELO</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-003-PRINCIPIOSDEVUELO.js")}>TEST 3 PRINCIPIOS DE VUELO</button>
        </div>
        <br></br>
        <div className="cuadro-botones-principioVueloPPL">
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-004-PRINCIPIOSDEVUELO.js")}>TEST 4 PRINCIPIOS DE VUELO</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-005-PRINCIPIOSDEVUELO.js")}>TEST 5 PRINCIPIOS DE VUELO</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-006-PRINCIPIOSDEVUELO.js")}>TEST 6 PRINCIPIOS DE VUELO</button> 
        </div>
        <br></br>
        <div className="cuadro-botones-principioVueloPPL">
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-007-PRINCIPIOSDEVUELO.js")}>TEST 7 PRINCIPIOS DE VUELO</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-008-PRINCIPIOSDEVUELO.js")}>TEST 8 PRINCIPIOS DE VUELO</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-009-PRINCIPIOSDEVUELO.js")}>TEST 9 PRINCIPIOS DE VUELO</button>
        </div>
        <br></br>
        <div className="cuadro-botones-principioVueloPPL">
          <button type="button" className="btn btn-outline-warning btn-principioVueloPPL" onClick={()=>goToTestHandler("Preguntas PPL/PRINCIPIOS DE VUELO/EX-PDV-010-PRINCIPIOSDEVUELO.js")}>TEST 10 PRINCIPIOS DE VUELO</button>
        </div>
        <br></br>
        <br></br>
        <div className='principio-video-uno-PPL'>
          <div className='pv1-PPL'>
            <ReactPlayer
              url='https://youtu.be/yd0UygOk6n4'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='pv1-PPL'>
            <ReactPlayer
              url='https://youtu.be/OT0ynzPtoVE'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='pv1-PPL'>
            <ReactPlayer
              url='https://youtu.be/LColF2uLucc'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
		    </div> 
        <br></br>
        <br></br>
        <div className='principio-video-dos-PPL'>
          <div className='pv1-PPL'>
            <ReactPlayer
              url='https://youtu.be/gm73QY-qm4k'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='pv1-PPL'>
            <ReactPlayer
              url='https://youtu.be/TUN09_9L2dI'
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

export default PrincipioVueloPPL;