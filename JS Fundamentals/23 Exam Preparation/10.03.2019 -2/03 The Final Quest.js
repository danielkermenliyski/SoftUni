function solve(arr) {

    let arrText = arr.join().split(',')[0];
    arrText = arrText.split(' ');
    arr.shift();

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(' ');

        switch (command[0]) {
            case 'Put':
                if (+command[2] <= arrText.length + 1 && +command[2] > 0) {
                    put(arrText, +command[2], command[1]);
                }
                break;
            case 'Swap':
                if (arrText.includes(command[1]) && arrText.includes(command[2])) {
                    swapElement(arrText, arrText.indexOf(command[1]), arrText.indexOf(command[2]));
                }
                break;
            case 'Delete':
                if ((+command[1] + 1) < arrText.length && +command[1] >= 0) {
                    deleteElem(arrText, +command[1]);
                }
                break;
            case 'Sort':

                arrText.sort(function (a, b) {
                    return a.toLowerCase().localeCompare(b.toLowerCase());
                });

                //arrText.sort();
                arrText.reverse();


                break;
            case 'Replace':
                if (arrText.includes(command[2])) {
                    replace(arrText, arrText.indexOf(command[2]), command[1]);
                }

                break;
            case 'Stop':
                console.log(arrText.join(' '));
                return;

        }
    }


    function put(arr1, index, newValue) {

        arr1.splice((index - 1), 0, newValue);

    }

    function deleteElem(arr1, index) {
        arr1.splice((index + 1), 1);
    }

    function replace(arr1, indexOldValue, newValue) {
        arr1.splice(indexOldValue, 1, newValue);

    }

    function swapElement(arr1, indexOld, indexNew) {
        [arr1[indexOld], arr1[indexNew]] = [arr1[indexNew], arr1[indexOld]];

    }

    console.log(arrText.join(' '));


}