let personalSite = {
    name: "Personal Site",
    description: "A website for showcasing professional skills, personal background, and contact information.",
    date_completed: "In Progress",
    technologies: "HTML, CSS, Bootstrap 4, JavaScript",
    contributors: "Paul Ellis",
    location: "https://github.com/tynesellis/tynesellis.github.io"
}

let projectsArray = [];
projectsArray.push(personalSite);

let projectsDB = {
    "personal-site": personalSite
}

const projectsDBString = JSON.stringify(projectsDB);
localStorage.setItem("projectsDBLocal", projectsDBString);

const retrievedProjectsDB = JSON.parse(localStorage.getItem("projectsDBLocal"));
let projectsHTML = document.getElementById("projects");

for (let arr in retrievedProjectsDB) {
    let currentObject = retrievedProjectsDB[arr];
        projectsHTML.innerHTML += `
                <h3 class="project_name display-4"><span class="font-weight-bold">Project: </span>${currentObject.name}</h3>
                <p class="project_description"><span class="font-weight-bold">Description: </span>${currentObject.description}</p>
                <p class="project_completion"><span class="font-weight-bold">Completion Date: </span>${currentObject.date_completed}</p>
                <p class="project_tech"><span class="font-weight-bold">Technologies Used: </span>${currentObject.technologies}</p>                
                <p class="project_contributors"><span class="font-weight-bold">Contributors </span>${currentObject.contributors}</p>
                <p class="project_location"><span class="font-weight-bold">Location </span><a href="${currentObject.location}">GitHub</a></p>
                `       
}