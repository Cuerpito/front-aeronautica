import React from 'react';
import '../hoja estilo ULM/Actuaciones.css';
import 'bootstrap/dist/css/bootstrap.css';


function Actuaciones() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-actuaciones'>
        <div className="parrafos-actuaciones">
          <p>SELECCIONE EL TEST ACTUACIONES</p>
        </div>
        <div className="cuadro-botones-actuaciones">
            <button type="button" className="btn btn-outline-warning btn-actuaciones" onClick={()=>goToTestHandler("Preguntas/ACTUACIONES TEST/ACTUACIONES – TEST – 1.js")}>TEST 1 ACTUACIONES</button>       
            <br></br>
            <button type="button" className="btn btn-outline-warning btn-actuaciones" onClick={()=>goToTestHandler("Preguntas/ACTUACIONES TEST/ACTUACIONES – TEST – 2.js")}>TEST 2 ACTUACIONES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-actuaciones">
            <button type="button" className="btn btn-outline-warning btn-actuaciones" onClick={()=>goToTestHandler("Preguntas/ACTUACIONES TEST/ACTUACIONES – TEST – 3.js")}>TEST 3 ACTUACIONES</button>
            <br></br>
            <button type="button" className="btn btn-outline-warning btn-actuaciones" onClick={()=>goToTestHandler("Preguntas/ACTUACIONES TEST/ACTUACIONES – TEST – 4.js")}>TEST 4 ACTUACIONES</button>
        </div>
        <br></br>
        <div className="cuadro-botones-actuaciones"> 
            <button type="button" className="btn btn-outline-warning btn-actuaciones" onClick={()=>goToTestHandler("Preguntas/ACTUACIONES TEST/ACTUACIONES – TEST – 5.js")}>TEST 5 ACTUACIONES</button>
            <br></br>
            <button type="button" className="btn btn-outline-warning btn-actuaciones" onClick={()=>goToTestHandler("Preguntas/ACTUACIONES TEST/ACTUACIONES – TEST – 6.js")}>TEST 6 ACTUACIONES</button>
        </div>
        <br></br>
      </div> 
  );
}

export default Actuaciones;