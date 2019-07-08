function main() {

    return solve([123, 323, 421, 121]);
}


function solve(arr) {

    let output = '';

    for (let i = 0; i < arr.length; i++) {

        let firstStr = arr[i].toString();
        let arrRev = firstStr.split('');
        arrRev = arrRev.reverse();

        let secondStr = arrRev.join('');


        if (firstStr === secondStr) {
            output += 'true \n'
        } else {
            output += 'false \n'
        }

    }

    return output;


}