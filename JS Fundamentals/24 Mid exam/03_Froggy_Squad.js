function third(arr) {

    let frogs = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {

        let [command, first, second] =arr[i].split(' ');

        if(command === 'Join' && !frogs.includes(first)) {
            frogs.push(first);
        }

        if(command === 'Dive' && +first >=0 && +first <= frogs.length) {
            frogs.splice(+first,1);
            let a=5;
        }

        if(command === 'Jump' && +second >=0 && +second <= frogs.length) {
            frogs.splice(+second,0,first);
        }

        if(command === 'First') {
            let result = '';
            if(+first>= frogs.length) {
                console.log(frogs.join(' '));
            } else {
                for (let j = 0; j < +first ; j++) {
                    result += frogs[j] + ' ';
                }
                console.log(result);
            }
        }

        if(command === 'Last') {
            let result = '';
            if(+first >= frogs.length) {
                console.log(frogs.join(' '));
            } else {
                for (let j = +first; j > 0 ; j--) {
                    result += frogs[frogs.length-j] + ' ';

                }
                console.log(result);
            }
        }

        if(command === 'Print' && first === 'Normal') {
            console.log(`Frogs: ${frogs.join(' ')}`)
        }

        if(command === 'Print' && first === 'Reversed') {

            let reversed = frogs.reverse();
            console.log(`Frogs: ${reversed.join(' ')}`)
        }



    }



}