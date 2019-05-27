import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SelectBox from 'js/components/common/SelectBox';
import TextBox from 'js/components/common/TextBox';

import * as FilterActions from 'js/actions/FilterActions';


class RoomFilters extends Component {
    handleBuildingChange = e => this.props.setBuildingFilter(e.target.value);
    handleFloorChange = e => this.props.setFloorFilter(e.target.value);
    handleRoomTypeChange = e => this.props.setRoomTypeFilter(e.target.value);
    handleRoomCapacityChange = e => this.props.setRoomCapacityFilter(e.target.value);
    handleRoomNumberChange = e => this.props.setRoomNumberFilter(e.target.value);

    render() {
        const {
            building,
            floor,
            roomType,
            roomCapacity,
            roomNumber
        } = this.props;

        return (
            <Wrapper>
                <BuildingSelectBox label="Корпус" value={building} onChange={this.handleBuildingChange} />
                <FloorSelectBox label="Этаж" value={floor} onChange={this.handleFloorChange} />
                <RoomTypeSelectBox label="Тип аудитории" value={roomType} onChange={this.handleRoomTypeChange} />
                <TextBox label="Вместимость от" value={roomCapacity} onChange={this.handleRoomCapacityChange} />
                <TextBox label="Номер аудитории" value={roomNumber} onChange={this.handleRoomNumberChange} />
            </Wrapper>
        )
    }
}

const BuildingSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option value={1}>Первый</option>
        <option value={3}>Третий</option>
        <option value={4}>Четвертый</option>
    </SelectBox>
)

const FloorSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option>Первый</option>
        <option>Второй</option>
        <option>Третий</option>
    </SelectBox>
)

const RoomTypeSelectBox = props => (
    <SelectBox {...props}>
        <option value="">---</option>
        <option>Большая лекционная</option>
        <option>Малая лекционная</option>
        <option>Семинарская</option>
    </SelectBox>
)

const mapStateToProps = ({ Filters }) => ({
    building: Filters.get('building'),
    floor: Filters.get('floor'),
    roomType: Filters.get('roomType'),
    roomCapacity: Filters.get('roomCapacity'),
    roomNumber: Filters.get('roomNumber')
});

const mapDispatchToProps = (dispatch) => ({
    setBuildingFilter: payload => dispatch(FilterActions.setBuildingFilter(payload)),
    setFloorFilter: payload => dispatch(FilterActions.setFloorFilter(payload)),
    setRoomTypeFilter: payload => dispatch(FilterActions.setRoomTypeFilter(payload)),
    setRoomCapacityFilter: payload => dispatch(FilterActions.setRoomCapacityFilter(payload)),
    setRoomNumberFilter: payload => dispatch(FilterActions.setRoomNumberFilter(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomFilters);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
