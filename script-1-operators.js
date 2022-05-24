const numberOfFilms = +prompt('How many films you watched?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const lastWatchedFilm = prompt('Which film you watched last time?', '');
const lastWatchedFilmRate = +prompt('How would you rate it?', '');

personalMoviesDB.movies[lastWatchedFilm] = lastWatchedFilmRate;
console.log(personalMoviesDB);