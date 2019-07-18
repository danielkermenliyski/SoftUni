function solve(number) {

    let check = 0;


    for (let i = 2; i < number; i++) {

        if (number % i === 0) {

            check = 1;


        }
    }

    if(check === 1) {
        console.log('false');
    } else {
        console.log('true');
    }
}
