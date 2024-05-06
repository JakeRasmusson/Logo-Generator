const { generateSvg } = require('../generatesvg')

describe('Squares class', () => {

    test('Sqaure has correct data instatianed with', () => {
        const shapeFill = 'black'
        const shapeInput = 'Square'
        const text = 'plc'
        const textColor = 'black'
        const svgtest = generateSvg(shapeInput, shapeFill, text, textColor)
        expect(svgtest).toBe(`
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
    
         <rect x="75" y="25" width="150" height="150" fill="black" />
    
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">plc</text>
    
        </svg>
        `.replaceAll(/\s+/g, ''))
    })
})