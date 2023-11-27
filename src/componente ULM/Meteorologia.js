import React from 'react';
import '../hoja estilo ULM/Meteorologia.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function Meteorologia() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-Meteorologia'>
        <div className="parrafos-Meteorologia">
          <p>SELECCIONE EL TEST METEOROLOGIA</p>
        </div>
        <div className="cuadro-botones-Meteorologia">
          <button type="button" className="btn btn-outline-secondary btn-Meteorologia" onClick={()=>goToTestHandler("Preguntas/METEOROLOGIA TEST/METEOROLOGÍA – TEST – 1.js")}>TEST 1 METEOROLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-secondary btn-Meteorologia" onClick={()=>goToTestHandler("Preguntas/METEOROLOGIA TEST/METEOROLOGÍA – TEST – 2.js")}>TEST 2 METEOROLOGIA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-Meteorologia">
          <button type="button" className="btn btn-outline-secondary btn-Meteorologia" onClick={()=>goToTestHandler("Preguntas/METEOROLOGIA TEST/METEOROLOGÍA – TEST – 3.js")}>TEST 3 METEOROLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-secondary btn-Meteorologia" onClick={()=>goToTestHandler("Preguntas/METEOROLOGIA TEST/METEOROLOGÍA – TEST – 4.js")}>TEST 4 METEOROLOGIA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-Meteorologia">
          <button type="button" className="btn btn-outline-secondary btn-Meteorologia" onClick={()=>goToTestHandler("Preguntas/METEOROLOGIA TEST/METEOROLOGÍA – TEST – 5.js")}>TEST 5 METEOROLOGIA</button>
          <br></br>
          <button type="button" className="btn btn-outline-secondary btn-Meteorologia" onClick={()=>goToTestHandler("Preguntas/METEOROLOGIA TEST/METEOROLOGÍA – TEST – 6.js")}>TEST 6 METEOROLOGIA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-Meteorologia">
          <button type="button" className="btn btn-outline-secondary btn-Meteorologia" onClick={()=>goToTestHandler("Preguntas/METEOROLOGIA TEST/METEOROLOGÍA – TEST – 7.js")}>TEST 7 METEOROLOGIA</button>       
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='meteorologia-video-uno-ULM'>
          <div className='mt1-ULM'>
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

export default Meteorologia;