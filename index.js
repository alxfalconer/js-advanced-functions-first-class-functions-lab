const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return multiplier * fare;
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, arrFunction) {
    return arrFunction(drivers); 
}