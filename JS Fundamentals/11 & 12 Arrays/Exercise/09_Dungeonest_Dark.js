function solve(input) {

    let health = 100;
    let coins = 0;
    let inputStr=input.toString();
    let rooms = inputStr.split('|');

    for (let i = 0; i < rooms.length; i++) {

        let item = rooms[i].split(' ');

        if(item[0] === 'chest') {
            coins += Number(item[1]);
            console.log(`You found ${item[1]} coins.`)
        }

         else if(item[0] === 'potion') {
            health += Number(item[1]);
            if(health > 100) {
                let calc = Number(item[1]) - (health -100);
                console.log(`You healed for ${calc} hp.`);
                health = 100;
            } else {
            console.log(`You healed for ${item[1]} hp.`); }
            console.log(`Current health: ${health} hp.`)
        }

        else {
            health -= Number(item[1]);

            if (health <= 0) {
                console.log(`You died! Killed by ${item[0]}.`);
                console.log(`Best room: ${i+1}`);
                return;
            } else {
                console.log(`You slayed ${item[0]}.`)
            }
        }


    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);



}