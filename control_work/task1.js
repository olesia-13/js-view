let age = +prompt("What is your age?");
day = +prompt("What day?");
let price;
if (day === 1){
    price = 200;
}else if (day === 2){
    price = 250;
}
while (age < 0 || age > 100 || Number.isNaN(age)){
    age = +prompt("What is your age?");
}
if (age < 8){
    price = 0
}else if(age >= 8 && age <= 17){
    price = price * 0.5;
}else if (age >= 60){
    price = price * 0.6;
}
alert(price);