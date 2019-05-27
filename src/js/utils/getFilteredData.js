import axios from 'axios';

export default function getFilteredData(handleSuccess, building, floor, roomType, roomCapacity, roomNumber, date, weekType, weekDay, pair) {

    const filters = constructFilters(building, floor, roomType, roomCapacity, roomNumber, date, weekType, weekDay, pair);
    console.log(filters);

    axios.get("http://62.109.25.2:2200/filter/data" + filters, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response =>
            handleSuccess(response.data)
        )
        .catch(error => console.log(error));
}

const constructFilters = (building, floor, roomType, roomCapacity, roomNumber, date, weekType, weekDay, pairId) => {
    if (building || floor || roomType || roomCapacity || roomNumber || date|| weekType || weekDay || pairId) { // date temporary excluded
        return '?weekNum=8&weekDay=2' +
            (building ? '&building=' + building : '') +
            (floor ? '&floor=' + floor : '') +
            (roomType ? '&roomType=' + roomType : '') +
            (roomCapacity ? '&roomCapacity=' + roomCapacity : '') +
            (roomNumber ? '&roomNumber=' + roomNumber : '') +
            (weekType ? '&weekType=' + weekType : '') +
            (weekDay ? '&weekDay=' + weekDay : '') +
            (pairId ? '&pairId=' + pairId : '')
    } else {
        return ''
    }
}