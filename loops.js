// Loops Lecture
// Iteration using a for loop

// three parts of a for loop: 1) where does it start, 2) where does it end?, 3) how do we get from the start to the finish?
// i=0 --> starts at 0
// i<10 --> continues until this statement is no longer true
// i++ -->> each loop adds 1 to the value of i and continues on another iteration

// i - short for index, a variable used for iteration
// for(let index=0; index<10; index=index+1) is the same as the shortened version below
for(let i=0; i<10; i++){
  console.log(i)
}
-->
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9

// iterating through an array, using the length of the array to determine the end point of the loop
var num = [1, 2, 3, 4, 5, 6]
for(let i=0; i<num.length; i++){
  // logging the value at each index
  console.log(num[i])
}
-->
  1
  2
  3
  4
  5
  6

// iterate through an array and return only the odd numbers
// pass a nested logical statement inside the for loop to return a subset of the array
var myNum = [3, 4, 5, 6, 7, 8]

for(let i=0; i<myNum.length; i++){
  if(myNum[i]%2 !== 0){
    console.log(myNum[i])
  }
}
-->
  3
  5
  7

// why do we use let inside a for loop?
for(let i=0; i<5; i++){
  console.log(i)
}
-->
  0
  1
  2
  3
  4
  console.log(i)
--> ReferenceError: i is not defined

for(var i=0; i<5; i++){
  console.log(i)
}
-->
  0
  1
  2
  3
  4
console.log(i)
--> 5

// let will protect i from being availale outside the scope of the function
