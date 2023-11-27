import React from 'react';
import '../hoja estilo PPL/Metereologia.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function Metereologia() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-metereologia'>
        <div className="parrafos-metereologia">
          <p>SELECCIONE EL TEST METEREOLOGIA</p>
        </div>
        <div className="cuadro-botones-metereologia">
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-001-METEREOLOGIA.js")}>TEST 1 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-002-METEREOLOGIA.js")}>TEST 2 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-003-METEREOLOGIA.js")}>TEST 3 METEREOLOGIA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-metereologia">
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-004-METEREOLOGIA.js")}>TEST 4 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-005-METEREOLOGIA.js")}>TEST 5 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-006-METEREOLOGIA.js")}>TEST 6 METEREOLOGIA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-metereologia">
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-007-METEREOLOGIA.js")}>TEST 7 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-008-METEREOLOGIA.js")}>TEST 8 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-009-METEREOLOGIA.js")}>TEST 9 METEREOLOGIA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-metereologia">
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-010-METEREOLOGIA.js")}>TEST 10 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-011-METEREOLOGIA.js")}>TEST 11 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-012-METEREOLOGIA.js")}>TEST 12 METEREOLOGIA</button>  
        </div>
        <br></br>
        <div className="cuadro-botones-metereologia">
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-013-METEREOLOGIA.js")}>TEST 13 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-014-METEREOLOGIA.js")}>TEST 14 METEREOLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-015-METEREOLOGIA.js")}>TEST 15 METEREOLOGIA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-metereologia">
          <button type="button" className="btn btn-outline-warning btn-metereologia" onClick={()=>goToTestHandler("Preguntas PPL/METEREOLOGIA/EX-MET-016-METEREOLOGIA.js")}>TEST 16 METEREOLOGIA</button>     
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='meteorologia-video-uno-PPL'>
          <div className='mt1-PPL'>
            <ReactPlayer
              url='https://youtu.be/mPJH6DraWcM'
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

export default Metereologia;