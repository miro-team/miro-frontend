import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FilterIconBlack from 'img/svg/filterBlack.svg';
import FilterIconWhite from 'img/svg/filterWhite.svg';
import CalendarIconBlack from 'img/svg/calendarBlack.svg';
import CalendarIconWhite from 'img/svg/calendarWhite.svg';

import * as UIActions from 'js/actions/UIActions';


class FilterPager extends Component {
  handleTabChange = (e) => {
    const tabID = +e.target.id;
    this.props.changeFiltersTab(tabID)
  }

  render(){
    const {
      activeFiltersTab
    } = this.props;

    return (
      <Wrapper>
          <StyledButton active={activeFiltersTab === 0} onClick={this.handleTabChange} id={0}><Icon src={activeFiltersTab === 0 ? FilterIconWhite : FilterIconBlack} alt="Filter Icon" />Filter</StyledButton>
          <StyledButton active={activeFiltersTab === 1} onClick={this.handleTabChange} id={1}><Icon src={activeFiltersTab === 1 ? CalendarIconWhite : CalendarIconBlack} alt="Calendar Icon" />Calendar</StyledButton>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ UI }) => ({
  activeFiltersTab: UI.get('activeFiltersTab')
});

const mapDispatchToProps = (dispatch) => ({
  changeFiltersTab: payload => dispatch(UIActions.changeFiltersTab(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPager);

const Wrapper = styled.div`
    display: flex;
    border-radius: 30px;
    border: 1px solid #D8D8D8;
    margin-bottom: 25px;
`;

const StyledButton = styled.button`
    appearance: none;
    cursor: ${({active}) => !active && 'pointer'};
    flex: ${({active}) => active ? 5 : 4};
    border-radius: 30px;
    border: 0;
    background: ${({active}) => active && '#C65757'};
    opacity: ${({active}) => active ? 1 : 0.6};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: ${({active}) => active && 500};
    font-size: 16px;
    line-height: 19px;
    color: ${({active}) => active && '#fff'};
`;

const Icon = styled.img`
    margin-right: 8px;
`;