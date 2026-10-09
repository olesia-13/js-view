// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
//
// names.push("Mariia"); // додає один або більше елементів в кінець списку
// names.pop(); // видаляє останній
// names.unshift("Pavlo"); // додати на початок
// names.shift(); // видаляє перший
// splice (2) - видалити якийсь елемент
// let names2 = names.slice(1, 3);
//
// console.log(names);
// console.log(names2);


// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// let deleted = names.splice(2, 1);
// console.log(deleted);
//
// names.splice(1, 0, "Seva");
// names.splice(0, 1, "Tetiana", "Nadiia");
// console.log(names);


//trim - видаляє пробіли
// function register(name){
//     if (name.trim() === ""){
//         alert("Please enter a valid name");
//         return;
//     }
//     let exists = false;
//     for(let i = 0; i < name.length; i++){
//         if (event[i] === name){
//             exists = true;
//         }
//     }
//     if (exists){
//         alert("Учасник уже зареєстрований" + name);
//         return;
//     }
//     event.push(name);
//     alert(`Зареєстровано учасника: ${name}`);
// }
// function remove(name){
//     let index = -1;
//     for (let i = 0; i < event.length; i++){
//         if(event[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if(index === -1){
//         alert("Такого учасника немає");
//     }
//     else{
//         event.splice(index, 1);
//         alert("Учасника видалено");
//     }
// }
// function count(){
//     alert(`Всього учасників: ${event.length}`);
// }
//
// let event = ["Ann", "Oleksandra", "Olesia", "Ivan"];
//
// register("Slavik");
// register("Ann");
// register("    ");
// remove("Slavik");
// count()

// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// for (let name of names) {
//     console.log(name);
// }
// names.forEach(function(name, index){
//     console.log(name);
// })

//--------------------------------------------------
// let names = ["Марія", "Олександра", "Влад", "Іван", "Павло"];
//
// names.push("Влада");
// names.unshift("Всеволод");
// names.pop();
// names[2] = "Єгор";
//
// for (let i = 0; i < names.length; i++) {
//     console.log(`${i + 1}. ${names[i]}`);
// }
// for (let name of names) {
//     console.log(name);
// }
// names.forEach(function(name) {
//     console.log(`${name}: ${name.length} букв`);
// });

//--------------------------------------------------

let prices = [120, 250, 180, 300, 150, 400];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}
console.log(`Загальний виторг: ${sum} грн`);

let count = 0;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= 200) {
        count++;
    }
}
console.log(`Квитків від 200 грн: ${count}`);
console.log(`Середня ціна: ${sum / prices.length} грн`);


let sum2 = 0;
for (let price of prices) {
    sum2 += price;
}
console.log(`Загальний виторг: ${sum} грн`);

let count2 = 0;
prices.forEach(function(price) {
    if (price >= 200) {
        count2++;
    }
});
console.log(`Квитків від 200 грн: ${count}`);

