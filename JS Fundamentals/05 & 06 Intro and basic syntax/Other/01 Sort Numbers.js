function solve(a,b,c) {

    let numArray = [a,b,c];

    numArray = numArray.sort((a, b) => b - a);

    console.log(numArray[0]);

    console.log(numArray[1]);

    console.log(numArray[2]);
}