function solve(input) {

    let line = input.shift;
    while (line !== 'Last note') {
        let pattern = /^([A-Za-z0-1!@#$?]+)=(\d+)<<(.+)$/gm;

        let result = pattern.exec(line);


        console.log(result);

        line = input.shift();
    }
}

solve(['!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note']);

// solve([ 'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
//     '=9Cho?@#Oyu<<thvb7ydht',
//     'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
//     'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
//     'Last note' ]);
