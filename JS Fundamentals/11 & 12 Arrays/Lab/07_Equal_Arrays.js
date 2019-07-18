function solve(arr1, arr2) {

    arr1 = arr1.map(Number);
    arr2 = arr2.map(Number);

    let check = true;

    let sum = 0;

    arr1.forEach(num =>{
        sum+=num;
    });

    for (let i = 0; i < arr1.length; i++) {

        if(arr1[i] !== arr2[i]) {

            console.log(`Arrays are not identical. Found difference at ${i} index`)
            check = false;
            break;

        }

    }

    if(check) {
        console.log(`Arrays are identical. Sum: ${sum}`);

    }

}
