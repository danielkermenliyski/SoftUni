function solve(n) {

    let number = '';

    for (let i = 1; i <=n ; i++) {
        for (let j = 1; j <=i ; j++) {

            number += i+' ';

        }

        console.log(number);
        number = '';
    }

}

solve(5);