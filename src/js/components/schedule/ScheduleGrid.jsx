import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ScheduleActions from 'js/actions/ScheduleActions';

import Grid from 'js/components/common/Grid';
import PageTitle from 'js/components/common/PageTitle';


const mapStateToProps = ({ Schedule, Data }) => ({
  pageNum: Schedule.get('gridActivePage'),
  pageSize: Schedule.get('gridPageSize'),
  scheduleData: Data.get('scheduleData'),
  isPreloaderActive: Schedule.get('isGridPreloaderActive'),
});

const mapDispatchToProps = dispatch => ({
  setPage(payload) {
    dispatch(ScheduleActions.setGridPage(payload));
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class ScheduleGrid extends Component {
  static propTypes = {
    pageNum: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    scheduleData: PropTypes.shape({}).isRequired,
    isPreloaderActive: PropTypes.bool.isRequired,

    setPage: PropTypes.func.isRequired,
  };

  getGridData = (scheduleData) => {
    if (scheduleData && Array.isArray(scheduleData.filteredEventList)) {
      return scheduleData.filteredEventList;
    }

    return [];
  };

  render() {
    const { pageNum, pageSize, scheduleData, setPage, isPreloaderActive } = this.props;

    const columns = [
      {
        dataField: 'roomId',
        caption: '№ Аудитории',
      },
      {
        dataField: 'pairId',
        caption: 'Пара',
      },
      {
        dataField: 'date',
        caption: 'Дата',
      },
      {
        dataField: 'weekDay',
        caption: 'День недели',
      },
      {
        dataField: 'weekType',
        caption: 'Тип недели',
      },
    ];

    // const pageCount = scheduleData.pageCount; // Uncomment this after backend refactoring is done
    // Remove this after refactoring
    const pageCount = scheduleData ? Math.ceil(scheduleData.totalAmount / pageSize) : 1;
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
    );
  }
}

export default ScheduleGrid;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
