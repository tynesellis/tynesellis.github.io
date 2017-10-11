//contains each blog added
const blogObjects = [
    {name: "Week One",
    published: "10/08/2017",
    text: "With week one in the bag, I can already tell this is going to fly by.  The ice broke quickly on day one, and by day two we were jumping in.  We were introduced (or reintroduced) to the multiverse of objects and functions and objects and git….and objects (they’re everywhere).  I get the feeling it’s only going to accelerate from here, but I’m not discouraged.  I’m glad.  Six months isn’t a lot of time, and I want to get everything I can from this program. There will likely be frustrations, as there already have been…like I said, we dove in.<br><br>  I hope we will all keep a perspective of training and learning, rather than attempt and failure.  I’ve had days when I went the the gym and phoned it in, and I’ve had days where I didn’t hold anything back.  In the first case, I felt fine the next day.  In the second…not so much.  But when I didn’t feel the strain of pushing myself and growing from it, I felt like I had wasted my time.  When I pushed myself, I felt a pride in my work, despite being a little beat up from it.  I hope we can all see and remind each other that the struggle is good and that it’s not a sign of failure but of progress."
    }
]

const blogDB = {
    "blogz": blogObjects
};

const blogDBString = JSON.stringify(blogDB);
localStorage.setItem("blogString", blogDBString);

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