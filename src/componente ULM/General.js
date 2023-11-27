import React from 'react';
import '../hoja estilo ULM/General.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';

function General() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-General'>
        <div className="parrafos-General">
          <p>SELECCIONE EL TEST GENERAL</p>
        </div>
        <div className="cuadro-botones-General">
            <button type="button" className="btn btn-outline-success btn-General" onClick={()=>goToTestHandler("Preguntas/TEST GENERALES/TEST GENERALES.js")}>TEST 1 GENERAL</button>
            <br></br>
            <button type="button" className="btn btn-outline-success btn-General" onClick={()=>goToTestHandler("Preguntas/TEST GENERALES/TEST GENERALES – 2.js")}>TEST 2 GENERAL</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='generales-video-uno-ULM'>
          <div className='cg1-ULM'>
            <ReactPlayer
              url='https://youtu.be/oOY_2dm6wVc'
              width='100%'
              height='120%'
              playing
              controls
            />
          </div>
		    </div> 
      </div> 
  );
}

export default General;
