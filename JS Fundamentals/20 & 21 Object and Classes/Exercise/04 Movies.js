function solve(input) {

    let movies = {};

    for (let i = 0; i < input.length; i++) {

        if (input[i].includes('addMovie')) {

           let movieName = input[i].replace(/addMovie\s*/,'');
            if (!movies.hasOwnProperty(movieName)) {
                movies[movieName] = { name: movieName };
            }
        } else if (input[i].includes('onDate')) {
            let [movieName, date] = input[i].split(/\s*onDate\s*/);
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName]['date'] = date;
            }
        } else if (input[i].includes('directedBy')) {
            let [movieName, director] = input[i].split(/\s*directedBy\s*/);
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName]['director'] = director;
            }
        }
    }
    for (const movieName in movies) {
        const movie = movies[movieName];
        if (
            movie.hasOwnProperty('name') &&
            movie.hasOwnProperty('date') &&
            movie.hasOwnProperty('director')
        ) {
            console.log(JSON.stringify(movie));
        }
    }
}

}