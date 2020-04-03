import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { compose, mapToOptions } from 'utils';
import { InputRow, InputWrapper, InputLabel, Select, DatePicker, RecurrenceEditor } from 'ui';


const propTypes = {
  pairs: PropTypes.array,
  date: PropTypes.instanceOf(Date),
  pair: PropTypes.array,
  recurrence: PropTypes.string,

  setDate: PropTypes.func.isRequired,
  setPair: PropTypes.func.isRequired,
  setRecurrence: PropTypes.func.isRequired,
};

const CScheduleDatetimeFilters = ({
  pairs,
  date,
  pair,
  recurrence,
  setDate,
  setPair,
  setRecurrence,
}) => {
  const handleDateChange = (value) => {
    setDate(value);
  };

  const handlePairChange = (e, { value }) => {
    setPair(value);
  };

  const handleRecurrenceChange = (e, { value }) => {
    setRecurrence(value);
  };

  return (
    <>
      <InputRow>
        <InputWrapper>
          <InputLabel>Дата</InputLabel>
          <DatePicker value={date} placeholder="Выберите дату" onChange={handleDateChange} />
        </InputWrapper>
      </InputRow>
      <InputRow>
        <InputWrapper>
          <InputLabel>Пара</InputLabel>
          <Select options={mapToOptions(pairs)} value={pair} placeholder="Пара" onChange={handlePairChange} multiple clearable />
        </InputWrapper>
      </InputRow>
      <InputRow>
        <InputWrapper>
          <InputLabel>Повторение</InputLabel>
          <RecurrenceEditor value={recurrence} onChange={handleRecurrenceChange} startDate={date} />
        </InputWrapper>
      </InputRow>
    </>
  );
};

CScheduleDatetimeFilters.propTypes = propTypes;

const mapStateToProps = ({ Config, ScheduleFilters }) => ({
  pairs: Config.pairs,
  date: ScheduleFilters.date,
  pair: ScheduleFilters.pair,
  recurrence: ScheduleFilters.recurrence,

  setDate: ScheduleFilters.setDate,
  setPair: ScheduleFilters.setPair,
  setRecurrence: ScheduleFilters.setRecurrence,
});

export const ScheduleDatetimeFilters = compose(
  inject(mapStateToProps),
)(CScheduleDatetimeFilters);
