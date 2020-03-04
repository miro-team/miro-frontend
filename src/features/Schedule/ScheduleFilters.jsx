import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject } from 'mobx-react';

import { compose } from 'utils';
import { Input, Select, Button, InputGroup } from 'ui';


const propTypes = {

};

const CScheduleFilters = () => (
  <Wrapper>
    Filters
  </Wrapper>
);

CScheduleFilters.propTypes = propTypes;

const mapStateToProps = () => ({});

export const ScheduleFilters = compose(
  inject(mapStateToProps),
)(CScheduleFilters);

const Wrapper = styled.div`
  flex: 1;
`;
