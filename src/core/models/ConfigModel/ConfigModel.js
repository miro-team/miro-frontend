import { observable, action } from 'mobx';

import { API } from 'API';
import { HTTP } from 'core/services';


class CConfigModel {
    @observable rooms = null;

    @observable disciplines = null;

    @observable weekDays = null;

    @observable roomTypes = null;

    @observable teachers = null;

    @observable groups = null;

    @observable schemes = null;

    @observable periodicities = null;

    @observable eventTypes = null;

    @observable pairs = null;

    @action getConfig = async () => {
      try {
        const response = await HTTP.get({
          url: API.config(),
        });

        const {
          rooms,
          disciplines,
          weekDays,
          roomTypes,
          teachers,
          groups,
          schemes,
          periodicities,
          eventTypes,
          pairs,
        } = response.data;

        this.rooms = rooms;
        this.disciplines = disciplines;
        this.weekDays = weekDays;
        this.roomTypes = roomTypes;
        this.teachers = teachers;
        this.groups = groups;
        this.schemes = schemes;
        this.periodicities = periodicities;
        this.eventTypes = eventTypes;
        this.pairs = pairs;
      } catch (e) {
        console.error(e.message);
      }
    }
}

export const ConfigModel = new CConfigModel();
