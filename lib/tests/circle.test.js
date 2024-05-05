const { Circle } = require('../circle')

describe('Circle class', () => {

    test('Circle has correct data instatianed with', () => {
        const shapeFill = 'black'
        const circleTest = new Circle('plc', 'white', shapeFill)
        expect(circleTest.shape).toBe(`<circle cx="150" cy="100" r="80" fill="black"/>`)
    })

    
})