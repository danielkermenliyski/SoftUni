function solve(arr) {

    let daysOfTheTrip = +arr.shift();
    let budget = +arr.shift();
    let people = +arr.shift();
    let fuelPerKilometer = +arr.shift();
    let foodPerPerson = +arr.shift();
    let hotelRoomPerNightPerPerson = +arr.shift();

    let foodTotal = people * foodPerPerson * daysOfTheTrip;
    let hotelTotal = people * hotelRoomPerNightPerPerson * daysOfTheTrip;
    if(people > 10) {
        hotelTotal = hotelTotal*0.75;
    }
    let currentExpenses = foodTotal + hotelTotal;
    let fuelTotal = 0;
    let check = true;


    for (let i = 0; i < arr.length; i++) {

        fuelTotal = +arr[i] * fuelPerKilometer;
        currentExpenses +=  fuelTotal;

        if ((i + 1) % 3 === 0 || (i + 1) % 5 === 0) {
            currentExpenses *= 1.4;
        }

        if ((i + 1) % 7 === 0) {
            currentExpenses -= currentExpenses / people;
        }

        if(currentExpenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${(currentExpenses - budget).toFixed(2)}$ more.`);
            check = false;
            return ;
        }


    }

    if(check) {
        console.log(`You have reached the destination. You have ${(budget - currentExpenses).toFixed(2)}$ budget left.`);
        return;
    }


}