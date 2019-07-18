function solve(arr){

let map = new Map();

for(let string of arr) {
    let tokens = string.split(' ');
    let product = tokens[0];
    let quantity = +tokens[1];

if(!map.has(product)) {
    map.set(product,quantity);
} else {
    let currentQuantity =  +map.get(product);
    let newQuantity = currentQuantity + quantity;
    map.set(product, newQuantity);
}
}

for(let key of map) {
    console.log(`${key[0]} -> ${key[1]}`)
}

}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);