let classes = [{
    id:1,
    name: "Потужні квіточки",
    category: "Мистецтво",
    price: 2000,
    members: 20,
    active: true,
},{
    id:2,
    name: "Активні тюльпанчики",
    category: "Спорт",
    price: 1000,
    members: 25,
    active: false,
},{
    id:3,
    name: "Python Розробка",
    category: "IT",
    price: 3000,
    members: 15,
    active: false,
},{
    id:4,
    name: "Haikyuu!",
    category: "Спорт",
    price: 500,
    members: 28,
    active: true,
},{
    id:5,
    name: "Java для ПОТУЖНИХ ромашок",
    category: "IT",
    price: 4000,
    members: 8,
    active: true,
}];

let choice;
do{
    choice = +prompt(
        `КАТАЛОГ ГУРТКІВ
        1 - Показати всі гуртки
        2 - Знайти гурток за ID
        3 - Записати учасника
        4 - Змінити статус набору
        5 - Додати новий гурток
        6 - Показати статистику
        0 - Вихід`
    );
    if (choice === null || choice === 0) {
        break;
    }
    switch (choice) {
        case 1:
            if(classes.length === 0){
                alert("Каталог порожній");
            }else{
                let result = "";
                classes.forEach(clas => {
                    result += `ID: ${clas.id}
                    Назва: ${clas.name}
                    Напрям: ${clas.category}
                    Ціна: ${clas.price} грн
                    Кількість учасників: ${clas.members}
                    Статус набору: ${clas.active}`;
                });
                alert(result);
            }
            break;
        case 2:
            let classId = +prompt("Введіть ID гуртка:");
            let foundClass = null;
            for(let clas of classes){
                if(clas.id === classId){
                    foundClass = clas;
                    break;
                }
            }
            if(foundClass !== null){
                alert(`ID: ${foundClass.id}
                Назва: ${foundClass.name}
                Напрям: ${foundClass.category}
                Ціна: ${foundClass.price} грн
                Кількість учасників: ${foundClass.members}
                Статус набору: ${foundClass.active}`);
            }else{
                alert("Гуртка такого немає");
            }
            break;
        case 3:
            let nextId = +prompt("Введіть ID гуртка для запису:");
            let nextClass = null;
            for(let clas of classes){
                if(clas.id === nextId){
                    nextClass = clas;
                    break;
                }
            }
            if(nextClass !== null){
                if(nextClass.active === true){
                    if(confirm(`Підтвердити ${nextClass.name}`)){
                        nextClass.members++;
                        alert(`Оновлено: ${nextClass.members}`);
                    }
                }else{
                    alert("Набір закрито");
                }
            }else{
                alert("Гурток не знайдено");
            }break;

        case 4:
            let changeStatus = +prompt("Введіть ID для зміни статусу:");
            let statusClass = null;
            for(let clas of classes){
                if(clas.id === changeStatus){
                    statusClass = clas;
                    break;
                }
            }
            if(statusClass !== null){
                if(confirm(`Змінити статус ${statusClass.name}`)){
                    statusClass.active = !statusClass.active;
                    alert(`Успішно! ${statusClass.active}`);
                }
            }else{
                alert("Гурток не знайдено");
            }break;

        case 5:
            let newName = prompt("Введіть назву гуртка:");
            if(!newName || newName.trim() === ""){
                alert("Error");
                break;
            }
            let newCategory = prompt("Введіть напрям(IT, спорт, мистецтво):");
            if(!newCategory || newCategory.trim() === ""){
                alert("Error");
                break;
            }
            let newPrice = +prompt("Введіть нові ціну:");
            if(isNaN(newPrice) || newPrice < 0){
                alert("Error");
                break;
            }
            let newMembers = +prompt("Введіть нових учасників:");
            if(isNaN(newMembers) || newMembers < 0){
                alert("Error");
                break;
            }
            let newId = 1;
            for(let clas of classes){
                if(clas.id >= newId){
                    newId = clas.id + 1;
                }
            }
            classes.push({
                id: newId,
                name: newName,
                category: newCategory,
                price: newPrice,
                members: newMembers,
                active: true
            });

            alert("Успішно!");
            break;
        case 6:
            if(classes.length === 0){
                alert("Каталог порожній");
            }else{
                let totalClasses = classes.length;
                let activeCount = 0;
                let totalMembers = 0;
                let totalPrice = 0;

                for(let clas of classes){
                    if(clas.active === true){
                        activeCount++;
                    }
                    totalMembers += clas.members;
                    totalPrice += clas.price;
                }
                let avgPrice = totalPrice / totalClasses;
                alert(`Статистика:
                Кількість: ${totalClasses}
                Відкритих гуртків: ${activeCount}
                Кількість учасників: ${totalMembers}
                Середня ціна: ${avgPrice} грн`);
            }
            break;
        default:
            alert("Error");
            break;
    }
} while (choice !== 0);