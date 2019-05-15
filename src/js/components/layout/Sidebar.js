import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as UIActions from 'js/actions/UIActions';
import FilterPager from './FilterPager';
import RoomFilters from 'js/components/filters/RoomFilters';
import DatetimeFilters from 'js/components/filters/DatetimeFilters';


class Sidebar extends Component {

    render() {
        const {
            activeFiltersTab
        } = this.props;
        return (
            <Wrapper>
                <FilterPager />
                {activeFiltersTab === 0 ? <RoomFilters /> : <DatetimeFilters />}
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ UI }) => ({
    activeFiltersTab: UI.get('activeFiltersTab')
});

const mapDispatchToProps = (dispatch) => ({
    changeFiltersTab: payload => dispatch(UIActions.changeFiltersTab(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

const Wrapper = styled.div`
    width: 286px;
    background: #fff;
    border-right: 1px solid #E2E2E2;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;
