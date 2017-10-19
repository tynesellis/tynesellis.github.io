const retrievedBlogDB = JSON.parse(localStorage.getItem("blogString"));//get blog DB from storage(array of objects)
const bloggyHTML = document.getElementById("articles");//target section for blogs
const blogPagenatorHTML = document.getElementById("blogPageinator");//target section for pageinator
const numberOfBlogs = retrievedBlogDB.length;//How many blogs there are
const blogsPerPage = 1;//how many we want to display at a time
const howManyPages = Math.ceil(numberOfBlogs / blogsPerPage);//calculate how many pages there will be of blogs

// -------------------------pagination construction------------------------------------
let paginationContent = "<ul class='d-flex flex-row' id='paginate'>";//start the ul that will contain the pageinator
paginationContent += "<a href='#' id='back'>&lt;</a>";//add the back button
for (var i = 0; i < howManyPages; i++) {//add a numbered button for each page available
    paginationContent += `<li><a href="#" class="blog-pages page-${i+1}">${i+1}</a></li>`
}
paginationContent += "<a href= '#' id='next' class='page-2'>&gt;</a>";//add next button
paginationContent += "</ul>";//close it up

blogPagenatorHTML.innerHTML = paginationContent;//write it to the page
// ------------------------- end pagination construction------------------------------------

// ---------Front and back buttons--------------
const backHTML = document.getElementById("back"); //these target back and next buttons
const nextHTML = document.getElementById("next");
// ---------End Front and back buttons--------------

// ---------------------On Click Function-----------------------------

function addBlogz(event) {
    bloggyHTML.innerHTML = "";//clear out whatever is on the page
    const buttonNumber = parseInt(event.target.innerHTML);//get the number of the button clicked
    console.log(buttonNumber)
    
    //-----change class and/or display of back button
    if (buttonNumber === 1) {
        backHTML.style.display = "none";
    } else {
        backHTML.style.display = "inline-block";
        backHTML.className = `page-${buttonNumber - 1}`
    }
        //-----change class and/or display of back button

    if ((buttonNumber + 1) > howManyPages) {
        nextHTML.style.display = "none";
    } else {
        nextHTML.style.display = "inline-block";
        nextHTML.className = `page-${buttonNumber + 1}`
    }
  //--------------write to page---------------
    const blogsToDisplay = retrievedBlogDB.slice(
        (buttonNumber - 1) * blogsPerPage, 
        buttonNumber * blogsPerPage
    )

    for (let l = 0; l < blogsToDisplay.length; l++) {
        let currentBlog = blogsToDisplay[l];
        bloggyHTML.innerHTML += `
            <h1>${currentBlog.name}</h1>
            <h2>Date: ${currentBlog.published}</h2>
            <article>${currentBlog.text}</article>
        `
    }



}

   


// ---------------------End On Click Function-----------------------------




//--------------Event Listener--------------------------

const blogPageButtons = document.getElementsByClassName("blog-pages");//get array of the buttons for the pages

for (let b = 0; b < blogPageButtons.length; b++) {
    let thisButton = blogPageButtons[b];
    thisButton.addEventListener("click", addBlogz, false)
}

addBlogz({
    "target": {
        "innerHTML": "1"
    }
})

backHTML.addEventListener("click", addBlogz)
nextHTML.addEventListener("click", addBlogz)

//--------------End Event Listener--------------------------

