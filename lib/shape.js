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

  square() {
    return `<rect width="150" height="150" x="75" y="25" fill="${this.shapeColor}" />`;
  }

  circle() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }

  triangle() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }

  generateShape() {
    console.log("Generating shape...");
    let renderShape;

    if (this.shape === "circle") {
      renderShape = this.circle();
    } else if (this.shape === "square") {
      renderShape = this.square();
    } else if (this.shape === "triangle") {
      renderShape = this.triangle();
    } else {
      console.log("Invalid shape");
    }

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${renderShape}
  <text x="50%" y="50%" fill="${this.textColor}" font-size="50" text-anchor="middle" dy=".3em">${this.text}</text>
</svg>`;
  }

  render() {
    generateShape();
  }
}

module.exports = Shape;
