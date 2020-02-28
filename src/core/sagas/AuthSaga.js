import axios from 'axios';
import { takeEvery, call, put, all, delay } from 'redux-saga/effects';
import qs from 'qs';

import API from 'Api';
import { AuthService } from 'core/services';
import { DropdownActions } from 'features/Dropdown';
import { AuthActions, UserActions, NotificationActions } from 'core/actions';


function* login(action) {
  try {
    const response = yield call(axios, {
      method: 'POST',
      url: API.login(),
      headers: {
        Authorization: 'Basic Y2xpZW50OnNlY3JldA==',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        grant_type: 'password',
        username: action.payload.username,
        password: action.payload.password,
      }),
    });
    AuthService.setJWT(response.data.access_token);

    yield all([
      put(AuthActions.setAuthStatus()),
      put(AuthActions.loginSuccess()),
      put(UserActions.getUserRequest()),
      put(DropdownActions.hide()),
      put(DropdownActions.show()),
    ]);
  } catch (e) {
    yield put(AuthActions.loginFail());

    yield delay(300);
    yield put(
      NotificationActions.setNotification({
        module: 'login',
        type: 'error',
        message: 'Не удалось войти с указанными учетными данными',
      }),
    );
  }
}

function* logout() {
  try {
    AuthService.unsetJWT();

    yield all([
      put(AuthActions.unsetAuthStatus()),
      put(AuthActions.logoutSuccess()),
    ]);
  } catch (e) {
    yield put(AuthActions.logoutFail());
  }
}

export function* AuthSaga() {
  yield takeEvery(AuthActions.loginRequest, login);
  yield takeEvery(AuthActions.logoutRequest, logout);
}
