function solve(arr) {

    let lastNumber = Number(arr.pop());


    for (let i = 0; i < lastNumber; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }

    //arr.toString().split(",");
    let str = arr.join(' ');
    console.log(str);
}

solve(['1']);