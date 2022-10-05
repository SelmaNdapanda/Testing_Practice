class Calculator {
    constructor(a,b) {
        a = this.a;
        b = this.b;
    }
    
    add(a,b) {
        return a + b;
    }
    
    subtract(a,b) {
        return a - b;
    }
    
    divide(a,b) {
        return a / b;
    }

    multiply(a,b) {
        return a * b;
    }
}

const calculator = new Calculator;
module.exports = calculator