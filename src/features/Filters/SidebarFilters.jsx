import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { media } from 'core/constants/media';

import { UIActions, FilterActions } from 'core/actions';

import Button from 'shared/components/Button';

import RoomFilters from './RoomFilters';
import DatetimeFilters from './DatetimeFilters';
import FilterPager from './components/FilterPager';


const mapStateToProps = ({ UI }) => ({
  activeFiltersTab: UI.get('activeFiltersTab'),
});

const mapDispatchToProps = dispatch => ({
  setFiltersTab(payload) {
    dispatch(UIActions.setFiltersTab(payload));
  },
  resetFilters() {
    dispatch(FilterActions.resetFilters());
  },
});

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Sidebar extends Component {
  static propTypes = {
    activeFiltersTab: PropTypes.number.isRequired,
    location: PropTypes.object.isRequired,

    setFiltersTab: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired,
  };

  handleTabChange = (e) => {
    const { setFiltersTab } = this.props;
    setFiltersTab(+e.currentTarget.id);
  };

  render() {
    const { activeFiltersTab, resetFilters, location } = this.props;

    if (location.pathname !== '/') {
      return null;
    }

    return (
      <Wrapper>
        <FilterPager activeTab={activeFiltersTab} handleTabChange={this.handleTabChange} />
        {activeFiltersTab === 0 ? <RoomFilters /> : <DatetimeFilters />}
        <SidebarFooter>
          <ButtonWrapper>
            <Button onClick={resetFilters}>Очистить фильтры</Button>
          </ButtonWrapper>
        </SidebarFooter>
      </Wrapper>
    );
  }
}

export default Sidebar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const SidebarFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 50px;
  ${media.xs} {
    height: 35px;
  }
`;
