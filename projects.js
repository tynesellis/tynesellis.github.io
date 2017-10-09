let personalSite = {
    name: "Personal Site",
    date_completed: "In Progress",
    technologies: "HTML, CSS, Bootstrap 4, JavaScript",
    contributers: "Paul Ellis"
}

let projectsArray = [];
projectsArray.push(personalSite);

let projectsDB = {
    "personal-site": personalSite
}

const projectsDBString = JSON.stringify(projectsDB);
localStorage.setItem("projectsDBLocal", projectsDBString);