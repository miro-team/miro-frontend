import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ScheduleGrid from './components/ScheduleGrid';


const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Schedule extends Component {
  render() {
    return (
      <Wrapper>
        <ScheduleGrid />
      </Wrapper>
    );
  }
}

export default Schedule;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  .main-container {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;
