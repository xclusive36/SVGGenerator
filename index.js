const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const validateColor = require("validate-color").default;
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");

const promptUser = () => {
  // Prompt user for logo text, text color, shape, and shape color
  return inquirer.prompt([ // inquirer is a node package that allows you to prompt the user for input
    {
      type: "input",
      name: "text",
      message: "Logo Text: Enter up to three characters:",
      validate: (textInput) => { // validate is a method that allows you to validate the user input
        if (textInput.length < 4) { // if the user input is less than 4 characters
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
      validate: (color) => { // validate is a method that allows you to validate the user input
        if (color && validateColor(color)) { // if the user input is a valid color
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
      validate: (color) => { // validate is a method that allows you to validate the user input
        if (color && validateColor(color)) { // if the user input is a valid color
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};

const init = () => {
  // Prompt user for input
  promptUser()
    .then((answers) => { // answers is an object that contains the user input
      let shape; // shape is a variable that will hold the shape object
      if (answers.shape === "square") { // if the user chose square
        shape = new Square(answers); // create a new Square object
      } else if (answers.shape === "triangle") { // if the user chose triangle
        shape = new Triangle(answers); // create a new Triangle object
      } else if (answers.shape === "circle") { // if the user chose circle
        shape = new Circle(answers); // create a new Circle object
      } else { // if the user did not choose a valid shape
        console.log("Error: Shape not found"); // log an error
      }
      return shape.generateShape(); // generate the shape
    })
    .then((result) => { // result is the svg code for the shape
      writeFileAsync("./dist/logo.svg", result); // write the svg code to a file
      console.log("Generated logo.svg"); // log a message
      console.log("logo.svg saved to dist folder"); // log a message
    })
    .catch((err) => console.error(err)); // if there is an error, log it
};

init(); // call the init function