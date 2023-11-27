import React from "react";
import "../hojas estilo/Seleccion.css";
import "bootstrap/dist/css/bootstrap.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Seleccion() {
  const CerrarSesion = () => {
    cookies.remove("Id", { path: "/" });
    cookies.remove("Correo", { path: "/" });
    cookies.remove("Contraseña", { path: "/" });
    cookies.remove("Suscripcion", { path: "/" });
    cookies.remove("Roles", { path: "/" });
    cookies.remove("Nombre", { path: "/" });
    window.location.href = "./";
  };

  return (
    <div className="general-seleccion">
      <div className="parrafos">
        <p> ESCUELA DE AVIADORES</p>
        <p>EL MAYOR BANCO DE PREGUNTAS PARA EL EXAMEN ULM</p>
        <p>SELECCIONE EL CUESTIONARIO DE SU PREFERENCIA</p>
      </div>
      <div className="cuadro-botones">
        <a href="/listaULM">
          <button className="btn btn-outline-primary btn-botonSele">
            TEST ULM
          </button>
        </a>
        <a href="/listaPPL">
          <button className="btn btn-outline-primary btn-botonSele">
            TEST PPL
          </button>
        </a>
      </div>
      <br></br>
      <button
        className="btn btn-dark seleccion"
        type="submit"
        onClick={CerrarSesion}
      >
        CERRAR SESION
      </button>
    </div>
  );
}

export default Seleccion;
