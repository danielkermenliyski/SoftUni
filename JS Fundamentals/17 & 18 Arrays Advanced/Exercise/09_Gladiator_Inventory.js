function solve(arr) {

    let equipment = arr.shift();
    equipment = equipment.split(' ');

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(' ');
        let action = command[0];
        let item = command[1];

        if (action === 'Buy') {
            if (!equipment.includes(item)) {
                equipment.push(item);
            }
        } else if (action === 'Trash') {
            if (equipment.includes(item)) {
                let index = equipment.indexOf(item);
                equipment.splice(index, 1)
            }

        } else if (action === 'Repair') {
            if (equipment.includes(item)) {
                let index = equipment.indexOf(item);
                let repItem = equipment[index];
                equipment.splice(index, 1);
                equipment.push(repItem);

            }
        } else if (action === 'Upgrade') {

            let upgradedArr = item.split('-');
            let upgradedItem = upgradedArr[0];
            let upgradedMaterial = upgradedArr[1];

            if (equipment.includes(upgradedItem)) {
                let index = equipment.indexOf(upgradedItem);
                let newItem = upgradedItem + ':' + upgradedMaterial;
                equipment.splice(index + 1, 0, newItem);
            }


        }

    }
    console.log(equipment.join(' '));
}
