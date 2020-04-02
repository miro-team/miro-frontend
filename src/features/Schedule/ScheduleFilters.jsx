import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject } from 'mobx-react';

import { compose } from 'utils';
import { media } from 'core/constants';
import { InputGroup } from 'ui';

import { ScheduleFilterPager } from './components/ScheduleFilterPager';
import { ScheduleRoomFilters } from './components/ScheduleRoomFilters';
import { ScheduleDatetimeFilters } from './components/ScheduleDatetimeFilters';


const propTypes = {
  activeFilterTab: PropTypes.number.isRequired,
};

const CScheduleFilters = ({ activeFilterTab }) => {
  return (
    <Wrapper>
      <PagerWrapper>
        <ScheduleFilterPager />
      </PagerWrapper>
      <InputGroup divided>
        {activeFilterTab === 0 && <ScheduleRoomFilters />}
        {activeFilterTab === 1 && <ScheduleDatetimeFilters />}
      </InputGroup>
    </Wrapper>
  );
};

CScheduleFilters.propTypes = propTypes;

const mapStateToProps = ({ ScheduleFilters }) => ({
  activeFilterTab: ScheduleFilters.activeFilterTab,
});

export const ScheduleFilters = compose(
  inject(mapStateToProps),
)(CScheduleFilters);

const Wrapper = styled.div`
  flex: 1;
`;

const PagerWrapper = styled.div`
  margin-bottom: 30px;

  ${media.xs} {
    margin-bottom: 15px;
  }
`;
