const { Shapes } = require('./shapes')


class Circle extends Shapes{
    constructor(text,textColor, shapeFill) {
        super(text, textColor)
        this.shape = `<circle cx="150" cy="100" r="80" fill="${shapeFill}"/>`
    }
}


module.exports = { Circle }