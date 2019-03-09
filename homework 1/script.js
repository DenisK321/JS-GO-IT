"use strict"

const adminLogin = 'LogIn';
const loginWind = prompt('Ведите логин');
const adminPassword = 'Pass';


if(loginWind === null){
    alert('Отменено пользователем')
}else if(loginWind !== adminLogin){
    alert('Доступ запрещен, неверный логтн')
}else if(loginWind === adminLogin){
    const PassWind = prompt('Ведите пароль')
    if(PassWind === null){
    alert('Отменено пользователем')
    }else if(PassWind !== adminPassword){
        alert('Доступ запрещен, неверный пароль')
    }else{
        alert('Добро пожаловать')
    };
};









