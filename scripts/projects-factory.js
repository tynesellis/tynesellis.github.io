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

