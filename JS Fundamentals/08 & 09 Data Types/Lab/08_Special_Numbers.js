function solve(number) {

    let sum = 0;

    for (let num = 1; num <= number; num++) {


        let num2 = num;

        while (num2 > 0) {
            sum += parseInt(num2 % 10);
            num2 = parseInt(num2 / 10);

        }


        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${num} -> True`)
        } else {
            console.log(`${num} -> False`)
        }

        sum = 0;
        num2 = 0;

    }


}