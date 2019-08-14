import convertDate from 'js/utils/convertDate';


const invalidDate = new Date('invalid value');

it('convertDate works properly', () => {
  expect(convertDate(new Date(1998, 4, 13))).toBe('13.05.1998');
  expect(convertDate(new Date(2019, 7, 29))).toBe('29.08.2019');
  expect(convertDate(new Date(2007, 0, 1))).toBe('01.01.2007');
  expect(convertDate(invalidDate)).toBe('Invalid Date');
  expect(convertDate(NaN)).toBe('Invalid Date');
  expect(convertDate(undefined)).toBe('Invalid Date');
  expect(convertDate(0)).toBe('Invalid Date');
  expect(convertDate(-1)).toBe('Invalid Date');
  expect(convertDate('-1')).toBe('Invalid Date');
  expect(convertDate('string')).toBe('Invalid Date');
});
