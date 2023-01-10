import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { IRegisterForm } from '../../components/Form/FormRegister';
import { instance } from '../../services';

interface IUserProps {
    children: React.ReactNode;
}

interface IUserContext {
    registerRequest: (data: IRegisterForm) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
    const navigate = useNavigate();

    const registerRequest = async (data: IRegisterForm) => {
        try {
            await instance.post('/register', data);
            // toast.success('Conta criada com sucesso!');
            navigate('/login');
        } catch (err) {
            // toast.error('Ops! Algo deu errado.');
        }
    };

    return (
        <UserContext.Provider
            value={{
                registerRequest,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
