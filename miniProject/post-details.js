// На сторінці post-details.html:
// 7 Вивести всю, без винятку інформацію про об'єкт post на кнопку/посилання якого був здійснений click раніше.
// 8 Під інформацією про пост, вивести всі коментарі поточного поста (endpoint для отримання інформації - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let a_Home = document.createElement("a");
a_Home.innerText = "Home";
a_Home.style.borderLeft = "medium solid tomato";
a_Home.href = "mini-project.html";
let a_UserDetails = document.createElement("a");
a_UserDetails.style.borderLeft = "medium solid tomato";
a_UserDetails.innerText = "User-details";
a_UserDetails.href = "user-details.html";
document.body.append(a_Home, a_UserDetails);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let div = document.createElement('div');
        div.style.boxShadow = "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px";
        document.body.appendChild(div);
        posts.forEach(post => {
            if (post.id === +localStorage.getItem("POST_ID")) {
                let ul = document.createElement('ul');
                ul.style.listStyleType = `'~ '`;
                div.appendChild(ul);
                for (const postElement in post) {
                    let li = document.createElement('li');
                    ul.appendChild(li);
                    li.innerHTML = `<b>${postElement}:</b> <i> ${post[postElement]}</i>`;
                }
            }
        });
    });

fetch('https://jsonplaceholder.typicode.com/posts/' + localStorage.getItem("POST_ID") + '/comments')
    .then(response => response.json())
    .then(comments => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.style.display = "grid";
        div.style.gridTemplateColumns = "repeat(4, 1fr)";
        comments.forEach(comment => {
            let divComment = document.createElement('div');
            divComment.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
            div.appendChild(divComment);
            for (const commentKey in comment) {
                let key = document.createElement('div');
                divComment.appendChild(key);
                key.innerHTML = `<b>${commentKey}</b>: <i>${comment[commentKey]}</i>`;
            }
        });
    });