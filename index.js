// Code your solution in this file!

function returnFirstTwoDrivers(array){
    let result = array.slice(0, 2)
    return result
}

function returnLastTwoDrivers(array){
    let result = array.slice(-2)
    return result
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier (fare){
    return function(value){
        return fare * value 
    }
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, fun){
    return fun(arrayOfDrivers)
}