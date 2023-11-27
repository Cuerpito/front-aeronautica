import React from 'react';
import '../hoja estilo ULM/PrincipioVuelo.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function PrincipioVuelo() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-PrincipioVuelo'>
        <div className="parrafos-PrincipioVuelo">
          <p>SELECCIONE EL TEST PRINCIPIO DE VUELO</p>
        </div>
        <br></br>
        <div className="cuadro-botones-PrincipioVuelo">
          <button type="button" className="btn btn-outline-success btn-PrincipioVuelo" onClick={()=>goToTestHandler("Preguntas/PRINCIPIOS DE VUELO TEST/PRINCIPIOS DE VUELO – TEST – 1.js")}>TEST 1 PRINCIPIO DE VUELO</button>    
          <br></br>
          <button type="button" className="btn btn-outline-success btn-PrincipioVuelo" onClick={()=>goToTestHandler("Preguntas/PRINCIPIOS DE VUELO TEST/PRINCIPIOS DE VUELO – TEST – 2.js")}>TEST 2 PRINCIPIO DE VUELO</button>
        </div>
        <br></br>
        <div className="cuadro-botones-PrincipioVuelo">
          <button type="button" className="btn btn-outline-success btn-PrincipioVuelo" onClick={()=>goToTestHandler("Preguntas/PRINCIPIOS DE VUELO TEST/PRINCIPIOS DE VUELO – TEST – 3.js")}>TEST 3 PRINCIPIO DE VUELO</button>
          <br></br>
          <button type="button" className="btn btn-outline-success btn-PrincipioVuelo" onClick={()=>goToTestHandler("Preguntas/PRINCIPIOS DE VUELO TEST/PRINCIPIOS DE VUELO – TEST – 4.js")}>TEST 4 PRINCIPIO DE VUELO</button>
        </div>
        <br></br>
        <div className="cuadro-botones-PrincipioVuelo">
          <button type="button" className="btn btn-outline-success btn-PrincipioVuelo" onClick={()=>goToTestHandler("Preguntas/PRINCIPIOS DE VUELO TEST/PRINCIPIOS DE VUELO – TEST – 5.js")}>TEST 5 PRINCIPIO DE VUELO</button>           
          <br></br>
          <button type="button" className="btn btn-outline-success btn-PrincipioVuelo" onClick={()=>goToTestHandler("Preguntas/PRINCIPIOS DE VUELO TEST/PRINCIPIOS DE VUELO – TEST – 6.js")}>TEST 6 PRINCIPIO DE VUELO</button>
        </div>
        <br></br>
        <br></br>
        <div className='principio-video-uno-ULM'>
          <div className='pv1-ULM'>
            <ReactPlayer
              url='https://youtu.be/yd0UygOk6n4'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='pv1-ULM'>
            <ReactPlayer
              url='https://youtu.be/OT0ynzPtoVE'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='pv1-ULM'>
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
        <div className='principio-video-dos-ULM'>
          <div className='pv1-ULM'>
            <ReactPlayer
              url='https://youtu.be/gm73QY-qm4k'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='pv1-ULM'>
            <ReactPlayer
              url='https://youtu.be/TUN09_9L2dI'
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

export default PrincipioVuelo;