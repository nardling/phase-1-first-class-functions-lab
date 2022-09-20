const returnFirstTwoDrivers = (drivers) => {
    let firstTwo = Array();
    firstTwo.push(drivers[0], drivers[1]);
    return firstTwo;
};
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};
const selectingDrivers = Array(returnFirstTwoDrivers, returnLastTwoDrivers);
function createFareMultiplier(multiplier) {
    const multiplierFunction = (fare) => fare * multiplier;
    return multiplierFunction;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, selector) {
    return selector(drivers);
}
