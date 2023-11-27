import React, {useState} from "react";
import Axios from "axios";
import '../hojas estilo/SuscripcionInactiva.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function SuscripcionInactiva(){

    const opSuscripcion = [
        {label: "Seleccione", value: 1},
        {label: "Activo", value: "Activo"},
    ]

	const [Cedula,setCedula] = useState("");
    const [Suscripcion,setSuscripcion] = useState("");
    const [Fecha_Caducidad,setFecha_Caducidad] = useState("");
    const operacion= "actualizarSuscripcionInactiva";

        const suscripInactiva = (e) => {
            if (Cedula === "" || Suscripcion === "" || Suscripcion === "1") {
                alert("POR FAVOR INGRESE TODOS LOS DATOS")
            } else{
                e.preventDefault();
                Axios.post("https://3a8l1pkdzc.execute-api.us-east-2.amazonaws.com/prod/AeronauticaDos", {
                operacion: operacion,
                Suscripcion: Suscripcion,
                Cedula: Cedula,
                Fecha_Caducidad: Fecha_Caducidad,
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
    <div className="container_general_SuscripcionInactiva">
    <div className="Container_Principal_SuscripcionInactiva">
      <div className="Container_Secundario_SuscripcionInactiva">
      <div className='form-group'>
            <h4 className="titulo_login_SuscripcionInactiva"><strong>SU SUSCRIPCION SE ENCUENTRA INACTIVA</strong></h4>
            <br />
            <h4 className="titulo_login_SuscripcionActiva"><strong>PARA ACTIVAR SUSCRIPCION LLENE LA INFORMACION</strong></h4>
            <br />
            <label  className='Letras_Usuario_SuscripcionInactiva' htmlFor="username">Documento</label>
            <br/>
            <input className="textInput_SuscripcionInactiva" type="text" name="username" onChange={(e) => {setCedula(e.target.value)}} placeholder="Ingrese el documento de identidad" required />
            <br/>
            <br/>
            <select className="form-select_SuscripcionInactiva" onChange={(e) => {setSuscripcion(e.target.value)}}>
              {opSuscripcion.map(option => (
                  <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <br/>
            <br/>
            <input className="form-select_SuscripcionInactiva" type="date" name="password" onChange={(e) => {setFecha_Caducidad(e.target.value)}} placeholder="Ingrese la fecha de caducidad" required />
            <br/>
            <br/>
            <button className='btn btn-primary' type="submit" onClick={suscripInactiva} value="Login">ACTUALIZAR</button>
            <br></br>
          </div>
      </div>
    </div>
    </div>
  );
}

export default SuscripcionInactiva;