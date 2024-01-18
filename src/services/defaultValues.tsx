import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const urlBaseProductos = 'http://localhost:3000/productos';
export const urlBaseUsuarios = 'http://localhost:3000/usuarios';
export const urlBaseAuth = 'http://localhost:3000/usuarios/auth'

// Creamos el contexto
const UserRoleContext = createContext({ userRole: null, setUserRole: () => { } });

export const useUserRole = () => {
    return useContext(UserRoleContext);
};

export const UserRoleProvider = ({ children }) => {
    const [userRole, setUserRole] = useState();




    return (
        <UserRoleContext.Provider value={{ userRole, setUserRole }}>
            {children}
        </UserRoleContext.Provider>
    );
};

// Almacenar el token en el localStorage
export const userActivation = (token, role) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('authRole', role);
}
//Obtener token del localStorage
export const currentUser = () => {
    return localStorage.getItem('authToken');
}

export const currentRole = () => {
    return localStorage.getItem('authRole');
}

export const logoutUser = () => {
    localStorage.clear();
}

