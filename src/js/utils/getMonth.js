export default function getMonth(date = new Date()) {
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
  return `${shortMonths[date.getMonth()]}\n${date.getFullYear()}`;
}
