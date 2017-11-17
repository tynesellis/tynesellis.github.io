//Author: Paul Ellis; Purpose: Object of listeners
const loadMods = require("./load-mods");

const listeners = {
    "nav": () => Array.from(document.getElementsByClassName("nav-link")).forEach(
        link => link.addEventListener("click", loadMods.pageLoads)
    )

}

module.exports = listeners