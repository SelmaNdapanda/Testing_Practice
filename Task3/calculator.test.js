const calculator = require('./calculator');

describe('Addition', () => {
    test('addition of two positive numbers', () => {
        expect(calculator.add(3,4)).toBe(7);
    })
    test('addition of a positive and a negative number', () => {
        expect(calculator.add(3,-4)).toBe(-1);
    })
    test('addition of a negative and a positive number', () => {
        expect(calculator.add(-3,4)).toBe(1);
    })
    test('addition of two negative numbers', () => {
        expect(calculator.add(-3,-4)).toBe(-7);
    })
})

describe('Subtraction', () => {
    test('subtraction of two positive numbers', () => {
        expect(calculator.subtract(3,4)).toBe(-1);
    })
    test('subtraction of a positive and a negative number', () => {
        expect(calculator.subtract(3,-4)).toBe(7);
    })
    test('subtraction of a negative and a positive number', () => {
        expect(calculator.subtract(-3,4)).toBe(-7);
    })
    test('subtraction of two negative numbers', () => {
        expect(calculator.subtract(-3,-4)).toBe(1);
    })
})

describe('Division', () => {
    test('division of two positive numbers', () => {
        expect(calculator.divide(3,4)).toBe(0.75);
    })
    test('division of a positive and a negative number', () => {
        expect(calculator.divide(3,-4)).toBe(-0.75);
    })
    test('division of a negative and a positive number', () => {
        expect(calculator.divide(-3,4)).toBe(-0.75);
    })
    test('division of two negative numbers', () => {
        expect(calculator.divide(-3,-4)).toBe(0.75);
    })
})

describe('Multiplication', () => {
    test('product of two positive numbers', () => {
        expect(calculator.multiply(3,4)).toBe(12);
    })
    test('product of a positive and a negative number', () => {
        expect(calculator.multiply(3,-4)).toBe(-12);
    })
    test('product of a negative and a positive number', () => {
        expect(calculator.multiply(-3,4)).toBe(-12);
    })
    test('product of two negative numbers', () => {
        expect(calculator.multiply(-3,-4)).toBe(12);
    })
})
