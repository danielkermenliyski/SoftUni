function solve(input) {

    let person = {};


    for (let i = 0; i < input.length; i++) {

        person.name = input[i];
        person.personalNumber = input[i].length;

        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`)

    }

}