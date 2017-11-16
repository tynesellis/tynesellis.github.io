//Author: Paul Ellis; Purpose: Function to populate pages

const listeners = require("./listeners")
const load = require("./load-mod")

const loaders = {
    "loader": {
        value: () => listeners.nav(load)
    }
}

module.exports = loaders