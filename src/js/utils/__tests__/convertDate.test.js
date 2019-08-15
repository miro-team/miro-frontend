import convertDate from 'js/utils/convertDate';


const invalidDate = new Date('invalid value');

it('convertDate works properly', () => {
  expect(convertDate(new Date(1998, 4, 13))).toBe('13.05.1998');
  expect(convertDate(new Date(2019, 7, 29))).toBe('29.08.2019');
  expect(convertDate(new Date(2007, 0, 1))).toBe('01.01.2007');
  expect(convertDate(invalidDate)).toBe(invalidDate);
  expect(convertDate(NaN)).toBe(NaN);
  expect(convertDate(undefined)).toBe(undefined);
  expect(convertDate(0)).toBe(0);
  expect(convertDate(-1)).toBe(-1);
  expect(convertDate('-1')).toBe('-1');
  expect(convertDate('string')).toBe('string');
});
