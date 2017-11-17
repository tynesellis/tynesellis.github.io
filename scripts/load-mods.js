//Author: Paul Ellis; Purpose: Function to get innerHTML to be populated

const innerHTMLDB = require("../innerHTML/innerHTMLDB")

const loaders = {
    "pageLoads": (event) => {$("#target").html(innerHTMLDB.find(mod => event.target.id === mod.id.value).inner.value)},
    "homeLoad": () => {$("#target").html(innerHTMLDB.find(mod => mod.id.value === "nav_home").inner.value)}
}

module.exports = loaders