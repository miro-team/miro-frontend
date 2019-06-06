export const ApiToTableFields = {
    roomId: {
        title: '№ Аудитории',
        width: '10%'
    },
    pairId: {
        title: 'Пара',
        width: '5%'
    },
    date: {
        title: 'Дата',
        width: '20%'
    },
    capacity: {
        title: 'Вместимость',
        width: '5%'
    },
    roomTypeId: {
        title: 'Тип аудитории',
        width: '5%'
    },
    weekDay: {
        title: 'День недели',
        width: '5%'
    },
    weekType: {
        title: 'Тип недели',
        width: '5%'
    },
    weekNum: {
        title: 'Неделя',
        width: '10%'
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