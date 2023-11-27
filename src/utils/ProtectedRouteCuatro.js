import { Navigate, Outlet } from "react-router-dom";
 
const ProtectedRouteCuatro = ({
    canActivate,
    redirectPath='/activa'
}) => {
    if (canActivate === 'Activo'){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default ProtectedRouteCuatro