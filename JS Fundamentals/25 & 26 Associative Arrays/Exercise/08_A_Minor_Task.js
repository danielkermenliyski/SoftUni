function solve(input) {

    let miner = {};

    for (let i = 0; i < input.length; i += 2) {
        let material = input[i];
        let value = Number(input[i + 1]);


        if(!miner.hasOwnProperty(material)){
            miner[material] = Number(value);
        } else {
            let newValue = miner[material] + Number(value);
            miner[material] = newValue;
        }


    }

    for (const elem in miner) {

        console.log(`${elem} -> ${miner[elem]}`)

    }
}

solve([
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
);