import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject } from 'mobx-react';

import { compose } from 'utils';


const propTypes = {

};

const CSchedule = () => (
  <Wrapper>
      Schedule
  </Wrapper>
);

CSchedule.propTypes = propTypes;

const mapStateToProps = () => ({});

export const Schedule = compose(
  inject(mapStateToProps),
)(CSchedule);

const Wrapper = styled.div`
  
`;
