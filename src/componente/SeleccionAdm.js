import React from 'react';
import '../hojas estilo/SeleccionAdm.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function SeleccionAdm() {

  const CerrarSesion=()=>{
    cookies.remove('Id', {path: "/"});
    cookies.remove('Correo', {path: "/"});
    cookies.remove('Contraseña', {path: "/"});
    cookies.remove('Suscripcion', {path: "/"});
    cookies.remove('Roles', {path: "/"});
    cookies.remove('Nombre', {path: "/"});
    window.location.href='./';
  } 

    return (
      <div className='general-SeleccionAdm'>
        <div className="parrafos-SeleccionAdm">
          <p>ADMINISTRACION DE LA BASE</p>
        </div>
        <div className="cuadro-botones-SeleccionAdm">
            <a href="/validarSuscripcion">
                <button type="button" className="btn btn-outline-primary btn-SeleccionAdm">ACTUALIZAR SUSCRIPCION</button>
            </a>       
            <a href="/actualizarCliente">
                <button type="button" className="btn btn-outline-primary btn-SeleccionAdm">ACTUALIZAR CLIENTE</button>
            </a>  
        </div>
        <br></br>
        <br></br>
        <div className="cuadro-botones-SeleccionAdm">     
            <a href="/eliminar">
                <button type="button" className="btn btn-outline-primary btn-SeleccionAdm">ELIMINAR CLIENTE</button>
            </a>
            <a href="/seleccion">
                <button type="button" className="btn btn-outline-primary btn-SeleccionAdm">EXAMEN</button>
            </a>    
        </div>
        <br></br>
        <br></br>
        <div >     
            <a href="/BaseDatos">
                <button type="button" className="btn btn-outline-primary btn-SeleccionAdm">MOSTRAR BASE</button>
            </a>  
        </div>
        <br></br>
        <br></br>
        <div>     
            <a href="/eliminar">
                <button type="button" className="btn btn-outline-primary btn-CerrarAdm" onClick={CerrarSesion}>CERRAR SESION</button>
            </a>  
        </div>
        <br></br>
      </div> 
  );
}

export default SeleccionAdm;