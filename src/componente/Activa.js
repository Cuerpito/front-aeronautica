import React from 'react';
import '../hojas estilo/Activa.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function SuscripcionActiva() {

  const continuar=()=>{
    //alert(`Bienvenido ${cookies.get('Roles')}: ${cookies.get('Nombre')}`);
    if (cookies.get('Roles') === "Cliente") {
        window.location.href="./seleccion";
    }else{
        window.location.href="./seleccionAdm";
    }        
  }
  

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
      <div className='general-SuscripcionActiva'>
        <div className="parrafos-SuscripcionActiva">
          <p>EN HORA BUENA!! SU SUSCRIPCION SE ENCUENTRA ACTIVA</p>
        </div>
        <div className="cuadro-botones-SuscripcionActiva">
            <button type="button" className="btn btn-outline-primary btn-SuscripcionActiva" onClick={continuar}>CONTINUAR</button>
            <button type="button" className="btn btn-outline-primary btn-SuscripcionActiva" onClick={CerrarSesion}>CERRAR SESION</button>
        </div>
        <br></br>
      </div> 
  );
}

export default SuscripcionActiva;