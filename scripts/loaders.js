//Author: Paul Ellis; Purpose: Function to populate pages

const listeners = require("./listeners")
const load = require("./load-mod")

const loaders = {
    "load": {value: listeners.nav.value()}
}

module.exports = loaders