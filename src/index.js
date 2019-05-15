import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from 'js/store';
import 'normalize.css';
import './index.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
