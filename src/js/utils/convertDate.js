export default function convertDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getDate())) {
    return date;
  }
  const dayNum = date.getDate();
  const day = dayNum < 10 ? `0${dayNum}` : dayNum;

  const monthNum = date.getMonth() + 1;
  const month = monthNum < 10 ? `0${monthNum}` : monthNum;

  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
