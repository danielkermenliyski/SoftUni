function solve(arr) {

    let check = true;
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length  ; j++) {

            if (arr[i] <= arr[j]) {
                 check = false;
                 break;
            }

        }

        if(check) {
            str += arr[i] +' ';
        }
        check = true
    }

    console.log(str);

}

solve([1, 4, 3, 2]);