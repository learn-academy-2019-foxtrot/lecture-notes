import React, { Component } from 'react';

class ColorBox extends Component{
  constructor(){
    super()
    this.state = {
      colors: ["red", "orange", "yellow", "green", "blue", "purple", "pink"],
      currentColor: 0
    }
  }

  handleColorChange = () => {
    // assigning a random number to the currentColor
    // let randomNum = Math.floor(Math.random()*this.state.colors.length)
    // this.setState({currentColor: randomNum})
    // rotating through the colors array
    if(this.state.currentColor < this.state.colors.length-1){
      this.setState({currentColor: this.state.currentColor+=1})
    } else {
      this.setState({currentColor: 0})
    }
  }

  render(){
    return(
      <div>
        <div
          id="color-box"
          style={{backgroundColor: this.state.colors[this.state.currentColor]}}
          onClick={this.handleColorChange}
        >{this.state.colors[this.state.currentColor]}</div>
      </div>
    )
  }
}

export default ColorBox
