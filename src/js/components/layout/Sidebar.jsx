import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { media } from 'js/constants/media';

import * as UIActions from 'js/actions/UIActions';
import * as FilterActions from 'js/actions/FilterActions';

import Button from 'js/components/common/Button';
import FilterPager from 'js/components/filters/stateless/FilterPager';
import RoomFilters from 'js/components/filters/RoomFilters';
import DatetimeFilters from 'js/components/filters/DatetimeFilters';


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
  width: 286px;
  min-width: 286px;
  background: #fff;
  border-right: 1px solid #e2e2e2;
  padding: 30px;
  display: flex;
  flex-direction: column;
  ${media.sm} {
    width: 270px;
    min-width: 270px;
  }
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
