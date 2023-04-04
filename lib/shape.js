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
    let renderShape;

    if (this.shape === "circle") {
      const circle = new Circle(this);
      renderShape = circle.render();
    } else if (this.shape === "square") {
      const square = new Square(this);
      renderShape = square.render();
    } else if (this.shape === "triangle") {
      const triangle = new Triangle(this);
      renderShape = triangle.render();
    } else {
      console.log("Invalid shape");
    }

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${renderShape}
  <text x="50%" y="50%" fill="${this.textColor}" font-size="50" text-anchor="middle" dy=".3em">${this.text}</text>
</svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="150" height="150" x="75" y="25" fill="${this.shapeColor}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

module.exports = Shape;
