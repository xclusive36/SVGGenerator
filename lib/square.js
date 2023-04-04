class Square {
  constructor({ text, textColor, shape, shapeColor }) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  setColor(shapeColor) {
    this.shapeColor = color;
  }

  render() {
    return `<rect width="150" height="150" x="75" y="25" fill="${this.shapeColor}" />`;
  }
}

module.exports = Square;
