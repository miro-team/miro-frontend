import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import UIReducer from './UIReducer';
import FilterReducer from './FilterReducer';
import DataReducer from './DataReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import ScheduleReducer from './ScheduleReducer';


const reducers = combineReducers({
  App: AppReducer,
  UI: UIReducer,
  Filters: FilterReducer,
  Data: DataReducer,
  Auth: AuthReducer,
  User: UserReducer,
  Schedule: ScheduleReducer,
});

export default reducers;
