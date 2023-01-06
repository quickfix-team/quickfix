import { ThemeProvider } from '@mui/material';
import { MainRoutes as Routes } from './routes';
import { LightTheme } from './themes/Light';

export const App = () => {
    return (
        <>
            <ThemeProvider theme={LightTheme}>
                <Routes />
            </ThemeProvider>
        </>
    );
};
