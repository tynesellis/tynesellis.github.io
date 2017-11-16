//Author: Paul Ellis; Purpose: Function to get innerHTML to be populated

const innerHTMLDB = require("../innerHTML/innerHTMLDB")

const getAndLoad = () => {
    const targetDiv = document.getElementById("target");
    const match = innerHTMLDB.find(mod => event.target.id === mod.id.value)
    targetDiv.innerHTML = match.inner.value;
}

module.exports = getAndLoad