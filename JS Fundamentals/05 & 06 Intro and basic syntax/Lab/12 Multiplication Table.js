function solve (num) {

    let a =0;

    for (let i =1; i<=10;i++) {

        a = i * num;
        console.log (num + ' X ' + i + ' = ' + a);
        a=0;
    }


}

solve(5);