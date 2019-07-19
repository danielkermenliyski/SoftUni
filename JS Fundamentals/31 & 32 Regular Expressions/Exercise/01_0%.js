function solve(arr) {

    console.log('Bought furniture:');
    let totalSum = 0;
    arr.forEach((line) => {
        const pattern = />>(?<name>[A-Za-z]+)<<([0-9]+[.]?[0-9]*)!([\d]+)/g;
        let result = pattern.exec(line);

        if(result){
            let currentSum = Number(result.groups.price) * Number(result.groups.quantity);
            console.log(result.groups);
        }


    });


}

solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);