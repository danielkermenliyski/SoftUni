function solve(arr) {

    let arrPaintings = arr.shift();
    arr.pop();
    arrPaintings = arrPaintings.split(' ');

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(' ');

        switch (command[0]) {
            case 'Insert':
                if (command[1] < arrPaintings.length) {
                    insert(arrPaintings, +command[1], command[2]);
                }
                break;
            case 'Switch':
                if (arrPaintings.includes(command[1]) && arrPaintings.includes(command[2])) {
                    switchElement(arrPaintings, arrPaintings.indexOf(command[1]), arrPaintings.indexOf(command[2]));
                }
                break;
            case 'Hide':
                if (arrPaintings.includes(command[1])) {
                    hide(arrPaintings, arrPaintings.indexOf(command[1]));
                }
                break;
            case 'Reverse':
                arrPaintings.reverse();
                break;
            case 'Change':
                if (arrPaintings.includes(command[1])) {
                    change(arrPaintings, arrPaintings.indexOf(command[1]), command[2]);
                }

                break;
        }
    }


    function insert(arr1, index, newValue) {

        arr1.splice(index + 1, 0, newValue);

    }

    function hide(arr1, index) {
        arr1.splice(index, 1);
    }

    function change(arr, indexOldValue, newValue) {
        arr.splice(indexOldValue, 1, newValue);

    }

    function switchElement(arr1, indexOld, indexNew) {
        [arr1[indexOld], arr1[indexNew]] = [arr1[indexNew], arr1[indexOld]];

    }

    console.log(arrPaintings.join(' '));
}

