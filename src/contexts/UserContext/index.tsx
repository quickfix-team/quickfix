import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ILoginForm } from '../../components/Form/FormLogin';
import { IRegisterForm } from '../../components/Form/FormRegister';
import { instance } from '../../services';

interface IUserProps {
    children: React.ReactNode;
}

interface IUserContext {
    registerRequest: (formData: IRegisterForm) => Promise<void>;
    loginRequest: (formData: ILoginForm) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
    const navigate = useNavigate();

    const registerRequest = async (formData: IRegisterForm) => {
        try {
            await instance.post('/register', formData);
            toast.success('Conta criada com sucesso!');
            navigate('/login');
        } catch (err) {
            toast.error('Ops! Algo deu errado.');
        }
    };

    const loginRequest = async (formData: ILoginForm) => {
        try {
            const { data } = await instance.post('/login', formData);
            toast.success('Login efetuado!');
            localStorage.clear();
            localStorage.setItem('userToken', data.accessToken);
            navigate('/profile');
        } catch (err) {
            toast.error('Ops! Algo deu errado.');
        }
    };

    return (
        <UserContext.Provider
            value={{
                registerRequest,
                loginRequest,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
