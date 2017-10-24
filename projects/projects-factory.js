const projectsObjects = [ //collection of projects data stored in objects
    {
    name: "Personal Site",
    description: "A website for showcasing professional skills, personal background, and contact information.",
    date_completed: "In Progress",
    technologies: "HTML, CSS, Bootstrap 4, JavaScript",
    contributors: "Paul Ellis",
    location: "https://github.com/tynesellis/tynesellis.github.io"
    }
]

let projectsDB = { //contains the array of project objects to be stringified and sent to browser storage
    "projects": projectsObjects
}

const projectsDBString = JSON.stringify(projectsDB); //convert projectsDB to string to be sent to browser storage
localStorage.setItem("projectsDBLocal", projectsDBString); // send to browser storage

