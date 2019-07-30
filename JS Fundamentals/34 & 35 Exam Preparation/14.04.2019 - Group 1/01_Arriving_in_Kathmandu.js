function solve(input) {

    let line = input.shift();

    while (line !== 'Last note') {
        let pattern = /^([A-Za-z0-9!@#$?]+)=(\d+)<<(.+)$/gm;

        let result = pattern.exec(line);


        if (result === null) {
            console.log('Nothing found!')
        } else {
            let len = Number(result[2]);
            let lenCode = Number(result[3].length);
            if (len === lenCode) {
                let patternName = /[A-Za-z0-9]+/gm;

                let nameOfMountain = result[1].replace(/[!@#$?]+/g, '');

                console.log(`Coordinates found! ${nameOfMountain} -> ${result[3]}`)

            } else {
                console.log('Nothing found!')
            }
        }


        line = input.shift();
    }
}

solve(['!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note']);
//
// solve(['Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
//     '=9Cho?@#Oyu<<thvb7ydht',
//     'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
//     'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
//     'Last note']);
