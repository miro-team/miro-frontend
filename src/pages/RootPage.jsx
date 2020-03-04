import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { compose, startPolling, stopPolling } from 'utils';
import { Header } from 'features/Header';
import { Dropdown } from 'features/Dropdown';
import { Modal } from 'features/Modal';
import { Preloader } from 'features/Preloader';
import { PrivateRoute } from 'shared/components/PrivateRoute';
import { Auth as Authorization } from 'features/Auth';

import { SchedulePage } from './Schedule';
import { ProfilePage } from './Profile';


const propTypes = {
  getConfig: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

const CRootPage = ({ getConfig, getUser }) => {
  useEffect(() => {
    getConfig();
    startPolling('user', getUser, 15000);
    return () => {
      stopPolling('user');
    }
  }, []);

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

const mapStateToProps = ({ Config, Auth }) => ({
  getConfig: Config.getConfig,
  getUser: Auth.getUser,
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
