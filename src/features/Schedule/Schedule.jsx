import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject } from 'mobx-react';

import { compose } from 'lib/utils';
import { ScheduleTable } from './components';


const propTypes = {};

const CSchedule = () => (
  <Wrapper>
    <ScheduleTable />
  </Wrapper>
);

CSchedule.propTypes = propTypes;

const mapStateToProps = () => ({});

export const Schedule = compose(
  inject(mapStateToProps),
)(CSchedule);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
