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