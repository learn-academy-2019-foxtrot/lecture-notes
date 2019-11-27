import React, { Component } from 'react'

class Counter extends Component{
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }

  addOne = () => {
    const { counter } = this.state
    let addCounter = counter + 1
    this.setState({counter: addCounter})
  }
  removeOne = () => {
    const { counter } = this.state
    let removeCounter = counter -1
    if(counter <= 0){
      removeCounter = 0
    }
    this.setState({counter: removeCounter})
  }

  render(){
    return(
      <div>
        <h2>Here is my counter</h2>
        <button onClick={this.addOne}>Add one</button>
        <button onClick={this.removeOne}>Remove one</button>
        <p>Counter: {this.state.counter} </p>
      </div>
    )
  }
}

export default Counter
