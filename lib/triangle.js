const { Shapes } = require('./shapes')


class Triangle extends Shapes{
    constructor(text,textColor, shapeFill) {
        super(text, textColor)
        this.shape = ` <polygon points="150, 18 244, 182 56, 182" fill="${shapeFill}"/>`
    }
}

module.exports = { Triangle }