import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../componente/LoginAero';
import Principal from '../componente/Principal';
import Quiz from '../componente/Quiz';
import QuizRespuestas from '../componente/QuizRespuestas';
import Seleccion from '../componente/Seleccion';
import Contruccion from '../componente/contruccion';
import ListaULM from '../componente/ListaULM';
import PdfULM from '../componente/PdfULM';
import ListaPPL from '../componente/ListaPPL';
import SeleccionQuiz from '../componente/SeleccionQuiz';
import Activa from '../componente/Activa';
import Noentra from '../componente/Noentra';
import Pasarela from '../componente/Pasarela';
import SeleccionAdm from '../componente/SeleccionAdm';
import ActualizarCliente from '../componente/ActualizarCliente';
import ValidarSuscripcion from '../componente/ValidarSuscripcion';
import SuscripcionActiva from '../componente/SuscripcionActiva';
import SuscripcionInactiva from '../componente/SuscripcionInactiva';
import EliminarCliente from '../componente/EliminarCliente';
import BaseDatos from '../componente/ListarBase';

// LISTA UML
import Actuaciones from '../componente ULM/Actuaciones';
import Conocimiento from '../componente ULM/Conocimiento';
import DerechoAereo from '../componente ULM/DerechoAereo';
import Factores from '../componente ULM/Factores';
import General from '../componente ULM/General';
import Meteorologia from '../componente ULM/Meteorologia';
import Navegacion from '../componente ULM/Navegacion';
import PrincipioVuelo from '../componente ULM/PrincipioVuelo';
import ProcedimientosOperacionales from '../componente ULM/ProcedimientosOperacionales';
import Radiofonista from '../componente ULM/Radiofonista';
import PdfRadiofonistaUno from '../componente ULM/PdfRadiofonistaUno';
import PdfRadiofonistaDos from '../componente ULM/PdfRadiofonistaDos';
// LISTA PPL
import Comunicaciones from '../componente PPL/Comunicaciones';
import ConocimientosGenerales from '../componente PPL/ConocimientosGenerales';
import FactoresHumanos from '../componente PPL/FactoresHumanos';
import LegislacionAerea from '../componente PPL/LegislacionAerea';
import Metereologia from '../componente PPL/Metereologia';
import NavegacionAerea from '../componente PPL/NavegacionAerea';
import Performance from '../componente PPL/Performance';
import PrincipioVueloPPL from '../componente PPL/PrincipioVueloPPL';
import ProcedimientosOperacionalesPPL from '../componente PPL/ProcedimientosOperacionalesPPL';

import Cookies from 'universal-cookie';
import ProtectedRoute from '../utils/ProtectedRoute';
import ProtectedRouteDos from '../utils/ProtectedRouteDos';
import ProtectedRouteTres from '../utils/ProtectedRouteTres';
import ProtectedRouteCuatro from '../utils/ProtectedRouteCuatro';
import ProtectedRouteCinco from '../utils/ProtectedRouteCinco';

const cookies = new Cookies();


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouteDos canActivate={!cookies.get('Correo')}/>}>
          <Route exact path="/" element={<Principal />} />
        </Route>
        <Route element={<ProtectedRouteDos canActivate={!cookies.get('Correo')}/>}>
          <Route exact path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route exact path="/quiz" element={<Quiz />} />    
        </Route>
        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route exact path="/quizRespuesta" element={<QuizRespuestas />} />    
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/seleccion" element={<Seleccion />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route element={<ProtectedRouteCinco canActivate={cookies.get('Roles')}/>}> 
              <Route exact path="/eliminar" element={<EliminarCliente />} />    
            </Route>
          </Route>
        </Route>
    
        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route element={<ProtectedRouteCinco canActivate={cookies.get('Roles')}/>}>
              <Route exact path="/validarSuscripcion" element={<ValidarSuscripcion />} />    
            </Route>
          </Route>
        </Route>
       
        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route element={<ProtectedRouteCinco canActivate={cookies.get('Roles')}/>}> 
              <Route exact path="/suscripcionActiva" element={<SuscripcionActiva />} />    
            </Route>
          </Route>
        </Route>
        
        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route element={<ProtectedRouteCinco canActivate={cookies.get('Roles')}/>}>
              <Route exact path="/suscripcionInactiva" element={<SuscripcionInactiva />} />    
            </Route>
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route element={<ProtectedRouteCinco canActivate={cookies.get('Roles')}/>}>
              <Route exact path="/actualizarCliente" element={<ActualizarCliente />} />    
            </Route>
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route element={<ProtectedRouteCinco canActivate={cookies.get('Roles')}/>}>
              <Route exact path="/BaseDatos" element={<BaseDatos />} />    
            </Route>
          </Route>
        </Route>



        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route element={<ProtectedRouteCinco canActivate={cookies.get('Roles')}/>}>
              <Route exact path="/seleccionAdm" element={<SeleccionAdm />} />    
            </Route>
          </Route>
        </Route>



        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/activa" element={<Activa />} />    
          </Route>
        </Route>
        


        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteCuatro canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/noentra" element={<Noentra />} />  
          </Route>
        </Route>
        


        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
            <Route exact path="/pasarela" element={<Pasarela />} />    
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}> 
            <Route exact path="/contruccion" element={<Contruccion />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}> 
            <Route exact path="/listaULM" element={<ListaULM />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}> 
            <Route exact path="/PdfULM" element={<PdfULM />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}> 
            <Route exact path="/SeleccionQuiz" element={<SeleccionQuiz />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}> 
            <Route exact path="/listaPPL" element={<ListaPPL />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/actuaciones" element={<Actuaciones />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/conocimiento" element={<Conocimiento />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/derechoAerero" element={<DerechoAereo />} />    
         </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/factores" element={<Factores />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/general" element={<General />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/meteorologia" element={<Meteorologia />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/navegacion" element={<Navegacion />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/principioVuelo" element={<PrincipioVuelo />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/procedimientosOperacionales" element={<ProcedimientosOperacionales />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/radiofonista" element={<Radiofonista />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/PdfRadiofonistUno" element={<PdfRadiofonistaUno />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/PdfRadiofonistDos" element={<PdfRadiofonistaDos />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/comunicaciones" element={<Comunicaciones />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/conocimientosGenerales" element={<ConocimientosGenerales />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/factoresHumanos" element={<FactoresHumanos />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/legislacionAerea" element={<LegislacionAerea />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/metereologia" element={<Metereologia />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/navegacionAerea" element={<NavegacionAerea />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/performance" element={<Performance />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/principioVueloPPL" element={<PrincipioVueloPPL />} />    
          </Route>
        </Route>

        <Route element={<ProtectedRoute canActivate={cookies.get('Correo')}/>}>
          <Route element={<ProtectedRouteTres canActivate={cookies.get('Suscripcion')}/>}>
            <Route exact path="/procedimientosOperacionalesPPL" element={<ProcedimientosOperacionalesPPL />} />    
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
 