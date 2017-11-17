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
            <article class="d-flex flex-column" id="resumeHead">
                <h1 class="resumeTags">Paul Ellis</h1>
                <h5 class="resumeTags"><a id="email" href="mailto:tynesellis@icloud.com">tynesellis@icloud.com</a></h5>
                <h2 class="resumeTags sectionHeads">Professional Experience</h2>
            </article>

        <article class="d-flex flex-column" id="mnpd">
            <h3 class="resumeTags">Metropolitan Nashville Police Department</h3>
            <h5 class="resumeTags">Dates of Employment: June, 2008 - September, 2017</h5>
            <h4 class="resumeTags">Roles within the Department:</h4>
            <h5 class="resumeTags">Field Operations Bureau | Patrol Officer</h5>
            <h5 class="resumeTags">Field Operations Bureau | Midnight Flex Team Officer</h5>
            <h5 class="resumeTags">Criminal Investigations Division | Domestic Violence Detective</h5>
        </article>

        <article class="d-flex flex-column" id="dell">
            <h3 class="resumeTags">Dell, Inc.</h3>
            <h5 class="resumeTags">Dates of Employment: July, 2006 - June, 2008</h5>
            <h4 class="resumeTags">Roles within the Department:</h4>
            <h5 class="resumeTags">Sales Representative | Business Sales Division</h5>
            <h5 class="resumeTags">Account Manager | Business Sales Division</h5>
        </article>

        <article class="d-flex flex-column" id="education">    
            <h2 class="resumeTags sectionHeads">Education</h2>
            <h5 class="resumeTags">Lipscomb University</h5>
            <h5 class="resumeTags">B.A. Communications | Journalism Concentration | Public Relations Minor</h5>
        </article>

        </section>
    </div>
        `
    }
}

module.exports = resumeHTML