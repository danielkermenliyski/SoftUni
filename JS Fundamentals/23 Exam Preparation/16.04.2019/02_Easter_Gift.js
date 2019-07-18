function solve(arr) {

    let presents = arr.shift();
    let last = arr.pop();
    let arrPresents = presents.split(' ');

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i].split(' ');

        if (current[0] === 'OutOfStock') {
            for (let j = 0; j < arrPresents.length; j++) {

                if (current[1] === arrPresents[j]) {
                    arrPresents.splice(j, 1,'None');
                }

            }
        }

        if (current[0] === 'Required') {

            if(current[2] <= arrPresents.length-1 && current[2] >0)
                arrPresents.splice(current[2],1,current[1]);

        }

        if (current[0] === 'JustInCase') {

            arrPresents.splice(arrPresents.length-1,1,current[1]);
        }


    }

    let result = arrPresents.filter(word => word !== 'None');
    return result.join(' ');


}