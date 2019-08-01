import {all} from 'redux-saga/effects'

import {saga as FilterSaga} from './FilterSaga';
import {saga as AppSaga} from './AppSaga';
import {saga as AuthSaga} from './AuthSaga';
import {saga as UserSaga} from './UserSaga';


export default function* rootSaga() {
    yield all([
        FilterSaga(),
        AppSaga(),
        AuthSaga(),
        UserSaga()
    ]);
}
