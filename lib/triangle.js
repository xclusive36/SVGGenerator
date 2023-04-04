class Triangle {
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

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text x="50%" y="50%" fill="${this.textColor}" font-size="50" text-anchor="middle" dy=".3em">${this.text}</text>
  </svg>`;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;