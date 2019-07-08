function solve(input) {

    let size = +input.shift();
    let days = +input.shift();
    let coins = 0;

    for (let i = 1; i <= days; i++) {

        coins+=50;

        if(i%10 ===0) {
            size-=2
        }

        if(i%15 ===0) {
            size+=5;
        }

        if(i%3 === 0) {
            coins-=(size*3);
        }

        if(i%5 === 0 && i%3 !==0) {
            coins+=(20*size);
        }

        if(i%5 === 0 && i%3 ===0) {
            coins+=(20*size);
            coins-=(size*2);
        }

        coins-=(size*2);


    }

    if(coins <0) {
        coins = 0;
    }

    if(size <0) {
        size = 0;
    }

    console.log(`${size} companions received ${Math.floor(coins/size)} coins each.`)

}