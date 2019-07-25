function solve(input) {

    let finalBand = input.pop();
    input.pop();
    let concert = {};
    let totalTime = 0;

    //fill the object and calculate totalTime
    input.forEach((line) => {
        let [command, band, other] = line.split('; ');

        if (command === 'Play') {
            let time = +other;
            if (!concert.hasOwnProperty(band)) {
                concert[band] = {};
                concert[band]['time'] = 0;
                concert[band]['members'] = [];
            }
            let currentTime = +concert[band]['time'];
            concert[band]['time'] = currentTime + time;
            totalTime += time;
        } else {
            let members = other.split(', ');
            if (!concert.hasOwnProperty(band)) {
                concert[band] = {};
                concert[band]['time'] = 0;
                concert[band]['members'] = [];
            }
            let oldMembers = concert[band]['members'];
            let newMembers = [...oldMembers,...members];
            let set = new Set(newMembers);
            concert[band]['members'] = Array.from(set);

        }
    });


    console.log(`Total time: ${totalTime}`);


    let concertArr = Object.entries(concert);
    let sorted = concertArr.sort((a, b) => {
        let n = b[1]['time'] - a[1]['time'];
        if(n !==0) {
            return n;
        }
         return a[0].localeCompare(b[0]);
    });

    sorted.forEach((line) => {
        console.log(`${line[0]} -> ${line[1]['time']}`);
            });

    console.log(finalBand);

    let final = concert[finalBand]['members'];
    final.forEach((line) => {
        console.log(`=> ${line}`);
    })
}

solve(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
'The Rolling Stones']);

solve([ 'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles' ]
);
