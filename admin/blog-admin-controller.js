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
    let addedBlogTitle = document.getElementById("newBlogTitle");//get what was typed into title
    let addedBlogText = document.getElementById("newBlogText");//get date that was selected
    let addedBlogDate = document.getElementById("newBlogDate");//get text that was typed into blog
    const newestBlog = generateBlog(addedBlogTitle.value, addedBlogDate.value, addedBlogText.value);//pass values above into blog factory
    retrievedBlogDBAdmin.unshift(newestBlog);//push the new blog to the front of the line in the blog array
    localStorage.setItem("blogString", JSON.stringify(retrievedBlogDBAdmin));//send the updated array back to storage
    console.log(retrievedBlogDBAdmin)
    addedBlogTitle.value = "";
    addedBlogText.value = "";
    addedBlogDate.value = "";
})