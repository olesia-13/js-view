let amount = +prompt('Enter your number');
let grade;
let high = 0;
let low = 0;
let sum = 0;
let theBiggest = 0;
while(amount < 1 || isNaN(amount)) {
    amount = +prompt('Enter your number');
}
for (let i = 0; i < amount; i++) {
    grade = +prompt('Enter grade');
    sum += grade;
    if (grade > 7){
        high++;
    }else{
        low++;
    }
    if (grade > theBiggest){
        theBiggest = grade;
    }
}
alert(`Sum: ${sum}, average: (${sum/amount}), high: (${high}), low: (${low}), theBiggest: ${theBiggest}`);