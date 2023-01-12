import { createContext, useEffect, useState } from 'react';
import AxiosError from 'axios-error';
import { instance } from '../../services';
import { toast } from 'react-toastify';

interface iChildren {
    children: React.ReactNode;
}

interface iProfile {
    id: number;
    imagem: string;
    name: string;
    userId: number;
}

interface iDatas {
    profile: iProfile;
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
        const userId: string | null = localStorage.getItem('userId');
        const user: iProfile = JSON.parse(String(userId));

        const resp = async () => {
            const response = await instance
                .get(`/profiles/${user.id}`, { headers: { Authorization: `Bearer ${token}` } })
                .catch(function (error) {
                    const currentError = error as AxiosError;
                    if (currentError.response) {
                        return currentError.response.data;
                    }
                });
            return response;
        };

        const message = await resp();
        return message;
    };

    const sendGetContact = async () => {
        const token = localStorage.getItem('token');

        const userId: string | null = localStorage.getItem('userId');
        const user: iProfile = JSON.parse(String(userId));

        const resp = async () => {
            const response = await instance
                .get(`/contacts/${user.id}`, { headers: { Authorization: `Bearer ${token}` } })
                .catch(function (error) {
                    const currentError = error as AxiosError;
                    if (currentError.response) {
                        return currentError.response.data;
                    }
                });
            return response;
        };

        const message = await resp();
        return message;
    };

    const sendGetAndress = async () => {
        const token = localStorage.getItem('token');

        const userId: string | null = localStorage.getItem('userId');
        const user: iProfile = JSON.parse(String(userId));

        const resp = async () => {
            const response = await instance
                .get(`/adresses/${user.id}`, { headers: { Authorization: `Bearer ${token}` } })
                .catch(function (error) {
                    const currentError = error as AxiosError;
                    if (currentError.response) {
                        return currentError.response.data;
                    }
                });
            return response;
        };

        const message = await resp();
        return message;
    };

    const sendPostImgProfile = async (src: string) => {
        const token = localStorage.getItem('token');
        const userId: string | null = localStorage.getItem('userId');
        const user: iProfile = JSON.parse(String(userId));

        const profile = await sendGetProfile();

        const data = {
            userId: user.id,
            name: user.name,
            imagem: src,
        };

        const resp =
            profile.data !== undefined
                ? async () => {
                    const response = await instance
                        .put(`/profiles/${user.id}`, data, {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .catch(function (error) {
                            const currentError = error as AxiosError;
                            if (currentError.response) {
                                toast.error('Ops! Algo deu errado.');
                                return currentError.response.data;
                            }
                        });
                    return response;
                }
                : async () => {
                    const response = await instance
                        .post('/profiles/', data, {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .catch(function (error) {
                            const currentError = error as AxiosError;
                            if (currentError.response) {
                                toast.error('Ops! Algo deu errado.');
                                return currentError.response.data;
                            }
                        });
                    return response;
                };

        const message = await resp();
        setProfile(message.data);
        toast.success('Imagem adicionada com sucesso!');
        return message;
    };

    const sendPostContact = async (dataContact: iDataContact) => {
        const token = localStorage.getItem('token');
        const userId: string | null = localStorage.getItem('userId');
        const user: iProfile = JSON.parse(String(userId));

        const contact = await sendGetContact();

        const data = {
            profileId: Number(user.id),
            phone: dataContact.tel,
            whatsapp: dataContact.whatsApp,
            instagram: dataContact.instagram,
            email: dataContact.email,
            telegram: dataContact.telegram,
        };

        const resp =
            contact.data !== undefined
                ? async () => {
                    const response = await instance
                        .put(`/contacts/${user.id}`, data, {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .catch(function (error) {
                            const currentError = error as AxiosError;
                            if (currentError.response) {
                                toast.error('Ops! Algo deu errado.');
                                return currentError.response.data;
                            }
                        });
                    return response;
                }
                : async () => {
                    const response = await instance
                        .post('/contacts', data, {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .catch(function (error) {
                            const currentError = error as AxiosError;
                            if (currentError.response) {
                                toast.error('Ops! Algo deu errado.');
                                return currentError.response.data;
                            }
                        });
                    return response;
                };

        const message = await resp();
        setContact(message.data);
        toast.success('Meios de contato adicionado com sucesso!');
        return message;
    };

    const sendPostAndress = async (dataAndress: iDataAndress) => {
        const token = localStorage.getItem('token');
        const userId: string | null = localStorage.getItem('userId');
        const user: iProfile = JSON.parse(String(userId));

        const adresses = await sendGetAndress();

        const data = {
            profileId: Number(user.id),
            street: dataAndress.street,
            district: dataAndress.district,
            number: dataAndress.number,
            city: dataAndress.city,
            state: dataAndress.state,
        };

        const resp =
            adresses.data !== undefined
                ? async () => {
                    const response = await instance
                        .put(`/adresses/${user.id}`, data, {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .catch(function (error) {
                            const currentError = error as AxiosError;
                            if (currentError.response) {
                                toast.error('Ops! Algo deu errado.');
                                return currentError.response.data;
                            }
                        });
                    return response;
                }
                : async () => {
                    const response = await instance
                        .post('/adresses', data, {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .catch(function (error) {
                            const currentError = error as AxiosError;
                            if (currentError.response) {
                                toast.error('Ops! Algo deu errado.');
                                return currentError.response.data;
                            }
                        });
                    return response;
                };

        const message = await resp();
        toast.success('Endereço adicionado com sucesso!');
        return message;
    };

    const [profile, setProfile] = useState<any>([]);
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
