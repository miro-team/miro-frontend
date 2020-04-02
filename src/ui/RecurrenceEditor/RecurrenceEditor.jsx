import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { inject } from 'mobx-react';

import { compose, RRule } from 'utils';
import { Select } from 'ui';

import { CustomRecurrenceEditor } from './components/CustomRecurrenceEditor';


const propTypes = {

};

const CRecurrenceEditor = ({ startDate = new Date(0), value, onChange, isModalOpened, showModal, hideModal, ...rest }) => {
  const weeklyRule = new RRule({
    freq: RRule.WEEKLY,
    interval: 1,
  });
  const every2WeeksRule = new RRule({
    freq: RRule.WEEKLY,
    interval: 2,
  });
  const monthlyRule = new RRule({
    freq: RRule.WEEKLY,
    interval: 4,
  });

  const [options] = useState([
    {
      value: 'NO_REPEAT',
      text: 'не повторять',
    },
    {
      value: weeklyRule.toString(),
      text: weeklyRule.toText(),
    },
    {
      value: every2WeeksRule.toString(),
      text: every2WeeksRule.toText(),
    },
    {
      value: monthlyRule.toString(),
      text: monthlyRule.toText(),
    },
    {
      value: 'OTHER',
      text: 'другое...',
    },
  ]);

  const addCustomRecurrence = (value, text) => {
    options.splice(options.length - 1, 0, {
      value,
      text,
    });
    onChange(null, { value });
  };

  const resetValue = () => {
    onChange(null, { value: 'NO_REPEAT' });
  };

  useEffect(() => {
    if (value === 'OTHER') {
      showModal('Повтор события', CustomRecurrenceEditor, { startDate, addCustomRecurrence });
    }
  }, [value]);

  useEffect(() => {
    if (value === 'OTHER' && !isModalOpened) {
      resetValue();
    }
  }, [isModalOpened]);

  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      {...rest} />
  );
};

CRecurrenceEditor.propTypes = propTypes;

const mapStateToProps = ({ Modal }) => ({
  isModalOpened: Modal.isOpened,
  showModal: Modal.show,
  hideModal: Modal.hide,
});

export const RecurrenceEditor = compose(
  inject(mapStateToProps),
)(CRecurrenceEditor);


