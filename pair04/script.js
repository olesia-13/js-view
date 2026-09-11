// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }


// for (let i = 10; i >= 5; i--) {
//     console.log(i)
// }


// for (let i = 10; i >= 1; i-=2) {
//     console.log(i)
// }

// sum of 1 - 29
// let sum = 0;
// for (let i = 0; i < 30; i++) {
//     sum += i;
// }
// console.log(sum);
//-------------------------------------------- #1

// let sum = 0;
// for (let i = 0; i <= 50; i+=2) {
//      sum += i;
// }
//  console.log(sum);
//--------------------------------------------

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         count++;
//     }
// }
// console.log(count);
//--------------------------------------------

// for (let i = 1; i <= 100; i++) {
//     if (i > 20 && i % 4 === 0 && i % 6 === 0) {
//         console.log(i);
//         break;
//     }
// }
//--------------------------------------------

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         continue; // - пропускає ітерацію і йде на наступну
//     }
//     console.log(i)
// }
//--------------------------------------------

// вводить кількість учнів,
// програма запитує оцінку кожного
// оцінка з 1 до 12
// сума оцінок
// середній бал
// сума кожного рівня оцінок
// найнижча

// let studentCount = +prompt('Enter your student count');
// if (studentCount > 0){
//     let sum = 0, highLevel = 0, others = 0;
//     for (let i = 1; i <= studentCount; i++) {
//         let grade = +prompt('Enter your student grade');
//         if (!grade >= 1 && grade <= 12){
//             alert("Error");
//             i--;
//             continue;
//         }
//         if (grade >= 7){
//             highLevel ++
//         }else{
//             others ++
//         }
//         sum += grade;
//     }
//     console.log(sum);
//     console.log(sum / studentCount);
//     console.log(highLevel);
//     console.log(others);
//
// }else{
//     alert("Error");
// }

//--------------------------------------------#2
// Homework

let studentCount = +prompt('Enter your student count');
if (studentCount > 0){
    let sum = 0, highLevel = 0, averageLevel = 0, lowLevel = 0;
    let max = 0, min = 100, first100 = 0;
    for (let i = 1; i <= studentCount; i++) {
        let grade = +prompt('Enter your student grade');
        if (!grade >= 1 && grade <= 100){
            alert("Error");
            i--;
            continue;
        }
        if (grade > max){
            max = grade;
        }
        if (grade < min){
            min = grade;
        }
        if (grade === 100 && first100 === 0){
            first100 = i;
        }
        if (grade >= 90){
            highLevel ++
        }
        else if (grade >= 60){
            averageLevel ++
        }
        else{
            lowLevel ++
        }
        sum += grade;
    }
    console.log(`Середнє: ${sum / studentCount}`);
    console.log(`Високий рівень: ${highLevel}`);
    console.log(`Середній рівень: ${averageLevel}`);
    console.log(`Низький рівень: ${lowLevel}`);
    console.log(`Найнижчий бал: ${min}`)
    console.log(`Найвищий бал: ${max}`)
    if (first100 !== 0){
        console.log(`Перші 100 балів у: ${first100}`);
    }else{
        console.log("Учасника зі 100 балами немає");
    }

}else{
    alert("Error");
}


