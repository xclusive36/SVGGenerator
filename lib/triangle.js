class Triangle { // this is the class that will be exported
  constructor({ text, textColor, shape, shapeColor }) { // this is the constructor method that will be called when the class is instantiated
    this.text = text; // this is the text that will be displayed in the logo
    this.textColor = textColor; // this is the color of the text
    this.shape = shape; // this is the shape of the logo
    this.shapeColor = shapeColor; // this is the color of the shape
  }

  setColor(shapeColor) { // this is a method that will set the color of the shape
    this.shapeColor = shapeColor; // this is the color of the shape
  }

  generateShape() { // this is a method that will generate the shape
    console.log("Generating shape..."); // log a message to the console
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${this.render()}
  <text x="50%" y="65%" fill="${
    this.textColor
  }" font-size="50" text-anchor="middle" dy=".3em">${this.text}</text>
</svg>`; // return the shape
  }

  render() { // this is a method that will render the shape
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`; // return the shape
  }
}

module.exports = Triangle; // export the Triangle class
