function solve(elements) {

    for (let i = 0; i < elements.length; i++) {
        elements[i] = Number(elements[i]);
    }


    let sum = 0;

    for (let i = 0; i < elements.length; i++) {

        if (elements[i] % 2 === 0) {
            sum += elements[i];
        }

    }

    console.log(sum);


}

solve(['1', '2', '3', '4', '5', '6']);