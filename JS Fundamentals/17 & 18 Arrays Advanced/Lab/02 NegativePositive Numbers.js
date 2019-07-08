function solve(arr) {

    let newArr = [];

    for (let num of arr) {
        if (num >= 0) {
            newArr.push(num);
        } else {
            newArr.unshift(num);
        }
    }

    console.log(newArr.join('\n'))
}