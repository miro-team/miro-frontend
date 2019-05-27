export default function getPage(data, pageNumber = 1, displayCount = 3) {
    const start = displayCount * (pageNumber - 1);
    const end = start + displayCount < data.length ? start + displayCount : false; // End is not included
    return end ? data.slice(start, end) : data.slice(start);
}