const { Triangle } = require('../triangle')

describe('Triangle class', () => {
    test('Triangle has correct data instatianed with', () => {
        const shapeFill = 'black'
        const triangleTest = new Triangle('plc', 'white', shapeFill)
        expect(triangleTest.shape).toBe(` <polygon points="150, 18 244, 182 56, 182" fill="black"/>`)
    })
    
})