const personalMoviesDB = {
    count: 0,
    movies: [],
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMoviesDB.count = +prompt('How many films you watched?', '');

        while (personalMoviesDB.count == '' || personalMoviesDB.count == null ||
            isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt('How many films you watched?', '');
        }
    },
    toggleVisibleMyDB: () => { private = !private },
    writeYourGenres: function() {
        for (let i = 0; i < personalMoviesDB.count; i++) {
            let movieName = prompt('Название фильма:');
            if (movieName === '' || movieName == null) {
                console.log('Вы ввели некорректные данные или их нет.');
                i--;
            } else {
                personalMoviesDB.movies[i] = movieName;
            }
        }

        personalMoviesDB.movies.forEach(movie => {
            let beatufiedIndex = personalMoviesDB.movies.indexOf(movie) + 1;
            console.log(`Любимый фильм #${beatufiedIndex} - ${movie}`)
        });
    }
}

personalMoviesDB.start();
personalMoviesDB.writeYourGenres();