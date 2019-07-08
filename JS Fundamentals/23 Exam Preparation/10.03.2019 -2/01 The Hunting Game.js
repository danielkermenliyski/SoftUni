function solve(arr) {

    let days = arr.shift();
    let people = arr.shift();
    let energy = arr.shift();
    let waterPerPerson = arr.shift();
    let foodPerPerson = arr.shift();
    let water = waterPerPerson * people * days;
    let food = foodPerPerson * people * days;

    for (let i = 0; i < arr.length; i++) {

        energy -= arr[i];

        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
            return;
        }

        if ((i + 1) % 2 === 0) {
            energy *= 1.05;
            water *= 0.7;
        }

        if ((i + 1) % 3 === 0) {
            energy *= 1.1;
            food -= (food / people);
        }



    }

    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`)
    }

}