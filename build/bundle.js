(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
//Author: Paul Ellis; Purpose: Main db of innerHTML to be populated on click events

const main = require("./mainHTML");
const projects = require("./projectsHTML");
const blog = require("./blogHTML");
const resume = require("./resumeHTML");
const contact = require("./contactHTML");

const innerHTMLDB = [main, projects, blog, resume, contact];

module.exports = innerHTMLDB
},{"./blogHTML":1,"./contactHTML":2,"./mainHTML":4,"./projectsHTML":5,"./resumeHTML":6}],4:[function(require,module,exports){
//Author: Paul Ellis; Purpose: Main page html to be loaded on request

const mainHTML = {
    "id": {
        enumerable: true,
        value: "nav_home"
    },
    "inner": {
        enumerable: true,
        value: `
        <header id="jumbotron" class="d-flex flex-row jumbotron mb-3 mt-3 mr-5 ml-5 boxShadow">
        <div>
          <img id="headShot" class="img-rounded float-left mr-3" src="../images/hs-pic.jpg">
        </div>
        <div class="d-flex flex-column justify-content-center">
          <h1 class="headerText">Paul Ellis</h1>
          <h5 class="text-muted headerText">Junior Developer Apprentice</h5>
        </div>
      </header>
      <div class="container mt-3">
  
        <div id="mainText" class="container-fluid row mt-4 mb-5 pb-5 contentBoxes">
          <blockquote id="pullQuote" class="col-md-4 text-center">"I get my greatest sense of accomplishment in understanding and then providing for a need, and I love the idea of
            earning a living by creating and maintaining something genuinely needed." </blockquote>
          <article class="col-md-8 text-left pt-1 pl-4 ">Hi! I’m Paul, and yes, that photo is actually me from the 90s.
            <br>
            <br>I’ve lived in Nashville since 2001 and worked in law enforcement since 2008. After nearly a decade in the field,
            I was ready for a change. The question was: What career could still challenge me and provide a way to serve the
            Nashville community?
            <br>
            <br> Coding.
            <br>
            <br>While considering my career change, I heard about Nashville Software School at a dinner and started looking into
            it. Of course the demand and good pay of the field got my attention, but what really drew me in was the dignity
            in the work. I read an article that said coding is the new blue collar field. For some people “blue collar” might
            be an insult, but I find that kind of work honorable, satisfying, and sadly rare in the job market. It’s honest,
            needed, skilled work for creative thinkers. I get my greatest sense of accomplishment in understanding and then
            providing for a need, and I love the idea of earning a living by creating and maintaining something genuinely needed.
            Beyond that, I get energy from being around people and do some of my best thinking with others…and from what I
            hear, coding is a team sport. Maybe I can join your team. </article>
        </div>
  
      </div>
        `
    }
}

module.exports = mainHTML
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
//Author: Paul Ellis; Purpose: Object of listeners
const loadMods = require("./load-mods");

const listeners = {
    "nav": () => Array.from(document.getElementsByClassName("nav-link")).forEach(
        link => link.addEventListener("click", loadMods.pageLoads)
    )

}

module.exports = listeners
},{"./load-mods":8}],8:[function(require,module,exports){
//Author: Paul Ellis; Purpose: Function to get innerHTML to be populated

const innerHTMLDB = require("../innerHTML/innerHTMLDB")

const loaders = {
    "pageLoads": (event) => {$("#target").html(innerHTMLDB.find(mod => event.target.id === mod.id.value).inner.value)},
    "homeLoad": () => {$("#target").html(innerHTMLDB.find(mod => mod.id.value === "nav_home").inner.value)}
}

module.exports = loaders
},{"../innerHTML/innerHTMLDB":3}],9:[function(require,module,exports){
const loadMods = require("./load-mods");//object of load methods
const listener = require("./listeners");//object of listener methods

loadMods.homeLoad();//load landing page content when site is first visited
listener.nav()//listens for click event on any of the nav links. on event, loads that page's content
},{"./listeners":7,"./load-mods":8}]},{},[9]);
