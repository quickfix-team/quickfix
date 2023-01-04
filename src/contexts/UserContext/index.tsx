import { createContext } from 'react';

interface IUserProps {
    children: React.ReactNode;
}

export const UserContext = createContext({});

export const UserProvider = ({ children }: IUserProps) => {
    return (
        <UserContext.Provider value={{

        }}>
            {children}
        </UserContext.Provider>
    );
};
