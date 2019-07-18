function solve(arr) {

arr.sort((a,b)=> b-a);
let newArr = [];
let copyArr = arr.slice(0);

    for (let i = 0; i < copyArr.length; i++) {

        if(i % 2 === 0) {
            newArr.push(arr.shift());
        } else {
            newArr.push(arr.pop());
        }

    }

console.log(newArr.join(' '))


}