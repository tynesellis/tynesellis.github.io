//Author: Paul Ellis; Purpose: Object of listeners

const listeners = {
    "nav": {
        value: (f) => Array.from(document.getElementsByClassName("nav-link")).forEach(link => link.addEventListener("click", f))
    }
}

module.exports = listeners