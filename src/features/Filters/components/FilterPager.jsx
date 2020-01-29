// Refactor
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'core/constants/media';

import { ReactComponent as FilterIcon } from 'shared/assets/filter.svg';
import { ReactComponent as CalendarIcon } from 'shared/assets/calendar.svg';


export default function FilterPager({ activeTab, handleTabChange }) {
  return (
    <Wrapper>
      <StyledButton active={activeTab === 0} onClick={handleTabChange} id={0}>
        <FilterIcon />
        <span>Аудитория</span>
      </StyledButton>
      <StyledButton active={activeTab === 1} onClick={handleTabChange} id={1}>
        <CalendarIcon />
        <span>Дата</span>
      </StyledButton>
    </Wrapper>
  );
}

FilterPager.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  border-radius: 30px;
  border: 1px solid #d8d8d8;
  margin-bottom: 30px;
  ${media.xs} {
    margin-bottom: 15px;
  }
`;

const StyledButton = styled.button`
  appearance: none;
  cursor: ${({ active }) => !active && 'pointer'};
  flex: ${({ active }) => (active ? 5 : 4)};
  border-radius: 30px;
  border: 0;
  background: ${({ active }) => (active ? '#C65757' : '#fff')};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-weight: ${({ active }) => active && 500};
  font-size: 16px;
  color: ${({ active }) => active && '#fff'};
  ${media.xs} {
    font-size: 14px;
    padding: 7px;
  }
  svg {
    margin-right: 8px;
    fill: ${({ active }) => (active ? '#fff' : '#000')};
  }
`;
