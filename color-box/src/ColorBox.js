import React, { Component } from 'react';

class ColorBox extends Component{
  constructor(){
    super()
    this.state = {
      colorArray: ["red", "orange", "yellow", "green", "blue", "purple"],
      currentColor: 0
    }
  }

  handleColorChange = () => {
    // Approach-1) assigning a random number to the currentColor:
    const randomNum = Math.floor(Math.random()*this.state.colorArray.length)
    this.setState({ currentColor: randomNum })

    // Approach-2) rotating through the colors array in order and starting over when the end of the array is reached:
  //   if(this.state.currentColor < this.state.colorArray.length-1){
  //     this.setState({ currentColor: this.state.currentColor+=1 })
  //   } else {
  //     this.setState({ currentColor: 0 })
  //   }
  }

  render(){
    // destructure the values out of state
    const { colorArray, currentColor } = this.state
    return(
      <div>
        <div
          id="color-box"
          style={{ backgroundColor: colorArray[currentColor] }}
          onClick={ this.handleColorChange }
        >
          { colorArray[currentColor] }
        </div>
      </div>
    )
  }
}

export default ColorBox
