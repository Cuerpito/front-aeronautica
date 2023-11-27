import React from 'react';
import '../hoja estilo ULM/Navegacion.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';


function Navegacion() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-Navegacion'>
        <div className="parrafos-Navegacion">
          <p>SELECCIONE EL TEST NAVEGACION</p>
        </div>
        <div className="cuadro-botones-Navegacion">
          <button type="button" className="btn btn-outline-info btn-Navegacion" onClick={()=>goToTestHandler("Preguntas/NAVEGACION TEST/NAVEGACIÓN – TEST – 1.js")}>TEST 1 NAVEGACION</button>      
          <br></br>
          <button type="button" className="btn btn-outline-info btn-Navegacion" onClick={()=>goToTestHandler("Preguntas/NAVEGACION TEST/NAVEGACIÓN – TEST – 2.js")}>TEST 2 NAVEGACION</button>
        </div>
        <br></br>
        <div className="cuadro-botones-Navegacion">
          <button type="button" className="btn btn-outline-info btn-Navegacion" onClick={()=>goToTestHandler("Preguntas/NAVEGACION TEST/NAVEGACIÓN – TEST – 3.js")}>TEST 3 NAVEGACION</button>
          <br></br>
          <button type="button" className="btn btn-outline-info btn-Navegacion" onClick={()=>goToTestHandler("Preguntas/NAVEGACION TEST/NAVEGACIÓN – TEST – 4.js")}>TEST 4 NAVEGACION</button>
        </div>
        <br></br>
        <div className="cuadro-botones-Navegacion">
            <button type="button" className="btn btn-outline-info btn-Navegacion" onClick={()=>goToTestHandler("Preguntas/NAVEGACION TEST/NAVEGACIÓN – TEST – 5.js")}>TEST 5 NAVEGACION</button>      
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='navegacion-video-uno-ULM'>
          <div className='nv1-ULM'>
            <ReactPlayer
              url='https://youtu.be/Lj8LVUetDfs'
              width='100%'
              height='100%'
              playing
              controls
            />
          </div>
          <div className='nv1-ULM'>
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

export default Navegacion;