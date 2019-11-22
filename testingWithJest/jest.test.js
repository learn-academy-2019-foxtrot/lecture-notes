// Testing with Jest 11/22/19

// Jest is a JavaScript testing framework build by Facebook

// TDD - Test Driven Development, the programming philosophy of 1) writing tests first, 2) running the test to make sure the test fails, 3) writing code, 4) running the test and make sure the test passes
// TDD is commonly known as "red-green refactoring"

// Setting up a test file: 1) create a new directory, 2) create a testing file with the extention `.test.js`, 3) run `yarn add jest`, 4) to run the test file `yarn jest` in terminal


// Write a test for a function called hello() that returns "hi"
describe("hello", () => {
  test ("returns a string that says hi", () => {
    expect(hello()).toEqual("hi")
  })
})
// run `yarn jest` and see a failing (red) test

// Create the code that will make the test pass (green)
// NOTE: no console.log() or function call is needed for the code - the test handles all of that for us
hello = () => {
  return "hi"
}

// Write a test for a function called greeter() that takes the argument of a name and returns "Hello, <name here>!"
// This example uses two approaches to passing arguments in the test. 1) passing the string "Learn Student" directly into the expect statement, 2) creating a variable within the test and passing the variable name into the expect statment
describe("greeter", () => {
  let name = "Sarah"
  test ("return a greeting and a name", () => {
    expect(greeter("Learn Student")).toEqual("Hello, Learn Student.")
    expect(greeter(name)).toEqual("Hello, Sarah.")
  })
})
// run `yarn jest` and see a failing (red) test

// Create the code that will make the test pass (green)
greeter = (name) => {
  return `Hello, ${name}.`
}

// Write a test for a function called trafficLight() that takes the argument of a traffic light color and returns the appropriate traffic action
describe("trafficLight", () => {
  test ("returns go when passed the value green, returns slow when passed yellow", () => {
    expect(trafficLight("green")).toEqual("go")
    expect(trafficLight("yellow")).toEqual("slow")
    expect(trafficLight("red")).toEqual("stop")
  })
})
// run `yarn jest` and see a failing (red) test

// Create the code that will make the test pass (green)
trafficLight = (color) => {
  if(color === "green"){
    return "go"
  } else if(color === "yellow"){
    return "slow"
  } else if(color === "red"){
    return "stop"
  } else {
    return "you did something wrong"
  }
}
