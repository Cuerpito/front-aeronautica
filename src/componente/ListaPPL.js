import React from 'react';
import '../hojas estilo/ListaPPL.css';
import 'bootstrap/dist/css/bootstrap.css';


function ListaPPL() {

    return (
      <div className='general-PPL'>
        <div className="parrafos-PPL">
          <p>SELECCIONE LA CATEGORIA DE PPL</p>
        </div>
        <div className="cuadro-botones-PPL">
          <a href="/comunicaciones">
            <button type="button" className="btn btn-outline-primary btn-PPL">COMUNICACIONES</button>
          </a> 
          <br></br>      
          <a href="/conocimientosGenerales">
            <button type="button" className="btn btn-outline-primary btn-PPL">CONOCIMIENTO GENERALES DE LA AERONAVE</button>
          </a>
        </div>
        <br></br>
        <div className="cuadro-botones-PPL">
          <a href="/factoresHumanos">
            <button type="button" className="btn btn-outline-primary btn-PPL">FACTORES HUMANOS</button>
          </a>       
          <br></br>  
          <a href="/legislacionAerea">
            <button type="button" className="btn btn-outline-primary btn-PPL">LEGISLACION AEREA</button>
          </a>
        </div>
        <br></br>
        <div className="cuadro-botones-PPL">
          <a href="/metereologia">
            <button type="button" className="btn btn-outline-primary btn-PPL">METEREOLOGIA</button>
          </a>   
          <br></br>      
          <a href="/navegacionAerea">
            <button type="button" className="btn btn-outline-primary btn-PPL">NAVEGACION AEREA</button>
          </a>
        </div>
        <br></br>
        <div className="cuadro-botones-PPL">
          <a href="/performance">
            <button type="button" className="btn btn-outline-primary btn-PPL">PERFORMANCE</button>
          </a>   
          <br></br>      
          <a href="/principioVueloPPL">
            <button type="button" className="btn btn-outline-primary btn-PPL">PRINCIPIOS DE VUELO</button>
          </a>
        </div>
        <br></br>
        <div className="cuadro-botones-PPL">
          <a href="/procedimientosOperacionalesPPL">
            <button type="button" className="btn btn-outline-primary btn-PPL">PROCEDIMIENTOS OPERACIONALES</button>
          </a>       
        </div>
        <br></br>
      </div> 
  );
}

export default ListaPPL;