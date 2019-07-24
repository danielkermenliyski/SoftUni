function solve(arr) {

    let keys = arr[0].split('&');
    let validKeys = [];

    //validate keys
    keys.forEach((line) => {
        let pattern = /([A-Za-z0-9]{25})|([A-Za-z0-9]{16})/gm;

        let result = pattern.exec(line);

        if (result) {
            validKeys.push(result[0]);
        }
    });

    //subtract from 9
    let validNumbers = [];
    validKeys.forEach((line) => {
        let currentArray = [];
        for (let i = 0; i < line.length; i++) {

            let current = +line[i];
            if (!isNaN(current)) {
                let newValue = 9 - current;
                currentArray.push(newValue);
            } else {
                currentArray.push(line[i])
            }

        }
        validNumbers.push(currentArray.join('').toUpperCase());
        currentArray = [];
    });


    //group and print
    let output = [];
    validNumbers.forEach((line) => {
        if (line.length === 16) {
            let pattern = /([A-Za-z0-9]{4})/gm;

            let validKeysNew = [];
            let validKey = null;

            while ((validKey = pattern.exec(line)) !== null) {
                validKeysNew.push(validKey[0]);
            }

            output.push(validKeysNew.join('-'));

        }
        if (line.length === 25) {
            let pattern = /([A-Za-z0-9]{5})/gm;

            let validKeysNew = [];
            let validKey = null;

            while ((validKey = pattern.exec(line)) !== null) {
                validKeysNew.push(validKey[0]);
            }


            output.push(validKeysNew.join('-'));

        }


    });

    console.log(output.join(', '));


}

solve(['xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS']);

//solve(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs']);