import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'js/constants/media';

import FilterBlackIcon from 'img/svg/filterBlack.svg';
import FilterWhiteIcon from 'img/svg/filterWhite.svg';
import CalendarBlackIcon from 'img/svg/calendarBlack.svg';
import CalendarWhiteIcon from 'img/svg/calendarWhite.svg';


export default function FilterPager({ activeTab, handleTabChange }) {
  return (
    <Wrapper>
      <StyledButton active={activeTab === 0} onClick={handleTabChange} id={0}>
        {activeTab === 0 ? (
          <FilterWhiteIcon className="icon" />
        ) : (
          <FilterBlackIcon className="icon" />
        )}
        Аудитория
      </StyledButton>
      <StyledButton active={activeTab === 1} onClick={handleTabChange} id={1}>
        {activeTab === 1 ? (
          <CalendarWhiteIcon className="icon" />
        ) : (
          <CalendarBlackIcon className="icon" />
        )}
        Дата
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
  margin-bottom: 25px;

  ${media.xs} {
    margin-bottom: 15px;
  }

  .icon {
    margin-right: 8px;
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

  font-family: Roboto;
  font-style: normal;
  font-weight: ${({ active }) => active && 500};
  font-size: 16px;
  line-height: 19px;
  color: ${({ active }) => active && '#fff'};

  ${media.xs} {
    font-size: 14px;
    padding: 7px;
  }
`;
