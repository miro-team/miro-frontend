import convertDate from 'js/utils/convertDate';


function getPreparedValues(reduxFilterValues) {
  const baseFilters = {
    building: reduxFilterValues.building,
    floor: reduxFilterValues.floor,
    roomTypeId: reduxFilterValues.roomType,
    capacity: reduxFilterValues.roomCapacity,
    roomId: reduxFilterValues.roomNumber,
    pairId: reduxFilterValues.pair,
  };

  if (reduxFilterValues.eventType === 'single') {
    return {
      ...baseFilters,
      date: convertDate(reduxFilterValues.date),
    };
  }

  if (reduxFilterValues.eventType === 'cycle') {
    return {
      ...baseFilters,
      periodicity: reduxFilterValues.periodicity,
      weekDay: reduxFilterValues.weekDay,
    };
  }

  return {};
}

function getUrlParams(preparedValues, pageNum, pageSize) {
  const urlParams = Object.entries(preparedValues).reduce((result, [filterName, filterValue]) => {
    if (filterValue !== -1 && filterValue !== '') {
      return `${result}&${filterName}=${filterValue}`;
    }
    return result;
  }, '');
  const pageUrlParams = pageNum && pageSize ? `pageNum=${pageNum}&pageSize=${pageSize}` : '';
  return `?${pageUrlParams}${urlParams}`;
}

function getType(reduxFilterValues) {
  return reduxFilterValues.eventType;
}

export default function processFilters(reduxFilterValues, pageNum, pageSize) {
  const preparedValues = getPreparedValues(reduxFilterValues);
  return {
    urlParams: getUrlParams(preparedValues, pageNum, pageSize),
    type: getType(reduxFilterValues),
  };
}
