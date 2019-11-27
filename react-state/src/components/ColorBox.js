import React, { Component } from 'react'

class ColorBox extends Component{
  constructor(){
    super()
    this.state = {
      color: ["red", "orange", "yellow", "blue"],
      currentColor: 0
    }
  }

  colorChanger = () => {
    let randomNum = Math.floor(Math.random()*this.state.color.length)
    this.setState({currentColor: randomNum})
  }

  render(){
    return(
      <div>
        <h2>Here is my color box</h2>
        <div
          onClick={this.colorChanger}
          style={{backgroundColor: this.state.color[this.state.currentColor]}}
          className="color-box"
        >
        </div>
      </div>
    )
  }
}

export default ColorBox
