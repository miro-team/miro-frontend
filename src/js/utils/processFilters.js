import convertDate from 'js/utils/convertDate';
import reduxFiltersToApi from 'js/constants/spec';
// Temporary default export

function getFilterValues(reduxFilterValues) {
  const filterValues = { ...reduxFilterValues };

  if (filterValues.resType === 1) {
    filterValues.date = convertDate(filterValues.date);
    delete filterValues.weekType;
    delete filterValues.weekDay;
  } else {
    delete filterValues.date;
  }
  if (filterValues.resType) delete filterValues.resType;

  return filterValues;
}

function getUrlParams(filterValues, pageNum, pageSize) {
  const urlParams = Object.entries(filterValues).reduce((result, [filterName, filterValue]) => {
    if (filterValue) {
      return `${result}&${reduxFiltersToApi[filterName]}=${filterValue}`;
    }
    return result;
  }, '');
  const pageUrlParams = pageNum && pageSize ? `pageNum=${pageNum}&pageSize=${pageSize}` : '';
  return `?${pageUrlParams}${urlParams}`;
}

export default function processFilters(reduxFilterValues, pageNum, pageSize) {
  const filterValues = getFilterValues(reduxFilterValues);
  return {
    urlParams: getUrlParams(filterValues, pageNum, pageSize),
  };
}
