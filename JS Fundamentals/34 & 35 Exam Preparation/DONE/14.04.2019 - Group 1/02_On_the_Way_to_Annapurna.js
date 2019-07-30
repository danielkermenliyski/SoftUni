function solve(input) {

    let list = {};
    input.pop();


    input.forEach((line) => {
        let [command, store, items] = line.split('->');
        if (command === 'Add') {
            if (!list.hasOwnProperty(store)) {
                list[store] = [];

            }

            let itemsArr = items.split(',');
            itemsArr.forEach((el) => {
                list[store].push(el);

            });


        } else if (command === 'Remove') {

            if (list.hasOwnProperty(store)) {
                delete list[store];
            }
        }

    });

    let sorted = Object.entries(list).sort((a,b) => {
       return b[1].length - a[1].length || b[0].localeCompare(a[0]);

    });

    console.log('Stores list:');
    sorted.forEach((line)=> {
        console.log(line[0]);
        line[1].forEach((stock) => {
            console.log(`<<${stock}>>`)
        });
    })


}

solve(['Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END']
);

solve(['Add->Peak->Waterproof,Umbrella',
    'Add->Groceries->Water,Juice,Food',
    'Add->Peak->Tent',
    'Add->Peak->Sleeping-Bag',
    'Add->Peak->Jacket',
    'Add->Groceries->Lighter',
    'Remove->Groceries',
    'Remove->Store',
    'END']
);
