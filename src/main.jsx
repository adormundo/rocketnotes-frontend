import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './hooks/auth';
import GlobalStyles from './styles/global';
import { Routes } from './routes';
import ReactDOM from 'react-dom/client';
import React from 'react';

import Theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);
