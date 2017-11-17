//Author: Paul Ellis; Purpose: Function to get innerHTML to be populated

const innerHTMLDB = require("../innerHTML/innerHTMLDB")
const contact = require("./contact-controller")

const loaders = {
    "pageLoads": (event, pop) => {
        $("#target").html(innerHTMLDB.find(mod => event.target.id === mod.id.value).inner.value)
        contact()
    },
    "homeLoad": () => {$("#target").html(innerHTMLDB.find(mod => mod.id.value === "nav_home").inner.value)}
}

module.exports = loaders