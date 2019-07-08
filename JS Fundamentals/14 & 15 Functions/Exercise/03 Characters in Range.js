function main() {

    return solve('C', '#');
}


function solve(a, b) {

let first = a.charCodeAt(0);
let second = b.charCodeAt(0);
if( first > second) {

    second = a.charCodeAt(0);
     first = b.charCodeAt(0);

}

let output = '';

    for (let i = first+1; i < second ; i++) {

       output += String.fromCharCode(i) +' ';

    }

    return output;
}
