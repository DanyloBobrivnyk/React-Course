// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
        if (i === 13) break;
        console.log(i);
    }
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }

}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i <= 16) {
        if (i % 2 == 0) {
            console.log(i);
        }
        i++;
    }

}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    let i = 5;
    while (i <= 10) {
        arrayOfNumbers[i - 5] = i;
    }

    // Не трогаем
    return arrayOfNumbers;
}
// part 2

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    const arrSize = arr.length;
    for (let i = 0; i < arrSize; i++) {
        result[i] = arr[i];
    }

    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i])) {
            data[i] = data[i].concat(' - done');
        } else {
            data[i] = data[i] * 2;
        }
    }

    console.log(data);

    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут


    // Не трогаем
    return result;
}

// 24. practise


let isQuizFinished = false;
const numberOfFilms = +prompt('How many films you watched?', '');
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
for (let i = 1; i < numberOfFilms; i++) {

}

do {

}
while (isQuizFinished != true)


const lastWatchedFilm = prompt('Which film you watched last time?', '');
const lastWatchedFilmRate = +prompt('How would you rate it?', '');

personalMoviesDB.movies[lastWatchedFilm] = lastWatchedFilmRate;
console.log(personalMoviesDB);