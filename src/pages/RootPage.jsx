import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { media } from 'core/constants/media';
import { UIActions } from 'core/actions';

import PrivateRoute from 'shared/components/PrivateRoute';

import { Modal } from 'features/Modal';
import { Schedule } from 'features/Schedule';
import { SidebarFilters } from 'features/Filters';

// Temporary imports
import Header from './layout/Header';
import Dropdown from './layout/Dropdown';

import Profile from './Profile';


const mapStateToProps = ({ UI }) => ({
  isMobileSidebarOpened: UI.get('isMobileSidebarOpened'),
  isDropdownOpened: UI.get('isDropdownOpened'),
  isModalOpened: UI.get('isModalOpened'),
});

const mapDispatchToProps = dispatch => ({
  openMobileSidebar() {
    dispatch(UIActions.openMobileSidebar());
  },
  hideMobileSidebar() {
    dispatch(UIActions.hideMobileSidebar());
  },
  showDropdown() {
    dispatch(UIActions.showDropdown());
  },
  hideDropdown() {
    dispatch(UIActions.hideDropdown());
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Layout extends Component {
  static propTypes = {
    isMobileSidebarOpened: PropTypes.bool.isRequired,
    isDropdownOpened: PropTypes.bool.isRequired,
    isModalOpened: PropTypes.bool.isRequired,

    openMobileSidebar: PropTypes.func.isRequired,
    hideMobileSidebar: PropTypes.func.isRequired,
    showDropdown: PropTypes.func.isRequired,
    hideDropdown: PropTypes.func.isRequired,
  };

  handleToggleMobileSidebar = () => {
    const { isMobileSidebarOpened, hideMobileSidebar, openMobileSidebar } = this.props;
    if (isMobileSidebarOpened) {
      hideMobileSidebar();
    } else {
      openMobileSidebar();
    }
  };

  handleToggleDropdown = () => {
    const { isDropdownOpened, hideDropdown, showDropdown } = this.props;
    if (isDropdownOpened) {
      hideDropdown();
    } else {
      showDropdown();
    }
  };

  render() {
    const { isDropdownOpened, isModalOpened } = this.props;

    return (
      <MainWrapper>
        <Header
          handleToggleMobileSidebar={this.handleToggleMobileSidebar}
          handleToggleDropdown={this.handleToggleDropdown}
        />
        <Body>
          <Sidebar>
            <SidebarFilters />
          </Sidebar>
          {isDropdownOpened && <Dropdown />}
          <Content>
            <Switch>
              <Route component={Schedule} exact path="/" />
              <PrivateRoute component={Profile} path="/profile" />
              <Redirect to="/" />
            </Switch>
          </Content>
        </Body>
        {isModalOpened && <Modal />}
      </MainWrapper>
    );
  }
}

export default Layout;

const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  background: #f4f4f4;
  display: flex;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 40px 25px 40px;
  background: #f4f4f4;
  overflow: hidden;
  ${media.xs} {
    padding: 30px;
  }
`;

const Sidebar = styled.div`
  width: 286px;
  background: #fff;
  border-right: 1px solid #e2e2e2;
  padding: 30px;
  display: flex;
`;
