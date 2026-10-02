// function name(аргументи) {
//     код
// }

// function showMessage() {
//     alert("Hello World!");
// }
//
// showMessage();

// function showInfo() {
//     console.log("В гостях у Марійки");
//     console.log("Магазин працює з 8:00 до 23:00");
// }
// function showProducts (name, price, count) {
//     console.log(`Марійка продає: ${name}`);
//     console.log(`Ціна: ${price * count}грн`);
// }
// showInfo();
// showProducts("Пральний порошок", 800, 5);


// function calculateTotal(price, count) {
//     return price * count;
// }
// let total = calculateTotal(800, 3);
// console.log(total);

// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     }else{
//         return 0;
//     }
// }
// let discount1 = discount(1000);
// let discount2 = discount(6000);
// console.log(discount1);
// console.log(discount2);

// function getProductTotal(price, count) {
//     return price * count;
// }
// function getDiscount(total){
//     if (total >= 10000){
//         return 15;
//     }else if(total >= 5000){
//         return 10;
//     }else if(total >= 2000){
//         return 5;
//     }else{
//         return 0;
//     }
// }
// function getDiscountValues(total, percent){
//     return total * percent / 100;
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
//
// let productName = prompt("Enter your product name");
// let productPrice = +prompt("Enter your product price");
// let productCount = +prompt("Enter your product count");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValues(productTotal, productDiscountPercent);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
// console.log(`Товар ${productName}`);
// console.log(`Ціна ${productPrice}грн`);
// console.log(`Кількість ${productCount}шт`);
// console.log(`Сума ${productTotal}грн`);
// console.log(`Знижка ${productDiscountPercent}%`);
// console.log(`Сума знижки ${productDiscountValue}грн`);
// console.log(`До сплати ${productFinalPrice}грн`);

//------------------------------------------------------------------

function calculateTickets(price, count) {
    return price * count;
}
function getTicketDiscount(total) {
    if (total > 1500){
        return 15;
    }else if (total > 1000){
        return 10;
    }else if (total > 500){
        return 5;
    }else{
        return 0;
    }
}
function calculateTicketDiscount(total, percent){
    return total * percent / 100;
}
function calculateTicketFinalPrice(total, discount){
    return total - discount;
}
let ticketPrice = +prompt("Enter your ticket price");
let ticketCount = +prompt("Enter your ticket count");

let ticketTotal = calculateTickets(ticketPrice, ticketCount);
let ticketDiscount = getTicketDiscount(ticketTotal);
let ticketDiscountSum = calculateTicketDiscount(ticketTotal, ticketDiscount);
let ticketFinal = calculateTicketFinalPrice(ticketTotal, ticketDiscountSum);

console.log(`Ціна ${ticketPrice}грн`);
console.log(`Кількість ${ticketCount}шт`);
console.log(`Сума ${ticketTotal}грн`);
console.log(`Знижка ${ticketDiscount}%`);
console.log(`Сума знижки ${ticketDiscountSum}грн`);
console.log(`До сплати ${ticketFinal}грн`);