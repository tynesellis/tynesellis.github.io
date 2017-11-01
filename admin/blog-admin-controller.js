const retrievedBlogDBAdmin = JSON.parse(localStorage.getItem("blogString"));//get blog DB from storage(array of objects)
const bloggyHTML = document.getElementById("articles");//target section for blogs
const blogPagenatorHTML = document.getElementById("blogPageinator");//target section for pageinator
const numberOfBlogs = retrievedBlogDBAdmin.length;//How many blogs there are
const blogsPerPage = 1;//how many we want to display at a time
const howManyPages = Math.ceil(numberOfBlogs / blogsPerPage);//calculate how many pages there will be of blogs


// -------------------------pagination construction------------------------------------
let paginationContent = "<ul class='d-flex flex-row' id='paginate'>";//start the ul that will contain the pageinator
paginationContent += "<a href='#' id='back' class=''>&lt;</a>";//add the back button
for (var i = 0; i < howManyPages; i++) {//add a numbered button for each page available
    paginationContent += `<li><a href="#" class="blog-pages page-${i + 1}">${i + 1}</a></li>`
}
paginationContent += "<a href= '#' id='next' class='page-2'>&gt;</a>";//add next button
paginationContent += "</ul>";//close it up

blogPagenatorHTML.innerHTML = paginationContent;//write it to the page
// ------------------------- end pagination construction------------------------------------

// ---------Front and back buttons--------------
const backHTML = document.getElementById("back"); //these target back and next buttons
const nextHTML = document.getElementById("next");
// ---------End Front and back buttons--------------

// ---------------------Pagination On Click Function-----------------------------

function addBlogz(event) {
    bloggyHTML.innerHTML = "";//clear out whatever is on the page
    const buttonNumber = parseInt(//get the number of the button clicked and Steve's invitation to visit MDN
        Array.from(event.target.classList)//make an array from returned classList
            .find(buttonClass => { if (buttonClass.startsWith("page-")) return buttonClass })//find any "page-" class
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
    const blogsToDisplay = retrievedBlogDBAdmin.slice(//set the blogs you want to display
        (buttonNumber - 1) * blogsPerPage, //buttonNumber, drawn from class name - 1, since it's an array * however many we want -- set above
        buttonNumber * blogsPerPage//stopping point
    )

    blogsToDisplay.forEach(function (currentBlog) {
        bloggyHTML.innerHTML += `
            <h1>${currentBlog.name}</h1>
            <h2>Date: ${currentBlog.published}</h2>
            <article>${currentBlog.text}</article>
            <button type="button" id="${currentBlog.blogID}" class="editBlog btn btn-primary" data-toggle="modal" data-target="#blogEditor">Edit</button>        `
    })



}

// ---------------------End On Click Function-----------------------------


//--------------Pagination Event Listener--------------------------

const blogPageButtons = document.getElementsByClassName("blog-pages");//get array of the buttons for the pages

for (let b = 0; b < blogPageButtons.length; b++) {
    let thisButton = blogPageButtons[b];
    thisButton.addEventListener("click", addBlogz, false)
}

backHTML.addEventListener("click", addBlogz)
nextHTML.addEventListener("click", addBlogz)

//--------------End Event Listener--------------------------

//Search blogs============================================
document.getElementById("searchBlogs").addEventListener("keyup", function () {
    let searchString = event.target.value.toLowerCase();
    if (searchString.length >= 3) {
        const searchResults = retrievedBlogDBAdmin.filter(function (checkedBlog) {
            for (let key in checkedBlog) {
                if (checkedBlog[key].toString().toLowerCase().includes(searchString)) {
                    return checkedBlog;
                };
            }
        })
        printedResults = ``;
        searchResults.forEach(function (searchObj) {
            printedResults += `
            <article class="searchedBlogResults contentBoxes">  
                <h4>${searchObj.name}</h4>
                <h5 class="text-muted">Date: ${searchObj.published}</h5>
                <article>${searchObj.text.substring(0, 175)}...</article>
                <button id="${searchObj.blogID}" class="contentBoxes">...Click for more</button>
            </article>
            `
        })
        bloggyHTML.innerHTML = printedResults;
        //Search Results Event Listener
        const searchResultButtons = document.getElementsByClassName("searchedBlogResults");
        for (let b = 0; b < searchResultButtons.length; b++) {
            let resultButton = searchResultButtons[b];
            resultButton.addEventListener("click", function (event) {
                bloggyHTML.innerHTML = "";//clear out whatever is on the page
                    retrievedBlogDBAdmin.forEach(function(blogObj){
                        if (blogObj.blogID.toString() === event.target.id) {
                            bloggyHTML.innerHTML += `
                            <h1>${blogObj.name}</h1>
                            <h2>Date: ${blogObj.published}</h2>
                            <article>${blogObj.text}</article>
                            <button id="${blogObj.blogID}" type="button" class="editBlog btn btn-primary" data-toggle="modal" data-target="blogEditor">Edit</button>
                        `;
                        }
                    })
            })
        }
    }
})



//run at beginning of page load============================
addBlogz({
    "target": {
        "classList": ["page-1"]
    }
})
const blogIdGenerator = function* () {
    let uniqueId = 7

    while (true) {
        yield uniqueId
        uniqueId += 1
    }
}
const blogIdFactory = blogIdGenerator()

//get new blogs from modal input and add them to DB

const generateBlog = function (id, title, date, text) {//factory for blog objects that match database structure
    return Object.create(null, {
        "blogId": {
            enumerable: true,
            value: id
        },
        "name": {
            enumerable: true,
            value: title
        },
        "published": {
            enumerable: true,
            value: date
        },
        "text": {
            enumerable: true,
            value: text
        }
    })
};



document.getElementById("addBlog").addEventListener("click", function (event) {//listen for click on the button that opens a new blog form
    let addedBlogTitle = document.getElementById("newBlogTitle");//get title section of add/edit modal
    let addedBlogText = document.getElementById("newBlogText");//get text section of add/edit modal
    let addedBlogDate = document.getElementById("newBlogDate");//get date section of add/edit modal
    const newestBlog = generateBlog(blogIdFactory.next().value, addedBlogTitle.value, addedBlogDate.value, addedBlogText.value);//pass values above into blog factory
    retrievedBlogDBAdmin.unshift(newestBlog);//push the new blog to the front of the line in the blog array
    localStorage.setItem("blogString", JSON.stringify(retrievedBlogDBAdmin));//send the updated array back to storage
    console.log(retrievedBlogDBAdmin)
    addedBlogTitle.value = "";
    addedBlogText.value = "";
    addedBlogDate.value = "";
})

//================listener events for edit buttons========================
    const blogEditButtons = document.getElementsByClassName("editBlog");//get array of the edit buttons
    
    Array.from(blogEditButtons).forEach(function(button){
        let blogIDtoEdit = document.getElementById("editBlogID");//get date section of add/edit modal    
        let blogTitletoEdit = document.getElementById("editBlogTitle");//get title section of add/edit modal
        let blogTexttoEdit = document.getElementById("editBlogText");//get text section of add/edit modal
        let blogDatetoEdit = document.getElementById("editBlogDate");//get date section of add/edit modal
        button.addEventListener("click", function(event){
            let matchingBlog = retrievedBlogDBAdmin.find(blog =>
            blog.blogID === event.target.id)
            console.log(matchingBlog)
            blogIDtoEdit.value = matchingBlog.BlogID;
            blogTitletoEdit.value = matchingBlog.name;
            blogDatetoEdit.value = matchingBlog.published;
            blogTexttoEdit.value = matchingBlog.text;
        })
    });

//edit functions ================================
document.getElementById("submitEdit").addEventListener("click", function(event){

})


