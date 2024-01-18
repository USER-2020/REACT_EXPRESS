import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ userRole, allowedRole, children }) => {
    if (!userRole || userRole !== allowedRole) {
        console.log("Redirigiendo a la página no autorizada...");
        return <Navigate to="/unauthorized" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
