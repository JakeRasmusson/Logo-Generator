class Shapes{
    constructor(text, textColor){
        this.text = text
        this.textColor = textColor

    }
}

// class Circle extends Shapes{
//     constructor(text,textColor, shapeFill) {
//         super(text, textColor)
//         this.shape = `<circle cx="150" cy="100" r="80" fill="${shapeFill}"/>`
//     }
// }

// class Square extends Shapes{
//     constructor(text,textColor, shapeFill) {
//         super(text, textColor)
//         this.shape = `<rect x="75" y="25" width="150" height="150" fill="${shapeFill}" />`
//     }
// }

// class Triangle extends Shapes{
//     constructor(text,textColor, shapeFill) {
//         super(text, textColor)
//         this.shape = ` <polygon points="150, 18 244, 182 56, 182" fill="${shapeFill}"/>`
//     }
// }


module.exports = { Shapes }