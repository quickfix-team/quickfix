import { ThemeProvider } from '@mui/material';

import { UserProvider } from './contexts/UserContext';
import { MainRoutes as Routes } from './routes';
import { LightTheme } from './themes/Light';

export const App = () => {
    return (
        <>
            <ThemeProvider theme={LightTheme}>
                <UserProvider>
                    <Routes />
                </UserProvider>
            </ThemeProvider>
        </>
    );
};
