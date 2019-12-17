import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

export default function ConnectApp(store, theme) {
    return function ConntectedApp(App) {
        const ProvidedApp = () => (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>
        );
        return ProvidedApp;
    };
}
