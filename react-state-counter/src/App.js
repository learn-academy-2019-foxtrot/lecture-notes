import React, { Component } from 'react';
import Counter from './Counter'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Hello Foxtrot</h1>
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}

export default App
