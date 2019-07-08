function main() {

    return solve(23, 6, 10);
}



function solve(a, b, c) {

    let sum = (m, n) => m + n;
    let subtract = (m, n) => m - n;

    let m = sum(a,b);
    return subtract(m,c);

}