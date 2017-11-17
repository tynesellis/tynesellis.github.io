//Author: Paul Ellis; Purpose: Main db of innerHTML to be populated on click events

const main = require("./mainHTML");
const projects = require("./projectsHTML");
const blog = require("./blogHTML");
const resume = require("./resumeHTML");
const contact = require("./contactHTML");

const innerHTMLDB = [main, projects, blog, resume, contact];

module.exports = innerHTMLDB