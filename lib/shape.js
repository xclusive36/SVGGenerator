const Triangle = require("./triangle");

class Shape {
  constructor({ text, textColor, shape, shapeColor }) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  setColor(shapeColor) {
    this.shapeColor = color;
  }

  generateShape() {
    console.log("Generating shape...");

    const triangle = new Triangle(this);

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${triangle.render()}
  <text x="50%" y="50%" fill="${
    this.textColor
  }" font-size="50" text-anchor="middle" dy=".3em">${this.text}</text>
</svg>`;
  }
}

module.exports = Shape;
