function solve(arr) {

    let budget = Number(arr[0]);
    let priceFlour = Number(arr[1]);
    let priceEggs = priceFlour*0.75;
    let priceMilk = (priceFlour*1.25)/4;
    let priceCozonacs = priceFlour + priceEggs + priceMilk;
    let cozonacsCount = 0;
    let coloredEggsCount = 0;

    while (budget > priceCozonacs) {
        cozonacsCount++;
        budget-=priceCozonacs;
        coloredEggsCount+=3;

        if(cozonacsCount % 3 === 0) {
            coloredEggsCount -= cozonacsCount -2;
        }

    }
    return `You made ${cozonacsCount} cozonacs! Now you have ${coloredEggsCount} eggs and ${budget.toFixed(2)}BGN left.`
}