//Author: Paul Ellis; Purpose: blog page html to be loaded on request

const blogHTML = {
    "id": {
        enumerable: true,
        value: "nav_blog"
    },
    "inner": {
        enumerable: true,
        value: `
        <header id="jumbotron" class="d-flex flex-row jumbotron mb-3 mt-3 mr-5 ml-5 boxShadow">
            <div><img id="headShot" class="img-rounded float-left mr-3" src="../images/hs-pic.jpg">
          </div>
            <div class="d-flex flex-column justify-content-center">
              <h1 class="headerText">Doogie Browser.md</h1>
              <h5 class="text-muted headerText">Thoughts from this week's episode of <em>NSS</em></h5>
            </div>
        </header> 
        
        <div class="container mt-3 pb-5">
            <label for="searchBlogs">Search Blogs:</label>  
          <input type="text" id="searchBlogs">
            <section class="d-flex flex-column"id="articles">
              
              <!-- new articles to go here --> 
            
            
          </section>
      </div>
        `
    }
}

module.exports = blogHTML