import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { useOnClickOutside } from 'og-react';

import { compose } from 'utils';
import { UIActions } from 'core/actions';
import { Auth } from 'features/Auth';


const propTypes = {
  hideDropdown: PropTypes.func.isRequired,
};

const CDropdown = ({ hideDropdown }) => {
  const handleHide = () => {
    hideDropdown();
  };

  const ref = useRef(null);
  useOnClickOutside(ref, handleHide);

  return (
    <Wrapper ref={ref}>
      <Auth />
    </Wrapper>
  );
};

CDropdown.propTypes = propTypes;

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  hideDropdown() {
    dispatch(UIActions.hideDropdown());
  },
});

export const Dropdown = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CDropdown);

const Appear = keyframes`
    from {
        opacity: 0;
        transform: translateY(45px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 250px;
  right: 0;
  font-size: 14px;
  position: absolute;
  box-shadow: 0 10px 21px 0 rgba(173, 182, 217, 0.3);
  animation: ${Appear} 0.2s linear;
  z-index: 9999;
  border-radius: 0 0 7px 7px;
`;
