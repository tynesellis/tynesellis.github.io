const blogEditEvent = () => {
    const blogEditButtons = document.getElementsByClassName("editBlog");//get array of the edit buttons
    Array.from(blogEditButtons).forEach(button => {
        button.addEventListener("click", event => {
            let matchingBlog = retrievedBlogDBAdmin.find(blog => blog.blogID == event.target.id);
            blogIDtoEdit.value = matchingBlog.blogID;
            blogTitletoEdit.value = matchingBlog.name;
            blogDatetoEdit.value = matchingBlog.published;
            blogTexttoEdit.value = matchingBlog.text;
        })
    });
}