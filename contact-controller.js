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