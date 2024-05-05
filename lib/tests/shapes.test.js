const { Shapes } = require('../shapes')



describe('Shapes class', () => {
    test('Shapes has correct data instatianed with', () => {
        const text = 'plc'
        const textColor = 'white'
        const shapeTest = new Shapes(text, textColor)

        expect(shapeTest.text).toBe('plc')
        expect(shapeTest.textColor).toBe('white')
    })
    
})



