const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const validateColor = require("validate-color").default;
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");

console.log();

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Logo Text: Enter up to three characters:",
      validate: (textInput) => {
        if (textInput.length < 4) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Text Color: Enter a color keyword or hexadecimal color including #:",
      validate: (color) => {
        if (color && validateColor(color)) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Shape Color: Enter a color keyword or hexadecimal color including #:",
      validate: (color) => {
        if (color && validateColor(color)) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};

const init = () => {
  promptUser()
    .then((answers) => {
      let shape;
      if (answers.shape === "square") {
        shape = new Square(answers);
      } else if (answers.shape === "triangle") {
        shape = new Triangle(answers);
      } else if (answers.shape === "circle") {
        shape = new Circle(answers);
      } else {
        console.log("Error: Shape not found");
      }
      return shape.generateShape();
    })
    .then((result) => {
      writeFileAsync("./dist/logo.svg", result);
      console.log("Generated logo.svg");
      console.log("logo.svg saved to dist folder");
    })
    .catch((err) => console.error(err));
};

init();