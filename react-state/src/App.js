import React, { Component } from 'react'
import Counter from './components/Counter'
import ColorBox from './components/ColorBox'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        Here is my parent component called App
        <Counter />
        <Counter />
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    )
  }
}
export default App
