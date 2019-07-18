function solve(word, text) {

let savedWord = word;
word = word.toLowerCase();
text = text.toLowerCase();

let arr = text.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === word) {
            console.log(savedWord);
            return;
        }
    }


        console.log(`${savedWord} not found!`)


}

solve('javascript',
    'JavaScript is the best programming language'

);
