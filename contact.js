let email = {
    type: "Email",
    URL: "mailto:tynesellis@icloud.com",
    service: "iCloud email",
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
    service: "Twitter",
    userName: "@tynesellis"
}

let contactDB = [email, twitter, linkedin];

const conactDBString = JSON.stringify(contactDB);
localStorage.setItem("contactsString", conactDBString);