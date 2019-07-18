function solve(a, b, operator) {

    switch (operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            return multiply(a, b);
            break;
        case'divide':
            let divide = (a, b) => a / b;
            return divide(a, b);
            break;
        case'add':
            let add = (a, b) => a + b;
            return add(a, b);
            break;
        case'subtract':
            let subtract = (a, b) => a - b;
            return subtract(a, b);
            break;

    }


}