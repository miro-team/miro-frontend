import processFilters from 'js/utils/processFilters';


const reduxStateSingle = {
  building: -1,
  floor: -1,
  roomType: -1,
  roomCapacity: -1,
  roomNumber: '',
  eventType: 'single',
  date: new Date('2018-05-13'),
  periodicity: -1, // Should not pass
  weekDay: 3, // Should not pass
  pair: -1,
};

const reduxStateCycle = {
  building: -1,
  floor: -1,
  roomType: -1,
  roomCapacity: -1,
  roomNumber: '5102',
  eventType: 'cycle',
  date: new Date('2019-01-03'), // Should not pass
  periodicity: -1,
  weekDay: -1,
  pair: 2,
};

it('processFilters works properly', () => {
  expect(processFilters(reduxStateSingle, 1, 6)).toEqual({
    urlParams: '?pageNum=1&pageSize=6&date=13.05.2018',
    type: 'single',
  });

  expect(processFilters({ ...reduxStateSingle, building: 4 }, 1, 6)).toEqual({
    urlParams: '?pageNum=1&pageSize=6&building=4&date=13.05.2018',
    type: 'single',
  });

  expect(processFilters({ ...reduxStateSingle, floor: 1 }, 1, 6)).toEqual({
    urlParams: '?pageNum=1&pageSize=6&floor=1&date=13.05.2018',
    type: 'single',
  });

  expect(processFilters({ ...reduxStateSingle, roomCapacity: 40 }, 1, 6)).toEqual({
    urlParams: '?pageNum=1&pageSize=6&capacity=40&date=13.05.2018',
    type: 'single',
  });

  expect(processFilters(reduxStateCycle, 4, 12)).toEqual({
    urlParams: '?pageNum=4&pageSize=12&roomId=5102&pairId=2',
    type: 'cycle',
  });

  expect(processFilters({ ...reduxStateCycle, periodicity: 2 }, 4, 12)).toEqual({
    urlParams: '?pageNum=4&pageSize=12&roomId=5102&pairId=2&periodicity=2',
    type: 'cycle',
  });

  expect(processFilters({ ...reduxStateCycle, weekDay: 5 }, 4, 12)).toEqual({
    urlParams: '?pageNum=4&pageSize=12&roomId=5102&pairId=2&weekDay=5',
    type: 'cycle',
  });
});
