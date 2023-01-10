import { createContext, useEffect, useState } from 'react';
import AxiosError from 'axios-error';
import { instance } from '../../services';

interface iChildren {
    children: React.ReactNode;
}

interface iDatas {
    profile: Array<object>;
    contact: Array<object>;
    setProfile: React.Dispatch<React.SetStateAction<Array<object>>>;
    setContact: React.Dispatch<React.SetStateAction<Array<object>>>;
    sendGetProfile: () => void;
    sendGetContact: () => void;
    sendGetAndress: () => void;
    sendPostImgProfile: (src: string) => void;
    sendPostContact: (dataContact: iDataContact) => void;
    sendPostAndress: (dataAndress: iDataAndress) => void;
}

interface iDataAndress {
    street: string;
    district: string;
    number: string;
    city: string;
    state: string;
}

interface iDataContact {
    whatsApp: string;
    telegram: string;
    instagram: string;
    tel: string;
    email: string;
}

export const ProfileContext = createContext({} as iDatas);

export const ProfileProvider = ({ children }: iChildren) => {
    const sendGetProfile = async () => {
        const token = localStorage.getItem('token');

        const resp = async () => {
            const response = await instance
                .get('/profiles/1', { headers: { Authorization: `Bearer ${token}` } })
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

    const sendGetContact = async () => {
        const token = localStorage.getItem('token');

        const resp = async () => {
            const response = await instance
                .get('/contacts/1', { headers: { Authorization: `Bearer ${token}` } })
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

    const sendGetAndress = async () => {
        const token = localStorage.getItem('token');

        const resp = async () => {
            const response = await instance
                .get('/adresses/1', { headers: { Authorization: `Bearer ${token}` } })
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

    const sendPostImgProfile = async (src: string) => {
        const token = localStorage.getItem('token');

        let user = await sendGetProfile();
        user = user.data;

        const data = {
            userId: user.userId,
            name: user.name,
            imagem: src,
        };

        const resp = async () => {
            const response = await instance
                .put('/profiles/1', data, { headers: { Authorization: `Bearer ${token}` } })
                .catch(function (error) {
                    const currentError = error as AxiosError;
                    if (currentError.response) {
                        return currentError.response.data;
                    }
                });
            return response;
        };

        const mensagem = await resp();
        setProfile(mensagem.data);
        console.log(mensagem);
    };

    const sendPostContact = async (dataContact: iDataContact) => {
        const token = localStorage.getItem('token');

        const contact = await sendGetContact();

        const data = {
            id: 1,
            profileId: contact.data.profileId,
            phone: dataContact.tel,
            whatsapp: dataContact.whatsApp,
            instagram: dataContact.instagram,
            email: dataContact.email,
            telegram: dataContact.telegram,
        };

        const resp = async () => {
            const response = await instance
                .put('/contacts/1', data, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .catch(function (error) {
                    const currentError = error as AxiosError;
                    if (currentError.response) {
                        return currentError.response.data;
                    }
                });
            return response;
        };

        const mensagem = await resp();
        setContact(mensagem.data);
        console.log(mensagem);
    };

    const sendPostAndress = async (dataAndress: iDataAndress) => {
        const token = localStorage.getItem('token');

        const adresses = await sendGetAndress();

        const data = {
            profileId: adresses.data.profileId,
            street: dataAndress.street,
            district: dataAndress.district,
            number: dataAndress.number,
            city: dataAndress.city,
            state: dataAndress.state,
            id: 1,
        };

        const resp = async () => {
            const response = await instance
                .put('/adresses/1', data, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .catch(function (error) {
                    const currentError = error as AxiosError;
                    if (currentError.response) {
                        return currentError.response.data;
                    }
                });
            return response;
        };

        const mensagem = await resp();
        console.log(mensagem);
    };

    const [profile, setProfile] = useState<Array<object>>([]);
    const [contact, setContact] = useState<Array<object>>([]);

    useEffect(() => {
        const callback = async () => {
            const profileData = await sendGetProfile();

            setProfile(profileData.data);

            const contacts = await sendGetContact();

            setContact(contacts.data);
        };

        callback();
    }, []);

    return (
        <ProfileContext.Provider
            value={{
                profile,
                contact,
                setProfile,
                setContact,
                sendGetProfile,
                sendGetContact,
                sendGetAndress,
                sendPostImgProfile,
                sendPostContact,
                sendPostAndress,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};
