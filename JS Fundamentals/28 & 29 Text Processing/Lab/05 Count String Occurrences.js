function solve(string, searchedWord) {

    let words = string.split(' ');
    let counter = 0;

    for (let i = 0; i < words.length; i++) {

        if(words[i] === searchedWord){
            counter++;
        }

    }

    console.log(counter);
}

solve("This is a word and it also is a sentence",
    "is");