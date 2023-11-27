import React from 'react';
import '../hoja estilo ULM/Conocimiento.css';
import 'bootstrap/dist/css/bootstrap.css';


function Conocimiento() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }


    return (
      <div className='general-conocimiento'>
        <div className="parrafos-conocimiento">
          <p>SELECCIONE EL TEST CONOCIMIENTO DE LA AERONAVE</p>
        </div>
        <div className="cuadro-botones-conocimiento">
            <button type="button" className="btn btn-outline-success btn-conocimiento" onClick={()=>goToTestHandler("Preguntas/CONOCIMIENTO DE LA AERONAVE TEST/CONOCIMIENTO DE LA AERONAVE – TEST – 1.js")}>TEST 1 CONOCIMIENTO DE LA AERONAVE</button>
            <br></br>
            <button type="button" className="btn btn-outline-success btn-conocimiento" onClick={()=>goToTestHandler("Preguntas/CONOCIMIENTO DE LA AERONAVE TEST/CONOCIMIENTO DE LA AERONAVE – TEST – 2.js")}>TEST 2 CONOCIMIENTO DE LA AERONAVE</button>
        </div>
        <br></br>
        <div className="cuadro-botones-conocimiento">
            <button type="button" className="btn btn-outline-success btn-conocimiento" onClick={()=>goToTestHandler("Preguntas/CONOCIMIENTO DE LA AERONAVE TEST/CONOCIMIENTO DE LA AERONAVE – TEST – 3.js")}>TEST 3 CONOCIMIENTO DE LA AERONAVE</button>
            <br></br>
            <button type="button" className="btn btn-outline-success btn-conocimiento" onClick={()=>goToTestHandler("Preguntas/CONOCIMIENTO DE LA AERONAVE TEST/CONOCIMIENTO DE LA AERONAVE – TEST – 4.js")}>TEST 4 CONOCIMIENTO DE LA AERONAVE</button>
        </div>
        <br></br>
        <div className="cuadro-botones-conocimiento">
            <button type="button" className="btn btn-outline-success btn-conocimiento" onClick={()=>goToTestHandler("Preguntas/CONOCIMIENTO DE LA AERONAVE TEST/CONOCIMIENTO DE LA AERONAVE – TEST – 5.js")}>TEST 5 CONOCIMIENTO DE LA AERONAVE</button>
            <br></br>
            <button type="button" className="btn btn-outline-success btn-conocimiento" onClick={()=>goToTestHandler("Preguntas/CONOCIMIENTO DE LA AERONAVE TEST/CONOCIMIENTO DE LA AERONAVE – TEST – 6.js")}>TEST 6 CONOCIMIENTO DE LA AERONAVE</button>
        </div>
        <br></br>
      </div> 
  );
}

export default Conocimiento;