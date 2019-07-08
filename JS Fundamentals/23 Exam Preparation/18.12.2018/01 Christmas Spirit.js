function solve(arr) {

    let quantity = +arr[0];
    let days = +arr[1];
    let spirit = 0;
    let total = 0;

    for (let i = 1; i <= days; i++) {

        if(i% 11 ===0){
            quantity += 2;
        }

        if (i % 2 === 0) {
            total += quantity * 2;
            spirit += 5;
        }

        if (i % 3 === 0) {
            total += quantity * 5;
            total += quantity * 3;
            spirit += 13;
        }

        if (i % 5 === 0) {
            total += quantity * 15;
            spirit += 17;
        }

        if (i % 5 === 0 && i % 3 === 0) {
            spirit += 30;
        }

        if (i % 10 === 0) {
            spirit -= 20;
            total += (5 + 3 + 15);


        }


    }

    if (days % 10 === 0) {
        spirit -= 30;
    }
    console.log(`Total cost: ${total}`);
    console.log(`Total spirit: ${spirit}`)
}