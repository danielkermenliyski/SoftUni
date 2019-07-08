function solve(arr) {

    let account = arr.shift();
    account = account.split(" ");
    let lastElemet = arr.pop();
    let check = false;
    let check2 = 0;

    for (let i = 0; i < arr.length; i++) {

        let action = arr[i].split(" ");

        if (action[0] === 'Install') {

            for (let j = 0; j < account.length; j++) {
                if (action[1] === account[j]) {
                    check2++;
                }


            }

            if(check2 === 0) {

                account.push(action[1]);
                check2 =0;
            }


        }

        if (action[0] === 'Uninstall') {
            for (let j = 0; j < account.length; j++) {

                if (action[1] === account[j]) {
                    account.splice(j, 1);

                }

            }
        }


        if (action[0] === 'Update') {

            for (let j = 0; j < account.length; j++) {

                if (action[1] === account[j]) {
                    check = true;
                    account.splice(j, 1);
                }

            }

            if (check) {
                account.push(action[1]);
                check = false;
            }

        }

        if (action[0] === 'Expansion') {

            let arr2 = action[1].split("-");

            for (let j = 0; j < account.length; j++) {

                if (arr2[0] === account[j]) {
                    let newGame = arr2[0] + ":" + arr2[1];
                    account.splice(j + 1, 0, newGame);

                }

            }


        }

    }

    //console.log(account.join(" "));
    return account.join(" ");


}


function magicMatrices(input) {

    let sum = input[0].reduce((a, b) => a + b, 0);


    for (let row = 1; row < input.length; row++) {
        let rowSum = input[row].reduce((a, b) => a + b, 0);

        if (rowSum !== sum) {
            console.log("false");
            return false;
        }
    }

    for (let row = 0; row < input.length; row++) {
        let colSum = input.reduce((a, b) => a + b[row], 0);

        if (colSum !== sum) {
            console.log("false");
            return false;
        }
    }

    console.log("true");
    return true;
}

module.exports = {magicMatrices, solve};