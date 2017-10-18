const retrievedBlogDB = JSON.parse(localStorage.getItem("blogString"));
let bloggyHTML = document.getElementById("articles");

for (let arr in retrievedBlogDB) {
    let currentArray = retrievedBlogDB[arr];
    for (let i = 0; i < currentArray.length; i++) {
        let currentObject = currentArray[i];
        bloggyHTML.innerHTML += `
        <article class="blog_articles pb-5 mb-5 contentBoxes">
            <h3 class="display-4">${currentObject.name}</h3>
            <p class="text-muted font-italic">${currentObject.published}</p>
            <p class="">${currentObject.text}</p>
        </article>
        `  
    }
}