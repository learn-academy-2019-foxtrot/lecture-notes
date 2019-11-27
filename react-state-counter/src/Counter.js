import React, { Component } from 'react';

class Counter extends Component{
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }

  addOne = () => {
    // destructured counter out of state
    let { counter } = this.state
    this.setState({ counter: counter + 1})
  }

  removeOne = () => {
    // destructured counter out of state
    let { counter } = this.state
    if(counter === 0){
      counter = 0
    } else {
      counter -= 1
    }
    this.setState({ counter: counter})
  }


  render(){
    return(
      <div>
        <br />
        <h2>Here is our counter component</h2>
        <button onClick={ this.addOne }>Add One</button>
        <button onClick={ this.removeOne }>Remove One</button>
        <br />
          Counter: { this.state.counter }
      </div>
    )
  }
}

export default Counter
