import React from 'react';
import '../hoja estilo PPL/LegislacionAerea.css';
import 'bootstrap/dist/css/bootstrap.css';


function LegislacionAerea() {

  const goToTestHandler = (testPath) => {
    localStorage.setItem("currentTestJSFilePath", testPath);
      window.location.href="./SeleccionQuiz";
  }

    return (
      <div className='general-legislacionAerea'>
        <div className="parrafos-legislacionAerea">
          <p>SELECCIONE EL TEST LEGISLACION AEREA</p>
        </div>
        <div className="cuadro-botones-legislacionAerea">
          <button type="button" className="btn btn-outline-warning btn-legislacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/LEGISLACION AEREA YATC/EX-LAE-001-LEGISLACIONAEREAYATC.js")}>TEST 1 LEGISLACION AEREA</button>       
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-legislacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/LEGISLACION AEREA YATC/EX-LAE-002-LEGISLACIONAEREAYATC.js")}>TEST 2 LEGISLACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-legislacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/LEGISLACION AEREA YATC/EX-LAE-003-LEGISLACIONAEREAYATC.js")}>TEST 3 LEGISLACION AEREA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-legislacionAerea">
          <button type="button" className="btn btn-outline-warning btn-legislacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/LEGISLACION AEREA YATC/EX-LAE-004-LEGISLACIONAEREAYATC.js")}>TEST 4 LEGISLACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-legislacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/LEGISLACION AEREA YATC/EX-LAE-005-LEGISLACIONAEREAYATC.js")}>TEST 5 LEGISLACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-legislacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/LEGISLACION AEREA YATC/EX-LAE-006-LEGISLACIONAEREAYATC.js")}>TEST 6 LEGISLACION AEREA</button>
        </div>
        <br></br>
        <div className="cuadro-botones-legislacionAerea">
          <button type="button" className="btn btn-outline-warning btn-legislacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/LEGISLACION AEREA YATC/EX-LAE-007-LEGISLACIONAEREAYATC.js")}>TEST 7 LEGISLACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-legislacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/LEGISLACION AEREA YATC/EX-LAE-008-LEGISLACIONAEREAYATC.js")}>TEST 8 LEGISLACION AEREA</button>
          <br></br>
          <button type="button" className="btn btn-outline-warning btn-legislacionAerea" onClick={()=>goToTestHandler("Preguntas PPL/LEGISLACION AEREA YATC/EX-LAE-009-LEGISLACIONAEREAYATC.js")}>TEST 9 LEGISLACION AEREA</button>
        </div>
        <br></br>
      </div> 
  );
}

export default LegislacionAerea;