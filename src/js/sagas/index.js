import {all} from 'redux-saga/effects'

import {saga as FilterSaga} from './FilterSaga';
import {saga as MappingSaga} from './MappingSaga';


export default function* rootSaga() {
    yield all([
        FilterSaga(),
        MappingSaga()
    ])
}
