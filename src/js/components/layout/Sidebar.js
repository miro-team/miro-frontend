import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FilterPager from 'js/components/filters/stateless/FilterPager';
import RoomFilters from 'js/components/filters/RoomFilters';
import DatetimeFilters from 'js/components/filters/DatetimeFilters';

import * as UIActions from 'js/actions/UIActions';


class Sidebar extends Component {

    handleTabChange = (e) => {
        const tabID = +e.target.id;
        this.props.setFiltersTab(tabID)
    }

    render() {
        const {
            activeFiltersTab
        } = this.props;
        
        return (
            <Wrapper>
                <FilterPager activeTab={activeFiltersTab} handleTabChange={this.handleTabChange} />
                {activeFiltersTab === 0 ? <RoomFilters /> : <DatetimeFilters />}
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ UI }) => ({
    activeFiltersTab: UI.get('activeFiltersTab')
});

const mapDispatchToProps = (dispatch) => ({
    setFiltersTab: payload => dispatch(UIActions.setFiltersTab(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

const Wrapper = styled.div`
    width: 286px;
    min-width: 286px;
    background: #fff;
    border-right: 1px solid #E2E2E2;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;
