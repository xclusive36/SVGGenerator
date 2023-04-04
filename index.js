// AS a freelance web developer
// I WANT to generate a simple logo for my projects
// SO THAT I don't have to pay a graphic designer

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

// must utilize OOP and SOLID principles
// must use at least one class
// must use at least one method
// must use at least one constructor

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Shape = require("./lib/shape");
const writeFileAsync = util.promisify(fs.writeFile);
const validateColor = require("validate-color").default;

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
      console.log(answers);
      const shape = new Shape(answers);
      return shape.generateShape();
    })
    .then((result) => {
      writeFileAsync("./dist/logo.svg", result);
      console.log("Generated logo.svg");
    })
    .catch((err) => console.error(err));
};

init();

// https://www.npmjs.com/package/validate-color
