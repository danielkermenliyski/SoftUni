function solve(arr, num) {


    let numbers = arr.map(Number);


    for (let i = 0; i < numbers.length-1 ; i++) {

        for (let j = i+1; j < numbers.length; j++) {


            if ((numbers[i] + numbers[j]) === Number(num)) {



                console.log(numbers[i] + ' ' + numbers[j]);

            }

        }
    }
}

solve([1, 2, 3, 4, 5, 6], [6]);
