'use strict'

let logins = ['Sasha', 'Dmitry', 'Ilya'];

let whatIsYourLogin = prompt('What Is your login');

const isLoginValid = (str) => str.length >= 4 && str.length <= 16;

const isLoginUnique = (masiv, login) => masiv.indexOf(login) === -1;

console.log(
    isLoginValid(whatIsYourLogin)
);
console.log(
    isLoginUnique(logins, whatIsYourLogin)
)
