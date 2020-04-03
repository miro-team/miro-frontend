import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { compose, mapToOptions, handleNumericChange } from 'utils';
import { media } from 'core/constants';
import { InputRow, InputWrapper, InputLabel, Input, Select } from 'ui';


const propTypes = {
  schemes: PropTypes.array,
  roomTypes: PropTypes.array,
  rooms: PropTypes.array,
  scheme: PropTypes.number,
  roomType: PropTypes.number,
  roomCapacity: PropTypes.string,
  roomNumber: PropTypes.number,

  setScheme: PropTypes.func.isRequired,
  setBuilding: PropTypes.func.isRequired,
  setFloor: PropTypes.func.isRequired,
  setRoomType: PropTypes.func.isRequired,
  setRoomCapacity: PropTypes.func.isRequired,
  setRoomNumber: PropTypes.func.isRequired,
};

const CScheduleRoomFilters = ({
  schemes,
  roomTypes,
  rooms,
  scheme,
  roomType,
  roomCapacity,
  roomNumber,
  setScheme,
  setBuilding,
  setFloor,
  setRoomType,
  setRoomCapacity,
  setRoomNumber,
}) => {

  const handleSchemeChange = (e, { value }) => {
    console.log('scheme: ', value);
    const {
      building,
      floor,
    } = schemes.find(scheme => scheme.id === value) || { building: null, floor: null };
    setScheme(value);
    setBuilding(building);
    setFloor(floor);
  };

  const handleRoomTypeChange = (e, { value }) => {
    setRoomType(value);
  };

  const handleRoomCapacityChange = (e, { value }) => {
    handleNumericChange(value, setRoomCapacity);
  };

  const handleRoomNumberChange = (e, { value }) => {
    setRoomNumber(value);
  };

  return (
    <>
      <InputRow>
        <InputWrapper>
          <InputLabel>Расположение</InputLabel>
          <Select value={scheme} options={mapToOptions(schemes)} placeholder="Расположение" onChange={handleSchemeChange} clearable />
        </InputWrapper>
      </InputRow>
      <InputRow>
        <InputWrapper>
          <InputLabel>Тип аудитории</InputLabel>
          <Select value={roomType} options={mapToOptions(roomTypes)} placeholder="Тип аудитории" onChange={handleRoomTypeChange} clearable />
        </InputWrapper>
      </InputRow>
      <InputRow>
        <InputWrapper>
          <InputLabel>Вместимость от</InputLabel>
          <Input value={roomCapacity} placeholder="Вместимость от" onChange={handleRoomCapacityChange} />
        </InputWrapper>
      </InputRow>
      <InputRow>
        <InputWrapper>
          <InputLabel>Номер аудитории</InputLabel>
          <Select options={mapToOptions(rooms)} value={roomNumber} placeholder="Номер аудитории" onChange={handleRoomNumberChange} search clearable />
        </InputWrapper>
      </InputRow>
    </>
  );
};

CScheduleRoomFilters.propTypes = propTypes;

const mapStateToProps = ({ Config, ScheduleFilters }) => ({
  schemes: Config.schemes,
  roomTypes: Config.roomTypes,
  rooms: Config.rooms,
  scheme: ScheduleFilters.scheme,
  roomType: ScheduleFilters.roomType,
  roomCapacity: ScheduleFilters.roomCapacity,
  roomNumber: ScheduleFilters.roomNumber,

  setScheme: ScheduleFilters.setScheme,
  setBuilding: ScheduleFilters.setBuilding,
  setFloor: ScheduleFilters.setFloor,
  setRoomType: ScheduleFilters.setRoomType,
  setRoomCapacity: ScheduleFilters.setRoomCapacity,
  setRoomNumber: ScheduleFilters.setRoomNumber,
});

export const ScheduleRoomFilters = compose(
  inject(mapStateToProps),
)(CScheduleRoomFilters);
