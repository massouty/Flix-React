import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import {createStore} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import moviesApp from './Components/Reducers/Reducers';
import MainView from './Components/MainView/MainView';

import Footer from './Components/Footer';
import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <Container>
        <MainView />
        <Footer/>
    </Container>
    </Provider>
  </React.StrictMode>
);





