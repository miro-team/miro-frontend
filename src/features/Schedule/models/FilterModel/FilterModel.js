import { observable, action, computed } from 'mobx';

import { eventTypes } from 'core/constants';


class CFilterModel {
  @observable building = -1;

  @action setBuilding = (value) => {
    this.building = value;
  }

  @observable floor = -1;

  @action setFloor = (value) => {
    this.floor = value;
  }

  @observable roomType = -1;

  @action setRoomType = (value) => {
    this.roomType = value;
  }

  @observable roomCapacity = 10;

  @action setRoomCapacity = (value) => {
    this.roomCapacity = value;
  }

  @observable roomNumber = -1;

  @action setRoomNumber = (value) => {
    this.roomNumber = value;
  }

  @observable eventType = eventTypes.single;

  @action setEventType = (value) => {
    this.eventType = value;
  }

  @observable date = new Date();

  @action setDate = (value) => {
    this.date = value;
  }

  @observable periodicity = -1;

  @action setPeriodicity = (value) => {
    this.periodicity = value;
  }

  @observable weekDay = -1;

  @action setWeekDay= (value) => {
    this.weekDay = value;
  }

  @observable pair = -1;

  @action setPair = (value) => {
    this.pair = value;
  }

  @observable pageNum = 1;

  @action setPageNum = (value) => {
    this.pageNum = value;
  }

  @observable pageSize = 8;

  @action setPageSize = (value) => {
    this.pageSize = value;
  }

  @computed get filtersState() {
    return {
      pageNum: this.pageNum,
      pageSize: this.pageSize,
      building: this.building !== -1 ? this.building : null,
      floor: this.floor !== -1 ? this.floor : null,
      roomTypeId: this.roomType !== -1 ? this.roomType : null,
      capacity: this.roomCapacity !== '' ? this.roomCapacity : null,
      roomId: this.roomNumber !== -1 ? this.roomNumber : null,
      pairId: this.pair !== -1 ? this.pair : null,
      eventType: this.eventType,
      date: this.date ? this.date : null,
      periodicityId: this.periodicity !== -1 ? this.periodicity : null,
      weekDay: this.weekDay !== -1 ? this.weekDay : null,
    };
  }
}

export const FilterModel = new CFilterModel();
