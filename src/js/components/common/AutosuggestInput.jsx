import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import { media } from 'js/constants/media';


class AutosuggestInput extends Component {
  state = {
    value: '',
    suggestions: [],
  };

  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.array.isRequired,
    roomId: PropTypes.number.isRequired,

    onSuggestionSelected: PropTypes.func,
  };

  static defaultProps = {
    label: '',
    className: '',
    onSuggestionSelected: undefined,
  };

  componentDidUpdate(prevProps) {
    const { roomId } = this.props;
    if (roomId === -1 && prevProps.roomId !== -1) {
      this.clearField();
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  clearField = () => {
    this.setState({ value: '' });
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  getSuggestions = (value) => {
    const { options } = this.props;

    return options.filter(option => option.name.includes(value));
  }

  renderSuggestion = suggestion => <span>{suggestion.name}</span>;

  escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  getSuggestionValue = suggestion => suggestion.name;


  render() {
    const { label, className, onSuggestionSelected } = this.props;
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange,
    };

    return (
      <Wrapper className={className}>
        <Label>{label}</Label>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </Wrapper>
    );
  }
}

export default AutosuggestInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  margin-bottom: 6px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  ${media.xs} {
    font-size: 14px;
  }
`;
