function main() {

    return solve(3.33);
}

function solve(grade) {

    if (grade >= 2 && grade <= 2.99) {
        return 'Fail';
    }

    if (grade >= 3 && grade <= 3.49) {
        return 'Poor';
    }

    if (grade >= 3.5 && grade <= 4.49) {
        return 'Good';
    }

    if (grade >= 4.5 && grade <= 5.49) {
        return 'Very good';
    }

    if (grade >= 5.5 && grade <= 6.00) {
        return 'Excellent';
    }



}