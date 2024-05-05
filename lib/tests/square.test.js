const { Square } = require('../square')

describe('Squares class', () => {

    test('Sqaure has correct data instatianed with', () => {
        const shapeFill = 'black'
        const squareTest = new Square('plc', 'white', shapeFill)
        expect(squareTest.shape).toBe(`<rect x="75" y="25" width="150" height="150" fill="black" />`)
    })
})