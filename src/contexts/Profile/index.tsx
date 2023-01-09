import { createContext } from 'react';

export const SendProfileContext = createContext({} as any);

export const ProfileProvider = ({ children }: any) => {

    return (
        <SendProfileContext.Provider value={{}}>{children}</SendProfileContext.Provider>
    );
};
