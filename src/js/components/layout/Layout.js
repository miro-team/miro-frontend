import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as UIActions from 'js/actions/UIActions';
import Header from './stateless/Header';
import Sidebar from './Sidebar';
import Table from 'js/components/common/Table';
import PageTitle from 'js/components/common/PageTitle';


class Layout extends Component {

    render() {
        const {
            activeFiltersTab
        } = this.props;
        return (
            <MainWrapper>
                <Header />
                <Body>
                    <Sidebar />
                    <Content>
                        <PageTitle>Результаты поиска аудиторий</PageTitle>
                        <Table />
                    </Content>
                </Body>
            </MainWrapper>
        )
    }
}

const mapStateToProps = ({ UI }) => ({
    activeFiltersTab: UI.get('activeFiltersTab')
});

const mapDispatchToProps = (dispatch) => ({
    changeFiltersTab: payload => dispatch(UIActions.changeFiltersTab(payload))
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
    flex: 1;
    padding: 40px;
    background: #f4f4f4;
`;
