import axios from 'axios';
import { urlBaseAuth } from '../defaultValues';

const base = urlBaseAuth;


export const authLogin = (dataUser, dataPass) => {
    const data = {
        user: dataUser,
        password: dataPass,
    };

    return axios.post(`${base}/login`, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
