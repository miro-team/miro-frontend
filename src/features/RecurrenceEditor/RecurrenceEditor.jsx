import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { inject } from 'mobx-react';

import { compose, RRule } from 'lib/utils';
import { Select } from 'ui/inputs';

import { CustomRecurrenceEditor } from './components';


const propTypes = {

};

const CRecurrenceEditor = ({
  startDate,
  value,
  customRecurrencies,
  semesterEnd,
  onChange,
  isModalOpened,
  addCustomRecurrence,
  showModal,
  hideModal,
  ...rest
}) => {

  const weeklyRule = new RRule({
    freq: RRule.WEEKLY,
    interval: 1,
    endingType: RRule.SEMESTER,
    semesterEnd,
  });
  const every2WeeksRule = new RRule({
    freq: RRule.WEEKLY,
    interval: 2,
    endingType: RRule.SEMESTER,
    semesterEnd,
  });
  const monthlyRule = new RRule({
    freq: RRule.WEEKLY,
    interval: 4,
    endingType: RRule.SEMESTER,
    semesterEnd,
  });

  const options = [
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
    ...customRecurrencies,
    {
      value: 'OTHER',
      text: 'другое...',
    },
  ];

  const setValue = (value) => {
    onChange(null, { value });
  };

  const resetValue = () => {
    onChange(null, { value: 'NO_REPEAT' });
  };

  useEffect(() => {
    if (value === 'OTHER') {
      showModal('Повтор события', CustomRecurrenceEditor,
        { startDate, addCustomRecurrence, setValue, semesterEnd, hideModal });
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

const mapStateToProps = ({ ScheduleFilters, Modal, Config }) => ({
  customRecurrencies: ScheduleFilters.customRecurrencies,
  semesterEnd: Config.semesterEnd,
  isModalOpened: Modal.isOpened,

  addCustomRecurrence: ScheduleFilters.addCustomRecurrence,
  showModal: Modal.show,
  hideModal: Modal.hide,
});

export const RecurrenceEditor = compose(
  inject(mapStateToProps),
)(CRecurrenceEditor);


