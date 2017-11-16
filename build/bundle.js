(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Author: Paul Ellis; Purpose: Main db of innerHTML to be populated on click events

const main = require("./mainHTML");

const innerHTMLDB = [main];

module.exports = innerHTMLDB
},{"./mainHTML":2}],2:[function(require,module,exports){
//Author: Paul Ellis; Purpose: Main page html to be loaded on request

const mainHTML = {
    "id": {
        enumerable: true,
        value: "nav_home"
    },
    "inner": {
        enumerable: true,
        value: `
        <header id="jumbotron" class="d-flex flex-row jumbotron mb-3 mt-3 mr-5 ml-5 boxShadow">
        <div>
          <img id="headShot" class="img-rounded float-left mr-3" src="../images/hs-pic.jpg">
        </div>
        <div class="d-flex flex-column justify-content-center">
          <h1 class="headerText">Paul Ellis</h1>
          <h5 class="text-muted headerText">Junior Developer Apprentice</h5>
        </div>
      </header>
      <div class="container mt-3">
  
        <div id="mainText" class="container-fluid row mt-4 mb-5 pb-5 contentBoxes">
          <blockquote id="pullQuote" class="col-md-4 text-center">"I get my greatest sense of accomplishment in understanding and then providing for a need, and I love the idea of
            earning a living by creating and maintaining something genuinely needed." </blockquote>
          <article class="col-md-8 text-left pt-1 pl-4 ">Hi! I’m Paul, and yes, that photo is actually me from the 90s.
            <br>
            <br>I’ve lived in Nashville since 2001 and worked in law enforcement since 2008. After nearly a decade in the field,
            I was ready for a change. The question was: What career could still challenge me and provide a way to serve the
            Nashville community?
            <br>
            <br> Coding.
            <br>
            <br>While considering my career change, I heard about Nashville Software School at a dinner and started looking into
            it. Of course the demand and good pay of the field got my attention, but what really drew me in was the dignity
            in the work. I read an article that said coding is the new blue collar field. For some people “blue collar” might
            be an insult, but I find that kind of work honorable, satisfying, and sadly rare in the job market. It’s honest,
            needed, skilled work for creative thinkers. I get my greatest sense of accomplishment in understanding and then
            providing for a need, and I love the idea of earning a living by creating and maintaining something genuinely needed.
            Beyond that, I get energy from being around people and do some of my best thinking with others…and from what I
            hear, coding is a team sport. Maybe I can join your team. </article>
        </div>
  
      </div>
        `
    }
}

module.exports = mainHTML
},{}],3:[function(require,module,exports){
const db = require("./database")
const database = db.load();
const generateBlog = require("./blog-factory");
const blogEditEvent = require("./blogEditEvent")
const bloggyHTML = document.getElementById("articlesAdmin");//target section for blogs
const blogPagenatorHTML = document.getElementById("blogPageinatorAdmin");//target section for pageinator
const numberOfBlogs = database.blogs.length;//How many blogs there are
const blogsPerPage = 1;//how many we want to display at a time
const howManyPages = Math.ceil(numberOfBlogs / blogsPerPage);//calculate how many pages there will be of blogs
let blogIDtoEdit = document.getElementById("editBlogID");//get date section of add/edit modal    
let blogTitletoEdit = document.getElementById("editBlogTitle");//get title section of add/edit modal
let blogTexttoEdit = document.getElementById("editBlogText");//get text section of add/edit modal
let blogDatetoEdit = document.getElementById("editBlogDate");//get date section of add/edit modal


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

function addBlogzAdmin(event) {
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
    const blogsToDisplay = database.blogs.slice(//set the blogs you want to display
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
    blogEditEvent();
}

// ---------------------End On Click Function-----------------------------


//--------------Pagination Event Listener--------------------------

const blogPageButtons = document.getElementsByClassName("blog-pages");//get array of the buttons for the pages

for (let b = 0; b < blogPageButtons.length; b++) {
    let thisButton = blogPageButtons[b];
    thisButton.addEventListener("click", addBlogzAdmin, false)
}

backHTML.addEventListener("click", addBlogzAdmin)
nextHTML.addEventListener("click", addBlogzAdmin)

//--------------End Event Listener--------------------------

//Search blogs============================================
document.getElementById("searchBlogs").addEventListener("keyup", function () {
    let searchString = event.target.value.toLowerCase();
    if (searchString.length >= 3) {
        const searchResults = database.blogs.filter(function (checkedBlog) {
            for (let key in checkedBlog) {
                if (checkedBlog[key].toString().toLowerCase().includes(searchString)) {
                    return checkedBlog;
                }
            }
        })
        let printedResults = ``;
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
                document.getElementById("searchBlogs").value = "";
                bloggyHTML.innerHTML = "";//clear out whatever is on the page
                database.blogs.forEach(function (blogObj) {
                    if (blogObj.blogID.toString() === event.target.id) {
                        bloggyHTML.innerHTML += `
                            <h1>${blogObj.name}</h1>
                            <h2>Date: ${blogObj.published}</h2>
                            <article>${blogObj.text}</article>
                            <button id="${blogObj.blogID}" type="button" class="editBlog btn btn-primary" data-toggle="modal" data-target="#blogEditor">Edit</button>
                        `;
                    }
                    blogEditEvent();
                })
            })
        } 
    }
})




//=================Add blog ========================

document.getElementById("addBlog").addEventListener("click", function () {//listen for click on the button that opens a new blog form
    let addedBlogTitle = document.getElementById("newBlogTitle");//get title section of add/edit modal
    let addedBlogText = document.getElementById("newBlogText");//get text section of add/edit modal
    let addedBlogDate = document.getElementById("newBlogDate");//get date section of add/edit modal
    const newestBlog = generateBlog(blogIdFactory.next().value, addedBlogTitle.value, addedBlogDate.value, addedBlogText.value);//pass values above into blog factory
    database.blogs.unshift(newestBlog);//push the new blog to the front of the line in the blog array
    localStorage.setItem("blogString", JSON.stringify(database.blogs));//send the updated array back to storage
    addedBlogTitle.value = "";
    addedBlogText.value = "";
    addedBlogDate.value = "";
    addBlogzAdmin({
        "target": {
            "classList": ["page-1"]
        }
    })
})

//================listener events for edit buttons========================


//edit functions ================================
document.getElementById("submitEdit").addEventListener("click", function () {
    let editedBlog = generateBlog(parseInt(blogIDtoEdit.value), blogTitletoEdit.value, blogDatetoEdit.value, blogTexttoEdit.value);
    let blogToReplaceIndex = database.blogs.findIndex(blog =>
        editedBlog.blogID === blog.blogID
    );
    database.blogs.splice(blogToReplaceIndex, 1, editedBlog);
    localStorage.setItem("blogString", JSON.stringify(database.blogs));//send the updated array back to storage
    addBlogzAdmin({
        "target": {
            "classList": ["page-1"]
        }
    })
})

//run at beginning of page load============================
addBlogzAdmin({
    "target": {
        "classList": ["page-1"]
    }
})


},{"./blog-factory":6,"./blogEditEvent":7,"./database":10}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
const db = require("./database");
const database = db.load();

const bloggyHTML = document.getElementById("articles");//target section for blogs
const blogPagenatorHTML = document.getElementById("blogPageinator");//target section for pageinator
const numberOfBlogs = database.blogs.length;//How many blogs there are
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
    // --------------write to page---------------
    const blogsToDisplay = database.blogs.slice(//set the blogs you want to display
        (buttonNumber - 1) * blogsPerPage, //buttonNumber, drawn from class name - 1, since it's an array * however many we want -- set above
        buttonNumber * blogsPerPage//stopping point
    )

    database.blogs.forEach(currentBlog => {
        bloggyHTML.innerHTML += `
            <h1>${currentBlog.name}</h1>
            <h2>Date: ${currentBlog.published}</h2>
            <article>${currentBlog.text}</article>
        `
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
        const searchResults = database.blogs.filter(function (checkedBlog) {
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
                    database.blogs.forEach(function(blogObj){
                        if (blogObj.blogID.toString() === event.target.id) {
                            bloggyHTML.innerHTML += `
                            <h1>${blogObj.name}</h1>
                            <h2>Date: ${blogObj.published}</h2>
                            <article>${blogObj.text}</article>
                        `
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


},{"./database":10}],6:[function(require,module,exports){
const db = require("./database");
const database = db.load();

database.blogs = database.blogs || [];

const blogIdGenerator = function* () {
    let uniqueId = 1

    while (true) {
        yield uniqueId
        uniqueId += 1
    }
}
const blogIdFactory = blogIdGenerator()

const generateBlog =  (id, title, date, text) => {//factory for blog objects that match database structure
     const newBlog = Object.create(null, {
        "blogID": {
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
    database.blogs.push(newBlog);
    db.save(database, "blogs")
};

module.exports = generateBlog

generateBlog(blogIdFactory.next().value, "Week One", "10/08/2017", "With week one in the bag, I can already tell this is going to fly by.  The ice broke quickly on day one, and by day two we were jumping in.  We were introduced (or reintroduced) to the multiverse of objects and functions and objects and git….and objects (they’re everywhere).  I get the feeling it’s only going to accelerate from here, but I’m not discouraged.  I’m glad.  Six months isn’t a lot of time, and I want to get everything I can from this program. There will likely be frustrations, as there already have been…like I said, we dove in.<br><br>  I hope we will all keep a perspective of training and learning, rather than attempt and failure.  I’ve had days when I went the the gym and phoned it in, and I’ve had days where I didn’t hold anything back.  In the first case, I felt fine the next day.  In the second…not so much.  But when I didn’t feel the strain of pushing myself and growing from it, I felt like I had wasted my time.  When I pushed myself, I felt a pride in my work, despite being a little beat up from it.  I hope we can all see and remind each other that the struggle is good and that it’s not a sign of failure but of progress.")
generateBlog(blogIdFactory.next().value, "Weeks Two and Three", "10/22/2017", "The last few weeks were the start of our sprints and group projects. It’s been a goldmine of learning and solidifying practices. The Github flow rhythm took a little getting used to, but, after a few pull and push disasters, we all started to figure out the steps. We also learned the importance of keeping the laptop closed and doing some solid white-boarding. It’s an investment that saves a lot of time down the road. The group dynamic gave an exponential return for what each person brought to the table. It took both what we knew and didn’t know individually, mixed it all together, and sent each of us back out with a new knowledge base equal to the contributions of the entire group. As we struggled through what we didn’t know or what we thought we knew but didn’t, the new concepts sunk into brain and muscle memory. I’m looking forward to the next project.")
generateBlog(blogIdFactory.next().value, "One Month In", "11/05/2017", "In one month, our cohort has gone from a group with mostly experience from online courses to a class jumping into creating relational databases and writing modular javascript apps. Granted, we’re just at the beginnings of those particular journeys, but it’s satisfying to look back only a handful of weeks and see that much progress.  The last week has been the first point where I felt like all of the exercises for separate principles like command line, functions, objects, and DOM manipulation, came together to one larger picture.  In the coming weeks, it looks like we’ll be getting to take all the tools we’ve acquired so far and hone them in group projects that replicate the current coding work environment.")
generateBlog(blogIdFactory.next().value, "Week Filler 2", "10/zz/2017", "These are the voyages of the Starship Enterprise. Its continuing mission, to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before. We need to neutralize the homing signal. Each unit has total environmental control, gravity, temperature, atmosphere, light, in a protective field. Sensors show energy readings in your area. We had a forced chamber explosion in the resonator coil. Field strength has increased by 3,000 percent..")
generateBlog(blogIdFactory.next().value, "Week Filler 3", "10/zz/2017", "Pooping rainbow while flying in a toasted bread costume in space chase ball of string chew foot, and poop on grasses. Why must they do that flop over. Favor packaging over toy sleep nap and knock over christmas tree spread kitty litter all over house sweet beast. Use lap as chair give attitude poop on grasses sleep nap. Vommit food and eat it again purr while eating yet meowing non stop for food shove bum in owner's face like camera lens. Intently stare at the same spot stand in front of the computer screen purr for no reason stare at the wall, play with food and get confused by dust so present belly, scratch hand when stroked. Intrigued by the shower have secret plans. Sweet beast find something else more interesting, or stare at ceiling. Leave dead animals as gifts find something else more interesting. Lick butt. Sleep in the bathroom sink why must they do that. Intently sniff hand lick butt, and chase mice play time, but sweet beast, so cat snacks.")
generateBlog(blogIdFactory.next().value, "Week Filler 4", "10/zz/2017", "They were four men living all together yet they were all alone. Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. Well we're movin' on up to the east side to a deluxe apartment in the sky. A man is born he's a man of means. Then along come two they got nothin' but their jeans. In a freak mishap Ranger 3 and its pilot Captain William Buck Rogers are blown out of their trajectory into an orbit which freezes his life support systems and returns Buck Rogers to Earth five-hundred years later. Fleeing from the Cylon tyranny the last Battlestar – Galactica - leads a rag-tag fugitive fleet on a lonely quest - a shining planet known as Earth.")

},{"./database":10}],7:[function(require,module,exports){
const blogEditEvent = () => {
    const blogEditButtons = document.getElementsByClassName("editBlog");//get array of the edit buttons
    Array.from(blogEditButtons).forEach(button => {
        button.addEventListener("click", event => {
            let matchingBlog = retrievedBlogDBAdmin.find(blog => blog.blogID == event.target.id);
            blogIDtoEdit.value = matchingBlog.blogID;
            blogTitletoEdit.value = matchingBlog.name;
            blogDatetoEdit.value = matchingBlog.published;
            blogTexttoEdit.value = matchingBlog.text;
        })
    });
}
},{}],8:[function(require,module,exports){
const retrievedContactsDB = JSON.parse(localStorage.getItem("contactsString"));//retrieve string from storage and parse it
let contactsHTML = document.getElementById("contact-info"); //target area of DOM to which we will send data

for (let arr in retrievedContactsDB) { //cycle through the object returned from storage
    let currentArray = retrievedContactsDB[arr]; //array to be looped through
    for (var obj = 0; obj < currentArray.length; obj++) { //loops through objects in the array
        var currentObject = currentArray[obj];
        //add li to ul on contacts page
        contactsHTML.innerHTML += ` 
        <li>${currentObject.service}: <a href=${currentObject.URL}>${currentObject.userName}</a></li>
        <hr>
        `  
    }    
}  
},{}],9:[function(require,module,exports){
//object for different contact methods
const contactObject = [
    {
    type: "Email",
    URL: "mailto:tynesellis@icloud.com",
    service: "Email",
    userName: "tynesellis@icloud.com"
    },

    {
    type: "Social Media",
    URL: "https://twitter.com/tynesellis",
    service: "Twitter",
    userName: "@tynesellis"
    },

    {
    type: "Social Media",
    URL: "https://www.linkedin.com/in/paul-ellis-110a44149/",
    service: "Linkedin",
    userName: "Paul Ellis"
    }
]

//object to send to JSON/browser storage
const contactDB = {
    "contacts": contactObject
}

const conactDBString = JSON.stringify(contactDB);//change object into string for browser storage
localStorage.setItem("contactsString", conactDBString);//set string in storage



},{}],10:[function(require,module,exports){
const Database = Object.create(null, {
    load: {
        value: () => JSON.parse(localStorage.getItem("Database")) || {}
    },
    save: {
        value: (db, flag) => {
            localStorage.setItem("Database", JSON.stringify(db));
            localStorage.setItem("changedKey", JSON.stringify(flag))
        }
    }
})

module.exports = Database
},{}],11:[function(require,module,exports){
//Author: Paul Ellis; Purpose: Object of listeners

const listeners = {
    "nav": {
        value: (f) => Array.from(document.getElementsByClassName("nav-link")).forEach(link => link.addEventListener("click", f))
    }
}

module.exports = listeners
},{}],12:[function(require,module,exports){
//Author: Paul Ellis; Purpose: Function to get innerHTML to be populated

const innerHTMLDB = require("../innerHTML/innerHTMLDB")

const getAndLoad = () => {
    const targetDiv = document.getElementById("target");
    const match = innerHTMLDB.find(mod => event.target.id === mod.id.value)
    targetDiv.innerHTML = match.inner.value;
}

module.exports = getAndLoad
},{"../innerHTML/innerHTMLDB":1}],13:[function(require,module,exports){
//Author: Paul Ellis; Purpose: Function to populate pages

const listeners = require("./listeners")
const load = require("./load-mod")

const loaders = {
    "loader": {
        value: () => listeners.nav(load)
    }
}

module.exports = loaders
},{"./listeners":11,"./load-mod":12}],14:[function(require,module,exports){
const listenLoad = require("./loaders");

console.log("hi")
},{"./loaders":13}],15:[function(require,module,exports){
const retrievedProjectsDB = JSON.parse(localStorage.getItem("projectsDBLocal")); //retrieve and parse from browser storage
const projectsHTML = document.getElementById("projects"); //target area of DOM that converted data will be written
const backButtonHTML = document.getElementById("backItUp");//return to full list option during search
const searchBar = document.getElementById("searchProjects");


const loadAllProjects = function () {
    retrievedProjectsDB.forEach(function (currentObject) {//cycle through the array of objects
        //add some stuff to the DOM :)
        projectsHTML.innerHTML += `
            <article class="container mt-1 pb-5 contentBoxes">
            <h3 class="project_name display-4"><span class="font-weight-bold">Project: </span>${currentObject.name}</h3>
            <p class="project_description"><span class="font-weight-bold">Description: </span>${currentObject.description}</p>
            <p class="project_completion"><span class="font-weight-bold">Completion Date: </span>${currentObject.date_completed}</p>
            <p class="project_tech"><span class="font-weight-bold">Technologies Used: </span>${currentObject.technologies}</p>                
            <p class="project_contributors"><span class="font-weight-bold">Contributors: </span>${currentObject.contributors}</p>
            <p class="project_location"><span class="font-weight-bold">Location: </span><a href="${currentObject.location}" target="_blank">GitHub</a></p>
            </article>
            `
    })
}

loadAllProjects();
//======================projects search===============================

searchBar.addEventListener("keyup", function () {//listen for keyup event in searchProjects input box
    let searchString = event.target.value.toLowerCase();//get the value of what is typed and set it all to lowercase
    if (event.target.value.length === 0) {//if user clears out search, reverts to original list
        projectsHTML.innerHTML = "";
        loadAllProjects()
    }
    if (searchString.length >= 3 || event.keyCode === 13) {//set comparissons to start when three characters have been typed or enter key pressed
        const searchResults = retrievedProjectsDB.filter(function (checkedProject) {//run filter on the array of projects in local storage
            for (let key in checkedProject) {//for each project object
                if (checkedProject[key].toString().toLowerCase().includes(searchString)) {
                    return checkedProject;/*if the lower case value of any key (some container integer ids --to string) includes 
                                            the lower case value of the searchString, return that object to searchResults array*/
                };
            }
        })
        printedResults = ``;//store HTML to be written for the DOM
        searchResults.forEach(function (searchObj) {/*for each object that contained the searchString, 
                                                    print a preview that contains the title.  Includes a button
                                                    in each result that rewrites the section with just the selected blog--
                                                    see Search Results Event Listener below*/
            printedResults += `
            <article class="searchedProjectsResults container mt-1 pb-5 contentBoxes">
            <h3 class="project_name display-4"><span class="font-weight-bold">Project: </span>${searchObj.name}</h3>
            <button id="${searchObj.projectID}" class="contentBoxes">...Click for more</button> 
            </article>
            `
        })
        backButtonHTML.innerHTML = `<button class="contentBoxes" id="backToAllProjects">Back to all projects</button>`;
        document.getElementById("backToAllProjects").addEventListener("click", function(){//listen for back button to be clicked
            searchBar.value = "";
            backButtonHTML.innerHTML = ""; //clear search bar                           
            projectsHTML.innerHTML = "";//clear out whatever is on the page                            
            loadAllProjects()//load the original full collection of objects
        })
        projectsHTML.innerHTML = printedResults;//write the results to the DOM
        //Search Results Event Listener
        const searchResultButtons = document.getElementsByClassName("searchedProjectsResults");//get all buttons created from search results
        for (let b = 0; b < searchResultButtons.length; b++) {
            let resultButton = searchResultButtons[b];
            resultButton.addEventListener("click", function (event) {//listen for one of the buttons to be clicked
                searchBar.value = "";//clear search bar
                projectsHTML.innerHTML = "";//clear out whatever is on the page
                //button above gives the option to see all the projects again - there will only ever be one
                retrievedProjectsDB.forEach(function (projectObj) {//Look at the projects database
                    if (projectObj.projectID.toString() === event.target.id) {//print out the project that matches the id of the button clicked
                        projectsHTML.innerHTML += `
                            <article class="container mt-1 pb-5 contentBoxes">
                            <h3 class="project_name display-4"><span class="font-weight-bold">Project: </span>${projectObj.name}</h3>
                            <p class="project_description"><span class="font-weight-bold">Description: </span>${projectObj.description}</p>
                            <p class="project_completion"><span class="font-weight-bold">Completion Date: </span>${projectObj.date_completed}</p>
                            <p class="project_tech"><span class="font-weight-bold">Technologies Used: </span>${projectObj.technologies}</p>                
                            <p class="project_contributors"><span class="font-weight-bold">Contributors: </span>${projectObj.contributors}</p>
                            <p class="project_location"><span class="font-weight-bold">Location: </span><a href="${projectObj.location}" target="_blank">GitHub</a></p>
                            </article>
                        `; 
                        
                        
                    }
                })                
            })
        }
    }    
})


    
},{}],16:[function(require,module,exports){
const ProjectsIdGenerator = function* () {
    let uniqueId = 7

    while (true) {
        yield uniqueId
        uniqueId += 1
    }
}
const ProjectsIdFactory = ProjectsIdGenerator()

const projectsObjects = [ //collection of projects data stored in objects
    {
        projectID: ProjectsIdFactory.next().value,
        name: "Personal Site",
        description: "A website for showcasing professional skills, personal background, and contact information.",
        date_completed: "In Progress",
        technologies: "HTML, CSS, Bootstrap 4, JavaScript",
        contributors: "Paul Ellis",
        location: "https://github.com/tynesellis/tynesellis.github.io"
    },
    {
        projectID: ProjectsIdFactory.next().value,
        name: "Filler Project 1",
        description: "Poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls meowzer.",
        date_completed: "Back in the day",
        technologies: "HTML, CSS, Bootstrap 4, JavaScript, BASIC",
        contributors: "Paul Ellis | Filler Descpription by <a target='_blank' href='http://www.catipsum.com/'>CatIpsum</a>",
        location: "https://github.com/tynesellis/tynesellis.github.io"
    },
    {
        projectID: ProjectsIdFactory.next().value,
        name: "Filler Project 2",
        description: "Poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls meowzer.",
        date_completed: "Even further Back in the day",
        technologies: "HTML, CSS, Bootstrap 4, JavaScript, BASIC",
        contributors: "Paul Ellis | Filler Descpription by <a target='_blank' href='http://www.catipsum.com/'>CatIpsum</a>",
        location: "https://github.com/tynesellis/tynesellis.github.io"
    },
    {
        projectID: ProjectsIdFactory.next().value,
        name: "Filler Project 3",
        description: "Poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls meowzer.",
        date_completed: "Way Back in the day",
        technologies: "HTML, CSS, Bootstrap 4, JavaScript, BASIC",
        contributors: "Paul Ellis | Filler Descpription by <a target='_blank' href='http://www.catipsum.com/'>CatIpsum</a>",
        location: "https://github.com/tynesellis/tynesellis.github.io"
    },
    {
        projectID: ProjectsIdFactory.next().value,
        name: "Filler Project 4",
        description: "Poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls meowzer.",
        date_completed: "It's been a minute",
        technologies: "HTML, CSS, Bootstrap 4, JavaScript, BASIC",
        contributors: "Paul Ellis | Filler Descpription by <a target='_blank' href='http://www.catipsum.com/'>CatIpsum</a>",
        location: "https://github.com/tynesellis/tynesellis.github.io"
    }
]

const projectsDBString = JSON.stringify(projectsObjects); //convert projectsDB to string to be sent to browser storage
localStorage.setItem("projectsDBLocal", projectsDBString); // send to browser storage


},{}],17:[function(require,module,exports){
const retrievedResume = JSON.parse(localStorage.getItem("resumeDB"));//retrieve DB of resume information in an array
let resumeHTML = document.getElementById("resume");//targets area of DOM to send new content

for (let obj = 0; obj < retrievedResume.length; obj++) {
    let currentObject = retrievedResume[obj];
    resumeHTML.innerHTML += `
    <article class="d-flex flex-column" id="resumeHead">
    <h1 class="resumeTags">${currentObject.name}</h1>
    <h5 class="resumeTags"><a id="email" href="mailto:${currentObject.email}">${currentObject.email}</a></h5>
    <h2 class="resumeTags sectionHeads">${currentObject.work}</h1>
    </article>

    <article class="d-flex flex-column" id="mnpd">
    <h3 class="resumeTags">${currentObject.job1}</h3>
    <h5 class="resumeTags">${currentObject.job1dates}</h5>
    <h4 class="resumeTags">Roles within the Department:</h4>
    <h5 class="resumeTags">${currentObject.job1role1}</h5>
    <h5 class="resumeTags">${currentObject.job1role2}</h5>
    <h5 class="resumeTags">${currentObject.job1role3}</h5>
    </article>
    
    <article class="d-flex flex-column" id="dell">
    <h3 class="resumeTags">${currentObject.job2}</h3>
    <h5 class="resumeTags">${currentObject.job2dates}</h5>
    <h4 class="resumeTags">Roles within the Department:</h4>
    <h5 class="resumeTags">${currentObject.job2role1}</h5>
    <h5 class="resumeTags">${currentObject.job2role2}</h5>
    </article>
    
    <article class="d-flex flex-column" id="education">    
    <h2 class="resumeTags sectionHeads">${currentObject.education}</h2>
    <h5 class="resumeTags">${currentObject.school}</h5>
    <h5 class="resumeTags">${currentObject.degree}</h5>
    </article>
    
    `;
    
}




},{}],18:[function(require,module,exports){
const db = require("./database");
const database = db.load();
database.resume = database.resume || [];

const resumePush = () => {database.resume.push({
    name: "Paul Ellis",
    email: "tynesellis@icloud.com",
    work: "Professional Experience",
    job1: "Metropolitan Nashville Police Department",
    job1dates: "Dates of Employment: June, 2008 - September, 2017",
    job1role1: "Field Operations Bureau | Patrol Officer",
    job1role2: "Field Operations Bureau | Midnight Flex Team Officer",
    job1role3: "Criminal Investigations Division | Domestic Violence Detective",
    job2: "Dell, Inc.",
    job2dates: "Dates of Employment: July, 2006 - June, 2008",
    job2role1: "Sales Representative | Business Sales Division",
    job2role2: "Account Manager | Business Sales Division",
    education: "Education",
    school: "Lipscomb University",
    degree: "B.A. Communications | Journalism Concentration | Public Relations Minor"
})
console.log("hi")
db.save(database, "resume")}

module.exports = resumePush()
},{"./database":10}]},{},[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
