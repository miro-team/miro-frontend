import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './stateless/Header';
import Sidebar from './Sidebar';
import ScheduleGrid from 'js/components/pages/ScheduleGrid';
import { media } from 'js/constants/media';

import * as UIActions from 'js/actions/UIActions';
import * as DataActions from 'js/actions/DataActions';


class Layout extends Component {

    handleToggleMobileSidebar = () => {
        this.props.isMobileSidebarOpened ? this.props.closeMobileSidebar() : this.props.openMobileSidebar()
    }

    componentDidMount() {
        this.props.getMapRequest();
        this.props.getScheduleRequest();
    }

    render() {

        const {
            
        } = this.props;

        return (
            <MainWrapper>
                <Header handleToggleMobileSidebar={this.handleToggleMobileSidebar}/>
                <Body>
                    <Sidebar />
                    <Content>
                        <ScheduleGrid />
                    </Content>
                </Body>
            </MainWrapper>
        )
    }
}

const mapStateToProps = ({ UI }) => ({
    isMobileSidebarOpened: UI.get('isMobileSidebarOpened')
});

const mapDispatchToProps = (dispatch) => ({
    getMapRequest: () => dispatch(DataActions.getMapRequest()),
    getScheduleRequest: () => dispatch(DataActions.getScheduleRequest()),
    openMobileSidebar: () => dispatch(UIActions.openMobileSidebar()),
    closeMobileSidebar: () => dispatch(UIActions.closeMobileSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

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

    ${media.xs} {
        padding: 30px;
    }
`;
