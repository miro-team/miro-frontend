import {all} from 'redux-saga/effects'

import {saga as FilterSaga} from './FilterSaga';


export default function* rootSaga() {
    yield all([
        FilterSaga()
    ])
}
