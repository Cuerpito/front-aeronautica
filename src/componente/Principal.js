import React, { useState, useEffect } from 'react';
import Axios from "axios";
import '../hojas estilo/Principal.css';
import logoModoFitGym from '../img/Logo.jpg';
import imPieFit from '../img/Logo.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import im1 from '../img/imagen1.jpg';
import im2 from '../img/imagen2.jpg';
import im3 from '../img/imagen3.jpg';
import im4 from '../img/imagen4.jpg';
import im5 from '../img/imagen5.jpg';
import im6 from '../img/imagen6.jpg';
import im7 from '../img/imagen7.jpg';
import im8 from '../img/imagen8.jpg';


const Navbar = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const operacion = 'ActualizarAutomatica';
    const opcionesFecha = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    //const opciones = {
     // hour: 'numeric',
     // minute: 'numeric',
     // second: 'numeric',
     // hour12: true, // true para formato de 12 horas o false para formato de 24 horas
    //};

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualizar cada segundo
    console.log('corriendo');
    //const FechaActual = currentDate.toLocaleString(undefined, opcionesFecha);
    Axios.post("https://450dfy2taj.execute-api.us-east-2.amazonaws.com/prod/aeronautica", {
    operacion: operacion,
    Suscripcion: "Inactivo",
    FechaActual: currentDate,
    }).then((response) => {
        console.log(response);
        if(response.data.message){
          
        }else{
            alert('PARECE QUE EXISTE UN PROBLEMA CON LA ACTUALIZACION AUTOMATICA');
        }
    })
    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
    
  }, []);

    return(
        <div className="container-general">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
             <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={logoModoFitGym} className="imFit" alt="..."></img>
                    <span className="text-warning"> ESCUELA DE AVIADORES</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blog</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Servicios
                            </a>
                            <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Servicio 1</a></li>
                                <li><a className="dropdown-item" href="/">Servicio 2</a></li>  
                                <li><a className="dropdown-item" href="/">Servicio 3</a></li>  
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Planes
                            </a>
                            <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Plan 1</a></li>
                                <li><a className="dropdown-item" href="/">Plan 2</a></li>  
                            </ul>
                        </li>
                    </ul>

                    <hr className="d-md-none text-white-50"></hr>

                    <ul className="navbar-nav  flex-row flex-wrap text-light">
                    <a href="https://api.whatsapp.com/send/?phone=34697417495&text&type=phone_number&app_absent=0">
                        <li className="nav-item col-6 col-md-auto p-3">
                            <i className="fa fa-whatsapp"></i>
                            <small className="d-md-none ms-2">Whatsapp</small>  
                        </li>
                        </a>
                        <a href="https://www.instagram.com/escueladeaviadores/">
                        <li className="nav-item col-6 col-md-auto p-3">
                            <i className="fa fa-instagram"></i>
                            <small className="d-md-none ms-2">Instagram</small> 
                        </li>
                        </a>  
                        <a href="https://www.youtube.com/channel/UCw5YdGUBgcmf45NEMnbQmpA">
                        <li className="nav-item col-6 col-md-auto p-3">
                            <i className="fa fa-youtube"></i>
                            <small className="d-md-none ms-2">Youtube</small>  
                        </li>
                        </a>          
                        <a href="https://www.facebook.com/escueladeaviadores/">
                        <li className="nav-item col-6 col-md-auto p-3">
                            <i className="fa fa-facebook"></i>
                            <small className="d-md-none ms-2">Facebook</small>
                        </li>
                        </a>    
                    </ul>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="/login">
                            <button className="btn btn-primary me-md-2" type="button">Inicio Sesion</button>
                        </a>
                    </div>
                </div>
             </div>
        </nav>
        
    <div className='conta'>
        <div className="box1">
          <span style={{ '--i':1 }}><img src={im1} alt=""></img></span>
          <span style={{ '--i':2 }}><img src={im2} alt=""></img></span>
          <span style={{ '--i':3 }}><img src={im3} alt=""></img></span>
          <span style={{ '--i':4 }}><img src={im4} alt=""></img></span>
          <span style={{ '--i':5 }}><img src={im5} alt=""></img></span>
          <span style={{ '--i':6 }}><img src={im6} alt=""></img></span>
          <span style={{ '--i':7 }}><img src={im7} alt=""></img></span>
          <span style={{ '--i':8 }}><img src={im8} alt=""></img></span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='Escritos'>
        <h1>EL MAYOR BANCO DE PREGUNTAS PARA EL EXAMEN ULM</h1>
        <p>Si quieres conseguir la titulacion para ser piloto de ultraligera, Aqui tenemos el mayor banco de preguntas en español. Todas las preguntas las hemos ido incorporando a lo largo de los años a base de los exmanenes que han ido realizando en AESA nuestros alumnos. Al mejor precio</p>
        <h2>LA MAYOR BASE DE DATOS DE ESPAÑA CON MAS DE 7.000 PREGUNTAS</h2>
        </div>
    </div>

        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="/">
                            <img src={imPieFit} alt="Logo de SLee Dw"></img>
                        </a>
                    </figure>
                </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                   <p>Aeródromo de Villacastín Eduardo Castellanos. La actividad Aérea más vendida en España.</p>
                </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                   <div className="red-social">
                        <a href="https://api.whatsapp.com/send/?phone=34697417495&text&type=phone_number&app_absent=0" className="fa fa-whatsapp"></a>
                        <a href="https://www.instagram.com/escueladeaviadores/" className="fa fa-instagram"></a>
                        <a href="https://www.youtube.com/channel/UCw5YdGUBgcmf45NEMnbQmpA" className="fa fa-youtube"></a>
                        <a href="https://www.facebook.com/escueladeaviadores/" className="fa fa-facebook"></a>
                    </div>
            </div>
            </div>
                <div className="grupo-2">
                    <small>&copy; 2023 <b>ESCUELA DE AVIADORES</b> - Todos los Derechos Reservados.</small>
             </div>
        </footer>

    </div>
    )
}

export default Navbar