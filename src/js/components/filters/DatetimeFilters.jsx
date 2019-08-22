import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import { media } from 'js/constants/media';

import * as FilterActions from 'js/actions/FilterActions';

import SelectBox from 'js/components/common/SelectBox';
import getMonth from 'js/utils/getMonth';


const mapStateToProps = ({ App, Filters }) => ({
  filters: App.get('filters'),
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

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class DatetimeFilters extends Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
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

  renderOptions = (_options, isRequired) => {
    if (Array.isArray(_options)) {
      const options = isRequired ? [..._options] : [{ id: -1, name: '---' }, ..._options];
      return options.map(({ id, name }) => (
        <option key={uuidv4()} value={id}>
          {name}
        </option>
      ));
    }
    return null;
  };

  render() {
    const { filters, eventType, date, periodicity, weekDay, pair } = this.props;

    return (
      <Wrapper>
        <FieldWrapper>
          <SelectBox label="Тип события" value={eventType} onChange={this.handleEventTypeChange}>
            <option value="single">Конкретная дата</option>
            <option value="cycle">Цикличное</option>
          </SelectBox>
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
              <SelectBox label="Периодичность" value={periodicity} onChange={this.handlePeriodicityChange}>
                {this.renderOptions(filters.periodicities, true)}
              </SelectBox>
            </FieldWrapper>
            <FieldWrapper>
              <SelectBox label="День недели" value={weekDay} onChange={this.handleWeekDayChange}>
                {this.renderOptions(filters.weekDays)}
              </SelectBox>
            </FieldWrapper>
          </>
        )}
        <FieldWrapper>
          <SelectBox label="Пара" value={pair} onChange={this.handlePairChange}>
            {this.renderOptions(filters.pairs)}
          </SelectBox>
        </FieldWrapper>
      </Wrapper>
    );
  }
}

export default DatetimeFilters;

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
