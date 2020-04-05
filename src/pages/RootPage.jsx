import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { compose, startPolling, stopPolling } from 'lib/utils';
import { AuthService } from 'core/services';
import { Header } from 'features/Header';
import { Dropdown } from 'features/Dropdown';
import { Modal } from 'features/Modal';
import { Preloader } from 'features/Preloader';
import { PrivateRoute } from 'lib/components';
import { Auth as Authorization } from 'features/Auth';

import { SchedulePage } from './Schedule';
import { ProfilePage } from './Profile';


const propTypes = {
  getConfig: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,

};

const CRootPage = ({ getConfig, getUser, isModalOpened, isDropdownOpened, hideDropdown }) => {
  const token = AuthService.getToken();

  useEffect(() => {
    getConfig();
    getUser();
  }, []);

  useEffect(() => {
    if (token) {
      startPolling('user', getUser, 30000, false);
      return () => {
        stopPolling('user');
      };
    }
  }, [token]);

  useEffect(() => {
    if (isModalOpened && isDropdownOpened) {
      hideDropdown();
    }
  }, [isModalOpened, isDropdownOpened]);

  return (
    <Wrapper>
      <Preloader />
      <Header />
      <Body>
        <Switch>
          <Route component={SchedulePage} exact path="/schedule" />
          <PrivateRoute component={ProfilePage} path="/profile" />
          <Redirect to="/schedule" />
        </Switch>
        <Dropdown>
          <Authorization />
        </Dropdown>
      </Body>
      <Modal />
    </Wrapper>
  );
};

CRootPage.propTypes = propTypes;

const mapStateToProps = ({ Config, Auth, Modal, Dropdown }) => ({
  getConfig: Config.getConfig,
  getUser: Auth.getUser,
  isModalOpened: Modal.isOpened,
  isDropdownOpened: Dropdown.isOpened,
  hideDropdown: Dropdown.hide,
});

export const RootPage = compose(
  inject(mapStateToProps),
)(CRootPage);

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  background: #f4f4f4;
  display: flex;
  flex: 1;
`;
