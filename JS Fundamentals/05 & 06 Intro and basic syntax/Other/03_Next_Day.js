function solve(year, month, day) {


    let d2 = new Date(year, month - 1, day + 2);


    let str = d2.toISOString().split("T")[0];

    let str1 = str.split("-");

    let m = Number(str1[1]);
    let d = Number(str1[2]);

    let str3 = str1[0] + '-' + m + '-' + d;

    console.log(str3);


}

solve(2016, 9, 30);