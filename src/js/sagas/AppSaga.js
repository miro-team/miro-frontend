import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'Api';

import * as AppActions from 'js/actions/AppActions';
import * as FilterActions from 'js/actions/FilterActions';


export class AppSaga {
  static* getConfig() {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: API.config(),
      });
      // Setting default value for required filter (periodicity)
      yield put(FilterActions.setPeriodicityFilter(response.data.filters.periodicities[0].id));

      yield put(AppActions.getConfigSuccess(response.data));
    } catch (e) {
      yield put(AppActions.getConfigFail());
    }
  }
}

export function* saga() {
  yield takeLatest(AppActions.getConfigRequest, AppSaga.getConfig);
}
