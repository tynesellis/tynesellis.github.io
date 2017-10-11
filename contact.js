let email = {
    type: "Email",
    URL: "mailto:tynesellis@icloud.com",
    service: "Email",
    userName: "tynesellis@icloud.com"
}

let twitter = {
    type: "Social Media",
    URL: "https://twitter.com/tynesellis",
    service: "Twitter",
    userName: "@tynesellis"
}

let linkedin = {
    type: "Social Media",
    URL: "https://www.linkedin.com/in/paul-ellis-110a44149/",
    service: "Linkedin",
    userName: "Paul Ellis"
}

let contactArray = [email, twitter, linkedin];
let contactDB = {
    "email": email,
    "twitter": twitter,
    "linkedin": linkedin
}

const conactDBString = JSON.stringify(contactDB);
localStorage.setItem("contactsString", conactDBString);

const retrievedContactsDB = JSON.parse(localStorage.getItem("contactsString"));
let contactsHTML = document.getElementById("contact-info");

for (let arr in retrievedContactsDB) {
    let currentObject = retrievedContactsDB[arr];
        contactsHTML.innerHTML += `
                <li>${currentObject.service}: <a href=${currentObject.URL}>${currentObject.userName}</a></li>
                <hr>
        `  
}
