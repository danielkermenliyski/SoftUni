function solve(num) {

    let color = 'black';
    console.log(`<div class="chessboard">`);

    for (let i = 0; i < num; i++) {

        console.log(`  <div>`);

        for (let j = 0; j < num; j++) {

            console.log(`    <span class="${color}"></span>`);

            if(color === 'black') {
                color = 'white';
            } else if(color === 'white') {
                color = 'black';
            }

            }


        if(num%2 ===0){
            if(color === 'black') {
                color = 'white';
            } else if(color === 'white') {
                color = 'black';
            }

        }

        console.log(`  </div>`);

    }
    console.log(`</div>`);
}