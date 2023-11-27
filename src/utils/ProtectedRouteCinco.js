import { Navigate, Outlet } from "react-router-dom";
 
const ProtectedRouteCinco = ({
    canActivate,
    redirectPath='/seleccion'
}) => {
    if (canActivate === 'Cliente'){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default ProtectedRouteCinco