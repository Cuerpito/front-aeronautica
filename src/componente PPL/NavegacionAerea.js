import React from 'react';
import '../hoja estilo PPL/NavegacionAerea.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';

function NavegacionAerea() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-navegacionAerea'>
        <div className="parrafos-navegacionAerea">
          <p>SELECCIONE EL TEST NAVEGACION AEREA</p>
        </div>
        <div className="cuadro-botones-navegacionAerea">
          <button type="button" className="btn btn-outline-warning btn-navegacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/NAVEGACION AEREA/EX-NAV-001-NAVEGACIONAEREA.js")}>TEST 1 NAVEGACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-navegacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/NAVEGACION AEREA/EX-NAV-002-NAVEGACIONAEREA.js")}>TEST 2 NAVEGACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-navegacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/NAVEGACION AEREA/EX-NAV-003-NAVEGACIONAEREA.js")}>TEST 3 NAVEGACION AEREA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-navegacionAerea">
          <button type="button" className="btn btn-outline-warning btn-navegacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/NAVEGACION AEREA/EX-NAV-004-NAVEGACIONAEREA.js")}>TEST 4 NAVEGACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-navegacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/NAVEGACION AEREA/EX-NAV-005-NAVEGACIONAEREA.js")}>TEST 5 NAVEGACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-navegacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/NAVEGACION AEREA/EX-NAV-006-NAVEGACIONAEREA.js")}>TEST 6 NAVEGACION AEREA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-navegacionAerea">
          <button type="button" className="btn btn-outline-warning btn-navegacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/NAVEGACION AEREA/EX-NAV-007-NAVEGACIONAEREA.js")}>TEST 7 NAVEGACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-navegacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/NAVEGACION AEREA/EX-NAV-008-NAVEGACIONAEREA.js")}>TEST 8 NAVEGACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-navegacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/NAVEGACION AEREA/EX-NAV-009-NAVEGACIONAEREA.js")}>TEST 9 NAVEGACION AEREA</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='navegacion-video-uno-PPL'>
          <div className='nv1-PPL'>
            <ReactPlayer
              url='https://youtu.be/Lj8LVUetDfs'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='nv1-PPL'>
            <ReactPlayer
              url='https://youtu.be/jQMFduW3LuU'
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

export default NavegacionAerea;