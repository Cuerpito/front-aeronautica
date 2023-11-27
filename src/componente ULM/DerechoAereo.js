import React from 'react';
import '../hoja estilo ULM/DerechoAereo.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function DerechoAereo() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-DerechoAereo'>
        <div className="parrafos-DerechoAereo">
          <p>SELECCIONE EL TEST DERECHO AEREO</p>
        </div>
        <div className="cuadro-botones-DerechoAereo">
            <button type="button" className="btn btn-outline-success btn-DerechoAereo" onClick={()=>goToTestHandler("Preguntas/DERECHO AEREO TEST/DERECHO AÉREO – TEST – 1.js")}>TEST 1 DERECHO AEREO</button>
            <br></br>
            <button type="button" className="btn btn-outline-success btn-DerechoAereo" onClick={()=>goToTestHandler("Preguntas/DERECHO AEREO TEST/DERECHO AÉREO – TEST – 2.js")}>TEST 2 DERECHO AEREO</button>
        </div>
        <br></br>
        <div className="cuadro-botones-DerechoAereo">
            <button type="button" className="btn btn-outline-success btn-DerechoAereo" onClick={()=>goToTestHandler("Preguntas/DERECHO AEREO TEST/DERECHO AÉREO – TEST – 3.js")}>TEST 3 DERECHO AEREO</button>
            <br></br>
            <button type="button" className="btn btn-outline-success btn-DerechoAereo" onClick={()=>goToTestHandler("Preguntas/DERECHO AEREO TEST/DERECHO AÉREO – TEST – 4.js")}>TEST 4 DERECHO AEREO</button>
        </div>
        <br></br>
        <div className="cuadro-botones-DerechoAereo">
            <button type="button" className="btn btn-outline-success btn-DerechoAereo" onClick={()=>goToTestHandler("Preguntas/DERECHO AEREO TEST/DERECHO AÉREO – TEST – 5.js")}>TEST 5 DERECHO AEREO</button>
            <br></br>
            <button type="button" className="btn btn-outline-success btn-DerechoAereo" onClick={()=>goToTestHandler("Preguntas/DERECHO AEREO TEST/DERECHO AÉREO – TEST – 6.js")}>TEST 6 DERECHO AEREO</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='derecho-video-uno'>
          <div className='dr1-ULM'>
            <ReactPlayer
              url='https://youtu.be/0vywHXuBvLY'
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

export default DerechoAereo;