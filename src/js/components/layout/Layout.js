import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media } from 'js/constants/media';

import * as UIActions from 'js/actions/UIActions';

import Header from 'js/components/layout/stateless/Header';
import Sidebar from 'js/components/layout/Sidebar';
import Dropdown from 'js/components/layout/Dropdown';
import Schedule from 'js/components/schedule/Schedule';


const mapStateToProps = ({ UI }) => ({
    isMobileSidebarOpened: UI.get('isMobileSidebarOpened'),
    isDropdownOpened: UI.get('isDropdownOpened')
});

const mapDispatchToProps = (dispatch) => ({
    openMobileSidebar() {
        dispatch(UIActions.openMobileSidebar())
    },
    hideMobileSidebar() {
        dispatch(UIActions.hideMobileSidebar())
    },
    openDropdown() {
        dispatch(UIActions.openDropdown())
    },
    hideDropdown() {
        dispatch(UIActions.hideDropdown())
    }
});


@connect(mapStateToProps, mapDispatchToProps)
class Layout extends Component {

    handleToggleMobileSidebar = () => {
        const { isMobileSidebarOpened, hideMobileSidebar, openMobileSidebar } = this.props;
        isMobileSidebarOpened ? hideMobileSidebar() : openMobileSidebar()
    }

    handleToggleDropdown = () => {
        const { isDropdownOpened, hideDropdown, openDropdown } = this.props;
        isDropdownOpened ? hideDropdown() : openDropdown()
    }

    render() {

        const { isDropdownOpened } = this.props;

        return (
            <MainWrapper>
                <Header handleToggleMobileSidebar={this.handleToggleMobileSidebar} handleToggleDropdown={this.handleToggleDropdown} />
                <Body>
                    <Sidebar />
                    {isDropdownOpened &&
                        <Dropdown />
                    }
                    <Content>
                        <Schedule />
                    </Content>
                </Body>
            </MainWrapper>
        )
    }
}


export default Layout;


const MainWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Body = styled.div`
    background: #F4F4F4;
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
