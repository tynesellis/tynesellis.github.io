const retrievedResume = JSON.parse(localStorage.getItem("resumeDB"));//retrieve DB of resume information in an array
let resumeHTML = document.getElementById("resume");//targets area of DOM to send new content

for (let obj = 0; obj < retrievedResume.length; obj++) {
    let currentObject = retrievedResume[obj];
    resumeHTML.innerHTML += `
    <article class="d-flex flex-column" id="resumeHead">
    <h1 class="resumeTags">${currentObject.name}</h1>
    <h5 class="resumeTags"><a id="email" href="mailto:${currentObject.email}">${currentObject.email}</a></h5>
    <h2 class="resumeTags sectionHeads">${currentObject.work}</h1>
    </article>

    <article class="d-flex flex-column" id="mnpd">
    <h3 class="resumeTags">${currentObject.job1}</h3>
    <h5 class="resumeTags">${currentObject.job1dates}</h5>
    <h4 class="resumeTags">Roles within the Department:</h4>
    <h5 class="resumeTags">${currentObject.job1role1}</h5>
    <h5 class="resumeTags">${currentObject.job1role2}</h5>
    <h5 class="resumeTags">${currentObject.job1role3}</h5>
    </article>
    
    <article class="d-flex flex-column" id="dell">
    <h3 class="resumeTags">${currentObject.job2}</h3>
    <h5 class="resumeTags">${currentObject.job2dates}</h5>
    <h4 class="resumeTags">Roles within the Department:</h4>
    <h5 class="resumeTags">${currentObject.job2role1}</h5>
    <h5 class="resumeTags">${currentObject.job2role2}</h5>
    </article>
    
    <article class="d-flex flex-column" id="education">    
    <h2 class="resumeTags sectionHeads">${currentObject.education}</h2>
    <h5 class="resumeTags">${currentObject.school}</h5>
    <h5 class="resumeTags">${currentObject.degree}</h5>
    </article>
    
    `;
    
}



