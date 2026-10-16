// function isHighScore(score){
//     return score >= 10;
// }
// let scores = [7, 12, 8, 9, 10, 5];
// let highScore = scores.filter(isHighScore);
// console.log(highScore);
// функція яку передаємо іншій функції як аргумент це callback


// let scores = [7, 12, 8, 9, 10, 5];
// let highScore = scores.filter(score => score >= 10);
// console.log(highScore);



// let courses = [
//     {id: 1, title: "HTML", price: 700, description: "HTML description", active: true},
//     {id: 2, title: "CSS", price: 300, description: "CSS description", active: true},
//     {id: 3, title: "Javascript", price: 400, description: "Javascript description", active: false},
//     {id: 4, title: "Vue", price: 800, description: "Vue description", active: true},
// ];
// let found = courses.find(course => course.id === 3);
// console.log(found);
// if (found !== undefined) {
//     console.log(found.description);
// }else{
//     console.log("Error");
// }
// let activeCourse = courses.filter(course => course.active === true);
// let lowCost = courses.filter(course => course.price <= 400);
// console.log(lowCost);
// console.log(activeCourse);
//
// let title = courses.map(course => course.title);
// let sellPrice = courses.map(course => course.price * 0.9);
// console.log(`Назви курсів ${title}`);
// console.log(`Оновлена вартість курсів ${sellPrice}`);
//
// let search = courses.filter(course => course.title.includes("Script"));
// console.log(search);

//-------------------------------------------------------

// масив книг: id, title, author, year, available.
// Знайти книжку за id, всі наявні вивести, окремо назви, запис про джаваскріпт
// function isAvailable(book) {
//     return book.available === true;
// }
//
// let books = [
//     {id: 1, title: "HTML для початківців", author: "Олена Класна", year: 2024, available: true},
//     {id: 2, title: "JavaScript для початківців", author: "Олена Прекрасна", year: 2022, available: false},
//     {id: 3, title: "CSS для початківців", author: "Олена Жінка", year: 2022, available: true},
//     {id: 4, title: "HTML + JavaScript + CSS для початківців", author: "Олена Мужня", year: 2022, available: false},
// ]
// let userIdBook = +prompt("ENter user id");
// let searchBookId = books.find(book => book.id === userIdBook);
// let availableBooks = books.filter(isAvailable);
// let titles = books.map(book => book.title).join(', ');
// let js = books.filter(book => book.title.includes("JavaScript"));
// console.log(searchBookId);
// console.log(availableBooks);
// console.log(titles);
// console.log(js);


//----------------------------------------------------------------------------
function CourseById(id) {
    return courses.find(course => course.id === id);
}
function Category(category) {
    return courses.filter(course => course.category === category);
}
function MaxPrice(maxPrice) {
    return courses.filter(course => course.price <= maxPrice);
}
function TitlePart(part) {
    return courses.filter(course => course.title.toLowerCase().includes(part.toLowerCase()));
}
function Titles() {
    return courses.map(course => course.title);
}
function Discount() {
    return courses.map(course => ({ title: course.title, price: course.price * 0.85 }));
}
function ToHigherCost() {
    let copy = courses.map(course => course);
    return copy.sort((a, b) => a.price - b.price);
}
function Rating() {
    let copy = courses.map(course => course);
    return copy.sort((a, b) => b.rating - a.rating);
}
function Alfavit() {
    let copy = courses.map(course => course);
    return copy.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
}
function Counting() {
    let availableCourses = courses.filter(course => course.available === true);
    let total = 0;
    for (let i = 0; i < availableCourses.length; i++) {
        total += availableCourses[i].price;
    }
    let avg = 0;
    if (availableCourses.length > 0) {
        avg = total / availableCourses.length;
    }
    return {total: total, avg: avg};
}
let courses = [
    {id: 1, title: "HTML", category: "Frontend", price: 700, duration: 20, rating: 1, available: true},
    {id: 2, title: "CSS", category: "Frontend", price: 300, duration: 15, rating: 4, available: true},
    {id: 3, title: "JavaScript", category: "Frontend", price: 900, duration: 40, rating: 3, available: true},
    {id: 4, title: "Vue", category: "Frontend", price: 1200, duration: 35, rating: 5, available: false},
    {id: 5, title: "Python", category: "Backend", price: 1000, duration: 50, rating: 4, available: true},
    {id: 6, title: "Node.js", category: "Backend", price: 1100, duration: 45, rating: 4.5, available: false},
    {id: 7, title: "SQL", category: "Databases", price: 500, duration: 25, rating: 2, available: true},
    {id: 8, title: "Figma", category: "Design", price: 400, duration: 12, rating: 3, available: true},
];
let choice;
do {
    choice = +prompt(`Виберіть:
    1 - Пошук за id
    2 - За категорією
    3 - За ціною
    4 - За назвою
    5 - Тільки назви
    6 - Ціна зі знижкою 15%
    7 - Сортувати за ціною
    8 - Сортувати за рейтингом
    9 - Сортувати за назвою
    10 - Загальна та середня вартість`);

    switch (choice) {
        case 1:
            let answ1 = CourseById(+prompt("ID:"));
            console.log(answ1);
            if (answ1 === undefined) {
                alert("Error");
            } else {
                alert(answ1.title);
            }
            break;
        case 2:
            let answ2 = Category(prompt("Категорія:"));
            console.log(answ2);
            if (answ2.length === 0) {
                alert("Error");
            } else {
                alert(answ2.map(course => course.title).join(", "));
            }
            break;
        case 3:
            let answ3 = MaxPrice(+prompt("Маскимум:"));
            console.log(answ3);
            if (answ3.length === 0) {
                alert("Error");
            } else {
                alert(answ3.map(course => course.title).join(", "));
            }
            break;
        case 4:
            let answ4 = TitlePart(prompt("Введіть частину назви:"));
            console.log(answ4);
            if (answ4.length === 0) {
                alert("Error");
            } else {
                alert(answ4.map(course => course.title).join(", "));
            }
            break;
        case 5:
            let answ5 = Titles();
            console.log(answ5);
            alert(answ5.join(", "));
            break;
        case 6:
            let answ6 = Discount();
            console.log(answ6);
            alert(answ6.map(course => `${course.title}: ${course.price}`).join(", "));
            break;
        case 7:
            let answ7 = ToHigherCost();
            console.log(answ7);
            alert(answ7.map(course => `${course.title}: ${course.price}`).join(", "));
            break;
        case 8:
            let answ8 = Rating();
            console.log(answ8);
            alert(answ8.map(course => `${course.title}: ${course.rating}`).join(", "));
            break;
        case 9:
            let answ9 = Alfavit();
            console.log(answ9);
            alert(answ9.map(course => course.title).join(", "));
            break;
        case 10:
            let answ10 = Counting();
            console.log(answ10);
            alert(`Всього: ${answ10.total}, Середнє: ${answ10.avg}`);
            break;
        default:
            alert("Error");
    }
} while (confirm("Продовжити?"));