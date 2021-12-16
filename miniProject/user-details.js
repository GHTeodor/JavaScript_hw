// На сторінці user-details.html:
// 4 Вивести всю, без винятку, інформацію про об'єкт user на кнопку/посилання якого був здійснений click раніше.
// 5 Додати кнопку "post of current user", при натисканні на яку, з'являються title всіх постів поточного користувача
// (Для отримання постів використовуйте endpoint https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при натисканні на яку відбувається перехід на сторінку post-details.html, яка має детальну інформацію про поточний пост.

let a_Home = document.createElement("a");
a_Home.innerText = "Home";
a_Home.style.borderLeft = "medium solid tomato";
a_Home.href = "mini-project.html";

let buttonDiv = document.createElement('div');
buttonDiv.style.display = "flex";
buttonDiv.style.justifyContent = "center";
let button = document.createElement("button");
button.style.width = "90%";
button.style.boxShadow = "rgba(249, 142, 29, 0.3) 0px 0px 0px 3px";
button.innerHTML = "<b>Post of current user</b>";
buttonDiv.appendChild(button);

let wrapper = document.createElement("div");

document.body.append(a_Home, wrapper, buttonDiv);


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            if (user.id === +localStorage.getItem("ID")) {
                let recurs = (wrapper, user) => {
                    let userUl = document.createElement("ul");
                    userUl.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset";
                    wrapper.appendChild(userUl);
                    for (const userKey in user) {
                        let li = document.createElement('li');
                        userUl.appendChild(li);
                        if (typeof user[userKey] !== 'object') {
                            li.innerHTML = `${userKey}: <i>${user[userKey]}</i>`;
                        } else {
                            recurs(userUl, user[userKey]);
                        }
                    }
                };
                recurs(wrapper, user);
            }
        });
    });

fetch('https://jsonplaceholder.typicode.com/users/' + localStorage.getItem("ID") + '/posts')
    .then(response => response.json())
    .then(posts => {
        let postOfCurrentUser = document.createElement("div");
        postOfCurrentUser.style.display = 'grid';
        postOfCurrentUser.style.gridTemplateColumns = 'repeat(5, 1fr)';
        document.body.appendChild(postOfCurrentUser);
        postOfCurrentUser.classList.add('postOf');
        posts.forEach(post => {
            let grid = document.createElement('div');
            postOfCurrentUser.appendChild(grid);

            let button_PostDetails = document.createElement("button");
            button_PostDetails.innerText = "Post-details";
            button_PostDetails.style.borderLeft = "medium solid tomato";
            button_PostDetails.style.width = "90%";
            button_PostDetails.style.marginTop = "11%";
            button_PostDetails.onclick = () => {
                location.href = "post-details.html";
                localStorage.setItem("POST_ID", post.id);
            };
            grid.appendChild(button_PostDetails);

            for (const postKey in post) {
                let p = document.createElement("p");
                p.style.boxShadow = 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
                grid.appendChild(p);
                p.innerHTML = `<b>${postKey}:</b> <i>${post[postKey]}</i>`;
                button.onclick = () => {
                    postOfCurrentUser.classList.toggle('hide');
                };
            }
        });
    });