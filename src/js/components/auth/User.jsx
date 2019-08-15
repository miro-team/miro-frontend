import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { media } from 'js/constants/media';

import * as AuthActions from 'js/actions/AuthActions';

import Button from 'js/components/common/Button';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  logoutRequest() {
    dispatch(AuthActions.logoutRequest());
  },
});

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
          <InfoBlock>Вы вошли в систему как: Фамилия Имя Отчество</InfoBlock>
        </UserInfo>
        <ButtonWrapper>
          <StyledButton onClick={this.handleLogout} inverted>
            Выйти
          </StyledButton>
        </ButtonWrapper>
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
`;

const InfoBlock = styled.div``;

const ButtonWrapper = styled.div`
  margin-top: 15px;
  height: 40px;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  height: 40px;
`;
