import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { compose, getMonth } from 'utils';
import { media } from 'core/constants/media';
import { FilterActions } from 'core/actions';
import SelectInput from 'shared/components/SelectInput';
import { FilterOptions } from './components/FilterOptions';


class CDatetimeFilters extends Component {
  static propTypes = {
    periodicityOptions: PropTypes.array.isRequired,
    weekDayOptions: PropTypes.array.isRequired,
    pairOptions: PropTypes.array.isRequired,

    eventType: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    periodicity: PropTypes.number.isRequired,
    weekDay: PropTypes.number.isRequired,
    pair: PropTypes.number.isRequired,

    setEventTypeFilter: PropTypes.func.isRequired,
    setDateFilter: PropTypes.func.isRequired,
    setPeriodicityFilter: PropTypes.func.isRequired,
    setWeekDayFilter: PropTypes.func.isRequired,
    setPairFilter: PropTypes.func.isRequired,
  };

  handleEventTypeChange = (e) => {
    const { setEventTypeFilter } = this.props;
    setEventTypeFilter(e.target.value);
  };

  handleDateChange = (date) => {
    const { setDateFilter } = this.props;
    setDateFilter(date);
  };

  handlePeriodicityChange = (e) => {
    const { setPeriodicityFilter } = this.props;
    setPeriodicityFilter(+e.target.value);
  };

  handleWeekDayChange = (e) => {
    const { setWeekDayFilter } = this.props;
    setWeekDayFilter(+e.target.value);
  };

  handlePairChange = (e) => {
    const { setPairFilter } = this.props;
    setPairFilter(+e.target.value);
  };

  render() {
    const {
      periodicityOptions,
      weekDayOptions,
      pairOptions,
      eventType,
      date,
      periodicity,
      weekDay,
      pair,
    } = this.props;

    return (
      <Wrapper>
        <FieldWrapper>
          <SelectInput label="Тип события" value={eventType} onChange={this.handleEventTypeChange}>
            <option value="single">Конкретная дата</option>
            <option value="cycle">Цикличное</option>
          </SelectInput>
        </FieldWrapper>
        {eventType === 'single' && (
          <FieldWrapper>
            <Calendar
              locale="ru"
              formatMonthYear={(locale, calendarDate) => getMonth(calendarDate)}
              value={date}
              onChange={this.handleDateChange}
            />
          </FieldWrapper>
        )}
        {eventType === 'cycle' && (
          <>
            <FieldWrapper>
              <SelectInput
                label="Периодичность"
                value={periodicity}
                onChange={this.handlePeriodicityChange}
              >
                <FilterOptions options={periodicityOptions} renderEmpty />
              </SelectInput>
            </FieldWrapper>
            <FieldWrapper>
              <SelectInput label="День недели" value={weekDay} onChange={this.handleWeekDayChange}>
                <FilterOptions options={weekDayOptions} renderEmpty />
              </SelectInput>
            </FieldWrapper>
          </>
        )}
        <FieldWrapper>
          <SelectInput label="Пара" value={pair} onChange={this.handlePairChange}>
            <FilterOptions options={pairOptions} renderEmpty />
          </SelectInput>
        </FieldWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ Config, Filters }) => ({
  periodicityOptions: Config.get('periodicities'),
  weekDayOptions: Config.get('weekDays'),
  pairOptions: Config.get('pairs'),

  eventType: Filters.get('eventType'),
  date: Filters.get('date'),
  periodicity: Filters.get('periodicity'),
  weekDay: Filters.get('weekDay'),
  pair: Filters.get('pair'),
});

const mapDispatchToProps = dispatch => ({
  setEventTypeFilter(payload) {
    dispatch(FilterActions.setEventTypeFilter(payload));
  },
  setDateFilter(payload) {
    dispatch(FilterActions.setDateFilter(payload));
  },
  setPeriodicityFilter(payload) {
    dispatch(FilterActions.setPeriodicityFilter(payload));
  },
  setWeekDayFilter(payload) {
    dispatch(FilterActions.setWeekDayFilter(payload));
  },
  setPairFilter(payload) {
    dispatch(FilterActions.setPairFilter(payload));
  },
});

export const DatetimeFilters = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CDatetimeFilters);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 12px;
`;

const FieldWrapper = styled.div`
  margin-bottom: 25px;
  ${media.xs} {
    margin-bottom: 15px;
  }
`;
