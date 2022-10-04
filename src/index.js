import React from 'react';
import ReactDOM from 'react-dom/client';
import MainView from './Components/MainView/MainView';
import NavView from './Components/NavView/NavView';

import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavView/>
    <MainView />
    <Footer/>
  </React.StrictMode>
);





