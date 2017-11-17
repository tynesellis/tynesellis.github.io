//Author: Paul Ellis; Purpose: resume page html to be loaded on request

const resumeHTML = {
    "id": {
        enumerable: true,
        value: "nav_resume"
    },
    "inner": {
        enumerable: true,
        value: `
        <header id="jumbotron" class="d-flex flex-row jumbotron mb-3 mt-3 mr-5 ml-5 boxShadow">
        <div><img id="headShot" class="img-rounded float-left mr-3" src="../images/hs-pic.jpg">
      </div>
        <div class="d-flex flex-column justify-content-center">
          <h1 class="headerText">Resumé</h1>
          <h5 class="text-muted headerText">with a fancy é</h5>
        </div>
    </header> 
    
    <div class="container mt-3">
            
      <section id="resume" class="d-flex flex-column pb-5 contentBoxes">
        

      </section>
  </div>
        `
    }
}

module.exports = resumeHTML