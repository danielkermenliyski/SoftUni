function solve(arr) {

    let budget = +arr.pop();
    let inputString = arr.toString();
    let arrItem = inputString.split('|');
    let output = '';
    let profit = 0;
    let increasedPrice = 0;
    let sumNewPrices = 0;

    for (let i = 0; i < arrItem.length; i++) {

        let currentItem = arrItem[i].split('->')[0];
        let currentPrice = arrItem[i].split('->')[1];

        switch (currentItem) {
            case 'Clothes':
                if (currentPrice <= 50 && budget >= currentPrice && budget >= 0) {
                    budget -= currentPrice;
                    increasedPrice = currentPrice * 1.4;
                    output += increasedPrice.toFixed(2) + ' ';
                    profit += increasedPrice - currentPrice;
                    sumNewPrices += increasedPrice;
                }
                break;
            case 'Shoes':
                if (currentPrice <= 35 && budget >= currentPrice && budget >= 0) {
                    budget -= currentPrice;
                    increasedPrice = currentPrice * 1.4;
                    output += increasedPrice.toFixed(2) + ' ';
                    profit += increasedPrice - currentPrice;
                    sumNewPrices += increasedPrice;
                }
                break;
            case 'Accessories':
                if (currentPrice <= 20.50 && budget >= currentPrice && budget >= 0) {
                    budget -= currentPrice;
                    increasedPrice = currentPrice * 1.4;
                    output += increasedPrice.toFixed(2) + ' ';
                    profit += increasedPrice - currentPrice;
                    sumNewPrices += increasedPrice;
                }
                break;
        }



    }

    let totalMoney =  budget + sumNewPrices;
    console.log(output);
    console.log(`Profit: ${profit.toFixed(2)}`);

    if (totalMoney >= 150) {

        console.log('Hello, France!')
    } else {

        console.log('Time to go.');
    }

}