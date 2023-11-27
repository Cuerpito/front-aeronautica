import { Navigate, Outlet } from "react-router-dom";
 
const ProtectedRouteDos = ({
    canActivate,
    redirectPath='/seleccion'
}) => {
    if (!canActivate){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default ProtectedRouteDos