import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from 'ui';
import ru from 'date-fns/locale/ru';


registerLocale('ru', ru);

const propTypes = {
  value: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  highlightDates: PropTypes.array,
  inline: PropTypes.bool,

  onChange: PropTypes.func,
};

export const DatePicker = ({ value, onChange, minDate, highlightDates, popperPlacement, inline, ...inputProps }) => {

  const ref = React.createRef();
  const CustomDateInput = forwardRef(({ onClick, value }, ref) => (
    <Input value={value} onClick={onClick} fluid {...inputProps} />
  ));
  CustomDateInput.propTypes = { onClick: PropTypes.func, value: PropTypes.string };
  CustomDateInput.displayName = 'CustomDateInput';

  return (
    <Wrapper>
      <ReactDatePicker
        dateFormat="dd.MM.yyyy (EEEEEE)"
        selected={value}
        locale="ru"
        onChange={date => (onChange !== undefined && onChange(date))}
        minDate={minDate}
        highlightDates={highlightDates}
        inline={inline}
        popperPlacement={popperPlacement}
        customInput={<CustomDateInput ref={ref} />}
      />
    </Wrapper>
  );
};

DatePicker.propTypes = propTypes;

const Wrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
`;
