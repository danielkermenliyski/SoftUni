function solve(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {

        if (i % 2 === 0) {

            arr1[i] = Number(arr1[i]) + Number(arr2[i]);

        } else {

            arr1[i] = arr1[i] + arr2[i];
        }



    }
    let str = arr1.toString().split(",");
    str = str.join(" - ")

    console.log(str);


}

solve(["5", "15", "23", "56", "35"],
    ["17", "22", "87", "36", "11"]
);

