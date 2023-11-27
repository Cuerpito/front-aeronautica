import React from 'react';
import '../hoja estilo ULM/Factores.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function Factores() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-Factores'>
        <div className="parrafos-Factores">
          <p>SELECCIONE EL TEST FACTORES HUMANOS</p>
        </div>
        <div className="cuadro-botones-Factores">
          <button type="button" className="btn btn-outline-danger btn-Factores" onClick={()=>goToTestHandler("Preguntas/FACTORES HUMANOS TEST/FACTORES HUMANOS – TEST – 1.js")}>TEST 1 FACTORES HUMANOS</button>
          <br></br>
          <button type="button" className="btn btn-outline-danger btn-Factores" onClick={()=>goToTestHandler("Preguntas/FACTORES HUMANOS TEST/FACTORES HUMANOS – TEST – 2.js")}>TEST 2 FACTORES HUMANOS</button>
        </div>
        <br></br>
        <div className="cuadro-botones-Factores">
          <button type="button" className="btn btn-outline-danger btn-Factores" onClick={()=>goToTestHandler("Preguntas/FACTORES HUMANOS TEST/FACTORES HUMANOS – TEST – 3.js")}>TEST 3 FACTORES HUMANOS</button>
          <br></br>
          <button type="button" className="btn btn-outline-danger btn-Factores" onClick={()=>goToTestHandler("Preguntas/FACTORES HUMANOS TEST/FACTORES HUMANOS – TEST – 4.js")}>TEST 4 FACTORES HUMANOS</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='factores-video-uno-ULM'>
          <div className='ft1-ULM'>
            <ReactPlayer
              url='https://youtu.be/_wPkBSvbbUk'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='ft1-ULM'>
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

export default Factores;