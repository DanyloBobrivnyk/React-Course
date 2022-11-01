/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Довод",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const advertisments = document.querySelectorAll('.promo__adv img'),
        banner = document.querySelector('.promo__bg'),
        promoGenre = banner.querySelector('.promo__genre'),
        watchedMovies = document.querySelector('.promo__interactive'),
        movieList = watchedMovies.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        favouriteCheckbox = addForm.querySelector('input[type="checkbox"]'),
        input = addForm.querySelector('.adding__input'),
        acceptButton = addForm.querySelector('button');

    const listElement = document.createElement('li'),
        deleteDiv = document.createElement('div');
    deleteDiv.className = 'delete';
    listElement.className = 'promo__interactive-item';

    //listeners

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let movieName = formatMovieName(input.value);
        if (movieName.length != 0) {
            movieDB.movies.push(movieName);
            refreshMovieList();

            addForm.reset();
        }
    });

    // main

    function refreshMovieList() {
        movieDB.movies.sort();
        movieList.querySelectorAll('li').forEach(li => li.remove());

        movieDB.movies.forEach((movie, i) => {
            let tmpNode = listElement;
            tmpNode.innerText = `${i+1}. ` + movie;

            tmpNode.insertAdjacentElement('beforeend', deleteDiv);

            movieList.insertAdjacentHTML('beforeend', tmpNode.outerHTML);
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                deleteMovie(i);
                refreshMovieList();
            });
        });
    }

    function deleteMovie(movieIndex) {
        if (movieIndex > -1) {
            movieDB.movies.splice(movieIndex, 1);
            refreshMovieList();
        }
    }

    function formatMovieName(movieName) {
        if (String(movieName).length > 21) {
            movieName = movieName.substring(0, 21);
            movieName += '...';
        }
        return movieName;
    }

    //1
    advertisments.forEach(adv => adv.remove());

    //2,3  
    promoGenre.textContent = 'ДРАМА';
    let targetBgPath = './img/bg.jpg';
    banner.style.backgroundImage = `url(${targetBgPath})`;

    //4,5
    refreshMovieList();
});