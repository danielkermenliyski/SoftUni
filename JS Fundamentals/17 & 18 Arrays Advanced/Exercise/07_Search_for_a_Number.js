function solve(numbers, params) {

    let counter = 0;
    let [number, deleted, element] = params;

    let newArr = numbers.splice(0, number);
    newArr.splice(0, deleted);

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === element) {
            counter++;
        }
    }


    console.log(`Number ${element} occurs ${counter} times.`);


}