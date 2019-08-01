import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { media } from 'js/constants/media';

import * as FilterActions from 'js/actions/FilterActions';

import SelectBox from 'js/components/common/SelectBox';
import TextBox from 'js/components/common/TextBox';


const mapStateToProps = ({ Filters }) => ({
    building: Filters.get('building'),
    floor: Filters.get('floor'),
    roomType: Filters.get('roomType'),
    roomCapacity: Filters.get('roomCapacity'),
    roomNumber: Filters.get('roomNumber')
});

const mapDispatchToProps = (dispatch) => ({
    setBuildingFilter(payload) {
        dispatch(FilterActions.setBuildingFilter(payload))
    },
    setFloorFilter(payload) {
        dispatch(FilterActions.setFloorFilter(payload))
    },
    setRoomTypeFilter(payload) {
        dispatch(FilterActions.setRoomTypeFilter(payload))
    },
    setRoomCapacityFilter(payload) {
        dispatch(FilterActions.setRoomCapacityFilter(payload))
    },
    setRoomNumberFilter(payload) {
        dispatch(FilterActions.setRoomNumberFilter(payload))
    }
});


@connect(mapStateToProps, mapDispatchToProps)
class RoomFilters extends Component {

    handleBuildingChange = (e) => {
        this.props.setBuildingFilter(e.target.value);
    }

    handleFloorChange = (e) => {
        this.props.setFloorFilter(e.target.value);
    }

    handleRoomTypeChange = (e) => {
        this.props.setRoomTypeFilter(e.target.value);
    }

    handleRoomCapacityChange = (e) => {
        this.props.setRoomCapacityFilter(e.target.value);
    }

    handleRoomNumberChange = (e) => {
        this.props.setRoomNumberFilter(e.target.value);
    }

    render() {
        const { building, floor, roomType, roomCapacity, roomNumber } = this.props;

        return (
            <Wrapper>
                <FieldWrapper>
                    <BuildingSelectBox label="Корпус" value={building} onChange={this.handleBuildingChange} />
                </FieldWrapper>
                <FieldWrapper>
                    <FloorSelectBox label="Этаж" value={floor} onChange={this.handleFloorChange} />
                </FieldWrapper>
                <FieldWrapper>
                    <RoomTypeSelectBox label="Тип аудитории" value={roomType} onChange={this.handleRoomTypeChange} />
                </FieldWrapper>
                <FieldWrapper>
                    <TextBox label="Вместимость от" value={roomCapacity} onChange={this.handleRoomCapacityChange} />
                </FieldWrapper>
                <FieldWrapper>
                    <TextBox label="Номер аудитории" value={roomNumber} onChange={this.handleRoomNumberChange} />
                </FieldWrapper>
            </Wrapper>
        )
    }
}


export default RoomFilters;


const BuildingSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option value={1}>Первый</option>
        <option value={3}>Третий</option>
        <option value={4}>Четвертый</option>
    </SelectBox>
);

const FloorSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option value={1}>Первый</option>
        <option value={2}>Второй</option>
        <option value={3}>Третий</option>
    </SelectBox>
);

const RoomTypeSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option value={1}>Большая лекционная</option>
        <option value={2}>Малая лекционная</option>
        <option value={5}>Семинарская</option>
    </SelectBox>
);


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const FieldWrapper = styled.div`
    margin-bottom: 25px;
    ${media.xs} {
        margin-bottom: 15px;
    }
`;
