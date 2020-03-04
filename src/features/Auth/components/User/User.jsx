import React, { Component } from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { compose } from 'utils';
import { Icon } from 'ui';


class CUser extends Component {
  static propTypes = {
    username: PropTypes.string,
    fullname: PropTypes.string,

    logout: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { username, fullname } = this.props;

    return (
      <Wrapper>
        <UserInfo>
          <UserName>{username || 'Загрузка...'}</UserName>
          <FullName>{fullname || 'Загрузка...'}</FullName>
        </UserInfo>
        <List>
          <ListItem>
            <StyledLink to="/profile/reservations">
              <Icon name="list alternate outline" />
              <span>Резервации</span>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/profile/settings">
              <Icon name="setting" />
              <span>Настройки</span>
            </StyledLink>
          </ListItem>
        </List>
        <StyledButton onClick={this.handleLogout}>
          <Icon name="sign-out" />
          <span>Выйти</span>
        </StyledButton>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ Auth }) => ({
  username: Auth.username,
  fullname: Auth.fullname,
  logout: Auth.logout,
});

export const User = compose(
  withRouter,
  inject(mapStateToProps),
)(CUser);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px 15px 25px;
`;

const UserName = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;

const FullName = styled.div`
  color: #949494;
  font-size: 13px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0 0 10px 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  height: 45px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  &:first-of-type {
    border-top: 1px solid #e0e0e0;
  }
`;

const StyledLink = styled(Link)`
  padding-left: 25px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  &:hover {
    background: #efefef;
  }
`;

const StyledButton = styled.button`
  appearance: none;
  background: #fff;
  width: 100%;
  height: 45px;
  border: 0;
  text-align: left;
  padding-left: 25px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  &:hover {
    color: #cc0000;
    cursor: pointer;
    svg {
      fill: #cc0000;
    }
  }
`;
