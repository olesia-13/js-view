let studentsName = document.querySelector("#studentsName");
let welcome = document.querySelector("#welcome");
studentsName.addEventListener("input", function(){
    let name = studentsName.value.trim();
    if (name === "") {
        welcome.textContent = "Вітаємо, гостю!";
    }else{
        welcome.textContent = `Вітаємо ${name}!`;
    }
});


let saveBtn = document.querySelector("#saveBtn");
let status = document.querySelector("#status");
saveBtn.addEventListener("click", function(){
    status.textContent = "Ім'я успішно підтверджено!";
    status.classList.add("success");
    saveBtn.textContent = "Підтверджено";
});


let theme = document.querySelector("#theme");
let card = document.querySelector("#card");
theme.addEventListener("change", function(){
    card.classList.remove("dark");
    card.classList.remove("pink");
    if (theme.value === "dark") {
        card.classList.add("dark");
    }else if (theme.value === "pink") {
        card.classList.add("pink");
    }
});


let detailBtn = document.querySelector("#detailBtn");
let details = document.querySelector("#details");
detailBtn.addEventListener("click", function(){
    details.classList.toggle("hidden");
    if (details.classList.contains("hidden")) {
        detailBtn.textContent = "Показати інформацію";
    }else{
        detailBtn.textContent = "Приховати інформацію";
    }
});
