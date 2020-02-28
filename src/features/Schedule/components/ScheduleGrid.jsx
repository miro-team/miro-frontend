import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ScheduleActions, UIActions } from 'core/actions';

import Grid from 'shared/components/Grid';


const mapStateToProps = ({ Schedule }) => ({
  pageNum: Schedule.get('gridActivePage'),
  pageSize: Schedule.get('gridPageSize'),
  scheduleData: Schedule.get('data'),
  isPreloaderActive: Schedule.get('isGridPreloaderActive'),
});

const mapDispatchToProps = dispatch => ({
  setPage(payload) {
    dispatch(ScheduleActions.setGridPage(payload));
  },
  showModal(payload) {
    dispatch(UIActions.showModal(payload));
  },
  hideModal(payload) {
    dispatch(UIActions.hideModal(payload));
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
    scheduleData: PropTypes.object.isRequired,
    isPreloaderActive: PropTypes.bool.isRequired,

    setPage: PropTypes.func.isRequired,
  };

  getGridData = (scheduleData) => {
    if (scheduleData && Array.isArray(scheduleData.events)) {
      return scheduleData.events;
    }
    return [];
  };

  render() {
    const { pageNum, pageSize, scheduleData, setPage, isPreloaderActive } = this.props;

    const columns = [
      {
        dataField: 'room',
        caption: '№ Аудитории',
      },
      {
        dataField: 'roomType',
        caption: 'Тип аудитории',
      },
      {
        dataField: 'pair',
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
    ];

    const { pageCount } = scheduleData;
    const gridData = this.getGridData(scheduleData);
    const message = gridData.length ? '' : 'Ничего не найдено';

    return (
      <Wrapper>
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
