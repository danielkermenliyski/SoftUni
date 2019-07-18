function solve(arr) {

    let last = Number(arr.pop());
    let str = "";

    for (let i = 0; i < arr.length; i++) {

        if(i % Number(last) === 0) {
            str += arr[i]+" ";
        }

    }

    console.log(str);

}