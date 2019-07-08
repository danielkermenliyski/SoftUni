function solve(elements) {

    for (let i = 0; i < elements.length / 2; i++) {
        swapElements(elements, i, elements.length - 1 - i);



    }
    console.log(elements.join(' '));

        function swapElements(arr, i, j) {

            let oldElement = arr[i];
            arr[i] = arr[j];
            arr[j] = oldElement;
        }



}

solve(['a', 'b', 'c', 'd', 'e']);