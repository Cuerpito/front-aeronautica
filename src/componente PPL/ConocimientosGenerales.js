import React from 'react';
import '../hoja estilo PPL/ConocimientosGenerales.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function conocimientosGenerales() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-conocimientosGenerales'>
        <div className="parrafos-conocimientosGenerales">
          <p>SELECCIONE EL TEST CONOCIMIENTOS GENERALES</p>
        </div>
        <div className="cuadro-botones-conocimientosGenerales">
          <button type="button" className="btn btn-outline-warning btn-conocimientosGenerales" onClick={()=>goToTestHandler("Preguntas PPL/CONOCIMIENTOS GENERALES AERONAVE/EX-CGA-001-CONOCIMIENTOSGENERALESAERONAVE.js")}>TEST 1 CONOCIMIENTOS GENERALES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-conocimientosGenerales" onClick={()=>goToTestHandler("Preguntas PPL/CONOCIMIENTOS GENERALES AERONAVE/EX-CGA-002-CONOCIMIENTOSGENERALESAERONAVE.js")}>TEST 2 CONOCIMIENTOS GENERALES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-conocimientosGenerales">
          <button type="button" className="btn btn-outline-warning btn-conocimientosGenerales" onClick={()=>goToTestHandler("Preguntas PPL/CONOCIMIENTOS GENERALES AERONAVE/EX-CGA-003-CONOCIMIENTOSGENERALESAERONAVE.js")}>TEST 3 CONOCIMIENTOS GENERALES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-conocimientosGenerales" onClick={()=>goToTestHandler("Preguntas PPL/CONOCIMIENTOS GENERALES AERONAVE/EX-CGA-004-CONOCIMIENTOSGENERALESAERONAVE.js")}>TEST 4 CONOCIMIENTOS GENERALES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-conocimientosGenerales">
          <button type="button" className="btn btn-outline-warning btn-conocimientosGenerales" onClick={()=>goToTestHandler("Preguntas PPL/CONOCIMIENTOS GENERALES AERONAVE/EX-CGA-005-CONOCIMIENTOSGENERALESAERONAVE.js")}>TEST 5 CONOCIMIENTOS GENERALES</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-conocimientosGenerales" onClick={()=>goToTestHandler("Preguntas PPL/CONOCIMIENTOS GENERALES AERONAVE/EX-CGA-006-CONOCIMIENTOSGENERALESAERONAVE.js")}>TEST 6 CONOCIMIENTOS GENERALES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-conocimientosGenerales">
          <button type="button" className="btn btn-outline-warning btn-conocimientosGenerales" onClick={()=>goToTestHandler("Preguntas PPL/CONOCIMIENTOS GENERALES AERONAVE/EX-CGA-007-CONOCIMIENTOSGENERALESAERONAVE.js")}>TEST 7 CONOCIMIENTOS GENERALES</button> 
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='generales-video-uno-PPL'>
          <div className='cg1-PPL'>
            <ReactPlayer
              url='https://youtu.be/oOY_2dm6wVc'
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

export default conocimientosGenerales;