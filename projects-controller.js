const retrievedProjectsDB = JSON.parse(localStorage.getItem("projectsDBLocal")); //retrieve and parse from browser storage
let projectsHTML = document.getElementById("projects"); //target area of DOM that converted data will be written

for (let arr in retrievedProjectsDB) {//cycle through returned object
    let currentArray = retrievedProjectsDB[arr]; //sets variable of current array
        for (let obj = 0; obj < currentArray.length; obj++) {//cycle through the array of objects
            var currentObject = currentArray[obj]; //set the current object to be accessed as HTML is added below
            //add some stuff to the DOM :)
            projectsHTML.innerHTML += `
            <h3 class="project_name display-4"><span class="font-weight-bold">Project: </span>${currentObject.name}</h3>
            <p class="project_description"><span class="font-weight-bold">Description: </span>${currentObject.description}</p>
            <p class="project_completion"><span class="font-weight-bold">Completion Date: </span>${currentObject.date_completed}</p>
            <p class="project_tech"><span class="font-weight-bold">Technologies Used: </span>${currentObject.technologies}</p>                
            <p class="project_contributors"><span class="font-weight-bold">Contributors: </span>${currentObject.contributors}</p>
            <p class="project_location"><span class="font-weight-bold">Location: </span><a href="${currentObject.location}">GitHub</a></p>
            `     
        }            
}