const returnFirstTwoDrivers = (drivers: Array<any>): Array<any> => {
    let firstTwo = Array<any>()
    firstTwo.push(drivers[0], drivers[1])
    return firstTwo
}

const returnLastTwoDrivers = (drivers: Array<any>): Array<any> => {
    return drivers.slice(-2)
}

const selectingDrivers = Array<Function>(returnFirstTwoDrivers, returnLastTwoDrivers)

function createFareMultiplier(multiplier: number): Function {
    const multiplierFunction = (fare: number) => fare * multiplier
    return multiplierFunction
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers: Array<any>, selector: Function) {
    return selector(drivers);
}