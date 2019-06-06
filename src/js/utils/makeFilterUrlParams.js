import { reduxFiltersToApi } from 'js/constants/spec';


export default function makeFilterUrlParams(filters, pageNum, pageSize) {
    let result = pageNum && pageSize ? `&pageNum=${pageNum}&pageSize=${pageSize}` : '';

    for (let filterName in filters) {
        let filterValue = filters[filterName];
        if (filterValue) result += `&${reduxFiltersToApi[filterName]}=${filterValue}`;
    }
    return `?${result.slice(1)}`
}
