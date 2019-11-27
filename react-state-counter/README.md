# Lecture Notes for React State

## Counter Component
- import Component to React `import React, { Component } from 'react'`
- import the App.css file to App.js `import './App.css';`
- create a class called Counter
`class Counter extends Component`
- add a constructor method with a state object

```
constructor(){
  super()
  this.state = {
    counter: 0
  }
}
```

- render state on the page by calling `{ this.state.counter }` inside the div in the render method

### Incrementing the Counter
- add a button to the div in the render method `<button>Add One</button>`
- add a method to increment the counter
- the method lives outside the constructor and before the render
```
addOne = () => {
}
```
- within the addOne method use the react built in method `setState()` to update the state object
```
addOne = () => {
  this.setState({ counter: this.state.counter + 1})
  }
```
- call the method `onClick` in the button tag
```
<button onClick={this.addOne}>Add One</button>
```

## Decrementing the Counter
- add a button to the div in the render method `<button>Remove One</button>`
- add a method to decrement the counter
- the method lives outside the constructor and before the render
```
removeOne = () => {
}
```
- within the removeOne method use the react built in method `setState()` to update the state object
```
removeOne = () => {
  this.setState({ counter: this.state.counter - 1})
}
```
- add logic to prevent the counter from going to negative numbers
```
if(this.state.counter === 0){
    this.state.counter = 0
} else {
  this.state.counter -= 1
}
this.setState({ counter: this.state.counter})
```
- call the method `onClick` in the button tag
```
<button onClick={this.removeOne}>Remove One</button>
```
## Breaking out the component into its own file
- create a new file in the src folder named the same thing as the class name `src/Counter.js`
- import React Component to the Counter file `import React, { Component } from 'react'`
- export the Counter app from Counter.js `export default Counter`
- import Counter in App.js `import Counter from './Counter'`
- call the Counter component as many times as you want in the div of the render method in App.js `<Counter />`
