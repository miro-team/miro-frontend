import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './stateless/Header';
import Sidebar from './Sidebar';
import ResultGrid from 'js/components/pages/ResultGrid';

import * as UIActions from 'js/actions/UIActions';
import * as DataActions from 'js/actions/DataActions';


class Layout extends Component {

    render() {

        const {

        } = this.props;

        return (
            <MainWrapper>
                <Header />
                <Body>
                    <Sidebar />
                    <Content>
                        <ResultGrid />
                    </Content>
                </Body>
            </MainWrapper>
        )
    }
}

const mapStateToProps = ({ Filters }) => ({

});

const mapDispatchToProps = (dispatch) => ({

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
    padding: 40px;
    background: #f4f4f4;
`;
