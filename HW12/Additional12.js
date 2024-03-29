// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу user створити кнопку, при click'у на яку в окремий блок виводяться всі пости поточного user.
// Кожному елементу post створити кнопку, при click'у на яку в окремий блок виводяться всі коментарі поточного поста
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        let user_div = document.createElement("div");
        user_div.style.display = 'flex';
        user_div.style.flexWrap = 'wrap';
        document.body.appendChild(user_div);
        users.forEach(user => {
            let borders = document.createElement('div');
            borders.style.margin = '.1%';
            borders.style.width = '47%';
            borders.style.border = 'cornflowerblue solid thick';
            borders.style.borderRadius = '2%';
            user_div.appendChild(borders);
            let rec = (borders,user) => {
                for (const keys in user) {
                    let div = document.createElement('div');
                    div.style.border = 'lightblue solid thin';
                    borders.appendChild(div);
                    if (typeof user[keys] !== 'object') {
                        div.innerHTML = `<b>${keys}</b>: <i>${user[keys]}</i>`;
                        if (keys === 'id') {
                            let button_User = document.createElement("button");
                            button_User.style.width = "50%";
                            button_User.style.borderRadius = "20%";
                            button_User.style.backgroundColor = "lightblue";
                            button_User.style.marginLeft = "10%";
                            button_User.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
                            button_User.innerText = "User";
                            div.appendChild(button_User);
                            button_User.onclick = () => {
                                button_User.disabled = true;
                                fetch("https://jsonplaceholder.typicode.com/posts/")
                                    .then(response => response.json())
                                    .then(posts => {
                                        posts.forEach(post => {
                                            let post_div = document.createElement("div");
                                            post_div.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
                                            borders.appendChild(post_div);
                                            if (post.userId === user.id) {
                                                for (const postKey in post) {
                                                    let postKey_div = document.createElement("div");
                                                    post_div.appendChild(postKey_div);
                                                    postKey_div.innerHTML = `${postKey} :<i> ${post[postKey]}</i>`;

                                                    if (postKey === "userId") {
                                                        let button_Post = document.createElement("button");
                                                        button_Post.style.width = "50%";
                                                        button_Post.style.borderRadius = "20%";
                                                        button_Post.style.backgroundColor = "lightblue";
                                                        button_Post.style.marginLeft = "10%";
                                                        button_Post.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
                                                        button_Post.innerText = "User";
                                                        postKey_div.appendChild(button_Post);
                                                        button_Post.onclick = () => {
                                                            button_Post.disabled = true;
                                                            fetch("https://jsonplaceholder.typicode.com/comments/")
                                                                .then(response => response.json())
                                                                .then(comments => {
                                                                    comments.forEach(comment => {
                                                                        let comment_div = document.createElement("div");
                                                                        post_div.append(comment_div);
                                                                        if (post.userId === comment.postId) {
                                                                            for (const commentKey in comment) {
                                                                                let commentKey_div = document.createElement("div");
                                                                                commentKey_div.style.border = "thin solid darkturquoise";
                                                                                commentKey_div.style.background = "linear-gradient(darkturquoise,1%,ghostwhite)";
                                                                                comment_div.appendChild(commentKey_div);
                                                                                commentKey_div.innerHTML = `${commentKey} :<i> ${comment[commentKey]}</i>`;
                                                                            }
                                                                        }
                                                                    });
                                                                });
                                                        }
                                                    }
                                                }
                                            }
                                        });
                                    });
                            };
                        }
                    } else {
                        rec(div,user[keys]);
                    }
                }
            }
            rec(borders, user);
        });
    });