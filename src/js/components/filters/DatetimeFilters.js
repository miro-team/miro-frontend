import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';

import SelectBox from 'js/components/common/SelectBox';
import getMonth from 'js/utils/getMonth';


class DatetimeFilters extends Component {

    render(){
        return (
            <Wrapper>
                <SelectBox label="Время события">
                    <option>Конкретная дата</option>
                    <option>Каждую неделю</option>
                    <option>Каждые 2 недели</option>
                    <option>Каждый месяц</option>
                </SelectBox>
                <SelectBox label="Тип недели">
                    <option>1-й числитель</option>
                    <option>1-й знаменатель</option>
                    <option>2-й числитель</option>
                    <option>2-й знаменатель</option>
                </SelectBox>
                <SelectBox label="День недели">
                    <option>Понедельник</option>
                    <option>Вторник</option>
                    <option>Среда</option>
                    <option>Четверг</option>
                    <option>Пятница</option>
                    <option>Суббота</option>
                </SelectBox>
                <SelectBox label="Пара">
                    <option>1 (09:00-10:30)</option>
                    <option>2 (10:40-12:10)</option>
                    <option>3 (12:20-14:20)*</option>
                    <option>4 (14:30-16:00)</option>
                    <option>5 (16:10:00-17:40)</option>
                    <option>6 (18:20:00-19:50)</option>
                    <option>7 (20:00-21:30)</option>
                </SelectBox>
                <Calendar
                    locale='ru'
                    formatMonthYear={(locale, date) => getMonth(date)}
                />
            </Wrapper>
        )
    }
}

export default DatetimeFilters;

const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		font-size: 12px;
`;
