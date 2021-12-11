// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при click'у на яку виводяться в окремий блок всі коментарі поточного поста
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
            post_div.style.borderTop = "ridge thin tomato";
            post_div.style.borderRadius = "5px";
            post_div.style.marginBottom = "8px";
            for (const postKey in post) {
                let postKey_div = document.createElement("div");
                postKey_div.style.border = "dashed thin ghostwhite";
                postKey_div.innerHTML = "<b>" + postKey + "</b>: " + post[postKey];
                post_div.appendChild(postKey_div);
            }
            let commentary = document.createElement("button");
            commentary.innerText = "Comments";
            commentary.style.width = "100%";
            post_div.style.display= "flex";
            post_div.style.flexDirection= "column";
            post_div.style.justifyContent= "space-between";
            postS_div.appendChild(post_div);
            post_div.appendChild(commentary);
            commentary.onclick = () => {
                commentary.disabled = true;
                fetch("https://jsonplaceholder.typicode.com/comments?postId=" + post.id)
                    .then(response => response.json())
                    .then(comments => {
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
                            post_div.appendChild(comment_div);
                        });
                    });
            };
        });
    });