// В index.html
// 1 Отримати масив об'єктів user з endpoint`у https://jsonplaceholder.typicode.com/users
// 2 Вивести id, name усіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при натисканні на яку відбувається перехід на сторінку user-details.html, яка має детальну інформацію про об'єкт, на який клацнули

// Стилізація проекту -
// index.html - всs блоки p user - по 2 в ряд. кнопки/посилання знаходяться під інформацією про user.
// user-details.html - блок з інформацією про user зверху сторінки. Кнопка нижче на 90% ширини сторінки по центру.
// блоки з короткою інформацією про post - в ряд по 5 об'єктів.
// post-details.html - блок з інформацією про пост зверху. Коментарі – по 4 в ряд.
// Всі без винятку елементи, що характеризують user, post,comment візуалізувати, так, щоб було видно їх блоки (дати заднє тло + margin. Іншими словами - вкрай чітка сітка)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        document.body.style.margin = "0";
        document.body.style.background = "linear-gradient(0.25turn, lightblue, #ebf8e1, #fbbf77)";
        let wrapper = document.createElement("div");
        wrapper.style.display = "grid";
        wrapper.style.gridTemplateColumns = "repeat(2, 1fr)";
        // wrapper.style.background = "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)";

        for (const user of users) {
            let div = document.createElement("div");
            let p = document.createElement("p");
            let button = document.createElement("button");
            button.onclick = () => {
                localStorage.setItem("ID", user.id);
                location.href = 'user-details.html';
            };
            div.onmousemove = () => {
                div.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
                button.style.color = "tomato";
                button.style.transform = "scale(1.25)";
                button.style.marginLeft = "5%";
                button.style.transition = ".4s";
            };
            div.onmouseout = () => {
                div.style.boxShadow = "none";
                button.style.color = "blue";
                button.style.transform = "scale(1)";
                button.style.marginLeft = "1%";
                button.style.transition = ".4s";
            };
            div.style.padding = "1%";
            button.style.display = "block";
            button.style.borderRadius = "6px";
            p.innerText = user.id + " - " + user.name;
            button.innerHTML = `<i>${user.username}</i> - <b>Info</b>`;
            div.append(p, button);
            wrapper.appendChild(div);
        }
        document.body.appendChild(wrapper);
    });