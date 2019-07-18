function solve(input) {

    let result = new Map();
    let neighborhoods = input.shift().split(", ");

    neighborhoods.forEach(n => {
        result.set(n, []);
    });

    for (let line of input) {
        let [neighborhood, name] = line.split(' - ');
        if(result.has(neighborhood)) {
            let people = result.get(neighborhood);
            people.push(name);

            result.set(neighborhood, people);
        }
    }

    let output = [... result.entries()];

    output.sort((a,b)=>
        b[1].length -a[1].length
    );

    for(let [area,persons] of output) {
        console.log(`${area}: ${persons.length}`);
        for (const someone of persons) {
            console.log(`--${someone}`)
        }
    }


}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']

);