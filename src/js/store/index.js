import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'js/reducers';
import rootSaga from 'js/sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store
