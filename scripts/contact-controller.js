const contacts = require("./contact-factory")

const contactsPop = () => {
    let contactsHTML = "";
    contacts.forEach(contact => { //cycle through array of contacts
        //add li to ul on contacts page with infor from each contact
        contactsHTML += ` 
        <li>${contact.service}: <a href=${contact.URL}>${contact.userName}</a></li>
        <hr>
        `
    })
    $("#contactList").html(contactsHTML)
}

module.exports = contactsPop