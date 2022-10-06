const stringLength = require('./stringLength');

test('Number of characters in the string', () => {
    expect(stringLength('this')).toBe(4)
}) 

test('Number of characters is less than 1', () => {
    expect(() => {stringLength('')}).toThrow()
})

test('Number of characters is greater than 10', () => {
    expect(() => {stringLength('ThisIsSelmaH')}).toThrow()
})