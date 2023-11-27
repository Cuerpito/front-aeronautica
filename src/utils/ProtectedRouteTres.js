import { Navigate, Outlet } from "react-router-dom";
 
const ProtectedRouteTres = ({
    canActivate,
    redirectPath='/noentra'
}) => {
    if (canActivate === 'Inactivo'){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default ProtectedRouteTres