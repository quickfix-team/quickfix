import AxiosError from 'axios-error';
import { createContext, useEffect, useState } from 'react';

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
        const userId = localStorage.getItem('userId');

        const resp = async () => {
            const response = await instance
                .get(`/profiles/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
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

        const userId = localStorage.getItem('userId');

        const resp = async () => {
            const response = await instance
                .get(`/contacts/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
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

        const userId = localStorage.getItem('userId');

        const resp = async () => {
            const response = await instance
                .get(`/adresses/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
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
        const userId = localStorage.getItem('userId');

        const profile = await sendGetProfile();

        const data = {
            userId: userId,
            name: profile.name,
            imagem: src,
        };

        const resp =
            profile.data !== undefined
                ? async () => {
                    const response = await instance
                        .put(`/profiles/${userId}`, data, {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .catch(function (error) {
                            const currentError = error as AxiosError;
                            if (currentError.response) {
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
                                return currentError.response.data;
                            }
                        });
                    return response;
                };

        const message = await resp();
        setProfile(message.data);
        return message;
    };

    const sendPostContact = async (dataContact: iDataContact) => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const contact = await sendGetContact();

        const data = {
            profileId: Number(userId),
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
                        .put(`/contacts/${userId}`, data, {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .catch(function (error) {
                            const currentError = error as AxiosError;
                            if (currentError.response) {
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
                                return currentError.response.data;
                            }
                        });
                    return response;
                };

        const message = await resp();
        setContact(message.data);
        return message;
    };

    const sendPostAndress = async (dataAndress: iDataAndress) => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const adresses = await sendGetAndress();

        const data = {
            profileId: Number(userId),
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
                        .put(`/adresses/${userId}`, data, {
                            headers: { Authorization: `Bearer ${token}` },
                        })
                        .catch(function (error) {
                            const currentError = error as AxiosError;
                            if (currentError.response) {
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
                                return currentError.response.data;
                            }
                        });
                    return response;
                };

        const message = await resp();
        return message;
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
