function main() {

    return solve(1000435);
}


function solve(num) {

    let sumEven = 0;
    let sumOdd = 0;
    let str = num.toString();

    for (let i = 0; i < str.length; i++) {

        let currentChar = Number(num % 10);

        if (currentChar % 2 === 0) {

            sumEven += currentChar;
        } else {
            sumOdd+= currentChar;
        }

        num = Math.trunc(num / 10);
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;

}