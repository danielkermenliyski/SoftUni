function solve(arr) {

    let names = arr.shift().split(', ');
    arr.pop();
    let runners = {};

    arr.forEach((line) => {
        let namePattern = /[A-Za-z]/gm;
        let numberPattern = /\d/gm;

        let name = line.match(namePattern).join('');
        let distance = line.match(numberPattern).map(Number).reduce((a, b) => {
            return a + b;
        });
        if (names.includes(name)) {
            if (!runners.hasOwnProperty(name)) {
                runners[name] = 0;
            }
            runners[name] += distance;
        }
    });

    let result = Object.keys(runners)
        .sort((a, b) => runners[b] - runners[a])
        .slice(0,3);


    console.log(`1st place: ${result[0]}`);
    console.log(`2nd place: ${result[1]}`);
    console.log(`3rd place: ${result[2]}`);

}

solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);