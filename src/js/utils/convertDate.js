export default function convertDate(date = new Date()) {
    return `${date.getDate()}.${getMonthNumber(date.getMonth()+1)}.${date.getFullYear()}`
}

function getMonthNumber(month){
    return month < 10 ? `0${month}` : month
}
