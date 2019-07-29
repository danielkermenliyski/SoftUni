function solve(input) {

    let finalWord = input.pop();

    const convertToAscii = (string) => {

        let output = [];
        let result = "";

        const arr = string.split(":");

        arr.forEach((line) => {
            let current = String.fromCharCode(Number(line));
            output.push(current);
        });

        return result += output.join('');

    };

    finalWord = convertToAscii(finalWord);

    const findAllEmoji = (string) => {

        let pattern = /\s:([a-z]{4,}):\s/gm;
        let validEmojis = [];
        let validEmoji = null;

        while ((validEmoji = pattern.exec(string)) !== null) {
            validEmojis.push(validEmoji[1]);
        }

        return validEmojis;
    };

    let validEmojisArray = findAllEmoji(input);

    const sumAllLetters = (line) => {

        let sum = 0;
        let totalSum = 0;

        line.forEach((elem) => {
            let current = Number(elem.charCodeAt(0));
            sum += current;
        })
    };


}

solve(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110']);

// solve([ 'In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
//   '97:101:117:114' ]);
