function solve(text) {

let first = text.substring(0, text.length/2);
first = first.split('').reverse();

console.log(first.join(''));

let second = text.substring(text.length/2, text.length);
second = second.split('').reverse();
console.log(second.join(''));

}

solve('tluciffiDsIsihTgnizamAoSsIsihT');