function solve(input) {

    input.pop();
    let mappedSong = [];
    input.forEach((line) => {
        let pattern = /^([A-Z][a-z'\s]+):([A-Z][A-Z\s]+[A-Z])$/gm;
        let result = pattern.exec(line);
        if (result) {
            let [artist, song] = line.split(':');
            let len = artist.length;

            for (let i = 0; i < len; i++) {
                let currentChar = artist.charCodeAt(i);
                let newChar = currentChar + len;

                if (newChar > 90 && newChar < 97) {
                    let calcChar = newChar - 90;
                    let calcCharFinal = 65 + calcChar;
                    newChar = calcChar;
                } else if (newChar > 122) {
                    let calcChar = newChar - 122;
                    let calcCharFinal = 97 + calcChar;
                    newChar = calcChar;
                }

                let mappedChar = String.fromCharCode(newChar);
                mappedSong.push(mappedChar);

            }

            mappedSong.push('@');

            let lenSong = song.length;

            for (let i = 0; i < lenSong; i++) {


                let currentChar = song.charCodeAt(i);
                let newChar = currentChar + len;

                if (newChar > 90 && newChar < 97) {
                    let calcChar = newChar - 90;
                    let calcCharFinal = 65 + calcChar;
                    newChar = calcChar;
                } else if (newChar > 122) {
                    let calcChar = newChar - 122;
                    let calcCharFinal = 97 + calcChar;
                    newChar = calcChar;
                }

                let mappedChar = String.fromCharCode(newChar);
                mappedSong.push(mappedChar);

            }
        }


    });

    console.log(mappedSong);


}

solve(['Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end']);

// solve(['Michael Jackson:ANOTHER PART OF ME',
//     'Adele:ONE AND ONLY',
//     'Guns n\'roses:NOVEMBER RAIN',
//     'Christina Aguilera: HuRt',
//     'end']
// );
