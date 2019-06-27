import convertDate, { getMonthNumber } from 'js/utils/convertDate';

const date = new Date(1998, 4, 13);
const invalidDate = new Date('invalid value');

it('convertDate works properly', () => {
    expect(convertDate(date)).toBe('13.05.1998');
    expect(convertDate(invalidDate)).toBe('Invalid Date');
    expect(convertDate(NaN)).toBe('Invalid Date');
    expect(convertDate(undefined)).toBe('Invalid Date');
    expect(convertDate(0)).toBe('Invalid Date');
    expect(convertDate(-1)).toBe('Invalid Date');
    expect(convertDate('-1')).toBe('Invalid Date');
    expect(convertDate('string')).toBe('Invalid Date');

    expect(getMonthNumber(3)).toBe('04');
    expect(getMonthNumber(0)).toBe('01');
    expect(getMonthNumber(8)).toBe('09');
    expect(getMonthNumber(9)).toBe('10');
    expect(getMonthNumber(11)).toBe('12');
    expect(getMonthNumber(13)).toBe('00');
    expect(getMonthNumber({})).toBe('00');
    expect(getMonthNumber(NaN)).toBe('00');
    expect(getMonthNumber(undefined)).toBe('00');
    expect(getMonthNumber(-1)).toBe('00');
    expect(getMonthNumber(-10)).toBe('00');
    expect(getMonthNumber(444)).toBe('00');
    expect(getMonthNumber('string')).toBe('00');
})