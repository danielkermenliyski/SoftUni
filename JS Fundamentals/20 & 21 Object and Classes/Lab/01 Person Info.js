function solve (firstName, lastName, age) {

    let result = {
        firstName,
        lastName,
        age
    };

    let entries = Object.entries((result));


for (const [firstName, secondName] of entries) {
    console.log(`${firstName}: ${secondName}`)
}
}