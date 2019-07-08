function main() {

    return solve(30);
}

function solve(num) {

    let output = `${num}% [`;
    let output2 = '';
    let finalOutput = '';

    for (let i = 0; i < num / 10; i++) {

        output += '%'

    }

    for (let i = 0; i < (10 - num / 10); i++) {

        output += '.';

    }

    output += ']\n';

    if (num === 100) {

        output2 = '100% Complete!';

        finalOutput = output2 + output;
        return finalOutput;
    } else {
        output2 = 'Still loading...';
        finalOutput = output + output2;
        return finalOutput;
    }

}
