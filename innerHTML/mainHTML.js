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