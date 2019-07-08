function solve(arr) {

    let output = '';
    let num = 0;
    let smallLet = 0;
    let bigLet = 0;
    let err = 0;
    let err2 = 0;

    if (arr.length < 6 || arr.length > 10) {
        output += 'Password must be between 6 and 10 characters\n';
        err++;
    }

    for (let i = 0; i < arr.length; i++) {

        let currentChar = arr[i].charCodeAt(0);

        if (currentChar >= 48 && currentChar <= 57) {
            num++;

        } else if (currentChar >= 65 && currentChar <= 90) {
            smallLet++;
        } else if (currentChar >= 97 && currentChar <= 122) {
            bigLet++;
        } else {
            err2++;
        }
    }

    if (err2 !== 0) {
        output += 'Password must consist only of letters and digits\n';
        err++;

    }

    if (num < 2) {
        output += 'Password must have at least 2 digits\n';
        err++;
    } else if (num >= 2 && err === 0) {
        output += 'Password is valid\n';
    }

    return output;

}
