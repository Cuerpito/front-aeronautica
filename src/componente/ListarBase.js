import React, {useState} from "react";
import { Button, Spinner } from "reactstrap";
import * as XLSX from "xlsx";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from 'react-data-table-component';
import moment from "moment";
import '../hojas estilo/ListarBase.css';

const columnas = [
    {   
        name: 'ID',
        selector: 'Id',
        sortable: true,
        grow:0.5
    },
    {   
        name: 'NOMBRE',
        selector: 'Nombre',
        sortable: true
    },
    {   
        name: 'APELLIDO',
        selector: 'Apellido',
        sortable: true
    },
    {   
        name: 'DNI',
        selector: 'Cedula',
        sortable: true,
    },
    {   
        name: 'CORREO',
        selector: 'Correo',
        sortable: true,
        grow:2
    },   
    {   
        name: 'CONTRASEÑA',
        selector: 'Contraseña',
        sortable: true
    },
    {   
        name: 'TELEFONO',
        selector: 'Telefono',
        sortable: true
    },
    {   
        name: 'SUSCRIPCION',
        selector: 'Suscripcion',
        sortable: true
    },
    {   
        name: 'ROLES',
        selector: 'Roles',
        sortable: true
    },
    {   
        name: 'FECHA SUSCRIPCION',
        selector: 'Fecha_Suscripcion',
        sortable: true
    },
    {   
        name: 'FECHA CADUCIDAD',
        selector: 'Fecha_Caducidad',
        sortable: true
    }
];


const paginacionOpciones={
    rowsPerPageText: 'Filas por Pagina',
    rangeSeparatorText:'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}


function FuncionListarRegistroBase() {
    const [Cedula,setCedula] = useState("");
    const [tablaDatos,setTablaDatos] = useState("");
    let NuevatablaDatos = [];
    const operacion = "consultarBase";
    var num = 0;

    
    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
        if (tablaDatos !== "") {
            setLoading(true);


            
            const libro = XLSX.utils.book_new();

            const hoja = XLSX.utils.json_to_sheet(tablaDatos);

            XLSX.utils.book_append_sheet(libro, hoja, "Base");

            setTimeout(() => {
                XLSX.writeFile(libro, "BaseDatosAeronautica.xlsx");
                setLoading(false);
            }, 1000);
        }else{
            alert("PRIMERO SE DEBE GENERAR LA BASE DE DATOS DE LOS PLANES")
        }
    };

    const consultar = (e) => {
        Axios.post("https://450dfy2taj.execute-api.us-east-2.amazonaws.com/prod/aeronautica", {
            operacion: operacion,
            }).then((response) => {
            console.log(response);
               if(response.data.message){
                    alert(response.data.message);
                    if (response.data.content.length>0) {
                        for (let step = 0; step < response.data.content.length; step++) {
                            response.data.content[step].Fecha_Suscripcion =  moment.utc(response.data.content[step].Fecha_Suscripcion).format('YYYY-MM-DD');
                            response.data.content[step].Fecha_Caducidad =  moment.utc(response.data.content[step].Fecha_Caducidad).format('YYYY-MM-DD');
                                if ( response.data.content[step].Cedula === Cedula) {
                                  num = num + 1;
                                  NuevatablaDatos.push( response.data.content[step]);
                                }
                        }
                    }
                    if(Cedula === "") {
                        setTablaDatos(response.data.content);
                    }else{
                        setTablaDatos(NuevatablaDatos);
                    }
                }else{
                    alert('AL PARECER HAY UN PROBLEMA CON LA GENERACION DE LA BASE DE DATOS');
                }
            })
        }


    return (    
        <div className='table-responsive'>
             <br></br>
            {!loading ? (
                    <Button className="btn btn-success btn-descargar" onClick={handleDownload}> Descargar Excel</Button>
                ) : (
                    <Button color="success" disabled>
                        <Spinner size="sm">Loading...</Spinner>
                        <span> Generando...</span>
                    </Button>
            )}
            <br></br>
            <br></br>
            <button className='btn btn-primary btn-base' type="submit" onClick={consultar} >GENERAR BASE DE DATOS</button>
            <br></br>
            <br></br>
            <label className='Letras_consulta' htmlFor="password">Documento para consultar</label>
            <br/>
            <input className="textInputFunConsulta" type="text" name="text" onChange={(e) => {setCedula(e.target.value)}} placeholder="Ingrese el documento de identidad" required />
            <br></br>
            <br></br>
            <DataTable
                columns={columnas}
                data={tablaDatos}
                title= 'REGISTRO BASE AERONAUTICA'
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight='600px'
            />
        </div>
        );
    }
    
export default FuncionListarRegistroBase;