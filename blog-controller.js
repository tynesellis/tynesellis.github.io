const retrievedBlogDB = JSON.parse(localStorage.getItem("blogString"));//get blog DB from storage(array of objects)
const bloggyHTML = document.getElementById("articles");//target section for blogs
const blogPagenatorHTML = document.getElementById("blogPageinator");//target section for pageinator
const numberOfBlogs = retrievedBlogDB.length;//How many blogs there are
const blogsPerPage = 2;//how many we want to display at a time
const howManyPages = Math.ceil(numberOfBlogs / blogsPerPage);//calculate how many pages there will be of blogs

// -------------------------pagination construction------------------------------------
let paginationContent = "<ul class='d-flex flex-row' id='paginate'>";//start the ul that will contain the pageinator
paginationContent += "<button id='back'>&lt;</button>";//add the back button
for (var i = 0; i < howManyPages; i++) {//add a numbered button for each page available
    paginationContent += `<li><button class="blog-pages page-${i+1}">${i+1}</button></li>`
}
paginationContent += "<button id='next' class='page-2'>&gt;</button>";//add next button
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
    const buttonNumber = event.target.innerHTML;//get the number of the button clicked
    console.log(buttonNumber)
    //-----change class and/or display of back button
    if ((buttonNumber - 1) === 0) {
        backHTML.style.display = "none";
    } else {
        backHTML.style.display = "inline-block";
        backHTML.className = `page-${buttonNumber-1}`
    }
        //-----change class and/or display of back button

    if ((buttonNumber + 1) > howManyPages) {
        nextHTML.style.display = "none";
    } else {
        nextHTML.style.display = "inline-block";
        nextHTML.className = `page-${buttonNumber+1}`
    }
}

// ---------------------End On Click Function-----------------------------




//--------------Event Listener--------------------------

const blogPageButtons = document.getElementsByClassName("blog-pages");//get array of the buttons for the pages

for (let b = 0; b < blogPageButtons.length; b++) {
    let thisButton = blogPageButtons[b];
    thisButton.addEventListener("click", addBlogz, false)
}


//--------------End Event Listener--------------------------
