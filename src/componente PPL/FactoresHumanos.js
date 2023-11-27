import React from 'react';
import '../hoja estilo PPL/FactoresHumanos.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';



function FactoresHumanos() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-factoresHumanos'>
        <div className="parrafos-factoresHumanos">
          <p>SELECCIONE EL TEST FACTORES HUMANOS</p>
        </div>
        <div className="cuadro-botones-factoresHumanos">
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-001-FACTORESHUMANOS.js")}>TEST 1 FACTORES HUMANOS</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-002-FACTORESHUMANOS.js")}>TEST 2 FACTORES HUMANOS</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-003-FACTORESHUMANOS.js")}>TEST 3 FACTORES HUMANOS</button>
        </div>
        <br></br>
        <div className="cuadro-botones-factoresHumanos">
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-004-FACTORESHUMANOS.js")}>TEST 4 FACTORES HUMANOS</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-005-FACTORESHUMANOS.js")}>TEST 5 FACTORES HUMANOS</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-006-FACTORESHUMANOS.js")}>TEST 6 FACTORES HUMANOS</button>
        </div>
        <br></br>
        <div className="cuadro-botones-factoresHumanos">
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-007-FACTORESHUMANOS.js")}>TEST 7 FACTORES HUMANOS</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-008-FACTORESHUMANOS.js")}>TEST 8 FACTORES HUMANOS</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-009-FACTORESHUMANOS.js")}>TEST 9 FACTORES HUMANOS</button>
        </div>
        <br></br>
        <div className="cuadro-botones-factoresHumanos">
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-010-FACTORESHUMANOS.js")}>TEST 10 FACTORES HUMANOS</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-factoresHumanos" onClick={()=>goToTestHandler("Preguntas PPL/FACTORES HUMANOS/EX-FCH-011-FACTORESHUMANOS.js")}>TEST 11 FACTORES HUMANOS</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='factores-video-uno-PPL'>
          <div className='ft1-PPL'>
            <ReactPlayer
              url='https://youtu.be/_wPkBSvbbUk'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='ft1-PPL'>
            <ReactPlayer
              url='https://youtu.be/xK44nFczul0'
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

export default FactoresHumanos;