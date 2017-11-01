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


    