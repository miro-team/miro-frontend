import { observable, action } from 'mobx';

import { API } from 'API';
import { HTTP } from 'core/services';


class CConfigModel {
    @observable rooms = null;

    @observable disciplines = null;

    @observable roomTypes = null;

    @observable teachers = null;

    @observable groups = null;

    @observable schemes = null;

    @observable eventTypes = null;

    @observable pairs = null;

    @observable semesterStart = new Date('2020/02/23');

    @observable semesterEnd = new Date('2020/06/30');

    @action getConfig = async () => {
      try {
        const response = await HTTP.get({
          url: API.config(),
        });

        const {
          rooms,
          disciplines,
          roomTypes,
          teachers,
          groups,
          schemes,
          eventTypes,
          pairs,
        } = response.data;

        this.rooms = rooms;
        this.disciplines = disciplines;
        this.roomTypes = roomTypes;
        this.teachers = teachers;
        this.groups = groups;
        this.schemes = schemes;
        this.eventTypes = eventTypes;
        this.pairs = pairs;
      } catch (e) {
        console.error(e.message);
      }
    }
}

export const ConfigModel = new CConfigModel();
