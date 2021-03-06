//For anyone checking out this repo: New blogs are hard coded into the array below
//There is a modal on the blogs page that allows blogs to be added into browser storage
//However, that only works on one computer at a time, so you will need to load the page
//on your computer to create your own version and play with the add blogs modal
const blogObjects = [];

const blogIdGenerator = function* () {
    let uniqueId = 1

    while (true) {
        yield uniqueId
        uniqueId += 1
    }
}
const blogIdFactory = blogIdGenerator()

//get new blogs from modal input and add them to DB

const generateBlog = function (id, title, date, text) {//factory for blog objects that match database structure
    return Object.create(null, {
        "blogID": {
            enumerable: true,
            value: id
        },
        "name": {
            enumerable: true,
            value: title
        },
        "published": {
            enumerable: true,
            value: date
        },
        "text": {
            enumerable: true,
            value: text
        }
    })
};

blogObjects.unshift(generateBlog(blogIdFactory.next().value, "Week One", "10/08/2017", "With week one in the bag, I can already tell this is going to fly by.  The ice broke quickly on day one, and by day two we were jumping in.  We were introduced (or reintroduced) to the multiverse of objects and functions and objects and git….and objects (they’re everywhere).  I get the feeling it’s only going to accelerate from here, but I’m not discouraged.  I’m glad.  Six months isn’t a lot of time, and I want to get everything I can from this program. There will likely be frustrations, as there already have been…like I said, we dove in.<br><br>  I hope we will all keep a perspective of training and learning, rather than attempt and failure.  I’ve had days when I went the the gym and phoned it in, and I’ve had days where I didn’t hold anything back.  In the first case, I felt fine the next day.  In the second…not so much.  But when I didn’t feel the strain of pushing myself and growing from it, I felt like I had wasted my time.  When I pushed myself, I felt a pride in my work, despite being a little beat up from it.  I hope we can all see and remind each other that the struggle is good and that it’s not a sign of failure but of progress."))
blogObjects.unshift(generateBlog(blogIdFactory.next().value, "Weeks Two and Three", "10/22/2017", "The last few weeks were the start of our sprints and group projects. It’s been a goldmine of learning and solidifying practices. The Github flow rhythm took a little getting used to, but, after a few pull and push disasters, we all started to figure out the steps. We also learned the importance of keeping the laptop closed and doing some solid white-boarding. It’s an investment that saves a lot of time down the road. The group dynamic gave an exponential return for what each person brought to the table. It took both what we knew and didn’t know individually, mixed it all together, and sent each of us back out with a new knowledge base equal to the contributions of the entire group. As we struggled through what we didn’t know or what we thought we knew but didn’t, the new concepts sunk into brain and muscle memory. I’m looking forward to the next project."))
blogObjects.unshift(generateBlog(blogIdFactory.next().value, "Week Filler 1", "10/zz/2017", "Hodor hodor - HODOR hodor, hodor HODOR hodor, hodor hodor, hodor. Hodor hodor?! Hodor. Hodor hodor... Hodor hodor HODOR hodor, hodor HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor HODOR! Hodor hodor HODOR hodor, hodor hodor hodor hodor? Hodor! Hodor hodor, hodor... Hodor hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor? Hodor, hodor - hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor hodor, hodor. Hodor hodor hodor! Hodor. Hodor hodor hodor, hodor. Hodor hodor. ."))
blogObjects.unshift(generateBlog(blogIdFactory.next().value, "Week Filler 2", "10/zz/2017", "These are the voyages of the Starship Enterprise. Its continuing mission, to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before. We need to neutralize the homing signal. Each unit has total environmental control, gravity, temperature, atmosphere, light, in a protective field. Sensors show energy readings in your area. We had a forced chamber explosion in the resonator coil. Field strength has increased by 3,000 percent.."))
blogObjects.unshift(generateBlog(blogIdFactory.next().value, "Week Filler 3", "10/zz/2017", "Pooping rainbow while flying in a toasted bread costume in space chase ball of string chew foot, and poop on grasses. Why must they do that flop over. Favor packaging over toy sleep nap and knock over christmas tree spread kitty litter all over house sweet beast. Use lap as chair give attitude poop on grasses sleep nap. Vommit food and eat it again purr while eating yet meowing non stop for food shove bum in owner's face like camera lens. Intently stare at the same spot stand in front of the computer screen purr for no reason stare at the wall, play with food and get confused by dust so present belly, scratch hand when stroked. Intrigued by the shower have secret plans. Sweet beast find something else more interesting, or stare at ceiling. Leave dead animals as gifts find something else more interesting. Lick butt. Sleep in the bathroom sink why must they do that. Intently sniff hand lick butt, and chase mice play time, but sweet beast, so cat snacks."))
blogObjects.unshift(generateBlog(blogIdFactory.next().value, "Week Filler 4", "10/zz/2017", "They were four men living all together yet they were all alone. Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. Well we're movin' on up to the east side to a deluxe apartment in the sky. A man is born he's a man of means. Then along come two they got nothin' but their jeans. In a freak mishap Ranger 3 and its pilot Captain William Buck Rogers are blown out of their trajectory into an orbit which freezes his life support systems and returns Buck Rogers to Earth five-hundred years later. Fleeing from the Cylon tyranny the last Battlestar – Galactica - leads a rag-tag fugitive fleet on a lonely quest - a shining planet known as Earth."))



    // {
    //     "blogID": 6,
    //     "name": "Week Filler 4",
    //     "published": "10/zz/2017",
    //     "text": "They were four men living all together yet they were all alone. Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. Well we're movin' on up to the east side to a deluxe apartment in the sky. A man is born he's a man of means. Then along come two they got nothin' but their jeans. In a freak mishap Ranger 3 and its pilot Captain William Buck Rogers are blown out of their trajectory into an orbit which freezes his life support systems and returns Buck Rogers to Earth five-hundred years later. Fleeing from the Cylon tyranny the last Battlestar – Galactica - leads a rag-tag fugitive fleet on a lonely quest - a shining planet known as Earth."
    // },
    // {
    //     "blogID": 5,
    //     "name": "Week Filler 3",
    //     "published": "10/zz/2017",
    //     "text": "Pooping rainbow while flying in a toasted bread costume in space chase ball of string chew foot, and poop on grasses. Why must they do that flop over. Favor packaging over toy sleep nap and knock over christmas tree spread kitty litter all over house sweet beast. Use lap as chair give attitude poop on grasses sleep nap. Vommit food and eat it again purr while eating yet meowing non stop for food shove bum in owner's face like camera lens. Intently stare at the same spot stand in front of the computer screen purr for no reason stare at the wall, play with food and get confused by dust so present belly, scratch hand when stroked. Intrigued by the shower have secret plans. Sweet beast find something else more interesting, or stare at ceiling. Leave dead animals as gifts find something else more interesting. Lick butt. Sleep in the bathroom sink why must they do that. Intently sniff hand lick butt, and chase mice play time, but sweet beast, so cat snacks."
    // },
    // {
    //     "blogID": 4,
    //     "name": "Week Filler 2",
    //     "published": "10/zz/2017",
    //     "text": "These are the voyages of the Starship Enterprise. Its continuing mission, to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before. We need to neutralize the homing signal. Each unit has total environmental control, gravity, temperature, atmosphere, light, in a protective field. Sensors show energy readings in your area. We had a forced chamber explosion in the resonator coil. Field strength has increased by 3,000 percent.."
    // },
    // {
    //     "blogID": 3,
    //     "name": "Week Filler 1",
    //     "published": "10/zz/2017",
    //     "text": "Hodor hodor - HODOR hodor, hodor HODOR hodor, hodor hodor, hodor. Hodor hodor?! Hodor. Hodor hodor... Hodor hodor HODOR hodor, hodor HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor HODOR! Hodor hodor HODOR hodor, hodor hodor hodor hodor? Hodor! Hodor hodor, hodor... Hodor hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor? Hodor, hodor - hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor hodor, hodor. Hodor hodor hodor! Hodor. Hodor hodor hodor, hodor. Hodor hodor. ."
    // },
    // {
    //     "blogID": 2,
    //     "name": "Weeks Two and Three",
    //     "published": "10/22/2017",
    //     "text": "The last few weeks were the start of our sprints and group projects. It’s been a goldmine of learning and solidifying practices. The Github flow rhythm took a little getting used to, but, after a few pull and push disasters, we all started to figure out the steps. We also learned the importance of keeping the laptop closed and doing some solid white-boarding. It’s an investment that saves a lot of time down the road. The group dynamic gave an exponential return for what each person brought to the table. It took both what we knew and didn’t know individually, mixed it all together, and sent each of us back out with a new knowledge base equal to the contributions of the entire group. As we struggled through what we didn’t know or what we thought we knew but didn’t, the new concepts sunk into brain and muscle memory. I’m looking forward to the next project."
    // },
    // {
    //     "blogID": 1,
    //     "name": "Week One",
    //     "published": "10/08/2017",
    //     "text": "With week one in the bag, I can already tell this is going to fly by.  The ice broke quickly on day one, and by day two we were jumping in.  We were introduced (or reintroduced) to the multiverse of objects and functions and objects and git….and objects (they’re everywhere).  I get the feeling it’s only going to accelerate from here, but I’m not discouraged.  I’m glad.  Six months isn’t a lot of time, and I want to get everything I can from this program. There will likely be frustrations, as there already have been…like I said, we dove in.<br><br>  I hope we will all keep a perspective of training and learning, rather than attempt and failure.  I’ve had days when I went the the gym and phoned it in, and I’ve had days where I didn’t hold anything back.  In the first case, I felt fine the next day.  In the second…not so much.  But when I didn’t feel the strain of pushing myself and growing from it, I felt like I had wasted my time.  When I pushed myself, I felt a pride in my work, despite being a little beat up from it.  I hope we can all see and remind each other that the struggle is good and that it’s not a sign of failure but of progress."
    // },


if (localStorage.getItem("blogString") === null) {
    const blogDBString = JSON.stringify(blogObjects);
    localStorage.setItem("blogString", blogDBString);
}