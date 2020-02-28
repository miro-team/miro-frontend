import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';

import { DropdownReducer } from 'features/Dropdown';
import { ModalReducer } from 'features/Modal';

import { FilterSaga, AppSaga, AuthSaga, UserSaga } from 'core/sagas';
import {
  AppReducer,
  UIReducer,
  FilterReducer,
  AuthReducer,
  UserReducer,
  ScheduleReducer,
  NotificationReducer,
  ConfigReducer,
} from 'core/reducers';


const rootReducer = combineReducers({
  App: AppReducer,
  UI: UIReducer,
  Filters: FilterReducer,
  Auth: AuthReducer,
  User: UserReducer,
  Schedule: ScheduleReducer,
  Notifications: NotificationReducer,
  Modal: ModalReducer,
  Dropdown: DropdownReducer,
  Config: ConfigReducer,
});

function* rootSaga() {
  yield all([
    FilterSaga(),
    AppSaga(),
    AuthSaga(),
    UserSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
