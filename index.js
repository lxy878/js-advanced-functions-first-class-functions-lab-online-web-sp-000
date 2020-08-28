// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
  return Array(array[0], array[1]);
}

const returnLastTwoDrivers = function (array){
  return Array(array[array.length-2], array[array.length-1]);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n){
  return function(){return n*n;}
}

const fareDoubler = function (n){

}

function fareTripler(){

}

function selectDifferentDrivers(array, fun){
  return fun(array)
}
