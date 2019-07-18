function solve(elements) {

    let sumEven = 0;
    let sumOdd = 0;


    elements.forEach(num => {
            if (num % 2 === 0) {
                sumEven += num;
            }
    });

        elements.forEach(num => {
        if (num % 2 !== 0) {
            sumOdd += num;
        }
    });



    console.log(sumEven - sumOdd);

}