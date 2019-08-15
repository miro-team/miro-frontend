import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { media } from 'js/constants/media';

import * as FilterActions from 'js/actions/FilterActions';

import SelectBox from 'js/components/common/SelectBox';
import getMonth from 'js/utils/getMonth';


const mapStateToProps = ({ Filters }) => ({
  eventType: Filters.get('eventType'),
  date: Filters.get('date'),
  weekType: Filters.get('weekType'),
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
  setWeekTypeFilter(payload) {
    dispatch(FilterActions.setWeekTypeFilter(payload));
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
    eventType: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    weekType: PropTypes.number.isRequired,
    weekDay: PropTypes.number.isRequired,
    pair: PropTypes.number.isRequired,

    setEventTypeFilter: PropTypes.func.isRequired,
    setDateFilter: PropTypes.func.isRequired,
    setWeekTypeFilter: PropTypes.func.isRequired,
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

  handleWeekTypeChange = (e) => {
    const { setWeekTypeFilter } = this.props;
    setWeekTypeFilter(+e.target.value);
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
    const { eventType, date, weekType, weekDay, pair } = this.props;

    return (
      <Wrapper>
        <FieldWrapper>
          <EventTypeSelectBox
            label="Тип события"
            value={eventType}
            onChange={this.handleEventTypeChange}
          />
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
              <WeekTypeSelectBox
                label="Тип недели"
                value={weekType}
                onChange={this.handleWeekTypeChange}
              />
            </FieldWrapper>
            <FieldWrapper>
              <WeekDaySelectBox
                label="День недели"
                value={weekDay}
                onChange={this.handleWeekDayChange}
              />
            </FieldWrapper>
          </>
        )}
        <FieldWrapper>
          <PairSelectBox label="Пара" value={pair} onChange={this.handlePairChange} />
        </FieldWrapper>
      </Wrapper>
    );
  }
}

export default DatetimeFilters;

const EventTypeSelectBox = props => (
  <SelectBox {...props}>
    <option value="single">Конкретная дата</option>
    <option value="cycle">Цикличное</option>
  </SelectBox>
);

const WeekTypeSelectBox = props => (
  <SelectBox {...props}>
    <option value={1}>1-й числитель</option>
    <option value={2}>1-й знаменатель</option>
    <option value={3}>2-й числитель</option>
    <option value={4}>2-й знаменатель</option>
    <option value={5}>Числитель</option>
    <option value={6}>Знаменатель</option>
    <option value={7}>Каждую неделю</option>
  </SelectBox>
);

const WeekDaySelectBox = props => (
  <SelectBox {...props}>
    <option value={0}>---</option>
    <option value={1}>Понедельник</option>
    <option value={2}>Вторник</option>
    <option value={3}>Среда</option>
    <option value={4}>Четверг</option>
    <option value={5}>Пятница</option>
    <option value={6}>Суббота</option>
  </SelectBox>
);

const PairSelectBox = props => (
  <SelectBox {...props}>
    <option value={0}>---</option>
    <option value={1}>1 (09:00-10:30)</option>
    <option value={2}>2 (10:40-12:10)</option>
    <option value={3}>3 (12:20-14:20)*</option>
    <option value={4}>4 (14:30-16:00)</option>
    <option value={5}>5 (16:10:00-17:40)</option>
    <option value={6}>6 (18:20:00-19:50)</option>
    <option value={7}>7 (20:00-21:30)</option>
  </SelectBox>
);

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
