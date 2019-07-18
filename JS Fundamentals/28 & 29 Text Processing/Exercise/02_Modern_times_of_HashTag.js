function solve(text) {

    let words = text.split(' ');

    words.forEach((word) => {
        let current = '';
        if (word[0] === '#') {
            for (let i = 1; i < word.length; i++) {
                if ((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)) {
                    current += word[i]
                } else {
                    current = '';
                    break;

                }

            }
            if (current !== '') {
                console.log(current);
                current = '';
            }
        }


    })

}

solve('#Nowadays everyone uses # to tag a #special word in #socialMedia');