function solve (num) {

    let a =0;

    for (let i =1; i<=num*2;i++) {
        if(i%2 != 0) {
            console.log(i);
            a += i;
        }

    }
    console.log('Sum: '+a)

}