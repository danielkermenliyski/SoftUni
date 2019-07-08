function first(arr) {

    let side = +arr.shift();
    let sheets = +arr.shift();
    let areaSheet = +arr.shift();
    let covered = 0;


    let area = 6 * side * side;

    for (let i = 1; i <= sheets; i++) {

        if(i%3 ===0) {
            covered+=areaSheet*0.25;
        } else {
            covered += areaSheet;
        }

    }

    let percentage = (covered / area)*100;

    console.log(`You can cover ${percentage.toFixed(2)}% of the box.`);
}