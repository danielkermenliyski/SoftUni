function solve(arr) {

    let budget = +arr.shift();
    let students =+ arr.shift();
    let priceFloor = +arr.shift();
    let priceEgg = +arr.shift();
    let priceApron = +arr.shift();
    let totalPrice = 0;

    for (let i = 1; i <= students; i++) {
        if(i % 5 !== 0) {
            totalPrice +=priceFloor;
        }
    }

    totalPrice += students * priceEgg * 10;
    let apron = Math.ceil(students * 1.2);
    totalPrice += apron * priceApron;

    if(totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`)
    } else {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`)
    }



}