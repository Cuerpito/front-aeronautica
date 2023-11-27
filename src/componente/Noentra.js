import React from 'react';
import '../hojas estilo/Noentra.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function SuscripcionInactiva() {

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
      <div className='general-SuscripcionInactiva'>
        <div className="parrafos-SuscripcionInactiva">
          <p>UPS!! SU SUSCRIPCION ESTA INACTIVA</p>
        </div>
        <div className="cuadro-botones-SuscripcionInactiva">
          <a href="/pasarela">
            <button type="button" className="btn btn-outline-primary btn-SuscripcionInactiva">PAGAR SUSCRIPCION</button>
          </a>       
            <button type="button" className="btn btn-outline-primary btn-SuscripcionInactiva" onClick={CerrarSesion}>CERRAR SESION</button>
        </div>
        <br></br>
      </div> 
  );
}

export default SuscripcionInactiva;