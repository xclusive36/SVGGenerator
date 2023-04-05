class Square {
  constructor({ text, textColor, shape, shapeColor }) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  generateShape() {
    console.log("Generating shape...");
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${this.render()}
  <text x="50%" y="50%" fill="${this.textColor}" font-size="50" text-anchor="middle" dy=".3em">${this.text}</text>
</svg>`;
  }

  render() {
    return `<rect width="150" height="150" x="75" y="25" fill="${this.shapeColor}" />`;
  }
}

module.exports = Square;
