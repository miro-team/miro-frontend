import {all} from 'redux-saga/effects'

import {saga as FilterSaga} from './FilterSaga';
import {saga as MapSaga} from './MapSaga';


export default function* rootSaga() {
    yield all([
        FilterSaga(),
        MapSaga()
    ])
}
