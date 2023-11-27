import React from 'react';
import '../hoja estilo PPL/Performance.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function Performance() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-performance'>
        <div className="parrafos-performance">
          <p>SELECCIONE EL TEST PERFORMANCE</p>
        </div>
        <div className="cuadro-botones-performance">
          <button type="button" className="btn btn-outline-warning btn-performance" onClick={()=>goToTestHandler("Preguntas PPL/PERFORMANCE/EX-PER-001-PERFORMANCE.js")}>TEST 1 PERFORMANCE</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-performance" onClick={()=>goToTestHandler("Preguntas PPL/PERFORMANCE/EX-PER-002-PERFORMANCE.js")}>TEST 2 PERFORMANCE</button>
        </div>
        <br></br>
        <div className="cuadro-botones-performance">
          <button type="button" className="btn btn-outline-warning btn-performance" onClick={()=>goToTestHandler("Preguntas PPL/PERFORMANCE/EX-PER-003-PERFORMANCE.js")}>TEST 3 PERFORMANCE</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-performance" onClick={()=>goToTestHandler("Preguntas PPL/PERFORMANCE/EX-PER-004-PERFORMANCE.js")}>TEST 4 PERFORMANCE</button>
        </div>
        <br></br>
        <div className="cuadro-botones-performance">
          <button type="button" className="btn btn-outline-warning btn-performance" onClick={()=>goToTestHandler("Preguntas PPL/PERFORMANCE/EX-PER-005-PERFORMANCE.js")}>TEST 5 PERFORMANCE</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-performance" onClick={()=>goToTestHandler("Preguntas PPL/PERFORMANCE/EX-PER-006-PERFORMANCE.js")}>TEST 6 PERFORMANCE</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='performance-video-uno'>
          <div className='pf1-ULM'>
            <ReactPlayer
              url='https://youtu.be/lTBbGc-P3fM'
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

export default Performance;