const loadMods = require("./load-mods");//object of load methods
const listener = require("./listeners");//object of listener methods

loadMods.homeLoad();//load landing page content when site is first visited
listener.nav()//listens for click event on any of the nav links. on event, loads that page's content