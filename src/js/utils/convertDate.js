export default function convertDate(date) {
    if (!(date instanceof Date) || isNaN(date.getDate())) {
        return 'Invalid Date';
    }
    return `${date.getDate()}.${getMonthNumber(date.getMonth())}.${date.getFullYear()}`
}

export function getMonthNumber(month) {
    month++;
    if (!month || month > 12 || month < 0) return '00';
    return month < 10 ? `0${month}` : `${month}`
}
