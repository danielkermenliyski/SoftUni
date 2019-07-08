function solve(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {

            if(arr1[i]===arr2[j]) {
                console.log(arr1[i]);
            }

        }

    }

}

solve(["Hey", "hello", 2, 4, "Pesho", "e"], ["Pecho", 10, "hey", 4, "hello", "2"]);