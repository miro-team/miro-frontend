import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import UIReducer from './UIReducer';
import FilterReducer from './FilterReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import ScheduleReducer from './ScheduleReducer';
import NotificationReducer from './NotificationReducer';
import ConfigReducer from './ConfigReducer';


const reducers = combineReducers({
  App: AppReducer,
  UI: UIReducer,
  Filters: FilterReducer,
  Auth: AuthReducer,
  User: UserReducer,
  Schedule: ScheduleReducer,
  Notifications: NotificationReducer,
  Config: ConfigReducer,
});

export default reducers;
