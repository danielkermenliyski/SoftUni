function solve(num, arr) {

    let str = '';

    for (let i = num-1; i >= 0 ; i--) {


        str += arr[i] + ' '


    }

    console.log(str);

}

solve(3, [10, 20, 30, 40, 50]);
