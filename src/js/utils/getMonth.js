export default function getMonth(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getDate())) {
    return date;
  }
  const shortMonths = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];
  return `${shortMonths[date.getMonth()]} ${date.getFullYear()}`;
}
