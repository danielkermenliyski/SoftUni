function solve(input) {

    let text = input[0];
    let [replacement, replaced] = input[1].split(' ');
    let newText = '';
    let value = '';

    //decode the text
    for (let elem of text) {
        value = elem.charCodeAt(elem) - 3;
        newText += String.fromCharCode(value);
    }

    //replace word in the string
    while (newText.includes(replacement)) {
        newText = newText.replace(replacement, replaced);
    }

    //check validity
    for (let ch of newText) {
        let current = newText.charCodeAt(ch);
        let check = (current >= 100 && current <= 125) || (current === 35);
        if (!check) {
            console.log('This is not the book you are looking for.');
            return
        }
    }
    console.log(newText);

}

solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an']);


solve(['arx#vkdww#qrw#sdvv', 't l']);