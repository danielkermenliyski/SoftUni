function solve(input) {
    let animals = {};
    let areas = {};
    let line = input.shift();
    while (line !== 'Last Info') {
        let [command, name, limit, area] = line.split(':');
        if (command === 'Add') {
            if (!animals.hasOwnProperty(name)) {
                animals[name] = 0;
                if (!areas.hasOwnProperty(area)) {
                    areas[area] = 0;
                }
                areas[area] += 1;
            }
            animals[name] += +limit;
        } else if (command === 'Feed') {
            if (animals.hasOwnProperty(name)) {
                animals[name] -= +limit;
                if (animals[name] <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete animals[name];
                    areas[area]--;
                }
            }
        }
        line = input.shift();
    }

    let sortedAnimals = Object.entries(animals).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    });

    console.log('Animals:');
    sortedAnimals.forEach(line => {
        console.log(`${line[0]} -> ${line[1]}g`);
    });

    let sortedAreas = Object.entries(areas).filter(el => el[1] > 0).sort((a, b) => {
        return b[1] - a[1];
    });

    console.log('Areas with hungry animals:');
    sortedAreas.forEach(area => {
        console.log(`${area[0]} : ${area[1]}`);
    });
}

// solve(['Add:Maya:7600:WaterfallArea',
//     'Add:Bobbie:6570:DeepWoodsArea',
//     'Add:Adam:4500:ByTheCreek',
//     'Add:Jamie:1290:RiverArea',
//     'Add:Gem:8730:WaterfallArea',
//     'Add:Maya:1230:WaterfallArea',
//     'Add:Jamie:560:RiverArea',
//     'Feed:Bobbie:6300:DeepWoodsArea',
//     'Feed:Adam:4650:ByTheCreek',
//     'Feed:Jamie:2000:RiverArea',
//     'Last Info']);


solve(['Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info']);
