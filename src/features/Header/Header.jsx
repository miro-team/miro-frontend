import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { withRouter, Link } from 'react-router-dom';

import { media } from 'core/constants/media';
import { compose } from 'utils';
import { ReactComponent as UserIcon } from 'shared/assets/user.svg';
import { Icon } from 'ui';


const propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  isDropdownOpened: PropTypes.bool.isRequired,

  showDropdown: PropTypes.func.isRequired,
  hideDropdown: PropTypes.func.isRequired,
};

const CHeader = ({
  isDropdownOpened,
  isAuthorized,
  showDropdown,
  hideDropdown,
}) => {
  const handleToggleDropdown = () => {
    if (isDropdownOpened) {
      hideDropdown();
    } else {
      showDropdown();
    }
  };

  return (
    <Wrapper>
      <HeaderLeft>
        <LogoWithLink to="/">MIRO</LogoWithLink>
      </HeaderLeft>
      <HeaderRight>
        <UserProfile onClick={handleToggleDropdown}>
          <span>{isAuthorized ? 'Учетная запись' : 'Авторизация'}</span>
          <Icon name="user circle" size="large" invertMargin />
        </UserProfile>
      </HeaderRight>
    </Wrapper>
  );
};

CHeader.propTypes = propTypes;

const mapStateToProps = ({ Auth, UI, Dropdown }) => ({
  isAuthorized: Auth.isAuthorized,
  isDropdownOpened: Dropdown.isOpened,

  showDropdown: Dropdown.show,
  hideDropdown: Dropdown.hide,
});

export const Header = compose(
  withRouter,
  inject(mapStateToProps),
)(CHeader);

export const Wrapper = styled.div`
  height: 53px;
  min-height: 53px;
  background: #c65757;
  display: flex;
  justify-content: space-between;
  ${media.xs} {
    height: 45px;
    min-height: 45px;
  }
`;

const StyledUserIcon = styled(Icon)`
  margin: 0 0 0 10px !important;
`;

const MobileSidebarButton = styled.div`
  display: none;
  ${media.xs} {
    width: 45px;
    min-width: 45px;
    border: 0;
    height: 100%;
    background: #c65757;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;
  }
`;

const UserProfile = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  height: 100%;
  cursor: pointer;
  user-select: none;

  width: 250px;
  border-left: 1px solid #a53232;
  border-right: 1px solid #a53232;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWithLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  text-decoration: none;
  padding-left: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.08em;
`;
