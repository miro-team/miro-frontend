import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './stateless/Header';
import Sidebar from './Sidebar';
import PageTitle from 'js/components/common/PageTitle';
import MainGrid from 'js/components/grids/MainGrid';
import getFilteredData from 'js/utils/getFilteredData';

import * as UIActions from 'js/actions/UIActions';
import * as DataActions from 'js/actions/DataActions';


class Layout extends Component {

    render() {

        const {
            building,
            floor,
            roomType,
            roomCapacity,
            roomNumber,
            date,
            weekType,
            weekDay,
            pair,
            setData
        } = this.props;
        
        getFilteredData(setData, building, floor, roomType, roomCapacity, roomNumber, date, weekType, weekDay, pair);

        return (
            <MainWrapper>
                <Header />
                <Body>
                    <Sidebar />
                    <Content>
                        <PageTitle>Результаты поиска аудиторий</PageTitle>
                        <MainGrid />
                    </Content>
                </Body>
            </MainWrapper>
        )
    }
}

const mapStateToProps = ({ Filters }) => ({
    building: Filters.get('building'),
    floor: Filters.get('floor'),
    roomType: Filters.get('roomType'),
    roomCapacity: Filters.get('roomCapacity'),
    roomNumber: Filters.get('roomNumber'),
    date: Filters.get('date'),
    weekType: Filters.get('weekType'),
    weekDay: Filters.get('weekDay'),
    pair: Filters.get('pair')
});

const mapDispatchToProps = (dispatch) => ({
    setData: payload => dispatch(DataActions.setData(payload))
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
