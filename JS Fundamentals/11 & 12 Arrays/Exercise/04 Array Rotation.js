function solve(arr, rotations) {



    for (let i = 0; i < rotations ; i++) {


        arr.push(arr[0]);
        let f = arr.shift();

    }

    let str = arr.toString().split(",");
     str = str.join(" ")

console.log(str);
}

solve([2, 4, 15, 31],
    5
);
