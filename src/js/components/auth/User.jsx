import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import LogoutIcon from 'img/svg/logout.svg';

// import { media } from 'js/constants/media';

import * as AuthActions from 'js/actions/AuthActions';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  logoutRequest() {
    dispatch(AuthActions.logoutRequest());
  },
});

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class User extends Component {
  static propTypes = {
    logoutRequest: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    const { logoutRequest } = this.props;

    logoutRequest();
  };

  render() {
    return (
      <Wrapper>
        <UserInfo>
          <FadedTitle>Вы вошли в систему как:</FadedTitle>
          <UserName>Фамилия И.О.</UserName>
        </UserInfo>
        <List>
          <ListItem>
            <StyledLink to="/profile/reservations">Резервации</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/profile/settings">Настройки</StyledLink>
          </ListItem>
        </List>
        <StyledButton onClick={this.handleLogout}>
          <StyledLogoutIcon />
          Выйти
        </StyledButton>
      </Wrapper>
    );
  }
}

export default User;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const FadedTitle = styled.div`
  color: #949494;
  margin-bottom: 10px;
`;

const UserName = styled.div``;

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
    color: red;
    cursor: pointer;
    svg {
      fill: red;
    }
  }
`;

const StyledLogoutIcon = styled(LogoutIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  transition: fill 0.2s ease;
`;
