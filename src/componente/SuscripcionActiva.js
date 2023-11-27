import React, {useState} from "react";
import Axios from "axios";
import '../hojas estilo/SuscripcionActiva.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function SuscripcionActiva(){

    const opSuscripcion = [
        {label: "Seleccione", value: 1},
        {label: "Inactivo", value: "Inactivo"},
    ]

	const [Cedula,setCedula] = useState("");
    const [Suscripcion,setSuscripcion] = useState("");
    const operacion = "actualizarSuscripcionActiva";

        const suscripActiva = (e) => {
            if (Cedula === "" || Suscripcion === "" || Suscripcion === "1") {
                alert("POR FAVOR INGRESE TODOS LOS DATOS")
            } else{
                e.preventDefault();
                Axios.post("https://3a8l1pkdzc.execute-api.us-east-2.amazonaws.com/prod/AeronauticaDos", {
                operacion: operacion,
                Suscripcion: Suscripcion,
                Cedula: Cedula,
                }).then((response) => {
                    console.log(response);
                    if(response.data.message){
                        alert(response.data.message);
                        //window.location.href="./";
                    }else{
                        alert('PARECE QUE EXISTEUN PROBLEMA CON LA ACTUALIZACION DE LA SUSCRIPCION');
                    }
                })
            }
        }

  return(
    <div className="container_general_SuscripcionActiva">
    <div className="Container_Principal_SuscripcionActiva">
      <div className="Container_Secundario_SuscripcionActiva">
      <div className='form-group'>
            <h4 className="titulo_login_SuscripcionActiva"><strong>SU SUSCRIPCION SE ENCUENTRA ACTIVA</strong></h4>
            <br />
            <h4 className="titulo_login_SuscripcionActiva"><strong>PARA INACTIVAR SUSCRIPCION LLENE LA INFORMACION</strong></h4>
            <br />
            <label  className='Letras_Usuario_SuscripcionActiva' htmlFor="username">Documento</label>
            <br/>
            <input className="textInput_SuscripcionActiva" type="text" name="username" onChange={(e) => {setCedula(e.target.value)}} placeholder="Ingrese el documento de identidad" required />
            <br/>
            <br/>
            <select className="form-select_SuscripcionActiva" onChange={(e) => {setSuscripcion(e.target.value)}}>
              {opSuscripcion.map(option => (
                  <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <br/>
            <br/>
            <button className='btn btn-primary' type="submit" onClick={suscripActiva} value="Login">ACTUALIZAR</button>
            <br></br>
          </div>
      </div>
    </div>
    </div>
  );
}

export default SuscripcionActiva;