import { combineReducers } from 'redux';

import { UIStateReducer } from './UIStateReducer';


const reducers = combineReducers({
    UI: UIStateReducer
})

export default reducers
