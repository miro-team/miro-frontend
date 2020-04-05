import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { handleNumericChange, RRule } from 'lib/utils';
import { Label } from 'ui/common';
import { Select, Input, DatePicker, Button, Radio } from 'ui/inputs';
import { InputGroup, InputWrapper, InputRow, InputLabel } from 'ui/layout';


const propTypes = {

};

export const CustomRecurrenceEditor = ({ startDate, addCustomRecurrence, setValue, semesterEnd, hideModal }) => {
  const [recurrenceInterval, setRecurrenceInterval] = useState(1);
  const [weekDays, setWeekDays] = useState(startDate ? [startDate.getDay()] : []); // 0-6
  const [endingType, setEndingType] = useState(RRule.SEMESTER);

  const initialEndingDate = new Date(startDate);
  initialEndingDate.setMilliseconds(0);
  initialEndingDate.setDate(initialEndingDate.getDate() + 14); // Adding 2 weeks to initial ending date
  const [endingDate, setEndingDate] = useState(initialEndingDate);

  const [repeatCount, setRepeatCount] = useState(10);

  const handleRecurrenceIntervalChange = (e, { value }) => {
    handleNumericChange(value, setRecurrenceInterval);
  };

  const handleWeekDayChange = (e, { value }) => {
    setWeekDays(value);
  };

  const handleEndingTypeChange = (e, { value }) => {
    setEndingType(value);
  };

  const handleEndingDateChange = (value) => {
    setEndingDate(value);
  };

  const handleRepeatCountChange = (e, { value }) => {
    handleNumericChange(value, setRepeatCount, { max: 99 });
  };

  const handleFocusSelect = (e) => {
    e.target.select();
  };

  const CustomRRule = new RRule({
    freq: RRule.WEEKLY,
    interval: recurrenceInterval,
    until: endingDate,
    count: repeatCount,
    weekDays,
    startDate: startDate,
    semesterEnd,
    endingType
  });

  const handleSave = () => {
    if (CustomRRule.isValid) {
      const value = CustomRRule.toString(true);
      const text = CustomRRule.toText(true);

      addCustomRecurrence({ value, text });
      setValue(value);
      hideModal();
    }
  };

  const handleCancel = () => {
    hideModal();
  };

  return (
    <>
      <InputRow>
        <InputGroup>
          <InputRow>
            <InputWrapper>
              <InputLabel>Частота события</InputLabel>
              <Input
                value={recurrenceInterval}
                onChange={handleRecurrenceIntervalChange}
                labelPosition='right'
                onFocus={handleFocusSelect}
              >
                <IntervalLabel basic>
                  {`кажд${recurrenceInterval == 1 ? 'ую' : 'ые'}`}
                </IntervalLabel>
                <input />
                <IntervalLabel basic>
                  {`недел${recurrenceInterval == 1 ? 'ю' :
                    recurrenceInterval > 1 && recurrenceInterval < 5 ? 'и' : 'ь'}`}
                </IntervalLabel>
              </Input>
            </InputWrapper>
          </InputRow>
          <InputRow>
            <InputWrapper>
              <InputLabel>Дни недели</InputLabel>
              <Select
                options={[
                  { key: 1, value: 1, text: 'Пн' },
                  { key: 2, value: 2, text: 'Вт' },
                  { key: 3, value: 3, text: 'Ср' },
                  { key: 4, value: 4, text: 'Чт' },
                  { key: 5, value: 5, text: 'Пт' },
                  { key: 6, value: 6, text: 'Сб' },
                ]}
                value={weekDays}
                onChange={handleWeekDayChange}
                multiple
              />
            </InputWrapper>
          </InputRow>
          <InputRow>
            <InputWrapper>
              <InputLabel>Окончание</InputLabel>
              <InputGroup>
                <InputRow margin="small">
                  <InputWrapper>
                    <Radio
                      name="endingType"
                      onChange={handleEndingTypeChange}
                      value={RRule.SEMESTER}
                      checked={endingType === RRule.SEMESTER}
                      label="До конца семестра"
                    />
                  </InputWrapper>
                </InputRow>
                <InputRow margin="small">
                  <InputWrapper flex={0.6}>
                    <Radio
                      name="endingType"
                      onChange={handleEndingTypeChange}
                      value={RRule.DATE}
                      checked={endingType === RRule.DATE}
                      label="Дата"
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <DatePicker
                      value={endingDate}
                      onChange={handleEndingDateChange}
                      minDate={new Date()}
                      disabled={endingType !== RRule.DATE}
                    />
                  </InputWrapper>
                </InputRow>
                <InputRow margin="small">
                  <InputWrapper flex={0.6}>
                    <Radio
                      name="endingType"
                      onChange={handleEndingTypeChange}
                      value={RRule.COUNT}
                      checked={endingType === RRule.COUNT}
                      label="После"
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <Input
                      value={repeatCount}
                      onChange={handleRepeatCountChange}
                      labelPosition='right'
                      onFocus={handleFocusSelect}
                      disabled={endingType !== RRule.COUNT}
                    >
                      <input />
                      <RepeatLabel basic>{`повтор${repeatCount == 1 ? 'а' : 'ов'}`}</RepeatLabel>
                    </Input>
                  </InputWrapper>
                </InputRow>
              </InputGroup>
            </InputWrapper>
          </InputRow>
        </InputGroup>
        <PreviewWrapper>
          <InputLabel>Предпросмотр</InputLabel>
          <DatePicker
            inline
            highlightDates={CustomRRule.all()}
            minDate={new Date()}
          />
        </PreviewWrapper>
      </InputRow>
      <InputRow>
        <InputWrapper>
          <Button onClick={handleCancel}>ОТМЕНА</Button>
        </InputWrapper>
        <InputWrapper>
          <Button
            primary
            onClick={handleSave}
            disabled={!CustomRRule.isValid}
          >
            ГОТОВО
          </Button>
        </InputWrapper>
      </InputRow>
    </>
  );
};

CustomRecurrenceEditor.propTypes = propTypes;

const PreviewWrapper = styled.div`
  margin-left: 25px;
  display: flex;
  flex-flow: column nowrap;
`;

const IntervalLabel = styled(Label)`
  width: 90px;
`;

const RepeatLabel = styled(Label)`
  width: 100px;
`;
