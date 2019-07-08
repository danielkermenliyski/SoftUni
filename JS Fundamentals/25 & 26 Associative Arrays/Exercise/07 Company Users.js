function solve(input) {

    let companies = {};

    for (const elem of input) {

        let [company, id] = elem.split(' -> ');

        if(!companies.hasOwnProperty(company)) {

            companies[company]=id;

        } else {
            let currentValue = companies[company];
            let newValue = currentValue + ',' +id;
            companies[company] = newValue;

        }

    }

    let sorted =[...Object.entries(companies)];
    sorted.sort((a,b) =>
        a[0].localeCompare(b[0]));

    for(let elem of sorted){
        console.log(elem[0]);
        let numberIds = elem[1].split(',');
        let set = new Set(numberIds);

        for(let number of set) {
            console.log(`-- ${number}`);

        }
    }

}

solve([ 'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111' ]);