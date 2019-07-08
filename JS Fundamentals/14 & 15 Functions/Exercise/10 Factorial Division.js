function solve(first, second) {

//recursive
    let factorial = function(n) {
        if(n === 0) {
            return 1
        } else {
            return n * factorial(n - 1);
        }
    };

    let a =  factorial(first);
    let b =  factorial(second);

    return (a/b).toFixed(2);
}
