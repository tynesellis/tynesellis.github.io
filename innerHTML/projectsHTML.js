//Author: Paul Ellis; Purpose: projects page html to be loaded on request

const projectsHTML = {
    "id": {
        enumerable: true,
        value: "nav_projects"
    },
    "inner": {
        enumerable: true,
        value: `
        <header id="jumbotron" class="d-flex flex-row jumbotron mb-3 mt-3 mr-5 ml-5 boxShadow">
        <div>
          <img id="headShot" class="img-rounded float-left mr-3" src="../images/hs-pic.jpg">
        </div>
        <div class="d-flex flex-column justify-content-center">
          <h1 class="headerText">Projects</h1>
          <h5 class="text-muted headerText">Coming Soon...</h5>
        </div>
      </header>
      <div class="container mt-3 pb-5">
        <div class="d-flex flex-row justify-content-between">
          <div>
            <label for="searchBlogs">Search Projects:</label>
            <input type="text" id="searchProjects">
          </div>
          <section id="backItUp">
            <!-- insert back to all projects button -->
          </section>
        </div>
        <section class="container mt-2 pb-5 contentBoxes" id="projects">
    
          <!-- insert project links here -->
        </section>
        
      </div>
        `
    }
}

module.exports = projectsHTML