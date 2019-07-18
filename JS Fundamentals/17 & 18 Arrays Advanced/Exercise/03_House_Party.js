function solve(arr) {

let list = [];

    for (let i = 0; i <  arr.length; i++) {
        let names = arr[i].split(' ');

        if (names.length === 3) {
            if(list.includes(names[0])){
                console.log(`${names[0]} is already in the list!`)
            } else {
                list.push(names[0]);
            }
        } else {
            if(list.includes(names[0])){
                list.splice(list.indexOf(names[0]),1 )
            } else {
                console.log(`${names[0]} is not in the list!`)
            }
        }

    }

    console.log(list.join('\n'));

}