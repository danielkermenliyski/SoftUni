function solve(input) {

    let result = {};

    for (let i = 0; i < input.length; i++) {

        let [town, latitude, longitude] = input[i].split(" | ");

        latitude = +latitude;
        latitude= latitude.toFixed(2);

        longitude = +longitude;
        longitude= longitude.toFixed(2);

        result.town = town;
        result.latitude = latitude;
        result.longitude = longitude;

        console.log(result);


    }

}