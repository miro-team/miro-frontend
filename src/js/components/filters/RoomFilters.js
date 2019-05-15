import React from 'react';
import styled from 'styled-components';

import SelectBox from 'js/components/common/SelectBox';
import TextBox from 'js/components/common/TextBox';


function RoomFilters() {
  return (
    <Wrapper>
        <SelectBox label="Корпус">
            <option>Первый</option>
            <option>Третий</option>
            <option>Четвертый</option>
        </SelectBox>
        <SelectBox label="Этаж">
            <option>Первый</option>
            <option>Второй</option>
            <option>Третий</option>
        </SelectBox>
        <SelectBox label="Тип аудитории">
            <option>Большая лекционная</option>
            <option>Малая лекционная</option>
            <option>Семинарская</option>
        </SelectBox>
        <TextBox label="Вместимость от"/>
        <TextBox label="Номер аудитории"/>
    </Wrapper>
  )
}

export default RoomFilters;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
