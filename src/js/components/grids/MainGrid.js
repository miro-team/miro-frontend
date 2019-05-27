import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Table from 'js/components/common/Table';
import TablePager from 'js/components/common/TablePager';
import getPage from 'js/utils/getPage';
import getPageCount from 'js/utils/getPageCount';

import * as GridActions from 'js/actions/GridActions';


class MainGrid extends Component {
    render() {
        const items = [
            {
                roomId: '3224',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3323',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3226',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3322',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '1322',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3223',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '1201',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3223',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3223',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3223',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3223',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3223',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            },
            {
                roomId: '3223',
                pair: '3',
                weekType: '2-й знаменатель',
                roomTypeId: 'Семинарская',
                date: '13.05.2019'
            }
        ]
        const dataFields = {
            roomId: '№ Ауд',
            pairId: 'Пара',
            building: 'Корпус',
            weekDay: 'День недели',
            date: 'Дата'
        }
        const {
            activePage,
            displayCount,
            setPage,
            data
        } = this.props;

        const pageItems = getPage(data, activePage, displayCount);
        const pageCount = getPageCount(data, displayCount);

        return (
            <Wrapper>
                <Table items={pageItems} dataFields={dataFields} />
                <PagerWrapper>
                    <TablePager currentPage={activePage} pageCount={pageCount} handlePageChange={setPage} />
                </PagerWrapper>
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ Grids, Data }) => ({
    activePage: Grids.get('mainGridActivePage'),
    displayCount: Grids.get('mainGridDisplayCount'),
    data: Data.get('data')
});

const mapDispatchToProps = (dispatch) => ({
    setPage: payload => dispatch(GridActions.setMainGridPage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const PagerWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    right: 40px;
`;
