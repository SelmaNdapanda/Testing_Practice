const capitalize = require('./capitalize');

test('capitalize the first character in the string', () => {
    expect(capitalize("this")).toBe('This');
})

test('capitalize the first character in the string', () => {
    expect(capitalize("tHIS")).toBe('This');
})

test('capitalize the first character in the string', () => {
    expect(capitalize("THIS")).toBe('This');
})