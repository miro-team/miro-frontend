import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as UIActions from 'js/actions/UIActions';

import ModalHeader from 'js/components/modals/stateless/ModalHeader';


const mapStateToProps = ({ UI }) => ({
  modalOptions: UI.get('modalOptions'),
});

const mapDispatchToProps = dispatch => ({
  hideModal() {
    dispatch(UIActions.hideModal());
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class RoomModal extends Component {
  static propTypes = {
    modalOptions: PropTypes.object.isRequired,

    hideModal: PropTypes.func.isRequired,
  };

  render() {
    const { modalOptions, hideModal } = this.props;

    return (
      <>
        <ModalHeader handleHideModal={hideModal}>{modalOptions.title}</ModalHeader>
        <ModalContent>asd</ModalContent>
      </>
    );
  }
}

export default RoomModal;

const ModalContent = styled.div`
  padding: 25px;
`;
