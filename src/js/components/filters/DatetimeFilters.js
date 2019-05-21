import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';

import SelectBox from 'js/components/common/SelectBox';
import getMonth from 'js/utils/getMonth';

import * as FilterActions from 'js/actions/FilterActions';


class DatetimeFilters extends Component {
    handleResTypeChange = e => this.props.setResTypeFilter(+e.target.value);
    handleDateChange = date => this.props.setDateFilter(date);
    handleWeekTypeChange = e => this.props.setWeekTypeFilter(e.target.value);
    handleWeekDayChange = e => this.props.setWeekDayFilter(e.target.value);
    handlePairChange = e => this.props.setPairFilter(e.target.value);

    render() {
        const {
            resType,
            date,
            weekType,
            weekDay,
            pair
        } = this.props;

        return (
            <Wrapper>
                <ResTypeSelectBox label="Время события" value={resType} onChange={this.handleResTypeChange} />
                {resType === 1 && <StyledCalendar locale='ru' formatMonthYear={(locale, date) => getMonth(date)} value={date} onChange={this.handleDateChange} />}
                {resType > 1 &&
                    <>
                        <WeekTypeSelectBox label="Тип недели" value={weekType} onChange={this.handleWeekTypeChange} />
                        <WeekDaySelectBox label="День недели" value={weekDay} onChange={this.handleWeekDayChange} />
                    </>
                }
                {resType !== 0 && <PairSelectBox label="Пара" value={pair} onChange={this.handlePairChange} />}
            </Wrapper>
        )
    }
}

const ResTypeSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option value={1}>Конкретная дата</option>
        <option value={2}>Каждую неделю</option>
        <option value={3}>Каждые 2 недели</option>
        <option value={4}>Каждый месяц</option>
    </SelectBox>
)

const WeekTypeSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option>1-й числитель</option>
        <option>1-й знаменатель</option>
        <option>2-й числитель</option>
        <option>2-й знаменатель</option>
    </SelectBox>
)

const WeekDaySelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option>Понедельник</option>
        <option>Вторник</option>
        <option>Среда</option>
        <option>Четверг</option>
        <option>Пятница</option>
        <option>Суббота</option>
    </SelectBox>
)

const PairSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option>1 (09:00-10:30)</option>
        <option>2 (10:40-12:10)</option>
        <option>3 (12:20-14:20)*</option>
        <option>4 (14:30-16:00)</option>
        <option>5 (16:10:00-17:40)</option>
        <option>6 (18:20:00-19:50)</option>
        <option>7 (20:00-21:30)</option>
    </SelectBox>
)

const mapStateToProps = ({ Filters }) => ({
    resType: Filters.get('resType'),
    date: Filters.get('date'),
    weekType: Filters.get('weekType'),
    weekDay: Filters.get('weekDay'),
    pair: Filters.get('pair')
});

const mapDispatchToProps = (dispatch) => ({
    setResTypeFilter: payload => dispatch(FilterActions.setResTypeFilter(payload)),
    setDateFilter: payload => dispatch(FilterActions.setDateFilter(payload)),
    setWeekTypeFilter: payload => dispatch(FilterActions.setWeekTypeFilter(payload)),
    setWeekDayFilter: payload => dispatch(FilterActions.setWeekDayFilter(payload)),
    setPairFilter: payload => dispatch(FilterActions.setPairFilter(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(DatetimeFilters);

const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		font-size: 12px;
`;

const StyledCalendar = styled(Calendar)`
    margin-bottom: 30px;
`;
