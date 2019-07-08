function solve(arr) {

    let clean = 0;

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'soap':
                clean += 10;
                break;
            case 'water':
                clean += 0.2*clean;
                break;
            case 'vacuum cleaner':
                clean += 0.25*clean;
                break;
            case 'mud':
                clean -= 0.10*clean;
                break;
        }

    }


    return `The car is ${clean.toFixed(2)}% clean.`

}