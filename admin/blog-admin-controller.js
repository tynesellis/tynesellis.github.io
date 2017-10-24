const retrievedBlogDBAdmin = JSON.parse(localStorage.getItem("blogString"));//get blog DB from storage(array of objects)

//get new blogs from modal input and add them to DB

const generateBlog = function(title, date, text) {//factory for blog objects that match database structure
    return Object.create(null, {
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

document.getElementById("addBlog").addEventListener("click", function(event){//listen for click on the button that opens a new blog form
    const addedBlogTitle = document.getElementById("newBlogTitle").value;//get what was typed into title
    const addedBlogText = document.getElementById("newBlogText").value;//get date that was selected
    const addedBlogDate = document.getElementById("newBlogDate").value;//get text that was typed into blog
    const newestBlog = generateBlog(addedBlogTitle, addedBlogDate, addedBlogText);//pass values above into blog factory
    retrievedBlogDBAdmin.unshift(newestBlog);//push the new blog to the front of the line in the blog array
    localStorage.setItem("blogString", JSON.stringify(retrievedBlogDBAdmin))//send the updated array back to storage
})