import { all } from 'redux-saga/effects';

import FilterSaga from './FilterSaga';
import AppSaga from './AppSaga';
import AuthSaga from './AuthSaga';
import UserSaga from './UserSaga';


export default function* rootSaga() {
  yield all([FilterSaga(), AppSaga(), AuthSaga(), UserSaga()]);
}
