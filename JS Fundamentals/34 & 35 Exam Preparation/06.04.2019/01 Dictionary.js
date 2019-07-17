function solve(input) {

    let dictionary = {};

    let words = input[0].split(' | ');
    let printedWords = input[1].split(' | ');
    let command = input[2].split(' | ');

// fill the dictionary
    for (let word of words) {

        let [term, definition] = word.split(': ');

        if (!dictionary.hasOwnProperty(term)) {
            dictionary[term] = [];
            dictionary[term].push(definition);
        } else {
            dictionary[term].push(definition)
        }
    }

    // print the words

    for (let word of printedWords) {
        if (dictionary.hasOwnProperty(word)) {
            console.log(word);

            let sorted = dictionary[word].sort((a, b) => {
                return b.length - a.length;
            });

            for (let i = 0; i < sorted.length; i++) {

                console.log(` -${sorted[i]}`);
            }
        }
    }

    // Check the command

    let output = [];

    if (command[0] === 'List') {
        for (let rows in dictionary) {
            output.push(rows);
        }

        let sortedArray = output.sort((a,b) => {
            return a.localeCompare(b);
        });
        console.log(output.join(' '));
    }

}

solve([ 'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End' ]);