let max = 7;
let hours = 0;
let priceForHour = 0;
let type;
let price;
let correct = 0;
let electro = 0;
let sum = 0;
let maxPrice = 0;
let amount = +prompt('Enter number of parking slots');
while(amount < 0 || amount > max || Number.isNaN(amount)) {
    amount = +prompt('Enter number of parking slots');
}
for(let i = 0; i < amount; i++) {
    hours += +prompt('Enter hours of this car');
    type = +prompt('Enter type of this car');
    if (hours === 0){
        break;
    }else if(hours < 0 || hours > 12){
        continue;
    }
    if (type === 1){
        priceForHour = 40;
        price = priceForHour * hours;
        if (hours > 5){
            price = price * 0.8;
        }
        if (price > maxPrice){
            maxPrice = price;
        }
        sum += price;
        correct++;
    }else if(type === 2){
        priceForHour = 30;
        price = priceForHour * hours;
        if (hours > 5){
            price = price * 0.8;
        }
        if (price > maxPrice){
            maxPrice = price;
        }
        correct++;
        electro++;
        sum += price;
    }else{
        alert("Wrong car");
        continue;
    }
}
alert(`Correct cars ${correct}, Electro cars ${electro}, Sum ${sum}, maxPrice ${maxPrice}`);
