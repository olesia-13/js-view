let tries = 3;
let pin = 2026;
let used = 0;
for (let i = 1; i <= tries; i++) {
    let askedPin = +prompt('Enter PIN');
    if (askedPin === pin) {
        alert("Доступ дозволено");
        break;
    }else{
        used++;
        alert(`Спроб залишилось ${tries - used}`);
    }
}

