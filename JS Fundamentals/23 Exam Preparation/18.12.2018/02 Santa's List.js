function solve(arr) {

    let list = arr[0].split('&');
    arr.shift();
    arr.pop();

    for (let i = 0; i < arr.length; i++) {
        let [command, name, newName] = arr[i].split(' ');
        let a = 10;

        if (command === 'Bad' && !list.includes(name)) {
            list.splice(0, 0, name);
        }

        if (command === 'Good' && list.includes(name)) {
            let index = list.indexOf(name);
            list.splice(index, 1);
        }

        if (command === 'Rename' && list.includes(name)) {
            let index = list.indexOf(name);
            list.splice(index, 1,newName);
        }

        if (command === 'Rearrange' && list.includes(name)) {
            let index = list.indexOf(name);
            let currentName = name;
            list.splice(index, 1);
            list.push(currentName);
        }

    }

    console.log(list.join(', '))


}