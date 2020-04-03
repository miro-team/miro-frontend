import { observable, action } from 'mobx';
import qs from 'qs';

import { API } from 'API';
import { sleep } from 'utils';
import { AuthService, HTTP } from 'core/services';


class CScheduleModel {
    getScheduleEndpoint = () => {

    }

    @action getSchedule = async (filterParams, eventType) => {
      try {
        const response = await HTTP.post({
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
      } catch (e) {
        //
      }
    }
}

export const ScheduleModel = new CScheduleModel();
