function solve(input) {

    let dictionary = {};

    for (let i = 0; i < input.length; i++) {
        let obj = JSON.parse(input[i]);
        dictionary = Object.assign(dictionary,obj);
    }

    let dictArray = Object.keys(dictionary);
    dictArray.sort((a,b) => a.localeCompare(b));

    for (let i = 0; i < dictArray.length; i++) {
        console.log(`Term: ${dictArray[i]} => Definition: ${dictionary[dictArray[i]]}`)
    }

}