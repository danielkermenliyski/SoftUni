function solve(input) {

    let inventory = [];

    for (const inputRow of input) {
        let [name, level, items] = inputRow.split(' / ');
        level = +level;
        items = items.split(', ');
        items = items.sort((a, b) => a.localeCompare(b));
        items.forEach((key) => {
            key = key + ' ';
        });

        inventory.push({
            name,
            level,
            items
        })
    }

    let byLevel = inventory.splice(0);
    byLevel.sort(function (a, b) {
        return a.level - b.level;
    });

    byLevel.forEach((obj) => {

        for (let key in obj) {
            if (key === 'name') {
                console.log(`Hero: ${obj[key]}`)
            } else if (key === 'items') {
                console.log(`${key} => ${obj[key].join(', ')}`)

            } else {
                console.log(`${key} => ${obj[key]}`)
            }
        }

    });

}