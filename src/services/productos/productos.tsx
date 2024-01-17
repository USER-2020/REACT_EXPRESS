import axios from "axios";
import { currentUser, urlBaseProductos } from "../defaultValues";

const base = urlBaseProductos;
const token = currentUser();

// Traer todos los productos con paginación
export const getAllProducts = (page, pageSize) =>
    axios.get(`${base}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            page,
            pageSize,
        },
    });

//Agregar producto
export const addProducts = (formData) => {
    return axios.post(`${base}/add`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        }
    });
};

//traer producto por id
export const productById = (id) =>
    axios.get(`${base}/searchId/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

//Actualizar producto
export const updateProduct = (id, formData) => {
    return axios.put(`${base}/update/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        }
    });
}

//Eliminar productos
export const deleteProduct = (id) =>
    axios.delete(`${base}/delete/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

