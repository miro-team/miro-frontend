import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as UIActions from 'js/actions/UIActions';


class Layout extends Component {

    render() {
        const {
            activeFiltersTab
        } = this.props;
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = ({ UI }) => ({
    activeFiltersTab: UI.get('activeFiltersTab')
});

const mapDispatchToProps = (dispatch) => ({
    changeFiltersTab: payload => dispatch(UIActions.changeFiltersTab(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
