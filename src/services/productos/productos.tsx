import axios from "axios";
import { urlBaseProductos } from "../defaultValues";

const base = urlBaseProductos;

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
    console.log('FormData:', formData); // Agrega este log para verificar formData
    return axios.post(`${base}/add`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
};
