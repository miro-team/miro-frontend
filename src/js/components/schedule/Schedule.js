import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ScheduleGrid from 'js/components/schedule/ScheduleGrid';
import EventDetails from 'js/components/schedule/stateless/EventDetails';
import EventTransfers from 'js/components/schedule/stateless/EventTransfers';


class Schedule extends Component {
    render() {
        return (
            <Wrapper>
                <EventTransfers/>
                <ScheduleGrid/>
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ UI, App }) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);

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
