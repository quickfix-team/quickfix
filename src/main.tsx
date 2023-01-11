import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles';
import { ResetStyles } from './styles/Reset';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles />
            <ResetStyles />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
