/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Довод",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1
let advertismentsNode = document.querySelectorAll('.promo__adv img');
advertismentsNode.forEach(adv => adv.remove());
//2
let bannerNode = document.querySelector('.promo__bg'),
    promoGenreNode = bannerNode.querySelector('.promo__genre');

promoGenreNode.textContent = 'ДРАМА';
//3
let targetBgPath = './img/bg.jpg';
bannerNode.style.backgroundImage = `url(${targetBgPath})`;

//4.5
let watchedMoviesNode = document.querySelector('.promo__interactive'),
    moviesListNode = watchedMoviesNode.querySelector('.promo__interactive-list');

moviesListNode.querySelectorAll('li').forEach(li => li.remove());

const listElement = document.createElement('li');
listElement.className = 'promo__interactive-item';
const deleteDivNode = document.createElement('div')
deleteDivNode.className = 'delete';
listElement.appendChild(deleteDivNode)

movieDB.movies.sort();
movieDB.movies.forEach((movie, i) => {
    let tmpNode = listElement;
    tmpNode.innerText = `${i+1}. ` + movie;
    moviesListNode.insertAdjacentHTML('beforeend', tmpNode.outerHTML);
});