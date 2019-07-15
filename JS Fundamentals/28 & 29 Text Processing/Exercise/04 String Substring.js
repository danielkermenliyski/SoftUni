function solve(word, text) {

let savedWord = word;
word = word.toLowerCase();
text = text.toLowerCase();

if(text.includes(word)) {
    console.log(savedWord);
} else {
    console.log(`${savedWord} not found!`)
}

}

solve('python',
    'JavaScript is the best programming language'
);
