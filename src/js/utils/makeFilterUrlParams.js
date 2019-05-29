export default function makeFilterUrlParams(filters, pageNum, pageSize) {
    let result = pageNum && pageSize ? `&pageNum=${pageNum}&pageSize=${pageSize}` : '';

    delete filters.date; // temporary, needs handler (calendar initial value)
    delete filters.resType; // no api filter avialable

    const ApiFilterMap = {
        building: 'building',
        floor: 'floor',
        roomType: 'roomTypeId',
        roomCapacity: 'capacity',
        roomNumber: 'roomId',
        weekType: 'weekType',
        weekDay: 'weekDay',
        pair: 'pairId'
    }

    for (let filterName in filters) {
        let filterValue = filters[filterName];
        if (filterValue) result += `&${ApiFilterMap[filterName]}=${filterValue}`;
    }
    return `?${result.slice(1)}`
}
