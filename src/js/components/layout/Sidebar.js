import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FilterPager from 'js/components/filters/stateless/FilterPager';
import RoomFilters from 'js/components/filters/RoomFilters';
import DatetimeFilters from 'js/components/filters/DatetimeFilters';

import * as UIActions from 'js/actions/UIActions';
import * as FilterActions from 'js/actions/FilterActions';

import Button from 'js/components/common/Button';


class Sidebar extends Component {

    handleTabChange = (e) => {
        const tabID = +e.target.id;
        this.props.setFiltersTab(tabID)
    }

    render() {
        const {
            activeFiltersTab,
            resetFilters
        } = this.props;

        return (
            <Wrapper>
                <FilterPager activeTab={activeFiltersTab} handleTabChange={this.handleTabChange} />
                {activeFiltersTab === 0 ? <RoomFilters /> : <DatetimeFilters />}
                <SidebarFooter>
                    <ButtonWrapper>
                        <Button onClick={resetFilters}>Очистить фильтры</Button>
                    </ButtonWrapper>
                </SidebarFooter>
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ UI }) => ({
    activeFiltersTab: UI.get('activeFiltersTab')
});

const mapDispatchToProps = (dispatch) => ({
    setFiltersTab: payload => dispatch(UIActions.setFiltersTab(payload)),
    resetFilters: () => dispatch(FilterActions.resetFilters())
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

const SidebarFooter = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
    display: flex;
    height: 50px;
`;
