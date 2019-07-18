function solve(currentStock, orderedStock) {

    let result = {};

    for (let i = 0; i < currentStock.length; i++) {
        if (i % 2 === 0) {
            result[currentStock[i]] = +currentStock[i + 1];
        }
    }

    for (let i = 0; i < orderedStock.length; i++) {
        if (i % 2 === 0) {
            if(result.hasOwnProperty(orderedStock[i])){
                let key = orderedStock[i];
                let value = +orderedStock[i+1];

                result[key] +=value;

            } else {
                result[orderedStock[i]] = +orderedStock[i+1];
            }
        }
    }

    for  (let key in result) {
        console.log(`${key} -> ${result[key]}`);
    }

}