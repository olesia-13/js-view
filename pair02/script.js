//Умова if else - результат true або false

// > < >= <= == === !== !=
// let a, b;
// a = "1";
// b = 1;
// console.log(a === b); //=== - false, == - true (строга рівність враховує тип даних)

// if (умова){
//     код
// }

// let temp = Number(prompt('Enter a temperature'));
// let result;
// if (temp < 0) {
//     result = 'cold'
// }
// else if (temp >= 25) {
//     result = 'hot'
// }
// else if (temp > 0 && temp < 24) {
//     result = 'normal'
// }
//
// alert(result);

// || - or && - and

// ------------------------------------------------------------------------
// let number = Number(prompt('Enter a number'));
// let result;
// if (number % 2 === 0){
//     result = 'парне'
// }
// else if (number % 2 > 0){
//     result = 'непарне'
// }
//
// alert(result);



// const login = "admin";
// const password = 12345;
//
// let user_login = prompt("Enter your username");
// let user_password = prompt("Enter your password");
//
// if (user_login === login && user_password === password) {
//     alert("Доступ дозволено")
// }
// else {
//     alert("Доступ заборонено")
// }



//Вартість доставки
//post - 100
//courier - 200
//pickup - 0
//Коли в нас зарезервовані варіанти ми використовуємо switch case
// let deliveryType = prompt('What is your delivery type?');
// let cost = 0;
//
// switch (deliveryType) {
//     case 'post':
//         cost = 100;
//         break;
//
//     case 'courier':
//         cost = 200;
//         break;
//
//     case 'pickup':
//         cost = 0;
//         break;
//
//     default:
//         cost = "no answer"
// }
// alert(cost);



// -------------------------------------------------------------------------
let weekday = Number(prompt('What is your number '));
let result;

switch (weekday) {
    case 1:
        result = 'Понеділок';
        break;

    case 2:
        cost = 2;
        result = 'Вівторок';
        break;

    case 3:
        result = 'Середа';
        break;
    case 4:
        result = 'Четвер';
        break;
    case 5:
        result = 'Пятниця';
        break;
    case 6:
        result = 'Субота';
        break;
    case 7:
        result = 'Неділя';
        break;
    default:
        result = "no answer"
}
alert(result);

