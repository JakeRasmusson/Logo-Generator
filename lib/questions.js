const questions = [
    {
        type: "input",
        name: "textInput",
        message: "Please input three characters for your logo.",
        default: "RIP",
        validate: function(input){
            if (input.length <= 3) {
              return true
            } else {
              return false
            }
      
          }
      },{
        type: "input",
        name: "textColor",
        message: "Please input a fill color for you text.",
        default: "White",
      },
      {
        type: "list",
        name: "shapeInput",
        message: "What shape do you want your logo?",
        choices: ['Square','Triangle','Circle'],
        default: "None",
      },
      {
        type: "input",
        name: "shapeFill",
        message:"Please input a fill color for the shape you have chosen.",
        default: "White",
      }
]

module.exports = { questions }