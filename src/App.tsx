import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import { UserProvider } from './contexts/UserContext';
import { MainRoutes as Routes } from './routes';
import { LightTheme } from './themes/Light';

import 'react-toastify/dist/ReactToastify.min.css';
import { Modal } from './components/Modal';

export const App = () => {
    return (
        <>
            <ThemeProvider theme={LightTheme}>
                <UserProvider>
                    <Routes />
                    <Modal />
                </UserProvider>
            </ThemeProvider>
            <ToastContainer
                position='bottom-right'
                autoClose={1800}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </>
    );
};
