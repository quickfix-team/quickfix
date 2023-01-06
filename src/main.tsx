import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles';
import { ResetStyles } from './styles/Reset';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <GlobalStyles/>
        <ResetStyles/>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </>
);
