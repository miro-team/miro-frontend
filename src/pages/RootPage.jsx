import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { compose } from 'utils';
import { Header } from 'features/Header';
import { Dropdown } from 'features/Dropdown';
import { Modal } from 'features/Modal';
import { PrivateRoute } from 'shared/components/PrivateRoute';
import { Auth } from 'features/Auth';

import { SchedulePage } from './Schedule';
import { ProfilePage } from './Profile';


const CRootPage = () => (
  <Wrapper>
    <Header />
    <Body>
      <Switch>
        <Route component={SchedulePage} exact path="/schedule" />
        <PrivateRoute component={ProfilePage} path="/profile" />
        <Redirect to="/schedule" />
      </Switch>
      <Dropdown>
        <Auth />
      </Dropdown>
    </Body>
    <Modal />
  </Wrapper>
);

const mapStateToProps = ({ UI }) => ({
  isDropdownOpened: UI.get('isDropdownOpened'),
  isModalOpened: UI.get('isModalOpened'),
});

const mapDispatchToProps = () => ({});

export const RootPage = compose(
  connect(mapStateToProps, mapDispatchToProps),
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
