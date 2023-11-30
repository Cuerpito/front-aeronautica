import React from 'react';
import '../hoja estilo ULM/Radiofonista.css';
import 'bootstrap/dist/css/bootstrap.css';
import imgPdf from '../img/PDF-Radiofonosta-Uno.jpg';

function Radiofonista() {
  const goToTestHandler = testPath => {
    localStorage.setItem('currentTestJSFilePath', testPath);
    window.location.href = './SeleccionQuiz';
  };

  return (
    <div className='general-Radiofonista'>
      <div className='parrafos-Radiofonista'>
        <p>SELECCIONE EL TEST RADIOFONISTA</p>
      </div>
      <div className='cuadro-botones-Radiofonista'>
        <button
          type='button'
          className='btn btn-outline-success btn-Radiofonista'
          onClick={() => goToTestHandler('Preguntas/RADIOFONISTA TEST/RADIOFONISTA – TEST – 1.js')}>
          TEST 1 RADIOFONISTA
        </button>
        <br></br>
        <button
          type='button'
          className='btn btn-outline-success btn-Radiofonista'
          onClick={() => goToTestHandler('Preguntas/RADIOFONISTA TEST/RADIOFONISTA – TEST – 2.js')}>
          TEST 2 RADIOFONISTA
        </button>
      </div>
      <br></br>
      <div className='cuadro-botones-Radiofonista'>
        <button
          type='button'
          className='btn btn-outline-success btn-Radiofonista'
          onClick={() => goToTestHandler('Preguntas/RADIOFONISTA TEST/RADIOFONISTA – TEST – 3.js')}>
          TEST 3 RADIOFONISTA
        </button>
        <br></br>
        <button
          type='button'
          className='btn btn-outline-success btn-Radiofonista'
          onClick={() => goToTestHandler('Preguntas/RADIOFONISTA TEST/RADIOFONISTA – TEST- 4.js')}>
          TEST 4 RADIOFONISTA
        </button>
      </div>
      <br></br>
      <div className='cuadro-botones-Radiofonista'>
        <button
          type='button'
          className='btn btn-outline-success btn-Radiofonista'
          onClick={() => goToTestHandler('Preguntas/RADIOFONISTA TEST/RADIOFONISTA – TEST- 5.js')}>
          TEST 5 RADIOFONISTA
        </button>
      </div>
      <br></br>
      <br></br>
      <div className='container-pdf'>
        <div>
          <a href='/PdfRadiofonistUno'>
            <img className='Pdf' src={imgPdf} alt=''></img>
          </a>
          <br></br>
          <br></br>
          <p className='titulo-pdf-RDF'>Libro Radiofonista Uno</p>
        </div>
        <div>
          <a href='/PdfRadiofonistUno'>
            <img className='Pdf' src={imgPdf} alt=''></img>
          </a>
          <br></br>
          <br></br>
          <p className='titulo-pdf-RDF'>Libro Radiofonista Dos</p>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Radiofonista;
