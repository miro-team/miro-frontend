export default function getPageCount(data, displayCount) {
    return Math.ceil(data.length / displayCount);
}