import axios from 'axios';
import { currentUser, urlBaseUsuarios } from '../defaultValues';


const base = urlBaseUsuarios;
const token = currentUser();

//Traer todos los usuarios
export const getAllUsers = () =>
    axios.get(`${base}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });