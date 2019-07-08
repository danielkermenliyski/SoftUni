function solve(drink, quantity) {

    let totalPrice = 0;

switch (drink) {

    case 'water': totalPrice = quantity * 1;
    break;
    case 'coffee': totalPrice = quantity * 1.5;
    break;
    case 'coke': totalPrice = quantity * 1.4;
    break;
    case 'snacks': totalPrice = quantity * 2;
}

return totalPrice.toFixed(2);


}