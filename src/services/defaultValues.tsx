export const urlBaseProductos = 'http://localhost:3000/productos';
export const urlBaseUsuarios = 'http://localhost:3000/usuarios';
export const urlBaseAuth = 'http://localhost:3000/usuarios/auth';

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

