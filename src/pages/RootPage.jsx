import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { compose } from 'utils';
import { Header, Dropdown } from 'ui';
import { PrivateRoute } from 'shared/components/PrivateRoute';
import { Modal } from 'features/Modal';

import { SchedulePage } from './Schedule';
import { ProfilePage } from './Profile';


const propTypes = {
  isDropdownOpened: PropTypes.bool.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
};

const CRootPage = ({ isDropdownOpened, isModalOpened }) => (
  <Wrapper>
    <Header />
    <Body>
      <Switch>
        <Route component={SchedulePage} exact path="/schedule" />
        <PrivateRoute component={ProfilePage} path="/profile" />
        <Redirect to="/schedule" />
      </Switch>
      {isDropdownOpened && <Dropdown />}
    </Body>
    {isModalOpened && <Modal />}
  </Wrapper>
);

CRootPage.propTypes = propTypes;

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
