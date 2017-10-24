const retrievedBlogDB = JSON.parse(localStorage.getItem("blogString"));//get blog DB from storage(array of objects)
const bloggyHTML = document.getElementById("articles");//target section for blogs
const blogPagenatorHTML = document.getElementById("blogPageinator");//target section for pageinator
const numberOfBlogs = retrievedBlogDB.length;//How many blogs there are
const blogsPerPage = 1;//how many we want to display at a time
const howManyPages = Math.ceil(numberOfBlogs / blogsPerPage);//calculate how many pages there will be of blogs

// -------------------------pagination construction------------------------------------
let paginationContent = "<ul class='d-flex flex-row' id='paginate'>";//start the ul that will contain the pageinator
paginationContent += "<a href='#' id='back' class=''>&lt;</a>";//add the back button
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
    const buttonNumber = parseInt(//get the number of the button clicked and Steve's invitation to visit MDN
        Array.from(event.target.classList)//make an array from returned classList
        .find(buttonClass => {if (buttonClass.startsWith("page-"))return buttonClass})//find any "page-" class
        .split("-")[1]//extract the number, which is the number of the button
    );
    //-----change class and/or display of back button
    if (buttonNumber === 1) {//if your're on button one, make the back arrow hide
        backHTML.style.display = "none";
    } else {
        backHTML.style.display = "inline";// if you're on any button other than one, display back arrow and set page class to previous page
        backHTML.className = `page-${buttonNumber - 1}`
    }
        //-----change class and/or display of back button

    if ((buttonNumber + 1) > howManyPages) {//if your're on the last button, make the next arrow hide
        nextHTML.style.display = "none";
    } else {
        nextHTML.style.display = "inline";// if you're on any button other than the last one, display next arrow and set page class to next page
        nextHTML.className = `page-${buttonNumber + 1}`
    }
  //--------------write to page---------------
    const blogsToDisplay = retrievedBlogDB.slice(//set the blogs you want to display
        (buttonNumber - 1) * blogsPerPage, //buttonNumber, drawn from class name - 1, since it's an array * however many we want -- set above
        buttonNumber * blogsPerPage//stopping point
    )

    blogsToDisplay.forEach(function(currentBlog) {
        bloggyHTML.innerHTML += `
            <h1>${currentBlog.name}</h1>
            <h2>Date: ${currentBlog.published}</h2>
            <article>${currentBlog.text}</article>
        `
    })



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
        "classList": ["page-1"]
    }
})

backHTML.addEventListener("click", addBlogz)
nextHTML.addEventListener("click", addBlogz)

//--------------End Event Listener--------------------------

