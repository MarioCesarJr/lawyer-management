import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

import Sidebar from '~/components/Sidebar';

function App() {
    return (
        <Router history={history}>
            <GlobalStyle />
            <Sidebar />
            <Routes />
        </Router>
    );
}

export default App;
