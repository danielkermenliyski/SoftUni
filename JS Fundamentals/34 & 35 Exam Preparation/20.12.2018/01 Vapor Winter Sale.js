function solve(input) {

    let games = {};
    let gamesDLC = {};

    let gamesArray = input[0].split(', ');

    //fill the object

    for (let elem of gamesArray) {

        if (elem.includes('-')) {
            let [game, price] = elem.split('-');
            price = +price;

            if (!games.hasOwnProperty(game)) {
                games[game] = [];
                games[game].push(price);
            } else {
                games[game].push(price);
            }

        } else {
            let [game, expansion] = elem.split(':');

            if (games.hasOwnProperty(game)) {
                games[game].push(expansion);
            }
        }

    }

    // change prices

    for (let key in games) {
        if (games[key].length === 1) {
            let price = +games[key][0];
            price = price * 0.80;
            games[key][0] = price;
        } else {
            let price = +games[key][0];
            price = price * 1.20;
            price = price * 0.5;
            games[key][0] = price;
        }

    }

    // sort the object
   // console.log(games);

    for (let key in games) {
        let value = games[key];
        if (value.length === 2) {
            gamesDLC[key] = value;
            delete games[key];
        }
    }


    let sorted = Object.entries(games).sort((a, b) => {
        let first = a[1][0];
        let second = b[1][0];

        return second - first;
    });

    let sortedDLC = Object.entries(gamesDLC).sort((a, b) => {
        let first = a[1][0];
        let second = b[1][0];

        return first - second;
    });



    //print the result

    for (let row of sortedDLC) {
        console.log(`${row[0]} - ${row[1][1]} - ${row[1][0].toFixed(2)}`);
    }


    for (let row of sorted) {
        if (row[1].length === 1) {
            console.log(`${row[0]} - ${row[1][0].toFixed(2)}`);
        }
    }


}

solve(['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT']);


solve([ 'Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC' ]);