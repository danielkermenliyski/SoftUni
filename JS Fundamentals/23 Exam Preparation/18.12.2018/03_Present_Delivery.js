function solve(arr) {

    let houses = arr.shift().split('@').map(Number);
    arr.pop();
    let startPosition = 0;
    let nextPosition = 0;
    let countFailed = 0;
    let countSuccess = 0;

    for (let i = 0; i < arr.length; i++) {

        let jump = +arr[i].split(' ')[1];

        if((startPosition+jump) >= houses.length) {
            nextPosition = (startPosition + jump) % houses.length;
        } else {
            nextPosition = startPosition + jump;
        }
        if (houses[nextPosition] >= 2) {
            houses[nextPosition] -= 2;
        } else if (houses[nextPosition] === 0) {
            console.log(`House ${nextPosition} will have a Merry Christmas.`)
        }

        startPosition = nextPosition;

    }

    console.log(`Santa's last position was ${Math.trunc(startPosition)}.`);

    for (let i = 0; i < houses.length; i++) {

        if (houses[i] !== 0) {
            countFailed++;
        } else {
            countSuccess++;
        }

    }

    if (houses.length === countSuccess) {
        console.log('Mission was successful.')
    } else {
        console.log(`Santa has failed ${countFailed} houses.`)
    }

}