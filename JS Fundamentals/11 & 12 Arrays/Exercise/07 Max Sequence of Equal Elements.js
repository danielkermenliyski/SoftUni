function solve(arr) {

    let indexOfBiggestSequence = -1;
    let maxSeqLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        let currentSeqLength = 1;

        for (let j = i + 1; j < arr.length; j++) {
            let nextEL = arr[j];

            if (currentEl !== nextEL) {
                break;
            } else {
                currentSeqLength++;
            }

        }

        if (currentSeqLength > maxSeqLength) {
            maxSeqLength = currentSeqLength;
            indexOfBiggestSequence = i;
        }

    }

    let element = arr[indexOfBiggestSequence];
    console.log(`${element}`.repeat(maxSeqLength));
    


}
