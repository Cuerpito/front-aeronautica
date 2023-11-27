import React, {useState} from "react";
import Axios from "axios";
import '../hojas estilo/ActualizarCliente.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function FuncionActualizarCliente(){
  
	const [Nombre,setNombre] = useState(""); 
  	const [Apellido,setApellido] = useState(""); 
    const [Cedula,setCedula] = useState("");
	const [Correo,setCorreo] = useState("");
    const [Contraseña,setContraseña] = useState("");  
	const [Telefono,setTelefono] = useState(""); 
    const operacion= "actualizarCliente";



  const actualizarCliente = (e) => {
    if (Nombre === "" || Apellido === ""|| Cedula === "" ||Correo === "" || Contraseña === "" || Telefono === "") {
		alert("LOS CAMPOS NO HAN SIDO INGRESADOS")
	} else{
            Axios.post("https://450dfy2taj.execute-api.us-east-2.amazonaws.com/prod/aeronautica", {
                operacion: operacion,
                Nombre: Nombre,
                Apellido: Apellido,
                Cedula: Cedula,
                Correo: Correo,
                Contraseña: Contraseña,
                Telefono: Telefono,
            }).then((response) => {
            console.log(response);
               if(response.data.message){
                    alert(response.data.message);
                }else{
                    alert('AL PARECER HAY UN PROBLEMA CON LA ACTUALIZACION DEL CLIENTE');
                }
            })
  }
  }

  return(
    <div className="container_general_ActualizarCliente">
    <div className="Container_Principal_ActualizarCliente">
      <div className="Container_Secundario_ActualizarCliente">
      <div className='form-group'>
      <h4 className="titulo_login_ActualizarClienteTitulo"><strong>DOCUMENTOS DEL CLIENTE</strong></h4>
            <label  className='Letras_ActualizarCliente' htmlFor="username">Documento</label>
            <br/>
            <input className="textInputFun" type="text" name="username" onChange={(e) => {setCedula(e.target.value)}} placeholder="Ingrese el documento de identidad" required />
            <br/>
            <h4 className="titulo_login_ActualizarCliente"><strong>INGRESE INFORMACION A ACTUALIZAR</strong></h4>
            <label  className='Letras_ActualizarCliente' htmlFor="username">Nombre</label>
            <br/>
            <input className="textInputFun" type="text" name="username" onChange={(e) => {setNombre(e.target.value)}} placeholder="Ingrese su nombre" required />
            <br/>
            <label className='Letras_ActualizarCliente' htmlFor="password">Apellido</label>
            <br/>
            <input className="textInputFun" type="text" name="password" onChange={(e) => {setApellido(e.target.value)}} placeholder="Ingrese su apellido" required />
            <br/>
            <label className='Letras_ActualizarCliente' htmlFor="password">Correo</label>
            <br/>
            <input className="textInputFun" type="email" name="password" onChange={(e) => {setCorreo(e.target.value)}} placeholder="Ingrese su correo electronico" required />
            <br/>
            <label className='Letras_ActualizarCliente' htmlFor="password">Contraseña</label>
            <br/>
            <input className="textInputFun" type="text" name="password" onChange={(e) => {setContraseña(e.target.value)}} placeholder="Ingrese la contraseña" required />
            <br/>
            <label className='Letras_ActualizarCliente' htmlFor="password">Telefono</label>
            <br/>
            <input className="textInputFun" type="text" name="password" onChange={(e) => {setTelefono(e.target.value)}} placeholder="Ingrese su numero de telefono" required />
            <br/>
            <br/>
            <button className='btn btn-primary' type="submit" onClick={actualizarCliente} value="Login">Actualizar</button>
            <br></br>
          </div>
      </div>
    </div>
    </div>
    );
}

export default FuncionActualizarCliente;