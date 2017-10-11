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
