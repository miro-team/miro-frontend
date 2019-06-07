import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { ApiToTableFields } from 'js/constants/spec';

import * as UIActions from 'js/actions/UIActions';

import Grid from 'js/components/common/Grid';
import PageTitle from 'js/components/common/PageTitle';


class ScheduleGrid extends Component {
    render() {
        const {
            pageNum,
            pageSize,
            scheduleData,
            mapping,
            setPage,
            isPreloaderActive
        } = this.props;

        let items = null;
        let message = null;
        let pageCount = 0;

        if (scheduleData.data && scheduleData.data.filteredEventList) {
            if (scheduleData.data.filteredEventList.length) {
                items = scheduleData.data.filteredEventList;
                pageCount = Math.ceil(scheduleData.data.totalAmount / pageSize)
            } else {
                message = 'Ничего не найдено'
            }
        } else {
            message = scheduleData.message
        }

        return (
            <Wrapper>
                <PageTitle>Результаты поиска аудиторий</PageTitle>
                <Grid
                    items={items}
                    tableFields={ApiToTableFields}
                    message={message}
                    mapping={mapping}
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

const mapStateToProps = ({ UI, Data }) => ({
    pageNum: UI.get('scheduleGridActivePage'),
    pageSize: UI.get('scheduleGridPageSize'),
    scheduleData: Data.get('scheduleData'),
    mapping: Data.get('mapping'),
    isPreloaderActive: UI.get('isScheduleGridPreloaderActive')
});

const mapDispatchToProps = (dispatch) => ({
    setPage: payload => dispatch(UIActions.setScheduleGridPage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleGrid);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
