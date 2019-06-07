//{
//  title: '№ Аудитории',
//  mapping: 'rooms',
//  width: '10%'
//}
export const ApiToTableFields = {
    roomId: {
        title: '№ Аудитории',
        mapping: 'rooms'
    },
    pairId: {
        title: 'Пара'
    },
    date: {
        title: 'Дата'
    },
    capacity: {
        title: 'Вместимость'
    },
    weekDay: {
        title: 'День недели',
        mapping: 'weekDays'
    },
    weekType: {
        title: 'Тип недели',
        mapping: 'weekTypes'
    },
    weekNum: {
        title: 'Неделя'
    }
}

export const reduxFiltersToApi = {
    building: 'building',
    floor: 'floor',
    roomType: 'roomTypeId',
    roomCapacity: 'capacity',
    roomNumber: 'roomId',
    resType: 'resType',
    date: 'date',
    weekType: 'weekType',
    weekDay: 'weekDay',
    pair: 'pairId'
}