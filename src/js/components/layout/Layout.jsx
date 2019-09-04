import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { media } from 'js/constants/media';

import * as UIActions from 'js/actions/UIActions';

import PrivateRoute from 'js/components/common/PrivateRoute';
import Header from 'js/components/layout/stateless/Header';
import Sidebar from 'js/components/layout/Sidebar';
import Dropdown from 'js/components/layout/Dropdown';
import Modal from 'js/components/modals/Modal';
import Schedule from 'js/components/schedule/Schedule';
import Profile from 'js/components/profile/Profile';


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
  openDropdown() {
    dispatch(UIActions.openDropdown());
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
    openDropdown: PropTypes.func.isRequired,
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
    const { isDropdownOpened, hideDropdown, openDropdown } = this.props;
    if (isDropdownOpened) {
      hideDropdown();
    } else {
      openDropdown();
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
          <Sidebar />
          {isDropdownOpened && <Dropdown />}
          <Content>
            <Switch>
              <Route component={Schedule} exact path="/" />
              <PrivateRoute component={Profile} path="/profile" />
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
