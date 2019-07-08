function solve(arr) {

    let arrCommands = arr.toString().split('|');
    let energy = 100;
    let coins = 100;

    for (let i = 0; i < arrCommands.length; i++) {
        let currentCommand = arrCommands[i].split('-')[0];
        let currentAmount = +arrCommands[i].split('-')[1];

        switch (currentCommand) {
            case 'rest':
                energy += currentAmount;
                if (energy >= 100) {
                    let increase = (currentAmount + (100 - energy));
                    energy = 100;
                    console.log(`You gained ${increase} energy.`)
                } else {
                    console.log(`You gained ${currentAmount} energy.`)
                }
                console.log(`Current energy: ${energy}.`);
                break;
            case 'order':
                if (energy >= 30) {
                    energy -= 30;
                    coins += currentAmount;
                    console.log(`You earned ${currentAmount} coins.`)
                } else {
                    console.log('You had to rest!');
                    energy += 50;
                }
                break;
            default:
                coins -= currentAmount;
                if (coins > 0) {
                    console.log(`You bought ${currentCommand}.`)
                } else {
                    console.log(`Closed! Cannot afford ${currentCommand}.`);
                    return;
                }
                break
        }
    }
    console.log('Day completed!');
    console.log(`Coins: ${coins}`);
    console.log(`Energy: ${energy}`)


}