const { Shapes } = require('./shapes')
const { Circle } = require('./circle')
const { Square } = require('./square')
const { Triangle} = require('./triangle')

const generateSvg = (shapeInput, shapeFill, text, textColor) => {
  let newShape = ''
  switch(shapeInput) {
    case "Square":
      newShape = new Square(text, textColor, shapeFill)
      break;
    case "Circle":
      newShape = new Circle(text, textColor, shapeFill)
      break;
    case "Triangle":
      newShape = new Triangle(text, textColor, shapeFill)
      break;
  }

  const svg = `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    ${newShape.shape}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${newShape.textColor}">${newShape.text}</text>

    </svg>
    `
    // .replaceAll(/\s+/g, '');;
    return svg
};


module.exports = { generateSvg }