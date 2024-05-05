const inquirer = require("./node_modules/inquirer");
const fs = require("fs");
const { questions } = require("./lib/questions.js");
const { generateSvg } = require("./lib/generatesvg.js");

async function init() {
    await inquirer.prompt(questions).then((answers) => {
      const {textInput, textColor, shapeInput, shapeFill} = answers
      const shapeSvg = generateSvg(shapeInput, shapeFill,textInput, textColor)
      writeToFile(shapeSvg)
  })
}

function writeToFile(shapeSvg) {
  fs.writeFile(`./examples/logo.svg`, shapeSvg, function (err) {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
}



init()