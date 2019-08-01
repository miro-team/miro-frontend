import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ScheduleGrid from 'js/components/schedule/ScheduleGrid';


class Schedule extends Component {
    render() {
        return (
            <Wrapper>
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
