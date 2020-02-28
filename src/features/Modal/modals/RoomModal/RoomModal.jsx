import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { compose } from 'utils';


const propTypes = {
  options: PropTypes.object,
};

const CRoomModal = ({ options }) => (
  <>
    asd
  </>
);

CRoomModal.propTypes = propTypes;


const mapStateToProps = ({ UI }) => ({
  isDropdownOpened: UI.get('isDropdownOpened'),
  isModalOpened: UI.get('isModalOpened'),
});

const mapDispatchToProps = () => ({

});

export const RoomModal = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CRoomModal);
