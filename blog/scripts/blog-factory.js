//For anyone checking out this repo: New blogs are hard coded into the array below
//There is a modal on the blogs page that allows blogs to be added into browser storage
//However, that only works on one computer at a time, so you will need to load the page
//on your computer to create your own version and play with the add blogs modal

//contains each blog added

const blogObjects = [
    {
        "blogID": {
            enumerable: true,
            value: 6,
        },
        "name": {
            enumerable: true,
            value: "Week Filler 4"
        },
        "published": {
            enumerable: true,
            value: "10/zz/2017"
        },
        "text": {
            enumerable: true,
            value: "With week one in the bag, I can already tell this is going to fly by.  The ice broke quickly on day one, and by day two we were jumping in.  We were introduced (or reintroduced) to the multiverse of objects and functions and objects and git….and objects (they’re everywhere).  I get the feeling it’s only going to accelerate from here, but I’m not discouraged.  I’m glad.  Six months isn’t a lot of time, and I want to get everything I can from this program. There will likely be frustrations, as there already have been…like I said, we dove in.<br><br>  I hope we will all keep a perspective of training and learning, rather than attempt and failure.  I’ve had days when I went the the gym and phoned it in, and I’ve had days where I didn’t hold anything back.  In the first case, I felt fine the next day.  In the second…not so much.  But when I didn’t feel the strain of pushing myself and growing from it, I felt like I had wasted my time.  When I pushed myself, I felt a pride in my work, despite being a little beat up from it.  I hope we can all see and remind each other that the struggle is good and that it’s not a sign of failure but of progress."
        }
    },
    {
        "blogID": {
            enumerable: true,
            value: 5,
        },
        "name": {
            enumerable: true,
            value: "Week Filler 3"
        },
        "published": {
            enumerable: true,
            value: "10/zz/2017"
        },
        "text": {
            enumerable: true,
            value: "With week one in the bag, I can already tell this is going to fly by.  The ice broke quickly on day one, and by day two we were jumping in.  We were introduced (or reintroduced) to the multiverse of objects and functions and objects and git….and objects (they’re everywhere).  I get the feeling it’s only going to accelerate from here, but I’m not discouraged.  I’m glad.  Six months isn’t a lot of time, and I want to get everything I can from this program. There will likely be frustrations, as there already have been…like I said, we dove in.<br><br>  I hope we will all keep a perspective of training and learning, rather than attempt and failure.  I’ve had days when I went the the gym and phoned it in, and I’ve had days where I didn’t hold anything back.  In the first case, I felt fine the next day.  In the second…not so much.  But when I didn’t feel the strain of pushing myself and growing from it, I felt like I had wasted my time.  When I pushed myself, I felt a pride in my work, despite being a little beat up from it.  I hope we can all see and remind each other that the struggle is good and that it’s not a sign of failure but of progress."
        }
    },
    {
        "blogID": {
            enumerable: true,
            value: 4,
        },
        "name": {
            enumerable: true,
            value: "Week Filler 2"
        },
        "published": {
            enumerable: true,
            value: "10/zz/2017"
        },
        "text": {
            enumerable: true,
            value: "With week one in the bag, I can already tell this is going to fly by.  The ice broke quickly on day one, and by day two we were jumping in.  We were introduced (or reintroduced) to the multiverse of objects and functions and objects and git….and objects (they’re everywhere).  I get the feeling it’s only going to accelerate from here, but I’m not discouraged.  I’m glad.  Six months isn’t a lot of time, and I want to get everything I can from this program. There will likely be frustrations, as there already have been…like I said, we dove in.<br><br>  I hope we will all keep a perspective of training and learning, rather than attempt and failure.  I’ve had days when I went the the gym and phoned it in, and I’ve had days where I didn’t hold anything back.  In the first case, I felt fine the next day.  In the second…not so much.  But when I didn’t feel the strain of pushing myself and growing from it, I felt like I had wasted my time.  When I pushed myself, I felt a pride in my work, despite being a little beat up from it.  I hope we can all see and remind each other that the struggle is good and that it’s not a sign of failure but of progress."
        }
    },
    {
        "blogID": {
            enumerable: true,
            value: 3,
        },
        "name": {
            enumerable: true,
            value: "Week Filler 1"
        },
        "published": {
            enumerable: true,
            value: "10/zz/2017"
        },
        "text": {
            enumerable: true,
            value: "With week one in the bag, I can already tell this is going to fly by.  The ice broke quickly on day one, and by day two we were jumping in.  We were introduced (or reintroduced) to the multiverse of objects and functions and objects and git….and objects (they’re everywhere).  I get the feeling it’s only going to accelerate from here, but I’m not discouraged.  I’m glad.  Six months isn’t a lot of time, and I want to get everything I can from this program. There will likely be frustrations, as there already have been…like I said, we dove in.<br><br>  I hope we will all keep a perspective of training and learning, rather than attempt and failure.  I’ve had days when I went the the gym and phoned it in, and I’ve had days where I didn’t hold anything back.  In the first case, I felt fine the next day.  In the second…not so much.  But when I didn’t feel the strain of pushing myself and growing from it, I felt like I had wasted my time.  When I pushed myself, I felt a pride in my work, despite being a little beat up from it.  I hope we can all see and remind each other that the struggle is good and that it’s not a sign of failure but of progress."
        }
    },
    {
        "blogID": {
            enumerable: true,
            value: 2,
        },
        "name": "Weeks Two and Three",
        "published": "10/22/2017",
        "text": "The last few weeks were the start of our sprints and group projects. It’s been a goldmine of learning and solidifying practices. The Github flow rhythm took a little getting used to, but, after a few pull and push disasters, we all started to figure out the steps. We also learned the importance of keeping the laptop closed and doing some solid white-boarding. It’s an investment that saves a lot of time down the road. The group dynamic gave an exponential return for what each person brought to the table. It took both what we knew and didn’t know individually, mixed it all together, and sent each of us back out with a new knowledge base equal to the contributions of the entire group. As we struggled through what we didn’t know or what we thought we knew but didn’t, the new concepts sunk into brain and muscle memory. I’m looking forward to the next project."
    },
    {
        "blogID": {
            enumerable: true,
            value: 1,
        },
        "name": {
            enumerable: true,
            value: "Week One"
        },
        "published": {
            enumerable: true,
            value: "10/08/2017"
        },
        "text": {
            enumerable: true,
            value: "With week one in the bag, I can already tell this is going to fly by.  The ice broke quickly on day one, and by day two we were jumping in.  We were introduced (or reintroduced) to the multiverse of objects and functions and objects and git….and objects (they’re everywhere).  I get the feeling it’s only going to accelerate from here, but I’m not discouraged.  I’m glad.  Six months isn’t a lot of time, and I want to get everything I can from this program. There will likely be frustrations, as there already have been…like I said, we dove in.<br><br>  I hope we will all keep a perspective of training and learning, rather than attempt and failure.  I’ve had days when I went the the gym and phoned it in, and I’ve had days where I didn’t hold anything back.  In the first case, I felt fine the next day.  In the second…not so much.  But when I didn’t feel the strain of pushing myself and growing from it, I felt like I had wasted my time.  When I pushed myself, I felt a pride in my work, despite being a little beat up from it.  I hope we can all see and remind each other that the struggle is good and that it’s not a sign of failure but of progress."
        }
    },
]

if (localStorage.getItem("blogString") === null) {
    const blogDBString = JSON.stringify(blogObjects);
    localStorage.setItem("blogString", blogDBString);
}