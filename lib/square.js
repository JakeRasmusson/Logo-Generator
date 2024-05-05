const { Shapes } = require('./shapes')


class Square extends Shapes{
    constructor(text,textColor, shapeFill) {
        super(text, textColor)
        this.shape = `<rect x="75" y="25" width="150" height="150" fill="${shapeFill}" />`
    }
}

module.exports = { Square }