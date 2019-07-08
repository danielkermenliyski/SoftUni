function solve(jsonStr) {

let person = JSON.parse(jsonStr);

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

}