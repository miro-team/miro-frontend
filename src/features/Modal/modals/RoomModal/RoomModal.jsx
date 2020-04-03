import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

import { compose } from 'utils';


const propTypes = {
  options: PropTypes.object,
};

const CRoomModal = ({ options }) => (
  <>
    RoomModal
  </>
);

CRoomModal.propTypes = propTypes;


const mapStateToProps = ({ UI }) => ({
  isDropdownOpened: UI.get('isDropdownOpened'),
  isModalOpened: UI.get('isModalOpened'),
});

export const RoomModal = compose(
  inject(mapStateToProps),
)(CRoomModal);
