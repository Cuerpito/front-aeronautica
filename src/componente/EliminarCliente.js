import React, {useState} from "react";
import Axios from "axios";
import '../hojas estilo/EliminarCliente.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function FuncionEliminar(){
  
	const [Cedula,setCedula] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [loginStatusDos, setLoginStatusDos] = useState("");
    const operacion= "eliminar";

        const EliminarCli = (e) => {
            if (Cedula === "") {
                alert("POR FAVOR INGRESE EL NUMERO DE CEDULA")
            } else{
                e.preventDefault();
                Axios.post("https://450dfy2taj.execute-api.us-east-2.amazonaws.com/prod/aeronautica", {
                operacion: operacion,
                Cedula: Cedula,
                }).then((response) => {
                    console.log(response);
                    if(response.data.message){
                        if(response.data.message === "CLIENTE FUE ELIMINADO CON EXITO") {
                            setLoginStatusDos("");
                            setLoginStatus(response.data.message);
                        }else{
                            setLoginStatus("");
                            setLoginStatusDos(response.data.message);
                        }
                    }else{
                        alert('PARECE QUE EXISTE UN PROBLEMA CON LA ELIMINACION DE CLIENTE');
                    }
                })
            }
        }

  return(
    <div className="container_general_eliminar">
    <div className="Container_Principal_eliminar">
      <div className="Container_Secundario_eliminar">
      <div className='form-group'>
            <h4 className="titulo_login_eliminar"><strong>ELIMINAR CLIENTE</strong></h4>
            <br />
            <label  className='Letras_Usuario_eliminar' htmlFor="username">Documento</label>
            <br/>
            <input className="textInput_eliminar" type="text" name="username" onChange={(e) => {setCedula(e.target.value)}} placeholder="Ingrese el numero de documento" required />
            <br/>
            <br/>
            <h1 style={{color: 'green', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
            <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatusDos}</h1>
            <button className='btn btn-primary' type="submit" onClick={EliminarCli} value="Login">ELIMINAR</button>
            <br></br>
          </div>
      </div>
    </div>
    </div>
  );
}

export default FuncionEliminar;