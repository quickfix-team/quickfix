import AxiosError from 'axios-error';
import axios from 'axios';

const config = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
});

export const sendGetProfile = async () => {
    const token = localStorage.getItem('token');

    const resp = async () => {
        const response = await config
            .get('/profiles', { headers: { Authorization: `Bearer ${token}` } })
            .catch(function (error) {
                const currentError = error as AxiosError;
                if (currentError.response) {
                    return currentError.response.data;
                }
            });
        return response;
    };

    const mensagem = await resp();
    return mensagem;
};

export const sendGetContact = async () => {
    const token = localStorage.getItem('token');

    const resp = async () => {
        const response = await config
            .get('/contacts', { headers: { Authorization: `Bearer ${token}` } })
            .catch(function (error) {
                const currentError = error as AxiosError;
                if (currentError.response) {
                    return currentError.response.data;
                }
            });
        return response;
    };

    const mensagem = await resp();
    return mensagem;
};

interface iDataContact {
    data: {
        email: string;
        id: number;
        instagram: string;
        phone: string;
        profileId: number;
        telegram: string;
        whatsapp: number;
    };
}

export const sendPostContact = async (data: iDataContact) => {
    const token = localStorage.getItem('token');

    console.log(data)

    const resp = async () => {
        const response = await config
            .post('/contacts', data, { headers: { Authorization: `Bearer ${token}` } })
            .catch(function (error) {
                const currentError = error as AxiosError;
                if (currentError.response) {
                    return currentError.response.data;
                }
            });
        return response;
    };

    const mensagem = await resp();
    return mensagem;
};

export interface iDataAndress {
    data: {
        id: number;
        profileId: number;
        street: string;
        district: string;
        number: string;
        city: string;
        state: string;
    };
}

export const sendPostAndress = async ({ data }: iDataAndress) => {
    const token = localStorage.getItem('token');

    const resp = async () => {
        const response = await config
            .post('/andress', data, { headers: { Authorization: `Bearer ${token}` } })
            .catch(function (error) {
                const currentError = error as AxiosError;
                if (currentError.response) {
                    return currentError.response.data;
                }
            });
        return response;
    };

    const mensagem = await resp();
    return mensagem;
};
