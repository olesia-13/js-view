// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num ++;
// }

// let userNum = +prompt("Enter your number");
// while(userNum < 1 || userNum > 10){
//     userNum = +prompt("Error. Enter your number");
// }
// console.log(userNum);

// NaN - не числове значення (помилка)
// isNaN()
// console.log(Number("7"))
// console.log(Number("hello")) // - error NaN

// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age <= 0 || age >= 100){
//     age = +prompt("Enter your age");
// }
// console.log(age);

// const correctPin = 1234;
// let pin = +prompt('Enter a valid pin');
// let attempt = 1;
//
// while (attempt < 3 && pin !== correctPin) {
//         pin = +prompt('Enter a valid pin');
//         attempt ++;
// }
// if (pin === correctPin) {
//     console.log("Welcome!");
// }else{
//     console.log("Denied");
// }

// let attempt = 1, password = 1234;
// while (attempt <= 3) {
//     let userPassword = +prompt("Enter your password");
//     if (password === userPassword) {
//         console.log("Welcome!");
//         break;
//     }
//     console.log("Wrong password");
//     attempt++;
// }

//-----------------------------------------------------

// let attempt = 1, password = 1234;
// while (attempt <= 3) {
//     let userPassword = +prompt("Enter your password");
//     if (password === userPassword) {
//         console.log("Welcome!");
//         break;
//     }
//     console.log("Wrong password");
//     attempt++;
// }
// console.log(`Спроб лишилось: ${3 - attempt}`);
//-----------------------------------------------------------
// let menuChoice;
// do{
//     menuChoice = +prompt("Choose the action:\n" +
//     "1 - Profile\n" + "2 - Settings\n" + "0 - Escape");
//     if (menuChoice === 1){
//         alert("Open profile");
//     }else if(menuChoice === 2){
//         alert("Close settings");
//     }else if (menuChoice === 0){
//         alert("Close program");
//     }else{
//         alert("Unknown choice")
//     }
// }while(menuChoice !== 0);

//-----------------------------------------------------------

// let menuChoice;
// do{
//     menuChoice = +prompt("Choose the action:\n" +
//     "1 - Profile\n" + "2 - Settings\n" + "0 - Escape");
//     switch(menuChoice){
//         case 1:
//             alert("Open profile");
//             break;
//         case 2:
//             alert("Close settings");
//             break;
//         case 0:
//             alert("Close program");
//             break;
//         default:
//             alert("Unknown choice");
//     }
// }while(menuChoice !== 0);

//-----------------------------------------------------

// let count = 0, sum = 0;
// while (count > 5) {
//     let currentGrade = +prompt(`Введіть оцінку № ${count + 1}`);
//     if (currentGrade < 1 || currentGrade > 12 || Number.isNaN(currentGrade)) {
//         alert("Не коректна оцінка");
//         continue;
//     }
//     sum += currentGrade;
//     count++;
// }
// console.log(sum);
// console.log(sum / 5);


// let questionsNumber = 1;
// let score = 1;
// while (questionsNumber <= 5) {
//     let questions = "", answers = "";
//     switch (questionsNumber) {
//         case 1:
//             questions = "Як створювати змінну?";
//             answers = 'let';
//             break;
//         case 2:
//             questions = "Який оператор рівності строгої?";
//             answers = '===';
//             break;
//         case 3:
//             questions = "Як позначається оператор and?";
//             answers = '&&';
//             break;
//         case 4:
//             questions = "Як завершити цикл?";
//             answers = 'break';
//             break;
//         case 5:
//             questions = "Як записати інкремент?";
//             answers = '++';
//             break;
//     }
//     let answer = prompt(`Запитання № ${questionsNumber} із 5\n ${questions}`);
//     if (answer === ""){
//         console.log("Відповідь не може бути пустою");
//         continue;
//     }
//     if (answer === answers){
//         alert("Правильно");
//         score++;
//     }else{
//         alert("Неправильно");
//     } questionsNumber++;
// }
// if (score === 5){
//     alert("Відмінно");
// }else if(score >= 3){
//     alert("Норм");
// }else{
//     alert("Невдаха");
// }

//-----------------------------------
//PRACTICA TASK
//------------------------------------

let age = +prompt("Enter your age");
while (age < 12 || age > 90 || Number.isNaN(age)) {
    age = +prompt("Enter your age");
}
let attempt = 1;
let correctPin = 4321;
let pin;
while (attempt <= 3) {
    pin = +prompt("Enter your pin");
    if (pin === correctPin) {
        alert("Welcome!");
        break;
    } else {
        alert("Wrong pin");
        attempt++;
    }
}
if (pin === correctPin) {
    let menuChoice;
    do {
        menuChoice = +prompt("Choose the action:\n" +
            "1 - Особистий кабінет\n" + "2 - Повідомлення\n" +
            "3 - Налаштування\n" + "0 - Вихід");
        switch (menuChoice) {
            case 1:
                alert("Особистий кабінет");
                break;
            case 2:
                alert("Повідомлення");
                break;
            case 3:
                alert("Налаштування");
                break;
            case 0:
                alert("Вихід");
                break;
            default:
                alert("Такого пункту немає.");
        }
    } while (menuChoice !== 0);
}


