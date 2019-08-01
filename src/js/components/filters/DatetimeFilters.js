import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';

import { media } from 'js/constants/media';

import * as FilterActions from 'js/actions/FilterActions';

import SelectBox from 'js/components/common/SelectBox';
import getMonth from 'js/utils/getMonth';


class DatetimeFilters extends Component {

    handleResTypeChange = (e) => {
        this.props.setResTypeFilter(+e.target.value);
    }

    handleDateChange = date => {
        this.props.setDateFilter(date);
    }

    handleWeekTypeChange = (e) => {
        this.props.setWeekTypeFilter(e.target.value);
    }

    handleWeekDayChange = (e) => {
        this.props.setWeekDayFilter(e.target.value);
    }
    
    handlePairChange = (e) => {
        this.props.setPairFilter(+e.target.value);
    }

    render() {
        const { resType, date, weekType, weekDay, pair } = this.props;

        return (
            <Wrapper>
                <FieldWrapper>
                    <ResTypeSelectBox label="Время события" value={resType} onChange={this.handleResTypeChange} />
                </FieldWrapper>
                {resType === 1 &&
                    <FieldWrapper>
                        <Calendar locale='ru' formatMonthYear={(locale, date) => getMonth(date)} value={date} onChange={this.handleDateChange} />
                    </FieldWrapper>
                }
                {resType > 1 &&
                    <>
                        <FieldWrapper>
                            <WeekTypeSelectBox label="Тип недели" value={weekType} onChange={this.handleWeekTypeChange} />
                        </FieldWrapper>
                        <FieldWrapper>
                            <WeekDaySelectBox label="День недели" value={weekDay} onChange={this.handleWeekDayChange} />
                        </FieldWrapper>
                    </>
                }
                {resType !== 0 &&
                    <FieldWrapper>
                        <PairSelectBox label="Пара" value={pair} onChange={this.handlePairChange} />
                    </FieldWrapper>
                }
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
);

const WeekTypeSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option value={0}>1-й числитель</option>
        <option value={1}>1-й знаменатель</option>
        <option value={2}>2-й числитель</option>
        <option value={3}>2-й знаменатель</option>
    </SelectBox>
);

const WeekDaySelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
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
        <option value="">---</option>
        <option value={1}>1 (09:00-10:30)</option>
        <option value={2}>2 (10:40-12:10)</option>
        <option value={3}>3 (12:20-14:20)*</option>
        <option value={4}>4 (14:30-16:00)</option>
        <option value={5}>5 (16:10:00-17:40)</option>
        <option value={6}>6 (18:20:00-19:50)</option>
        <option value={7}>7 (20:00-21:30)</option>
    </SelectBox>
);

const mapStateToProps = ({ Filters }) => ({
    resType: Filters.get('resType'),
    date: Filters.get('date'),
    weekType: Filters.get('weekType'),
    weekDay: Filters.get('weekDay'),
    pair: Filters.get('pair')
});

const mapDispatchToProps = (dispatch) => ({
    setResTypeFilter(payload) {
        dispatch(FilterActions.setResTypeFilter(payload))
    },
    setDateFilter(payload) {
        dispatch(FilterActions.setDateFilter(payload))
    },
    setWeekTypeFilter(payload) {
        dispatch(FilterActions.setWeekTypeFilter(payload))
    },
    setWeekDayFilter(payload) {
        dispatch(FilterActions.setWeekDayFilter(payload))
    },
    setPairFilter(payload) {
        dispatch(FilterActions.setPairFilter(payload))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DatetimeFilters);

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
