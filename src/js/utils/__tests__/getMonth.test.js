import getMonth from 'js/utils/getMonth';


const invalidDate = new Date('invalid value');

it('getMonth works properly', () => {
  expect(getMonth(new Date(1998, 4, 13))).toBe('Май 1998');
  expect(getMonth(new Date(2019, 7, 29))).toBe('Авг 2019');
  expect(getMonth(new Date(2007, 0, 1))).toBe('Янв 2007');
  expect(getMonth(invalidDate)).toBe(invalidDate);
  expect(getMonth(NaN)).toBe(NaN);
  expect(getMonth(undefined)).toBe(undefined);
  expect(getMonth(0)).toBe(0);
  expect(getMonth(-1)).toBe(-1);
  expect(getMonth('-1')).toBe('-1');
  expect(getMonth('string')).toBe('string');
});
