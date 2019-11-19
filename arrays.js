// Arrays Lecture 11/19/19

var myArray = [1, true, "hello", 3, -6, 1]
// logs the array:
console.log(myArray)
--> [ 1, true, 'hello', 3, -6, 1 ]

// access the value at a particular index
console.log(myArray[0])
--> 1

// find how many items are in the array
console.log(myArray.length)
--> 6

// change the value at a particular index, permanently changes the array
console.log(myArray[0] = "yo")
--> "yo"
console.log(myArray)
--> [ 'yo', true, 'hello', 3, -6, 1 ]

// .push(value) - pushes a value into the end of an array, takes an argument, permanently changes the array
myArray.push("hey guys")
console.log(myArray)
--> [ 'yo', true, 'hello', 3, -6, 1, 'hey guys' ]

// .pop() - removes and returns the last value in an array, permanently changes the array
myArray.pop()
console.log(myArray)
--> [ 'yo', true, 'hello', 3, -6, 1 ]

// .shift() - removes the first value in an array, permanently changes the array
myArray.shift()
console.log(myArray)
--> [ true, 'hello', 3, -6, 1 ]

// .unshift(value) - adds a new element to the beginning of an array, takes an argument, permanently changes the array
myArray.unshift(false)
console.log(myArray)
--> [ false, true, 'hello', 3, -6, 1 ]

// .reverse() - reverses the order of the values in an array, permanently changes the array
// myArray.reverse()
console.log(myArray)
--> [ 1, -6, 3, 'hello', true, false ]


var newArray = ["Yo", 5, 4, "hey"]
// .concat() - merges two or more arrays to form one combined array, does not permanently change the array
console.log(myArray.concat(newArray))
--> [ 1, -6, 3, 'hello', true, false, 'Yo', 5, 4, 'hey' ]

// to save the outcome of the combined array, assign the method to a new variable
var myCombo = myArray.concat(newArray)
console.log("myArray:", myArray)
--> myArray: [ false, true, 'hello', 3, -6, 1 ]
console.log("newArray:", newArray)
--> newArray: [ 'Yo', 5, 4, 'hey' ]
console.log("combo:", myCombo)
--> combo: [ false, true, 'hello', 3, -6, 1, 'Yo', 5, 4, 'hey' ]


// .join() - converts all values in an array to a string, does not permanently change the array
console.log(myArray.join())
--> false,true,hello,3,-6,1
console.log(myArray.join(""))
--> falsetruehello3-61
console.log(myArray.join("*"))
--> false*true*hello*3*-6*1

// .indexOf() - gives the index of a given value
console.log(myArray.indexOf(true))
--> 1
console.log(myArray.indexOf(56))
--> -1

// Use case for indexOf() method returning -1
if(myArray.indexOf("hello") === -1){
  console.log("sorry dude")
} else {
  console.log("yup, it exists")
}
--> yup, it exists

// .lastIndexOf() - gives us the last index of a value (usually used when there are values that are the same)
console.log(myArray.lastIndexOf(1))
--> 5
