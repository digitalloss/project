"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
};

const a = prompt('Один из последних просмотренних фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Сколько фильмов вы уже просмотрели?'),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);