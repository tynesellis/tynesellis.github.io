//Author: Paul Ellis; Purpose: contact page html to be loaded on request

const contactHTMl = {
    "id": {
        enumerable: true,
        value: "nav_contact"
    },
    "inner": {
        enumerable: true,
        value: `
        <header id="jumbotron" class="d-flex flex-row jumbotron mb-3 mt-3 mr-5 ml-5 boxShadow">
        <div><img id="headShot" class="img-rounded float-left mr-3" src="../images/hs-pic.jpg">
      </div>
        <div class="d-flex flex-column justify-content-center">
          <h1 class="headerText">Let's Talk!</h1>
          <h5 class="text-muted headerText">....or the eEquivalent</h5>
        </div>
    </header> 
    
    <div id="contact-info" class="container mt-5 contentBoxes">
        <ul id="contactList" class="pl-1">
           <!-- populate from storage here -->
        </ul>
    </div>
        `
    }
}

module.exports = contactHTMl