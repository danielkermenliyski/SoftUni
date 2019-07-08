function solve(input) {

    let cars = {};

    for (const elem of input) {
        let [command, number] = elem.split(', ');
        if (command === 'IN') {
            cars[number] = 0;
        } else {
            if(cars.hasOwnProperty(number)) {
                delete cars[number];
            }
        }
    }
let a=5;
    let sorted = [...Object.entries(cars)];
    sorted.sort((a,b) =>
        a[0].localeCompare(b[0]));

    for (const car of sorted) {
        console.log(car[0]);

    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);