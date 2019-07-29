function solve(input) {

    let animals = {};

    for (let line of input) {

        if (line === 'Last Info') {
            break;
        }

        let [command, name, limit, area] = line.split(':');

        if (command === 'Add') {
            if (!animals.hasOwnProperty(name)) {
                animals[name] = [];
                animals[name].push(area);
                animals[name].push(0);
            }
            let currentLimit = Number(animals[name][1]);
            animals[name][1] = Number(limit) + currentLimit;
        } else {
            if (animals.hasOwnProperty(name)) {
                animals[name][1] -= limit;
                if (animals[name][1] <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete animals[name];
                }
            }
        }
    }

    let sortedAnimals = Object.entries(animals).sort((a, b) => {
        return b[1][1] - a[1][1] || a[0].localeCompare(b[0]);

    });

    let areas = [];

    console.log('Animals:');
    if (sortedAnimals.length > 0) {

        sortedAnimals.forEach((line) => {
            console.log(`${line[0]} -> ${line[1][1]}g`);
            areas.push(line[1][0]);
        });
    }

    let areasObj = {};

    areas.forEach((area) => {
        if (!areasObj.hasOwnProperty(area)) {
            areasObj[area] = 1
        } else {
            areasObj[area] += 1;
        }
    });

    let sortedAreas = Object.entries(areasObj).sort((a, b) => {
        return b[1] - a[1] || b[0].localeCompare(a[0]);
    });

    console.log('Areas with hungry animals:');
    if (sortedAreas.length > 0) {

        sortedAreas.forEach((area) => {
            console.log(`${area[0]} : ${area[1]}`)
        })
    }


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
