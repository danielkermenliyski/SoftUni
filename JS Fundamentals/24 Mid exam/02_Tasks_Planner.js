function second(arr) {

    let hours = arr.shift().split(' ').map(Number);
    arr.pop();
    let dropped = 0;
    let completed = 0;
    let incompleted = 0;

    for (let i = 0; i < arr.length; i++) {

        let [command, first, second] = arr[i].split(' ');

        if (command === 'Complete' && +first <= hours.length && +first >= 0) {
            hours.splice(+first, 1, 0);
        }

        if (command === 'Change' && +first <= hours.length && +first >= 0 && +second >= -1 && +second <= 5) {
            hours.splice(+first, 1, +second);
        }

        if (command === 'Drop' && +first <= hours.length && +first >= 0) {
            hours.splice(+first, 1, -1);
        }

        if (command === 'Count' && first === 'Dropped') {
            for (let j = 0; j < hours.length; j++) {
                if (+hours[j] === -1) {
                    dropped++;
                }
            }
            console.log(dropped);
            dropped=0;
        }

        if (command === 'Count' && first === 'Completed') {
            for (let j = 0; j < hours.length; j++) {
                if (+hours[j] === 0) {
                    incompleted++;
                }
            }
            console.log(incompleted);
            incompleted=0;
        }

        if (command === 'Count' && first === 'Incomplete') {
            for (let j = 0; j < hours.length; j++) {
                if (+hours[j] !== 0 && +hours[j] !== -1) {
                    completed++;
                }
            }
            console.log(completed);
            completed=0;
        }


    }

    //let newArr = hours.filter((elem) => elem >= -1 && elem <=5);
    let newArr = hours.filter((elem) => elem !== 0 && elem !== -1 && elem <=5 && elem >=-1);


    console.log(newArr.join(' '));


}