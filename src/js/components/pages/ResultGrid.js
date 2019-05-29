import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Grid from 'js/components/common/Grid';
import PageTitle from 'js/components/common/PageTitle';

import * as UIActions from 'js/actions/UIActions';
import * as DataActions from 'js/actions/DataActions';


class ResultGrid extends Component {
    render() {
        const {
            pageNum,
            pageSize,
            resultData,
            resType,
            setPage,
        } = this.props;

        const pageCount = resultData.totalAmount ? Math.ceil(resultData.totalAmount / pageSize) : 0;
        const items = resultData.filteredEventList ? resultData.filteredEventList : [{}];
        const ApiTableFields = {
            roomId: '№ Аудитории',
            pairId: 'Пара',
            date: 'Дата',
            capacity: 'Вместимость',
            roomTypeId: 'Тип аудитории',
            weekNum: 'Неделя'
        }

        return (
            <Wrapper>
                <PageTitle>Результаты поиска аудиторий</PageTitle>
                <Grid items={items} pageNum={pageNum} setPage={setPage} pageCount={pageCount} tableFields={ApiTableFields} />
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ UI, Data, Filters }) => ({
    pageNum: UI.get('resultGridActivePage'),
    pageSize: UI.get('resultGridPageSize'),
    resultData: Data.get('resultData'),
    resType: Filters.get('resType')
});

const mapDispatchToProps = (dispatch) => ({
    setPage: payload => dispatch(UIActions.setResultGridPage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultGrid);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
