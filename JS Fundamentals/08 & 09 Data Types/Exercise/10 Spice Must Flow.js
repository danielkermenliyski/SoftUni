function solve(yield) {

    let profit = 0;
    let days = 0;
    let storage = 0;

    while (yield >= 100) {


        storage += (yield -26);

        if (storage <= 0) {
            storage = 0;
        }


        yield -= 10;
        days += 1;

    }

    console.log(days);

    if (storage >= 26) {
        console.log(storage - 26);
    } else {
        console.log(0)
    }

}

solve(111);