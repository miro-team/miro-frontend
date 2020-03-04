import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import GlobalStyles from './GlobalStyles';

import { AppModel, ConfigModel } from 'core/models';
import { DropdownModel } from 'features/Dropdown/models';
import { ModalModel } from 'features/Modal/models';
import { PreloaderModel } from 'features/Preloader/models';
import { AuthModel } from 'features/Auth/models';
import { App } from 'App';


const models = {
  App: AppModel,
  Config: ConfigModel,
  Dropdown: DropdownModel,
  Modal: ModalModel,
  Preloader: PreloaderModel,
  Auth: AuthModel,
};

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider {...models}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root'),
);
