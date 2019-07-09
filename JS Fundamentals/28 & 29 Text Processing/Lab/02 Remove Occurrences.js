function solve(word, text) {

    for (const firstChar of word) {
        for (const secondChar of text) {
            if(firstChar === secondChar) {
                text = text.replace(secondChar,'');
            }

        }

    }

    let set = new Set(text);
    let output = '';
    for (const argument of set) {
       output+=argument;

    }
    console.log(output);
}

solve('ice', 'kkicegiciceeb');