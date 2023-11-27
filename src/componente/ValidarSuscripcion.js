import React, {useState} from "react";
import Axios from "axios";
import '../hojas estilo/ValidarSuscripcion.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function ValidarSuscripcion(){

	const [Cedula,setCedula] = useState("");
    const operacion= "ValidarSuscripcion";

        const ValSuscripcion = (e) => {
            if (Cedula === "") {
                alert("POR FAVOR INGRESE EL DOCUMENTO DE IDENTIDAD")
            } else{
                e.preventDefault();
                Axios.post("https://3a8l1pkdzc.execute-api.us-east-2.amazonaws.com/prod/AeronauticaDos", {
                operacion: operacion,
                Cedula: Cedula,
                }).then((response) => {
                    console.log(response);
                    if(response.data.message){
                        alert(response.data.message);
                        if(response.data.suscripcion === 'Activo'){
                            window.location.href="./suscripcionActiva";
                        }else{
                            if(response.data.suscripcion === 'Inactivo'){
                                window.location.href="./suscripcionInactiva";
                            }
                        }
                
                    }else{
                        alert('PARECE QUE EXISTEUN PROBLEMA CON LA VERIFICACION DE LA SUSCRIPCION');
                    }
                })
            }
        }

  return(
    <div className="container_general_ValidarSuscripcion">
    <div className="Container_Principal_ValidarSuscripcion">
      <div className="Container_Secundario_ValidarSuscripcion">
      <div className='form-group'>
            <h4 className="titulo_login_ValidarSuscripcion"><strong>VALIDAR SUSCRIPCION CLIENTE</strong></h4>
            <br/>
            <label  className='Letras_Usuario_ValidarSuscripcion' htmlFor="username">Documento</label>
            <br/>
            <input className="textInput_ValidarSuscripcion" type="text" name="username" onChange={(e) => {setCedula(e.target.value)}} placeholder="Ingrese el documento de identidad" required />
            <br/>
            <br/>
            <button className='btn btn-primary bnt-boton' type="submit" onClick={ValSuscripcion} value="Login">VALIDAR</button>
            <br></br>
          </div>
      </div>
    </div>
    </div>
  );
}

export default ValidarSuscripcion;