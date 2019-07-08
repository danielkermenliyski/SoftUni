function main() {

    return solve(28);
}

function solve(num) {

    let sum = 0;
    let output = '';

    for (let i = 0; i < num; i++) {

        if( num % i === 0) {

            sum += i;
        }

    }

    if(sum === num) {
        output = 'We have a perfect number!'
    } else {
        output = 'It\'s not so perfect.'
    }

    return output;

}
