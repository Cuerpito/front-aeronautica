import React from 'react';
import '../hojas estilo/ListaULM.css';
import 'bootstrap/dist/css/bootstrap.css';
import imgPdfULM from '../img/PDF-Radiofonosta-Uno.jpg';


function ListaULM() {

    return (
      <div className='general-ULM'>
        <div className="parrafos-ULM">
          <p>SELECCIONE LA CATEGORIA DE ULM</p>
        </div>
        <div className="cuadro-botones-ULM">
          <a href="/actuaciones">
            <button type="button" className="btn btn-outline-primary btn-ULM">ACTUACIONES</button>
          </a>
          <br></br>       
          <a href="/conocimiento">
            <button type="button" className="btn btn-outline-primary btn-ULM">CONOCIMIENTO DE LA AERONAVE</button>
          </a>
        </div>
        <br></br>
        <div className="cuadro-botones-ULM">
          <a href="/derechoAerero">
            <button type="button" className="btn btn-outline-primary btn-ULM">DERECHOS AEREOS</button>
          </a>    
          <br></br>   
          <a href="/factores">
            <button type="button" className="btn btn-outline-primary btn-ULM">FACTORES HUMANOS</button>
          </a>
        </div>
        <br></br>
        <div className="cuadro-botones-ULM">
          <a href="/meteorologia">
            <button type="button" className="btn btn-outline-primary btn-ULM">METEOROLOGIA</button>
          </a>     
          <br></br>  
          <a href="/navegacion">
            <button type="button" className="btn btn-outline-primary btn-ULM">NAVEGACION</button>
          </a>
        </div>
        <br></br>
        <div className="cuadro-botones-ULM">
          <a href="/principioVuelo">
            <button type="button" className="btn btn-outline-primary btn-ULM">PRINCIPIOS DE VUELO</button>
          </a>     
          <br></br>  
          <a href="/procedimientosOperacionales">
            <button type="button" className="btn btn-outline-primary btn-ULM">PROCEDIMIENTOS OPERACIONALES</button>
          </a>
        </div>
        <br></br>
        <div className="cuadro-botones-ULM">
          <a href="/radiofonista">
            <button type="button" className="btn btn-outline-primary btn-ULM">RADIOFONISTA</button>
          </a>     
          <br></br>  
          <a href="/general">
            <button type="button" className="btn btn-outline-primary btn-ULM">GENERALES</button>
          </a>
        </div>
        <br></br>
        <br></br>
        <div className='container-pdf-ULM'>
          <a href="/PdfULM">
           <img className='Pdf-ULM'src={imgPdfULM}></img>
          </a>
          <br></br>
          <p className='titulo-pdf-ULM'>Libro Manual ULM</p>
        </div>
      </div> 
  );
}

export default ListaULM;