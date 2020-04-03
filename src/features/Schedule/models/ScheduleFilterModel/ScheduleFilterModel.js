import { observable, action, computed } from 'mobx';

import { eventTypes } from 'core/constants';


class CScheduleFilterModel {
  @observable activeFilterTab = 0;

  @action showRoomFilters = () => {
    this.activeFilterTab = 0;
  }

  @action showDatetimeFilters = () => {
    this.activeFilterTab = 1;
  }

  //********************************
  // Filters
  //********************************

  @observable scheme = null;

  @action setScheme = (value) => {
    this.scheme = value ? value : null;
  }

  @observable building = null;

  @action setBuilding = (value) => {
    this.building = value ? value : null;
  }

  @observable floor = null;

  @action setFloor = (value) => {
    this.floor = value ? value : null;
  }

  @observable roomType = null;

  @action setRoomType = (value) => {
    this.roomType = value ? value : null;
  }

  @observable roomCapacity = '20';

  @action setRoomCapacity = (value) => {
    this.roomCapacity = value ? value : '';
  }

  @observable roomNumber = null;

  @action setRoomNumber = (value) => {
    this.roomNumber = value ? value : null;
  }

  @observable eventType = eventTypes.single;

  @action setEventType = (value) => {
    this.eventType = value ? value : null;
  }

  @observable date = new Date();

  @action setDate = (value) => {
    this.date = value ? value : null;
  }

  @observable pair = null;

  @action setPair = (value) => {
    this.pair = value ? value : null;
  }

  @observable recurrence = 'NO_REPEAT';

  @action setRecurrence = (value) => {
    this.recurrence = value ? value : 'NO_REPEAT';
  }

  @observable customRecurrencies = [];

  @action addCustomRecurrence = ({ value, text }) => {
    const recurrenceExists = this.customRecurrencies.find(({ value: existingValue }) => existingValue === value);

    if (!recurrenceExists) {
      this.customRecurrencies.push({ value, text });
    }
  }

  @observable pageNum = null;

  @action setPageNum = (value) => {
    this.pageNum = value ? value : null;
  }

  @observable pageSize = null;

  @action setPageSize = (value) => {
    this.pageSize = value ? value : null;
  }

  @computed get filterState() {
    return {
      pageNum: this.pageNum,
      pageSize: this.pageSize,
      building: this.building,
      floor: this.floor,
      roomTypeId: this.roomType,
      capacity: this.roomCapacity,
      roomId: this.roomNumber,
      eventType: this.eventType,
      date: this.date,
      pairId: this.pair,
      recurrence: this.recurrence !== 'NO_REPEAT' ? this.recurrence : null,
    };
  }
}

export const ScheduleFilterModel = new CScheduleFilterModel();
