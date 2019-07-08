function solve(input) {

    let array = input.split(' ');
    let obj = {};
    let output = '';

    for (const elem of array) {

        let newElem = elem.toLowerCase();

        if(!obj.hasOwnProperty(newElem)){
            obj[newElem] = 1;
        } else {
            obj[newElem] = obj[newElem]+1;
        }

    }

    for (const key in obj) {
        if(obj[key] % 2 !== 0) {
            output+=key + ' ';
        }
    }

    console.log(output);


}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');