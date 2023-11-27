import React, {useState} from "react";
import '../hojas estilo/LoginAero.css';
import Axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


function Login() {
  const [Nombre,setNombre] = useState("");
  const [Apellido,setApellido] = useState("");
  const [Correo,setCorreo] = useState("");
  const [Cedula,setCedula] = useState("");
  const [CorreoLogin,setCorreoLogin] = useState("");
  const [Contraseña,setContraseña] = useState("");
  const [ContraseñaLogin,setContraseñaLogin] = useState("");
  const [Telefono,setTelefono] = useState("");
  const operacionLogin = "login";
  const operacionRegister = "register";

  const add = ()=>{
    const formRegister= document.querySelector(".register"),
          formLogin= document.querySelector(".login");
          formRegister.classList.add("hide");
          formLogin.classList.remove("hide");
  }

  const udd = ()=>{
    const formRegister= document.querySelector(".register"),
          formLogin= document.querySelector(".login");
          formLogin.classList.add("hide");
          formRegister.classList.remove("hide");
  }


  const login = (e) => {
  if (CorreoLogin === "" || ContraseñaLogin === "") {
		alert("LOS CAMPOS NO HAN SIDO INGRESADOS EN SU TOTALIDAD")
	  } else{
      Axios.post("https://450dfy2taj.execute-api.us-east-2.amazonaws.com/prod/aeronautica", {
      operacionLogin: operacionLogin,
      CorreoLogin: CorreoLogin,
      ContraseñaLogin: ContraseñaLogin,
      }).then((response) => {
        console.log(response);
          if(response.data.message){
            //alert(response.data.message);
            if(response.data.message === 'USUARIO FUE ENCONTRADO CON EXITO'){
              if(response.data.content.Suscripcion === 'Activo'){
                window.location.href="./activa";
                cookies.set('Id', response.data.content.Id, {path: "/"});
                cookies.set('Correo', response.data.content.Correo, {path: "/"});
                cookies.set('Contraseña', response.data.content.Contraseña, {path: "/"});
                cookies.set('Suscripcion', response.data.content.Suscripcion, {path: "/"});
                cookies.set('Roles', response.data.content.Roles, {path: "/"});
                cookies.set('Nombre', response.data.content.Nombre, {path: "/"});
              }else{
                window.location.href="./noentra";
                cookies.set('Id', response.data.content.Id, {path: "/"});
                cookies.set('Correo', response.data.content.Correo, {path: "/"});
                cookies.set('Contraseña', response.data.content.Contraseña, {path: "/"});
                cookies.set('Suscripcion', response.data.content.Suscripcion, {path: "/"});
                cookies.set('Roles', response.data.content.Roles, {path: "/"});
                cookies.set('Nombre', response.data.content.Nombre, {path: "/"});
              }
            }else{
              window.location.href="./login";
            }
          }else{
            alert('AL PARECER HAY UN PROBLEMA CON EL INICIO DE SESION');
            window.location.href="./login";
          }
      })
    }
  }


  const register = (e) => {
    if (Nombre === "" || Apellido === "" || Cedula === ""|| Correo === "" || Contraseña === "" || Telefono === "") {
       alert("LOS CAMPOS NO HAN SIDO INGRESADOS EN SU TOTALIDAD")
       } else{
        Axios.post("https://450dfy2taj.execute-api.us-east-2.amazonaws.com/prod/aeronautica", {
        operacionRegister: operacionRegister,
        Nombre: Nombre,
        Apellido: Apellido,
        Cedula: Cedula,
        Correo: Correo,
        Contraseña: Contraseña,
        Telefono:Telefono,
         }).then((response) => {
           console.log(response);
             if(response.data.message){
               alert(response.data.message);
               window.location.href="./login";
             }else{
               alert('AL PARECER HAY UN PROBLEMA CON EL REGISTRO');
             }
         })
       }
     }


  return (
    <div className='general-login'>
    <div className='container-form-login register'>
     <div className='information-login'>
       <div className='info-childs-login'>
         <h2>Bienvenido !!! Ya tienes una cuenta Registrada</h2>
         <p>Haz clic en Iniciar Sesion e ingresa Correo y Contraseña</p>
         <input type='button' value="Iniciar Sesion" onClick={add} id='sign-in'></input>
       </div>
     </div>

     <div className='form-information-login'>
       <div className='form-information-childs-login'>
        <h2>Crear una Cuenta</h2>
         <p>Usa tu email para registrarte</p>
         <form className='form-login'>
           <label>
             <i className='bx bx-user'></i>
             <input type="text" onChange={(e) => {setNombre(e.target.value)}} placeholder='Nombre'></input>
           </label>
           <label>
             <i className='bx bx-user'></i>
             <input type="text" onChange={(e) => {setApellido(e.target.value)}} placeholder='Apellido'></input>
           </label>
           <label>
             <i className='bx bx-user' ></i>
             <input type='text' onChange={(e) => {setCedula(e.target.value)}} placeholder='Documento de Identidad'></input>
           </label>
           <label>
             <i className='bx bx-envelope' ></i>
             <input type='email' onChange={(e) => {setCorreo(e.target.value)}} placeholder='Correo Electronico'></input>
           </label>
           <label>
             <i className='bx bx-lock-alt' ></i>
             <input type='text' onChange={(e) => {setContraseña(e.target.value)}} placeholder='Contraseña'></input>
           </label>
           <label>
             <i class='bx bx-phone'></i>
             <input type='text' onChange={(e) => {setTelefono(e.target.value)}} placeholder='Telefono'></input>
           </label>
           <input className="botonLogin" onClick={register} value="Registrarse"></input>
         </form>
       </div>
     </div>
   </div>
    
    <div className='container-form-login login hide'>
    <div className='information-login'>
      <div className='info-childs-login'>
       <h2>Bienvenido !!!  Quieres Registrarte</h2>
       <p>Haz clic en Registrarse para diligenciar la informacion</p>
       <input type='button' value="Registrarse" onClick={udd} id='sign-up'></input>
      </div>
    </div>
    <div className='form-information-login'>
      <div className='form-information-childs-login'>
        <h2>Iniciar Sesion</h2>
        <p>Iniciar Sesion con una Cuenta</p>
        <form className='form-login'>
          <label>
            <i className='bx bx-envelope' ></i>
            <input type='email'  onChange={(e) => {setCorreoLogin(e.target.value)}} placeholder='Correo Electronico'></input>
          </label>
          <label>
            <i className='bx bx-lock-alt' ></i>
            <input type='password'  onChange={(e) => {setContraseñaLogin(e.target.value)}} placeholder='Contraseña'></input>
          </label>
          <input className="botonLogin" onClick={login} value="Iniciar Sesion"></input>
        </form>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Login;