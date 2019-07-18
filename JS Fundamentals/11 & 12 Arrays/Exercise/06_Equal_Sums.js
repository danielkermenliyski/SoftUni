function solve(arr) {

    let sumleft = 0;
    let sumright = 0;
    let check = 0;


    for (let i = 0; i < arr.length; i++) {

        for (let j = 1+i; j < arr.length  ; j++) {

            
            
            sumright +=arr[j];
        }

        for (let k = 0; k < i ; k++) {

           sumleft += arr[k];

        }

        if(sumleft === sumright) {
            console.log(i);
            check = 1;
            break;
        }

        sumleft = 0;
        sumright = 0;

    }

    if(check === 0) {
        console.log(`no`);
    }

}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
