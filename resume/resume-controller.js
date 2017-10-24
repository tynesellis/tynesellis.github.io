const retrievedResume = JSON.parse(localStorage.getItem("resumeDB"));//retrieve DB of resume information in an array
let resumeHTML = document.getElementById("resume");//targets area of DOM to send new content

for (let obj = 0; obj < retrievedResume.length; obj++) {
    let currentObject = retrievedResume[obj];
    resumeHTML.innerHTML += `
    <h1 class="resumeTags">${currentObject.name}</h1>
    <h5 class="resumeTags"><a href="mailto:${currentObject.email}">${currentObject.email}</a></h5>
    <article class="resumeTags">${currentObject.introText}</article>
    <h1 class="resumeTags">${currentObject.work}</h1>
    <h3 class="resumeTags">${currentObject.job1}</h3>
    <h4 class="resumeTags">${currentObject.job1dates}</h4>
    <h4 class="resumeTags">Roles within the Department:</h4>
    <h5 class="resumeTags">${currentObject.job1role1}</h5>
    <article class="resumeTags">${currentObject.job1role1text}</article>
    <h5 class="resumeTags">${currentObject.job1role2}</h5>
    <article class="resumeTags">${currentObject.job1role2text}</article>
    <h5 class="resumeTags">${currentObject.job1role3}</h5>
    <article class="resumeTags">${currentObject.job1role3text}</article>

    <h3 class="resumeTags">${currentObject.job2}</h3>
    <h4 class="resumeTags">${currentObject.job2dates}</h4>
    <h4 class="resumeTags">Roles within the Department:</h4>
    <h5 class="resumeTags">${currentObject.job2role1}</h5>
    <article class="resumeTags">${currentObject.job2role1text}</article>
    <h5 class="resumeTags">${currentObject.job2role2}</h5>
    <article class="resumeTags">${currentObject.job2role2text}</article>
    
    <h3 class="resumeTags">${currentObject.education}</h3>
    <h4 class="resumeTags">${currentObject.school}</h4>
    <h4 class="resumeTags">${currentObject.degree}</h4>

    `;
    
}



