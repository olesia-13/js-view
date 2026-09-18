let price = 0;
let ticket_num = 0;
let free_num = 0;
let discount_num = 0;
let full_num = 0;
let total = 0;

let event = +prompt("Напишіть номер події \n" +
    "1 — кіно\n" + "2 — театр\n" + "3 — концерт");

while (event < 1 || event > 3 || Number.isNaN(event)) {
    event = +prompt("Напишіть номер події правильно");
}
switch (event) {
    case 1:
        price = 150;
        break;
    case 2:
        price = 220;
        break;
    case 3:
        price = 350;
        break;
}
let day = +prompt("Який день?\n" +
"1 - будній\n" + "2 - вихідний.")
while (day < 1 || day > 2 || Number.isNaN(day)) {
    day = +prompt("Введіть правильний номер дня");
}
if (day === 2) {
    price = price * 1.15;
}

let ticket_amount = +prompt("Скільки квитків від 1-6");
while (ticket_amount < 1 || ticket_amount > 6 || Number.isNaN(ticket_amount)) {
    ticket_amount = +prompt("Скільки квитків від 1-6");
}
for (let i = 1; i <= ticket_amount; i++) {
    let age = +prompt("Введіть вік");
    if (age === -1){
        break;
    }
    while (age < 0 || age > 100 || Number.isNaN(age)) {
        age = +prompt("Введіть вік");
    }
    ticket_num ++;
    let ticket_price = price;

    if (age <= 5) {
        free_num++;
        continue;
    } else if (age <= 12) {
        ticket_price = price * 0.5;
        discount_num++;
    } else if (age <= 17) {
        ticket_price = price * 0.8;
        discount_num++;
    } else if (age <= 59) {
        if (age >= 18 && age <= 25) {
            let student_ticket = confirm("Чи маєте студентський квиток?");
            if (student_ticket === true) {
                ticket_price = price * 0.9;
                discount_num++;
            } else {
                full_num++;
            }
        } else {
            full_num++;
        }
    } else {
        ticket_price = price * 0.75;
        discount_num++;
    }
    total = total + ticket_price;
}
if (total > 1000) {
    total = total * 0.95;
}
alert(`Кількість квитків: ${ticket_num}`);
alert(`Кількість безкоштовних квитків: ${free_num}`);
alert(`Кількість квитків зі знижкою: ${discount_num}`);
alert(`Кількість повних квитків: ${full_num}`);
alert(`Загальна сума: ${total} грн`);