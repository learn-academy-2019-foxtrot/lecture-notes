# Challenge: Color Box

## Goal
- As a user, I can see a box and when the box with a color as the background
- When the box is clicked the background color of the box will change

## Process
- Create a new react app
- Remove any boilerplate code
- Add a file in the src directory called ColorBox.js

- Add a the necessary react code to ColorBox
- Add a constructor method to ColorBox
- Add a state object with an array of colors and a currentColor
- Add a div with an id to the return in ColorBox
- Add styling with a height, width, and border to define the parameters of the ColorBox in App.css using the id of the div

- Add a method to ColorBox called handleColorChange
- Approach 1: The color change is random
  - Create a random number variable based on the length of the array of colors
  - Update the state of the currentColor key to the random number using the setState method


- Approach 2: The color change is ordered
  - Create a conditional statement that will add one to the current color and update state until the end of the array
  - At the end of the array, reassign the currentColor to 0


- Add a style attribute to the color-box div with the background color assigned to the currentColor in the colors array
- Add an onClick method to the color-box div calling the handleColorChange method
