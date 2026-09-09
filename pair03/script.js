// let age = prompt("Enter your age");
// let access = confirm("Are you registered?");
// if(age >= 18 && access === true){
//     alert("Welcome!");
// }else{
//     alert("Access denied")
// }

//---------------------------------------------

// let role = prompt("What is the role?");
// if (role === "admin" || role === "teacher") {
//     alert("Welcome!");
// }else{
//     alert("Denied")
// }

//---------------------------------------------

// let login = confirm("Are you registered?");
// let age = Number(prompt("What is your age?"));
// if(login === true){
//     if(age >= 18){
//         alert("Welcome!");
//     }else{
//         alert("Denied");
//     }
// }else{
//     alert("Denied!");
// }

//---------------------------------------------

// let age = Number(prompt("How old are you?"));
// if (age < 6) {
//     alert("Child");
// }else if (age >= 6 && age <= 13) {
//     alert("Pupil");
// }else if (age >= 14 && age <= 18) {
//     alert("Teen");
// }else{
//     alert("Grown up");
// }

// if (age >= 18) {
//     alert("Grown up");
// }else if (age >= 14) {
//     alert("Teen");
// }else if (age >= 6) {
//     alert("Pupil");
// }else{
//     alert("Child");
// }

//---------------------------------------------

// let age = Number(prompt("Enter your age"));
// if (age >= 18){
//     alert("Welcome!");
// }else if (age >= 16){
//     let acccess = confirm("Do you have permission?");
//     if (acccess){
//         alert("Welcome!");
//     }else{
//         alert("Denied");
//     }
// }else{
//     alert("Denied!")
// }

//---------------------------------------------

// sum = 1000+ - registered - promocode or vip
const sale1 = 0.9;
let name = prompt("What is the name?");
let price = Number(prompt("What is the price?"));
let amount = Number(prompt("What is the amount?"));
let registered = confirm("Are you registered?");
let vip = confirm("Are you vip?");
let promocode = prompt("What is the promocode?");
const promo = "sale";
if (price*amount >= 1000 && registered === true && (promocode === promo || vip === true)) {
    alert(`Price with sale:${price*amount*sale1}`);
}else{
    (`No sale:${price*amount}`);
}



