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


