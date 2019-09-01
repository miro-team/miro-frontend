import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'js/store';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
