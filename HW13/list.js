let a = document.createElement("a");
a.innerText = "Home";
a.href = "Additional13.html";
let div = document.createElement("div");
document.body.append(a, div);

let buttonClearAll = document.createElement("button");
buttonClearAll.style.margin = "5px"
buttonClearAll.innerText = "Clear all";
div.appendChild(buttonClearAll);
buttonClearAll.onclick = () => {
    localStorage.removeItem("Монітор");
    location.reload();
};

let cards = document.createElement("div");
cards.style.display = "flex";
cards.style.flexWrap = "wrap";
document.body.appendChild(cards);

let products = JSON.parse(localStorage.getItem("Монітор"));


for (const product of products) {

    const card = document.createElement('div');
    card.style.maxWidth = "25%";
    card.style.height = "90%";
    card.style.boxSizing = "border-box";
    card.style.borderLeft = "solid medium tomato";
    card.style.paddingLeft = "3px";
    card.style.marginBottom = "3px";

    let h2 = document.createElement("h2");
    let pQuantity = document.createElement("p");
    let pPrice = document.createElement("p");
    let image = document.createElement("img");
    let deleteButton = document.createElement("button");



    h2.innerText = product.name;
    pQuantity.innerText = "Кількість до купівлі " + (product.quantity+1);
    pPrice.innerText = product.price;
    image.src = product.img;
    deleteButton.innerText = "Delete";

    deleteButton.onclick = function () {
        console.log(products);
        console.log(product);
        for (let i = 0; i < products.length; i++) {
            if (products[i] === product) {
                products.splice(i, 1);
            }
        }
        location.reload();
        localStorage.setItem("Монітор", JSON.stringify(products));
    };

    image.style.width = "100%";
    image.style.height = "50%";
    pQuantity.style.color = "silver";
    pPrice.style.color = "orangered";
    pPrice.style.fontWeight = "bold";
    h2.style.textAlign = "start";
    deleteButton.style.backgroundColor = "orange";
    deleteButton.style.color = "ghostwhite";
    deleteButton.style.borderRadius = "11px";
    deleteButton.style.padding = "2%";
    deleteButton.style.paddingLeft = "5%";
    deleteButton.style.paddingRight = "5%";

    card.append(image, h2, pQuantity, pPrice, deleteButton);
    cards.appendChild(card);
}