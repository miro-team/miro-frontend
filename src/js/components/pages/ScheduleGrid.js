import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { ApiToTableFields } from 'js/constants/spec';

import * as UIActions from 'js/actions/UIActions';
import * as DataActions from 'js/actions/DataActions';

import Grid from 'js/components/common/Grid';
import PageTitle from 'js/components/common/PageTitle';


class ScheduleGrid extends Component {
    render() {
        const {
            pageNum,
            pageSize,
            scheduleData,
            resType,
            setPage,
        } = this.props;

        const pageCount = scheduleData.totalAmount ? Math.ceil(scheduleData.totalAmount / pageSize) : 0;
        const items = scheduleData.filteredEventList ? scheduleData.filteredEventList : null;

        return (
            <Wrapper>
                <PageTitle>Результаты поиска аудиторий</PageTitle>
                <Grid
                    items={items}
                    tableFields={ApiToTableFields}
                    noItemsMessage="Ничего не найдено"
                    pageNum={pageNum}
                    pageSize={pageSize}
                    pageCount={pageCount}
                    setPage={setPage}
                />
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ UI, Data, Filters }) => ({
    pageNum: UI.get('scheduleGridActivePage'),
    pageSize: UI.get('scheduleGridPageSize'),
    scheduleData: Data.get('scheduleData'),
    resType: Filters.get('resType')
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
