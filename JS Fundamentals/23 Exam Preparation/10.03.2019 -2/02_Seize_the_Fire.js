function solve(arr) {


    arr = arr.join().split(',');
    let water = +arr[1];
    arr.pop();
    arr = arr.join().split('#');
    let effort = 0;
    let fire = 0;

    //let water = arr[];

    console.log('Cells:');

    for (let i = 0; i < arr.length; i++) {

        let level = arr[i].split('=')[0];
        let amount = +arr[i].split('=')[1];

        if (water >= 0) {

            switch (level) {
                case 'High ':
                    calc(amount, 81, 125);
                    break;
                case'Medium ':
                    calc(amount, 51, 80);
                    break;
                case'Low ':
                    calc(amount, 1, 50);
                    break;
            }
        }


    }

    function calc(value, min, max) {
        if (value >= min && value <= max && water >= value) {
            water -= value;
            fire += value;
            effort += (value * 0.25);
            console.log(`- ${value}`)
        }
    }

    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${fire.toFixed(0)}`);



}