function solve(num1, operator, num2) {

    result = 0;

    switch (operator) {
        case '+': result = num1 + num2;
        break;
        case '-': result = num1 - num2;
        break;
        case '/': result = num1 / num2;
        break;
        case '*': result = num1*num2;
        break;
    }

    console.log(result.toFixed(2))

}

solve(5,'+',5);
