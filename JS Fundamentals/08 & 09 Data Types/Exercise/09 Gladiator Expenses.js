function solve(lostGames, helmetPrice, swordPrice, shieldPrice, armourPrice) {

    let totalexpenses = 0;
  let counter = 0;

    for (let i = 1; i <= lostGames; i++) {

        if (i % 2 === 0) {
            totalexpenses += helmetPrice;
        }

        if (i % 3 === 0) {
            totalexpenses += swordPrice;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            totalexpenses += shieldPrice;
            counter +=1;
        }

        if(counter % 2 === 0 && counter !== 0){
            totalexpenses+=armourPrice;
            counter =0;
        }

    }

    let str = totalexpenses.toFixed(2);

    console.log(`Gladiator expenses: ${str} aureus`);

}