// Refactor
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

import { compose } from 'utils';
import { media } from 'core/constants';
import { Icon } from 'ui';


const propTypes = {
  activeFilterTab: PropTypes.number.isRequired,

  showRoomFilters: PropTypes.func.isRequired,
  showDatetimeFilters: PropTypes.func.isRequired,
};

export const CScheduleFilterPager = ({ activeFilterTab, showRoomFilters, showDatetimeFilters }) => (
  <Wrapper>
    <StyledButton active={activeFilterTab === 0} onClick={showRoomFilters} id={0}>
      <StyledIcon name="bars" />
      <span>Аудитория</span>
    </StyledButton>
    <StyledButton active={activeFilterTab === 1} onClick={showDatetimeFilters} id={1}>
      <StyledIcon name="calendar alternate outline" />
      <span>Дата</span>
    </StyledButton>
  </Wrapper>
);

CScheduleFilterPager.propTypes = propTypes;

const mapStateToProps = ({ ScheduleFilters }) => ({
  activeFilterTab: ScheduleFilters.activeFilterTab,

  showRoomFilters: ScheduleFilters.showRoomFilters,
  showDatetimeFilters: ScheduleFilters.showDatetimeFilters,
});

export const ScheduleFilterPager = compose(
  inject(mapStateToProps),
)(CScheduleFilterPager);

const Wrapper = styled.div`
  display: flex;
  border-radius: 30px;
  border: 1px solid #d8d8d8;
`;

const StyledButton = styled.button`
  appearance: none;
  cursor: pointer;
  flex: 4;
  border-radius: 30px;
  border: 0;
  background: #fff;
  opacity: .6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 16px;

  ${media.xs} {
    font-size: 14px;
    padding: 7px;
  }

  ${({ active }) => active && css`
    cursor: default;
    pointer-events: none;
    flex: 5;
    background: #c65757;
    opacity: 1;
    font-weight: 500;
    color: #fff;
    svg {
      fill: #fff;
    }
  `}
`;

const StyledIcon = styled(Icon)`
  margin: 0 7px 3px 0 !important;
`;
