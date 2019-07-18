function solve(people, type, day) {

    let price =0;
    let totalPrice =0;

    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
                    break;
            }
            break;

    }


    totalPrice = people * price;

    if(type === 'Students' && people >= 30) {

        totalPrice = totalPrice*0.85;
    }

    if (type === 'Business' && people >=100) {

        people = people - 10;
        totalPrice = people * price;

    }

    if (type === 'Regular' && people >= 10 && people <=20) {

        totalPrice = totalPrice*0.95;
    }


    console.log('Total price: ' + totalPrice.toFixed(2))

}

solve(40,'Regular','Saturday');