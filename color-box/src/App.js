import React, { Component } from 'react'
import ColorBox from './ColorBox.js'
import './App.css'

class App extends Component{
  render(){
    return(
      <div>
        <h1>Color Box Challenge</h1>
        <div id="color-box-holder">
          <ColorBox />
          <ColorBox />
          <ColorBox />
        </div>
      </div>
    )
  }
}

export default App
