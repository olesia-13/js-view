// let prices = [120, 23, 45, 60, 55];
// console.log(prices[1]);
// prices[1] = 50;
// console.log(prices.length);

// let sum = 0;
// for (let i = 0; i < prices.length; i++) {
//     console.log(prices[i]);
//     sum+=prices[i];
// }

// function getTotalPrices(prices) {
//     let sum = 0;
//     for(let i = 0; i < prices.length; i++) {
//         sum += prices[i];
//     }
//     return sum;
// }
// let prices = [120, 23, 45, 60, 55];
// let result = getTotalPrices(prices);
// console.log(result);
//-----------------------------------------

// function num(prices){
//     for(let i = 0; i < prices.length; i++) {
//         if (prices[i] > limit){
//             a+= 1;
//         }
//     }
//     return a;
// }
//
// let prices = [120, 23, 45, 60, 55];
// let limit = 50;
// let a = 0;
// let result = num(prices);
// console.log(result);

//-------------------------------------------
function num() {
    let amount = +prompt("Enter a number of numbers");
    let sp = [];
    let a = 0;

    for (let i = 0; i < amount; i++) {
        let number = +prompt("Enter a number");
        sp += number + ",";
    }

    for (let i = 0; i < sp.length; i++) {
        if (sp[i] % 2 === 0) {
            a += 1;
        }
    }

    return a;
}

let result = num();
console.log(result);