import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { media } from 'js/constants/media';

import * as FilterActions from 'js/actions/FilterActions';

import SelectInput from 'js/components/common/SelectInput';
import TextInput from 'js/components/common/TextInput';
import AutosuggestInput from 'js/components/common/AutosuggestInput';
import FilterOptions from 'js/components/filters/stateless/FilterOptions';


const mapStateToProps = ({ Config, Filters }) => ({
  schemeOptions: Config.get('schemes'),
  roomTypeOptions: Config.get('roomTypes'),
  roomNumberOptions: Config.get('rooms'),

  scheme: Filters.get('scheme'),
  roomType: Filters.get('roomType'),
  roomCapacity: Filters.get('roomCapacity'),
  roomNumber: Filters.get('roomNumber'),
});

const mapDispatchToProps = dispatch => ({
  setSchemeFilter(payload) {
    dispatch(FilterActions.setSchemeFilter(payload));
  },
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
    schemeOptions: PropTypes.array.isRequired,
    roomTypeOptions: PropTypes.array.isRequired,
    roomNumberOptions: PropTypes.array.isRequired,

    scheme: PropTypes.number.isRequired,
    roomType: PropTypes.number.isRequired,
    roomCapacity: PropTypes.string.isRequired,
    roomNumber: PropTypes.number.isRequired,

    setSchemeFilter: PropTypes.func.isRequired,
    setBuildingFilter: PropTypes.func.isRequired,
    setFloorFilter: PropTypes.func.isRequired,
    setRoomTypeFilter: PropTypes.func.isRequired,
    setRoomCapacityFilter: PropTypes.func.isRequired,
    setRoomNumberFilter: PropTypes.func.isRequired,
  };

  handleSchemeChange = (e) => {
    const { setBuildingFilter, setFloorFilter, setSchemeFilter, schemeOptions } = this.props;
    const schemeId = +e.target.value;
    const {
      building,
      floor,
    } = schemeOptions.find(scheme => scheme.id === schemeId) || { building: -1, floor: -1 };
    setSchemeFilter(schemeId);
    setBuildingFilter(building);
    setFloorFilter(floor);
  };

  handleRoomTypeChange = (e) => {
    const { setRoomTypeFilter } = this.props;
    setRoomTypeFilter(e.target.value);
  };

  handleRoomCapacityChange = (e) => {
    const { setRoomCapacityFilter } = this.props;
    setRoomCapacityFilter(e.target.value);
  };

  handleRoomNumberChange = (e, { suggestion }) => {
    const { setRoomNumberFilter } = this.props;
    setRoomNumberFilter(suggestion.id);
  };

  getRoomNumberOptions = () => {
    const { roomNumberOptions: rooms, scheme: schemeId } = this.props;
    return schemeId !== -1 ? rooms.filter(room => room.schemeId === schemeId) : rooms;
  }

  render() {
    const {
      schemeOptions,
      roomTypeOptions,
      scheme,
      roomType,
      roomCapacity,
      roomNumber,
    } = this.props;

    return (
      <Wrapper>
        <FieldWrapper>
          <SelectInput label="Расположение" value={scheme} onChange={this.handleSchemeChange}>
            <FilterOptions options={schemeOptions} renderEmpty />
          </SelectInput>
        </FieldWrapper>
        <FieldWrapper>
          <SelectInput label="Тип аудитории" value={roomType} onChange={this.handleRoomTypeChange}>
            <FilterOptions options={roomTypeOptions} renderEmpty />
          </SelectInput>
        </FieldWrapper>
        <FieldWrapper>
          <TextInput
            label="Вместимость от"
            value={roomCapacity}
            onChange={this.handleRoomCapacityChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <AutosuggestInput
            label="Номер аудитории"
            roomId={roomNumber}
            options={this.getRoomNumberOptions()}
            onSuggestionSelected={this.handleRoomNumberChange}
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
