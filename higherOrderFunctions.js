// Higher Order Functions 11/20/19

// A function that takes in a function as an argument or returns a function

// map and filter are two common higher order functions
// map and filter are array methods, they act on arrays and return arrays

// a method that has a function - the method can take three arguments: value (array[i]), index (i), the array the map was called upon

// create a function that returns the value and the index of the items of the array
var myTestArray = ["you", "hey", "hi", "hello"]

const gimmeInfo = (array) => {
  return array.map((value, index) => {
    return `Here is the value ${value} and here is the index ${index}`
  })
}
console.log(gimmeInfo(myTestArray))
// --> [ 'Here is the value you and here is the index 0',
//       'Here is the value hey and here is the index 1',
//       'Here is the value hi and here is the index 2',
//       'Here is the value hello and here is the index 3' ]


// create a function that returns only the odd numbers
var numbers = [1, 2, 3, 4, 5, 6]

const getOdds = (array) => {
  return array.filter(value => {
    return value%2 !== 0
  })
}
console.log(getOdds(numbers))
--> [ 1, 3, 5 ]


// create a function that return an array with only odd numbers
var mixedDataArray = [2, 83, "5", 87, "green", 0, true, -45, null]

const numsOnly = (array) => {
  return array.filter(value => {
    return typeof value === "number" && value%2 !==0
  })
}
console.log(numsOnly(mixedDataArray))
--> [ 83, 87, -45 ]


// caluclate the sum of the numbers in an array
var numsArray = [4, 5, 6, 2, 4]

const sumEmUp = (array) => {
  let anchor = 0
  array.map(value => {
    return anchor += value
  })
  return anchor
}
console.log(sumEmUp(numsArray))
--> 21
