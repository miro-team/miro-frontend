import axios from 'axios';
import { takeLatest, call, select, put } from 'redux-saga/effects';

import API from 'Api';
import { convertDate } from 'utils/convertDate';

import { ScheduleActions } from 'core/actions';


function* getFilteredData(action) {
  try {
    yield put(ScheduleActions.showGridPreloader());

    if (action.payload && action.payload.issuer !== 'SET_SCHEDULEGRID_PAGE') {
      yield put(ScheduleActions.resetGridPage());
    }

    const {
      building,
      floor,
      roomType,
      roomCapacity,
      roomNumber,
      eventType,
      date,
      periodicity,
      weekDay,
      pair,
    } = yield select(state => state.Filters.toJS());
    const {
      gridActivePage: pageNum,
      gridPageSize: pageSize,
    } = yield select(state => state.Schedule.toJS());

    const result = yield call(axios, {
      method: 'GET',
      url: `${eventType === 'single' ? API.filterSingle() : API.filterCycle()}`,
      params: {
        pageNum,
        pageSize,
        building: building !== -1 ? building : null,
        floor: floor !== -1 ? floor : null,
        roomTypeId: roomType !== -1 ? roomType : null,
        capacity: roomCapacity !== '' ? roomCapacity : null,
        roomId: roomNumber !== -1 ? roomNumber : null,
        pairId: pair !== -1 ? pair : null,
        date: eventType === 'single' ? convertDate(date) : null,
        periodicityId: periodicity !== -1 && eventType === 'cycle' ? periodicity : null,
        weekDay: weekDay !== -1 && eventType === 'cycle' ? weekDay : null,
      },
    });

    yield put(ScheduleActions.getScheduleSuccess(result.data));
    yield put(ScheduleActions.hideGridPreloader());
  } catch (e) {
    yield put(ScheduleActions.getScheduleFail());
    yield put(ScheduleActions.hideGridPreloader());
  }
}

function* makeRequest(action) {
  yield put(ScheduleActions.getScheduleRequest({ issuer: action.type }));
}


export default function* () {
  yield takeLatest(
    action => action.type.slice(-7) === '_FILTER'
      || action.type === 'SET_SCHEDULEGRID_PAGE'
      || action.type === 'RESET_FILTERS',
    makeRequest,
  );
  yield takeLatest(ScheduleActions.getScheduleRequest, getFilteredData);
}
