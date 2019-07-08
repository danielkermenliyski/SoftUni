function solve(input) {

    let words = input.shift().split(' ');
    let wordsCount = {};

    for (let word of words) {
        wordsCount[word] = 0;
    }

    for (let currentWord of input) {
        if (wordsCount.hasOwnProperty(currentWord)) {
            wordsCount[currentWord]++;
        }
    }
    let sortedWords = Object.entries(wordsCount)
        .sort((firstPair,secondPair) => {
            let [firstWord,firstOcurrence] = firstPair;
            let [secondWord,secondOcurrence] = secondPair;
            return  secondOcurrence - firstOcurrence;
        });

    for(let [word, occurence]of sortedWords) {
        console.log(`${word} - ${occurence}`);
    }
}

solve([
        'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence','because','this','is','your','task'
    ]
);