import convertDate from 'js/utils/convertDate';
import { reduxFiltersToApi } from 'js/constants/spec';


export default function processFilters(reduxFilterValues, pageNum, pageSize) {
    const filterValues = getFilterValues(reduxFilterValues);
    return {
        urlParams: getUrlParams(filterValues, pageNum, pageSize),
        isAnyFilterActive: isAnyFilterActive(filterValues)
    }
}

function getFilterValues(reduxFilterValues) {
    let filterValues = Object.assign({}, reduxFilterValues);

    if (filterValues.resType === 1) {
        filterValues.date = convertDate(filterValues.date);
        delete filterValues.weekType;
        delete filterValues.weekDay
    } else {
        delete filterValues.date
    }
    if (filterValues.resType) delete filterValues.resType;

    return filterValues
}

function getUrlParams(filterValues, pageNum, pageSize) {
    let urlParams = pageNum && pageSize ? `&pageNum=${pageNum}&pageSize=${pageSize}` : '';

    for (let filterName in filterValues) {
        let filterValue = filterValues[filterName];
        if (filterValue) {
            urlParams += `&${reduxFiltersToApi[filterName]}=${filterValue}`
        }
    }
    return `?${urlParams.slice(1)}`
}

function isAnyFilterActive(filterValues) {
    for (let filterName in filterValues) {
        if (filterValues[filterName]) return true;
    }
    return false;
}
