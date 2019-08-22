import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import { media } from 'js/constants/media';

import * as FilterActions from 'js/actions/FilterActions';

import SelectBox from 'js/components/common/SelectBox';
import TextBox from 'js/components/common/TextBox';


const mapStateToProps = ({ App, Filters }) => ({
  filters: App.get('filters'),
  building: Filters.get('building'),
  floor: Filters.get('floor'),
  roomType: Filters.get('roomType'),
  roomCapacity: Filters.get('roomCapacity'),
  roomNumber: Filters.get('roomNumber'),
});

const mapDispatchToProps = dispatch => ({
  setBuildingFilter(payload) {
    dispatch(FilterActions.setBuildingFilter(payload));
  },
  setFloorFilter(payload) {
    dispatch(FilterActions.setFloorFilter(payload));
  },
  setRoomTypeFilter(payload) {
    dispatch(FilterActions.setRoomTypeFilter(payload));
  },
  setRoomCapacityFilter(payload) {
    dispatch(FilterActions.setRoomCapacityFilter(payload));
  },
  setRoomNumberFilter(payload) {
    dispatch(FilterActions.setRoomNumberFilter(payload));
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class RoomFilters extends Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    building: PropTypes.number.isRequired,
    floor: PropTypes.number.isRequired,
    roomType: PropTypes.number.isRequired,
    roomCapacity: PropTypes.string.isRequired,
    roomNumber: PropTypes.string.isRequired,

    setBuildingFilter: PropTypes.func.isRequired,
    setFloorFilter: PropTypes.func.isRequired,
    setRoomTypeFilter: PropTypes.func.isRequired,
    setRoomCapacityFilter: PropTypes.func.isRequired,
    setRoomNumberFilter: PropTypes.func.isRequired,
  };

  handleBuildingChange = (e) => {
    const { setBuildingFilter } = this.props;
    setBuildingFilter(+e.target.value);
  };

  handleFloorChange = (e) => {
    const { setFloorFilter } = this.props;
    setFloorFilter(+e.target.value);
  };

  handleRoomTypeChange = (e) => {
    const { setRoomTypeFilter } = this.props;
    setRoomTypeFilter(+e.target.value);
  };

  handleRoomCapacityChange = (e) => {
    const { setRoomCapacityFilter } = this.props;
    setRoomCapacityFilter(e.target.value);
  };

  handleRoomNumberChange = (e) => {
    const { setRoomNumberFilter } = this.props;
    setRoomNumberFilter(e.target.value);
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
    const { filters, building, floor, roomType, roomCapacity, roomNumber } = this.props;

    return (
      <Wrapper>
        <FieldWrapper>
          <SelectBox label="Корпус" value={building} onChange={this.handleBuildingChange}>
            {this.renderOptions(filters.buildings)}
          </SelectBox>
        </FieldWrapper>
        <FieldWrapper>
          <SelectBox label="Этаж" value={floor} onChange={this.handleFloorChange}>
            {this.renderOptions(filters.floors)}
          </SelectBox>
        </FieldWrapper>
        <FieldWrapper>
          <SelectBox label="Тип аудитории" value={roomType} onChange={this.handleRoomTypeChange}>
            {this.renderOptions(filters.roomTypes)}
          </SelectBox>
        </FieldWrapper>
        <FieldWrapper>
          <TextBox
            label="Вместимость от"
            value={roomCapacity}
            onChange={this.handleRoomCapacityChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <TextBox
            label="Номер аудитории"
            value={roomNumber}
            onChange={this.handleRoomNumberChange}
          />
        </FieldWrapper>
      </Wrapper>
    );
  }
}

export default RoomFilters;

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
