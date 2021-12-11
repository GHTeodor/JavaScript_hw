// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомогою css, щоб отримати 5 елементів у рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередині div.post
// https://jsonplaceholder.typicode.com/posts
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        let postS_div = document.createElement("div");
        postS_div.style.display = "grid";
        postS_div.style.gridTemplateColumns = "repeat(5, 1fr)";
        document.body.appendChild(postS_div);
        posts.forEach(post => {
            let post_div = document.createElement("div");
            post_div.style.borderLeft = "solid medium tomato";
            post_div.style.borderBottom = "ridge thin tomato";
            post_div.style.borderRadius = "5px";
            post_div.style.marginBottom = "8px";
            for (const postKey in post) {
                let postKey_div = document.createElement("div");
                postKey_div.style.border = "dashed thin ghostwhite";
                postKey_div.innerHTML = "<b>" + postKey + "</b>: " + post[postKey];
                post_div.appendChild(postKey_div);
            }
            postS_div.appendChild(post_div);
        });
    });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередині div.comment
// https://jsonplaceholder.typicode.com/comments
fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(comments => {
        let commentS_div = document.createElement("div");
        commentS_div.style.display = "grid";
        commentS_div.style.gridTemplateColumns = "repeat(4, 1fr)";
        commentS_div.style.boxShadow = "10px 10px 10px";
        document.body.appendChild(commentS_div);
        comments.forEach(comment => {
            let comment_div = document.createElement("div");
            comment_div.style.boxShadow = "rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset";
            comment_div.style.borderRadius = "5px";
            comment_div.style.marginBottom = "8px";
            for (const commentKey in comment) {
                let commentKey_div = document.createElement("div");
                commentKey_div.style.borderBottom = "dashed thin ghostwhite";
                commentKey_div.innerHTML = "<b>" + commentKey + "</b>: " + comment[commentKey];
                comment_div.appendChild(commentKey_div);
            }
            commentS_div.appendChild(comment_div);
        });
    });