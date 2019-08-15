import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'js/constants/media';

import * as UIActions from 'js/actions/UIActions';

import Header from 'js/components/layout/stateless/Header';
import Sidebar from 'js/components/layout/Sidebar';
import Dropdown from 'js/components/layout/Dropdown';
import Schedule from 'js/components/schedule/Schedule';


const mapStateToProps = ({ UI, Auth }) => ({
  isMobileSidebarOpened: UI.get('isMobileSidebarOpened'),
  isDropdownOpened: UI.get('isDropdownOpened'),
  isAuthorized: Auth.get('isAuthorized'),
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
    isAuthorized: PropTypes.bool.isRequired,

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
    const { isDropdownOpened, isAuthorized } = this.props;

    return (
      <MainWrapper>
        <Header
          handleToggleMobileSidebar={this.handleToggleMobileSidebar}
          handleToggleDropdown={this.handleToggleDropdown}
          isAuthorized={isAuthorized}
        />
        <Body>
          <Sidebar />
          {isDropdownOpened && <Dropdown />}
          <Content>
            <Schedule />
          </Content>
        </Body>
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
