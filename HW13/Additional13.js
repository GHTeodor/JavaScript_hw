// - Імітуємо наповнення інтернет-магазину товарами :
//     Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в localstorage. При збереженні товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці list.html побудувати кнопку яка видаляє всі товари з кошика та localstorage.
//     До кожного товару додати кнопку, при click на яку з лс видаляється конкретний обраний товар

let products = [
    {name: `Монітор 27" Samsung Odyssey G5 LC27G54T Black`, quantity: 2, price: 8499 + "₴",
        img: "https://content2.rozetka.com.ua/goods/images/original/106663814.jpg",
        img1: "https://content.rozetka.com.ua/goods/images/original/106663977.jpg"},
    {name: `Монітор 27" Dell S2721DGFA`, quantity: 4, price: 13799 + "₴",
        img: "https://content.rozetka.com.ua/goods/images/original/73891904.jpg",
        img1: "https://content.rozetka.com.ua/goods/images/original/73891898.jpg"},
    {name: `Монітор 27" LG 27MP60G-B`, quantity: 3, price: 5299 + "₴",
        img: "https://content2.rozetka.com.ua/goods/images/original/215701779.jpg",
        img1: "https://content2.rozetka.com.ua/goods/images/original/215701780.jpg"},
    {name: `Монітор 31.5" Samsung Odyssey G7 C32G75TQSI Black`, quantity: 5, price: 16999 + "₴",
        img: "https://content2.rozetka.com.ua/goods/images/original/106670112.jpg",
        img1: "https://content2.rozetka.com.ua/goods/images/original/106670132.jpg"}
];

let a = document.createElement("a");
a.innerText = "List";
a.href = "list.html";
document.body.appendChild(a);

let form = document.createElement("form");
form.setAttribute('action', '/someaction');
document.body.appendChild(form);

let cards = document.createElement("div");
form.appendChild(cards);
cards.style.display = "flex";
cards.style.flexWrap = "wrap";

products.forEach(product => {
    let card = document.createElement("div");
    cards.appendChild(card);
    card.style.border = "green solid thin";
    card.style.width = "25%";
    card.style.boxSizing = "border-box";
    card.style.textAlign = "end";
    card.style.padding = "1%";
    card.style.display = "flex";
    card.style.justifyContent = "space-between";
    card.style.flexDirection = "column";

    card.onmousemove = () => {
        card.style.transition = ".4s";
        card.style.transform = "scale(0.9)";
        image.src = product.img1;
    };
    card.onmouseout = () => {
        card.style.transition = ".4s";
        card.style.transform = "scale(1)";
        image.src = product.img;
    };

    let h2 = document.createElement("h2");
    let pQuantity = document.createElement("p");
    let pPrice = document.createElement("p");
    let image = document.createElement("img");
    let buy = document.createElement("button");

    form.onsubmit = function (e) {
        e.preventDefault();
    }
        buy.onclick = () => {
        pQuantity.innerText = "Залишилось " + --product.quantity;
            if (product.quantity === 0) {
                buy.disabled = true;
                buy.style.backgroundColor = "silver";
            }
            let array_Local_Storage = JSON.parse(localStorage.getItem("Монітор")) || [];
            array_Local_Storage.push(product);
            localStorage.setItem("Монітор", JSON.stringify(array_Local_Storage));
        };

    card.append(image, h2, pQuantity, pPrice, buy);
    h2.innerText = product.name;
    pQuantity.innerText = "Залишилось " + product.quantity;
    pPrice.innerText = product.price;
    image.src = product.img;
    buy.innerHTML = "<i class=\"fas fa-shopping-cart\"></i> "+" до кошика";

    buy.onmouseenter = () => {
        buy.style.backgroundColor = "orangered";
        buy.style.transition = "400ms";
    };
    buy.onmouseout = () => {
        buy.style.backgroundColor = "orange";
        buy.style.transition = "400ms";
    };

    image.style.width = "100%";
    image.style.height = "50%";
    pQuantity.style.color = "silver";
    pPrice.style.color = "orangered";
    pPrice.style.fontWeight = "bold";
    h2.style.textAlign = "start";
    buy.style.backgroundColor = "orange";
    buy.style.color = "ghostwhite";
    buy.style.borderRadius = "11px";
    buy.style.border = "none";
    buy.style.padding = "2%";
    buy.style.paddingLeft = "5%";
    buy.style.paddingRight = "5%";
});