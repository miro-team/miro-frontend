import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as ScheduleActions from 'js/actions/ScheduleActions';

import Grid from 'js/components/common/Grid';
import PageTitle from 'js/components/common/PageTitle';


class ScheduleGrid extends Component {

    getGridData(scheduleData) {
        if (scheduleData && Array.isArray(scheduleData.filteredEventList)) {
            return scheduleData.filteredEventList;
        }
        else {
            return [];
        }
    }

    render() {
        const { pageNum, pageSize, scheduleData, setPage, isPreloaderActive } = this.props;

        const columns = [
            {
                dataField: 'roomId',
                caption: '№ Аудитории'
            },
            {
                dataField: 'pairId',
                caption: 'Пара'
            },
            {
                dataField: 'date',
                caption: 'Дата'
            },
            {
                dataField: 'weekDay',
                caption: 'День недели'
            },
            {
                dataField: 'weekType',
                caption: 'Тип недели'
            }
        ];

        //const pageCount = scheduleData.pageCount; // Uncomment this after backend refactoring is done
        const pageCount = scheduleData ? Math.ceil(scheduleData.totalAmount / pageSize) : 1; // Remove this after refactoring

        const gridData = this.getGridData(scheduleData);
        const message = gridData.length ? '' : 'Ничего не найдено';

        return (
            <Wrapper>
                <PageTitle>Результаты поиска аудиторий</PageTitle>
                <Grid
                    data={gridData}
                    columns={columns}
                    message={message}
                    pageNum={pageNum}
                    pageSize={pageSize}
                    pageCount={pageCount}
                    setPage={setPage}
                    isPreloaderActive={isPreloaderActive}
                />
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ Schedule, Data }) => ({
    pageNum: Schedule.get('gridActivePage'),
    pageSize: Schedule.get('gridPageSize'),
    scheduleData: Data.get('scheduleData'),
    isPreloaderActive: Schedule.get('isGridPreloaderActive')
});

const mapDispatchToProps = (dispatch) => ({
    setPage(payload) {
        dispatch(ScheduleActions.setGridPage(payload))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleGrid);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
