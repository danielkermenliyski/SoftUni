function solve(arr) {

    let wagons = arr.shift()
        .split(' ')
        .map(Number);

    let maxCapacity = +arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(' ');

        if(commands.length ===  2) {
            wagons.push(+commands[1])
        } else {
            for (let j = 0; j < wagons.length ; j++) {

                if(Number(wagons[j])+ Number(commands[0]) <= maxCapacity) {
                    wagons[j] +=+commands[0];
                    break;
                }
            }

        }

    }
    console.log(wagons.join(' '))

}