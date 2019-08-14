import axios from 'axios';
import { takeLatest, call, select, put } from 'redux-saga/effects';

import API from 'Api';
import processFilters from 'js/utils/processFilters';

import * as DataActions from 'js/actions/DataActions';
import * as ScheduleActions from 'js/actions/ScheduleActions';


export class FilterSaga {
  static* getFilteredData(action) {
    try {
      yield put(ScheduleActions.activateGridPreloader());

      if (action.payload && action.payload.issuer !== 'SET_SCHEDULEGRID_PAGE') {
        yield put(ScheduleActions.resetGridPage());
      }

      const filterValues = yield select(state => state.Filters.toJS());
      const pageNum = yield select(state => state.Schedule.get('gridActivePage'));
      const pageSize = yield select(state => state.Schedule.get('gridPageSize'));
      const filters = processFilters(filterValues, pageNum, pageSize);

      const filteredData = yield call(axios, {
        method: 'GET',
        url: API.data() + filters.urlParams,
      });
      yield put(DataActions.getScheduleSuccess(filteredData.data));
      yield put(ScheduleActions.deactivateGridPreloader());
    } catch (e) {
      yield put(DataActions.getScheduleFail());
      yield put(ScheduleActions.deactivateGridPreloader());
    }
  }

  static* makeRequest(action) {
    yield put(DataActions.getScheduleRequest({ issuer: action.type }));
  }
}

export function* saga() {
  yield takeLatest(
    action => action.type.slice(-7) === '_FILTER'
      || action.type === 'SET_SCHEDULEGRID_PAGE'
      || action.type === 'RESET_FILTERS',
    FilterSaga.makeRequest,
  );
  yield takeLatest(DataActions.getScheduleRequest, FilterSaga.getFilteredData);
}
